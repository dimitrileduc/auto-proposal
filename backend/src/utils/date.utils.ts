/**
 * Utilitaires pour la manipulation des dates
 */

import { parse, isValid } from 'date-fns';

/**
 * Parse une date utilisateur vers format Odoo "YYYY-MM-DD HH:MM:SS"
 *
 * Formats acceptés:
 * - "010125" → 01/01/2025 00:00:00
 * - "01/01/25" → 01/01/2025 00:00:00
 * - "01/01/2025" → 01/01/2025 00:00:00
 * - "2025-01-01" → 01/01/2025 00:00:00 (ISO)
 *
 * @throws Error si format invalide avec message explicatif
 */
export function parseUserDateInput(input: string): string {
  // Si déjà au format complet Odoo, retourner tel quel
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(input)) {
    return input;
  }

  const formats = [
    { pattern: 'ddMMyy', example: '010125' },
    { pattern: 'dd/MM/yy', example: '01/01/25' },
    { pattern: 'dd/MM/yyyy', example: '01/01/2025' },
    { pattern: 'yyyy-MM-dd', example: '2025-01-01' },
  ];

  // Utiliser une date de référence fixe à minuit UTC pour éviter les problèmes de fuseau horaire
  const referenceDate = new Date(Date.UTC(2000, 0, 1, 0, 0, 0));

  for (const { pattern } of formats) {
    const parsed = parse(input, pattern, referenceDate);
    if (isValid(parsed)) {
      // Extraire année, mois, jour en ignorant l'heure
      const year = parsed.getFullYear();
      const month = String(parsed.getMonth() + 1).padStart(2, '0');
      const day = String(parsed.getDate()).padStart(2, '0');
      return `${year}-${month}-${day} 00:00:00`;
    }
  }

  throw new Error(
    `Format de date invalide: "${input}"\n\n` +
    `Formats acceptés:\n` +
    `  • "010125" (JJMMAA)\n` +
    `  • "01/01/25" (JJ/MM/AA)\n` +
    `  • "01/01/2025" (JJ/MM/AAAA)\n` +
    `  • "2025-01-01" (AAAA-MM-JJ ISO)`
  );
}

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

