/**
 * Description of the "Suggestion commande" activity (FR-007 to FR-010)
 *
 * Pure functions: testable without Odoo nor AI.
 *
 * @module features/suggestion-activity/activity-note
 */
import type { ProductWithCurrentPrice } from "../proposal-preparation/proposal-preparation.types";
import { formatDateFr, odooDatetimeToParisDate } from "../../utils/date.utils";

/**
 * Suggested product as shown in the description
 */
export interface NoteProduct {
  name: string;
  /** Whole suggested quantity */
  quantity: number;
  /** Sales unit, e.g. "TU6" */
  uom: string;
  /** Last order of this product by the client, "YYYY-MM-DD" (Paris), null if unknown */
  lastOrderDate: string | null;
}

/**
 * Content of the description
 */
export interface ActivityNoteInput {
  /** Last confirmed order of the client "YYYY-MM-DD", null if none */
  lastOrderDate: string | null;
  /** Usual products (confidence other than low) */
  usual: NoteProduct[];
  /** Optional products (low confidence) */
  optional: NoteProduct[];
}

/**
 * Optional product: a single past order (low confidence). Same rule as the former quote options.
 */
export function isOptionalProduct(confidence: "low" | "medium" | "high" | null): boolean {
  return confidence === "low";
}

/**
 * Splits the suggested products between usual and optional
 *
 * Same rule as the former quote: low confidence (a single past order) → optional,
 * otherwise usual. The last order date comes from the history used for the suggestion.
 *
 * @param products - Final proposal products
 * @returns Usual and optional products, in the proposal order
 */
export function splitProducts(products: ProductWithCurrentPrice[]): {
  usual: NoteProduct[];
  optional: NoteProduct[];
} {
  const usual: NoteProduct[] = [];
  const optional: NoteProduct[] = [];

  for (const product of products) {
    const noteProduct: NoteProduct = {
      name: product.product_name,
      quantity: Math.round(product.quantity_to_order),
      uom: product.product_uom[1],
      lastOrderDate: lastOrderDateOf(product),
    };

    if (isOptionalProduct(product.calculation_metadata.confidence)) {
      optional.push(noteProduct);
    } else {
      usual.push(noteProduct);
    }
  }

  return { usual, optional };
}

/**
 * Builds the HTML description of the activity
 *
 * Order: last order date, usual products, optional products. An empty list is omitted
 * together with its sentence.
 *
 * @param input - Last order date and products
 * @param labels - Sentences introducing each list
 * @returns HTML for mail.activity.note
 */
export function buildActivityNote(
  input: ActivityNoteInput,
  labels: { introUsual: string; introOptional: string }
): string {
  const lastOrder = input.lastOrderDate ? formatDateFr(input.lastOrderDate) : "aucune commande confirmée";
  const parts = [`<p>Dernière commande : ${lastOrder}</p>`];

  if (input.usual.length > 0) {
    parts.push(renderList(labels.introUsual, input.usual));
  }

  if (input.optional.length > 0) {
    parts.push(renderList(labels.introOptional, input.optional));
  }

  return parts.join("");
}

/**
 * Converts the HTML description into simple markdown for the client report
 *
 * @param html - Output of buildActivityNote
 * @returns Paragraphs, and "- " for list items
 */
export function activityNoteToMarkdown(html: string): string {
  return html
    .replace(/<p>(.*?)<\/p>/g, "$1\n\n")
    .replace(/<ul>/g, "")
    .replace(/<\/ul>/g, "\n")
    .replace(/<li>(.*?)<\/li>/g, "- $1\n")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();
}

function renderList(intro: string, products: NoteProduct[]): string {
  const items = products.map((product) => `<li>${renderProduct(product)}</li>`).join("");
  return `<p>${escapeHtml(intro)}</p><ul>${items}</ul>`;
}

function renderProduct(product: NoteProduct): string {
  const text = `${product.name} — ${product.quantity} ${product.uom}`;
  const lastOrder = product.lastOrderDate ? ` — dernière commande : ${formatDateFr(product.lastOrderDate)}` : "";
  return escapeHtml(text) + lastOrder;
}

function lastOrderDateOf(product: ProductWithCurrentPrice): string | null {
  if (product.order_history.length === 0) {
    return null;
  }

  const latest = product.order_history.reduce((max, order) =>
    order.date_order > max.date_order ? order : max
  );
  return odooDatetimeToParisDate(latest.date_order);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
