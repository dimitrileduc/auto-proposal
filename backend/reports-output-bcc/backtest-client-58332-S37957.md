# Rapport Backtest - Client CARREFOUR BELGIUM SA, Carrefour Market 512 Braine l'alleud

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Carrefour Market 512 Braine l'alleud (ID: 58332)
- **Commande réelle** : S37957
- **Date commande** : 2025-07-08 12:24:05
- **Date cutoff système** : 2025-07-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,275 input + 3,044 output = 22,319 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.3% | 11 produits prédits, 3 corrects |
| **Rappel** | 60.0% | 5 produits réels, 3 détectés |
| **F1-Score** | 37.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible avec un intervalle d'environ 32 jours entre les deux dernières commandes. Depuis la dernière commande du 11 mars, un délai important s'est écoulé (plus de 100 jours), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), un besoin est détecté pour éviter une rupture prolongée. La quantité retenue correspond à la médiane constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 137 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 mars 2025, soit environ 118 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (32 jours entre février et mars) crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes de 1u et 2u. Conformément à la règle sur les rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 177 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 07/02/2025, soit exactement 150 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture ne peut être écarté sur l'horizon des 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité de 2 unités est maintenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 153 tokens
- **Total**: 1,026 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:04:39: 1u
- 2025-02-07 14:29:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:04:39: 1u
- 2025-02-07 14:29:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-07 14:29:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une tendance. En l'absence totale d'historique de vente, le risque de rupture ne peut être évalué et aucune quantité ne peut être justifiée selon le principe de précaution lié à la gestion des stocks.

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (ni sur la période récente, ni sur l'année précédente). En l'absence totale d'historique de rotation ou de cycle de commande identifiable, il est impossible de justifier un besoin de réapprovisionnement immédiat. Conformément aux règles de gestion, aucune quantité ne peut être estimée sans base de calcul.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:14:50.268Z*
