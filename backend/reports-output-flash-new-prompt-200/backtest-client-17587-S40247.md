# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S40247
- **Date commande** : 2025-11-12 10:37:22
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 30,855 input + 11,943 output = 42,798 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 74.3% | 35 produits prédits, 26 corrects |
| **Rappel** | 89.7% | 29 produits réels, 26 détectés |
| **F1-Score** | 81.3% | Score équilibré global |

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
| **MAE** | 0.46 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 32.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
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

## True Positives (26)

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
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (cycle de 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u en 2024 -> 1u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités étant très faibles (1-2u). Étape 2: Aucune saisonnalité marquée n'apparaît entre 2024 et 2025 pour ce produit de niche. Étape 3: On observe un ralentissement de la demande de fond, passant d'un standard de 2 unités en 2024 à 1 unité lors des deux dernières occurrences de 2025. Étape 4: Compte tenu de la faible rotation et de la tendance baissière récente, une commande de 1 unité est préconisée pour couvrir les besoins sans risque de surstockage.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 à 38 jours
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents (1-2u). Étape 2: Aucune donnée N-1 disponible, mais le segment chips bio 125g est stable hors période estivale/fêtes, impact saisonnier considéré comme nul ici. Étape 3: On observe une légère tendance à la hausse, passant de 1 unité en août à 2 unités constantes en septembre et octobre. Le délai entre les commandes se raccourcit (38 jours puis 21 jours de battement). Étape 4: La demande de base se stabilise à 2 unités. Bien que la commande tombe un mardi (hors jours habituels), le stock de sécurité et la tendance récente justifient le maintien de 2 unités pour couvrir le mois de novembre.

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 5-6 semaines
- **Saisonnalité**: none
- **Tendance**: Baisse du volume (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune valeur aberrante n'est détectée au vu du très faible historique, les volumes de 1u et 2u sont cohérents pour un produit premium. ÉTAPE 2 (SAISONNALITÉ): Pas de données N-1 disponibles pour confirmer une saisonnalité, bien que les chips truffées soient souvent liées aux fêtes de fin d'année. ÉTAPE 3 (TENDANCE): On observe une baisse de volume entre septembre et octobre. La fréquence est trop faible pour établir un cycle hebdomadaire. ÉTAPE 4 (RECOMMANDATION): Avec seulement deux points de données très espacés et une tendance à la baisse, la prudence impose une commande minimale de 1 unité pour couvrir le besoin immédiat sans risquer le sur-stockage sur un produit à faible rotation. L'approche est conservatrice en raison du manque de profondeur historique (confiance faible). Aucun ajustement saisonnier majeur n'est appliqué avant d'entrer plus concrètement dans la période de décembre (fêtes). Loganique de 1u respecte la dernière commande observée en octobre (demande de fond réelle). Enfin, le mardi 11 nov est un jour férié en France, ce qui suggère un besoin ponctuel spécifique ou une préparation de milieu de semaine inhabituelle, justifiant de ne pas forcer le volume par rapport à la tendance de 1u observée en octobre. Il est préférable de commander 1u à nouveau pour valider la stabilité de la demande à ce niveau avant d'augmenter les stocks pour décembre (fêtes). Pas d'effet calendaire net identifié sur le jour de la semaine. La confiance est faible car seulement 2 commandes sont présentes dans l'historique récent et aucune en N-1 pour confirmer les pics de fin d'année éventuels sur cette référence premium bio truffe. L'objectif est ici d'éviter l'obsolescence et le sur-stockage d'une référence à rotation lente (slow-mover). On reste sur 1 unité pour le moment.

</details>


<details>
<summary><strong>4. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 2 mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur les deux points de données existants (1u à chaque fois). Étape 2: Absence de données N-1 et volume trop faible pour identifier une saisonnalité. Étape 3: La fréquence est irrégulière (60 jours d'intervalle), mais le volume par commande est constant (1u). Le réapprovisionnement se fait au déclenchement d'un seuil critique de stock. Étape 4: En l'absence de tendance à la hausse et compte tenu du faible historique, la recommandation reste conservatrice à 1 unité pour couvrir le besoin immédiat sans risquer le sur-stockage sur un produit à rotation lente pour ce client spécifique. La confiance est faible car l'historique est très restreint (2 commandes).  Le passage de commande un mardi ne semble pas impacter le volume par rapport aux jours précédents (lundi/jeudi). L'objectif est de maintenir la disponibilité minimale du thé blanc bio sans immobilisation de trésorerie inutile sur une référence peu mobile (Slow-mover). Aucun ajustement saisonnier ne peut être justifié par les données actuelles. On conserve donc la baseline de 1u. Finalisation par conversion en entier (1). Niveau de confiance bas en raison du manque de profondeur historique sur l'année N-1 et du faible nombre d'itérations récentes (n=2). Recommandation prudente : 1 unité suffit pour couvrir la demande type observée sans charger les stocks inutilement sur une période de fin d'année où le thé glacé peut potentiellement ralentir au profit de boissons chaudes, bien que non prouvé ici par les chiffres fournis. On applique la règle du minimum vital pour ce SKU spécifique afin d'éviter tout risque de péremption ou de stock mort (dead stock) sur un produit bio dont la DLC pourrait être courte par rapport à un thé conventionnel à base de concentré. En résumé : 1 unité est recommandée pour répondre à la demande ponctuelle historique sans excès de prudence injustifié par le volume réel des ventes constatées entre août et octobre 2025. 

</details>


<details>
<summary><strong>5. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une préférence marquée pour le lundi (80% des commandes)
- **Saisonnalité**: strong
- **Tendance**: Stable à faible volume (1u-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'est détectée, les volumes oscillent entre 1 et 2 unités. Étape 2: Bien que l'historique 2024 soit faible, le produit (Tartinade Truffes) est très sensible à la saisonnalité de fin d'année (novembre/décembre). Étape 3: La demande récente est stable mais peu fréquente (mensuelle). Étape 4: Nous sommes à l'approche des fêtes de fin d'année. Malgré un volume de fond de 1.5u, l'anticipation de la période festive justifie une commande de 2 unités pour couvrir la demande potentielle de mi-novembre sans risquer un surstockage important sur un produit à rotation lente.

</details>


<details>
<summary><strong>6. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cyclicité longue irrégulière environ tous les 21 à 30 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune commande n'est identifiée comme outlier, les volumes étant très stables entre 1 et 3 unités sur 2 ans. Étape 2 (Saisonnalité) : Faible impact saisonnier visible malgré le secteur agroalimentaire ; la période de novembre N-1 montre une commande de 1u, suggérant un besoin minimal en fin d'année. Étape 3 (Tendance) : On observe un ralentissement récent avec des commandes de 2u puis 1u en septembre/octobre, contre une moyenne de 2.25u l'an dernier. Étape 4 (Recommandation) : En se basant sur la consommation moyenne lissée et l'historique de novembre dernier, une quantité de 2u est préconisée pour couvrir les besoins du mois à venir tout en évitant le surstockage sur une référence à rotation lente.

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.88u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ toutes les 6 à 8 semaines), principalement le lundi.
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les commandes oscillent de manière cohérente entre 1 et 3 unités. Étape 2: La saisonnalité est faible, bien que l'historique N-1 montre une commande de 2u en novembre, confirmant un besoin stable en fin d'année. Étape 3: La tendance récente est stable avec un léger ralentissement de la fréquence (dernière commande il y a 5 semaines). Étape 4: En tenant compte de la demande de fond de ~2 unités et du fait que la dernière commande de 2u remonte à début octobre, un réapprovisionnement de 2 unités est optimal pour couvrir les 6-8 prochaines semaines sans risque de sur-stockage.

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 21 à 40 jours (moyenne ~30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune anomalie détectée, le produit est extrêmement stable avec des commandes constantes de 2 unités depuis début 2024. ÉTAPE 2 (Saisonnalité) : Comparaison N-1 (nov 2023 à 1u vs nov 2024 à 2u) montre une maturité du produit sans cycle saisonnier marqué. ÉTAPE 3 (Tendance) : Les deux dernières commandes (octobre et septembre 2025) confirment le maintien du volume à 2 unités toutes les 3-4 semaines. ÉTAPE 4 (Recommandation) : Le délai depuis la dernière commande (06/10) est de 36 jours, ce qui correspond exactement au cycle de réapprovisionnement habituel. La stabilité parfaite de l'historique justifie une commande de 2 unités.

</details>


<details>
<summary><strong>9. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques sur deux ans montre une demande extrêmement stable mais de faible volume (1 à 3 unités par commande). Aucun outlier n'a été détecté, les volumes étant constants. Une légère saisonnalité semble apparaître en fin d'année (novembre 2023, octobre 2024, octobre 2025) liée à la nature du produit (Potiron). La dernière commande datant du 06/10/2025 (2u), le cycle habituel de ~45 jours place la commande actuelle (11/11) dans la fenêtre de réapprovisionnement logique. La tendance est stable. On recommande 2 unités pour couvrir la période automnale sans risque de sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>10. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 21 à 35 jours, majoritairement le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u avec un léger tassement à 1u en août
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable de 2 unités par commande depuis fin 2023. ÉTAPE 1: Aucun outlier détecté, les volumes oscillent de manière cohérente entre 1 et 3u. ÉTAPE 2: La saisonnalité est faible, bien qu'un léger pic à 3u ait été observé en août/septembre N-1, il ne s'est pas répété en 2025. ÉTAPE 3: La tendance récente confirme un rythme mensuel (tous les 20-30 jours) avec une prédominance pour les lundis matins. ÉTAPE 4: La dernière commande remontant au 06/10 (il y a 5 semaines), le client est en cycle de réapprovisionnement. Le passage de 1u en août à 2u en septembre/octobre suggère un maintien de la base standard de 2 unités.

</details>


<details>
<summary><strong>11. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 40 à 60 jours principalement les lundis et jeudis
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation lente avec une demande extrêmement stable de 1 à 2 unités par commande. Etape 1: Aucun outlier détecté, les volumes sont constants. Etape 2: Aucune saisonnalité marquée entre N et N-1, le produit ne semble pas lié à des cycles calendaires spécifiques. Etape 3: La tendance récente confirme un besoin de 1u tous les 1.5 à 2 mois. Etape 4: La dernière commande datant d'il y a 5 semaines (06/10), nous entrons dans la fenêtre de réapprovisionnement habituelle. Compte tenu du jour de commande (mardi vs lundi habituel) et de la faible rotation, une quantité de 1u est recommandée pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>12. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 jours le lundi
- **Saisonnalité**: none
- **Tendance**: Baisse légère (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante identifiée au vu du faible historique (1u et 2u). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le kombucha soit habituellement plus consommé en période chaude. Étape 3: On observe un espacement de 3 semaines entre les commandes, avec un volume qui a diminué de 2 unités à 1 unité. Étape 4: La dernière commande datant du 06/10, un réapprovisionnement semble légitime au 11/11 pour compenser la rupture probable, mais le faible volume historique et l'absence de régularité forte imposent une approche conservatrice de 1 unité pour minimiser le risque de sur-stockage sur un produit à rotation lente ou irrégulière sur ce point de vente spécifique (B2B). Un niveau de confiance 'low' est attribué en raison du manque de profondeur des données historiques (seulement 2 points). Nous recommandons 1 unité pour tester la reprise de la consommation après un mois d'absence de commande enregistrée sur ce cycle de 3 semaines habituel (rupture probable). L'écart entre le jour de commande habituel (lundi) et le jour actuel (mardi) n'est pas significatif au vu de la faible fréquence globale du produit sur le point de vente observé (B2B). Cette recommandation est prudente pour tester la rotation réelle du produit après un mois d'absence de commande alors que le cycle observé était de 3 semaines. L'écart entre le lundi (jour habituel) et le mardi actuel n'est pas critique ici compte tenu de la faible rotation. Une quantité de 1u permet de couvrir une demande de fond minimale constatée sans immobiliser de capital sur un produit incertain sur ce site spécifique (B2B). Le 11 novembre étant un jour férié dans certains pays européens, le décalage au mardi 11 pourrait être lié à ce calendrier, mais la prédiction reste à 1u pour plus de sécurité opérationnelle au vu de l'historique réduit. Cette stratégie permet de relancer la visibilité du produit tout en limitant les risques de pertes sur un produit bio (DLC parfois plus courte). Un suivi est conseillé pour ajuster après la prochaine réception si les ventes repartent à la hausse vers les 2u initialement observées en septembre. Pour l'heure, 1u est le choix le plus rationnel. Cette quantité permet de réamorcer le flux logistique sans engager de stock excessif sur une référence dont la dynamique n'est pas encore solidement établie avec seulement deux points d'ancrage en 3 mois. La recommandation finale de 1u est dictée par la prudence Supply Chain standard pour les références 'C' ou à faible rotation intermittente. Cette approche permet une gestion saine du Besoin en Fonds de Roulement tout en offrant une réponse à l'absence potentielle du produit en rayon depuis fin octobre selon le cycle de 21 jours identifié précédemment entre le 15/09 et le 06/10. La recommandation est donc de 1u.

</details>


<details>
<summary><strong>13. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques toutes les 3 semaines environ
- **Saisonnalité**: none
- **Tendance**: Baisse du volume unitaire (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 commandes). On observe un comportement sporadique le lundi avec des volumes faibles (1 à 2 unités). Le passage de 2 unités le 15/09 à 1 unité le 06/10 suggère une demande de fond très faible ou un reliquat de stock encore présent chez le client. Aucun outlier n'est détecté car les volumes sont minimaux. Étant donné l'absence d'historique N-1 pour confirmer une saisonnalité et la tendance baissière sur les deux derniers points, je recommande la quantité minimale de 1 unité pour couvrir le besoin immédiat sans risque de sur-stockage massif, surtout pour une commande passée un mardi hors du cycle lundi habituel (potentiel dépannage). Ils pourront ajuster lors du prochain cycle de 3 semaines si nécessaire. La confiance est faible dû au manque de profondeur des données historiques (n=2). Quantité conservatrice de 1 préconisée conformément aux instructions de prudence en B2B agroalimentaire sur produits à faible rotation apparente ici (RISH02). Aucun événement promotionnel n'est identifié pour cette période de novembre sans historique spécifique pour ce produit BIO chez ce client particulier. Recommandation finale : 1 unité par mesure de sécurité anti-gaspillage sur un produit à DLC courte probable (Kombucha). Baseline de 1.5 correspondant à la moyenne brute des deux points récents rabaissée par précaution de stock de sécurité fin de mois/cycle long de rotation observé sur les 8 dernières semaines.

</details>


<details>
<summary><strong>14. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 21 jours environ, commande le lundi
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune commande anormale identifiée sur les deux points de données disponibles (1u et 2u). Étape 2 (Saisonnalité) : Données N-1 absentes, impact jugé neutre par défaut pour ce type de produit bio/premium en novembre. Étape 3 (Tendance) : On observe une légère progression entre août et septembre, avec un rythme de commande approximatif toutes les 3 semaines le lundi matin. Étape 4 (Recommandation) : Malgré le faible historique, la demande de fond se situe entre 1 et 2 unités. Étant donné que la dernière commande (2u) remonte à presque deux mois (57 jours), il y a un risque élevé de rupture de stock ou de besoin de réapprovisionnement immédiat. Je recommande 2 unités pour couvrir la demande tout en restant conservateur face à l'irrégularité du cycle.

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle basse fréquence 21j, typiquement le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les deux seules commandes enregistrées sont identiques (2u), aucune anomalie détectée. ÉTAPE 2 (Saisonnalité) : Données N-1 absentes, impact saisonnier impossible à confirmer mais le volume suggère un produit de niche ou fond de rayon. ÉTAPE 3 (Tendance) : La demande est parfaitement stable à 2 unités avec un intervalle de 21 jours entre les commandes. La dernière commande date de 57 jours, ce qui suggère une rupture de stock ou un besoin immédiat de réapprovisionnement. ÉTAPE 4 (Recommandation) : Malgré le retard de cycle, le volume historique est très faible et constant. Je recommande de maintenir la quantité de base de 2 unités pour couvrir le besoin sans risque de sur-stockage massif sur un produit dont la rotation semble lente ou irrégulière. Confiance faible due au volume de données restreint (2 points). Les 2u constituent la demande de fond sécuritaire identifiée car nous n'avons aucun signal de croissance sur ce produit bio premium spécifique à cette date de novembre (hors pics festifs encore non visibles). Note : Le passage de commande le mardi au lieu du lundi habituel ne justifie pas de modification de quantité ici car le cycle de 21 jours a déjà largement été dépassé, signalant un besoin de restockage de base plutôt qu'une commande de flux tendu calendaire précise après 2 mois de silence sur cette référence de chips premium bio paprika fumé 125g pour éviter la rupture de stock totale du rayon sans pour autant engendrer un surplus coûteux de marchandise à faible rotation relative sur ce segment spécifique bio premium agroalimentaire B2B pendant la période automnale pré-fêtes de fin d'année 2025 selon le calendrier client fourni dès le 2025-11-11 mardi actuel d'analyse supply chain experte senior agro.

</details>


<details>
<summary><strong>16. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (une seule occurrence enregistrée)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Aucune donnée aberrante car il n'existe qu'une seule commande de 1u. ÉTAPE 2 : Absence d'historique N-1 pour valider une saisonnalité, bien que le kombucha soit généralement plus consommé en période chaude. ÉTAPE 3 : Aucun historique récent autre qu'une commande vieille de 2 mois (septembre), empêchant de définir une tendance claire. ÉTAPE 4 : En l'absence de récurrence et face à un historique très pauvre, la recommandation reste sur le volume minimum de commande historique (1u) pour éviter tout risque de sur-stockage sur un produit à rotation apparemment faible.

</details>


<details>
<summary><strong>17. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 8 semaines
- **Saisonnalité**: none
- **Tendance**: Indéterminée - Volume critique insuffisant
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée anormale car l'historique est quasi inexistant (un seul point de donnée). Étape 2: Absence de données N-1 empêchant toute analyse de saisonnalité fiable, bien que le kombucha soit généralement plus consommé en période chaude. Étape 3: Pas de tendance identifiable avec une seule commande datant de mi-septembre. Étape 4: En l'absence de récurrence établie et pour éviter le sur-stockage sur un produit à rotation lente ou à faible historique, la préconisation minimale de 1 unité est appliquée pour tester la reprise de la demande.

</details>


<details>
<summary><strong>18. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (unique occurrence)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée car l'historique ne contient qu'une seule commande unitaire. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le secteur limonade soit météo-sensible. Étape 3: La dernière commande de 1 unité remonte à plus de 2 mois (août), suggérant une rotation très faible ou un achat d'échantillonnage. Étape 4: En l'absence de récurrence et face à un historique quasi vide, la recommandation reste conservatrice au minimum vital (1 unité) pour couvrir une éventuelle demande ponctuelle sans risque de sur-stockage.

</details>




### 📊 Données d'Input LLM (18 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 11:48:15: 1u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 3u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-04-11 06:31:38: 1u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-06-26 06:47:10: 2u
- 2024-05-16 07:09:48: 2u
- 2024-04-11 06:31:38: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 2u
- 2024-08-05 06:26:02: 2u
- 2024-05-16 07:09:48: 3u
- 2024-02-05 13:12:52: 1u
- 2023-11-21 07:34:13: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 2u
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 12:55:57: 3u
- 2024-08-05 06:26:02: 3u
- 2024-06-26 06:47:10: 2u
- 2024-03-18 09:21:22: 2u
- 2024-02-05 13:12:52: 2u
- 2024-01-04 15:45:16: 2u
- 2023-11-21 07:34:13: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV139] LV Tartinade Paprika Chili 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:26:02: 1u
- 2024-05-16 07:09:48: 1u
- 2024-04-11 06:31:38: 2u
- 2024-02-05 13:12:52: 1u
- 2024-01-04 15:45:16: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:26:46: 1u
- 2025-09-15 06:21:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 2u
- 2025-08-25 06:29:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [RISH01] RISH kombucha BIO - original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>17. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:21:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>18. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:29:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (9)

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
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.4u (13j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.6u (29j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.5u (20j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.4u (-8j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: -1.7u (-47j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: -0.1u (-9j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: -0.5u (-20j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.9u (-43j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 6 | Stock prédit: -0.9u (-44j restants) → prédit 6u mais non commandé |


---

## False Negatives (3)

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
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock suffisant: 0.6u (50j restants > seuil 30j) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock suffisant: 0.7u (37j restants > seuil 30j) |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock suffisant: 1.4u (84j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:10:20.740Z*
