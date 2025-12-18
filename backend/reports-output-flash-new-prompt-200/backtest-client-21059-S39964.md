# Rapport Backtest - Client Chez Lucienne

## Contexte

- **Client** : Chez Lucienne (ID: 21059)
- **Commande réelle** : S39964
- **Date commande** : 2025-10-28 13:40:43
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 19,574 input + 6,468 output = 26,042 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.0% | 25 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 78.0% | Score équilibré global |

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
| **MAE** | 0.06 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 6.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15-20 jours, principalement en milieu de semaine (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les commandes sont strictement identiques (1 unité). Étape 2 : Absence de données N-1, mais la stabilité parfaite sur les 3 derniers mois suggère un produit de fond de rayon non soumis à des pics saisonniers brutaux à cette période. Étape 3 : La tendance est extrêmement stable avec un rythme de réapprovisionnement environ toutes les 3 semaines. Étape 4 : La demande de fond étant de 1 unité par commande et le rythme de consommation étant constant, il n'y a aucune justification pour augmenter le stock, d'autant que la philosophie reste conservatrice pour éviter le sur-stockage.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 15-20 jours, commandes en milieu de semaine (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passages de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont très faibles et cohérents (1-2 unités). ÉTAPE 2 (Saisonnalité): Données N-1 absentes, impact considéré comme nul par défaut sur ce volume. ÉTAPE 3 (Tendance): On observe une légère accélération de la fréquence et du volume sur la dernière commande (2u le 01/10). Le délai depuis la dernière commande est long (26 jours), ce qui suggère un besoin de réapprovisionnement imminent. ÉTAPE 4 (Recommandation): Bien que la dernière commande fût de 2u, la moyenne reste basse (1.33). Compte tenu d'une approche conservatrice en B2B pour éviter le sur-stockage sur un produit à rotation lente, 1 unité est recommandée pour couvrir la demande de fond immédiate tout en respectant le jour de commande anticipé (Lundi). L'indice de confiance est faible en raison du très petit historique de données (3 points). Chaque unité impactant significativement le stock, la prudence est de mise pour ce produit Bio Premium à rotation limitée par point de vente (1-2 unités/mois). Pour assurer la sécurité sans risquer l'immobilisation de stock, 1 unité suffit à ce stade du cycle observé de 20-30 jours entre commandes significatives d'après l'historique récent (août vs sept vs oct). Le saut de 26 jours depuis la dernière action justifie cette commande maintenant plutôt qu'attendre le mercredi habituel pour sécuriser le linéaire Chips avant la fin de mois d'octobre. Si ce client commande toutes les 3-4 semaines, cette unité restera cohérente avec ses ventes réelles et évitera d'accumuler 2 mois de stock simultanément avec une commande de 2 unités ou plus. Recommandation finale: 1 unité pour équilibrer stock et rotation réelle observée sur 3 mois glissants de ventes directes du client final identifiées dans les flux d'entrées d'ordre.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier de 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les 3 dernières commandes sont strictement identiques (1 unité), aucune anomalie détectée. ÉTAPE 2 (Saisonnalité) : Absence de données N-1 pour confirmer une saisonnalité, mais le produit bio premium semble suivre une demande de niche stable. ÉTAPE 3 (Tendance) : La fréquence est faible (environ une fois par mois ou toutes les deux semaines) avec un volume unitaire constant de 1u. La dernière commande date d'il y a 26 jours (01/10), suggérant qu'un réapprovisionnement est nécessaire. ÉTAPE 4 (Recommandation) : Le passage de commande un lundi (contre mardi/mercredi habituellement) n'indique pas de changement de volume nécessaire. On maintient la quantité de fond de 1 unité pour éviter le sur-stockage.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (environ tous les 15-20 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les trois commandes récentes sont identiques (1u). ÉTAPE 2 (Saisonnalité): Absence de données N-1, mais la nature du produit (chips premium) suggère une demande de fond stable hors périodes festives. ÉTAPE 3 (Tendance): La tendance est parfaitement stable avec une fréquence moyenne de 20 jours. La commande actuelle intervient 26 jours après la précédente, ce qui suggère un besoin de réapprovisionnement immédiat pour maintenir le stock de sécurité. ÉTAPE 4 (Recommandation): On s'appuie sur la demande de fond de 1u. Bien que la commande arrive un lundi au lieu du milieu de semaine habituel, le volume reste constant et conservateur pour éviter le sur-stockage.

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle à bimensuelle, historiquement lundi/jeudi.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% sur le volume par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Pas d'outliers majeurs, les volumes oscillent entre 1 et 3 unités sans pics promotionnels évidents. Étape 2 (Saisonnalité): Faible impact. Bien qu'une commande de 2u ait eu lieu en octobre N-1, le produit ne montre pas de pic saisonnier marqué en fin d'année. Étape 3 (Tendance): On observe un net ralentissement. En 2024, la moyenne était de 2.5u par commande; les deux dernières commandes (août et octobre 2025) sont tombées à 1u, indiquant une baisse de la demande de fond ou une optimisation des stocks clients. Étape 4 (Recommandation): Malgré le jour de commande (lundi) qui est favorable, la baisse structurelle du volume commande par commande impose la prudence. On maintient la quantité minimale de 1u pour couvrir le besoin immédiat sans risquer le sur-stockage.

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Approvisionnement irrégulier, cycle long de 4 à 8 semaines
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie majeure détectée, les volumes stables varient entre 1 et 3 unités par commande. ÉTAPE 2 (Saisonnalité): Le produit montre une activité modérée fin d'année en N-1, mais l'impact actuel 2025 semble plus faible que l'année précédente. ÉTAPE 3 (Tendance): On observe un ralentissement net. Les commandes passées de 2 ou 3 unités en 2024 à seulement 1 unité lors des deux dernières occurrences de 2025 (août et octobre). Le jour de commande (lundi) est cohérent avec l'historique. ÉTAPE 4 (Recommandation): Basé sur la baisse de la demande de fond et la tendance récente à 1 unité toutes les 4-5 semaines, une recommandation conservatrice d'une unité suffit pour couvrir le besoin actuel sans risque de sur-stockage.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long de 30-45 jours, souvent le lundi ou mercredi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -33%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun outlier détecté, les volumes oscillent de façon homogène entre 1u et 3u. ÉTAPE 2 (SAISONNALITÉ): L'historique N-1 ne montre pas de pic spécifique en fin d'année, suggérant une demande stabilisée sans forte saisonnalité agroalimentaire sur ce produit spécifique. ÉTAPE 2 (TENDANCE): On observe un ralentissement notable sur les 3 derniers mois avec un passage de 3u à 1u/2u et un espacement plus long entre les commandes (dernière commande il y a 26 jours). ÉTAPE 4 (RECOMMANDATION): Bien que la moyenne historique soit de 2.5u, la tendance baissière récente et la volonté de rester conservateur en B2B imposent une commande de 2 unités pour maintenir le stock sans risque de péremption sur un produit à rotation lente.

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse du volume moyen (1u récent vs 2-3u N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune commande n'est identifiée comme outlier car les volumes restent très faibles (1-3u). Étape 2: Faible impact saisonnier observé, bien qu'un pic à 3u ait eu lieu en octobre N-1, les données récentes montrent un ralentissement. Étape 3: La tendance est à la baisse avec les deux dernières commandes à 1u chacune, contre 2-3u l'année précédente. Étape 4: La demande de fond est estimée entre 1 et 2 unités. Étant donné l'objectif de ne pas sur-stocker et la tendance récente à 1u (septembre/octobre), je recommande 1 unité pour couvrir le besoin immédiat sans risque de péremption.

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 30 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une demande extrêmement stable et linéaire de 1 unité par commande, sans aucun outlier détecté sur les deux dernières années. Bien qu'un pic à 2 unités ait été observé en octobre N-1, les commandes récentes de 2025 (août et octobre) confirment un maintien à 1 unité. La saisonnalité est jugée faible car le produit tourne toute l'année à faible volume. La tendance récente est parfaitement stable. Étant donné la faible vélocité de ce produit (LV Tartinade), une commande de 1 unité suffit à couvrir les besoins sans risque de sur-stockage.

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 15 et 30 jours, historiquement le lundi/jeudi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en 2024 -> 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont faibles et cohérents (1 à 3u). Étape 2: La saisonnalité N-1 montrait une commande de 1u début octobre, mais le produit semble moins performant cette année. Étape 3: Tendance baissière marquée. En 2024, le fond de roulement était de 3u, alors que les trois dernières commandes de 2025 sont systématiquement de 1u avec un étalement de 15-20 jours. Étape 4: La dernière commande datant du 01/10 (il y a 26 jours), un réapprovisionnement est nécessaire. Compte tenu de la baisse de régime, une quantité de 1u suffit pour couvrir le besoin sans risque de surstockage.

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (cycle non établi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée anormale détectée car l'historique est trop restreint (une seule commande de 1u). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le kombucha soit généralement plus consommé en période estivale. Étape 3: Pas de tendance mesurable sur une seule occurrence, la demande de fond est estimée à 1u. Étape 4: La recommandation reste conservatrice au minimum vital (1u) pour éviter un sur-stockage sur un produit à faible rotation ou démarrage d'activité. La confiance est faible en raison du manque de données historiques (1 seule commande en 3 mois).

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
- **Pattern temporel**: Commande mensuelle erratique (intervalle de 20 à 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants à 1 unité. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: La fréquence est d'environ une commande par mois. La dernière commande date d'il y a 41 jours (16 sept), suggérant un besoin imminent pour maintenir un stock minimal, malgré le décalage du jour de la semaine (lundi vs milieu de semaine). Étape 4: Au vu du volume historique très faible et constant, une commande de 1 unité suffit pour couvrir la demande de fond sans risque de sur-stockage sur un produit bio de niche à faible rotation. La confiance est faible car basée sur seulement deux points de données.

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% sur les volumes unitaires
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une demande de fond stable mais faible. ÉTAPE 1: Les commandes de 3u en 2024 ont été traitées comme des outliers (pics isolés), ramenant la base à ~1.2u. ÉTAPE 2: La saisonnalité est faible, bien qu'un léger ralentissement soit observé en fin d'année N-1. ÉTAPE 3: La tendance récente (septembre/août 2025) montre une stabilisation à 1 unité par commande, contre 2 unités auparavant. ÉTAPE 4: Compte tenu de la faible fréquence et de la tendance à la baisse des volumes par commande, une recommandation conservatrice de 1 unité est optimale pour éviter le surstockage tout en maintenant la présence du produit.

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 2u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 1u
- 2024-03-21 08:33:04: 1u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 1u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 1u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.5u (30j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.5u (30j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock prédit: 0.4u (28j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -0.4u (-18j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.6u (-42j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:11.268Z*
