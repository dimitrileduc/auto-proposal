# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S40213
- **Date commande** : 2025-11-12 09:20:47
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 10,326 input + 4,010 output = 14,336 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 21.4% | 28 produits prédits, 6 corrects |
| **Rappel** | 60.0% | 10 produits réels, 6 détectés |
| **F1-Score** | 31.6% | Score équilibré global |

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
| **MAE** | 1.83 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 108.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (6)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | 3 | 3.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 6 | 3 | 3.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 4 | 1 | 3.0 | 300.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |






---

## False Positives (22)

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
| [PF0959] FILOU TOMATO KETCHUP 10KG | 23 | Stock prédit: 27.1u (28j restants) → prédit 23u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Stock prédit: 1.8u (24j restants) → prédit 1u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 6 | Stock prédit: 5.2u (20j restants) → prédit 6u mais non commandé |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 56 | Stock prédit: 79.9u (29j restants) → prédit 56u mais non commandé |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 48 | Stock prédit: 37.9u (18j restants) → prédit 48u mais non commandé |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 7 | Stock prédit: 4.9u (13j restants) → prédit 7u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 32 | Stock prédit: -1.7u (-1j restants) → prédit 32u mais non commandé |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 | Stock prédit: 5.4u (6j restants) → prédit 44u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 4 | Stock prédit: 1.1u (18j restants) → prédit 4u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: -0.9u (-14j restants) → prédit 3u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-22j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 4 | Stock prédit: -2.6u (-34j restants) → prédit 4u mais non commandé |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 15 | Stock prédit: -4.4u (-16j restants) → prédit 15u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 4 | Stock prédit: -2.1u (-38j restants) → prédit 4u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 44 | Stock prédit: -26.7u (-75j restants) → prédit 44u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Stock prédit: -0.1u (-3j restants) → prédit 4u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 3 | Stock prédit: 0.7u (24j restants) → prédit 3u mais non commandé |
| [JF066] FIL MOUTARDE 300G BOCAL | 4 | Stock prédit: 0.4u (13j restants) → prédit 4u mais non commandé |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 10 | Stock prédit: -25.8u (-85j restants) → prédit 10u mais non commandé |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 12 | Stock prédit: -30.9u (-85j restants) → prédit 12u mais non commandé |


---

## False Negatives (4)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:34:02.037Z*
