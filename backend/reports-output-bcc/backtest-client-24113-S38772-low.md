# Rapport Backtest - Client Le Potiquet

## Contexte

- **Client** : Le Potiquet (ID: 24113)
- **Commande réelle** : S38772
- **Date commande** : 2025-08-27 06:16:35
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,553 input + 3,670 output = 27,223 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 2 | 6 | 4.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 07/07/2025, soit 50 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation est incertain (une seule commande enregistrée). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent présente une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est fixée à 2 unités, correspondant à la dernière valeur observée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 158 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/07/2025, soit 50 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture ou un besoin de renouvellement de stock. En application du principe de précaution B2B et de la règle sur les rotations faibles, une commande est déclenchée. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent pour maintenir le niveau de stock initial sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 147 tokens
- **Total**: 1,025 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 06:16:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 06:16:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0058] MF Confi Groseilles Bessen | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0058] MF Confi Groseilles Bessen</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de consommation, il est impossible d'établir un cycle de rotation ou une quantité médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est déclenchée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:21:18.937Z*
