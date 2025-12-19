# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 5,851 input + 4,348 output = 10,199 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 44.4% | 9 produits réels, 4 détectés |
| **F1-Score** | 61.5% | Score équilibré global |

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
| **MAE** | 31.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 74.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 67.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (4)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 19 | 60 | 41.0 | 68.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 10 | 7 | 3.0 | 42.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 19u vs Médiane: 19u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 19u (confidence: high)
- 📊 **Baseline N-1**: 19u
- 📊 **Médiane**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 41u (68.3%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28 à 31 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 17u et 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement de commande très prévisible avec un cycle de 28 jours observé sur les trois derniers mois. La dernière commande datant du 2025-09-29, la prochaine est statistiquement attendue aux alentours du lundi 27 octobre 2025. Cette date tombant dans l'intervalle des 30 prochains jours par rapport à la date de référence (02 octobre), une commande est prévue. La quantité recommandée est basée sur la moyenne des trois dernières commandes (20, 20 et 17).

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 10u vs Médiane: 25u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 3u (42.9%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse du volume (dernière commande à 10u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des commandes espacées de 45 à 48 jours. La dernière commande datant du 1er septembre, la prochaine occurrence est statistiquement prévue vers la mi-octobre, soit dans la fenêtre des 30 prochains jours. Bien que le volume historique ait fluctué à 25u, la tendance la plus récente est de 10u, ce qui est retenu pour la prédiction.

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bihebdomadaire variable d'environ 15 à 20 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée - stable à 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre des commandes toutes les 2 à 3 semaines. La dernière commande date du 1er septembre, ce qui suggère un besoin imminent début octobre. Les volumes de 20u semblent liés à la période estivale (juillet/août), tandis que le retour à 10u en septembre définit la base actuelle.

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: high)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), début de mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une commande régulière de 10 unités au début de chaque mois (04/08 et 01/09). La valeur de 20 unités en juillet est traitée comme un outlier saisonnier ou promotionnel. Suivant ce cycle de 30 jours, la prochaine commande est attendue aux alentours du 1er octobre 2025. Étant donné que la date d'analyse est le 2 octobre, une commande de réapprovisionnement de 10 unités est imminente dans la fenêtre des 30 prochains jours.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 19u (confidence: high)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: high)
**📊 Quantité Réelle**: 60u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

---

## False Negatives (5)

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
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 45 | Stock: 3.5u (7j restants) - filtré pour autre raison |
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.9u (36j restants > seuil 30j) |
| [LV161] LV Tartinade Mangue curry 190g | 25 | En rupture (-15j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 18 | En rupture (-44j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 40 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T21:34:06.743Z*
