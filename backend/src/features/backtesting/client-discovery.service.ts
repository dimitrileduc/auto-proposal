/**
 * Service de découverte automatique de clients pour backtesting
 *
 * Trouve les N clients les plus actifs avec commandes récentes et historique suffisant
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
 * Trouve les N clients les plus actifs avec commandes en 2025 et historique
 *
 * @param odooConfig - Configuration Odoo (url, db, username, password)
 * @param count - Nombre de clients à retourner (défaut: 50)
 * @param year - Année pour filtrer les commandes (défaut: 2025)
 * @returns Liste des IDs de clients triés par activité
 */
export async function findTopBacktestClients(
  odooConfig: {
    url: string;
    db: string;
    username: string;
    password: string;
  },
  count: number = 50,
  year: number = 2025
): Promise<number[]> {
  console.log(`\n🔍 Auto-discovering top ${count} clients with ${year} orders and history...`);

  // Créer le client Odoo XML-RPC
  const odoo = new XmlRpcOdoo(odooConfig);

  // 1. Rechercher toutes les commandes de l'année
  console.log(`   Fetching ${year} orders...`);
  const orders = await odoo.searchRead("sale.order", [
    ["date_order", ">=", `${year}-01-01`],
    ["date_order", "<", `${year + 1}-01-01`],
    ["state", "in", ["sale", "done"]]
  ], {
    fields: ["partner_id", "date_order", "name"],
    limit: 10000
  });

  console.log(`   Found ${orders.length} orders in ${year}`);

  // 2. Grouper par client
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

  console.log(`   Found ${clientOrderMap.size} unique clients`);

  // 3. Trier par activité et prendre le top N*2 (pour avoir de la marge après filtrage)
  const sortedClients = Array.from(clientOrderMap.values())
    .sort((a, b) => b.orders2025 - a.orders2025)
    .slice(0, count * 2);

  console.log(`   Checking historical data for top ${sortedClients.length} clients...`);

  // 4. Vérifier l'historique (au moins 2 commandes totales)
  const clientsWithHistory: ClientOrderCount[] = [];

  for (let i = 0; i < sortedClients.length; i++) {
    const clientData = sortedClients[i];

    if ((i + 1) % 20 === 0) {
      console.log(`   Progress: ${i + 1}/${sortedClients.length}...`);
    }

    try {
      const totalOrderIds = await odoo.search("sale.order", [
        ["partner_id", "=", clientData.clientId],
        ["state", "in", ["sale", "done"]]
      ]);

      clientData.totalOrders = totalOrderIds.length;

      // Garder seulement les clients avec au moins 2 commandes
      if (clientData.totalOrders >= 2) {
        clientsWithHistory.push(clientData);
      }

      // Arrêter dès qu'on a le nombre demandé
      if (clientsWithHistory.length >= count) {
        break;
      }
    } catch (error) {
      console.error(`   ⚠️  Error checking client ${clientData.clientId}: ${error}`);
    }
  }

  console.log(`   ✅ Found ${clientsWithHistory.length} clients with sufficient history`);

  // 5. Re-trier par activité 2025 DESC
  clientsWithHistory.sort((a, b) => {
    if (b.orders2025 !== a.orders2025) {
      return b.orders2025 - a.orders2025;
    }
    return b.totalOrders - a.totalOrders;
  });

  // Retourner seulement les IDs
  const clientIds = clientsWithHistory.slice(0, count).map(c => c.clientId);

  console.log(`   Returning ${clientIds.length} client IDs\n`);

  return clientIds;
}
