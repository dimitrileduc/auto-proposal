# LLM Services

Intégration Google Gemini (via OpenRouter) pour prédictions de réapprovisionnement avec Ax framework.

## Objectif

Utiliser Gemini LLM pour:
- **Prédictions**: Quantités de réapprovisionnement basées sur historique
- **Framework**: Ax pour structure prompt (Chain of Thought)

## LLM Configuration

**Provider:** OpenRouter (wrapper API)
**Model:** `google/gemini-3-flash-preview`
**API Key:** `OPENROUTER_API_KEY` (environment variable)

```typescript
{
  apiKey: process.env.OPENROUTER_API_KEY,  // Required
  model: "google/gemini-3-flash-preview",
  stream: false
}
```

## Stock Replenishment Prompt

Ax signature (Chain of Thought):

**ÉTAPE 1 - DÉTECTION DU BESOIN - RISQUE RUPTURE (Recall / precisions):**
- Analyser cycle de commande depuis recentOrders
- Calculer jours écoulés vs currentDate
- Évaluer si prochaine commande dans horizon replenishmentThresholdDays
- Règle: SI DOUTE → Prévoir commande (principe précaution B2B)

**ÉTAPE 2 - ESTIMATION QUANTITÉ (MAPE = precision quantité):**
- Privilégier MÉDIANE des quantités
- NE PAS ajuster pour saisonnalité SAUF pattern vraiment flagrant
- Pas de stock de sécurité excessif
- Valeur typique, pas maximum

## Input/Output

**Input (LLMPredictionInput):**
```typescript
{
  productName: string;
  recentOrders: { date, quantity }[];      // Derniers 5 mois
  lastYearOrders: { date, quantity }[];    // Même période année -1
  currentDate: string;
  replenishmentThresholdDays: number;
}
```

**Output (LLMPredictionResult):**
```typescript
{
  prediction: {
    baseline_quantity: number;
    recommended_quantity: number;
    reasoning: string;
    summary?: string;
  };
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  model: "google/gemini-3-flash-preview";
  provider: "openrouter";
  inputPrompt: string;
}
```

## Fallback Strategy

Si Gemini échoue:

1. **Retry**: Jusqu'à 3 tentatives
2. **Fallback**: Médiane quantité historique (fonction `calculateQuantityFromHistory`)
3. **Error logging**: Log l'erreur

```typescript
try {
  quantity = await predictWithAxOptimized(input);
} catch (error) {
  console.warn('LLM failed, using median fallback:', error);
  quantity = calculateQuantityFromHistory(orderHistory);
}
```

## Token Usage Tracking

Chaque appel track:

```typescript
{
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}
```

Visible dans:
- Reports backtesting (llm_usage)
- Logs de chaque prédiction
- Stock analysis metadata

## Ax Framework

Framework pour structure prompt (DSPy-like):

**Signature Syntax:**
```
field1: type,
field2: type,
...
->
output1: type,
output2: type
```

**Usage:**
```typescript
const predictor = ax(stockPredictorSignature);
const result = await predictor.forward(llmInstance, inputs);
```

Benefits:
- Structure claire input/output
- Type hints
- Composable avec multiple LLMs
- Reusable signatures

## Performance

- **Latency**: ~1-2s per prediction
- **Cost**: Low (flash model)
- **Concurrency**: 10 parallel requests max (stock-replenishment)

## Voir aussi

- **[Stock Replenishment](../features/stock-replenishment.md)** - Usage
- **[Backtesting](../features/backtesting.md)** - Evaluation
- **[Architecture](../ARCHITECTURE.md)** - Stack

---

**Stack**: Google Gemini · OpenRouter · @ax-llm/ax
