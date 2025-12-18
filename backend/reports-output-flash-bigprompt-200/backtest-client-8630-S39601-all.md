# Rapport Backtest - Client Dorfladen An Ennen

## Contexte

- **Client** : Dorfladen An Ennen (ID: 8630)
- **Commande réelle** : S39601
- **Date commande** : 2025-10-17 06:18:09
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 11,904 input + 2,032 output = 13,936 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 44.4% | 18 produits réels, 8 détectés |
| **F1-Score** | 53.3% | Score équilibré global |

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
| **MAE** | 0.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 56.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 30.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (8)

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
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0031] MF Tarti Olives verte 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière sur ce produit (LV055). En dehors d'une commande isolée de 5 unités en novembre 2023 (considérée comme un outlier au vu de la suite), toutes les commandes sur deux ans sont strictement égales à 1 unité. La dernière commande datant de septembre 2025 (1u), et le cycle étant très espacé, la quantité la plus probable pour la prochaine occurrence, quel que soit le jour de déclenchement, reste l'unité minimale de commande.

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, intervalle irrégulier (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation très faible avec un historique de commandes unitaires (1u ou 2u maximum). La commande la plus récente (septembre 2025) était de 1 unité. Bien que le jeudi ne soit pas un jour de commandehistorique, les règles de gestion imposent de ne pas prédire 0. Compte tenu du volume de fond très bas et de la stabilité de la demande résiduelle, la quantité la plus probable pour la prochaine occurrence de commande est de 1 unité.

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Spot / Très faible rotation (environ 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation très lente et irrégulière avec un historique de 6 commandes en 2 ans. Toutes les quantités oscillent entre 1 et 2 unités. La dernière commande enregistrée (septembre 2025) était de 1 unité. En l'absence de cycle hebdomadaire clair ou de saisonnalité marquée (les volumes N-1 en octobre/novembre étaient de 1-2u), la probabilité la plus forte pour la prochaine commande est le maintien du volume minimal de 1 unité, indépendamment du fait que la demande tombe un jeudi.

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé - Absence complète d'historique de commandes
- **Saisonnalité**: none
- **Tendance**: Inexistante (Produit nouveau ou inactif)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques (N-1 et période récente), il est impossible d'établir un cycle de commande ou une tendance pour ce produit (LV330). Cependant, conformément aux directives Supply Chain interdisant la valeur 0 pour un produit dont on demande une prédiction (sauf arrêt définitif non spécifié ici), une quantité minimale unitaire de 1 est recommandée. Cela permet de couvrir le besoin d'une éventuelle commande d'implantation ou de reprise de stock pour ce jeudi, tout en minimisant le risque de surstockage sur une référence sans historique.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:49:41: 1u
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 1u
- 2023-11-07 08:03:59: 5u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:49:41: 2u
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 2u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (4)

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
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: 0.4u (20j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: 0.4u (25j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: -0.3u (-28j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Stock prédit: -0.5u (-37j restants) → prédit 1u mais non commandé |


---

## False Negatives (10)

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
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock suffisant: 1.6u (140j restants > seuil 30j) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock suffisant: 1.0u (39j restants > seuil 30j) |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock suffisant: 0.9u (49j restants > seuil 30j) |
| [MF0029] MF Tarti Datte chili 250g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:18:26.322Z*
