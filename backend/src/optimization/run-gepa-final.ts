/**
 * GEPA Final - Version Classification qui MARCHE
 *
 * Utilise willOrder:class "yes, no" (pas quantity:number)
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ai, ax, AxGEPA } from "@ax-llm/ax";

const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "20");
const TRAIN_SIZE = parseInt(process.env.TRAIN_SIZE || "60");
const VAL_SIZE = parseInt(process.env.VAL_SIZE || "30");
const OUTPUT_DIR = "./optimization-results";

// Signature avec CLASSIFICATION - Prompt avec biais RECALL (éviter ruptures)
const stockClassifier = ax(`
"Expert Supply Chain B2B - Stock replenishment prediction.

OBJECTIVE: MAXIMIZE RECALL (≥85%) - Avoid stockouts at all costs.
PRIORITY: Better to overstock (false positive) than miss an order (false negative).
RULE: When in doubt → predict YES.

Analyze: order cycle patterns, seasonality from last year (N-1), stockout risk within 30 days."

productName:string "Product name",
recentOrders:string "Recent orders (2025)",
lastYearOrders:string "Last year orders (2024)",
currentDate:string "Analysis date"
->
willOrder:class "yes, no" "Order likely in 30 days?",
reasoning:string "Brief explanation"
`);

// Métrique multi-objectif
const multiMetric = ({ prediction, example }: any) => {
  const predicted = prediction?.willOrder;
  const actual = example?.willOrder;

  let recall = 1;
  if (actual === "yes") {
    recall = predicted === "yes" ? 1 : 0;
  }

  let precision = 1;
  if (predicted === "yes") {
    precision = actual === "yes" ? 1 : 0;
  }

  return { recall, precision } as Record<string, number>;
};

async function main() {
  console.log("=".repeat(60));
  console.log("  GEPA Final - Classification (yes/no)");
  console.log("=".repeat(60));

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Charger données
  const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
  const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));

  // Équilibrer
  const allData = [...trainData, ...valData];
  const positives = allData.filter((e: any) => e.quantity > 0);
  const negatives = allData.filter((e: any) => e.quantity === 0);

  const trainPosCount = Math.min(Math.floor(TRAIN_SIZE / 2), positives.length);
  const trainNegCount = Math.min(Math.floor(TRAIN_SIZE / 2), negatives.length);
  const valPosCount = Math.min(Math.floor(VAL_SIZE / 2), positives.length - trainPosCount);
  const valNegCount = Math.min(Math.floor(VAL_SIZE / 2), negatives.length - trainNegCount);

  const train = [
    ...positives.slice(0, trainPosCount),
    ...negatives.slice(0, trainNegCount),
  ].sort(() => Math.random() - 0.5).map((e: any) => ({
    productName: e.productName,
    recentOrders: e.recentOrders,
    lastYearOrders: e.lastYearOrders,
    currentDate: e.currentDate,
    willOrder: e.quantity > 0 ? "yes" : "no",
  }));

  const val = [
    ...positives.slice(trainPosCount, trainPosCount + valPosCount),
    ...negatives.slice(trainNegCount, trainNegCount + valNegCount),
  ].sort(() => Math.random() - 0.5).map((e: any) => ({
    productName: e.productName,
    recentOrders: e.recentOrders,
    lastYearOrders: e.lastYearOrders,
    currentDate: e.currentDate,
    willOrder: e.quantity > 0 ? "yes" : "no",
  }));

  console.log(`\nTrain: ${train.length} (${trainPosCount} yes, ${trainNegCount} no)`);
  console.log(`Val: ${val.length} (${valPosCount} yes, ${valNegCount} no)`);
  console.log(`Trials: ${NUM_TRIALS}\n`);

  const student = ai({
    name: "openrouter",
    apiKey: process.env.OPENROUTER_API_KEY!,
    config: { model: "google/gemini-2.0-flash-001" },
  });

  const teacher = ai({
    name: "openrouter",
    apiKey: process.env.OPENROUTER_API_KEY!,
    config: { model: "anthropic/claude-sonnet-4.5" },
  });

  console.log("Teacher: Claude Sonnet 4.5");
  console.log("Student: Gemini Flash\n");

  const optimizer = new AxGEPA({
    teacherAI: teacher,
    studentAI: student,
    numTrials: NUM_TRIALS,
    minibatch: false,  // ⬅️ FALSE = évaluation stable (pas de variance)
    earlyStoppingTrials: 10,
    seed: 42,
    verbose: true,
  });

  console.log("🔄 GEPA Optimization...\n");
  const startTime = Date.now();

  const result = await optimizer.compile(stockClassifier as any, train, multiMetric as any, {
    validationExamples: val,
    feedbackExamples: val.slice(0, 10),
    feedbackFn: ({ prediction, example }: any) => {
      const pred = prediction?.willOrder;
      const actual = example?.willOrder;
      if (actual === "yes" && pred === "no") {
        return ["🚨 ERREUR CRITIQUE: Rupture!", "RÈGLE: En cas de doute → YES"];
      }
      if (actual === "no" && pred === "yes") {
        return "⚠️ Faux positif (surstock acceptable)";
      }
      return "✅ Correct";
    },
    maxMetricCalls: NUM_TRIALS * TRAIN_SIZE * 2,
    paretoScalarize: (s: any) => 0.8 * (s.recall ?? 0) + 0.2 * (s.precision ?? 0),
  });

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Terminé en ${duration} min`);
  console.log(`Pareto: ${result.paretoFrontSize} points`);
  console.log(`Hypervolume: ${result.hypervolume?.toFixed(3) ?? "N/A"}`);

  for (const [i, p] of [...result.paretoFront].entries()) {
    if (i >= 5) break;
    console.log(`  #${i + 1}: recall=${(p.scores as any).recall?.toFixed(3)}, precision=${(p.scores as any).precision?.toFixed(3)}`);
  }

  // Appliquer et valider
  if (result.optimizedProgram) {
    stockClassifier.applyOptimization(result.optimizedProgram);
    console.log(`\n📝 Instruction (${result.optimizedProgram.instruction?.length || 0} chars):`);
    console.log(`"${result.optimizedProgram.instruction?.substring(0, 300)}..."`);
  }

  // Validation finale
  console.log(`\n📊 Validation finale (${val.length} exemples):`);
  let tp = 0, fp = 0, fn = 0, tn = 0;

  for (const ex of val) {
    const res = await stockClassifier.forward(student, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });
    const pred = res.willOrder === "yes";
    const actual = ex.willOrder === "yes";
    if (pred && actual) tp++;
    else if (pred && !actual) fp++;
    else if (!pred && actual) fn++;
    else tn++;
  }

  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  console.log(`   TP=${tp}, FP=${fp}, FN=${fn}, TN=${tn}`);
  console.log(`   Recall:    ${(recall * 100).toFixed(1)}% (cible ≥85%)`);
  console.log(`   Precision: ${(precision * 100).toFixed(1)}% (cible ≥40%)`);
  console.log(`   F1:        ${(f1 * 100).toFixed(1)}%`);

  // Sauvegarder
  const savedData = {
    version: "4.0",
    phase: "gepa-final-classification",
    optimizedAt: new Date().toISOString(),
    model: "google/gemini-2.0-flash-001",
    config: {
      numTrials: NUM_TRIALS,
      trainSize: train.length,
      valSize: val.length,
      outputType: "classification",
    },
    results: { tp, fp, fn, tn, recall, precision, f1 },
    paretoFrontSize: result.paretoFrontSize,
    hypervolume: result.hypervolume,
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.optimizedProgram?.demos || [],
    bestScore: result.optimizedProgram?.bestScore || null,
  };

  writeFileSync(`${OUTPUT_DIR}/gepa-final.json`, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${OUTPUT_DIR}/gepa-final.json`);

  if (result.optimizedProgram?.instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION COMPLÈTE");
    console.log("=".repeat(60));
    console.log(result.optimizedProgram.instruction);
  }
}

main().catch(console.error);
