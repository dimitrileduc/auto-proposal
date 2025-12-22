/**
 * Script principal d'optimisation du prompt avec ax MiPRO
 *
 * Usage:
 *   npx tsx src/optimization/run-optimization.ts
 *
 * Options via env:
 *   MAX_EXAMPLES=50        Nombre d'exemples (défaut: 300)
 *   NUM_TRIALS=5           Nombre d'essais MiPRO (défaut: 10)
 *   DRY_RUN=true          Juste extraire les exemples, pas d'optimisation
 */

import "dotenv/config";
import { writeFileSync, mkdirSync } from "fs";
import { ax, AxBootstrapFewShot } from "@ax-llm/ax";
import { studentLLM, MODEL } from "./ax-config.js";
import { stockPredictorSignature, type StockTrainingExample } from "./stock-predictor.js";
import { extractExamples, saveExamplesToFile } from "./extract-examples.js";
import { stockMetric, calculateAggregateMetrics } from "./metric.js";

// Configuration
const MAX_EXAMPLES = parseInt(process.env.MAX_EXAMPLES || "1000");
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "150");
const NUM_CANDIDATES = parseInt(process.env.NUM_CANDIDATES || "10");
const DRY_RUN = process.env.DRY_RUN === "true";

const JSON_PATH = "./analysis-folder/predictions-v2-all-clients.json";
const OUTPUT_DIR = "./optimization-results";

async function main() {
  console.log("=".repeat(60));
  console.log("  ax-llm MiPRO Optimization pour Stock Prediction");
  console.log("=".repeat(60));
  console.log(`\nConfiguration:`);
  console.log(`  - Model: ${MODEL}`);
  console.log(`  - Max examples: ${MAX_EXAMPLES}`);
  console.log(`  - Num trials: ${NUM_TRIALS}`);
  console.log(`  - Dry run: ${DRY_RUN}`);
  console.log();

  // Créer le dossier output
  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Étape 1: Extraction des exemples
  console.log("1. Extraction des exemples...");
  const examples = await extractExamples(JSON_PATH, {
    maxExamples: MAX_EXAMPLES,
    diversify: true,
    minOrderCount: 2,
  });
  console.log(`   Total: ${examples.length} exemples extraits\n`);

  // Sauvegarder les exemples pour inspection
  saveExamplesToFile(examples, `${OUTPUT_DIR}/training-examples.json`);

  if (DRY_RUN) {
    console.log("Mode DRY_RUN: arrêt avant optimisation.");
    return;
  }

  // Étape 2: Créer le programme ax
  console.log("2. Création du programme ax...");
  const stockPredictor = ax(stockPredictorSignature);
  console.log("   Programme créé avec signature:\n");
  console.log(`   Input: productName, recentOrders, lastYearOrders, currentDate`);
  console.log(`   Output: quantity, reasoning (QUANTITÉ SEULE)\n`);

  // Étape 3: Préparer les exemples pour ax
  // ax attend les exemples avec les clés correspondant à la signature
  // SIMPLIFIÉ: quantité seule
  const axExamples = examples.map((ex) => ({
    // Inputs
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    // Expected outputs (ground truth) - QUANTITÉ SEULE
    quantity: ex.quantity,
    reasoning: "", // Le reasoning sera généré
  }));

  // Étape 4: Définir la métrique pour ax - 100% QUANTITÉ
  const axMetric = ({
    prediction,
    example,
  }: {
    prediction: { quantity: number };
    example: typeof axExamples[0];
  }) => {
    return stockMetric({
      prediction,
      example: {
        productName: example.productName,
        recentOrders: example.recentOrders,
        lastYearOrders: example.lastYearOrders,
        currentDate: example.currentDate,
        quantity: example.quantity,
      },
    });
  };

  // Étape 5: Baseline - évaluer le programme non optimisé
  console.log("3. Évaluation baseline (avant optimisation)...");
  const baselineResults: Array<{
    prediction: { quantity: number };
    example: StockTrainingExample;
  }> = [];

  // Tester sur un petit échantillon pour le baseline
  const baselineSample = axExamples.slice(0, Math.min(20, axExamples.length));
  for (const example of baselineSample) {
    try {
      const result = await stockPredictor.forward(studentLLM, {
        productName: example.productName,
        recentOrders: example.recentOrders,
        lastYearOrders: example.lastYearOrders,
        currentDate: example.currentDate,
      });
      baselineResults.push({
        prediction: {
          quantity: result.quantity || 0,
        },
        example: {
          productName: example.productName,
          recentOrders: example.recentOrders,
          lastYearOrders: example.lastYearOrders,
          currentDate: example.currentDate,
          quantity: example.quantity,
        },
      });
    } catch (error) {
      console.error(`   Erreur sur exemple: ${error}`);
    }
  }

  const baselineMetrics = calculateAggregateMetrics(baselineResults);
  console.log(`\n   Baseline metrics (sur ${baselineResults.length} exemples):`);
  console.log(`   - Average score: ${(baselineMetrics.averageScore * 100).toFixed(1)}%`);
  console.log(`   - Precision: ${(baselineMetrics.precision * 100).toFixed(1)}%`);
  console.log(`   - Recall: ${(baselineMetrics.recall * 100).toFixed(1)}%`);
  console.log(`   - F1: ${(baselineMetrics.f1 * 100).toFixed(1)}%`);
  console.log(`   - WMAPE: ${baselineMetrics.wmape.toFixed(1)}%\n`);

  // Étape 6: Lancer BootstrapFewShot
  console.log("4. Lancement de BootstrapFewShot...");
  console.log(`   (${NUM_TRIALS} rounds)\n`);

  const optimizer = new AxBootstrapFewShot({
    studentAI: studentLLM,
    examples: axExamples,
    options: {
      maxRounds: NUM_TRIALS,
      maxDemos: 25,  // Max demos pour meilleur contexte
      verboseMode: true,
    },
  });

  const startTime = Date.now();

  try {
    const result = await optimizer.compile(stockPredictor, axExamples, axMetric);

    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n5. Optimisation terminée en ${duration} minutes`);

    console.log(`   Best score: ${result.bestScore?.toFixed(3)}`);
    console.log(`   Demos trouvés: ${result.demos?.length || 0}`);

    // Sauvegarder le résultat
    const savedData = {
      version: "1.0",
      optimizedAt: new Date().toISOString(),
      model: MODEL,
      config: {
        maxExamples: MAX_EXAMPLES,
        numTrials: NUM_TRIALS,
      },
      baseline: baselineMetrics,
      bestScore: result.bestScore,
      stats: result.stats,
      demos: result.demos,
      finalConfiguration: result.finalConfiguration,
    };

    const outputPath = `${OUTPUT_DIR}/stock-predictor-optimized.json`;
    writeFileSync(outputPath, JSON.stringify(savedData, null, 2));
    console.log(`\n6. Résultat sauvegardé dans: ${outputPath}`);

    // Afficher les demos sélectionnés
    if (result.demos && result.demos.length > 0) {
      console.log("\n" + "=".repeat(60));
      console.log("  EXEMPLES FEW-SHOT SÉLECTIONNÉS");
      console.log("=".repeat(60));
      for (let i = 0; i < result.demos.length; i++) {
        const demo = result.demos[i];
        const trace = demo.traces?.[0];
        if (trace) {
          console.log(`\n  Demo ${i + 1}:`);
          console.log(`    Product: ${trace.productName?.slice(0, 50)}...`);
          console.log(`    Quantity: ${trace.quantity}`);
          console.log(`    Reasoning: ${trace.reasoning?.slice(0, 80)}...`);
        }
      }
      console.log("\n" + "=".repeat(60));
    }
  } catch (error) {
    console.error("\nErreur pendant l'optimisation:", error);
    throw error;
  }
}

// Run
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
