/**
 * Median calculation utilities
 * @module features/stock-replenishment/utils/median
 */

/**
 * Calculates the median of a number array
 * The median ignores outliers
 *
 * @param values - Array of numbers
 * @returns The median rounded to the nearest integer
 * @throws Error if array is empty
 *
 * @example
 * calculateMedian([10, 12, 11, 100, 12]) // 12 (ignores outlier at 100)
 * calculateMedian([10, 12]) // 11 (average of 10 and 12)
 * calculateMedian([12]) // 12
 */
export function calculateMedian(values: number[]): number {
  if (values.length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }

  // Copy and sort array
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // If even number of elements -> average of 2 central values
  if (sorted.length % 2 === 0) {
    const median = (sorted[mid - 1] + sorted[mid]) / 2;
    return Math.round(median);
  }

  // If odd number -> central value
  return Math.round(sorted[mid]);
}
