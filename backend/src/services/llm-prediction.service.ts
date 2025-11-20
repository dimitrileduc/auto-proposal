import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";

/**
 * Schéma de prédiction LLM (approche IRIS optimisée - Chain of Thought)
 * L'analyse PRÉCÈDE la conclusion pour forcer le raisonnement structuré
 */
const predictionSchema = z.object({
  // 1️⃣ ANALYSE D'ABORD (Force la réflexion avant le chiffre)
  analysis: z.object({
    frequency_pattern: z
      .string()
      .describe("Pattern temporel identifié (ex: 'Commande chaque Mardi', 'Mensuel ~30j', 'Irrégulier')"),
    detected_outliers: z
      .array(z.number())
      .describe("Quantités identifiées comme événements exceptionnels (promotions, erreurs)"),
    seasonality_impact: z
      .enum(["none", "weak", "strong"])
      .describe("Impact de la saisonnalité N-1 sur ce produit"),
    trend_direction: z
      .string()
      .describe("Direction observée (ex: 'Stable', 'Hausse +15%', 'Baisse -20%')"),
  }),

  // 2️⃣ CALCULS INTERMÉDIAIRES
  baseline_quantity: z
    .number()
    .describe("Demande de fond théorique avant ajustements"),

  // 3️⃣ CONCLUSION (Basée sur l'analyse)
  recommended_quantity: z
    .number()
    .int()
    .positive()
    .describe("LA PRÉDICTION FINALE - quantité à commander"),
  confidence: z.enum(["low", "medium", "high"]),
  reasoning: z
    .string()
    .describe("Synthèse du raisonnement : pourquoi cette quantité spécifique ?"),
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
  lastYearOrders: OrderHistoryItem[]; // Same period last year (all orders, no limit for seasonality)
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

  // Helper pour formatter avec jour de la semaine (aide détection patterns hebdomadaires)
  const formatOrderWithWeekday = (order: { date: string; quantity: number }) => {
    const dayName = new Date(order.date).toLocaleDateString('fr-FR', { weekday: 'short' });
    return `${order.date} (${dayName}) | ${order.quantity}u`;
  };

  // Construire les 2 tableaux Markdown séparés avec jours de semaine
  const recentTable = input.recentOrders.length > 0
    ? input.recentOrders.map(formatOrderWithWeekday).join("\n")
    : "(Aucune commande récente)";

  const lastYearTable = input.lastYearOrders.length > 0
    ? input.lastYearOrders.map(formatOrderWithWeekday).join("\n")
    : "(Aucune donnée N-1)";

  const currentDayName = new Date(currentDate).toLocaleDateString('fr-FR', { weekday: 'long' });

  const prompt = `Tu es un Expert Supply Chain Senior spécialisé en Agroalimentaire B2B.
Ton objectif est de prédire la prochaine quantité de commande avec la PLUS GRANDE PRÉCISION possible (minimiser le MAPE).

PRODUIT: ${input.productName}
DATE DE PRÉDICTION: ${currentDate} (${currentDayName})

<data_context>
Voici l'historique des commandes. Le format est: Date (Jour) | Quantité.
Note les jours de la semaine pour repérer les cycles hebdomadaires.

--- ANNÉE PRÉCÉDENTE (N-1) ---
Utile pour identifier la saisonnalité et les volumes de référence.
${lastYearTable}

--- 3 DERNIERS MOIS (Période Récente) ---
Utile pour détecter la tendance immédiate et le rythme actuel.
${recentTable}
</data_context>

<reasoning_guidelines>
Analyse les données étape par étape AVANT de conclure (Chain of Thought) :

1. **ANALYSE RYTHMIQUE** (Crucial pour détecter rattrapage)
   - Observe les intervalles entre commandes récentes
   - Le client commande-t-il à jour fixe (ex: chaque Mardi) ?
   - Y a-t-il un pattern hebdomadaire (Lun-Ven) ou mensuel (~30j) ?
   - Si rupture du rythme habituel → possible effet rattrapage à prévoir

2. **FILTRAGE INTELLIGENT DES OUTLIERS**
   - Isole mentalement les événements exceptionnels (promotions, erreurs)
   - Si N-1 montre un pic à cette date précise : fête récurrente ou one-shot ?
   - Ne confonds pas "hausse de tendance" avec "pic exceptionnel ponctuel"

3. **SYNTHÈSE & DÉCISION**
   - **SI pattern saisonnier fort** : Baseline N-1 × Coefficient tendance récente
   - **SI demande stable** : Moyenne pondérée (poids fort sur dernières commandes)
   - **SI rupture de tendance nette** : Privilégie la donnée la plus récente

   Règle d'Or : En agro B2B, mieux vaut être PRÉCIS que prudent.
   Ne surgonfle pas "au cas où" → vise la quantité la plus PROBABLE.
</reasoning_guidelines>

<output_format>
Remplis d'abord l'objet "analysis" pour structurer ton raisonnement.
Ensuite seulement, déduis la "recommended_quantity" comme conclusion logique.

Le JSON doit suivre exactement le schéma fourni avec :
- analysis.frequency_pattern : Pattern temporel identifié
- analysis.detected_outliers : Liste des quantités exceptionnelles
- analysis.seasonality_impact : "none", "weak" ou "strong"
- analysis.trend_direction : Direction observée
- baseline_quantity : Demande de fond théorique
- recommended_quantity : TA PRÉDICTION FINALE (entier)
- confidence : "low", "medium" ou "high"
- reasoning : Synthèse de ton raisonnement
</output_format>`;

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
