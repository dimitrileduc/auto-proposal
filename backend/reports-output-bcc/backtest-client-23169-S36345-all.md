# Rapport Backtest - Client Die Auffüllerei GmbH

## Contexte

- **Client** : Die Auffüllerei GmbH (ID: 23169)
- **Commande réelle** : S36345
- **Date commande** : 2025-04-23 09:55:52
- **Date cutoff système** : 2025-04-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,775 input + 1,692 output = 11,467 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 90.0% | 10 produits prédits, 9 corrects |
| **Rappel** | 69.2% | 13 produits réels, 9 détectés |
| **F1-Score** | 78.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RF003] REFIELD Maïs 500G  | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 28 janvier 2025, soit 84 jours. Bien que l'historique récent soit limité à une seule commande de 2 unités, l'historique N-1 montre une activité à cette même période (avril 2024). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane du volume récent le plus proche, afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 138 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>2. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 28 janvier 2025, soit environ 84 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment (le produit semble être commandé tous les 3 à 4 mois). En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold Days), un besoin est détecté. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur de la commande la plus récente, afin de maintenir le stock sans risque de surstockage sur une référence à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 145 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 janvier 2025, soit 84 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle sur les cycles irréguliers/difficiles à déterminer, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (3 unités) est retenue comme référence pour maintenir le stock, conformément à la règle de maintien des rotations régulières/faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 171 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 janvier 2025, soit 84 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 1u. La médiane des commandes (1u, 3u, 1u) est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 177 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>5. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 janvier 2025, soit 84 jours sans activité pour ce produit. Bien que l'historique soit limité à une seule commande de 2 unités, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande de réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 154 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>6. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 28/01/2025, soit 84 jours. Bien que l'historique soit irrégulier, l'analyse N-1 montre une commande à la même période (08/04/2024). En application du principe de précaution B2B et face à un cycle incertain, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 affiche une quantité constante de 2 unités. La médiane des commandes significatives (hors pic exceptionnel de 8u en 2023) est de 2 unités. On maintient cette quantité stable conformément à la règle des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 189 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>7. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 28 janvier 2025, soit 84 jours avant la date actuelle. L'historique montre une rotation très faible et irrégulière (intervalles de plusieurs mois). Selon le principe de précaution B2B, l'absence de commande récente combinée à un cycle imprévisible crée une incertitude sur le niveau de stock actuel. Un besoin est donc détecté pour couvrir les 30 prochains jours. La quantité retenue est de 4 unités, correspondant à la médiane du volume de commande le plus récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 139 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>8. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 28/01/2025, soit 84 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande à la même période (08/04/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une récurrence de 2 unités. La médiane des commandes (hors pic exceptionnel de 4u en 2023) est de 2u. On maintient cette quantité stable conformément à la règle sur les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 186 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>9. [RF003] REFIELD Maïs 500G </strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 janvier 2025, soit 84 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 128 tokens
- **Total**: 998 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-08 06:44:26: 4u
- 2023-09-14 11:57:40: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-08 06:44:26: 2u
- 2023-09-14 11:57:40: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-08 06:44:26: 3u
- 2023-09-14 11:57:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-08 06:44:26: 2u
- 2023-09-14 11:57:40: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-08 06:44:26: 5u
- 2023-09-14 11:57:40: 8u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-08 06:44:26: 2u
- 2023-09-14 11:57:40: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [RF003] REFIELD Maïs 500G </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-28 08:03:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [MF0021] MF Sauce BBQ 250ml | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 90 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 15 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0050] MF Cornichons aigre doux (belge) 500g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de consommation, il est impossible d'établir un cycle de rotation ou une quantité médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée tant qu'un besoin n'est pas manifesté.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:24:19.176Z*
