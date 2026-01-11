# Rapport Backtest - Client DLL PROXY TIEGE (Jalhay)

## Contexte

- **Client** : DLL PROXY TIEGE (Jalhay) (ID: 56200)
- **Commande réelle** : S40305
- **Date commande** : 2025-11-13 10:04:13
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 17,193 input + 3,068 output = 20,261 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.3% | 19 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 70.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LD011] LD Organic Kids Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 6u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 45 jours. La dernière commande date du 02/10/2025, soit 41 jours écoulés. Étant donné que nous avons dépassé 70% du cycle moyen et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u, 2u, 4u et 2u. La médiane est de 2u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 173 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 02/10/2025, soit 41 jours avant la date actuelle. Le cycle moyen observé entre les commandes précédentes est d'environ 40 à 50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle de rotation. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u, 1u, 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 186 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 21 et 36 jours (moyenne ~28 jours). La dernière commande remontant au 19 août 2025, soit 85 jours avant la date actuelle, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 138 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>4. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible et irrégulière avec une dernière commande enregistrée il y a 121 jours (14 juillet). Bien que le cycle habituel semble dépassé, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le stock actuel est présumé nul ou critique après 4 mois d'inactivité. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est la plus basse de l'historique récent (médiane/minimum) soit 1 unité, afin de couvrir le besoin sans risquer un surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 147 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>5. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit environ 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (21 jours). En B2B, un tel écart sans commande suggère un risque de rupture ou un besoin de réapprovisionnement par précaution. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de rotation faible (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 167 tokens
- **Total**: 1,057 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:15:41: 2u
- 2025-08-19 06:13:18: 2u
- 2025-07-14 11:45:36: 4u
- 2025-06-23 13:04:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:15:41: 1u
- 2025-07-14 11:45:36: 1u
- 2025-06-23 13:04:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:13:18: 2u
- 2025-07-14 11:45:36: 2u
- 2025-06-23 13:04:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 11:45:36: 2u
- 2025-06-23 13:04:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 11:45:36: 1u
- 2025-06-23 13:04:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | Predicted 4u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 5 | Predicted 5u but not ordered |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Predicted 2u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Predicted 3u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Predicted 3u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Predicted 2u but not ordered |
| [DIS0003] Display TVF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DIS0012] Display Foodprint Karton LD | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:13:46.809Z*
