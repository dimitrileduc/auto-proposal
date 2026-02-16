# Rapport Backtest - Client SA MAKART

## Contexte

- **Client** : SA MAKART (ID: 58830)
- **Commande réelle** : S40346
- **Date commande** : 2025-11-13 13:17:48
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 17,918 input + 3,453 output = 21,371 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.8% | 17 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 20.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [LV136] LV Tartinade Betterave 190g | 4 | 4 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 84 jours entre les deux dernières commandes. La dernière commande datant du 04/11/2025 (il y a 8 jours), nous sommes théoriquement loin du prochain cycle. Cependant, avec seulement deux points de données récents et aucun historique N-1, le cycle est considéré comme irrégulier. En application du principe de précaution B2B (incertitude sur la rotation), un besoin est détecté pour couvrir l'horizon de 30 jours. La quantité retenue est de 4 unités, correspondant à la valeur la plus basse de l'historique récent (médiane entre 4 et 5, choix du plus bas en cas de doute).

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 168 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le produit présente une rotation très faible et irrégulière (dernière commande il y a 8 jours, la précédente il y a 5 mois). En l'absence de cycle de commande prévisible, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 3u et 4u. La médiane se situe à 3.5u. Conformément aux règles de gestion des faibles rotations, on retient la valeur la plus haute de la dernière commande (4u) pour assurer la disponibilité sans surstockage massif.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 162 tokens
- **Total**: 1,050 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 07:15:51: 5u
- 2025-08-12 06:28:08: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 07:15:51: 4u
- 2025-06-16 08:55:46: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | Predicted 3u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Predicted 6u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 4 | Predicted 4u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | Predicted 4u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Predicted 4u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 3 | Predicted 3u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | Predicted 2u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Predicted 4u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Predicted 4u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | Predicted 5u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 5 | Predicted 5u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 5 | Predicted 5u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV330] LV BIO Tartinade Toscana 190g | 4 | Product analyzed but LLM -> 0 - client ordered 4u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM predit: 0u | Reel commande: 4u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande de 4 unités a été effectuée il y a seulement 8 jours (04/11/2025). L'historique montre un cycle de rotation lent et irrégulier (environ 60 à 80 jours entre les commandes précédentes). Avec un seuil de réapprovisionnement de 30 jours, le stock actuel est jugé suffisant pour couvrir la période à venir. Il n'y a pas de risque de rupture immédiat justifiant une nouvelle commande si tôt après la précédente.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:17:16.489Z*
