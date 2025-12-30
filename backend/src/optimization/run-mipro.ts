/**
 * MiPRO Optimization - Single-objective (Recall prioritaire)
 *
 * Différences avec GEPA:
 * - Single-objective: optimise UNE métrique (pas Pareto)
 * - Optimise instruction + few-shot demos
 * - Meilleur pour maximiser recall
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ai, ax, AxMiPRO } from "@ax-llm/ax";

const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "15");
const TRAIN_SIZE = parseInt(process.env.TRAIN_SIZE || "100");
const VAL_SIZE = parseInt(process.env.VAL_SIZE || "50");
const OUTPUT_DIR = "./optimization-results";

// Signature classification
const stockClassifier = ax(`
"Expert Supply Chain B2B - Stock replenishment prediction.

OBJECTIVE: MAXIMIZE RECALL - Avoid stockouts at all costs.
PRIORITY: Better to overstock (false positive) than miss an order (false negative).
RULE: When in doubt, predict YES."

productName:string "Product name",
recentOrders:string "Recent orders (2025)",
lastYearOrders:string "Last year orders (2024)",
currentDate:string "Analysis date"
->
willOrder:class "yes, no" "Order likely in 30 days?",
reasoning:string "Brief explanation"
`);

/**
 * Métrique SINGLE-OBJECTIVE pour MiPRO
 *
 * Formule: 0.8 * recall + 0.2 * precision (sur l'ensemble du batch)
 *
 * Mais MiPRO appelle la métrique par exemple, donc on retourne:
 * - 1.0 si TP (prédit oui, réel oui) → maximise recall
 * - 0.5 si TN (prédit non, réel non) → correct mais moins important
 * - 0.3 si FP (prédit oui, réel non) → surstock acceptable
 * - 0.0 si FN (prédit non, réel oui) → RUPTURE = pire cas
 */
const recallMetric = ({ prediction, example }: any): number => {
  const predicted = prediction?.willOrder === "yes";
  const actual = example?.willOrder === "yes";

  if (predicted && actual) return 1.0;    // TP - parfait
  if (!predicted && !actual) return 0.5;  // TN - correct
  if (predicted && !actual) return 0.3;   // FP - surstock (acceptable)
  return 0.0;                              // FN - RUPTURE (inacceptable)
};

async function main() {
  console.log("=".repeat(60));
  console.log("  MiPRO Optimization - Recall Prioritaire");
  console.log("=".repeat(60));

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Charger et équilibrer données
  const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
  const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));

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

  // Student = modèle de production (cheap)
  const student = ai({
    name: "openrouter",
    apiKey: process.env.OPENROUTER_API_KEY!,
    config: { model: "google/gemini-3-flash-preview" },
  });

  // Teacher = modèle intelligent (pour générer les prompts)
  const teacher = ai({
    name: "openrouter",
    apiKey: process.env.OPENROUTER_API_KEY!,
    config: { model: "anthropic/claude-sonnet-4.5" },
  });

  console.log("Teacher: Claude Sonnet 4.5");
  console.log("Student: Gemini 3 Flash\n");

  const optimizer = new AxMiPRO({
    studentAI: student,
    teacherAI: teacher,
    numTrials: NUM_TRIALS,
    numCandidates: 5,
    minibatch: false,
    earlyStoppingTrials: 8,
    seed: 42,
    verbose: true,
    optimizerEndpoint: "http://localhost:8000",
  });

  console.log("🔄 MiPRO Optimization...\n");
  const startTime = Date.now();

  // MiPRO optimise sur TRAIN seulement
  // VAL est gardé pour validation finale (pas vu par MiPRO)
  console.log(`📊 MiPRO voit: ${train.length} exemples (val gardé séparé)\n`);
  const result = await optimizer.compile(stockClassifier as any, train, recallMetric);

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Terminé en ${duration} min`);
  console.log(`Best Score: ${result.bestScore?.toFixed(3) ?? "N/A"}`);

  // Appliquer optimisation
  if (result.optimizedProgram) {
    stockClassifier.applyOptimization(result.optimizedProgram);
    console.log(`\n📝 Instruction optimisée (${result.optimizedProgram.instruction?.length || 0} chars)`);
    console.log(`📚 Demos: ${result.optimizedProgram.demos?.length || 0} few-shot examples`);
  }

  // Validation finale sur val set
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
    version: "5.0",
    optimizer: "MiPRO",
    optimizedAt: new Date().toISOString(),
    model: "google/gemini-3-flash-preview",
    teacher: "anthropic/claude-sonnet-4.5",
    config: {
      numTrials: NUM_TRIALS,
      trainSize: train.length,
      valSize: val.length,
    },
    results: { tp, fp, fn, tn, recall, precision, f1 },
    bestScore: result.bestScore,
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.optimizedProgram?.demos || [],
  };

  writeFileSync(`${OUTPUT_DIR}/mipro-result.json`, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${OUTPUT_DIR}/mipro-result.json`);

  if (result.optimizedProgram?.instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION OPTIMISÉE");
    console.log("=".repeat(60));
    console.log(result.optimizedProgram.instruction);
  }

  if (result.optimizedProgram?.demos?.length) {
    console.log("\n" + "=".repeat(60));
    console.log("  FEW-SHOT DEMOS");
    console.log("=".repeat(60));
    for (const [i, demo] of result.optimizedProgram.demos.entries()) {
      console.log(`\n--- Demo ${i + 1} ---`);
      console.log(JSON.stringify(demo, null, 2));
    }
  }
}

main().catch(console.error);
