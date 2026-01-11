# Rapport Backtest - Client LES FILLES DU VIADUC

## Contexte

- **Client** : LES FILLES DU VIADUC (ID: 60461)
- **Commande réelle** : S37624
- **Date commande** : 2025-06-24 12:52:48
- **Date cutoff système** : 2025-06-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,744 input + 298 output = 2,042 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 325.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 325.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 325.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB06] REB chips bio - paprika fumé 35g | 9 | 2 | 7.0 | 350.0% | partial | Non | Non | LLM |
| [REB05] REB chips bio - sel de mer 35g | 8 | 2 | 6.0 | 300.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 avril 2025, soit 69 jours avant la date actuelle. En l'absence d'historique complet pour définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock sur l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 2 unités. Conformément aux règles de rotation faible et de maintien des quantités constantes, la médiane (2u) est retenue pour la prévision.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 159 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>2. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 avril 2025, soit 69 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 139 tokens
- **Total**: 1,011 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-15 07:59:57: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 9u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-15 07:59:57: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:44.779Z*
