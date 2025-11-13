/**
 * Vérifie si les False Positives ont été commandés hors fenêtre 180j
 * via requêtes Odoo directes
 */

import Odoo from 'odoo-xmlrpc';

const odoo = new Odoo({
  url: process.env.ODOO_URL || 'https://demo-food-autopilot.odoo.com',
  db: process.env.ODOO_DB || 'demo-food-autopilot',
  username: process.env.ODOO_USERNAME,
  password: process.env.ODOO_PASSWORD,
});

const clientId = 13621;
const cutoffDate = '2025-10-13';
const windowStart = '2025-04-16'; // 180j avant cutoff

// Échantillon de produits FP (codes internes Odoo)
const fpProductCodes = [
  'PF1951', 'PF1791', 'PF1473', 'PF1784', 'PF1601',
  'RF001', 'RF002', 'PF3400', 'JF005', 'JF011'
];

console.log(`🔍 Vérification historique client ${clientId}`);
console.log(`   Fenêtre actuelle: ${windowStart} → ${cutoffDate} (180j)`);
console.log(`   Recherche: Commandes AVANT ${windowStart}\n`);

async function connect() {
  return new Promise((resolve, reject) => {
    odoo.connect((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function searchProducts(codes) {
  return new Promise((resolve, reject) => {
    odoo.execute_kw(
      'product.product',
      'search_read',
      [[['default_code', 'in', codes]]],
      { fields: ['id', 'default_code', 'name'] },
      (err, products) => {
        if (err) reject(err);
        else resolve(products);
      }
    );
  });
}

async function getOrderLines(partnerId, productIds, beforeDate) {
  return new Promise((resolve, reject) => {
    odoo.execute_kw(
      'sale.order.line',
      'search_read',
      [[
        ['order_partner_id', '=', partnerId],
        ['product_id', 'in', productIds],
        ['order_id.date_order', '<', beforeDate],
        ['order_id.state', 'in', ['sale', 'done']],
      ]],
      {
        fields: ['product_id', 'product_uom_qty', 'order_id'],
        order: 'order_id desc',
        limit: 100,
      },
      (err, lines) => {
        if (err) reject(err);
        else resolve(lines);
      }
    );
  });
}

async function getOrderDates(orderIds) {
  return new Promise((resolve, reject) => {
    odoo.execute_kw(
      'sale.order',
      'read',
      [orderIds],
      { fields: ['id', 'name', 'date_order'] },
      (err, orders) => {
        if (err) reject(err);
        else resolve(orders);
      }
    );
  });
}

async function analyze() {
  try {
    await connect();
    console.log('✅ Connecté à Odoo\n');

    // 1. Récupérer les IDs produits
    const products = await searchProducts(fpProductCodes);
    console.log(`📦 Trouvé ${products.length}/${fpProductCodes.length} produits\n`);

    if (products.length === 0) {
      console.log('❌ Aucun produit trouvé');
      return;
    }

    const productMap = {};
    products.forEach(p => productMap[p.id] = p);
    const productIds = products.map(p => p.id);

    // 2. Chercher commandes AVANT la fenêtre 180j
    console.log(`🔎 Recherche commandes avant ${windowStart}...`);
    const orderLines = await getOrderLines(clientId, productIds, windowStart);

    console.log(`   Trouvé ${orderLines.length} lignes de commande hors fenêtre\n`);

    if (orderLines.length === 0) {
      console.log('✅ RÉSULTAT: Aucun FP commandé hors fenêtre → Fenêtre 180j est OK');
      console.log('   Les FP sont des vrais sur-prédictions (produits jamais/rarement commandés)');
      return;
    }

    // 3. Récupérer dates des commandes
    const uniqueOrderIds = [...new Set(orderLines.map(l => l.order_id[0]))];
    const orders = await getOrderDates(uniqueOrderIds);
    const orderMap = {};
    orders.forEach(o => orderMap[o.id] = o);

    // 4. Grouper par produit
    const productHistory = {};
    orderLines.forEach(line => {
      const prodId = line.product_id[0];
      const product = productMap[prodId];
      if (!product) return;

      if (!productHistory[product.default_code]) {
        productHistory[product.default_code] = [];
      }

      const order = orderMap[line.order_id[0]];
      productHistory[product.default_code].push({
        orderName: order.name,
        date: order.date_order,
        qty: line.product_uom_qty,
      });
    });

    // 5. Afficher résultats
    console.log('📊 RÉSULTATS:\n');

    let totalFPChecked = fpProductCodes.length;
    let fpCommandedOutsideWindow = Object.keys(productHistory).length;

    console.log(`   Total FP vérifiés: ${totalFPChecked}`);
    console.log(`   FP commandés hors fenêtre 180j: ${fpCommandedOutsideWindow} (${(fpCommandedOutsideWindow/totalFPChecked*100).toFixed(0)}%)\n`);

    if (fpCommandedOutsideWindow > 0) {
      console.log('🚨 PROBLÈME DÉTECTÉ: Fenêtre 180j trop courte!\n');
      console.log('   Détail des produits commandés hors fenêtre:\n');

      for (const [code, history] of Object.entries(productHistory)) {
        console.log(`   [${code}]:`);
        history.forEach(h => {
          console.log(`      - ${h.date}: ${h.qty}u (${h.orderName})`);
        });
        console.log('');
      }

      console.log(`\n💡 RECOMMANDATION: Tester avec fenêtre 365j ou dynamique`);
    }

  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

analyze();
