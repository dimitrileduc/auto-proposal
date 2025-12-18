# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S40281
- **Date commande** : 2025-11-14 10:24:46
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 20,490 input + 26,453 output = 46,943 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.9% | 32 produits prédits, 15 corrects |
| **Rappel** | 78.9% | 19 produits réels, 15 détectés |
| **F1-Score** | 58.8% | Score équilibré global |

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
| **MAE** | 0.47 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (15)

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
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 5 | 2 | 3.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande enregistrée de 1u)
- **Saisonnalité**: none
- **Tendance**: Stable (basé sur un point unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 1 unité le 21 octobre 2025. À la date actuelle (13 novembre), 23 jours se sont écoulés depuis cette commande. Dans un contexte de réapprovisionnement B2B pour un produit de niche ou à faible rotation, il est probable qu'une nouvelle commande unitaire survienne dans les 30 prochains jours (ce qui porterait l'intervalle à environ 30-50 jours). Étant donné l'absence de données N-1 et la faiblesse de l'historique récent, la confiance est faible, mais la quantité recommandée reste calée sur le seul volume observé.

</details>


<details>
<summary><strong>2. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande observée)
- **Saisonnalité**: none
- **Tendance**: Stable (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne comporte qu'une seule commande de 1 unité le 21 octobre 2025. Avec 23 jours écoulés depuis cet achat, et compte tenu d'un cycle de réapprovisionnement mensuel standard pour ce type de produit à faible rotation, une nouvelle commande est probable dans la fenêtre des 30 prochains jours. En l'absence de tendances ou de saisonnalité marquées par les données, la prédiction se base sur le maintien du volume initial de 1 unité pour la prochaine commande unique.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 0u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long identifié d'environ 56 jours (8 semaines) avec commandes le mardi
- **Saisonnalité**: none
- **Tendance**: Baisse de volume significative (8u vers 2u) et fréquence sporadique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur seulement deux points de données. L'intervalle entre les deux dernières commandes est de 56 jours (du 26 août au 21 octobre). En projetant ce cycle, la prochaine commande est estimée aux alentours du 16 décembre 2025. La fenêtre d'analyse de 30 jours s'arrête le 13 décembre 2025. Par conséquent, il est statistiquement probable qu'aucune commande n'intervienne dans les 30 prochains jours. La tendance à la baisse du volume unitaire (passant de 8 à 2 unités) renforce l'hypothèse d'une demande faible pour ce produit spécifique.

</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (commande unique)
- **Saisonnalité**: none
- **Tendance**: Stable (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, la base est de 1 unité. ÉTAPE 2: Pas de données historiques N-1 pour évaluer la saisonnalité, bien que le produit (limonade) soit généralement estival. ÉTAPE 3: Impossible de définir une tendance avec une seule commande enregistrée le 21 octobre. ÉTAPE 4: 23 jours se sont écoulés depuis la dernière commande. Sur un produit de ce type (faible rotation, 1 unité), un cycle mensuel est probable. Une commande de réapprovisionnement est donc anticipée d'ici le 21 novembre, soit dans la fenêtre des 30 prochains jours. La quantité recommandée reste de 1 unité pour correspondre au seul historique connu.

</details>


<details>
<summary><strong>5. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique isolée
- **Saisonnalité**: none
- **Tendance**: Inactif (Dernière activité il y a 79 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande unitaire effectuée le 26 août 2025. Depuis cette date, soit plus de 11 semaines d'activité, aucune nouvelle commande n'a été passée. L'absence de cycle régulier et la faible quantité (1u) suggèrent soit un achat test, soit un produit à rotation extrêmement lente dont le cycle de réapprovisionnement excède largement la fenêtre de 30 jours. En l'absence de signal récent, nous prédisons une absence de commande pour la période à venir.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 2u
- 2025-08-26 07:26:18: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock prédit: 0.6u (9j restants) → prédit 3u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: -0.6u (-34j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: -0.6u (-34j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: -0.6u (-34j restants) → prédit 1u mais non commandé |


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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock suffisant: 0.6u (40j restants > seuil 30j) |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock suffisant: 0.6u (40j restants > seuil 30j) |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.7u (-33j) mais client a commandé 1u |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: -1.6u (-9j) mais client a commandé 2u |


---

*Rapport généré automatiquement le 2025-12-18T19:56:45.854Z*
