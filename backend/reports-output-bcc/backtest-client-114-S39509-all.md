# Rapport Backtest - Client Naturkost-und Kräuterladen

## Contexte

- **Client** : Naturkost-und Kräuterladen (ID: 114)
- **Commande réelle** : S39509
- **Date commande** : 2025-10-02 07:12:56
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 11,353 input + 2,038 output = 13,391 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 8.3% | 12 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 15.4% | Score equilibre global |

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
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 11 septembre, soit 20 jours avant la date actuelle. Bien que l'historique soit irrégulier, le délai de réapprovisionnement de 30 jours place l'horizon de rupture potentielle à fin octobre. En application du principe de précaution B2B (cycle incertain = prévoir), un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et une commande plus récente de 3u. La médiane des commandes distinctes ou la valeur la plus représentative pour éviter la rupture sans surstockage est de 3u (dernière commande observée). On maintient ce volume pour couvrir la période de 30 jours.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 175 tokens
- **Total**: 1,087 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 07:05:48: 3u
- 2025-05-16 09:10:10: 1u
- 2025-05-16 09:10:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0029] MF Tarti Datte chili 250g | 2 | Predicted 2u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Predicted 2u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Predicted 2u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Predicted 2u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | Predicted 2u but not ordered |
| [MF0014] MF Olives noires 500g | 1 | Predicted 1u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:27.370Z*
