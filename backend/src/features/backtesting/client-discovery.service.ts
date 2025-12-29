/**
 * Automatic client discovery service for backtesting
 *
 * Finds the N most active clients with recent orders and sufficient history
 *
 * @module features/backtesting/client-discovery
 */

import { OdooClient as XmlRpcOdoo } from "odoo-xmlrpc-ts";

interface ClientOrderCount {
  clientId: number;
  clientName: string;
  orders2025: number;
  totalOrders: number;
  lastOrderDate: string;
}

/**
 * Finds the N most active clients with orders in the specified year and history
 *
 * @param odooConfig - Odoo configuration (url, db, username, password)
 * @param count - Number of clients to return (default: 50)
 * @param year - Year to filter orders (default: 2025)
 * @param referenceDate - Reference date to search orders before (optional)
 * @returns List of client IDs sorted by activity
 */
export async function findTopBacktestClients(
  odooConfig: {
    url: string;
    db: string;
    username: string;
    password: string;
  },
  count: number = 50,
  year: number = 2025,
  referenceDate?: string
): Promise<number[]> {
  const odoo = new XmlRpcOdoo(odooConfig);

  // 1. Search all orders for the year (or before referenceDate if provided)
  const filters: any[] = [
    ["date_order", ">=", `${year}-01-01`],
    ["state", "in", ["sale", "done"]]
  ];

  if (referenceDate) {
    filters.push(["date_order", "<=", referenceDate]);
  } else {
    filters.push(["date_order", "<", `${year + 1}-01-01`]);
  }

  const orders = await odoo.searchRead("sale.order", filters, {
    fields: ["partner_id", "date_order", "name"],
    limit: 10000
  });

  // 2. Group by client
  const clientOrderMap = new Map<number, ClientOrderCount>();

  for (const order of orders) {
    const clientId = order.partner_id[0];
    const clientName = order.partner_id[1];

    if (!clientOrderMap.has(clientId)) {
      clientOrderMap.set(clientId, {
        clientId,
        clientName,
        orders2025: 0,
        totalOrders: 0,
        lastOrderDate: order.date_order
      });
    }

    const client = clientOrderMap.get(clientId)!;
    client.orders2025++;

    if (order.date_order > client.lastOrderDate) {
      client.lastOrderDate = order.date_order;
    }
  }

  // 3. Sort by activity and take top N*2 (margin after filtering)
  const sortedClients = Array.from(clientOrderMap.values())
    .sort((a, b) => b.orders2025 - a.orders2025)
    .slice(0, count * 2);

  // 4. Verify history (at least 2 total orders)
  const clientsWithHistory: ClientOrderCount[] = [];

  for (let i = 0; i < sortedClients.length; i++) {
    const clientData = sortedClients[i];

    try {
      const totalOrderIds = await odoo.search("sale.order", [
        ["partner_id", "=", clientData.clientId],
        ["state", "in", ["sale", "done"]]
      ]);

      clientData.totalOrders = totalOrderIds.length;

      // Keep only clients with at least 2 orders
      if (clientData.totalOrders >= 2) {
        clientsWithHistory.push(clientData);
      }

      // Stop when we have the requested count
      if (clientsWithHistory.length >= count) {
        break;
      }
    } catch (error) {
      console.error(`Error checking client ${clientData.clientId}:`, error);
    }
  }

  // 5. Re-sort by 2025 activity DESC
  clientsWithHistory.sort((a, b) => {
    if (b.orders2025 !== a.orders2025) {
      return b.orders2025 - a.orders2025;
    }
    return b.totalOrders - a.totalOrders;
  });

  const clientIds = clientsWithHistory.slice(0, count).map(c => c.clientId);

  return clientIds;
}
