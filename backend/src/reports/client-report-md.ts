/**
 * Generates markdown business report from JSON data structure
 *
 * Report Structure:
 * - Header with summary
 * - CORE PRODUCTS section (medium/high confidence)
 * - OPTIONAL PRODUCTS section (low confidence) with warning
 * - LLM prediction details in dropdowns for each product
 * - Odoo quote section (if generated)
 * - Technical details in accordions
 *
 * @module reports/client-report-md
 */

import type { ClientReportJSON, BusinessProduct } from "./client-report-json";

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

  if (data.summary.quote_name) {
    sections.push(`- **Odoo Quote:** ${data.summary.quote_name} (ID: ${data.summary.quote_id})`);
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

    // No Summary column - LLM reasoning is in chatter
    if (hasAnyMoqAdjustment) {
      sections.push(`| Product | Qty LLM | MOQ | Qty Final | Price | Subtotal |`);
      sections.push(`|---------|--------:|----:|----------:|------:|---------:|`);

      for (const product of allProducts) {
        const baseQty = product.llm_prediction?.baseline_quantity ?? product.quantity_recommended;
        const moqAdj = product.moq_adjustment ?? 0;
        const moqStr = moqAdj > 0 ? `+${moqAdj}` : "-";
        const name = product.product_name.length > 40 ? product.product_name.slice(0, 37) + "..." : product.product_name;
        sections.push(
          `| ${name} | ${baseQty} | ${moqStr} | ${product.quantity_recommended} | ${product.price_unit.toFixed(2)}€ | ${product.subtotal.toFixed(2)}€ |`
        );
      }
    } else {
      sections.push(`| Product | Qty | Price | Subtotal |`);
      sections.push(`|---------|----:|------:|---------:|`);

      for (const product of allProducts) {
        const name = product.product_name.length > 40 ? product.product_name.slice(0, 37) + "..." : product.product_name;
        sections.push(
          `| ${name} | ${product.quantity_recommended} | ${product.price_unit.toFixed(2)}€ | ${product.subtotal.toFixed(2)}€ |`
        );
      }
    }

    sections.push("");
    sections.push(`**Total: ${data.phases.proposalFinal.total_amount.toFixed(2)}€**`);
    sections.push("");
    sections.push("---");
    sections.push("");
  }

  // PHASE 3 - ODOO QUOTE (right after Phase 2.5)
  if (data.phases.quote) {
    sections.push(`## PHASE 3 - ODOO QUOTE`);
    sections.push("");
    sections.push(`**Quote:** ${data.phases.quote.quote_name} (ID: ${data.phases.quote.quote_id})`);
    sections.push(`**Status:** ${data.phases.quote.quote_state}`);
    sections.push(`**Created:** ${new Date(data.phases.quote.created_at).toLocaleString("en-US")}`);
    sections.push("");

    // Map product_id -> BusinessProduct for summary lookup
    const productMap = new Map<number, BusinessProduct>();
    for (const p of [...data.products.base, ...data.products.optional]) {
      productMap.set(p.product_id, p);
    }

    // Core products table (no Summary column - LLM reasoning is in chatter)
    if (data.phases.quote.order_lines.length > 0) {
      sections.push(`### Core Products (${data.phases.quote.lines_count})`);
      sections.push("");
      sections.push(`| Product | Qty | Price | Subtotal |`);
      sections.push(`|---------|----:|------:|---------:|`);

      for (const line of data.phases.quote.order_lines) {
        const name = line.product_name.length > 40 ? line.product_name.slice(0, 37) + "..." : line.product_name;
        sections.push(
          `| ${name} | ${line.quantity} | ${line.price_unit.toFixed(2)}€ | ${line.subtotal_ht.toFixed(2)}€ |`
        );
      }
      sections.push("");
    }

    // Optional products table (no Summary column - LLM reasoning is in chatter)
    if (data.phases.quote.optional_products.length > 0) {
      sections.push(`### Optional Products (${data.phases.quote.optional_products_count})`);
      sections.push("");
      sections.push(`| Product | Qty | Price | Subtotal |`);
      sections.push(`|---------|----:|------:|---------:|`);

      for (const opt of data.phases.quote.optional_products) {
        const name = opt.product_name.length > 40 ? opt.product_name.slice(0, 37) + "..." : opt.product_name;
        sections.push(
          `| ${name} | ${opt.quantity} | ${opt.price_unit.toFixed(2)}€ | ${opt.subtotal_ht.toFixed(2)}€ |`
        );
      }
      sections.push("");
    }

    sections.push(`**Total HT:** ${data.phases.quote.amount_total_ht.toFixed(2)}€`);
    sections.push(`**Taxes:** ${data.phases.quote.tax_total.toFixed(2)}€`);
    sections.push(`**Total TTC:** ${data.phases.quote.amount_total_ttc.toFixed(2)}€`);
    sections.push("");

    // Comparison Phase 2.5 vs Odoo
    const phase2Core = data.summary.base_amount;
    const phase2Optional = data.summary.optional_amount;
    const phase2Total = data.phases.proposalFinal.total_amount;

    const phase3Core = data.phases.quote.amount_total_ht;
    const phase3Optional = data.phases.quote.optional_products.reduce((sum, p) => sum + p.subtotal_ht, 0);
    const phase3Total = phase3Core + phase3Optional;

    const diffCore = phase3Core - phase2Core;
    const diffOptional = phase3Optional - phase2Optional;
    const diffTotal = phase3Total - phase2Total;
    const diffTotalPercent = phase2Total > 0 ? ((diffTotal / phase2Total) * 100).toFixed(1) : "0.0";

    sections.push(`### Phase 2.5 vs Odoo Comparison`);
    sections.push("");
    sections.push(`| | Phase 2.5 | Odoo | Difference |`);
    sections.push(`|---------|----------:|-----:|-----------:|`);
    sections.push(
      `| **Core** | ${phase2Core.toFixed(2)}€ | ${phase3Core.toFixed(2)}€ | ${diffCore >= 0 ? "+" : ""}${diffCore.toFixed(2)}€ |`
    );
    sections.push(
      `| **Optional** | ${phase2Optional.toFixed(2)}€ | ${phase3Optional.toFixed(2)}€ | ${diffOptional >= 0 ? "+" : ""}${diffOptional.toFixed(2)}€ |`
    );
    sections.push(
      `| **TOTAL** | ${phase2Total.toFixed(2)}€ | ${phase3Total.toFixed(2)}€ | ${diffTotal >= 0 ? "+" : ""}${diffTotal.toFixed(2)}€ (${diffTotalPercent}%) |`
    );
    sections.push("");

    if (Math.abs(diffTotal) > 0.01) {
      sections.push(`> **Note:** Price difference may be due to Odoo price list updates vs historical prices.`);
      sections.push("");
    }

    // Chatter message section (only if message was posted successfully)
    if (data.phases.quote.chatter_message_id) {
      sections.push(`### Chatter Message`);
      sections.push("");
      sections.push(`✅ **Message ID:** ${data.phases.quote.chatter_message_id}`);
      if (data.phases.quote.chatter_message_preview) {
        sections.push("");
        sections.push(`**Preview:** ${data.phases.quote.chatter_message_preview}...`);
      }
      sections.push("");
    }

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
    sections.push(`> They will be proposed as **options** in the Odoo quote, not included in the core total.`);
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
  sections.push(`- **Mode:** ${data.config.skipOdooQuoteGeneration ? "TEST (skip Odoo)" : "PRODUCTION"}`);
  sections.push("");

  sections.push(`### Processing Phases`);
  sections.push("");
  sections.push(`- **Stock Analysis:** ${data.phases.stockAnalysis.products_count} at-risk products detected`);
  sections.push(`- **Proposal Final:** ${data.phases.proposalFinal.products_count} products after pricing`);
  if (data.phases.proposalFinal.moq_adjustment_applied) {
    sections.push(`  - MOQ Adjustment: ${data.phases.proposalFinal.adjustment_details?.original_total.toFixed(2)}€ → ${data.phases.proposalFinal.total_amount.toFixed(2)}€`);
  }
  if (data.phases.quote) {
    sections.push(`- **Quote Generation:** Quote ${data.phases.quote.quote_name} created`);
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
