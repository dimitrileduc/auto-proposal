/**
 * Script pour analyser les rapports de backtests et calculer les moyennes
 */

const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, 'reports-output');

// Lire tous les fichiers backtest-client-*.md
const files = fs.readdirSync(reportsDir)
  .filter(f => f.startsWith('backtest-client-') && f.endsWith('.md') && !f.includes('-no-low-conf'));

console.log(`\n📊 Analyse de ${files.length} rapports de backtests\n`);

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(reportsDir, file), 'utf-8');

  // Extraire le client ID et le nom
  const clientMatch = content.match(/\*\*Client\*\* : (.+?) \(ID: (\d+)\)/);
  const clientName = clientMatch ? clientMatch[1] : 'Unknown';
  const clientId = clientMatch ? parseInt(clientMatch[2]) : 0;

  // Extraire Précision
  const precisionMatch = content.match(/\| \*\*Précision\*\* \| ([\d.]+)% \|/);
  const precision = precisionMatch ? parseFloat(precisionMatch[1]) : 0;

  // Extraire Recall
  const recallMatch = content.match(/\| \*\*Rappel\*\* \| ([\d.]+)% \|/);
  const recall = recallMatch ? parseFloat(recallMatch[1]) : 0;

  // Extraire F1-Score
  const f1Match = content.match(/\| \*\*F1-Score\*\* \| ([\d.]+)% \|/);
  const f1 = f1Match ? parseFloat(f1Match[1]) : 0;

  // Extraire MAE
  const maeMatch = content.match(/\| \*\*MAE\*\* \| ([\d.]+) unités \|/);
  const mae = maeMatch ? parseFloat(maeMatch[1]) : 0;

  // Extraire MAPE
  const mapeMatch = content.match(/\| \*\*MAPE\*\* \| ([\d.]+)% \|/);
  const mape = mapeMatch ? parseFloat(mapeMatch[1]) : 0;

  // Extraire counts
  const tpMatch = content.match(/## True Positives \((\d+)\)/);
  const tp = tpMatch ? parseInt(tpMatch[1]) : 0;

  const fpMatch = content.match(/## False Positives \((\d+)\)/);
  const fp = fpMatch ? parseInt(fpMatch[1]) : 0;

  const fnMatch = content.match(/## False Negatives \((\d+)\)/);
  const fn = fnMatch ? parseInt(fnMatch[1]) : 0;

  results.push({
    clientId,
    clientName,
    precision,
    recall,
    f1,
    mae,
    mape,
    tp,
    fp,
    fn
  });

  console.log(`✅ ${clientName} (ID: ${clientId})`);
  console.log(`   Precision: ${precision.toFixed(1)}% | Recall: ${recall.toFixed(1)}% | F1: ${f1.toFixed(1)}%`);
  console.log(`   MAE: ${mae.toFixed(2)}u | MAPE: ${mape.toFixed(1)}% | TP/FP/FN: ${tp}/${fp}/${fn}`);
}

// Calculer les moyennes
const avgPrecision = results.reduce((sum, r) => sum + r.precision, 0) / results.length;
const avgRecall = results.reduce((sum, r) => sum + r.recall, 0) / results.length;
const avgF1 = results.reduce((sum, r) => sum + r.f1, 0) / results.length;
const avgMAE = results.reduce((sum, r) => sum + r.mae, 0) / results.length;
const avgMAPE = results.reduce((sum, r) => sum + r.mape, 0) / results.length;

// Calculer médiane MAPE (plus représentatif que la moyenne)
const sortedMAPE = results.map(r => r.mape).sort((a, b) => a - b);
const medianMAPE = sortedMAPE[Math.floor(sortedMAPE.length / 2)];

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📈 RÉSULTATS GLOBAUX (${results.length} clients)`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

console.log(`\n🎯 Niveau Produit (Détection):`);
console.log(`   Precision moyenne:  ${avgPrecision.toFixed(1)}%`);
console.log(`   Recall moyen:       ${avgRecall.toFixed(1)}% ⬆️`);
console.log(`   F1-Score moyen:     ${avgF1.toFixed(1)}%`);

console.log(`\n📏 Niveau Quantité (Précision):`);
console.log(`   MAE moyen:          ${avgMAE.toFixed(2)} unités`);
console.log(`   MAPE moyen:         ${avgMAPE.toFixed(1)}%`);
console.log(`   MAPE médian:        ${medianMAPE.toFixed(1)}%`);

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`🔄 COMPARAISON AVEC ANCIENNES VALEURS`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

const oldRecall = 69.3;
const oldF1 = 58.1;
const oldPrecision = 59.1;
const oldMAE = 1.42;
const oldMAPE = 23.4;

console.log(`\n📊 Recall:`);
console.log(`   Avant (avec services):  ${oldRecall.toFixed(1)}%`);
console.log(`   Après (sans services):  ${avgRecall.toFixed(1)}%`);
console.log(`   Gain:                   ${(avgRecall - oldRecall).toFixed(1)} points 🎉`);

console.log(`\n📊 F1-Score:`);
console.log(`   Avant:  ${oldF1.toFixed(1)}%`);
console.log(`   Après:  ${avgF1.toFixed(1)}%`);
console.log(`   Δ:      ${(avgF1 - oldF1).toFixed(1)} points`);

console.log(`\n📊 Precision:`);
console.log(`   Avant:  ${oldPrecision.toFixed(1)}%`);
console.log(`   Après:  ${avgPrecision.toFixed(1)}%`);
console.log(`   Δ:      ${(avgPrecision - oldPrecision).toFixed(1)} points`);

console.log(`\n📊 MAPE (métrique prioritaire):`);
console.log(`   Avant:   ${oldMAPE.toFixed(1)}%`);
console.log(`   Après:   ${avgMAPE.toFixed(1)}%`);
console.log(`   Médian:  ${medianMAPE.toFixed(1)}%`);

console.log(`\n✅ Fix appliquée: Filtrage des services (product_type === "service")`);
console.log(`   Impact: Les services ne sont plus comptés comme False Negatives\n`);
