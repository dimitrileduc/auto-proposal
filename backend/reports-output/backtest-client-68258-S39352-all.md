# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 23,893 input + 5,101 output = 28,994 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.8% | 17 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 74.1% | Score équilibré global |

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
| **MAE** | 1.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 39.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (10)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement croissant (14j → 48j → 17j → 3j récemment)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -60% (10u → 4u sur 3 mois) puis stabilisation basse (2-4u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Pattern irrégulier sans saisonnalité N-1. Tendance baissière nette: 10u (juin) → 6u (juil.) → 2-4u (sept). Les 2 dernières commandes (mar. 4u, ven. 2u) montrent stabilisation en zone 2-4u. Pic de 10u identifié comme outlier initial. Intervalle récent de 3j suggère besoin immédiat satisfait. Prochaine commande mardi (même jour que 09/09): baseline 3.2u arrondie à 3u car demande de fond stabilisée bas. Pas de signal de rattrapage ni d'événement saisonnier justifiant hausse.

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 3j, 43j, 14j) sans pattern hebdomadaire fixe
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation 1-4u (hors pic de 5u), moyenne ~2.75u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Historique court (5 commandes sur 3 mois) sans saisonnalité N-1. Pattern irrégulier détecté : pas de rythme hebdomadaire fixe malgré 2 commandes un mardi. Le pic de 5u du 09/09 semble exceptionnel (commande 3j après la précédente, rupture du rythme). En excluant ce outlier, les 4 autres commandes montrent une demande stable 1-4u (moyenne 2.25u). Dernière commande 2u le 12/09 (il y a 11j) suggère un retour à la normale. Baseline 2.5u ajustée à 2u car : (1) pas de signal de rattrapage imminent, (2) tendance de fond stable autour de 2u hors événement exceptionnel, (3) précision privilégiée sur prudence en B2B agro. Confidence medium car historique limité et pattern irrégulier rendent difficile la prédiction précise du timing/volume.

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables: 3j, 21j, 27j, 16j. Pas de jour fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable - Moyenne récente ~3.2u avec légère volatilité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (5 commandes sur 2.5 mois) avec pattern irrégulier mais volume stable. Les 2 dernières commandes (09/09 et 12/09) montrent 4u chacune avec intervalle court de 3 jours, suggérant une accélération récente du rythme. La prédiction pour le 23/09 (11 jours après la dernière) s'inscrit dans un cycle qui semble se normaliser autour de 4u (3 des 5 commandes). La commande isolée de 1u du 19/08 apparaît comme ajustement ponctuel. Baseline théorique 3.2u arrondie à 4u car: (1) momentum récent à 4u, (2) volumes B2B généralement en unités entières, (3) 4u représente le mode de la série récente.

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables: 31j puis 51j puis 10j (accélération récente)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive: 3u → 2u → 1u (-33% puis -50%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre une tendance baissière claire sur 3 mois (3→2→1). Malgré l'accélération du rythme (dernier intervalle 10j vs 31-51j précédents), la quantité unitaire diminue systématiquement. La commande la plus récente (12 sept, il y a 11j) indique 1u comme nouveau standard. Sans données N-1 pour confirmer un pattern saisonnier septembre, et face à une demande décroissante stabilisée à 1u, la prédiction la plus probable est 1u. Le rythme s'accélère mais les volumes baissent = client commande plus souvent mais moins par commande (optimisation logistique probable).

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière ~14-21j (6/23→7/7=14j, 7/7→7/23=16j, 7/23→8/19=27j, 8/19→9/9=21j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50% (6u→2-3u récent)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Pattern irrégulier 14-27j détecté. Dernière commande 9/9 (14j avant prédiction 9/23) = intervalle court cohérent. Les 6u de juin/juillet sont outliers liés à un probable lancement/stock initial. Tendance stabilisée à 2-4u depuis juillet avec moyenne pondérée récente: (4×0.2 + 2×0.3 + 3×0.5) = 2.8u. Arrondi à 3u car demande B2B agro rarement fractionnée et 9/23 tombe mardi (jour fréquent: 2/5 commandes passées un mardi). Pas de saisonnalité N-1 détectable. Confiance moyenne car historique court (5 points) mais tendance récente claire.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 20-25 jours, principalement Mardi (3/4 commandes), rythme irrégulier mais concentration hebdomadaire
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse récente: 4u→6u→6u→6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern identifié: commandes toutes les 3 semaines environ (dernier: 09/09, avant 19/08, 23/07, 07/07 soit intervalles de 21j, 27j, 16j). La prédiction au 23/09 = 14 jours après dernière commande du 09/09, ce qui est court par rapport au rythme habituel (20-25j). MAIS le client a commandé 6u lors des 3 dernières fois consécutives, établissant un nouveau standard stable après un 4u isolé en juillet. Pas d'outliers détectés, pas de saisonnalité N-1. La tendance récente montre une consolidation à 6 unités. Même si l'intervalle est légèrement court, le pattern Mardi est fort (3/4) et la date de prédiction est un Mardi. Baseline=6u confirmée par les 3 dernières commandes identiques. Recommandation: 6 unités (ni surgonflage ni sous-estimation, strictement aligné sur demande récente stable).

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (14-21j), tendance mardi dominant récemment
- **Saisonnalité**: none
- **Tendance**: Baisse nette -67% (6→4→2u), stabilisation à 2u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Pattern clair: après pic isolé de 6u le 2025-07-07, normalisation à 4u puis stabilisation stricte à 2u (2 commandes consécutives les 19/08 et 09/09, toutes deux des mardis). Intervalle dernier achat: 14j (09/09→23/09). Le rythme s'est accéléré (21j→14j) mais les quantités ont plafonné à 2u. Pas de saisonnalité N-1 détectable. La tendance baissière est confirmée et stable. Le pic de 6u était vraisemblablement un rattrapage exceptionnel (écart de 16j avant). Prédiction: 2u par cohérence avec les 2 derniers achats identiques et le nouveau rythme bimensuel établi.

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec forte variabilité - intervalles 14j, 21j, 43j (tendance vers mensuel)
- **Saisonnalité**: none
- **Tendance**: Volatile - pic 6u (23/06) puis retour 2u-4u, dernière=4u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Pattern irrégulier sans saisonnalité N-1. Historique court (4 commandes sur 3 mois). La commande du 23/06 (6u) apparaît exceptionnelle vs les 3 autres (2-2-4u). Dernière commande 09/09 (4u, il y a 14j) montre hausse vs 2u d'août. Intervalle moyen ~30j mais accélération récente (14j). Baseline 3.5 = moyenne pondérée excluant le pic. Prédiction 4u alignée sur dernier achat et tendance récente, évitant surgonflage. Rythme encore instable mais 4u représente demande probable actuelle.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bimensuel irrégulier (~14-21j), commandes majoritairement en début de semaine (Lun-Mar)
- **Saisonnalité**: none
- **Tendance**: Baisse modérée: 6u→4u→4u→4u (stabilisation à 4u sur les 3 dernières commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair identifié: après une commande de 6u fin juin, le client s'est stabilisé à 4u sur les 3 dernières commandes (07/07, 19/08, 09/09). Intervalle moyen de 21 jours entre commandes récentes. La prédiction tombe 14 jours après la dernière commande du 09/09, ce qui correspond au rythme bimensuel observé. Aucun outlier détecté, pas de saisonnalité N-1 disponible. La tendance montre une stabilisation nette à 4 unités depuis juillet. Recommandation: 4 unités avec confiance élevée basée sur la récurrence stricte des 3 dernières commandes.

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (~14-21j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère variabilité (2-6u, moyenne ~4.4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique de 5 commandes sur 3 mois montrant un rythme irrégulier (intervalles: 16j, 14j, 27j, 21j). Aucune saisonnalité N-1 disponible. Les quantités oscillent entre 2u et 6u avec moyenne 4.4u. Les 2 dernières commandes (19/08 et 09/09) ont respectivement donné 6u puis 4u, suggérant un retour vers la baseline après une commande légèrement supérieure. Pas de pattern hebdomadaire fixe détecté (mix lun/mar/mer). Absence d'outliers significatifs. La prédiction pour le 23/09 (14j après dernière commande) s'aligne sur la demande de fond observée: 4u représente la médiane de l'historique et correspond au comportement récent stabilisé.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 1u
- 2025-07-23 10:00:51: 2u
- 2025-06-23 07:14:01: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 6u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 2u
- 2025-08-19 13:27:28: 2u
- 2025-07-23 10:00:51: 4u
- 2025-07-07 08:56:44: 6u
- 2025-06-23 07:14:01: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 2u
- 2025-07-07 08:56:44: 2u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 4u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 6u
- 2025-07-23 10:00:51: 2u
- 2025-07-07 08:56:44: 4u
- 2025-06-23 07:14:01: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (7)

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
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: 2.0u (19j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 12 | Stock prédit: 3.2u (6j restants) → prédit 12u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: -4.4u (-23j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -5.5u (-60j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -6.9u (-60j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T13:35:10.919Z*
