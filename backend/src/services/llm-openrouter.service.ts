/**
 * Service LLM via OpenRouter avec Structured Outputs natifs
 *
 * Utilise l'API OpenRouter directement avec response_format JSON Schema
 * pour garantir des réponses valides (pas de parsing failures)
 */

// Configuration - facile à changer
const MODEL = "google/gemini-3-flash-preview";
// Autres options:
// - "anthropic/claude-haiku-4.5" ($1/M input, $5/M output)
// - "anthropic/claude-sonnet-4.5" ($3/M input, $15/M output)
// - "anthropic/claude-opus-4.5" ($15/M input, $75/M output)
// - "moonshotai/kimi-k2-thinking" ($0.60/M input, $2.50/M output)
// - "google/gemini-3-flash-preview" ($0.50/M input, $3.00/M output)
// - "openai/gpt-4o-mini"

// Type de prompt à utiliser
const USE_BIG_PROMPT = false;  // true = avec jour_cycle_guidelines et exemples, false = simple

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
      minimum: 0,
      description: "LA PRÉDICTION FINALE - quantité à commander (0 si pas de besoin)"
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

  // Sélection du prompt selon la configuration
  const prompt = USE_BIG_PROMPT
    ? // PROMPT COMPLET (avec jour_cycle_guidelines et exemples)
    `Tu es un Expert Supply Chain Senior spécialisé en Agroalimentaire B2B.
Ton objectif est de prédire SI le client va commander ce produit dans les 30 PROCHAINS JOURS (du ${currentDate} au +30j) ET si oui, quelle quantité pour LA PROCHAINE COMMANDE UNIQUEMENT.

PRODUIT: ${input.productName}
DATE ACTUELLE: ${currentDate} (${currentDayName})
PÉRIODE D'ANALYSE: Les 30 prochains jours à partir d'aujourd'hui

⚠️ RÈGLE CRITIQUE: Tu dois prédire la quantité de LA PROCHAINE COMMANDE SEULEMENT.
NE JAMAIS cumuler plusieurs commandes même si le cycle suggère 2+ commandes dans les 30j.
Exemple: Si cycle = 14j et 2 commandes prévues dans 30j → retourne la quantité d'UNE SEULE commande, pas le total des deux !

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
     → Volume N-1 × coefficient tendance actuelle
   - **Pour rupture de tendance nette**:
     → Dernière valeur > moyenne historique

   Règle d'Or : En agro B2B, privilégie PRÉCISION sur prudence.
   Ne surgonfle pas "au cas où" → vise la quantité la plus PROBABLE.

   IMPORTANT - RETOURNER 0:
   Tu DOIS retourner recommended_quantity = 0 si tu prédis PAS de commande dans les 30 prochains jours :
   - Dernière commande très récente (ex: il y a 5j) + cycle habituel > 30j
   - Pattern montre que prochaine commande sera après 30j (ex: commande mensuelle, on est début de mois)
   - Stock actuel couvre largement plus de 30j selon la consommation
   - Produit en déclin/arrêté (pas commandé depuis longtemps)

   RETOURNER 0 = "Pas de commande prévue dans les 30 prochains jours"
   RETOURNER >0 = "Commande prévue dans les 30j, voici la quantité probable"
</reasoning_guidelines>

<exemples_raisonnement>
EXEMPLE 1 - Commande récente, cycle > 30j:
- Historique: Commandes tous les 45j environ (300u, 300u, 300u)
- Dernière commande: Il y a 10 jours
- ANALYSE: 10j + 45j cycle = 55j jusqu'à prochaine commande
- CORRECT: "Prochaine commande prévue dans ~35j (>30j) → retourner 0"
- INCORRECT: "Le produit est commandé régulièrement → retourner 300u"

EXEMPLE 2 - Outlier vs tendance:
- Historique: [10u, 12u, 40u, 11u, 13u]
- CORRECT: "Le pic de 40u est isolé entre des valeurs stables (10-13u). C'est un outlier probable (promotion/erreur)."
- INCORRECT: "Les valeurs oscillent entre 10u et 40u, je prévois donc 25u (moyenne)."

EXEMPLE 3 - Commande imminente, cycle court:
- Historique: Commandes tous les 14j (32u, 32u, 32u)
- Dernière commande: Il y a 10 jours
- ANALYSE: Cycle 14j suggère 2 commandes dans 30j (jour 4 et jour 18)
- CORRECT: "Prochaine commande dans ~4j → retourner 32u (UNE SEULE commande)"
- INCORRECT: "2 commandes dans 30j → retourner 64u" (JAMAIS cumuler !)
</exemples_raisonnement>

<output_format>
Remplis d'abord l'objet "analysis" pour structurer ton raisonnement.
Ensuite seulement, déduis la "recommended_quantity" comme conclusion logique.

Le JSON doit suivre exactement le schéma fourni avec :
- analysis.frequency_pattern : Pattern temporel identifié
- analysis.detected_outliers : Liste des quantités exceptionnelles
- analysis.seasonality_impact : "none", "weak" ou "strong"
- analysis.trend_direction : Direction observée
- analysis.day_cycle_analysis : Analyse du jour de commande habituel vs jour demandé
- baseline_quantity : Demande de fond théorique
- recommended_quantity : TA PRÉDICTION FINALE (entier ≥ 0)
- confidence : "low", "medium" ou "high"
- reasoning : Synthèse de ton raisonnement
</output_format>`
    : // PROMPT SIMPLE avec Chain of Thought structuré
    `Tu es un expert Senior en Supply Chain Agroalimentaire B2B.
Ton objectif est de prédire SI le client va commander ce produit dans les 30 PROCHAINS JOURS ET si oui, quelle quantité pour LA PROCHAINE COMMANDE UNIQUEMENT.

CONTEXTE PRODUIT:
- Nom: ${input.productName}
- Date actuelle: ${currentDate} (${currentDayName})
- Période d'analyse: Les 30 prochains jours (du ${currentDate} au +30j)
- Secteur: Agroalimentaire B2B (saisonnalité forte, promotions fréquentes)

⚠️ RÈGLE CRITIQUE: Prédire la quantité de LA PROCHAINE COMMANDE SEULEMENT.
NE JAMAIS cumuler même si le cycle suggère plusieurs commandes dans les 30j !

<historique_commandes>
Format: Date (Jour) | Quantité
Note les jours de la semaine pour repérer les cycles hebdomadaires.

--- ANNÉE PRÉCÉDENTE (N-1) ---
${lastYearTable}

--- 3 DERNIERS MOIS (Période Récente) ---
${recentTable}
</historique_commandes>

<chain_of_thought>
TA MISSION - Analyse en 4 étapes structurées:

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
Identifie les commandes anormales qui ressemblent à des événements ponctuels:
- Promotions (quantités > 2x la moyenne)
- Stockage préventif (gros pic isolé)
- Corrections de stock
→ Ignore ces outliers pour estimer la "demande de fond réelle"

ÉTAPE 2: SAISONNALITÉ
Analyse si le produit montre des variations saisonnières:
- Y a-t-il des pics récurrents à certaines périodes? (été, hiver, fêtes)
- Compare avec N-1: pattern similaire à la même période?
- Sommes-nous actuellement en période haute ou basse?
→ Ajuste ta prédiction selon la période actuelle

ÉTAPE 3: TENDANCE RÉCENTE
Compare les 3-4 dernières commandes vs les précédentes:
- Volume en hausse, stable, ou en baisse?
- Fréquence de commande en accélération ou ralentissement?
- Y a-t-il rupture du rythme habituel (rattrapage à prévoir)?
- Identifie le jour de commande habituel vs date demandée
→ Applique un coefficient de tendance (+X%, stable, -X%)

ÉTAPE 4: RECOMMANDATION FINALE (Fenêtre 30 jours)
D'abord, évalue: "Le client va-t-il commander dans les 30 prochains jours ?"
- Calcule le temps depuis la dernière commande
- Estime le cycle de commande habituel (médiane des intervalles)
- Si dernière_commande + cycle_habituel > 30j → Retourne 0 (pas de commande prévue)
- Si dernière_commande + cycle_habituel ≤ 30j → Retourne la quantité de LA PROCHAINE commande

Quantité finale si commande prévue (UNE SEULE COMMANDE):
- Base: Demande de fond habituelle par commande
- NE JAMAIS multiplier par le nombre de commandes possibles dans 30j
- Exemple: Cycle 14j = 2 commandes dans 30j → retourne quand même 32u, PAS 64u !
- Résultat: Quantité d'UNE SEULE commande

RÈGLE ABSOLUE:
- RETOURNER 0 = "Pas de commande prévue dans les 30 prochains jours"
- RETOURNER >0 = "Quantité de LA PROCHAINE commande (pas le cumul)"

Ne cumule JAMAIS plusieurs commandes même si le cycle court le suggère.
</chain_of_thought>

<output_format>
Remplis d'abord l'objet "analysis" en suivant les 4 étapes du Chain of Thought.
Ensuite seulement, déduis "recommended_quantity" comme conclusion logique.

Le JSON doit suivre exactement le schéma fourni avec:
- analysis.frequency_pattern: Pattern temporel identifié (ÉTAPE 3)
- analysis.detected_outliers: Liste des quantités exceptionnelles (ÉTAPE 1)
- analysis.seasonality_impact: "none", "weak" ou "strong" (ÉTAPE 2)
- analysis.trend_direction: Direction observée (ÉTAPE 3)
- baseline_quantity: Demande de fond théorique post-nettoyage (ÉTAPE 1)
- recommended_quantity: TA PRÉDICTION FINALE (ÉTAPE 4) - entier ≥ 0
- confidence: "low", "medium" ou "high" selon la qualité des données
- reasoning: Synthèse complète de ton raisonnement en 4 étapes
</output_format>`;

  // Configuration selon le modèle
  const isClaudeModel = MODEL.includes("claude");
  const requestBody: any = {
    model: MODEL,
    messages: isClaudeModel ? [
      {
        role: "system",
        content: "Tu es un expert en supply chain. Tu dois ABSOLUMENT utiliser la fonction predict_stock_quantity pour fournir ta réponse structurée."
      },
      {
        role: "user",
        content: prompt
      }
    ] : [
      {
        role: "user",
        content: prompt
      }
    ],
    // Activer le reasoning pour Gemini (force plus de réflexion)
    reasoning: {
      effort: "high"  // 80% des tokens pour le reasoning
    },
    include_reasoning: true,
  };

  // Claude utilise tools/function calling, Kimi utilise response_format
  if (isClaudeModel) {
    requestBody.tools = [
      {
        type: "function",
        function: {
          name: "predict_stock_quantity",
          description: "Prédire la quantité de stock à commander basée sur l'historique",
          parameters: predictionJsonSchema
        }
      }
    ];
    requestBody.tool_choice = {
      type: "function",
      function: {
        name: "predict_stock_quantity"
      }
    };
  } else {
    // Kimi et autres modèles utilisent response_format
    requestBody.response_format = {
      type: "json_schema",
      json_schema: {
        name: "stock_prediction",
        strict: true,
        schema: predictionJsonSchema
      }
    };
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/dlstudio/auto-proposal",
        "X-Title": "Auto Proposal Stock Replenishment"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();

    // Parse la réponse
    const choice = data.choices?.[0];
    const providerReasoning = choice?.message?.reasoning; // Capture reasoning if available

    let prediction: LLMPrediction;

    // Claude retourne la réponse dans tool_calls, Kimi dans content
    if (isClaudeModel && choice?.message?.tool_calls) {
      // Claude avec function calling
      const toolCall = choice.message.tool_calls[0];
      if (!toolCall || toolCall.function.name !== "predict_stock_quantity") {
        throw new Error("Claude did not call the expected function");
      }

      try {
        // Les arguments sont déjà en string JSON
        prediction = JSON.parse(toolCall.function.arguments) as LLMPrediction;
      } catch (parseError) {
        console.error("❌ Failed to parse Claude function arguments:", toolCall.function.arguments);
        throw new Error(`Failed to parse Claude function response: ${parseError instanceof Error ? parseError.message : String(parseError)}`);
      }
    } else {
      // Kimi et autres modèles retournent directement le JSON dans content
      const content = choice?.message?.content;

      if (!content) {
        throw new Error("No content in OpenRouter response");
      }

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
      model: MODEL,
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
