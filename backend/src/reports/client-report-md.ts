/**
 * Generates markdown business report from JSON data structure
 *
 * Report Structure:
 * - Header with summary
 * - CORE PRODUCTS section (medium/high confidence)
 * - OPTIONAL PRODUCTS section (low confidence) with warning
 * - LLM prediction details in dropdowns for each product
 * - Phase 3: "Suggestion commande" activity (outcome, opportunity, salesperson, description)
 * - Technical details in accordions
 *
 * @module reports/client-report-md
 */

import type { ClientReportJSON, BusinessProduct } from "./client-report-json";
import { formatDateFr } from "../utils/date.utils";

/**
 * Generates markdown business report from JSON client data
 *
 * Creates a formatted markdown report suitable for business stakeholders,
 * organized by core and optional products with confidence levels and details.
 *
 * @param data - Structured report data for the client
 * @returns Formatted markdown string
 */
export function generateClientReportMarkdown(data: ClientReportJSON): string {
  const sections: string[] = [];

  sections.push(`# Auto-Proposal Report - ${data.client.name}`);
  sections.push("");
  sections.push(`**Client:** ${data.client.name} (ID: ${data.client.id})`);
  if (data.client.email) {
    sections.push(`**Email:** ${data.client.email}`);
  }
  sections.push(`**Analysis Date:** ${new Date(data.meta.generatedAt).toLocaleString("en-US")}`);
  sections.push(`**Replenishment Threshold:** ${data.config.replenishmentThreshold} days`);
  sections.push("");

  sections.push(`## Summary`);
  sections.push("");
  sections.push(`- **Core Products:** ${data.summary.base_products_count} (${data.summary.base_amount.toFixed(2)}€ excl. tax)`);
  sections.push(`- **Optional Products:** ${data.summary.optional_products_count} (${data.summary.optional_amount.toFixed(2)}€ excl. tax)`);
  sections.push(`- **Total:** ${data.summary.total_amount.toFixed(2)}€ excl. tax`);

  if (data.summary.moq_adjusted) {
    sections.push(`- **MOQ Adjustment:** +${data.summary.moq_gap?.toFixed(2)}€ to meet minimum of ${data.config.moqMinimum}€`);
  }

  sections.push("");
  sections.push("---");
  sections.push("");

  // PHASE 2.5 - PRICING + MOQ
  if (data.phases.proposalFinal.products_count > 0) {
    sections.push(`## PHASE 2.5 - PRICING + MOQ`);
    sections.push("");

    const originalTotal = data.phases.proposalFinal.adjustment_details?.original_total ?? data.phases.proposalFinal.total_amount;
    sections.push(`**Initial Amount:** ${originalTotal.toFixed(2)}€`);
    sections.push(`**Required MOQ:** ${data.config.moqMinimum.toFixed(2)}€`);

    if (data.phases.proposalFinal.moq_adjustment_applied) {
      sections.push(`**Status:** Adjustment Applied (+${data.summary.moq_gap?.toFixed(2)}€)`);
    } else {
      sections.push(`**Status:** OK`);
    }
    sections.push("");

    // Table with MOQ column if adjustment applied
    const allProducts = [...data.products.base, ...data.products.optional];
    const hasAnyMoqAdjustment = allProducts.some(p => (p.moq_adjustment ?? 0) > 0);

    if (hasAnyMoqAdjustment) {
      sections.push(`| Product | Qty LLM | MOQ | Qty Final | Price | Subtotal | Summary |`);
      sections.push(`|---------|--------:|----:|----------:|------:|---------:|---------|`);

      for (const product of allProducts) {
        const baseQty = product.llm_prediction?.baseline_quantity ?? product.quantity_recommended;
        const moqAdj = product.moq_adjustment ?? 0;
        const moqStr = moqAdj > 0 ? `+${moqAdj}` : "-";
        const name = product.product_name.length > 40 ? product.product_name.slice(0, 37) + "..." : product.product_name;
        const summary = product.llm_prediction?.summary || "-";
        sections.push(
          `| ${name} | ${baseQty} | ${moqStr} | ${product.quantity_recommended} | ${product.price_unit.toFixed(2)}€ | ${product.subtotal.toFixed(2)}€ | ${summary} |`
        );
      }
    } else {
      sections.push(`| Product | Qty | Price | Subtotal | Summary |`);
      sections.push(`|---------|----:|------:|---------:|---------|`);

      for (const product of allProducts) {
        const name = product.product_name.length > 40 ? product.product_name.slice(0, 37) + "..." : product.product_name;
        const summary = product.llm_prediction?.summary || "-";
        sections.push(
          `| ${name} | ${product.quantity_recommended} | ${product.price_unit.toFixed(2)}€ | ${product.subtotal.toFixed(2)}€ | ${summary} |`
        );
      }
    }

    sections.push("");
    sections.push(`**Total: ${data.phases.proposalFinal.total_amount.toFixed(2)}€**`);
    sections.push("");
    sections.push("---");
    sections.push("");
  }

  // PHASE 3 - ACTIVITÉ (right after Phase 2.5)
  if (data.phases.activity) {
    sections.push(renderActivityPhase(data.phases.activity));
    sections.push("---");
    sections.push("");
  }

  // Product Details sections (after all phases)
  if (data.products.base.length > 0) {
    sections.push(`## Core Products Details`);
    sections.push("");
    sections.push(`**${data.products.base.length} products** recommended with medium to high confidence (2+ orders history).`);
    sections.push("");

    sections.push(`| Product | Qty | Unit Price | Subtotal | Confidence |`);
    sections.push(`|---------|-----|------------|----------|------------|`);

    for (const product of data.products.base) {
      const confidenceBadge = product.confidence === "high" ? "🟢 High" : "🟡 Medium";
      sections.push(
        `| ${product.product_name} | ${product.quantity_recommended} ${product.product_uom} | ${product.price_unit.toFixed(2)}€ | ${product.subtotal.toFixed(2)}€ | ${confidenceBadge} |`
      );
    }

    sections.push("");

    for (const product of data.products.base) {
      sections.push(renderProductDetails(product));
    }
  }

  if (data.products.optional.length > 0) {
    sections.push(`## Optional Products Details`);
    sections.push("");
    sections.push(`> **⚠️ Warning:** These products have low confidence (1 order history only).`);
    sections.push(`> They are listed as **optional** products in the activity description, not included in the core total.`);
    sections.push("");
    sections.push(`**${data.products.optional.length} products** to propose as options:`);
    sections.push("");

    sections.push(`| Product | Qty | Unit Price | Subtotal |`);
    sections.push(`|---------|-----|------------|----------|`);

    for (const product of data.products.optional) {
      sections.push(
        `| ${product.product_name} | ${product.quantity_recommended} ${product.product_uom} | ${product.price_unit.toFixed(2)}€ | ${product.subtotal.toFixed(2)}€ |`
      );
    }

    sections.push("");

    for (const product of data.products.optional) {
      sections.push(renderProductDetails(product));
    }
  }

  sections.push(`<details>`);
  sections.push(`<summary><strong>🔧 Technical Details</strong></summary>`);
  sections.push("");
  sections.push(`### Configuration`);
  sections.push("");
  sections.push(`- **Reference Date:** ${data.config.analysisEndDate}`);
  sections.push(`- **Replenishment Threshold:** ${data.config.replenishmentThreshold} days`);
  sections.push(`- **MOQ Minimum:** ${data.config.moqMinimum}€`);
  sections.push(`- **Mode:** ${data.config.skipOdooWrite ? "TEST (no Odoo write)" : "REAL"}`);
  sections.push(`- **skipOdooWrite:** ${data.config.skipOdooWrite}`);
  sections.push("");

  sections.push(`### Processing Phases`);
  sections.push("");
  sections.push(`- **Stock Analysis:** ${data.phases.stockAnalysis.products_count} at-risk products detected`);
  sections.push(`- **Proposal Final:** ${data.phases.proposalFinal.products_count} products after pricing`);
  if (data.phases.proposalFinal.moq_adjustment_applied) {
    sections.push(`  - MOQ Adjustment: ${data.phases.proposalFinal.adjustment_details?.original_total.toFixed(2)}€ → ${data.phases.proposalFinal.total_amount.toFixed(2)}€`);
  }
  if (data.phases.activity) {
    sections.push(`- **Activity:** ${data.phases.activity.label}`);
  }
  sections.push("");

  if (data.phases.stockAnalysis.llm_usage) {
    sections.push(`### LLM Usage`);
    sections.push("");
    sections.push(`- **Calls:** ${data.phases.stockAnalysis.llm_usage.calls}`);
    sections.push(`- **Tokens:** ${data.phases.stockAnalysis.llm_usage.totalTokens}`);
    sections.push("");
  }

  sections.push(`### Performance`);
  sections.push("");
  sections.push(`- **Execution Time:** ${(data.execution_time_ms / 1000).toFixed(1)}s`);
  sections.push("");
  sections.push(`</details>`);
  sections.push("");

  sections.push("---");
  sections.push("");
  sections.push(`*Report auto-generated on ${new Date(data.meta.generatedAt).toLocaleString("en-US")}*`);

  return sections.join("\n");
}

/**
 * Renders the "Suggestion commande" phase: outcome, opportunity, salesperson, deadline, description
 *
 * @param activity - Activity phase of the JSON report
 * @returns Formatted markdown section
 */
function renderActivityPhase(activity: NonNullable<ClientReportJSON["phases"]["activity"]>): string {
  const lines: string[] = [];
  const outcome = activity.outcome;

  lines.push(`## PHASE 3 - ACTIVITÉ`);
  lines.push("");
  lines.push(`**Résultat :** ${activity.label}`);

  if (outcome.kind === "created" || outcome.kind === "would_create") {
    const lead = outcome.leadId !== undefined
      ? `${outcome.leadName} (ID ${outcome.leadId})`
      : "à créer";
    lines.push(`**Opportunité :** ${lead} — ${outcome.leadCreated ? "nouvelle" : "existante"}`);
    lines.push(`**Vendeur :** ${outcome.salespersonName ?? "—"}`);
  }

  if (outcome.kind === "created") {
    lines.push(`**Échéance :** ${formatDateFr(outcome.dateDeadline)}`);
    lines.push(`**Activité :** ID ${outcome.activityId}`);
  }

  if (outcome.kind === "error" && outcome.leadCreatedId !== undefined) {
    lines.push(`**Opportunité créée sans activité :** ID ${outcome.leadCreatedId}`);
  }

  if (activity.description) {
    lines.push("");
    lines.push(`**Description :**`);
    lines.push("");
    lines.push(activity.description);
  }

  lines.push("");

  return lines.join("\n");
}

/**
 * Renders product details in a collapsible dropdown
 *
 * @param product - Product data to display
 * @returns Formatted markdown details section
 */
function renderProductDetails(product: BusinessProduct): string {
  const lines: string[] = [];

  lines.push(`<details>`);
  lines.push(`<summary><strong>${product.product_name}</strong> - ${product.quantity_recommended} ${product.product_uom} (${product.subtotal.toFixed(2)}€)</summary>`);
  lines.push("");

  lines.push(`**Recommended Quantity:** ${product.quantity_recommended} ${product.product_uom}`);
  lines.push(`**Source:** ${product.quantity_source === "llm" ? "LLM" : "Median fallback"}`);
  lines.push(`**Unit Price:** ${product.price_unit.toFixed(2)}€`);
  lines.push(`**Subtotal:** ${product.subtotal.toFixed(2)}€`);
  lines.push("");

  const confidenceLabel =
    product.confidence === "high"
      ? "🟢 High"
      : product.confidence === "medium"
      ? "🟡 Medium"
      : "🔴 Low";
  lines.push(`**Confidence:** ${confidenceLabel} (${product.order_count} historical order(s))`);
  lines.push("");

  if (product.llm_prediction) {
    lines.push(`### LLM Prediction`);
    lines.push("");
    if (product.llm_prediction.summary) {
      lines.push(`**Summary:** ${product.llm_prediction.summary}`);
      lines.push("");
    }
    lines.push(`**Reasoning:**`);
    lines.push("");
    lines.push(product.llm_prediction.reasoning);
    lines.push("");
    lines.push(`**Baseline Quantity:** ${product.llm_prediction.baseline_quantity}`);
    if (product.llm_prediction.model) {
      lines.push(`**Model:** ${product.llm_prediction.model} (${product.llm_prediction.provider})`);
    }
    lines.push("");
  }

  if (product.recent_orders.length > 0) {
    lines.push(`### Order History (${product.recent_orders.length} recent orders)`);
    lines.push("");
    lines.push(`| Date | Quantity | Unit Price |`);
    lines.push(`|------|----------|------------|`);

    for (const order of product.recent_orders) {
      const date = new Date(order.date).toLocaleDateString("en-US");
      lines.push(`| ${date} | ${order.quantity} | ${(order.price_unit ?? 0).toFixed(2)}€ |`);
    }
    lines.push("");
  }

  lines.push(`</details>`);
  lines.push("");

  return lines.join("\n");
}
