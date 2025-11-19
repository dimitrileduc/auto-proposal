# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-03 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 7
- **Tokens**: 6,318 input + 3,060 output = 9,378 total
- **Coût**: $0.0173 (~1.73¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 77.8% | Score équilibré global |

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
| **MAE** | 26.71 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 87.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (7)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 18 | 60 | 42.0 | 70.0% | ✅ partial | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 20 | 7 | 13.0 | 185.7% | ✅ partial | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 15 | 40 | 25.0 | 62.5% | ✅ partial | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 38 | 18 | 20.0 | 111.1% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 18u vs Médiane: undefinedu (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 42u (70.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit [MATE02]:

1. Analyse des intervalles entre commandes:
- Entre chaque commande, l'intervalle est relativement régulier
- Écart moyen entre commandes : environ 28-30 jours
- Intervalle quasi-mensuel, ce qui suggère un besoin récurrent stable

2. Analyse des quantités:
- Variation des quantités : 10u, 20u, 20u, 17u
- Moyenne : 16.75 unités
- Fluctuations dans une plage acceptable (± 30%)
- Pas de tendance claire à la hausse ou à la baisse

3. Recommandation de quantité:
- Moyenne historique : 16.75u
- Arrondi conservateur à 18u pour anticiper une légère augmentation potentielle
- Correspond à la fourchette historique (entre 10u et 20u)
- Prend en compte la variabilité normale en B2B

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, cycle approximativement mensuel (28-30 jours)

**📊 Analyse Quantité:**
Quantités variables mais dans une plage acceptable, moyenne de 16.75 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 20u vs Médiane: undefinedu (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 13u (185.7%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commande du produit LV162:

1. Analyse temporelle des intervalles:
- Intervalle entre 1ère et 2ème commande: 13 jours
- Intervalle entre 2ème et 3ème commande: 46 jours
- Intervalles irréguliers, pas de périodicité claire

2. Analyse des quantités:
- Commandes de 25u, puis 10u
- Variation significative de -60% entre la 2ème et 3ème commande
- Dans la plage de variation normale B2B (±30%)

3. Recommandation de quantité:
- Moyenne des dernières commandes: (25 + 10) / 2 = 17.5u
- Arrondi conservateur à 20u
- Prend en compte la variabilité des commandes précédentes
- Permet de maintenir un stock tampon sans surstock

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, sans périodicité détectable

**📊 Analyse Quantité:**
Variations de quantité observées, mais dans la plage de fluctuation normale B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 15u vs Médiane: undefinedu (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 15u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 25u (62.5%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [NOD02] NODA limonade bio:

1. Analyse des intervalles temporels:
- Écarts entre commandes: 
  15 jours (sept-août), 15 jours (août), 30 jours (juillet-août)
- Relativement régulier, avec un rythme de commande tous les 15-30 jours
- Tendance à commander toutes les 2-4 semaines

2. Analyse des quantités:
- Variations entre 10u et 20u
- Moyenne = 14u
- Oscillations probablement liées aux besoins opérationnels
- Pas de croissance/décroissance linéaire claire

3. Recommandation conservatrice:
- Quantité médiane = 15u
- Dans la fourchette de ±30% des commandes précédentes
- Sécurise le stock sans surcharger l'inventaire
- Tient compte de la variabilité observée

**📅 Analyse Temporelle:**
Commandes régulières, interval moyen de 18-22 jours. Dernier intervalle: 45 jours, potentiel rattrapage.

**📊 Analyse Quantité:**
Quantités entre 10u et 20u. Variation normale, pas de tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: undefinedu (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [NOD03] NODA limonade bio:

1. Analyse temporelle:
- Intervalles entre commandes: Relativement réguliers
  - Entre 2025-09-01 et 2025-08-04: ~28 jours
  - Entre 2025-08-04 et 2025-07-04: ~31 jours
  - Entre 2025-07-04 et 2025-06-30: ~35 jours
Période moyenne entre commandes: environ 31 jours (proche d'un cycle mensuel)

2. Analyse des quantités:
- Quantités historiques: 10u, 10u, 20u, 10u
- Variation notable: Un pic à 20u, mais retour à 10u
- La quantité la plus fréquente et récente: 10 unités
- Variation dans l'intervalle acceptable de ±30%

3. Recommandation:
- Quantité recommandée conservatrice: 10 unités
- Basée sur la tendance récente et la stabilité des commandes
- Prend en compte les variations normales en B2B

**📅 Analyse Temporelle:**
Intervalles de commandes réguliers, cycle proche de 1 mois

**📊 Analyse Quantité:**
Majorité des commandes à 10u, un pic à 20u, mais retour à la quantité standard

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: undefinedu (Réel: 45u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes de NODA limonade bio:

1. Analyse des intervalles temporels:
- Entre 2025-06-30 et 2025-07-04: 4 jours
- Entre 2025-07-04 et 2025-09-01: 59 jours
Intervalles irréguliers, pas de pattern temporel clair.

2. Analyse des quantités:
- Variations entre 9u et 18u
- Deux dernières commandes à 18u identiques
- Variation dans la plage acceptable de ±30% (critère B2B)

3. Recommandation conservatrice:
- Dernières commandes stabilisées à 18u
- Choix de maintenir la quantité récente
- Quantité recommandée: 18 unités

Facteurs de prudence:
- Pas de tendance haussière/baissière nette
- Maintien du volume récent
- Marge de sécurité recommandée

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers, pas de cycle apparent. Variation significative de 4 à 59 jours entre commandes.

**📊 Analyse Quantité:**
Quantités oscillant entre 9 et 18u. Dernières commandes stabilisées à 18u, suggérant un volume de commande potentiel.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (3)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -39.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.5u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.8u (-5j restants) → prédit 53u mais non commandé |


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
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.2u (36j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:57:26.168Z*
