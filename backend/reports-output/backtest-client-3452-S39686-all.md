# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S39686
- **Date commande** : 2025-10-13 07:49:42
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 4
- **Tokens**: 8,712 input + 2,649 output = 11,361 total
- **Coût**: $0.0659 (~6.59¢)
- **Coût par produit LLM**: $0.0165


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | 130 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 98 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3301] DLL MAYONNAISE CITRON 300ML</strong> - LLM: 130u vs Médiane: 130u (Réel: 130u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 130u (confidence: high)
- 📊 **Baseline N-1**: 130u
- 📊 **Médiane**: 130u
- ✅ **Réel commandé**: 130u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance ~7-14 jours, principalement lundis
- **Saisonnalité**: none
- **Tendance**: Stable autour de 130u (hors outlier 390u)
- **Outliers détectés**: 390u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes récentes (3 derniers mois) montrent:
- 2025-08-11 (lun.) 130u
- 2025-08-14 (jeu.) 130u → 3j après
- 2025-08-22 (ven.) 390u → 8j après (OUTLIER)
- 2025-09-01 (lun.) 130u → 10j après
- 2025-09-08 (lun.) 130u → 7j après
- Prédiction: 2025-10-13 (lun.) → 35j après la dernière commande

Pattern identifié: Commandes principalement le lundi, avec fréquence variable (7-14 jours), mais un grand gap de 35 jours suggère qu'une commande aurait dû intervenir plus tôt. Le client a probablement commandé entre-temps (données manquantes) OU il y a eu une pause inhabituelle.

**FILTRAGE OUTLIERS:**
La quantité 390u (22/08/2025) est clairement exceptionnelle - exactement 3× la quantité standard de 130u. En N-1, nous avons aussi un 390u le 11/07/2024, confirmant que ce sont des commandes promotionnelles/événementielles ponctuelles, non récurrentes à date fixe.

**TENDANCE:**
En excluant le 390u, toutes les commandes récentes sont strictement à 130u. Aucune dérive à la hausse ou à la baisse. La demande de fond est stable.

**SAISONNALITÉ:**
N-1 octobre = 130u, identique à la baseline actuelle. Pas d'effet saisonnier détectable.

**DÉCISION:**
Malgré le gap de 35 jours (inhabituel), la régularité absolue des quantités de 130u sur toutes les commandes standards indique une demande de fond très stable. Le 2025-10-13 étant un lundi (jour privilégié), la quantité standard de 130u est la plus probable.

</details>


<details>
<summary><strong>2. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (principalement Lundi), intervalle ~7 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 98u depuis août 2025
- **Outliers détectés**: 392u

**🧠 Raisonnement LLM:**
**Analyse Rythmique**: Le client commande de manière très régulière chaque semaine, principalement le Lundi (5 commandes sur les 3 derniers mois). La date de prédiction est un lundi 2025-10-13, ce qui correspond parfaitement au pattern identifié.

**Intervalles observés**: 
- 01/09 → 08/09 = 7 jours (lun. → lun.)
- 25/08 → 01/09 = 7 jours (lun. → lun.)
- 19/08 → 25/08 = 6 jours (mar. → lun.)
- 14/08 → 19/08 = 5 jours (jeu. → mar.)

Le pattern hebdomadaire s'est stabilisé depuis fin août avec des commandes systématiques le lundi.

**Analyse des quantités**:
- Dernières 5 commandes (3 mois): 98u, 98u, 98u, 98u, 196u
- La commande de 196u du 14/08 représente exactement 2× la quantité standard → possible rattrapage ou commande double
- Les 4 dernières commandes sont strictement identiques: 98u
- N-1 (sept 2024): 2 commandes de 196u mais un seul pic de 392u en juillet (outlier clair - promotion/événement)

**Saisonnalité**: Impact faible. Les données N-1 montrent des quantités plus élevées (196u en septembre 2024) mais la tendance récente est clairement stabilisée à 98u depuis fin août 2025. Pas d'événement saisonnier spécifique identifié mi-octobre.

**Décision**: La demande de fond est de 98u avec une régularité parfaite sur les 4 dernières semaines. Le jour de prédiction (lundi) correspond au jour habituel de commande. Aucun élément ne justifie une variation. Prédiction: 98u.

</details>




---

## False Positives (2)

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
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 | Stock prédit: 89.2u (3j restants) → prédit 130u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 294 | Stock prédit: -854.6u (-27j restants) → prédit 294u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T08:59:08.181Z*
