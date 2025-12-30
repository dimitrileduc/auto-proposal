/**
 * Utilitaires de formatage pour les rapports markdown
 */
/**
 * Formate un montant en euros avec 2 décimales
 * @example formatAmount(1234.567) => "1234.57€"
 */
export function formatAmount(amount) {
    if (amount === undefined || amount === null || isNaN(amount)) {
        return "0.00€";
    }
    return `${amount.toFixed(2)}€`;
}
/**
 * Formate un pourcentage avec 1 décimale
 * @example formatPercent(0.15) => "15.0%"
 */
export function formatPercent(value) {
    return `${(value * 100).toFixed(1)}%`;
}
/**
 * Formate une date ISO en format lisible français
 * @example formatDate("2025-10-11T18:30:00.000Z") => "11/10/2025 18:30"
 */
export function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
/**
 * Formate une durée en millisecondes en format lisible
 * @example formatDuration(2345) => "2.3s"
 * @example formatDuration(125000) => "2m 5s"
 */
export function formatDuration(ms) {
    if (ms < 1000) {
        return `${ms}ms`;
    }
    if (ms < 60000) {
        return `${(ms / 1000).toFixed(1)}s`;
    }
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
}
/**
 * Génère un séparateur markdown
 * @example separator() => "---"
 */
export function separator() {
    return "\n---\n";
}
/**
 * Génère un titre markdown
 * @example title("Mon Titre", 1) => "# Mon Titre\n"
 */
export function title(text, level = 1) {
    return `${"#".repeat(level)} ${text}\n`;
}
/**
 * Génère une ligne de tableau markdown
 */
export function tableRow(cells) {
    return `| ${cells.join(" | ")} |`;
}
/**
 * Génère l'en-tête d'un tableau markdown avec alignement
 * @param headers - Titres des colonnes
 * @param alignments - Alignement par colonne ("left" | "center" | "right")
 */
export function tableHeader(headers, alignments) {
    const headerRow = tableRow(headers);
    const separators = headers.map((_, i) => {
        const align = alignments?.[i] || "left";
        switch (align) {
            case "center":
                return ":---:";
            case "right":
                return "---:";
            default:
                return "---";
        }
    });
    return `${headerRow}\n${tableRow(separators)}`;
}
/**
 * Génère un tableau markdown complet
 * @param headers - Titres des colonnes
 * @param rows - Données (tableau de tableaux)
 * @param alignments - Alignement par colonne
 */
export function table(headers, rows, alignments) {
    const lines = [tableHeader(headers, alignments)];
    rows.forEach((row) => {
        lines.push(tableRow(row));
    });
    return lines.join("\n");
}
/**
 * Génère une liste à puces markdown
 */
export function bulletList(items) {
    return items.map((item) => `- ${item}`).join("\n");
}
/**
 * Génère une liste numérotée markdown
 */
export function numberedList(items) {
    return items.map((item, i) => `${i + 1}. ${item}`).join("\n");
}
/**
 * Génère un bloc de citation markdown
 */
export function blockquote(text) {
    return `> ${text}`;
}
/**
 * Génère un badge de statut (emoji + texte)
 */
export function badge(type, text) {
    const emoji = {
        success: "✅",
        warning: "⚠️",
        error: "❌",
        info: "ℹ️",
    }[type];
    return `${emoji} **${text}**`;
}
/**
 * Tronque un texte long avec ellipsis
 */
export function truncate(text, maxLength) {
    if (text.length <= maxLength)
        return text;
    return text.slice(0, maxLength - 3) + "...";
}
/**
 * Formate un nombre avec séparateurs de milliers
 * @example formatNumber(1234567) => "1 234 567"
 */
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
/**
 * Génère une ligne de statistique (label + valeur)
 */
export function statLine(label, value) {
    return `**${label}:** ${value}`;
}
/**
 * Génère un bloc de statistiques
 */
export function statsBlock(stats) {
    return Object.entries(stats)
        .map(([label, value]) => statLine(label, value))
        .join("\n");
}
