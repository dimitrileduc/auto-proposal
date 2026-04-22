/**
 * Order history service
 *
 * Retrieves and transforms client order history from Odoo
 * for stock replenishment analysis.
 *
 * @module features/stock-replenishment/order-history/service
 */
import { createOdooClient } from "../../../infrastructure/odoo/odoo.service";
import { transformOrderHistory } from "./transform.utils";
import { autoProposalConfig } from "../../../config/auto-proposal";
import type { ClientOrderHistory } from "./order-history.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Retrieves and transforms client order history grouped by product
 *
 * @param partnerId - Odoo partner ID (default: test client)
 * @param windowDays - History window in days (default: 730 = 2 years, includes Y-1 for seasonality)
 * @param referenceDate - Reference date for history calculation (format: "YYYY-MM-DD HH:MM:SS")
 * @returns Order history structured by product
 * @throws Error on Odoo API failure
 *
 * @example
 * ```typescript
 * const history = await getProductOrderHistory(3, 730, "2025-10-26 00:00:00")
 * console.log(`${history.products.length} products ordered`)
 * ```
 */
export async function getProductOrderHistory(
  partnerId: number = autoProposalConfig.testing.defaultClientId,
  windowDays: number = 730,
  referenceDate: string,
  companyId?: number
): Promise<ClientOrderHistory> {
  const rawHistory = await odooClient.getOrderHistoryByPartner(
    partnerId,
    windowDays,
    referenceDate,
    autoProposalConfig.testing.includeDraftOrders,
    autoProposalConfig.productFiltering.excludedCategoryIds,
    companyId
  );
  return transformOrderHistory(rawHistory, partnerId);
}
