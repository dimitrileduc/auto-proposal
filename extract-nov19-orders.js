#!/usr/bin/env node

/**
 * Extrait les commandes exactes du rapport du 19/11
 * pour pouvoir les retester avec le système actuel
 */

const fs = require('fs');
const path = require('path');

// Lire le rapport agrégé du 19/11
const reportPath = path.join(__dirname, 'backend/reports-output-20/11/backtest-aggregate-2025-11-19.json');

try {
  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

  // Extraire clientId et orderName pour chaque résultat
  const orders = {};

  data.individualResults.forEach(result => {
    if (result.success && result.orderName) {
      orders[result.clientId] = result.orderName;
    }
  });

  console.log(`📊 Extraction des commandes du 19/11:`);
  console.log(`   Nombre de clients: ${Object.keys(orders).length}`);
  console.log('');

  // Créer le payload pour le nouveau test
  const testPayload = {
    specificOrders: orders,
    daysBeforePrediction: 0,  // Même config que le 19/11
    config: data.config
  };

  // Sauvegarder dans un fichier
  const outputPath = path.join(__dirname, 'test-nov19-orders.json');
  fs.writeFileSync(outputPath, JSON.stringify(testPayload, null, 2));

  console.log(`✅ Payload sauvegardé dans: test-nov19-orders.json`);
  console.log('');
  console.log('📋 Exemples de commandes extraites:');

  // Afficher quelques exemples
  const examples = Object.entries(orders).slice(0, 5);
  examples.forEach(([clientId, orderName]) => {
    console.log(`   Client ${clientId}: ${orderName}`);
  });

  console.log('');
  console.log('🚀 Pour tester avec ces commandes:');
  console.log('   curl -X POST http://localhost:3001/api/trigger/backtest-specific \\');
  console.log('     -H "Content-Type: application/json" \\');
  console.log(`     -d @test-nov19-orders.json`);

} catch (error) {
  console.error('❌ Erreur:', error.message);
  process.exit(1);
}