/**
 * Utilities for date period calculations
 * Inspired by IRIS "Forecasting Shipments with LLMs" article
 */

interface OrderWithDate {
  date_order: string; // Format: YYYY-MM-DD
  quantity: number;
}

/**
 * Check if a date is within the last N months before a reference date
 * @param orderDate Order date (YYYY-MM-DD)
 * @param referenceDate Reference date (YYYY-MM-DD)
 * @param months Number of months to look back
 */
export function isWithinLastNMonths(
  orderDate: string,
  referenceDate: string,
  months: number
): boolean {
  const order = new Date(orderDate);
  const reference = new Date(referenceDate);

  const monthsAgo = new Date(reference);
  monthsAgo.setMonth(monthsAgo.getMonth() - months);

  return order >= monthsAgo && order <= reference;
}

/**
 * Check if a date falls in the historical reference period (12-24 months before reference)
 *
 * CHANGEMENT vs version précédente: au lieu de prendre exactement la "même période N-1" (trop étroit),
 * on prend TOUTE l'année précédente (12-24 mois avant) pour capturer la saisonnalité complète.
 *
 * Exemple: si référence = nov 2024
 * - Ancien: cherchait août-nov 2023 (fenêtre étroite de 3 mois) → souvent vide en B2B
 * - Nouveau: cherche nov 2022 à nov 2023 (12 mois complets) → beaucoup plus de données
 *
 * @param orderDate Order date (YYYY-MM-DD)
 * @param referenceDate Current reference date (YYYY-MM-DD)
 * @param months Ignored (kept for API compatibility, always uses 12 months)
 */
export function isSamePeriodLastYear(
  orderDate: string,
  referenceDate: string,
  _months: number // Ignored, kept for compatibility
): boolean {
  const order = new Date(orderDate);
  const reference = new Date(referenceDate);

  // Période N-1: de 12 à 24 mois avant la date de référence
  // Cela capture toute l'année précédente pour la saisonnalité
  const lastYearEnd = new Date(reference);
  lastYearEnd.setMonth(lastYearEnd.getMonth() - 12); // Il y a 12 mois (début de N-1)

  const lastYearStart = new Date(reference);
  lastYearStart.setMonth(lastYearStart.getMonth() - 24); // Il y a 24 mois (fin de N-2)

  return order >= lastYearStart && order <= lastYearEnd;
}

export interface SplitOrdersResult<T extends OrderWithDate> {
  recent: T[];
  lastYear: T[];
}

/**
 * Split orders into 2 views: recent (last N months) and same period last year
 * This captures seasonal patterns by comparing current period vs same period last year
 *
 * @param orders All available orders for the product
 * @param currentDate Reference date for the analysis
 * @param months Period window in months (default: 3)
 * @param maxOrdersPerView Maximum orders per view (default: 12 for lastYear to avoid LLM confusion)
 */
export function splitOrdersByPeriod<T extends OrderWithDate>(
  orders: T[],
  currentDate: string,
  months: number = 3,
  maxOrdersPerView: number = 12 // Limited to 12 to prevent LLM confusion (IRIS article: "LLMs confuse with >3 weeks data")
): SplitOrdersResult<T> {
  // Recent: last N months before currentDate (limited to 5 for trend detection)
  const recent = orders
    .filter(order => isWithinLastNMonths(order.date_order, currentDate, months))
    .sort((a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime())
    .slice(0, 8); // Augmenté de 5 à 8 car fenêtre de 5 mois

  // Last year: 12-24 months before currentDate (limited to 12 orders max to prevent LLM confusion)
  const lastYear = orders
    .filter(order => isSamePeriodLastYear(order.date_order, currentDate, months))
    .sort((a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime())
    .slice(0, maxOrdersPerView);

  console.log(`\n🔍 DEBUG splitOrdersByPeriod:`);
  console.log(`   currentDate: ${currentDate}`);
  console.log(`   months window: ${months}`);
  console.log(`   total orders: ${orders.length}`);
  console.log(`   recent filtered: ${recent.length}`);
  console.log(`   lastYear filtered: ${lastYear.length}`);
  if (lastYear.length > 0) {
    console.log(`   lastYear dates: ${lastYear.map(o => o.date_order).join(', ')}`);
  }

  return { recent, lastYear };
}

/**
 * Calculate median of an array of numbers
 */
export function calculateMedian(values: number[]): number {
  if (values.length === 0) return 0;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

/**
 * Detect outliers using 2x median criterion (as per IRIS article)
 * Outlier = value > 2 × median
 */
export function detectOutliers(values: number[]): number[] {
  if (values.length === 0) return [];

  const median = calculateMedian(values);
  const threshold = median * 2;

  return values.filter(v => v > threshold);
}
