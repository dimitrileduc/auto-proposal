# Rapport Backtest - Client RAFINA

## Contexte

- **Client** : RAFINA (ID: 3498)
- **Commande réelle** : S38515
- **Date commande** : 2025-08-14 06:42:06
- **Date cutoff système** : 2025-08-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 926 input + 163 output = 1,089 total


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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 5.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 5.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0501] YVALLI VINAIGRETTE 5 KG JERRY | 18 | 17 | 1.0 | 5.9% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0501] YVALLI VINAIGRETTE 5 KG JERRY</strong> - LLM: 18u vs Médiane: 19u (Réel: 17u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 18u
- **Baseline calculee**: 18u
- **Mediane historique**: 19u
- **Reel commande**: 17u
- **Erreur LLM**: 1u (5.9%)
- **Erreur Mediane**: 2u (11.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 18u (risque detecte)

**Raisonnement LLM:**
L'historique montre une rotation lente mais régulière avec des commandes espacées de plusieurs mois (environ 100 à 150 jours). La dernière commande remonte au 28 avril 2025, soit 107 jours avant la date actuelle. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. En application du principe de précaution B2B et face à un cycle long, une commande est nécessaire. La quantité retenue est de 18 unités, correspondant à la médiane des commandes récentes et à la valeur la plus basse observée dans l'historique pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 163 tokens
- **Total**: 1,089 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0501] YVALLI VINAIGRETTE 5 KG JERRY</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 11:50:08: 18u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-14 14:23:30: 20u
- 2023-12-19 12:05:24: 18u
- 2023-08-22 11:24:21: 20u

**Quantite Mediane (fallback)**: 18u
**Quantite Reelle**: 17u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:32.389Z*
