// Analyse des intervalles de recommande pour clients LOW confidence

const client3547 = [
  "2025-10-14", "2025-09-23", "2025-09-23", "2025-08-29", "2025-08-25", "2025-08-25",
  "2025-08-07", "2025-06-19", "2025-06-17", "2025-05-28", "2025-05-28", "2025-05-20",
  "2025-04-02", "2025-04-01", "2025-03-05", "2025-02-24", "2025-02-24", "2025-01-23",
  "2025-01-23", "2024-12-09", "2024-12-09", "2024-12-02", "2024-11-14", "2024-11-12",
  "2024-11-12", "2024-10-21", "2024-10-21", "2024-10-07", "2024-09-30", "2024-09-30",
  "2024-09-09", "2024-08-14", "2024-08-14", "2024-06-26", "2024-06-12", "2024-06-12",
  "2024-05-27", "2024-05-27", "2024-05-03"
];

const client3585 = [
  "2025-10-10", "2025-09-26", "2025-09-23", "2025-09-12", "2025-08-29", "2025-08-07",
  "2025-08-05", "2025-08-05", "2025-05-07", "2024-09-05", "2024-08-06", "2024-07-15",
  "2024-06-28", "2024-06-24", "2024-06-10", "2024-05-31", "2024-05-27", "2024-05-17",
  "2024-05-17"
];

function calculateIntervals(dates) {
  const sorted = [...new Set(dates)].sort().reverse(); // Unique + tri décroissant
  const intervals = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    const d1 = new Date(sorted[i]);
    const d2 = new Date(sorted[i + 1]);
    const days = Math.round((d1 - d2) / (1000 * 60 * 60 * 24));
    intervals.push(days);
  }

  return intervals;
}

function analyzeIntervals(intervals, clientName) {
  intervals.sort((a, b) => a - b);

  const min = intervals[0];
  const max = intervals[intervals.length - 1];
  const median = intervals[Math.floor(intervals.length / 2)];
  const p25 = intervals[Math.floor(intervals.length * 0.25)];
  const p75 = intervals[Math.floor(intervals.length * 0.75)];

  // Compter par tranches
  const ranges = {
    "0-20j": intervals.filter(i => i <= 20).length,
    "21-40j": intervals.filter(i => i > 20 && i <= 40).length,
    "41-60j": intervals.filter(i => i > 40 && i <= 60).length,
    "61-90j": intervals.filter(i => i > 60 && i <= 90).length,
    "91-120j": intervals.filter(i => i > 90 && i <= 120).length,
    ">120j": intervals.filter(i => i > 120).length,
  };

  console.log(`\n=== ${clientName} ===`);
  console.log(`Total intervalles: ${intervals.length}`);
  console.log(`Min: ${min}j | P25: ${p25}j | Médiane: ${median}j | P75: ${p75}j | Max: ${max}j`);
  console.log(`Distribution:`);
  Object.entries(ranges).forEach(([range, count]) => {
    const pct = ((count / intervals.length) * 100).toFixed(1);
    console.log(`  ${range}: ${count} (${pct}%)`);
  });

  return { min, max, median, p25, p75, ranges };
}

const int3547 = calculateIntervals(client3547);
const int3585 = calculateIntervals(client3585);

const stats3547 = analyzeIntervals(int3547, "K&F DE PAUW (3547)");
const stats3585 = analyzeIntervals(int3585, "ILIS SA (3585)");

// Recommandation
console.log(`\n=== RECOMMANDATION ===`);
const allIntervals = [...int3547, ...int3585].sort((a, b) => a - b);
const globalMedian = allIntervals[Math.floor(allIntervals.length / 2)];
const globalP75 = allIntervals[Math.floor(allIntervals.length * 0.75)];

console.log(`Médiane globale: ${globalMedian}j`);
console.log(`P75 global: ${globalP75}j`);

// Seuil optimal pour capturer 70-80% des cas
const target70 = allIntervals[Math.floor(allIntervals.length * 0.70)];
const target80 = allIntervals[Math.floor(allIntervals.length * 0.80)];

console.log(`\nPour capturer 70% des recommandes: seuil = ${target70}j`);
console.log(`Pour capturer 80% des recommandes: seuil = ${target80}j`);
console.log(`\n💡 Seuil recommandé: ${Math.round((target70 + target80) / 2)}j`);
