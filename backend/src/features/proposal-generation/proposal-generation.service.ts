/**
 * Odoo quote generation service
 *
 * Creates draft quotes in Odoo from prepared proposals.
 *
 * @module features/proposal-generation/service
 */
import type { OdooClient } from "../../infrastructure/odoo/clients/odoo-client.types";
import type { ProposalPreparationResult, ProductWithCurrentPrice } from "../proposal-preparation/proposal-preparation.types";
import type {
  QuoteCreationResult,
  QuoteLineDetails,
} from "./proposal-generation.types";
import { autoProposalConfig } from "../../config/auto-proposal";

/**
 * Generates prediction description for a product
 * Uses LLM summary if available, otherwise factual description
 */
function generatePredictionDescription(product: ProductWithCurrentPrice): string {
  // If we have LLM summary (short), use it
  if (product.llm_prediction?.summary) {
    return product.llm_prediction.summary;
  }

  // Otherwise, basic factual description
  const orderCount = product.calculation_metadata.order_count;
  const qty = product.quantity_to_order;

  if (orderCount === 1) {
    return `Suggestion: ${qty}u (single historical order)`;
  } else if (orderCount > 1) {
    return `Recommended: ${qty}u (median over ${orderCount} orders)`;
  }

  return `Quantity: ${qty}u`;
}

/**
 * Format LLM reasoning as simple HTML table for Odoo chatter
 * KISS: no fancy CSS, just basic HTML attributes
 */
function formatReasoningAsHtmlTable(products: ProductWithCurrentPrice[]): string {
  const rows = products.map(p => {
    const reasoning = p.llm_prediction?.summary ||
      `${p.calculation_metadata.order_count} historical order(s)`;
    return `<tr><td>${p.product_name}</td><td>${p.quantity_to_order}</td><td>${reasoning}</td></tr>`;
  }).join('');

  return `<b>🤖 Auto-Proposal - LLM Reasoning</b><br/><br/>
<table border="1" cellpadding="5">
<tr><th>Produit</th><th>Qté</th><th>Reasoning</th></tr>
${rows}
</table>`;
}

/**
 * Generates an Odoo draft quote from a prepared proposal
 *
 * Product segmentation:
 * - Base Products (confidence medium/high, 2+ orders) -> sale.order.line
 * - Optional Products (confidence low, 1 order) -> sale.order.option
 *
 * Steps:
 * 1. Get client company_id (required for Odoo multi-company)
 * 2. Create sale.order with "Auto-proposal" tag
 * 3. Separate base vs optional products
 * 4. Create sale.order.line for base products
 * 5. Create sale.order.option for optional products
 * 6. Retrieve complete quote with lines + calculated taxes
 * 7. Return complete details
 *
 * @param proposal - Proposal preparation result (pricing + MOQ)
 * @param odooClient - Odoo client (XML-RPC or JSON-2)
 * @returns Complete created quote details
 */
export async function generateQuote(
  proposal: ProposalPreparationResult,
  odooClient: OdooClient
): Promise<QuoteCreationResult> {
  // 1. Get client company_id (required for Odoo multi-company)
  const partnerInfo = await odooClient.getPartnerCompanyInfo(
    proposal.client_id
  );

  // If partner has no company_id (false), use default company 1
  let companyId: number;
  let companyName: string;

  if (!partnerInfo.company_id || partnerInfo.company_id === false) {
    // Use company_id 1 by default (first Odoo company)
    companyId = 1;
    companyName = "Default Company";
    console.warn(`WARNING: Client ${proposal.client_id} has no company_id, using company 1 as default`);
  } else {
    companyId = partnerInfo.company_id[0];
    companyName = partnerInfo.company_id[1];
  }

  const clientName = partnerInfo.name;

  // 2. Create quote (sale.order) with tag
  const quoteId = await odooClient.createSaleOrder({
    partner_id: proposal.client_id,
    company_id: companyId,
    // Odoo many2many format: [command, _, ids]
    // Command 6 = Replace (replace all tags with this list)
    // [6, 0, [82]] = "Assign only tag 82"
    tag_ids: [
      [6, 0, [autoProposalConfig.quoteGeneration.autoProposalTagId]],
    ],
    note: autoProposalConfig.quoteGeneration.noteTemplate,
  });

  // 3. Separate base products (2+ orders, confidence medium/high) vs optional (1 order, confidence low)
  const baseProducts: ProductWithCurrentPrice[] = [];
  const optionalProducts: ProductWithCurrentPrice[] = [];

  for (const product of proposal.products) {
    const confidence = product.calculation_metadata.confidence;
    // LOW = 1 historical order -> optional
    // MEDIUM/HIGH = 2+ orders -> base
    if (confidence === 'low') {
      optionalProducts.push(product);
    } else {
      baseProducts.push(product);
    }
  }

  console.log(`Quote ${quoteId}: ${baseProducts.length} base products, ${optionalProducts.length} optional products`);

  // 4. Create order lines for BASE products (no custom name = Odoo uses product default)
  for (const product of baseProducts) {
    await odooClient.createSaleOrderLine({
      order_id: quoteId,
      product_id: product.product_id,
      product_uom_qty: product.quantity_to_order,
      price_unit: product.current_price_unit,
    });
  }

  // 5. Create OPTIONS for OPTIONAL products (single historical order)
  for (const product of optionalProducts) {
    await odooClient.createSaleOrderOption({
      order_id: quoteId,
      product_id: product.product_id,
      quantity: product.quantity_to_order,
      uom_id: product.product_uom[0], // Unit of measure ID
      price_unit: product.current_price_unit,
    });
  }

  // 6. Post LLM reasoning as internal note in chatter (not visible on PDF)
  const allProducts = [...baseProducts, ...optionalProducts];
  let chatterMessageId: number | null = null;
  let chatterMessagePreview: string | null = null;

  if (allProducts.length > 0) {
    try {
      const reasoningHtml = formatReasoningAsHtmlTable(allProducts);
      chatterMessageId = await odooClient.postInternalNote('sale.order', quoteId, reasoningHtml);

      // Verify message was created and get preview
      if (chatterMessageId) {
        const message = await odooClient.getMessageById(chatterMessageId);
        if (message) {
          // Strip HTML for preview (first 200 chars)
          chatterMessagePreview = message.body.replace(/<[^>]*>/g, '').substring(0, 200);
          console.log(`✅ Chatter note posted (message_id: ${chatterMessageId})`);
        }
      }
    } catch (error) {
      console.error(`⚠️ Failed to post chatter note: ${error}`);
      // Don't fail the whole quote creation if chatter fails
    }
  }

  // 7. Retrieve complete quote with lines + taxes
  const { order, lines } = await odooClient.getSaleOrderDetails(quoteId);

  // 8. Build detailed result
  const orderLines: QuoteLineDetails[] = lines.map((line) => ({
    line_id: line.id,
    product_id: line.product_id[0],
    product_name: line.product_id[1],
    product_uom: line.product_uom,
    description: line.name, // Prediction description/reasoning
    quantity_ordered: line.product_uom_qty,
    price_unit: line.price_unit,
    subtotal_ht: line.price_subtotal,
    subtotal_ttc: line.price_total,
    tax_amount: line.price_total - line.price_subtotal,
  }));

  // Build optional products (sale.order.option are not in lines)
  const optionalProductsDetails: QuoteLineDetails[] = optionalProducts.map((product) => ({
    line_id: 0, // Options don't have line_id
    product_id: product.product_id,
    product_name: product.product_name,
    product_uom: product.product_uom,
    description: generatePredictionDescription(product),
    quantity_ordered: product.quantity_to_order,
    price_unit: product.current_price_unit,
    subtotal_ht: product.subtotal,
    subtotal_ttc: product.subtotal, // Approximation (no tax calculation for options)
    tax_amount: 0, // Not calculated for options
  }));

  return {
    quote_id: order.id,
    quote_name: order.name,
    state: "draft",
    client_id: proposal.client_id,
    client_name: clientName,
    company_id: companyId,
    company_name: companyName,
    amount_total_ht: order.amount_untaxed,
    amount_total_ttc: order.amount_total,
    tax_total: order.amount_tax,
    order_lines: orderLines,
    lines_count: orderLines.length,
    optional_products: optionalProductsDetails,
    optional_products_count: optionalProducts.length,
    tag_id: autoProposalConfig.quoteGeneration.autoProposalTagId,
    created_at: order.date_order,
    chatter_message_id: chatterMessageId,
    chatter_message_preview: chatterMessagePreview,
  };
}
