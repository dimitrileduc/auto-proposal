# Rapport Backtest - Client DELISALADES

## Contexte

- **Client** : DELISALADES (ID: 23733)
- **Commande réelle** : S40322
- **Date commande** : 2025-11-13 12:24:21
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 16,949 input + 5,285 output = 22,234 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 43.8% | 16 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 58.3% | Score équilibré global |

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
| **MAE** | 2.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 57.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV140] LV Moutarde à l'ancienne  200ml | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 13 | 6 | 7.0 | 116.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF021] JF PICKLES 350 ML | 5 | 8 | 3.0 | 37.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV140] LV Moutarde à l'ancienne  200ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 20-30 jours, historiquement en début de semaine (lun/mar), récemment glissé vers fin de semaine (mer/jeu/ven).
- **Saisonnalité**: weak
- **Tendance**: Hausse stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune anomalie détectée, les volumes sont cohérents (1u à 4u). Étape 2 (Saisonnalité) : Faible impact visible sur N-1 en novembre, mais l'approche des fêtes de fin d'année stabilise généralement la demande sur ce type de condiment. Étape 3 (Tendance) : On observe une consolidation nette à 3 unités sur les trois derniers mois (septembre, octobre), contre une moyenne de 2.2u l'année passée. Étape 4 (Recommandation) : La dynamique récente est très régulière (3u/commande). Compte tenu du délai de 20 jours depuis la dernière commande (23/10), le besoin de réapprovisionnement est confirmé pour maintenir le stock de sécurité.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 5u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: high)
- 📊 **Baseline N-1**: 5.15u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier environ tous les 20 à 30 jours, commandes principalement entre mercredi et vendredi.
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 5u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): La commande de 10u en juillet 2024 a été identifiée comme un pic isolé (outlier) probablement lié à la saison estivale. La moyenne hors outlier est de 5,15u. ÉTAPE 2 (SAISONNALITÉ): Pas de pic majeur observé sur novembre N-1 (stabilité relative entre octobre et janvier à 6u). La saisonnalité est jugée faible pour ce produit de tartinade en cette période. ÉTAPE 3 (TENDANCE): Les trois dernières commandes (3u, 8u, 4u) montrent une moyenne de 5u, confirmant une stabilité par rapport à l'année précédente. Le rythme de commande est maintenu. ÉTAPE 4 (RECOMMANDATION): On se base sur la moyenne de fond lissée. Bien qu'une commande de 8u ait eu lieu en octobre, la dernière commande à 4u suggère un retour à la normale. Une recommandation de 5u permet de couvrir le mois à venir sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 13u vs Médiane: 14u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 13u (confidence: high)
- 📊 **Baseline N-1**: 6.7u
- 📊 **Médiane**: 14u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 7u (116.7%)
- 📉 **Erreur Médiane**: 8u (133.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 3 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +100% vs N-1
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage de l'outlier de juillet 2024 (20u). La demande de fond historique s'établit à environ 6-7u par commande. Étape 2: Saisonnalité faible, bien qu'un pic léger ait été observé en été N-1. Aucun pic spécifique n'est attendu en novembre sur ce SKU. Étape 3: Tendance en forte hausse sur les deux derniers mois (15u et 12u) comparé à la moyenne N-1 de 6u. Le rythme de commande semble s'accélérer avec une demande volumétrique doublée. Étape 4: En moyennant la tendance récente (13.5u) tout en restant conservateur pour éviter le sur-stockage après le pic de septembre, une commande de 13 unités est recommandée pour couvrir les 4 prochaines semaines.

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 4 à 8 semaines environ
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 4u en mai 2024 semble être un stock de sécurité ou un événement ponctuel face à l'historique de 2u. Étape 2: Faible visibilité sur la saisonnalité faute de données récurrentes, bien que le produit soit présent en automne N-1 et N. Étape 3: La dernière commande d'octobre (2u) confirme une demande de fond stable malgré une fréquence très lente. Étape 4: La recommandation se base sur la quantité standard observée (2u) pour couvrir le prochain cycle sans risquer le sur-stockage sur un produit à rotation lente. La confiance est faible car l'historique est trop parsimonieux pour établir une cyclicité rigoureuse.

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier mensuel à bimestriel, dominante jeudi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% sur les volumes récents
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable autour de 4 unités après avoir écarté le pic de 15u (juillet 2024, possible promotion estivale). La saisonnalité pour novembre (N-1) indique un besoin de 4u. Bien que les volumes récents (septembre/octobre 2025) soient plus faibles (2u et 4u), la fin d'année 2023 avait montré une activité accrue. Compte tenu de la baisse de tendance mais du besoin de stocker pour la période de fin d'année, une commande de 4 unités est recommandée pour maintenir le service sans risque de sur-stockage.

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 1-2 mois, pas de cycle hebdomadaire fixe
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3.6u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune commande aberrante détectée, les volumes sont cohérents (3 à 4 unités). Étape 2 (Saisonnalité) : Produit haut de gamme (truffe) pouvant subir une hausse à l'approche des fêtes de fin d'année, bien que l'historique N-1 soit printanier. Étape 3 (Tendance) : Aucune commande ces 3 derniers mois, ce qui indique soit une rupture de consommation, soit une rotation très lente. Étape 4 (Recommandation) : Malgré l'absence de données récentes, le volume historique moyen est de 3.67 unités. Compte tenu de la date actuelle (mi-novembre) et de la nature du produit (truffe), nous arrondissons à 4 pour couvrir le début de la période festive tout en restant conservateur face à l'inactivité récente du compte sur cette référence. Confiance faible due au manque de données sur les 90 derniers jours. État des stocks inconnu, commande de réactivation.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV140] LV Moutarde à l'ancienne  200ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 09:44:15: 3u
- 2025-10-03 08:03:20: 3u
- 2025-09-10 08:42:30: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-16 10:06:10: 4u
- 2024-06-17 08:26:34: 2u
- 2024-06-04 07:52:11: 1u
- 2024-05-14 14:28:33: 2u
- 2024-02-12 12:18:18: 2u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 09:44:15: 4u
- 2025-10-03 08:03:20: 8u
- 2025-09-10 08:42:30: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 14:18:31: 6u
- 2024-10-07 12:34:29: 4u
- 2024-09-12 09:46:28: 4u
- 2024-08-12 12:27:21: 6u
- 2024-07-16 10:06:10: 10u
- 2024-06-17 08:26:34: 2u
- 2024-06-04 07:52:11: 6u
- 2024-05-14 14:28:33: 8u
- 2024-04-05 09:30:21: 4u
- 2024-03-07 14:50:08: 4u
- 2024-01-25 09:32:53: 6u
- 2024-01-03 14:44:54: 6u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 09:44:15: 12u
- 2025-09-10 08:42:30: 15u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 14:18:31: 6u
- 2024-10-07 12:34:29: 10u
- 2024-09-12 09:46:28: 6u
- 2024-08-12 12:27:21: 8u
- 2024-07-16 10:06:10: 20u
- 2024-06-17 08:26:34: 4u
- 2024-06-04 07:52:11: 4u
- 2024-05-14 14:28:33: 6u
- 2024-04-18 12:24:57: 8u
- 2024-04-05 09:30:21: 6u
- 2024-03-26 10:49:17: 6u
- 2024-03-07 14:50:08: 6u

**✅ Quantité LLM**: 13u (confidence: high)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 08:03:20: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 12:34:29: 2u
- 2024-06-17 08:26:34: 0u
- 2024-05-14 14:28:33: 4u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 08:03:20: 4u
- 2025-09-10 08:42:30: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 14:18:31: 8u
- 2024-09-12 09:46:28: 4u
- 2024-07-16 10:06:10: 15u
- 2024-06-17 08:26:34: 3u
- 2024-05-14 14:28:33: 8u
- 2024-04-18 12:24:57: 3u
- 2024-03-07 14:50:08: 4u
- 2024-02-12 12:18:18: 3u
- 2024-01-03 14:44:54: 4u
- 2023-12-07 13:55:19: 8u
- 2023-11-23 10:34:37: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-17 08:26:34: 4u
- 2024-04-05 09:30:21: 3u
- 2024-03-26 10:49:17: 4u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (9)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 7 | Stock prédit: 4.2u (13j restants) → prédit 7u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Stock prédit: 1.4u (17j restants) → prédit 3u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 3 | Stock prédit: 1.5u (18j restants) → prédit 3u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | Stock prédit: 1.2u (16j restants) → prédit 4u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Stock prédit: 0.8u (28j restants) → prédit 2u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 1.0u (18j restants) → prédit 2u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 3 | Stock prédit: -0.9u (-14j restants) → prédit 3u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -2.5u (-68j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Stock prédit: -1.6u (-59j restants) → prédit 2u mais non commandé |


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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock suffisant: 0.9u (34j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:11:04.061Z*
