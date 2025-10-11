import { sortByOrderFrequencyAndConfidence } from "./adjustment-strategy.utils";
import type { ProductWithCurrentPrice } from "../proposal-preparation.types";

/**
 * Ajuste les quantités pour atteindre le MOQ global
 *
 * **Stratégie round-robin avec arrêt immédiat:**
 * 1. Trie les produits par fréquence de commande (DESC) puis confiance (DESC)
 * 2. Ajoute +1 unité au premier produit, recalcule le gap
 * 3. Teste si gap comblé → si OUI: STOP, si NON: passe au produit suivant
 * 4. Répète en boucle (round-robin) jusqu'à atteindre 300€
 *
 * **IMPORTANT:** L'arrêt se fait **immédiatement** dès que le gap est comblé,
 * même au milieu d'un tour. On ne termine PAS le tour en cours.
 *
 * @example
 * ```typescript
 * // Situation: Gap de 55€ à combler
 * // Produits triés: A (5 cmd, 20€), B (3 cmd, 15€), C (1 cmd, 10€)
 *
 * Iteration 1: A +1 (20€) → Gap restant: 35€ → Continue
 * Iteration 2: B +1 (15€) → Gap restant: 20€ → Continue
 * Iteration 3: C +1 (10€) → Gap restant: 10€ → Continue
 * Iteration 4: A +1 (20€) → Gap restant: -10€ → STOP ✅
 *
 * Résultat:
 * - A: +2 unités (produit le plus commandé, reçoit le plus)
 * - B: +1 unité
 * - C: +1 unité
 * Total: 4 unités ajoutées, 55€ comblés (avec dépassement de 10€)
 *
 * Note: Le 2ème tour n'est PAS complété (B et C ne reçoivent pas leur 2ème unité)
 * ```
 *
 * @param products - Produits avec prix actuels
 * @param currentTotal - Total actuel de la commande
 * @param minimumOrder - MOQ global (ex: 300€)
 * @returns Produits avec quantités ajustées
 */
export function adjustForMinimumOrder(
  products: ProductWithCurrentPrice[],
  currentTotal: number,
  minimumOrder: number
): ProductWithCurrentPrice[] {
  const gap = minimumOrder - currentTotal;

  // Pas besoin d'ajustement si déjà au-dessus du MOQ
  if (gap <= 0) {
    return products.map((p) => ({ ...p, moq_adjustment: 0 }));
  }

  // Trier par fréquence de commande + confiance
  const sortedProducts = sortByOrderFrequencyAndConfidence(products);

  // Initialiser moq_adjustment à 0 pour tous les produits
  const adjustedProducts = products.map((p) => ({ ...p, moq_adjustment: 0 }));

  let remainingGap = gap;
  let currentIndex = 0;
  let iterations = 0;
  const maxIterations = 10000; // Sécurité anti-boucle infinie

  // Loop round-robin: ajouter +1 unité à chaque tour
  while (remainingGap > 0 && iterations < maxIterations) {
    const sortedProduct = sortedProducts[currentIndex];

    // Trouver ce produit dans adjustedProducts
    const adjustedProduct = adjustedProducts.find(
      (p) => p.product_id === sortedProduct.product_id
    )!;

    // Ajouter +1 unité
    adjustedProduct.quantity_to_order += 1;
    adjustedProduct.subtotal += adjustedProduct.current_price_unit;
    adjustedProduct.moq_adjustment += 1;

    remainingGap -= adjustedProduct.current_price_unit;

    // Passer au produit suivant (round-robin)
    currentIndex = (currentIndex + 1) % sortedProducts.length;
    iterations++;
  }

  return adjustedProducts;
}
