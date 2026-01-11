# Rapport Backtest - Client Au coin du pub

## Contexte

- **Client** : Au coin du pub (ID: 34910)
- **Commande réelle** : S38881
- **Date commande** : 2025-09-01 07:14:02
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,117 input + 2,606 output = 17,723 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 5 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 88.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que la rotation soit faible, l'historique montre des commandes régulières de 3 unités (janvier, avril, juin 2024 et mai 2025). Le délai depuis la dernière commande dépasse largement le cycle habituel, ce qui indique un besoin de réapprovisionnement imminent pour maintenir le stock. En suivant la règle de la médiane historique et la stabilité des quantités passées, une commande de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 128 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 75-80 jours entre avril et juin). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une stabilité à 2 unités (médiane de N-1). La commande de 3 unités en mai est traitée comme un pic mineur. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 206 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que l'historique récent soit limité, l'historique N-1 montre une commande en juin. Le délai écoulé dépasse largement les cycles habituels, créant un risque de rupture ou un besoin de réapprovisionnement par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique de l'année dernière est très stable à 3 unités. La dernière commande de 5 unités semble être un pic ponctuel. En suivant la règle de la médiane et du choix de la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 3 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 179 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que le cycle historique soit lent (environ tous les 2-3 mois), le délai actuel dépasse largement la fréquence habituelle. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une stabilité parfaite avec des commandes systématiques de 3 unités. La médiane est de 3u. Conformément à la règle de maintien des rotations régulières, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 176 tokens
- **Total**: 1,098 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 3u
- 2024-04-10 10:32:26: 3u
- 2024-01-09 12:56:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 2u
- 2024-04-10 10:32:26: 2u
- 2024-01-09 12:56:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 3u
- 2024-04-10 10:32:26: 3u
- 2024-01-09 12:56:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 3u
- 2024-04-10 10:32:26: 3u
- 2024-01-09 12:56:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:42.364Z*
