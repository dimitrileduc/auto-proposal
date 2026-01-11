# Rapport Backtest - Client GATZ METZGEREI

## Contexte

- **Client** : GATZ METZGEREI (ID: 3687)
- **Commande réelle** : S35339
- **Date commande** : 2025-03-11 14:34:25
- **Date cutoff système** : 2025-03-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,912 input + 300 output = 2,212 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 50.0% | 2 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 10.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 30 | 20 | 10.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 15u vs Médiane: 15u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 20u
- **Erreur LLM**: 5u (25.0%)
- **Erreur Mediane**: 5u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 25/11/2024 (soit plus de 100 jours). L'historique N-1 montre une commande systématique en mars (08/03/2024 et 24/03/2023). Le cycle annuel et l'absence de commande récente confirment un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche 20u, mais la récurrence historique sur l'année précédente est de 15u (médiane des commandes significatives). En application de la règle de prudence (choisir la valeur la plus basse en cas de doute entre 15 et 20), la quantité retenue est de 15u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,008 tokens
- **Output**: 205 tokens
- **Total**: 1,213 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-11-25 15:16:33: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-08 14:24:56: 15u
- 2024-01-17 11:29:25: 15u
- 2023-11-24 12:37:46: 15u
- 2023-10-23 06:59:50: 0u
- 2023-09-22 05:53:49: 15u
- 2023-08-01 13:33:05: 0u
- 2023-08-01 13:32:28: 10u
- 2023-03-24 13:07:55: 20u

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 20u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 5 | Product analyzed but LLM -> 0 - client ordered 5u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM predit: 0u | Reel commande: 5u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande récente n'a été enregistrée et l'historique de l'année précédente ne présente que des quantités nulles (0u). En l'absence de rotation historique ou de cycle de consommation détectable, il n'y a aucun risque de rupture identifié pour les 30 prochains jours. Conformément au principe de précaution sans historique de vente réel, aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:26:06.594Z*
