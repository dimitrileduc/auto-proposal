# Rapport Backtest - Client The Belgian Factory SRL

## Contexte

- **Client** : The Belgian Factory SRL (ID: 24343)
- **Commande réelle** : S39425
- **Date commande** : 2025-09-29 06:52:19
- **Date cutoff système** : 2025-09-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 9,900 input + 1,751 output = 11,651 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 10 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 45.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 90.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 132.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV189] LV Tartinade Houmous Type 380g | 32 | 80 | 48.0 | 60.0% | partial | Non | Non | LLM |
| [LV217] LV Tartinade Basilic 380g | 64 | 21 | 43.0 | 204.8% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV189] LV Tartinade Houmous Type 380g</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 32u
- **Baseline calculee**: 32u
- **Mediane historique**: 32u
- **Reel commande**: 80u
- **Erreur LLM**: 48u (60.0%)
- **Erreur Mediane**: 48u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 32u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une reprise d'activité récente en août 2025 avec deux commandes consécutives de 32 unités. La dernière commande datant du 21 août (soit 38 jours avant la date actuelle), le cycle de rotation suggère un risque de rupture imminent ou déjà effectif dans l'horizon des 30 jours de seuil de réapprovisionnement. Historiquement, le produit présente une demande récurrente en septembre (32u le 12/09/2024). En suivant la règle de la médiane des commandes récentes et en excluant les pics exceptionnels passés, une quantité de 32 unités est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,033 tokens
- **Output**: 164 tokens
- **Total**: 1,197 tokens



</details>


<details>
<summary><strong>2. [LV217] LV Tartinade Basilic 380g</strong> - LLM: 64u vs Médiane: 32u (Réel: 21u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 32u
- **Reel commande**: 21u
- **Erreur LLM**: 43u (204.8%)
- **Erreur Mediane**: 11u (52.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 août 2025, soit 38 jours avant la date actuelle. L'historique de l'année précédente montre une commande le 12 septembre, indiquant un besoin récurrent à cette période de l'année. Le délai écoulé dépasse largement le cycle de réapprovisionnement suggéré par les données N-1, ce qui confirme un risque de rupture imminent sous 30 jours. Conformément à la règle de la médiane sur l'historique récent et la commande identique de l'an dernier à la même période, la quantité de 64 unités est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 149 tokens
- **Total**: 1,090 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV189] LV Tartinade Houmous Type 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:18:28: 32u
- 2025-08-20 07:50:02: 32u
- 2025-06-10 06:30:38: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 08:44:23: 32u
- 2024-07-05 09:45:10: 32u
- 2024-05-14 09:11:44: 160u
- 2024-04-30 09:00:52: 32u
- 2024-04-18 12:28:00: 32u
- 2024-02-28 16:55:44: 16u
- 2023-12-15 07:58:38: 80u

**Quantite Mediane (fallback)**: 32u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>2. [LV217] LV Tartinade Basilic 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:18:28: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 08:44:23: 64u
- 2024-07-05 09:45:10: 32u
- 2024-05-31 09:20:27: 80u
- 2024-05-14 09:11:44: 160u

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 21u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 8 | Predicted 8u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 4 | Predicted 4u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 6 | Predicted 6u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 32 | Predicted 32u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 96 | Predicted 96u but not ordered |
| [LV138] LV Tartinade Carotte gingembre  380g | 32 | Predicted 32u but not ordered |
| [LV139] LV Tartinade Paprika Chili 380g | 32 | Predicted 32u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:12.031Z*
