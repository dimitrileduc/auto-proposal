# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 104
- **Tokens**: 92,361 input + 15,393 output = 107,754 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.5% | 40 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 14.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 18.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | 112 | 56.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | 56 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | 56 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 112u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 112u
- **Erreur LLM**: 56u (50.0%)
- **Erreur Mediane**: 56u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Les dernières commandes datent du 12 avril 2025. Bien que la date actuelle soit le 13 avril, le volume de commandes groupées sur une seule journée (7 commandes simultanées) indique une rotation très forte ou une opération spécifique. Dans un contexte B2B, le risque de rupture à un horizon de 30 jours est élevé si le stock n'est pas maintenu après un tel pic. Par principe de précaution, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 56u et 112u. La médiane des quantités observées est de 56u. Conformément aux règles de gestion, on privilégie la médiane et la valeur la plus basse en cas de doute pour éviter le surstockage après un pic d'activité.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 201 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 56u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date d'hier (2025-04-12). Bien que très récente, le volume de commandes groupées sur une seule journée (7 commandes totalisant 504u) indique une rotation extrêmement forte ou un événement de mise en rayon massif. Compte tenu du seuil de réapprovisionnement de 30 jours et de l'absence d'historique lissé, le principe de précaution B2B s'applique pour éviter une rupture immédiate suite à ce pic de demande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 56u et 112u. La médiane des commandes est de 56u. Conformément à la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage après un pic, la quantité retenue est de 56u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 210 tokens
- **Total**: 1,198 tokens



</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 56u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date d'hier (2025-04-12), mais le cycle de commande est extrêmement court ou groupé (3 commandes identiques le même jour). En l'absence d'historique long permettant de définir une rotation stable, le principe de précaution B2B s'applique pour éviter une rupture sur un produit actif. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une constance absolue à 56 unités. La médiane des commandes récentes est de 56. Conformément aux règles, on maintient cette quantité sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 147 tokens
- **Total**: 1,061 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:25: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u
- 2025-04-12 10:27:11: 56u
- 2025-04-12 09:42:11: 112u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 112u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:05: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u
- 2025-04-12 10:27:11: 56u
- 2025-04-12 10:04:36: 112u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 56u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u
- 2025-04-12 10:04:36: 56u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 56u

</details>




---

## False Positives (37)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Predicted 54u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Predicted 90u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 54 | Predicted 54u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 35 | Predicted 35u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 5 | Predicted 5u but not ordered |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 5 | Predicted 5u but not ordered |
| [fsv03] Noisette nature bio vrac 2,8kg  | 5 | Predicted 5u but not ordered |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [fsv17] Mélange de noix bio vrac 2,75kg | 3 | Predicted 3u but not ordered |
| [SOWA01] SOWA citron menthe 250ml | 2 | Predicted 2u but not ordered |
| [SOWA02] SOWA bissap 250ml | 2 | Predicted 2u but not ordered |
| [SOWA03] SOWA ginger beer ardent 250ml | 6 | Predicted 6u but not ordered |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Predicted 5u but not ordered |
| [KLAK01] KLAK Maté 330ml | 2 | Predicted 2u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 12 | Predicted 12u but not ordered |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Predicted 10u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 10 | Predicted 10u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 26 | Predicted 26u but not ordered |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 36 | Predicted 36u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 42 | Predicted 42u but not ordered |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 12 | Predicted 12u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 24 | Predicted 24u but not ordered |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 24 | Predicted 24u but not ordered |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 12 | Predicted 12u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 5 | Predicted 5u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Predicted 25u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 25 | Predicted 25u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Predicted 25u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 10 | Predicted 10u but not ordered |
| [RISH05] RISH kombucha BIO - rose 750ml | 3 | Predicted 3u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Predicted 56u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Predicted 56u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Predicted 56u but not ordered |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Predicted 64u but not ordered |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Predicted 64u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:19.051Z*
