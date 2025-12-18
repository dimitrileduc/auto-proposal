# Plan d'Amélioration : Autoriser le LLM à Retourner 0 ou "Pas de Quantité"

## Résumé Exécutif

Le système actuel souffre d'une **précision catastrophique de 39%** (médiane) car le LLM est forcé de toujours prédire une quantité ≥1, même quand il n'y a pas de besoin réel. Cette amélioration permettrait au LLM de dire "ne pas commander" (retour 0), améliorant drastiquement la précision tout en maintenant un excellent recall.

## Problème Actuel

### Métriques Actuelles
- **Précision médiane : 39.2%** (60% de faux positifs)
- **Recall médiane : 96.2%** (excellente détection)
- **wMAPE moyen : 28.3%**
- **Coût LLM : ~$1+ par client** pour prédire des produits inutiles

### Exemple Concret (Client FOODPRINT)
- **Système prédit : 133 produits**
- **Client commande : 6 produits**
- **Précision : 4.5%** (catastrophique)
- **129 faux positifs** = commandes inutiles

## Architecture du Système Actuel

```
1. ANALYSE STOCK (200 produits)
   ↓
2. DÉTECTION RUPTURE (< 19 jours)
   → 133 produits détectés
   ↓
3. CALCUL QUANTITÉ (LLM ou médiane)
   → LLM forcé de dire ≥1
   → TOUS les 133 restent
   ↓
4. RÉSULTAT : 133 produits à commander (dont 127 inutiles!)
```

## Solution Proposée

### Concept : Séparer les Décisions

**AVANT** : Une seule décision mélangée
- Quantité > 0 = commander
- Problème : LLM forcé de donner une quantité même si pas nécessaire

**APRÈS** : Deux décisions distinctes
1. **Faut-il commander ?** (OUI/NON)
2. **Si OUI, combien ?** (1, 2, 100...)

### Modifications Techniques

#### 1. Structure LLM (llm-openrouter.service.ts)

```typescript
export interface LLMPrediction {
  // NOUVEAU : Décision binaire explicite
  should_order: boolean;
  skip_reason?: "sufficient_stock" | "no_recent_activity" | "irregular_pattern" | null;

  // Quantité peut être 0 ou null si should_order = false
  recommended_quantity: number | null;

  // Inchangé
  analysis: { ... };
  confidence: "low" | "medium" | "high";
  reasoning: string;
}
```

#### 2. JSON Schema pour Structured Output

```javascript
const predictionJsonSchema = {
  type: "object",
  properties: {
    should_order: {
      type: "boolean",
      description: "true si commander, false sinon"
    },
    skip_reason: {
      type: ["string", "null"],
      enum: ["sufficient_stock", "no_recent_activity", "irregular_pattern", null],
      description: "Raison si should_order = false"
    },
    recommended_quantity: {
      type: ["integer", "null"],
      minimum: 0,
      description: "Quantité à commander (0 ou null si should_order = false)"
    },
    // ... autres champs
  },
  required: ["should_order", "analysis", "confidence", "reasoning"]
}
```

#### 3. Prompt LLM Amélioré

Ajouter dans le prompt :

```markdown
<decision_rules>
DÉCISION EN 2 ÉTAPES :

1. D'ABORD décider s'il faut commander (should_order: true/false)

   NE PAS commander si :
   - Stock estimé suffisant pour 15+ jours
   - Pas d'activité depuis >45 jours (arrêt probable)
   - Pattern trop irrégulier (CV > 100%)
   - Données insuffisantes (confidence: low)

2. SEULEMENT si should_order = true, calculer la quantité

Si should_order = false :
- recommended_quantity = 0 ou null
- skip_reason = raison appropriée
- reasoning = explication détaillée
</decision_rules>

<examples>
// Exemple 1 : Stock suffisant
{
  "should_order": false,
  "skip_reason": "sufficient_stock",
  "recommended_quantity": 0,
  "reasoning": "Dernière commande 500u il y a 10j, conso ~20u/j, stock estimé 300u (15j restants)"
}

// Exemple 2 : Client actif, besoin réel
{
  "should_order": true,
  "skip_reason": null,
  "recommended_quantity": 200,
  "reasoning": "Stock épuisé dans 5j, pattern régulier 200u/mois"
}
</examples>
```

#### 4. Logique dans stock-replenishment.service.ts

```typescript
// Ligne 263+ - Traitement du résultat LLM
if (llmResult) {
  // Vérifier d'abord la décision binaire
  if (!llmResult.prediction.should_order) {
    // LLM recommande de NE PAS commander
    finalQuantity = 0;
    quantitySource = "llm_skip";

    console.log(`LLM skip: ${llmResult.prediction.skip_reason}`);

    // Important : on ajoute quand même dans allProducts pour les stats
    // mais PAS dans analyzedProducts (commande finale)
  } else {
    // LLM recommande de commander
    finalQuantity = llmResult.prediction.recommended_quantity || calculation.quantity!;
    quantitySource = "llm";
  }
}

// Ligne 347 - TOUJOURS ajouter dans allProducts (stats complètes)
allProducts.push(productStatus);

// Ligne 351+ - Filtrage pour analyzedProducts (commande)
// Skip si stock suffisant (filtre existant)
if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
  continue;
}

// NOUVEAU : Skip aussi si LLM dit 0
if (finalQuantity === 0) {
  console.log(`SKIP: LLM recommande 0 (${productStatus.llm_prediction?.skip_reason})`);
  continue;
}

// Seulement les produits avec qty > 0
analyzedProducts.push(productStatus);
```

## Nouvelles Métriques à Implémenter

### Double Niveau de Métriques

```typescript
export interface BacktestMetrics {
  // Niveau 1 : Détection de rupture (avant LLM)
  phase1_detection: {
    detected: number;      // Ex: 133 produits
    precision: number;     // Ex: 4.5%
    recall: number;        // Ex: 100%
    description: "Détection rupture < 19j (avant LLM)"
  },

  // Niveau 2 : Après filtrage LLM
  phase2_llm_filter: {
    predicted: number;     // Ex: 20 produits
    precision: number;     // Ex: 25%
    recall: number;        // Ex: 83%
    filtered_out: number;  // Ex: 113 produits
    improvement: number;   // Ex: +450% précision
    description: "Après validation LLM"
  }
}
```

### Calcul des Métriques

```typescript
function calculatePhaseMetrics(allProducts, realOrders) {
  // Phase 1 : Tous les produits avec rupture détectée
  const phase1Detected = allProducts.filter(p =>
    p.stock_prediction.days_until_stockout < 19
  );

  // Phase 2 : Seulement ceux validés par le LLM (qty > 0)
  const phase2Predicted = allProducts.filter(p =>
    p.quantity_to_order > 0
  );

  // Produits filtrés par le LLM
  const llmFiltered = allProducts.filter(p =>
    p.quantity_to_order === 0 &&
    p.quantity_source === "llm_skip"
  );

  return {
    phase1_detection: {
      detected: phase1Detected.length,
      precision: calculatePrecision(phase1Detected, realOrders),
      recall: calculateRecall(phase1Detected, realOrders)
    },
    phase2_llm_filter: {
      predicted: phase2Predicted.length,
      precision: calculatePrecision(phase2Predicted, realOrders),
      recall: calculateRecall(phase2Predicted, realOrders),
      filtered_out: llmFiltered.length
    }
  };
}
```

## Résultats Attendus

### Amélioration des Métriques

| Métrique | Avant | Après | Gain |
|----------|-------|-------|------|
| **Précision médiane** | 39% | 70%+ | +79% |
| **Recall médian** | 96% | 85-90% | -6-11% |
| **Faux positifs** | 60% | 20-30% | -50% |
| **Coût LLM** | $1+/client | $0.50/client | -50% |

### Exemple Concret (Client FOODPRINT)

**AVANT :**
- Détectés : 133 produits
- Vrais besoins : 6 produits
- Précision : 4.5%
- 127 faux positifs

**APRÈS :**
- Détectés Phase 1 : 133 produits
- Validés Phase 2 : ~20 produits
- Vrais besoins : 6 produits
- Précision : ~30%
- ~15 faux positifs (au lieu de 127)
- **Réduction de 88% des faux positifs**

## Avantages de cette Approche

### ✅ Technique
- **Pas de breaking change** : Compatible avec l'architecture actuelle
- **Traçabilité complète** : Tous les produits restent dans `allProducts`
- **Métriques détaillées** : Mesure avant/après LLM

### ✅ Business
- **Réduction des stocks morts** : -80% de commandes inutiles
- **Économies** : Moins de produits périmés
- **Confiance client** : Propositions plus pertinentes
- **ROI rapide** : Implémentation simple, gains immédiats

### ✅ Opérationnel
- **Transparence** : On sait pourquoi le LLM refuse (skip_reason)
- **Ajustable** : Seuils configurables dans le prompt
- **Évolutif** : Peut apprendre des patterns de refus

## Plan d'Implémentation

### Phase 1 : POC (1-2 jours)
1. Modifier l'interface `LLMPrediction`
2. Adapter le JSON Schema
3. Mettre à jour le prompt avec exemples
4. Tester sur 5-10 clients

### Phase 2 : Validation (3-5 jours)
1. Implémenter la logique de filtrage
2. Ajouter les métriques double-niveau
3. Backtest sur 50+ clients
4. Ajuster les seuils

### Phase 3 : Production (1 semaine)
1. Déploiement progressif
2. Monitoring des métriques
3. Ajustements basés sur feedback
4. Documentation

## Risques et Mitigations

| Risque | Impact | Mitigation |
|--------|--------|------------|
| LLM trop restrictif | Baisse recall | Ajuster seuils dans prompt |
| Complexité prompt | Erreurs LLM | Exemples clairs, tests |
| Changement structure | Bugs rapports | Tests unitaires complets |

## Conclusion

Cette amélioration résout le problème principal du système (précision catastrophique) sans casser l'architecture existante. Le ROI est excellent : implémentation simple pour des gains massifs en performance et en coûts.

**Impact estimé :**
- **Précision : +79%** (de 39% à 70%)
- **Faux positifs : -80%** (de 60% à 12%)
- **Coûts : -50%** (moins d'appels LLM inutiles)
- **Satisfaction client : ++** (moins de propositions absurdes)