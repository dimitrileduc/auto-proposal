# Rapport Backtest - Client L'ARTMONIE

## Contexte

- **Client** : L'ARTMONIE (ID: 60384)
- **Commande réelle** : S40319
- **Date commande** : 2025-11-14 10:35:02
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,978 input + 2,554 output = 18,532 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.7% | 17 produits prédits, 11 corrects |
| **Rappel** | 68.8% | 16 produits réels, 11 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.82 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -24.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre une commande tous les 42 jours environ. La dernière commande remontant au 27 août (soit 78 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 4 unités, correspondant à la valeur basse de l'historique récent (médiane entre 4 et 5) afin de limiter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 141 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 4u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août, soit 78 jours. Le cycle précédent était de 42 jours. Le délai actuel dépasse largement le cycle moyen et l'horizon de 30 jours (Replenishment Threshold Days). Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente mais existante, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 4u et 5u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 166 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 août 2025, soit 78 jours avant la date actuelle (13 novembre). Le cycle précédent était de 42 jours. Le délai depuis la dernière commande dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique, un besoin est détecté par principe de précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 178 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août, soit 78 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (42 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 3u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour ne pas surestimer le stock, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 168 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 27 août, soit 78 jours. Bien que le cycle précédent était de 42 jours, l'absence de commande récente sur un produit à faible rotation crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une régularité stricte de 2 unités par commande. La médiane et la quantité constante étant de 2, cette valeur est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 149 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le cycle de commande observé est d'environ 42 jours (entre juillet et août). La dernière commande remontant au 27 août 2025, soit il y a 78 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 121 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse montre un cycle de commande d'environ 42 jours. La dernière commande remontant au 27 août (soit plus de 75 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée lors des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 119 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>8. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle précédent de 42 jours. Depuis la dernière commande du 27 août 2025, 78 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 120 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>9. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 78 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour un produit de snacking. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (2u) est retenue comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 158 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>10. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 27 août, soit 78 jours. Bien que le cycle précédent soit de 42 jours, l'absence de commande récente et le dépassement du cycle habituel créent une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec deux commandes de 4 unités. La médiane et la quantité constante étant de 4, cette valeur est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 150 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>11. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 78 jours avant la date actuelle. Le cycle précédent était de 42 jours. Le délai écoulé dépasse largement le cycle moyen et l'horizon de 30 jours du seuil de réapprovisionnement. Par principe de précaution B2B et face à l'irrégularité du cycle, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 175 tokens
- **Total**: 1,065 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 5u
- 2025-07-16 06:17:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 5u
- 2025-07-16 06:17:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 3u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 3u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 2u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 2u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 2u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 2u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 4u
- 2025-07-16 06:17:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>11. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:14:33: 3u
- 2025-07-16 06:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Predicted 2u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 3 | Predicted 3u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 3 | Predicted 3u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 4 | Predicted 4u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 4 | Predicted 4u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 5 | Never ordered in previous analysis window (no history) |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Never ordered in previous analysis window (no history) |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 6 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:34.563Z*
