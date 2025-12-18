# Rapport Backtest - Client croquez Local

## Contexte

- **Client** : croquez Local (ID: 17591)
- **Commande réelle** : S39916
- **Date commande** : 2025-11-14 10:24:13
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 29,935 input + 10,443 output = 40,378 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 69.0% | 42 produits prédits, 29 corrects |
| **Rappel** | 87.9% | 33 produits réels, 29 détectés |
| **F1-Score** | 77.3% | Score équilibré global |

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
| **MAE** | 0.90 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 69.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 18 | Avec erreur |

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

## True Positives (29)

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
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV146] LV Sauce Aïoli 200 ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV188] LV Tartinade Aubergine  380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (20 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (tous les 30 à 60 jours)
- **Saisonnalité**: strong
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont faibles et constants (1-2u). ÉTAPE 2 (Saisonnalité): Ce produit (tartinade truffe) présente une saisonnalité forte liée aux fêtes de fin d'année, confirmée par des commandes en fin d'année N-1. ÉTAPE 3 (Tendance): On observe une accélération sur les deux derniers mois (septembre/octobre) avec des commandes stables de 2u contre 1u auparavant. ÉTAPE 4 (Recommandation): La base de 1.5u est arrondie à 2u pour couvrir la tendance récente et l'approche de la période de forte demande (Noël/Fin d'année), tout en restant conservateur pour éviter le sur-stockage.

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle vers le milieu du mois (approx. J+30)
- **Saisonnalité**: weak
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune anomalie détectée, les volumes sont extrêmement stables (3u ou 4u). Base fixée à 3u.
ÉTAPE 2 (Saisonnalité) : Faible impact saisonnier observé. Une légère hausse à 4u a été notée en octobre/juin 2024, mais la tendance de fin d'année 2023 montre une stabilité à 3u en décembre.
ÉTAPE 3 (Tendance) : Très grande stabilité. Le cycle de commande est d'environ une fois par mois. La dernière commande date d'il y a 36 jours (le 08/10), un réapprovisionnement est donc nécessaire maintenant.
ÉTAPE 4 (Recommandation) : On maintient le volume de fond de 3 unités, cohérent avec les deux dernières commandes récentes et la fin d'année précédente. La régularité du produit permet une prédiction sereine à 3u.

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle erratique (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune anomalie détectée, les volumes sont constants entre 1u et 2u. Étape 2 (Saisonnalité): Le produit semble être un article de fond de rayon sans pic saisonnier marqué, avec une consommation très lente. Étape 3 (Tendance): On observe un léger ralentissement, les deux dernières commandes (septembre et octobre) se sont stabilisées à 1u contre 2u à la même période l'an dernier. Étape 4 (Recommandation): Au vu du faible débit et de l'historique récent, une commande de 1 unité suffit pour couvrir la demande du prochain mois sans risquer de sur-stockage.

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 30 et 60 jours, sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable avec légère accélération du rythme de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune commande aberrante détectée, les volumes oscillent régulièrement entre 1 et 2 unités. La demande de fond est de 1.5u. 2. SAISONNALITÉ: L'historique N-1 ne montre pas de pic sur novembre/décembre (une seule commande en déc. 2023), l'impact saisonnier est jugé nul. 3. TENDANCE: On observe une stabilisation du volume à 2u lors de la dernière commande d'octobre. Le rythme de commande semble passer d'un cycle de ~60 jours à ~30 jours sur les deux derniers mois. 4. RECOMMANDATION: Compte tenu de la dernière commande de 2u en octobre et de la fréquence qui se resserre, une commande de 2 unités est préconisée pour couvrir les besoins sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse du volume unitaire (1u vs 2u historiquement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont faibles et constants (1-2 unités). ÉTAPE 2 (Saisonnalité): Le produit est lié à l'automne/hiver (Potiron), mais l'historique N-1 ne montre pas de pic massif en novembre, plutôt une stabilité à 2u. ÉTAPE 3 (Tendance): On observe un ralentissement sur les deux derniers mois (1u en sept/oct contre 2u auparavant). Le cycle de 30 jours est respecté. ÉTAPE 4 (Recommandation): Bien que nous soyons en saison (novembre), la tendance récente de consommation est de 1 unité par commande. Étant donné le contexte B2B et la faible rotation, une approche conservatrice de 1 unité est préconisée pour éviter le surstockage sur un produit de niche.

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités varient de 1 à 3 unités sans pic promotionnel évident. Étape 2: La saisonnalité est faible; bien que le produit soit présent toute l'année, on observe un léger ralentissement en fin d'année (novembre/décembre absent en N-1). Étape 3: La tendance récente est extrêmement stable avec deux commandes de 2u à exactement 28 jours d'intervalle (mercredi). Étape 4: La demande de fond se situe autour de 2u. Comme nous sommes le jeudi 13 novembre et que la dernière commande date du 8 octobre, le cycle de réapprovisionnement de 30 jours est légèrement dépassé, confirmant le besoin de 2 unités pour maintenir le stock de fond sans risque de surstockage en période creuse.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long de 30 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune valeur aberrante n'est détectée, les volumes oscillent de manière cohérente entre 2 et 4 unités. ÉTAPE 2 (SAISONNALITÉ): Faible impact saisonnier observé; bien qu'il y ait eu un léger pic à 4u en juin 2024, la période actuelle (novembre) correspond historiquement à des volumes bas (2u en déc-janv). ÉTAPE 3 (TENDANCE): Les deux dernières commandes (sept/oct) montrent une stabilisation à 2 ou 3 unités. Il y a un léger retard de commande (dernière le 08/10), suggérant un besoin immédiat. ÉTAPE 4 (RECOMMANDATION): On maintient la moyenne haute de la tendance récente (3u) pour couvrir le délai légèrement allongé depuis la dernière commande, tout en restant conservateur face à l'entrée dans la période hivernale plus calme pour ce type de tartinade printanière/estivale.

</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1-2 unités par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune quantité anormale détectée, les volumes oscillent naturellement entre 1 et 2 unités. Étape 2 (Saisonnalité): Pas de corrélation saisonnière visible entre N-1 et N; il s'agit d'un produit de fond de rayon à rotation lente. Étape 3 (Tendance): La tendance est stable. La dernière commande date d'environ 5 semaines (08/10), ce qui suggère qu'un réapprovisionnement est nécessaire maintenant pour maintenir le stock. Étape 4 (Recommandation): En restant conservateur sur un produit bio de 190g à faible rotation, une unité suffit pour couvrir le cycle de vente mensuel classique sans risquer le surstockage.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 1u en N-1 à 2-3u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une transition d'une demande sporadique d'une unité en 2024 vers une consommation plus régulière de 2 à 3 unités par mois en 2025. ÉTAPE 1: Aucune quantité n'est considérée comme un outlier compte tenu des faibles volumes B2B. ÉTAPE 2: La saisonnalité N-1 est trop faible pour être significative (pas de pic récurrent à date). ÉTAPE 3: On observe une tendance haussière sur les deux derniers mois (septembre/octobre). ÉTAPE 4: La moyenne récente se situe à 2,5 unités. En adoptant une posture conservatrice pour éviter le sur-stockage sur un produit à rotation lente, une recommandation de 2 unités est retenue, sécurisant le flux sans saturer les réserves.

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en début 2024 vers 1-2u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont faibles (1 à 3 unités). ÉTAPE 2 (Saisonnalité): Impact faible; on note une activité en fin d'année (nov/déc) sur N-1, mais les volumes restent modestes. ÉTAPE 3 (Tendance): La demande semble s'essouffler légèrement, passant d'un palier de 3u à un palier de 1-2u. La dernière commande date de plus d'un mois (8 oct), un réapprovisionnement est donc logiquement dû. ÉTAPE 4 (Recommandation): On maintient la moyenne basse pour éviter le sur-stockage sur un produit à rotation lente. La quantité de 2 unités permet de couvrir le mois à venir tout en tenant compte de la légère hausse potentielle liée aux périodes de fin d'année.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques N-1 et récents montre une demande très stable oscillant entre 1 et 2 unités par commande avec une absence de pic promotionnel (aucun outlier détecté). Il n'y a pas de corrélation saisonnière marquée pour ce produit bio en fin d'année. La tendance récente (septembre/octobre) confirme ce besoin de fond. Étant donné que la dernière commande (2u) remonte à 35 jours, le cycle de réapprovisionnement arrive à échéance. On recommande 2 unités pour couvrir le mois à venir sans risque de sur-stockage massif, en restant aligné sur le mode statistique du produit.

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en 2023, 5u en 2024, 1u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover). Aucun outlier n'a été détecté car les volumes oscillent entre 1 et 2 unités seulement. La saisonnalité est jugée faible car bien qu'un pic de fin d'année ait été observé fin 2023 (2u), il ne s'est pas manifesté avec force en 2024. La tendance récente est au ralentissement avec une seule commande d'une unité sur les 3 derniers mois. Étant donné l'approche conservatrice requise pour éviter le surstockage sur un produit dont la demande est erratique et faible, la recommandation minimale de 1 unité est préconisée pour couvrir le besoin immédiat sans risque de péremption.

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité exceptionnelle de la demande de fond à 2 unités par commande depuis 2024. ÉTAPE 1: Aucun outlier n'est détecté, les volumes sont constants (1u à 2u). ÉTAPE 2: La saisonnalité est jugée nulle, le produit étant un basique de l'apéritif bio avec des commandes réparties uniformément sur l'année. ÉTAPE 3: La tendance récente confirme un besoin de 2 unités tous les mois (septembre et octobre 2025). ÉTAPE 4: La date actuelle (mi-novembre) correspond parfaitement au cycle de réapprovisionnement de 30-35 jours après la commande du 08/10. Une commande de 2 unités permet de maintenir le stock de fond sans risque de sur-stockage.

</details>


<details>
<summary><strong>14. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les deux seules commandes enregistrées sont identiques (2u). ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3: Le pattern est strictement mensuel (08 octobre vs 10 septembre). La commande actuelle (13 novembre) arrive exactement 36 jours après la précédente, confirmant le cycle de réapprovisionnement régulier. ÉTAPE 4: La demande de fond est stable à 2 unités. Bien que la commande soit passée un jeudi au lieu du mercredi habituel, l'écart est négligeable pour ce type de produit de snacking à rotation lente.

</details>


<details>
<summary><strong>15. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (tous les 28-30 jours), créneau du mercredi matin
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passant de 3u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très court (2 points de données). On observe un cycle mensuel régulier le mercredi. La commande du 13/11 (jeudi) arrive avec un léger retard (+1 jour) par rapport à l'intervalle de 4 semaines attendu suite à la commande du 08/10. La tendance semble légèrement orientée à la hausse (3u puis 4u). En l'absence de données N-1 et compte tenu du faible volume, la recommandation reste conservatrice à 4 unités pour s'aligner sur la dernière commande connue et couvrir le besoin mensuel habituel sans risque de sur-stockage massif sur un produit à faible rotation apparente (barre protéinée 40g). Le niveau de confiance est 'low' dû au manque de profondeur historique (seulement 2 mois). ou d'informations sur la DLC résiduelle théorique en rayon B2B pour ce type de snack déshydraté (beurre de noix). Pour une gestion sécurisée, nous visons le maintien du dernier niveau de consommation observé car le cycle de fréquence est respecté à +/- 24h près (jeudi vs mercredi). Une quantité de 4 unités couvre le cycle de 4 semaines à venir sans générer de stock mort significatif en cas de ralentissement de la demande locale durant les périodes de fin d'année qui peuvent souvent voir une baisse des ventes de snacks fitness au profit de produits festifs avant la reprise de janvier (saisonnalité fitness standard). Or, sans l'historique N-1 pour confirmer cette baisse, on maintient la ligne à 4u par prudence. Il n'y a pas d'outliers identifiés dans l'échantillon fourni. La stratégie finale consiste à coller à la réalité terrain la plus récente (octobre).

</details>


<details>
<summary><strong>16. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel identifié (intervalle de 28 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de réapprovisionnement mensuel (tous les 28 jours exactement entre septembre et octobre). Bien que le volume soit faible (1u puis 2u), la tendance est à la hausse. La commande précédente date d'il y a 36 jours, suggérant un léger retard par rapport au cycle habituel du mercredi. Étant donné l'absence d'historique N-1 et le faible volume de données, une approche conservatrice est adoptée en recommandant 2 unités pour couvrir le mois à venir, s'alignant sur le dernier volume commandé tout en tenant compte de la croissance organique du produit sur ce point de vente spécifique (barre protéinée). Les données sont trop limitées pour une confiance 'medium'. ou 'high'. Ils n'y a pas d'outliers détectés vu la faiblesse des volumes globaux. La recommandation permet de maintenir la disponibilité sans risque de surstockage significatif sur une référence à rotation lente (slow mover). Aucun impact saisonnier spécifique n'est corrélé à ce type de snack sain sur cet échantillon réduit de dates automnales. La recommandation finale de 2u est un compromis entre la moyenne de 1.5u et la dernière demande observée pour anticiper le décalage de livraison actuel (+8 jours sur le cycle théorique). La prédiction reste prudente face à l'absence de recul sur 12 mois glissants (N-1). Les 4 étapes du Chain of Thought ont été respectées malgré la pauvreté du dataset disponible pour l'unité NOM04. Le maintien du stock à 2 unités est cohérent avec un achat groupé bimensuel ou mensuel typique du B2B agroalimentaire sur des snacks longue conservation (40g). Pas de signal de promotion détecté sur les 2 commandes passées. La quantité finale est un entier conformément au schéma JSON défini dans l'instruction de l'outil métier. La commande est placée un jeudi au lieu du mercredi, ce qui confirme un besoin de réajustement de stock pour la période à venir après un mois d'octobre actif. Une quantité de 2u est suffisante pour éviter la rupture sur cette référence de niche à beurre de noix.

</details>


<details>
<summary><strong>17. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u/mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les commandes sont constantes à 1 unité. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, mais le produit Chips Bio maintient un volume faible et stable sur les deux derniers mois. ÉTAPE 3 (Tendance): La fréquence est strictement de 1 unité tous les 30 jours environ (08/10 vs 10/09). La commande actuelle arrive le 13/11, soit 36 jours après la dernière, ce qui correspond à la fenêtre de réapprovisionnement habituelle. ÉTAPE 4 (Recommandation): Au vu de la faible rotation et de la stabilité parfaite du besoin (1u), il est recommandé de maintenir la commande à 1 unité pour éviter tout sur-stockage inutile.

</details>


<details>
<summary><strong>18. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 30 jours (chaque 2ème mercredi du mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u/mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune anomalie détectée sur les deux points de données, la base est de 1u. ÉTAPE 2: Données N-1 absentes, mais le produit bio premium montre une stabilité sur les deux derniers mois sans influence saisonnière visible. ÉTAPE 3: Le pattern est strictement mensuel (tous les 30 jours environ, le mercredi matin). La commande actuelle arrive le jeudi 13 novembre, soit exactement un mois après la dernière (8 octobre) avec un décalage d'un jour. ÉTAPE 4: La stabilité parfaite de la demande (1u par mois) et l'absence de tendance haussière incitent à une recommandation conservatrice de 1 unité pour couvrir le mois à venir.

</details>


<details>
<summary><strong>19. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune anomalie détectée, toutes les commandes historiques sont de 1 unité. ÉTAPE 2 (Saisonnalité) : Aucune corrélation saisonnière visible entre N-1 et l'année actuelle ; le produit semble être une référence de niche à rotation lente. ÉTAPE 3 (Tendance) : La demande est parfaitement stable (1u) mais très espacée dans le temps. La dernière commande date de 2 mois (septembre). ÉTAPE 4 (Recommandation) : Compte tenu de l'historique constant et de la politique conservatrice pour éviter le sur-stockage sur un produit à faible rotation, le maintien de la quantité standard de 1 unité est préconisé.

</details>


<details>
<summary><strong>20. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (absence de données)
- **Saisonnalité**: none
- **Tendance**: Inconnue (lancement ou référencement récent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique de commandes (N-1 et 3 derniers mois), la prédiction repose sur une stratégie de 'test and learn'. Pour un produit de type tartinade bio en format 380g (poids standard), une quantité minimale de 6 unités correspond généralement à un carton standard (UC) dans le secteur agroalimentaire B2B. Cette approche conservatrice permet de tester la rotation du produit sans risque de sur-stockage massif lors d'un lancement ou d'un premier réapprovisionnement identifié. Le niveau de confiance est 'low' en raison du manque de données statistiques.

</details>




### 📊 Données d'Input LLM (20 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 4u
- 2024-08-27 06:21:49: 3u
- 2024-06-24 13:19:30: 4u
- 2024-05-06 12:55:07: 3u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u
- 2023-12-05 07:47:51: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 3u
- 2024-08-27 06:21:49: 3u
- 2024-06-24 13:19:30: 4u
- 2024-03-15 08:42:38: 4u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 1u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-27 06:21:49: 2u
- 2024-05-06 12:55:07: 2u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 2u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 4u
- 2025-09-10 06:22:23: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>18. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>19. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 2 | Stock prédit: 0.8u (21j restants) → prédit 2u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [MF0052] MF Pois chiches  500g | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: -0.1u (-13j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: -0.1u (-13j restants) → prédit 1u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Stock prédit: -0.1u (-10j restants) → prédit 2u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -1.0u (-37j restants) → prédit 2u mais non commandé |


---

## False Negatives (4)

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
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Stock suffisant: 1.1u (39j restants > seuil 30j) |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Stock suffisant: 1.0u (58j restants > seuil 30j) |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Stock suffisant: 1.2u (88j restants > seuil 30j) |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 2 | Stock suffisant: 0.8u (142j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:15.049Z*
