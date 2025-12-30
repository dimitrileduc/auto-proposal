import { title, separator, table, formatAmount, formatDate, formatDuration, statsBlock, blockquote, } from "./formatters";
/**
 * Génère le rapport markdown complet pour un client
 */
export function generateClientReport(data) {
    const sections = [];
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
 * Génère uniquement la section devis Odoo en markdown
 */
export function generateQuoteReport(data) {
    if (!data.phases.quote) {
        return undefined;
    }
    const sections = [];
    // En-tête simplifié pour le devis seul
    sections.push(title(`Devis Odoo - ${data.client.name}`, 1));
    sections.push(statsBlock({
        "Date": formatDate(data.executionDate),
        "Client ID": data.client.id,
        "Email": data.client.email || "N/A",
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
        "Date": formatDate(data.executionDate),
        "Client ID": data.client.id,
        "Email": data.client.email || "N/A",
        "Duree": formatDuration(data.executionTime),
    });
}
/**
 * Section: Phase 1 - Analyse Stock (RAW)
 */
function generatePhase1Section(data) {
    const phase1 = data.phases.stockAnalysis;
    const sections = [];
    sections.push(title("PHASE 1 - ANALYSE STOCK", 2));
    sections.push("");
    sections.push(`**Produits a risque: ${phase1.products.length}**`);
    sections.push("");
    // Détails par produit en dropdowns
    sections.push(title("Details par produit", 3));
    sections.push("");
    phase1.products.forEach((product) => {
        sections.push(generateProductDropdown(product));
        sections.push("");
    });
    return sections.join("\n");
}
/**
 * Génère un dropdown détaillé pour un produit
 * Garde uniquement l'historique des commandes
 */
function generateProductDropdown(product) {
    const sections = [];
    // En-tête dropdown (sans badge urgency)
    sections.push(`<details>`);
    sections.push(`<summary><strong>${product.product_name}</strong> (ID: ${product.product_id}) - ${product.quantity_to_order}u</summary>`);
    sections.push("");
    // Order History uniquement
    if (product.order_history && product.order_history.length > 0) {
        const headers = ["Date", "Commande", "Qte", "Prix"];
        const rows = product.order_history.map((order) => [
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
 * Section: Phase 2.5 - Pricing + MOQ (ADJUSTED)
 */
function generatePhase2Section(data) {
    const phase2 = data.phases.proposalFinal;
    const sections = [];
    sections.push(title("PHASE 2.5 - PRICING + MOQ", 2));
    sections.push("");
    sections.push(`Montant initial: ${formatAmount(data.summary.initialAmount)}`);
    sections.push(`MOQ requis: ${formatAmount(data.config.moqMinimum)}`);
    if (data.summary.moqAdjusted) {
        sections.push(`Statut: Ajustement applique (+${formatAmount(data.summary.moqGap || 0)})`);
    }
    else {
        sections.push(`Statut: OK`);
    }
    sections.push("");
    // Tableau détaillé des produits avec pricing
    const headers = ["Produit", "Qte", "Prix", "Sous-total"];
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
 * Section: Phase 3 - Devis Odoo (QUOTE)
 * Sépare les produits de base et optionnels
 */
function generatePhase3Section(data) {
    const quote = data.phases.quote;
    const sections = [];
    sections.push(title("PHASE 3 - DEVIS ODOO", 2));
    sections.push("");
    // Info devis
    sections.push(`Devis: ${quote.quote_name} (ID: ${quote.quote_id})`);
    sections.push(`Etat: ${quote.quote_state || "draft"}`);
    sections.push("");
    // Produits de Base
    sections.push(title(`Produits de Base (${quote.order_lines.length})`, 3));
    sections.push("");
    const baseHeaders = ["Produit", "Qte", "Prix", "Description"];
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
    // Produits Optionnels (si présents)
    if (quote.optional_products && quote.optional_products.length > 0) {
        sections.push(title(`Produits Optionnels (${quote.optional_products.length})`, 3));
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
    // Totaux Odoo
    sections.push(`**Total HT: ${formatAmount(quote.amount_total_ht)}**`);
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
    sections.push(title("Comparaison Phase 2.5 vs Phase 3", 2));
    sections.push("");
    const headers = ["Phase 2.5", "Phase 3", "Ecart"];
    const rows = [
        [
            formatAmount(phase2Amount),
            formatAmount(phase3Amount),
            `${diff >= 0 ? "+" : ""}${formatAmount(diff)} (${diffPercent}%)`,
        ],
    ];
    sections.push(table(headers, rows));
    sections.push("");
    // Note explicative
    sections.push(blockquote("Note: Les prix Odoo peuvent differer des prix historiques."));
    return sections.join("\n");
}
