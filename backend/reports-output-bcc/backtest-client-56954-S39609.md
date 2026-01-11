# Rapport Backtest - Client SAS CSF, ENTREPÔT EPAUX BEZU

## Contexte

- **Client** : SAS CSF, ENTREPÔT EPAUX BEZU (ID: 56954)
- **Commande réelle** : S39609
- **Date commande** : 2025-10-08 14:28:39
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 999 input + 215 output = 1,214 total


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
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 96 | 96 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 96u vs Médiane: 96u (Réel: 96u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 96u
- **Baseline calculee**: 96u
- **Mediane historique**: 96u
- **Reel commande**: 96u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 96u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 29/09/2025, soit il y a 8 jours. Bien que l'historique récent soit limité à une seule commande, l'historique N-1 montre une activité intense en juillet/août avec des fréquences de commande hebdomadaires. Dans un contexte B2B, l'absence de visibilité sur le cycle actuel impose le principe de précaution. Le risque de rupture à l'horizon de 30 jours est jugé réel. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de plusieurs points de données récents pour calculer une médiane, la quantité de la dernière commande (96u) est retenue comme référence de consommation actuelle. Ce volume est cohérent avec les volumes observés l'année précédente (moyenne pondérée et pics exclus). On maintient donc 96u pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 999 tokens
- **Output**: 215 tokens
- **Total**: 1,214 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-29 15:35:34: 96u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-07 06:21:32: 276u
- 2024-07-24 06:00:58: 27u
- 2024-07-24 05:55:43: 113u
- 2024-07-17 12:55:24: 45u
- 2024-07-10 11:34:05: 112u
- 2024-07-08 09:32:26: 24u
- 2024-07-03 06:18:23: 40u

**Quantite Mediane (fallback)**: 96u
**Quantite Reelle**: 96u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:26.768Z*
