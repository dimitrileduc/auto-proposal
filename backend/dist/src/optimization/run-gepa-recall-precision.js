/**
 * GEPA Multi-Objectif: Recall + Precision
 * Exactement comme dans la doc ax-docs/GEPA.md
 */
import "dotenv/config";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { ax, AxGEPA } from "@ax-llm/ax";
import { teacherLLM, studentLLM, MODEL, TEACHER_MODEL } from "./ax-config.js";
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "20");
const EARLY_STOPPING = parseInt(process.env.EARLY_STOPPING || "8");
const TRAIN_SIZE = parseInt(process.env.TRAIN_SIZE || "100");
const VAL_SIZE = parseInt(process.env.VAL_SIZE || "50");
const OUTPUT_DIR = "./optimization-results";
const classificationSignature = `
productName:string "Nom du produit",
recentOrders:string "Historique récent (2025)",
lastYearOrders:string "Historique N-1 (2024)",
currentDate:string "Date d'analyse"
->
willOrder:boolean "true si commande probable dans 30 jours",
reasoning:string "Explication courte"
`;
// Métrique MULTI-OBJECTIF exactement comme dans la doc
const multiMetric = ({ prediction, example }) => {
    const predicted = prediction?.willOrder === true;
    const actual = example?.willOrder === true || example?.quantity > 0;
    const truePositive = predicted && actual ? 1 : 0;
    const falsePositive = predicted && !actual ? 1 : 0;
    const falseNegative = !predicted && actual ? 1 : 0;
    return {
        precision: falsePositive === 0 ? 1 : truePositive / (truePositive + falsePositive),
        recall: falseNegative === 0 ? 1 : truePositive / (truePositive + falseNegative),
    };
};
async function main() {
    console.log("=".repeat(60));
    console.log("  GEPA Multi-Objectif: Recall + Precision");
    console.log("=".repeat(60));
    console.log(`\nConfig: Teacher=${TEACHER_MODEL}, Student=${MODEL}`);
    console.log(`Trials: ${NUM_TRIALS}, Early stop: ${EARLY_STOPPING}`);
    mkdirSync(OUTPUT_DIR, { recursive: true });
    // Charger exemples
    const trainData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-train.json`, "utf-8"));
    const valData = JSON.parse(readFileSync(`${OUTPUT_DIR}/training-examples-gepa-val.json`, "utf-8"));
    // Équilibrer
    const positives = [...trainData, ...valData].filter((e) => e.quantity > 0);
    const negatives = [...trainData, ...valData].filter((e) => e.quantity === 0);
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
    console.log(`\nTrain: ${trainExamples.length} (${trainPosCount} pos, ${trainNegCount} neg)`);
    console.log(`Val: ${valExamples.length} (${valPosCount} pos, ${valNegCount} neg)`);
    // Créer le programme avec instruction de base
    const classifier = ax(classificationSignature);
    // CRUCIAL: Instruction de base que GEPA va améliorer
    classifier.setDescription(`Tu es un expert en prévision de réapprovisionnement pour épiceries.

OBJECTIF: Prédire si un produit sera commandé dans les 30 prochains jours.

RÈGLES:
1. SAISONNALITÉ: Compare avec les commandes N-1 (même période l'an dernier)
2. FRÉQUENCE: Calcule l'intervalle moyen entre commandes récentes
3. STOCK BAS: Si dernière commande > intervalle moyen → probable commande
4. EN CAS DE DOUTE: Préfère TRUE (éviter les ruptures)

IMPORTANT: Rupture (faux négatif) est PIRE que surstock (faux positif).`);
    // Préparer exemples pour ax
    const axTrainExamples = trainExamples.map((ex) => ({
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
        willOrder: ex.quantity > 0,
        reasoning: "",
    }));
    const axValExamples = valExamples.map((ex) => ({
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
        quantity: ex.quantity,
        willOrder: ex.quantity > 0,
        reasoning: "",
    }));
    console.log("\nGEPA Optimization...\n");
    const optimizer = new AxGEPA({
        teacherAI: teacherLLM,
        studentAI: studentLLM,
        numTrials: NUM_TRIALS,
        earlyStoppingTrials: EARLY_STOPPING,
        minibatch: true,
        minibatchSize: 20,
        verbose: true,
    });
    const startTime = Date.now();
    const result = await optimizer.compile(classifier, axTrainExamples, multiMetric, {
        validationExamples: axValExamples,
        feedbackExamples: axValExamples.slice(0, 20),
        feedbackFn: ({ prediction, example }) => prediction?.willOrder === example?.willOrder
            ? "✅ Correct"
            : [`Expected: ${example?.willOrder}`, `Got: ${prediction?.willOrder}`],
        maxMetricCalls: NUM_TRIALS * TRAIN_SIZE * 2,
        // Scalarizer pour tie-break: priorité recall (70%)
        paretoScalarize: (s) => 0.7 * (s.recall ?? 0) + 0.3 * (s.precision ?? 0),
    });
    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n✅ Terminé en ${duration} min`);
    console.log(`Pareto front: ${result.paretoFrontSize} points`);
    console.log(`Hypervolume: ${result.hypervolume?.toFixed(3) || "N/A"}`);
    // Afficher le front Pareto
    console.log("\n📊 Pareto Front:");
    for (const [i, p] of [...result.paretoFront].entries()) {
        if (i >= 5)
            break;
        const scores = p.scores;
        console.log(`  #${i + 1}: recall=${scores.recall?.toFixed(3)}, precision=${scores.precision?.toFixed(3)}`);
    }
    // Validation finale
    if (result.optimizedProgram) {
        classifier.applyOptimization(result.optimizedProgram);
        console.log(`\n📝 Best score: ${result.optimizedProgram.bestScore?.toFixed(3)}`);
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
            if (predicted && actual)
                tp++;
            else if (predicted && !actual)
                fp++;
            else if (!predicted && actual)
                fn++;
            else
                tn++;
        }
        const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
        const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
        const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
        console.log(`\n📊 Validation (${axValExamples.length} exemples):`);
        console.log(`   TP=${tp}, FP=${fp}, FN=${fn}, TN=${tn}`);
        console.log(`   Recall:    ${(recall * 100).toFixed(1)}%`);
        console.log(`   Precision: ${(precision * 100).toFixed(1)}%`);
        console.log(`   F1:        ${(f1 * 100).toFixed(1)}%`);
        // Sauvegarder
        const savedData = {
            version: "2.0",
            phase: "gepa-recall-precision",
            optimizedAt: new Date().toISOString(),
            models: { teacher: TEACHER_MODEL, student: MODEL },
            config: { numTrials: NUM_TRIALS, trainSize: trainExamples.length, valSize: valExamples.length },
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
            console.log("  INSTRUCTION OPTIMISÉE");
            console.log("=".repeat(60));
            console.log(result.optimizedProgram.instruction);
        }
    }
}
main().catch(console.error);
