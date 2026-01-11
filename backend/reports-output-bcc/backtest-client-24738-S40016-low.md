# Rapport Backtest - Client Geuchterhof

## Contexte

- **Client** : Geuchterhof (ID: 24738)
- **Commande réelle** : S40016
- **Date commande** : 2025-10-30 07:25:42
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,322 input + 938 output = 6,260 total


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
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 134 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient. Conformément aux règles de gestion des rotations faibles et des cycles incertains, la quantité retenue est de 3 unités, correspondant à la valeur de la dernière commande connue (médiane de l'historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 123 tokens
- **Total**: 994 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 07:56:52: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:11.216Z*
