# Rapport Backtest - Client DLL PROXY RAEREN PETERGENSFELD

## Contexte

- **Client** : DLL PROXY RAEREN PETERGENSFELD (ID: 38869)
- **Commande réelle** : S40037
- **Date commande** : 2025-11-03 07:57:00
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 29,787 input + 5,339 output = 35,126 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 33 produits prédits, 22 corrects |
| **Rappel** | 75.9% | 29 produits réels, 22 détectés |
| **F1-Score** | 71.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 29.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (22)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (22 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 2 à 3 mois. La dernière commande remontant au 5 septembre 2025 (soit 58 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent et N-1 est extrêmement stable avec une médiane de 2 unités. En suivant le principe de précaution B2B et la stabilité de la rotation, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 140 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 58 jours. Le cycle précédent était de 67 jours. À 58 jours, nous avons dépassé 70% du cycle moyen estimé (environ 62-65 jours). Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité à 2 unités (médiane des commandes de 2025). Bien que l'historique N-1 montre des volumes plus faibles (1u) à cette période, la tendance récente de 2025 prime pour maintenir le niveau de service. La quantité retenue est donc de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 188 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>3. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remonte au 05/09/2025, soit 58 jours avant la date actuelle. Étant donné que le délai moyen entre les commandes est proche de 60-70 jours, le risque de rupture dans les 30 prochains jours (Replenishment Threshold Days) est élevé. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent et N-1 montre une stabilité à 1 unité (médiane). On maintient donc une commande de 1 unité pour couvrir le prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 164 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/09/2025, soit 58 jours. L'historique montre un cycle moyen d'environ 60 à 70 jours (ex: juin à septembre 2025, ou août à octobre 2024). Nous sommes à >80% du cycle moyen, le risque de rupture dans les 30 prochains jours est élevé. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité entre 2u et 3u. La médiane des commandes est de 2u. En respectant le principe de précaution B2B et la règle de choisir la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 188 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>5. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 05/09/2025, soit 58 jours. Le cycle précédent était de 67 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons un intervalle de 88 jours, ce qui dépasse largement le cycle moyen observé. Le risque de rupture est élevé. ÉTAPE 2 : L'historique récent montre une stabilité à 2 unités par commande (juin et septembre 2025). Conformément à la règle de la médiane et du maintien des quantités pour les rotations régulières, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 152 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>6. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit environ 58 jours. Bien que la rotation soit faible, l'historique montre une commande à la même période l'année précédente (août) et un intervalle récent de 67 jours entre juin et septembre. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour maintenir le stock. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique est constant avec des commandes unitaires (médiane = 1). On maintient cette quantité de 1 unité conformément à la règle sur les rotations très faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 179 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>7. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 58 jours. Bien que la rotation soit faible, l'historique montre une commande à la même période l'année dernière (août) et un intervalle récent d'environ 65 jours entre juin et septembre. Nous atteignons le seuil critique du cycle de rotation. Par principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires (médiane = 1). Conformément à la règle sur les rotations très faibles, on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 175 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 58 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle annuel suggéré par l'historique N-1 (août). En B2B, le principe de précaution s'applique pour éviter une rupture prolongée sur un produit à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 158 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>9. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit environ 58 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (août). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou le besoin de renouveler ce stock de faible rotation est présent selon le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires (médiane = 1). Conformément aux règles sur les rotations faibles (1-2u), la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 167 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>10. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 58 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle suggéré par l'historique N-1 (août/septembre). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé pour ce produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 147 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>11. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 58 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle annuel suggéré par l'historique N-1 (août). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 883 tokens
- **Output**: 178 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>12. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/09/2025, soit 58 jours. L'intervalle précédent était de 67 jours. À 58 jours, nous atteignons 86% du cycle moyen observé (70% étant le seuil d'alerte). Le risque de rupture est réel dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En application de la règle de la médiane et du principe de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 173 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>13. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à plus de 4 mois (125 jours). Bien que la rotation soit très faible, l'absence de commandes récentes sur un cycle long crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée), un réapprovisionnement est préconisé. La quantité retenue correspond à la dernière commande connue (2 unités), respectant la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 118 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>14. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à plus de 4 mois (125 jours). Bien que la rotation soit très faible, l'absence de commandes récentes sur un produit actif crée une incertitude sur le cycle de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée), une commande est préconisée. La quantité retenue correspond à la dernière commande connue (2 unités), conformément à la règle de maintien des volumes pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 117 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>15. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le délai écoulé suggère un besoin de renouvellement du stock pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité de 2 unités est maintenue pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 156 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>16. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de cycle régulier impose l'application du principe de précaution B2B pour éviter une rupture de stock prolongée, surtout à l'approche d'un nouvel horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 162 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>17. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande long et irrégulier (environ 3 à 4 mois). La dernière commande datant du 30 juin 2025 (soit plus de 120 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B et pour éviter une rupture prolongée sur ce produit à faible rotation, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 137 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>18. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 jours entre août et octobre). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique montre des commandes de 1u et 2u. La médiane des commandes récentes et historiques est de 2u. Conformément à la règle de maintien des faibles rotations, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 174 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>19. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que l'historique récent soit faible, l'historique N-1 montre une commande à la même période (11 octobre 2024). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique global montre des commandes de 1, 2 et 3 unités. La médiane de l'historique disponible est de 2 unités. Conformément à la règle de ne pas surestimer et de privilégier la médiane en cas de doute, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 191 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>20. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (avril à octobre). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u et 2u. La médiane des commandes récentes et historiques se situe à 2u. Conformément à la règle de maintien des rotations régulières, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 170 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>21. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée sur un produit actif, surtout face à un cycle irrégulier. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 142 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>22. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité à cette période (octobre/août). Le délai depuis la dernière commande connue est largement supérieur au cycle habituel, créant une incertitude. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique montre une rotation très faible et constante de 1 unité. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 160 tokens
- **Total**: 1,052 tokens



</details>




### Donnees d'Input LLM (22 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 2u
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 2u
- 2024-08-19 06:00:00: 2u
- 2024-06-06 08:33:32: 1u
- 2024-04-15 11:58:47: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 2u
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 1u
- 2024-04-15 11:58:47: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 1u
- 2024-06-06 08:33:32: 1u
- 2024-04-15 11:58:47: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 2u
- 2025-06-30 12:09:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 2u
- 2024-08-19 06:00:00: 2u
- 2024-06-06 08:33:32: 3u
- 2024-04-15 11:58:47: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 2u
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF021] JF PICKLES 350 ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 10:10:01: 1u
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 2u
- 2024-06-06 08:33:32: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 2u
- 2024-06-06 08:33:32: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-04-15 11:58:47: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:18:36: 1u
- 2024-08-19 06:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LD004] LD Tartinade Tomate Basilic bio 180g | 1 | Never ordered in previous analysis window (no history) |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Never ordered in previous analysis window (no history) |
| [LD015] LD Onion Spread 180g | 1 | Never ordered in previous analysis window (no history) |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Never ordered in previous analysis window (no history) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Never ordered in previous analysis window (no history) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:13:34.426Z*
