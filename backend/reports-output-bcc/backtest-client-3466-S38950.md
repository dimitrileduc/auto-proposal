# Rapport Backtest - Client COLONA

## Contexte

- **Client** : COLONA (ID: 3466)
- **Commande réelle** : S38950
- **Date commande** : 2025-09-03 09:04:36
- **Date cutoff système** : 2025-09-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,823 input + 398 output = 2,221 total


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
| **MAE** | 104.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 32.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -32.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3298] COLONA MOUTARDE SUCREE 5 KG | 216 | 320 | 104.0 | 32.5% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF3298] COLONA MOUTARDE SUCREE 5 KG</strong> - LLM: 216u vs Médiane: 1080u (Réel: 320u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 216u
- **Baseline calculee**: 216u
- **Mediane historique**: 1080u
- **Reel commande**: 320u
- **Erreur LLM**: 104u (32.5%)
- **Erreur Mediane**: 760u (237.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 216u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 22 juillet 2025, soit il y a 42 jours. Bien que l'historique récent soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'un cycle régulier clairement défini, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente montre des volumes très importants (1080u), mais la commande la plus récente (216u) indique une baisse significative de la consommation ou un changement de format de commande. Conformément aux règles de privilégier l'historique récent et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 216 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 951 tokens
- **Output**: 213 tokens
- **Total**: 1,164 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3298] COLONA MOUTARDE SUCREE 5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 14:41:01: 216u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-11 07:46:07: 1080u
- 2024-04-10 06:44:22: 1080u
- 2024-02-13 13:46:38: 1080u
- 2024-01-23 08:54:35: 1080u

**Quantite Mediane (fallback)**: 216u
**Quantite Reelle**: 320u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:56.721Z*
