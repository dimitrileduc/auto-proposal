# Rapport Backtest - Client MASETTI

## Contexte

- **Client** : MASETTI (ID: 38995)
- **Commande réelle** : S39608
- **Date commande** : 2025-10-08 06:19:58
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 16,477 input + 5,503 output = 21,980 total


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
| **MAE** | 3.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 70.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 30 | 15 | 15.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 30 | 10 | 20.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 8 | 5 | 3.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 20 | 10.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 4 | 10 | 6.0 | 60.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 8 | 10 | 2.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 7 | 10 | 3.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme intermittent, cycle moyen de 45 à 50 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u avec un pic de stock ponctuel
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
L'historique montre une stabilité remarquable de la quantité de base à 25 unités (6 occurrences sur 8). La commande de 50u en juillet 2025 est considérée comme un outlier (stockage de précaution ou livraison groupée) car elle a doublé l'intervalle de commande suivant (48 jours au lieu de ~30j). La dernière commande de septembre a marqué un retour à la normale (25u). Bien que la date demandée soit un mardi, le client n'a pas de contrainte de jour fixe. La saisonnalité N-1 à la même période (octobre 2024) affichait 35u, mais la tendance actuelle 2025 est solidement ancrée à 25u.

</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de réapprovisionnement de stock fixe (tous les ~45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique montre que le client commande par lots standards de 25 unités dès que le stock semble atteindre un seuil critique. Les occurrences de 10u en 2024 semblent être des ajustements mineurs ou des fins de série, tandis que les 4 dernières commandes (incluant les deux plus récentes de juillet et septembre 2025) sont strictement de 25u. L'intervalle depuis la dernière commande (03/09) est de 34 jours, ce qui correspond à la fenêtre de réapprovisionnement habituelle pour ce produit dont la rotation est modérée mais constante.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 30u vs Médiane: 30u (Réel: 15u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: high)
- 📊 **Baseline N-1**: 26.6u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 15u
- 📉 **Erreur LLM**: 15u (100.0%)
- 📉 **Erreur Médiane**: 15u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel cyclique (~28-34 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (+15% vs N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel très régulier. La dernière commande date du 03/09 (30u), précédée par le 07/08 (20u) et 17/07 (30u). L'intervalle de 34 jours correspond exactement à la date de prédiction (07/10). Le volume de référence en N-1 à la même période était de 35u, mais la tendance récente sur 3 mois s'établit à une moyenne de 26,6u. Étant donné que le client alterne souvent entre 20u et 30u et que nous sommes en période de rentrée/automne (souvent synonyme de volumes plus élevés comme le montre le pic de 35u d'octobre dernier), la quantité de 30u est la plus probable pour satisfaire le besoin du mois complet sans surstockage.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 30u vs Médiane: 15u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: medium)
- 📊 **Baseline N-1**: 27.5u
- 📊 **Médiane**: 15u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 20u (200.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des cycles de 30 à 60 jours
- **Saisonnalité**: strong
- **Tendance**: Stable avec pics ponctuels de début d'automne
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse montre une saisonnalité marquée en début d'octobre (30u le 03/10/2024). Malgré une tendance récente plus faible (5u en septembre, 25u en juillet), le produit semble suivre un cycle de réapprovisionnement de fond. La commande de 5u en septembre était inhabituellement basse par rapport au volume saisonnier historique de 30u. Étant donné l'intervalle d'un mois depuis la dernière petite commande et la correspondance quasi exacte avec le pic de l'année précédente (début octobre), une commande de 30u est la plus probable pour couvrir la demande saisonnière d'automne.

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 8u vs Médiane: 8u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 3u (60.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (34 jours d'intervalle moyen)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 10u à 5u
- **Outliers détectés**: 30u

**🧠 Raisonnement LLM:**
L'analyse montre une consommation en baisse par rapport à 2024 (où les volumes étaient de 10-15u). Sur les 3 derniers mois, le client a commandé 10u en juillet et août, puis seulement 5u en septembre. La date de prédiction (7 octobre) intervient 34 jours après la dernière commande du 3 septembre, ce qui correspond au cycle moyen observé. Bien que la tendance soit à la baisse (5u), l'intervalle légèrement plus long et la baseline historique suggèrent un besoin de réapprovisionnement supérieur au dernier point de données mais inférieur aux 10u des mois précédents. On préconise 8 unités pour s'ajuster à la baisse de régime tout en couvrant le cycle mensuel.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 9.2u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 10u (50.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycles de 30 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable entre 5u et 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond oscillant principalement entre 5 et 10 unités. On observe un pic de 20 unités en octobre N-1, cependant la tendance récente (juillet et septembre 2025) est stabilisée à 10 unités par commande. L'intervalle de commande est d'environ 6 semaines. La dernière commande datant du 03/09, le besoin pour le 07/10 correspond à un cycle de réapprovisionnement standard pour ce client. On privilégie la continuité de la tendance récente stable à 10u plutôt que le pic exceptionnel de 20u de l'an dernier.

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 8.75u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, cycle moyen de 30 à 60 jours.
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère baisse (moyenne 10.7u en 2024 vs 7.5u en 2025)
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une accélération de la fréquence de commande entre septembre et octobre l'année précédente (20u le 03/10/2024). Bien que la tendance 2025 soit plus faible (dernière commande à 10u en septembre), la proximité de la période automnale marque historiquement une hausse du volume. On observe un intervalle d'environ 30-35 jours entre les deux dernières commandes réelles (début septembre à début octobre). La recommandation de 10 unités équilibre la moyenne récente et le pic saisonnier modéré observé à la même date en N-1, tout en écartant l'outlier de 20u qui semble être un surstockage ponctuel de l'an dernier.

</details>


<details>
<summary><strong>8. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier long (45 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Légère baisse (moyenne 2024: 4.14u vs moyenne 2025: 2.5u)
- **Outliers détectés**: 8u, 1u

**🧠 Raisonnement LLM:**
L'analyse montre une faible rotation avec une commande environ tous les deux mois. La dernière commande date du 3 septembre (2u), précédée par le 17 juillet (3u), soit un écart de 48 jours. La date de prédiction (7 octobre) se situe seulement 34 jours après la dernière commande, ce qui est légèrement précoce par rapport au cycle observé, mais cohérent avec le stock tampon moyen. En N-1 à la même période (3 octobre), le volume était de 3u. Compte tenu de la tendance récente stable entre 2u et 3u, une commande de 3u est la plus probable pour maintenir le stock de ce condiment à rotation lente.

</details>


<details>
<summary><strong>9. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 20 à 30 jours, tendance à un jour par mois
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3u (moyenne récente)
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande mensuel (intervalle ~30j). Les commandes récentes (Juillet: 3u, Août: 5u, Septembre: 2u) donnent une moyenne de 3.3u. Le pic de 15u en juin 2024 est considéré comme un outlier promotionnel car non reproduit sur l'année N-1. La commande est attendue début octobre (un mois après la commande de septembre), ce qui respecte la fréquence habituelle. On s'appuie sur la moyenne lissée de la période récente pour minimiser le MAPE.

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
- **Pattern temporel**: Rythme sporadique à semi-régulier tous les 1.5 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 5u
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'historique montre une stabilité remarquable de la demande de fond à 5 unités (6 des 8 commandes passées). Bien qu'il y ait eu un pic à 8 unités début octobre 2024, la tendance de 2025 s'est stabilisée à 5 unités par commande avec une fréquence de réapprovisionnement d'environ 45-60 jours. La dernière commande datant du 03/09 (34 jours), la commande du 07/10 s'inscrit dans le cycle naturel de consommation du client pour ce produit de type squeezable BBQ. Aucun signe de croissance ou de baisse n'est détecté, donc le maintien de la quantité modale (5) est la décision la plus précise.

</details>


<details>
<summary><strong>11. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 6u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 20 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse significative des volumes -60% vs N-1
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une chute de volume importante sur la dernière commande (août 2025) à 2 unités. Cependant, les données N-1 indiquent un pic saisonnier en octobre (10u le 03/10/2024). Le délai de deux mois sans commande suggère un besoin de réapprovisionnement imminent. La prédiction de 6 unités constitue un équilibre entre la tendance baissière récente et le pic saisonnier historique d'octobre pour éviter une rupture tout en respectant la prudence imposée par le dernier point de donnée faible.

</details>


<details>
<summary><strong>12. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 5u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Atypique / Cycle long (environ 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée (de ~3u en 2024 à 5u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très espacée avec un historique fragmenté. On observe une légère hausse de la demande de base passant d'une moyenne de 3 unités en début 2024 à 5-6 unités sur les dernières itérations. La dernière commande date du 07/08/2025 (5u), soit exactement il y a deux mois par rapport à la date cible (07/10/2025). Ce rythme bimestriel, couplé à la stabilité du volume de 5 unités observé lors de la dernière commande et de la même période en N-1 (octobre 2024 était à 2u mais juin 2025 était à 5u), suggère un besoin de réapprovisionnement de 5 unités pour couvrir le prochain cycle de deux mois. La confiance est faible en raison du faible nombre de points de données sur les 3 derniers mois, mais la récurrence de la date (le 7 du mois) suggère un cycle de gestion de stock rigide du client à 60 jours.

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 8u vs Médiane: 5u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: low)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 2u (20.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (longs intervalles de 2 à 4 mois)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (15u -> 10u -> 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande irrégulière avec une tendance baissière sur les volumes unitaires (de 15 à 5 unités). Cependant, la dernière commande remonte à deux mois (août 2025). En observant l'historique N-1, une commande de 10 unités a eu lieu exactement à cette période (octobre). Le volume de 5 unités en août suggère un ralentissement, mais la récurrence calendaire d'octobre justifie un réapprovisionnement. On préconise une moyenne pondérée entre le volume N-1 (10u) et la dernière tendance (5u) pour capturer le besoin de fond sans surstocker.

</details>


<details>
<summary><strong>14. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ tous les 45 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Hausse ponctuelle substantielle (+100%) lors de la dernière commande
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
L'historique montre une base de consommation très stable de 25 unités en 2024. Bien qu'une commande de 50 unités ait été passée le 17 juillet 2025 (probablement un stock de sécurité ou une mise en avant), l'absence de commande depuis près de 3 mois suggère un retour au volume standard. La date demandée (Mardi) ne correspond à aucun cycle historique. Sans preuve d'une accélération de la rotation en magasin, nous revenons à la 'baseline' historique de 25 unités pour minimiser le risque de surstockage sur un produit de type tartinade.

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

**✅ Quantité LLM**: 25u (confidence: high)
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

**✅ Quantité LLM**: 25u (confidence: high)
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

**✅ Quantité LLM**: 30u (confidence: high)
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

**✅ Quantité LLM**: 30u (confidence: medium)
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

**✅ Quantité LLM**: 8u (confidence: medium)
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

**✅ Quantité LLM**: 10u (confidence: medium)
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

**✅ Quantité LLM**: 10u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 6u (confidence: low)
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

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 11:14:43: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 07:18:43: 10u
- 2024-04-15 08:56:03: 15u

**✅ Quantité LLM**: 8u (confidence: low)
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

**✅ Quantité LLM**: 25u (confidence: low)
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

*Rapport généré automatiquement le 2025-12-18T11:37:23.874Z*
