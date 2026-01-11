# Rapport Backtest - Client Natürlich Unverpackt

## Contexte

- **Client** : Natürlich Unverpackt (ID: 52712)
- **Commande réelle** : S39877
- **Date commande** : 2025-10-27 10:45:16
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,591 input + 987 output = 9,578 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 30.0% | 10 produits réels, 3 détectés |
| **F1-Score** | 42.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 77.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 77.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 77.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0030] MF Tarti Mangue Curry 250g  | 6 | 3 | 3.0 | 100.0% | partial | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Absence totale d'historique de commandes (récentes et N-1). En supply chain B2B, l'absence de données sur une référence active constitue un doute majeur sur le cycle de rotation. En application du principe de précaution (mieux vaut détecter un besoin incertain qu'une rupture), un besoin est identifié. ÉTAPE 2 : Sans historique pour calculer une médiane, la règle pour les rotations très faibles ou inconnues impose de ne pas surestimer. Une quantité minimale de 1 unité est préconisée pour tester la rotation sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 860 tokens
- **Output**: 135 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle défini, une commande est nécessaire pour constituer un stock initial ou tester la rotation. La quantité minimale de 1 unité est retenue conformément à la règle de prudence sur les faibles rotations pour éviter le surstockage initial.

**Tokens utilises pour cette prediction:**
- **Input**: 863 tokens
- **Output**: 97 tokens
- **Total**: 960 tokens



</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En supply chain B2B, l'absence totale de données sur un produit référencé crée une incertitude majeure. Selon le principe de précaution et la règle de détection en cas de doute sur le cycle, il est nécessaire de prévoir une commande pour éviter une rupture potentielle dès le lancement ou la mise en stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique, la règle pour les rotations très faibles ou inconnues s'applique : maintenir une quantité minimale de sécurité. Une quantité de 1 unité est préconisée pour initialiser le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 859 tokens
- **Output**: 170 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0027] MF Tarti Aubergine 250g  | 5 | Predicted 5u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0051] MF Kidney Beans 500g | 3 | Never ordered in previous analysis window (no history) |
| [RF003] REFIELD Maïs 500G  | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [MF0052] MF Pois chiches  500g | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [VID0009] Consigne casier | 22 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 132 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (3 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande n'est disponible pour ce produit, que ce soit sur la période récente ou sur l'année précédente (N-1). En l'absence totale d'historique de rotation ou de cycle de consommation, il est impossible d'établir un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Conformément au principe de précaution visant à éviter le surstockage sur des références sans mouvement, aucune commande n'est préconisée.

</details>


<details>
<summary><strong>2. [RF003] REFIELD Maïs 500G </strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'est enregistrée dans l'historique récent ni sur l'année précédente (N-1). En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'établir un besoin de réapprovisionnement. Conformément au principe de précaution contre le surstockage sans preuve de demande, aucune quantité n'est préconisée pour le moment.

</details>


<details>
<summary><strong>3. [MF0052] MF Pois chiches  500g</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique de vente, le risque de rupture ne peut être évalué et aucune commande de précaution ne peut être justifiée selon les règles de gestion basées sur les données.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:25:06.594Z*
