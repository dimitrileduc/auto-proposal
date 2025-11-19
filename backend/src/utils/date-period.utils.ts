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
 * Check if a date falls in the same period last year
 * @param orderDate Order date (YYYY-MM-DD)
 * @param referenceDate Current reference date (YYYY-MM-DD)
 * @param months Period window in months (e.g., 3 for 3 months)
 */
export function isSamePeriodLastYear(
  orderDate: string,
  referenceDate: string,
  months: number
): boolean {
  const order = new Date(orderDate);
  const reference = new Date(referenceDate);

  // Calculate same period last year
  const lastYearEnd = new Date(reference);
  lastYearEnd.setFullYear(lastYearEnd.getFullYear() - 1);

  const lastYearStart = new Date(lastYearEnd);
  lastYearStart.setMonth(lastYearStart.getMonth() - months);

  return order >= lastYearStart && order <= lastYearEnd;
}

export interface SplitOrdersResult<T extends OrderWithDate> {
  recent: T[];
  lastYear: T[];
}

/**
 * Split orders into 2 views: recent (last N months) and same period last year
 * Limits each view to max 5 orders (as per IRIS article: LLMs confuse with >3 weeks data)
 *
 * @param orders All available orders for the product
 * @param currentDate Reference date for the analysis
 * @param months Period window in months (default: 3)
 * @param maxOrdersPerView Maximum orders per view (default: 5)
 */
export function splitOrdersByPeriod<T extends OrderWithDate>(
  orders: T[],
  currentDate: string,
  months: number = 3,
  maxOrdersPerView: number = 5
): SplitOrdersResult<T> {
  // Recent: last N months before currentDate
  const recent = orders
    .filter(order => isWithinLastNMonths(order.date_order, currentDate, months))
    .sort((a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime())
    .slice(0, maxOrdersPerView);

  // Last year: same N months period but 1 year ago
  const lastYear = orders
    .filter(order => isSamePeriodLastYear(order.date_order, currentDate, months))
    .sort((a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime())
    .slice(0, maxOrdersPerView);

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
