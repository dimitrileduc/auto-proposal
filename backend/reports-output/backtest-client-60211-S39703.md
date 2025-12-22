# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39703
- **Date commande** : 2025-10-16 06:40:28
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 27,137 input + 97,372 output = 124,509 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.4% | 22 produits prédits, 8 corrects |
| **Rappel** | 80.0% | 10 produits réels, 8 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (8)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1.67u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 32 jours
- **Cycle médian (jours)**: 32
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-1010-09 + 32 jours = 10 novembre 2025. jours à courir : 26 jours. Risque : Oui (≤ 30j). Quantité : Les volumes sont très faibles (1-2u). La dernière commande est à 1u et la tendance est à la baisse (2, 2, 1). Selon les règles pour les petites quantités avec alternance ou baisse, on privilégie la valeur basse. Recommandation : 1 unité.",
  "confidence": "medium",
  "confidence_phase1": "high",
  "confidence_phase2": "medium"
}1-10-2025-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025-11-10-2025
  },
  "baseline_quantity": 1.67,
  "recommended_quantity": 1,
  "confidence": "medium",
  "confidence_phase1": "high",
  "confidence_phase2": "medium",
  "reasoning": "Le cycle de réapprovisionnement du client est stable autour de 32 jours. La prochaine commande est attendue pour le 10 novembre, soit dans 26 jours, ce qui justifie une commande préventive. Pour la quantité, on observe de très faibles volumes (entre 1 et 2 unités) avec une légère tendance à la baisse (dernière commande à 1u). Conformément aux principes B2B pour les petites quantités, on recommande l'unité pour éviter le surstockage tout en couvrant le besoin probable."
} 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de réapprovisionnement du client est stable autour de 32 jours. La prochaine commande est attendue pour le 10 novembre, soit dans 26 jours, ce qui justifie une commande préventive (horizon < 30j). Pour la quantité, les volumes sont très faibles (1-2u) avec une légère tendance à la baisse (dernière commande à 1u). Conformément aux principes B2B pour les petites quantités, on retient 1 unité pour couvrir le besoin sans risque de surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 835 tokens
- **Output**: 19,614 tokens
- **Total**: 20,449 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently looking at the JOY! Organic Strawberry Jam sales data. So far, I've got a small sample. It looks like unit sales have been consistent, with one or two units sold each month, but the sample size is pretty small. I've noted a 35-day interval between the first two sales.


**Calculating Predictions and Risks**

I've crunched the numbers further, focusing on the JOY! Organic Strawberry Jam. Based on the sales history, I've calculated a predicted next order date of November 10th and assessed the risk of a stockout. With 26 days until the predicted order, I've confirmed a "YES" risk assessment. Also, the median quantity appears to be 2 units, with a slight decreasing trend.


**Determining Order Quantities**

I've just finished calculating the predicted order quantity for the JOY! Organic Strawberry Jam. Based on the sales history, and specifically the decreasing trend in quantities, I'm leaning toward recommending a single unit, despite a slightly higher baseline. The reasoning is due to the smaller recent order sizes, aligning with B2B logic. Also, I've confirmed a "YES" to the risk assessment for a stockout within 30 days.


**Confirming Recommendations and Dates**

I've re-examined the JOY! Organic Strawberry Jam data. The predicted next order is November 10th, and the risk of a stockout within 30 days remains a "YES". Given the decreasing quantity trend and the B2B context, I'm sticking with a recommendation of a single unit. My confidence is medium due to the low order volume.




</details>

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours avec alternance de volumes (1u vs 6u)
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-10-30 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 5u, 6u

**🧠 Raisonnement LLM:**
Cycle médian de 21 jours détecté. La prochaine commande est attendue pour le 30 octobre, soit dans 15 jours (horizon < 30j), ce qui justifie une commande. Pour la quantité, bien que des pics à 5 ou 6 unités surviennent ponctuellement, la médiane récente et la fréquence dominante pour ce produit se situent à 1 unité. En suivant la consigne 'Petites Quantités', la médiane de 1 est retenue.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 2,649 tokens
- **Total**: 3,544 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Production Volumes**

I'm currently focused on the production volumes of the [REB04] ReBEL chips. Recent data points from October 9th show a single unit produced. Prior to that, a larger batch of six units was produced on September 10th. Before that, there was another single unit production run on August 27th.


**Projecting Order Schedules**

I've calculated the median cycle time to be approximately 21 days for the [REB04] ReBEL chips. Based on the last order on October 9th, I'm predicting the next order will be around October 30th. Currently, there are 15 days until that predicted order. The horizon check is complete. Commande imminente!


**Reviewing Order Quantities**

I've been examining the order quantities. The median quantity is 1 unit, but there are intermittent spikes of 5 and 6 units. The most recent order on October 9th was for 1 unit. Based on the pattern, and following the "Small Quantities" rule, my current recommendation is to order 1 unit.


**Determining Order Timing**

I've re-calculated the cycle time and confirmed a median of 21 days between orders for the [REB04] ReBEL chips. This reinforces my prediction of an order on or around October 30th. With the current date being October 15th, I've got a 15-day window to prepare.


**Evaluating Time and Risk**

The data continues to affirm the 21-day cycle, putting the next order around October 30th. I've reconfirmed the 15-day window for preparation and, importantly, the "RISQUE OUI" flag is set, confirming immediate action. My recommendation remains at 1 unit with medium confidence.


**Synthesizing Findings and Actions**

The analysis confirms a 21-day cycle, placing the next order around October 30th. With 15 days until then, "RISQUE OUI" remains. Quantities fluctuate, but the median is 1. My recommendation is to order 1 unit with medium confidence, and the JSON is finalized.


**Determining Final Recommendations**

The analysis confirms a 21-day cycle, placing the next order on or around October 30th. With a 15-day window, "RISQUE OUI" remains. The median order quantity is 1 unit. I've re-reviewed the JSON's structure to ensure validity. The final recommendations are: order 1 unit, with medium confidence, and the JSON is finalized and validated.




</details>

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier bi-mensuel
- **Cycle médian (jours)**: 14.5
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-10-24 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le cycle de commande est très stable avec une médiane de 14,5 jours, plaçant la prochaine commande estimée autour du 24 octobre (dans 9 jours). Bien qu'il y ait une tendance baissière sur les trois dernières commandes (6, 2 puis 1 unité), la médiane historique ajustée des outliers (en excluant le 6 qui est > 2x la médiane) suggère un besoin de 2 unités pour couvrir le prochain cycle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 895 tokens
- **Output**: 2,022 tokens
- **Total**: 2,917 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Considering Reorder Quantities**

I'm analyzing the historical data for [REB01] ReBEL chips. My initial focus is on the sales trends of the premium and bio sea salt flavor. Given the 125g size and the provided dates and quantities, I'm working to determine optimal reorder amounts. The goal is to avoid stockouts while minimizing unnecessary inventory.


**Calculating Reorder Point**

I've crunched the numbers on the [REB01] ReBEL chip sales. My analysis reveals a median cycle of 14.5 days, predicting a reorder around October 23rd or 24th, well within the safety margin. I'm focusing on quantity estimations now, considering recent low sales.


**Confirming Order Quantities**

I've determined a reorder is needed, approximately for October 24th. Analyzing recent sales, a slight decreasing trend is noticeable in [REB01] ReBEL chip sales. My analysis suggests a median order quantity of 2 units. However, given the most recent low sales, I'm leaning toward an order of 2 units, balancing demand with inventory control.


**Evaluating Quantity Prediction**

I've finalized the reorder date assessment for [REB01] ReBEL chips, pinpointing it around October 24th. My analysis now zeroes in on quantity, and while the historical median is 2 units, the decreasing sales trend suggests ordering a quantity of 1 unit this time, as the latest data indicates. However, the previous analysis recommended 2.


**Recommending Final Order**

I've reviewed the data, including outlier exclusions, and the downward trend. Although my calculations point toward a reorder on or around October 24th, my confidence in the quantity is medium. After weighing the trend of 6, 2, and 1, I recommend ordering 2 units.




</details>

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 42 jours
- **Cycle médian (jours)**: 42
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-20 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La dernière commande est très récente (6 jours). Cependant, avec un cycle médian estimé à 42 jours, la prochaine commande théorique est prévue pour le 20/11/2025, soit dans 36 jours. Selon les règles de gestion B2B, un besoin identifié entre 31 et 45 jours justifie une anticipation de commande. Le volume est stable à 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 844 tokens
- **Output**: 2,074 tokens
- **Total**: 2,918 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking NOD01 Production**

I'm focused on the NOD01 product, specifically the pink grapefruit lemonade. Initial entries show a single unit produced on October 9th, 2025, and another on August 12th of the same year. The target date for the product is October 15th, 2025. I need to understand if this means units were produced on the same day.


**Forecasting NOD01 Demand**

I've calculated the median interval between production runs for NOD01, landing at roughly 42.5 days. Based on the last production date, I'm predicting the next run around November 20th. Considering the target date of October 15th, there's a 36-day gap. The product's low volume and recent production suggest a limited immediate risk of stockout. I'm focusing on whether we should be anticipating B2B needs.


**Refining Stockout Risk**

I'm now zeroing in on the stockout risk. The upcoming order is projected for November 20th, exceeding the standard 30-day risk horizon but falling into the 31-45 day window that demands B2B anticipation. However, recent, very low volume sales of 1 unit are the main concern. Since the client ordered 1 unit only 6 days ago, it will not need another unit for 31-45 days. The risk is low.


**Calculating Recommended Order Size**

I'm now determining the recommended quantity. Given the recent history of low volumes, the stable or slightly decreasing trend, and the 31-45 day B2B anticipation window, I'm leaning toward recommending a single unit. The recent order on October 9th further supports this, suggesting the client has sufficient stock. My confidence is medium due to irregular intervals.


**Justifying the Recommendation**

I've carefully considered the B2B anticipation window and the low volume trend for NOD01. The consumer just purchased on October 9th. Given the predicted next order date of November 20th and the 36-day lead time, ordering 1 unit appears appropriate, although I'm a bit concerned about the irregularity of past intervals and will keep this in mind.


**Concluding Order Recommendations**

I've finalized my reasoning and the recommended order. Considering the recent purchase on October 9th, the predicted order date around November 20th, and the 36-day lead time, a single unit is the appropriate recommendation. The irregularity in past intervals warrants medium confidence, but the order should be fine.




</details>

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (14j) identifié sur les mercredis
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client a présenté un cycle régulier de 14 jours sur ses deux dernières commandes (toutes deux de 1 unité le mercredi). Bien que les cycles théoriques du 24/09 et du 08/10 soient passés sans commande, la prochaine échéance calculée selon ce rythme bi-mensuel tombe le 22/10 (dans 7 jours). En B2B, ce pattern de commande unitaire est stable et justifie le maintien de la recommandation à 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 810 tokens
- **Output**: 1,573 tokens
- **Total**: 2,383 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Jam Orders**

I'm analyzing the order history for JOY04 jam. So far, there's a clear pattern of purchases, with a two-interval between the last two orders. I'll need to determine whether this is a consistent trend or merely a coincidence. The most recent order was placed on October 15, 2025.


**Refining the Prediction**

I'm now recalculating the purchase cycle. Taking into account the two orders, I noticed they both occurred on Wednesdays, hinting at a potential bi-weekly pattern. My initial prediction suggests orders on Sep 24, Oct 8, and Oct 22, the latter falling within the next week. The risk assessment for JOY04 has been updated.


**Calculating Stock Recommendations**

I've finalized the purchase cycle analysis for JOY04, confirming a bi-weekly pattern. My model now recommends a quantity of 1 unit, with a medium confidence level given the limited data. The reasoning centers around the consistent Wednesday orders, with the next one projected for October 22nd, creating a high risk of stockout.


**Reviewing the Calendar**

I'm now cross-referencing the predicted order date with the current date to finalize risk assessment. I've reconfirmed the bi-weekly schedule, identifying the next order for October 22nd. The date calculation checks out, ensuring confidence in my final recommendation.




</details>

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) détecté
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle historique identifié est de 14 jours le mercredi. 35 jours se sont écoulés depuis la dernière commande (soit deux cycles manqués). La prochaine date théorique (22 octobre) tombe dans les 7 prochains jours, rendant le risque de rupture imminent. Les quantités sont fixes à 1 unité.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 808 tokens
- **Output**: 1,402 tokens
- **Total**: 2,210 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Product Performance**

I'm analyzing the sales data for ORGANICA's crunchy fruit fraise, specifically the 12g size. Recent history reveals a couple of sales events in the past three months, one unit each in September and August. I need to delve into the data to see if this is typical for this time of year, or if it reflects a downturn.


**Forecasting Future Purchases**

I'm using the sales data to predict the next order. Given the 14-day cycle, the client missed two potential orders. The horizon logic suggests a potential order around October 22nd. The quantities are consistent at 1 unit, with a recent median of 1, so I predict the next order will be for 1 unit. There is some risk as the client hasn't ordered in 35 days.


**Reassessing Order Frequency**

I'm now re-evaluating the 14-day cycle based on the "ORGANICA crunchy fruit fraise 12g" data, considering the 35-day lapse since the last order. This triggered a red flag in the cycle logic. I've noted the missed cycles (Sept 24th and Oct 8th). Despite this, the consistent 1-unit quantity and the upcoming potential order on October 22nd still seem probable, but with a medium confidence score now.


**Refining Cycle Analysis**

I'm now recalculating the intervals between orders. I've confirmed the 14-day cycle and missed orders, leading to a "YES" risk flag. Further analysis reveals the client is 2.5 cycles behind. The next theoretical order date remains October 22nd, with a consistent recommendation of 1 unit. All parameters are set.




</details>

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle court initial (15-27j), commande actuellement en retard de 20 jours par rapport à la médiane
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le client commande habituellement tous les 15 à 27 jours. La dernière commande date d'il y a 35 jours, ce qui indique un besoin imminent (risque de rupture élevé). Bien que la dernière quantité commandée (6u) soit un pic par rapport à l'historique (1-2u), les règles pour petites quantités suggèrent de privilégier la médiane (2u) pour la prédiction, car le pic de 6u a probablement servi à couvrir une période plus longue.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 868 tokens
- **Output**: 2,790 tokens
- **Total**: 3,658 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Product Data**

I've been analyzing the sales data for [REB03] ReBEL chips. My recent focus has been on the intervals between sales, specifically how the time between sales events is shortening. This could indicate a growing demand or a change in purchasing patterns. The historical data points are helping to visualize these trends.


**Evaluating Ordering Intervals**

I'm now zeroing in on the [REB03] ReBEL chips premium & bio - poivre noir 125g. The timeframes between orders are compressing, and quantities are trending upwards. With a median cycle of 15 days, a 35-day gap since the last order raises a red flag; the order is overdue, indicating a potential stockout risk.


**Calculating Stockout Risk**

I'm now determining the probability of a stockout for the [REB03] ReBEL chips premium & bio - poivre noir 125g. Considering the 35-day gap since the last order, which far exceeds the 15-day median cycle. Also, I am analyzing quantity trends - a recent order of 6 units compared to prior orders of 1 and 2. The data strongly implies a risk, warranting a closer look.


**Determining Order Quantities**

I'm now calculating the recommended order quantity for [REB03] ReBEL chips. Considering the last order of 6 units was an outlier compared to the median. Also, a prolonged interval of 35 days since the last order indicates a higher likelihood of an imminent order, possibly for a larger quantity.


**Calculating Recommended Order**

Focusing now on determining the optimal order quantity for the [REB03] ReBEL chips, I've confirmed a stockout risk due to a 35-day gap, significantly exceeding the median 15-day cycle. Considering the historical volumes, the median order quantity of 2 appears appropriate, with a slight upward adjustment based on the latest 6-unit order and potential increase in demand.


**Finalizing Quantity & Risk**

The [REB03] ReBEL chips demand analysis is nearly complete. I've re-evaluated the ordering patterns and the outlier quantities and the 35 day gap. Using a conservative approach, I'm recommending a quantity of 2 for the next order, with a high confidence level of an imminent order. A stockout risk remains.


**Determining Order Recommendations**

I'm now integrating all data points for [REB03] ReBEL chips. Considering a 35-day gap, far exceeding the median 15-day cycle, I predict an imminent order. While the median order size is 2, a recent spike to 6 units complicates the forecast. Therefore, I'm recommending a quantity of 2, with a medium confidence due to the outlier volume.




</details>

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 3u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bimensuel avec forte variabilité de volume (alternance entre réapprovisionnement de fond 1u et commande de stock 5-6u)
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-09-10
- **Prochaine prédite**: 2025-09-25 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle médian de 15 jours. La dernière commande date du 10 septembre, soit 35 jours de délai (plus de deux fois le cycle habituel), ce qui indique un besoin immédiat. Les quantités oscillent entre 1 et 6 unités ; la médiane de 3 représente le meilleur compromis statistique pour une commande de réapprovisionnement standard dans ce contexte de faible volume.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 868 tokens
- **Output**: 2,322 tokens
- **Total**: 3,190 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Sales Trends**

I'm currently tracking the sales history for the ReBEL paprika chips. The data from September 10th shows a significant increase in demand, with 6 units sold. Before that, sales were much lower, only 1 unit back in August. I need to understand this recent spike.


**Assessing Order Imminence**

I've calculated the inter-order intervals and found a median of 15 days, with the last order on September 10th. Given that today is October 15th, 35 days have passed. The predicted next order date of September 25th has already come and gone. The customer's consumption cycle likely completed, making an order overdue. My analysis flags a high stockout risk.


**Projecting Demand Volatility**

I've re-examined the historical sales data for the ReBEL chips, and I'm currently assessing the quantity variance. The median of the last four orders is three units, with an average of 3.25 units. The last order of 6 units seems more representative. Given the client type, I'm leaning toward a baseline of 3 units, but with a slight upward adjustment for safety stock, considering recent demand.


**Finalizing Order Recommendations**

I'm now determining the optimal order quantity. Considering the erratic demand, I've run several calculations and weighed the 3-unit median against the recent 6-unit order. While 3 units seems statistically sound, the latest data suggests a slightly larger need, and a 4-unit order ensures ample availability. I'll flag the overdue timing and recommend 4 units.


**Revising Quantity Recommendation**

I've re-evaluated the recommended order size for the ReBEL chips, taking the erratic sales into consideration. After applying the "small quantities" rule and checking the cycle, I see that this customer is well overdue. The median of 3 units is still a solid starting point, but I'll increase it to 4 units to ensure they don't stockout.


**Revisiting Quantity Decisions**

I've re-examined the demand history, applying the relevant "small quantities" and B2B rules. The customer is overdue by a significant margin. Despite a baseline of 3 units derived from the median, recent data suggests a slightly higher average, while the "small quantities" rule suggests prioritizing the most recent data point. I'll maintain the recommendation of 3, but flag that the cycle has expired.




</details>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 2u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-22 11:23:24: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 2u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (14)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.7u (14j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.8u (19j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 2 | Stock prédit: 1.3u (37j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -1.5u (-20j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |


---

## False Negatives (2)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock: 0.8u (25j restants) - filtré pour autre raison |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | En rupture (-18j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T15:01:00.212Z*
