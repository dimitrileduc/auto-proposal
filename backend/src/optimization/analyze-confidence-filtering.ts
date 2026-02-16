/**
 * Analyse filtering par niveau de confiance
 */

const data = {
  global: {
    tp: 3335,
    fp: 5224,
    fn: 878,
  },
  low: {
    tp: 183,
    fp: 746,
    fn: 815,
    precision: 0.197,
    recall: 0.1834,
    wmape: 6.49,
    bias: 0.85,
  },
  medium: {
    tp: 2441,
    fp: 2140,
    fn: 49,
    precision: 0.5329,
    recall: 0.9803,
    wmape: 31.52,
    bias: 0.11,
  },
  high: {
    tp: 711,
    fp: 2338,
    fn: 14,
    precision: 0.2332,
    recall: 0.9807,
    wmape: 24.09,
    bias: 4.84,
  },
};

console.log("=".repeat(70));
console.log("  ANALYSE FILTERING PAR CONFIANCE");
console.log("=".repeat(70));

console.log("\n📊 ÉTAT ACTUEL (ALL):");
const globalPrecision = data.global.tp / (data.global.tp + data.global.fp);
const globalRecall = data.global.tp / (data.global.tp + data.global.fn);
console.log(`  Recall:    ${(globalRecall * 100).toFixed(1)}%`);
console.log(`  Precision: ${(globalPrecision * 100).toFixed(1)}%`);
console.log(`  TP: ${data.global.tp}, FP: ${data.global.fp}, FN: ${data.global.fn}`);

console.log("\n📋 PAR NIVEAU:");
console.log("\n  LOW (orderCount=1):");
console.log(`    Precision: ${(data.low.precision * 100).toFixed(1)}% ❌`);
console.log(`    Recall:    ${(data.low.recall * 100).toFixed(1)}% ❌`);
console.log(`    WMAPE:     ${data.low.wmape.toFixed(1)}%`);
console.log(`    → ${data.low.tp} TP, ${data.low.fp} FP, ${data.low.fn} FN`);

console.log("\n  MEDIUM (orderCount=2-4):");
console.log(`    Precision: ${(data.medium.precision * 100).toFixed(1)}% ✅`);
console.log(`    Recall:    ${(data.medium.recall * 100).toFixed(1)}% ✅`);
console.log(`    WMAPE:     ${data.medium.wmape.toFixed(1)}%`);
console.log(`    Bias:      ${data.medium.bias.toFixed(1)}% ✅`);
console.log(`    → ${data.medium.tp} TP, ${data.medium.fp} FP, ${data.medium.fn} FN`);

console.log("\n  HIGH (orderCount≥5):");
console.log(`    Precision: ${(data.high.precision * 100).toFixed(1)}% ❌`);
console.log(`    Recall:    ${(data.high.recall * 100).toFixed(1)}% ✅`);
console.log(`    WMAPE:     ${data.high.wmape.toFixed(1)}% ✅`);
console.log(`    Bias:      ${data.high.bias.toFixed(1)}%`);
console.log(`    → ${data.high.tp} TP, ${data.high.fp} FP, ${data.high.fn} FN`);
console.log(`    ⚠️ PROBLÈME: Trop de FP (${data.high.fp}) pour ${data.high.tp} TP!`);

console.log("\n" + "=".repeat(70));
console.log("  STRATÉGIES DE FILTERING");
console.log("=".repeat(70));

// Stratégie 1: Exclure LOW
console.log("\n🔹 STRATÉGIE 1: Exclure LOW (orderCount=1)");
const s1_tp = data.medium.tp + data.high.tp;
const s1_fp = data.medium.fp + data.high.fp;
const s1_fn = data.medium.fn + data.high.fn + data.low.fn; // LOW devient FN
const s1_precision = s1_tp / (s1_tp + s1_fp);
const s1_recall = s1_tp / (s1_tp + s1_fn);
console.log(`  Recall:    ${(s1_recall * 100).toFixed(1)}% (vs ${(globalRecall * 100).toFixed(1)}%)`);
console.log(`  Precision: ${(s1_precision * 100).toFixed(1)}% (vs ${(globalPrecision * 100).toFixed(1)}%)`);
console.log(`  TP perdus: ${data.low.tp} (-${((data.low.tp / data.global.tp) * 100).toFixed(1)}%)`);
console.log(`  FP évités: ${data.low.fp} (-${((data.low.fp / data.global.fp) * 100).toFixed(1)}%)`);

// Stratégie 2: MEDIUM only
console.log("\n🔹 STRATÉGIE 2: MEDIUM only (orderCount=2-4)");
const s2_tp = data.medium.tp;
const s2_fp = data.medium.fp;
const s2_fn = data.medium.fn + data.low.fn + data.high.fn;
const s2_precision = s2_tp / (s2_tp + s2_fp);
const s2_recall = s2_tp / (s2_tp + s2_fn);
console.log(`  Recall:    ${(s2_recall * 100).toFixed(1)}% ❌ (vs ${(globalRecall * 100).toFixed(1)}%)`);
console.log(`  Precision: ${(s2_precision * 100).toFixed(1)}% ✅ (vs ${(globalPrecision * 100).toFixed(1)}%)`);
console.log(`  WMAPE:     ${data.medium.wmape.toFixed(1)}% ✅`);
console.log(`  Bias:      ${data.medium.bias.toFixed(1)}% ✅`);

// Stratégie 3: Filter HIGH FP
console.log("\n🔹 STRATÉGIE 3: Analyser pourquoi HIGH a tant de FP");
console.log(`  HIGH: ${data.high.tp} TP mais ${data.high.fp} FP (${(data.high.precision * 100).toFixed(1)}% precision)`);
console.log(`  Ratio FP/TP: ${(data.high.fp / data.high.tp).toFixed(1)}x`);
console.log(`  → Le modèle sur-prédit pour produits avec beaucoup d'historique`);
console.log(`  → Possible amélioration: Plus strict sur cycle pour HIGH confidence`);

console.log("\n" + "=".repeat(70));
console.log("  RECOMMANDATION");
console.log("=".repeat(70));
console.log(`
🎯 STRATÉGIE 1 (Exclure LOW) semble optimale:
  - Recall reste excellent: ${(s1_recall * 100).toFixed(1)}%
  - Precision s'améliore: ${(s1_precision * 100).toFixed(1)}%
  - Économise ${data.low.fp} FP inutiles
  - Perd seulement ${data.low.tp} TP (${((data.low.tp / data.global.tp) * 100).toFixed(1)}% du total)

⚠️ PROBLÈME HIGH confidence à investiguer:
  - Trop de FP malgré bon historique
  - Possible cause: Prompt trop agressif "Si DOUTE → COMMANDER"
  - Pour HIGH (orderCount≥5): Être plus strict sur cycle?
`);
