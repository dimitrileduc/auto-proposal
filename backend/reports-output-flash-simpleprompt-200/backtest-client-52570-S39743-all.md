# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39743
- **Date commande** : 2025-10-16 11:39:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 13,265 input + 4,084 output = 17,349 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.0% | 20 produits prédits, 13 corrects |
| **Rappel** | 81.3% | 16 produits réels, 13 détectés |
| **F1-Score** | 72.2% | Score équilibré global |

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
| **MAE** | 0.46 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 14.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Pattern temporel**: Cycle mensuel (~28-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25% vs N-1
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une commande régulière environ tous les mois (cycle de 21 à 30 jours). La dernière commande a eu lieu le 24 septembre (il y a 21 jours), ce qui place la prédiction du 15 octobre dans la fenêtre basse du cycle habituel. En 2024, le volume à cette période était de 4u, mais la tendance 2025 affiche une baisse avec une moyenne de 2.6u sur les trois derniers mois. La quantité de 1u en août est traitée comme une anomalie basse compensée par le 4u précédent. Le volume de 3u observé en septembre (mercredi) est le meilleur indicateur actuel de la demande de fond stabilisée.

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
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3.5u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande mensuelle extrêmement stable (intervalle de 29 jours entre les deux dernières commandes). La moyenne historique oscille entre 3 et 4 unités. La dernière commande du 24/09 était de 3u. Étant donné l'absence de pic saisonnier spécifique en octobre dans l'historique N-1 et la stabilité du volume récent, la quantité la plus probable pour maintenir ce roulement mensuel sans surstock est de 3 unités (arrondi de la moyenne pondérée récente).

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.6u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~21 à 28 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère baisse (passant de 4-5u en 2024 à 3-4u en 2025)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel très régulier (environ toutes les 3-4 semaines). La dernière commande date du 24 septembre (3 unités). Le 15 octobre correspond à un intervalle de 21 jours, ce qui s'inscrit parfaitement dans le rythme habituel. Bien que la dernière commande fût de 3 unités, la moyenne sur les 3 derniers mois est de 3.66 unités. Compte tenu de la stabilité du produit LV Tartinade et de l'absence de saisonnalité forte en octobre, une commande de 4 unités est la plus probable pour maintenir le stock tampon sans surstockage.

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 20-30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec ralentissement ponctuel
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel. Les deux dernières commandes (fin août et fin septembre) affichent une stabilité à 2 unités. La date de prédiction (15 octobre) intervient 21 jours après la dernière commande, ce qui s'inscrit parfaitement dans le rythme habituel de réapprovisionnement de ce client (intervalles oscillant entre 21 et 30 jours). Bien que le produit ait connu des pics à 3u en N-1, la tendance récente sur 2025 stabilise la demande à 2u. L'absence de saisonnalité marquée sur ce type de produit bio sec justifie le maintien de ce volume.

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 15-30j irrégulier, environ toutes les 3 à 5 semaines
- **Saisonnalité**: none
- **Tendance**: Légère baisse (5u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation stable à faible volume (4-5 unités par commande). L'intervalle depuis la dernière commande (11 septembre) est de 34 jours, ce qui correspond au cycle maximal observé entre juillet et août (35 jours). La tendance récente sur les deux dernières livraisons s'est stabilisée à 4 unités. Le changement de jour de commande (mercredi au lieu de mardi/jeudi) n'indique pas de rupture de stock majeure nécessitant un ajustement de volume, le stock de sécurité habituel du client semblant absorber ces variations de +/- 2 jours.

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
- **Pattern temporel**: Cycle d'approvisionnement mensuel d'environ 15 à 25 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à 4-5 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des dernières commandes montre une demande constante et stable de 4 à 5 unités par cycle. Le délai écoulé depuis la dernière commande (environ 34 jours) est supérieur à la moyenne habituelle, mais la stabilité du volume suggère un besoin constant sans effet de stockage cumulatif. La moyenne pondérée favorise le volume de 4 unités observé lors des deux dernières occurrences.

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers longs (45 à 70 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (moyenne 2.25u en 2024 vs 2u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique avec des cycles longs et irréguliers. La dernière commande date du 4 août (il y a environ 70 jours), ce qui correspond à la fenêtre de réapprovisionnement maximale observée par le passé. En l'absence de saisonnalité marquée pour ce SKU spécifique et avec une tendance stable se situant entre 2 et 3 unités par commande, la quantité la plus probable pour maintenir le stock sans sur-stockage est de 2 unités, alignée sur la commande la plus récente.

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Besoins sporadiques avec intervalles longs (45 à 70 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2-3 unités)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière mais persistante. La dernière commande date de plus de 70 jours (04/08/2025), ce qui correspond au cycle maximal observé entre deux réapprovisionnements (historiquement entre 40 et 75 jours). Le volume par commande oscille entre 1u et 3u sans saisonnalité marquée. Étant donné l'absence de commande depuis août, un réapprovisionnement de 2 unités est la prédiction la plus probable pour maintenir le stock de fond sans risque d'obsolescence sur un format 133g.

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 1.5 à 2 mois
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très faible et irrégulière. Le volume par commande oscille historiquement entre 1u et 3u avec une moyenne de 2.2u. La dernière commande datant de début août, l'échéance d'octobre correspond au cycle de réapprovisionnement habituel (environ 60-70 jours). Sans tendance de croissance marquée ou saisonnalité forte sur cette référence, le maintien de la quantité médiane de 2 unités est la prédiction la plus probable pour minimiser l'erreur.

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
- **Pattern temporel**: Intervalles longs et irréguliers (30-60 jours), sans jour fixe
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 3-4u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'analyse des données montre une demande sporadique mais relativement stable en volume. Le cycle de commande n'est pas hebdomadaire mais suit un rythme de besoin de réapprovisionnement ponctuel. En l'absence de commande depuis juillet, le stock est probablement bas, justifiant une commande alignée sur la moyenne historique récente.

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

**✅ Quantité LLM**: 4u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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
| [LV161] LV Tartinade Mangue curry 190g | 4 | Stock prédit: -0.1u (0j restants) → prédit 4u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 0.3u (2j restants) → prédit 4u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Stock prédit: -0.4u (-4j restants) → prédit 3u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 4 | Stock prédit: -2.1u (-17j restants) → prédit 4u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 4 | Stock prédit: 1.1u (25j restants) → prédit 4u mais non commandé |


---

## False Negatives (3)

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
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:35:40.365Z*
