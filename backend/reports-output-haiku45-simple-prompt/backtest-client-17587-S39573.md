# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S39573
- **Date commande** : 2025-10-06 09:26:46
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 74,512 input + 26,376 output = 100,888 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.8% | 41 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (11)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Pas de cycle hebdomadaire ou mensuel détectable. Commandes espacées de 30 à 180 jours en N-1, dernière commande 2025-09-15 (49 jours avant la date de prédiction du 2025-10-05)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 2u en moyenne, dernière commande 2025-09-15 à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE & FRÉQUENCE**
   - N-1 (2024): Intervalles très irréguliers entre commandes (3j à 180j). Aucun cycle hebdomadaire clair.
   - Dernier mois: Seules 2 commandes identifiées (2025-09-15 lun. 2u, 2025-07-17 jeu. 1u) sur 3 mois → très peu de données récentes.
   - La commande du 2025-09-15 (49 jours avant 2025-10-05) suit un intervalle inhabituel → aucun pattern cyclique évident.

2. **ANALYSE SAISONNIÈRE**
   - N-1 autour de septembre/octobre: 1 commande en oct. 2023 (2u) et 1 en sept. 2024 (3u).
   - Pas d'escalade claire à cette période → saisonnalité faible.
   - Pas d'événement promotionnel identifiable en octobre.

3. **TENDANCE IMMÉDIATE**
   - 2025-07-17: 1u (jeu.)
   - 2025-09-15: 2u (lun.)
   - Micro-hausse (+1u) entre juillet et septembre, mais trop peu de données pour affirmer une tendance.
   - Moyenne globale N-1 + récent: (3+2+2+3+2+2+2+1+2+2+1)/11 = ~2u

4. **OUTLIERS & ÉVÉNEMENTS**
   - Aucun pic exceptionnel détecté (max 3u, min 1u, écart-type très faible).
   - Pas d'erreur de saisie ou de promotion identifiée.

5. **DÉCISION FINALE**
   - Demande très stable autour de 2u.
   - Dimanche (2025-10-05) = jour atypique pour une livraison → possibilité que la commande réelle soit décalée (lundi 2025-10-06 ou vendredi précédent 2025-10-03).
   - Cependant, en l'absence de prévisibilité claire du jour exact, on se base sur la quantité historique moyenne.
   - **Confidence LOW** justifiée par: très peu de commandes récentes (N=2 sur 3 mois), absence totale de pattern cyclique, données fragmentées.

**RECOMMANDATION: 2u** (demande de fond stable et non-croissante)

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement le jeudi et lundi. Pas de cycle hebdomadaire strict identifié. Intervalles variables entre commandes (15 à 52 jours).
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u en période récente. Historique N-1 montre également majoritairement 1-2u (moyenne ~1.5u). Aucune hausse observable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

CHAÎNE DE RAISONNEMENT STRUCTURÉE :

1️⃣ **ANALYSE RYTHMIQUE**
   - Historique N-1 (2024) : 4 commandes avec distribution jeudi(1) et lundi(3)
   - Période récente (derniers 3 mois) : 3 commandes (lun., jeu., jeu.)
   - Intervalles : 15j (sept-août), puis 21j (août-juillet) → RYTHME TRÈS IRRÉGULIER
   - Aucun pattern hebdomadaire fixe détecté (pas de "chaque mardi" ou "chaque vendredi")
   - Le client ne commande PAS selon un cycle prévisible strict

2️⃣ **ANALYSE DE LA DEMANDE**
   - Quantités N-1 : 1u, 2u, 2u, 2u (moyenne 1.75u)
   - Quantités récentes : 1u, 1u, 1u (moyenne 1u)
   - TENDANCE CLAIRE : Baisse de 1.75u vers 1u (cycle de 15-21j)
   - Dernier pattern : commandes toutes à 1u depuis au moins 3 mois

3️⃣ **FILTRAGE OUTLIERS**
   - Aucun pic exceptionnel. Les 2u de N-1 ne correspondent à aucune date spéciale identifiable
   - Les 1u récents reflètent la demande normalisée du client

4️⃣ **SAISONNALITÉ**
   - Date de prédiction : 5 octobre 2025 (dimanche, hors cycle)
   - Comparaison N-1 : 19 octobre 2023 (jeudi) → 2u commandé
   - Impact saisonnier FAIBLE : le produit n'a pas de pic évident en octobre
   - La baisse vers 1u semble plus liée à une réduction de consommation du client qu'à la saison

5️⃣ **GESTION DU JOUR HORS CYCLE**
   - La prédiction porte sur un DIMANCHE (5 octobre 2025)
   - Historique : aucune commande ne tombe le dimanche
   - Les commandes se font les jours ouvrables (lun-jeu principalement)
   - Interprétation : Le client risque de commander LUNDI 6 OCTOBRE (rattrapage possible du dimanche ?)
   - Cependant, sans pattern strict, on ne peut pas garantir une commande du lundi

6️⃣ **SYNTHÈSE & DÉCISION FINALE**
   - Baseline théorique : 1.5u (moyenne pondérée N-1 + tendance récente)
   - Tendance actuelle : 1u (3 dernières commandes identiques)
   - Confidentialité : MEDIUM → données peu fréquentes et rythme très irrégulier
   - **Recommandation** : 1u (reflète la réalité récente stable, minimise le risque de surstock)

📊 JUSTIFICATION FINALE :
Le client affiche une demande EXTRÊMEMENT RÉGULIÈRE à 1u par commande depuis 3 mois. Bien que le rythme entre commandes soit erratique (15-21j), la quantité unitaire est devenue prévisible. Mieux vaut commander 1u précis que 2u par prudence → minimize MAPE.


</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière avec intervalle moyen ~45-50 jours. Dernière commande: 2025-09-15 (lun.), soit 20 jours avant la date de prédiction (2025-10-05, dimanche). Pattern hebdomadaire observé: jours variables (lun, mar, jeu, mer) sans régularité stricte.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u (à l'exception d'un pic unique en 2023-11-21 avec 1u, valeur inférieure à la norme)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1️⃣ **ANALYSE RYTHMIQUE CRITIQUE**
   - Intervalle N-1 (2024): moyenne ~60j entre commandes (septembre → août → juin → mai → avril → mars → février → janvier)
   - Intervalle récent (3 derniers mois): 39 jours entre 2025-08-07 et 2025-09-15
   - Intervalle avant prédiction: 20 jours (2025-09-15 → 2025-10-05)
   - ⚠️ RUPTURE PATTERN: L'intervalle s'accélère significativement (39j → 20j)
   
2️⃣ **PATTERN HEBDOMADAIRE**
   - Jours de commande variés: lun, mar, mer, jeu (aucun jour fixe)
   - Date prédiction 2025-10-05 = DIMANCHE (hors cycles B2B habituels)
   - Probabilité de commande dimanche = TRÈS FAIBLE en B2B agroalimentaire
   - ⚠️ SIGNAL: La date elle-même est anormale pour ce client

3️⃣ **DÉTECTION OUTLIERS & SAISONNALITÉ**
   - Série très homogène: 2u répétée 11x sur 12 commandes
   - Exception: 2023-11-21 = 1u (anomalie historique isolée, probablement erreur ou rupture partielle)
   - Octobre N-1 (2023-10-19) = 2u (pas d'effet saisonnier automnal particulier)
   - Pas d'escalade progressive → Trend = STABLE
   - Saisonnalité: WEAK (absence de variation saisonnière nette)

4️⃣ **SYNTHÈSE & DÉCISION FINALE**
   - **Baseline théorique:** 2u (moyenne stable, cohérente avec 91,7% des observations)
   - **Contexte critique:** Dimanche = jour non-standard pour commande B2B
   - **Hypothèse probable:** Si commande effectivement positionnée dimanche 2025-10-05:
     * Elle est planifiée pour livraison début semaine (lun/mar/mer)
     * Rythme interne client accéléré (20j écoulés depuis dernière commande)
     * Demande métier sans changement = maintien à 2u
   
   **AJUSTEMENT FINAL:** Pas de rattrapage à appliquer (intervalle court, donc stock probablement adequate). Produit stable, client fiable, quantité = 2u.
   
   Confiance HAUTE car: (i) Pattern ultra-répétitif sur 12 données, (ii) Stabilité confirmée N-1 ET 3 derniers mois, (iii) Absence de promo/événement détecté, (iv) Client agroalimentaire B2B avec comportement d'achat régulier previsible.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier sans cycle hebdomadaire fixe. Analyse des intervalles : N-1 montre des commandes espacées (19j à 157j entre dates), sans jour de semaine privilégié (mardi, lundi, mercredi, jeudi mélangés). Période récente (3 derniers mois) : 3 commandes sur 10 jours en moyenne (15/08→7/09 : 23j, 25/08→7/09 : 13j, 17/07→7/09 : 52j). Pas de cycle mensuel détectable ni de jour fixe de commande.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 2u, avec légère volatilité. N-1 : moyenne 2.25u. Période récente : moyenne 1.67u (-25% vs N-1), suggérant une possible baisse légère ou stabilisation post-période estivale basse.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les données montrent une absence de pattern hebdomadaire ou mensuel régulier. L'intervalle entre la dernière commande (2025-09-15) et la prédiction (2025-10-05) est de 20 jours, ce qui est dans la plage observée en période récente. Pas d'effet rattrapage détectable.

**TENDANCE**: N-1 affiche une moyenne stable de 2.25u (8 commandes, total 18u). La période récente (derniers 3 mois) montre 4 commandes pour 7u, soit 1.75u moyenne. Cette légère baisse (-22%) pourrait indiquer une réduction de consommation estivale ou une normalisation post-pic.

**SAISONNALITÉ**: Octobre N-1 (2024-10-19) : 2u. Septembre N-1 (2024-09-24) : 3u. Aucun pic saisonnier octobre-décembre n'est evident dans N-1. Impact faible.

**FILTRAGE OUTLIERS**: Aucune quantité anormale détectée. Toutes les valeurs oscillent entre 1u et 3u, sans pic exceptionnel suggérant promotion ou erreur.

**DÉCISION FINALE**: Avec un pattern irrégulier et une demande stable autour de 2u en N-1 mais tendant vers 1.5-2u récemment, la médiane et le mode des données suggèrent **2u** comme quantité la plus probable. Le dimanche (2025-10-05) ne change pas l'analyse : aucun jour de semaine spécifique n'émerge.

Confiance **MEDIUM** car l'absence de pattern régulier limite la précision prédictive, mais les données convergent vers 2u."

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier avec intervalles variables (21-79 jours). Dernière commande 2025-08-25 (lun.), avant cela 2025-08-07 (jeu.) soit 18 jours. Aucun cycle fixe hebdomadaire détecté.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u avec point exceptionnel à 3u (août 2024). Récemment baisse à 1u suivi de retour à 2u - volatilité modérée.
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE CHAIN OF THOUGHT :

1. **RYTHME IDENTIFIÉ** :
   - N-1 (2023-2024) : 8 commandes sur ~12 mois = fréquence très basse (~1 cmd/6-8 semaines)
   - Intervalle moyen N-1 : ~47 jours
   - Récent (août 2025) : 2 commandes en 18 jours (rupture du pattern habituel ?)
   - Dernier achat : 2025-08-25 (lun.) → 41 jours avant 2025-10-05

2. **ANALYSE CALENDAIRE** :
   - Cible : dimanche 2025-10-05 (jour hors cycle habituel - le client ne commande jamais le dimanche)
   - C'est un jour décalé. Probable que la prédiction vise le prochain jour ouvrable (lun. 2025-10-06)

3. **FILTRAGE OUTLIERS** :
   - Pic à 3u en août 2024 : cas exceptionnel (promotion ou commande groupée). Ne représente pas la base.
   - Baseline réelle : 2u (valeur dominante sur 8 observations)

4. **SAISONNALITÉ OCTOBRE** :
   - Faible signal saisonnier. Octobre N-1 (2023) : 1 cmd de 2u. Impact saisonnier = "weak"

5. **TENDANCE RÉCENTE** :
   - 2025-08-07 : 2u
   - 2025-08-25 : 1u (léger recul)
   - Intervalle court (18j) rompt l'habitude des 47j moyens → possible test ou réappro partielle
   - Mais pattern N-1 dominant = stabilité autour de 2u

6. **DÉCISION FINALE** :
   - Après 41 jours depuis dernier achat (proche de la moyenne N-1), client devrait renouveler
   - Pas de signal d'augmentation de tendance robuste
   - Dernière commande était 1u (anomalie baisse), avant cela 2u (normatif)
   - Baseline 2u est la plus probable pour rattrapage cycle

**CONFIANCE = MEDIUM** : Données très clairsemées (10 observations sur ~2 ans), pattern peu régulier, mais baseline 2u reste solide sur majorité historique.

</details>


<details>
<summary><strong>6. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - commandes espacées de 30 à 60 jours. Pas de cycle hebdomadaire fixe identifié. Dernières commandes: août 2025 (lundi) et juillet 2025 (jeudi), soit ~39 jours d'intervalle.
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2u. Légère hausse observable: N-1 moyenne ~1.5u (2024-2023), récent ~1u (2025). Pas de tendance baissière nette, mais données limitées.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **RHYTHME OBSERVÉ**: 
   - N-1 (2023-2024): 6 commandes sur ~12 mois → fréquence basse, irrégulière
   - Récent (3 mois 2025): 2 commandes → 1 en juillet (jeu), 1 en août (lun)
   - Intervalle août-juillet: ~39 jours
   - Pas de day-of-week fixe → le client ne commande pas « chaque jeudi »

2. **SAISONNALITÉ**:
   - N-1 répartition: Sept (2u), Août (2u), Mai (3u), Février (1u), Nov (1u), Oct (2u)
   - Impact très FAIBLE: octobre 2023 =2u, octobre 2024 = aucune donnée
   - Pas de pic détecté à cette période (début octobre)
   - Pas d'événement promotionnel visible

3. **TENDANCE**:
   - 2023-2024: moyenne = (2+2+3+1+1+2)/6 = 1.83u
   - 2025 (récent): moyenne = (1+1)/2 = 1u
   - Légère BAISSE ou STABILISATION à 1-1.5u
   - Pas d'outliers détectés

4. **CONTEXTE DE PRÉDICTION**:
   - Date demandée: 2025-10-05 (DIMANCHE)
   - Jour inhabituels pour une commande B2B (dimanche très rare)
   - Hypothèse: Demande anticipée / rattrapage possible après rupture estivale
   - Ou: Cron/système programmatique générant une fausse alarme

5. **DÉCISION LOGIQUE**:
   - Baseline théorique: 1.5u (moyenne prudente N-1)
   - Ajustement récent: -0.5u (tendance baisse légère)
   - Résultant: 1u (scénario conservateur) ou 2u (rattrapage post-estival)
   
   → Choix: **2u** comme commande « normale » anticipée
   - C'est dans la plage historique (1-3u)
   - Compense ~2 mois potentiels sans commande
   - Évite stockage excessif si demande réelle = 1u
   - MAPE minimal avec données limitées

CONFIDENCE: MEDIUM (données très éparses, seulement 8 points historiques, peu de régularité)

</details>


<details>
<summary><strong>7. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, pas de cycle hebdomadaire ou mensuel identifiable. Dernière commande: 2025-08-07 (jeudi), avant cela: gap de 1 an. Aucun pattern récurrent observable.
- **Saisonnalité**: weak
- **Tendance**: Stable à ~1.8u, demande de très faible volume avec une seule donnée récente insuffisante pour confirmer une tendance
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE STRUCTURÉE:

1. **CRITIQUE DE LA DONNÉE**: Historique extrêmement fragmenté et peu fiable (7 transactions sur ~2 ans, dont 6 datant de N-1 lointain et 1 seule récente). Impossible d'établir un pattern robuste.

2. **ANALYSE RYTHMIQUE**: 
   - N-1: Commandes sporadiques (06-26, 05-16, 03-18, 01-04, 11-21 jours différents, aucune régularité)
   - Récent (3 mois): Seule donnée le 2025-08-07 (jeudi) | 2u
   - Aucun cycle hebdomadaire, mensuel, ou saisonnier détecté
   - Gap énorme (59 jours) entre dernière commande et date de prédiction

3. **BASELINE & TENDANCE**:
   - Moyenne N-1: (1+2+3+2+1+2)/6 = 1.83u
   - Moyenne N (derniers 3 mois): 2u (1 seul point)
   - Trend observable: STABLE autour de 1.8-2.0u
   - Pas d'outlier détecté (amplitudes comprises entre 1-3u, cohérentes)

4. **SAISONNALITÉ**: 
   - Octobre 2025 vs octobre 2024 (absent de l'historique N-1)
   - Juillet-août 2025 vs juillet-août 2024: 2u en 2025, aucune donnée 2024
   - Impact saisonnier = FAIBLE (données insuffisantes)

5. **EFFET JOUR (Dimanche vs Pattern Historique)**:
   - Historique: essentiellement lun/mer/jeu/mar (jours de travail B2B)
   - Prédiction: dimanche 2025-10-05
   - Probabilité d'une commande dimanche en B2B agroalimentaire = TRÈS BASSE
   - ⚠️ ATTENTION: Si c'est un dimanche festif ou une date de clôture de période, possible rattrapage ?

6. **DÉCISION FINALE**:
   - Baseline = Moyenne pondérée: 70% récent (2u) + 30% N-1 (1.83u) = 1.94u ≈ 2u
   - Pas de signal de hausse/baisse forte
   - Pas d'outlier saisonnier identifiable
   - **PRÉDICTION = 2 unités** (en ligne avec dernière commande observée et moyenne historique)

7. **CONFIANCE = LOW**:
   - Données insuffisantes (N=7 observations en 2 ans)
   - Date de prédiction (dimanche) hors pattern habituel
   - Impossible d'éliminer le bruit = risque de MAPE élevé

</details>


<details>
<summary><strong>8. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Demande très irrégulière sans cycle fixe identifiable. Dernière commande: 2025-07-17 (jeudi), soit ~80 jours avant la date de prédiction (2025-10-05). Pas de pattern hebdomadaire apparent. Historique N-1 montre commandes isolées (septembre, juin, mai, novembre) sans régularité détectable.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -75% : moyennes annuelles décroissantes de N-1 (1,75u) à période récente (1u seule en 3 mois). Très faible activité.
- **Outliers détectés**: 3u, 2u

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE:

1. **PATTERN RYTHMIQUE INEXISTANT**: 
   - Historique extrêmement fragmenté (seulement 5 commandes en ~20 mois)
   - Intervalles erratiques: 88 jours (nov→juin 2024), 41 jours (juin→mai inverse?), 80 jours (jul 2025 → prédiction)
   - Aucun jour de semaine privilégié (mar., mer., jeu., mar., jeu.)
   - Pas de cycle détectable (hebdo, quinze, mensuel)

2. **CONTEXTE PRODUIT PROBLÉMATIQUE**:
   - Article agro B2B (Tartinade bio) avec très faible récurrence
   - Peut indiquer: (a) client très petit volume, (b) produit peu prescrit, (c) données incomplètes, ou (d) client en dormance/test

3. **TENDANCE OBSERVÉE**:
   - N-1 moyenne: (3+1+1+2)/4 = 1,75u
   - Derniers 3 mois: 1u seule
   - Baisse relative -43% → signal faible de décroissance

4. **SAISONNALITÉ FAIBLE**:
   - Dates N-1 très dispersées (mai, juin, septembre, novembre) → pas de saisonnalité automne marquée
   - Pas de justification pour influer fortement la prédiction

5. **DÉCISION FINALE**:
   - Baseline ajustée: 1,2u (moyenne prudente entre 1u récent et 1,75u historique)
   - Arrondi à l'entier inférieur = **1 unité**
   - Cette prédiction repose sur la DERNIÈRE COMMANDE (1u) comme meilleur proxy
   - Confiance BASSE: données insuffisantes pour construire modèle robuste
   - Risque: Possible rattrapage/accumulation non visible (75 jours sans activité peut précéder un gros achat)

RECOMMANDATION OPÉRATIONNELLE: Valider auprès du client si cette dormance est normale ou anormale pour ajuster la prédiction.</reasoning>
</invoke>

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u
- 2025-08-07 13:57:36: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-07 13:57:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-08-07 13:57:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 1u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 3u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u
- 2023-10-19 07:02:37: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 13:57:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 3u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 09:56:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 1u
- 2024-05-16 07:09:48: 1u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (30)

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
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 1.0u (18j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 1.2u (26j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 1.2u (26j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.8u (12j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.6u (26j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: -0.3u (-8j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: 0.4u (23j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.5u (-20j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 2 | Stock prédit: -0.5u (-20j restants) → prédit 2u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: -0.4u (-22j restants) → prédit 1u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 1 | Stock prédit: -0.7u (-37j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-20j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.4u (-25j restants) → prédit 1u mais non commandé |
| [CB001] CB Apple juice 25cl | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 50 | Stock prédit: -0.8u (-113j restants) → prédit 50u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -1.1u (-58j restants) → prédit 1u mais non commandé |


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
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Stock suffisant: 1.5u (56j restants > seuil 30j) |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:11:39.135Z*
