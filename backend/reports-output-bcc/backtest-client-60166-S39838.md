# Rapport Backtest - Client AU VERT G

## Contexte

- **Client** : AU VERT G (ID: 60166)
- **Commande réelle** : S39838
- **Date commande** : 2025-10-21 09:26:44
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,618 input + 2,311 output = 14,929 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 12 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 5 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 5 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 5u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours entre chaque réapprovisionnement (20/06, 15/07, 20/08, 25/09). Au 20 octobre, nous sommes à 25 jours de la dernière commande, ce qui représente plus de 70% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). La quantité est déterminée par la médiane des commandes récentes, qui est de 5 unités, tout en notant une stabilité sur ce volume lors des deux dernières occurrences.

**Tokens utilises pour cette prediction:**
- **Input**: 961 tokens
- **Output**: 151 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 5u vs Médiane: 3u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 3u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 3u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (dernières commandes le 20/08 et 25/09). Au 20/10, 25 jours se sont écoulés depuis la dernière commande, ce qui représente plus de 70% du cycle moyen, créant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). La quantité est déterminée par la médiane des commandes récentes (5u, 5u, 3u, 5u, 3u, 3u), soit 4u, mais la valeur la plus fréquente et récente pour un cycle complet est de 5u. En suivant le principe de précaution B2B et la stabilité du volume, une commande de 5 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 963 tokens
- **Output**: 191 tokens
- **Total**: 1,154 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-25 12:59:50: 5u
- 2025-08-20 08:20:14: 5u
- 2025-07-15 09:35:56: 4u
- 2025-06-20 07:50:59: 5u
- 2025-05-21 08:00:06: 3u
- 2025-05-20 09:41:02: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-25 12:59:50: 5u
- 2025-08-20 08:20:14: 5u
- 2025-07-15 09:35:56: 3u
- 2025-06-20 07:50:59: 5u
- 2025-05-21 08:00:06: 3u
- 2025-05-20 09:41:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Predicted 2u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Predicted 3u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | Predicted 3u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Predicted 3u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | Predicted 1u but not ordered |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:30.242Z*
