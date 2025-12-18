# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 18,191 input + 24,927 output = 43,118 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.2% | 23 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 78.9% | Score équilibré global |

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
| **MAE** | 1.07 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 3u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable entre 12 et 30 jours (moyenne environ 3 semaines)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (de 1u en juillet à 4u en septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une croissance des volumes sur les trois derniers mois (1u, 3u cumulées, puis 4u). Cependant, avec seulement 4 points de données et aucune comparaison N-1, la visibilité est limitée. On observe un arrêt des commandes depuis le 10 septembre (plus de 30 jours d'écart), suggérant l'épuisement du stock de sécurité. Bien que la tendance soit haussière, nous entrons en période automnale (octobre), peu propice aux boissons fraîches de type kombucha. Une recommandation de 3 unités est choisie pour satisfaire la demande de fond tout en restant conservateur face au changement de saison.

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ toutes les 2 à 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et stable, principalement de 1 unité par commande. Bien qu'une commande de 2 unités ait été observée en août, la demande de fond reste à l'unité minimale. Le délai depuis la dernière commande (33 jours) est supérieur à la moyenne habituelle (17 jours), ce qui justifie un réapprovisionnement, mais le faible volume historique n'autorise pas statistiquement une recommandation supérieure à 1 unité pour éviter le sur-stockage.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (intervalle de 21 à 29 jours), commandes passées en milieu de semaine
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite avec trois commandes consécutives de 4 unités. Aucun outlier n'a été identifié (étape 1). Bien que le secteur agroalimentaire présente une forte saisonnalité, l'absence de données N-1 et la régularité absolue des volumes récents (étape 2) suggèrent de rester sur la demande de fond. La tendance est stable (étape 3). Étant donné que 33 jours se sont écoulés depuis la dernière commande (le cycle habituel étant d'environ 30 jours), un réapprovisionnement de 4 unités est nécessaire pour couvrir le prochain cycle sans risque de sur-stockage (étape 4).

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (intervalle de 17 à 33 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 2 et 3 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les volumes sont constants (2-3 unités). Étape 2 : Pas de données N-1 pour évaluer la saisonnalité ; impact considéré comme neutre. Étape 3 : La tendance est stable. L'intervalle entre les commandes a tendance à se stabiliser autour de 30-33 jours. Étape 4 : La dernière commande datant du 10 septembre (soit il y a 33 jours), un réapprovisionnement est nécessaire. Avec une moyenne de 2,33 unités et dans une optique de gestion conservatrice pour un produit à faible rotation, une quantité de 2 unités est recommandée.

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30-33 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2-3 unités par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données (3u en août, 2u en septembre). On observe une demande de fond stable autour de 2,5 unités par mois. La commande actuelle intervient 33 jours après la précédente, confirmant un cycle de réapprovisionnement mensuel. En l'absence de données sur l'année précédente (N-1) et suivant une logique de précaution B2B pour éviter le sur-stockage sur un produit à rotation lente, la recommandation se porte sur 2 unités.

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel variable de 21 à 30 jours, généralement en milieu de semaine.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des trois derniers mois montre une stabilité parfaite du volume de commande (2 unités à chaque fois). Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité spécifique, mais la répétition du volume suggère une demande de fond constante. La dernière commande datant du 10 septembre (soit 33 jours d'intervalle), un réapprovisionnement est nécessaire. Bien que la commande actuelle tombe un lundi alors que les précédentes étaient le mardi/mercredi, le volume stable de 2 unités est maintenu pour éviter tout sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ toutes les 2 à 4 semaines
- **Saisonnalité**: none
- **Tendance**: Stable avec variations (1u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique court de 4 commandes sans données N-1. Aucun outlier n'est identifié, les volumes oscillant entre 1 et 3 unités. La consommation moyenne est de 2,25 unités par commande. Bien que le délai depuis la dernière commande (33 jours) soit supérieur à la moyenne habituelle, le faible volume global et l'absence de tendance haussière claire incitent à la prudence. Une recommandation de 2 unités permet de maintenir un stock de base sans risquer le sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 17 jours (plage 12-21 jours), majoritairement en milieu ou fin de semaine.
- **Saisonnalité**: none
- **Tendance**: Stable à 1.75u par commande (volume compris entre 1 et 2u).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande est très faible mais régulière. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré nul. Étape 3: Un délai de 33 jours s'est écoulé depuis la dernière commande (10 septembre), soit presque le double du cycle moyen d'environ 17 jours, ce qui indique un besoin certain de réapprovisionnement. Étape 4: En tenant compte de la stabilité historique (moyenne 1.75u) et du retard de commande, 2 unités permettent de couvrir les besoins sans risque de sur-stockage pour ce produit à faible rotation.

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (intervalle de 17 à 33 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur les trois derniers mois avec une quantité constante de 2 unités par commande. Aucun événement exceptionnel ou outlier n'est détecté. Bien que nous n'ayons pas de données N-1, la stabilité du volume (2u) et la fréquence de réapprovisionnement (environ tous les 33 jours pour les deux derniers cycles) indiquent une demande de fond très stable. La date actuelle (13 octobre) correspond à l'échéance théorique du cycle mensuel par rapport à la commande du 10 septembre. Une recommandation de 2 unités permet de maintenir le niveau de service sans risque de sur-stockage.

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 21 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite avec 2 unités commandées systématiquement tous les 21 à 30 jours. Aucune anomalie ou pic promotionnel n'est visible sur les trois derniers mois. Bien que nous n'ayons pas de données N-1 pour confirmer une saisonnalité, le rythme actuel est très régulier. La dernière commande datant d'il y a 33 jours, le cycle habituel de réapprovisionnement est atteint. Étant donné la faible vélocité mais la constance du produit, une commande de 2 unités est recommandée pour couvrir le prochain mois.

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (une seule occurrence enregistrée)
- **Saisonnalité**: none
- **Tendance**: Stable sur volume minimal (2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 2 unités datant de plus de deux mois (août 2025). En l'absence de données N-1 et de récurrence établie, il est impossible d'identifier une tendance ou une saisonnalité fiable. La recommandation se base strictement sur le dernier volume observé (2 unités) par mesure de prudence pour ce produit à rotation apparemment lente, afin d'éviter tout sur-stockage inutile tout en répondant à un éventuel besoin ponctuel.

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée avec un intervalle de plus de 60 jours
- **Saisonnalité**: none
- **Tendance**: Inconnue (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est insuffisant pour établir une tendance fiable avec une seule commande enregistrée le 08/08 (3u). Le délai de 66 jours entre la dernière commande et aujourd'hui suggère soit une rotation très lente, soit un besoin ponctuel. En l'absence de données N-1 pour confirmer un pic saisonnier en octobre et afin d'éviter le surstockage sur un produit bio à potentielle DLUO courte, on se base sur la seule valeur de référence connue (3u). La confiance est qualifiée de basse du fait de la pauvreté des données historiques.

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique isolée (historique insuffisant pour établir un cycle)
- **Saisonnalité**: none
- **Tendance**: Stable à volume unitaire très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est contrainte par un historique de données quasi inexistant (une seule commande de 1 unité en juillet 2025). ÉTAPE 1: Aucune valeur aberrante détectée, la base est de 1u. ÉTAPE 2: La saisonnalité ne peut être évaluée sans données N-1 ni historique de fin d'été/automne. ÉTAPE 3: La tendance est à l'inactivité depuis plus de 80 jours. ÉTAPE 4: Dans une démarche de gestion conservatrice pour un produit à très faible rotation (Slow Mover), la recommandation est de limiter la commande au strict minimum (1 unité) afin de tester la reprise de la demande sans risquer de sur-stocker un produit potentiellement dormant.

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 2u
- 2025-08-08 08:17:38: 1u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 1u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 4u
- 2025-08-20 11:25:33: 4u
- 2025-07-22 11:20:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 3u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 3u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 1u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-08 08:17:38: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:04:57: 2u
- 2025-08-20 11:25:33: 2u
- 2025-07-22 11:20:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-08 08:17:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 11:20:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (8)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | Stock prédit: 2.1u (17j restants) → prédit 5u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 | Stock prédit: 0.8u (10j restants) → prédit 3u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.8u (7j restants) → prédit 4u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.7u (-13j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.6u (-40j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 24 | Stock prédit: -2.4u (-70j restants) → prédit 24u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 12 | Stock prédit: -0.9u (-47j restants) → prédit 12u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -2.4u (-70j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:23:33.329Z*
