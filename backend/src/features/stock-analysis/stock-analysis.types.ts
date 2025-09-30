export interface ProductAtRisk {
  product_id: number;
  product_name: string;
  product_uom: [number, string];

  consumption_per_day: number;
  days_until_stockout: number;  // négatif = déjà en rupture

  quantity_needed: number;       // quantité brute calculée (ex: 63.5)
  quantity_to_order: number;     // arrondie selon MOQ & multiples UoM (ex: 72 si vendu par 12)
}

export interface StockAnalysisResult {
  client_id: number;
  products_at_risk: ProductAtRisk[];
}