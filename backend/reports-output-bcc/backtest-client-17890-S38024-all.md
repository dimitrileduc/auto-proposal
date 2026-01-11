# Rapport Backtest - Client Domaine des charmilles SRL

## Contexte

- **Client** : Domaine des charmilles SRL (ID: 17890)
- **Commande réelle** : S38024
- **Date commande** : 2025-07-14 09:13:56
- **Date cutoff système** : 2025-07-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 24,791 input + 4,294 output = 29,085 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 28 produits prédits, 4 corrects |
| **Rappel** | 26.7% | 15 produits réels, 4 détectés |
| **F1-Score** | 18.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 65 jours (09/05/2025), ce qui dépasse largement le cycle suggéré par l'historique N-1. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout après une période d'inactivité de deux mois. Conformément aux règles de gestion des faibles rotations (1-2u) et à la consigne de choisir la valeur la plus basse en cas de doute entre l'historique récent (2u) et N-1 (1u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 149 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/05/2025, soit 65 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 136 tokens
- **Total**: 1,008 tokens



</details>


<details>
<summary><strong>3. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit plus de 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel observé l'année précédente à la même période (mai). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes unitaires (1u) ou très faibles (2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 181 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>4. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/05/2025, soit 65 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la quantité unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 132 tokens
- **Total**: 1,006 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:31:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 06:49:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:31:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:31:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 06:49:50: 2u
- 2023-12-07 09:06:05: 1u
- 2023-12-07 09:06:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:31:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (24)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB002] LB Blonde 75 CL (6,5%) | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Predicted 2u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | Predicted 1u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Predicted 2u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | Predicted 2u but not ordered |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (11)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Never ordered in previous analysis window (no history) |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Never ordered in previous analysis window (no history) |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Never ordered in previous analysis window (no history) |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Never ordered in previous analysis window (no history) |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Never ordered in previous analysis window (no history) |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Never ordered in previous analysis window (no history) |
| [MF0061] MF Compote | 1 | Never ordered in previous analysis window (no history) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 6 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:46.983Z*
