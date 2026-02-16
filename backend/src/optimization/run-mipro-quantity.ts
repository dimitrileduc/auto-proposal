/**
 * MiPRO Optimization - Quantity Precision (wMAPE ≤ 20%)
 *
 * OBJECTIF: Optimiser UNIQUEMENT la précision des quantités
 * - Input: SEULEMENT TP (qty > 0)
 * - Prompt: Quantité seulement (pas recall/détection)
 * - Métrique: wMAPE (erreur relative)
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ai, ax, AxMiPRO } from "@ax-llm/ax";

const DEV_MODE = process.env.DEV_MODE === "true";
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || (DEV_MODE ? "5" : "20"));
const OUTPUT_DIR = "./optimization-results";

// Signature: QUANTITÉ SEULEMENT (pas recall)
const stockQuantityPredictor = ax(`
"Expert Supply Chain B2B - Estimation quantité de réapprovisionnement

RÈGLES:
- Privilegier la MÉDIANE des quantités de recentOrders
- NE PAS ajuster pour saisonnalité SAUF si pattern lastYearOrders vraiment flagrant
- Ne pas surestimer pour stock de sécurité
- Ne pas prendre le maximum, prendre la valeur typique
- Viser précision maximale (wMAPE ≤ 20%)"

productName:string "Nom du produit",
recentOrders:string "Commandes récentes (2025)",
lastYearOrders:string "Commandes année précédente (2024)",
currentDate:string "Date d'analyse"
->
quantity:number "Quantité à commander",
reasoning:string "Explication du calcul"
`);

/**
 * Métrique: MAE-based score
 * Score = 1 / (1 + erreur) → plus l'erreur est faible, plus le score est élevé
 * MAE = 0 → score = 1.0
 * MAE = 1 → score = 0.5
 * MAE = 4 → score = 0.2
 * MAE = 9 → score = 0.1
 */
const quantityPrecisionMetric = ({ prediction, example }: any): number => {
  const predQty = prediction?.quantity ?? 0;
  const actualQty = example?.quantity ?? 0;

  const absoluteError = Math.abs(predQty - actualQty);

  // Score inversé: 1/(1+error)
  // Cible MAE ≤ 2u → score moyen ≥ 0.33
  const score = 1 / (1 + absoluteError);

  return score;
};

async function main() {
  console.log("=".repeat(60));
  console.log("  MiPRO Optimization - Quantity Precision");
  console.log("=".repeat(60));
  console.log(`\nMode: ${DEV_MODE ? "DEV (rapide)" : "SEMI-FULL"}`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Charger données
  const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
  const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));

  // FILTRER: SEULEMENT les TP (qty > 0)
  const allData = [...trainData, ...valData];
  const tpOnly = allData.filter((e: any) => e.quantity > 0);

  console.log(`\nTotal données: ${allData.length}`);
  console.log(`TP cases (qty>0): ${tpOnly.length} (${((tpOnly.length / allData.length) * 100).toFixed(1)}%)`);

  // Splits selon mode (150 TP total → 100/50 en SEMI-FULL)
  const trainSize = DEV_MODE ? 30 : 100;
  const valSize = DEV_MODE ? 20 : 50;

  // Shuffle pour randomiser
  const shuffled = tpOnly.sort(() => Math.random() - 0.5);

  const train = shuffled.slice(0, trainSize).map((e: any) => ({
    productName: e.productName,
    recentOrders: e.recentOrders,
    lastYearOrders: e.lastYearOrders,
    currentDate: e.currentDate,
    quantity: e.quantity,
  }));

  const val = shuffled.slice(trainSize, trainSize + valSize).map((e: any) => ({
    productName: e.productName,
    recentOrders: e.recentOrders,
    lastYearOrders: e.lastYearOrders,
    currentDate: e.currentDate,
    quantity: e.quantity,
  }));

  console.log(`\nTrain: ${train.length} TP`);
  console.log(`Val: ${val.length} TP`);
  console.log(`Trials: ${NUM_TRIALS}\n`);

  // Afficher distribution des quantités
  const quantities = train.map((e: any) => e.quantity);
  const minQty = Math.min(...quantities);
  const maxQty = Math.max(...quantities);
  const avgQty = quantities.reduce((a: number, b: number) => a + b, 0) / quantities.length;
  console.log(`Quantités train: min=${minQty}, max=${maxQty}, avg=${avgQty.toFixed(1)}`);

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

  console.log("🔄 MiPRO Optimization (Quantity Precision)...\n");
  const startTime = Date.now();

  const result = await optimizer.compile(stockQuantityPredictor as any, train, quantityPrecisionMetric);

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Terminé en ${duration} min`);
  console.log(`Best Score: ${result.bestScore?.toFixed(3) ?? "N/A"}`);

  // Appliquer optimisation
  if (result.optimizedProgram) {
    stockQuantityPredictor.applyOptimization(result.optimizedProgram);
    console.log(`\n📝 Instruction optimisée (${result.optimizedProgram.instruction?.length || 0} chars)`);
    console.log(`📚 Demos: ${result.optimizedProgram.demos?.length || 0} few-shot examples`);
  }

  // Validation finale sur val set
  console.log(`\n📊 Validation finale (${val.length} TP):`);

  let totalAbsoluteError = 0;
  let totalActual = 0;
  let count = 0;
  const errors: number[] = [];

  for (const ex of val) {
    const res = await stockQuantityPredictor.forward(student, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });

    const predQty = res.quantity ?? 0;
    const actualQty = ex.quantity;

    const absError = Math.abs(predQty - actualQty);
    totalAbsoluteError += absError;
    totalActual += actualQty;
    errors.push(absError);
    count++;

    // Log quelques exemples
    if (count <= 5) {
      console.log(`   [${count}] Prédit: ${predQty}, Réel: ${actualQty}, Erreur: ${absError}`);
    }
  }

  // Métriques finales
  const wMAPE = totalActual > 0 ? (totalAbsoluteError / totalActual) * 100 : 0;
  const mae = count > 0 ? totalAbsoluteError / count : 0;
  const medianError = errors.sort((a, b) => a - b)[Math.floor(errors.length / 2)];

  console.log(`\n   Résultats sur ${count} TP:`);
  console.log(`   ✅ MAE: ${mae.toFixed(1)}u`);
  console.log(`   📊 Median Error: ${medianError}u`);
  console.log(`   📊 wMAPE: ${wMAPE.toFixed(1)}% (cible ≤24%)`);

  const success = wMAPE <= 24;
  console.log(`\n   ${success ? "🎉 SUCCÈS!" : "⚠️ Cible non atteinte"} wMAPE ${wMAPE.toFixed(1)}% ${success ? "≤" : ">"} 24%`);

  // Sauvegarder
  const savedData = {
    version: "1.0",
    optimizer: "MiPRO-Quantity",
    optimizedAt: new Date().toISOString(),
    mode: DEV_MODE ? "DEV" : "SEMI-FULL",
    model: "google/gemini-3-flash-preview",
    teacher: "anthropic/claude-sonnet-4.5",
    config: {
      numTrials: NUM_TRIALS,
      trainSize: train.length,
      valSize: val.length,
      devMode: DEV_MODE,
    },
    results: {
      wMAPE,
      mae,
      medianError,
      count,
      targetMet: success,
    },
    bestScore: result.bestScore,
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.optimizedProgram?.demos || [],
  };

  const outputFile = `${OUTPUT_DIR}/mipro-quantity-result.json`;
  writeFileSync(outputFile, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${outputFile}`);

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
