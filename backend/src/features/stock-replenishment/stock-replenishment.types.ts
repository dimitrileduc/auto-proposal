import type { QuantityCalculationMetadata } from "./utils/quantity.utils";

export interface ProductStockStatus {
  product_id: number;
  product_name: string;
  product_uom: [number, string];

  quantity_to_order: number | null;

  // Métadonnées de calcul
  calculation_metadata: QuantityCalculationMetadata;
}

export interface StockReplenishmentResult {
  client_id: number;
  products: ProductStockStatus[];
}
