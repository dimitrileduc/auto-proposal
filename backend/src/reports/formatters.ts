/**
 * Markdown report formatting utilities
 *
 * Provides functions to format data for markdown report generation including
 * amounts, percentages, dates, durations, and markdown structural elements.
 *
 * @module reports/formatters
 */

/**
 * Formats an amount in euros with 2 decimal places
 *
 * @param amount - Amount to format (handles undefined/null/NaN)
 * @returns Formatted string (e.g., "1234.57€")
 * @example formatAmount(1234.567) // "1234.57€"
 */
export function formatAmount(amount: number | undefined | null): string {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return "0.00€";
  }
  return `${amount.toFixed(2)}€`;
}

/**
 * Formats a percentage value with 1 decimal place
 *
 * @param value - Decimal value (e.g., 0.15 for 15%)
 * @returns Formatted percentage string (e.g., "15.0%")
 * @example formatPercent(0.15) // "15.0%"
 */
export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

/**
 * Formats an ISO date string to human-readable format
 *
 * @param isoDate - ISO 8601 formatted date string
 * @returns Formatted date-time string (e.g., "10/11/2025 18:30")
 * @example formatDate("2025-10-11T18:30:00.000Z") // "10/11/2025 18:30"
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

/**
 * Formats duration in milliseconds to human-readable time format
 *
 * @param ms - Duration in milliseconds
 * @returns Formatted duration (e.g., "2.3s" or "2m 5s")
 * @example formatDuration(2345) // "2.3s"
 * @example formatDuration(125000) // "2m 5s"
 */
export function formatDuration(ms: number): string {
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
 * Generates a markdown separator
 *
 * @returns Separator string (horizontal rule with newlines)
 * @example separator() // "\n---\n"
 */
export function separator(): string {
  return "\n---\n";
}

/**
 * Generates a markdown heading
 *
 * @param text - Heading text
 * @param level - Heading level (1-4 for h1-h4), default is 1
 * @returns Formatted heading string
 * @example title("My Title", 1) // "# My Title\n"
 */
export function title(text: string, level: 1 | 2 | 3 | 4 = 1): string {
  return `${"#".repeat(level)} ${text}\n`;
}

/**
 * Generates a markdown table row
 *
 * @param cells - Row cells
 * @returns Formatted table row
 */
export function tableRow(cells: (string | number)[]): string {
  return `| ${cells.join(" | ")} |`;
}

/**
 * Generates markdown table header with optional column alignment
 *
 * @param headers - Column headers
 * @param alignments - Column alignment ("left" | "center" | "right")
 * @returns Formatted table header with separator row
 */
export function tableHeader(
  headers: string[],
  alignments?: Array<"left" | "center" | "right">
): string {
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
 * Generates complete markdown table
 *
 * @param headers - Column headers
 * @param rows - Table data rows
 * @param alignments - Column alignment
 * @returns Formatted markdown table
 */
export function table(
  headers: string[],
  rows: Array<Array<string | number>>,
  alignments?: Array<"left" | "center" | "right">
): string {
  const lines = [tableHeader(headers, alignments)];
  rows.forEach((row) => {
    lines.push(tableRow(row));
  });
  return lines.join("\n");
}

/**
 * Generates markdown bullet list
 *
 * @param items - List items
 * @returns Formatted bullet list
 */
export function bulletList(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

/**
 * Generates numbered markdown list
 *
 * @param items - List items
 * @returns Formatted numbered list
 */
export function numberedList(items: string[]): string {
  return items.map((item, i) => `${i + 1}. ${item}`).join("\n");
}

/**
 * Generates markdown blockquote
 *
 * @param text - Quote text
 * @returns Formatted blockquote
 */
export function blockquote(text: string): string {
  return `> ${text}`;
}

/**
 * Generates status badge with emoji and text
 *
 * @param type - Badge type ("success" | "warning" | "error" | "info")
 * @param text - Badge text
 * @returns Formatted status badge
 */
export function badge(
  type: "success" | "warning" | "error" | "info",
  text: string
): string {
  const emoji = {
    success: "✅",
    warning: "⚠️",
    error: "❌",
    info: "ℹ️",
  }[type];
  return `${emoji} **${text}**`;
}

/**
 * Truncates long text with ellipsis
 *
 * @param text - Text to truncate
 * @param maxLength - Maximum length including ellipsis
 * @returns Truncated text with ellipsis if needed
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

/**
 * Formats number with thousand separators
 *
 * @param num - Number to format
 * @returns Formatted number string (e.g., "1 234 567")
 * @example formatNumber(1234567) // "1 234 567"
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * Generates single statistic line
 *
 * @param label - Statistic label
 * @param value - Statistic value
 * @returns Formatted statistic line
 */
export function statLine(label: string, value: string | number): string {
  return `**${label}:** ${value}`;
}

/**
 * Generates block of statistics from key-value pairs
 *
 * @param stats - Statistics object
 * @returns Formatted statistics block
 */
export function statsBlock(stats: Record<string, string | number>): string {
  return Object.entries(stats)
    .map(([label, value]) => statLine(label, value))
    .join("\n");
}
