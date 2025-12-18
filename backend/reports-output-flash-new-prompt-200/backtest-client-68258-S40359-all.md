# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 13,399 input + 5,415 output = 18,814 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 2.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 63.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -47.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | 8 | 6.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 2u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 6u (75.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des poches d'activité (cycle ~15 jours en septembre)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -75% sur le volume moyen
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 6 unités en septembre est traitée comme un outlier par rapport à la moyenne de fond de 3 unités. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, impact considéré nul pour le moment. ÉTAPE 3 (Tendance): On observe une baisse de volume sur les dernières commandes, passant d'une moyenne de 4 unités en septembre à seulement 1 unité hier (12/11). Le rythme est très sporadique avec un long tunnel sans commande entre fin septembre et mi-novembre. ÉTAPE 4 (Recommandation): Une commande de 1u a été passée hier (mercredi). La demande d'aujourd'hui (jeudi) semble être un ajustement de faible volume. En restant conservateur face à la baisse de tendance, une quantité de 2u permet de couvrir une demande de secours sans risquer le surstockage.

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, cycle variable entre 15 et 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune commande n'est identifiée comme outlier (volumes faibles et stables de 1-3u). La moyenne de fond est de 2 unités. Étape 2: Aucune donnée N-1 n'est disponible pour valider une saisonnalité, bien que les confitures puissent être stables. Étape 3: On observe une tendance à la baisse sur les trois dernières commandes (3, 2, 1). La commande d'hier (mercredi) de 1u suggère un besoin résiduel faible. Étape 4: Compte tenu de la commande très récente du 12/11 (1u) et de la tendance baissière, une quantité de 2u permet de couvrir le stock de sécurité sans risque de sur-stockage majeur pour ce produit à faible rotation en B2B pendant la période automnale. Le niveau de confiance est faible en raison de l'irrégularité des intervalles de commande et du manque d'historique annuel direct sur le produit JOY05.

Note: La commande est passée un jeudi, soit juste après le créneau habituel (Mardi/Mercredi). L'ajustement est conservateur pour éviter l'obsolescence sur un produit biologique (Organic).

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec commandes bi-mensuelles à mensuelles
- **Saisonnalité**: none
- **Tendance**: Baisse du volume par commande (de 3u à 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 3u en septembre est traitée comme un outlier car elle représente 3x le volume des autres occurrences. La demande de fond est de 1u. Étape 2: Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité, bien que la figue soit un produit de fin d'année, les données actuelles ne montrent pas de pic. Étape 3: On observe une tendance à la baisse du volume unitaire et une commande très récente (hier, mercredi). Étape 4: Étant donné qu'une unité a été commandée hier, le besoin actuel est couvert. Par mesure de prudence et face au manque de données historiques, le réapprovisionnement se limite au maintien de la demande de fond de 1u.

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, irrégulier (mensuel à bimensuel)
- **Saisonnalité**: none
- **Tendance**: Hausse récente (4u vs moyenne 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'est considérée comme un outlier compte tenu du faible volume de données, bien que la commande de 4u soit le double de la moyenne habituelle. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles. La nature du produit (confiture bio) suggère une demande stable en hiver. ÉTAPE 3 (Tendance): On observe une accélération soudaine hier (mercredi, 4u) après un mois de latence. Le rythme semble passer d'une commande tous les deux mois à une commande mensuelle. ÉTAPE 4 (Recommandation): La moyenne pondérée sur 3 mois est de 2.67 unités. Étant donné la commande enregistrée il y a moins de 24h (4u), le client semble reconstituer ses stocks ou faire face à une demande accrue. Pour éviter le surstockage sur un produit à rotation lente, nous préconisons une quantité conservatrice de 3 unités pour couvrir les deux prochaines semaines sans rupture immédiate tout en tenant compte de la commande déjà passée hier.

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 2 commandes par mois, principalement les mercredis et vendredis.
- **Saisonnalité**: none
- **Tendance**: Hausse légère à 4.7u sur les 3 dernières commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'excède le double de la moyenne (4u); l'historique est cohérent. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul par prudence. ÉTAPE 3 (Tendance): On observe une accélération du volume unitaire (passant de 2u à 6u puis stabilisé à 4u). La dernière commande date d'hier (mercredi), ce qui suggère un besoin de réapprovisionnement très récent ou un fractionnement de commande. ÉTAPE 4 (Recommandation): La moyenne pondérée des 3 derniers mois est de 4 unités. Comme une commande de 4u a été passée hier, la recommandation de 4u aujourd'hui maintient le stock de sécurité face à une demande qui semble se stabiliser autour de ce volume hebdomadaire.

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une fréquence moyenne de 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Hausse légère sur les deux derniers mois (moyenne mobile passée de 1u à 2.7u)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 5u le 09/09 est traitée comme un outlier car elle représente plus de 2x la moyenne des autres commandes (1.75u). La base de calcul retenue est de ~2u. ÉTAPE 2 (Saisonnalité): Aucune donnée N-1 disponible pour confirmer une saisonnalité sur la confiture d'abricot Bio en novembre. ÉTAPE 3 (Tendance): On observe une légère accélération des volumes de commande depuis août (1u -> 2u -> 4u -> 2u), stabilisée autour de 2 unités. ÉTAPE 4 (Recommandation): La demande de fond nettoyée est de 2.25u. Compte tenu du jour de commande (jeudi au lieu du vendredi habituel) et de la politique conservatrice pour éviter le sur-stockage sur un produit à rotation modérée, une quantité de 2 unités est recommandée pour couvrir la fin de mois sans risque majeur de rupture commerciale car les volumes restent faibles et stables sur la dernière commande d'octobre.

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (environ 12 jours d'intervalle sur l'échantillon)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1.5u en moyenne)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données en septembre et aucune donnée N-1. ÉTAPE 1: Aucune valeur n'est identifiée comme outlier au vu du faible volume global (moyenne de 1,5 unité). ÉTAPE 2: La saisonnalité ne peut être établie par manque de données historiques. ÉTAPE 3: La tendance semble stable mais très faible, sans commande enregistrée en octobre. ÉTAPE 4: Compte tenu du risque élevé de sur-stockage sur un produit à faible rotation et du silence radio de plus d'un mois, la recommandation se porte sur le minimum sécuritaire de 1 unité pour tester la reprise de la demande sans engager de capital inutilement (approche conservatrice).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur.er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).er-stocker sur un produit à faible rotation sans historique robuste d'octobre ou novembre. On recommande 1 unité pour couvrir une demande minimale potentielle tout en restant conservateur (approche test de reprise).

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ 1 commande par mois
- **Saisonnalité**: none
- **Tendance**: Hausse ponctuelle (1u vers 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Avec seulement deux points de données (1u et 5u), il est difficile d'isoler un outlier, mais la moyenne s'établit à 3u. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le secteur sucre/confiture soit stable en automne. Étape 3: Une tendance à la hausse est visible sur les deux seules commandes passées en septembre, mais aucun achat n'a été enregistré en octobre. Étape 4: En l'absence de données récentes depuis deux mois et d'un historique robuste, une approche conservatrice basée sur la moyenne historique (3u) est recommandée pour tester la reprise de la demande sans risquer un surstockage important sur un produit à faible rotation apparente (JOY01). L'écart entre le jour de commande passé (ven/mar) et le jour actuel (jeu) n'indique pas de rupture de cycle critique ici compte tenu de la faible fréquence globale du produit. La confiance est faible car l'échantillon de données est très restreint (n=2).

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 6u
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 2u
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-12 12:57:02: 3u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 2u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 6u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 10:21:30: 2u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:49:59: 2u
- 2025-09-12 12:57:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 5u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | Stock prédit: 8.0u (24j restants) → prédit 6u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Stock prédit: 6.0u (30j restants) → prédit 4u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Stock prédit: 6.0u (28j restants) → prédit 4u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 4.0u (14j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 8 | Stock prédit: -1.8u (-4j restants) → prédit 8u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:09:40.503Z*
