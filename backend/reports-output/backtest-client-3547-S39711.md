# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S39711
- **Date commande** : 2025-10-14 07:25:09
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 9
- **Tokens**: 19,723 input + 5,680 output = 25,403 total
- **Coût**: $0.1444 (~14.44¢)
- **Coût par produit LLM**: $0.0160


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 11 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score équilibré global |

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
| **MAE** | 50.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (1)

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
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 150 | 200 | 50.0 | 25.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - LLM: 150u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 150u (confidence: medium)
- 📊 **Baseline N-1**: 150u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 50u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (~30-45j) - commandes récentes: 25j puis 22j puis 53j d'intervalle
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +100-150% (75-100u en N-1 → 200u récurrents en 2025)
- **Outliers détectés**: 1u, 300u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: 
Les 3 dernières commandes montrent un pattern irrégulier: 23/09 (84u), 29/08 (200u), 07/08 (200u). Intervalles: 25 jours, puis 22 jours avant. Depuis la dernière commande du 23/09, il s'est écoulé 21 jours au 14/10 - compatible avec le rythme récent de ~3-4 semaines.

**ANALYSE DE TENDANCE**:
- N-1 (2024): Volumes typiques 50-100u (médiane ~75u), avec outliers (1u erreur, 300u pic exceptionnel)
- Période récente 2025: Nette hausse avec 200u × 2 commandes puis 84u (possiblement ajustement de fin de stock)
- Tendance confirmée: +100-150% vs N-1

**SAISONNALITÉ**:
Octobre N-1 montrait 200u (30/09) et 150u (09/09) - volumes similaires à la tendance actuelle mais pas de pattern saisonnier fort spécifique à mi-octobre.

**DÉCISION**:
La dernière commande de 84u (23/09) semble atypiquement basse vs les 200u précédents - probablement un réajustement. Avec 21 jours écoulés et un rythme mensuel établi, le client devrait revenir sur sa nouvelle baseline ~200u. Cependant, le 84u récent introduit une incertitude. 

Prédiction: **150u** - compromis entre la nouvelle norme (200u) et le signal récent (84u), reflétant une demande de fond rehaussée sans surgonfler.

</details>




---

## False Positives (10)

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
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 96.6u (18j restants) → prédit 200u mais non commandé |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 50 | Stock prédit: -1.7u (0j restants) → prédit 50u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Stock prédit: 96.6u (18j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 200 | Stock prédit: 80.6u (13j restants) → prédit 200u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 200 | Stock prédit: 119.5u (29j restants) → prédit 200u mais non commandé |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: 96.6u (18j restants) → prédit 200u mais non commandé |
| [PF1194] GF VIN FINES HERBES WECK 330ML | 153 | Stock prédit: 33.3u (12j restants) → prédit 153u mais non commandé |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Stock prédit: 4.2u (10j restants) → prédit 25u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 150 | Stock prédit: 73.3u (28j restants) → prédit 150u mais non commandé |
| [PF1193] GF VIN TOMATE WECK 330ML | 145 | Stock prédit: -75.5u (-40j restants) → prédit 145u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:03:26.331Z*
