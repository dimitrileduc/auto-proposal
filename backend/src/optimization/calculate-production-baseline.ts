/**
 * Calcul du VRAI baseline à partir des prédictions production
 * (sans re-run avec nouveau prompt)
 */

import { readFileSync } from "fs";

interface ProductionPrediction {
  productName: string;
  predicted: number;
  actual: number;
  type: "TP" | "FP" | "FN" | "TN";
}

function calculateProductionBaseline(jsonPath: string): void {
  const content = readFileSync(jsonPath, "utf-8");
  const data = JSON.parse(content);

  const predictions: ProductionPrediction[] = [];

  // Parcourir tous les clients
  for (const client of data.clients) {
    const products = client.data.products;

    // True Positives
    for (const product of products.truePositives || []) {
      predictions.push({
        productName: product.productName,
        predicted: product.llm?.prediction?.quantity ?? product.prediction?.quantity ?? 0,
        actual: product.reality?.quantity ?? 0,
        type: "TP",
      });
    }

    // False Positives
    for (const product of products.falsePositives || []) {
      predictions.push({
        productName: product.productName,
        predicted: product.llm?.prediction?.quantity ?? product.prediction?.quantity ?? 0,
        actual: 0, // FP = pas de commande réelle
        type: "FP",
      });
    }

    // False Negatives (structure différente!)
    for (const product of products.falseNegatives || []) {
      predictions.push({
        productName: product.productName,
        predicted: product.llm?.prediction?.quantity ?? 0,
        actual: product.quantity ?? 0, // FN = quantity top-level
        type: "FN",
      });
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("  BASELINE PRODUCTION (Prédictions Existantes)");
  console.log("=".repeat(60));

  // Calculs métriques
  let tp = 0,
    fp = 0,
    fn = 0,
    tn = 0;
  let totalAbsError = 0,
    totalExpected = 0;

  for (const pred of predictions) {
    const predictedOrder = pred.predicted > 0;
    const actualOrder = pred.actual > 0;

    if (predictedOrder && actualOrder) {
      tp++;
      totalAbsError += Math.abs(pred.predicted - pred.actual);
      totalExpected += pred.actual;
    } else if (predictedOrder && !actualOrder) {
      fp++;
    } else if (!predictedOrder && actualOrder) {
      fn++;
      totalAbsError += pred.actual; // 100% erreur
      totalExpected += pred.actual;
    } else {
      tn++;
    }
  }

  const recall = tp + fn > 0 ? (tp / (tp + fn)) * 100 : 0;
  const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
  const f1 =
    precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
  const wmape = totalExpected > 0 ? (totalAbsError / totalExpected) * 100 : 0;

  console.log(`\nTotal predictions: ${predictions.length}`);
  console.log(`  TP: ${tp}`);
  console.log(`  FP: ${fp}`);
  console.log(`  FN: ${fn}`);
  console.log(`  TN: ${tn}`);

  console.log(`\n📊 MÉTRIQUES PRODUCTION:`);
  console.log(`  Recall:    ${recall.toFixed(1)}%`);
  console.log(`  Precision: ${precision.toFixed(1)}%`);
  console.log(`  F1:        ${f1.toFixed(1)}%`);
  console.log(`  WMAPE:     ${wmape.toFixed(1)}%`);

  console.log(`\n🎯 OBJECTIFS:`);
  console.log(`  Recall ≥90%:     ${recall >= 90 ? "✅" : "❌"}`);
  console.log(`  Precision ≥40%:  ${precision >= 40 ? "✅" : "❌"}`);
  console.log(`  WMAPE ≤25%:      ${wmape <= 25 ? "✅" : "❌"}`);

  // Détail par type original
  console.log(`\n📋 RÉPARTITION PAR TYPE ORIGINAL:`);
  const tpCount = predictions.filter((p) => p.type === "TP").length;
  const fpCount = predictions.filter((p) => p.type === "FP").length;
  const fnCount = predictions.filter((p) => p.type === "FN").length;
  console.log(`  TP originaux: ${tpCount} (${((tpCount / predictions.length) * 100).toFixed(1)}%)`);
  console.log(`  FP originaux: ${fpCount} (${((fpCount / predictions.length) * 100).toFixed(1)}%)`);
  console.log(`  FN originaux: ${fnCount} (${((fnCount / predictions.length) * 100).toFixed(1)}%)`);

  // Analyser les FN manqués
  const fnFiltered = predictions.filter((p) => p.type === "FN" && p.predicted === 0);
  console.log(`\n⚠️ FALSE NEGATIVES (LLM a prédit 0):`);
  console.log(`  Total FN: ${fnCount}`);
  console.log(`  FN avec pred=0: ${fnFiltered.length}`);
  console.log(`  Recall FN: ${fnCount > 0 ? ((1 - fnFiltered.length / fnCount) * 100).toFixed(1) : 0}%`);
}

const JSON_PATH = "./analysis-folder/predictions-v2-all-clients.json";
calculateProductionBaseline(JSON_PATH);
