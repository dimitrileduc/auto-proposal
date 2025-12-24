/**
 * Service LLM via ax-llm avec prompt optimisé
 *
 * Charge les optimisations dans cet ordre:
 * 1. MiPRO (instruction + demos) si disponible
 * 2. BootstrapFewShot (demos uniquement) en fallback
 */

import { ax, AxAIOpenRouter } from "@ax-llm/ax";
import { readFileSync } from "fs";
import { join } from "path";
// Re-export des types depuis l'ancien service
export type { LLMPrediction, LLMPredictionInput, LLMPredictionResult, LLMUsage } from "./llm-openrouter.service.js";
import type { LLMPrediction, LLMPredictionInput, LLMPredictionResult, LLMUsage } from "./llm-openrouter.service.js";

// Configuration
const MODEL = "google/gemini-3-flash-preview";
// Essaie d'abord le fichier MiPRO, sinon BootstrapFewShot
const MIPRO_FILE = join(process.cwd(), "optimization-results/stock-predictor-mipro.json");
const BOOTSTRAP_FILE = join(process.cwd(), "optimization-results/stock-predictor-optimized.json");

// Signature ax - Mix instruction MiPRO + contexte métier
const stockPredictorSignature = `
"Analyse les données fournies et génère une réponse qui respecte les contraintes et directives du prompt. Assure-toi que la sortie est précise, maintient un ton cohérent, et suit les exigences de formatage en exploitant les connaissances du modèle. Inspire-toi des exemples fournis pour le raisonnement et le format de réponse.

Contexte métier: Expert Supply Chain B2B, prédiction de réapprovisionnement. Analyser le cycle de commande du client, évaluer le risque de rupture horizon 30 jours, estimer la quantité de la PROCHAINE commande (pas un cumul). L'historique récent a plus de poids, la médiane est robuste aux outliers, l'historique N-1 informe sur la saisonnalité."

productName:string "Nom du produit",
recentOrders:string "Historique récent (5 mois)",
lastYearOrders:string "Historique N-1 (saisonnalité)",
currentDate:string "Date d'analyse"
->
quantity:number "Quantité prochaine commande (0 si non probable)",
reasoning:string "1) Risque rupture? 2) Cycle et dernière commande? 3) Quantité estimée et pourquoi?"
`;

// Instance LLM (créée une seule fois)
let llmInstance: AxAIOpenRouter<string> | null = null;
let predictorInstance: ReturnType<typeof ax> | null = null;
let demosLoaded = false;

/**
 * Initialise le predictor ax avec les demos optimisés
 */
function initPredictor(): { llm: AxAIOpenRouter<string>; predictor: ReturnType<typeof ax> } {
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

  // Charger les optimisations (MiPRO prioritaire, sinon BootstrapFewShot)
  try {
    let optimizedData: any = null;
    let source = "";

    // Essayer MiPRO d'abord
    try {
      optimizedData = JSON.parse(readFileSync(MIPRO_FILE, "utf-8"));
      source = "MiPRO";
    } catch {
      // Fallback sur BootstrapFewShot
      optimizedData = JSON.parse(readFileSync(BOOTSTRAP_FILE, "utf-8"));
      source = "BootstrapFewShot";
    }

    // NE PAS charger l'instruction MiPRO (on utilise notre signature mixée)
    // Notre signature combine MiPRO + contexte métier, c'est mieux que l'instruction MiPRO seule

    // Charger les demos
    if (optimizedData.demos && optimizedData.demos.length > 0) {
      predictorInstance.setDemos(optimizedData.demos);
      const demoCount = optimizedData.demos[0]?.traces?.length || optimizedData.demos.length;
      console.log(`✅ ax: ${demoCount} demos chargés (${source})`);
    }

    demosLoaded = true;
  } catch (error) {
    console.warn("⚠️ Aucun fichier optimisé trouvé, utilisation sans demos:", error);
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
