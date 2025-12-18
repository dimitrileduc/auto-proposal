# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 30
- **Tokens**: 45,134 input + 73,505 output = 118,639 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 33 produits prédits, 18 corrects |
| **Rappel** | 90.0% | 20 produits réels, 18 détectés |
| **F1-Score** | 67.9% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 27.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (28 jours) - Lundi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. **Analyse rythmique** : 2 commandes sur 3 mois, intervalle exact de 28 jours (2025-08-25 → 2025-09-22), toujours un lundi. Pattern mensuel identifié, non hebdomadaire. 2. **Positionnement** : Date de prédiction (2025-10-06) est un lundi intermédiaire entre deux commandes mensuelles. Ce n'est pas un jour de commande attendu. 3. **Règle hors-cycle** : Comme demandé, je ne mets pas 0. Je dois prédire la quantité de la **prochaine** commande probable. 4. **Décision** : Les deux dernières commandes sont identiques (1u) avec un cycle stable de 28j. Aucun outlier détecté. La prochaine commande attendue serait 2025-10-20 pour 1u. Pour 2025-10-06 (jour hors-cycle), la quantité la plus probable reste **1u** (volume de référence du client).

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Toutes les 4 semaines (lun.)
- **Saisonnalité**: none
- **Tendance**: decreasing_trend
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Synthèse & Décision**
1. **Pattern** : Cycle mensuel (28j) le lundi. 2025-10-06 est un lundi hors-cycle (14j depuis dernière commande).
2. **Règle spéciale** : Comme demandé, pas de prévision 0. Je prédits la quantité de la **prochaine commande réelle** (lundi 20 octobre).
3. **Données limitées** : Seulement 2 points. La règle d'or en B2B est privilégier la **dernière valeur** quand elle reflète une tendance claire.
4. **Tendance** : Baisse radicale 2→1 (-50%) entre les 2 commandes. Pas d'outliers, c'est une rupture de tendance nette.
5. **Stratégie MAPE-minimisation** : Prédire 1 unité (dernière valeur) réduit l'erreur quadratique plus que toute moyenne, car si le pattern continue, la prochaine commande sera 1u. Prédire 2u ou 1.5u doublerait l'erreur si le client confirme son niveau actuel.
6. **Contexte B2B** : Des volumes de 1-2u suggèrent un test produit. Un client B2B réduit généralement progressivement avant arrêt complet. Le niveau bas de 1u est donc le nouveau niveau de consommation réelle jusqu'à preuve contraire.

**Quantité recommandée** : **1 unité** pour la prochaine commande mensuelle (assignée au 2025-10-06 comme proxy dans le modèle).

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular - 14 to 21 day intervals
- **Saisonnalité**: none
- **Tendance**: stable at 1 unit
- **Outliers détectés**: -50u

**🧠 Raisonnement LLM:**
Le rythme est irrégulier mais stable à 1 unité. Date de prédiction hors intervalle habituel - la prochaine commande probable sera également de 1 unité. Pas de saisonnalité détectable.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel (14 jours)
- **Saisonnalité**: none
- **Tendance**: stable_with_variations
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le pattern révèle une cadence bimensuelle (14 jours) le lundi depuis fin août. La commande du 14/07 (8u) est exclue comme outlier (intervalle de 28j, quantité anormale). Sur les 4 commandes récentes (intervalle 14j), les volumes oscillent entre 3-6u avec une médiane de 4 unités. La date de prédiction (2025-10-06) correspond exactement au prochain lundi du cycle. Privilégier la médiane (4u) sur la simple dernière valeur (3u) minimise le MAPE avec des données limitées et une tendance stable oscillante. Les commandes B2B agroalimentaire privilégient la régularité ; 4u représente le centre de gravité des volumes récents sans surpondérer l'anomalie de juillet ni la valeur basse isolée.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Majoritairement bi-mensuel (14j) avec stabilité lundi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le client commande régulièrement le lundi toutes les 2 semaines. Les 4 des 5 dernières commandes sont 3u (dont les 2 plus récentes), avec un pic isolé de 6u le 2025-08-25 probablement lié à un événement ponctuel. La date 2025-10-06 respecte le cycle bi-mensuel (14j après le 2025-09-22). En agroalimentaire B2B, la stabilité de commande est forte une fois le pattern établi. La quantité la plus probable est donc 3 unités, correspondant à la fois à la dernière commande et à la valeur modale récurrente.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel (14 jours) stable sur les 4 dernières commandes
- **Saisonnalité**: none
- **Tendance**: stable_volatile
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données très limitées mais pattern rythmique identifié. Toutes les commandes le lundi avec intervalle majoritaire de 14 jours depuis fin août. Variabilité élevée (1-5u) sans tendance claire. Valeur médiane = 3u, dernière commande = 3u.

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 14D
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
<analysis>

**1. ANALYSE RYTHMIQUE (Déterminant)**
- **Jour commande**: Toutes les commandes historiques ont lieu un **lundi** → Le 2025-10-06 est bien le **jour habituel** de commande.
- **Intervalles calculés**:
  - 2025-07-14 → 2025-08-11: **28 jours** (4 semaines)
  - 2025-08-11 → 2025-08-25: **14 jours** (2 semaines) 
  - 2025-08-25 → 2025-09-08: **14 jours** (2 semaines)
  - 2025-09-08 → 2025-09-22: **14 jours** (2 semaines)
- **Pattern identifié**: Changement de rythmiq fin août (passage de 28j à 14j). Le pattern **récent et stable est 14 jours**.
- **Prochaine commande**: Le 2025-10-06 tombe exactement **14 jours après le 2025-09-22** → C'est le **moment attendu** pour la prochaine commande.

**2. FILTRAGE INTELLIGENT DES OUTLIERS**
- **Quantités**: [3, 2, 5, 3, 3]
- **Distribution**: 3u (3×), 2u (1×), 5u (1×)
- **Analyse du 5u (25/08)**: Pic de +66% vs moyenne, mais **justifié contextuellement** (reprise post-vacances, reconstitution stock). **Non considéré comme outlier à écarter** car plausible en B2B, mais **ponctuel**.
- **Les 3 dernières commandes**: 5u → 2u → 3u montrent un **ajustement rapide** vers le niveau de référence.

**3. SYNTHÈSE & DÉCISION**
- **Données limitées** (5 points, **pas de N-1**) → **Privilégier la tendance récente** et la valeur la plus fréquente.
- **Niveau de référence**: **3u** apparaît **3 fois sur 5**, c'est la **médiane**, la **mode**, et la **dernière valeur observée**.
- **Contexte agroalimentaire B2B**: Les commandes sont **régul par produit stable**. La volatilité récente (5u-2u) s'interprète comme un **ajustement conjonctural** post-été, pas un changement de structure.
- **Stratégie MAPE-minimisation**: Pour des petites quantités unitaires, **l'erreur de 1u est catastrophique** (MAPE 33-50%). La **valeur la plus probable** est donc celle qui maximise la **précision statistique** et le **calage au cycle le plus récent**.

**Conclusion**: Le pattern 14j est stabilisé. Le niveau de commande est **revenu à sa norme 3u**. Le 5u était temporaire, le 2u un ajustement. **La prochaine commande sera la valeur centrale du cycle actuel**.

</analysis>

<recommended_quantity>
3
</recommended_quantity>

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes régulières tous les lundis avec intervalle principal de 14 jours (bi-mensuel hebdomadaire) depuis fin août
- **Saisonnalité**: none
- **Tendance**: Stabilisation à la baisse après un pic estival (5u) vers un niveau bas autour de 2-3 unités
- **Outliers détectés**: 5u, 1u

**🧠 Raisonnement LLM:**
Le client commande exclusivement le lundi avec un rythme bi-mensuel stable depuis 7 semaines. Les 3 dernières commandes (3u,2u,3u) montrent une stabilisation claire autour de 2-3 unités, tandis que les commandes de 5u (14 juillet) et 1u (11 août) sont des outliers temporels non représentatifs de la demande récurrente. La prochaine commande du 6 octobre correspond exactement au jour et au cycle habituels. En Agro B2B, privilégier la tendance stable récente sur les anomalies ponctuelles maximise la précision.

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bi-hebdomadaire (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u (3 dernières commandes identiques)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le client commande de manière bi-hebdomadaire chaque lundi avec une quantité stable de 2u depuis les 3 derniers cycles (2025-08-25, 2025-09-08, 2025-09-22). La date de prédiction 2025-10-06 correspond exactement au prochain lundi du cycle (14j après la dernière commande). La commande de 3u du 2025-07-14 est considérée comme un outlier historique non répété. Aucune donnée N-1 disponible. La quantité la plus probable est donc 2u, maintenant la continuité du pattern établi.

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: The data shows a shift from irregular Tuesday orders in 2024 to a bi-weekly Monday pattern since July 2025. Last 3 orders occurred on Mondays at 14-day intervals.
- **Saisonnalité**: none
- **Tendance**: declining
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client a établi un nouveau rythme bi-mensuel (tous les 14 jours) le lundi depuis juillet 2025. Les 3 dernières commandes consécutives sont de 1u (25/08, 08/09, 22/09). La date de prédiction (06/10) correspond exactement au prochain lundi du cycle. Les données N-1 (2024) montrent des volumes plus élevés mais un pattern obsolète (mardi). Le volume le plus probable est donc la valeur dominante et la plus récente : 1 unité. Aucun outlier ne perturbe cette tendance stable.

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle/Bimensuelle
- **Saisonnalité**: none
- **Tendance**: stable to slightly_increasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. **ANALYSE RYTHMIQUE** : Le client a migré d'un pattern irrégulier (N-1) à un cycle ultra-régulier : commande le lundi, 1 unité, intervalle 14-28j. Les 4 dernières commandes sont identiques (1u le lundi). La date de prédiction est un lundi cohérent avec ce nouveau cycle. 2. **OUTLIERS** : Aucun outlier dans la période récente (valeur constante). Les volumes N-1 (2-4u) sont désuets et ne reflètent plus le comportement actuel. 3. **TENDANCE** : Stabilité parfaite à 1u depuis juillet 2025. Le dernier intervalle de 14j (22 sept → 6 oct) confirme le rythme bi-mensuel. 4. **RÈGLE B2B** : Le jour de prédiction est le jour habituel → pas de décalage; la quantité la plus probable est la valeur récurrente récente.

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: BI-WEEKLY_MONDAY
- **Saisonnalité**: none
- **Tendance**: decreasing_then_stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
(1) RHYTHMIC: Clear bi-weekly Monday pattern established over last 5 orders (14-day intervals). Prediction date 2025-10-06 is exactly 14 days after last order (2025-09-22), confirming active cycle day. (2) OUTLIERS: No major outliers within each period. The 1u order (2025-09-08) is a temporary dip (-50% from median) but isolated between 2u and 3u orders, suggesting exceptional adjustment. The volume drop from N-1 (4-5u) to recent (2-3u) is structural, not accidental. (3) TREND: Recent stable cluster around 2-3u with last value at 3u, indicating baseline. Median is 2u but last value better reflects current state. N-1 data (30% weight) confirms historical product usage but recent pattern (70% weight) drives prediction. (4) DECISION: Bi-weekly B2B agro pattern is strong. Date is cycle day. Last value 3u is most representative of current operational level, minimizing MAPE vs. alternatives (2u would mean 33% error if 3u occurs; 3u means 33% error if 2u occurs, but 3u aligns with last observed baseline after anomaly). No zero prediction as per rules - this is an active cycle day.

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (28 jours)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit NOD04 suit un cycle mensuel strict de 28 jours avec des commandes systématiques le lundi à 1 unité. Le 2025-10-06 correspond exactement au prochain lundi du cycle (28 jours après le 08/09). Aucune variation ou outlier détecté. Avec seulement 2 points de données mais un pattern stable, la dernière valeur observée est la plus probable.

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Toutes les 14 jours (bi-hebdomadaire) le lundi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exactement 1 unité tous les 14 jours un lundi. La date de prédiction (2025-10-06) est un lundi et correspond parfaitement au cycle bi-hebdomadaire (14 jours après le lundi 2025-09-22). Aucune variabilité ni outlier détecté. La quantité la plus probable est donc la valeur historique constante.

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-hebdomadaire (intervalle exact de 14 jours)
- **Saisonnalité**: none
- **Tendance**: stable_low_volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle bi-hebdomadaire est parfaitement respecté (14 jours exacts entre chaque lundi). Les 3 dernières quantités montrent une stabilisation à 1u (2→1→1). La date de prédiction correspond exactement au jour et intervalle habituels. Avec si peu de données mais un pattern rythmique clair, la prédiction la plus précise est la dernière valeur stable observée.

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle précise (28 jours) avec commande systématique le lundi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité mais révélateur d'un pattern stable. Les commandes se produisent exactement tous les 28 jours (7 juillet → 11 août → 8 septembre → 6 octobre), confirmant un cycle mensuel régulier. Les quantités observées (1, 2, 1 unités) montrent une stabilité autour de 1 unité, le pic à 2 unités en août étant une variation isolée sans continuation. La dernière commande (1 unité) reflète le niveau de référence. Sans données saisonnières N-1 et compte tenu du faible volume, la valeur la plus probable minimisant le MAPE est le mode de la distribution.

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: >>> # Phase 1: ANALYSE RYTHMIQUE (Clé de précision) ##
- **Historique récent**: Seulement 2 commandes en 2025
  - 2025-08-25 (lun.) | 1u
  - 2025-08-11 (lun.) | 1u
- **Intervalle précis**: Exactement 14 jours entre les deux commandes (cycle BIHEBDOMADAIRE confirmé)
- **Jour habituel**: LUNDI (2/2 occurrences)
- **Date de prédiction**: 2025-10-06 est un LUNDI → **Jour de cycle habituel** (pas de hors-cycle)

>>> # Phase 2: FILTRAGE OUTLIERS ##
- Avec seulement 2 points de données identiques (1u, 1u), **aucun outlier détectable**
- La stabilité parfaite (écart-type = 0) indique un pattern B2B très régulier
- Pas de pics exceptionnels ni d'événements saisonniers perturbateurs

>>> # Phase 3: SYNTHÈSE & DÉCISION ##
**Contexte critique**: Absence totale de données N-1 + seulement 2 points récents
**Règle appliquée**: "Pour données limitées (2-3 points) → Privilégie dernière valeur si cohérente avec tendance"

**Décision logique**:
- Pattern BIHEBDOMADAIRE stable: 1u tous les 14 jours le lundi
- Dernière commande: 1u (2025-08-25)
- Prochaine commande attendue: Lundi 8 sept. (non fournie), puis Lundi 22 sept., puis **Lundi 6 oct.**
- **Pas de rupture de tendance** signalée

**Coefficient de confiance**: Très élevé (>90%)
**Risque**: Faible - Le client B2B montre un comportement ultra-régulier
**Méthode**: Dernière valeur validée (1u) car absence de variance et pattern calendaire immuable
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1000u, -1000u

**🧠 Raisonnement LLM:**
Pattern B2B ultra-régulier: commande de 1u tous les 14 jours les lundis. Date de prédiction coïncide exactement avec le cycle. Aucune donnée N-1, mais stabilité parfaite des 2 dernières commandes. Pas d'outlier. La prochaine commande bihebdomadaire tombera le 6 octobre avec très forte probabilité de 1u.

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irregular_monthly
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse révèle une commande irrégulière mais stable. Les 3 derniers mois montrent 2 commandes (2025-07-14 et 2025-08-25), toutes les deux un lundi avec exactement 2 unités. L'intervalle de 42 jours (6 semaines) entre ces deux commandes coincide parfaitement avec notre date de prédiction (2025-10-06). Historiquement sur 9 commandes, 7 sont de 2u. Le jour de prédiction correspond au nouveau jour habituel établi par les données récentes. Pas d'outlier significatif ni de saisonnalité détectée.

</details>




### 📊 Données d'Input LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 5u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 4u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 3u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 2u
- 2024-06-11 06:44:54: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 3u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: high)
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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (19j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -0.1u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.8u (-5j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.2u (-14j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -2.3u (-28j restants) → prédit 1u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Stock prédit: -2.9u (-41j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -1.0u (-27j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-41j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 5 | Stock prédit: -0.3u (-27j restants) → prédit 5u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 12 | Stock prédit: -1.7u (-69j restants) → prédit 12u mais non commandé |


---

## False Negatives (2)

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
| [VID0009] Consigne casier | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 24 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T08:47:50.447Z*
