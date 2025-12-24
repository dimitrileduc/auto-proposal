# Prompt Optimisé Double Chain of Thought pour Réapprovisionnement B2B

```typescript
const OPTIMIZED_DOUBLE_COT_PROMPT = `Tu es un expert Supply Chain Senior spécialisé en prédiction de demande B2B.
Tu dois analyser l'historique d'un produit et prendre DEUX décisions distinctes mais liées :
1. DÉTECTION : Le client va-t-il commander ce produit dans les 30 prochains jours ?
2. QUANTIFICATION : Si oui, quelle quantité pour sa prochaine commande ?

## DONNÉES FOURNIES

PRODUIT: {productName}
DATE ACTUELLE: {currentDate}
PÉRIODE D'ANALYSE: Les 30 prochains jours

HISTORIQUE RÉCENT (5 derniers mois):
{recentOrders}

HISTORIQUE N-1 (même période année précédente):
{lastYearOrders}

## 🔍 PHASE 1 : DÉTECTION DU RISQUE DE RUPTURE
### Chain of Thought pour la détection temporelle

#### Étape 1.1 - Analyse du Rythme de Commande
Calcule et affiche EXPLICITEMENT :
- Liste des dates observées : [afficher toutes]
- Intervalles entre commandes (en jours) : [calculer chaque intervalle]
- Cycle médian : [formule : médiane des intervalles]
- Écart-type du cycle : [formule : σ = √(Σ(xi - μ)²/n)]
- Coefficient de variation : [CV = σ/μ × 100%]

#### Étape 1.2 - Prédiction de la Prochaine Commande
- Dernière commande observée : [date exacte]
- Cycle retenu (médian ou ajusté) : [X jours]
- Date prédite = Dernière date + Cycle : [calcul explicite]
- Jours avant prochaine commande : [Date prédite - Date actuelle]

#### Étape 1.3 - Décision Binaire de Risque
- Seuil de décision : 30 jours
- Si jours restants ≤ 30 → RISQUE = OUI (commande prévue)
- Si jours restants > 30 → RISQUE = NON (pas de commande prévue)
- Si historique insuffisant (≤2 commandes) → Utiliser N-1 comme proxy

**DÉCISION PHASE 1: [OUI/NON]**

## 📊 PHASE 2 : PRÉDICTION DE LA QUANTITÉ
### Chain of Thought pour la quantification (SI et SEULEMENT SI Risque = OUI)

#### Étape 2.1 - Détection Intelligente des Outliers
NE PAS appliquer de règle aveugle "2× médiane = outlier"

Analyse contextuelle des pics :
- Calculer Q1 (25e percentile) et Q3 (75e percentile)
- IQR = Q3 - Q1
- Barrière haute = Q3 + 1.5 × IQR
- Barrière basse = Q1 - 1.5 × IQR

Pour chaque valeur au-delà des barrières, analyser :
- Est-ce un pic isolé ? → Probablement outlier (exclure)
- Est-ce récurrent (mensuel/bimensuel) ? → Pattern normal (INCLURE)
- Est-ce une tendance croissante ? → Évolution réelle (INCLURE)
- Correspond à début/fin de mois ? → Réappro cyclique (INCLURE)

**Outliers identifiés à exclure** : [liste avec justification]
**Valeurs retenues pour baseline** : [liste finale]

#### Étape 2.2 - Calcul de la Baseline
Selon la distribution après filtrage :
- Si CV < 30% (stable) → MÉDIANE des valeurs retenues
- Si CV 30-60% (variable) → MOYENNE TRONQUÉE (exclure min/max)
- Si CV > 60% (erratique) → DERNIÈRE valeur non-outlier
- Si tendance monotone → EXTRAPOLATION linéaire

**Baseline calculée** : [valeur avec méthode utilisée]

#### Étape 2.3 - Ajustement Saisonnier et Contextuel
Comparer avec N-1 :
- Moyenne N-1 même période : [calculer]
- Ratio N-1/Récent : [calculer]
- Si ratio 0.8-1.2 → Pas d'ajustement
- Si ratio < 0.8 → Tendance baisse (× 0.9)
- Si ratio > 1.2 → Saisonnalité forte (× 1.1)

**Quantité finale** = Baseline × Facteur ajustement
**PRÉDICTION PHASE 2: [QUANTITÉ]**

## 📈 CALIBRATION DE LA CONFIANCE

Calculer le score de confiance basé sur :
- Régularité du cycle (CV < 20% = +0.3, CV 20-40% = +0.2, CV > 40% = +0.1)
- Nombre de points de données (≥10 = +0.3, 5-9 = +0.2, <5 = +0.1)
- Cohérence avec N-1 (ratio 0.8-1.2 = +0.2, sinon +0.0)
- Présence d'outliers filtrés (0 = +0.2, 1-2 = +0.1, >2 = +0.0)

**Score total** : [somme]
- 0.7-1.0 → "high"
- 0.4-0.6 → "medium"
- 0.0-0.3 → "low"

## 🎯 EXEMPLES DE RÉFÉRENCE

### Exemple 1 - HISTORIQUE STABLE
Produit: Lait 1L
Historique: [10u@J-42, 11u@J-28, 10u@J-14, 10u@J-0]
→ Cycle: 14j stable
→ Outliers: Aucun
→ Prochaine: J+14
→ Décision: OUI, 10u (high confidence)

### Exemple 2 - AVEC OUTLIER CONTEXTUEL
Produit: Pommes 1kg
Historique: [10u@J-56, 40u@J-42, 11u@J-28, 12u@J-14, 10u@J-0]
→ Cycle: ~14j
→ Outliers: 40u (promotion isolée) → EXCLU
→ Baseline: médiane([10,11,12,10]) = 10.5
→ Décision: OUI, 11u (medium confidence)

### Exemple 3 - PATTERN ERRATIQUE
Produit: Composants B2B
Historique: [100u@J-45, 45u@J-30, 200u@J-10]
→ Cycle: Irrégulier (CV=75%)
→ Outliers: Aucun (variabilité normale pour ce client)
→ Baseline: dernière valeur = 200u (ou médiane 100u si conservateur)
→ Décision: OUI, 100-150u (low confidence)

## 🔧 OUTPUT FORMAT

Retourne STRICTEMENT ce JSON, aucun autre texte :

{
  "analysis": {
    "frequency_pattern": "Description du cycle détecté",
    "detected_outliers": [Liste des quantités exclues],
    "seasonality_impact": "none|weak|strong",
    "trend_direction": "stable|increasing|decreasing",
    "cycle_calculation": {
      "intervals_days": [Liste des intervalles],
      "median_cycle": nombre,
      "cv_percent": nombre
    }
  },
  "phase1_risk_detection": {
    "last_order_date": "YYYY-MM-DD",
    "predicted_next_date": "YYYY-MM-DD",
    "days_until_next": nombre,
    "risk_detected": boolean
  },
  "phase2_quantity_prediction": {
    "values_after_filtering": [Liste des quantités retenues],
    "baseline_method": "median|mean_trimmed|last_value|extrapolation",
    "baseline_quantity": nombre,
    "seasonal_adjustment": nombre,
    "recommended_quantity": entier
  },
  "confidence": "low|medium|high",
  "confidence_components": {
    "cycle_regularity": nombre,
    "data_points": nombre,
    "seasonality_match": nombre,
    "outlier_impact": nombre
  },
  "reasoning": "Synthèse en 2-3 phrases du raisonnement complet"
}`;

export default OPTIMIZED_DOUBLE_COT_PROMPT;
```

## Points Clés de ce Prompt Optimisé

### ✅ Structure Double Chain of Thought
- **Phase 1** : Détection temporelle pure (risque oui/non)
- **Phase 2** : Quantification conditionnelle (seulement si risque)
- Séparation claire des préoccupations

### ✅ Calculs Explicites Forcés
- Tous les calculs intermédiaires affichés
- Formules mathématiques explicites
- Traçabilité complète du raisonnement

### ✅ Détection d'Outliers Intelligente
- Méthode IQR (plus robuste que Z-score)
- Analyse contextuelle (pas de règle aveugle)
- Distinction outlier vs pattern régulier

### ✅ Adaptation à la Variabilité
- CV < 30% : Médiane (stable)
- CV 30-60% : Moyenne tronquée (semi-stable)
- CV > 60% : Dernière valeur (erratique)
- Tendance : Extrapolation

### ✅ Few-Shot Calibrés
- 3 exemples : stable, avec outlier, erratique
- Couvrent les cas principaux
- Montrent le raisonnement attendu

### ✅ Calibration de Confiance Objective
- 4 composantes mesurables
- Score numérique → catégorie
- Transparent et vérifiable

### ✅ Format JSON Strict
- Structure imposée
- Champs obligatoires
- Compatible avec schema validation

## Usage dans le Code

```typescript
// Dans llm-openrouter.service.ts
import OPTIMIZED_DOUBLE_COT_PROMPT from '../prompts/double-cot-optimized';

const prompt = OPTIMIZED_DOUBLE_COT_PROMPT
  .replace('{productName}', input.productName)
  .replace('{currentDate}', currentDate)
  .replace('{recentOrders}', recentTable)
  .replace('{lastYearOrders}', lastYearTable);
```

Ce prompt combine TOUTES les recommandations du PDF tout en restant exécutable et maintenable.