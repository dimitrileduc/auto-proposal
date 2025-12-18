# Rapport Backtest - Client Epicerie Uhoda Kennedy

## Contexte

- **Client** : Epicerie Uhoda Kennedy (ID: 23342)
- **Commande réelle** : S39989
- **Date commande** : 2025-10-29 11:28:56
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 27,308 input + 34,259 output = 61,567 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 19.4% | 36 produits prédits, 7 corrects |
| **Rappel** | 58.3% | 12 produits réels, 7 détectés |
| **F1-Score** | 29.2% | Score équilibré global |

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
| **MAE** | 0.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 35.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -45.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes pour établir un cycle (une seule commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Stable (une seule observation de 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 1 unité le 8 octobre 2025. Avec un recul de 20 jours depuis cet événement, et dans l'hypothèse d'un réapprovisionnement mensuel (standard pour des tests produits ou petits volumes B2B), une commande est probable avant le 27 novembre. Le volume étant très faible (1 unité), il s'agit vraisemblablement d'un échantillonnage ou d'un besoin ponctuel très spécifique. Faute de données supplémentaires, la quantité recommandée est maintenue à l'identique de la dernière commande.

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel potentiel (32 jours écoulés depuis la seule commande)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (basé sur un point unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 1 unité enregistrée le 26 septembre. Étant donné que 32 jours se sont écoulés depuis cette commande, nous entrons dans une fenêtre probable de réapprovisionnement pour un produit à très faible rotation. On suppose une demande de fond de 1 unité pour le cycle à venir afin de reconstituer le stock minimal. La confiance est faible car basée sur une donnée unique sans antécédent N-1.

</details>


<details>
<summary><strong>3. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande observée il y a 32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune donnée aberrante car une seule commande est présente dans l'historique (1u). ÉTAPE 2: La saisonnalité ne peut être établie sans historique N-1, bien que les boissons énergisantes soient généralement stables ou en légère hausse en période neutre. ÉTAPE 3: La seule commande date du 26 septembre. Trente-deux jours se sont écoulés. ÉTAPE 4: Étant donné qu'un cycle mensuel est courant en B2B mais qu'il s'est déjà écoulé plus de 30 jours, il est probable qu'une commande de réapprovisionnement advienne dans les 30 prochains jours. Faute d'historique plus riche, on recommande la quantité unitaire précédente (1u). La confiance est faible car le volume de données (1 point) ne permet pas de confirmer s'il s'agissait d'un échantillonnage ponctuel ou d'un besoin récurrent.

</details>


<details>
<summary><strong>4. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - LLM: 0u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique de commande détecté
- **Saisonnalité**: none
- **Tendance**: Ligne de base à 0 (absence de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse ne peut s'appuyer sur aucun historique de commande ni pour l'année précédente (N-1), ni pour les trois derniers mois. En l'absence totale de données transactionnelles pour ce produit [FO002], il est impossible d'identifier un cycle de réapprovisionnement, une tendance ou une saisonnalité. Conformément aux principes de la Supply Chain, sans signal de demande historique ou prévisionnel spécifique, la prédiction pour les 30 prochains jours est fixée à 0. Le niveau de confiance est faible en raison du manque de visibilité sur ce SKU.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:16:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (29)

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
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [LB005] LB Amber (5,2%) 33CL | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: 0.5u (6j restants) → prédit 2u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [KLAK01] KLAK Maté 330ml | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 3 | Stock prédit: 0.4u (4j restants) → prédit 3u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: -0.3u (-8j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 0.3u (3j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -0.8u (-13j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: 0.8u (21j restants) → prédit 2u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -0.8u (-14j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -1.0u (-34j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: -0.3u (-17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.0u (-34j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | Stock prédit: -1.7u (-65j restants) → prédit 2u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: -2.0u (-69j restants) → prédit 1u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Stock prédit: 0.2u (28j restants) → prédit 1u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -2.4u (-84j restants) → prédit 1u mais non commandé |


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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 2 | LLM avait prédit 0 (pas de besoin) avec stock: -2.1u (-81j) mais client a commandé 2u |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T19:58:30.864Z*
