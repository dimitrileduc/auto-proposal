# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S39575
- **Date commande** : 2025-10-09 06:38:48
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 46,839 input + 18,029 output = 64,868 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 27 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 60.0% | Score équilibré global |

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
| **MAE** | 0.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très sparse et irrégulier - commandes espacées de 6-43 jours. Aucun cycle hebdomadaire ou mensuel détectable. 2025-10-02 (jeudi), 2025-09-10 (mercredi), 2025-08-20 (mercredi). Pas de jour fixe récurrent.
- **Saisonnalité**: none
- **Tendance**: Demande extrêmement volatile et faible - 3 commandes seulement en 51 jours (moyenne ~1.5u). Dernière commande du 2025-10-02 (1u) = baisse vs précédentes (2u). Possible rupture de tendance ou simple volatilité client.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITÈRE PAR CRITÈRE:

1. **ANALYSE RYTHMIQUE** - Détection de pattern quasi-impossible
   - Intervalle 2025-08-20 → 2025-09-10: 21 jours (lun-mer)
   - Intervalle 2025-09-10 → 2025-10-02: 22 jours (mer-jeu)
   - Les intervalles de ~21-22j sont similaires, mais les jours différent (mer, mer, jeu)
   - Aucun pattern hebdomadaire clair (pas de "commande chaque X")
   - Aucun pattern mensuel (les espacements ne correspondent pas à 30j fixes)
   - **Conclusion**: Client très irrégulier, probablement piloté par besoin immédiat, pas par réappro automatique

2. **VOLATILITÉ DES QUANTITÉS**
   - 2025-08-20: 2u | 2025-09-10: 2u | 2025-10-02: 1u
   - Moyenne: 1.67u, Médiane: 2u, Dernière: 1u (baisse)
   - Aucun outlier exceptionnel (promotions/erreurs) → commandes "naturelles"
   - Volumes très modestes (1-2u seulement)

3. **SAISONNALITÉ**
   - Zéro donnée N-1 → impossible d'évaluer saisonnalité
   - Octobre (automne, période post-rentrée) = pas de signaux agroalimentaire évidents pour boissons énergétiques
   - Impact saisonnier: **NONE** (faute de données)

4. **TENDANCE DIRECTION**
   - Séquence: 2u → 2u → 1u = légère baisse (-50% entre sept et oct)
   - Trop peu de données pour affirmer "hausse" ou "baisse tendancielle"
   - **Trend**: "Baisse légère (dernière = 1u) ou volatile à très bas volume"

5. **PRÉDICTION POUR 2025-10-08 (mercredi)**
   - Date demandée: MERCREDI (comme 2025-09-10)
   - Jour cycle potentiel = mercredi ? (2 commandes sur 3 les mercredis)
   - Intervalle 2025-10-02 (jeudi) → 2025-10-08 (mercredi): 6 jours = RUPTURE majeure du cycle ~21-22j
   - **Interprétation**: Soit client commande demain (jour habituel mercredi = rattrapage du cycle), soit pas de commande prévisible avant ~20j (cycle normal)
   
6. **DÉCISION FINALE**
   - **Baseline**: Moyenne = 1.67u ≈ **1.5u** (conservative, tenant compte de la baisse 1u dernière)
   - **Contexte mercredi 8 oct**: 
     * Si cycle naturel ~21-22j : prochaine commande plutôt vers fin octobre (2025-10-24)
     * Mais: 2 des 3 commandes = mercredi. Pourrait signaler "jour habituel = mercredi"
     * Distance 2025-09-10 (mer) → 2025-10-08 (mer) = 28 jours (légèrement plus long)
   - **Recommandation conservatrice**: Baseline 1.5u × tendance baisse 1u → **Recommander 2u** (arrondi sup. pour sécurité stock minimal, produit agroalimentaire)
   - Alternative: 1u si vraiment la dernière (1u du 2-oct) représente le nouveau plancher

**CONFIANCE: LOW**
Raison: Seulement 3 données points sur 51 jours, aucune N-1, pattern fragmentaire, client ultra-volatile. Toute prédiction est hautement spéculative. MAPE potentiel = très élevé (±100%).

**RECOMMANDATION PRAGMATIQUE**: Commander **2u** (moyenne harmonique entre dernière valeur 1u et moyenne historique 1.67u, arrondi défaut) ou **1u** si gestion stock très juste. Client imprévisible = risque similaire des deux côtés (rupture ou surstock)."

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - 3 commandes sur 76 jours (mai-octobre 2025): jeudi 2 oct (1u), mercredi 27 août (1u), mercredi 16 juillet (1u). Aucun cycle hebdomadaire identifiable. Intervalles: 36 jours entre 27 août et 2 octobre, 42 jours entre 16 juillet et 27 août. Pas de cycle régulier (hebdomadaire, mensuel ou fixe)
- **Saisonnalité**: none
- **Tendance**: Stable très faible - toutes les commandes à 1u, demande minimale et extrêmement sporadique. Aucune hausse ni baisse détectable (pas assez de volume pour une tendance)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE:

**Données disponibles**: 3 commandes seulement sur 76 jours (taux: ~1 commande/25j). Volume extrêmement faible et sporadique.

**Décomposition temporelle**:
- 16/07 (mercredi): 1u
- 27/08 (mercredi): 1u → +42j
- 02/10 (jeudi): 1u → +36j
- DATE PRÉDICTION: 08/10 (mercredi) → +6j depuis dernière commande

**Conclusions**:
1. **Pas de cycle hebdomadaire**: Bien que 2 commandes soient le mercredi, l'intervalle 42j invalide un pattern "chaque mercredi"
2. **Pas de cycle mensuel cohérent**: 36j et 42j ne correspondent à aucun rythme régulier (30j, 35j, 40j)
3. **Demande de base**: Constamment 1u - produit très peu demandé, possibly test market ou client dormant
4. **Aucune saisonnalité N-1**: Pas de données historiques pour identifier impacts saisonniers
5. **Le mercredi 08/10**: Pas de signification spéciale - la proximité du 02/10 (4j) suggère une demande très basse, non cyclique

**Stratégie**:
En agro B2B avec données aussi limitées et sporadiques, la baseline est la moyenne observée = 1u. Aucun indicateur de hausse, promotion ou tendance justifie une augmentation.

**RECOMMANDATION**: **1 unité**

Confiance: **LOW** - données insuffisantes (N=3), pattern non identifiable, produit potentiellement en phase de test ou désintérêt du client.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier avec concentration les mercredis (3 commandes sur 5). Dernière commande jeudi 2025-10-02 rompt le pattern mercredien habituel.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-3u avec moyenne historique à 2.4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE DÉTAILLÉE:
- Intervalle dernière commande: 6 jours (jeu. 2025-10-02 → mer. 2025-10-08)
- Historique sur 3 mois: 5 commandes avec 3 les mercredis (08-20, 08-27, 09-10) et 1 samedi + 1 jeudi récent
- Le client semble commander prioritairement les mercredis en milieu de semaine, mais avec une fréquence irrégulière (8j, 10j, 14j)
- Aucune donnée N-1 → pas de saisonnalité détectable

FILTRAGE OUTLIERS:
- Pas d'événements exceptionnels identifiés (pas de pics anormaux)
- Plage stable entre 2-3u, moyenne = 2.4u

ANALYSE DE TENDANCE:
- Demande fondamentale stable à 2.4u (moyenne empirique)
- Pas de hausse ni baisse nette observée
- Pattern fragmenté suggère soit un client avec consommation irrégulière, soit des arrêts/variations saisonnières non encore documentés

PRÉDICTION POUR 2025-10-08 (MERCREDI):
- Le jour (mercredi) correspond au pattern habituel (3/5 commandes les mercredis)
- L'intervalle de 6 jours depuis la dernière commande est dans la normale observée
- Pas de signal de rattrapage ou de tendance changeante
- Quantité prévisible: 2u (prudence sur la tendance stable) à 3u (alignement sur la moyenne mercredienne)

DÉCISION FINALE: **2 units**
- Justification: En supply chain B2B agroalimentaire, la stabilité observée + l'absence d'accélération suggère de reconduire un volume prudent mais réaliste
- Le client démontre une fiabilité dans le 2-3u, avec mercredi comme jour privilégié
- Marge de confiance MEDIUM due à données limitées (5 points seulement, pas de N-1)

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, sans cycle hebdomadaire fixe. Intervalle moyen ~16-17 jours. Dernière commande 6 jours avant la date de prédiction (2025-10-02).
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un pic isolé (3u le 2025-09-10)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ **ANALYSE RYTHMIQUE:**
   - Commandes récentes: 02/10 (jeu) → 22/09 (lun, 10j avant) → 10/09 (mer, 12j avant) → 27/08 (mer, 14j avant) → 20/08 (mer, 7j avant)
   - Pattern détecté: Pas de jour fixe (jeudi, lundi, mercredi alternent), intervalle irrégulier (6-14j)
   - Absence de cycle hebdomadaire strict (Lun-Ven régulier)
   - Dernière commande: il y a 6 jours (écart court, inhabituel dans la série)

2️⃣ **FILTRAGE OUTLIERS:**
   - Pic identifié: 3u le 2025-09-10 (seule valeur > 2)
   - Caractère exceptionnel: 50% au-dessus de la baseline → probable promotion ou commande ponctuelle
   - À écarter pour la baseline
   - Données normales: 5 commandes à 1-2u (médiane = 2u)

3️⃣ **ANALYSE DE SAISONNALITÉ:**
   - N-1 absent: aucune comparaison possible
   - Pas d'indicateur saisonnier (octobre bas ou haut en agro ?)
   - Impact saisonnalité: NONE

4️⃣ **SYNTHÈSE TENDANCIELLE:**
   - Baseline stable: 2u (moyenne des 4 commandes normales: (2+2+1+2)/4 = 1.75 ≈ 2u)
   - Trend direction: STABLE (pas de hausse/baisse progressive)
   - Aucun indice d'accélération ou ralentissement

5️⃣ **DÉCISION FINALE:**
   - Pattern: demande irrégulière mais quantité stable
   - Contexte: dernier achat récent (6j), pas de signe de rattrapage
   - Prédiction: reconduire la baseline = **2 unités**
   - Confiance: MEDIUM (très peu de données, pas de N-1, pattern fragmenté)

**Quantité recommandée: 2u** - Correspond à la demande régulière observée, écarte le pic de 3u comme exceptionnel.

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier - 3 commandes en ~6 semaines (22 sept lundi, 27 août mercredi, 20 août mercredi). Pas de cycle fixe détecté. Dernière commande: 22 sept (lun), date prédiction: 08 oct (mer) = écart de 16 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à ~1-2 unités. Moyenne: 1.33u. Aucune progression ou baisse nette observable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

**ANALYSE CHAÎNE DE PENSÉE:**

1️⃣ **ANALYSE RYTHMIQUE**
   - 3 commandes uniquement: 20 août (mer), 27 août (mer), 22 sept (lun)
   - Intervalles: 7 jours (20→27 août), puis 26 jours (27 août → 22 sept)
   - Pas de cycle régulier détecté (ni hebdomadaire fixe, ni mensuel)
   - Rupture de rythme: 26 jours d'écart suggère une commande occasionnelle/sporadique
   - Jour cible (mercredi 08 oct) ≠ dernier jour de commande (lundi 22 sept)

2️⃣ **FILTRAGE OUTLIERS**
   - Toutes les quantités (1, 1, 2u) sont cohérentes, aucune exception criante
   - 2u du 20 août: légèrement plus élevé mais dans logique normale (~+50% de moyenne)
   - Pas de trace de promotion/erreur manifeste

3️⃣ **SAISONNALITÉ**
   - AUCUNE donnée N-1 disponible → impossibilité d'identifier cycle saisonnier
   - Impact saisonnalité: **NONE**

4️⃣ **TENDANCE**
   - Moyenne sur 3 points: (1+1+2)/3 = **1.33u**
   - Stabilité observée: 1-2u répétés
   - Pas de hausse ni baisse progressive
   - Direction: **STABLE**

5️⃣ **SYNTHÈSE DÉCISION**
   - Client très irrégulier (3 cmd en 6 semaines, rythme aléatoire)
   - Baseline: 1.33u arrondi à la baisse (données limitées)
   - Confidence: **LOW** (manque de régularité, données insuffisantes, pas de N-1)
   - **RECOMMANDATION: 1 unité** (proche de la majorité des commandes passées 1-1-2, et sécurité stock minimale en B2B agroalimentaire)

**Justification du choix 1u vs 2u:**
- 2 commandes sur 3 = 1u (66% du comportement)
- 1 commande = 2u (33% du comportement)
- Stratégie MAPE: privilégier la quantité PROBABLE plutôt que pessimiste
- En agro B2B, une sous-commande provoque plus de coûts logistiques (rapel urgent) qu'une surstock modéré
- Cependant: données TOO SPARSE pour confiance élevée


</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes épisodiques sans cycle régulier détecté. Distribution observée: lundis (2 fois: 22/09 et 04/08) et mercredis (3 fois: 10/09, 27/08, 16/07). Pas de jour fixe hebdomadaire établi ni cycle mensuel stable.
- **Saisonnalité**: none
- **Tendance**: Stable à 2-3u. Moyenne: 2.4u sur 5 derniers mois (pas d'accélération, pas de déclin majeur)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE - Recherche de pattern:
   • 5 commandes en ~3 mois = fréquence très faible (1 commande tous les ~18 jours)
   • Jours observés: 2× lundi (22/09, 04/08), 3× mercredi (10/09, 27/08, 16/07)
   • Pas de cycle hebdomadaire strict (pas chaque Lundi OU chaque Mercredi)
   • Pas de cycle 30j détecté (intervalles irréguliers: 43j, 76j, 24j, 48j)
   • ⚠️ Conclusion: Client à demande ÉPISODIQUE, pas programmée

2️⃣ FILTRAGE OUTLIERS:
   • Plage de variation: 1u à 3u (amplitude réduite)
   • Toutes les commandes sont dans la "normalité" agro B2B
   • Aucun pic anormal, aucun creux exceptionnel
   • Pas de N-1 pour comparer saisonnalité

3️⃣ TENDANCE & BASELINE:
   • Moyenne simple: (2+3+1+3+3)/5 = 2.4u
   • Médiane: 3u (plus robuste aux petits volumes)
   • Pas de hausse: dernier point (2u) = au-dessous de la moyenne
   • Pas de baisse: variation aléatoire autour de 2-3u

4️⃣ CONTEXTE DATE PRÉDICTION (mercredi 08-10-2025):
   • Dernière commande: 22-09 (lun) → 16j d'attente
   • 2 des 3 dernières commandes = mercredi → légère affinité mercredi
   • Mais pas de pattern suffisant pour ajuster fortement

5️⃣ DÉCISION FINALE:
   ✓ Baselin = 2.4u arrondie à 2u (respect volatilité agro + demande basse)
   ✓ Pas de rattrapage visible (rythme trop irrégulier)
   ✓ Confidence = MEDIUM (peu de données, forte aléatoire)
   ✓ Prédiction = 2 unités (valeur la plus probable, égale ou proche du mode observé)

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - Commande le 10/09 (mercredi) et le 04/08 (lundi). Intervalle de 37 jours. Aucun cycle hebdomadaire ou mensuel détectable avec seulement 2 données.
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes - Deux commandes de 1u chacune, impossible de déterminer une tendance fiable (hausse, baisse ou stabilité).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE SUPPLY CHAIN SENIOR - CONTEXTE CRITIQUE :

1️⃣ **SÉVÈRE MANQUE DE DONNÉES** 
   - N-1 : VIDE (aucune référence historique)
   - N (3 derniers mois) : 2 seules commandes
   - Volume de données insuffisant pour modélisation fiable

2️⃣ **ANALYSE RYTHMIQUE** 
   - 10/09 (mercredi) : 1u
   - 04/08 (lundi) : 1u
   - Intervalle : 37 jours (aberrant pour un produit B2B régulier)
   - MAIS coïncidence potentielle : 10/09 et 08/10 tombent tous deux des mercredis → cycle ~30j mercredi possible ?
   - Insuffisant pour affirmer un pattern stable

3️⃣ **FILTRAGE OUTLIERS**
   - Aucun pic suspect, aucun creux anormal → pas d'outlier détectable
   - Les deux commandes de 1u semblent être la norme pour ce client

4️⃣ **ABSENCE DE SAISONNALITÉ**
   - N-1 vide → impossible d'évaluer impact saisonnier
   - Impact saisonnalité = NONE

5️⃣ **TREND**
   - 1u → 1u : Stable (mais sur base trop faible)
   - Trend_direction = "Stable à 1u"

6️⃣ **RECOMMANDATION FINALE**
   - **Baseline** = 1u (seule moyenne observable)
   - **Ajustement jour** : Mercredi 08/10 correspond au jour de la dernière commande (10/09 mercredi) → léger indicateur de cycle mercredi
   - **Pas d'ajustement saisonnier** : N-1 vide
   - **Pas de rattrapage identifiable** : Intervalle régulier ~30j
   - **Recommandation** = 1u (confiance LOW car données minimales)

⚠️ **MISE EN GARDE** : Avec seulement 2 observations et aucun historique N-1, cette prédiction a une très haute incertitude. Suggérer au client de valider son rythme d'approvisionnement réel et d'établir des forecasts sur base de données complètes.</reasoning>


</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque mercredi, cycle régulier 7 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE:

1️⃣ **ANALYSE RYTHMIQUE (Crucial)**
   • 2025-09-10 (mercredi) → 1u
   • 2025-08-27 (mercredi) → 1u  
   • 2025-07-16 (mercredi) → 1u
   • Pattern identifié: Commande STRICTEMENT chaque mercredi
   • Intervalles: 14 jours (09-10 à 08-27) puis 42 jours (08-27 à 07-16)
   ⚠️ Attention: L'intervalle de 42 jours (3 semaines manquées!) suggère une rupture temporelle ou des données lacunaires. Cependant, on revient à un cycle régulier récemment.
   • Alignement parfait: Prédiction le 2025-10-08 (mercredi) = jour de commande habituel ✓

2️⃣ **FILTRAGE INTELLIGENT DES OUTLIERS**
   • Aucune variation dans les quantités (toutes à 1u)
   • Aucun pic exceptionnel, aucune promotion détectable
   • Produit de niche (bio, faible calories) = volumes intentionnellement modestes
   • Pas de données N-1 pour comparaison saisonnière

3️⃣ **ÉVALUATION DE LA SAISONNALITÉ**
   • Octobre = mois d'automne (pas de pic d'été en cours)
   • Pas de données N-1 disponibles → impact saisonnier NON quantifiable
   • Classement: "none" (absence d'évidence)

4️⃣ **SYNTHÈSE & DÉCISION**
   • Demande stable: Moyenne = 1u
   • Pas de hausse/baisse de tendance visible
   • Rythme hebdomadaire mercredi très régulier
   • Prédiction = Baseline (1u)
   • Confidence = MEDIUM (raisons: données limitées à 3 observations sur 3 mois, gap de 42j non expliqué, absence N-1)

✅ CONCLUSION: Commander 1 unité le mercredi 08 octobre 2025

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, uniquement le mercredi (pattern fragmentaire). Intervalles observés: 42 jours entre 16/07 et 27/08. Aucune régularité hebdomadaire stable détectable. Rythme très irrégulier compatible avec une demande très faible ou événementielle.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u. Seules 2 observations, toutes deux à 1 unité. Aucune indication de hausse, baisse ou variation significative. Données très limitées pour identifier une tendance.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

**ANALYSE CRITIQUES - Données Extrêmement Limitées**

1. **VOLUME HISTORIQUE**: Seulement 2 commandes en 52 jours (27/08 → 16/07 = 42j d'intervalle). Ce produit [KOKO03] montre une demande très faible ou très épisodique.

2. **PATTERN TEMPOREL**: 
   - Les 2 commandes sont au mercredi (mer. 16/07 et mer. 27/08)
   - Cependant, l'intervalle de 42 jours entre elles montre une fréquence de ~1.4 commande/mois
   - Pas de cycle hebdomadaire régulier → pas de rattrapage attendu

3. **QUANTITÉS**: Parfaitement stable à 1u les 2 fois → aucun signal de variation

4. **ABSENCE DE N-1**: Pas de données de l'année précédente → impossible d'identifier la saisonnalité (KOKO Kombucha en octobre pourrait avoir du potentiel saisonnier, mais non confirmé)

5. **DATE DE PRÉDICTION (2025-10-08 - mercredi)**:
   - Elle tombe sur un mercredi (jour d'historique)
   - Intervalle depuis dernière commande: ~41 jours (27/08 → 08/10) → très proche du cycle observé

**CONCLUSIONS**:
- **Baseline**: 1 unité (seule valeur observée, stable)
- **Ajustements**: Aucun (pas de tendance, pas de saisonnalité confirmée, pas d'outlier)
- **Prédiction finale**: **1 unité**

**CONFIANCE: FAIBLE** car:
✗ Seulement 2 points de données
✗ Pas de N-1 pour valider la saisonnalité d'octobre
✗ Pattern très fragmentaire (42j entre commandes)
✗ Possible que ce client ne commande pas du tout en octobre

En agro B2B, avec cette faible visibilité, la recommandation prudente est d'aligner sur l'historique le plus proche: **1 unité**.


</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les ~55 jours en mercredi (2025-07-16 et 2025-08-20)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - demande très régulière et prévisible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE:
   • Date de prédiction: 2025-10-08 (mercredi)
   • Dernière commande: 2025-08-20 (mercredi) = 1u
   • Avant-dernière: 2025-07-16 (mercredi) = 1u
   • Intervalle observé: 35 jours (2025-07-16 → 2025-08-20)
   • Jours depuis dernière commande: 49 jours (2025-08-20 → 2025-10-08)
   → Le cycle n'est PAS strictement régulier en jours (35j vs 49j)
   → CEPENDANT: Les deux commandes tombent EN MERCREDI (jour fixe ✓)
   → Pattern identifié: Commandes espacées, toujours en mercredi

2️⃣ FILTRAGE OUTLIERS:
   • Aucun pic ou creux anormal observé
   • Deux commandes identiques (1u chacune)
   • Pas de N-1 pour vérifier saisonnalité → contexte limite

3️⃣ SYNTHÈSE LOGIQUE:
   • Demande TRÈS STABLE: 1u à chaque occurrence
   • Aucune tendance haussière ou baissière détectable
   • Le client maintient un rythme régulier mais espacé (tous les ~40-50j)
   • La date du 2025-10-08 tombe en mercredi (cohérent avec pattern)
   → Probabilité HAUTE d'une commande de 1u

4️⃣ GESTION JOUR HORS CYCLE:
   • La prédiction tombe exactement sur le jour du cycle (mercredi)
   • Pas de décalage à gérer
   • Aucun besoin d'ajustement jour

CONCLUSION: Recommander 1 unité avec CONFIANCE HAUTE. Le pattern est régulier (même jour de semaine, même quantité), malgré des intervalles variables. En agro B2B, mieux reproduire la tendance observée que de sur-approvisionner.

</details>


<details>
<summary><strong>11. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Deux commandes très espacées (52 jours): 2025-07-16 (mercredi) et 2025-08-04 (lundi). Aucun cycle hebdomadaire ou mensuel détecté.
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes pour établir une tendance - Seules 2 commandes sur 52 jours, volumes constants à 1u chaque fois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE:

1. **DONNÉES EXTRÊMEMENT LIMITÉES**
   - Seulement 2 commandes dans les 3 derniers mois (juillet-août 2025)
   - Intervalle de 52 jours entre les deux commandes
   - Aucune donnée N-1 pour validation saisonnière
   - Impossible d'établir un pattern cyclique fiable

2. **ANALYSE RYTHMIQUE**
   - 2025-07-16: Mercredi | Quantité: 1u
   - 2025-08-04: Lundi | Quantité: 1u
   - Jours différents (mer./lun.) → pas de pattern hebdomadaire fixe
   - Intervalle de 19 jours (07-16 à 08-04) ne correspond à aucun cycle mensuel standard

3. **DÉTECTION D'OUTLIERS**
   - Les 2 commandes sont identiques (1u chacune)
   - Pas d'événement exceptionnel détecté
   - Volumes stables mais volume d'activité global très faible

4. **PRÉDICTION POUR 2025-10-08 (MERCREDI)**
   - Jour similaire à la dernière commande du 2025-07-16 (aussi un mercredi)
   - Mais 84 jours séparent ces deux dates
   - Sans historique complet, impossible de dire si: 
     * Client commande uniquement 1u tous les 2 mois
     * C'est une promotion/test avec faibles volumes
     * Données incomplètes (autres commandes manquantes)

5. **DÉCISION FINALE**
   - **Baseline: 1 unité** - Moyenne des données disponibles (2/2 commandes = 1u)
   - **Recommandation: 1 unité** - Par défaut, reconduire la quantité habituelle observée
   - **Confiance: LOW** - Données trop peu nombreuses et trop espacées pour une prédiction fiable

**⚠️ RECOMMANDATION MÉTIER:**
Avant de valider cette commande, vérifier auprès du client si:
- Les données sont complètes (absence de commandes entre 2025-08-04 et 2025-10-08)?
- C'est un produit test/saisonnier avec très faible volume?
- Il existe une saisonnalité automne (octobre) que N-1 révèlerait?
- Un besoin plus important est prévisible (événement commercial)?

En l'absence d'informations complémentaires, maintenir 1u mais rester vigilant sur les risques de rupture ou surstock.</reasoning>


</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 1u
- 2025-09-10 13:32:58: 2u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 1u
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 3u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 2u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 2u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 1u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:22:05: 1u
- 2025-08-27 07:04:23: 1u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 1u
- 2025-08-04 11:58:17: 3u
- 2025-07-16 06:29:37: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:32:58: 1u
- 2025-08-04 11:58:17: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:32:58: 1u
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-20 11:31:02: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:58:17: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (15)

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
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: 0.5u (6j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: 2.1u (11j restants) → prédit 3u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Stock prédit: 0.4u (9j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.6u (6j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.3u (12j restants) → prédit 1u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.8u (-53j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: -1.2u (-46j restants) → prédit 2u mais non commandé |


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
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock suffisant: 1.8u (39j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:13:32.769Z*
