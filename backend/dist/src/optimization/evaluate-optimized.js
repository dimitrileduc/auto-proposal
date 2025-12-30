/**
 * Évalue le prompt optimisé vs baseline
 *
 * Compare les métriques AVANT/APRÈS l'optimisation
 */
import "dotenv/config";
import { readFileSync } from "fs";
import { ax } from "@ax-llm/ax";
import { studentLLM, MODEL } from "./ax-config.js";
import { stockPredictorSignature } from "./stock-predictor.js";
import { extractExamples } from "./extract-examples.js";
const JSON_PATH = "./analysis-folder/predictions-v2-all-clients.json";
const OPTIMIZED_PATH = "./optimization-results/stock-predictor-optimized.json";
async function evaluate(predictor, examples, maxSamples = 50) {
    const result = { tp: 0, fp: 0, fn: 0, tn: 0, quantityErrors: [] };
    const sample = examples.slice(0, maxSamples);
    for (let i = 0; i < sample.length; i++) {
        const ex = sample[i];
        process.stdout.write(`\r   Testing ${i + 1}/${sample.length}...`);
        try {
            const pred = await predictor.forward(studentLLM, {
                productName: ex.productName,
                recentOrders: ex.recentOrders,
                lastYearOrders: ex.lastYearOrders,
                currentDate: ex.currentDate,
            });
            const predictedOrder = pred.shouldOrder && pred.recommendedQuantity > 0;
            const actualOrder = ex.shouldOrder && ex.expectedQuantity > 0;
            if (predictedOrder && actualOrder) {
                result.tp++;
                const error = Math.abs(pred.recommendedQuantity - ex.expectedQuantity) / ex.expectedQuantity;
                result.quantityErrors.push(error);
            }
            else if (predictedOrder && !actualOrder) {
                result.fp++;
            }
            else if (!predictedOrder && actualOrder) {
                result.fn++;
            }
            else {
                result.tn++;
            }
        }
        catch (error) {
            console.error(`\n   Erreur sur exemple ${i}:`, error);
        }
    }
    console.log(); // New line after progress
    return result;
}
function computeMetrics(result) {
    const precision = result.tp + result.fp > 0
        ? result.tp / (result.tp + result.fp)
        : 0;
    const recall = result.tp + result.fn > 0
        ? result.tp / (result.tp + result.fn)
        : 0;
    const f1 = precision + recall > 0
        ? (2 * precision * recall) / (precision + recall)
        : 0;
    const wmape = result.quantityErrors.length > 0
        ? result.quantityErrors.reduce((a, b) => a + b, 0) / result.quantityErrors.length
        : 0;
    return { precision, recall, f1, wmape, ...result };
}
async function main() {
    console.log("=".repeat(60));
    console.log("  ÉVALUATION: Baseline vs Optimisé");
    console.log("=".repeat(60));
    console.log(`\nModel: ${MODEL}\n`);
    // Charger les exemples
    console.log("1. Chargement des exemples de test...");
    const examples = await extractExamples(JSON_PATH, {
        maxExamples: 100,
        diversify: true,
    });
    console.log(`   ${examples.length} exemples chargés\n`);
    // Charger le résultat optimisé
    const optimizedData = JSON.parse(readFileSync(OPTIMIZED_PATH, "utf-8"));
    const demos = optimizedData.demos?.[0]?.traces || [];
    console.log(`   ${demos.length} demos few-shot trouvés\n`);
    // Test 1: Baseline (sans few-shot)
    console.log("2. Test BASELINE (sans few-shot)...");
    const baselinePredictor = ax(stockPredictorSignature);
    const baselineResult = await evaluate(baselinePredictor, examples, 40);
    const baselineMetrics = computeMetrics(baselineResult);
    console.log("\n   BASELINE:");
    console.log(`   - Precision: ${(baselineMetrics.precision * 100).toFixed(1)}%`);
    console.log(`   - Recall:    ${(baselineMetrics.recall * 100).toFixed(1)}%`);
    console.log(`   - F1:        ${(baselineMetrics.f1 * 100).toFixed(1)}%`);
    console.log(`   - WMAPE:     ${(baselineMetrics.wmape * 100).toFixed(1)}%`);
    console.log(`   - TP: ${baselineMetrics.tp}, FP: ${baselineMetrics.fp}, FN: ${baselineMetrics.fn}, TN: ${baselineMetrics.tn}`);
    // Test 2: Avec few-shot (demos injectés)
    console.log("\n3. Test OPTIMISÉ (avec few-shot)...");
    // Les demos de l'optimizer sont déjà au bon format
    // Format: [{ traces: [...], programId: "xxx" }]
    const optimizedPredictor = ax(stockPredictorSignature);
    optimizedPredictor.setDemos(optimizedData.demos);
    console.log(`   ${optimizedData.demos.length} demo groups injectés (${demos.length} traces)\n`);
    const optimizedResult = await evaluate(optimizedPredictor, examples, 40);
    const optimizedMetrics = computeMetrics(optimizedResult);
    console.log("\n   OPTIMISÉ:");
    console.log(`   - Precision: ${(optimizedMetrics.precision * 100).toFixed(1)}%`);
    console.log(`   - Recall:    ${(optimizedMetrics.recall * 100).toFixed(1)}%`);
    console.log(`   - F1:        ${(optimizedMetrics.f1 * 100).toFixed(1)}%`);
    console.log(`   - WMAPE:     ${(optimizedMetrics.wmape * 100).toFixed(1)}%`);
    console.log(`   - TP: ${optimizedMetrics.tp}, FP: ${optimizedMetrics.fp}, FN: ${optimizedMetrics.fn}, TN: ${optimizedMetrics.tn}`);
    // Comparaison
    console.log("\n" + "=".repeat(60));
    console.log("  COMPARAISON");
    console.log("=".repeat(60));
    console.log("\n   | Métrique   | Baseline | Optimisé | Delta    |");
    console.log("   |------------|----------|----------|----------|");
    const pDelta = optimizedMetrics.precision - baselineMetrics.precision;
    const rDelta = optimizedMetrics.recall - baselineMetrics.recall;
    const wDelta = optimizedMetrics.wmape - baselineMetrics.wmape;
    console.log(`   | Precision  | ${(baselineMetrics.precision * 100).toFixed(1)}%    | ${(optimizedMetrics.precision * 100).toFixed(1)}%    | ${pDelta >= 0 ? '+' : ''}${(pDelta * 100).toFixed(1)}%    |`);
    console.log(`   | Recall     | ${(baselineMetrics.recall * 100).toFixed(1)}%    | ${(optimizedMetrics.recall * 100).toFixed(1)}%    | ${rDelta >= 0 ? '+' : ''}${(rDelta * 100).toFixed(1)}%    |`);
    console.log(`   | WMAPE      | ${(baselineMetrics.wmape * 100).toFixed(1)}%    | ${(optimizedMetrics.wmape * 100).toFixed(1)}%    | ${wDelta >= 0 ? '+' : ''}${(wDelta * 100).toFixed(1)}%    |`);
    console.log("\n" + "=".repeat(60));
}
main().catch(console.error);
