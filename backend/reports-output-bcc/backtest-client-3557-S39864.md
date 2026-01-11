# Rapport Backtest - Client SOLUCIOUS N.V. BORNEM

## Contexte

- **Client** : SOLUCIOUS N.V. BORNEM (ID: 3557)
- **Commande réelle** : S39864
- **Date commande** : 2025-10-22 12:03:03
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,005 input + 172 output = 1,177 total


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | 336 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg</strong> - LLM: 336u vs Médiane: 336u (Réel: 336u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 336u
- **Baseline calculee**: 336u
- **Mediane historique**: 336u
- **Reel commande**: 336u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 336u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 à 90 jours. La dernière commande remonte au 10 septembre 2025, soit 41 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons un horizon allant jusqu'à 71 jours après la dernière commande, ce qui correspond à la fenêtre critique de réapprovisionnement habituelle pour ce produit. Par principe de précaution B2B, un risque de rupture est identifié. La quantité est fixée à 336 unités, ce qui correspond à la constante stricte observée sur l'historique récent et N-1 (médiane parfaite de 336u).

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 172 tokens
- **Total**: 1,177 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 14:03:08: 336u
- 2025-06-02 14:49:41: 336u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 08:43:49: 336u
- 2024-07-03 08:24:53: 336u
- 2024-05-08 15:06:18: 336u
- 2024-02-28 12:39:27: 336u
- 2024-01-10 10:54:25: 336u
- 2023-11-08 13:17:38: 336u

**Quantite Mediane (fallback)**: 336u
**Quantite Reelle**: 336u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:35.780Z*
