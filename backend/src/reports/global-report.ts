/**
 * Generates global workflow report for all processed clients
 *
 * Report Structure (French, read by the client):
 * - Header and global statistics
 * - Mode (test or real)
 * - Activities created, opportunities created, skipped clients (with reason), errors
 * - Detailed examples and table of clients with suggested products
 * - Compact list of clients without suggested product, last
 *
 * @module reports/global-report
 */

import type { ClientProposalResult, ClientReportData, GlobalWorkflowStatistics } from "./types";
import { outcomeOf } from "./statistics";
import {
  title,
  separator,
  table,
} from "./formatters";

/** Client with an activity created (or that would have been created in test mode) */
export interface CreatedActivityRow {
  clientId: number;
  clientName: string;
  salespersonName?: string;
  /** Absent in test mode when the opportunity would be created */
  leadId?: number;
  leadName: string;
  leadCreated: boolean;
  /** Absent in test mode */
  activityId?: number;
}

/** Lists of the run report, one category per client (FR-015 to FR-017) */
export interface GlobalReportLists {
  created: CreatedActivityRow[];
  leadsCreated: Array<{ clientId: number; clientName: string; leadId?: number; leadName: string }>;
  /** Skipped clients, except "aucun produit suggéré" */
  skipped: Array<{ clientId: number; clientName: string; label: string }>;
  errors: Array<{ clientId: number; clientName: string; message: string; leadCreatedId?: number }>;
  /** Compact section, last */
  noProducts: Array<{ clientId: number; clientName: string }>;
}

/** Data for generating global workflow report */
export interface GlobalReportData extends GlobalReportLists {
  /** Report generation timestamp */
  executionDate: string;
  /** Total workflow execution time in milliseconds */
  totalExecutionTime: number;
  /** Client report data (clients that went through the AI) */
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
  /** test = nothing written in Odoo */
  mode: "test" | "real";
}

/**
 * Builds the report lists from all client results, skipped before the AI included
 *
 * @param results - Every analysed client
 * @returns One entry per client in created, skipped, errors or noProducts
 */
export function buildGlobalReportLists(results: ClientProposalResult[]): GlobalReportLists {
  const lists: GlobalReportLists = { created: [], leadsCreated: [], skipped: [], errors: [], noProducts: [] };

  for (const result of results) {
    const client = { clientId: result.clientId, clientName: result.clientName };
    const outcome = outcomeOf(result);

    switch (outcome.kind) {
      case "created":
      case "would_create":
        lists.created.push({
          ...client,
          salespersonName: outcome.salespersonName,
          leadId: outcome.leadId,
          leadName: outcome.leadName,
          leadCreated: outcome.leadCreated,
          activityId: outcome.kind === "created" ? outcome.activityId : undefined,
        });
        break;
      case "skipped":
        if (outcome.reason === "no_products") {
          lists.noProducts.push(client);
        } else {
          lists.skipped.push({ ...client, label: outcome.label });
        }
        break;
      case "error":
        lists.errors.push({ ...client, message: outcome.message, leadCreatedId: outcome.leadCreatedId });
        break;
    }
  }

  // Opportunities created (or that would be) are the activities carried by a new opportunity
  lists.leadsCreated = lists.created
    .filter((row) => row.leadCreated)
    .map((row) => ({
      clientId: row.clientId,
      clientName: row.clientName,
      leadId: row.leadId,
      leadName: row.leadName,
    }));

  return lists;
}

/**
 * Generates markdown global report for all clients
 *
 * @param data - Report data combining statistics, lists and client results
 * @returns Formatted markdown report
 */
export function generateGlobalReport(data: GlobalReportData): string {
  const sections: string[] = [];
  const clientsWithProducts = data.clients.filter(
    (client) => client.phases.proposalFinal.products.length > 0
  );

  sections.push(title("📊 Compte rendu Auto-Proposal", 1));
  sections.push("");
  const date = new Date(data.executionDate);
  const durationMinutes = Math.floor(data.totalExecutionTime / 60000);
  const durationSeconds = Math.floor((data.totalExecutionTime % 60000) / 1000);
  const durationStr = durationMinutes > 0 ? `${durationMinutes} min ${durationSeconds} s` : `${durationSeconds} s`;

  sections.push(`**📅 Date du lancement :** ${date.toLocaleDateString("fr-BE", { timeZone: "Europe/Paris" })} ${date.toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" })}`);
  sections.push(`**👥 Clients analysés :** ${data.statistics.clientsAnalyzed}`);
  sections.push(`**⏱️ Durée :** ${durationStr}`);
  sections.push(`**💰 Minimum de commande :** ${data.config.moqMinimum.toFixed(2)}€`);
  sections.push(`**📊 Seuil de réapprovisionnement :** ${data.config.replenishmentThreshold} jours`);
  sections.push("");
  sections.push(separator());

  sections.push(generateGlobalStatsTable(data));
  sections.push(separator());

  sections.push(`**Mode :** ${data.mode === "test" ? "TEST (aucune écriture Odoo)" : "RÉEL"}`);
  sections.push("");
  sections.push(generateCreatedSection(data));
  sections.push(generateLeadsCreatedSection(data));
  sections.push(generateSkippedSection(data));
  sections.push(generateErrorsSection(data));
  sections.push(separator());

  sections.push(generateDetailedExamplesList(clientsWithProducts));
  sections.push(separator());

  sections.push(generateAllClientsTable(clientsWithProducts));
  sections.push(separator());

  sections.push(generateNoProductsSection(data));

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

  sections.push(title("📈 Statistiques", 2));
  sections.push("");

  const stats = data.statistics;
  const testMode = data.mode === "test";

  const headers = ["Indicateur", "Valeur"];
  const rows = [
    ["👥 **Clients inactifs** (30 jours et plus)", `**${stats.totalInactiveClients}**`],
    ["🔍 **Clients analysés**", `**${stats.clientsAnalyzed}**`],
    ["📋 **Clients avec historique de commandes**", `**${stats.clientsWithOrderHistory}** / ${stats.totalInactiveClients} (${stats.percentWithHistory.toFixed(1)}%)`],
    ["✅ **Clients sans besoin de réapprovisionnement**", `**${stats.clientsWithoutRisk}**`],
    ["⚠️ **Clients avec produits suggérés**", `**${stats.clientsWithRisk}** / ${stats.clientsWithOrderHistory} (${stats.percentWithRisk.toFixed(1)}%)`],
    ["📦 **Produits suggérés**", `**${stats.totalProducts}**`],
    ["📊 **Produits par client avec suggestion**", `**${stats.averageProductsPerClient.toFixed(1)}**`],
    testMode
      ? ["🗓️ **Activités qui auraient été créées**", `**${stats.wouldCreate}**`]
      : ["🗓️ **Activités créées**", `**${stats.activitiesCreated}**`],
    testMode
      ? ["💼 **Opportunités qui auraient été créées**", `**${data.leadsCreated.length}**`]
      : ["💼 **Opportunités créées**", `**${stats.leadsCreated}**`],
    ["⏭️ **Clients écartés**", `**${stats.clientsSkipped}**`],
    ["❌ **Clients en erreur**", `**${stats.clientsFailed}**`],
  ];

  sections.push(table(headers, rows));

  return sections.join("\n");
}

function generateCreatedSection(data: GlobalReportData): string {
  const heading = data.mode === "test" ? "Activités qui auraient été créées" : "Activités créées";
  const rows = data.created.map((row) => [
    cell(row.clientName),
    cell(row.salespersonName ?? "—"),
    row.leadId !== undefined ? `${cell(row.leadName)} (${row.leadId})` : "à créer",
    row.leadCreated ? "oui" : "non",
    row.activityId !== undefined ? String(row.activityId) : "—",
  ]);

  return listSection(`${heading} (${data.created.length})`, ["Client", "Vendeur", "Opportunité", "Nouvelle ?", "Activité"], rows);
}

function generateLeadsCreatedSection(data: GlobalReportData): string {
  const heading = data.mode === "test" ? "Opportunités qui auraient été créées" : "Opportunités créées";
  const rows = data.leadsCreated.map((row) => [
    cell(row.clientName),
    row.leadId !== undefined ? `${cell(row.leadName)} (${row.leadId})` : cell(row.leadName),
  ]);

  return listSection(`${heading} (${data.leadsCreated.length})`, ["Client", "Opportunité (id)"], rows);
}

function generateSkippedSection(data: GlobalReportData): string {
  const rows = data.skipped.map((row) => [cell(row.clientName), cell(row.label)]);
  return listSection(`Clients écartés (${data.skipped.length})`, ["Client", "Raison"], rows);
}

function generateErrorsSection(data: GlobalReportData): string {
  const rows = data.errors.map((row) => [
    cell(row.clientName),
    cell(row.message),
    row.leadCreatedId !== undefined ? String(row.leadCreatedId) : "—",
  ]);

  return listSection(
    `Erreurs (${data.errors.length})`,
    ["Client", "Message", "Opportunité créée sans activité"],
    rows
  );
}

function generateNoProductsSection(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title(`Aucun produit suggéré (${data.noProducts.length})`, 2));
  sections.push("");
  sections.push(
    data.noProducts.length > 0
      ? data.noProducts.map((client) => client.clientName).join(", ")
      : "_Aucun client._"
  );
  sections.push("");

  return sections.join("\n");
}

function listSection(heading: string, headers: string[], rows: string[][]): string {
  const sections: string[] = [];

  sections.push(title(heading, 2));
  sections.push("");
  sections.push(rows.length > 0 ? table(headers, rows) : "_Aucun client._");
  sections.push("");

  return sections.join("\n");
}

/**
 * Generates detailed examples list with report links
 *
 * @param clients - Clients that went through the AI with at least one suggested product
 * @returns Formatted client examples list
 */
function generateDetailedExamplesList(clients: ClientReportData[]): string {
  const sections: string[] = [];

  sections.push(title(`📋 Exemples détaillés (${clients.length})`, 2));
  sections.push("");
  sections.push(`Rapports détaillés des ${clients.length} clients avec au moins un produit suggéré.`);
  sections.push("");

  clients.forEach((client, index) => {
    sections.push(title(`${index + 1}. ${client.client.name}`, 3));
    sections.push("");
    sections.push(`- **ID :** ${client.client.id}`);
    sections.push(`- **E-mail :** ${client.client.email || "N/A"}`);
    sections.push(`- **Produits suggérés :** ${client.summary.productsCount}`);
    const fileName = `client-${client.client.id}-${client.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
    sections.push(`- **📄 Rapport détaillé :** [${fileName}](./${fileName})`);
    sections.push("");
  });

  return sections.join("\n");
}

/**
 * Generates comparison table of clients with suggested products
 *
 * Shows progression: RAW → ADJUSTED with report links
 *
 * @param clients - Clients that went through the AI with at least one suggested product
 * @returns Formatted clients table
 */
function generateAllClientsTable(clients: ClientReportData[]): string {
  const sections: string[] = [];

  sections.push(title("📊 Clients avec produits suggérés", 2));
  sections.push("");

  const headers = ["Client", "ID", "Produits", "Brut (€)", "Ajusté (€)", "Rapport"];

  const rows = clients.map(client => {
    const rawAmount = client.summary.initialAmount.toFixed(2) + "€";
    const adjustedAmount = client.summary.finalAmount.toFixed(2) + "€";
    const fileName = `client-${client.client.id}-${client.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
    const reportLink = `[📄](${fileName})`;

    return [
      cell(client.client.name),
      client.client.id.toString(),
      client.summary.productsCount.toString(),
      rawAmount,
      adjustedAmount,
      reportLink,
    ];
  });

  sections.push(rows.length > 0 ? table(headers, rows) : "_Aucun client._");

  return sections.join("\n");
}

/** Escapes a markdown table cell */
function cell(text: string): string {
  return text.replace(/\|/g, "\\|").replace(/\n/g, " ");
}
