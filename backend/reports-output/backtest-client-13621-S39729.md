# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 122
- **Tokens**: 182,010 input + 39,775 output = 221,785 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 3.0% | 132 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 5.8% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 154.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (4)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3393] LV FR TARTINAPERO BIO AVOCAT BOCAL 190G | 651 | 434 | 217.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK</strong> - LLM: 200u vs Médiane: 200u (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 200u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~25j (22-25j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - Demande constante 200u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern très stable détecté : 3 commandes consécutives de 200u sur 52 jours avec intervalles quasi-réguliers (25j, 23j). Aucun outlier, aucune saisonnalité N-1 disponible. Client commande par palettes standards de 200u avec fréquence mensuelle. La prochaine échéance naturelle (9 oct + ~25j = début nov) correspond à la date de prédiction (13 oct). Pas d'indicateur de rupture de tendance ni de rattrapage nécessaire. La demande de fond théorique et la recommandation finale convergent vers 200u avec forte confiance.

</details>


<details>
<summary><strong>2. [PF1778] TARTINAPERO BIO TOMATE 200ML</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~30j avec accélération récente (34j → 17j → 34j)
- **Saisonnalité**: weak
- **Tendance**: Hausse stable +32% (330u → 434u)
- **Outliers détectés**: 700u

**🧠 Raisonnement LLM:**
Pattern mensuel stable identifié. La commande du 2024-09-16 (700u) est un outlier clair (2x la normale), à exclure. Depuis août 2025, le client a stabilisé à 434u/commande (3 commandes identiques consécutives). L'intervalle moyen est ~26j, la dernière commande date du 09/10, donc prochaine attendue mi-novembre. MAIS la date de prédiction est le 13/10 (4j après dernière commande) - trop tôt pour le cycle normal. Cependant, vu la question posée, si commande passée ce jour : quantité attendue = 434u (standard actuel établi). La tendance N-1 (330u) vers N (434u) montre +31% de croissance stabilisée, pas de saisonnalité octobre marquée. Prédiction : 434u avec forte confiance.

</details>


<details>
<summary><strong>3. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - LLM: 400u vs Médiane: 400u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 400u (confidence: high)
- 📊 **Baseline N-1**: 400u
- 📊 **Médiane**: 400u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 200u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (5j, 17j, 22j sur derniers mois). Historique N-1 montre commandes espacées de 3-4 semaines typiquement
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 400u - la quantité 400u domine l'historique (8/15 commandes). Les 600u et 800u sont rares et isolées
- **Outliers détectés**: 800u, 600u

**🧠 Raisonnement LLM:**
Pattern clair identifié: 400u est la quantité standard récurrente (53% des commandes historiques). Les dernières commandes de Sept 2025 confirment ce niveau (400u × 2). Les quantités supérieures (600u, 800u) sont des exceptions isolées sans contexte récurrent. Pas de saisonnalité forte détectée pour mi-octobre (Oct 2024 = 400u). La prédiction au 13 Oct 2025 s'aligne naturellement sur la demande de fond établie à 400u, cohérente avec le rythme client observé et la stabilité récente.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF3394] LV SAUCE BOURGUIGNONNE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 09:06:10: 200u
- 2025-09-16 11:47:53: 200u
- 2025-08-22 10:32:18: 200u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [PF1778] TARTINAPERO BIO TOMATE 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 09:06:10: 434u
- 2025-10-09 09:06:10: 0u
- 2025-09-05 11:57:29: 434u
- 2025-08-19 10:32:26: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 11:07:52: 272u
- 2024-09-16 11:33:20: 700u
- 2024-08-08 06:47:17: 329u
- 2024-06-11 12:19:41: 329u
- 2024-05-23 10:05:18: 330u
- 2024-04-24 09:27:22: 350u
- 2024-04-03 05:49:19: 350u
- 2024-02-22 12:16:39: 330u
- 2023-11-29 14:57:26: 350u
- 2023-11-27 14:52:05: 331u
- 2023-11-08 07:48:20: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [PF1810] LV SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 14:13:23: 400u
- 2025-09-05 11:57:29: 400u
- 2025-08-19 10:32:26: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:46:58: 400u
- 2024-09-16 11:33:20: 400u
- 2024-08-08 06:47:17: 600u
- 2024-06-11 12:10:50: 800u
- 2024-05-23 10:05:18: 400u
- 2024-04-24 09:27:22: 400u
- 2024-04-24 09:27:22: 400u
- 2024-04-03 05:49:19: 400u
- 2024-03-26 10:30:17: 200u
- 2024-03-18 14:39:12: 400u
- 2024-02-22 12:16:39: 400u
- 2023-12-18 13:37:19: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>




---

## False Positives (128)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Stock prédit: 251.4u (15j restants) → prédit 300u mais non commandé |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 325 | Stock prédit: 311.8u (24j restants) → prédit 325u mais non commandé |
| [PF3014] LV BE TARTINADE BIO TOMATE 380G | 215 | Stock prédit: 238.7u (28j restants) → prédit 215u mais non commandé |
| [PF1549] LV COCKTAIL BIO 200ML | 185 | Stock prédit: 152.4u (13j restants) → prédit 185u mais non commandé |
| [PF1635] JF SAUCE AIOLI PESTO 250M WECK | 200 | Stock prédit: 176.5u (22j restants) → prédit 200u mais non commandé |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: 172.7u (18j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 151.4u (9j restants) → prédit 300u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 1 | Stock prédit: 369.9u (17j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 112 | Stock prédit: 79.7u (9j restants) → prédit 112u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: 29.4u (4j restants) → prédit 56u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: 37.0u (7j restants) → prédit 56u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | Stock prédit: 30.7u (4j restants) → prédit 56u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 2 | Stock prédit: -1.2u (-2j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 120 | Stock prédit: 89.5u (17j restants) → prédit 120u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Stock prédit: 47.8u (23j restants) → prédit 60u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: 8.1u (25j restants) → prédit 8u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 5 | Stock prédit: 3.6u (16j restants) → prédit 5u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 28 | Stock prédit: 18.0u (12j restants) → prédit 28u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 24 | Stock prédit: 17.2u (27j restants) → prédit 24u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 24 | Stock prédit: 17.2u (27j restants) → prédit 24u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 49 | Stock prédit: 15.3u (5j restants) → prédit 49u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 24 | Stock prédit: 12.9u (12j restants) → prédit 24u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: 16.0u (22j restants) → prédit 30u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 37 | Stock prédit: -0.7u (0j restants) → prédit 37u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 37 | Stock prédit: -0.7u (0j restants) → prédit 37u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 6 | Stock prédit: 13.1u (24j restants) → prédit 6u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 15 | Stock prédit: 18.9u (22j restants) → prédit 15u mais non commandé |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | Stock prédit: 0.9u (3j restants) → prédit 5u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | Stock prédit: 1.3u (4j restants) → prédit 5u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | Stock prédit: 1.1u (3j restants) → prédit 5u mais non commandé |
| [RIT02] RITCHIE Citron - verre 275ml | 35 | Stock prédit: 16.7u (16j restants) → prédit 35u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 181 | Stock prédit: 202.2u (21j restants) → prédit 181u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 36 | Stock prédit: 12.0u (8j restants) → prédit 36u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 740 | Stock prédit: 303.0u (9j restants) → prédit 740u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 20 | Stock prédit: 10.1u (17j restants) → prédit 20u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 20 | Stock prédit: 7.8u (10j restants) → prédit 20u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: 8.3u (12j restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: 14.3u (22j restants) → prédit 25u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 10 | Stock prédit: 6.4u (30j restants) → prédit 10u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Stock prédit: 1.1u (22j restants) → prédit 1u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 2 | Stock prédit: -0.7u (-4j restants) → prédit 2u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | Stock prédit: 0.9u (7j restants) → prédit 3u mais non commandé |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 1 | Stock prédit: -7.3u (-15j restants) → prédit 1u mais non commandé |
| [PF1828] JF SAUCE BEARNAISE 470ML WECK | 110 | Stock prédit: 68.3u (29j restants) → prédit 110u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -46.5u (-8j restants) → prédit 56u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | Stock prédit: 20.9u (10j restants) → prédit 56u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 118 | Stock prédit: 89.8u (14j restants) → prédit 118u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 20 | Stock prédit: 6.2u (11j restants) → prédit 20u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | Stock prédit: 1.6u (11j restants) → prédit 5u mais non commandé |
| [PF3329] LV SDP SAUCE BEARNAISE 125G | 2100 | Stock prédit: 1018.8u (24j restants) → prédit 2100u mais non commandé |
| [PF1776] TARTINAPERO BIO CAROTTE 200ML | 392 | Stock prédit: -200.9u (-9j restants) → prédit 392u mais non commandé |
| [PF1474] JF MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: -18.9u (-2j restants) → prédit 200u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 496 | Stock prédit: 19.8u (1j restants) → prédit 496u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 1049 | Stock prédit: -485.8u (-10j restants) → prédit 1049u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 40 | Stock prédit: 14.5u (25j restants) → prédit 40u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 7 | Stock prédit: 2.7u (25j restants) → prédit 7u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock prédit: 2.1u (22j restants) → prédit 5u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 7 | Stock prédit: 1.9u (19j restants) → prédit 7u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 4 | Stock prédit: 2.4u (29j restants) → prédit 4u mais non commandé |
| [PF1460] LV MAYONNAISE BIO 200ML | 370 | Stock prédit: -79.8u (-5j restants) → prédit 370u mais non commandé |
| [PF1471] JF MAYONNAIS WASABI 250ML WECK | 200 | Stock prédit: 69.5u (16j restants) → prédit 200u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 200 | Stock prédit: -61.1u (-7j restants) → prédit 200u mais non commandé |
| [PF1475] JF MOUTARDE MIEL 250ML WECK | 200 | Stock prédit: 94.3u (27j restants) → prédit 200u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: 41.2u (11j restants) → prédit 150u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 135 | Stock prédit: 28.1u (15j restants) → prédit 135u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 8 | Stock prédit: 0.5u (1j restants) → prédit 8u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 7 | Stock prédit: -2.9u (-10j restants) → prédit 7u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 15 | Stock prédit: 1.0u (1j restants) → prédit 15u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 16 | Stock prédit: -5.3u (-8j restants) → prédit 16u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 13 | Stock prédit: -5.9u (-12j restants) → prédit 13u mais non commandé |
| [PF0084] FILOU CARBONNADES 800 GR | 8 | Stock prédit: -1.5u (-5j restants) → prédit 8u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 45 | Stock prédit: -2.4u (-2j restants) → prédit 45u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 40 | Stock prédit: 11.1u (14j restants) → prédit 40u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 300 | Stock prédit: -211.1u (-19j restants) → prédit 300u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 434 | Stock prédit: 24.3u (2j restants) → prédit 434u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 768 | Stock prédit: 227.6u (8j restants) → prédit 768u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 434 | Stock prédit: -12.2u (-1j restants) → prédit 434u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1650 | Stock prédit: 752.4u (27j restants) → prédit 1650u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 450 | Stock prédit: -352.9u (-20j restants) → prédit 450u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 450 | Stock prédit: -352.9u (-20j restants) → prédit 450u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: 141.9u (20j restants) → prédit 400u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 300 | Stock prédit: 166.3u (26j restants) → prédit 300u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: 65.5u (18j restants) → prédit 200u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 58 | Stock prédit: -26.6u (-11j restants) → prédit 58u mais non commandé |
| [PF3370] JF MAYONNAISE CITRON 250ML WECK | 200 | Stock prédit: 44.2u (10j restants) → prédit 200u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 1900 | Stock prédit: 929.4u (30j restants) → prédit 1900u mais non commandé |
| [PF2980] LV TARTINADE BIO AIL OURS200ML | 816 | Stock prédit: -540.0u (-16j restants) → prédit 816u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 740 | Stock prédit: 178.1u (11j restants) → prédit 740u mais non commandé |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 1 | Stock prédit: -157.3u (-51j restants) → prédit 1u mais non commandé |
| [PI3072] PI TARTI POIS CHICHES CONS 250G BIO | 4260 | Stock prédit: 1449.8u (18j restants) → prédit 4260u mais non commandé |
| [PI3073] PI TARTI TOMATE CONS 250 | 7500 | Stock prédit: 2645.5u (19j restants) → prédit 7500u mais non commandé |
| [PI3346] PI TARTINADE BETTERAVE CONS 250G | 5700 | Stock prédit: 714.5u (6j restants) → prédit 5700u mais non commandé |
| [PF1721] LV VIN CAESAR PET 250 BIO | 260 | Stock prédit: 64.5u (16j restants) → prédit 260u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2600 | Stock prédit: 781.2u (23j restants) → prédit 2600u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 75 | Stock prédit: 1.6u (1j restants) → prédit 75u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: 2.6u (11j restants) → prédit 13u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 200 | Stock prédit: -20.3u (-4j restants) → prédit 200u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 199 | Stock prédit: 37.2u (12j restants) → prédit 199u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 200 | Stock prédit: -45.5u (-10j restants) → prédit 200u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | Stock prédit: -1.0u (-9j restants) → prédit 5u mais non commandé |
| [PI3200] PI TARTI AUBERGINE CONS 250 | 1356 | Stock prédit: -302.6u (-12j restants) → prédit 1356u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 2 | Stock prédit: -0.9u (-32j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 20 | Stock prédit: -52.8u (-57j restants) → prédit 20u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: -33.6u (-28j restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: -33.6u (-28j restants) → prédit 60u mais non commandé |
| [PF3331] LV SDP SAUCE POIVRE 125G | 1050 | Stock prédit: 457.4u (21j restants) → prédit 1050u mais non commandé |
| [PF3330] LV SDP SAUCE TARTARE 125G | 1050 | Stock prédit: 457.4u (21j restants) → prédit 1050u mais non commandé |
| [PF1484] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -127.9u (-43j restants) → prédit 1u mais non commandé |
| [PF3226] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: -59.0u (-26j restants) → prédit 1u mais non commandé |
| [PF1534] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: -57.3u (-21j restants) → prédit 1u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -343.3u (-60j restants) → prédit 1u mais non commandé |
| [PF1540] JF SAUCE SAMOURAI 250ML WECK | 1 | Stock prédit: -119.2u (-35j restants) → prédit 1u mais non commandé |
| [PF3371] JF MAYONNAISE MIEL MOUTARDE 250ML WECK | 200 | Stock prédit: 10.9u (5j restants) → prédit 200u mais non commandé |
| [PF3372] JF SAUCE CHIPOTLE 250ML WECK | 200 | Stock prédit: 10.9u (5j restants) → prédit 200u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 1 | Stock prédit: -97.7u (-58j restants) → prédit 1u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 1 | Stock prédit: -56.5u (-45j restants) → prédit 1u mais non commandé |
| [RISH06] RISH kombucha BIO - tagette 750ml | 11 | Stock prédit: -7.3u (-40j restants) → prédit 11u mais non commandé |
| [RISH07] RISH kombucha BIO - PetNat Fig 750ml  | 5 | Stock prédit: -2.4u (-31j restants) → prédit 5u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 12 | Stock prédit: -6.8u (-44j restants) → prédit 12u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Stock prédit: -1.8u (-29j restants) → prédit 5u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 8 | Stock prédit: -6.0u (-52j restants) → prédit 8u mais non commandé |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 68 | Stock prédit: -26.8u (-29j restants) → prédit 68u mais non commandé |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 80 | Stock prédit: -22.1u (-20j restants) → prédit 80u mais non commandé |
| [PI3203] PI TARTI MANGUE CONS 250 | 1 | Stock prédit: 230.6u (18j restants) → prédit 1u mais non commandé |
| [PF1461] LV TARTARE BIO 200ML | 1 | Stock prédit: -71.5u (-18j restants) → prédit 1u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -267.2u (-76j restants) → prédit 1u mais non commandé |
| [LEA09] LEAMO cola bio 330ml | 8 | Stock prédit: -2.3u (-22j restants) → prédit 8u mais non commandé |


---

## False Negatives (2)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [PF3295] LV TARTINADES BELGIQUE BIO TRIPACK | 256 | Stock suffisant: 861.9u (177j restants > seuil 30j) |
| [PF1783] TARTINAPERO BIO BASILIC 200ML | 350 | Stock suffisant: 424.7u (137j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T13:31:43.805Z*
