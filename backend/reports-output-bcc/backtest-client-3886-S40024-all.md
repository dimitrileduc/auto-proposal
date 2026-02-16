# Rapport Backtest - Client LASSELIN  ETS.

## Contexte

- **Client** : LASSELIN  ETS. (ID: 3886)
- **Commande réelle** : S40024
- **Date commande** : 2025-10-30 12:01:24
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 980 input + 195 output = 1,175 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 48 | 48 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 48u
- **Reel commande**: 48u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/10/2025, soit 21 jours avant la date actuelle. L'historique montre un cycle de rotation d'environ 3 à 4 mois en 2025, mais l'historique N-1 (septembre/octobre 2024) indique une activité régulière à cette période. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent par précaution B2B. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes récentes et de l'historique stable est de 48 unités. Les pics à 72u sont écartés pour éviter le surstockage, conformément à la règle de privilégier la valeur la plus basse en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 980 tokens
- **Output**: 195 tokens
- **Total**: 1,175 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 16:17:17: 48u
- 2025-06-24 12:58:07: 48u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 11:40:06: 72u
- 2024-06-07 09:11:25: 48u
- 2024-02-21 13:34:22: 72u
- 2024-01-23 12:14:03: 48u
- 2024-01-23 12:13:34: 10u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 48u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:14.777Z*
