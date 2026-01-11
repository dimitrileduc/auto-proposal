# Rapport Backtest - Client Natur'Inov

## Contexte

- **Client** : Natur'Inov (ID: 71725)
- **Commande réelle** : S39697
- **Date commande** : 2025-10-13 11:22:46
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,472 input + 1,076 output = 6,548 total


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
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 13.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 12 | 16 | 4.0 | 25.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 12 | 12 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 12 | 12 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 12 | 12 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 12 | 12 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 9 | 5.0 | 55.6% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 12u vs Médiane: 12u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 12u
- **Reel commande**: 16u
- **Erreur LLM**: 4u (25.0%)
- **Erreur Mediane**: 4u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une irrégularité marquée (intervalle de 8 jours puis plus de 60 jours). Le délai depuis la dernière commande (19 août) est de 54 jours, ce qui dépasse largement le seuil de précaution B2B face à un cycle incertain. Un risque de rupture est identifié pour les 30 prochains jours. Pour le calcul de la quantité, la commande de 120u est traitée comme un pic exceptionnel (événement ponctuel). La médiane des commandes récentes (12u) est donc privilégiée conformément aux règles de gestion des valeurs extrêmes.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 143 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 12u vs Médiane: 12u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 12u
- **Reel commande**: 12u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une irrégularité marquée (intervalles de 59 jours puis 8 jours). Depuis la dernière commande du 19 août 2025, 54 jours se sont écoulés, ce qui dépasse largement le seuil de réapprovisionnement de 30 jours et suggère un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la valeur de 120u est identifiée comme un pic exceptionnel (événement ponctuel) par rapport aux autres commandes de 12u. La médiane des commandes récentes, excluant ce pic, est de 12u. Conformément à la règle de ne pas surestimer et de privilégier la valeur la plus basse en cas de doute, la quantité retenue est de 12u.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 194 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 12u vs Médiane: 12u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 12u
- **Reel commande**: 12u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19 août 2025, soit 54 jours avant la date actuelle (12 octobre). Bien que le cycle soit irrégulier (8 jours entre les deux dernières, mais 2 mois auparavant), le délai écoulé dépasse largement les intervalles observés. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une commande exceptionnelle de 120u (pic probable) et deux commandes de 12u. Conformément à la règle de la médiane et à l'exclusion des valeurs extrêmes/pics promotionnels, la quantité de 12u est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 201 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 12u vs Médiane: 10u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 10u
- **Reel commande**: 12u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 54 jours (19 août). Compte tenu du délai écoulé et de l'absence d'historique N-1 pour stabiliser la saisonnalité, le risque de rupture est jugé élevé selon le principe de précaution B2B (seuil de 70% du cycle dépassé). Pour la quantité, la commande de 40u est écartée car elle représente un pic exceptionnel. La médiane entre 4u, 12u et 40u est de 12u, ce qui constitue le volume de réapprovisionnement le plus cohérent pour couvrir les besoins sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 167 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 12u vs Médiane: 10u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 10u
- **Reel commande**: 12u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 34 jours entre les deux dernières commandes (11/08 au 19/08 étant un réapprovisionnement très rapproché, probablement suite à une rupture ou un pic). Depuis la dernière commande du 19 août, 54 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique. Pour la quantité, la commande de 40u est traitée comme un pic exceptionnel. La médiane entre 4u, 40u et 12u est de 12u. En suivant le principe de précaution B2B et la règle de la médiane, une commande de 12 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 187 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 8u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 8u
- **Reel commande**: 9u
- **Erreur LLM**: 5u (55.6%)
- **Erreur Mediane**: 1u (11.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit 54 jours. Bien que le cycle soit irrégulier (8 jours puis 67 jours), le délai actuel dépasse largement la moyenne observée. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique présente une valeur extrême de 40u (pic exceptionnel) et deux valeurs basses (12u et 4u). Conformément aux règles de gestion des extrêmes et de privilège de la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 4u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 184 tokens
- **Total**: 1,095 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:20:23: 12u
- 2025-08-11 10:00:40: 120u
- 2025-06-13 09:24:33: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:20:23: 12u
- 2025-08-11 10:00:40: 120u
- 2025-06-13 09:24:33: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:20:23: 12u
- 2025-08-11 10:00:40: 120u
- 2025-06-13 09:24:33: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:20:23: 4u
- 2025-08-11 10:00:40: 40u
- 2025-06-13 09:24:33: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:20:23: 4u
- 2025-08-11 10:00:40: 40u
- 2025-06-13 09:24:33: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:20:23: 4u
- 2025-08-11 10:00:40: 40u
- 2025-06-13 09:24:33: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 9u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:54.672Z*
