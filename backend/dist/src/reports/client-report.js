import { title, separator, table, formatAmount, formatDate, formatDuration, badge, statsBlock, blockquote, } from "./formatters";
/**
 * Génère le rapport markdown complet pour un client
 */
export function generateClientReport(data) {
    const sections = [];
    // En-tête
    sections.push(title(`📊 Rapport Auto-Proposal - ${data.client.name}`, 1));
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
 * Génère uniquement la section devis Odoo en markdown
 */
export function generateQuoteReport(data) {
    if (!data.phases.quote) {
        return undefined;
    }
    const sections = [];
    // En-tête simplifié pour le devis seul
    sections.push(title(`📄 Devis Odoo - ${data.client.name}`, 1));
    sections.push(statsBlock({
        "📅 Date": formatDate(data.executionDate),
        "🆔 Client ID": data.client.id,
        "📧 Email": data.client.email || "N/A",
    }));
    sections.push(separator());
    // Phase 3 uniquement
    sections.push(generatePhase3Section(data));
    return sections.join("\n");
}
/**
 * Section: Metadata
 */
function generateMetadataSection(data) {
    return statsBlock({
        "📅 Date": formatDate(data.executionDate),
        "🆔 Client ID": data.client.id,
        "📧 Email": data.client.email || "N/A",
        "⏱️ Durée d'exécution": formatDuration(data.executionTime),
    });
}
/**
 * Section: Phase 1 - Analyse Stock (RAW)
 */
function generatePhase1Section(data) {
    const phase1 = data.phases.stockAnalysis;
    const sections = [];
    sections.push(title("🔍 PHASE 1 - ANALYSE STOCK (RAW)", 2));
    sections.push("");
    // Résumé
    const urgentCount = phase1.products.filter((p) => p.stock_prediction.days_until_stockout <= 0).length;
    const moderateCount = phase1.products.filter((p) => p.stock_prediction.days_until_stockout > 0 &&
        p.stock_prediction.days_until_stockout <=
            data.config.replenishmentThreshold).length;
    sections.push(`**Produits à risque détectés: ${phase1.products.length}**`);
    sections.push(`- Urgents (rupture ≤ 0j): ${urgentCount}`);
    sections.push(`- Modérés (0 < rupture ≤ ${data.config.replenishmentThreshold}j): ${moderateCount}`);
    sections.push("");
    // Totaux
    const totalQty = phase1.products.reduce((sum, p) => sum + p.quantity_to_order, 0);
    sections.push(`**Total produits (Phase 1): ${phase1.products.length}**`);
    sections.push(`**Quantité totale brute: ${totalQty} unités**`);
    sections.push("");
    // Détails par produit en dropdowns
    sections.push(title("Détails par produit", 3));
    sections.push("");
    phase1.products.forEach((product) => {
        sections.push(generateProductDropdown(product));
        sections.push("");
    });
    return sections.join("\n");
}
/**
 * Génère un dropdown détaillé pour un produit
 */
function generateProductDropdown(product) {
    const sections = [];
    // En-tête dropdown
    const urgency = product.stock_prediction?.days_until_stockout <= 0 ? "🔴" : "🟡";
    sections.push(`<details>`);
    sections.push(`<summary>${urgency} <strong>${product.product_name}</strong> (ID: ${product.product_id}) - ${product.quantity_to_order} unités</summary>`);
    sections.push("");
    // Stock Prediction
    if (product.stock_prediction) {
        sections.push("### 📊 Prédiction Stock");
        sections.push(`- **Consommation/jour**: ${(product.stock_prediction.consumption_per_day || 0).toFixed(4)}`);
        sections.push(`- **Stock restant estimé**: ${(product.stock_prediction.estimated_stock_remaining || 0).toFixed(2)}`);
        sections.push(`- **Jours avant rupture**: **${product.stock_prediction.days_until_stockout || 0}j**`);
        sections.push(`- **Seuil réappro**: ${product.stock_prediction.replenishment_threshold_days || 0}j`);
        sections.push("");
    }
    // Order History
    if (product.order_history && product.order_history.length > 0) {
        sections.push("### 📦 Historique Commandes");
        sections.push("");
        const headers = ["Date", "Commande", "Qté", "Prix unit."];
        const rows = product.order_history.map((order) => [
            order.date_order.split(" ")[0],
            order.order_name,
            order.quantity,
            formatAmount(order.price_unit),
        ]);
        sections.push(table(headers, rows));
        sections.push("");
    }
    // Calculation Metadata
    if (product.calculation_metadata) {
        sections.push("### 🧮 Calcul Quantité");
        sections.push(`- **Stratégie**: ${product.calculation_metadata.strategy}`);
        sections.push(`- **Confiance**: ${product.calculation_metadata.confidence}`);
        sections.push(`- **Quantités historiques**: [${product.calculation_metadata.historical_quantities.join(", ")}]`);
        sections.push(`- **Nombre commandes**: ${product.calculation_metadata.order_count}`);
        sections.push(`- **Valeur médiane**: ${product.calculation_metadata.median_value}`);
        sections.push("");
    }
    sections.push("</details>");
    return sections.join("\n");
}
/**
 * Section: Phase 2.5 - Pricing + MOQ (ADJUSTED)
 */
function generatePhase2Section(data) {
    const phase2 = data.phases.proposalFinal;
    const sections = [];
    sections.push(title("💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ", 2));
    sections.push("");
    // Avant ajustement MOQ
    sections.push(title("Avant ajustement MOQ", 3));
    sections.push(`- **Montant initial: ${formatAmount(data.summary.initialAmount)}**`);
    sections.push(`- **MOQ requis: ${formatAmount(data.config.moqMinimum)}**`);
    if (data.summary.moqAdjusted) {
        const gap = data.config.moqMinimum - data.summary.initialAmount;
        sections.push(`- ${badge("warning", `Gap à combler: ${formatAmount(gap)}`)}`);
        sections.push("");
        // Après ajustement
        sections.push(title("Après ajustement MOQ", 3));
        sections.push(`- **Produits ajustés: ${phase2.adjustment_details?.products_adjusted || 0}/${data.summary.productsCount}**`);
        sections.push(`- **Montant ajouté: +${formatAmount(data.summary.moqGap || 0)}**`);
        sections.push(`- **Montant final: ${formatAmount(data.summary.finalAmount)}**`);
        sections.push("");
    }
    else {
        sections.push(`- ${badge("success", "Déjà au-dessus du MOQ")}`);
        sections.push("");
    }
    // Tableau détaillé des produits avec pricing
    sections.push(title("Détails produits avec pricing", 3));
    sections.push("");
    const headers = [
        "Produit",
        "ID",
        "Qté brute",
        "Ajust. MOQ",
        "Qté finale",
        "Prix unit.",
        "Sous-total",
    ];
    const rows = phase2.products.map((p) => {
        const originalQty = p.quantity_to_order - p.moq_adjustment;
        return [
            p.product_name.length > 30
                ? p.product_name.slice(0, 27) + "..."
                : p.product_name,
            p.product_id,
            originalQty,
            p.moq_adjustment > 0 ? `+${p.moq_adjustment}` : "0",
            p.quantity_to_order,
            formatAmount(p.current_price_unit),
            formatAmount(p.subtotal),
        ];
    });
    sections.push(table(headers, rows, ["left", "right", "right", "right", "right", "right", "right"]));
    sections.push("");
    sections.push(`**Total (Phase 2.5): ${formatAmount(phase2.total_amount)}**`);
    return sections.join("\n");
}
/**
 * Section: Phase 3 - Devis Odoo (QUOTE)
 */
function generatePhase3Section(data) {
    const quote = data.phases.quote;
    const sections = [];
    sections.push(title("📄 PHASE 3 - DEVIS ODOO CRÉÉ", 2));
    sections.push("");
    // Info devis
    sections.push(statsBlock({
        "Devis ID": quote.quote_id,
        "Nom": quote.quote_name,
        "État": quote.quote_state || "draft",
        "Date création": formatDate(quote.created_at),
    }));
    sections.push("");
    // Montants avec ristournes/pricelists
    sections.push(title("Montants calculés par Odoo (avec ristournes/pricelists)", 3));
    sections.push("");
    const headers = ["Produit", "ID", "Qté", "Prix unit. Odoo", "HT", "TVA", "TTC"];
    const rows = quote.order_lines.map((line) => [
        line.product_name.length > 30
            ? line.product_name.slice(0, 27) + "..."
            : line.product_name,
        line.product_id,
        line.quantity_ordered,
        formatAmount(line.price_unit),
        formatAmount(line.subtotal_ht),
        formatAmount(line.tax_amount),
        formatAmount(line.subtotal_ttc),
    ]);
    sections.push(table(headers, rows, ["left", "right", "right", "right", "right", "right", "right"]));
    sections.push("");
    // Totaux Odoo
    sections.push(`**Total HT (Odoo): ${formatAmount(quote.amount_total_ht)}**`);
    sections.push(`**Total TVA: ${formatAmount(quote.tax_total)}**`);
    sections.push(`**Total TTC: ${formatAmount(quote.amount_total_ttc)}**`);
    return sections.join("\n");
}
/**
 * Section: Comparaison Phase 2.5 vs Phase 3
 */
function generateComparisonSection(data) {
    const phase2Amount = data.summary.finalAmount;
    const phase3Amount = data.phases.quote.amount_total_ht;
    const diff = phase3Amount - phase2Amount;
    const diffPercent = ((diff / phase2Amount) * 100).toFixed(1);
    const sections = [];
    sections.push(title("📊 Comparaison Phase 2.5 vs Phase 3", 2));
    sections.push("");
    const headers = ["Métrique", "Phase 2.5 (Prix historiques)", "Phase 3 (Prix Odoo réels)", "Écart"];
    const rows = [
        [
            "Montant HT",
            formatAmount(phase2Amount),
            formatAmount(phase3Amount),
            `${diff >= 0 ? "+" : ""}${formatAmount(diff)} (${diffPercent}%)`,
        ],
    ];
    sections.push(table(headers, rows));
    sections.push("");
    // Note explicative
    sections.push(blockquote("⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives."));
    return sections.join("\n");
}
