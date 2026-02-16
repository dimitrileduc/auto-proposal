# Rapport Backtest - Client Bouyard & Cie

## Contexte

- **Client** : Bouyard & Cie (ID: 71269)
- **Commande réelle** : S40128
- **Date commande** : 2025-11-05 07:33:56
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,849 input + 2,772 output = 18,621 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.2% | 13 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 63.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 36.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [AQUA01] AQUAPAX - natural mineral water 500ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM: 1u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit 91 jours avant la date actuelle. Bien que la rotation soit faible et irrégulière (cycle de ~29 jours entre les deux premières commandes), le délai écoulé dépasse largement le cycle observé. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 4u. Conformément à la règle de privilégier la médiane et, en cas de doute ou de rotation faible, de choisir la valeur la plus basse pour ne pas surestimer le stock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 184 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 05/08/2025, soit 91 jours sans activité. Bien que le cycle historique semble être d'environ 30 jours (entre juillet et août), l'absence de commande récente crée une incertitude sur la disponibilité du stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la valeur la plus basse de l'historique récent (médiane entre 1u et 2u, choix du plus bas en cas de doute), afin de limiter le risque de surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 164 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 30 jours (entre juillet et août). La dernière commande remonte au 05/08/2025, soit 91 jours sans activité. Bien que le délai dépasse largement le cycle habituel, le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), car l'absence de commande récente peut indiquer un besoin imminent. ÉTAPE 2 : L'historique récent montre une rotation très faible et constante de 1 unité par commande. En suivant la règle de la médiane et du maintien des quantités pour les faibles rotations, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 173 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 29 jours. La dernière commande remonte au 05/08/2025, soit 91 jours sans activité. Bien que le délai dépasse largement le cycle habituel, le principe de précaution B2B impose de prévoir une commande en cas de doute sur la reprise de la rotation ou pour éviter une rupture prolongée si le besoin réapparaît dans les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes de 1 unité. La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité historique de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 167 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>5. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 30 jours (juillet à août). La dernière commande remonte au 05/08/2025, soit 91 jours sans activité. Bien que le cycle habituel soit dépassé, le principe de précaution B2B impose de prévoir une commande pour couvrir un risque de rupture imminent ou une reprise de consommation, d'autant plus que le délai depuis la dernière commande excède largement le seuil de réapprovisionnement de 30 jours. ÉTAPE 2 : Estimation quantité. La rotation est très faible et constante (1u par commande). Conformément aux règles de gestion des faibles rotations, la médiane de 1u est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 175 tokens
- **Total**: 1,068 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit environ 120 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état des stocks. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles, on maintient la quantité historique sans l'augmenter. La médiane est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 173 tokens
- **Total**: 1,048 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:58: 4u
- 2025-07-07 09:20:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:58: 1u
- 2025-07-07 09:20:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:58: 1u
- 2025-07-07 09:20:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:58: 1u
- 2025-07-07 09:20:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:27:58: 1u
- 2025-07-07 09:20:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:20:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | Predicted 1u but not ordered |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:01.717Z*
