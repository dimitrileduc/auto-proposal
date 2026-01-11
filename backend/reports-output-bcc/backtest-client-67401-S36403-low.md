# Rapport Backtest - Client UAB "HOFA LOGISTICS"

## Contexte

- **Client** : UAB "HOFA LOGISTICS" (ID: 67401)
- **Commande réelle** : S36403
- **Date commande** : 2025-04-28 07:53:17
- **Date cutoff système** : 2025-04-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,260 input + 909 output = 6,169 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 6 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 22.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 68.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 74.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 68.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 56 | 30 | 26.0 | 86.7% | partial | Non | Non | LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 56 | 27 | 29.0 | 107.4% | partial | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 56 | 43 | 13.0 | 30.2% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 56u vs Médiane: 56u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 30u
- **Erreur LLM**: 26u (86.7%)
- **Erreur Mediane**: 26u (86.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/01/2025, soit 114 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le stock est épuisé. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur le volume de la dernière commande connue (56u) pour maintenir le niveau de stock initial.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 122 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>2. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM: 56u vs Médiane: 56u (Réel: 27u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 27u
- **Erreur LLM**: 29u (107.4%)
- **Erreur Mediane**: 29u (107.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/01/2025, soit 114 jours sans activité pour ce produit. Bien que le cycle de rotation soit difficile à établir avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils standards de réapprovisionnement. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur le volume unique de la commande précédente (56u) pour assurer la disponibilité du stock face à un besoin incertain mais probable.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 135 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>3. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 56u vs Médiane: 56u (Réel: 43u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 43u
- **Erreur LLM**: 13u (30.2%)
- **Erreur Mediane**: 13u (30.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/01/2025, soit 114 jours sans activité. En l'absence d'historique récurrent permettant de définir un cycle précis, le principe de précaution B2B s'applique car le délai dépasse largement les seuils de rotation standards. Le risque de rupture est considéré comme élevé par manque de visibilité sur le stock résiduel. La quantité retenue correspond à la dernière commande connue (56u), conformément à la règle de maintien du volume historique récent en cas de commande unique.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 127 tokens
- **Total**: 1,000 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-03 14:02:01: 56u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 30u

</details>


<details>
<summary><strong>2. [JF040] JF CURRY KETCHUP SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-03 14:02:01: 56u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 27u

</details>


<details>
<summary><strong>3. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-03 14:02:01: 56u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 43u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 217 | Predicted 217u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 217 | Predicted 217u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 217 | Predicted 217u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:28:56.912Z*
