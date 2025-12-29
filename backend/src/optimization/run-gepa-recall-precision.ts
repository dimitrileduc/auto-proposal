/**
 * GEPA - Conforme à la doc ax-docs/GEPA.md
 *
 * Corrections:
 * - Métrique multi-objectif {recall, precision}
 * - validationExamples, feedbackExamples, feedbackFn
 * - paretoScalarize pour prioriser recall
 * - teacherAI: Claude Sonnet
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ax, AxGEPA } from "@ax-llm/ax";
import { studentLLM, teacherLLM, MODEL, TEACHER_MODEL } from "./ax-config.js";

const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "25");
const TRAIN_SIZE = parseInt(process.env.TRAIN_SIZE || "80");
const VAL_SIZE = parseInt(process.env.VAL_SIZE || "40");

const OUTPUT_DIR = "./optimization-results";

// SIGNATURE avec instruction intégrée
const classificationSignature = `
"Expert Supply Chain B2B - Prédiction réapprovisionnement.

🎯 OBJECTIF: RECALL MAXIMAL (90%+)
⚠️ Mieux vaut commander trop (FP) que créer une rupture (FN).
📊 Si DOUTE → PRÉVOIR COMMANDE (principe précaution).

Analyser: cycle commande, risque rupture 30j, saisonnalité N-1."

productName:string "Nom du produit",
recentOrders:string "Historique récent (2025)",
lastYearOrders:string "Historique N-1 (2024)",
currentDate:string "Date d'analyse"
->
willOrder:boolean "true si commande probable dans 30 jours",
reasoning:string "Explication courte"
`;

// Métrique MULTI-OBJECTIF conforme à la doc
function multiMetric({ prediction, example }: any): { recall: number; precision: number } {
  const predicted = prediction?.willOrder === true;
  const actual = example?.willOrder === true || example?.quantity > 0;

  // Per-example recall: Si vraie commande, l'a-t-on détectée?
  let recall = 1.0;
  if (actual) {
    recall = predicted ? 1.0 : 0.0; // TP=1, FN=0
  }

  // Per-example precision: Si on prédit, est-ce correct?
  let precision = 1.0;
  if (predicted) {
    precision = actual ? 1.0 : 0.0; // TP=1, FP=0
  }

  return { recall, precision };
}

// Feedback function pour guider GEPA
function feedbackFn({ prediction, example }: any): string | string[] {
  const predicted = prediction?.willOrder === true;
  const actual = example?.willOrder === true || example?.quantity > 0;

  if (actual && !predicted) {
    return [
      "🚨 ERREUR CRITIQUE: Rupture de stock!",
      `Commande réelle non détectée.`,
      "RÈGLE: En cas de doute, TOUJOURS prédire TRUE.",
    ];
  }
  if (!actual && predicted) {
    return ["⚠️ Faux positif (surstock acceptable)", "Moins grave que rupture."];
  }
  if (actual && predicted) {
    return "✅ Correct: commande détectée";
  }
  return "✅ Correct: pas de commande, bien prédit";
}

async function main() {
  console.log("=".repeat(60));
  console.log("  GEPA Multi-Objectif (conforme doc)");
  console.log("=".repeat(60));
  console.log(`\nTeacher: ${TEACHER_MODEL}`);
  console.log(`Student: ${MODEL}`);
  console.log(`Trials: ${NUM_TRIALS}`);
  console.log(`Métrique: {recall, precision} + paretoScalarize(0.8 recall)\n`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Charger exemples
  const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
  const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));

  // Équilibrer
  const allExamples = [...trainData, ...valData];
  const positives = allExamples.filter((e: any) => e.quantity > 0);
  const negatives = allExamples.filter((e: any) => e.quantity === 0);

  const trainPosCount = Math.min(Math.floor(TRAIN_SIZE / 2), positives.length);
  const trainNegCount = Math.min(Math.floor(TRAIN_SIZE / 2), negatives.length);
  const valPosCount = Math.min(Math.floor(VAL_SIZE / 2), positives.length - trainPosCount);
  const valNegCount = Math.min(Math.floor(VAL_SIZE / 2), negatives.length - trainNegCount);

  const trainExamples = [
    ...positives.slice(0, trainPosCount),
    ...negatives.slice(0, trainNegCount),
  ].sort(() => Math.random() - 0.5);

  const valExamples = [
    ...positives.slice(trainPosCount, trainPosCount + valPosCount),
    ...negatives.slice(trainNegCount, trainNegCount + valNegCount),
  ].sort(() => Math.random() - 0.5);

  console.log(`Train: ${trainExamples.length} (${trainPosCount} pos, ${trainNegCount} neg)`);
  console.log(`Val: ${valExamples.length} (${valPosCount} pos, ${valNegCount} neg)\n`);

  const classifier = ax(classificationSignature);

  // Préparer exemples pour ax
  const axTrainExamples = trainExamples.map((ex: any) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    willOrder: ex.quantity > 0,
    reasoning: "",
  }));

  const axValExamples = valExamples.map((ex: any) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    quantity: ex.quantity,
    willOrder: ex.quantity > 0,
    reasoning: "",
  }));

  console.log("GEPA Optimization...\n");

  const optimizer = new AxGEPA({
    teacherAI: teacherLLM,
    studentAI: studentLLM,
    numTrials: NUM_TRIALS,
    minibatch: true,
    minibatchSize: 20,
    verbose: true,
    seed: 42,
  });

  const startTime = Date.now();

  const result = await optimizer.compile(
    classifier,
    axTrainExamples,
    multiMetric as any,
    {
      validationExamples: axValExamples,
      feedbackExamples: axValExamples.slice(0, 20),
      feedbackFn: feedbackFn as any,
      maxMetricCalls: NUM_TRIALS * TRAIN_SIZE * 2,
      // Prioriser RECALL (80%) vs Precision (20%)
      paretoScalarize: (s: any) => 0.8 * (s.recall ?? 0) + 0.2 * (s.precision ?? 0),
    }
  );

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Terminé en ${duration} min`);
  console.log(`Pareto front: ${result.paretoFrontSize || 1} points`);
  console.log(`Hypervolume: ${result.hypervolume?.toFixed(3) || "N/A"}`);

  // Afficher Pareto front
  if (result.paretoFront) {
    console.log("\n📊 Pareto Front:");
    for (const [i, p] of [...result.paretoFront].entries()) {
      if (i >= 5) break;
      const scores = p.scores as any;
      console.log(`  #${i + 1}: recall=${scores.recall?.toFixed(3)}, precision=${scores.precision?.toFixed(3)}`);
    }
  }

  // Validation finale
  if (result.optimizedProgram) {
    classifier.applyOptimization(result.optimizedProgram);
    console.log(`\n📝 Instruction (${result.optimizedProgram.instruction?.length || 0} chars):`);
    console.log(`"${result.optimizedProgram.instruction?.substring(0, 300)}..."`);
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

  console.log(`\n📊 Validation (${axValExamples.length} exemples):`);
  console.log(`   TP=${tp}, FP=${fp}, FN=${fn}, TN=${tn}`);
  console.log(`   Recall:    ${(recall * 100).toFixed(1)}% (cible ≥90%)`);
  console.log(`   Precision: ${(precision * 100).toFixed(1)}% (cible ≥40%)`);
  console.log(`   F1:        ${(f1 * 100).toFixed(1)}%`);

  const savedData = {
    version: "2.0",
    phase: "gepa-multiobj-doc-compliant",
    optimizedAt: new Date().toISOString(),
    models: { teacher: TEACHER_MODEL, student: MODEL },
    config: {
      numTrials: NUM_TRIALS,
      minibatch: true,
      minibatchSize: 20,
      paretoScalarize: "0.8*recall + 0.2*precision",
      trainSize: trainExamples.length,
      valSize: valExamples.length,
    },
    results: { tp, fp, fn, tn, recall, precision, f1 },
    paretoFrontSize: result.paretoFrontSize,
    hypervolume: result.hypervolume,
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.optimizedProgram?.demos || [],
    bestScore: result.optimizedProgram?.bestScore || null,
  };

  writeFileSync(`${OUTPUT_DIR}/gepa-recall-precision.json`, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${OUTPUT_DIR}/gepa-recall-precision.json`);

  if (result.optimizedProgram?.instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION COMPLÈTE");
    console.log("=".repeat(60));
    console.log(result.optimizedProgram.instruction);
  }
}

main().catch(console.error);
