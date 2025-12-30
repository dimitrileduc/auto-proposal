/**
 * Generates global workflow report for all processed clients
 *
 * Report Structure:
 * - Global statistics (inactive clients, with history, with risk, etc.)
 * - Detailed examples list with report links
 * - Summary table of all at-risk clients
 *
 * @module reports/global-report
 */

import type { ClientReportData, GlobalWorkflowStatistics } from "./types";
import {
  title,
  separator,
  table,
} from "./formatters";

/** Data for generating global workflow report */
export interface GlobalReportData {
  /** Report generation timestamp */
  executionDate: string;
  /** Total workflow execution time in milliseconds */
  totalExecutionTime: number;
  /** Client report data for all clients with risk */
  clients: ClientReportData[];
  /** Aggregated workflow statistics */
  statistics: GlobalWorkflowStatistics;
  /** Workflow configuration */
  config: {
    /** Replenishment threshold in days */
    replenishmentThreshold: number;
    /** Minimum order quantity in currency */
    moqMinimum: number;
  };
}

/**
 * Generates markdown global report for all clients
 *
 * Creates executive summary with statistics, detailed client list, and
 * comparison table of all processed clients.
 *
 * @param data - Report data combining statistics and client results
 * @returns Formatted markdown report
 */
export function generateGlobalReport(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title("📊 Auto-Proposal Global Report", 1));
  sections.push("");
  const date = new Date(data.executionDate);
  const durationMinutes = Math.floor(data.totalExecutionTime / 60000);
  const durationSeconds = Math.floor((data.totalExecutionTime % 60000) / 1000);
  const durationStr = durationMinutes > 0 ? `${durationMinutes}m ${durationSeconds}s` : `${durationSeconds}s`;

  sections.push(`**📅 Execution Date:** ${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })}`);
  sections.push(`**👥 Clients Processed:** ${data.clients.length}`);
  sections.push(`**⏱️ Total Duration:** ${durationStr}`);
  sections.push(`**💰 MOQ Configured:** ${data.config.moqMinimum.toFixed(2)}€`);
  sections.push(`**📊 Replenishment Threshold:** ${data.config.replenishmentThreshold} days`);
  sections.push("");
  sections.push(separator());

  sections.push(generateGlobalStatsTable(data));
  sections.push(separator());

  sections.push(generateDetailedExamplesList(data));
  sections.push(separator());

  sections.push(generateAllClientsTable(data));

  return sections.join("\n");
}

/**
 * Generates global statistics in table format
 *
 * @param data - Report data with statistics
 * @returns Formatted statistics table
 */
function generateGlobalStatsTable(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title("📈 Global Statistics", 2));
  sections.push("");

  const stats = data.statistics;
  const percentWithHistory = ((stats.clientsWithOrderHistory / stats.totalInactiveClients) * 100).toFixed(1);
  const percentWithRisk = ((stats.clientsWithRisk / stats.clientsWithOrderHistory) * 100).toFixed(1);
  const avgProductsPerClient = (stats.totalProducts / stats.clientsWithRisk).toFixed(1);

  const headers = ["Metric", "Value"];
  const rows = [
    ["👥 **Inactive Clients** (30+ days)", `**${stats.totalInactiveClients}**`],
    ["🔍 **Sample Analyzed**", `**${stats.clientsAnalyzed}** clients`],
    ["📋 **Clients with Order History** (270 days)", `**${stats.clientsWithOrderHistory}** / ${stats.totalInactiveClients} (${percentWithHistory}%)`],
    ["✅ **Clients with Stock OK**", `**${stats.clientsWithoutRisk}** (no risk)`],
    ["⚠️ **Clients with Replenishment Risk**", `**${stats.clientsWithRisk}** / ${stats.clientsWithOrderHistory} (${percentWithRisk}%)`],
    ["📦 **Total Products to Order**", `**${stats.totalProducts}**`],
    ["📊 **Average Products/At-Risk Client**", `**${avgProductsPerClient}**`],
  ];

  sections.push(table(headers, rows));

  return sections.join("\n");
}

/**
 * Generates detailed examples list with report links
 *
 * @param data - Report data with client list
 * @returns Formatted client examples list
 */
function generateDetailedExamplesList(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title(`📋 List of ${data.clients.length} Detailed Examples`, 2));
  sections.push("");
  sections.push(`The detailed reports below are the ${data.clients.length} clients processed with complete workflow.`);
  sections.push("");

  data.clients.forEach((client, index) => {
    sections.push(title(`${index + 1}. ${client.client.name}`, 3));
    sections.push("");
    sections.push(`- **ID:** ${client.client.id}`);
    sections.push(`- **Email:** ${client.client.email || "N/A"}`);
    sections.push(`- **Products to Order:** ${client.summary.productsCount}`);
    const fileName = `client-${client.client.id}-${client.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
    sections.push(`- **📄 Detailed Report:** [${fileName}](./${fileName})`);
    sections.push("");
  });

  return sections.join("\n");
}

/**
 * Generates comparison table of all at-risk clients
 *
 * Shows progression: RAW → ADJUSTED → ODOO with report links
 *
 * @param data - Report data with client details
 * @returns Formatted clients comparison table
 */
function generateAllClientsTable(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title("📊 All Clients with Replenishment Risk", 2));
  sections.push("");

  const headers = ["Client", "ID", "Products", "RAW (€)", "ADJUSTED (€)", "ODOO excl. tax (€)", "Report"];

  const rows = data.clients.map(client => {
    const rawAmount = client.summary.initialAmount.toFixed(2) + "€";
    const adjustedAmount = client.summary.finalAmount.toFixed(2) + "€";
    const odooAmount = client.phases.quote
      ? client.phases.quote.amount_total_ht.toFixed(2) + "€"
      : "-";
    const fileName = `client-${client.client.id}-${client.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
    const reportLink = `[📄](${fileName})`;

    return [
      client.client.name,
      client.client.id.toString(),
      client.summary.productsCount.toString(),
      rawAmount,
      adjustedAmount,
      odooAmount,
      reportLink,
    ];
  });

  sections.push(table(headers, rows));

  return sections.join("\n");
}

