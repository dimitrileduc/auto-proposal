import { OdooApiType } from "../types";

// Configuration auto-proposal
export const autoProposalConfig = {
  // Odoo API type
  odooApiType: OdooApiType.XMLRPC,

  // Client inactivity detection
  inactivityDaysThreshold: 30,

  // Stock replenishment parameters
  targetCoverage: 14,
  leadTime: 5,
  analysisWindowDays: 365,
  minRequiredHistoryDaysForProduct: 30,  // Minimum product history for reliable consumption calculation

  // Testing configuration (to update in production)
  testing: {
    defaultClientId: 3,          // Arthur Schwaiger (demo client)
    includeDraftOrders: true,    // Include draft orders in analysis
  }
};