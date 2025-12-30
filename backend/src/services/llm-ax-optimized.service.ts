/**
 * LLM stock prediction service using ax-llm framework
 *
 * Predicts order quantities for food retail products using an LLM (via ax framework).
 * Implements the stock replenishment strategy with configurable thresholds.
 *
 * @module services/llm-ax-optimized
 */

import { ax, AxAIOpenRouter } from "@ax-llm/ax";

/**
 * Historical order entry with date and quantity
 */
interface OrderHistoryItem {
  date: string;
  quantity: number;
}

/**
 * Input for LLM stock prediction
 */
export interface LLMPredictionInput {
  /** Product name and identifier */
  productName: string;
  /** Recent orders from current year */
  recentOrders: OrderHistoryItem[];
  /** Orders from previous year for seasonal comparison */
  lastYearOrders: OrderHistoryItem[];
  /** Current date for prediction (ISO format) */
  currentDate?: string;
  /** Days threshold for replenishment risk */
  replenishmentThresholdDays: number;
}

/**
 * LLM prediction output with quantity and reasoning
 */
export interface LLMPrediction {
  /** Predicted quantity without adjustments */
  baseline_quantity: number;
  /** Final recommended quantity after adjustments */
  recommended_quantity: number;
  /** Explanation of the prediction */
  reasoning: string;
  /** Brief summary of the prediction */
  summary?: string;
}

/**
 * Token usage metrics from LLM provider
 */
export interface LLMUsage {
  /** Number of tokens in the prompt */
  promptTokens: number;
  /** Number of tokens in the completion */
  completionTokens: number;
  /** Total tokens used */
  totalTokens: number;
}

/**
 * Complete LLM prediction result with metadata
 */
export interface LLMPredictionResult {
  /** The prediction output */
  prediction: LLMPrediction;
  /** Token usage metrics */
  usage: LLMUsage;
  /** LLM model identifier */
  model: string;
  /** LLM provider name */
  provider: string;
  /** Input prompt sent to LLM */
  inputPrompt: string;
  /** Provider-specific reasoning (optional) */
  providerReasoning?: string;
}

// Configuration
const MODEL = "google/gemini-3-flash-preview";

// Ax signature - LLM prompt for stock prediction (Prompt E: Hybrid B-detection + C-quantity)
const stockPredictorSignature = `
"Expert Supply Chain B2B - Prédiction réapprovisionnement

MÉTHODE EN 2 ÉTAPES DISTINCTES:

═══════════════════════════════════════════════════════════
ÉTAPE 1 - DÉTECTION DU BESOIN
═══════════════════════════════════════════════════════════

RÈGLE PRINCIPALE: Si DOUTE sur cycle ou rotation → Prévoir commande (principe précaution B2B)
BIAIS: Mieux détecter un besoin incertain qu'une rupture manquée

CRITÈRES:
- Analyser cycle de commande et jours depuis dernière commande
- Évaluer risque rupture horizon replenishmentThresholdDays jours
- Si jours depuis dernière commande ≥ 70% du cycle moyen → RISQUE → prévoir
- Si cycle irrégulier ou difficile à déterminer → PRÉVOIR (précaution)

═══════════════════════════════════════════════════════════
ÉTAPE 2 - ESTIMATION QUANTITÉ
═══════════════════════════════════════════════════════════

RÈGLE PRINCIPALE: Privilégier la MÉDIANE des quantités historique récent

RÈGLES IMPORTANTES:
- Les pics exceptionnels (promotions, événements) ne doivent pas influencer la prévision
- Les valeurs extrêmes sont souvent des événements ponctuels
- En cas de doute entre deux quantités → choisir la plus basse
- Ne pas surestimer pour stock de sécurité

CAS PARTICULIERS:
- Rotation très faible (1-2u): Maintenir 1-2u, ne pas augmenter sans raison
- Sans historique récent: Se baser sur N-1 même période si disponible
- Rotation régulière (3-5 dernières identiques): Maintenir cette quantité
- Tendance à la baisse: Respecter la baisse

═══════════════════════════════════════════════════════════
DÉCISION FINALE
═══════════════════════════════════════════════════════════

1. Risque rupture dans les replenishmentThresholdDays prochains jours?
   - OUI ou DOUTE → passer à étape 2
   - NON clairement → quantity = 0

2. Quantité = Médiane des commandes récentes, en cas de doute → plus bas"

productName:string,
recentOrders:string,
lastYearOrders:string,
currentDate:string,
replenishmentThresholdDays:number
->
quantity:number,
reasoning:string
`;

// Singleton LLM instances for reuse
let llmInstance: AxAIOpenRouter<string> | null = null;
let predictorInstance: ReturnType<typeof ax> | null = null;
let initialized = false;

/**
 * Initializes the ax predictor with LLM provider
 *
 * Caches instances for performance - subsequent calls return cached instances.
 *
 * @returns Object containing LLM instance and predictor
 * @throws Error if OPENROUTER_API_KEY environment variable is missing
 */
function initPredictor(): { llm: AxAIOpenRouter<string>; predictor: ReturnType<typeof ax> } {
  if (llmInstance && predictorInstance && initialized) {
    return { llm: llmInstance, predictor: predictorInstance };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY environment variable is required");
  }

  llmInstance = new AxAIOpenRouter({
    apiKey,
    config: { model: MODEL, stream: false },
    options: { streamingUsage: true },
  });

  predictorInstance = ax(stockPredictorSignature);
  initialized = true;

  return { llm: llmInstance, predictor: predictorInstance };
}

/**
 * Formats order history for ax prompt
 *
 * Converts order data into readable text with dates and quantities.
 *
 * @param orders Array of orders with date and quantity
 * @returns Formatted order string for LLM prompt
 */
function formatOrders(orders: { date: string; quantity: number }[]): string {
  if (!orders || orders.length === 0) {
    return "(No orders)";
  }

  return orders
    .map((o) => {
      const date = o.date.split(" ")[0];
      const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
      return `${date} (${dayName}): ${o.quantity}u`;
    })
    .join("\n");
}

/**
 * Predicts the next order quantity using LLM with ax framework
 *
 * Analyzes order history and applies replenishment strategy to recommend
 * the optimal quantity for the next order.
 *
 * @param input LLM prediction input with product and order history
 * @returns Prediction result with quantity, reasoning, and token usage
 * @throws Error if LLM prediction fails
 */
export async function predictWithAxOptimized(
  input: LLMPredictionInput
): Promise<LLMPredictionResult> {
  const { llm, predictor } = initPredictor();

  const currentDate = input.currentDate || new Date().toISOString().split("T")[0];

  const axInput = {
    productName: input.productName,
    recentOrders: formatOrders(input.recentOrders),
    lastYearOrders: formatOrders(input.lastYearOrders),
    currentDate,
    replenishmentThresholdDays: input.replenishmentThresholdDays,
  };

  try {
    const result = await predictor.forward(llm, axInput);

    const quantity = Math.max(0, Math.round(result.quantity || 0));

    const prediction: LLMPrediction = {
      baseline_quantity: quantity,
      recommended_quantity: quantity,
      reasoning: result.reasoning || "",
      summary: result.summary || "",
    };

    // Get token usage from the LLM instance (stored after each chat call)
    // Note: stream: false is required for OpenRouter to return token usage
    const aiModelUsage = (llm as any).modelUsage;

    const llmUsage: LLMUsage = {
      promptTokens: aiModelUsage?.tokens?.promptTokens || 0,
      completionTokens: aiModelUsage?.tokens?.completionTokens || 0,
      totalTokens: aiModelUsage?.tokens?.totalTokens || 0,
    };

    return {
      prediction,
      usage: llmUsage,
      model: MODEL,
      provider: "ax-openrouter",
      inputPrompt: `[ax] ${input.productName}`,
    };
  } catch (error) {
    console.error("ax prediction failed:", error);
    throw new Error(
      `Failed to predict with ax: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

/**
 * Default export for backward compatibility with previous service
 */
export { predictWithAxOptimized as predictWithLLM };
