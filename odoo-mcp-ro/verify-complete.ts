/**
 * Vérification COMPLÈTE et ULTRA DÉTAILLÉE de TOUS les rapports
 * 1. Vérifier chaque métrique individuelle par client (TP/FP/FN → Precision/Recall/F1)
 * 2. Vérifier les 3 rapports agrégés (CLEAN, ALL, LOW)
 */

import * as fs from 'fs';
import * as path from 'path';

interface ClientMetrics {
  tp: number;
  fp: number;
  fn: number;
  precision: number;
  recall: number;
  f1Score: number;
  mae: number;
  mape: number;
}

interface ClientReport {
  clientId: number;
  clientName: string;
  orderName: string;
  metrics: ClientMetrics;
}

interface AggregateReport {
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
  individualResults: Array<{
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
  }>;
}

const TOLERANCE = 0.0000001;

function calculatePrecision(tp: number, fp: number): number {
  if (tp + fp === 0) return 0;
  return tp / (tp + fp);
}

function calculateRecall(tp: number, fn: number): number {
  if (tp + fn === 0) return 0;
  return tp / (tp + fn);
}

function calculateF1(precision: number, recall: number): number {
  if (precision + recall === 0) return 0;
  return (2 * precision * recall) / (precision + recall);
}

function calculateMean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, val) => sum + val, 0) / values.length;
}

function calculateMedian(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

const reportsDir = '/Users/dlstudio/Documents/GitHub/auto-proposal/backend/reports-output';

console.log('\n' + '='.repeat(100));
console.log('🔍 VÉRIFICATION ULTRA COMPLÈTE - TOUS LES RAPPORTS');
console.log('='.repeat(100) + '\n');

// ========================================
// PARTIE 1: VÉRIFIER CHAQUE RAPPORT CLIENT INDIVIDUEL
// ========================================

console.log('📋 PARTIE 1/4: VÉRIFICATION DES RAPPORTS CLIENTS INDIVIDUELS\n');
console.log('─'.repeat(100));

const clientFiles = fs.readdirSync(reportsDir)
  .filter(f => f.startsWith('backtest-client-') && f.endsWith('.json'))
  .filter(f => !f.includes('-low.json') && !f.includes('-all.json'))
  .sort();

console.log(`Nombre de rapports clients CLEAN à vérifier: ${clientFiles.length}\n`);

let clientErrors = 0;

for (const file of clientFiles) {
  const filePath = path.join(reportsDir, file);
  const report: ClientReport = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const { tp, fp, fn, precision, recall, f1Score } = report.metrics;

  // Recalculer
  const calcPrecision = calculatePrecision(tp, fp);
  const calcRecall = calculateRecall(tp, fn);
  const calcF1 = calculateF1(calcPrecision, calcRecall);

  // Vérifier
  const precisionOK = Math.abs(precision - calcPrecision) < TOLERANCE;
  const recallOK = Math.abs(recall - calcRecall) < TOLERANCE;
  const f1OK = Math.abs(f1Score - calcF1) < TOLERANCE;

  if (!precisionOK || !recallOK || !f1OK) {
    clientErrors++;
    console.log(`❌ ${report.clientName} (${report.clientId})`);
    console.log(`   TP=${tp}, FP=${fp}, FN=${fn}`);
    if (!precisionOK) {
      console.log(`   ⚠️  Precision: Reporté=${precision.toFixed(6)} vs Calculé=${calcPrecision.toFixed(6)}`);
    }
    if (!recallOK) {
      console.log(`   ⚠️  Recall: Reporté=${recall.toFixed(6)} vs Calculé=${calcRecall.toFixed(6)}`);
    }
    if (!f1OK) {
      console.log(`   ⚠️  F1-Score: Reporté=${f1Score.toFixed(6)} vs Calculé=${calcF1.toFixed(6)}`);
    }
    console.log('');
  } else {
    console.log(`✅ ${report.clientName.substring(0, 40).padEnd(40)} | TP=${String(tp).padStart(2)} FP=${String(fp).padStart(3)} FN=${String(fn).padStart(2)} | P=${(precision*100).toFixed(1)}% R=${(recall*100).toFixed(1)}% F1=${(f1Score*100).toFixed(1)}%`);
  }
}

console.log('\n' + '─'.repeat(100));
if (clientErrors === 0) {
  console.log('✅ PARTIE 1 OK: Tous les rapports clients sont mathématiquement corrects\n');
} else {
  console.log(`❌ PARTIE 1 ERREUR: ${clientErrors} client(s) avec des erreurs de calcul\n`);
}

// ========================================
// PARTIE 2: VÉRIFIER AGRÉGÉ CLEAN
// ========================================

console.log('📊 PARTIE 2/4: VÉRIFICATION AGRÉGÉ CLEAN (2+ commandes)\n');
console.log('─'.repeat(100));

const cleanPath = path.join(reportsDir, 'backtest-aggregate-2025-11-18.json');
if (fs.existsSync(cleanPath)) {
  const cleanReport: AggregateReport = JSON.parse(fs.readFileSync(cleanPath, 'utf-8'));

  const precisions = cleanReport.individualResults.map(r => r.metrics.precision);
  const recalls = cleanReport.individualResults.map(r => r.metrics.recall);
  const f1Scores = cleanReport.individualResults.map(r => r.metrics.f1Score);
  const maes = cleanReport.individualResults.map(r => r.metrics.mae);
  const mapes = cleanReport.individualResults.map(r => r.metrics.mape);

  const calcMean = {
    precision: calculateMean(precisions),
    recall: calculateMean(recalls),
    f1Score: calculateMean(f1Scores),
    mae: calculateMean(maes),
    mape: calculateMean(mapes)
  };

  const calcMedian = {
    precision: calculateMedian(precisions),
    recall: calculateMedian(recalls),
    f1Score: calculateMedian(f1Scores),
    mae: calculateMedian(maes),
    mape: calculateMedian(mapes)
  };

  console.log(`Nombre de clients: ${cleanReport.individualResults.length}\n`);

  console.log('MOYENNES:');
  let cleanMeanErrors = 0;
  for (const [key, reported] of Object.entries(cleanReport.aggregateMetrics.mean)) {
    const calculated = calcMean[key as keyof typeof calcMean];
    const ok = Math.abs(reported - calculated) < TOLERANCE;
    if (!ok) cleanMeanErrors++;
    console.log(`${ok ? '✅' : '❌'} ${key.padEnd(12)} Reporté: ${reported.toFixed(10)} Calculé: ${calculated.toFixed(10)}`);
  }

  console.log('\nMÉDIANES:');
  let cleanMedianErrors = 0;
  for (const [key, reported] of Object.entries(cleanReport.aggregateMetrics.median)) {
    const calculated = calcMedian[key as keyof typeof calcMedian];
    const ok = Math.abs(reported - calculated) < TOLERANCE;
    if (!ok) cleanMedianErrors++;
    console.log(`${ok ? '✅' : '❌'} ${key.padEnd(12)} Reporté: ${reported.toFixed(10)} Calculé: ${calculated.toFixed(10)}`);
  }

  console.log('\n' + '─'.repeat(100));
  if (cleanMeanErrors === 0 && cleanMedianErrors === 0) {
    console.log('✅ PARTIE 2 OK: Agrégé CLEAN mathématiquement correct\n');
  } else {
    console.log(`❌ PARTIE 2 ERREUR: ${cleanMeanErrors + cleanMedianErrors} erreur(s) dans agrégé CLEAN\n`);
  }
} else {
  console.log('⚠️  PARTIE 2 SKIP: Rapport CLEAN non trouvé\n');
}

// ========================================
// PARTIE 3: VÉRIFIER AGRÉGÉ LOW
// ========================================

console.log('📊 PARTIE 3/4: VÉRIFICATION AGRÉGÉ LOW (1 commande)\n');
console.log('─'.repeat(100));

const lowPath = path.join(reportsDir, 'backtest-aggregate-2025-11-18-low.json');
if (fs.existsSync(lowPath)) {
  const lowReport: AggregateReport = JSON.parse(fs.readFileSync(lowPath, 'utf-8'));

  const precisions = lowReport.individualResults.map(r => r.metrics.precision);
  const recalls = lowReport.individualResults.map(r => r.metrics.recall);
  const f1Scores = lowReport.individualResults.map(r => r.metrics.f1Score);
  const maes = lowReport.individualResults.map(r => r.metrics.mae);
  const mapes = lowReport.individualResults.map(r => r.metrics.mape);

  const calcMean = {
    precision: calculateMean(precisions),
    recall: calculateMean(recalls),
    f1Score: calculateMean(f1Scores),
    mae: calculateMean(maes),
    mape: calculateMean(mapes)
  };

  const calcMedian = {
    precision: calculateMedian(precisions),
    recall: calculateMedian(recalls),
    f1Score: calculateMedian(f1Scores),
    mae: calculateMedian(maes),
    mape: calculateMedian(mapes)
  };

  console.log(`Nombre de clients: ${lowReport.individualResults.length}\n`);

  console.log('MOYENNES:');
  let lowMeanErrors = 0;
  for (const [key, reported] of Object.entries(lowReport.aggregateMetrics.mean)) {
    const calculated = calcMean[key as keyof typeof calcMean];
    const ok = Math.abs(reported - calculated) < TOLERANCE;
    if (!ok) lowMeanErrors++;
    console.log(`${ok ? '✅' : '❌'} ${key.padEnd(12)} Reporté: ${reported.toFixed(10)} Calculé: ${calculated.toFixed(10)}`);
  }

  console.log('\nMÉDIANES:');
  let lowMedianErrors = 0;
  for (const [key, reported] of Object.entries(lowReport.aggregateMetrics.median)) {
    const calculated = calcMedian[key as keyof typeof calcMedian];
    const ok = Math.abs(reported - calculated) < TOLERANCE;
    if (!ok) lowMedianErrors++;
    console.log(`${ok ? '✅' : '❌'} ${key.padEnd(12)} Reporté: ${reported.toFixed(10)} Calculé: ${calculated.toFixed(10)}`);
  }

  console.log('\n' + '─'.repeat(100));
  if (lowMeanErrors === 0 && lowMedianErrors === 0) {
    console.log('✅ PARTIE 3 OK: Agrégé LOW mathématiquement correct\n');
  } else {
    console.log(`❌ PARTIE 3 ERREUR: ${lowMeanErrors + lowMedianErrors} erreur(s) dans agrégé LOW\n`);
  }
} else {
  console.log('⚠️  PARTIE 3 SKIP: Rapport LOW non trouvé\n');
}

// ========================================
// PARTIE 4: VÉRIFIER AGRÉGÉ ALL
// ========================================

console.log('📊 PARTIE 4/4: VÉRIFICATION AGRÉGÉ ALL (CLEAN + LOW)\n');
console.log('─'.repeat(100));

const allPath = path.join(reportsDir, 'backtest-aggregate-2025-11-18-all.json');
if (fs.existsSync(allPath)) {
  const allReport: AggregateReport = JSON.parse(fs.readFileSync(allPath, 'utf-8'));

  const precisions = allReport.individualResults.map(r => r.metrics.precision);
  const recalls = allReport.individualResults.map(r => r.metrics.recall);
  const f1Scores = allReport.individualResults.map(r => r.metrics.f1Score);
  const maes = allReport.individualResults.map(r => r.metrics.mae);
  const mapes = allReport.individualResults.map(r => r.metrics.mape);

  const calcMean = {
    precision: calculateMean(precisions),
    recall: calculateMean(recalls),
    f1Score: calculateMean(f1Scores),
    mae: calculateMean(maes),
    mape: calculateMean(mapes)
  };

  const calcMedian = {
    precision: calculateMedian(precisions),
    recall: calculateMedian(recalls),
    f1Score: calculateMedian(f1Scores),
    mae: calculateMedian(maes),
    mape: calculateMedian(mapes)
  };

  console.log(`Nombre de clients: ${allReport.individualResults.length}\n`);

  console.log('MOYENNES:');
  let allMeanErrors = 0;
  for (const [key, reported] of Object.entries(allReport.aggregateMetrics.mean)) {
    const calculated = calcMean[key as keyof typeof calcMean];
    const ok = Math.abs(reported - calculated) < TOLERANCE;
    if (!ok) allMeanErrors++;
    console.log(`${ok ? '✅' : '❌'} ${key.padEnd(12)} Reporté: ${reported.toFixed(10)} Calculé: ${calculated.toFixed(10)}`);
  }

  console.log('\nMÉDIANES:');
  let allMedianErrors = 0;
  for (const [key, reported] of Object.entries(allReport.aggregateMetrics.median)) {
    const calculated = calcMedian[key as keyof typeof calcMedian];
    const ok = Math.abs(reported - calculated) < TOLERANCE;
    if (!ok) allMedianErrors++;
    console.log(`${ok ? '✅' : '❌'} ${key.padEnd(12)} Reporté: ${reported.toFixed(10)} Calculé: ${calculated.toFixed(10)}`);
  }

  console.log('\n' + '─'.repeat(100));
  if (allMeanErrors === 0 && allMedianErrors === 0) {
    console.log('✅ PARTIE 4 OK: Agrégé ALL mathématiquement correct\n');
  } else {
    console.log(`❌ PARTIE 4 ERREUR: ${allMeanErrors + allMedianErrors} erreur(s) dans agrégé ALL\n`);
  }
} else {
  console.log('⚠️  PARTIE 4 SKIP: Rapport ALL non trouvé\n');
}

// ========================================
// RÉSUMÉ FINAL
// ========================================

console.log('\n' + '='.repeat(100));
console.log('🎯 RÉSUMÉ FINAL DE LA VÉRIFICATION COMPLÈTE');
console.log('='.repeat(100) + '\n');

if (clientErrors === 0) {
  console.log('✅ Tous les rapports clients individuels sont mathématiquement corrects');
} else {
  console.log(`❌ ${clientErrors} rapport(s) client avec des erreurs`);
}

console.log('✅ Toutes les vérifications mathématiques sont complètes\n');
