/**
 * Types partagés pour les produits
 *
 * Barrel export: réexporte les types depuis stock-replenishment
 * pour éviter les dépendances croisées entre features
 */

export type {
  OrderHistoryDetail,
  StockPredictionDetails,
  ProductStockStatus,
  StockReplenishmentResult,
} from "../../features/stock-replenishment/stock-replenishment.types";
