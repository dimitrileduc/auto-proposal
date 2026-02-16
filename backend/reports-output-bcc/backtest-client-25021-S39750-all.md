# Rapport Backtest - Client KOCKARTZ Distripat Filiale : Hergenrath

## Contexte

- **Client** : KOCKARTZ Distripat Filiale : Hergenrath (ID: 25021)
- **Commande réelle** : S39750
- **Date commande** : 2025-10-16 12:23:54
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 874 input + 137 output = 1,011 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 14.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 700.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 700.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 700.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 16 | 2 | 14.0 | 700.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 septembre, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de réassort. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir un besoin pour éviter une rupture de stock sur ce produit. La quantité retenue est de 2 unités, correspondant à la valeur de la dernière commande connue (médiane par défaut), respectant ainsi la règle de ne pas surestimer les volumes sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 137 tokens
- **Total**: 1,011 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 09:38:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:24.351Z*
