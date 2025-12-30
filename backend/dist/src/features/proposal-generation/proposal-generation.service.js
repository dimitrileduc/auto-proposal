import { autoProposalConfig } from "../../config/auto-proposal";
/**
 * Génère une description de la prédiction pour un produit
 * Utilise le summary LLM si disponible, sinon description factuelle
 */
function generatePredictionDescription(product) {
    // Si on a le summary LLM (court), l'utiliser
    if (product.llm_prediction?.summary) {
        return product.llm_prediction.summary;
    }
    // Sinon, description factuelle basique
    const orderCount = product.calculation_metadata.order_count;
    const qty = product.quantity_to_order;
    if (orderCount === 1) {
        return `Suggestion: ${qty}u (1 seule commande historique)`;
    }
    else if (orderCount > 1) {
        return `Recommande: ${qty}u (mediane sur ${orderCount} commandes)`;
    }
    return `Quantite: ${qty}u`;
}
/**
 * Génère un devis Odoo (draft) à partir d'une proposition préparée
 *
 * Segmentation des produits:
 * - Produits de Base (confidence medium/high, ≥2 cmd) → sale.order.line
 * - Produits Optionnels (confidence low, 1 cmd) → sale.order.option
 *
 * Étapes:
 * 1. Récupérer company_id du client (requis pour multi-company Odoo)
 * 2. Créer le sale.order avec tag "Auto-proposal"
 * 3. Séparer produits base vs optionnels
 * 4. Créer les sale.order.line pour produits de base
 * 5. Créer les sale.order.option pour produits optionnels
 * 6. Récupérer le devis complet avec lignes + taxes calculées
 * 7. Retourner les détails complets
 *
 * @param proposal - Résultat de la préparation de proposition (pricing + MOQ)
 * @param odooClient - Client Odoo (XML-RPC ou JSON-2)
 * @returns Détails complets du devis créé
 */
export async function generateQuote(proposal, odooClient) {
    // 1. Récupérer company_id du client (requis pour multi-company Odoo)
    const partnerInfo = await odooClient.getPartnerCompanyInfo(proposal.client_id);
    // Si le partner n'a pas de company_id (false), utiliser company 1 par défaut
    let companyId;
    let companyName;
    if (!partnerInfo.company_id || partnerInfo.company_id === false) {
        // Utiliser company_id 1 par défaut (première company Odoo)
        companyId = 1;
        companyName = "Default Company";
        console.warn(`⚠️  Client ${proposal.client_id} sans company_id, utilisation company 1 par défaut`);
    }
    else {
        companyId = partnerInfo.company_id[0];
        companyName = partnerInfo.company_id[1];
    }
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
    // 3. Séparer produits base (≥2 cmd, confidence medium/high) vs optionnels (1 cmd, confidence low)
    const baseProducts = [];
    const optionalProducts = [];
    for (const product of proposal.products) {
        const confidence = product.calculation_metadata.confidence;
        // LOW = 1 commande historique → optionnel
        // MEDIUM/HIGH = ≥2 commandes → base
        if (confidence === 'low') {
            optionalProducts.push(product);
        }
        else {
            baseProducts.push(product);
        }
    }
    console.log(`📦 Devis ${quoteId}: ${baseProducts.length} produits base, ${optionalProducts.length} produits optionnels`);
    // 4. Créer les lignes de commande pour produits de BASE
    for (const product of baseProducts) {
        const description = generatePredictionDescription(product);
        await odooClient.createSaleOrderLine({
            order_id: quoteId,
            product_id: product.product_id,
            product_uom_qty: product.quantity_to_order,
            price_unit: product.current_price_unit,
            name: description,
        });
    }
    // 5. Créer les OPTIONS pour produits OPTIONNELS (1 seule commande historique)
    for (const product of optionalProducts) {
        const description = generatePredictionDescription(product);
        await odooClient.createSaleOrderOption({
            order_id: quoteId,
            product_id: product.product_id,
            quantity: product.quantity_to_order,
            uom_id: product.product_uom[0], // ID de l'unité de mesure
            price_unit: product.current_price_unit,
            name: description,
        });
    }
    // 6. Récupérer le devis complet avec lignes + taxes
    const { order, lines } = await odooClient.getSaleOrderDetails(quoteId);
    // 7. Construire le résultat détaillé
    const orderLines = lines.map((line) => ({
        line_id: line.id,
        product_id: line.product_id[0],
        product_name: line.product_id[1],
        product_uom: line.product_uom,
        description: line.name, // Description/reasoning de la prédiction
        quantity_ordered: line.product_uom_qty,
        price_unit: line.price_unit,
        subtotal_ht: line.price_subtotal,
        subtotal_ttc: line.price_total,
        tax_amount: line.price_total - line.price_subtotal,
    }));
    // Construire les produits optionnels (sale.order.option ne sont pas dans lines)
    const optionalProductsDetails = optionalProducts.map((product) => ({
        line_id: 0, // Les options n'ont pas de line_id
        product_id: product.product_id,
        product_name: product.product_name,
        product_uom: product.product_uom,
        description: generatePredictionDescription(product),
        quantity_ordered: product.quantity_to_order,
        price_unit: product.current_price_unit,
        subtotal_ht: product.subtotal,
        subtotal_ttc: product.subtotal, // Approximation (pas de calcul TVA pour options)
        tax_amount: 0, // Pas calculé pour les options
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
    };
}
