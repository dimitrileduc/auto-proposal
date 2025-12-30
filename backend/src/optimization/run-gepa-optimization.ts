/**
 * /backend/src/optimization/run-gepa-optimization.ts
 *
 * Optimisation GEPA multi-objectifs (Recall ≥90%, Precision ≥40%, WMAPE ≤25%)
 *
 * Usage:
 *   npx tsx src/optimization/run-gepa-optimization.ts
 *
 * Env vars:
 *   MAX_EXAMPLES=5000   (défaut: 5000)
 *   NUM_TRIALS=50       (défaut: 50)
 *   TRAIN_SPLIT=0.8     (défaut: 80% train, 20% val)
 *   DRY_RUN=true        (extraction uniquement)
 *   USE_COMBINED=true   (métrique combinée au lieu de multi-objectifs)
 */

import "dotenv/config";
import { writeFileSync, mkdirSync } from "fs";
import { ax, AxGEPA } from "@ax-llm/ax";
import { studentLLM, MODEL } from "./ax-config.js";
import { extractExamples, saveExamplesToFile } from "./extract-examples.js";
import {
  gepaMultiObjectiveMetric,
  gepaCombinedMetric,
  calculateAggregateMetrics,
} from "./gepa-metric.js";

// Configuration
const MAX_EXAMPLES = parseInt(process.env.MAX_EXAMPLES || "5000");
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "20"); // Augmenté à 20 par défaut
const TRAIN_SPLIT = parseFloat(process.env.TRAIN_SPLIT || "0.8");
const DRY_RUN = process.env.DRY_RUN === "true";
const USE_COMBINED_METRIC = process.env.USE_COMBINED === "true"; // Fallback

const JSON_PATH = "./analysis-folder/predictions-v2-all-clients.json";
const OUTPUT_DIR = "./optimization-results";

async function main() {
  console.log("=".repeat(60));
  console.log("  GEPA Multi-Objective Optimization");
  console.log("=".repeat(60));
  console.log(`\nObjectifs:`);
  console.log(`  - Recall: ≥90% (PRIORITÉ)`);
  console.log(`  - Precision: ≥40%`);
  console.log(`  - WMAPE: ≤25%`);
  console.log(`\nConfig: ${MAX_EXAMPLES} exemples, ${NUM_TRIALS} trials, split ${TRAIN_SPLIT}\n`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Extraction
  console.log("1. Extraction des exemples...");
  const allExamples = await extractExamples(JSON_PATH, {
    maxExamples: MAX_EXAMPLES,
    diversify: true,
    minOrderCount: 2,
  });
  console.log(`   Total: ${allExamples.length} exemples\n`);

  // 2. Split train/val (MODIFIÉ: 150 train max, reste en validation)
  const maxTrainSize = 150;
  const trainExamples = allExamples.slice(0, Math.min(maxTrainSize, allExamples.length));
  const valExamples = allExamples.slice(trainExamples.length);

  console.log(`   Train: ${trainExamples.length}, Val: ${valExamples.length}\n`);

  saveExamplesToFile(trainExamples, `${OUTPUT_DIR}/training-examples-gepa-train.json`);
  saveExamplesToFile(valExamples, `${OUTPUT_DIR}/training-examples-gepa-val.json`);

  if (DRY_RUN) {
    console.log("Mode DRY_RUN: arrêt avant optimisation.");
    return;
  }

  // 3. Créer programme avec signature orientée RECALL
  // ⚠️ SEED pour GEPA: donner direction initiale vers Recall élevé
  const gepaSignature = `
"Contexte: Supply Chain B2B - Expert en prédiction de réapprovisionnement.

🎯 OBJECTIF PRIORITAIRE: RECALL MAXIMAL (90%+)
⚠️ Il vaut MIEUX commander trop (Faux Positif) que créer une rupture (Faux Négatif).
📊 Si DOUTE sur le cycle → COMMANDER (principe de précaution B2B).

Analyser: cycle de commande, risque rupture horizon 30j, quantité de la PROCHAINE commande (pas cumul).
Historique récent = poids fort, médiane robuste aux outliers, N-1 informe saisonnalité."

productName:string "Nom du produit",
recentOrders:string "Historique récent (5 mois)",
lastYearOrders:string "Historique N-1 (saisonnalité)",
currentDate:string "Date d'analyse"
->
quantity:number "Quantité prochaine commande (0 si non probable)",
reasoning:string "1) Risque rupture? 2) Cycle et dernière commande? 3) Quantité estimée et pourquoi?"
`;

  const stockPredictor = ax(gepaSignature);

  // 4. Préparer exemples
  const axTrainExamples = trainExamples.map((ex) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    quantity: ex.quantity,
    reasoning: "",
  }));

  const axValExamples = valExamples.map((ex) => ({ ...ex, reasoning: "" }));

  // 5. Baseline
  console.log("2. Baseline (sans optimisation)...");
  const baselineResults = [];
  for (const ex of axValExamples.slice(0, 20)) {
    const result = await stockPredictor.forward(studentLLM, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });
    baselineResults.push({
      prediction: { quantity: result.quantity || 0 },
      example: {
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
        quantity: ex.quantity,
      },
    });
  }

  const baselineMetrics = calculateAggregateMetrics(baselineResults);
  console.log(`   Recall: ${(baselineMetrics.recall * 100).toFixed(1)}%`);
  console.log(`   Precision: ${(baselineMetrics.precision * 100).toFixed(1)}%`);
  console.log(`   WMAPE: ${baselineMetrics.wmape.toFixed(1)}%\n`);

  // 6. GEPA Optimization
  console.log(`3. GEPA (${NUM_TRIALS} trials)...`);

  const optimizer = new AxGEPA({
    studentAI: studentLLM,
    config: {
      temperature: 0.7, // Baissé (0.9 trop violent, casse le JSON)
    },
    numTrials: NUM_TRIALS,
    minibatch: false, // ⚠️ OBLIGATOIREMENT FALSE (sinon trop lent)
    verbose: true,
  });

  // Utiliser métrique combinée par défaut (meilleur pour WMAPE)
  const metricFn = USE_COMBINED_METRIC ? gepaCombinedMetric : gepaMultiObjectiveMetric;
  console.log(`   Métrique: ${USE_COMBINED_METRIC ? "Combined (Poids équilibrés)" : "Multi-Objective"}\n`);
  console.log(`   Poids: Recall(4x) = Precision(3x) = Accuracy(3x)\n`);

  const startTime = Date.now();
  const result = await optimizer.compile(stockPredictor, axTrainExamples, metricFn as any, {
    maxMetricCalls: 2500, // ⚠️ CRITIQUE: 50 trials × ~50 samples = ~2500 appels
    // Avec 200, GEPA s'arrête au trial 4 !
  });

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Optimisation terminée en ${duration} min`);
  console.log(`   Pareto frontier: ${result.paretoFrontier?.length || 1} solutions`);
  console.log(`   Demos: ${result.demos?.length || 0}`);

  // 🎯 AFFICHER TOUTES LES SOLUTIONS PARETO (pour sélection manuelle)
  if (result.paretoFrontier && result.paretoFrontier.length > 1) {
    console.log(`\n📊 FRONTIÈRE DE PARETO (${result.paretoFrontier.length} solutions):`);
    console.log("Choisir manuellement si la solution auto ne convient pas\n");

    for (let i = 0; i < result.paretoFrontier.length; i++) {
      const solution = result.paretoFrontier[i];
      console.log(`\n--- Solution ${i + 1} ---`);
      console.log(`  Recall: ${((solution.metrics?.recall || 0) * 100).toFixed(1)}%`);
      console.log(`  Precision: ${((solution.metrics?.precision || 0) * 100).toFixed(1)}%`);
      console.log(`  Accuracy: ${((solution.metrics?.accuracy || 0) * 100).toFixed(1)}%`);
      console.log(`  Instruction: ${solution.instruction?.substring(0, 100) || "N/A"}...`);
    }

    console.log("\n💡 Pour utiliser une autre solution:");
    console.log("   1. Copier l'index de la solution (ex: 2)");
    console.log("   2. Modifier stock-predictor-gepa.json:");
    console.log("      savedData.instruction = result.paretoFrontier[INDEX].instruction");
    console.log("      savedData.optimizedProgram = result.paretoFrontier[INDEX]");
  }

  // 7. Validation finale
  console.log("\n4. Validation finale...");

  if (result.optimizedProgram) {
    stockPredictor.applyOptimization(result.optimizedProgram);
  }

  const valResults = [];
  for (const ex of axValExamples.slice(0, 100)) {
    const res = await stockPredictor.forward(studentLLM, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });
    valResults.push({
      prediction: { quantity: res.quantity || 0 },
      example: {
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
        quantity: ex.quantity,
      },
    });
  }

  const valMetrics = calculateAggregateMetrics(valResults);
  console.log(`   Recall: ${(valMetrics.recall * 100).toFixed(1)}% (target ≥90%)`);
  console.log(`   Precision: ${(valMetrics.precision * 100).toFixed(1)}% (target ≥40%)`);
  console.log(`   WMAPE: ${valMetrics.wmape.toFixed(1)}% (target ≤25%)`);

  // 8. Vérification objectifs
  const meetsRecall = valMetrics.recall >= 0.9;
  const meetsPrecision = valMetrics.precision >= 0.4;
  const meetsWMAPE = valMetrics.wmape <= 25.0;

  console.log(`\n📋 Objectifs:`);
  console.log(`   Recall ≥90%: ${meetsRecall ? "✅" : "❌"}`);
  console.log(`   Precision ≥40%: ${meetsPrecision ? "✅" : "❌"}`);
  console.log(`   WMAPE ≤25%: ${meetsWMAPE ? "✅" : "❌"}`);

  if (!meetsRecall || !meetsPrecision || !meetsWMAPE) {
    console.warn("\n⚠️ Objectifs non atteints! Recommandations:");
    if (!meetsRecall) console.warn("   - Augmenter NUM_TRIALS ou ajuster poids recall");
    if (!meetsPrecision) console.warn("   - Vérifier diversité examples (FP rate)");
    if (!meetsWMAPE) console.warn("   - Augmenter poids accuracy dans métrique");
  }

  // 9. Sauvegarder
  const savedData = {
    version: "2.0",
    optimizerType: "gepa",
    optimizedAt: new Date().toISOString(),
    model: MODEL,
    config: {
      maxExamples: MAX_EXAMPLES,
      numTrials: NUM_TRIALS,
      trainSplit: TRAIN_SPLIT,
      metricType: USE_COMBINED_METRIC ? "combined" : "multi-objective",
    },
    objectives: {
      recall: { target: 0.9, achieved: valMetrics.recall, met: meetsRecall },
      precision: { target: 0.4, achieved: valMetrics.precision, met: meetsPrecision },
      wmape: { target: 25.0, achieved: valMetrics.wmape, met: meetsWMAPE },
    },
    baseline: baselineMetrics,
    validation: valMetrics,
    paretoFrontier: result.paretoFrontier || null,
    hypervolume: result.hypervolume || null,
    instruction: result.optimizedProgram?.instruction || result.instruction || null,
    demos: result.demos || [],
    stats: result.stats || null,
    optimizedProgram: result.optimizedProgram,
  };

  writeFileSync(`${OUTPUT_DIR}/stock-predictor-gepa.json`, JSON.stringify(savedData, null, 2));
  console.log("\n💾 Sauvegardé: optimization-results/stock-predictor-gepa.json");
}

main().catch(console.error);
