# Rapport Backtest - Client DLL AD GERAARDSBERGEN

## Contexte

- **Client** : DLL AD GERAARDSBERGEN (ID: 38803)
- **Commande réelle** : S39064
- **Date commande** : 2025-09-08 06:09:55
- **Date cutoff système** : 2025-09-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 24
- **Tokens**: 19,944 input + 6,340 output = 26,284 total


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
- **Pattern temporel**: Commande sporadique ultra-faible (intervalle 15-45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et fragmentée pour cette référence premium (Truffes). Sur les 6 dernières commandes s'étalant sur plus d'un an, la quantité commandée est systématiquement de 1u ou 2u, sans saisonnalité apparente en septembre. Les deux dernières commandes récentes (juin et juillet 2025) sont stables à 1u. Étant donné qu'aucune commande n'a été passée en août, un besoin de réapprovisionnement de 1 unité est le scénario le plus probable pour maintenir le stock sans risque de péremption inutile.

</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique non linéaire, environ une commande toutes les 3 à 6 semaines.
- **Saisonnalité**: none
- **Tendance**: Hausse légère, passage d'une moyenne de 2.5u à 3u.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande irrégulière sans cycle hebdomadaire défini. La moyenne historique se situe autour de 2.8 unités. En l'absence de commande depuis le 17 juillet (soit plus de 50 jours), un besoin de réapprovisionnement est probable. On retient la médiane historique de 3 unités pour couvrir la demande de fond sans surstocker ce produit à faible rotation.

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique non linéaire, environ tous les 15 à 30 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière mais persistante sur ce produit de niche. La dernière commande remonte à fin juillet (soit ~50 jours), ce qui suggère qu'un réapprovisionnement de confort est imminent malgré la date atypique (dimanche). Le volume historique est quasi systématiquement de 1 unité (le 2u de 2024 étant considéré comme un outlier ou un besoin exceptionnel). Je préconise 1 unité pour maintenir le stock minimal sans risque de surstockage sur un produit à rotation lente.

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
- **Pattern temporel**: Irrégulier avec intervalles de 15 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais de très faible volume (1 unité par commande). Bien que les intervalles soient irréguliers, il n'y a eu aucune commande depuis le 17 juillet 2025 (~50 jours). Compte tenu du cycle historique de 15-45 jours, une commande de réapprovisionnement de 1 unité est statistiquement due pour maintenir le stock de ce produit à faible rotation. La date demandée (dimanche) suggère une préparation de commande pour un début de semaine, ce qui est cohérent avec les commandes précédentes du lundi.

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique toutes les 3 à 6 semaines
- **Saisonnalité**: none
- **Tendance**: Stable entre 1 et 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière (6 commandes en 18 mois). Les quantités oscillent strictement entre 1 et 2 unités. La dernière commande date d'il y a plus de 50 jours (17 juillet), ce qui suggère qu'un besoin de réapprovisionnement pourrait survenir, mais le volume ne dépasse jamais le seuil de fond. Étant donné la date de prédiction un dimanche (jour inhabituel) et l'absence de tendance à la hausse, la quantité la plus probable pour minimiser le MAPE est l'unité minimale.

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
- **Pattern temporel**: Sporadique (tous les 1 à 2 mois environ)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière pour ce produit de niche (Mayonnaise Wasabi). Les commandes n'excèdent jamais 2 unités, avec une récurrence marquée à 1 unité lors des transactions les plus récentes (avril 2024, juin 2024, juin 2025). Bien que la date demandée soit un dimanche (jour hors cycle), le faible volume historique et l'absence de commande depuis juin 2025 suggèrent un besoin de réapprovisionnement unitaire. La prédiction de 1 unité est la plus probable pour maintenir le stock sans risque de péremption inutile.

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
- **Pattern temporel**: Rythme très sporadique (tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et espacée (4 commandes sur 18 mois). La dernière commande date du 30 juin 2025 pour 1 unité. Bien qu'un cycle de ~70 jours semble émerger (Avril -> Juin), la date de prédiction tombe un dimanche, jour où aucune commande n'a jamais été enregistrée. Cependant, pour minimiser le MAPE sur un produit à rotation aussi faible, la prédiction de l'unité minimale est la plus probable si le client suit son cycle de réapprovisionnement de fin de trimestre.

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à faible volume (cycle > 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à très bas volume (2-3 unités)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement lente avec seulement 4 commandes enregistrées sur 15 mois. La dernière commande date de plus de deux mois (30 juin), suggérant un besoin de réapprovisionnement imminent pour maintenir le stock de sécurité. Le volume historique oscille entre 2 et 3 unités par commande. Étant donné la faible fréquence et l'absence de saisonnalité marquée en N-1, je préconise le maintien de la quantité minimale observée lors de la dernière commande (2 unités) pour couvrir la demande résiduelle sans surstocker ce produit à faible vélocité.

</details>


<details>
<summary><strong>9. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique à très faible volume (tous les 1 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible rotation (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et irrégulière. L'historique montre des commandes de 1 à 2 unités espacées de plusieurs mois (avril, juin 2024, puis juin 2025). La dernière commande datant du 30 juin 2025 (1 unité), et le cycle moyen semblant se situer autour de 60-90 jours pour ce point de vente, une commande de réapprovisionnement de 1 unité est probable pour septembre. La confiance est faible car le volume est proche du seuil de rupture de stock permanent ou de l'arrêt de référencement.

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
- **Pattern temporel**: Commande sporadique, intervalle long (30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière avec une absence totale de commandes durant les 3 derniers mois. Le volume historique oscille strictement entre 2 et 3 unités. En l'absence de signal de croissance ou de saisonnalité marquée pour ce produit spécifique sur cette période, la moyenne historique basse (2u) est privilégiée pour minimiser l'erreur de prédiction, d'autant plus que la commande tombe un dimanche, jour inhabituel.

</details>


<details>
<summary><strong>11. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, environ 1 commande par semestre
- **Saisonnalité**: none
- **Tendance**: Instable, faible volume (0-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande extrêmement sporadique sans aucun pattern cyclique ou hebdomadaire détectable. En N-1, le produit a circulé par unités isolées (1u ou 2u) avec des intervalles de plusieurs mois. Étant donné l'absence totale de commandes sur les 3 derniers mois et le fait que la demande tombe un dimanche (jour hors livraison standard B2B habituel), la probabilité d'une commande volumineuse est nulle. Cependant, pour maintenir un flux minimal basé sur la moyenne historique basse (0,75u), la recommandation se porte sur 1 unité au cas où un réapprovisionnement de sécurité est déclenché.

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

*Rapport généré automatiquement le 2025-12-18T11:40:39.294Z*
