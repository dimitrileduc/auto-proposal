/**
 * Generates detailed client proposal report in markdown format
 *
 * Legacy report generator showing three phases:
 * 1. Phase 1: Stock Analysis (RAW predictions)
 * 2. Phase 2.5: Pricing + MOQ Adjustment (ADJUSTED amounts)
 * 3. Phase 3: Odoo Quote (QUOTE with actual Odoo prices)
 *
 * @deprecated Use generateClientReportMarkdown from client-report-md.ts instead
 * @module reports/client-report
 */

import type { ClientReportData } from "./types";
import {
  title,
  separator,
  table,
  formatAmount,
  formatDate,
  formatDuration,
  statsBlock,
  blockquote,
} from "./formatters";

/**
 * Generates complete markdown report for a client (legacy)
 *
 * @deprecated Use generateClientReportMarkdown from client-report-md.ts instead
 *
 * Creates detailed report with three phase sections showing workflow progression
 * from stock analysis through pricing to Odoo quote generation.
 *
 * @param data - Client report data with all phases
 * @returns Formatted markdown report
 */
export function generateClientReport(data: ClientReportData): string {
  const sections: string[] = [];

  // En-tête
  sections.push(title(`Rapport Auto-Proposal - ${data.client.name}`, 1));
  sections.push(generateMetadataSection(data));
  sections.push(separator());

  // Phase 1 - Stock Analysis (RAW)
  sections.push(generatePhase1Section(data));
  sections.push(separator());

  // Phase 2.5 - Pricing + MOQ (ADJUSTED)
  sections.push(generatePhase2Section(data));
  sections.push(separator());

  // Phase 3 - Devis Odoo (si créé)
  if (data.phases.quote) {
    sections.push(generatePhase3Section(data));
    sections.push(separator());

    // Comparaison Phase 2.5 vs Phase 3
    sections.push(generateComparisonSection(data));
  }

  return sections.join("\n");
}

/**
 * Generates Odoo quote section only (legacy)
 *
 * @deprecated Quote info now integrated in generateClientReportMarkdown
 *
 * Creates standalone quote report from client report data.
 *
 * @param data - Client report data
 * @returns Formatted quote markdown, or undefined if no quote generated
 */
export function generateQuoteReport(data: ClientReportData): string | undefined {
  if (!data.phases.quote) {
    return undefined;
  }

  const sections: string[] = [];

  sections.push(title(`Odoo Quote - ${data.client.name}`, 1));
  sections.push(statsBlock({
    "Date": formatDate(data.executionDate),
    "Client ID": data.client.id,
    "Email": data.client.email || "N/A",
  }));
  sections.push(separator());

  sections.push(generatePhase3Section(data));

  return sections.join("\n");
}

/**
 * Generates metadata section with client info and timing
 *
 * @param data - Client report data
 * @returns Formatted metadata block
 */
function generateMetadataSection(data: ClientReportData): string {
  return statsBlock({
    "Date": formatDate(data.executionDate),
    "Client ID": data.client.id,
    "Email": data.client.email || "N/A",
    "Duration": formatDuration(data.executionTime),
  });
}

/**
 * Generates Phase 1 section: Stock Analysis (RAW)
 *
 * @param data - Client report data
 * @returns Formatted Phase 1 section
 */
function generatePhase1Section(data: ClientReportData): string {
  const phase1 = data.phases.stockAnalysis;
  const sections: string[] = [];

  sections.push(title("PHASE 1 - STOCK ANALYSIS", 2));
  sections.push("");

  sections.push(`**At-Risk Products: ${phase1.products.length}**`);
  sections.push("");

  sections.push(title("Product Details", 3));
  sections.push("");

  phase1.products.forEach((product) => {
    sections.push(generateProductDropdown(product));
    sections.push("");
  });

  return sections.join("\n");
}

/**
 * Generates collapsible product details with order history
 *
 * @param product - Product data
 * @returns Formatted product details dropdown
 */
function generateProductDropdown(product: any): string {
  const sections: string[] = [];

  sections.push(`<details>`);
  sections.push(`<summary><strong>${product.product_name}</strong> (ID: ${product.product_id}) - ${product.quantity_to_order}u</summary>`);
  sections.push("");

  if (product.order_history && product.order_history.length > 0) {
    const headers = ["Date", "Order", "Qty", "Price"];
    const rows = product.order_history.map((order: any) => [
      order.date_order.split(" ")[0],
      order.order_name,
      order.quantity,
      formatAmount(order.price_unit),
    ]);

    sections.push(table(headers, rows));
    sections.push("");
  }

  sections.push("</details>");

  return sections.join("\n");
}

/**
 * Generates Phase 2.5 section: Pricing + MOQ Adjustment (ADJUSTED)
 *
 * @param data - Client report data
 * @returns Formatted Phase 2.5 section
 */
function generatePhase2Section(data: ClientReportData): string {
  const phase2 = data.phases.proposalFinal;
  const sections: string[] = [];

  sections.push(title("PHASE 2.5 - PRICING + MOQ", 2));
  sections.push("");

  sections.push(`Initial Amount: ${formatAmount(data.summary.initialAmount)}`);
  sections.push(`Required MOQ: ${formatAmount(data.config.moqMinimum)}`);

  if (data.summary.moqAdjusted) {
    sections.push(`Status: Adjustment Applied (+${formatAmount(data.summary.moqGap || 0)})`);
  } else {
    sections.push(`Status: OK`);
  }
  sections.push("");

  const headers = ["Product", "Qty", "Price", "Subtotal"];

  const rows = phase2.products.map((p) => [
    p.product_name.length > 40
      ? p.product_name.slice(0, 37) + "..."
      : p.product_name,
    p.quantity_to_order,
    formatAmount(p.current_price_unit),
    formatAmount(p.subtotal),
  ]);

  sections.push(table(headers, rows, ["left", "right", "right", "right"]));
  sections.push("");
  sections.push(`**Total: ${formatAmount(phase2.total_amount)}**`);

  return sections.join("\n");
}

/**
 * Generates Phase 3 section: Odoo Quote (QUOTE with actual prices)
 *
 * Separates core products from optional products
 *
 * @param data - Client report data
 * @returns Formatted Phase 3 section
 */
function generatePhase3Section(data: ClientReportData): string {
  const quote = data.phases.quote!;
  const sections: string[] = [];

  sections.push(title("PHASE 3 - ODOO QUOTE", 2));
  sections.push("");

  sections.push(`Quote: ${quote.quote_name} (ID: ${quote.quote_id})`);
  sections.push(`Status: ${quote.quote_state || "draft"}`);
  sections.push("");

  sections.push(title(`Core Products (${quote.order_lines.length})`, 3));
  sections.push("");

  const baseHeaders = ["Product", "Qty", "Price", "Description"];
  const baseRows = quote.order_lines.map((line) => [
    line.product_name.length > 35
      ? line.product_name.slice(0, 32) + "..."
      : line.product_name,
    line.quantity_ordered,
    formatAmount(line.price_unit),
    (line.description || "").length > 80
      ? (line.description || "").slice(0, 77) + "..."
      : (line.description || "-"),
  ]);

  sections.push(table(baseHeaders, baseRows, ["left", "right", "right", "left"]));
  sections.push("");

  if (quote.optional_products && quote.optional_products.length > 0) {
    sections.push(title(`Optional Products (${quote.optional_products.length})`, 3));
    sections.push("");

    const optRows = quote.optional_products.map((line) => [
      line.product_name.length > 35
        ? line.product_name.slice(0, 32) + "..."
        : line.product_name,
      line.quantity_ordered,
      formatAmount(line.price_unit),
      (line.description || "").length > 80
        ? (line.description || "").slice(0, 77) + "..."
        : (line.description || "-"),
    ]);

    sections.push(table(baseHeaders, optRows, ["left", "right", "right", "left"]));
    sections.push("");
  }

  sections.push(`**Total excl. tax: ${formatAmount(quote.amount_total_ht)}**`);
  sections.push(`**Total incl. tax: ${formatAmount(quote.amount_total_ttc)}**`);

  return sections.join("\n");
}

/**
 * Generates comparison section: Phase 2.5 vs Phase 3
 *
 * Shows the difference between adjusted proposal amount and Odoo quote total
 *
 * @param data - Client report data
 * @returns Formatted comparison section
 */
function generateComparisonSection(data: ClientReportData): string {
  const phase2Amount = data.summary.finalAmount;
  const phase3Amount = data.phases.quote!.amount_total_ht;
  const diff = phase3Amount - phase2Amount;
  const diffPercent = ((diff / phase2Amount) * 100).toFixed(1);

  const sections: string[] = [];

  sections.push(title("Phase 2.5 vs Phase 3 Comparison", 2));
  sections.push("");

  const headers = ["Phase 2.5", "Phase 3", "Difference"];
  const rows = [
    [
      formatAmount(phase2Amount),
      formatAmount(phase3Amount),
      `${diff >= 0 ? "+" : ""}${formatAmount(diff)} (${diffPercent}%)`,
    ],
  ];

  sections.push(table(headers, rows));
  sections.push("");

  sections.push(
    blockquote(
      "Note: Odoo prices may differ from historical prices due to price updates."
    )
  );

  return sections.join("\n");
}
