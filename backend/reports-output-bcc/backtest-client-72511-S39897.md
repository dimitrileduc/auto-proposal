# Rapport Backtest - Client VDS FOOD

## Contexte

- **Client** : VDS FOOD (ID: 72511)
- **Commande réelle** : S39897
- **Date commande** : 2025-10-23 12:55:33
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,433 input + 787 output = 5,220 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -36.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF068] FIL VOL AU VENT 800G BOCAL  | 1 | 7 | 6.0 | 85.7% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [JF068] FIL VOL AU VENT 800G BOCAL </strong> - LLM: 1u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28/08/2025, soit 55 jours. Le cycle précédent était de 41 jours. Nous avons largement dépassé le cycle moyen constaté. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 172 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>2. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 41 jours (entre le 18/07 et le 28/08). Au 22/10, la dernière commande remonte à 55 jours, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Pour la quantité, la médiane des commandes récentes (3u et 6u) est de 4,5u, mais conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute ou de rotation faible, la quantité de 3u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 155 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>3. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 41 jours entre les deux dernières commandes. Au 22 octobre, 55 jours se sont écoulés depuis la dernière commande (28 août), ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. En suivant la règle de la médiane sur l'historique récent (5u et 5u), la quantité préconisée est de 5 unités pour maintenir le stock habituel.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 126 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>4. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 41 jours entre les deux dernières commandes. Au 22 octobre, 55 jours se sont écoulés depuis la dernière commande (28 août), ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une commande en retard. En application de la règle de précaution B2B et de la méthode de la médiane sur l'historique récent (3u et 5u), la quantité recommandée est de 3 unités, privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 149 tokens
- **Total**: 1,038 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF068] FIL VOL AU VENT 800G BOCAL </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:40:16: 1u
- 2025-07-18 06:16:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:40:16: 3u
- 2025-07-18 06:16:07: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:40:16: 5u
- 2025-07-18 06:16:07: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 08:40:16: 5u
- 2025-07-18 06:16:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:43.619Z*
