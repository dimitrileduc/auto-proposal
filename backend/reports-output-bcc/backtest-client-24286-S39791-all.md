# Rapport Backtest - Client La Baraque à Vrac

## Contexte

- **Client** : La Baraque à Vrac (ID: 24286)
- **Commande réelle** : S39791
- **Date commande** : 2025-10-21 07:57:36
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,675 input + 2,143 output = 13,818 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.9% | 13 produits prédits, 10 corrects |
| **Rappel** | 47.6% | 21 produits réels, 10 détectés |
| **F1-Score** | 58.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 10.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 juin 2025, soit plus de 120 jours, ce qui dépasse largement les cycles historiques observés (environ 4 mois entre les commandes majeures). Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une activité avait été enregistrée en fin d'année N-1 (novembre). La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 2, 3, 4), en privilégiant la valeur basse par sécurité pour ce type de produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 160 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière. La dernière commande remonte au 19 juin 2025 (soit 123 jours). Bien que le cycle soit difficile à déterminer avec précision, le principe de précaution B2B s'applique car nous entrons dans une période où des commandes ont été enregistrées l'année précédente (novembre). En cas de doute sur le cycle, la détection du besoin est positive. Pour la quantité, la médiane des commandes historiques et la règle sur les produits à faible rotation (1-2u) imposent de rester sur le volume le plus bas constaté récemment pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 152 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit 123 jours. L'historique montre un cycle de commande irrégulier (environ tous les 3 à 4 mois). Étant donné le délai important depuis la dernière commande et l'approche de la période de fin d'année (commande enregistrée en novembre 2023), il existe un risque de rupture ou un besoin imminent. En application du principe de précaution B2B, le besoin est validé. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes stables de 1u ou 2u. La médiane des commandes passées est de 2u. Conformément aux règles de rotation faible, nous maintenons la quantité médiane de 2u pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 196 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 juin 2025, soit plus de 120 jours sans activité, ce qui dépasse largement les cycles historiques observés (environ 90 jours entre les commandes de 2024). Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la même période en 2023 (novembre). La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (3u), en écartant le pic ponctuel de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 153 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (mars à juin). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes constants de 2u et 3u. La médiane des commandes est de 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 182 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>6. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (mieux vaut prévenir une rupture incertaine), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 882 tokens
- **Output**: 159 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>7. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 juin 2025, soit 123 jours sans activité pour ce produit. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée sur une référence active), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 129 tokens
- **Total**: 1,006 tokens



</details>


<details>
<summary><strong>8. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 19 juin 2025, soit 123 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement. Le risque de rupture est considéré comme probable ou le besoin de renouvellement de stock est nécessaire pour maintenir la référence en rayon. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la règle de maintien de la quantité habituelle pour les rotations faibles (1-2u) est appliquée. La quantité retenue est donc de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 187 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit 123 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle de détection d'un besoin en cas de cycle irrégulier ou incertain, une commande est nécessaire pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité de 2 unités est reconduite.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 176 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée) et face à l'absence d'historique plus dense, une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane (et valeur unique) de l'historique récent, respectant la règle de maintien des faibles rotations sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 143 tokens
- **Total**: 1,018 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:27:23: 3u
- 2024-03-22 14:09:14: 2u
- 2023-11-30 08:32:36: 4u
- 2023-11-23 15:39:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:27:23: 2u
- 2024-03-22 14:09:14: 3u
- 2023-11-30 08:32:36: 4u
- 2023-11-23 15:39:05: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:27:23: 1u
- 2024-03-22 14:09:14: 2u
- 2023-11-23 15:39:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:27:23: 3u
- 2024-03-22 14:09:14: 3u
- 2023-11-30 08:32:36: 4u
- 2023-11-23 15:39:05: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:27:23: 3u
- 2024-03-22 14:09:14: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:19:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 2 | Predicted 2u but not ordered |


---

## False Negatives (11)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Never ordered in previous analysis window (no history) |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Never ordered in previous analysis window (no history) |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Never ordered in previous analysis window (no history) |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Never ordered in previous analysis window (no history) |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Never ordered in previous analysis window (no history) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:35.306Z*
