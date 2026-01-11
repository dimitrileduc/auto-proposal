# Rapport Backtest - Client Green Retail SRL

## Contexte

- **Client** : Green Retail SRL (ID: 52773)
- **Commande réelle** : S38082
- **Date commande** : 2025-07-16 06:21:25
- **Date cutoff système** : 2025-07-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,148 input + 2,743 output = 17,891 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 82.4% | 17 produits prédits, 14 corrects |
| **Rappel** | 58.3% | 24 produits réels, 14 détectés |
| **F1-Score** | 68.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.21 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 21.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (avril). En B2B, le principe de précaution s'applique pour éviter une rupture prolongée sur un produit à rotation lente mais régulière. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 158 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>2. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique) pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 167 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>3. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (juillet 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent et passé est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 165 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>4. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande le 2 juillet 2024. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (période estivale correspondante à l'an dernier), un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et passé est constant à 1 unité. La médiane est de 1. On maintient cette quantité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 162 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (02 juillet 2024). Le délai écoulé dépasse largement tout cycle raisonnable pour un produit en stock, induisant un risque de rupture ou un besoin de renouvellement face à la saisonnalité observée l'an dernier. ÉTAPE 2 : Estimation quantité. L'historique complet (récent et N-1) est constant à 1 unité. En respectant la règle de maintien pour les rotations faibles (1-2u) et la médiane historique, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 177 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>6. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en juillet (02/07/2024). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique (récent et N-1) est constant à 1 unité par commande. La médiane des quantités est de 1. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 184 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte à plus de 110 jours (25 mars 2025). Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (juillet 2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle long/irrégulier, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. On maintient cette quantité minimale pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 153 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 25 mars 2025, soit plus de 110 jours sans activité pour ce produit. Bien que le cycle soit irrégulier et la rotation très faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la période correspondant à la commande de l'année précédente (avril). En suivant la règle de la médiane des commandes récentes et le maintien des volumes pour les faibles rotations, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 125 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (juillet 2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais cyclique, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 166 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 25 mars 2025, soit 112 jours. Bien que l'historique récent soit limité à une seule commande, l'historique N-1 montre une activité en juillet (02/07/2024). Compte tenu du délai important depuis la dernière commande et de la saisonnalité observée l'an dernier, il existe un risque de rupture ou un besoin de renouvellement de stock dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des volumes très faibles (1u ou 2u). En application de la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 200 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles observés l'année précédente (environ 90 jours entre avril et juillet 2024). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 133 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>12. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année dernière (juillet 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 171 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>13. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 25 mars 2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin incertain, une commande est nécessaire pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane historique récente pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 113 tokens
- **Total**: 986 tokens



</details>


<details>
<summary><strong>14. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (dernière commande il y a 112 jours). Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la même période l'année précédente (juillet 2024). Conformément aux règles pour les faibles rotations, la quantité est fixée à 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 116 tokens
- **Total**: 1,007 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u
- 2024-04-05 06:34:58: 1u
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u
- 2024-04-05 06:34:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-25 07:32:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-02 06:27:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (10)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV145] LV Sauce Tartare 200 ml  | 1 | Never ordered in previous analysis window (no history) |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Never ordered in previous analysis window (no history) |
| [LV140] LV Moutarde à l'ancienne  200ml | 1 | Never ordered in previous analysis window (no history) |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV135] LV Tartinade Basilico 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Never ordered in previous analysis window (no history) |
| [LV217] LV Tartinade Basilic 380g | 1 | Never ordered in previous analysis window (no history) |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:56.287Z*
