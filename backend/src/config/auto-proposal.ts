import { OdooApiType } from "../types";
// TODO MOVE TO SHARED folder
// Configuration auto-proposal
export const autoProposalConfig = {
  // Odoo API type
  odooApiType: OdooApiType.XMLRPC,

  // Client inactivity detection
  inactivityDaysThreshold: 30,

  // Stock replenishment parameters
  targetCoverage: 14,
  leadTime: 5,
  analysisWindowDays: 180,

  // Quantity calculation strategy
  quantityStrategy: {
    maxRecentOrderLines: 5, // Limiter l'analyse aux 5 lignes de commande les plus récentes
    minOrdersForMediumConfidence: 2, // Seuil pour confiance Medium
    minOrdersForHighConfidence: 5, // Seuil pour confiance High
  },

  // Pricing & MOQ configuration
  pricing: {
    minimumOrderAmount: 300, // MOQ global en euros
  },

  // Quote generation configuration
  quoteGeneration: {
    autoProposalTagId: 82, // Tag "Auto-proposal" créé dans Odoo (crm.tag)
    noteTemplate: "🤖 Proposition automatique générée par Auto-Proposal System",
  },

  // Workflow configuration
  workflow: {
    maxClientsForProposalGeneration: 50, // Limite de clients pour Phase 2.5 (Proposal) + Phase 3 (Quote). Phase 1 (Stock Analysis) est faite pour TOUS les clients inactifs.
    excludeAutoProposalQuotes: true, // Si true, exclut les commandes avec tag auto-proposal (tag 82) lors de la détection d'inactivité pour éviter le spam
  },

  // Testing configuration (to update in production)
  testing: {
    defaultClientId: 3, // Arthur Schwaiger (demo client)
    includeDraftOrders: false, // Include draft orders in analysis
  },
};
