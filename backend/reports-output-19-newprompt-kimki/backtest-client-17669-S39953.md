# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39953
- **Date commande** : 2025-10-28 09:35:16
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 38
- **Tokens**: 80,136 input + 165,862 output = 245,998 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 28 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 58.5% | Score équilibré global |

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
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (12 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière: intervalles 41j, 15j, 7j (médiane: 15j)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle irrégulier (CV=69%) avec prochaine commande prévue le 2025-10-23 (dépassée de 4j). Quantité médiane stable de 2 unités.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 21 jours avec très haute régularité (CV 4.76%)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 21 jours très stable (CV 4.76%). Dernière commande le 2025-10-08, prochaine prévue le 2025-10-29 (dans 2 jours < 30 jours). Historique récent de 3 commandes à 1u sans outlier. Quantité médiane stable à 1u. Pas de saisonnalité détectée (pattern N-1 différent).

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 15 à 20 jours (médiane 17.5j)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Cycle de 17.5 jours calculé sur 2 intervalles (15j, 20j) avec CV=20.2%. Commande attendue depuis le 18 octobre (9j de retard). Quantité de 2u déterminée par médiane des valeurs récentes [2,2] après exclusion de l'outlier isolé 1u. Historique N-1 non utilisé pour la baseline (pattern différent mais non saisonnier clair).

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec intervalles récents de 15 à 41 jours (médiane: 28j)
- **Saisonnalité**: strong
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle de 28 jours détecté (CV 66%), prochaine commande prévue le 29/10 (dans 2 jours). Quantités récentes [2,1,1] avec CV 35% → baseline 1u par moyenne tronquée (outliers: aucun). Forte saisonnalité de baisse détectée (-56% vs N-1) mais sans ajustement multiplicatif défini pour les baisses.

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande tous les 17-20j irrégulier (CV 14%)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle détecté de 18j médian (intervalles: 20j,15j) avec CV 14.29% (régulier). Prochaine commande attendue le 19 octobre, soit 8j avant aujourd'hui (client en retard). Quantité stable à 1u/commande, sans outlier. Pas de saisonnalité (pas de N-1).

</details>


<details>
<summary><strong>6. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières : intervalles de 7j puis 28j, médiane 17,5j (CV=60%)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
INTERVALLES: [7j, 28j] → MÉDIANE=17,5j, CV=60% (cycle erratique, low confiance). PROCHAINE COMMANDE: 2025-10-01 + 17,5j = 2025-10-18. Nous sommes le 2025-10-27 → RETARD DE 9 JOURS (risque immédiat). QUANTITÉS: [1,1,1] → Toutes retenues (Q1=1,Q3=1,IQR=0). CV=0% <30% → baseline=MÉDIANE(1,1,1)=1u. Seasonality none (pas de N-1).

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière (intervalles: 7j, 28j)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle erratique de 17.5 jours (CV=84.86%) détecté. La prochaine commande était attendue le 2025-10-18 (déjà 9 jours passée → risque immédiat). Historique quantitatif stable à 1 unité. Aucune saisonnalité détectée.

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 3u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Historique erratique : cycle théorique de 49.5j mais CV=109% (forte irrégularité avec une pause de 314j observée)
- **Saisonnalité**: strong
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 49.5j très irrégulier (CV=109%). Prochaine commande le 4 nov (dans 8j). Quantité: 3u par moyenne tronquée [1,2,3,3,3,3,3] (excl min/max). Baisse forte vs N-1 (3u→1u) = saisonnalité 'strong' avec ajustement conservateur.

</details>


<details>
<summary><strong>9. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière - seulement 2 commandes en 41 jours
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique: 2 commandes (2025-08-06, 2025-09-16) avec quantité constante 2u. Intervalle calculé: 41 jours. Cycle médian: 41j. Date prédite: 2025-10-27 (jour même). Risque: OUI (déjà dans fenêtre). Quantité: médiane [2,2] = 2u. CV=0% mais <3 commandes → confiance low. Pas de données N-1.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière, intervalles très variables (28 à 314 jours) avec CV de 91%
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 58 jours (très erratique, CV=91%). Prochaine commande prévue le 2025-11-01 (dans 5 jours) → RISQUE CONFIRMÉ. Quantités stables [1,2] sans outlier. Baseline=1.5 par moyenne tronquée (CV=33%). Aucune saisonnalité détectée. Recommendé=2u par arrondi prudent.

</details>


<details>
<summary><strong>11. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle très erratique: intervalles de 47 à 342 jours (médiane=55j)
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle détecté: 55j (CV=100.62%, erratique). Prochaine commande: 2025-10-28 (dans 1 jour). Quantité: moyenne tronquée=2.4 → 2u (CV=30.57%, tendance décroissante 3→2→1). Saisonnalité: none (diminution -50% non couverte par la règle +50%).

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes espacées de 28j, client en retard de 26j vs cycle attendu
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian de 28j détecté (2 commandes). Dernière commande le 2025-09-03, prochaine attendue le 2025-10-01 soit 26j de retard actuel. Risque majeur de rupture immédiat. Quantité stable à 1u sans outlier détecté. Confiance faible du fait de l'historique insuffisant (<3 commandes) et absence de données N-1.

</details>




### 📊 Données d'Input LLM (12 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:26:15: 2u
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:26:15: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-27 06:19:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 4u
- 2024-07-30 10:52:57: 4u
- 2024-07-01 06:32:15: 4u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 4u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 3u
- 2024-07-01 06:32:15: 4u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-06 06:23:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 3u
- 2024-07-30 10:52:57: 3u
- 2024-07-01 06:32:15: 3u
- 2024-05-13 08:03:20: 4u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 2u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (16)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: 0.3u (3j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | Stock prédit: 0.7u (33j restants) → prédit 3u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -0.5u (-7j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Stock prédit: -2.4u (-37j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: -2.9u (-39j restants) → prédit 2u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Stock prédit: -1.7u (-38j restants) → prédit 2u mais non commandé |


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
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | En rupture (-12j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-19T07:36:36.020Z*
