# Rapport Backtest - Client SPRL GOOD & FOOD, Good & Food

## Contexte

- **Client** : SPRL GOOD & FOOD, Good & Food (ID: 70082)
- **Commande réelle** : S38184
- **Date commande** : 2025-07-22 11:15:28
- **Date cutoff système** : 2025-07-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,091 input + 1,299 output = 8,390 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.5% | 8 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 22.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 286.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 81.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 81.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -81.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 64 | 350 | 286.0 | 81.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF3360] DLL MAYONNAISE AVOCAT 200ML</strong> - LLM: 64u vs Médiane: 207u (Réel: 350u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 207u
- **Reel commande**: 350u
- **Erreur LLM**: 286u (81.7%)
- **Erreur Mediane**: 143u (40.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 avril 2025, soit 94 jours. Bien que le cycle soit irrégulier (50 jours entre les deux premières commandes), le délai actuel dépasse largement la fréquence observée. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique présente deux valeurs : 64u et 350u. La commande de 350u est traitée comme un pic exceptionnel ou un stock de remplissage initial. Conformément à la règle de privilégier la valeur la plus basse en cas de doute et d'éviter la surestimation, la quantité retenue est de 64 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 200 tokens
- **Total**: 1,096 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3360] DLL MAYONNAISE AVOCAT 200ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 08:34:06: 350u
- 2025-02-28 08:32:04: 64u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 350u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3352] DLL MARINADE AVOCAT TOMATES SECHEES 240ML | 282 | Predicted 282u but not ordered |
| [PF3351] DLL MARINADE AVOCAT BBQ 240ML | 282 | Predicted 282u but not ordered |
| [PF3350] DLL MARINADE AVOCAT 8 HERBS 240ML | 90 | Predicted 90u but not ordered |
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 85 | Predicted 85u but not ordered |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 282 | Predicted 282u but not ordered |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 70 | Predicted 70u but not ordered |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 75 | Predicted 75u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:37.317Z*
