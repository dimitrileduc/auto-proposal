# Rapport Backtest - Client Le bon Wagon Eupen

## Contexte

- **Client** : Le bon Wagon Eupen (ID: 113)
- **Commande réelle** : S40194
- **Date commande** : 2025-11-12 10:42:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 14,475 input + 5,858 output = 20,333 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 26 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
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
| **MAE** | 0.81 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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
| [MF0033] MF Tarti Poivron chilli 250g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0047] MF Mayonnaise 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 5 | 3.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (une seule occurrence)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune anomalie détectée sur l'unique point de donnée (1u). Étape 2 : Pas de données N-1 pour évaluer la saisonnalité, mais le secteur des barres énergétiques bio est généralement stable en novembre. Étape 3 : Une seule commande enregistrée il y a environ un mois (8 octobre), rendant l'identification d'une tendance ou d'un cycle hebdomadaire impossible. Étape 4 : En l'absence de récurrence et par esprit conservateur pour éviter le sur-stockage d'un produit à faible rotation apparente, la recommandation se base sur le volume historique minimal de 1 unité.

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.44u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 3u en juillet 2024 est traitée comme un léger outlier saisonnier. La demande de fond se situe entre 1 et 2 unités. Étape 2: Faible impact saisonnier global, bien qu'un léger pic estival soit noté en N-1. Nous sommes en novembre, période historiquement calme pour ce produit spécifique avant les fêtes. Étape 3: La tendance est stable. La dernière commande (août) de 2u confirme un maintien du volume par commande malgré une fréquence espacée. Étape 4: En appliquant une approche conservatrice sur un produit à faible rotation, une commande de 2 unités permet de couvrir les deux prochains mois sans risque de sur-stockage majeur, tout en respectant le volume de la dernière commande enregistrée.

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 1.5 à 2 mois
- **Saisonnalité**: none
- **Tendance**: Baisse du volume et de la fréquence -50%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités oscillent naturellement entre 1u et 2u. Étape 2: Aucune saisonnalité marquée n'apparaît entre 2024 et 2025 sur le mois de novembre. Étape 3: On observe un ralentissement significatif avec une seule commande de 1u sur les 6 derniers mois (août), contre un rythme plus soutenu en 2024. Étape 4: La demande de fond est faible. Compte tenu de la faible rotation récente et de la volonté de ne pas sur-stocker un produit dont la fréquence s'essouffle, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans risque de péremption ou de stock mort localisé sur cette référence de snacking de niche (Noix de cajou Curry). L'historique lacunaire en 2025 baisse l'indice de confiance à 'low'.', 'recommended_quantity': 1, 'confidence': 'low', 'reasoning': 'Étape 1: Aucune valeur aberrante détectée, les quantités oscillent naturellement entre 1u et 2u. Étape 2: Aucune saisonnalité marquée n\'apparaît entre 2024 et 2025 sur le mois de novembre. Étape 3: On observe un ralentissement significatif avec une seule commande de 1u sur les 6 derniers mois (août), contre un rythme plus soutenu en 2024. Étape 4: La demande de fond est faible. Compte tenu de la faible rotation récente et de la volonté de ne pas sur-stocker un produit dont la fréquence s\'essouffle, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans risque de péremption ou de stock mort.

</details>


<details>
<summary><strong>4. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (moyenne tous les 45-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (dernière commande au 19/08)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune quantité anormale n'est détectée. Les volumes varient historiquement entre 1 et 2 unités, correspondant à une demande de niche stable. ÉTAPE 2 (SAISONNALITÉ): Pas de pattern saisonnier clair; le produit est commandé de manière aléatoire au cours de l'année sans pic corrélé à la période de novembre en N-1. ÉTAPE 3 (TENDANCE): Sévère ralentissement observé; une seule commande passée depuis août 2024. Le cycle de réapprovisionnement semble s'allonger. ÉTAPE 4 (RECOMMANDATION): Avec une demande de fond à 1.4 unités mais une fréquence de rotation en baisse, la recommandation est de 1 unité pour couvrir le besoin minimal sans risque de sur-stockage sur un produit à faible rotation. La confiance est faible en raison de l'irrégularité des données historiques et de l'absence de commandes récentes (lacune de 3 mois).

</details>


<details>
<summary><strong>5. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 4 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à la baisse, 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Pas d'outliers détectés, les volumes sont constants entre 1u et 2u. ÉTAPE 2 (Saisonnalité): Pas de pic significatif en novembre N-1 (dernière commande fin octobre 2024), le produit semble avoir une demande sporadique peu liée aux fêtes. ÉTAPE 3 (Tendance): La dernière commande date de 3 mois (août 2025) pour 1u, marquant un ralentissement par rapport à 2024. ÉTAPE 4 (Recommandation): Au vu de la faible rotation (produit de niche type condiment) et de l'absence de commande depuis août, une commande de réapprovisionnement minimale de 1 unité est préconisée pour couvrir le besoin sans risque de perte sur ce format 250g. Le niveau de confiance est faible car les données sont très espacées dans le temps (6 commandes en 2 ans). Maison conservative : 1u suffit largement pour un produit au cycle long et irrégulier sur un mardi standard sans événement promotionnel associé au raifort/pomme à cette date précise de novembre (hors tradition locale spécifique non mentionnée).er l'entier minimal pour limiter le stock mort d'un produit à rotation lente (slow mover).er 1u pour maintenir une présence stock minimale sans risque financier significatif sur un mardi standard de novembre sans promotion associée identifiée (hors éventuelle tradition locale spécifique non mentionnée). On évite le sur-stockage sur un produit dont la tendance long terme baisse de 2u à 1u par acte d'achat.er 1u pour maintenir une présence stock minimale sans risque financier significatif sur un mardi standard de novembre sans promotion associée identifiée (hors éventuelle tradition locale spécifique non mentionnée). On évite le sur-stockage sur un produit dont la tendance long terme baisse de 2u à 1u par acte d'achat.er 1u afin de restocker le minimum vital pour ce produit à rotation lente (slow mover), sachant que la demande de fond est passée de 2u à 1u par commande sur la dernière occurrence.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (Trimestriel/Semestriel)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u en 2024 vers 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et sporadique pour ce produit (Tartinable Tomate Ail des ours). ÉTAPE 1: Aucune valeur n'est identifiée comme outlier car les volumes oscillent uniquement entre 1u et 2u. ÉTAPE 2: La saisonnalité est inexistante ou non détectable avec ce volume (pas de pic estival ou festif cohérent entre N et N-1). ÉTAPE 3: On observe un ralentissement, la dernière commande datant d'août 2025 (il y a 3 mois) pour 1 seule unité. ÉTAPE 4: Étant donné l'absence de commande depuis 90 jours et la tendance à la baisse des volumes unitaires, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin sans risque de surstockage sur un produit à rotation lente. La confiance est faible car l'historique récent est pauvre (une seule donnée en 2025). High risk of overstocking if ordering more than 1 unit. Current date Tuesday matches the historical ordering day for the last two occurrences (Aug 2025, June 2024). Short shelf life typical for spreads also dictates a lean approach here 1 unit is enough to test the demand after the 3-month gap. Final determination: 1 unit to minimize waste on a slow mover product near year-end cycle where demand previously dropped to 1u in late 2023/early 2024 period as well. Order just to maintain presence on shelf if inventory is zero-ed out but don't stock multiple units given current negative trend line from 2 back to 1 unit per order cycle observed since spring 2024 until today's state in late 2025 period contextually speaking here after the long hiatus since August 19th order event recorded in history logs provided for the simulation task today precisely. No seasonality detected as mentioned earlier so strictly following baseline of the most recent single unit order as the new reference point for safety stock levels in a low-rotation context like this one.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 3u (60.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ tous les 45 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen de 2u à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les commandes oscillent entre 1u et 3u, reflétant une demande de fond faible mais constante. ÉTAPE 2: Faible saisonnalité observée en fin d'année (octobre/décembre), avec des volumes restant dans la moyenne basse. ÉTAPE 3: La dernière commande date d'août (2u), suggérant un besoin imminent de réapprovisionnement après un intervalle de près de 3 mois, conforme au rythme historique lent. ÉTAPE 4: En suivant une approche conservatrice pour ce produit à rotation lente, une commande de 2 unités permet de couvrir la demande sans risquer un surstockage inutile avant la période hivernale.

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 84 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée car l'historique est quasi inexistant. Étape 2: Absence de données N-1 empêchant une analyse de saisonnalité fiable. Étape 3: Une seule commande enregistrée en août (mardi), soit il y a 3 mois. La demande semble sporadique ou très faible. Étape 4: En l'absence de récurrence établie, la recommandation se base sur le maintien du stock minimum de sécurité observé lors de la dernière transaction (1u). Approche conservatrice privilégiée pour éviter le surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel / Très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): L'unique commande historique de 1u ne présente aucun signe d'anomalie ou de promotion. ÉTAPE 2 (Saisonnalité): Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut sur ce volume unitaire. ÉTAPE 3 (Tendance): Rythme extrêmement lent avec une seule commande en 3 mois. La demande est stable mais très sporadique. ÉTAPE 4 (Recommandation): En l'absence de données de vente massives et au vu de la faible rotation, le maintien d'un stock de sécurité minimal de 1 unité est recommandé pour éviter le sur-stockage tout en assurant une présence produit.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 1u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 2u
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 3u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 3u
- 2024-04-25 08:12:11: 3u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | Stock prédit: 0.4u (25j restants) → prédit 2u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [MF0014] MF Olives noires 500g | 1 | Stock prédit: 0.2u (26j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.4u (-23j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: -0.7u (-34j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.0u (3j restants) → prédit 2u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: -0.6u (-31j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:14:54.414Z*
