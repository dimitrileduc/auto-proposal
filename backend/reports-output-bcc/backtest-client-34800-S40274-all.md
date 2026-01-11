# Rapport Backtest - Client Gut unverpackt

## Contexte

- **Client** : Gut unverpackt (ID: 34800)
- **Commande réelle** : S40274
- **Date commande** : 2025-11-12 14:27:18
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 9,136 input + 1,593 output = 10,729 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 8 produits prédits, 8 corrects |
| **Rappel** | 66.7% | 12 produits réels, 8 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 26.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle (11 novembre). L'historique montre des cycles longs et irréguliers (environ 60 à 90 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes stables entre 3 et 5 unités. La médiane des commandes (3, 4, 4, 5) est de 4 unités. Conformément à la règle de maintien des rotations régulières et de la médiane, la quantité retenue est de 4.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 196 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>2. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 3 mois entre les commandes). En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur de la commande la plus récente, afin de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 131 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle (11 novembre). L'historique montre des cycles de commande variant entre 45 et 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. En application du principe de précaution B2B, le besoin est validé. ÉTAPE 2 : Estimation quantité. L'historique récent affiche une commande de 3u. L'historique N-1 sur la même période (octobre/novembre) montre des volumes de 2u à 4u. La médiane des commandes significatives se situe à 3u. On maintient cette quantité pour couvrir le cycle suivant sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 193 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 4u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle (11 novembre). Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 45 à 60 jours). En application du principe de précaution B2B et face à un cycle incertain, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. La commande la plus récente est de 4 unités. L'historique N-1 montre des volumes faibles (1 à 3 unités). En privilégiant la stabilité du flux récent tout en restant prudent, la quantité de 4 unités est retenue pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 188 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle. L'historique montre une rotation lente mais régulière avec des intervalles variant de 45 à 60 jours. Étant donné que nous avons dépassé le délai habituel de réapprovisionnement et que le seuil de 30 jours est engagé, le risque de rupture est imminent. ÉTAPE 2 : Estimation quantité. L'historique récent affiche une commande de 4u, tandis que l'historique N-1 oscille entre 1u et 5u. La médiane des commandes historiques est de 2u. En application du principe de précaution B2B (prévoir en cas de doute) tout en évitant le surstockage sur un produit à faible rotation, la quantité retenue est la médiane de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 206 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>6. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle. Bien que l'historique récent soit limité à une seule commande, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 45 à 60 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. En application du principe de précaution B2B et de la règle de maintien des quantités régulières, la quantité retenue est de 4 unités, correspondant au dernier volume commandé.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 137 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>7. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle. Bien que l'historique récent soit limité à une seule commande, l'historique N-1 montre une activité régulière à cette période (octobre/novembre). Le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 2, 2, 4), en privilégiant la valeur prudente pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 166 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>8. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Bien qu'il n'y ait pas de commandes récentes, l'historique N-1 montre une activité sur ce produit. En l'absence de données récentes pour infirmer la rotation, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée, d'autant plus que le cycle est difficile à déterminer. ÉTAPE 2 : ESTIMATION QUANTITÉ. En se basant sur l'historique disponible (N-1), la quantité est constante à 2 unités. La médiane des commandes passées est de 2. Conformément aux règles de rotation faible, on maintient cette quantité de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 164 tokens
- **Total**: 1,055 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-06 06:09:11: 4u
- 2024-06-12 12:25:12: 3u
- 2024-03-12 07:32:16: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-06 06:09:11: 1u
- 2024-04-30 10:03:53: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:28:55: 2u
- 2024-08-06 06:09:11: 1u
- 2024-06-12 12:25:12: 3u
- 2024-04-30 10:03:53: 1u
- 2024-03-12 07:32:16: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-06 06:09:11: 3u
- 2024-04-30 10:03:53: 1u
- 2024-03-12 07:32:16: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:28:55: 2u
- 2024-08-06 06:09:11: 1u
- 2024-06-12 12:25:12: 2u
- 2024-04-30 10:03:53: 1u
- 2024-03-12 07:32:16: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-06 06:09:11: 3u
- 2024-06-12 12:25:12: 3u
- 2024-04-30 10:03:53: 1u
- 2024-03-12 07:32:16: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:06:10: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:28:55: 2u
- 2024-06-12 12:25:12: 2u
- 2024-04-30 10:03:53: 1u
- 2024-03-12 07:32:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-12 12:25:12: 2u
- 2024-04-30 10:03:53: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0062] ​MF Tarti Betterave rouge | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [MF0047] MF Mayonnaise 250ml | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 132 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 22 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de référence, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution. Le risque de rupture est considéré comme nul faute d'activité enregistrée sur ce produit.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:14:20.798Z*
