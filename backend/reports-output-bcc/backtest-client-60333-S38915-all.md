# Rapport Backtest - Client FORESTIA SA – Forestia

## Contexte

- **Client** : FORESTIA SA – Forestia (ID: 60333)
- **Commande réelle** : S38915
- **Date commande** : 2025-09-01 13:32:57
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,323 input + 1,960 output = 14,283 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 14 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 35.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -36.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 10 | 8.0 | 80.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 5 | 4.0 | 80.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 05/06/2025, soit 87 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur la dernière commande connue (4 unités) pour assurer la disponibilité du produit sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 126 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>2. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/06/2025, soit 87 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (4u) est utilisée comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 159 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 5u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 5u
- **Reel commande**: 10u
- **Erreur LLM**: 8u (80.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande irrégulier avec une dernière commande datant du 5 juin 2025 (soit 87 jours d'inactivité). Bien que la rotation soit faible, le délai écoulé dépasse largement l'intervalle précédent (38 jours), ce qui crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité est fixée à 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2 et 8, en privilégiant le volume le plus bas pour éviter le surstockage sur un produit à rotation lente).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 167 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/06/2025, soit 87 jours. Bien que le cycle soit irrégulier (intervalle précédent de 38 jours), le délai actuel dépasse largement la fréquence habituelle. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre deux commandes (8u et 1u). Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance incertaine pour éviter le surstockage, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 172 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 38 jours entre les deux dernières commandes. La dernière commande datant du 5 juin 2025, le délai écoulé (87 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 5 unités, correspondant à la médiane et à la constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 129 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 10u vs Médiane: 8u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 8u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle précédent de 38 jours. Depuis la dernière commande du 5 juin 2025, 87 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité est fixée à 10 unités, correspondant à la valeur la plus basse de l'historique récent (médiane entre 10 et 12, en privilégiant la prudence).

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 145 tokens
- **Total**: 1,039 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 8u
- 2025-04-28 12:00:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 1u
- 2025-04-28 12:00:17: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 5u
- 2025-04-28 12:00:17: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 12u
- 2025-04-28 12:00:17: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 3 | Predicted 3u but not ordered |
| [MANA02] MANA natural energy drink - tropical passion 250ml | 4 | Predicted 4u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 3 | Predicted 3u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 3 | Predicted 3u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | Predicted 3u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 3 | Predicted 3u but not ordered |
| [NOC01] NOCCIOLATA Pâte cacao-noisette bio 250g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:19.874Z*
