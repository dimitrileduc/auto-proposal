# Rapport Backtest - Client CARREFOUR BELGIUM SA, CARREFOUR MARKET BRUXELLES MOLIER

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CARREFOUR MARKET BRUXELLES MOLIER (ID: 71420)
- **Commande réelle** : S38417
- **Date commande** : 2025-08-12 09:54:54
- **Date cutoff système** : 2025-08-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 20,900 input + 3,270 output = 24,170 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 33.3% | 3 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Aucune donnée historique de commande n'est disponible pour ce produit (Recent Orders et Last Year Orders vides). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle défini, une commande est nécessaire pour constituer un stock initial ou éviter une rupture indéterminée. La quantité minimale de 1 unité est préconisée conformément à la règle de rotation faible afin de ne pas surestimer le besoin sans historique concret.

**Tokens utilises pour cette prediction:**
- **Input**: 861 tokens
- **Output**: 110 tokens
- **Total**: 971 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de commande établi, aucun besoin de réapprovisionnement ne peut être justifié selon les critères de prédiction. Le risque de rupture est considéré comme nul faute de demande enregistrée.

</details>


<details>
<summary><strong>2. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de consommation, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car aucune demande n'est enregistrée pour ce produit.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:18:10.725Z*
