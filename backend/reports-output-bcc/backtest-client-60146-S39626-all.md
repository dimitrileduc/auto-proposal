# Rapport Backtest - Client ADH QUALITY

## Contexte

- **Client** : ADH QUALITY (ID: 60146)
- **Commande réelle** : S39626
- **Date commande** : 2025-10-08 12:21:50
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,509 input + 1,040 output = 6,549 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 6 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 400.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 400.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 400.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 8 | 1 | 7.0 | 700.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 7 | 1 | 6.0 | 600.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 7 | 1 | 6.0 | 600.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 8u vs Médiane: 6u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 6u
- **Reel commande**: 1u
- **Erreur LLM**: 7u (700.0%)
- **Erreur Mediane**: 5u (500.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 jours entre les commandes significatives (juin à septembre). Au 07/10/2025, cela fait 34 jours depuis la dernière commande, ce qui dépasse 70% du cycle moyen. Le risque de rupture est donc identifié pour l'horizon des 30 prochains jours (Replenishment Threshold). Pour la quantité, la médiane des commandes récentes (hors micro-ajustements de mai) se situe entre 8 et 9 unités. En application du principe de prudence B2B et de la règle de la valeur la plus basse en cas de doute, la quantité de 8 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 160 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 7u vs Médiane: 6u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 6u
- **Reel commande**: 1u
- **Erreur LLM**: 6u (600.0%)
- **Erreur Mediane**: 5u (500.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 34 jours. L'intervalle moyen entre les commandes précédentes est d'environ 54 jours. Le seuil de réapprovisionnement étant de 30 jours, nous entrons dans la zone de risque (34 + 30 = 64 jours, dépassant le cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u, 9u et 7u. La médiane de ces valeurs est 7. Conformément aux règles, nous privilégions la médiane pour stabiliser le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 183 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/09/2025, soit 34 jours avant la date actuelle. Le cycle moyen entre les commandes récentes est d'environ 36 jours (68 jours entre juin et septembre, 38 jours entre mai et juin). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. L'historique récent montre une augmentation du volume (passant de 1u à 3u). La médiane des commandes récentes est de 2u, mais les deux dernières commandes stabilisées sont à 3u. En suivant la règle de maintien de la rotation régulière la plus récente, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 183 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 7u vs Médiane: 5u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 5u
- **Reel commande**: 1u
- **Erreur LLM**: 6u (600.0%)
- **Erreur Mediane**: 4u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 03/09/2025, soit 34 jours avant la date actuelle. L'intervalle précédent était de 68 jours. Le seuil de réapprovisionnement étant de 30 jours, nous sommes dans la fenêtre critique où un nouveau besoin est imminent ou déjà présent (principe de précaution B2B). ÉTAPE 2 : L'historique récent montre des quantités de 7u, 9u, 1u et 1u. La médiane se situe à 4u, mais les deux dernières commandes (7u et 9u) indiquent une accélération de la rotation par rapport aux unités isolées de mai. En suivant la règle de la médiane sur les volumes significatifs récents et en privilégiant la prudence (choix de la valeur basse entre les deux derniers volumes), la quantité retenue est de 7u.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 207 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 55 jours (42 jours entre mai et juin, 68 jours entre juin et septembre). Depuis la dernière commande du 3 septembre, 34 jours se sont écoulés. Ce délai représente environ 62% du cycle moyen, mais compte tenu de l'irrégularité des intervalles et du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié par principe de précaution B2B. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la tendance des deux derniers achats, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 162 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 42 et 68 jours. Depuis la dernière commande du 03/09/2025, 34 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle moyen observé. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la médiane des commandes récentes (1, 4, 5), ce qui permet de maintenir le stock sans surévaluer malgré la variabilité historique.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 145 tokens
- **Total**: 1,056 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:30:00: 8u
- 2025-06-27 09:53:23: 9u
- 2025-05-19 14:39:44: 1u
- 2025-05-16 06:37:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:30:00: 7u
- 2025-06-27 09:53:23: 9u
- 2025-05-16 06:37:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:30:00: 3u
- 2025-06-27 09:53:23: 3u
- 2025-05-20 13:29:35: 1u
- 2025-05-16 06:37:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:30:00: 7u
- 2025-06-27 09:53:23: 9u
- 2025-05-19 14:39:44: 1u
- 2025-05-16 06:37:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:30:00: 1u
- 2025-06-27 09:53:23: 1u
- 2025-05-16 06:37:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:30:00: 4u
- 2025-06-27 09:53:23: 5u
- 2025-05-16 06:37:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:48.106Z*
