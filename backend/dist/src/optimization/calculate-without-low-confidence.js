// Script to calculate aggregated metrics excluding low confidence predictions
const data = {
    low: {
        counts: {
            truePositives: 183,
            falsePositives: 746,
            falseNegatives: 815,
            total: 1744
        },
        productMetrics: {
            precision: 0.197,
            recall: 0.1834,
            f1Score: 0.1899
        },
        quantityMetrics: {
            mae: 4.1093,
            wmape: 6.49,
            mape: 6.47,
            bias: 0.85,
            rmse: 1.7711
        }
    },
    medium: {
        counts: {
            truePositives: 2441,
            falsePositives: 2140,
            falseNegatives: 49,
            total: 4630
        },
        productMetrics: {
            precision: 0.5329,
            recall: 0.9803,
            f1Score: 0.6904
        },
        quantityMetrics: {
            mae: 6.4031,
            wmape: 31.52,
            mape: 33.57,
            bias: 0.11,
            rmse: 15.0951
        }
    },
    high: {
        counts: {
            truePositives: 711,
            falsePositives: 2338,
            falseNegatives: 14,
            total: 3063
        },
        productMetrics: {
            precision: 0.2332,
            recall: 0.9807,
            f1Score: 0.3768
        },
        quantityMetrics: {
            mae: 12.9508,
            wmape: 24.09,
            mape: 24.88,
            bias: 4.84,
            rmse: 12.3206
        }
    }
};
console.log('=== CALCUL DES MÉTRIQUES SANS LOW CONFIDENCE ===\n');
// Combine counts from medium and high
const combinedCounts = {
    truePositives: data.medium.counts.truePositives + data.high.counts.truePositives,
    falsePositives: data.medium.counts.falsePositives + data.high.counts.falsePositives,
    falseNegatives: data.medium.counts.falseNegatives + data.high.counts.falseNegatives,
    total: data.medium.counts.total + data.high.counts.total
};
console.log('Counts combinés (Medium + High):');
console.log(JSON.stringify(combinedCounts, null, 2));
// Calculate product metrics from counts
const precision = combinedCounts.truePositives / (combinedCounts.truePositives + combinedCounts.falsePositives);
const recall = combinedCounts.truePositives / (combinedCounts.truePositives + combinedCounts.falseNegatives);
const f1Score = 2 * (precision * recall) / (precision + recall);
console.log('\nProduct Metrics:');
console.log({
    precision: precision.toFixed(4),
    recall: recall.toFixed(4),
    f1Score: f1Score.toFixed(4)
});
// Calculate weighted average for quantity metrics
const mediumWeight = data.medium.counts.total / combinedCounts.total;
const highWeight = data.high.counts.total / combinedCounts.total;
console.log('\nPoids pour moyenne pondérée:');
console.log({
    mediumWeight: mediumWeight.toFixed(4),
    highWeight: highWeight.toFixed(4)
});
const weightedMAE = data.medium.quantityMetrics.mae * mediumWeight + data.high.quantityMetrics.mae * highWeight;
const weightedWMAPE = data.medium.quantityMetrics.wmape * mediumWeight + data.high.quantityMetrics.wmape * highWeight;
const weightedMAPE = data.medium.quantityMetrics.mape * mediumWeight + data.high.quantityMetrics.mape * highWeight;
const weightedBias = data.medium.quantityMetrics.bias * mediumWeight + data.high.quantityMetrics.bias * highWeight;
const weightedRMSE = Math.sqrt(Math.pow(data.medium.quantityMetrics.rmse, 2) * mediumWeight +
    Math.pow(data.high.quantityMetrics.rmse, 2) * highWeight);
console.log('\nQuantity Metrics (moyenne pondérée):');
console.log({
    mae: weightedMAE.toFixed(4),
    wmape: weightedWMAPE.toFixed(2),
    mape: weightedMAPE.toFixed(2),
    bias: weightedBias.toFixed(2),
    rmse: weightedRMSE.toFixed(4)
});
console.log('\n=== COMPARAISON ===\n');
console.log('ALL (Low + Medium + High):');
const allCounts = {
    truePositives: data.low.counts.truePositives + data.medium.counts.truePositives + data.high.counts.truePositives,
    falsePositives: data.low.counts.falsePositives + data.medium.counts.falsePositives + data.high.counts.falsePositives,
    falseNegatives: data.low.counts.falseNegatives + data.medium.counts.falseNegatives + data.high.counts.falseNegatives,
    total: data.low.counts.total + data.medium.counts.total + data.high.counts.total
};
const allPrecision = allCounts.truePositives / (allCounts.truePositives + allCounts.falsePositives);
const allRecall = allCounts.truePositives / (allCounts.truePositives + allCounts.falseNegatives);
const allF1 = 2 * (allPrecision * allRecall) / (allPrecision + allRecall);
console.log(`Precision: ${allPrecision.toFixed(4)} vs ${precision.toFixed(4)} (sans low)`);
console.log(`Recall: ${allRecall.toFixed(4)} vs ${recall.toFixed(4)} (sans low)`);
console.log(`F1: ${allF1.toFixed(4)} vs ${f1Score.toFixed(4)} (sans low)`);
console.log(`\nÉchantillons gardés: ${combinedCounts.total}/${allCounts.total} (${(combinedCounts.total / allCounts.total * 100).toFixed(1)}%)`);
export {};
