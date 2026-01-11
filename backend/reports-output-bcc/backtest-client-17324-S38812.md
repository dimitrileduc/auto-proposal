# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Bastogne Esperanto

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Bastogne Esperanto (ID: 17324)
- **Commande réelle** : S38812
- **Date commande** : 2025-09-15 06:11:58
- **Date cutoff système** : 2025-09-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,882 input + 3,591 output = 22,473 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.1% | 18 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 20.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 116.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 70.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 116.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 12 | 5 | 7.0 | 140.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à 83 jours (23 juin 2025). Bien que la rotation soit très faible et irrégulière, le délai écoulé depuis la dernière commande dépasse largement les cycles habituels constatés. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et N-1, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 124 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 12u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 7u (140.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 avril 2025, soit 153 jours sans activité. Bien que l'historique récent soit limité à une seule commande, le délai écoulé dépasse largement tout cycle de rotation standard. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. La dernière commande enregistrée est de 12 unités. En l'absence d'autres points de données récents pour calculer une médiane, la quantité de la dernière commande est maintenue pour assurer la disponibilité du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 172 tokens
- **Total**: 1,078 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:43:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 07:17:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 06:49:41: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 06:51:19: 4u
- 2024-07-05 07:04:41: 1u

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 5u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | Predicted 6u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 12 | Predicted 12u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 12 | Predicted 12u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 12 | Predicted 12u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 12 | Predicted 12u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 6 | Predicted 6u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 12 | Predicted 12u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:01.814Z*
