# Rapport Backtest - Client La Ferme Colyn

## Contexte

- **Client** : La Ferme Colyn (ID: 21046)
- **Commande réelle** : S39557
- **Date commande** : 2025-10-27 10:02:31
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,551 input + 1,238 output = 8,789 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 8 produits prédits, 8 corrects |
| **Rappel** | 57.1% | 14 produits réels, 8 détectés |
| **F1-Score** | 72.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 75.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 10.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours sans réapprovisionnement. Bien que l'historique montre une rotation faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 à 130 jours). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 3 unités, correspondant à la médiane et au volume de la commande la plus récente, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 138 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours sans activité. Bien que l'historique récent soit limité à une seule commande de 2 unités, l'historique de l'année précédente montre une commande à la même période (8 octobre 2024) pour 3 unités. En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane de l'historique global et à la valeur la plus basse entre les commandes récentes et N-1 pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 161 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours. L'historique N-1 montre une commande systématique en octobre (08/10/2024) et décembre. Bien que le cycle soit irrégulier en 2025, l'absence de commande depuis juillet et la saisonnalité historique indiquent un risque de rupture imminent ou un besoin de réapprovisionnement pour la période de fin d'année. Le principe de précaution B2B s'applique. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique long terme est extrêmement stable avec des commandes de 3 unités. La commande récente de 2 unités est isolée. En suivant la règle de la médiane historique et la stabilité du produit sur N-1, la quantité de 3 unités est retenue pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 211 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours. Bien que la rotation soit très faible et irrégulière, l'historique de l'année précédente montre une commande en octobre (08/10/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane basse des commandes récentes et à la dernière commande enregistrée, afin d'éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 147 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours. Bien que l'historique récent soit faible, l'historique N-1 montre une commande systématique en octobre (08/10/2024). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente mais régulière, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane la plus basse observée sur les commandes les plus récentes (2025 et fin 2024), conformément à la règle de ne pas surestimer les stocks de sécurité.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 156 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande espacé mais régulier (environ tous les 2 à 3 mois). La dernière commande remontant au 18 juillet 2025 (soit plus de 100 jours), le risque de rupture est imminent pour couvrir les 30 prochains jours. Bien que la commande la plus récente soit de 1 unité, l'historique long terme (N-1) est systématiquement de 2 unités. En application du principe de précaution B2B et pour respecter la médiane historique stable, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 139 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 70 à 80 jours. La dernière commande datant du 18 juillet 2025 (soit 100 jours avant la date actuelle), le délai de réapprovisionnement habituel est largement dépassé. Il existe un risque de rupture imminent ou avéré dans l'horizon des 30 jours (Replenishment Threshold). La quantité est fixée à 6 unités, ce qui correspond à la médiane constante observée sur l'ensemble des commandes de 2024 et 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 139 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours sans activité pour ce produit. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est préconisée. La quantité est fixée à 2 unités, correspondant à la médiane (et valeur unique) de la commande la plus récente, respectant la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 147 tokens
- **Total**: 1,016 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 3u
- 2024-05-23 13:46:24: 2u
- 2024-03-19 07:34:06: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 3u
- 2024-05-23 13:46:24: 2u
- 2024-03-19 07:34:06: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 3u
- 2024-08-19 13:32:29: 3u
- 2024-05-23 13:46:24: 3u
- 2024-03-19 07:34:06: 3u
- 2024-01-09 15:16:31: 3u
- 2023-12-12 13:30:35: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 1u
- 2024-08-19 13:32:29: 2u
- 2024-05-23 13:46:24: 1u
- 2024-03-19 07:34:06: 3u
- 2024-01-09 15:16:31: 3u
- 2023-12-12 13:30:35: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 2u
- 2024-08-19 13:32:29: 3u
- 2024-05-23 13:46:24: 3u
- 2024-03-19 07:34:06: 3u
- 2024-01-09 15:16:31: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 2u
- 2024-08-19 13:32:29: 2u
- 2024-05-23 13:46:24: 2u
- 2024-03-19 07:34:06: 2u
- 2024-01-09 15:16:31: 2u
- 2023-12-12 13:30:35: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:40:03: 6u
- 2024-08-19 13:32:29: 6u
- 2024-05-23 13:46:24: 6u
- 2024-03-19 07:34:06: 6u
- 2024-01-09 15:16:31: 6u
- 2023-12-12 13:30:35: 3u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 08:33:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [RF002] REFIELD Passata tomates 500G | 2 | Never ordered in previous analysis window (no history) |
| [LV136] LV Tartinade Betterave 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Never ordered in previous analysis window (no history) |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 4 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 24 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:17.523Z*
