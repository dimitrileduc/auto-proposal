export interface ProductStockStatus {
  product_id: number;
  product_name: string;
  product_uom: [number, string];

  consumption_per_day: number;
  days_until_stockout: number; // négatif = déjà en rupture

  quantity_needed: number; // quantité brute calculée (ex: 63.5)
  quantity_to_order: number; // arrondie selon MOQ & multiples UoM
}

export interface StockReplenishmentResult {
  client_id: number;
  products: ProductStockStatus[];
}
