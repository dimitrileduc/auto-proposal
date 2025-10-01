/**
 * Calcule la quantité nécessaire pour couvrir la période cible
 *
 * @param consumptionPerDay Consommation moyenne par jour
 * @param daysToCover Nombre de jours à couvrir (target + lead time)
 * @returns Quantité brute nécessaire
 */
export function calculateQuantityNeeded(
  consumptionPerDay: number,
  daysToCover: number
): number {
  const quantityNeeded = daysToCover * consumptionPerDay;
  return quantityNeeded;
}

/**
 * TODO : Ajuste la quantité selon les contraintes (MOQ, multiples)
 *
 * @param quantity Quantité brute calculée
 * @param multiple Multiple d'UoM (ex: vendu par 12)
 * @param moq Quantité minimum de commande
 * @returns Quantité ajustée
 */
//export function adjustQuantityForConstraints(): number {}
