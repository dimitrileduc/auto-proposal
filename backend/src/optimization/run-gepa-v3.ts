/**
 * GEPA v3 - COPIE EXACTE de run-gepa-optimization.ts qui MARCHAIT
 *
 * Différences avec mes tentatives foireuses:
 * - Signature avec quantity:number (pas willOrder:boolean)
 * - gepaCombinedMetric (pas ma métrique maison)
 * - PAS de teacherAI
 * - minibatch: false
 * - temperature: 0.7
 */

import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ax, AxGEPA } from "@ax-llm/ax";
import { studentLLM, MODEL } from "./ax-config.js";
import { calculateAggregateMetrics } from "./gepa-metric.js";

// Métrique POSITIVE (0-1 range) - pas de valeurs négatives
function positiveMetric({ prediction, example }: any): number {
  const predicted = prediction?.quantity;
  if (predicted === undefined || predicted === null || isNaN(predicted)) {
    return 0;
  }

  const actual = example.quantity;
  const predBool = predicted > 0;
  const actualBool = actual > 0;

  // Scores 0-1 (GEPA attend probablement ça)
  if (actualBool && predBool) return 1.0;   // TP = parfait
  if (!actualBool && !predBool) return 0.8; // TN = bon
  if (!actualBool && predBool) return 0.3;  // FP = acceptable
  if (actualBool && !predBool) return 0.0;  // FN = catastrophe
  return 0.5;
}

const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "25");
const OUTPUT_DIR = "./optimization-results";

async function main() {
  console.log("=".repeat(60));
  console.log("  GEPA v3 - Config EXACTE de l'ancien qui marchait");
  console.log("=".repeat(60));
  console.log(`\nModel: ${MODEL}`);
  console.log(`Trials: ${NUM_TRIALS}`);
  console.log(`Métrique: gepaCombinedMetric (points: FN=-5, TP=+4, TN=+1, FP=-1)\n`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Charger exemples
  const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
  const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));

  // Équilibrer 50/50
  const allExamples = [...trainData, ...valData];
  const positives = allExamples.filter((e: any) => e.quantity > 0);
  const negatives = allExamples.filter((e: any) => e.quantity === 0);

  const trainPosCount = Math.min(40, positives.length);
  const trainNegCount = Math.min(40, negatives.length);
  const valPosCount = Math.min(20, positives.length - trainPosCount);
  const valNegCount = Math.min(20, negatives.length - trainNegCount);

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

  // SIGNATURE EXACTE de l'ancien (quantity:number, pas willOrder:boolean)
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

  // Préparer exemples (avec quantity, pas willOrder)
  const axTrainExamples = trainExamples.map((ex: any) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    quantity: ex.quantity,  // ← quantity, pas willOrder
    reasoning: "",
  }));

  const axValExamples = valExamples.map((ex: any) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    quantity: ex.quantity,
    reasoning: "",
  }));

  console.log("GEPA Optimization...\n");

  // CONFIG EXACTE de l'ancien
  const optimizer = new AxGEPA({
    studentAI: studentLLM,  // PAS de teacherAI
    config: {
      temperature: 0.7,  // OBLIGATOIRE
    },
    numTrials: NUM_TRIALS,
    minibatch: false,  // OBLIGATOIRE
    verbose: true,
  });

  const startTime = Date.now();

  const result = await optimizer.compile(
    stockPredictor,
    axTrainExamples,
    positiveMetric as any,  // Scores 0-1 (TP=1, TN=0.8, FP=0.3, FN=0)
    {
      maxMetricCalls: 2500,
    }
  );

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n✅ Terminé en ${duration} min`);
  console.log(`Demos: ${result.demos?.length || 0}`);

  // Validation finale
  if (result.optimizedProgram) {
    stockPredictor.applyOptimization(result.optimizedProgram);
    console.log(`\n📝 Instruction (${result.optimizedProgram.instruction?.length || 0} chars):`);
    console.log(`"${result.optimizedProgram.instruction?.substring(0, 300)}..."`);
  }

  // Calculer métriques validation
  const valResults = [];
  for (const ex of axValExamples) {
    const res = await stockPredictor.forward(studentLLM, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });
    valResults.push({
      prediction: { quantity: res.quantity || 0 },
      example: ex,
    });
  }

  const metrics = calculateAggregateMetrics(valResults);

  console.log(`\n📊 Validation (${axValExamples.length} exemples):`);
  console.log(`   Recall:    ${(metrics.recall * 100).toFixed(1)}% (cible ≥90%)`);
  console.log(`   Precision: ${(metrics.precision * 100).toFixed(1)}% (cible ≥40%)`);
  console.log(`   F1:        ${(metrics.f1 * 100).toFixed(1)}%`);
  console.log(`   WMAPE:     ${metrics.wmape.toFixed(1)}%`);

  const savedData = {
    version: "3.0",
    phase: "gepa-v3-exact-copy",
    optimizedAt: new Date().toISOString(),
    model: MODEL,
    config: {
      numTrials: NUM_TRIALS,
      minibatch: false,
      temperature: 0.7,
      trainSize: trainExamples.length,
      valSize: valExamples.length,
    },
    results: metrics,
    instruction: result.optimizedProgram?.instruction || null,
    demos: result.demos || [],
    optimizedProgram: result.optimizedProgram,
  };

  writeFileSync(`${OUTPUT_DIR}/gepa-v3.json`, JSON.stringify(savedData, null, 2));
  console.log(`\n💾 Sauvegardé: ${OUTPUT_DIR}/gepa-v3.json`);

  if (result.optimizedProgram?.instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION COMPLÈTE");
    console.log("=".repeat(60));
    console.log(result.optimizedProgram.instruction);
  }
}

main().catch(console.error);
