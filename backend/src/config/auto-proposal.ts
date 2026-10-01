/**
 * Auto-Proposal System Configuration
 *
 * Central configuration for the automated order proposal system.
 * Controls client detection, stock analysis, pricing, and the "Suggestion commande" activity.
 *
 * @module config/auto-proposal
 */
import { OdooApiType } from "../types";

export const autoProposalConfig = {
  /** Odoo API protocol for backend communication */
  odooApiType: OdooApiType.XMLRPC,

  /** Default company ID for multi-company filtering (FOODPRINT SRL = 3) */
  defaultCompanyId: 3,

  /**
   * Client inactivity detection settings
   * Used to identify clients who haven't ordered recently
   */
  inactivityDetection: {
    /** Analysis start date (null = today - 30 days) */
    dateMin: null as string | null,
    /** Analysis end date (null = today) */
    dateMax: null as string | null,
    /** Partner tag ID to permanently exclude clients from analysis */
    excludedPartnerTagId: 196,
    /**
     * Sale order tag ID of the former auto-generated quotes.
     * Orders with this tag are ignored when detecting recent activity, unless forceReanalysis.
     */
    autoProposalOrderTagId: 82,
  },

  /** "Suggestion commande" activity created in Odoo for each eligible inactive client */
  activity: {
    /**
     * mail.activity.type id of "Suggestion commande" (module moutarderie_suggestion_commande).
     * Overridden by ODOO_SUGGESTION_ACTIVITY_TYPE_ID (local, staging).
     * 0 = production value not read yet: the run-start check (V1) then aborts the run.
     */
    suggestionActivityTypeId: Number(process.env.ODOO_SUGGESTION_ACTIVITY_TYPE_ID) || 0,
    /** Minimum calendar days between two suggestions for the same client */
    followUpDelayDays: 21,
    /** Activity summary prefix, followed by the client name */
    summaryPrefix: "Suggestion commande",
    /** Name prefix of the opportunity created when the client has no open one */
    leadNamePrefix: "Suggestion commande",
    /** Sentence introducing the usual products list (to be validated by the client) */
    introUsual: "Produits que ce client commande régulièrement et qu'il devrait bientôt recommander :",
    /** Sentence introducing the optional products list (to be validated by the client) */
    introOptional: "Produits commandés plus rarement par ce client, à lui proposer en complément :",
  },

  /** Days of stock coverage threshold (25 days coverage + 5 days lead time) */
  replenishmentThreshold: 30,

  /** Pricing and minimum order configuration */
  pricing: {
    /** Minimum order quantity in euros */
    minimumOrderAmount: 300,
  },

  /** Product category filtering for stock analysis */
  productFiltering: {
    /**
     * Product category IDs excluded from analysis
     * Includes: deposits, pallets, packaging, washing services, transport, consumables
     */
    excludedCategoryIds: [
      // Deposits (returnable containers)
      8, 10, 12, 14, 17, 19, 20, 25, 40, 46, 287, 582,
      // Pallets
      294,
      // Packaging materials
      24, 29, 30, 249, 252, 253, 262, 264, 265, 276, 291, 538, 556, 557, 583, 585, 586, 587,
      // Washing services
      7, 13, 15, 16, 18,
      // Closures / Caps
      50, 51, 52,
      // Tableware
      547, 577,
      // Transport
      21, 289, 551, 580,
      // Consumables / General expenses
      11, 26, 284, 285, 286, 288, 295, 555, 560,
      // Storage / Services
      53, 554, 697,
    ],
  },

  /** Workflow execution options */
  workflow: {
    /** Generate markdown reports for clients with stock risk */
    generateReports: true,
    /** Force reanalysis of clients with existing auto-proposals */
    forceReanalysis: false,
  },

  /** Development and testing settings */
  testing: {
    /** Default client ID for testing */
    defaultClientId: 3,
    /** Include draft orders in stock analysis */
    includeDraftOrders: false,
  },
};
