/**
 * Service LLM via OpenRouter avec Structured Outputs natifs
 *
 * Utilise l'API OpenRouter directement avec response_format JSON Schema
 * pour garantir des réponses valides (pas de parsing failures)
 *
 * + Injection de demos few-shot optimisés par ax-llm
 */

import { readFileSync, existsSync } from "fs";
import { join } from "path";

// Configuration - facile à changer
const MODEL = "google/gemini-3-flash-preview";
const DEMOS_FILE = join(process.cwd(), "optimization-results/stock-predictor-optimized.json");

// Cache des demos chargés
let cachedDemos: Array<{
  productName: string;
  recentOrders: string;
  lastYearOrders: string;
  currentDate: string;
  quantity: number;
  reasoning: string;
}> | null = null;

/**
 * Charge les demos optimisés par ax
 */
function loadOptimizedDemos(): typeof cachedDemos {
  if (cachedDemos !== null) return cachedDemos;

  try {
    if (!existsSync(DEMOS_FILE)) {
      console.warn("⚠️ Fichier demos non trouvé, utilisation sans few-shot");
      cachedDemos = [];
      return cachedDemos;
    }

    const data = JSON.parse(readFileSync(DEMOS_FILE, "utf-8"));
    const traces = data.demos?.[0]?.traces || [];

    // Prendre max 5 demos diversifiés (mix de quantity=0 et quantity>0)
    const demosWithQty = traces.filter((t: any) => t.quantity > 0).slice(0, 3);
    const demosWithoutQty = traces.filter((t: any) => t.quantity === 0).slice(0, 2);

    cachedDemos = [...demosWithQty, ...demosWithoutQty];
    console.log(`✅ ${cachedDemos.length} demos few-shot chargés`);
    return cachedDemos;
  } catch (error) {
    console.warn("⚠️ Erreur chargement demos:", error);
    cachedDemos = [];
    return cachedDemos;
  }
}

/**
 * Formate les demos en section few-shot pour le prompt
 */
function formatDemosSection(): string {
  const demos = loadOptimizedDemos();
  if (!demos || demos.length === 0) return "";

  let section = "\n## EXEMPLES DE RAISONNEMENT (few-shot)\n\n";

  for (let i = 0; i < demos.length; i++) {
    const d = demos[i];
    section += `### Exemple ${i + 1}:\n`;
    section += `Produit: ${d.productName}\n`;
    section += `Historique récent:\n${d.recentOrders}\n`;
    section += `Historique N-1: ${d.lastYearOrders}\n`;
    section += `Date: ${d.currentDate}\n`;
    section += `→ Quantité: ${d.quantity}\n`;
    section += `→ Raisonnement: ${d.reasoning}\n\n`;
  }

  return section;
}

// Gemini 3 Flash Preview ($0.50/M input, $3.00/M output) - MEILLEUR MODÈLE
// Autres options:
// - "anthropic/claude-haiku-4.5" ($1/M input, $5/M output)
// - "anthropic/claude-sonnet-4.5" ($3/M input, $15/M output)
// - "anthropic/claude-opus-4.5" ($15/M input, $75/M output)
// - "moonshotai/kimi-k2-thinking" ($0.60/M input, $2.50/M output)
// - "google/gemini-3-flash-preview" ($0.50/M input, $3.00/M output) - RECOMMANDÉ
// - "openai/gpt-4o-mini"

export interface LLMPrediction {
  analysis: {
    frequency_pattern: string;
    detected_outliers: number[];
    seasonality_impact: "none" | "weak" | "strong";
    trend_direction: string;
    day_cycle_analysis?: string; // Analyse du jour de commande habituel vs jour demandé
    // Nouveaux champs optionnels pour Double CoT
    cycle_days?: number;
    last_order_date?: string;
    predicted_next_date?: string;
    days_until_next?: number;
  };
  baseline_quantity: number;
  recommended_quantity: number;
  confidence: "low" | "medium" | "high";
  // Nouveaux champs optionnels pour confiances détaillées
  confidence_phase1?: "low" | "medium" | "high";  // Confiance détection risque
  confidence_phase2?: "low" | "medium" | "high";  // Confiance quantité
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

export interface LLMPredictionInput {
  productName: string;
  recentOrders: OrderHistoryItem[];
  lastYearOrders: OrderHistoryItem[];
  currentDate?: string;
  
}

/**
 * JSON Schema pour Structured Outputs OpenRouter
 * Étendu pour supporter Double Chain of Thought
 */
const predictionJsonSchema = {
  type: "object",
  properties: {
    analysis: {
      type: "object",
      properties: {
        frequency_pattern: {
          type: "string",
          description: "Pattern temporel identifié (ex: 'Commande tous les 14j', 'Cycle mensuel')"
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
          enum: ["stable", "increasing", "decreasing"],
          description: "Direction de la tendance observée"
        },
        day_cycle_analysis: {
          type: "string",
          description: "Analyse du jour de commande habituel vs jour demandé"
        },
        // Nouveaux champs optionnels pour Double CoT
        cycle_days: {
          type: "number",
          description: "Nombre de jours du cycle médian détecté"
        },
        last_order_date: {
          type: "string",
          pattern: "^\\d{4}-\\d{2}-\\d{2}$",
          description: "Date de la dernière commande (YYYY-MM-DD)"
        },
        predicted_next_date: {
          type: "string",
          pattern: "^\\d{4}-\\d{2}-\\d{2}$",
          description: "Date prédite de la prochaine commande (YYYY-MM-DD)"
        },
        days_until_next: {
          type: "number",
          description: "Nombre de jours jusqu'à la prochaine commande"
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
      description: "Niveau de confiance global basé sur la qualité des données"
    },
    // Nouveaux champs optionnels pour confiances détaillées
    confidence_phase1: {
      type: "string",
      enum: ["low", "medium", "high"],
      description: "Confiance pour la détection du risque de rupture"
    },
    confidence_phase2: {
      type: "string",
      enum: ["low", "medium", "high"],
      description: "Confiance pour la prédiction de quantité"
    },
    reasoning: {
      type: "string",
      description: "Synthèse du raisonnement complet Double CoT"
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

  // PROMPT SIMPLIFIÉ - CHAIN OF THOUGHT NATURELLE
  const prompt = `Tu es un expert Supply Chain B2B. Analyse l'historique et décide si commander + combien.

PRODUIT: ${input.productName}
DATE: ${currentDate}

HISTORIQUE RÉCENT (3 mois):
${recentTable}

HISTORIQUE N-1 (si pertinent):
${lastYearTable}



## DÉCISION 1: Y A-T-IL RISQUE DE RUPTURE ? (horizon 30j)

Raisonne sur:
- Cycle habituel du client (médiane des intervalles entre commandes)
- Dernière commande + cycle = prochaine date probable
- Si ≤30 jours → RISQUE OUI (commande imminente)
- Si 31-45 jours ET proche du cycle → RISQUE OUI (anticipation B2B nécessaire)
- Si >45 jours ET cycle régulier → RISQUE NON
- EXCEPTION: Produits sporadiques (>60j entre commandes) → vérifier si commande dans les 90 derniers jours

## DÉCISION 2: QUELLE QUANTITÉ ? (si risque = oui)

Principes:
- Prédire UNE commande (la prochaine), pas un cumul
- Privilégier les quantités récentes (plus de poids)
- Médiane robuste aux outliers
- Si pattern sur pls commandes évident à même date en N-1 → c'est saisonnier, pas un outlier

Ajustements CRITIQUES (dans l'ordre de priorité):
1. PETITES QUANTITÉS (1-2u):
   - Médiane récente TOUJOURS prioritaire
   - Si toujours 1u → prédire 1u (ignorer N-1)
   - Si alternance 1-2-1-2 → prédire 1u (valeur basse)
2. SAISONNALITÉ:
   - N-1 valide SEULEMENT si 3+ commandes avec +50% volume
   - Si 2025 montre baisse constante → ignorer N-1
3. GROSSES QUANTITÉS (>100u):
   - Exclure outliers évidents (>2x médiane)
   - Médiane des 3 dernières non-outliers
4. CHANGEMENT NET: Si 3 dernières montrent tendance claire → suivre
5. SAFETY B2B: En cas de doute, arrondir LÉGÈREMENT vers le haut (+10% max)

## OUTPUT JSON:

{
  "analysis": {
    "frequency_pattern": "description du cycle",
    "detected_outliers": [],
    "seasonality_impact": "none|weak|strong",
    "trend_direction": "stable|increasing|decreasing",
    "cycle_days": nombre,
    "last_order_date": "YYYY-MM-DD",
    "predicted_next_date": "YYYY-MM-DD",
    "days_until_next": nombre
  },
  "baseline_quantity": nombre décimal,
  "recommended_quantity": entier final (0 si pas de risque),
  "confidence": "low|medium|high",
  "confidence_phase1": "low|medium|high",
  "confidence_phase2": "low|medium|high" (si quantity > 0),
  "reasoning": "explication concise"
}`;

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
    // Activer le reasoning pour Gemini Flash (améliore la qualité)
    reasoning: {
      effort: "high"  // 80% des tokens pour le reasoning
    },
    include_reasoning: true,  // IMPORTANT: inclure le reasoning dans la réponse
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
