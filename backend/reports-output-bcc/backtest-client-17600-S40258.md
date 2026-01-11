# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S40258
- **Date commande** : 2025-11-12 08:36:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 36
- **Tokens**: 35,172 input + 6,064 output = 41,236 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.1% | 33 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 21.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 107.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 24.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | exact | LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | exact | LLM |
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | 200 | 0.0 | 0.0% | exact | LLM |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 4 | 434 | 430.0 | 99.1% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 350u (Réel: 434u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 350u
- **Reel commande**: 434u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 84u (19.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen récent est d'environ 13 jours (entre le 08/10, 14/10 et 03/11). La dernière commande date de 8 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car le prochain besoin théorique se situe sous 5 jours, bien avant la fin de la période de couverture cible. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 350u et 434u. La médiane des trois dernières commandes est de 434u. Bien que la règle suggère de choisir le plus bas en cas de doute, la récurrence du volume à 434u (2 fois sur 3 récemment) justifie le maintien de ce niveau pour couvrir la rotation actuelle.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 203 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>2. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 434u
- **Reel commande**: 434u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle de commande récent est de 6 jours (08/10, 14/10, 20/10). La dernière commande remonte au 20/10, soit 22 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons largement dépassé l'intervalle habituel de 6 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 434 unités sur les trois dernières commandes. Les commandes d'août sont considérées comme des anomalies ou des ajustements de stock initiaux (864u et 4u). La médiane et la répétition constante sur les commandes les plus proches confirment un besoin de 434 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 199 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>3. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - LLM: 200u vs Médiane: 200u (Réel: 200u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 200u
- **Baseline calculee**: 200u
- **Mediane historique**: 200u
- **Reel commande**: 200u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 200u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 08/10/2025, soit 34 jours avant la date actuelle. L'historique montre un cycle de commande fréquent (environ toutes les 3 à 4 semaines en période automnale). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 (QUANTITÉ) : La quantité récurrente et stable sur les dernières commandes est de 200 unités. Le pic de 600 unités observé en juillet 2025 est considéré comme exceptionnel. La médiane des commandes récentes étant de 200, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,162 tokens
- **Output**: 177 tokens
- **Total**: 1,339 tokens



</details>


<details>
<summary><strong>4. [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie)</strong> - LLM: 4u vs Médiane: 217u (Réel: 434u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 217u
- **Reel commande**: 434u
- **Erreur LLM**: 430u (99.1%)
- **Erreur Mediane**: 217u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 20 août, soit 83 jours d'inactivité. Bien que le cycle soit difficile à établir avec seulement deux commandes le même jour, le principe de précaution B2B s'applique face à une absence de stock récent sur une période longue. Le risque de rupture est considéré comme probable d'ici 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique présente une valeur extrême de 430u (pic exceptionnel/stockage initial) et une valeur unitaire de 4u. Conformément aux règles de gestion des valeurs extrêmes et de privilégier la quantité la plus basse en cas de doute pour éviter le surstockage, la médiane basse de 4u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 180 tokens
- **Total**: 1,084 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 11:51:44: 434u
- 2025-10-14 13:50:03: 350u
- 2025-10-08 11:33:10: 434u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 12:10:09: 350u
- 2024-08-07 07:54:26: 200u
- 2024-04-24 08:56:28: 350u
- 2023-12-19 08:25:50: 350u

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 434u

</details>


<details>
<summary><strong>2. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-20 11:56:31: 434u
- 2025-10-14 13:50:03: 434u
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 434u

</details>


<details>
<summary><strong>3. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-10 09:37:56: 200u
- 2025-09-04 09:10:58: 200u
- 2025-08-19 07:26:59: 200u
- 2025-07-02 07:12:33: 600u
- 2025-06-16 12:55:54: 200u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 15:21:52: 200u
- 2024-10-10 12:10:09: 200u
- 2024-09-11 07:42:30: 600u
- 2024-08-08 07:00:55: 200u
- 2024-06-11 08:46:37: 200u
- 2024-04-24 08:56:28: 200u
- 2024-04-02 13:39:05: 200u
- 2024-03-13 08:07:55: 200u
- 2024-03-06 09:03:21: 200u
- 2023-12-19 08:25:50: 400u

**Quantite Mediane (fallback)**: 200u
**Quantite Reelle**: 200u

</details>


<details>
<summary><strong>4. [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie)</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 10:22:31: 430u
- 2025-08-20 10:22:31: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 434u

</details>




---

## False Positives (29)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | Predicted 200u but not ordered |
| [LV310] LV BIO Tartin'apero Betteraves SDP 200ml | 355 | Predicted 355u but not ordered |
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 400 | Predicted 400u but not ordered |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | Predicted 400u but not ordered |
| [LV356] LV SET 3 X 135G trisauces  SDP | 256 | Predicted 256u but not ordered |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | Predicted 434u but not ordered |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Predicted 400u but not ordered |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Predicted 200u but not ordered |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 400 | Predicted 400u but not ordered |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Predicted 434u but not ordered |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Predicted 350u but not ordered |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 350 | Predicted 350u but not ordered |
| [LV329] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml | 350 | Predicted 350u but not ordered |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Predicted 200u but not ordered |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Predicted 200u but not ordered |
| [LV317] LV "CLASSIQUE" WECK Vinaigrette CIBOULETTE 200ml | 150 | Predicted 150u but not ordered |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Predicted 434u but not ordered |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 350 | Predicted 350u but not ordered |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Predicted 256u but not ordered |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Predicted 434u but not ordered |
| [LV364] LV SDP SAUCE Cocktail  125ML | 4 | Predicted 4u but not ordered |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Predicted 350u but not ordered |
| [LV309] LV BIO Tartin'apero Lentilles curry SDP 200ml | 350 | Predicted 350u but not ordered |
| [LV335] LA VACHE TRAD Sauce Andalouse bocal 250ml WECK SDP | 200 | Predicted 200u but not ordered |
| [LV333] LV "CLASSIQUE" WECK Mayonnaise au WASABI 250ml SDP  | 200 | Predicted 200u but not ordered |
| [LV301] LV BIO Tartin'apero Aubergine SDP 200 ml  | 350 | Predicted 350u but not ordered |
| [LV318] LV BIO Tartin'apero Ananas Coco SDP 200 ml  | 350 | Predicted 350u but not ordered |
| [LV327] LV BIO Tartin'apero Toscane SDP 200 ml   | 350 | Predicted 350u but not ordered |
| [LV360] LV SDP SAUCE TARTARE 125ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:28.141Z*
