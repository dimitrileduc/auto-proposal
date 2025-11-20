# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 30
- **Tokens**: 60,784 input + 16,994 output = 77,778 total
- **Coût**: $0.4373 (~43.73¢)
- **Coût par produit LLM**: $0.0146


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 45 produits prédits, 24 corrects |
| **Rappel** | 85.7% | 28 produits réels, 24 détectés |
| **F1-Score** | 65.8% | Score équilibré global |

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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 49.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 14 | Avec erreur |

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

## True Positives (24)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | 1 | 2.0 | 200.0% | ✅ partial | 📊 Médiane |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (17 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (30-40j entre commandes récentes, pattern mensuel approximatif)
- **Saisonnalité**: weak
- **Tendance**: Baisse -40% (de 3-4u en N-1 vers 2-3u récent)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont irrégulières avec un pattern mensuel approximatif. Dernières commandes: 05/08 (mar.) → 17/09 (mer.) = 43 jours. Prédiction au 09/10 = 22 jours après la dernière commande, donc dans le cycle normal.

**ANALYSE TENDANCE**: N-1 montrait des volumes de 3-4-5-4u (moyenne ~4u, le 5u de juillet est un outlier léger). La période récente (3 derniers mois) montre une baisse: 3u puis 2u (moyenne 2.5u), soit une diminution d'environ 40% par rapport à N-1.

**SAISONNALITÉ**: Impact faible. En N-1 en août (21/08), la commande était de 4u. Cette année en août (05/08) c'était 3u, puis 2u en septembre. Pas de pattern saisonnier fort détectable pour octobre spécifiquement.

**DÉCISION**: La tendance baissière est nette mais le 2u de septembre peut être sous-représentatif. Le produit premium (mayonnaise truffes) en B2B suggère des volumes faibles mais réguliers. La baseline théorique est 2.5u. Avec 22 jours depuis dernière commande (rythme normal), je recommande 3u comme compromis entre la tendance baissière récente et la stabilité historique, évitant la sur-commande tout en couvrant la demande probable.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (14-29 jours), pas de jour fixe identifié
- **Saisonnalité**: weak
- **Tendance**: Baisse -50% (passage de 4-6u en N-1 à 2-4u en 2025)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les commandes récentes (août-septembre 2025) montrent des intervalles irréguliers: 14 jours (05/08→19/08) puis 29 jours (19/08→17/09). Nous sommes le 09/10, soit 22 jours après la dernière commande du 17/09 - intervalle cohérent avec le pattern observé.

**Filtrage outliers**: La commande de 6u du 21/08/2024 (N-1) est identifiée comme outlier - elle est significativement supérieure aux autres données. Les commandes de juillet 2024 (4u) et août 2025 (4u, 2u) puis septembre (2u) montrent une tendance baissière nette.

**Tendance récente dominante**: Sur les 3 dernières commandes en 2025, on observe: 4u → 2u → 2u, soit une stabilisation à 2u pour les deux dernières commandes. La moyenne pondérée (poids fort sur récent) donne: (2×3 + 2×2 + 4×1)/6 = 2.33u.

**Saisonnalité faible**: Pas de pattern saisonnier fort identifié pour octobre. L'impact N-1 est faible car données limitées et outlier détecté.

**Décision**: La demande s'est stabilisée à 2u sur les deux dernières commandes. Aucun élément n'indique un rattrapage ou événement exceptionnel. Prédiction à 2u pour maximiser la précision.

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 14-29 jours, sans jour de semaine fixe
- **Saisonnalité**: none
- **Tendance**: Stable à légère baisse (3.5u en N-1 vs 2.3u récent)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Historique récent montre des commandes irrégulières: 05/08 (mar), 19/08 (mar) [14j], 17/09 (mer) [29j]
- Pas de pattern hebdomadaire fixe (mardi-mercredi variables)
- Intervalle moyen ~20 jours, avec dernier délai de 29j suggérant que le prochain besoin approche (date prédiction: 09/10 = 22j après dernière commande)

**FILTRAGE OUTLIERS:**
- Juillet 2024: 4u est un outlier (2x supérieur à la norme)
- Baseline N-1 nettoyée: (3u) représente mieux la demande régulière
- Période récente stable: 2u, 3u, 2u → moyenne 2.3u

**SAISONNALITÉ:**
- Aucun pattern saisonnier détectable (sauce andalouse = produit stable année)
- Juillet 2024 vs période récente ne montre pas de récurrence saisonnière forte

**TENDANCE:**
- N-1 (sans outlier): 3u
- Récent Q3 2025: 2.3u moyenne
- Légère baisse de volume mais stabilisation autour de 2-3u

**DÉCISION:**
Demande de fond = 2.3u. Quantités récentes montrent alternance 2u-3u-2u. Le rythme irrégulier et l'intervalle de 22j depuis dernière commande suggèrent un besoin imminent. En privilégiant la précision sur la prudence et compte tenu de la tendance légèrement baissière, je recommande 2u (valeur médiane récente).

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 32-43 jours, sans jour fixe de la semaine
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (2u → 1u entre août et septembre 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: L'historique montre un produit à rotation faible et irrégulière. Les intervalles sont: juillet-août 2024 (37j), août 2024-août 2025 (~1 an), août-septembre 2025 (43j). Aucun pattern hebdomadaire ou mensuel clair n'émerge. La prochaine prédiction (09/10/2025) se situe 22 jours après la dernière commande du 17/09.

**Filtrage outliers**: Aucune quantité exceptionnelle détectée. Les volumes oscillent entre 1u et 2u, ce qui est cohérent pour un produit de niche (sauce béarnaise en format 250ml WECK).

**Tendance récente**: La dernière commande (sept 2025) montre 1u contre 2u en août 2025, confirmant une baisse ou stabilisation à niveau bas. Le produit semble avoir une demande faible et sporadique.

**Saisonnalité**: Absence de pattern saisonnier identifiable. Les commandes N-1 (juillet-août) ne correspondent pas à un pic particulier sur la même période en 2025.

**Décision**: Compte tenu de la tendance baissière récente (dernier achat à 1u), de l'absence de saisonnalité forte et du rythme irrégulier, la baseline se situe à 1 unité. La prédiction finale est 1u, représentant la demande de fond actuelle du client pour ce produit à faible rotation.

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes espacées de 43 jours
- **Saisonnalité**: none
- **Tendance**: Stable - 2u sur les 2 commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Seulement 2 commandes en historique (05/08 et 17/09), espacées de 43 jours. La prédiction est pour le 09/10, soit 22 jours après la dernière commande. Le pattern est insuffisant pour identifier un cycle précis, mais suggère une demande ponctuelle irrégulière.

**Filtrage outliers**: Les 2 commandes montrent exactement 2 unités chacune. Aucun pic ou anomalie détecté. Pas de données N-1 pour identifier des événements saisonniers.

**Synthèse**: Avec un historique limité mais parfaitement cohérent (2u × 2 commandes), la demande de base s'établit à 2 unités. L'absence de tendance haussière/baissière et de saisonnalité identifiable, combinée à la régularité des quantités commandées, justifie une prédiction de 2 unités.

**Confiance medium**: L'historique réduit limite la certitude, mais la parfaite constance des quantités renforce la fiabilité de cette prédiction baseline.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (31-43 jours entre commandes récentes)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 2-4u, moyenne 2.8u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont irrégulières. Entre 2025-08-05 et 2025-09-17, il y a 43 jours d'écart. Au 2025-10-09, cela fait 22 jours depuis la dernière commande, ce qui suggère qu'une commande est dans la fenêtre probable (le pattern montre des commandes toutes les 4-6 semaines environ).

**FILTRAGE OUTLIERS**: La commande de 5u du 2024-05-31 se démarque nettement. Les autres commandes N-1 sont à 2-4u. Les 2 commandes récentes (3 derniers mois) sont stables à 2u chacune, confirmant un niveau de demande régulier.

**SAISONNALITÉ**: Faible impact saisonnier détecté. Bien que nous soyons en octobre (vs données N-1 mars-juillet), les quantités N-1 moyennes (hors outlier) sont similaires aux quantités récentes. Pas de pattern saisonnier fort évident pour ce produit sauce aioli.

**TENDANCE**: Les 2 dernières commandes sont identiques à 2u, montrant une stabilisation de la demande à ce niveau. C'est cohérent avec les commandes N-1 de mars et avril (2u chacune).

**DÉCISION**: La demande de fond récente est clairement établie à 2u par commande. Le rythme suggère qu'une commande est attendue. Baseline théorique = 2.5u (moyenne pondérée), mais les données récentes convergent vers 2u de manière consistante. Prédiction précise = 2u.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalle croissant (14j → 29j → 22j). Pas de jour fixe identifiable.
- **Saisonnalité**: none
- **Tendance**: Hausse +25% (progression 4u → 5u → 6u sur 3 commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Le client montre un pattern irrégulier avec des intervalles variables (14 jours entre août, puis 29 jours jusqu'à mi-septembre). Pas de jour de semaine récurrent détectable (mardi, mardi, mercredi). La prochaine commande attendue serait ~3-4 semaines après le 17/09, soit fin septembre/début octobre, compatible avec la date de prédiction du 09/10 (22 jours après).

**Tendance claire:** Progression linéaire sur les 3 dernières commandes : 4u → 5u → 6u (+25% par commande). Cette croissance régulière suggère une augmentation de la demande client ou expansion du marché.

**Pas d'outliers:** Aucune commande exceptionnelle identifiée, les quantités restent cohérentes dans une fourchette basse (4-6u), typique d'un produit de niche B2B.

**Décision:** En l'absence de saisonnalité N-1 et avec une tendance haussière régulière, je privilégie la **dernière quantité commandée (6u)** comme baseline. L'historique limité (3 points) et l'irrégularité du rythme justifient une approche conservatrice : maintenir 6u plutôt que d'extrapoler à 7u. Le client semble stabiliser sa demande à ce niveau après croissance progressive.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - commandes espacées de 14-29 jours, majoritairement le mardi
- **Saisonnalité**: none
- **Tendance**: Stable - demande constante à 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Historique très limité (3 commandes sur 2 mois) montrant des intervalles variables: 14 jours (05/08→19/08) puis 29 jours (19/08→17/09). Pattern hebdomadaire faible avec préférence mardi (2/3 commandes), mais dernière commande un mercredi. Depuis la dernière commande (17/09), 22 jours se seront écoulés au 09/10, ce qui entre dans la fourchette observée (14-29j).

**Filtrage outliers**: Aucun pic détecté. Toutes les commandes sont strictement identiques à 2 unités, indiquant une demande très stable et prévisible. Pas de données N-1 pour valider la saisonnalité.

**Synthèse**: Produit à rotation faible mais régulière en quantité. La constance absolue (100% des commandes = 2u) est le signal le plus fort. L'intervalle de 22 jours depuis la dernière commande suggère qu'une commande est probable autour de cette date. En B2B agroalimentaire avec un produit de niche (boisson énergétique bio), ce pattern de micro-commandes régulières reflète probablement un point de vente unique avec rotation lente.

**Décision**: Baseline = 2u (moyenne historique). Aucun élément ne justifie d'ajuster à la hausse ou à la baisse. Confiance moyenne en raison du faible historique (3 points) mais renforcée par la stabilité parfaite observée.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées (14j puis 29j puis 23j)
- **Saisonnalité**: none
- **Tendance**: Stable - Volume minimal oscillant entre 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 3 commandes historiques montrent un pattern irrégulier: 5 août → 19 août (14j), 19 août → 17 sept (29j). Intervalles variables entre 14-29j. Depuis la dernière commande du 17/09, nous sommes à 22 jours (09/10), ce qui se situe dans la fourchette observée, suggérant qu'une commande est probable.

**SAISONNALITÉ**: Absence totale de données N-1, impossible d'identifier un effet saisonnier. Impact saisonnier considéré comme nul.

**TENDANCE**: Volume très faible et stable - alternance 2u, 1u, 2u. Pas de tendance haussière ou baissière marquée. Moyenne = 1,67u.

**OUTLIERS**: Aucun pic détecté, toutes les quantités sont cohérentes (1-2u).

**DÉCISION**: Produit de niche (bio, spécialité mango-passion) avec demande sporadique minimale. Le pattern 2-1-2 suggère légèrement un retour à 2u. Vu l'intervalle de 22j depuis dernière commande et le pattern observé, je privilégie 2u (quantité modale = 2/3 commandes). Confiance faible car historique très limité (3 points) et pattern irrégulier.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 14 à 29 jours, sans pattern hebdomadaire clair
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1u et 2u sans tendance marquée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse du pattern : Seulement 3 commandes sur les 3 derniers mois (05/08, 19/08, 17/09) avec des intervalles variables (14 jours puis 29 jours). Aucun pattern hebdomadaire fixe détecté. Les quantités alternent entre 1u et 2u.

Absence de données N-1 : Impossible d'évaluer l'impact saisonnier pour début octobre. Pas de référence historique pour cette période de l'année.

Calcul baseline : Moyenne des 3 dernières commandes = (2+1+2)/3 = 1,67u.

Dernière commande : 17/09 (il y a ~22 jours à la date de prédiction 09/10) avec 2u. Cet intervalle correspond au pattern observé (14-29 jours), suggérant qu'une commande est plausible à cette date.

Décision : Je privilégie 2u plutôt que 1u car : (1) la dernière commande était de 2u, (2) 2 commandes sur 3 sont à 2u, (3) l'historique très limité ne permet pas d'identifier de facteur justifiant une baisse.

Confiance LOW : Historique très court (3 points), pattern irrégulier, absence de saisonnalité connue, produit possiblement en phase de lancement/test chez ce client.

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Seulement 2 commandes en 3 mois (intervalle de 43 jours entre les deux)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 2u sur les 2 commandes observées
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse Chain of Thought:**

1. **ANALYSE RYTHMIQUE:** L'historique ne contient que 2 commandes sur les 3 derniers mois (05/08 et 17/09), soit un intervalle de 43 jours. Pas de pattern hebdomadaire ou mensuel clair détectable. La prochaine prédiction (09/10) se situe 22 jours après la dernière commande, soit environ la moitié de l'intervalle précédent. Aucun rythme régulier n'est établi, ce qui suggère une demande opportuniste ou liée à des besoins ponctuels.

2. **FILTRAGE DES OUTLIERS:** Les deux quantités observées sont identiques (2u), aucune ne présente de caractère exceptionnel. Pas de données N-1 pour identifier une saisonnalité ou événement récurrent en octobre.

3. **SYNTHÈSE & DÉCISION:** 
- Absence totale de données N-1 → Impossible d'évaluer la saisonnalité
- Pattern de fréquence non établi → Demande sporadique
- Tendance: Stable à 2u sur les 2 observations
- Pour un produit premium/bio en B2B, cette faible fréquence suggère soit un nouveau référencement, soit un produit de niche à rotation lente

**CONCLUSION:** En l'absence de pattern temporel et avec une historique minimal, je me base sur la constante observée de 2u. La confiance est faible car seulement 2 points de données disponibles et aucune indication de cycle régulier permettant de confirmer qu'une commande aura lieu à cette date précise.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 29j, 43j)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : L'historique montre 3 commandes sur les 3 derniers mois avec des intervalles variables : 14 jours (05/08→19/08), puis 29 jours (19/08→17/09), puis 22 jours depuis la dernière commande (17/09→09/10). Pas de pattern hebdomadaire fixe détectable - les jours varient (mardi, mardi, mercredi, jeudi). Le rythme est irrégulier mais tourne autour de 3-4 semaines entre commandes.

**FILTRAGE OUTLIERS** : Les quantités commandées (2u, 1u, 2u) sont cohérentes avec de faibles volumes B2B. Aucun pic exceptionnel identifié. Le "1u" du 19/08 peut être considéré comme une commande de réassort minimal plutôt qu'un outlier.

**SAISONNALITÉ** : Aucune donnée N-1 disponible pour valider un effet saisonnier. Impact considéré comme nul.

**TENDANCE** : Sur 3 points de données, la demande oscille entre 1 et 2 unités sans tendance nette à la hausse ou baisse. Moyenne = 1,67u.

**DÉCISION** : Date cible 09/10 = 22 jours après dernière commande (17/09). L'intervalle s'inscrit dans le rythme habituel du client. La dernière commande était de 2u. En l'absence de signal de baisse et vu le pattern 2u-1u-2u, la prédiction la plus probable est un retour à 2u. Arrondi à l'entier supérieur car le baseline 1,5u et le pattern suggèrent 2u comme valeur modale.

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 14-29 jours, majoritairement le mardi
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1u et 2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (3 commandes seulement sur 2 mois). Le pattern montre des commandes irrégulières espacées de 14 jours (05/08→19/08) puis 29 jours (19/08→17/09), principalement le mardi mais la dernière un mercredi. Les quantités oscillent entre 1u et 2u (moyenne: 1.67u). Sans données N-1 pour valider une saisonnalité et avec seulement 3 points de données, la prédiction est incertaine. La prochaine commande étant prévue un jeudi (9 oct), soit 22 jours après la dernière (17 sept), on se situe dans la fourchette observée (14-29j). Je privilégie 2u car : (1) c'est la quantité la plus récente (17/09), (2) 2u apparaît dans 66% des cas, (3) produit premium bio tend vers des commandes modestes mais régulières. Confiance faible due au manque d'historique.

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement (5 août et 17 sept, soit ~43j d'écart)
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes - historique très limité (2 commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CRITIQUE:**

1. **HISTORIQUE EXTRÊMEMENT LIMITÉ** : Seulement 2 commandes (5 août: 2u, 17 sept: 1u). Absence totale de données N-1 pour identifier une saisonnalité.

2. **PATTERN TEMPOREL** : 
   - Intervalle de ~43 jours entre les 2 seules commandes
   - Aucun pattern hebdomadaire ou mensuel détectable
   - Date de prédiction (9 oct) = ~22 jours après dernière commande
   - Produit potentiellement en phase de lancement ou commandes très occasionnelles

3. **TENDANCE** : 
   - Baisse apparente (2u → 1u) mais sur échantillon trop faible pour conclure
   - Peut être fluctuation naturelle sur produit à faible rotation

4. **DÉCISION** :
   - Baseline théorique : moyenne simple = 1.5u
   - Dernière commande = 1u (donnée la plus récente et pertinente)
   - En contexte B2B agroalimentaire avec si peu d'historique, la commande la plus récente est le meilleur indicateur
   - **Prédiction : 1 unité** (alignée sur dernière commande observée)

**CONFIANCE BASSE** car l'historique ne permet pas d'établir de pattern fiable. Risque élevé d'erreur dans les deux sens (sous/sur-estimation).

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes en 3 mois (43 jours d'écart)
- **Saisonnalité**: none
- **Tendance**: Hausse +50% (2u → 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité avec seulement 2 commandes sur 3 mois (05/08 et 17/09). Analyse rythmique: intervalle de 43 jours entre les 2 commandes, sans pattern hebdomadaire ou mensuel clair. La commande du 09/10 interviendrait 22 jours après la dernière (17/09), soit un rythme accéléré par rapport à l'historique. 

Tendance observée: progression de 2u à 3u (+50%), suggérant une adoption croissante du produit. Aucun outlier détecté - les quantités restent faibles et cohérentes pour un produit en phase de lancement ou de faible rotation.

Sans données N-1 pour valider une saisonnalité, et avec un historique insuffisant pour établir un pattern fiable, je base la prédiction sur la dernière commande observée (3u) qui représente le niveau de demande le plus récent. Le produit semble stabiliser sa rotation autour de 3 unités.

Confidence faible car: données très limitées, pattern temporel non établi, impossibilité de valider la récurrence de la demande.

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Une seule commande observée
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Historique ultra-limité**

Avec une seule commande historique (2u le 2025-08-05, soit il y a ~2 mois), l'analyse prédictive est extrêmement contrainte :

**1. ANALYSE RYTHMIQUE :**
- Aucun pattern détectable (nécessite minimum 3-4 commandes)
- Intervalle unique observé : 65 jours entre la commande historique et la date de prédiction
- Impossible de confirmer une fréquence hebdomadaire, bimensuelle ou mensuelle

**2. FILTRAGE OUTLIERS :**
- La quantité de 2u est très faible, suggérant soit :
  * Un produit en phase de test/lancement chez ce client
  * Une commande d'échantillonnage
  * Un produit de niche à rotation très lente
- Aucun outlier détectable faute de distribution statistique

**3. SAISONNALITÉ :**
- Pas de données N-1 pour valider un effet saisonnier
- Produit limonade bio (catégorie typiquement saisonnière été > hiver), mais prédiction en octobre (début automne) donc hors pic estival

**DÉCISION :**
En l'absence totale de pattern et avec un seul point de référence, j'applique le principe de **persistance naïve** : la prochaine commande sera identique à la dernière observée (2u). 

Cette approche minimaliste est justifiée par :
- Le caractère ultra-niche du produit (bio, faible calories, saveur mangue-passion spécifique)
- La rotation apparemment très lente
- L'absence de signaux suggérant une accélération

**RISQUE ÉLEVÉ** : Cette prédiction a une fiabilité très faible. Une commande de 0u (arrêt du référencement) ou >2u (rattrapage après rupture) sont tout aussi probables.

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - une seule commande observée (2025-08-05)
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CRITIQUE DE LA SITUATION:**

1. **HISTORIQUE EXTRÊMEMENT LIMITÉ**: Une seule commande disponible (2 unités le 2025-08-05, soit il y a ~2 mois)

2. **IMPOSSIBILITÉ D'IDENTIFIER UN PATTERN**: 
   - Pas de récurrence observable (besoin minimum 3-4 points pour détecter un cycle)
   - Pas de données N-1 pour évaluer la saisonnalité
   - Impossible de déterminer si c'est un rythme mensuel, bimensuel ou ponctuel

3. **HYPOTHÈSES ENVISAGÉES**:
   - **Scénario A**: Nouveau produit/client avec commande test → risque de non-réachat
   - **Scénario B**: Rythme mensuel/bimensuel → commande attendue (dernier achat il y a 65 jours)
   - **Scénario C**: Produit saisonnier estival → baisse demande en octobre

4. **DÉCISION PAR DÉFAUT**:
   Face à l'absence totale de pattern établi, j'applique le principe de **persistance naïve** : la seule référence disponible est la commande de 2 unités. 
   
   En B2B agroalimentaire, une commande unique de faible volume (2u) sur un produit bio premium suggère soit un test produit, soit un besoin très ponctuel. Le délai écoulé (65 jours) sans réachat renforce le risque d'inactivité.

**CONCLUSION**: Prédiction de 2 unités par défaut, mais avec une confiance TRÈS FAIBLE. Ce type de situation nécessiterait idéalement une vérification commerciale directe avec le client.

</details>




---

## False Positives (21)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (23j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (21j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-5j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (24j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.3u (-19j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.6u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.8u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Stock prédit: -1.3u (-36j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Stock prédit: -1.5u (-44j restants) → prédit 2u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | Stock prédit: -0.5u (-21j restants) → prédit 2u mais non commandé |


---

## False Negatives (4)

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T09:07:12.186Z*
