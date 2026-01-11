# Rapport Backtest - Client KOCKARTZ Bekodis GmbH (Filiale Eupen)

## Contexte

- **Client** : KOCKARTZ Bekodis GmbH (Filiale Eupen) (ID: 24828)
- **Commande réelle** : S35768
- **Date commande** : 2025-04-04 06:31:31
- **Date cutoff système** : 2025-04-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,683 input + 733 output = 5,416 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 366.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 366.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 366.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 5 | 1 | 4.0 | 400.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 1 | 4.0 | 400.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/01/2025, soit environ 87 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes régulières durant la période estivale (juin à septembre). En application du principe de précaution B2B et face à l'incertitude du cycle sur 2025, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 182 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 06/01/2025, soit environ 87 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés historiquement (environ 30 à 60 jours en N-1). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques (1-2u), en privilégiant la valeur basse pour limiter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 141 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 87 jours (06/01/2025). Bien que l'historique récent soit faible, l'historique N-1 montre une activité régulière durant la période estivale (juin à septembre). En application du principe de précaution B2B et compte tenu du délai important depuis la dernière commande, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane de l'historique (1u), privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 135 tokens
- **Total**: 1,071 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-06 13:54:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-09-08 10:11:14: 1u
- 2023-08-03 11:22:25: 2u
- 2023-07-06 08:05:33: 1u
- 2023-06-12 06:40:19: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-06 13:54:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-09-08 10:11:14: 1u
- 2023-08-03 11:22:25: 2u
- 2023-07-06 08:05:33: 1u
- 2023-06-12 06:40:19: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-06 13:54:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-09-08 10:11:14: 1u
- 2023-08-03 11:22:25: 2u
- 2023-07-06 08:05:33: 1u
- 2023-06-12 06:40:19: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 5 | Predicted 5u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 4 | Predicted 4u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:18.336Z*
