import type { ProductStockStatus } from "../../shared/types/product.types";

/**
 * Produit enrichi avec prix actuel et calculs financiers
 */
export interface ProductWithCurrentPrice extends ProductStockStatus {
  /** Prix unitaire historique (dernier price_unit de order_history) */
  current_price_unit: number;

  /** Sous-total: quantity_to_order × current_price_unit */
  subtotal: number;

  /** Nombre d'unités ajoutées pour atteindre le MOQ global (0 si pas d'ajustement) */
  moq_adjustment: number;
}

/**
 * Résultat de la préparation de la proposition
 * (Phase 2.5: Pricing + MOQ adjustment)
 */
export interface ProposalPreparationResult {
  /** ID du client Odoo */
  client_id: number;

  /** ID du pricelist utilisé (optionnel, uniquement avec mode currentPriceForClient) */
  pricelist_id?: number;

  /** Produits avec prix historiques et quantités ajustées */
  products: ProductWithCurrentPrice[];

  /** Montant total de la proposition (après ajustement MOQ éventuel) */
  total_amount: number;

  /** Indique si un ajustement MOQ a été appliqué */
  moq_adjustment_applied: boolean;

  /** Détails de l'ajustement MOQ (si appliqué) */
  adjustment_details?: {
    /** Total avant ajustement MOQ */
    original_total: number;

    /** MOQ minimum requis (ex: 300€) */
    minimum_required: number;

    /** Montant ajouté pour combler le gap */
    gap_filled: number;

    /** Nombre de produits dont la quantité a été augmentée */
    products_adjusted: number;
  };
}
