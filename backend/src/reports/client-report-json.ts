/**
 * Generates JSON business report structure for client proposals
 *
 * Report Structure (2 parts):
 * 1. Raw Phases: stockAnalysis, proposalFinal, activity for technical traceability
 * 2. Business View: products separated into base/optional for PO processing
 *
 * @module reports/client-report-json
 */

import type { ClientProposalResult } from "./types";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";
import { describeOutcome } from "../features/suggestion-activity/outcome.utils";
import { activityNoteToMarkdown, isOptionalProduct } from "../features/suggestion-activity/activity-note.utils";
import type { ProductStockStatus } from "../features/stock-replenishment/stock-replenishment.types";

/**
 * Enriched product data with complete business information
 *
 * Combines stock analysis, pricing, and proposal data into a unified
 * business-ready product representation.
 */
export interface BusinessProduct {
  /** Product identifier in Odoo */
  product_id: number;
  /** Product display name */
  product_name: string;
  /** Unit of measure (e.g., "Units", "kg") */
  product_uom: string;

  /** Final recommended order quantity */
  quantity_recommended: number;
  /** Source of quantity prediction: LLM-based or median fallback */
  quantity_source: "llm" | "median-fallback";
  /** Current unit price from Odoo */
  price_unit: number;
  /** Total amount for ordered quantity (quantity_recommended * price_unit) */
  subtotal: number;

  /** Units added to reach global MOQ (0 if no adjustment) */
  moq_adjustment?: number;

  /** Prediction confidence level based on order history */
  confidence: "low" | "medium" | "high";
  /** Number of historical orders (for confidence classification) */
  order_count: number;

  /** LLM prediction details (if available) */
  llm_prediction?: {
    /** Detailed reasoning for the prediction */
    reasoning: string;
    /** Short justification suitable for Odoo display */
    summary?: string;
    /** Baseline quantity before adjustments */
    baseline_quantity: number;
    /** LLM model name used for prediction */
    model?: string;
    /** LLM provider (e.g., "anthropic", "openai") */
    provider?: string;
  };

  /** Recent orders for this product (last 5 orders) */
  recent_orders: Array<{
    /** Order date (ISO 8601) */
    date: string;
    /** Ordered quantity */
    quantity: number;
    /** Unit price at time of order */
    price_unit: number;
  }>;
}

/**
 * Complete JSON report structure for client proposal
 *
 * Combines raw phase data with business-organized product information.
 * Used for markdown report generation and data export.
 */
export interface ClientReportJSON {
  /** Report metadata */
  meta: {
    /** Report format version */
    version: "1.0.0";
    /** Report generation timestamp (ISO 8601) */
    generatedAt: string;
  };

  /** Client information */
  client: {
    /** Client ID from Odoo */
    id: number;
    /** Client display name */
    name: string;
    /** Client email (optional) */
    email?: string;
  };

  /** Workflow configuration used for analysis */
  config: {
    /** Reference end date for stock analysis */
    analysisEndDate: string;
    /** Replenishment threshold in days */
    replenishmentThreshold: number;
    /** Minimum order quantity threshold in currency */
    moqMinimum: number;
    /** Test mode: no write in Odoo */
    skipOdooWrite: boolean;
  };

  /** Raw processing phases for technical traceability */
  phases: {
    /** Stock analysis phase results */
    stockAnalysis: {
      /** Count of products with replenishment risk */
      products_count: number;
      /** LLM API usage statistics (if available) */
      llm_usage?: {
        /** Number of LLM API calls */
        calls: number;
        /** Total tokens used in LLM calls */
        totalTokens: number;
      };
    };
    /** Final proposal phase results */
    proposalFinal: {
      /** Count of products after filtering and pricing */
      products_count: number;
      /** Total proposal amount */
      total_amount: number;
      /** Whether MOQ adjustment was applied */
      moq_adjustment_applied: boolean;
      /** MOQ adjustment details (if applied) */
      adjustment_details?: {
        /** Original total before adjustment */
        original_total: number;
        /** Amount added to meet MOQ */
        gap_filled: number;
      };
    };
    /** "Suggestion commande" step (phase 3) */
    activity?: {
      /** created, would_create, skipped or error, with its details */
      outcome: SuggestionActivityOutcome;
      /** French label of the outcome */
      label: string;
      /** Activity description, as simple markdown */
      description?: string;
    };
  };

  /** Business-organized product view */
  products: {
    /** Core products (medium/high confidence) */
    base: BusinessProduct[];
    /** Optional products (low confidence) */
    optional: BusinessProduct[];
  };

  /** Executive summary statistics */
  summary: {
    /** Count of core products */
    base_products_count: number;
    /** Count of optional products */
    optional_products_count: number;
    /** Total amount for core products */
    base_amount: number;
    /** Total amount for optional products */
    optional_amount: number;
    /** Combined total amount */
    total_amount: number;
    /** Whether MOQ adjustment was applied */
    moq_adjusted: boolean;
    /** Amount added to meet MOQ (if applied) */
    moq_gap?: number;
  };

  /** Total execution time in milliseconds */
  execution_time_ms: number;
}

/**
 * Generates business JSON report structure from client proposal result
 *
 * Transforms raw workflow results into a structured JSON report combining:
 * - Raw phase data for technical traceability
 * - Business-organized products (base vs optional)
 * - Executive summary statistics
 *
 * @param result - Client proposal workflow result
 * @param config - Report configuration (analysisEndDate, thresholds, flags)
 * @returns Structured JSON report ready for markdown generation or export
 */
export function generateClientReportJSON(
  result: ClientProposalResult,
  config: {
    analysisEndDate?: string;
    replenishmentThreshold: number;
    moqMinimum: number;
    skipOdooWrite: boolean;
  }
): ClientReportJSON {
  const now = new Date().toISOString();

  const stockAnalysis = result.phases.stockAnalysis!;
  const proposalFinal = result.phases.proposalFinal!;

  const stockProductsMap = new Map(
    stockAnalysis.products.map((p) => [p.product_id, p])
  );

  const businessProducts: BusinessProduct[] = proposalFinal.products.map((proposalProduct) => {
    const stockProduct = stockProductsMap.get(proposalProduct.product_id)!;

    const orderCount = stockProduct.calculation_metadata.order_count;
    const confidence: "low" | "medium" | "high" =
      orderCount >= 5 ? "high" : orderCount >= 2 ? "medium" : "low";

    const recentOrders = stockProduct.order_history
      .slice(-5)
      .map((order) => ({
        date: order.date_order,
        quantity: order.quantity,
        price_unit: order.price_unit,
      }));

    return {
      product_id: proposalProduct.product_id,
      product_name: proposalProduct.product_name,
      product_uom: proposalProduct.product_uom[1],
      quantity_recommended: proposalProduct.quantity_to_order,
      quantity_source: proposalProduct.quantity_source,
      price_unit: proposalProduct.current_price_unit,
      subtotal: proposalProduct.subtotal,
      moq_adjustment: proposalProduct.moq_adjustment,
      confidence,
      order_count: orderCount,
      llm_prediction: stockProduct.llm_prediction
        ? {
            reasoning: stockProduct.llm_prediction.reasoning,
            summary: stockProduct.llm_prediction.summary,
            baseline_quantity: stockProduct.llm_prediction.baseline_quantity,
            model: stockProduct.llm_prediction.model,
            provider: stockProduct.llm_prediction.provider,
          }
        : undefined,
      recent_orders: recentOrders,
    };
  });

  const baseProducts = businessProducts.filter((p) => !isOptionalProduct(p.confidence));
  const optionalProducts = businessProducts.filter((p) => isOptionalProduct(p.confidence));

  const baseAmount = baseProducts.reduce((sum, p) => sum + p.subtotal, 0);
  const optionalAmount = optionalProducts.reduce((sum, p) => sum + p.subtotal, 0);
  return {
    meta: {
      version: "1.0.0",
      generatedAt: now,
    },
    client: {
      id: result.clientId,
      name: result.clientName,
      email: result.clientEmail,
    },
    config: {
      analysisEndDate: config.analysisEndDate || "unknown",
      replenishmentThreshold: config.replenishmentThreshold,
      moqMinimum: config.moqMinimum,
      skipOdooWrite: config.skipOdooWrite,
    },
    phases: {
      stockAnalysis: {
        products_count: stockAnalysis.products.length,
        llm_usage: stockAnalysis.llm_usage,
      },
      proposalFinal: {
        products_count: proposalFinal.products.length,
        total_amount: proposalFinal.total_amount,
        moq_adjustment_applied: proposalFinal.moq_adjustment_applied,
        adjustment_details: proposalFinal.adjustment_details,
      },
      activity: result.outcome
        ? {
            outcome: result.outcome,
            label: describeOutcome(result.outcome),
            description: result.activityNote ? activityNoteToMarkdown(result.activityNote) : undefined,
          }
        : undefined,
    },
    products: {
      base: baseProducts,
      optional: optionalProducts,
    },
    summary: {
      base_products_count: baseProducts.length,
      optional_products_count: optionalProducts.length,
      base_amount: baseAmount,
      optional_amount: optionalAmount,
      total_amount: proposalFinal.total_amount,
      moq_adjusted: proposalFinal.moq_adjustment_applied,
      moq_gap: proposalFinal.adjustment_details?.gap_filled,
    },
    execution_time_ms: result.executionTime || 0,
  };
}
