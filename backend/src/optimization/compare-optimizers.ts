/**
 * /backend/src/optimization/compare-optimizers.ts
 *
 * Comparaison Baseline vs MiPRO vs GEPA
 *
 * Usage:
 *   npx tsx src/optimization/compare-optimizers.ts
 */

import { readFileSync } from "fs";
import { ax } from "@ax-llm/ax";
import { studentLLM } from "./ax-config.js";
import { stockPredictorSignature } from "./stock-predictor.js";
import { calculateAggregateMetrics } from "./gepa-metric.js";

async function runComparison(optimizerName: string, filePath: string, testSet: any[]) {
  console.log(`\n${optimizerName}...`);
  const predictor = ax(stockPredictorSignature);

  try {
    const data = JSON.parse(readFileSync(filePath, "utf-8"));

    if (data.optimizedProgram) {
      predictor.applyOptimization(data.optimizedProgram);
    } else {
      if (data.instruction) predictor.setInstruction(data.instruction);
      if (data.demos) predictor.setDemos(data.demos);
    }
  } catch (error) {
    if (optimizerName !== "Baseline") {
      console.warn(`⚠️ Fichier non trouvé: ${filePath}`);
      return null;
    }
  }

  const results = [];
  for (const ex of testSet) {
    const res = await predictor.forward(studentLLM, {
      productName: ex.productName,
      recentOrders: ex.recentOrders,
      lastYearOrders: ex.lastYearOrders,
      currentDate: ex.currentDate,
    });
    results.push({
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

  return calculateAggregateMetrics(results);
}

async function main() {
  console.log("=".repeat(60));
  console.log("  COMPARAISON: Baseline vs MiPRO vs GEPA");
  console.log("=".repeat(60));

  // Charger test set
  const valExamples = JSON.parse(
    readFileSync("./optimization-results/training-examples-gepa-val.json", "utf-8")
  );
  const testSet = valExamples.slice(0, 100);
  console.log(`\nTest: ${testSet.length} exemples`);

  // Comparaisons
  const baseline = await runComparison("Baseline", "", testSet);
  const mipro = await runComparison(
    "MiPRO",
    "./optimization-results/stock-predictor-mipro.json",
    testSet
  );
  const gepa = await runComparison(
    "GEPA",
    "./optimization-results/stock-predictor-gepa.json",
    testSet
  );

  // Tableau
  console.log("\n" + "=".repeat(60));
  console.log("  RÉSULTATS");
  console.log("=".repeat(60));
  console.log("\n| Métrique   | Baseline | MiPRO    | GEPA     | Objectif |");
  console.log("|------------|----------|----------|----------|----------|");

  const formatPct = (val: number | undefined) =>
    val ? `${(val * 100).toFixed(1)}%`.padStart(6) : "  N/A  ";
  const formatNum = (val: number | undefined) =>
    val ? `${val.toFixed(1)}%`.padStart(6) : "  N/A  ";

  console.log(
    `| Recall     | ${formatPct(baseline?.recall)} | ${formatPct(mipro?.recall)} | ${formatPct(gepa?.recall)} | ≥90%     |`
  );
  console.log(
    `| Precision  | ${formatPct(baseline?.precision)} | ${formatPct(mipro?.precision)} | ${formatPct(gepa?.precision)} | ≥40%     |`
  );
  console.log(
    `| F1         | ${formatPct(baseline?.f1)} | ${formatPct(mipro?.f1)} | ${formatPct(gepa?.f1)} | -        |`
  );
  console.log(
    `| WMAPE      | ${formatNum(baseline?.wmape)} | ${formatNum(mipro?.wmape)} | ${formatNum(gepa?.wmape)} | ≤25%     |`
  );

  // Verdict
  const gepaOK = gepa && gepa.recall >= 0.9 && gepa.precision >= 0.4 && gepa.wmape <= 25.0;
  const miproOK =
    mipro && mipro.recall >= 0.9 && mipro.precision >= 0.4 && mipro.wmape <= 25.0;

  console.log("\n📊 VERDICT:");
  if (gepaOK && !miproOK) {
    console.log("   ✅ GEPA atteint tous les objectifs → DÉPLOYER");
  } else if (miproOK && !gepaOK) {
    console.log("   ⚠️ MiPRO meilleur → GARDER MiPRO");
  } else if (gepaOK && miproOK) {
    console.log("   ✅ Les deux OK → Comparer F1");
    if (gepa.f1 > mipro.f1) {
      console.log("   → GEPA F1 supérieur → DÉPLOYER");
    } else {
      console.log("   → MiPRO F1 supérieur → GARDER");
    }
  } else {
    console.log("   ❌ Aucun n'atteint objectifs → RÉOPTIMISER");
  }
}

main().catch(console.error);
