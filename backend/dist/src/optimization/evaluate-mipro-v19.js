/**
 * Évaluation A/B: Baseline vs MiPRO v19
 *
 * Compare les performances du service sans optimisation (baseline)
 * vs avec les demos MiPRO v19.
 *
 * Usage:
 *   npx tsx src/optimization/evaluate-mipro-v19.ts
 *
 * Env vars:
 *   TEST_SIZE=500     (défaut: 500)
 */
import "dotenv/config";
import { writeFileSync, readFileSync, readdirSync } from "fs";
import { join } from "path";
import { ax } from "@ax-llm/ax";
import { studentLLM, MODEL } from "./ax-config.js";
// Configuration
const TEST_SIZE = parseInt(process.env.TEST_SIZE || "500");
const REPORTS_DIR = "./reports-output-v19-400";
const MIPRO_FILE = "./optimization-results/stock-predictor-mipro-v19.json";
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
                    groundTruth: product.reality?.quantity ?? 0,
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
                    groundTruth: 0,
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
                    groundTruth: product.reality?.quantity ?? 0,
                });
            }
        }
    }
    catch { }
    return examples;
}
function shuffle(arr) {
    const r = [...arr];
    for (let i = r.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
}
function extractTestExamples(maxExamples) {
    console.log(`📂 Lecture des fichiers depuis ${REPORTS_DIR}...`);
    const files = readdirSync(REPORTS_DIR).filter((f) => f.endsWith("-v2.json"));
    console.log(`   Trouvé ${files.length} fichiers v2.json`);
    const withOrder = [];
    const withoutOrder = [];
    for (const file of files) {
        for (const ex of extractFromV2File(join(REPORTS_DIR, file))) {
            if (ex.groundTruth > 0)
                withOrder.push(ex);
            else
                withoutOrder.push(ex);
        }
    }
    console.log(`\n📊 Exemples disponibles:`);
    console.log(`   - Avec commande (groundTruth > 0): ${withOrder.length}`);
    console.log(`   - Sans commande (groundTruth = 0): ${withoutOrder.length}`);
    // Équilibrer 60/40
    const targetWith = Math.floor(maxExamples * 0.6);
    const targetWithout = Math.floor(maxExamples * 0.4);
    const finalExamples = shuffle([
        ...shuffle(withOrder).slice(0, targetWith),
        ...shuffle(withoutOrder).slice(0, targetWithout),
    ]);
    console.log(`\n✅ Sélection: ${finalExamples.length} exemples de test`);
    return finalExamples;
}
// ============================================
// CALCUL MÉTRIQUES
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
function printMetrics(name, metrics) {
    console.log(`\n📊 ${name}:`);
    console.log(`   Recall: ${(metrics.recall * 100).toFixed(1)}%`);
    console.log(`   Precision: ${(metrics.precision * 100).toFixed(1)}%`);
    console.log(`   F1: ${(metrics.f1 * 100).toFixed(1)}%`);
    console.log(`   TP=${metrics.tp} FP=${metrics.fp} FN=${metrics.fn} TN=${metrics.tn}`);
}
// ============================================
// MAIN
// ============================================
async function main() {
    console.log("=".repeat(60));
    console.log("  Évaluation A/B: Baseline vs MiPRO v19");
    console.log("=".repeat(60));
    console.log(`\nConfig: ${TEST_SIZE} exemples de test`);
    console.log(`Model: ${MODEL}\n`);
    // 1. Charger les demos MiPRO
    let miproDemos = [];
    try {
        const miproData = JSON.parse(readFileSync(MIPRO_FILE, "utf-8"));
        miproDemos = miproData.demos || [];
        console.log(`✅ Demos MiPRO chargés: ${miproDemos.length} demos`);
        if (miproData.optimizedProgram) {
            console.log(`   Temperature optimisée: ${miproData.optimizedProgram.modelConfig?.temperature?.toFixed(2)}`);
        }
    }
    catch (err) {
        console.error(`❌ Impossible de charger ${MIPRO_FILE}`);
        process.exit(1);
    }
    // 2. Extraire les exemples de test
    const testExamples = extractTestExamples(TEST_SIZE);
    // 3. Créer les deux predictors
    const baselinePredictor = ax(stockPredictorSignature);
    const miproPredictor = ax(stockPredictorSignature);
    // Charger les demos MiPRO dans le second predictor
    if (miproDemos.length > 0) {
        miproPredictor.setDemos(miproDemos);
    }
    // 4. Évaluation
    console.log(`\n🔄 Évaluation en cours sur ${testExamples.length} exemples...`);
    console.log(`   (Cela peut prendre quelques minutes)\n`);
    const results = [];
    const baselineResults = [];
    const miproResults = [];
    let processed = 0;
    const startTime = Date.now();
    for (const example of testExamples) {
        const input = {
            productName: example.productName,
            recentOrders: example.recentOrders,
            lastYearOrders: example.lastYearOrders,
            currentDate: example.currentDate,
        };
        try {
            // Exécuter les deux en parallèle
            const [baselineRes, miproRes] = await Promise.all([
                baselinePredictor.forward(studentLLM, input),
                miproPredictor.forward(studentLLM, input),
            ]);
            const baselineQty = Math.max(0, Math.round(baselineRes.quantity || 0));
            const miproQty = Math.max(0, Math.round(miproRes.quantity || 0));
            results.push({
                example,
                baseline: { quantity: baselineQty, reasoning: baselineRes.reasoning || "" },
                mipro: { quantity: miproQty, reasoning: miproRes.reasoning || "" },
            });
            baselineResults.push({ pred: baselineQty, actual: example.groundTruth });
            miproResults.push({ pred: miproQty, actual: example.groundTruth });
            processed++;
            if (processed % 50 === 0) {
                const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
                console.log(`   Progression: ${processed}/${testExamples.length} (${elapsed} min)`);
            }
        }
        catch (err) {
            console.error(`   ⚠️ Erreur sur ${example.productName.slice(0, 30)}...`);
        }
    }
    const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    // 5. Calculer les métriques
    const baselineMetrics = calcMetrics(baselineResults);
    const miproMetrics = calcMetrics(miproResults);
    // 6. Afficher les résultats
    console.log("\n" + "=".repeat(60));
    console.log("  RÉSULTATS");
    console.log("=".repeat(60));
    console.log(`\n⏱️ Temps total: ${totalTime} min`);
    console.log(`📊 Exemples évalués: ${results.length}/${testExamples.length}`);
    printMetrics("BASELINE (sans demos)", baselineMetrics);
    printMetrics("MiPRO v19 (avec demos)", miproMetrics);
    // 7. Comparaison
    console.log("\n" + "=".repeat(60));
    console.log("  COMPARAISON");
    console.log("=".repeat(60));
    const recallDelta = (miproMetrics.recall - baselineMetrics.recall) * 100;
    const precisionDelta = (miproMetrics.precision - baselineMetrics.precision) * 100;
    const f1Delta = (miproMetrics.f1 - baselineMetrics.f1) * 100;
    console.log(`\n📈 Évolution des métriques:`);
    console.log(`   Recall:    ${(baselineMetrics.recall * 100).toFixed(1)}% → ${(miproMetrics.recall * 100).toFixed(1)}% (${recallDelta >= 0 ? "+" : ""}${recallDelta.toFixed(1)}%)`);
    console.log(`   Precision: ${(baselineMetrics.precision * 100).toFixed(1)}% → ${(miproMetrics.precision * 100).toFixed(1)}% (${precisionDelta >= 0 ? "+" : ""}${precisionDelta.toFixed(1)}%)`);
    console.log(`   F1:        ${(baselineMetrics.f1 * 100).toFixed(1)}% → ${(miproMetrics.f1 * 100).toFixed(1)}% (${f1Delta >= 0 ? "+" : ""}${f1Delta.toFixed(1)}%)`);
    // Analyse des différences
    const improvements = results.filter((r) => r.baseline.quantity > 0 && r.mipro.quantity === 0 && r.example.groundTruth === 0);
    const regressions = results.filter((r) => r.baseline.quantity === 0 && r.mipro.quantity > 0 && r.example.groundTruth === 0);
    const missedByMipro = results.filter((r) => r.baseline.quantity > 0 && r.mipro.quantity === 0 && r.example.groundTruth > 0);
    console.log(`\n🔍 Analyse des changements:`);
    console.log(`   ✅ FP corrigés (baseline FP → mipro TN): ${improvements.length}`);
    console.log(`   ⚠️ Nouveaux FP (baseline TN → mipro FP): ${regressions.length}`);
    console.log(`   ❌ Nouveaux FN (baseline TP → mipro FN): ${missedByMipro.length}`);
    // 8. Recommandation
    console.log("\n" + "=".repeat(60));
    console.log("  RECOMMANDATION");
    console.log("=".repeat(60));
    if (miproMetrics.recall >= 0.88 && miproMetrics.precision > baselineMetrics.precision) {
        console.log("\n✅ MiPRO v19 est recommandé pour la production:");
        console.log(`   - Recall maintenu ≥ 88% (${(miproMetrics.recall * 100).toFixed(1)}%)`);
        console.log(`   - Precision améliorée de +${precisionDelta.toFixed(1)}%`);
        console.log("\n   → Copier stock-predictor-mipro-v19.json vers stock-predictor-mipro.json");
    }
    else if (miproMetrics.recall < 0.88) {
        console.log("\n⚠️ ATTENTION: MiPRO v19 dégrade le recall sous 88%");
        console.log(`   Recall: ${(miproMetrics.recall * 100).toFixed(1)}% < 88%`);
        console.log("\n   → Ne pas déployer en production");
    }
    else {
        console.log("\n🤔 Résultats mitigés - évaluation manuelle recommandée");
    }
    // 9. Sauvegarder les résultats détaillés
    const outputData = {
        evaluatedAt: new Date().toISOString(),
        config: { testSize: TEST_SIZE, model: MODEL },
        metrics: {
            baseline: baselineMetrics,
            mipro: miproMetrics,
            delta: { recall: recallDelta, precision: precisionDelta, f1: f1Delta },
        },
        analysis: {
            fpCorrected: improvements.length,
            newFP: regressions.length,
            newFN: missedByMipro.length,
        },
        // Quelques exemples de différences
        sampleDifferences: results
            .filter((r) => r.baseline.quantity !== r.mipro.quantity)
            .slice(0, 20)
            .map((r) => ({
            product: r.example.productName,
            groundTruth: r.example.groundTruth,
            baseline: r.baseline.quantity,
            mipro: r.mipro.quantity,
        })),
    };
    const outputPath = join(OUTPUT_DIR, "evaluation-results-mipro-v19.json");
    writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n💾 Résultats sauvegardés: ${outputPath}`);
}
main().catch(console.error);
