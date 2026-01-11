# Rapport Backtest - Client KOCKARTZ Bekodis GmbH Filiale : Lichtenbusch

## Contexte

- **Client** : KOCKARTZ Bekodis GmbH Filiale : Lichtenbusch (ID: 25017)
- **Commande réelle** : S40120
- **Date commande** : 2025-11-04 14:41:27
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,761 input + 525 output = 3,286 total


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
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 250.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 250.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 250.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 7 | 2 | 5.0 | 250.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit environ 88 jours. L'historique montre un cycle de commande moyen d'environ 60 à 90 jours (février, avril, juin, septembre). Nous sommes actuellement dans la fenêtre critique de réapprovisionnement pour éviter une rupture, dépassant les 70% du cycle habituel. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une rotation très faible et stable de 1 unité (médiane de 1u). Conformément aux règles de précaution B2B et de maintien des faibles rotations, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 172 tokens
- **Total**: 1,109 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 06:34:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 14:32:12: 2u
- 2024-06-11 06:34:04: 1u
- 2024-04-05 08:44:05: 1u
- 2024-02-02 08:47:24: 1u

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 7 | Predicted 7u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:20.923Z*
