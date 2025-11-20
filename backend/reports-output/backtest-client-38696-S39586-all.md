# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 35
- **Tokens**: 73,843 input + 21,017 output = 94,860 total
- **Coût**: $0.5368 (~53.68¢)
- **Coût par produit LLM**: $0.0153


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.0% | 50 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
| **F1-Score** | 26.2% | Score équilibré global |

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
| **MAE** | 1.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 56.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | 🤖 LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 3 | 2.0 | 66.7% | ✅ partial | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 6u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 3u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (20-38 jours) sans pattern hebdomadaire fixe
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère volatilité (moyenne ~5u)
- **Outliers détectés**: 10u, 1u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes récentes montrent des intervalles irréguliers:
- 29/09/2025 → 09/09/2025: 20 jours
- 09/09/2025 → 22/08/2025: 18 jours
- 22/08/2025 → 22/07/2025: 31 jours
Pas de pattern hebdomadaire identifiable (lun., mar., ven., mar. varient). Fréquence moyenne ~20-30 jours.

**FILTRAGE OUTLIERS:**
- Le 10u du 09/09/2025 (mardi) semble exceptionnel (2x la moyenne)
- Le 1u du 11/07/2024 est également atypique (sous-commande)
- Le 10u du 29/04/2024 pourrait être un pic saisonnier printemps
En excluant ces outliers, la demande normale oscille entre 3-6u.

**SAISONNALITÉ N-1:**
Octobre 2024: pas de données directes, mais septembre 2024 montrait 4-6u. Impact faible car produit de niche (mayonnaise truffée) avec demande relativement stable hors promotions.

**TENDANCE RÉCENTE (3 mois):**
- Moyenne brute: (4+10+3+6)/4 = 5.75u
- Moyenne hors outlier (10u): (4+3+6)/3 = 4.33u
- Dernière commande (29/09): 4u - revenu à la normale après le pic

**DÉCISION:**
Depuis le 29/09 (29 jours avant la prédiction du 07/10), le cycle moyen suggère une commande imminente. La dernière commande de 4u et le retour à la stabilité post-pic orientent vers une demande de fond de 5u (moyenne historique hors outliers: ~4-5u, arrondi à 5u pour refléter la baseline historique N-1).

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - environ 1 mois d'intervalle, sans jour de semaine fixe (lun/mar/ven/mar)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère hausse récente
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes montrent un pattern irrégulier avec intervalles variables (30-62 jours). Pas de jour de semaine fixe observé (lundi, mardi, vendredi). Dernières commandes: 29/09 (2u), 23/09 (1u), 22/08 (1u), 22/07 (1u). La date de prédiction (07/10) tombe 8 jours après la dernière commande du 29/09, ce qui est très court par rapport au rythme habituel d'environ 30 jours.

**FILTRAGE OUTLIERS:**
La quantité de 2u apparaît 3 fois dans l'historique (31/05/24, 06/05/24, 29/09/25) contre 6 fois pour 1u. Les 2u semblent être des commandes de réapprovisionnement normales mais moins fréquentes. Le produit spécialisé "Tarti Tomate Ail des ours" suggère une demande de niche stable.

**SAISONNALITÉ N-1:**
En 2024, aucune commande en octobre (données mai-août). Impact saisonnier faible car produit de spécialité à rotation lente. Période estivale 2024 montre 1-2u par commande.

**DÉCISION:**
Vu que la dernière commande (2u) date de seulement 8 jours, il est peu probable qu'une nouvelle commande soit nécessaire aussi rapidement. Le rythme moyen de ~30 jours suggère que cette date est prématurée. Si commande, ce serait probablement 1u (quantité la plus fréquente 67% des cas). La baseline théorique est 1.2u mais en contexte B2B précis, je recommande 1u comme quantité la plus probable.

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~30-40j, majoritairement Mardi/Lundi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse vers 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les commandes sont irrégulières avec intervalles de 30-43 jours. Le client commande principalement en début de semaine (Mardi/Lundi dominant). Dernière commande: 2025-09-23 (mardi), soit 14 jours avant la prédiction du 2025-10-07 (mardi) - ce qui est court par rapport au rythme habituel, MAIS le pattern montre parfois des commandes rapprochées (ex: 2024-05-28 et 2024-05-31 à 3j d'écart).

**Filtrage outliers**: Aucun outlier détecté. Les quantités oscillent entre 1u et 2u de façon cohérente sans pic exceptionnel.

**Tendance récente**: Sur les 3 derniers mois, on observe 3 commandes sur 4 à 2u (2025-09-23: 2u, 2025-08-05: 2u, seule 2025-08-11: 1u et 2025-07-22: 1u). Cela montre une légère tendance vers 2u comme volume standard.

**Saisonnalité**: Aucun pattern saisonnier fort détectable. Les volumes N-1 (mai-septembre 2024) montrent la même alternance 1u-2u.

**Décision**: La dernière commande étant de 2u le 2025-09-23 (mardi), et la date de prédiction tombant également un mardi après 14 jours, le client pourrait être en phase de reconstitution de stock. La tendance récente favorise 2u (75% des commandes récentes). Baseline théorique: 1.75u → Arrondi à **2u** comme quantité la plus probable.

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec prédominance mardis (3/5 commandes), intervalle moyen ~21-25 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité entre 2-3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Sur 5 commandes (15 juil - 9 sept = ~56 jours), on observe un pattern irrégulier avec intervalle moyen de 14-28 jours. Le client privilégie les mardis (3/5 commandes) mais sans régularité stricte. Dernière commande le 09/09 (mar.), la prédiction est pour le 07/10 (mar.) soit 28 jours d'écart - dans la norme observée.

**Distribution des quantités**: 
- 2u: 2 occurrences (15/07, 09/09)
- 3u: 3 occurrences (05/08, 11/08, 22/08)
- Moyenne simple: 2.6u
- Aucun outlier détecté, volumes cohérents B2B

**Tendance récente**: Les 3 dernières commandes montrent 3u-3u-2u. La dernière à 2u pourrait indiquer un retour au niveau bas, mais la majorité (60%) est à 3u.

**Décision**: Baseline théorique à 2.6u. En l'absence de saisonnalité N-1 et avec un historique court, je privilégie la valeur modale (3u) qui représente 60% des cas. Le timing (28j d'intervalle, jour mardi) est cohérent avec le pattern observé. Pas de signal de rupture justifiant une baisse à 2u.

</details>


<details>
<summary><strong>5. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (23-47 jours), pas de jour fixe identifié
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (de 2u vers 1-2u récemment)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont irrégulières avec des intervalles variant de 23 à 47 jours (15/07→05/08: 21j, 05/08→22/08: 17j, 22/08→09/09: 18j). Aucun pattern hebdomadaire fixe n'est identifiable malgré une prédominance de mardis récents. Depuis la dernière commande du 09/09, nous sommes à 28 jours au 07/10, ce qui est dans la fourchette habituelle.

**FILTRAGE OUTLIERS**: La commande de 4u du 19/06/2024 est clairement exceptionnelle (2x la norme). Les autres commandes N-1 montrent des volumes de 2u, tandis que les 3 derniers mois oscillent entre 1-2u avec une tendance vers 1u.

**SYNTHÈSE**: 
- Saisonnalité N-1: aucune corrélation saisonnière forte détectée pour octobre
- Tendance récente: nette baisse de volume (2u→1u sur les 2 dernières commandes)
- Volume de base actuel: 1-1.5u (baseline à 1.5u pour tenir compte de la variabilité)
- La dernière commande était de 1u et représente le nouveau niveau stabilisé

**DÉCISION**: La dynamique récente montre une stabilisation à 1u par commande. Absence de signal de rattrapage ou d'événement saisonnier justifiant une hausse. Prédiction: **1 unité**.

</details>




---

## False Positives (42)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 1.6u (30j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.5u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.4u (4j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.5u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 1.3u (12j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.2u (0j restants) → prédit 2u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 9 | Stock prédit: 6.9u (28j restants) → prédit 9u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 1.1u (15j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (25j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.3u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | Stock prédit: -0.8u (-8j restants) → prédit 4u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 1.6u (13j restants) → prédit 4u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Stock prédit: 1.6u (29j restants) → prédit 2u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.4u (25j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -3.2u (-27j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 3 | Stock prédit: 0.5u (13j restants) → prédit 3u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 3 | Stock prédit: -0.5u (-15j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.5u (-14j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -0.4u (-6j restants) → prédit 3u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 0.4u (9j restants) → prédit 3u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Stock prédit: -1.7u (-61j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -2.7u (-82j restants) → prédit 1u mais non commandé |


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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 0.6u (73j restants > seuil 30j) |
| [VID0009] Consigne casier | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 12 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-20T09:03:59.207Z*
