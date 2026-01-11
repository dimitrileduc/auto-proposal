# Rapport Backtest - Client PIRONT LAURENT

## Contexte

- **Client** : PIRONT LAURENT (ID: 3767)
- **Commande réelle** : S38783
- **Date commande** : 2025-08-27 06:53:23
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,407 input + 770 output = 5,177 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0096] FILOU MOUTARDE 3 KG | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 mai 2025, soit environ 95 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique N-1, la quantité est basée sur la dernière commande connue (3u) pour couvrir un besoin potentiel et éviter une rupture prolongée sur cette référence.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 122 tokens
- **Total**: 992 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 11:29:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 1 | Predicted 1u but not ordered |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:13.811Z*
