# Rapport Backtest - Client JSC GOURMET LIFE

## Contexte

- **Client** : JSC GOURMET LIFE (ID: 12411)
- **Commande réelle** : S34498
- **Date commande** : 2025-01-23 13:10:21
- **Date cutoff système** : 2025-01-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,252 input + 1,126 output = 7,378 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 24.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 89.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 73.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF2937] LD FR TARTINADE BIO POIS 200 | 15 | 10 | 5.0 | 50.0% | partial | Non | Non | LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1 | 45 | 44.0 | 97.8% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 15u vs Médiane: 15u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 octobre 2024, soit plus de 100 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (août à octobre). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit bio, un réapprovisionnement est nécessaire. La quantité retenue est de 15 unités, correspondant à la dernière commande connue (médiane basse), afin de limiter le risque de surstockage sur une référence à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 132 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>2. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 1u vs Médiane: 11u (Réel: 45u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 11u
- **Reel commande**: 45u
- **Erreur LLM**: 44u (97.8%)
- **Erreur Mediane**: 34u (75.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 octobre 2024, soit plus de 100 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement pour couvrir le risque de rupture sur l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre deux commandes le même jour (20u et 1u). Conformément aux règles de gestion des valeurs extrêmes et des rotations faibles, la médiane ou la valeur la plus basse est privilégiée pour éviter le surstockage. Une quantité de 1 unité est préconisée pour maintenir la présence du produit sans risque financier.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 177 tokens
- **Total**: 1,076 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-14 12:31:38: 15u

**Commandes N-1 (meme periode annee derniere):**
- 2023-10-31 18:42:18: 0u
- 2023-10-31 18:24:23: 40u
- 2023-08-01 13:14:47: 20u

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-14 12:31:38: 20u
- 2024-10-14 12:31:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 45u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1969] LD BE TARTINADE BIO OLIVE 200 | 108 | Predicted 108u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [PF3200] LD FR TARTINADE BIO ASPERGE 180G</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
L'historique récent montre une activité concentrée sur une seule journée (14 octobre 2024) avec une commande principale de 30 unités et un ajustement de 1 unité. Depuis cette date, soit plus de 100 jours, aucune nouvelle commande n'a été enregistrée. Le cycle de rotation est inexistant ou très sporadique. Bien que le principe de précaution B2B s'applique en cas de doute, l'absence totale de mouvement sur les 3 derniers mois indique qu'il n'y a aucun risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Aucun besoin de réapprovisionnement n'est détecté à ce jour.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:28:06.023Z*
