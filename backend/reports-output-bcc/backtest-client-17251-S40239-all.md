# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S40239
- **Date commande** : 2025-11-12 09:16:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 15,154 input + 2,308 output = 17,462 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.1% | 14 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 13.3% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | 112 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML</strong> - LLM: 112u vs Médiane: 112u (Réel: 112u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 112u
- **Baseline calculee**: 112u
- **Mediane historique**: 112u
- **Reel commande**: 112u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 112u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 10 à 20 jours (26/08, 16/09, 21/10, 31/10). La dernière commande datant du 31 octobre, soit il y a 11 jours, le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle moyen étant proche de 15-20 jours, une commande est nécessaire par précaution. La quantité de 112 unités est constante sur toutes les commandes effectives (médiane parfaite), elle est donc reconduite pour ce réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 166 tokens
- **Total**: 1,122 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-31 15:01:19: 112u
- 2025-10-21 09:39:45: 112u
- 2025-10-16 09:46:52: 0u
- 2025-09-16 12:31:33: 112u
- 2025-08-26 13:19:30: 112u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 112u
**Quantite Reelle**: 112u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | Predicted 192u but not ordered |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | Predicted 96u but not ordered |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | Predicted 108u but not ordered |
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Predicted 80u but not ordered |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 96 | Predicted 96u but not ordered |
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | Predicted 192u but not ordered |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | Predicted 108u but not ordered |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | Predicted 98u but not ordered |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Predicted 96u but not ordered |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | Predicted 110u but not ordered |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Predicted 98u but not ordered |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Predicted 98u but not ordered |
| [PF3380] CARREFOUR SAUCE TARTARE BIO SQUEEZE 300ML | 112 | Predicted 112u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:03:49.572Z*
