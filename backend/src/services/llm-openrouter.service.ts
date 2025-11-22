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
    day_cycle_analysis?: string; // Analyse du jour de commande habituel vs jour demandé
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
  inputPrompt: string;
  providerReasoning?: string;
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
          description: "Pattern temporel identifié (ex: 'Commande chaque vendredi', 'Cycle 30j dernier vendredi du mois')"
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
          description: "Direction observée (ex: 'Stable à 5u', 'Hausse +15%', 'Baisse progressive -20%')"
        },
        day_cycle_analysis: {
          type: "string",
          description: "Analyse du jour de commande habituel vs jour demandé (ex: 'Date demandée: samedi, jour habituel: vendredi')"
        }
      },
      required: ["frequency_pattern", "detected_outliers", "seasonality_impact", "trend_direction"],
      additionalProperties: true
    },
    baseline_quantity: {
      type: "number",
      description: "Demande de fond théorique avant ajustements (peut être décimale)"
    },
    recommended_quantity: {
      type: "integer",
      description: "LA PRÉDICTION FINALE - quantité à commander (doit être un entier >= 1)"
    },
    confidence: {
      type: "string",
      enum: ["low", "medium", "high"],
      description: "Niveau de confiance basé sur la qualité/quantité des données et la régularité des patterns"
    },
    reasoning: {
      type: "string",
      description: "Synthèse du raisonnement qui justifie cette quantité spécifique, y compris gestion jour hors cycle"
    }
  },
  required: ["analysis", "baseline_quantity", "recommended_quantity", "confidence", "reasoning"],
  additionalProperties: false
};

/**
 * Prédit la quantité à commander via OpenRouter + Moonshot AI Kimi K2 Thinking
 * avec Structured Outputs natifs
 */
export async function predictWithLLM(
  input: LLMPredictionInput
): Promise<LLMPredictionResult> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY not configured");
  }

  // Moonshot AI Kimi K2 Thinking supporte structured outputs
  const model = "moonshotai/kimi-k2-thinking";
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
Ton objectif est de prédire la prochaine quantité de commande avec la PLUS GRANDE PRÉCISION possible (minimiser le MAPE) pour le ${currentDate} (${currentDayName}).

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

<jour_cycle_guidelines>
**RÈGLES ESSENTIELLES POUR JOURS HORS CYCLE**:
1) Les clients B2B commandent généralement les jours ouvrés (lundi-vendredi)
2) Si la date de prédiction (${currentDayName}) ne correspond PAS à leur jour habituel de commande:
   - N'utilise JAMAIS 0, même si aucune commande n'est attendue ce jour précis
   - Prédit plutôt la quantité de la PROCHAINE commande probable (celle qui suivra)
   - Exemple: Si le client commande chaque vendredi, mais qu'on demande pour un samedi → prédit la quantité pour le VENDREDI qui suit
3) Surtout, ne confonds pas "prédire 0 parce que jour inhabituel" (INTERDIT) avec "prédire 0 si le client a arrêté ce produit" (autorisé)
</jour_cycle_guidelines>

<reasoning_guidelines>
Analyse les données étape par étape AVANT de conclure (Chain of Thought) :

1. **ANALYSE RYTHMIQUE** (Déterminant pour la précision)
   - Calcule les intervalles précis entre commandes (7j, 14j, 30j?)
   - Identifie le jour habituel (lundi? mardi? vendredi?)
   - Distingue pattern hebdomadaire vs mensuel (~30j)
   - ALERTE: Si la date de prédiction est un autre jour que d'habitude → utilise les règles spéciales

2. **FILTRAGE INTELLIGENT DES OUTLIERS**
   - Les commandes 2-3× supérieures à la moyenne sont souvent des outliers ponctuels
   - Un "pic" N-1 qui n'est pas répété récemment est probablement un événement exceptionnel
   - Compare pour isoler: volumes stables vs pics isolés vs augmentations progressives
   - Plus un point s'écarte de la tendance générale, plus il faut le pondérer faiblement

3. **SYNTHÈSE & DÉCISION**
   - **Pour données volumineuses & régulières** (>5 points):
     → Moyenne pondérée récente (60-70% dernière, 30-40% historique)
   - **Pour données limitées** (2-3 points):
     → Privilégie dernière valeur si cohérente avec la tendance
   - **Avec données N-1 pertinentes**:
     → Baseline N-1 × coefficient tendance actuelle
   - **Pour rupture de tendance nette**:
     → Dernière valeur > moyenne historique

   Règle d'Or : En agro B2B, privilégie PRÉCISION sur prudence.
   Ne surgonfle pas "au cas où" → vise la quantité la plus PROBABLE.
</reasoning_guidelines>

<exemples_raisonnement>
EXEMPLE 1 - Jour hors cycle:
- Historique: Commandes le vendredi (5u, 5u, 5u)
- Date de prédiction: Samedi
- CORRECT: "Le samedi est hors cycle habituel (vendredi). La prochaine commande sera vendredi prochain, probablement 5u comme les 3 dernières."
- INCORRECT: "La prédiction tombe un samedi, donc 0u car hors cycle."

EXEMPLE 2 - Outlier vs tendance:
- Historique: [10u, 12u, 40u, 11u, 13u]
- CORRECT: "Le pic de 40u est isolé entre des valeurs stables (10-13u). C'est un outlier probable (promotion/erreur)."
- INCORRECT: "Les valeurs oscillent entre 10u et 40u, je prévois donc 25u (moyenne)."

EXEMPLE 3 - Données éparses:
- Données N-1: [8u en mai 2024]
- Données récentes: [5u en mai 2025, 5u en juin 2025]
- CORRECT: "Bien que N-1 montre 8u, les données récentes sont stables à 5u. Je privilégie la tendance récente avec 5u."
- INCORRECT: "Avec moyenne entre récent et N-1: (8+5+5)/3 = 6u"
</exemples_raisonnement>

Remplis d'abord l'objet "analysis" pour structurer ton raisonnement.
Ensuite seulement, déduis la "recommended_quantity" comme conclusion logique.`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/dlstudio/auto-proposal",
        "X-Title": "Auto Proposal Stock Replenishment"
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        include_reasoning: true,
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
    const choice = data.choices?.[0];
    const content = choice?.message?.content;
    const providerReasoning = choice?.message?.reasoning; // Capture reasoning if available

    if (!content) {
      throw new Error("No content in OpenRouter response");
    }

    let prediction: LLMPrediction;
    try {
      // Nettoyage du contenu avant parsing (parfois le modèle ajoute du texte autour du JSON)
      // On nettoie aussi les caractères de contrôle potentiellement problématiques (sauf \n \r \t)
      const jsonContent = content
        .replace(/```json\n?|\n?```/g, '')
        .trim();
      
      prediction = JSON.parse(jsonContent) as LLMPrediction;
    } catch (parseError) {
      console.error("❌ JSON Parse Error. Raw content:", content);
      // Tentative de nettoyage plus agressif si le premier échec
      try {
        const sanitized = content.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
        prediction = JSON.parse(sanitized) as LLMPrediction;
      } catch (e) {
        throw new Error(`Failed to parse JSON response: ${parseError instanceof Error ? parseError.message : String(parseError)}`);
      }
    }

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
      provider: "openrouter",
      inputPrompt: prompt,
      providerReasoning
    };
  } catch (error) {
    console.error("❌ LLM prediction failed:", error);
    throw new Error(
      `Failed to predict with LLM: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}
