# Rapport Backtest - Client The Belgian bar @Gare Maritime

## Contexte

- **Client** : The Belgian bar @Gare Maritime (ID: 60551)
- **Commande réelle** : S39702
- **Date commande** : 2025-10-16 06:45:22
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,182 input + 1,053 output = 7,235 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 6 produits prédits, 6 corrects |
| **Rappel** | 75.0% | 8 produits réels, 6 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV188] LV Tartinade Aubergine  380g | 9 | 12 | 3.0 | 25.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [LV188] LV Tartinade Aubergine  380g</strong> - LLM: 9u vs Médiane: 11u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 9u
- **Baseline calculee**: 9u
- **Mediane historique**: 11u
- **Reel commande**: 12u
- **Erreur LLM**: 3u (25.0%)
- **Erreur Mediane**: 1u (8.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 9u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 63 jours entre les deux dernières commandes. Au 15 octobre 2025, 56 jours se sont écoulés depuis la dernière commande du 20 août, soit environ 89% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 9 unités, correspondant à la valeur la plus basse de l'historique récent (médiane entre 9 et 12, avec choix de la prudence), afin d'éviter un surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 177 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 20 août, soit 56 jours avant la date actuelle. Le cycle précédent était de 63 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 88% du cycle moyen observé. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec deux commandes de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité constante sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 151 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 56 jours. Le cycle précédent était de 63 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 88% du cycle moyen observé. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 155 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 56 jours. Le cycle précédent était de 63 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré selon le cycle de rotation observé. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 155 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>5. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 20 août, soit 56 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et en l'absence d'autres données, la quantité de 2 unités est reconduite.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 160 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit environ 119 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En l'absence d'historique plus dense permettant de définir un cycle précis, le principe de précaution s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane des commandes récentes est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 166 tokens
- **Total**: 1,043 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV188] LV Tartinade Aubergine  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:29:55: 12u
- 2025-06-18 13:17:07: 9u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 9u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:29:55: 2u
- 2025-06-18 13:17:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:29:55: 2u
- 2025-06-18 13:17:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:29:55: 2u
- 2025-06-18 13:17:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:29:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 13:17:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de rotation ou de cycle de vente, il est impossible d'identifier un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Par mesure de prudence, aucune commande n'est générée sans signal de demande préalable.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:10:38.104Z*
