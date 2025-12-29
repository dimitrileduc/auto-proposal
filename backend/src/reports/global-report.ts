/**
 * Génération de rapport global pour tous les clients traités
 *
 * Format inspiré de test-data/GLOBAL-REPORT.md :
 * - Stats globales (clients inactifs, avec historique, avec risque, etc.)
 * - Liste des exemples détaillés avec liens
 * - Tableau simple de tous les clients
 */
import type { ClientReportData, GlobalWorkflowStatistics } from "./types";
import {
  title,
  separator,
  table,
} from "./formatters";

export interface GlobalReportData {
  executionDate: string;
  totalExecutionTime: number;
  clients: ClientReportData[];
  statistics: GlobalWorkflowStatistics;
  config: {
    replenishmentThreshold: number;
    analysisWindowDays: number;
    moqMinimum: number;
  };
}

/**
 * Génère le rapport markdown global pour tous les clients
 */
export function generateGlobalReport(data: GlobalReportData): string {
  const sections: string[] = [];

  // En-tête avec configs
  sections.push(title("📊 Rapport Global Auto-Proposal", 1));
  sections.push("");
  const date = new Date(data.executionDate);
  const durationMinutes = Math.floor(data.totalExecutionTime / 60000);
  const durationSeconds = Math.floor((data.totalExecutionTime % 60000) / 1000);
  const durationStr = durationMinutes > 0 ? `${durationMinutes}m ${durationSeconds}s` : `${durationSeconds}s`;

  sections.push(`**📅 Date d'exécution:** ${date.toLocaleDateString("fr-FR")} ${date.toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })}`);
  sections.push(`**👥 Clients traités:** ${data.clients.length}`);
  sections.push(`**⏱️ Durée totale:** ${durationStr}`);
  sections.push(`**💰 MOQ configuré:** ${data.config.moqMinimum.toFixed(2)}€`);
  sections.push(`**📊 Seuil réappro:** ${data.config.replenishmentThreshold}j`);
  sections.push("");
  sections.push(separator());

  // Statistiques globales
  sections.push(generateGlobalStatsTable(data));
  sections.push(separator());

  // Liste des exemples détaillés
  sections.push(generateDetailedExamplesList(data));
  sections.push(separator());

  // Tableau de tous les clients avec comparaison phases + lien rapport
  sections.push(generateAllClientsTable(data));

  return sections.join("\n");
}

/**
 * Statistiques globales sous forme de tableau
 */
function generateGlobalStatsTable(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title("📈 Statistiques Globales", 2));
  sections.push("");

  const stats = data.statistics;
  const percentWithHistory = ((stats.clientsWithOrderHistory / stats.totalInactiveClients) * 100).toFixed(1);
  const percentWithRisk = ((stats.clientsWithRisk / stats.clientsWithOrderHistory) * 100).toFixed(1);
  const avgProductsPerClient = (stats.totalProducts / stats.clientsWithRisk).toFixed(1);

  const headers = ["Métrique", "Valeur"];
  const rows = [
    ["👥 **Clients inactifs** (30j+)", `**${stats.totalInactiveClients}**`],
    ["🔍 **Échantillon analysé**", `**${stats.clientsAnalyzed}** clients`],
    ["📋 **Clients avec historique de commande** (270j)", `**${stats.clientsWithOrderHistory}** / ${stats.totalInactiveClients} (${percentWithHistory}%)`],
    ["✅ **Clients avec stock OK**", `**${stats.clientsWithoutRisk}** (pas de risque)`],
    ["⚠️ **Clients avec risque de rupture**", `**${stats.clientsWithRisk}** / ${stats.clientsWithOrderHistory} (${percentWithRisk}%)`],
    ["📦 **Total produits à commander**", `**${stats.totalProducts}**`],
    ["📊 **Moyenne produits/client avec risque**", `**${avgProductsPerClient}**`],
  ];

  sections.push(table(headers, rows));

  return sections.join("\n");
}

/**
 * Liste des exemples détaillés avec liens vers rapports clients
 */
function generateDetailedExamplesList(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title(`📋 Liste des ${data.clients.length} Exemples Détaillés`, 2));
  sections.push("");
  sections.push(`Les rapports détaillés ci-dessous sont les ${data.clients.length} clients traités avec workflow complet.`);
  sections.push("");

  data.clients.forEach((client, index) => {
    sections.push(title(`${index + 1}. ${client.client.name}`, 3));
    sections.push("");
    sections.push(`- **ID:** ${client.client.id}`);
    sections.push(`- **Email:** ${client.client.email || "N/A"}`);
    sections.push(`- **Produits à commander:** ${client.summary.productsCount}`);
    const fileName = `client-${client.client.id}-${client.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
    sections.push(`- **📄 Rapport détaillé:** [${fileName}](./${fileName})`);
    sections.push("");
  });

  return sections.join("\n");
}

/**
 * Tableau comparatif RAW → AJUSTÉ → ODOO pour tous les clients avec lien rapport
 */
function generateAllClientsTable(data: GlobalReportData): string {
  const sections: string[] = [];

  sections.push(title("📊 Tous les Clients avec Risque de Rupture", 2));
  sections.push("");

  const headers = ["Client", "ID", "Produits", "RAW (€)", "AJUSTÉ (€)", "ODOO HT (€)", "Rapport"];

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

