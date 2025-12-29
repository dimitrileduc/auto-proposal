/**
 * Shared product types
 *
 * Barrel export: re-exports types from stock-replenishment
 * to avoid cross-dependencies between features
 *
 * @module shared/types/product
 */

export type {
  OrderHistoryDetail,
  ProductStockStatus,
  StockReplenishmentResult,
} from "../../features/stock-replenishment/stock-replenishment.types";
