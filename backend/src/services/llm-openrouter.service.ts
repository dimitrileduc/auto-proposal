/**
 * Service LLM via OpenRouter avec Structured Outputs natifs
 *
 * Utilise l'API OpenRouter directement avec response_format JSON Schema
 * pour garantir des réponses valides (pas de parsing failures)
 */

export interface LLMPrediction {
  analysis: {
    frequency_pattern: string;
    detected_outliers: number[];
    seasonality_impact: "none" | "weak" | "strong";
    trend_direction: string;
  };
  baseline_quantity: number;
  recommended_quantity: number;
  confidence: "low" | "medium" | "high";
  reasoning: string;
}

export interface LLMUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface LLMPredictionResult {
  prediction: LLMPrediction;
  usage: LLMUsage;
  model: string;
  provider: string;
}

interface OrderHistoryItem {
  date: string;
  quantity: number;
}

interface LLMPredictionInput {
  productName: string;
  recentOrders: OrderHistoryItem[];
  lastYearOrders: OrderHistoryItem[];
  currentDate?: string;
}

/**
 * JSON Schema pour Structured Outputs OpenRouter
 * Suit exactement la même structure que le schema Zod précédent
 */
const predictionJsonSchema = {
  type: "object",
  properties: {
    analysis: {
      type: "object",
      properties: {
        frequency_pattern: {
          type: "string",
          description: "Pattern temporel identifié (ex: 'Commande chaque Mardi', 'Mensuel ~30j', 'Irrégulier')"
        },
        detected_outliers: {
          type: "array",
          items: { type: "number" },
          description: "Quantités identifiées comme événements exceptionnels (promotions, erreurs)"
        },
        seasonality_impact: {
          type: "string",
          enum: ["none", "weak", "strong"],
          description: "Impact de la saisonnalité N-1 sur ce produit"
        },
        trend_direction: {
          type: "string",
          description: "Direction observée (ex: 'Stable', 'Hausse +15%', 'Baisse -20%')"
        }
      },
      required: ["frequency_pattern", "detected_outliers", "seasonality_impact", "trend_direction"],
      additionalProperties: false
    },
    baseline_quantity: {
      type: "number",
      description: "Demande de fond théorique avant ajustements"
    },
    recommended_quantity: {
      type: "integer",
      description: "LA PRÉDICTION FINALE - quantité à commander (doit être >= 1)"
    },
    confidence: {
      type: "string",
      enum: ["low", "medium", "high"]
    },
    reasoning: {
      type: "string",
      description: "Synthèse du raisonnement : pourquoi cette quantité spécifique ?"
    }
  },
  required: ["analysis", "baseline_quantity", "recommended_quantity", "confidence", "reasoning"],
  additionalProperties: false
};

/**
 * Prédit la quantité à commander via OpenRouter + Claude Sonnet 4.5
 * avec Structured Outputs natifs
 */
export async function predictWithLLM(
  input: LLMPredictionInput
): Promise<LLMPredictionResult> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY not configured");
  }

  // Claude Sonnet 4.5 supporte structured outputs (pas 3.7!)
  const model = "anthropic/claude-4.5-sonnet-20250929";
  const currentDate = input.currentDate || new Date().toISOString().split("T")[0];

  // Helper pour formatter avec jour de la semaine
  const formatOrderWithWeekday = (order: { date: string; quantity: number }) => {
    const dayName = new Date(order.date).toLocaleDateString('fr-FR', { weekday: 'short' });
    return `${order.date} (${dayName}) | ${order.quantity}u`;
  };

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

Remplis d'abord l'objet "analysis" pour structurer ton raisonnement.
Ensuite seulement, déduis la "recommended_quantity" comme conclusion logique.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/dlstudio/auto-proposal",
        "X-Title": "Auto Proposal Stock Replenishment",
        // Beta header requis pour structured outputs avec Claude Sonnet 4.5
        "anthropic-beta": "structured-outputs-2025-11-13"
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        // Structured Outputs natifs OpenRouter
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "stock_prediction",
            strict: true,
            schema: predictionJsonSchema
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();

    // Parse la réponse
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("No content in OpenRouter response");
    }

    const prediction = JSON.parse(content) as LLMPrediction;

    // Extract usage
    const usage = data.usage || {};
    const promptTokens = usage.prompt_tokens || 0;
    const completionTokens = usage.completion_tokens || 0;
    const totalTokens = usage.total_tokens || promptTokens + completionTokens;

    return {
      prediction,
      usage: {
        promptTokens,
        completionTokens,
        totalTokens
      },
      model,
      provider: "openrouter"
    };
  } catch (error) {
    console.error("❌ LLM prediction failed:", error);
    throw new Error(
      `Failed to predict with LLM: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
