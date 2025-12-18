# Rapport Backtest - Client DLL AD GERAARDSBERGEN

## Contexte

- **Client** : DLL AD GERAARDSBERGEN (ID: 38803)
- **Commande réelle** : S39064
- **Date commande** : 2025-09-08 06:09:55
- **Date cutoff système** : 2025-09-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 24
- **Tokens**: 36,318 input + 6,775 output = 43,093 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 24 produits prédits, 16 corrects |
| **Rappel** | 88.9% | 18 produits réels, 16 détectés |
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
| **MAE** | 0.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
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

## True Positives (16)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF021] JF PICKLES 350 ML | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très espacé (tous les 30 à 60 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u sur la période récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible volumétrie récurrente. Bien que l'année N-1 affichât parfois 2 unités, les deux dernières commandes (juin et juillet 2025) ont été de 1 unité. L'intervalle entre les commandes est irrégulier (18 jours à 2 mois), mais la stabilité récente à 1 unité suggère un besoin de réapprovisionnement à l'unité dès que le stock est bas. Le dimanche n'étant pas un jour de livraison B2B classique, nous prédisons le volume pour la réouverture des flux dès le lundi suivant, soit 1 unité correspondant au flux de fond actuel.

</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (intervalle de 15 a 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable a tendance baissiere legere (historique 2-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit [JF021] presente un historique de commandes tres sporadique avec seulement 5 points de donnees identifies. Le rythme evolue entre 1 et 4 unites par commande sans jour fixe (lundi, mardi, jeudi identifies). La date de prediction est un dimanche, jour hors cycle operationnel B2B. En suivant les consignes, je predit la quantite de la prochaine commande probable qui devrait intervenir en debut de semaine suivant le 07/09. La moyenne historique est de 2.8u, la derniere commande etait de 4u (juillet) precedee d'une de 1u (juin). Un volume de 3u represente le meilleur compromis de stabilite pour ce produit a faible rotation.

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 3 à 8 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et sporadique pour ce produit de niche (Vinaigrette truffe). Bien que la date de prédiction soit un dimanche (jour de fermeture B2B), les règles de gestion imposent de prévoir la quantité de la prochaine commande probable. Le volume historique oscille entre 0 et 1 unité depuis juin 2024, la valeur de 2 unités d'août 2024 étant traitée comme un outlier saisonnier non reconduit en 2025. Les deux dernières commandes de l'été 2025 sont stables à 1 unité. On anticipe donc une commande de 1 unité pour le cycle de début septembre.

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier basse fréquence (environ 2-4 semaines)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande très stable mais à faible rotation (1 unité par commande). L'historique récent (juin/juillet 2025) montre des commandes de 1u, ce qui est cohérent avec le volume de l'année précédente (hors pic de 2u en août 2024 qui semble être un événement saisonnier ponctuel non répété avec la même intensité). Bien que la date de prédiction soit un dimanche, en suivant les règles B2B, je projette la quantité de la prochaine commande probable (lundi) qui se stabilise structurellement à 1 unité.

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique (Cycle long > 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u (Moyenne 1.2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique de commandes éparses avec des volumes très faibles (1 ou 2 unités). L'intervalle entre les commandes est irrégulier (de 14 jours à plusieurs mois). La dernière commande date de juillet 2025 (1u) et la précédente de fin juin (2u). Bien que la date cible soit un dimanche (hors cycle B2B habituel), la règle impose de prédire le volume de la prochaine commande probable. Compte tenu de la faible rotation (1.2u de moyenne historique et 1u lors de la dernière commande), la quantité la plus probable pour la rentrée de septembre est de 1 unité.

</details>


<details>
<summary><strong>6. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (intervalle 15j à 60j+)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière. Bien que le volume de juin 2024 ait affiché 2u, toutes les autres commandes (y compris la plus récente de juin 2025) sont de 1u. Le produit semble être une référence de niche ou un complément de commande. En l'absence de récurrence hebdomadaire stricte, nous suivons la tendance de fond la plus fréquente et la plus récente. La prédiction pour ce dimanche correspond à la prochaine unité attendue lors de la fenêtre de commande suivante (probablement le lundi 08/09).

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (long intervalle > 60j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très faible et irrégulière. Historiquement, les volumes se situent entre 1 et 2 unités. La dernière commande datant de fin juin 2025 était de 1 unité. Bien que la date de prédiction soit un dimanche (hors cycle), les règles de gestion imposent de ne pas prédire 0. Compte tenu de la faible rotation et de la dernière donnée récente, la quantité la plus probable pour la prochaine récurrence est de 1 unité. Le volume de 2u en 2024 est considéré comme un pic ponctuel car non répété.

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très sporadique, environ tous les 30 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u-3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très clairsemé avec seulement 2 commandes réelles enregistrées (3u en juin 2024 et 2u en juin 2025). Le produit semble être un fond de rayon à faible rotation. Bien que la date de prédiction soit un dimanche (jour hors cycle habituel), les règles imposent de prédire la prochaine commande probable. Compte tenu de la dernière commande de 2u il y a plus de 60 jours, un réapprovisionnement est probable pour maintenir le stock. Je privilégie la quantité la plus récente (2u) car elle reflète mieux la tendance actuelle que celle de l'année dernière (3u).

</details>


<details>
<summary><strong>9. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique / Cycle long irrégulier (~30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique très faible et irrégulier. La dernière commande enregistrée remonte au 30 juin 2025 pour 1 unité. Bien que le 7 septembre soit un dimanche (jour hors cycle traditionnel B2B), les règles imposent de prédire la prochaine commande probable. En l'absence de tendance à la hausse ou de saisonnalité marquée dans les données N-1 (juin avec 0u et 2u), la valeur la plus probable pour maintenir le stock de ce produit à faible rotation est l'unité minimale observée récemment.

</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 15j à 60j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
D'après l'historique N-1 (seules données disponibles), le produit présente un volume très stable oscillant entre 2 et 3 unités par commande. Aucun pic saisonnier n'est visible sur la période correspondante. Bien que la demande porte sur un dimanche (jour hors cycle B2B habituel), la règle impose de prédire la prochaine occurrence probable. En l'absence de commandes récentes pour confirmer une hausse de tendance, la valeur de 2 unités (mode statistique des données historiques) est privilégiée pour minimiser l'erreur de prévision.

</details>


<details>
<summary><strong>11. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très sporadique (intervalle de 14 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des commandes très irrégulières et de faible volume (moyenne de 1u par commande effective). Le produit [JF017] semble être un article de complément commandé au besoin plutôt que sur un cycle fixe. La date cible étant un dimanche (jour non ouvré), j'applique la règle de prédiction de la commande suivante la plus probable. Compte tenu de la stabilité des volumes historiques (0u, 1u, 2u) et de l'absence de commande récente sous 3 mois, la quantité standard de réapprovisionnement de 1 unité est privilégiée pour minimiser le MAPE sur ce type de profil à faible rotation.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 4u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 4u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 3u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 3u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (8)

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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -0.3u (-7j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.9u (-23j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.2u (18j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: -1.8u (-70j restants) → prédit 1u mais non commandé |


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
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock suffisant: 1.4u (121j restants > seuil 30j) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:18:57.602Z*
