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


/**
 * Run day "YYYY-MM-DD" in Europe/Paris time
 *
 * Activity deadline and base of the delay between two follow-ups.
 *
 * @param now Reference instant (default: now)
 * @returns Calendar day in Paris (e.g. "2026-10-02")
 *
 * @example
 * ```typescript
 * getRunDateParis(new Date("2026-10-01T22:30:00Z")) // "2026-10-02"
 * ```
 */
export function getRunDateParis(now: Date = new Date()): string {
  return PARIS_DAY_FORMAT.format(now)
}

/** "YYYY-MM-DD" in Europe/Paris (en-CA gives the year-month-day order) */
const PARIS_DAY_FORMAT = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Paris",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})

/**
 * Formats the date part of an Odoo date as DD/MM/YYYY, without timezone conversion
 *
 * @param date "YYYY-MM-DD" or "YYYY-MM-DD HH:MM:SS"
 * @returns French date (e.g. "02/10/2026")
 */
export function formatDateFr(date: string): string {
  const [year, month, day] = date.slice(0, 10).split("-")
  return `${day}/${month}/${year}`
}

/**
 * Converts an Odoo date to the Paris calendar day
 *
 * Odoo datetimes ("YYYY-MM-DD HH:MM:SS") are UTC; a plain date is returned as is.
 *
 * @param value "YYYY-MM-DD" or Odoo UTC datetime "YYYY-MM-DD HH:MM:SS"
 * @returns Paris day "YYYY-MM-DD"
 */
export function odooDatetimeToParisDate(value: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value
  }
  return getRunDateParis(new Date(`${value.replace(" ", "T")}Z`))
}
