# Rapport Backtest - Client BIO VRAC UCCLE

## Contexte

- **Client** : BIO VRAC UCCLE (ID: 60205)
- **Commande réelle** : S37113
- **Date commande** : 2025-05-28 08:11:24
- **Date cutoff système** : 2025-05-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 12,544 input + 2,208 output = 14,752 total


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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 32.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -35.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 8 | 10 | 2.0 | 20.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 8 | 14 | 6.0 | 42.9% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 6 | 8 | 2.0 | 25.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 11 | 20 | 9.0 | 45.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 7 | 8 | 1.0 | 12.5% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 8 | 4.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 8u vs Médiane: 8u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 10u
- **Erreur LLM**: 2u (20.0%)
- **Erreur Mediane**: 2u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 15 à 18 jours. La dernière commande datant du 5 mai (soit 22 jours avant la date actuelle), nous avons dépassé le cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En appliquant la règle de la médiane sur les quantités récentes (1, 11, 10, 5, 1, 4, 8, 10), la médiane se situe à 6.5. Cependant, les trois dernières commandes montrent une accélération du volume (4, 8, 10). Par mesure de précaution B2B et pour stabiliser le stock sans surévaluer, on retient une quantité de 8 unités, correspondant à l'avant-dernière commande, ce qui représente un volume cohérent avec la rotation actuelle.

**Tokens utilises pour cette prediction:**
- **Input**: 997 tokens
- **Output**: 214 tokens
- **Total**: 1,211 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 8u vs Médiane: 9u (Réel: 14u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 9u
- **Reel commande**: 14u
- **Erreur LLM**: 6u (42.9%)
- **Erreur Mediane**: 5u (35.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 18 jours (intervalles : 18, 15, 27, 10, 26, 13, 10 jours). La dernière commande date du 05/05, soit 22 jours écoulés. Ce délai dépasse 70% du cycle moyen et le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold). ÉTAPE 2 : Estimation quantité. Les quantités récentes sont : 11, 2, 12, 2, 8, 12, 5, 10. La médiane de ces valeurs est de 9. En suivant la règle de prudence B2B (choisir la valeur la plus basse en cas de doute ou pour éviter le surstockage sur un produit à rotation irrégulière), une quantité de 8 unités est retenue, correspondant à une commande type observée dans l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 998 tokens
- **Output**: 235 tokens
- **Total**: 1,233 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 2u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 15 jours. La dernière commande datant du 05 mai (soit 22 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En appliquant la règle de la médiane sur les commandes récentes (1, 2, 5, 6, 8, 9, 10, 13), la valeur centrale se situe entre 6 et 8. Conformément au principe de précaution B2B privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 6 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 996 tokens
- **Output**: 178 tokens
- **Total**: 1,174 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 11u vs Médiane: 11u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 11u
- **Baseline calculee**: 11u
- **Mediane historique**: 11u
- **Reel commande**: 20u
- **Erreur LLM**: 9u (45.0%)
- **Erreur Mediane**: 9u (45.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 11u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne de 15 à 20 jours. La dernière commande datant du 05 mai (soit 22 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Pour le calcul de la quantité, l'historique récent présente des variations (de 2u à 23u). En appliquant la règle de la médiane sur les commandes récentes (7, 10, 10, 11, 16, 19, 23), la valeur centrale est 11. Cette quantité permet de couvrir le besoin sans surstockage, conformément au principe de précaution B2B.

**Tokens utilises pour cette prediction:**
- **Input**: 1,000 tokens
- **Output**: 172 tokens
- **Total**: 1,172 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 7u vs Médiane: 7u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 7u
- **Reel commande**: 8u
- **Erreur LLM**: 1u (12.5%)
- **Erreur Mediane**: 1u (12.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne de 15 à 18 jours entre chaque réapprovisionnement. La dernière commande datant du 05 mai (soit 22 jours avant la date actuelle), le seuil de 70% du cycle est largement dépassé, indiquant un risque de rupture imminent dans l'horizon des 30 jours. Pour la quantité, l'historique récent oscille entre 1u et 10u avec une tendance stabilisée sur les trois dernières commandes (5u, 8u, 7u). La médiane de l'historique récent (7u) est retenue pour couvrir les besoins sans surstockage, conformément au principe de précaution B2B.

**Tokens utilises pour cette prediction:**
- **Input**: 995 tokens
- **Output**: 164 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 4u (50.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 20 jours entre chaque réapprovisionnement. La dernière commande datant du 05 mai (soit 22 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En appliquant la règle de la médiane sur l'historique récent (1, 1, 3, 4, 5, 6, 9), la valeur centrale est de 4 unités. Cette quantité permet de couvrir le besoin sans surstockage, en ignorant le pic exceptionnel de 9 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 147 tokens
- **Total**: 1,124 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:42:11: 10u
- 2025-04-17 14:34:07: 8u
- 2025-04-02 07:05:25: 4u
- 2025-03-20 08:04:24: 1u
- 2025-03-06 07:28:26: 5u
- 2025-02-24 15:34:10: 10u
- 2025-01-29 12:27:08: 11u
- 2025-01-16 07:59:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:42:11: 11u
- 2025-04-17 14:34:07: 2u
- 2025-04-02 07:05:25: 12u
- 2025-03-06 07:28:26: 2u
- 2025-02-24 15:34:10: 8u
- 2025-01-29 12:27:08: 12u
- 2025-01-16 07:59:50: 5u
- 2025-01-06 13:23:25: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 14u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:42:11: 6u
- 2025-04-17 14:34:07: 9u
- 2025-04-02 07:05:25: 5u
- 2025-03-20 08:04:24: 1u
- 2025-03-06 07:28:26: 2u
- 2025-02-24 15:34:10: 10u
- 2025-01-29 12:27:08: 13u
- 2025-01-16 07:59:50: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:42:11: 16u
- 2025-04-17 14:34:07: 19u
- 2025-04-02 07:05:25: 10u
- 2025-03-20 08:04:24: 11u
- 2025-03-06 07:28:26: 10u
- 2025-02-24 15:34:10: 7u
- 2025-01-29 12:27:08: 23u
- 2025-01-16 07:59:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 11u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:42:11: 7u
- 2025-04-17 14:34:07: 8u
- 2025-04-02 07:05:25: 5u
- 2025-03-20 08:04:24: 3u
- 2025-03-06 07:28:26: 4u
- 2025-02-24 15:34:10: 1u
- 2025-01-29 12:27:08: 10u
- 2025-01-16 07:59:50: 9u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:42:11: 6u
- 2025-04-17 14:34:07: 3u
- 2025-04-02 07:05:25: 5u
- 2025-03-06 07:28:26: 1u
- 2025-02-24 15:34:10: 1u
- 2025-01-29 12:27:08: 4u
- 2025-01-06 13:23:25: 9u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 8u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RISH04] RISH kombucha BIO - smash basil 330ml | 5 | Predicted 5u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 | Predicted 2u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 3 | Predicted 3u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Predicted 2u but not ordered |
| [RISH05] RISH kombucha BIO - rose 750ml | 4 | Predicted 4u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 3 | Predicted 3u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:31.352Z*
