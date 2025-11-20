# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S39480
- **Date commande** : 2025-10-01 05:53:38
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 16
- **Tokens**: 32,498 input + 3,845 output = 36,343 total
- **Coût**: $0.1552 (~15.52¢)
- **Coût par produit LLM**: $0.0097


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.5% | 21 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 17.4% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (2)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 6 | 8 | 2.0 | 25.0% | ✅ partial | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | 32 | 8.0 | 25.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 6u vs Médiane: N/Au (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-56%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'année N-1 montrait une commande unique de 16u en septembre. La période récente (3 mois) révèle une demande plus régulière mais nettement inférieure: médiane à 6u avec 4 commandes (6u, 6u, 10u, 1u). Aucune saisonnalité marquée détectée, mais une tendance baissée claire d'environ -56%. Je recommande 6u basé sur la médiane récente qui reflète mieux la réalité actuelle du client.

</details>




---

## False Positives (19)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 48 | Stock prédit: 36.4u (28j restants) → prédit 48u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 4 | Stock prédit: 5.0u (30j restants) → prédit 4u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 6 | Stock prédit: 4.9u (26j restants) → prédit 6u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 3 | Stock prédit: 0.4u (4j restants) → prédit 3u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: 1.2u (14j restants) → prédit 3u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | Stock prédit: 1.9u (7j restants) → prédit 6u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 6 | Stock prédit: 1.4u (5j restants) → prédit 6u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 3 | Stock prédit: -0.5u (-5j restants) → prédit 3u mais non commandé |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 15 | Stock prédit: -1.3u (-3j restants) → prédit 15u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 3 | Stock prédit: -0.2u (-3j restants) → prédit 3u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 44 | Stock prédit: -16.0u (-37j restants) → prédit 44u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.4u (14j restants) → prédit 2u mais non commandé |
| [PF0096] FILOU MOUTARDE 3 KG | 24 | Stock prédit: -20.0u (-32j restants) → prédit 24u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Stock prédit: 0.7u (17j restants) → prédit 4u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (14j restants) → prédit 2u mais non commandé |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -1.5u (-41j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.8u (-31j restants) → prédit 2u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-11-19T20:00:46.154Z*
