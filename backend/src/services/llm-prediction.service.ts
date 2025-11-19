import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";

/**
 * Schéma de prédiction LLM
 */
const predictionSchema = z.object({
  recommended_quantity: z.number().int().positive(),
  confidence: z.enum(["low", "medium", "high"]),
  reasoning: z.string().describe("Raisonnement complet étape par étape"),
  temporal_analysis: z
    .string()
    .describe("Analyse des intervalles entre commandes"),
  quantity_analysis: z.string().describe("Analyse des quantités commandées"),
  trend_detected: z
    .boolean()
    .describe("Y a-t-il une tendance claire ou juste des variations normales?"),
});

export type LLMPrediction = z.infer<typeof predictionSchema>;

export interface LLMUsage {
  promptTokens: number; // AI SDK calls this inputTokens
  completionTokens: number; // AI SDK calls this outputTokens
  totalTokens: number;
  costUSD: number;
}

export interface LLMPredictionResult {
  prediction: LLMPrediction;
  usage: LLMUsage;
}

interface OrderHistoryItem {
  date: string; // Format: YYYY-MM-DD
  quantity: number;
}

interface LLMPredictionInput {
  productName: string;
  orderHistory: OrderHistoryItem[];
  currentDate?: string; // Date actuelle (défaut: aujourd'hui)
}

/**
 * Prédit la quantité à commander en utilisant Claude 3.5 Sonnet
 *
 * Inspiré de l'article "Forecasting Shipments with LLMs" (IRIS by Argon & Co)
 * Approche: Donner UNIQUEMENT les données brutes, laisser le LLM déduire tout le reste
 *
 * @param input Historique des commandes du produit
 * @returns Prédiction LLM avec quantité recommandée et raisonnement
 */
export async function predictWithLLM(
  input: LLMPredictionInput
): Promise<LLMPredictionResult> {
  const currentDate =
    input.currentDate || new Date().toISOString().split("T")[0];

  // Construire le tableau Markdown de l'historique (du plus récent au plus ancien)
  const historyTable = input.orderHistory
    .map((order) => `${order.date} | ${order.quantity}u`)
    .join("\n");

  const prompt = `Tu es un expert Supply Chain B2B.

HISTORIQUE DES COMMANDES:

Date       | Quantité
-----------|----------
${historyTable}

Produit: ${input.productName}
Date actuelle: ${currentDate}

Tâche: Recommander la quantité pour la prochaine commande.

Raisonne étape par étape:
1. Analyse les intervalles entre commandes (régulier ou erratique?)
2. Analyse les quantités (stable, tendance, ou variations normales?)
3. Recommande une quantité CONSERVATIVE basée sur l'historique

Note: En B2B, des variations de ±30% sont normales (stock safety, achats groupés, promotions).`;

  try {
    const { object, usage } = await generateObject({
      model: anthropic("claude-3-5-haiku-20241022"),
      schema: predictionSchema,
      prompt,
    });

    console.log("🔍 Raw usage object from AI SDK:", JSON.stringify(usage, null, 2));

    // Calcul du coût (Claude 3.5 Haiku pricing - 2025)
    // Source: https://pricepertoken.com/pricing-page/model/anthropic-claude-3.5-haiku
    const inputTokens = usage.inputTokens ?? 0;
    const outputTokens = usage.outputTokens ?? 0;
    const totalTokens = usage.totalTokens ?? inputTokens + outputTokens;

    const inputCostUSD = (inputTokens / 1_000_000) * 0.80; // $0.80/1M tokens
    const outputCostUSD = (outputTokens / 1_000_000) * 4.00; // $4.00/1M tokens
    const totalCostUSD = inputCostUSD + outputCostUSD;

    return {
      prediction: object,
      usage: {
        promptTokens: inputTokens,
        completionTokens: outputTokens,
        totalTokens: totalTokens,
        costUSD: totalCostUSD,
      },
    };
  } catch (error) {
    console.error("LLM prediction failed:", error);
    throw new Error(
      `Failed to predict with LLM: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
