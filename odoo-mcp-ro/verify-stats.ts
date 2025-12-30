/**
 * Script de vérification des statistiques agrégées
 * Vérifie si les moyennes et médianes reportées correspondent aux calculs réels
 */

import * as fs from 'fs';

interface IndividualMetrics {
  clientId: number;
  clientName: string;
  orderName: string;
  success: boolean;
  metrics: {
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    mape: number;
  };
}

interface BacktestReport {
  aggregateMetrics: {
    mean: {
      precision: number;
      recall: number;
      f1Score: number;
      mae: number;
      mape: number;
    };
    median: {
      precision: number;
      recall: number;
      f1Score: number;
      mae: number;
      mape: number;
    };
  };
  individualResults: IndividualMetrics[];
}

// Calcul de la moyenne
function calculateMean(values: number[]): number {
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

// Calcul de la médiane
function calculateMedian(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

// Charger le rapport baseline
const reportPath = '/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output-120-target30/backtest-aggregate-2025-11-18.json';
const reportData: BacktestReport = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

// Extraire toutes les métriques individuelles
const precisions = reportData.individualResults.map(r => r.metrics.precision);
const recalls = reportData.individualResults.map(r => r.metrics.recall);
const f1Scores = reportData.individualResults.map(r => r.metrics.f1Score);
const maes = reportData.individualResults.map(r => r.metrics.mae);
const mapes = reportData.individualResults.map(r => r.metrics.mape);

console.log('\n📊 VÉRIFICATION DES STATISTIQUES AGRÉGÉES');
console.log('='.repeat(80));
console.log(`\n✅ Nombre de clients analysés: ${reportData.individualResults.length}\n`);

// Calculer les moyennes
const calculatedMeans = {
  precision: calculateMean(precisions),
  recall: calculateMean(recalls),
  f1Score: calculateMean(f1Scores),
  mae: calculateMean(maes),
  mape: calculateMean(mapes)
};

// Calculer les médianes
const calculatedMedians = {
  precision: calculateMedian(precisions),
  recall: calculateMedian(recalls),
  f1Score: calculateMedian(f1Scores),
  mae: calculateMedian(maes),
  mape: calculateMedian(mapes)
};

// Comparer avec les valeurs reportées
console.log('📈 MOYENNES (MEAN):');
console.log('─'.repeat(80));

const meanComparison = [
  { metric: 'Precision', reported: reportData.aggregateMetrics.mean.precision, calculated: calculatedMeans.precision },
  { metric: 'Recall', reported: reportData.aggregateMetrics.mean.recall, calculated: calculatedMeans.recall },
  { metric: 'F1-Score', reported: reportData.aggregateMetrics.mean.f1Score, calculated: calculatedMeans.f1Score },
  { metric: 'MAE', reported: reportData.aggregateMetrics.mean.mae, calculated: calculatedMeans.mae },
  { metric: 'MAPE', reported: reportData.aggregateMetrics.mean.mape, calculated: calculatedMeans.mape }
];

let meanErrors = 0;
for (const { metric, reported, calculated } of meanComparison) {
  const diff = Math.abs(reported - calculated);
  const match = diff < 0.0000001; // Tolérance pour erreurs d'arrondi float
  const status = match ? '✅' : '❌';

  if (!match) meanErrors++;

  console.log(`${status} ${metric.padEnd(12)} Reporté: ${reported.toFixed(10).padEnd(20)} Calculé: ${calculated.toFixed(10).padEnd(20)} Δ: ${diff.toExponential(2)}`);
}

console.log('\n📊 MÉDIANES (MEDIAN):');
console.log('─'.repeat(80));

const medianComparison = [
  { metric: 'Precision', reported: reportData.aggregateMetrics.median.precision, calculated: calculatedMedians.precision },
  { metric: 'Recall', reported: reportData.aggregateMetrics.median.recall, calculated: calculatedMedians.recall },
  { metric: 'F1-Score', reported: reportData.aggregateMetrics.median.f1Score, calculated: calculatedMedians.f1Score },
  { metric: 'MAE', reported: reportData.aggregateMetrics.median.mae, calculated: calculatedMedians.mae },
  { metric: 'MAPE', reported: reportData.aggregateMetrics.median.mape, calculated: calculatedMedians.mape }
];

let medianErrors = 0;
for (const { metric, reported, calculated } of medianComparison) {
  const diff = Math.abs(reported - calculated);
  const match = diff < 0.0000001;
  const status = match ? '✅' : '❌';

  if (!match) medianErrors++;

  console.log(`${status} ${metric.padEnd(12)} Reporté: ${reported.toFixed(10).padEnd(20)} Calculé: ${calculated.toFixed(10).padEnd(20)} Δ: ${diff.toExponential(2)}`);
}

console.log('\n' + '='.repeat(80));
console.log('\n🎯 RÉSULTAT FINAL:');
if (meanErrors === 0 && medianErrors === 0) {
  console.log('✅ TOUTES LES STATISTIQUES SONT CORRECTES !');
  console.log('   → Le calcul des moyennes et médianes est exact');
  console.log('   → Pas de bug dans statistics.service.ts ou backtest-aggregate.task.ts');
  console.log('\n⚠️  CONCLUSION: Le problème n\'est PAS dans le calcul des stats.');
  console.log('   → Les 10+ méthodes testées ont échoué pour de vraies raisons');
  console.log('   → Il faut analyser POURQUOI les améliorations ne fonctionnent pas\n');
} else {
  console.log(`❌ BUGS DÉTECTÉS: ${meanErrors + medianErrors} erreur(s)`);
  console.log(`   → Erreurs dans moyennes: ${meanErrors}`);
  console.log(`   → Erreurs dans médianes: ${medianErrors}`);
  console.log('\n🚨 CONCLUSION: Bug confirmé dans le calcul des statistiques agrégées!');
  console.log('   → Ceci explique pourquoi toutes les améliorations semblent échouer\n');
}
