# Rapport Backtest - Client MARMA

## Contexte

- **Client** : MARMA (ID: 60485)
- **Commande réelle** : S39106
- **Date commande** : 2025-09-09 12:33:37
- **Date cutoff système** : 2025-09-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,613 input + 889 output = 5,502 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 5 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 18.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 36 | 18 | 18.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 36u vs Médiane: 27u (Réel: 18u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 36u
- **Baseline calculee**: 36u
- **Mediane historique**: 27u
- **Reel commande**: 18u
- **Erreur LLM**: 18u (100.0%)
- **Erreur Mediane**: 9u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 36u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 juillet, soit 45 jours. Le cycle moyen observé est d'environ 32 jours (24 jours entre mai/juillet et 39 jours entre juillet/août). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 19, 45 et 36 unités. La médiane de ces commandes est de 36. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de doute, la quantité retenue est de 36 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 171 tokens
- **Total**: 1,091 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-25 12:58:11: 36u
- 2025-07-01 13:13:02: 45u
- 2025-05-23 10:09:31: 19u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 36u
**Quantite Reelle**: 18u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 42 | Predicted 42u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 42 | Predicted 42u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 63 | Predicted 63u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 42 | Predicted 42u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:19.685Z*
