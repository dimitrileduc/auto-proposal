# Rapport Backtest - Client CAMMARATA MARIA LETIZIA

## Contexte

- **Client** : CAMMARATA MARIA LETIZIA (ID: 34683)
- **Commande réelle** : S37629
- **Date commande** : 2025-06-24 08:11:19
- **Date cutoff système** : 2025-06-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,850 input + 392 output = 2,242 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 50.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 41.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF1187] LINEA KEBAB DELICATA 5 L | 170 | 120 | 50.0 | 41.7% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF1187] LINEA KEBAB DELICATA 5 L</strong> - LLM: 170u vs Médiane: 145u (Réel: 120u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 170u
- **Baseline calculee**: 170u
- **Mediane historique**: 145u
- **Reel commande**: 120u
- **Erreur LLM**: 50u (41.7%)
- **Erreur Mediane**: 25u (20.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 170u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 février 2025, soit environ 116 jours. Bien que l'historique soit irrégulier, l'absence de commande sur une période aussi longue, combinée à une commande de 180u à la même période l'année dernière (mai 2024), indique un risque de rupture imminent ou un besoin de réapprovisionnement saisonnier. En application du principe de précaution B2B, le besoin est validé. ÉTAPE 2 : Estimation de la quantité. La commande la plus récente est de 170u. L'historique N-1 montre des volumes oscillant entre 50u et 180u. La médiane des commandes significatives se situe autour de 170u. Conformément à la règle de ne pas surestimer, nous retenons la quantité de la dernière commande stable (170u) pour couvrir le cycle à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 226 tokens
- **Total**: 1,152 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1187] LINEA KEBAB DELICATA 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-27 13:26:34: 170u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-14 14:47:06: 180u
- 2024-02-12 10:17:48: 50u
- 2023-10-29 20:21:34: 120u

**Quantite Mediane (fallback)**: 170u
**Quantite Reelle**: 120u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1188] LINEA KEBAB PICANTE 5 L | 63 | Predicted 63u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:37.913Z*
