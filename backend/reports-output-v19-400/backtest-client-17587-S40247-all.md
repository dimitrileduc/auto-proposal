# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S40247
- **Date commande** : 2025-11-12 10:37:22
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 52
- **Tokens**: 0 input + 0 output = 0 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.0% | 50 produits prédits, 29 corrects |
| **Rappel** | 96.7% | 30 produits réels, 29 détectés |
| **F1-Score** | 72.5% | Score équilibré global |

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
| **MAE** | 0.59 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 17 | Avec erreur |

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

## True Positives (29)

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
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours car la dernière commande date de 19 jours et le cycle moyen récent est d'environ 45-60 jours. 2) Le produit suit un cycle de réapprovisionnement régulier bien que de faible volume ; la dernière commande a eu lieu le 23/10/2025. 3) La quantité estimée est de 1 unité, correspondant à la médiane exacte des commandes de l'année 2025, malgré des volumes légèrement supérieurs (2u) constatés en N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours car la dernière commande remonte à près de 3 semaines et le produit présente une rotation régulière bien que faible. 2) Le cycle de commande est espacé (tous les 3 à 4 mois en moyenne), mais une commande en novembre est cohérente avec l'historique N-1 (novembre 2023). 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes récentes et au volume typique observé sur cette période l'année précédente.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours. Le produit suit un cycle de réapprovisionnement régulier environ tous les 1.5 à 2 mois. 2) La dernière commande date du 23 octobre (il y a 19 jours). Bien que le délai moyen ne soit pas encore atteint, l'historique N-1 montre une activité en novembre/décembre, justifiant une commande de précaution pour éviter une rupture en fin d'année. 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes récentes (1u) et à la commande de la même période l'an dernier (1u en novembre 2023).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours. Le cycle moyen est d'environ 30 à 40 jours. 2) La dernière commande date du 23 octobre (il y a 19 jours). Compte tenu de la fréquence observée, un réapprovisionnement est probable d'ici fin novembre pour éviter une rupture de stock. 3) Quantité estimée à 2 unités, ce qui correspond à la médiane des commandes récentes (1, 1, 1, 2, 2, 2) et à la quantité la plus fréquente lors des pics de consommation.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : le produit suit un cycle de réapprovisionnement régulier tous les 1 à 2 mois. La dernière commande datant de 19 jours, un besoin est à anticiper pour maintenir le stock avant la fin du mois. 2) Le cycle observé montre des commandes en juin, juillet, septembre et octobre ; l'absence de commande en août suggère une rotation lente mais constante. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1, 2) et à la dernière commande effectuée, respectant le principe de précaution sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>6. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours car la dernière commande date de près de 3 semaines et le cycle moyen est d'environ 2 mois. 2) Le produit présente une rotation lente mais régulière (août, octobre). Par principe de précaution B2B, un réapprovisionnement est nécessaire pour maintenir la disponibilité. 3) La quantité estimée est de 1 unité, correspondant à la médiane stricte et constante des commandes historiques (1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours car le cycle moyen est d'environ 2 à 2,5 mois. 2) La dernière commande date du 23 octobre (il y a 19 jours) ; bien que le cycle habituel ne soit pas encore atteint, le principe de précaution B2B suggère de prévoir un réapprovisionnement pour éviter une rupture en fin d'année. 3) Quantité estimée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé : la dernière commande remonte à plus de 30 jours (6 octobre) alors que le cycle moyen observé est d'environ 25 à 30 jours. 2) Le produit présente une rotation régulière mensuelle depuis juillet. Avec une dernière commande il y a 5 semaines, un réapprovisionnement est nécessaire pour couvrir les besoins de novembre. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes récentes (1, 1, 1, 2) et à la tendance historique N-1 pour maintenir un stock minimal sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>9. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé : la dernière commande remonte à plus de 5 semaines (06/10) alors que le cycle habituel est de 3 à 4 semaines. 2) Le cycle historique montre une récurrence mensuelle stable (septembre/octobre 2025 et historique N-1 régulier). Un besoin est donc imminent pour couvrir novembre. 3) Quantité de 2 unités retenue car il s'agit de la médiane exacte et constante de la quasi-totalité des commandes passées (10 des 11 dernières commandes).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>10. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé : la dernière commande remonte à plus de 5 semaines (06/10) alors que le cycle moyen est d'environ un mois. 2) Le cycle historique montre une commande régulière tous les 30 à 45 jours ; un réapprovisionnement est donc nécessaire pour couvrir les 30 prochains jours. 3) Quantité de 2 unités car c'est la médiane exacte de l'historique récent et la valeur la plus fréquente (mode) sur l'ensemble des données N et N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>11. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé : le cycle moyen de commande est d'environ 45 à 60 jours et la dernière commande remonte à plus de 35 jours (06/10). 2) Le produit montre une rotation régulière tout au long de l'année, y compris en fin d'année N-1 (novembre/janvier). 3) La quantité estimée est de 2 unités, ce qui correspond à la médiane stricte des commandes récentes et historiques, assurant une couverture sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>12. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture élevé car la dernière commande remonte à plus de 5 semaines (06/10) alors que le cycle moyen est de 3 à 4 semaines. 2) Le cycle est régulier avec une commande mensuelle ; l'absence de commande en novembre indique un besoin immédiat. 3) La quantité estimée est de 2 unités, correspondant à la médiane constante des commandes récentes et de l'historique N-1.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>13. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé : la dernière commande remonte à plus de 5 semaines (06/10) alors que le cycle moyen est d'environ 30 à 45 jours. 2) Le produit présente une rotation régulière mais lente ; l'historique N-1 montre également des commandes en fin d'année (novembre), suggérant un besoin imminent. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes récentes (1u), malgré un pic ponctuel à 2u en octobre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>14. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture élevé car la dernière commande remonte à plus de 5 semaines (06/10), dépassant le cycle moyen habituel de 21 jours. 2) Le cycle de commande est régulier (environ toutes les 3 semaines), un réapprovisionnement est donc nécessaire pour couvrir l'horizon de 30 jours. 3) La quantité estimée est de 2 unités, correspondant à la médiane exacte des commandes récentes et à la valeur la plus fréquente dans l'historique.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>15. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à horizon 30 jours car la dernière commande date de plus d'un mois (06/10) et le produit présente une rotation lente mais régulière. 2) Le cycle de commande est espacé (environ tous les 1 à 3 mois) ; par précaution B2B, un réapprovisionnement est nécessaire pour maintenir la disponibilité en rayon. 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes historiques (1u) et au volume typique observé sur ce produit de niche.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>16. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : la dernière commande remonte à plus d'un mois (06/10) et le produit montre une rotation régulière bien que faible. 2) Le cycle de commande est espacé (environ tous les 3 mois en 2025), mais l'historique N-1 montre une commande en novembre (21/11), suggérant un besoin imminent pour maintenir le stock. 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes historiques (1u), ce qui permet de couvrir la demande typique sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>17. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours car la dernière commande remonte à plus de 5 semaines (06/10) et le cycle moyen est d'environ 1,5 à 2 mois. 2) Le cycle est irrégulier mais actif ; une commande est statistiquement due pour maintenir le stock de sécurité avant la fin d'année. 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1, 1) et à la tendance de l'année précédente sur la même période.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>18. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à horizon 30 jours. 2) Le cycle de commande est irrégulier (environ tous les 2 mois), la dernière commande datant du 06/10/2025, un réapprovisionnement est probable en novembre ou début décembre pour maintenir le stock. 3) Quantité estimée à 1 unité, correspondant à la médiane stricte des commandes récentes et à la majorité des commandes historiques (1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>19. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à l'horizon 30 jours car la dernière commande date de plus d'un mois et le produit présente une rotation régulière bien que faible. 2) Le cycle de commande est espacé (environ tous les 3 mois en 2025), mais l'historique N-1 montre une activité en novembre (2u le 21/11/2023), suggérant un besoin imminent. 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes de 2025 et à la valeur typique observée sur la majorité des transactions historiques.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>20. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé : le cycle moyen est d'environ 2 mois et la dernière commande remonte à 36 jours. 2) Le produit présente une rotation régulière (juin, août, octobre) ; une commande est nécessaire en novembre pour maintenir le stock avant la fin du cycle habituel. 3) La quantité estimée est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 4), ce qui représente le volume de réapprovisionnement typique pour ce produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>21. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : le produit suit un cycle de rotation lent mais régulier (environ toutes les 3 à 5 semaines). La dernière commande datant de plus d'un mois (06/10), un réapprovisionnement est nécessaire pour maintenir la disponibilité. 2) Cycle : Commandes espacées de 3 à 8 semaines. Dernière commande il y a 36 jours. 3) Quantité : 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1) et au volume typique de rotation pour ce produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>22. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : la dernière commande remonte à plus de 5 semaines (06/10), dépassant le cycle habituel observé entre septembre et octobre. 2) Le cycle semble s'accélérer (60 jours puis 21 jours), et l'absence de commande en novembre suggère un besoin imminent selon le principe de précaution B2B. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1), ce qui représente le volume de réapprovisionnement typique pour ce produit.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>23. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : la dernière commande remonte à près de deux mois (15 septembre) pour un produit dont la rotation moyenne est de 30 à 60 jours. 2) Le cycle de commande est irrégulier mais présent en fin d'année (cf. historique N-1 en novembre). Le délai depuis la dernière livraison justifie un réapprovisionnement par précaution. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes historiques (1, 1, 2), afin de maintenir un stock minimal sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>24. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture élevé : la dernière commande remonte à près de deux mois (15 septembre) alors que le cycle moyen constaté est d'environ 20 à 30 jours. 2) Le cycle est régulier avec une commande mensuelle minimum, le délai actuel dépasse largement la fréquence habituelle, suggérant un besoin immédiat de réapprovisionnement. 3) Quantité estimée à 1 unité, correspondant à la médiane des commandes historiques (1u), la commande de 2u en septembre étant traitée comme une variation ponctuelle.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>25. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : la dernière commande remonte à près de deux mois (15 septembre) alors que le cycle moyen observé est d'environ 30 à 45 jours. 2) Le cycle est régulier avec une commande par mois entre juin et septembre ; l'absence de commande en octobre suggère un besoin imminent pour novembre. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes historiques (1, 1, 1, 2), privilégiant la stabilité du stock B2B.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>26. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 2u
- 📊 **Baseline calculée**: 2u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 2u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture élevé : la dernière commande remonte à près de deux mois (15 septembre) alors que le cycle habituel est de 20 à 30 jours. 2) Le cycle moyen observé est d'environ une commande par mois ; l'absence de commande en octobre indique un besoin immédiat pour reconstituer le stock. 3) La quantité de 2 unités est retenue car elle correspond à la médiane et à la valeur la plus fréquente des commandes passées (75% des occurrences).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>27. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé car la dernière commande remonte à près de deux mois (57 jours) pour un produit de type boisson. 2) Le cycle est difficile à établir avec une seule commande, mais le délai écoulé depuis le 15 septembre justifie un réapprovisionnement par précaution pour maintenir la disponibilité. 3) Quantité estimée à 1 unité, correspondant à la médiane (et valeur unique) de l'historique récent, respectant le principe de précaution B2B sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>28. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré à élevé car la dernière commande remonte à près de deux mois (57 jours) alors que le cycle habituel observé est de 20 à 40 jours. 2) Le cycle moyen est d'environ un mois, la commande de septembre est donc déjà largement consommée. 3) La quantité estimée est de 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1), privilégiant la stabilité du stock sans surstockage.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>


<details>
<summary><strong>29. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1u
- 📊 **Baseline calculée**: 1u
- 📊 **Médiane historique**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: N/A
- **Confiance Phase 2 (quantité)**: N/A

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Analysé par ax
- **Cycle médian (jours)**: N/A
- **Dernière commande**: N/A
- **Prochaine prédite**: N/A 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) Risque de rupture modéré : le produit présente une rotation lente mais régulière avec un intervalle de 1 à 2 mois entre les commandes. La dernière commande datant de fin août, le stock est probablement épuisé ou proche de l'être en novembre. 2) Cycle de commande : environ tous les 60 jours. Un réapprovisionnement est nécessaire pour couvrir la période de fin d'année. 3) Quantité estimée : 1 unité, correspondant à la médiane stricte et constante des commandes précédentes (1u).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 0 tokens
- **Output**: 0 tokens
- **Total**: 0 tokens



</details>




### 📊 Données d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 2u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-09-15 06:21:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 0u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-07 13:57:36: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 1u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-07 13:57:36: 2u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 3u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-17 09:56:09: 1u
- 2025-07-02 07:40:31: 2u
- 2025-06-13 09:39:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>15. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 1u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>17. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 3u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>18. [LV139] LV Tartinade Paprika Chili 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-05-16 07:09:48: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 1u
- 2024-01-04 15:45:16: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>19. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 1u
- 2024-05-16 07:09:48: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u
- 2025-06-13 09:39:10: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>21. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>22. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>23. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-26 06:47:10: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>24. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>25. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>26. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 2u
- 2025-08-07 13:57:36: 1u
- 2025-07-02 07:40:31: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [RISH01] RISH kombucha BIO - original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>28. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>29. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-07-02 07:40:31: 1u
- 2025-06-13 09:39:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (21)

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
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 1.4u (42j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.6u (25j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.5u (19j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: 0.6u (32j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.6u (51j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.6u (60j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.6u (-12j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -1.7u (-47j restants) → prédit 2u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 1 | Stock prédit: 0.4u (51j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: -0.1u (-9j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: -0.5u (-20j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.5u (-29j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 2 | Stock prédit: -0.9u (-45j restants) → prédit 2u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -2.6u (-95j restants) → prédit 1u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 1 | Stock prédit: -0.7u (-56j restants) → prédit 1u mais non commandé |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Stock prédit: 0.2u (36j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.5u (-45j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.5u (-44j restants) → prédit 1u mais non commandé |
| [CB001] CB Apple juice 25cl | 1 | Stock prédit: -0.1u (-17j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-62j restants) → prédit 1u mais non commandé |


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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-26T09:26:48.829Z*
