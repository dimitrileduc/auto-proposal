# Rapport Backtest - Client CRF MARKET BEAURAING DEMARS

## Contexte

- **Client** : CRF MARKET BEAURAING DEMARS (ID: 38736)
- **Commande réelle** : S40078
- **Date commande** : 2025-11-04 13:40:54
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 31,400 input + 5,167 output = 36,567 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 34 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.47 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LD012] LD Organic Samphire Spread 135 g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LD011] LD Organic Kids Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LD015] LD Onion Spread 180g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 08/10/2025, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de rupture potentielle. Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse 70% du seuil de sécurité. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1u. Les données de l'année précédente (2u et 3u) indiquent une activité à cette période, mais la règle de priorité à la médiane récente et le choix de la valeur la plus basse en cas de doute imposent de maintenir la quantité à 1u pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 208 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>2. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit 26 jours avant la date actuelle (03/11/2025). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée, d'autant plus que le délai entre les deux dernières commandes était important. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité à 1 unité par commande (médiane = 1). Conformément aux règles de rotation faible, on maintient la quantité minimale de 1 unité sans chercher à augmenter le stock de sécurité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 189 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>3. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 20 et 60 jours. La dernière commande remonte au 08/10/2025, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande (cycle moyen ~45 jours). En application du principe de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique récent est extrêmement stable avec une récurrence systématique de 1 unité lors des quatre dernières commandes. La médiane des commandes récentes étant de 1, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 168 tokens
- **Total**: 1,156 tokens



</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/10/2025, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement. L'historique montre une rotation lente mais régulière (cycle moyen constaté de 30 à 40 jours sur la période N-1). En application du principe de précaution B2B et pour éviter une rupture imminente, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande enregistrée, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 157 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>5. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles réguliers d'environ 30 jours (août à septembre, septembre à octobre). La dernière commande datant du 08/10/2025, soit il y a 26 jours, nous atteignons 86% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Bien que la dernière commande ait été de 1u, l'historique récent montre une récurrence stable de 2u. En appliquant la règle de la médiane sur les commandes récentes (2, 2, 2, 1), la valeur centrale est de 2u. Une commande de 2u est donc préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 177 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>6. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation très faible et irrégulière (dernière commande il y a 26 jours, précédente il y a 5 mois). Bien que le cycle moyen soit difficile à établir, le principe de précaution B2B s'applique car nous approchons du seuil de 30 jours depuis la dernière commande (86% du mois écoulé). En l'absence d'historique N-1 et face à une rotation de 1-2 unités, la règle de la médiane basse est appliquée pour éviter une rupture tout en limitant le surstock. Une quantité de 1 unité est préconisée pour maintenir la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 150 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/09/2025, soit 55 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 30 à 45 jours. Le délai depuis la dernière commande dépasse largement ce cycle et l'horizon de 30 jours du seuil de réapprovisionnement, ce qui indique un risque de rupture imminent. En suivant la règle de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente observée dans l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 145 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/09/2025, soit 55 jours. Bien que l'historique montre une rotation très faible et irrégulière (cycle moyen difficile à définir), le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 3 mois). Un besoin est probable pour éviter une rupture prolongée. Conformément à la règle des rotations faibles (1-2u), la quantité retenue est la médiane historique la plus basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 129 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>9. [LD012] LD Organic Samphire Spread 135 g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
La dernière commande remonte au 09/09/2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande récente, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B pour ce type de produit. En application du principe de précaution (Étape 1), un risque de rupture est identifié à l'horizon des 30 jours de seuil. Pour la quantité (Étape 2), la valeur de la dernière commande (3 unités) est reconduite comme référence médiane pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 142 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>10. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/09/2025, soit 55 jours d'écart par rapport à la date actuelle. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique car le délai dépasse largement les standards de rotation habituels. Un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique volumineux et face à une rotation très faible (1u), la règle consiste à maintenir la quantité minimale observée. La médiane et la valeur unique étant de 1u, la prévision est fixée à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 186 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>11. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 août 2025, soit 84 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B. En application du principe de précaution (Étape 1), un risque de rupture est identifié car le besoin de renouvellement est probable après 3 mois. Pour la quantité (Étape 2), la valeur de la commande précédente (2 unités) est retenue comme référence médiane pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 135 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>12. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à 84 jours (11 août). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour un produit frais/pantry. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue correspond à la valeur unique de l'historique récent (2 unités), conformément à la règle de maintien des volumes pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 119 tokens
- **Total**: 991 tokens



</details>


<details>
<summary><strong>13. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 84 jours (11/08/2025). Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles habituels constatés l'année précédente. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane du volume récent, afin de maintenir le stock sans risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 123 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>14. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 août 2025, soit 84 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement un cycle trimestriel standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane du volume récent et respectant la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 121 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>15. [LD015] LD Onion Spread 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte à 153 jours (03/06/2025), ce qui dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée ou répondre à un besoin latent après 5 mois d'inactivité. En l'absence d'historique complexe, la quantité est fixée à 2 unités, correspondant à la médiane (et valeur unique) de la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 128 tokens
- **Total**: 996 tokens



</details>


<details>
<summary><strong>16. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente et irrégulière avec un cycle moyen constaté d'environ 60 à 90 jours. La dernière commande remontant au 3 juin 2025 (soit 153 jours), le délai de réapprovisionnement est largement dépassé, ce qui indique un risque de rupture certain ou un besoin de renouvellement de stock. En application du principe de précaution B2B et de la règle de la médiane sur les quantités historiques (2u, 1u, 4u, 2u, 2u), la quantité recommandée est de 2 unités pour couvrir les besoins sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 151 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>17. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Absence de commandes récentes mais historique N-1 présent. Bien que la dernière commande remonte à juin 2024, le principe de précaution B2B et l'absence de cycle défini imposent de prévoir un besoin pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la valeur historique la plus basse et la plus récente disponible, conformément à la règle de rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 94 tokens
- **Total**: 970 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 09:07:28: 3u
- 2024-07-30 08:36:52: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-06-25 06:40:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-05 12:10:16: 2u
- 2024-04-15 11:51:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-08-11 13:29:06: 1u
- 2025-06-25 06:40:26: 1u
- 2025-06-03 09:19:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:00:06: 1u
- 2024-06-10 10:53:09: 1u
- 2024-06-05 12:10:16: 2u
- 2024-03-14 08:15:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-06-25 06:40:26: 2u
- 2025-06-03 09:19:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:00:06: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-10 10:53:09: 1u
- 2024-06-05 12:10:16: 2u
- 2024-04-15 11:51:21: 2u
- 2024-03-14 08:15:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 2u
- 2025-06-03 09:19:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-06-03 09:19:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 1u
- 2025-08-11 08:24:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:57:13: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-24 13:12:37: 1u
- 2024-04-15 11:51:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:48:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 08:00:06: 1u
- 2024-07-30 08:36:52: 1u
- 2024-04-30 10:01:21: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LD012] LD Organic Samphire Spread 135 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:48:36: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 10:48:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 13:29:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 13:29:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-10 10:53:09: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 09:07:28: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 09:19:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 09:19:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:57:13: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-24 13:12:37: 4u
- 2024-04-30 10:01:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>17. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-10 10:53:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Predicted 2u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 6 | Predicted 6u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Predicted 4u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 3 | Predicted 3u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:17.990Z*
