# Rapport Backtest - Client BIDFOOD SA

## Contexte

- **Client** : BIDFOOD SA (ID: 3479)
- **Commande réelle** : S38946
- **Date commande** : 2025-09-03 13:05:35
- **Date cutoff système** : 2025-09-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 939 input + 167 output = 1,106 total


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
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0539] JF VOL AU VENT 2,5 KG | 24 | 18 | 6.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0539] JF VOL AU VENT 2,5 KG</strong> - LLM: 24u vs Médiane: 24u (Réel: 18u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 24u
- **Reel commande**: 18u
- **Erreur LLM**: 6u (33.3%)
- **Erreur Mediane**: 6u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 11 juin 2025, soit 83 jours. L'historique N-1 montre une commande à la même période l'année dernière (28 août 2024). Le cycle moyen historique est d'environ 90-100 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est statistiquement due pour maintenir le stock. ÉTAPE 2 : L'historique est extrêmement stable avec une quantité constante de 24 unités sur toutes les occurrences passées. La médiane et la valeur constante étant de 24, cette quantité est retenue pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 167 tokens
- **Total**: 1,106 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0539] JF VOL AU VENT 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:36:48: 24u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 08:23:56: 24u
- 2024-03-26 14:00:35: 24u
- 2023-12-01 10:47:24: 24u
- 2023-09-28 09:51:56: 24u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 18u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:26.759Z*
