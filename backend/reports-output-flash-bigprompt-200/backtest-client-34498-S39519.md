# Rapport Backtest - Client D'ICI NANINNE

## Contexte

- **Client** : D'ICI NANINNE (ID: 34498)
- **Commande réelle** : S39519
- **Date commande** : 2025-10-03 06:18:15
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 20,302 input + 3,959 output = 24,261 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 14 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 1.93 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 65.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 120.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 56.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

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

## True Positives (14)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 7 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 7 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (~54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (8u -> 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points) et ne montre pas de cycle hebdomadaire strict. La dernière commande date d'il y a 31 jours (1er septembre) pour 6 unités. Étant donné l'absence de régularité calendaire, nous nous basons sur la tendance la plus récente pour estimer la prochaine commande probable. Le volume est passé de 8u à 6u; sans autre donnée, la valeur de 6 unités est la plus probable pour le prochain réapprovisionnement.

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 10u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 6u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier / Mensuel (Cycle ~54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u vers 4u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique est trop limité pour établir un cycle hebdomadaire robuste. On observe seulement deux points distants de 54 jours. La dernière commande (septembre) montrait un volume de 4u, en nette diminution par rapport aux 10u de juillet (outlier potentiel ou test de lancement). En l'absence de données N-1 et face à une tendance de réduction du volume unitaire, la valeur la plus probable pour la prochaine occurrence de commande est le maintien du niveau récent le plus bas, soit 4 unités.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier / Mensuel (Intervalle de ~54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (6u vers 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points). On observe une diminution de moitié du volume entre juillet (6u) et septembre (3u). Sans données N-1 pour confirmer une saisonnalité, la tendance immédiate la plus fiable pour minimiser le MAPE est la dernière valeur enregistrée. Le cycle semble être lent (mensuel ou plus), et le jeudi 2 octobre correspond à un délai raisonnable d'un mois après la dernière commande du 1er septembre. Je préconise donc le maintien du dernier volume observé.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 7u vs Médiane: 7u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimestriel (tous les deux mois environ)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (6u vers 7u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique très limité avec seulement deux points de données espacés de deux mois. On observe un cycle d'environ 60 jours : commande début juillet (6u), puis commande début septembre (7u). Suivant cette logique de réapprovisionnement bimestriel, une commande est effectivement attendue pour début octobre ou légèrement après. En l'absence de données plus denses, la dernière valeur observée (7u) est retenue comme la prédiction la plus probable pour maintenir le stock, reflétant une tendance stable ou légèrement croissante.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 7u vs Médiane: 8u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier ~60-50 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 7u et 8u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement deux points de données (8u en juillet et 7u en septembre), le client semble commander environ toutes les 8 semaines. Bien que la date demandée (02/10) soit plus proche de la dernière commande (01/09) que le cycle habituel ne le suggère, les règles imposent de prédire la prochaine quantité probable sans utiliser 0. La tendance est extrêmement stable sur un petit volume. Je privilégie la dernière valeur observée (7u) car elle reflète la demande la plus récente pour ce produit premium bio.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 3u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique / Basse fréquence (~50-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (5u vers 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec seulement deux points de données espacés de deux mois (juillet et septembre), le client semble commander ce produit de niche (chips truffe bio) de manière ponctuelle pour du réassort de stock de sécurité. La dernière commande en date (1er septembre) était de 3 unités, marquant une légère baisse par rapport aux 5 unités de juillet. En l'absence de cycle hebdomadaire clair et compte tenu de la faible rotation, je prédis la reconduction du dernier volume observé (3u) pour la prochaine commande.

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 4u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel à mensuel irrégulier (cycle de 54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (6u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points). On observe une commande en juillet (6u) puis une en septembre (4u) après un intervalle d'environ 8 semaines. La date de prédiction (02 octobre) survient seulement 31 jours après la dernière commande, ce qui est plus court que le cycle précédent de 54 jours. Cependant, selon les règles de gestion des jours hors cycle, nous devons prédire la quantité de la prochaine commande probable. La tendance récente montre une baisse de 6u à 4u. En l'absence de données plus denses, la dernière valeur connue (4u) est retenue comme la base la plus crédible pour la prochaine livraison.

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 4u vs Médiane: 7u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 6u (600.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique (~54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (7u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données. On observe toutefois une baisse de la quantité commandée, passant de 7u en juillet à 4u en septembre. L'intervalle entre les deux commandes est de 54 jours. Comme la date de prédiction (2025-10-02) n'est séparée de la dernière commande que de 31 jours, le cycle n'est pas encore complété, mais selon les règles métier pour les jours hors cycle, nous prédisons le volume de la prochaine commande probable. Compte tenu de la tendance baissière immédiate, la dernière valeur de 4u est retenue comme la base la plus fiable pour la prochaine transaction, malgré l'absence de jour fixe de commande dans la semaine (l'historique montrant un lundi et un mercredi, le jeudi reste cohérent avec l'activité jours ouvrés). Aucun outlier n'est détecté vu le faible échantillon, et l'absence de données N-1 empêche toute analyse de saisonnalité annuelle spécifique au produit NUT05 sur cette période de l'année (octobre). La confiance reste basse à cause du manque de points de comparaison historiques récurrents sur le même mois ou la même saisonnalité annuelle précédente, rendant la prédiction très dépendante de la dernière observation isolée de septembre 2025 (4u). On privilégie la précision de la tendance récente plutôt qu'une moyenne pondérée pour éviter de surestimer le besoin (minimisation du MAPE).

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 4u vs Médiane: 10u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 8u (400.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ tous les 50-60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse observée (10u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points). La dernière commande date du 01/09/2025 (4u), montrant une baisse par rapport à la commande précédente de juillet (10u). Bien que l'intervalle suggère qu'une commande le 02/10 soit légèrement prématurée par rapport au cycle de ~60 jours, les règles B2B imposent de ne pas prédire 0. Je me base sur la dernière valeur connue (4u) comme étant la plus probable pour la prochaine demande d'approvisionnement en l'absence de tendance haussière ou de saisonnalité N-1.

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 4u vs Médiane: 10u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 6u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (~60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -60%
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique est limité à deux points de données très espacés. La commande de juillet (10u) semble être un stock de lancement ou un pic isolé, tandis que la commande plus récente de septembre montre un volume plus faible (4u). En agroalimentaire B2B pour des produits type barres bio, le volume de 4u est plus représentatif d'un réassort de fond de rayon. Bien que le jeudi soit hors des jours observés précédemment (lundi/mercredi), les règles exigent de prédire la prochaine commande probable. Je retiens la dernière valeur connue (4u) comme la plus fiable pour minimiser le risque d'erreur sur un produit à faible rotation.

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~54 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée (8u en juillet vers 4u en septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points). On observe une division par deux du volume entre la commande de juillet (8u) et celle de septembre (4u). En l'absence de cycle hebdomadaire clair et de données N-1, la règle de priorité à la tendance immédiate s'applique. La dernière commande étant de 4u, elle constitue la base la plus fiable pour la prédiction du 2 octobre, malgré l'intervalle de temps fluctuant.

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 4u vs Médiane: 6u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 5u (500.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (~60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (6u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points). On observe un intervalle d'environ deux mois entre la commande de juillet (6u) et celle de septembre (4u). La date cible du 2 octobre se situe seulement 31 jours après la dernière commande, ce qui est plus court que l'intervalle précédent, mais en l'absence de cycle hebdomadaire strict et conformément aux règles de prédiction sur le jour probable suivant, je retiens la quantité de la dernière commande. La tendance étant passée de 6 à 4 unités, le volume de 4u est le plus probable pour ce produit de niche bio.

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 6u vs Médiane: 6u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 5u (500.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier env. 30-60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse (10u vers 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (2 points). La dernière commande date d'il y a 31 jours (1er septembre) pour 6 unités, faisant suite à une commande de 10 unités 54 jours plus tôt. On observe un ralentissement du volume unitaire. En l'absence de cycle hebdomadaire clair et de données N-1, la dernière valeur observée (6u) constitue la base la plus fiable pour la prochaine commande, en supposant que le client maintient son nouveau palier de consommation basique.

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (~60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est limité à deux points de données, mais ceux-ci sont parfaitement constants à 4 unités. Bien que l'intervalle entre les deux commandes soit de 54 jours (du 09 juillet au 01 septembre), indiquant un rythme de réapprovisionnement lent, la stabilité du volume unitaire suggère un besoin de fond fixe. La date de prédiction (02 octobre) tombe 31 jours après la dernière commande ; bien que ce soit plus court que l'intervalle précédent, en l'absence de jour de cycle strict et suivant les règles de ne jamais prédire 0 pour un jour hors cycle, je préconise de maintenir la quantité historique de 4 unités pour couvrir la prochaine commande probable.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 7u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 7u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 3u
- 2025-07-09 11:05:21: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>11. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 6u
- 2025-07-09 11:05:21: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 07:11:26: 4u
- 2025-07-09 11:05:21: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T11:19:27.927Z*
