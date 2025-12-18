# Rapport Backtest - Client KOCKARTZ Kockado GmbH (Filiale Eynatten)

## Contexte

- **Client** : KOCKARTZ Kockado GmbH (Filiale Eynatten) (ID: 24824)
- **Commande réelle** : S40121
- **Date commande** : 2025-11-04 14:43:19
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 3,124 input + 1,334 output = 4,458 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 75.0% | Score équilibré global |

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
| **MAE** | 2.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 83.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, irrégulier (entre 30 et 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune commande aberrante détectée, le volume oscille naturellement entre 1 et 3 unités. ÉTAPE 2 (Saisonnalité) : Pas de corrélation visible avec la fin d'année N-1 (volume constant de 2u). ÉTAPE 3 (Tendance) : Très faible activité récente avec une seule commande en août (2u). Le produit semble être une référence de niche ou à rotation lente. ÉTAPE 4 (Recommandation) : En l'absence de commande depuis 3 mois et vu l'historique stable, une commande de 2 unités permet de reconstituer un stock de sécurité minimal sans risque de sur-stockage majeur, correspondant à la demande de fond observée sur 80% des occurrences historiques. Le niveau de confiance est 'low' dû à la rareté des points de données récents (Gap de 90 jours).

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très irrégulier (sporadique), intervalle de 2 à 4 mois
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume et de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles (1-3u). La moyenne historique est de 1.8u. Étape 2: Aucune saisonnalité claire n'apparaît, les commandes sont dispersées sur l'année sans pic récurrent en novembre. Étape 3: Tendance à la baisse avec une seule commande de 2u sur les 3 derniers mois (août) et aucune commande en septembre/octobre. Étape 4: La base est de 1.5u. Compte tenu du caractère sporadique et du besoin de ne pas sur-stocker un produit à faible rotation, une commande de 2 unités est recommandée pour couvrir la demande potentielle tout en restant conservateur face au ralentissement observé (dernière commande il y a 3 mois). L'indice de confiance est faible dû au manque de récurrence statistique sur ce SKU spécifique [LV129].

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'est détectée, les volumes sont constants entre 1u et 3u (moyenne 2u). Étape 2: Il n'y a pas de corrélation saisonnière visible entre N-1 et la période actuelle pour ce produit spécifique. Étape 3: La tendance est stable mais très lente, avec une seule commande enregistrée sur les 3 derniers mois (août). Étape 4: La demande de fond étant de 2u par cycle et le stock semblant tourner lentement, une recommandation de 2 unités permet de couvrir le prochain cycle sans risque de sur-stockage important, malgré la faible densité de données qui limite la confiance de la prédiction à 'low'. Aucun ajustement n'est nécessaire pour le jour de la semaine au vu de l'irrégularité des dates de commande passées (mar, ven, mer, jeu). Pour éviter la rupture potentielle après 3 mois de calme, on maintient le volume standard de 2u au lieu de 0u ou 1u pour compenser l'absence de commande en septembre/octobre par rapport au rythme N-1 (avril/juin/septembre). L'historique montre que les commandes ne sont pas groupées sur une saison spécifique, mais dispersées sur l'année avec un volume très faible mais constant par occurrence de commande. Le risque de sur-stockage est faible au vu du faible volume recommandé (2u). Le produit a une demande latente faible qui justifie une approche conservatrice de maintien de stock minimal plutôt qu'une hausse spéculative. On ne détecte pas de rupture de rythme majeure, seulement un espacement des commandes un peu plus long que l'année précédente (4 mois depuis la dernière commande en août 2025). Cette commande de novembre 2025 s'inscrit donc comme le réapprovisionnement logique pour clore l'année fiscale en douceur. Le choix du lundi (date actuelle) n'impacte pas le volume car le produit ne suit pas un cycle de livraison hebdomadaire rigide (les commandes ont eu lieu presque tous les jours ouvrés différents par le passé). La quantité recommandée de 2u est la valeur la plus fréquente (mode) et correspond à la moyenne tronquée du produit sur l'ensemble de son cycle de vie.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 2u
- 2023-12-20 08:32:55: 2u
- 2023-12-12 14:35:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 1u
- 2023-12-12 14:35:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 2u
- 2023-12-20 08:32:55: 2u
- 2023-12-12 14:35:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (1)

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
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Stock prédit: 0.2u (3j restants) → prédit 4u mais non commandé |


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
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:10.517Z*
