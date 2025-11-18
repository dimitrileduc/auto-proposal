/**
 * Analyse des intervalles réels pour produits LOW (1 commande dans fenêtre 120j)
 *
 * Objectif: Trouver le seuil optimal pour alerter sur les produits LOW
 * Question: Si un produit a 1 commande il y a X jours, combien de jours avant qu'il soit recommandé ?
 */

const ANALYSIS_WINDOW = 120; // Fenêtre d'analyse en jours
const REFERENCE_DATE = new Date('2025-10-14'); // Date de cutoff pour l'analyse

// Simuler l'extraction depuis rapports backtest (à remplacer par vrai fetch Odoo)
// Structure: { clientId, productId, orders: [{date, qty}] }

console.log('🔍 Analyse des intervalles de recommande pour produits LOW (1 commande dans 120j)...\n');

// On va extraire depuis les rapports backtest existants
const fs = require('fs');
const path = require('path');

const reportsDir = '../backend/reports-output';
const allIntervals = [];
const productStats = [];

// Lire tous les rapports backtest
const files = fs.readdirSync(reportsDir)
  .filter(f => f.match(/backtest-client-\d+-S\d+\.json$/));

console.log(`📁 ${files.length} rapports trouvés\n`);

let clientsAnalyzed = 0;
let productsLowFound = 0;

// TODO: Remplacer par vraie logique Odoo MCP
// Pour l'instant, on simule en disant qu'on a besoin de:
// 1. Tous les clients actifs
// 2. Pour chaque client, tous les produits commandés
// 3. Pour chaque produit, toutes les dates de commande
// 4. Filtrer ceux avec exactement 1 commande dans 120j avant reference_date
// 5. Regarder quand est la prochaine commande après reference_date

console.log('⚠️  ATTENTION: Ce script nécessite une vraie implémentation avec Odoo MCP');
console.log('⚠️  Il faut requêter pour chaque client:');
console.log('   1. sale.order.line groupé par product_id');
console.log('   2. Filtrer les produits avec 1 seule ligne dans [reference_date - 120j, reference_date]');
console.log('   3. Vérifier si ce produit a été recommandé après reference_date');
console.log('   4. Calculer l\'intervalle entre la commande unique et la recommande\n');

console.log('💡 Pour faire ça avec Odoo MCP sur 800 clients:');
console.log('   - Requête 1: Liste des 800 clients actifs');
console.log('   - Pour chaque client (batch de 10):');
console.log('     * Requête: sale.order.line du client sur [ref_date - 240j, ref_date + 120j]');
console.log('     * Analyser en JS local les patterns 1-commande');
console.log('   - Temps estimé: ~10-15 min pour 800 clients\n');

// Exemple de structure de données attendue
const exampleData = {
  clientId: 3547,
  productId: 1234,
  ordersBeforeCutoff: [
    { date: '2025-09-14', qty: 200 } // 1 seule commande dans les 120j avant cutoff
  ],
  ordersAfterCutoff: [
    { date: '2025-12-01', qty: 200 } // Recommandé 78j après la première commande
  ],
  intervalDays: 78
};

console.log('Exemple de données à extraire:');
console.log(JSON.stringify(exampleData, null, 2));
console.log('\n❌ Script arrêté - Nécessite implémentation Odoo MCP complète');
