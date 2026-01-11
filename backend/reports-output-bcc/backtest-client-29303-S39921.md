# Rapport Backtest - Client LA FERME DE BERGIFA

## Contexte

- **Client** : LA FERME DE BERGIFA (ID: 29303)
- **Commande réelle** : S39921
- **Date commande** : 2025-10-27 07:19:24
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 43
- **Tokens**: 37,967 input + 6,445 output = 44,412 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 40 produits prédits, 20 corrects |
| **Rappel** | 100.0% | 20 produits réels, 20 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.05 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 2.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 19 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (20)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (20 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit 68 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (68 jours vs 68 jours). En application du principe de précaution B2B et face à un cycle irrégulier/long, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 160 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit plus de 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (68 jours). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 160 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit 68 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle observé précédemment (68 jours vs 68 jours). Dans un contexte B2B, le principe de précaution s'applique pour éviter une rupture prolongée, d'autant plus que l'horizon de réapprovisionnement est de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (médiane = 1). Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans chercher à augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 165 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 68 jours. L'historique montre un cycle irrégulier (environ 60-70 jours entre les commandes). Étant donné que nous sommes à 68 jours et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent ou le cycle est déjà dépassé. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute et maintien des faibles rotations), la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 192 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>5. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 19 août 2025, soit plus de 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle suggéré par l'historique (comparaison avec juillet/août). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un besoin est détecté. ÉTAPE 2 : L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 164 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>6. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 68 jours entre les deux dernières commandes. La dernière commande datant du 19 août 2025, soit il y a 68 jours, nous atteignons 100% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation faible mais régulière, la quantité retenue est de 1 unité, correspondant à la médiane et au volume constant des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 132 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit 68 jours. Le cycle précédent était de 68 jours. Nous sommes exactement à l'échéance du cycle moyen constaté. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le besoin de renouvellement est certain selon le principe de précaution B2B. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité parfaite de 1 unité par commande. La médiane est de 1. On maintient cette quantité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 141 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 68 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle mensuel standard. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin de réapprovisionnement est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. En l'absence de données complémentaires ou de saisonnalité N-1, la médiane de 1 unité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 175 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 68 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation est incertain ou très espacé. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien de la médiane historique, la quantité recommandée est de 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 160 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>10. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19 août, soit 68 jours avant la date actuelle. Bien que le cycle soit irrégulier (61 jours entre les deux premières commandes), le délai actuel dépasse largement la moyenne constatée. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une commande de 6u suivie d'une commande de 1u. Pour une rotation faible et irrégulière, la règle impose de privilégier la quantité la plus basse pour éviter le surstockage. La médiane/valeur basse de 1u est donc retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 181 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 12 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles habituels observés entre 2024 et 2025. En application du principe de précaution B2B et face à l'incertitude du cycle sur ce produit à faible rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 153 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>12. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 12 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable, créant un risque de rupture de stock pour ce produit à longue conservation. En application du principe de précaution B2B (détection d'un besoin incertain), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une commande de 1u et l'historique N-1 une commande de 2u. Conformément à la règle sur les rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 173 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 12 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés (comparaison avec juillet N-1). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane du volume récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 124 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (1 unité en juin 2025, 1 unité en juillet 2024). Plus de 130 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement un cycle annuel ou saisonnier théorique. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle des rotations faibles (1-2u), une commande de 1 unité est préconisée pour reconstituer le stock, en se basant sur la médiane historique constante de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 137 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>15. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 12 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 168 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>16. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 136 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B s'applique face à l'incertitude du besoin après une si longue période sans mouvement. Conformément aux règles de gestion des rotations faibles (1-2u), une quantité de 1 unité est préconisée (médiane de l'historique récent) pour couvrir un éventuel besoin sans risquer de surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 128 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>17. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 136 jours. Bien que le cycle soit irrégulier et difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit de fond de rayon. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 120 tokens
- **Total**: 992 tokens



</details>


<details>
<summary><strong>18. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 12 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de cycle régulier et le délai important depuis le dernier mouvement imposent une commande de précaution pour éviter une rupture de stock prolongée sur cette référence (principe de précaution B2B). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unitaire (1u). Conformément aux règles de rotation très faible, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 144 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>19. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 130 jours (12 juin), ce qui dépasse largement tout cycle de rotation standard pour un produit de ce type. Bien que la rotation soit très faible (1 unité), le principe de précaution B2B et l'incertitude sur le cycle imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles de gestion des faibles rotations, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 111 tokens
- **Total**: 986 tokens



</details>


<details>
<summary><strong>20. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 12 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le principe de précaution B2B et l'absence d'historique complet imposent de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée sur cette référence. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 162 tokens
- **Total**: 1,033 tokens



</details>




### Donnees d'Input LLM (20 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 2u
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:51:46: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:51:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:12:24: 1u
- 2025-06-19 10:37:13: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-02 08:13:22: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:51:46: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:51:46: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 10:51:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:25:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (20)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [RIT01] RITCHIE Orange - verre 275ml | 6 | Predicted 6u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 4 | Predicted 4u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:56.932Z*
