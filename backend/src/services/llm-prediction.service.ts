import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";

/**
 * Schéma de prédiction LLM (approche IRIS structured)
 * JSON strict avec étapes explicites de raisonnement
 */
const predictionSchema = z.object({
  baseline_quantity: z
    .number()
    .describe("Médiane année N-1 après nettoyage des outliers"),
  outliers_detected: z
    .array(z.number())
    .describe("Quantités identifiées comme outliers (> 2x médiane)"),
  trend_ratio: z
    .string()
    .describe("Ratio de tendance observé (ex: +15%, stable, -10%)"),
  recommended_quantity: z.number().int().positive(),
  confidence: z.enum(["low", "medium", "high"]),
  reasoning: z.string().describe("Résumé court du raisonnement (2-3 phrases)"),
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
  recentOrders: OrderHistoryItem[]; // Last 3 months (max 5 orders)
  lastYearOrders: OrderHistoryItem[]; // Same period last year (max 5 orders)
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

  // Construire les 2 tableaux Markdown séparés
  const recentTable = input.recentOrders.length > 0
    ? input.recentOrders.map((order) => `${order.date} | ${order.quantity}u`).join("\n")
    : "(Aucune commande récente)";

  const lastYearTable = input.lastYearOrders.length > 0
    ? input.lastYearOrders.map((order) => `${order.date} | ${order.quantity}u`).join("\n")
    : "(Aucune donnée N-1)";

  const prompt = `Tu es un expert Supply Chain Agroalimentaire B2B.
MISSION: Prédire la quantité optimale de réapprovisionnement.

PRODUIT: ${input.productName}
DATE ACTUELLE: ${currentDate}

DONNÉES (2 VUES):

═══ VUE 1: RÉFÉRENCE (Même période année N-1) ═══
Utilise ceci pour estimer la "demande de fond normale".

Date       | Quantité
-----------|----------
${lastYearTable}

═══ VUE 2: TENDANCE ACTUELLE (3 derniers mois) ═══
Utilise ceci pour détecter les changements récents.

Date       | Quantité
-----------|----------
${recentTable}

ÉTAPES (OBLIGATOIRES):

1️⃣ DE-EVENTING
   Identifie les outliers dans VUE 1 en utilisant le critère mathématique:
   → Outlier = quantité > 2 × médiane(VUE 1)
   → Calcule la médiane SANS ces outliers = "baseline_quantity"

2️⃣ TENDANCE
   Compare VUE 2 vs VUE 1 (même période):
   → Si VUE 2 est vide, trend_ratio = "stable"
   → Sinon, calcule le ratio moyen (ex: +15%, stable, -10%)

3️⃣ PROJECTION
   Applique la formule:
   → recommended_quantity = baseline_quantity × (1 + trend_ratio)
   → Ajuste selon saisonnalité actuelle si applicable
   → Reste CONSERVATEUR (variations ±30% normales en B2B)

RÉSULTAT (JSON strict):
{
  "baseline_quantity": nombre (médiane N-1 après de-eventing),
  "outliers_detected": [liste des quantités outliers],
  "trend_ratio": "±X%" ou "stable",
  "recommended_quantity": nombre entier positif,
  "confidence": "low" | "medium" | "high",
  "reasoning": "résumé court 2-3 phrases"
}`;

  // Log prompt pour debug
  console.log(`\n🔍 LLM Prompt pour ${input.productName}:`);
  console.log(`Recent orders (${input.recentOrders.length}):`, JSON.stringify(input.recentOrders));
  console.log(`Last year orders (${input.lastYearOrders.length}):`, JSON.stringify(input.lastYearOrders));
  console.log(`\nPrompt complet:\n${prompt}\n`);

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
