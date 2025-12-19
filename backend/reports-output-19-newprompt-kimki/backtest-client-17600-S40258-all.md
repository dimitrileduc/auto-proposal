# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S40258
- **Date commande** : 2025-11-12 08:36:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 66,868 input + 166,845 output = 233,713 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.5% | 19 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: medium)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern récent stable (6j) mais historique global erratique
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 864u, 4u

**🧠 Raisonnement LLM:**
Cycle médian de 6j calculé sur historique [0,49,6,6]j (CV=128.8% → erratique). Les 3 commandes récentes montrent un pattern stable: quantités identiques 434u à intervalles réguliers de 6j. Outliers détectés [864,4] retirés. Baseline=434 (médiane des valeurs retenues [434,434,434], CV=0%). Prochaine commande prévue le 2025-11-13 (dans 2j).

</details>


<details>
<summary><strong>2. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - LLM: 200u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: medium)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Produit inactive 10 mois (oct-2024 à août-2025). Recommande récente avec 4 cycles [6j,16j,28j], médiane 16j très erratique (CV=53.9%)
- **Saisonnalité**: strong
- **Tendance**: stable
- **Outliers détectés**: 600u, 400u

**🧠 Raisonnement LLM:**
Cycle médian 16j sur 3 derniers mois mais CV=53.9% (très erratique). Commande attendue le 2024-10-24 déjà en retard de 18j (RISQUE CONFIRMÉ). Historique quantité stable 200u (12/14 valeurs, médiane 200, CV=0%). Outliers 600u et 400u exclus (événements isolés). Saisonnalité 'strong' non cohérente (pic unique), pas d'ajustement.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:56:31: 434u
- 2025-10-14 13:50:03: 434u
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 434u (confidence: medium)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-10 09:37:56: 200u
- 2025-09-04 09:10:58: 200u
- 2025-08-19 07:26:59: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 15:21:52: 200u
- 2024-10-10 12:10:09: 200u
- 2024-09-11 07:42:30: 600u
- 2024-08-08 07:00:55: 200u
- 2024-06-11 08:46:37: 200u
- 2024-04-24 08:56:28: 200u
- 2024-04-02 13:39:05: 200u
- 2024-03-13 08:07:55: 200u
- 2024-03-06 09:03:21: 200u
- 2023-12-19 08:25:50: 400u

**✅ Quantité LLM**: 200u (confidence: medium)
**📊 Quantité Réelle**: 200u

</details>




---

## False Positives (17)

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
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | Stock prédit: 44.4u (2j restants) → prédit 200u mais non commandé |
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | Stock prédit: 41.5u (2j restants) → prédit 200u mais non commandé |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | Stock prédit: -320.5u (-16j restants) → prédit 400u mais non commandé |
| [LV356] LV SET 3 X 135G trisauces  SDP | 256 | Stock prédit: 158.3u (43j restants) → prédit 256u mais non commandé |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | Stock prédit: -130.7u (-6j restants) → prédit 434u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 2.4u (0j restants) → prédit 400u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 267 | Stock prédit: -95.5u (-10j restants) → prédit 267u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: -207.3u (-10j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 23.6u (3j restants) → prédit 350u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -122.9u (-25j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -284.3u (-39j restants) → prédit 200u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 350 | Stock prédit: 19.2u (3j restants) → prédit 350u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -157.3u (-25j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: 3.6u (0j restants) → prédit 350u mais non commandé |
| [LV309] LV BIO Tartin'apero Lentilles curry SDP 200ml | 350 | Stock prédit: 88.4u (28j restants) → prédit 350u mais non commandé |


---

## False Negatives (2)

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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 434 | Stock: 175.6u (4j restants) - filtré pour autre raison |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 434 | Stock: -4.0u (0j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-19T07:36:10.227Z*
