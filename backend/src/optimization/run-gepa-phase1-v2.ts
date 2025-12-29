/**
 * /backend/src/optimization/run-gepa-phase1-v2.ts
 *
 * GEPA Phase 1 v2: Métrique SCALAIRE avec priorité RECALL
 *
 * Basé sur la recherche:
 * - GEPA multi-objectifs n'est PAS adapté quand 1 objectif est prioritaire
 * - Métrique scalaire unique avec pénalité FN sévère
 * - earlyStoppingTrials augmenté pour plus de patience
 *
 * Usage:
 *   npx tsx src/optimization/run-gepa-phase1-v2.ts
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ax, AxGEPA } from "@ax-llm/ax";
import { teacherLLM, studentLLM, MODEL, TEACHER_MODEL } from "./ax-config.js";

// Configuration
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "25");
const EARLY_STOPPING = parseInt(process.env.EARLY_STOPPING || "10");
const TRAIN_SIZE = parseInt(process.env.TRAIN_SIZE || "150");
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
// MÉTRIQUE SCALAIRE UNIQUE - PRIORITÉ RECALL
// ============================================================================
interface MetricInput {
  prediction: { willOrder?: boolean; reasoning?: string };
  example: { quantity: number; [key: string]: any };
}

/**
 * Métrique scalaire avec priorité RECALL intégrée
 *
 * Logique:
 * - FN (rupture) = 0.0 points → GEPA va FUIR ce cas
 * - FP (surstock) = 0.5 points → Acceptable, pas catastrophique
 * - TP = 1.0 points → Parfait
 * - TN = 0.7 points → Bon mais moins valorisé que TP
 *
 * Cette pondération force GEPA à prioriser le recall
 */
function recallPriorityMetric({ prediction, example }: MetricInput): number {
  // Sécurité: si pas de prédiction valide
  if (prediction?.willOrder === undefined || prediction?.willOrder === null) {
    return 0;
  }

  const predicted = prediction.willOrder === true;
  // CORRECTION: utiliser willOrder (label ax) OU quantity (raw data)
  const actual = (example as any).willOrder === true || (example as any).quantity > 0;

  // FN = RUPTURE = CATASTROPHE → 0 points
  if (actual && !predicted) {
    return 0.0;
  }

  // FP = Surstock = Acceptable → 0.5 points
  if (!actual && predicted) {
    return 0.5;
  }

  // TP = Commande détectée = Parfait → 1.0 point
  if (actual && predicted) {
    return 1.0;
  }

  // TN = Pas de commande, bien prédit → 0.7 points
  return 0.7;
}

// ============================================================================
// FEEDBACK FUNCTION amélioré pour guider GEPA
// ============================================================================
function feedbackFn({ prediction, example }: MetricInput): string | string[] {
  const predicted = prediction?.willOrder === true;
  const actual = (example as any).willOrder === true || (example as any).quantity > 0;

  if (actual && !predicted) {
    // FN - Le cas le plus grave
    return [
      "🚨 ERREUR CRITIQUE: RUPTURE DE STOCK!",
      `Le client a commandé ${example.quantity}u mais on n'a pas prédit.`,
      "RÈGLE: En cas de doute, TOUJOURS prédire une commande.",
      "Mieux vaut un faux positif qu'une rupture.",
    ];
  }

  if (!actual && predicted) {
    // FP - Acceptable
    return [
      "⚠️ Faux positif (surstock)",
      "Pas de commande réelle, mais ce n'est pas grave.",
      "Le surstock est préférable à la rupture.",
    ];
  }

  if (actual && predicted) {
    // TP - Parfait
    return `✅ Excellent! Commande de ${example.quantity}u correctement détectée.`;
  }

  // TN
  return "✅ Correct: pas de commande prévu, pas de commande réelle.";
}

// ============================================================================
// MAIN
// ============================================================================
async function main() {
  console.log("=".repeat(60));
  console.log("  GEPA Phase 1 v2: Métrique Scalaire + Priorité RECALL");
  console.log("=".repeat(60));
  console.log(`\nConfig:`);
  console.log(`  Teacher: ${TEACHER_MODEL}`);
  console.log(`  Student: ${MODEL}`);
  console.log(`  Trials: ${NUM_TRIALS} (early stop: ${EARLY_STOPPING})`);
  console.log(`  Train: ${TRAIN_SIZE}, Val: ${VAL_SIZE}`);
  console.log(`\nMétrique: FN=0, FP=0.5, TP=1.0, TN=0.7`);
  console.log("→ GEPA va naturellement prioriser le RECALL\n");

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Charger les exemples
  console.log("1. Chargement des exemples...");

  let allExamples: any[];
  try {
    const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
    const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));
    allExamples = [...trainData, ...valData];
    console.log(`   Chargé: ${allExamples.length} exemples\n`);
  } catch (e) {
    console.error("❌ Fichiers training-examples-gepa-*.json non trouvés");
    process.exit(1);
  }

  // 2. Split train/val avec équilibrage
  const positives = allExamples.filter(e => e.quantity > 0);
  const negatives = allExamples.filter(e => e.quantity === 0);

  // Prendre 50% de chaque pour train
  const trainPosCount = Math.min(Math.floor(TRAIN_SIZE / 2), positives.length);
  const trainNegCount = Math.min(Math.floor(TRAIN_SIZE / 2), negatives.length);
  const valPosCount = Math.min(Math.floor(VAL_SIZE / 2), positives.length - trainPosCount);
  const valNegCount = Math.min(Math.floor(VAL_SIZE / 2), negatives.length - trainNegCount);

  const trainExamples = [
    ...positives.slice(0, trainPosCount),
    ...negatives.slice(0, trainNegCount)
  ];
  const valExamples = [
    ...positives.slice(trainPosCount, trainPosCount + valPosCount),
    ...negatives.slice(trainNegCount, trainNegCount + valNegCount)
  ];

  // Shuffle
  trainExamples.sort(() => Math.random() - 0.5);
  valExamples.sort(() => Math.random() - 0.5);

  const trainPos = trainExamples.filter(e => e.quantity > 0).length;
  const valPos = valExamples.filter(e => e.quantity > 0).length;

  console.log(`   Train: ${trainExamples.length} (${trainPos} pos, ${trainExamples.length - trainPos} neg)`);
  console.log(`   Val: ${valExamples.length} (${valPos} pos, ${valExamples.length - valPos} neg)\n`);

  // 3. Créer le programme
  const classifier = ax(classificationSignature);

  // 4. Préparer les exemples pour ax
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
    quantity: ex.quantity,
    willOrder: ex.quantity > 0,
    reasoning: "",
  }));

  // 5. GEPA Optimization avec métrique scalaire
  console.log("2. GEPA Optimization (métrique scalaire recall-priority)...\n");

  const optimizer = new AxGEPA({
    teacherAI: teacherLLM,
    studentAI: studentLLM,
    numTrials: NUM_TRIALS,
    earlyStoppingTrials: EARLY_STOPPING,
    minibatch: true,
    minibatchSize: 20,
    verbose: true,
  });

  const startTime = Date.now();

  const result = await optimizer.compile(
    classifier,
    axTrainExamples,
    recallPriorityMetric as any,  // Métrique SCALAIRE (retourne number, pas object)
    {
      validationExamples: axValExamples,
      feedbackExamples: axValExamples.slice(0, 25),
      feedbackFn: feedbackFn as any,
      maxMetricCalls: NUM_TRIALS * TRAIN_SIZE * 2,
    }
  );

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Optimisation terminée en ${duration} min`);
  console.log(`   Best score: ${result.optimizedProgram?.bestScore?.toFixed(3) || 'N/A'}`);

  // 6. Validation finale
  console.log("\n" + "=".repeat(60));
  console.log("  VALIDATION FINALE");
  console.log("=".repeat(60));

  if (result.optimizedProgram) {
    classifier.applyOptimization(result.optimizedProgram);
    console.log(`\n📝 Instruction optimisée:`);
    console.log(`   "${result.optimizedProgram.instruction?.substring(0, 150)}..."`);
  }

  let tp = 0, fp = 0, fn = 0, tn = 0;
  let totalScore = 0;

  for (const ex of axValExamples) {
    const res = await classifier.forward(studentLLM, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });

    const predicted = res.willOrder === true;
    const actual = ex.quantity > 0;

    if (predicted && actual) { tp++; totalScore += 1.0; }
    else if (predicted && !actual) { fp++; totalScore += 0.5; }
    else if (!predicted && actual) { fn++; totalScore += 0.0; }
    else { tn++; totalScore += 0.7; }
  }

  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
  const avgScore = totalScore / axValExamples.length;

  console.log(`\n📊 Résultats sur validation (${axValExamples.length} exemples):`);
  console.log(`   TP: ${tp}, FP: ${fp}, FN: ${fn}, TN: ${tn}`);
  console.log(`   Recall:    ${(recall * 100).toFixed(1)}% (cible: ≥90%)`);
  console.log(`   Precision: ${(precision * 100).toFixed(1)}% (cible: ≥40%)`);
  console.log(`   F1-Score:  ${(f1 * 100).toFixed(1)}%`);
  console.log(`   Avg Score: ${avgScore.toFixed(3)}`);

  // 7. Vérification objectifs
  const meetsRecall = recall >= 0.9;
  const meetsPrecision = precision >= 0.4;

  console.log(`\n📋 Objectifs:`);
  console.log(`   Recall ≥90%:    ${meetsRecall ? "✅" : "❌"}`);
  console.log(`   Precision ≥40%: ${meetsPrecision ? "✅" : "❌"}`);

  // 8. Sauvegarder
  const savedData = {
    version: "2.0",
    phase: "classification-v2-recall-priority",
    optimizerType: "gepa-scalar-metric",
    optimizedAt: new Date().toISOString(),
    models: {
      teacher: TEACHER_MODEL,
      student: MODEL,
    },
    config: {
      numTrials: NUM_TRIALS,
      earlyStoppingTrials: EARLY_STOPPING,
      trainSize: trainExamples.length,
      valSize: valExamples.length,
      metricWeights: { FN: 0, FP: 0.5, TP: 1.0, TN: 0.7 },
    },
    results: {
      tp, fp, fn, tn,
      recall,
      precision,
      f1,
      avgScore,
      meetsRecall,
      meetsPrecision,
    },
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.optimizedProgram?.demos || [],
    bestScore: result.optimizedProgram?.bestScore || null,
    optimizedProgram: result.optimizedProgram,
  };

  const outputPath = `${OUTPUT_DIR}/gepa-phase1-v2-recall.json`;
  writeFileSync(outputPath, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${outputPath}`);

  // 9. Afficher l'instruction complète
  if (result.optimizedProgram?.instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION OPTIMISÉE COMPLÈTE");
    console.log("=".repeat(60));
    console.log(result.optimizedProgram.instruction);
  }
}

main().catch(console.error);
