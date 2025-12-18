# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 27,016 input + 10,248 output = 37,264 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.0% | 43 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 13.0% | Score équilibré global |

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
| **MAE** | 18.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (3)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | 112 | 56.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 56u (50.0%)
- 📉 **Erreur Médiane**: 56u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes multiples le samedi 2025-04-12, pattern très rapproché (< 1 minute entre chaque). Cycle potentiellement lié à un processus de rattrapage ou de consolidation. Date de prédiction: dimanche, jour suivant les 5 commandes du samedi.
- **Saisonnalité**: none
- **Tendance**: Pattern atypique: 1 commande de 112u suivie de 4 commandes de 56u (identiques) le même jour. Suggère un rattrapage ou correction avec subdivision. Baseline stable à 56u sur les 4 dernières transactions.
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
ANALYSE CHAIN-OF-THOUGHT:

1️⃣ ANALYSE RYTHMIQUE CRUCIALE:
- Seules 5 commandes disponibles, TOUTES le samedi 2025-04-12 entre 10:31 et 10:32 (< 1 minute)
- La prédiction est demandée pour dimanche 2025-04-13
- **ANOMALIE DÉTECTÉE**: 5 commandes en cascade sur 51 secondes ≠ pattern commercial normal

2️⃣ INTERPRÉTATION DU PHÉNOMÈNE:
- 1ère commande: 112u (quantité distinctive)
- 4 commandes suivantes: 56u (identiques, régulières)
- **Hypothèse dominante**: Première commande = RATTRAPAGE (double dose) + subdivision ensuite
- Ou: 112u est une erreur corrigée par 4 commandes de 56u

3️⃣ SIGNAL POUR DIMANCHE:
- Après un jour de "binge commanding" (5 commandes), le client aura probablement **UN REPOS DIMANCHE**
- Dimanche n'apparaît JAMAIS dans l'historique (5 jours = 5 samedis uniquement)
- Le pattern samedi suggère une commande HEBDOMADAIRE le samedi, pas le dimanche
- **Probabilité de commande dimanche: TRÈS FAIBLE**

4️⃣ GESTION DE L'INCERTITUDE:
- Confiance MEDIUM (données insuffisantes: N-1 absent, pattern sur 1 jour seulement)
- Baseline: 56u (signal le plus stable et répétitif observé = 4 occurrences identiques)
- Ne pas surgonfler "au cas où" → Respect du signal le plus probable
- Dimanche étant hors-cycle, recommander la quantité habituelle ET préparer contingence client

5️⃣ SYNTHÈSE PRÉDICTION:
- **Quantité recommandée: 56u** (continuité du pattern stable)
- **Justification**: C'est la demande "normalisée" du client après rattrapage samedi
- Cette prédiction minimise le MAPE en tant que "expectation value" pour dimanche
- Risque résiduel: Client ne commande pas le dimanche (probabilité > 50%), auquel cas prévoir lundi

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes massives regroupées le samedi (5 commandes en succession rapide, toutes le 2025-04-12)
- **Saisonnalité**: none
- **Tendance**: Stable avec regroupement le samedi - majorité à 56u, avec un pic isolé à 112u
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **PATTERN RYTHMIQUE**: 
   - 5 commandes enregistrées le samedi 2025-04-12 en l'espace de ~1 minute (10:31-10:32)
   - Cela indique un REGROUPEMENT TECHNIQUE: probablement un même achat divisé en plusieurs ordres de ligne ou une consolidation de commandes client
   - La prédiction pour le dimanche 2025-04-13 doit considérer que le samedi a épuisé la demande de cette fin de semaine

2. **ANALYSE DE LA QUANTITÉ**:
   - 4 commandes à 56u (quantité standard/unitaire)
   - 1 commande à 112u (exactement 2×56, confirmant l'unité de base = 56u)
   - Quantité standard détectée: **56 unités**

3. **JOUR DE PRÉDICTION - DIMANCHE**:
   - Demande prédite pour dimanche 2025-04-13 (jour après le samedi massif)
   - Sans historique N-1 pour valider la saisonnalité
   - Pattern suggère une demande concentrée le samedi

4. **BASELINE & TENDANCE**:
   - Baseline théorique: 56u (quantité répétée 4×5)
   - Pas d'évidence de croissance tendancielle (données trop courtes)
   - Pas de saisonnalité confirmable (N-1 absent)

5. **RECOMMANDATION DIMANCHE**:
   - Le dimanche suit immédiatement un jour très actif (samedi)
   - Hypothèse: demande satisfaite le samedi → dimanche = jour de repos ou commande mineure
   - En l'absence de pattern clair pour dimanche, appliquer la BASELINE = **56u**

**CONFIDENCE MEDIUM** justifiée par:
✓ Données cohérentes et régulières (56u comme unité base)
✗ Historique très court (1 jour)
✗ Pas de N-1 pour validation saisonnière
✗ Jour de prédiction (dimanche) sans précédent dans l'historique

STRATÉGIE: Prédire la quantité unitaire standard observée plutôt que de sur-interpréter un jour anormal."

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes répétitives le samedi (3 commandes identiques le 2025-04-12, toutes un samedi)
- **Saisonnalité**: none
- **Tendance**: Stable à 56u - pattern très régulier de demande récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Données disponibles: 3 commandes identiques le samedi 2025-04-12 (56u chacune)
   - Intervalle: Commandes apparemment groupées le même jour à courtes intervalles (matin)
   - Pattern détecté: Demande stabilisée à 56u, commandes régulières le samedi
   - Rupture: La prédiction demandée pour dimanche 2025-04-13 sort du cycle habituel

2. **INTERPRÉTATION DES MULTIPLES COMMANDES SAMEDI**
   - Les 3 commandes du samedi (56u) répétées suggèrent soit:
     * Une demande vraiment stable (56u = baseline confirmée), ou
     * Trois clients similaires, ou
     * Trois passages système le même jour
   - Aucun outlier détecté: pas de pic anormal, pas de promotion identifiée
   - Pas de données N-1 pour analyser la saisonnalité

3. **SYNTHÈSE DÉCISION**
   - Baseline établie: 56u (très régulière, haute répétabilité)
   - Tendance: STABLE - aucune hausse ou baisse progressive observée
   - Facteur jour: Prédiction pour dimanche (jour suivant le cycle) → risque faible d'effet rattrapage immédiat
   - En agroalimentaire B2B, une demande aussi régulière justifie une recommandation à la baseline confirmée

4. **CONFIDENCE MÉDIUM JUSTIFIÉE**
   - ✓ Pattern très clair (3x56u identiques) → robuste
   - ✗ Historique très court (3 commandes seulement) → données insuffisantes pour total certitude
   - ✗ Pas de N-1 → impossibilité de valider la saisonnalité
   - ✗ Jour hors cycle (dimanche) → légère incertitude

PRÉDICTION: **56 unités** - Maintenir la baseline stable observée, sans sur-anticipation.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:25: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: medium)
**📊 Quantité Réelle**: 112u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:05: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: medium)
**📊 Quantité Réelle**: 56u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u
- 2025-04-12 10:04:36: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: medium)
**📊 Quantité Réelle**: 56u

</details>




---

## False Positives (40)

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
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: NaNu (NaNj restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: NaNu (NaNj restants) → prédit 72u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [SOWA01] SOWA citron menthe 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [KLAK01] KLAK Maté 330ml | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 18 | Stock prédit: NaNu (NaNj restants) → prédit 18u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 26 | Stock prédit: NaNu (NaNj restants) → prédit 26u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 32 | Stock prédit: NaNu (NaNj restants) → prédit 32u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 18 | Stock prédit: NaNu (NaNj restants) → prédit 18u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 17 | Stock prédit: NaNu (NaNj restants) → prédit 17u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 23 | Stock prédit: NaNu (NaNj restants) → prédit 23u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 84 | Stock prédit: NaNu (NaNj restants) → prédit 84u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: NaNu (NaNj restants) → prédit 64u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-18T10:13:58.765Z*
