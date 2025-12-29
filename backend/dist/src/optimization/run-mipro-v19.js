/**
 * MiPRO Optimization - v19-400 Data
 *
 * Objectif: Améliorer PRECISION tout en gardant RECALL ≥ 88%
 *
 * Usage:
 *   npx tsx src/optimization/run-mipro-v19.ts
 *
 * Env vars:
 *   MAX_EXAMPLES=500     (défaut: 500)
 *   NUM_TRIALS=30        (défaut: 30)
 *   DRY_RUN=true         (extraction uniquement)
 *   USE_TEACHER=false    (désactiver teacher)
 */
import "dotenv/config";
import { writeFileSync, readFileSync, readdirSync, mkdirSync } from "fs";
import { join } from "path";
import { ax, AxMiPRO } from "@ax-llm/ax";
import { studentLLM, teacherLLM, MODEL } from "./ax-config.js";
// Configuration
const MAX_EXAMPLES = parseInt(process.env.MAX_EXAMPLES || "500");
const NUM_TRIALS = parseInt(process.env.NUM_TRIALS || "30");
const DRY_RUN = process.env.DRY_RUN === "true";
const USE_TEACHER = process.env.USE_TEACHER !== "false";
const REPORTS_DIR = "./reports-output-v19-400";
const OUTPUT_DIR = "./optimization-results";
// ============================================
// PROMPT (identique à llm-ax-optimized.service.ts)
// ============================================
const stockPredictorSignature = `
"Expert Supply Chain B2B - Prédiction réapprovisionnement

MÉTHODE (Chain of Thought):

ÉTAPE 1 - DÉTECTION DU BESOIN (Recall):
- Analyser cycle de commande et dernière date
- Évaluer risque rupture horizon 30 jours
- Règle: Si DOUTE sur cycle ou rotation → Prévoir commande (principe précaution B2B)
- Mieux détecter un besoin incertain qu'une rupture manquée

ÉTAPE 2 - ESTIMATION QUANTITÉ (Précision):
- Utiliser la MÉDIANE des quantités historique récent
- NE PAS ajuster pour saisonnalité SAUF si pattern N-1 vraiment flagrant et répété
- Ne pas surestimer pour stock de sécurité
- Ne pas prendre le maximum, prendre la valeur typique

DONNÉES:
- Historique récent: source principale (5 derniers mois)
- Historique N-1: uniquement si saisonnalité évidente
- Médiane: robuste aux outliers, préférée à la moyenne"

productName:string "Nom du produit",
recentOrders:string "Historique récent (5 mois)",
lastYearOrders:string "Historique N-1 (saisonnalité)",
currentDate:string "Date d'analyse"
->
quantity:number "Quantité prochaine commande (0 si non probable)",
reasoning:string "1) Risque rupture? 2) Cycle et dernière commande? 3) Quantité estimée et pourquoi?"
`;
// ============================================
// MÉTRIQUE SIMPLE
// ============================================
function stockMetric({ prediction, example }) {
    const predicted = Math.round(prediction?.quantity || 0) > 0;
    const actual = example.quantity > 0;
    // FN = 0 (protège le recall)
    if (actual && !predicted)
        return 0;
    // TP = 1 (parfait)
    if (actual && predicted)
        return 1;
    // TN = 1 (parfait)
    if (!actual && !predicted)
        return 1;
    // FP = 0.3 (pénalité pour améliorer precision)
    if (!actual && predicted)
        return 0.3;
    return 0;
}
// ============================================
// EXTRACTION DES DONNÉES
// ============================================
function formatOrders(orders) {
    if (!orders || orders.length === 0)
        return "(Aucune commande)";
    return orders
        .map((o) => {
        const date = o.date.split(" ")[0];
        const dayName = new Date(date).toLocaleDateString("fr-FR", { weekday: "short" });
        return `${date} (${dayName}): ${o.quantity}u`;
    })
        .join("\n");
}
function extractFromV2File(filePath) {
    const examples = [];
    try {
        const content = readFileSync(filePath, "utf-8");
        const data = JSON.parse(content);
        const cutoffDate = data.meta?.config?.cutoffDate?.split(" ")[0] || "2025-01-01";
        const products = data.products || {};
        for (const product of products.truePositives || []) {
            if (product.llm?.input && product.history?.orderCount >= 2) {
                examples.push({
                    productName: product.productName,
                    recentOrders: formatOrders(product.llm.input.recentOrders),
                    lastYearOrders: formatOrders(product.llm.input.lastYearOrders),
                    currentDate: cutoffDate,
                    quantity: product.reality?.quantity ?? 0,
                });
            }
        }
        for (const product of products.falsePositives || []) {
            if (product.llm?.input) {
                examples.push({
                    productName: product.productName,
                    recentOrders: formatOrders(product.llm.input.recentOrders),
                    lastYearOrders: formatOrders(product.llm.input.lastYearOrders),
                    currentDate: cutoffDate,
                    quantity: 0,
                });
            }
        }
        for (const product of products.falseNegatives || []) {
            if (product.llm?.input) {
                examples.push({
                    productName: product.productName,
                    recentOrders: formatOrders(product.llm.input.recentOrders),
                    lastYearOrders: formatOrders(product.llm.input.lastYearOrders),
                    currentDate: cutoffDate,
                    quantity: product.reality?.quantity ?? 0,
                });
            }
        }
    }
    catch { }
    return examples;
}
function extractAndSplitExamples(reportsDir, maxExamples, valRatio = 0.2) {
    console.log(`📂 Lecture des fichiers depuis ${reportsDir}...`);
    const files = readdirSync(reportsDir).filter((f) => f.endsWith("-v2.json"));
    console.log(`   Trouvé ${files.length} fichiers v2.json`);
    const withOrder = [];
    const withoutOrder = [];
    for (const file of files) {
        for (const ex of extractFromV2File(join(reportsDir, file))) {
            if (ex.quantity > 0)
                withOrder.push(ex);
            else
                withoutOrder.push(ex);
        }
    }
    console.log(`\n📊 Exemples extraits:`);
    console.log(`   - Avec commande (quantity > 0): ${withOrder.length}`);
    console.log(`   - Sans commande (quantity = 0): ${withoutOrder.length}`);
    // Shuffle avant split
    const shuffledWith = shuffle(withOrder);
    const shuffledWithout = shuffle(withoutOrder);
    // Calculer les tailles pour train et val (équilibrés 60/40)
    const totalTrain = Math.floor(maxExamples * (1 - valRatio));
    const totalVal = Math.floor(maxExamples * valRatio);
    const trainWith = Math.floor(totalTrain * 0.6);
    const trainWithout = Math.floor(totalTrain * 0.4);
    const valWith = Math.floor(totalVal * 0.6);
    const valWithout = Math.floor(totalVal * 0.4);
    // Split SANS overlap
    const train = shuffle([
        ...shuffledWith.slice(0, trainWith),
        ...shuffledWithout.slice(0, trainWithout),
    ]);
    const val = shuffle([
        ...shuffledWith.slice(trainWith, trainWith + valWith),
        ...shuffledWithout.slice(trainWithout, trainWithout + valWithout),
    ]);
    console.log(`\n✅ Split train/val (${Math.round((1 - valRatio) * 100)}/${Math.round(valRatio * 100)}):`);
    console.log(`   - Train: ${train.length} exemples`);
    console.log(`   - Val: ${val.length} exemples (UNSEEN)`);
    return { train, val };
}
function shuffle(arr) {
    const r = [...arr];
    for (let i = r.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
}
// ============================================
// CALCUL MÉTRIQUES AGRÉGÉES
// ============================================
function calcMetrics(results) {
    let tp = 0, fp = 0, fn = 0, tn = 0;
    for (const { pred, actual } of results) {
        const p = pred > 0, a = actual > 0;
        if (p && a)
            tp++;
        else if (p && !a)
            fp++;
        else if (!p && a)
            fn++;
        else
            tn++;
    }
    const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
    const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
    const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
    return { tp, fp, fn, tn, recall, precision, f1 };
}
// ============================================
// MAIN
// ============================================
async function main() {
    console.log("=".repeat(60));
    console.log("  MiPRO Optimization - Precision Focus (Recall ≥ 88%)");
    console.log("=".repeat(60));
    console.log(`\nConfig: ${MAX_EXAMPLES} examples, ${NUM_TRIALS} trials`);
    console.log(`Teacher: ${USE_TEACHER ? "ON" : "OFF"}\n`);
    mkdirSync(OUTPUT_DIR, { recursive: true });
    // 1. Extraction avec VRAI split train/val
    const { train, val } = extractAndSplitExamples(REPORTS_DIR, MAX_EXAMPLES, 0.2);
    writeFileSync(`${OUTPUT_DIR}/training-examples-mipro-v19-train.json`, JSON.stringify(train, null, 2));
    writeFileSync(`${OUTPUT_DIR}/training-examples-mipro-v19-val.json`, JSON.stringify(val, null, 2));
    if (DRY_RUN) {
        console.log("\n🛑 DRY_RUN: arrêt.");
        return;
    }
    // 2. Predictor
    const stockPredictor = ax(stockPredictorSignature);
    const trainExamples = train.map((ex) => ({ ...ex, reasoning: "" }));
    const valExamples = val.map((ex) => ({ ...ex, reasoning: "" }));
    // 3. Baseline (sur échantillon du TRAIN set)
    console.log("\n3. Baseline (sur 30 exemples train)...");
    const baselineResults = [];
    for (const ex of trainExamples.slice(0, 30)) {
        try {
            const res = await stockPredictor.forward(studentLLM, {
                productName: ex.productName,
                recentOrders: ex.recentOrders,
                lastYearOrders: ex.lastYearOrders,
                currentDate: ex.currentDate,
            });
            baselineResults.push({ pred: res.quantity || 0, actual: ex.quantity });
        }
        catch { }
    }
    const baseline = calcMetrics(baselineResults);
    console.log(`\n📊 BASELINE:`);
    console.log(`   Recall: ${(baseline.recall * 100).toFixed(1)}%`);
    console.log(`   Precision: ${(baseline.precision * 100).toFixed(1)}%`);
    console.log(`   F1: ${(baseline.f1 * 100).toFixed(1)}%`);
    console.log(`   TP=${baseline.tp} FP=${baseline.fp} FN=${baseline.fn} TN=${baseline.tn}`);
    // 4. MiPRO
    console.log(`\n4. MiPRO (${NUM_TRIALS} trials)...`);
    const optimizer = new AxMiPRO({
        studentAI: studentLLM,
        teacherAI: USE_TEACHER ? teacherLLM : studentLLM,
        optimizerEndpoint: "http://localhost:8000",
        optimizerTimeout: 120000,
        options: {
            numTrials: NUM_TRIALS,
            numCandidates: 8,
            maxBootstrappedDemos: 8,
            maxLabeledDemos: 5,
            programAwareProposer: true,
            dataAwareProposer: true,
            verbose: true,
            earlyStoppingTrials: 8,
            minImprovementThreshold: 0.005,
        },
        onProgress: (update) => {
            console.log(`   Trial ${update.round}/${NUM_TRIALS}: score=${update.currentScore?.toFixed(3) || 'N/A'} best=${update.bestScore?.toFixed(3) || 'N/A'}`);
        },
    });
    const startTime = Date.now();
    const result = await optimizer.compile(stockPredictor, trainExamples, stockMetric);
    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n✅ Terminé en ${duration} min`);
    console.log(`   Best score: ${result.bestScore?.toFixed(3)}`);
    console.log(`   Demos: ${result.demos?.length || 0}`);
    // 5. Baseline sur données UNSEEN (pour comparaison équitable)
    console.log(`\n5. Baseline sur ${valExamples.length} exemples UNSEEN...`);
    const baselinePredictor = ax(stockPredictorSignature); // Fresh predictor sans demos
    const baselineValResults = [];
    for (const ex of valExamples) {
        try {
            const res = await baselinePredictor.forward(studentLLM, {
                productName: ex.productName,
                recentOrders: ex.recentOrders,
                lastYearOrders: ex.lastYearOrders,
                currentDate: ex.currentDate,
            });
            baselineValResults.push({ pred: res.quantity || 0, actual: ex.quantity });
        }
        catch { }
    }
    const baselineVal = calcMetrics(baselineValResults);
    console.log(`\n📊 BASELINE (sur val UNSEEN):`);
    console.log(`   Recall: ${(baselineVal.recall * 100).toFixed(1)}%`);
    console.log(`   Precision: ${(baselineVal.precision * 100).toFixed(1)}%`);
    console.log(`   F1: ${(baselineVal.f1 * 100).toFixed(1)}%`);
    console.log(`   TP=${baselineVal.tp} FP=${baselineVal.fp} FN=${baselineVal.fn} TN=${baselineVal.tn}`);
    // 6. MiPRO sur données UNSEEN
    console.log(`\n6. MiPRO sur ${valExamples.length} exemples UNSEEN...`);
    if (result.optimizedProgram) {
        stockPredictor.applyOptimization(result.optimizedProgram);
    }
    else if (result.demos) {
        stockPredictor.setDemos(result.demos);
    }
    const valResults = [];
    for (const ex of valExamples) {
        try {
            const res = await stockPredictor.forward(studentLLM, {
                productName: ex.productName,
                recentOrders: ex.recentOrders,
                lastYearOrders: ex.lastYearOrders,
                currentDate: ex.currentDate,
            });
            valResults.push({ pred: res.quantity || 0, actual: ex.quantity });
        }
        catch { }
    }
    const miproVal = calcMetrics(valResults);
    console.log(`\n📊 MiPRO (sur val UNSEEN):`);
    console.log(`   Recall: ${(miproVal.recall * 100).toFixed(1)}%`);
    console.log(`   Precision: ${(miproVal.precision * 100).toFixed(1)}%`);
    console.log(`   F1: ${(miproVal.f1 * 100).toFixed(1)}%`);
    console.log(`   TP=${miproVal.tp} FP=${miproVal.fp} FN=${miproVal.fn} TN=${miproVal.tn}`);
    // 7. Comparaison VRAIE (sur données UNSEEN)
    const precisionDelta = ((miproVal.precision - baselineVal.precision) * 100).toFixed(1);
    const recallDelta = ((miproVal.recall - baselineVal.recall) * 100).toFixed(1);
    console.log("\n📈 AMÉLIORATION RÉELLE (sur UNSEEN):");
    console.log(`   Recall: ${(baselineVal.recall * 100).toFixed(1)}% → ${(miproVal.recall * 100).toFixed(1)}% (${recallDelta}%)`);
    console.log(`   Precision: ${(baselineVal.precision * 100).toFixed(1)}% → ${(miproVal.precision * 100).toFixed(1)}% (${precisionDelta}%)`);
    if (miproVal.recall < 0.88) {
        console.warn("\n⚠️  ATTENTION: Recall < 88%!");
    }
    if (parseFloat(precisionDelta) < 1) {
        console.warn("\n⚠️  ATTENTION: Amélioration precision < 1% - MiPRO peu efficace");
    }
    // 8. Sauvegarder
    const savedData = {
        version: "2.1",
        optimizerType: "mipro-v19-fixed",
        optimizedAt: new Date().toISOString(),
        model: MODEL,
        config: {
            maxExamples: MAX_EXAMPLES,
            numTrials: NUM_TRIALS,
            useTeacher: USE_TEACHER,
            trainSize: train.length,
            valSize: valExamples.length,
        },
        // Métriques sur données UNSEEN (validation set)
        baselineOnUnseen: { recall: baselineVal.recall, precision: baselineVal.precision, f1: baselineVal.f1, ...baselineVal },
        miproOnUnseen: { recall: miproVal.recall, precision: miproVal.precision, f1: miproVal.f1, ...miproVal },
        improvement: {
            precision: parseFloat(precisionDelta),
            recall: parseFloat(recallDelta),
        },
        bestScore: result.bestScore,
        instruction: result.optimizedProgram?.instruction || null,
        demos: result.demos,
        optimizedProgram: result.optimizedProgram,
    };
    writeFileSync(`${OUTPUT_DIR}/stock-predictor-mipro-v19.json`, JSON.stringify(savedData, null, 2));
    console.log(`\n💾 Sauvegardé: stock-predictor-mipro-v19.json`);
    // Afficher demos
    if (result.demos?.length) {
        console.log("\n" + "=".repeat(60));
        console.log(`  FEW-SHOTS GÉNÉRÉS (${result.demos.length})`);
        console.log("=".repeat(60));
        for (let i = 0; i < Math.min(3, result.demos.length); i++) {
            const trace = result.demos[i]?.traces?.[0];
            if (trace) {
                console.log(`\n  #${i + 1}: ${trace.productName?.slice(0, 40)}...`);
                console.log(`      Qty: ${trace.quantity}`);
                console.log(`      ${trace.reasoning?.slice(0, 80)}...`);
            }
        }
    }
}
main().catch(console.error);
