# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 22,173 input + 16,407 output = 38,580 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.2% | 19 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 91.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 28.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 1.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (12)

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 120 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 868 | 868 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1302 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 124 | 155 | 31.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 93 | 124 | 31.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 186 | 93 | 93.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (12 produits)


<details>
<summary><strong>1. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme de réapprovisionnement d'environ 11 à 15 jours
- **Saisonnalité**: none
- **Tendance**: Hausse récente du volume mais stabilité du lot de base à 31u
- **Outliers détectés**: 62u, 124u

**🧠 Raisonnement LLM:**
La dernière commande a eu lieu le 07/11/2025. En suivant le cycle moyen observé d'environ 12 jours (intervalle entre le 15/10, 30/10 et 07/11), la prochaine commande est attendue autour du 19/11/2025, soit largement dans la fenêtre des 30 prochains jours. Bien que le volume total du 07/11 ait atteint 124u (via 3 commandes simultanées), les commandes précédentes et l'historique N-1 indiquent un lot de base récurrent de 31u. Je prédis donc une commande de 31u pour maintenir le stock sans surestimer sur la base d'un pic ponctuel.

</details>


<details>
<summary><strong>2. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite de 25 unités toutes les deux semaines. La dernière commande date du 7 novembre; en suivant ce cycle, la prochaine commande est prévue aux alentours du 21 novembre, soit dans la fenêtre des 30 prochains jours.

</details>


<details>
<summary><strong>3. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 50u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 50u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bimensuelles (tous les 14 jours environ)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative du volume par rapport à N-1
- **Outliers détectés**: 75u, 100u

**🧠 Raisonnement LLM:**
L'analyse montre une récurrence bimensuelle. Après les commandes groupées du 7 novembre totalisant un volume exceptionnel, la prochaine fenêtre de commande se situe dans les 14 jours suivants (vers le 21 novembre). En excluant les pics de stockage du 7 novembre, la base stable se situe autour de 50 unités par commande.

</details>


<details>
<summary><strong>4. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 120u vs Médiane: 40u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: high)
- 📊 **Baseline N-1**: 120u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bi-hebdomadaire (8 à 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen par session d'environ 120u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un historique très régulier basé sur des multiples de 40 unités (conditionnement standard). L'intervalle le plus récent est de 8 jours entre les deux dernières sessions de commande. Étant donné que la dernière commande date du 7 novembre et que nous sommes le 11 novembre, la prochaine commande est prévue sous 3 à 7 jours, donc bien comprise dans la fenêtre des 30 jours. Le volume retenu (120u) correspond à la moyenne des sessions récentes qui varient entre 80u et 160u.

</details>


<details>
<summary><strong>5. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: medium)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, cycles variant de 2 à 21 jours sans jour fixe constant.
- **Saisonnalité**: weak
- **Tendance**: Hausse marquée du volume récent
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'analyse montre une commande très récente le 7 novembre 2025. Bien que le rythme historique soit irrégulier, la quantité standard unitaire est de 434u. Un pic à 868u a été observé récemment mais est considéré comme un outlier. Au vu de la répétitivité historique sur 30 jours, une nouvelle commande de 434u est probable d'ici le 11 décembre.

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 868u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 868u (confidence: high)
- 📊 **Baseline N-1**: 868u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, généralement le jeudi ou vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 434u à 868u par semaine
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence hebdomadaire très forte le jeudi ou vendredi. La dernière commande date du 7 novembre, la prochaine est donc attendue autour du 14 novembre (soit dans les 30 prochains jours). On retient une quantité de 868u correspondant au volume consolidé habituel hors pic promotionnel exceptionnel.

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 1302u vs Médiane: 868u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1302u (confidence: high)
- 📊 **Baseline N-1**: 868u
- 📊 **Médiane**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (tous les 7 jours environ)
- **Saisonnalité**: none
- **Tendance**: Hausse globale du volume hebdomadaire
- **Outliers détectés**: 2170u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande hebdomadaire très régulier, généralement le jeudi ou le vendredi. La dernière commande ayant eu lieu le 7 novembre, la prochaine est prévue autour du 14 novembre (soit dans les 30 prochains jours). Bien que les volumes récents soient en hausse, la quantité de base stable par envoi se situe autour de 1302 unités (cumul de multiples de 434u).

</details>


<details>
<summary><strong>8. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 124u vs Médiane: 93u (Réel: 155u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 124u (confidence: high)
- 📊 **Baseline N-1**: 124u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 31u (20.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire identifié le jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Hausse marquée +180% vs N-1
- **Outliers détectés**: 186u

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande hebdomadaire quasi-systématique. La dernière commande datant du 7 novembre, la prochaine est prévue sous 7 jours (autour du 14 novembre), soit bien à l'intérieur de la fenêtre des 30 jours. Après avoir écarté un pic exceptionnel à 186u, le volume de base récent stabilisé est de 124u par session de commande.

</details>


<details>
<summary><strong>9. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: high)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 31u (25.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, généralement le jeudi ou vendredi
- **Saisonnalité**: strong
- **Tendance**: Hausse significative +200%
- **Outliers détectés**: 124u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle hebdomadaire très régulier. La dernière commande ayant eu lieu le vendredi 7 novembre, la prochaine est prévue pour le jeudi 14 ou vendredi 15 novembre, soit dans moins de 30 jours. Bien qu'une hausse massive soit constatée par rapport à l'année N-1, le volume s'est stabilisé autour de 93 unités par commande normale ces deux dernières semaines.

</details>


<details>
<summary><strong>10. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 186u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 186u (confidence: high)
- 📊 **Baseline N-1**: 186u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 93u (100.0%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse récente à 186u cumulées
- **Outliers détectés**: 186u, 217u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence marquée toutes les deux semaines (jeudi ou vendredi). La dernière commande groupée datant du 7 novembre pour un total de 186 unités, la prochaine occurrence est prévue autour du 21 novembre. Cet intervalle se situant dans les 30 prochains jours, une commande d'un volume similaire à la dernière période stable est attendue.

</details>


<details>
<summary><strong>11. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire (Jeudi ou Vendredi)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 31u par unité de besoin
- **Outliers détectés**: 217u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence hebdomadaire stable. La méga-commande du 07/11 (total 217u) est traitée comme un outlier exceptionnel de stockage. La consommation de base identifiée est de 31u par session normale. Le prochain créneau de commande se situant dans les 7 jours, une commande de réapprovisionnement standard de 31u est prévue.

</details>


<details>
<summary><strong>12. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 40u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande d'environ 15 à 20 jours. La dernière commande date du 07/11 (40u), ce qui place la prochaine échéance théorique aux alentours du 22-26 novembre, soit dans les 30 prochains jours. La quantité est systématiquement de 40u.

</details>




### 📊 Données d'Input LLM (12 produits)


<details>
<summary><strong>1. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**✅ Quantité LLM**: 31u (confidence: high)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>2. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>3. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**✅ Quantité LLM**: 50u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>4. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**✅ Quantité LLM**: 120u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>5. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: medium)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**✅ Quantité LLM**: 868u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**✅ Quantité LLM**: 1302u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>8. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 124u (confidence: high)
**📊 Quantité Réelle**: 155u

</details>


<details>
<summary><strong>9. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 93u (confidence: high)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>10. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**✅ Quantité LLM**: 186u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>11. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: high)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>12. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: 335.7u (10j restants) → prédit 434u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: 354.7u (13j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: 185.3u (8j restants) → prédit 248u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 300 | Stock prédit: 537.4u (14j restants) → prédit 300u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 235 | Stock prédit: -579.6u (-15j restants) → prédit 235u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 254 | Stock prédit: -568.1u (-14j restants) → prédit 254u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: -274.7u (-22j restants) → prédit 25u mais non commandé |


---

## False Negatives (2)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock: 309.5u (7j restants) - filtré pour autre raison |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 868 | Stock: 230.2u (3j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:33:46.977Z*
