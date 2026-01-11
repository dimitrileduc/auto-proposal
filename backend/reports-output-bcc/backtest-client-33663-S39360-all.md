# Rapport Backtest - Client Dorflädchen Lontzen VoG

## Contexte

- **Client** : Dorflädchen Lontzen VoG (ID: 33663)
- **Commande réelle** : S39360
- **Date commande** : 2025-09-24 08:20:50
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,538 input + 751 output = 5,289 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 42.9% | 7 produits réels, 3 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit environ 120 jours. Bien que l'historique montre une rotation très faible et irrégulière (cycles de 4 à 6 mois), le délai écoulé depuis la dernière commande dépasse largement les intervalles habituels, créant un risque de rupture ou un besoin de renouvellement de stock imminent. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la dernière quantité commandée, respectant la règle de ne pas augmenter les volumes sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 154 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>2. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit environ 120 jours. Bien que l'historique montre une rotation très faible et irrégulière (cycle de 4 à 5 mois), le délai écoulé depuis la dernière commande dépasse largement la fréquence habituelle constatée en 2024. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la dernière commande connue (médiane du volume récent), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 147 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>3. [LV165] LV Vol-au-vent (avec viande de volaille) 400 g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit environ 120 jours sans activité pour ce produit. En l'absence d'historique sur l'année précédente (N-1) et face à un cycle de rotation indéterminé ou très lent, le principe de précaution B2B s'applique pour éviter une rupture prolongée si un besoin survient. Conformément à la méthode, en cas de doute sur le cycle, une commande est prévue. La quantité retenue est de 3 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 150 tokens
- **Total**: 1,028 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:34:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 07:30:56: 2u
- 2024-03-05 08:28:38: 3u
- 2023-11-23 08:01:54: 3u
- 2023-10-31 07:23:54: 1u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:34:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 07:30:56: 2u
- 2024-03-05 08:28:38: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV165] LV Vol-au-vent (avec viande de volaille) 400 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 06:34:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 4 | Predicted 4u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 2 | Never ordered in previous analysis window (no history) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Never ordered in previous analysis window (no history) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | Never ordered in previous analysis window (no history) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:15:24.884Z*
