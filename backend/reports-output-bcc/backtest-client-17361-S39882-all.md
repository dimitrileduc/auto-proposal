# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Korbeek Lo

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Korbeek Lo (ID: 17361)
- **Commande réelle** : S39882
- **Date commande** : 2025-10-23 06:18:47
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 26,903 input + 4,721 output = 31,624 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 30 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.47 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | 2 | 2.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 55 jours (28 août 2025). Bien que l'historique montre une rotation très faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment (environ 30-40 jours entre les commandes N-1). En application du principe de précaution B2B et pour couvrir un risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique (toutes les commandes passées étant de 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 142 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente et irrégulière (environ tous les 2 à 3 mois). La dernière commande remonte au 28 août 2025, soit 55 jours avant la date actuelle. Bien que le cycle soit incertain, le délai écoulé dépasse largement les 70% de l'intervalle moyen constaté, ce qui induit un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane historique sur les commandes récentes et N-1 est de 1 unité. Conformément à la règle de ne pas surestimer sur les faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 173 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 août 2025, soit 55 jours avant la date actuelle. L'historique montre une rotation très faible et espacée (environ tous les 2 à 3 mois). Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement les 70% du cycle moyen estimé, ce qui induit un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B. Conformément aux règles pour les rotations faibles (1-2u), la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 141 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>4. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 août 2025, soit 55 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 3 mois entre juin et septembre). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 168 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 28 août 2025, soit 55 jours. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour éviter une rupture, conformément au principe de précaution B2B en cas de cycle incertain. ÉTAPE 2 : L'historique (récent et N-1) est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. En respectant la règle de ne pas augmenter les quantités sur les rotations faibles, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 174 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28/08/2025, soit 55 jours. Le cycle précédent était de 50 jours (entre juillet et août). Nous avons dépassé le cycle habituel et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une rotation très faible et constante de 1 unité par commande. La médiane des quantités est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 173 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>7. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles historiques observés (environ 5-6 mois entre les commandes en 2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 133 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>8. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique montre des commandes sporadiques (avril 2024, juillet 2025). En application du principe de précaution B2B (si doute sur le cycle → prévoir), une commande est nécessaire pour éviter une rupture prolongée sur un horizon de 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 183 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>9. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en septembre (1u). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes unitaires (1u) en dehors d'un pic exceptionnel à 4u. La médiane des commandes (hors pic) est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 181 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 09/07/2025, soit plus de 100 jours sans activité. Bien que le cycle soit très lent, le délai écoulé dépasse largement les standards de rotation habituels, créant un doute sur l'état du stock (principe de précaution B2B). En l'absence de commandes récentes multiples pour établir une moyenne, on applique la règle de maintien de la quantité minimale observée sur la période la plus proche (2u) pour éviter une rupture tout en limitant le risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 134 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>11. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité stricte à 1 unité par commande. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 173 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>12. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Absence de commandes récentes mais présence d'un historique à N-1 (juin 2024). Bien que la date actuelle (octobre) soit éloignée de la dernière commande connue, le principe de précaution B2B s'applique en l'absence de cycle de rotation défini. En cas de doute sur le besoin ou d'historique irrégulier, la règle impose de prévoir une commande pour éviter une rupture potentielle. La quantité retenue est de 1 unité, correspondant au volume historique constaté, respectant la règle de maintien des rotations faibles sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 129 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>13. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande le 20 septembre 2024. Avec une date actuelle au 22 octobre et un seuil de réapprovisionnement de 30 jours, nous sommes dans la fenêtre anniversaire de consommation. En l'absence de cycle régulier (rotation faible et irrégulière), le principe de précaution B2B s'applique pour éviter une rupture sur un produit potentiellement saisonnier ou à rotation lente. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des quantités très faibles (1u et 3u). Conformément aux règles sur la rotation faible, on maintient la quantité minimale observée pour couvrir le besoin sans surstocker. La médiane/valeur basse de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 198 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>14. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 4u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sur ce produit. En l'absence de cycle de rotation défini (données manquantes), le principe de précaution B2B s'applique pour éviter une rupture potentielle. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la prévision se base sur la quantité commandée à la même période l'année précédente (4 unités). Cette quantité est maintenue pour assurer une disponibilité minimale sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 139 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>15. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 4u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucune commande récente, mais un historique existe à la même période l'année précédente (juin). En l'absence de données récentes pour établir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur une référence active du catalogue. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane récente, la quantité est basée sur l'historique N-1 (4 unités). Cette quantité est maintenue pour assurer une présence minimale en rayon sans risquer de surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 145 tokens
- **Total**: 1,020 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 07:06:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-04-18 06:54:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 07:06:47: 2u
- 2025-07-09 11:17:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-06-13 06:49:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 07:06:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-06-13 06:49:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 07:06:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-06-13 06:49:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 07:06:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-06-13 06:49:21: 1u
- 2024-04-18 06:54:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 07:06:47: 1u
- 2025-07-09 11:17:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:49:21: 1u
- 2024-04-18 06:54:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:17:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-04-18 06:54:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:17:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 06:54:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:17:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-06-13 06:49:21: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:17:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:49:21: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:17:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:49:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:29:05: 1u
- 2024-04-18 06:54:58: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:49:21: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:49:21: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:27.726Z*
