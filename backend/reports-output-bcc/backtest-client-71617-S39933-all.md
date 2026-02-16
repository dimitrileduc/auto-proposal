# Rapport Backtest - Client FLORIAL CENTRE SRL

## Contexte

- **Client** : FLORIAL CENTRE SRL (ID: 71617)
- **Commande réelle** : S39933
- **Date commande** : 2025-10-28 15:03:07
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 17,729 input + 2,975 output = 20,704 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 20 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.70 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 36.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 5 | 3.0 | 60.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée) et conformément à la règle sur les rotations faibles, une commande de 1 unité est préconisée pour reconstituer le stock minimal, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 121 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation très faible et irrégulière (dernière commande il y a 105 jours). Selon le principe de précaution B2B, en cas de cycle difficile à déterminer ou de doute sur la rotation, il convient de prévoir une commande pour éviter une rupture prolongée. La médiane des commandes récentes est de 1,5u ; conformément aux règles de gestion des faibles rotations (1-2u) et à la consigne de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 127 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (environ 40 jours) crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (doute sur le cycle = prévoir), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 179 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet, soit plus de 100 jours. Bien que la rotation soit lente, l'intervalle entre les deux commandes précédentes était de 41 jours. Le délai actuel dépasse largement ce cycle moyen, ce qui indique un besoin de réapprovisionnement par principe de précaution B2B pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec deux commandes de 3 unités. La médiane est de 3. Conformément aux règles de maintien des quantités sur rotation régulière, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 151 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>5. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 juillet 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (approx. 40 jours). En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes de 1u et 2u. Conformément à la règle de rotation faible et au choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 174 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>6. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 14 juillet, soit plus de 100 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (environ 40 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une régularité stricte de 2 unités par commande. La médiane et la quantité constante étant de 2, cette valeur est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 145 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 14 juillet 2025, soit plus de 100 jours. Le cycle précédent était de 41 jours. Le délai actuel dépasse largement le cycle moyen et l'horizon de 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation irrégulière, un besoin de réapprovisionnement est détecté. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre des commandes de 3u et 4u. La médiane est de 3,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 183 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 juillet 2025, soit 105 jours avant la date actuelle. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (41 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 3u. La médiane est de 2,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 182 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>9. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 41 jours. La dernière commande remonte au 14 juillet 2025, soit plus de 100 jours sans activité. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une constance absolue avec des commandes de 2 unités. La médiane et la règle de rotation régulière (3-5 dernières identiques ou tendance stable) imposent de maintenir cette quantité de 2 unités sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 173 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>10. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/06/2025, soit plus de 140 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 120 tokens
- **Total**: 995 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 1u
- 2025-06-03 12:05:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 2u
- 2025-06-03 12:05:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 3u
- 2025-06-03 12:05:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 1u
- 2025-06-03 12:05:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 2u
- 2025-06-03 12:05:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 4u
- 2025-06-03 12:05:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 3u
- 2025-06-03 12:05:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:32:55: 2u
- 2025-06-03 12:05:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:05:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 2 | Predicted 2u but not ordered |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV345] LV Spread KIDS 200ml Organic | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:13:55.619Z*
