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

