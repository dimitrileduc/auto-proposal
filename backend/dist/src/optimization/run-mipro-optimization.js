/**
 * Script d'optimisation MiPRO (Multi-Prompt Instruction Proposal Optimizer)
 *
 * Amélioration par rapport à BootstrapFewShot:
 * - Optimise AUSSI l'instruction (pas juste les few-shots)
 * - Bayesian optimization pour trouver le meilleur combo plus vite
 * - Teacher-Student: Claude Sonnet génère les instructions, Gemini exécute
 *
 * Usage:
 *   npx tsx src/optimization/run-mipro-optimization.ts
 *
 * Options via env:
 *   MAX_EXAMPLES=1000      Nombre d'exemples (défaut: 1000)
 *   NUM_TRIALS=50          Nombre d'essais MiPRO (défaut: 50)
 *   DRY_RUN=true           Juste extraire les exemples, pas d'optimisation
 */
import "dotenv/config";
import { writeFileSync, mkdirSync } from "fs";
import { ax, AxMiPRO } from "@ax-llm/ax";
import { studentLLM, MODEL } from "./ax-config.js";
import { stockPredictorSignature } from "./stock-predictor.js";
import { extractExamples, saveExamplesToFile } from "./extract-examples.js";
import { stockMetric, calculateAggregateMetrics } from "./metric.js";
// Configuration - MAX pour avoir le plus de données d'entraînement
const MAX_EXAMPLES = parseInt(process.env.MAX_EXAMPLES || "5000");
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "100");
const DRY_RUN = process.env.DRY_RUN === "true";
const JSON_PATH = "./analysis-folder/predictions-v2-all-clients.json";
const OUTPUT_DIR = "./optimization-results";
async function main() {
    console.log("=".repeat(60));
    console.log("  ax-llm MiPRO Optimization pour Stock Prediction");
    console.log("=".repeat(60));
    console.log(`\nConfiguration:`);
    console.log(`  - Model: ${MODEL} (student & teacher)`);
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
    saveExamplesToFile(examples, `${OUTPUT_DIR}/training-examples-mipro.json`);
    if (DRY_RUN) {
        console.log("Mode DRY_RUN: arrêt avant optimisation.");
        return;
    }
    // Étape 2: Créer le programme ax
    console.log("2. Création du programme ax...");
    const stockPredictor = ax(stockPredictorSignature);
    console.log("   Programme créé avec signature:\n");
    console.log(`   Input: productName, recentOrders, lastYearOrders, currentDate`);
    console.log(`   Output: quantity, reasoning\n`);
    // Étape 3: Préparer les exemples pour ax
    const axExamples = examples.map((ex) => ({
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
        quantity: ex.quantity,
        reasoning: "",
    }));
    // Étape 4: Définir la métrique
    const axMetric = ({ prediction, example, }) => {
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
    // Étape 5: Baseline
    console.log("3. Évaluation baseline (avant optimisation)...");
    const baselineResults = [];
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
                prediction: { quantity: result.quantity || 0 },
                example: {
                    productName: example.productName,
                    recentOrders: example.recentOrders,
                    lastYearOrders: example.lastYearOrders,
                    currentDate: example.currentDate,
                    quantity: example.quantity,
                },
            });
        }
        catch (error) {
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
    // Étape 6: Lancer MiPRO
    console.log("4. Lancement de MiPRO...");
    console.log(`   (${NUM_TRIALS} trials avec instruction optimization)\n`);
    const optimizer = new AxMiPRO({
        studentAI: studentLLM,
        teacherAI: studentLLM,
        optimizerEndpoint: "http://localhost:8000",
        // Config simple qui marche (pas de sampleCount qui casse le parsing)
        options: {
            numTrials: NUM_TRIALS,
            numCandidates: 10,
            maxBootstrappedDemos: 50,
            maxLabeledDemos: 10,
            programAwareProposer: true,
            dataAwareProposer: true,
            tipAwareProposer: true,
            fewshotAwareProposer: true,
            verbose: true,
            earlyStoppingTrials: 10,
            minImprovementThreshold: 0.01,
        },
    });
    const startTime = Date.now();
    try {
        const result = await optimizer.compile(stockPredictor, axExamples, axMetric);
        const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
        console.log(`\n5. Optimisation MiPRO terminée en ${duration} minutes`);
        console.log(`   Best score: ${result.bestScore?.toFixed(3)}`);
        console.log(`   Demos trouvés: ${result.demos?.length || 0}`);
        // Extraire l'instruction optimisée si disponible
        const optimizedInstruction = result.optimizedProgram?.instruction || null;
        if (optimizedInstruction) {
            console.log(`   Instruction optimisée: OUI (${optimizedInstruction.length} chars)`);
        }
        // Sauvegarder le résultat
        const savedData = {
            version: "2.0",
            optimizerType: "mipro",
            optimizedAt: new Date().toISOString(),
            model: MODEL,
            config: {
                maxExamples: MAX_EXAMPLES,
                numTrials: NUM_TRIALS,
                maxBootstrappedDemos: 50,
            },
            baseline: baselineMetrics,
            bestScore: result.bestScore,
            instruction: optimizedInstruction,
            demos: result.demos,
            stats: result.stats,
            finalConfiguration: result.finalConfiguration,
        };
        const outputPath = `${OUTPUT_DIR}/stock-predictor-mipro.json`;
        writeFileSync(outputPath, JSON.stringify(savedData, null, 2));
        console.log(`\n6. Résultat sauvegardé dans: ${outputPath}`);
        // Afficher l'instruction optimisée
        if (optimizedInstruction) {
            console.log("\n" + "=".repeat(60));
            console.log("  INSTRUCTION OPTIMISÉE");
            console.log("=".repeat(60));
            console.log(optimizedInstruction);
            console.log("=".repeat(60));
        }
        // Afficher les demos sélectionnés
        if (result.demos && result.demos.length > 0) {
            console.log("\n" + "=".repeat(60));
            console.log(`  EXEMPLES FEW-SHOT SÉLECTIONNÉS (${result.demos.length})`);
            console.log("=".repeat(60));
            for (let i = 0; i < Math.min(5, result.demos.length); i++) {
                const demo = result.demos[i];
                const trace = demo.traces?.[0];
                if (trace) {
                    console.log(`\n  Demo ${i + 1}:`);
                    console.log(`    Product: ${trace.productName?.slice(0, 50)}...`);
                    console.log(`    Quantity: ${trace.quantity}`);
                    console.log(`    Reasoning: ${trace.reasoning?.slice(0, 80)}...`);
                }
            }
            if (result.demos.length > 5) {
                console.log(`\n  ... et ${result.demos.length - 5} autres demos`);
            }
            console.log("\n" + "=".repeat(60));
        }
    }
    catch (error) {
        console.error("\nErreur pendant l'optimisation MiPRO:", error);
        throw error;
    }
}
// Run
main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
});
