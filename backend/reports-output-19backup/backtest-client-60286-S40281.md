# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S40281
- **Date commande** : 2025-11-14 10:24:46
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 49
- **Tokens**: 23,009 input + 27,845 output = 50,854 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 7 produits prédits, 5 corrects |
| **Rappel** | 29.4% | 17 produits réels, 5 détectés |
| **F1-Score** | 41.7% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 60.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 60.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (5)

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
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 56 jours (cycle bimensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande isolée fin août suivie d'une autre 56 jours plus tard fin octobre. Le cycle projeté suggère une prochaine commande aux alentours du 16 décembre, mais la nécessité d'un réapprovisionnement de sécurité ou d'une légère avance par rapport au cycle de 8 semaines place la probabilité de commande juste à la limite ou pendant la fenêtre des 30 jours.

</details>


<details>
<summary><strong>2. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 56 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande isolée fin août suivie d'une autre 56 jours plus tard en octobre. En se basant sur cette fréquence d'environ deux mois, la prochaine commande est estimée pour la mi-décembre 2025. Bien que le cycle théorique dépasse légèrement les 30 jours, la faible densité de données suggère une probabilité de commande avant la fin de la période d'observation.

</details>


<details>
<summary><strong>3. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 56 jours (8 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande de 1u environ tous les deux mois le mardi. La dernière commande datant du 21 octobre, la prochaine occurrence selon ce cycle est estimée aux alentours du 16 décembre. Toutefois, compte tenu de l'incertitude liée au faible volume de données et de la proximité de la fenêtre des 30 jours, une commande de réapprovisionnement de 1 unité est anticipée pour maintenir le stock de fond.

</details>


<details>
<summary><strong>4. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 56 jours (environ 8 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle long d'environ 8 semaines. La dernière commande date du 21 octobre. Selon ce rythme, la prochaine commande est attendue aux alentours du 16 décembre, soit dans environ 33 jours. Cependant, étant donné la proximité de l'échéance des 30 jours et la faible densité de données, il existe une probabilité de commande de réapprovisionnement d'une unité de base avant la mi-décembre.

</details>


<details>
<summary><strong>5. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 56 jours (8 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande toutes les 8 semaines (56 jours). La dernière commande ayant eu lieu le 21 octobre, la prochaine est théoriquement attendue autour du 16 décembre. Cependant, le délai entre les deux dernières commandes suggère un besoin récurrent bien que faible. Une commande est projetée dans la fenêtre des 30 jours pour maintenir le stock au vu de l'espacement irrégulier mais constant de 1 unité.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [RIT07] RITCHIE Orange - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RIT08] RITCHIE Citron - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [RIT09] RITCHIE Cola - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.6u (9j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: -1.1u (-8j restants) → prédit 3u mais non commandé |


---

## False Negatives (12)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | En rupture (-28j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock suffisant: 0.6u (40j restants > seuil 30j) |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock: 0.6u (30j restants) - filtré pour autre raison |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock suffisant: 0.6u (40j restants > seuil 30j) |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock: 0.4u (17j restants) - filtré pour autre raison |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock: 0.3u (11j restants) - filtré pour autre raison |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock: 0.3u (11j restants) - filtré pour autre raison |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock: 0.4u (17j restants) - filtré pour autre raison |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock: 0.4u (17j restants) - filtré pour autre raison |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Stock: 0.5u (3j restants) - filtré pour autre raison |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | En rupture (-33j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | En rupture (-9j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-18T21:34:25.773Z*
