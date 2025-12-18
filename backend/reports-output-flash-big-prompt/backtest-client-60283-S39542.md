# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 10,350 input + 2,639 output = 12,989 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 77.8% | Score équilibré global |

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
| **MAE** | 26.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 69.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -53.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 17 | 60 | 43.0 | 71.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 10 | 7 | 3.0 | 42.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 38 | 18 | 20.0 | 111.1% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 17u vs Médiane: 19u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 17u (confidence: high)
- 📊 **Baseline N-1**: 17u
- 📊 **Médiane**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 43u (71.7%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (Cycle 28-31j)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (20u vers 17u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une commande régulière une fois par mois, stabilisée autour de 20u pendant l'été avant de passer à 17u le 29 septembre. Bien que la date demandée (02/10) soit un jeudi et que le client commande habituellement le lundi, nous suivons la règle métier consistant à ne pas prédire 0. La commande la plus proche dans le temps (celle du cycle de début octobre) est estimée à 17u, s'alignant sur le volume le plus récent qui marque une légère érosion de la demande par rapport aux 20u d'août/septembre.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 10u vs Médiane: 25u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 3u (42.9%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Approximativement mensuel (intervalle de 13 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (25u à 10u)
- **Outliers détectés**: 25u

**🧠 Raisonnement LLM:**
L'historique montre une volatilité importante tant en volume qu'en fréquence. Les deux premières commandes étaient de 25u, mais la plus récente (septembre) a chuté à 10u. En l'absence de données N-1 pour confirmer une saisonnalité, je privilégie la tendance immédiate la plus récente (10u) qui semble être le nouveau volume de fond après l'épuisement probable d'un stock initial ou d'un pic promotionnel de 25u. Bien que le jeudi ne soit pas un jour de commande récurrent, la règle métier impose de projeter la prochaine commande probable, estimée ici à 10u sur la base du dernier point de données cohérent avec une baisse de volume stabilisée pendant les 30 derniers jours par rapport au début d'été/août ou à l'ouverture de compte possible en juillet/août avec des volumes de mise en place de 25u plus élevés que la rotation réelle constatée à 10u en septembre (01/09). La date du 02/10 correspond exactement à un cycle de 31 jours depuis la dernière commande, confirmant un rythme mensuel plutôt qu'hebdomadaire, justifiant ainsi le maintien de 10u à cette date précise de prédiction (début de mois). Le niveau de confiance est 'low' car l'historique contient seulement 3 points de données avec une forte variation initiale de volume de 60%. On suit ici la règle d'or de privilégier la dernière valeur constatée en cas de rupture de tendance descendante nette (25u -> 10u). Il est plus probable que le volume courant soit 10u plutôt qu'une remontée brutale à 25u sans événement promotionnel identifié.

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuelle (tous les 15-20 jours environ)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 20u vers 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation à 10 unités lors des deux dernières commandes (août et septembre), après un pic à 20 unités en juillet/début août qui semble être un outlier ou un stock de lancement de saison. Bien que la date de prédiction soit un jeudi et qu'aucune commande n'ait eu lieu ce jour précis auparavant, le cycle bimensuel indique qu'une commande est attendue environ 30 jours après la précédente (01/09). La quantité de 10u est la plus probable car elle reflète la demande de fond actuelle sans l'influence des volumes exceptionnels du début d'été.

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (Cycle de ~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 10u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel très régulier sur les deux derniers mois (le 04/08 puis le 01/09) avec une quantité stable de 10 unités. La commande de juillet (20u) semble être un stock de mise en place ou une commande double qui a été corrigée par la suite. Bien que le jour habituel soit le lundi et que la date cible soit un jeudi, le cycle de 30 jours arrive à échéance en cette fin de semaine (dernière commande il y a 31 jours). Conformément aux règles, on prédit la quantité du prochain événement de commande, soit 10 unités.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 18u (Réel: 45u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: low)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 18u
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: 27u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel ou Mensuel irrégulier (cycle de ~60 jours observé)
- **Saisonnalité**: none
- **Tendance**: Stable à 18u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est limité à deux points de données espacés de 60 jours, mais ils présentent une constance absolue (18 unités à chaque fois). Bien que le jour de commande varie (lundi vs vendredi), le volume ne fluctue pas. En suivant les règles B2B, on prédit la quantité de la prochaine commande probable sans tenir compte de l'absence de cycle hebdomadaire strict. Étant donné la stabilité parfaite du volume observé, 18u est la prédiction la plus précise malgré le peu de données disponibles (MAPE visé minimal en restant sur la valeur historique constante). Chaque commande correspond probablement à un format de carton standard (ex: 3x6u). Taylorisme du réapprovisionnement à l'unité près constaté ici : 18u ou rien car stock de sécurité client atteint probablement ce seuil de déclenchement d'achat fixe de 18 unités le 2 octobre au vu de l'intervalle temporel écoulé depuis septembre (30 jours). Il est très possible que ce client passe sur un rythme mensuel (cycle 30j le 1er sep puis le 2 oct). L'intervalle exact est de 31 jours entre le 01/09 et le 02/10, confirmant un pattern mensuel de début de mois à 18u. Recommandé : 18u avec confiance faible due à la taille de l'échantillon historique, mais haute probabilité sur la quantité spécifique (multiple commercial probable). Date demandée correspondant à l'anniversaire des 30 jours du dernier achat de début de mois de septembre (cycle mensuel probable débuté fin d'été/début d'automne). On ignore le fait que ce soit un jeudi car le timing calendaire (début de mois, J+31) prime sur le jour de la semaine ici observé ponctuellement. Statu quo sur 18u pour ne pas générer de rupture ou surstock face à une demande si régulière en volume d'achat récurrent précédent d'ex-sept et ex-juillet sur ce type de référence faible calorie/bio niche.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 17u (confidence: high)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: low)
**📊 Quantité Réelle**: 45u

</details>




---

## False Positives (3)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -38.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.3u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.4u (-4j restants) → prédit 53u mais non commandé |


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
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.9u (36j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:58:54.170Z*
