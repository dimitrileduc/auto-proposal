import type { OdooClient } from "../../infrastructure/odoo/clients/odoo-client.types";
import type { ProposalPreparationResult } from "../proposal-preparation/proposal-preparation.types";
import type {
  QuoteCreationResult,
  QuoteLineDetails,
} from "./proposal-generation.types";
import { autoProposalConfig } from "../../config/auto-proposal";

/**
 * Génère un devis Odoo (draft) à partir d'une proposition préparée
 *
 * Étapes:
 * 1. Récupérer company_id du client (requis pour multi-company Odoo)
 * 2. Créer le sale.order avec tag "Auto-proposal"
 * 3. Créer les sale.order.line pour chaque produit
 * 4. Récupérer le devis complet avec lignes + taxes calculées
 * 5. Retourner les détails complets
 *
 * @param proposal - Résultat de la préparation de proposition (pricing + MOQ)
 * @param odooClient - Client Odoo (XML-RPC ou JSON-2)
 * @returns Détails complets du devis créé
 */
export async function generateQuote(
  proposal: ProposalPreparationResult,
  odooClient: OdooClient
): Promise<QuoteCreationResult> {
  // 1. Récupérer company_id du client (requis pour multi-company Odoo)
  const partnerInfo = await odooClient.getPartnerCompanyInfo(
    proposal.client_id
  );
  const companyId = partnerInfo.company_id[0];
  const companyName = partnerInfo.company_id[1];
  const clientName = partnerInfo.name;

  // 2. Créer le devis (sale.order) avec tag
  const quoteId = await odooClient.createSaleOrder({
    partner_id: proposal.client_id,
    company_id: companyId,
    // Format Odoo many2many: [command, _, ids]
    // Command 6 = Replace (remplace tous les tags par cette liste)
    // [6, 0, [82]] = "Assigner uniquement le tag 82"
    tag_ids: [
      [6, 0, [autoProposalConfig.quoteGeneration.autoProposalTagId]],
    ],
    note: autoProposalConfig.quoteGeneration.noteTemplate,
  });

  // 3. Créer les lignes de commande
  for (const product of proposal.products) {
    await odooClient.createSaleOrderLine({
      order_id: quoteId,
      product_id: product.product_id,
      product_uom_qty: product.quantity_to_order,
      price_unit: product.current_price_unit,
    });
  }

  // 4. Récupérer le devis complet avec lignes + taxes
  const { order, lines } = await odooClient.getSaleOrderDetails(quoteId);

  // 5. Construire le résultat détaillé
  const orderLines: QuoteLineDetails[] = lines.map((line) => ({
    line_id: line.id,
    product_id: line.product_id[0],
    product_name: line.product_id[1],
    product_uom: line.product_uom,
    quantity_ordered: line.product_uom_qty,
    price_unit: line.price_unit,
    subtotal_ht: line.price_subtotal,
    subtotal_ttc: line.price_total,
    tax_amount: line.price_total - line.price_subtotal,
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
    tag_id: autoProposalConfig.quoteGeneration.autoProposalTagId,
    created_at: order.date_order,
  };
}
