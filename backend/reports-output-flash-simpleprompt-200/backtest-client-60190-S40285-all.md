# Rapport Backtest - Client EUROPADRINKS

## Contexte

- **Client** : EUROPADRINKS (ID: 60190)
- **Commande réelle** : S40285
- **Date commande** : 2025-11-12 12:38:29
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,181 input + 2,411 output = 9,592 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.0% | 10 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 46.2% | Score équilibré global |

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
| **MAE** | 5.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 32.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (3)

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
| [REB05] REB chips bio - sel de mer 35g | 28 | 20 | 8.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 20 | 20 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 18 | 10 | 8.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 20u vs Médiane: 18u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: high)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 18u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (10.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (depuis les 2 dernières commandes)
- **Saisonnalité**: none
- **Tendance**: Hausse stabilisée à 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération du rythme de commande. Initialement espacées (août, septembre), les commandes se sont stabilisées sur un rythme hebdomadaire strict depuis le 27 octobre, avec un volume constant de 20 unités les deux derniers lundis. La demande pour ce mardi 11 novembre s'inscrit exactement dans ce cycle de 7-8 jours. Aucun outlier n'est à signaler et la tendance est parfaitement stable sur les 15 derniers jours.

</details>


<details>
<summary><strong>2. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 18u vs Médiane: 20u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Baseline N-1**: 18.33u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 8u (80.0%)
- 📉 **Erreur Médiane**: 10u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 30 à 35 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère croissance positive
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière d'environ 15 à 20 unités par mois (moyenne de 18.3). La dernière commande date d'il y a seulement 15 jours (27/10), suggérant que le stock n'est pas encore totalement épuisé pour un cycle complet de 30 jours. Cependant, la date cible est un mardi 11 novembre. Bien que ce soit un jour férié, si la commande est maintenue, le volume nécessaire pour couvrir la période suivante en tenant compte de la tendance récente s'établit à 18 unités, lissant la légère instabilité des intervalles de livraison.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 12:25:13: 20u
- 2025-10-27 08:44:07: 20u
- 2025-09-25 06:30:28: 10u
- 2025-08-19 08:57:48: 15u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: high)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>2. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 08:44:07: 20u
- 2025-09-25 06:30:28: 15u
- 2025-08-19 08:57:48: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 10u

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
| [REB06] REB chips bio - paprika fumé 35g | 20 | Stock prédit: 12.4u (11j restants) → prédit 20u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 20 | Stock prédit: 14.1u (16j restants) → prédit 20u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 4 | Stock prédit: 2.7u (15j restants) → prédit 4u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 20 | Stock prédit: 12.4u (22j restants) → prédit 20u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 10 | Stock prédit: 3.3u (6j restants) → prédit 10u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 7 | Stock prédit: 1.6u (9j restants) → prédit 7u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 5 | Stock prédit: -3.9u (-20j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:35:24.586Z*
