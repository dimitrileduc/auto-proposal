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
  model: string; // Model name for debugging/tracking
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
 * Prédit la quantité à commander en utilisant Claude Sonnet 4.5
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
  const MODEL_NAME = "claude-sonnet-4-5-20250929";

  const currentDate =
    input.currentDate || new Date().toISOString().split("T")[0];

  // Construire le tableau Markdown de l'historique (du plus récent au plus ancien)
  const historyTable = input.orderHistory
    .map((order) => `${order.date} | ${order.quantity}u`)
    .join("\n");

  const prompt = `Tu es un expert Senior en Supply Chain Agroalimentaire (B2B).
Ton objectif est de prédire la quantité optimale de réapprovisionnement pour éviter la rupture sans sur-stocker.

CONTEXTE PRODUIT:
- Nom: ${input.productName}
- Date actuelle: ${currentDate}
- Secteur: Agroalimentaire B2B (saisonnalité forte, promotions fréquentes)

HISTORIQUE DES COMMANDES (du plus récent au plus ancien):

Date       | Quantité
-----------|----------
${historyTable}

TA MISSION (Chain of Thought):

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
Identifie les commandes anormales qui ressemblent à des événements ponctuels:
- Promotions (quantités > 2x la moyenne)
- Stockage préventif (gros pic isolé)
- Corrections de stock
→ Ignore ces outliers pour estimer la "demande de fond réelle"

ÉTAPE 2: SAISONNALITÉ
Analyse si le produit montre des variations saisonnières:
- Y a-t-il des pics récurrents à certaines périodes? (été, hiver, fêtes)
- Sommes-nous actuellement en période haute ou basse?
→ Ajuste ta prédiction selon la période actuelle

ÉTAPE 3: TENDANCE RÉCENTE
Compare les 4 dernières commandes vs les précédentes:
- Volume en hausse, stable, ou en baisse?
- Fréquence de commande en accélération ou ralentissement?
→ Applique un coefficient de tendance (+X%, stable, -X%)

ÉTAPE 4: RECOMMANDATION FINALE
Synthétise les 3 analyses pour recommander une quantité:
- Base: Demande de fond (post-nettoyage)
- Ajustement saisonnier: +/- selon période
- Ajustement tendance: +/- selon évolution récente
- Sécurité: Reste CONSERVATEUR (mieux vaut sous-estimer que sur-stocker)

Note: Variations de ±30% sont normales en B2B (achats groupés, sécurité stock).`;

  try {
    const { object, usage } = await generateObject({
      model: anthropic(MODEL_NAME),
      schema: predictionSchema,
      prompt,
    });

    console.log("🔍 Raw usage object from AI SDK:", JSON.stringify(usage, null, 2));

    // Calcul du coût (Claude Sonnet 4.5 pricing - 2025)
    // Source: https://www.anthropic.com/pricing
    const inputTokens = usage.inputTokens ?? 0;
    const outputTokens = usage.outputTokens ?? 0;
    const totalTokens = usage.totalTokens ?? inputTokens + outputTokens;

    const inputCostUSD = (inputTokens / 1_000_000) * 3.00; // $3.00/1M tokens
    const outputCostUSD = (outputTokens / 1_000_000) * 15.00; // $15.00/1M tokens
    const totalCostUSD = inputCostUSD + outputCostUSD;

    return {
      prediction: object,
      usage: {
        promptTokens: inputTokens,
        completionTokens: outputTokens,
        totalTokens: totalTokens,
        costUSD: totalCostUSD,
      },
      model: MODEL_NAME,
    };
  } catch (error) {
    console.error("LLM prediction failed:", error);
    throw new Error(
      `Failed to predict with LLM: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
