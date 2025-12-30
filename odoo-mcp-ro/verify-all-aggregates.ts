/**
 * Script de vérification COMPLÈTE des 3 rapports agrégés:
 * - CLEAN (default): produits avec 2+ commandes
 * - LOW: produits avec 1 commande
 * - ALL: CLEAN + LOW
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

function calculateMean(values: number[]): number {
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

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

function verifyReport(reportName: string, reportPath: string) {
  console.log(`\n${'='.repeat(80)}`);
  console.log(`📊 VÉRIFICATION: ${reportName}`);
  console.log(`${'='.repeat(80)}\n`);

  const reportData: BacktestReport = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

  const precisions = reportData.individualResults.map(r => r.metrics.precision);
  const recalls = reportData.individualResults.map(r => r.metrics.recall);
  const f1Scores = reportData.individualResults.map(r => r.metrics.f1Score);
  const maes = reportData.individualResults.map(r => r.metrics.mae);
  const mapes = reportData.individualResults.map(r => r.metrics.mape);

  console.log(`✅ Nombre de clients: ${reportData.individualResults.length}\n`);

  // Calculer moyennes
  const calculatedMeans = {
    precision: calculateMean(precisions),
    recall: calculateMean(recalls),
    f1Score: calculateMean(f1Scores),
    mae: calculateMean(maes),
    mape: calculateMean(mapes)
  };

  // Calculer médianes
  const calculatedMedians = {
    precision: calculateMedian(precisions),
    recall: calculateMedian(recalls),
    f1Score: calculateMedian(f1Scores),
    mae: calculateMedian(maes),
    mape: calculateMedian(mapes)
  };

  // Vérifier moyennes
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
    const match = diff < 0.0000001;
    const status = match ? '✅' : '❌';

    if (!match) meanErrors++;

    console.log(`${status} ${metric.padEnd(12)} Reporté: ${reported.toFixed(10).padEnd(20)} Calculé: ${calculated.toFixed(10).padEnd(20)} Δ: ${diff.toExponential(2)}`);
  }

  // Vérifier médianes
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

  const totalErrors = meanErrors + medianErrors;

  if (totalErrors === 0) {
    console.log(`\n✅ ${reportName}: TOUTES LES STATS CORRECTES`);
  } else {
    console.log(`\n❌ ${reportName}: ${totalErrors} ERREUR(S) DÉTECTÉE(S)!`);
  }

  return totalErrors;
}

const baseDir = '/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output-120-target30';

console.log('\n🔍 VÉRIFICATION COMPLÈTE DES STATISTIQUES AGRÉGÉES');
console.log('Baseline 120j - Fenêtre 30j\n');

let totalErrors = 0;

// 1. Vérifier CLEAN (default)
totalErrors += verifyReport(
  'CLEAN (produits 2+ commandes)',
  `${baseDir}/backtest-aggregate-2025-11-18.json`
);

// 2. Vérifier LOW
totalErrors += verifyReport(
  'LOW (produits 1 commande)',
  `${baseDir}/backtest-aggregate-2025-11-18-low.json`
);

// 3. Vérifier ALL
totalErrors += verifyReport(
  'ALL (CLEAN + LOW)',
  `${baseDir}/backtest-aggregate-2025-11-18-all.json`
);

console.log('\n' + '='.repeat(80));
console.log('\n🎯 RÉSULTAT FINAL:');
if (totalErrors === 0) {
  console.log('✅ TOUTES LES STATISTIQUES SONT CORRECTES POUR LES 3 RAPPORTS!');
  console.log('   → Calcul CLEAN: OK');
  console.log('   → Calcul LOW: OK');
  console.log('   → Calcul ALL: OK');
  console.log('\n⚠️  CONCLUSION: Le problème n\'est PAS dans le calcul des stats agrégées.');
  console.log('   → Il faut analyser les rapports clients individuels\n');
} else {
  console.log(`❌ BUGS DÉTECTÉS: ${totalErrors} erreur(s) au total`);
  console.log('\n🚨 CONCLUSION: Bug confirmé dans le calcul des statistiques!');
  console.log('   → Vérifier statistics.service.ts et backtest-aggregate.task.ts\n');
}
