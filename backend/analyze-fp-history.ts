/**
 * Analyse l'historique Odoo des False Positives pour déterminer
 * si le problème vient de la fenêtre 180j trop courte
 */

import { createOdooClient } from './src/infrastructure/odoo/odoo.service';
import { autoProposalConfig } from './src/config/auto-proposal';

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

// Client représentatif: Le bon Wagon Eupen (precision 33.3%, 18 FP)
const CLIENT_ID = 113;
const CUTOFF_DATE = '2025-10-07 00:00:00';
const WINDOW_START = '2025-04-10 00:00:00'; // 180j avant cutoff

// False Positives à analyser
const FP_PRODUCT_CODES = [
  'MF0056', 'MF0055', 'MF0032', 'MF0034', 'MF0035', 'MF0030',
  'MF0024', 'MF0060', 'NUT01', 'REB03', 'NOC02', 'CB005',
  'CB006', 'MF0050', 'REB04', 'NUT05', 'MF0059', 'MF0052'
];

async function analyzeProductHistory() {
  console.log('🔍 ANALYSE HISTORIQUE FALSE POSITIVES');
  console.log(`   Client: ${CLIENT_ID} (Le bon Wagon Eupen)`);
  console.log(`   Fenêtre actuelle: ${WINDOW_START} → ${CUTOFF_DATE} (180j)`);
  console.log(`   FP à analyser: ${FP_PRODUCT_CODES.length}\n`);

  try {
    // 1. Récupérer les IDs des produits
    console.log('📦 Recherche des produits dans Odoo...');
    const products = await odooClient.execute(
      'product.product',
      'search_read',
      [[['default_code', 'in', FP_PRODUCT_CODES]]],
      { fields: ['id', 'default_code', 'name'] }
    );

    console.log(`   ✅ Trouvé ${products.length}/${FP_PRODUCT_CODES.length} produits\n`);

    if (products.length === 0) {
      console.log('❌ Aucun produit trouvé');
      return;
    }

    const productMap = new Map(products.map((p: any) => [p.id, p]));
    const productIds = products.map((p: any) => p.id);

    // 2. Chercher commandes AVANT la fenêtre 180j
    console.log(`🔎 Recherche commandes AVANT ${WINDOW_START}...`);
    const orderLinesBeforeWindow = await odooClient.execute(
      'sale.order.line',
      'search_read',
      [[
        ['order_partner_id', '=', CLIENT_ID],
        ['product_id', 'in', productIds],
        ['order_id.date_order', '<', WINDOW_START],
        ['order_id.state', 'in', ['sale', 'done']],
      ]],
      {
        fields: ['product_id', 'product_uom_qty', 'order_id'],
        order: 'order_id desc',
        limit: 200,
      }
    );

    console.log(`   Trouvé ${orderLinesBeforeWindow.length} lignes de commande AVANT fenêtre\n`);

    // 3. Chercher commandes DANS la fenêtre 180j (pour comparaison)
    console.log(`🔎 Recherche commandes DANS fenêtre 180j...`);
    const orderLinesInWindow = await odooClient.execute(
      'sale.order.line',
      'search_read',
      [[
        ['order_partner_id', '=', CLIENT_ID],
        ['product_id', 'in', productIds],
        ['order_id.date_order', '>=', WINDOW_START],
        ['order_id.date_order', '<', CUTOFF_DATE],
        ['order_id.state', 'in', ['sale', 'done']],
      ]],
      {
        fields: ['product_id', 'product_uom_qty', 'order_id'],
        order: 'order_id desc',
      }
    );

    console.log(`   Trouvé ${orderLinesInWindow.length} lignes de commande DANS fenêtre\n`);

    // 4. Récupérer les dates des commandes
    const allOrderIds = [
      ...orderLinesBeforeWindow.map((l: any) => l.order_id[0]),
      ...orderLinesInWindow.map((l: any) => l.order_id[0]),
    ];
    const uniqueOrderIds = [...new Set(allOrderIds)];

    const orders = await odooClient.execute(
      'sale.order',
      'read',
      [uniqueOrderIds],
      { fields: ['id', 'name', 'date_order'] }
    );

    const orderMap = new Map(orders.map((o: any) => [o.id, o]));

    // 5. Grouper par produit
    const productStats = new Map<string, {
      commandedBeforeWindow: boolean;
      commandedInWindow: boolean;
      lastOrderBeforeWindow?: { date: string; qty: number };
      ordersInWindow: number;
    }>();

    FP_PRODUCT_CODES.forEach(code => {
      productStats.set(code, {
        commandedBeforeWindow: false,
        commandedInWindow: false,
        ordersInWindow: 0,
      });
    });

    // Analyser commandes AVANT fenêtre
    orderLinesBeforeWindow.forEach((line: any) => {
      const product = productMap.get(line.product_id[0]);
      if (!product) return;

      const stats = productStats.get(product.default_code);
      if (!stats) return;

      stats.commandedBeforeWindow = true;
      const order = orderMap.get(line.order_id[0]);
      if (!stats.lastOrderBeforeWindow || order.date_order > stats.lastOrderBeforeWindow.date) {
        stats.lastOrderBeforeWindow = { date: order.date_order, qty: line.product_uom_qty };
      }
    });

    // Analyser commandes DANS fenêtre
    orderLinesInWindow.forEach((line: any) => {
      const product = productMap.get(line.product_id[0]);
      if (!product) return;

      const stats = productStats.get(product.default_code);
      if (!stats) return;

      stats.commandedInWindow = true;
      stats.ordersInWindow++;
    });

    // 6. Analyser les résultats
    console.log('📊 RÉSULTATS:\n');

    let fpCommandedBeforeWindow = 0;
    let fpCommandedInWindow = 0;
    let fpNeverCommanded = 0;

    productStats.forEach((stats, code) => {
      if (stats.commandedBeforeWindow) fpCommandedBeforeWindow++;
      if (stats.commandedInWindow) fpCommandedInWindow++;
      if (!stats.commandedBeforeWindow && !stats.commandedInWindow) fpNeverCommanded++;
    });

    console.log(`   Total FP analysés: ${FP_PRODUCT_CODES.length}`);
    console.log(`   FP commandés AVANT fenêtre 180j: ${fpCommandedBeforeWindow} (${(fpCommandedBeforeWindow/FP_PRODUCT_CODES.length*100).toFixed(0)}%)`);
    console.log(`   FP commandés DANS fenêtre 180j: ${fpCommandedInWindow} (${(fpCommandedInWindow/FP_PRODUCT_CODES.length*100).toFixed(0)}%)`);
    console.log(`   FP jamais commandés: ${fpNeverCommanded} (${(fpNeverCommanded/FP_PRODUCT_CODES.length*100).toFixed(0)}%)\n`);

    if (fpCommandedBeforeWindow > 0) {
      console.log('🚨 PROBLÈME DÉTECTÉ: Fenêtre 180j potentiellement trop courte!\n');
      console.log('   Produits FP commandés AVANT fenêtre (historique ancien):\n');

      productStats.forEach((stats, code) => {
        if (stats.commandedBeforeWindow) {
          const inWindow = stats.commandedInWindow ? `+ ${stats.ordersInWindow}x dans fenêtre` : 'jamais dans fenêtre';
          console.log(`   [${code}]: dernière commande ${stats.lastOrderBeforeWindow!.date} (${stats.lastOrderBeforeWindow!.qty}u) - ${inWindow}`);
        }
      });

      console.log(`\n💡 RECOMMANDATION: ${fpCommandedBeforeWindow} produits (${(fpCommandedBeforeWindow/FP_PRODUCT_CODES.length*100).toFixed(0)}%) auraient pu être évités avec fenêtre plus large`);
    } else {
      console.log('✅ FENÊTRE 180J OK: Les FP ne sont pas causés par une fenêtre trop courte');
      console.log(`   ${fpNeverCommanded} FP jamais commandés (vrais sur-prédictions)`);
      console.log(`   ${fpCommandedInWindow} FP commandés dans fenêtre (prédiction correcte mais client n'a pas commandé cette fois)`);
    }

  } catch (error) {
    console.error('❌ Erreur:', error);
    throw error;
  }
}

analyzeProductHistory()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
