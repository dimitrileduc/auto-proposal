import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";

/**
 * Schéma de prédiction LLM (approche IRIS - raisonnement expert)
 * JSON strict avec raisonnement métier guidé
 */
const predictionSchema = z.object({
  baseline_quantity: z
    .number()
    .describe("Demande de fond estimée après analyse des données N-1"),
  outliers_detected: z
    .array(z.number())
    .describe("Quantités identifiées comme commandes exceptionnelles"),
  trend_ratio: z
    .string()
    .describe("Tendance observée entre période récente et N-1 (ex: +15%, stable, -10%)"),
  recommended_quantity: z.number().int().positive(),
  confidence: z.enum(["low", "medium", "high"]),
  reasoning: z.string().describe("Explication du raisonnement métier en 2-3 phrases"),
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

  // Construire les 2 tableaux Markdown séparés
  const recentTable = input.recentOrders.length > 0
    ? input.recentOrders.map((order) => `${order.date} | ${order.quantity}u`).join("\n")
    : "(Aucune commande récente)";

  const lastYearTable = input.lastYearOrders.length > 0
    ? input.lastYearOrders.map((order) => `${order.date} | ${order.quantity}u`).join("\n")
    : "(Aucune donnée N-1)";

  const prompt = `Tu es un expert Supply Chain Agroalimentaire B2B avec 15 ans d'expérience.

CONTEXTE MÉTIER:
Le secteur agroalimentaire B2B est caractérisé par:
- Des variations saisonnières naturelles (saisons, fêtes, rentrée scolaire)
- Des commandes ponctuelles exceptionnelles (événements, promotions)
- Des tendances graduelles de croissance ou décroissance
- Des délais de péremption qui nécessitent une gestion prudente des stocks

MISSION:
Prédire la quantité optimale de réapprovisionnement pour ${input.productName}.
L'objectif est d'éviter les ruptures tout en minimisant les surstocks.

DATE ACTUELLE: ${currentDate}

DONNÉES DISPONIBLES:

═══ RÉFÉRENCE HISTORIQUE (Année N-1) ═══
Période complète de 12 mois de l'année précédente (12-24 mois avant aujourd'hui).
Utilise ces données pour comprendre la demande de fond et la saisonnalité.

Date       | Quantité
-----------|----------
${lastYearTable}

═══ PÉRIODE RÉCENTE (3 derniers mois) ═══
Commandes récentes pour détecter les évolutions actuelles.

Date       | Quantité
-----------|----------
${recentTable}

APPROCHE RECOMMANDÉE:

1️⃣ ANALYSE DE LA DEMANDE DE FOND
   - Examine les données N-1 pour identifier la demande récurrente normale
   - Détecte les commandes exceptionnelles qui ne reflètent pas la demande habituelle
     (événements, promotions, erreurs de commande, pic saisonnier ponctuel)
   - Estime une quantité de base représentative après avoir mentalement écarté ces événements

2️⃣ DÉTECTION DES PATTERNS SAISONNIERS
   - Compare VUE RÉCENTE vs VUE N-1
   - **SI pattern annuel/mensuel TRÈS marqué** (ex: fêtes, rentrée, saisons) → utilise N-1 comme référence
   - **SI pas de pattern clair OU tendance forte récente** → privilégie VUE RÉCENTE
   - Note: En B2B agroalimentaire, des variations de ±30% sont courantes et normales

3️⃣ PRÉDICTION RÉALISTE
   - **Règle principale** : Si aucune saisonnalité claire → utilise MÉDIANE de VUE RÉCENTE
   - **Seulement si saisonnalité évidente** : ajuste baseline N-1 selon tendance récente
   - **NE PAS surestimer par précaution** : prédis la quantité la plus probable, pas la plus sûre
   - Évalue ta confiance selon la richesse et cohérence des données

RÉSULTAT ATTENDU (JSON strict):
{
  "baseline_quantity": nombre (demande de fond estimée après nettoyage mental des événements),
  "outliers_detected": [quantités identifiées comme exceptionnelles],
  "trend_ratio": "±X%" ou "stable" (tendance observée),
  "recommended_quantity": nombre entier positif (ta prédiction finale),
  "confidence": "low" | "medium" | "high" (ton niveau de confiance),
  "reasoning": "Explique ton raisonnement en 2-3 phrases : quels patterns as-tu vus, pourquoi cette quantité?"
}

NOTE IMPORTANTE:
Raisonne comme un expert métier, pas comme un algorithme mathématique.
Utilise ton jugement pour interpréter les données, pas des formules rigides.

ATTENTION: Ne surestime PAS systématiquement "par sécurité".
La prédiction doit être la PLUS PROBABLE, pas la plus prudente.
Si les données récentes montrent clairement une baisse → prédis la baisse.
L'objectif est la PRÉCISION, pas éviter les ruptures à tout prix.`;

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
