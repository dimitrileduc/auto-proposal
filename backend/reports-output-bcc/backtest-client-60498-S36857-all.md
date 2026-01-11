# Rapport Backtest - Client MYFIKA

## Contexte

- **Client** : MYFIKA (ID: 60498)
- **Commande réelle** : S36857
- **Date commande** : 2025-05-16 10:29:28
- **Date cutoff système** : 2025-05-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,539 input + 720 output = 4,259 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -54.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 5 | 12 | 7.0 | 58.3% | partial | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 5 | 10 | 5.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 5u vs Médiane: 8u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 8u
- **Reel commande**: 12u
- **Erreur LLM**: 7u (58.3%)
- **Erreur Mediane**: 4u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/04/2025, soit 44 jours écoulés. L'intervalle entre les deux commandes précédentes était de 74 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons un horizon de 74 jours (44 + 30), ce qui correspond à 100% du cycle précédent. Le risque de rupture est avéré. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre deux commandes de 10u et 5u. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 5 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 179 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>2. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 5u vs Médiane: 8u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 8u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 2u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre deux commandes espacées de 74 jours (17/01 au 01/04). Au 15/05, 44 jours se sont écoulés depuis la dernière commande, soit environ 60% du cycle précédent. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture survient à l'horizon J+74 (soit vers le 14/06). Le besoin tombe dans la fenêtre de vigilance des 30 prochains jours. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 5u et 10u. En application de la règle de prudence privilégiant la valeur la plus basse en cas de doute sur un historique court, la quantité retenue est de 5 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 206 tokens
- **Total**: 1,100 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-01 08:13:43: 10u
- 2025-01-17 12:44:51: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>2. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-01 08:13:43: 10u
- 2025-01-17 12:44:51: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 5 | Predicted 5u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 5 | Predicted 5u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:45.234Z*
