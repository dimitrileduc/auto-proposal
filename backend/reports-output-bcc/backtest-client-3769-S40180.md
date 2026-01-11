# Rapport Backtest - Client HORECA TOTAAL

## Contexte

- **Client** : HORECA TOTAAL (ID: 3769)
- **Commande réelle** : S40180
- **Date commande** : 2025-11-06 14:09:49
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 980 input + 184 output = 1,164 total


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
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 14.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0649] PROMELIOR MOUTARDE DOUCE 2,1KG | 72 | 84 | 12.0 | 14.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0649] PROMELIOR MOUTARDE DOUCE 2,1KG</strong> - LLM: 72u vs Médiane: 84u (Réel: 84u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 72u
- **Baseline calculee**: 72u
- **Mediane historique**: 84u
- **Reel commande**: 84u
- **Erreur LLM**: 12u (14.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 72u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30/09/2025, soit 36 jours. L'historique montre un cycle moyen d'environ 50 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque (36 + 30 = 66 jours), dépassant le cycle habituel. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 72u et 84u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 72u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 980 tokens
- **Output**: 184 tokens
- **Total**: 1,164 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0649] PROMELIOR MOUTARDE DOUCE 2,1KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-30 07:29:38: 72u
- 2025-07-24 10:17:35: 84u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:46:29: 84u
- 2024-06-18 07:57:10: 94u
- 2024-02-27 08:33:03: 84u
- 2024-01-16 15:04:03: 84u
- 2023-11-21 14:50:48: 42u

**Quantite Mediane (fallback)**: 72u
**Quantite Reelle**: 84u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:08.836Z*
