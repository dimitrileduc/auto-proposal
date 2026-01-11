# Rapport Backtest - Client SA INTERANS

## Contexte

- **Client** : SA INTERANS (ID: 56781)
- **Commande réelle** : S39597
- **Date commande** : 2025-10-13 07:41:43
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 46
- **Tokens**: 40,497 input + 6,597 output = 47,094 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.2% | 42 produits prédits, 19 corrects |
| **Rappel** | 82.6% | 23 produits réels, 19 détectés |
| **F1-Score** | 58.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.47 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août, soit 60 jours. Le cycle précédent était de 30 jours. Nous avons largement dépassé le cycle habituel et le délai depuis la dernière commande est supérieur au seuil de réapprovisionnement (30 jours). Par principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les faibles rotations, la quantité maintenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 156 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 août 2025, soit 60 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien que peu documenté, dépasse largement les délais de sécurité habituels pour ce type de produit bio. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité recommandée est de 2 unités pour couvrir la période à venir sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 195 tokens
- **Total**: 1,074 tokens



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
ÉTAPE 1 : La dernière commande remonte au 13 août, soit environ 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (30 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une régularité stricte de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 150 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août, soit environ 60 jours. Le cycle précédent était de 71 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour éviter la rupture (principe de précaution B2B). ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1 et 2 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 146 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 40 à 60 jours (juin-juillet-août). La dernière commande datant du 13 août, soit il y a 60 jours, le seuil de réapprovisionnement est largement atteint. En application du principe de précaution B2B et face à un cycle qui semble s'allonger, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent (rotation faible et régulière).

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 139 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>6. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 13 août, soit environ 60 jours. Le cycle précédent était de 30 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une quantité constante de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 149 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>7. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 90 jours (14 juillet). Bien que la rotation soit très faible (1 unité), l'absence de commandes récentes sur une longue période et l'approche d'un nouveau cycle potentiel justifient une commande de précaution pour éviter une rupture de stock prolongée. Conformément aux règles B2B, en cas de doute sur un cycle irrégulier, le réapprovisionnement est préconisé. La quantité est fixée à 1 unité, correspondant à la médiane historique et à la règle de maintien pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 124 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>8. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit il y a environ 90 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin (Étape 1), un risque de rupture est identifié. Pour la quantité (Étape 2), la règle de la médiane sur l'historique récent est appliquée : la seule valeur disponible étant 1 unité, cette quantité est maintenue pour éviter tout surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 143 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>9. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 41 jours entre les deux dernières commandes. La dernière commande datant du 14 juillet 2025, le délai écoulé (90 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane et à la constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 136 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>10. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 14 juillet 2025, soit environ 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'un cycle régulier établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 164 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>11. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit 90 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les rotations faibles (maintenir 1-2u), une commande de 1 unité est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 119 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>12. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 41 jours. La dernière commande remonte au 14 juillet 2025, soit 90 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une consommation constante de 1 unité par commande. La médiane des quantités étant de 1, cette valeur est retenue pour éviter tout surstockage sur un produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 156 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>13. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 90 jours (14 juillet). Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin en cas de cycle irrégulier, une commande est nécessaire pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la règle de maintien pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 110 tokens
- **Total**: 990 tokens



</details>


<details>
<summary><strong>14. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 168 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>15. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de ce type. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u (médiane de l'historique disponible) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 183 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>16. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 185 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>17. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 171 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>18. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation très faible avec une seule commande enregistrée il y a 131 jours (juin 2025). Bien que le cycle soit difficile à établir, le principe de précaution B2B s'applique face à une absence de réapprovisionnement depuis plus de 4 mois. Un besoin est donc détecté pour éviter une rupture prolongée. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue. Pour une rotation très faible (1u), la règle impose de maintenir cette quantité minimale sans l'augmenter. La médiane et la valeur la plus basse convergent vers 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 156 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>19. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à plus de 130 jours (juin 2025). Bien que la rotation soit très faible, l'absence de commandes récentes sur un produit actif et le dépassement du cycle de réapprovisionnement habituel induisent un risque de rupture ou un besoin de renouvellement de stock. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande de 2 unités (quantité identique à la dernière commande) est préconisée pour maintenir la disponibilité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 128 tokens
- **Total**: 1,002 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 11:56:21: 1u
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 11:56:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 11:56:21: 1u
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 11:56:21: 2u
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 11:56:21: 1u
- 2025-07-14 09:18:20: 1u
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 11:56:21: 1u
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (23)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de base, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est considéré comme nul faute de consommation enregistrée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:16:52.370Z*
