# Rapport Backtest - Client THE BELGIAN FACTORY

## Contexte

- **Client** : THE BELGIAN FACTORY (ID: 24479)
- **Commande réelle** : S38628
- **Date commande** : 2025-08-20 14:34:55
- **Date cutoff système** : 2025-08-19 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,871 input + 1,029 output = 5,900 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 5 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 84.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF1878] JEFKE MOUTARDE PET 2,1 L | 42 | 126 | 84.0 | 66.7% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF1878] JEFKE MOUTARDE PET 2,1 L</strong> - LLM: 42u vs Médiane: 84u (Réel: 126u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 42u
- **Baseline calculee**: 42u
- **Mediane historique**: 84u
- **Reel commande**: 126u
- **Erreur LLM**: 84u (66.7%)
- **Erreur Mediane**: 42u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 42u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 30 juin 2025, soit 50 jours avant la date actuelle. L'historique montre un cycle moyen d'environ 60 à 90 jours, mais avec une forte activité saisonnière l'année précédente entre mai et juillet. Étant donné que nous sommes le 19 août et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent si le cycle de consommation se poursuit. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (QUANTITÉ) : Les commandes récentes montrent une tendance à la baisse (84u puis 42u). La médiane des commandes récentes est de 63u, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance à la baisse, la quantité de 42u est retenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 230 tokens
- **Total**: 1,251 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1878] JEFKE MOUTARDE PET 2,1 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:49:56: 42u
- 2025-03-24 12:55:31: 84u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 07:16:36: 84u
- 2024-06-12 07:31:53: 126u
- 2024-05-07 12:50:07: 42u
- 2024-05-07 12:45:03: 84u
- 2024-03-13 22:05:03: 126u
- 2023-11-24 12:59:46: 126u
- 2023-10-05 06:49:25: 168u

**Quantite Mediane (fallback)**: 42u
**Quantite Reelle**: 126u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0088] FILOU VOL AU VENT 800 GR | 32 | Predicted 32u but not ordered |
| [PF0089] FILOU VOL AU VENT 400 GR | 16 | Predicted 16u but not ordered |
| [PF0539] JF VOL AU VENT 2,5 KG | 8 | Predicted 8u but not ordered |
| [PF0078] FILOU CHASSEUR 5 L | 80 | Predicted 80u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:27.687Z*
