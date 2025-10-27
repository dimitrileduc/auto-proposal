/**
 * Utilitaires pour la manipulation des dates
 */

/**
 * Génère une date dans le passé au format SQL/ISO (YYYY-MM-DD HH:MM:SS)
 * @param daysAgo Nombre de jours dans le passé
 * @returns Date formatée (ex: "2025-08-29 00:00:00")
 *
 * @example
 * ```typescript
 * const dateLimit = getDateDaysAgo(30) // Il y a 30 jours à 00:00:00
 * ```
 */
export function getDateDaysAgo(daysAgo: number): string {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return date.toISOString().split('T')[0] + ' 00:00:00'
}

/**
 * Retourne la date actuelle au format SQL/ISO (YYYY-MM-DD HH:MM:SS)
 * @returns Date actuelle formatée (ex: "2025-10-27 00:00:00")
 *
 * @example
 * ```typescript
 * const today = getTodayAsDateString() // Aujourd'hui à 00:00:00
 * ```
 */
export function getTodayAsDateString(): string {
  const today = new Date()
  return today.toISOString().split('T')[0] + ' 00:00:00'
}

/**
 * Calcule une date N jours avant une date de référence
 * @param referenceDate Date de référence au format ISO (ex: "2025-10-27 00:00:00")
 * @param daysBefore Nombre de jours à soustraire
 * @returns Date calculée au format SQL/ISO (ex: "2025-08-09 00:00:00")
 *
 * @example
 * ```typescript
 * const analysisEndDate = "2025-10-27 00:00:00"
 * const startDate = calculateDateBefore(analysisEndDate, 180)
 * // Retourne "2025-04-30 00:00:00"
 * ```
 */
export function calculateDateBefore(referenceDate: string, daysBefore: number): string {
  const date = new Date(referenceDate)
  date.setDate(date.getDate() - daysBefore)
  return date.toISOString().split('T')[0] + ' 00:00:00'
}

