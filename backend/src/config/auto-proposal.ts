import { OdooApiType } from "../types";
// TODO MOVE TO SHARED folder
// Configuration auto-proposal
export const autoProposalConfig = {
  // Odoo API type
  odooApiType: OdooApiType.XMLRPC,

  // Client inactivity detection (defaults calculés dynamiquement si null)
  inactivityDetection: {
    dateMin: null as string | null, // Si null: aujourd'hui - 30 jours
    dateMax: null as string | null, // Si null: aujourd'hui
  },

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

  // Product filtering configuration
  productFiltering: {
    // Catégories de produits à exclure de l'analyse (consignes, palettes, emballages, lavage, etc.)
    excludedCategoryIds: [
      // Consignes
      8, // Bring Back / Bouteilles - non facturés
      10, // BB-Lavage a façon - Casiers (consignés)
      12, // BB-Palettes (consignés)
      14, // Bring Back / Bocaux - non facturés
      17, // Bring Back / Clé en main - Consignes
      19, // Bring Back / Clé en main - casiers
      20, // Bring Back / Casiers - non facturés
      25, // FoodPrint / Consignes FP (parent)
      40, // FoodPrint / Consignes FP / Casier
      46, // FoodPrint / Consignes FP / Bocaux-Bouteilles
      287, // CMB / EMBALLAGE / CONSIGNE
      582, // FoodPrint / Consignes FP / Autres consignes
      // Palettes
      294, // CMB / EMBALLAGE / PALETTE
      // Emballages
      24, // FoodPrint / Emballages
      29, // FoodPrint / Emballages / Etiquette
      30, // FoodPrint / Emballages / Couvercle
      249, // CMB / EMBALLAGE / CARTON
      252, // CMB / EMBALLAGE / ETIQUETTE
      253, // CMB / EMBALLAGE / FILM
      262, // CMB / EMBALLAGE / METAL COUVERCLE
      264, // CMB / EMBALLAGE / PLASTIQUE COUVERCLE
      265, // CMB / EMBALLAGE / PLASTIQUE POT
      276, // CMB / EMBALLAGE / VERRE
      291, // CMB / EMBALLAGE
      538, // CMB / EMBALLAGE / TRIPACK
      556, // CMB / BW EMBALLAGE ET REMPLISSAGE
      557, // CMB / EMBALLAGE / NETTOYAGE
      583, // FoodPrint / Emballages
      585, // FoodPrint / Emballages / Emballages sales
      586, // FoodPrint / Emballages / Emballages pour production
      587, // FoodPrint / Emballages / Autres emballages
      // Lavage à façon
      7, // BB-Lavage à façon - Bouteilles
      13, // BB-Lavage à façon - bocaux
      15, // Bring Back / Clé en main - Bouteilles
      16, // Bring Back / Clé en main - bocaux
      18, // Prestation de lavage
      // Fermetures / Bouchons
      50, // Bring Back / Fermetures bocaux
      51, // Bring Back / Fermetures bocaux
      52, // Bring Back / Clé en main - Fermetures
      // Vaisselle
      547, // FoodPrint / La Vache / Vaisselle
      577, // COWATCH / VAISSELLE
      // Transport
      21, // Bring back / Transports
      289, // CMB / TRANSPORT
      551, // FoodPrint / Transport
      580, // COWATCH / TRANSPORT
      // Consommables / Frais généraux
      11, // Bring Back / Consommables
      26, // FoodPrint / Frais généraux
      284, // CMB / CONSOMMABLES VETEMENTS
      285, // CMB / CONSOMMABLES PRODUITS ENTRETIEN
      286, // CMB / CONSOMMABLES AUTRES FRAIS PERSONNEL
      288, // CMB / COMMISSIONS
      295, // CMB / FRAIS DE MANUTENTION
      555, // CMB / REMISE RABAIS RISTOURNE
      560, // CMB / CONSULTANCE
      // Stockage / Services
      53, // Stockage
      554, // manuta
      697, // froid
    ],
  },

  // Workflow configuration
  workflow: {
    generateReports: true, // Si true, génère les rapports markdown pour tous les clients avec risk. Si false, skip tous les rapports.
    forceReanalysis: false, // Si true, force la réanalyse de tous les clients inactifs, même ceux ayant déjà des devis auto-proposal (tag 82). Par défaut false pour éviter le spam.
  },

  // Testing configuration (to update in production)
  testing: {
    defaultClientId: 3, // Arthur Schwaiger (demo client)
    includeDraftOrders: false, // Include draft orders in analysis
  },
};
