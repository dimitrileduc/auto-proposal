# Rapport Backtest - Client MASETTI

## Contexte

- **Client** : MASETTI (ID: 38995)
- **Commande réelle** : S39608
- **Date commande** : 2025-10-08 06:19:58
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 18,742 input + 7,027 output = 25,769 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 82.1% | 28 produits prédits, 23 corrects |
| **Rappel** | 95.8% | 24 produits réels, 23 détectés |
| **F1-Score** | 88.5% | Score équilibré global |

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
| **MAE** | 2.61 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 64.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 16 | Avec erreur |

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

## True Positives (23)

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
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 25 | 15 | 10.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 12 | 10 | 2.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 10 | 5 | 5.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 12 | 20 | 8.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 15 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 4 | 10 | 6.0 | 60.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 7 | 10 | 3.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 45-60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable à 25 unités depuis 2024. ÉTAPE 1: La commande de 50u en juillet 2025 est identifiée comme un outlier (stockage d'été ou promotion) et écartée du calcul de base. ÉTAPE 2: La saisonnalité est faible, bien qu'une légère hausse à 35u ait été notée en octobre N-1, elle n'est pas confirmée par une tendance de croissance structurelle. ÉTAPE 3: La tendance récente après l'outlier est revenue à la normale avec 25u en septembre. ÉTAPE 4: Le cycle de commande étant d'environ 1,5 à 2 mois, la commande de début octobre est cohérente avec la dernière de début septembre pour maintenir un stock de roulement. On reste sur la quantité standard de 25u pour éviter le surstockage.

</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier environ tous les 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les commandes de 25u représentent la norme pour ce client B2B, avec quelques commandes de réajustement à 10u. Étape 2 : Pas de forte saisonnalité marquée sur octobre N-1, bien que les volumes soient plus stables à 25u sur la période estivale. Étape 3 : Tendance stable. Les deux dernières commandes (juillet et septembre) sont identiques à 25u. Étape 4 : La dernière commande date d'il y a environ 34 jours. Au vu de la récurrence habituelle et du maintien du volume standard de 25u, cette quantité est recommandée pour couvrir les besoins du cycle à venir sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 25u vs Médiane: 30u (Réel: 15u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 21.25u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 15u
- 📉 **Erreur LLM**: 10u (66.7%)
- 📉 **Erreur Médiane**: 15u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 3-4 semaines)
- **Saisonnalité**: strong
- **Tendance**: Hausse structurelle +50% vs N-1
- **Outliers détectés**: 35u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 35u en oct 2024 est traitée comme un pic exceptionnel. La moyenne de fond historique se situe autour de 15-20u. ÉTAPE 2 (Saisonnalité): Un pic d'activité est visible en octobre (N-1) et durant l'été, avec une forte corrélation saisonnière pour ce type de condiment. ÉTAPE 3 (Tendance): On observe une accélération marquée en 2025 avec des volumes de 20-30u contre 10-15u l'année précédente. La moyenne récente (3 mois) est de 26.6u. ÉTAPE 4 (Recommandation): Bien que la demande de base soit de 21u, la tendance haussière couplée au pic saisonnier d'octobre justifie 25u. C'est un choix conservateur pour couvrir le mois sans risquer le surstockage après l'été.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 12u vs Médiane: 15u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: medium)
- 📊 **Baseline N-1**: 8.75u
- 📊 **Médiane**: 15u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 2u (20.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec pics mensuels ou bi-mensuels, principalement en milieu de semaine (mer-jeu-ven)
- **Saisonnalité**: strong
- **Tendance**: Baisse d’intensité sur la période estivale 2025 vs 2024
- **Outliers détectés**: 30u, 30u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Les pics de 30u (juin/octobre 2024) sont identifiés comme des stocks de sécurité ou promotions saisonnières. La base hors pics se situe autour de 9u. ÉTAPE 2 (Saisonnalité): Forte corrélation avec l'automne; en octobre 2024, une grosse commande a été passée le 03/10. Nous sommes le 07/10, il y a un besoin de réapprovisionnement pour la saison. ÉTAPE 3 (Tendance): La dernière commande date d'un mois (03/09, 5u) et était faible. On observe un ralentissement du volume global en 2025 par rapport à 2024. ÉTAPE 4 (Recommandation): On ajuste la baseline (8.75) avec un coefficient saisonnier positif pour octobre, tout en restant conservateur à cause de la tendance baissière récente. Une quantité de 12u permet de couvrir le mois d'octobre sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 10u vs Médiane: 8u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 8.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 5u (100.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes mensuelles irrégulières, principalement entre le mercredi et le vendredi
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive - demande de fond actuelle à 5-10u
- **Outliers détectés**: 30u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 30u en oct. 2024 (3x la moyenne) est identifiée comme un outlier (stockage préventif ou promotion). La demande de fond réelle oscille entre 5u et 15u. ÉTAPE 2: Un pic saisonnier est visible en N-1 sur le T4 (octobre), mais le produit semble moins performant cette année. ÉTAPE 3: La tendance récente montre un ralentissement (dernière commande à 5u en septembre contre 10u en juillet/août). ÉTAPE 4: Compte tenu de l'entrée dans la période traditionnellement plus forte d'octobre mais d'une tendance récente à la baisse, une commande de 10u permet de couvrir la demande sans risque de sur-stockage majeur, tout en se recalant sur le cycle mensuel habituel.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 12u vs Médiane: 10u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: medium)
- 📊 **Baseline N-1**: 9.2u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 8u (40.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec pics mensuels ou bi-mensuels, principalement en milieu de semaine (mer/jeu/ven)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 10u par commande
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 20u en oct 2024 est considérée comme un outlier (2x la moyenne habituelle). La demande de fond se situe autour de 10u par commande. ÉTAPE 2 (Saisonnalité): Une légère augmentation est visible en début d'automne l'an dernier. Aucun pic estival majeur détecté pour cette sauce spécifique. ÉTAPE 3 (Tendance): Les volumes récents (juil/sept 2025) sont stables à 10u. Le rythme de commande s'est espacé, suggérant une rotation plus lente ou un stock de sécurité suffisant chez le client. ÉTAPE 4 (Recommandation): On part d'une base de 10u, augmentée légèrement à 12u pour couvrir le début de mois d'octobre (période historiquement plus active en N-1) tout en restant conservateur face à l'espacement des commandes récentes.

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 15u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 15u (confidence: medium)
- 📊 **Baseline N-1**: 8.5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cyclicité irrégulière, fréquence moyenne d'une commande tous les 45 à 60 jours.
- **Saisonnalité**: strong
- **Tendance**: Stable à environ 7.5u-10u hors pic saisonnier
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : La commande de 20u en oct. 2024 est identifiée comme un pic de stockage saisonnier Exceptionnel ou promo, la base stable se situant entre 5 et 10u. Étape 2 (Saisonnalité) : Un pic est visible au T4 (fin d'année) en N-1, influençant la demande pour les produits gourmets (truffes) à l'approche des fêtes. Étape 3 (Tendance) : Les volumes récents (5u et 10u) montrent une stabilité prudente. Étape 4 (Recommandation) : On anticipe le pic du T4 observé l'an dernier (20u) mais avec conservatisme suite à la commande de 10u en septembre. Une quantité de 15u permet de couvrir la hausse saisonnière sans atteindre le stock mort, soit un compromis entre le fond de roulement et le pic historique.

</details>


<details>
<summary><strong>8. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 20 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -35% vs N-1
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
ÉTAPE 1: Nettoyage de l'outlier de 8u (mai 2024) qui s'écarte de la moyenne de 3u. ÉTAPE 2: Faible saisonnalité observée, bien que le printemps semble plus actif (avril-juin). Fin d'année (octobre) historiquement calme avec 3u en 2024. ÉTAPE 3: Tendance baissière sur 2025 avec des commandes de 3u puis 2u, montrant un ralentissement de la rotation du stock. ÉTAPE 4: La base de consommation actuelle se situe entre 2 et 3 unités par commande. Étant donné la date actuelle (début octobre) et la dernière commande de 2u en septembre, une commande de 2u permet de maintenir un stock de sécurité sans risque de sur-stockage sur un produit dont la tendance s'essouffle.

</details>


<details>
<summary><strong>9. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle approximatif de 20 à 30 jours, commandes principalement en milieu de semaine (mercredi/jeudi).
- **Saisonnalité**: weak
- **Tendance**: Stable à légèrement baissier, moyenne récente de 3.3u.
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 15u en juin 2024 a été isolée comme outlier (pic promotionnel ou stock de sécurité estival). La base réelle se situe autour de 3-4 unités. ÉTAPE 2: Faible saisonnalité observée, bien qu'un léger ralentissement soit visible en automne par rapport au printemps N-1. ÉTAPE 3: La tendance récente sur les 3 derniers mois est stable (3u, 5u, 2u) avec une moyenne de 3.33u. ÉTAPE 4: Pour le 7 octobre, nous suivons le rythme mensuel. En restant conservateur face à la baisse de septembre (2u), une recommandation de 4 unités permet de couvrir la demande de fond tout en sécurisant un léger stock tampon sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>10. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle variable de 1.5 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 5u
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable à 5 unités sur la majorité des commandes (62% des occurrences). L'étape 1 identifie la commande de 8u en octobre 2024 comme un outlier léger (probablement surstockage de pré-saison ou promo locale). L'étape 2 révèle une saisonnalité faible : bien que le produit soit une sauce BBQ, les volumes restent constants même hors été. L'étape 3 confirme une tendance stable (5u en juillet et septembre 2025). Pour la recommandation finale (Étape 4), nous restons sur la valeur modale de 5 unités, car aucun signal ne justifie une hausse, et la date actuelle (début octobre) correspond historiquement à une période de commande stabilisée.

</details>


<details>
<summary><strong>11. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme erratique, environ une commande par mois en N-1, forte baisse de fréquence en 2025
- **Saisonnalité**: weak
- **Tendance**: Baisse drastique -80% par rapport à N-1
- **Outliers détectés**: 10u, 10u

**🧠 Raisonnement LLM:**
Étape 1: Identification des pics de 10u en juin/juillet 2024 comme outliers potentiels (stockage été), base de fond estimée à ~4-5u en période active. Étape 2: Faible impact saisonnier visible, bien qu'un pic ait eu lieu en octobre N-1 (10u). Étape 3: Tendance très alarmante, une seule commande de 2u sur les 3 derniers mois (août), suggérant un déréférencement partiel ou une perte d'usage chez le client. Étape 4: Au vu de la faible activité récente (2u en août) et du risque de sur-stockage sur un produit Squeeze (DLUO), je préconise de s'aligner sur la dernière demande réelle de 2 unités.

</details>


<details>
<summary><strong>12. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 4u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une tendance historique vers les jeudis (50% des commandes)
- **Saisonnalité**: weak
- **Tendance**: Stable à la hausse (5u en période récente vs moyenne 3.6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'apparaît comme un outlier extrême, les volumes oscillent naturellement entre 2u et 6u. Moyenne historique de 3.8u. ÉTAPE 2 (Saisonnalité): Faible impact visible en octobre (2u en oct N-1), mais le produit semble plus performant au printemps/été (mai/juin). ÉTAPE 3 (Tendance): La dernière commande d'août à 5u montre une consommation plus élevée que la moyenne N-1. Cependant, la faible fréquence globale limite la visibilité. ÉTAPE 4 (Recommandation): En se basant sur la dernière commande (5u) pondérée par la faible activité d'octobre N-1 (2u) et le fait que la commande arrive un mardi au lieu du jeudi habituel, une quantité de 4u permet d'assurer le fond de rayon sans risque de surstockage excessif sur un produit à rotation lente. Niveau de confiance faible dû au manque de données sur les 2 derniers mois (septembre).', 'day_cycle_analysis': 'Date demandée: mardi. Jour habituel: jeudi.

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ un réapprovisionnement tous les 2 mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (15u > 10u > 5u)
- **Outliers détectés**: 15u, 10u

**🧠 Raisonnement LLM:**
L'analyse des historiques montre un volume de commande en diminution constante passant de 15u en avril 2024 à 5u en août 2025. L'étape 1 (De-eventing) suggère que les volumes de l'an dernier (10u et 15u) étaient peut-être liés à des lancements ou des pics de saisonnalité printanière. L'étape 2 indique une saisonnalité faible mais une présence de stock en octobre N-1. L'étape 3 confirme une tendance baissière. En restant conservateur pour éviter le sur-stockage d'un produit dont la rotation semble ralentir, la quantité de fond de la dernière commande (5u) est maintenue comme recommandation finale pour couvrir la période actuelle sans risque d'obsolescence, malgré le faible nombre de points de données (confiance basse). Dans le secteur agro B2B, il est préférable ici de ne pas anticiper de hausse sans signal de marché clair sur ce format 380GX6 (Sauce Lapin). Même si nous sommes un mardi, l'écart avec les jours habituels (jeudi) n'impose pas de mesure d'urgence au vu de la fréquence espacée des besoins historiques (cycle irrégulier de 60 jours+). Quantité recommandée fixée à 5 unités (arrondi de la baseline). Nous conservons 5u pour tester si la demande se stabilise ou poursuit son déclin avant de réajuster au prochain cycle probable en décembre car le produit semble commander environ 4-5 fois par an au maximum au vu des données disponibles (bas niveau de rotation). La faible fréquence renforce le besoin de prudence sur le volume de commande unitaire. On ne peut pas confirmer de 'stockage de fêtes' sur ce produit spécifique en octobre au vu de l'historique N-1 (10u) vs la tendance récente (5u). On privilégie la tendance récente (Step 3) sur le pattern saisonnier N-1 (Step 2).

</details>


<details>
<summary><strong>14. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle/bimestrielle irrégulière
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u avec pic ponctuel
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 50u en juillet 2025 est identifiée comme un outlier (2x la base historique de 25u), probablement une promotion estivale. La base stable est de 25u. Étape 2: Faible impact saisonnier visible entre mars et juin N-1, restant stable à 25u. Étape 3: Absence de données entre juillet et octobre 2025, suggérant un épuisement de stock ou un cycle long. Le jour de commande (mardi) diffère des habitudes (fin de semaine). Étape 4: En restant conservateur face à une tendance de fond très stable à 25u et sans preuve de croissance structurelle, la recommandation revient à la quantité historique de base pour éviter le sur-stockage après le pic de juillet.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 25u
- 2025-07-17 07:32:23: 50u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 35u
- 2024-07-12 09:46:49: 25u
- 2024-06-21 06:29:37: 25u
- 2024-05-30 14:22:18: 25u
- 2024-05-08 13:35:20: 25u
- 2024-04-15 08:56:03: 25u

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 25u
- 2025-07-17 07:32:23: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 10u
- 2024-08-20 06:33:32: 25u
- 2024-06-21 06:29:37: 25u
- 2024-05-30 14:22:18: 25u
- 2024-04-15 08:56:03: 25u
- 2024-03-15 07:44:55: 10u

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 30u
- 2025-08-07 11:14:43: 20u
- 2025-07-17 07:32:23: 30u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 35u
- 2024-08-20 06:33:32: 10u
- 2024-06-21 06:29:37: 30u
- 2024-05-30 14:22:18: 20u
- 2024-05-08 13:35:20: 10u
- 2024-04-15 08:56:03: 10u
- 2024-03-15 07:44:55: 15u
- 2024-03-06 08:22:59: 10u

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 15u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 5u
- 2025-07-17 07:32:23: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 30u
- 2024-08-20 06:33:32: 5u
- 2024-06-21 06:29:37: 30u
- 2024-05-30 14:22:18: 20u
- 2024-05-08 13:35:20: 5u
- 2024-04-15 08:56:03: 10u
- 2024-03-15 07:44:55: 15u
- 2024-03-06 08:22:59: 10u

**✅ Quantité LLM**: 12u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 5u
- 2025-08-07 11:14:43: 10u
- 2025-07-17 07:32:23: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 30u
- 2024-08-20 06:33:32: 10u
- 2024-06-21 06:29:37: 20u
- 2024-05-30 14:22:18: 15u
- 2024-04-15 08:56:03: 10u
- 2024-03-15 07:44:55: 10u
- 2024-03-06 08:22:59: 10u

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 10u
- 2025-07-17 07:32:23: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 20u
- 2024-06-21 06:29:37: 10u
- 2024-05-30 14:22:18: 15u
- 2024-04-15 08:56:03: 5u
- 2024-03-15 07:44:55: 10u
- 2024-03-06 08:22:59: 5u

**✅ Quantité LLM**: 12u (confidence: medium)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 10u
- 2025-07-17 07:32:23: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 20u
- 2024-08-20 06:33:32: 10u
- 2024-06-21 06:29:37: 10u
- 2024-05-30 14:22:18: 15u
- 2024-04-15 08:56:03: 5u
- 2024-03-15 07:44:55: 5u
- 2024-03-06 08:22:59: 10u

**✅ Quantité LLM**: 15u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>8. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 2u
- 2025-07-17 07:32:23: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 3u
- 2024-08-20 06:33:32: 5u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 8u
- 2024-05-08 13:35:20: 1u
- 2024-04-15 08:56:03: 2u
- 2024-03-06 08:22:59: 5u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 2u
- 2025-08-07 11:14:43: 5u
- 2025-07-17 07:32:23: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-21 06:29:37: 15u
- 2024-05-30 14:22:18: 7u
- 2024-05-08 13:35:20: 3u
- 2024-04-15 08:56:03: 2u
- 2024-03-06 08:22:59: 8u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:18:29: 5u
- 2025-07-17 07:32:23: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 8u
- 2024-08-20 06:33:32: 4u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 7u
- 2024-05-08 13:35:20: 5u
- 2024-03-06 08:22:59: 5u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>11. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 11:14:43: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 10u
- 2024-07-12 09:46:49: 10u
- 2024-06-21 06:29:37: 10u
- 2024-05-30 14:22:18: 5u
- 2024-05-08 13:35:20: 4u
- 2024-04-15 08:56:03: 2u
- 2024-03-06 08:22:59: 8u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>12. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 11:14:43: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 2u
- 2024-06-21 06:29:37: 5u
- 2024-05-30 14:22:18: 6u
- 2024-05-08 13:35:20: 2u
- 2024-04-15 08:56:03: 3u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 11:14:43: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 10u
- 2024-04-15 08:56:03: 15u

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>14. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 07:32:23: 50u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-21 06:29:37: 25u
- 2024-05-30 14:22:18: 25u
- 2024-04-15 08:56:03: 25u
- 2024-03-15 07:44:55: 25u

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 25u

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
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 25 | Stock prédit: 4.6u (7j restants) → prédit 25u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 5 | Stock prédit: -0.4u (-2j restants) → prédit 5u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Stock prédit: 1.7u (17j restants) → prédit 4u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 25 | Stock prédit: 6.2u (26j restants) → prédit 25u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Stock prédit: -2.9u (-54j restants) → prédit 2u mais non commandé |


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
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock suffisant: 2.2u (41j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:12:26.743Z*
