# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S39663
- **Date commande** : 2025-10-13 08:25:46
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 9
- **Tokens**: 18,123 input + 2,092 output = 20,215 total
- **Coût**: $0.0857 (~8.57¢)
- **Coût par produit LLM**: $0.0095


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 15 produits prédits, 8 corrects |
| **Rappel** | 88.9% | 9 produits réels, 8 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 7.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 39.8% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (8)

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
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 4 | 2 | 2.0 | 100.0% | ✅ partial | 📊 Médiane |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 4 | 4 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [PF0084] FILOU CARBONNADES 800 GR | 3 | 4 | 1.0 | 25.0% | ✅ partial | 📊 Médiane |
| [PF0094] FILOU MOUTARDE 700 GR | 30 | 20 | 10.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 4 | 10 | 6.0 | 60.0% | ✅ partial | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 74 | 44 | 30.0 | 68.2% | ✅ partial | 📊 Médiane |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 75 | 65 | 10.0 | 15.4% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 30u vs Médiane: N/Au (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: low)
- 📊 **Baseline N-1**: 30u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 10u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes récentes (20u et 40u) espacées. La médiane de ces 2 commandes est 30u, ce qui constitue la seule base exploitable. Aucun pattern saisonnier détectable avec si peu d'historique. Confiance faible car l'échantillon est trop limité pour identifier une demande structurelle fiable.

</details>


<details>
<summary><strong>2. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 75u vs Médiane: N/Au (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 75u (confidence: low)
- 📊 **Baseline N-1**: 75u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 10u (15.4%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes récentes (70u et 80u) espacées d'un mois. La médiane de 75u représente la demande observée mais l'historique est très insuffisant pour détecter une saisonnalité ou confirmer une tendance stable. Confiance faible due au manque de profondeur historique pour ce produit en seau de 1L qui semble avoir une rotation modeste.

</details>




---

## False Positives (7)

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
| [PF0085] FILOU CURRY KETCHUP  10 KG | 5 | Stock prédit: 3.4u (21j restants) → prédit 5u mais non commandé |
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 5.0u (22j restants) → prédit 10u mais non commandé |
| [PF0078] FILOU CHASSEUR 5 L | 10 | Stock prédit: 1.1u (2j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 3.1u (9j restants) → prédit 10u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | Stock prédit: -0.3u (0j restants) → prédit 40u mais non commandé |
| [PF0088] FILOU VOL AU VENT 800 GR | 30 | Stock prédit: -61.9u (-56j restants) → prédit 30u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 30 | Stock prédit: -16.0u (-18j restants) → prédit 30u mais non commandé |


---

## False Negatives (1)

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
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock suffisant: 31.7u (83j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T20:01:37.081Z*
