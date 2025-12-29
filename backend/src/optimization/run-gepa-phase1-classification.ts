/**
 * /backend/src/optimization/run-gepa-phase1-classification.ts
 *
 * GEPA Phase 1: Classification binaire (Precision/Recall)
 * Multi-objectifs Pareto pour trouver le meilleur trade-off
 *
 * Objectifs:
 * - Recall: Détecter toutes les commandes (éviter ruptures)
 * - Precision: Ne pas sur-prédire (éviter surstock inutile)
 *
 * Usage:
 *   npx tsx src/optimization/run-gepa-phase1-classification.ts
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ax, AxGEPA } from "@ax-llm/ax";
import { teacherLLM, studentLLM, MODEL, TEACHER_MODEL } from "./ax-config.js";

// Configuration
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "20");
const TRAIN_SIZE = parseInt(process.env.TRAIN_SIZE || "100");
const VAL_SIZE = parseInt(process.env.VAL_SIZE || "50");

const OUTPUT_DIR = "./optimization-results";

// ============================================================================
// SIGNATURE SIMPLE - GEPA génère l'instruction
// ============================================================================
const classificationSignature = `
productName:string "Nom du produit avec code",
recentOrders:string "Historique des commandes récentes (2025)",
lastYearOrders:string "Historique N-1 (2024)",
currentDate:string "Date d'analyse"
->
willOrder:boolean "true si une commande est probable dans les 30 prochains jours",
reasoning:string "Explication courte du raisonnement"
`;

// ============================================================================
// MÉTRIQUE MULTI-OBJECTIFS PARETO
// ============================================================================
interface MetricInput {
  prediction: { willOrder?: boolean; reasoning?: string };
  example: { quantity: number; [key: string]: any };
}

function classificationMetric({ prediction, example }: MetricInput): { recall: number; precision: number } {
  // Sécurité: si pas de prédiction valide
  if (prediction?.willOrder === undefined || prediction?.willOrder === null) {
    return { recall: 0, precision: 0 };
  }

  const predicted = prediction.willOrder === true;
  const actual = example.quantity > 0;

  // Recall: Si vraie commande, l'a-t-on détectée?
  // - actual=true, predicted=true → 1 (TP)
  // - actual=true, predicted=false → 0 (FN = RUPTURE)
  // - actual=false → 1 (pas applicable, neutre)
  const recall = actual ? (predicted ? 1 : 0) : 1;

  // Precision: Si on prédit une commande, est-ce correct?
  // - predicted=true, actual=true → 1 (TP)
  // - predicted=true, actual=false → 0 (FP = surstock)
  // - predicted=false → 1 (pas applicable, neutre)
  const precision = predicted ? (actual ? 1 : 0) : 1;

  return { recall, precision };
}

// ============================================================================
// FEEDBACK FUNCTION pour guider GEPA
// ============================================================================
function feedbackFn({ prediction, example }: MetricInput): string | string[] {
  const predicted = prediction?.willOrder === true;
  const actual = example.quantity > 0;

  if (predicted === actual) {
    if (predicted) {
      return "✅ Correct: Commande détectée";
    } else {
      return "✅ Correct: Pas de commande prévu";
    }
  } else if (actual && !predicted) {
    return [
      "❌ RUPTURE CRITIQUE: Commande manquée!",
      `Attendu: commande de ${example.quantity}u`,
      "Le client avait besoin de réapprovisionner",
    ];
  } else {
    return [
      "⚠️ Faux positif: Surstock prédit",
      "Pas de commande réelle à cette date",
    ];
  }
}

// ============================================================================
// MAIN
// ============================================================================
async function main() {
  console.log("=".repeat(60));
  console.log("  GEPA Phase 1: Classification (Precision/Recall)");
  console.log("=".repeat(60));
  console.log(`\nConfig:`);
  console.log(`  Teacher: ${TEACHER_MODEL}`);
  console.log(`  Student: ${MODEL}`);
  console.log(`  Trials: ${NUM_TRIALS}`);
  console.log(`  Train: ${TRAIN_SIZE}, Val: ${VAL_SIZE}\n`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Charger les exemples existants
  console.log("1. Chargement des exemples...");

  let allExamples: any[];
  try {
    const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
    const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));
    allExamples = [...trainData, ...valData];
    console.log(`   Chargé: ${allExamples.length} exemples\n`);
  } catch (e) {
    console.error("❌ Fichiers training-examples-gepa-*.json non trouvés");
    console.log("   Lancer d'abord: DRY_RUN=true npx tsx src/optimization/run-gepa-optimization.ts");
    process.exit(1);
  }

  // 2. Split train/val
  const trainExamples = allExamples.slice(0, TRAIN_SIZE);
  const valExamples = allExamples.slice(TRAIN_SIZE, TRAIN_SIZE + VAL_SIZE);

  console.log(`   Train: ${trainExamples.length}, Val: ${valExamples.length}`);

  // Stats des données
  const trainPositives = trainExamples.filter((e) => e.quantity > 0).length;
  const valPositives = valExamples.filter((e) => e.quantity > 0).length;
  console.log(`   Train positifs: ${trainPositives}/${trainExamples.length} (${((trainPositives/trainExamples.length)*100).toFixed(0)}%)`);
  console.log(`   Val positifs: ${valPositives}/${valExamples.length} (${((valPositives/valExamples.length)*100).toFixed(0)}%)\n`);

  // 3. Créer le programme
  const classifier = ax(classificationSignature);

  // 4. Préparer les exemples pour ax (avec label willOrder)
  const axTrainExamples = trainExamples.map((ex) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    willOrder: ex.quantity > 0,
    reasoning: "",
  }));

  const axValExamples = valExamples.map((ex) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    quantity: ex.quantity, // Garder pour la métrique
    willOrder: ex.quantity > 0,
    reasoning: "",
  }));

  // 5. GEPA Optimization
  console.log("2. GEPA Multi-Objectifs (Recall + Precision)...\n");

  const optimizer = new AxGEPA({
    teacherAI: teacherLLM,
    studentAI: studentLLM,
    numTrials: NUM_TRIALS,
    minibatch: true,
    minibatchSize: 15,
    verbose: true,
  });

  const startTime = Date.now();

  const result = await optimizer.compile(
    classifier,
    axTrainExamples,
    classificationMetric as any,
    {
      validationExamples: axValExamples,
      feedbackExamples: axValExamples.slice(0, 20),
      feedbackFn: feedbackFn as any,
      maxMetricCalls: NUM_TRIALS * TRAIN_SIZE * 2,
    }
  );

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Optimisation terminée en ${duration} min`);

  // 6. Afficher la frontière de Pareto
  console.log("\n" + "=".repeat(60));
  console.log("  FRONTIÈRE DE PARETO");
  console.log("=".repeat(60));

  if (result.paretoFront && result.paretoFront.length > 0) {
    console.log(`\n📊 ${result.paretoFront.length} solutions Pareto-optimales:\n`);

    for (let i = 0; i < result.paretoFront.length; i++) {
      const solution = result.paretoFront[i];
      const scores = solution.scores as { recall?: number; precision?: number };
      console.log(`--- Solution ${i + 1} ---`);
      console.log(`  Recall:    ${((scores.recall || 0) * 100).toFixed(1)}%`);
      console.log(`  Precision: ${((scores.precision || 0) * 100).toFixed(1)}%`);
      console.log(`  Instruction: ${(solution as any).instruction?.substring(0, 80) || "N/A"}...`);
      console.log();
    }

    console.log(`📈 Hypervolume: ${result.hypervolume?.toFixed(4) || "N/A"}`);
  } else {
    console.log("Pas de frontière de Pareto disponible");
  }

  // 7. Validation finale avec le meilleur modèle
  console.log("\n" + "=".repeat(60));
  console.log("  VALIDATION FINALE");
  console.log("=".repeat(60));

  if (result.optimizedProgram) {
    classifier.applyOptimization(result.optimizedProgram);
  }

  let tp = 0, fp = 0, fn = 0, tn = 0;

  for (const ex of axValExamples) {
    const res = await classifier.forward(studentLLM, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });

    const predicted = res.willOrder === true;
    const actual = ex.quantity > 0;

    if (predicted && actual) tp++;
    else if (predicted && !actual) fp++;
    else if (!predicted && actual) fn++;
    else tn++;
  }

  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  console.log(`\n📊 Résultats sur validation (${axValExamples.length} exemples):`);
  console.log(`   TP: ${tp}, FP: ${fp}, FN: ${fn}, TN: ${tn}`);
  console.log(`   Recall:    ${(recall * 100).toFixed(1)}% (cible: ≥90%)`);
  console.log(`   Precision: ${(precision * 100).toFixed(1)}% (cible: ≥40%)`);
  console.log(`   F1-Score:  ${(f1 * 100).toFixed(1)}%`);

  // 8. Vérification objectifs
  const meetsRecall = recall >= 0.9;
  const meetsPrecision = precision >= 0.4;

  console.log(`\n📋 Objectifs:`);
  console.log(`   Recall ≥90%:    ${meetsRecall ? "✅" : "❌"}`);
  console.log(`   Precision ≥40%: ${meetsPrecision ? "✅" : "❌"}`);

  // 9. Sauvegarder
  const savedData = {
    version: "1.0",
    phase: "classification",
    optimizerType: "gepa-multi-objective",
    optimizedAt: new Date().toISOString(),
    models: {
      teacher: TEACHER_MODEL,
      student: MODEL,
    },
    config: {
      numTrials: NUM_TRIALS,
      trainSize: TRAIN_SIZE,
      valSize: VAL_SIZE,
    },
    results: {
      tp, fp, fn, tn,
      recall,
      precision,
      f1,
      meetsRecall,
      meetsPrecision,
    },
    paretoFrontSize: result.paretoFront?.length || 0,
    hypervolume: result.hypervolume || null,
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.optimizedProgram?.demos || [],
    bestScore: result.optimizedProgram?.bestScore || null,
    optimizedProgram: result.optimizedProgram,
    paretoFront: result.paretoFront || null,
  };

  const outputPath = `${OUTPUT_DIR}/gepa-phase1-classification.json`;
  writeFileSync(outputPath, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${outputPath}`);

  // 10. Afficher l'instruction optimisée
  if (result.optimizedProgram?.instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION OPTIMISÉE");
    console.log("=".repeat(60));
    console.log(result.optimizedProgram.instruction);
  }
}

main().catch(console.error);
