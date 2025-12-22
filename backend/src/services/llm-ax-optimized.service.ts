/**
 * Service LLM via ax-llm avec prompt optimisé
 *
 * Utilise les 22 demos sélectionnés par BootstrapFewShot
 * pour améliorer les prédictions via few-shot learning
 */

import { ax, AxAIOpenRouter } from "@ax-llm/ax";
import { readFileSync } from "fs";
import { join } from "path";
// Re-export des types depuis l'ancien service
export type { LLMPrediction, LLMPredictionInput, LLMPredictionResult, LLMUsage } from "./llm-openrouter.service.js";
import type { LLMPrediction, LLMPredictionInput, LLMPredictionResult, LLMUsage } from "./llm-openrouter.service.js";

// Configuration
const MODEL = "google/gemini-3-flash-preview";
const OPTIMIZED_FILE = join(process.cwd(), "optimization-results/stock-predictor-optimized.json");

// Signature ax pour la prédiction - QUANTITÉ DE LA PROCHAINE COMMANDE
// Séparation : exemples pour détection, règles souples pour quantité
const stockPredictorSignature = `
"Pour déterminer s'il y aura commande dans 30j, fais confiance aux exemples fournis. Pour la QUANTITÉ: 1) Prédire UNE seule commande (pas un cumul). 2) Privilégier la médiane sur la moyenne (plus robuste aux outliers). 3) Si petites quantités (1-2u) récemment → rester conservateur."

productName:string "Nom du produit",
recentOrders:string "Historique des commandes des 3 derniers mois",
lastYearOrders:string "Historique N-1 même période",
currentDate:string "Date d'analyse YYYY-MM-DD"
->
quantity:number "Quantité de la PROCHAINE commande (0 si pas de commande dans 30j)",
reasoning:string "1) Risque rupture? 2) Cycle et dernière commande? 3) Quantité estimée et pourquoi?"
`;

// Instance LLM (créée une seule fois)
let llmInstance: AxAIOpenRouter | null = null;
let predictorInstance: ReturnType<typeof ax> | null = null;
let demosLoaded = false;

/**
 * Initialise le predictor ax avec les demos optimisés
 */
function initPredictor(): { llm: AxAIOpenRouter; predictor: ReturnType<typeof ax> } {
  if (llmInstance && predictorInstance && demosLoaded) {
    return { llm: llmInstance, predictor: predictorInstance };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY not configured");
  }

  // Créer l'instance LLM
  llmInstance = new AxAIOpenRouter({
    apiKey,
    config: { model: MODEL },
  });

  // Créer le predictor
  predictorInstance = ax(stockPredictorSignature);

  // Charger les demos optimisés
  try {
    const optimizedData = JSON.parse(readFileSync(OPTIMIZED_FILE, "utf-8"));
    if (optimizedData.demos && optimizedData.demos.length > 0) {
      predictorInstance.setDemos(optimizedData.demos);
      demosLoaded = true;
      console.log(`✅ ax: ${optimizedData.demos[0]?.traces?.length || 0} demos chargés`);
    }
  } catch (error) {
    console.warn("⚠️ Fichier optimisé non trouvé, utilisation sans demos:", error);
  }

  return { llm: llmInstance, predictor: predictorInstance };
}

/**
 * Formate les commandes pour le prompt ax
 */
function formatOrders(orders: { date: string; quantity: number }[]): string {
  if (!orders || orders.length === 0) {
    return "(Aucune commande)";
  }

  return orders
    .map((o) => {
      const date = o.date.split(" ")[0];
      const dayName = new Date(date).toLocaleDateString("fr-FR", { weekday: "short" });
      return `${date} (${dayName}): ${o.quantity}u`;
    })
    .join("\n");
}

/**
 * Prédit la quantité à commander via ax optimisé
 */
export async function predictWithAxOptimized(
  input: LLMPredictionInput
): Promise<LLMPredictionResult> {
  const { llm, predictor } = initPredictor();

  const currentDate = input.currentDate || new Date().toISOString().split("T")[0];

  // Formater les inputs pour ax
  const axInput = {
    productName: input.productName,
    recentOrders: formatOrders(input.recentOrders),
    lastYearOrders: formatOrders(input.lastYearOrders),
    currentDate,
  };

  try {
    // Appeler ax
    const result = await predictor.forward(llm, axInput);

    // Quantité de la prochaine commande (0 = pas de commande prévue)
    const quantity = Math.max(0, Math.round(result.quantity || 0));

    // Mapper vers LLMPrediction
    const prediction: LLMPrediction = {
      analysis: {
        frequency_pattern: "Analysé par ax",
        detected_outliers: [],
        seasonality_impact: "none",
        trend_direction: "stable",
      },
      baseline_quantity: quantity,
      recommended_quantity: quantity,
      confidence: "medium",
      reasoning: result.reasoning || "",
    };

    // Récupérer l'usage
    const usage = predictor.getUsage();
    const lastUsage = usage[usage.length - 1] || {};

    const llmUsage: LLMUsage = {
      promptTokens: (lastUsage as any).promptTokens || 0,
      completionTokens: (lastUsage as any).completionTokens || 0,
      totalTokens: (lastUsage as any).totalTokens || 0,
    };

    return {
      prediction,
      usage: llmUsage,
      model: MODEL,
      provider: "ax-openrouter",
      inputPrompt: `[ax optimized] ${input.productName}`,
    };
  } catch (error) {
    console.error("❌ ax prediction failed:", error);
    throw new Error(
      `Failed to predict with ax: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

/**
 * Export par défaut compatible avec l'ancien service
 */
export { predictWithAxOptimized as predictWithLLM };
