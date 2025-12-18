# Rapport Backtest - Client MASETTI

## Contexte

- **Client** : MASETTI (ID: 38995)
- **Commande réelle** : S39608
- **Date commande** : 2025-10-08 06:19:58
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 28,871 input + 6,130 output = 35,001 total


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
| **MAE** | 3.65 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 64.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 15 | Avec erreur |

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 20 | 10.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 4 | 10 | 6.0 | 60.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 7 | 10 | 3.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Pattern temporel**: Commande apériodique avec un intervalle long (45-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
L'historique montre une stabilité forte à 25 unités sur 6 des 8 points de données. La valeur de 50u en juillet 2025 est considérée comme un outlier (stock de sécurité ou promotion) car elle n'a pas été confirmée par la commande suivante en septembre (25u). La commande d'octobre 2024 (35u) suggère un léger regain d'activité à l'automne, mais la tendance récente de septembre 2025 à 25u reste la référence la plus fiable. La date du mardi ne présentant pas d'incompatibilité avec l'historique diffus, la quantité standard de 25u est préconisée.

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
- **Pattern temporel**: Intervalles longs et irréguliers (45 à 60 jours en moyenne)
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation nette à 25 unités sur les deux dernières commandes de 2025, ainsi que sur la majorité de l'année 2024. Les volumes de 10 unités observés en octobre 2024 et mars 2024 agissent comme des points bas isolés face à une demande de fond robuste de 25 unités. Bien que la fréquence de commande soit espacée, la quantité par commande reste très constante. La prédiction pour un mardi est cohérente avec l'historique car le client n'a pas de cycle hebdomadaire rigide.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 30u vs Médiane: 30u (Réel: 15u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: high)
- 📊 **Baseline N-1**: 26.67u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 15u
- 📉 **Erreur LLM**: 15u (100.0%)
- 📉 **Erreur Médiane**: 15u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~27-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère hausse (20u à 30u)
- **Outliers détectés**: 35u

**🧠 Raisonnement LLM:**
L'historique montre une transition d'un rythme erratique en 2024 vers un cycle mensuel très régulier sur les 3 derniers mois (intervalle de 21 à 28 jours). La quantité s'est stabilisée à 30u (juillet et septembre), le 20u d'août s'expliquant par un intervalle plus court entre les commandes (21 jours vs 30 jours). Étant donné que la dernière commande date du 03/09, la prédiction pour le 07/10 respecte parfaitement le cycle de ~30 jours observé. Le pic de 35u en octobre 2024 est considéré comme un outlier car décorrélé de la tendance actuelle de 30u.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 5u vs Médiane: 15u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 15u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les +30 jours ou par impulsion saisonnière
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (30u -> 25u -> 5u)
- **Outliers détectés**: 30u

**🧠 Raisonnement LLM:**
Le produit présente une demande irrégulière avec une tendance baissière marquée sur les volumes récents. En octobre 2024 (N-1), une commande de 30u avait été passée un jeudi, mais la commande la plus récente du 03/09/2025 n'était que de 5u. Bien que l'on se rapproche de la période de pic de l'an dernier, la dernière donnée réelle (5u) doit être privilégiée pour éviter un surstockage important (MAPE), car aucune preuve de reprise de volume n'est visible dans les données de juillet-septembre.

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 5u vs Médiane: 8u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (passant de 10u à 5u)
- **Outliers détectés**: 30u

**🧠 Raisonnement LLM:**
L'analyse montre une transition du cycle de commande. Historiquement le client commandait ~10u les jeudis/vendredis, mais la commande la plus récente (septembre 2025) a eu lieu un mercredi pour seulement 5u. La date cible étant un mardi (2025-10-07), elle se situe environ 34 jours après la commande du 03/09. En suivant la règle des jours hors cycle, nous prédisons le volume de la prochaine commande imminente. Étant donné la baisse de volume observée lors de la dernière transaction et l'absence d'outliers récents à la hausse, la quantité de 5u est la plus probable pour maintenir la tendance actuelle basse.

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 10u (50.0%)
- 📉 **Erreur Médiane**: 10u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande à basse fréquence (Cycle approx. 45-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation du volume à 10 unités lors des trois dernières occurrences (juin 2024, juillet 2025, septembre 2025). Le pic de 20 unités en octobre 2024 est considéré comme un outlier ou une commande de stock exceptionnelle non reproduite récemment. Bien que la date de prédiction soit un mardi (jour inédit dans l'historique), le client ne semble pas avoir de cycle hebdomadaire strict mais plutôt un besoin récurrent de 10 unités environ tous les deux mois. La dernière commande datant d'il y a 34 jours, nous prévoyons le maintien du volume de fond de 10u.

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement de 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (10u vers 5-7u)
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande faible (environ une fois tous les deux mois). L'année dernière, une commande de 20u a eu lieu en octobre, mais les volumes récents (5u en juillet, 10u en septembre) suggèrent que la demande de fond a diminué. La commande de septembre (10u) étant très proche de la date cible, et considérant que le produit (Mayonnaise Truffes) peut connaître un léger regain à l'approche de la fin d'année, je préconise 10u. Le pic de 20u de 2024 est considéré comme un outlier promotionnel non reconduit à ce stade.

</details>


<details>
<summary><strong>8. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 45-60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u -> 2u)
- **Outliers détectés**: 8u, 1u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation lente avec des commandes espacées de plusieurs semaines. Le volume historique se situe majoritairement entre 2 et 5 unités. Les deux dernières commandes (juillet et septembre 2025) montrent une stabilisation à bas volume (3u puis 2u). Bien que la date de prédiction soit un mardi, le client n'a pas de cycle hebdomadaire rigide. Compte tenu de la tendance récente à la baisse par rapport à N-1 (où l'on voyait des 5u), la quantité la plus probable pour la prochaine livraison est de 2 unités.

</details>


<details>
<summary><strong>9. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.33u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 20 et 30 jours (~mensuel)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 5u à 2u sur les 3 derniers mois
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande d'environ une fois par mois. La dernière commande date du 03/09 (mercredi), soit il y a environ 34 jours par rapport à la date de prédiction du 07/10. Le volume de 15u en juin 2024 est considéré comme un outlier saisonnier non reproduit cette année. La tendance récente sur les 3 derniers mois indique un volume moyen de 3.33u (2, 5, 3). Bien que la dernière commande fût de 2u, le stock sur un cycle de plus de 30 jours nécessite généralement un réapprovisionnement légèrement supérieur pour couvrir le mois à venir. Je préconise 3u, s'alignant sur la médiane des volumes récents hors pic.

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
- **Pattern temporel**: Rythme sporadique à faible densité (~45-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 5u
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation très nette de la consommation à 5 unités sur les trois dernières commandes (incluant 2024-03, 2025-07 et 2025-09). La valeur de 8u observée en octobre 2024 est traitée comme un outlier potentiel ou un pic de stockage exceptionnel qui ne s'est pas manifesté dans les données récentes de 2025. La fréquence de commande est irrégulière (entre 1.5 et 2 mois), et comme la dernière commande remonte à début septembre, une commande début octobre est cohérente avec le cycle de réapprovisionnement du client. On privilégie la tendance récente de 5 unités pour minimiser le MAPE.

</details>


<details>
<summary><strong>11. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 5u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 20 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 10u à 2u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une érosion du volume passant de 10u en 2024 à seulement 2u lors de la dernière commande d'août 2025. Cependant, une commande unique de 2u est exceptionnellement basse par rapport au référentiel N-1 à la même période (10u en octobre 2024). Le mardi n'est pas un jour de commande récurrent habituel, mais conformément aux règles, nous prédisons le volume de la prochaine commande probable. En raison de la tendance baissière marquée mais de la saisonnalité historique d'octobre (10u), un compromis à 5u (quantité médiane historique) est la prédiction la plus probable pour compenser la faiblesse du dernier point de donnée tout en respectant la baisse de régime globale du produit par rapport à l'an dernier (MAPE réduit). ou 5u car c'est une quantité standard de colisage souvent observée sur ce format squeeze 300ml dans l'agroalimentaire B2B (ex. carton de 5 ou 10). La confiance est faible car les commandes sont très espacées (dernière date il y a 2 mois). Même si la date est un mardi et hors cycle, on anticipe la reprise des volumes d'octobre (saisonnalité) ajustés à la baisse de tendance constatée en 2025 (de 10u à 5u). L'outlier suspecté ici est la commande de 2u qui semble trop faible pour un réapprovisionnement standard de ce type de produit sauce squeeze en B2B par rapport au reste de l'historique (moyenne 6.6u). Par prudence et précision, on se positionne sur 5u (proche de la médiane de 6u).

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
- **Pattern temporel**: Commande spot ou cycle long erratique (environ tous les 2-3 mois)
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée par rapport à N-1
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre des volumes relativement stables entre 2u et 6u. En 2024, à la même période (octobre), la commande était de 2u, mais la tendance récente (août 2025) montre une stabilisation à 5u, ce qui est supérieur à la moyenne N-1. Bien que le mardi ne soit pas un jour de commande régulier historique, il s'inscrit dans la fenêtre habituelle de commande du client. La dernière commande observée étant de 5u et les volumes oscillant généralement autour de cette valeur lors des phases de reprise, nous retenons 5u comme la quantité la plus probable pour la prochaine occurrence de commande afin de couvrir le besoin sans surstocker (vu l'absence de pic récent). Un niveau de confiance 'low' est attribué en raison de la faible fréquence des commandes ces 12 derniers mois.

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
- **Pattern temporel**: Rythme très sporadique ou trimestriel
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (10u -> 5u)
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'historique est très limité (3 points en 18 mois). On observe une décrue du volume par rapport à l'année dernière : la commande d'octobre 2024 était de 10u, tandis que la commande la plus récente (août 2025) n'affiche que 5u. Le pic de 15u en avril est considéré comme un événement isolé. En l'absence de régularité hebdomadaire, la dernière valeur observée (5u) constitue la base la plus fiable pour la prochaine rotation de stock, malgré le changement de jour (mardi au lieu de jeudi/lundi).

</details>


<details>
<summary><strong>14. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 50u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 50u (confidence: low)
- 📊 **Baseline N-1**: 50u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 25u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très espacé (tous les 30 à 60 jours environ)
- **Saisonnalité**: none
- **Tendance**: Hausse +100% (passage de 25u à 50u)
- **Outliers détectés**: 50u

**🧠 Raisonnement LLM:**
L'historique montre une commande de base stable de 25u en 2024. Cependant, la commande la plus récente (juillet 2025) a doublé pour atteindre 50u, signalant un nouveau palier de consommation ou un changement de format de commande client. Bien que le mardi ne soit pas un jour de commandehistorique, le produit fonctionne par cycles longs (mensuels ou bimensuels). Étant donné le saut de volume récent à 50u, cette valeur constitue la nouvelle référence la plus probable pour la prochaine itération, le pic de 50u étant considéré comme la nouvelle tendance plutôt qu'un outlier ponctuel dans un contexte de croissance B2B sur ce type de produit bio mangue 180g (TVF001). J'anticipe donc 50u pour la prochaine rotation de stock prévue autour de cette date d'octobre 2025 (environ 80 jours après la dernière commande). Chaque commande précédente en 2024 représentait un réapprovisionnement de fond, et l'augmentation de juillet 2025 doit être respectée pour minimiser le MAPE sur la tendance actuelle haute. La confiance est faible en raison de la rareté des points de données récents (1 seul point sur 2025). Pour une prédiction plus fine, il faudrait des données sur les ventes secondaires ou la période d'épuisement des stocks du client sur les 50 dernières unités commandées en juillet pour confirmer si la demande est bien passée de 25 à 50 ou s'il s'agissait d'un 'stocking event'. En l'absence de ces données, on suit la dernière valeur réelle du client (50u). On privilégie la tendance récente (50u) par rapport au volume N-1 (25u). Le changement de jour (mardi) n'induit pas de 0 car le produit est géré en réapprovisionnement espacé, on prévoit donc la quantité pour le prochain cycle.

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

**✅ Quantité LLM**: 5u (confidence: low)
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

**✅ Quantité LLM**: 5u (confidence: medium)
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

**✅ Quantité LLM**: 5u (confidence: low)
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

**✅ Quantité LLM**: 50u (confidence: low)
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

*Rapport généré automatiquement le 2025-12-18T11:16:01.117Z*
