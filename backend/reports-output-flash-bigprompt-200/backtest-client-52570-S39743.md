# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39743
- **Date commande** : 2025-10-16 11:39:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 23,524 input + 4,638 output = 28,162 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.2% | 18 produits prédits, 13 corrects |
| **Rappel** | 92.9% | 14 produits réels, 13 détectés |
| **F1-Score** | 81.3% | Score équilibré global |

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
| **MAE** | 0.54 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (13)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 28-30 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse / Stabilisation à 3u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel très régulier (environ une commande par mois). Bien que l'historique N-1 affichait une moyenne de 4u, les données récentes de 2025 montrent une érosion du volume (4u en août, 1u outlier fin août, 3u en septembre). La date cible du 15 octobre s'inscrit parfaitement dans la fenêtre de réapprovisionnement de 21 à 30 jours après la commande du 24 septembre. La valeur de 1u le 26/08 est traitée comme un outlier car trop rapprochée de la commande du 04/08 (réajustement de stock). La quantité la plus probable pour maintenir le fond de rayon est de 3u, alignée sur la dernière commande réelle.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25% (Passage de 4u/5u à 3u/4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité mensuelle quasi-parfaite. Bien que l'année N-1 affichait des volumes de 4u à 5u entre août et octobre, les données récentes de 2025 indiquent une stabilisation à la baisse : 4u en août puis 3u en septembre. L'intervalle entre les deux dernières commandes est de 29 jours. La date cible (15 octobre) se situe exactement 21 jours après la dernière commande du 24 septembre, s'insérant dans le cycle de réapprovisionnement mensuel. Compte tenu de la tendance baissière immédiate et de la dernière valeur observée (3u), la quantité la plus probable pour maintenir le stock sans sur-stockage est de 3 unités.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel ~28-32 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 3.5u avec légère baisse
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ une fois par mois. L'intervalle entre les trois dernières commandes est de 22 jours (Août-Sep) et 29 jours (Août-Juil). La date cible (15 octobre) se situe exactement 21 jours après la dernière commande du 24 septembre, s'insérant parfaitement dans la fenêtre de réapprovisionnement mensuel. Bien que N-1 affichait des volumes de 4-5u, la tendance 2025 est stabilisée à 4u puis a chuté à 3u lors de la dernière commande. Sans signe de reprise saisonnière forte sur ce produit au vu de l'historique oct-nov N-1, je projette le maintien du dernier volume observé (3u) pour minimiser le MAPE sur cette phase de légère baisse.

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse stabilisée à 2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité mensuelle quasi parfaite depuis deux ans. Le client a commandé le 2025-08-26 (mardi) puis le 2025-09-24 (mercredi), soit un intervalle de 29 jours. La date du 2025-10-15 (mercredi) se situe 21 jours après la dernière commande, ce qui est légèrement précoce par rapport au cycle de 30 jours, mais correspond parfaitement à la fenêtre de réapprovisionnement habituelle pour maintenir le stock. Les deux dernières commandes sont stables à 2u, marquant une hausse par rapport à la moyenne historique de 1u. On exclut l'outlier de 3u (2024) au profit de la tendance récente stabilisée.

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Légère baisse stabilisée à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel stable. Les intervalles entre les trois commandes sont de 35 jours puis 16 jours (accélération ponctuelle en septembre). Le volume est passé de 5u en juillet à 4u de façon constante sur les deux dernières occurrences. La date de prédiction (15 octobre) se situe environ 34 jours après la dernière commande du 11 septembre, ce qui correspond parfaitement au cycle mensuel identifié. Bien que le jour varie (mardi/jeudi), le mercredi est cohérent avec le comportement B2B en milieu de semaine. Je retiens la dernière valeur stable de 4 unités.

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 16 à 35 jours
- **Saisonnalité**: none
- **Tendance**: Baisse légère (5u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière avec un espacement d'environ un mois entre chaque commande. On observe une stabilisation à 4 unités lors des deux dernières occurrences (26/08 et 11/09) après une commande de 5 unités en juillet. Bien que les jours varient entre mardi et jeudi, la date cible (mercredi) s'insère parfaitement dans la fenêtre de commande attendue pour mi-octobre (~34 jours après la dernière commande). La prédiction de 4 unités privilégie la tendance stable la plus récente.

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très espacé (erratique), intervalle moyen de 30 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse (stable vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande B2B faible et irrégulière mais persistante. Historiquement, les commandes oscillent entre 1u et 3u sans pattern hebdomadaire strict (commandes réparties sur lundi, mardi et jeudi). La dernière commande en date (août 2025) était de 2u. En l'absence de pic saisonnier identifiable à cette période l'année passée et compte tenu de la lente rotation du produit, la quantité la plus probable pour la prochaine occurrence (mercredi ou jour ouvré suivant) se stabilise à 2 unités, correspondant à la dernière tendance observée et à la moyenne basse du produit (2.2u). Nous ignorons l'effet 'jour hors cycle' car le client n'a pas de jour fixe prédéfini dans l'historique.

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique longue durée (60-90j)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible rotation pour ce produit spécifique (Noix de cajou 133g) avec des commandes espacées de plusieurs mois. La dernière commande date d'août 2025 (2u). Les volumes historiques oscillent systématiquement entre 1u et 3u (moyenne à 2.2u). En l'absence de cycle hebdomadaire strict et compte tenu de la stabilité de la demande résiduelle, la quantité la plus probable pour la prochaine commande, même si elle intervient légèrement après le mercredi 15/10, est de 2 unités, s'alignant sur la commande la plus récente et la médiane historique.

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 30 à 60 jours en N-1, arrêt prolongé en 2025)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -33%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation très faible et irrégulière. En 2024, le volume est passé de 3u à 1u. La seule commande de 2025 (août) était de 2u. Étant donné l'absence de commande depuis août, le stock client arrive probablement à épuisement. Le mercredi 15 octobre ne correspond pas à une routine spécifique, mais selon les règles métier, nous prédisons la quantité du prochain réapprovisionnement probable. En nous appuyant sur le dernier point de données de 2025 qui est cohérent avec la moyenne historique (moyenne 2024-2025 = 2.2u), la cible de 2u est la plus précise pour minimiser le MAPE.

</details>


<details>
<summary><strong>10. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier long (40 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3-4u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très espacé et irrégulier (entre 1 et 2 mois). La dernière commande date de juillet 2025 (3u), soit il y a environ 85 jours, ce qui suggère une commande imminente. L'historique montre une stabilité entre 3u et 4u (moyenne de 3.4u en excluant l'outlier de 1u). Le mercredi est un jour déjà observé dans l'historique N-1. Je préconise 3u, s'alignant sur la dernière commande connue et la moyenne basse de ce produit à faible rotation.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 1u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 2u
- 2025-08-26 07:12:09: 2u
- 2025-08-04 11:51:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-27 05:39:39: 2u
- 2024-05-08 09:59:31: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 3u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 07:46:41: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-08-05 08:15:52: 3u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (5)

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
| [LV161] LV Tartinade Mangue curry 190g | 3 | Stock prédit: -0.1u (0j restants) → prédit 3u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 0.3u (2j restants) → prédit 4u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Stock prédit: -0.4u (-4j restants) → prédit 3u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 4 | Stock prédit: -2.1u (-17j restants) → prédit 4u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 4 | Stock prédit: 1.1u (25j restants) → prédit 4u mais non commandé |


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
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Stock suffisant: 2.5u (101j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:14:12.774Z*
