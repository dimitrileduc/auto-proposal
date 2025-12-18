# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 55
- **Tokens**: 50,724 input + 19,772 output = 70,496 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.4% | 62 produits prédits, 30 corrects |
| **Rappel** | 100.0% | 30 produits réels, 30 détectés |
| **F1-Score** | 65.2% | Score équilibré global |

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
| **MAE** | 0.37 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 15.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 10.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 23 | Égalité parfaite |
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

## True Positives (30)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier, moyenne de 1 à 2 fois par mois avec une alternance lundi/mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un ralentissement de fréquence en août
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les volumes oscillent entre 1 et 2 unités. Étape 2 (Saisonnalité): Pas de données N-1 disponibles, mais le produit (tartinade) est stable en période estivale. Étape 3 (Tendance): La tendance est à la stabilité du volume unitaire (2u) mais la fréquence s'est espacée en juillet/août (passage d'un rythme hebdomadaire à mensuel). Étape 4 (Recommandation): On privilégie le volume haut du tunnel (2u) car la commande tombe un lundi, jour qui a historiquement généré des volumes de 2u en juin, tout en restant conservateur face au ralentissement de la fréquence de commande.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 12 et 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec ralentissement de fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont très faibles et constants (1-2u). ÉTAPE 2 (Saisonnalité): Données N-1 absentes, mais le produit typé 'apéritif' suggère une consommation estivale stable. ÉTAPE 3 (Tendance): La demande est stable en volume (moyenne de 1.75u) mais on observe un espacement croissant des commandes (dernière commande il y a 19 jours vs cycle de 7-12 jours en juin). ÉTAPE 4 (Recommandation): La quantité habituelle de 2 unités est suffisante pour couvrir le besoin sans risque de surstockage, tout en respectant l'historique de consommation du produit.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel, majoritairement le lundi (60%) ou le mercredi (40%)
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants à 1-2 unités. Étape 2: Absence de données N-1, mais la stabilité récente suggère une faible sensibilité saisonnière immédiate. Étape 3: Tendance très stable avec une récurrence marquée de 2 unités par commande depuis juin. Le rythme est d'environ une commande toutes les 2 à 3 semaines. Étape 4: La dernière commande remontant au 06/08, le délai de 19 jours justifie un réapprovisionnement ce lundi 25/08. La quantité de 2 unités est la norme établie pour ce client sur ce produit.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (tous les 14 à 28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.8u/commande, rythme en ralentissement en août
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une demande extrêmement stable mais de faible volume (1 à 2 unités par commande). ÉTAPE 1: Aucun outlier n'est détecté, les quantités sont cohérentes. ÉTAPE 2: Faute de données N-1, la saisonnalité n'est pas confirmée, bien que le produit (tartinade) puisse être estival. ÉTAPE 3: On observe un ralentissement de la fréquence en août (dernière commande il y a 19 jours). ÉTAPE 4: Le jour de commande actuel (lundi) correspond à l'un des deux jours historiques du cycle. Compte tenu de l'historique et du délai depuis la dernière commande (06/08), une commande de 2 unités est recommandée pour couvrir les deux prochaines semaines sans risque de surstockage significatif.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 15-20 jours) principalement le mercredi ou lundi
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume de 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES : 1. DE-EVENTING : Aucune anomalie détectée, les volumes oscillent entre 1 et 2 unités sur toutes les commandes. 2. SAISONNALITÉ : Données N-1 absentes, mais la stabilité juin-août suggère une faible sensibilité saisonnière immédiate. 3. TENDANCE : Le produit est sur un rythme de croisière stable. La dernière commande date d'il y a 19 jours (06/08), ce qui correspond parfaitement au délai de réapprovisionnement habituel constaté. 4. RECOMMANDATION : La moyenne récente est de 1.8u par commande. Étant donné le cycle de 2-3 semaines, une commande de 2 unités couvre la demande sans risque de surstockage excessif.

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent, environ toutes les 2 à 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1.75u en moyenne
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune valeur aberrante n'est détectée, les volumes sont constants entre 1 et 2 unités. ÉTAPE 2 (Saisonnalité) : Faute de données N-1, l'impact est considéré comme nul, bien que le secteur agroalimentaire puisse suggérer un maintien d'activité en août. ÉTAPE 3 (Tendance) : La demande est stable. On note une commande toutes les deux semaines en juin, suivie d'un creux en juillet (potentielle rupture ou fermeture) et une reprise le 6 août. La commande actuelle intervient 19 jours après la dernière, ce qui correspond au cycle observé. ÉTAPE 4 (Recommandation) : La moyenne de fond est de 1.75u. Compte tenu de la fréquence et de l'absence de commande depuis 3 semaines, on arrondit à l'entier supérieur pour couvrir le besoin immédiat sans risque de surstockage majeur.

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bi-mensuel, majoritairement le lundi
- **Saisonnalité**: none
- **Tendance**: Hausse légère (stabilisation à 2u contre 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable sans outliers identifiés. Le produit est passé d'une unité en mai à une consommation régulière de 2 unités par commande depuis juin. Bien que la fréquence soit irrégulière (entre 7 et 20 jours), le volume par commande est devenu constant à 2u. Nous sommes actuellement un lundi, jour privilégié pour ce client. Sans historique N-1 pour confirmer une saisonnalité estivale spécifique, nous nous basons sur la tendance récente de 2u pour assurer la disponibilité sans risque de surstockage majeur.

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel avec commandes majoritairement les mercredis
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une stabilité parfaite (4 commandes de 2 unités chacune). Le processus se structure en 4 étapes : 1. Aucun outlier détecté, la demande de fond est de 2u. 2. Pas de données N-1 pour confirmer une saisonnalité, mais le produit est constant sur les 3 derniers mois d'été. 3. La tendance est strictement stable. 4. Bien que la commande soit passée un lundi au lieu du mercredi habituel, l'intervalle de temps depuis la dernière commande (06/08, soit ~19 jours) correspond au cycle de réapprovisionnement observé. Une quantité de 2 unités est donc recommandée pour maintenir le stock sans risque de sur-stockage.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel avec une alternance entre lundi et mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un allongement du délai inter-commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les volumes sont constants (1-2u). ÉTAPE 2: Pas de données N-1 disponibles, mais le produit semble stable durant l'été sans pic saisonnier notable. ÉTAPE 3: La demande est stable à 2 unités par commande, bien que la fréquence se soit ralentie en août (une commande toutes les 3-4 semaines vs chaque semaine en juin). ÉTAPE 4: Le besoin identifié est de 2 unités pour maintenir le stock de fond, car la dernière commande date de 19 jours et le rythme actuel suggère une commande toutes les 3 semaines environ.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bi-mensuel intermittent (tous les 10 à 20 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune quantité anormale détectée, les volumes oscillent entre 1 et 2 unités. Étape 2 (Saisonnalité): Absence de données N-1 pour confirmer un pic estival. Étape 3 (Tendance): Le volume reste faible et stable avec une commande moyenne de 1.5u sur les 4 derniers points. La dernière commande date d'il y a 19 jours (6 août), suggérant un besoin imminent. Étape 4 (Recommandation): En l'absence de tendance haussière claire et de données historiques solides, une approche conservatrice de 1 unité est préconisée pour couvrir la demande de base sans risquer le sur-stockage sur un produit à faible rotation (LV136). L'écart entre les commandes suggère un besoin de réapprovisionnement de faible volume mais régulier vers la fin du mois d'août (lundi 25). Pour minimiser le risque de péremption ou de stock dormant, on arrondit à l'unité inférieure de la demande de fond (1.5u). Nous maintenons une confiance basse due au faible historique disponible (4 points de données seulement). Cette recommandation permet de re-déclencher le cycle de commande sans engager de stock excessif sur ce type de produit tartinable b2b qui présente souvent des DLC courtes ou une rotation lente en dehors des périodes de forte affluence apéritive estivale déjà largement entamées en cette fin août (2025-08-25). L'absence de commandes entre le 30 juin et le 06 août montre également un flux qui manque de prédictibilité forte sur le court terme, justifiant la prudence avec 1 unité seule pour le moment afin de valider la reprise du cycle de consommation de la rentrée de septembre qui s'annonce prochainement pour les clients agroalimentaires b2b servant le marché final des particuliers en mode 'apéritif dinatoire' ou 'pauses midi-lunch' plus urbaines et structurées dès septembre (semaine de rentrée).

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 2 à 3 commandes par mois, préférence pour les lundis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable à 1.6u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier, les volumes oscillant de manière cohérente entre 1u et 2u. Étape 2: Absence de données N-1, mais les données récentes ne montrent pas de pic estival significatif sur ce produit spécifique. Étape 3: La fréquence s'est ralentie en août (1 seule commande le 06/08) après un mois de juin plus actif. Le rythme moyen est d'une commande tous les 10-15 jours environ. Étape 4: La demande de base est de 1.6u. Étant donné que la dernière commande remonte à 19 jours (le 06/08), un léger besoin de reconstitution de stock est probable. On arrondit à 2 unités pour maintenir le stock de sécurité habituel tout en restant conservateur.

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de type réapprovisionnement de confort (tous les 20 à 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante n'est détectée, les volumes sont constants (1-2u). La demande de fond est fixée à 2u. ÉTAPE 2: Absence de données N-1, cependant le produit (tartinade) est typiquement estival. Nous arrivons en fin de saison (fin août), ce qui incite à la prudence. ÉTAPE 3: La tendance est extrêmement stable à 2 unités avec un espacement de 3 à 4 semaines entre chaque commande. La dernière commande datant du 06/08, nous sommes dans la fenêtre habituelle de réapprovisionnement. ÉTAPE 4: Conservation du volume habituel de 2 unités pour couvrir le mois de septembre sans risque de surstockage en fin de saison, tout en respectant la fréquence observée.

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel strict (tous les 28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u/mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont constants à 2 unités. ÉTAPE 2 (Saisonnalité): Données N-1 absentes mais la stabilité parfaite sur les 3 derniers mois suggère un produit à faible impact saisonnier. ÉTAPE 3 (Tendance): Le cycle est extrêmement régulier (28 jours exactement entre chaque commande : 11/06, 09/07, 06/08). La prochaine commande théorique était attendue autour du mercredi 03/09. ÉTAPE 4 (Recommandation): Bien que la commande arrive 10 jours 'en avance' par rapport au cycle de 28 jours, la constance absolue du besoin B2B (2 unités) justifie de maintenir ce volume de fond sans sur-stockage.

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~21-28 jours) le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande est constante à 1 unité. Étape 2: Absence de données N-1, mais la stabilité sur les 3 derniers mois (juin-août) ne montre pas de pic saisonnier estival pour ce client spécifique malgré la nature du produit (thé glacé). Étape 3: Tendance parfaitement stable à 1 unité toutes les 3 à 4 semaines environ. La commande intervient un lundi au lieu du mercredi habituel, suggérant un besoin légèrement anticipé. Étape 4: La recommandation reste fixée à 1 unité pour maintenir le stock de fond sans créer de surstock, le volume historique étant très faible et régulier.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel irrégulier (environ tous les 15 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (moyenne glissante passant de 3u à 5u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 10u le 11/06 est traitée comme un outlier car elle représente plus de 2x la demande moyenne constatée sur les autres points (4u). La base théorique est donc de 4u. ÉTAPE 2 (Saisonnalité): Données N-1 absentes, impact considéré comme nul par défaut. ÉTAPE 3 (Tendance): On observe un léger raffermissement du volume de fond (passe de 2/4u à 6u sur la dernière commande). Le délai depuis la dernière commande (06/08) est de 19 jours, ce qui suggère un besoin imminent. ÉTAPE 4 (Recommandation): Base de 4u ajustée à +25% (5u) pour couvrir la tendance haussière récente tout en restant conservateur face au manque d'historique long terme. Le cycle de commande lundi/mercredi est respecté avec la date actuelle (lundi). Niveau de confiance faible dû au volume de données restreint (4 points). Les 5 unités sécurisent le stock sans risque majeur de sur-stockage sur un produit bio à rotation modérée (DLUO).

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel hybride (Lundi / Mercredi), cycle de 14 à 16 jours
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (2u -> 4u -> 6u hors pic)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 10u (11/06) est identifiée comme un outlier (2.5x la moyenne), probablement liée à un événement pré-estival; la base de consommation réelle se situe vers 4u. Étape 2: Aucune donnée N-1 disponible, mais la demande semble stable sans pics saisonniers brutaux fin août. Étape 3: La tendance 'organique' hors outliers montre une croissance régulière (2u en mai, 4u en juin, 6u début août). Le délai entre la dernière commande (06/08) et aujourd'hui (25/08) est de 19 jours, dépassant le cycle habituel de 15 jours. Étape 4: Un réapprovisionnement de 5u est recommandé pour couvrir le besoin actuel et compenser le retard de cycle tout en restant conservateur face à l'accélération récente.

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier alternant lundi et mercredi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse (4u à 6u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 10u (11/06) est considérée comme un outlier par rapport à la moyenne basse de 3-4u. Étape 2: Aucune donnée N-1 disponible pour confirmer la saisonnalité estivale, approche prudente adoptée. Étape 3: On observe une légère accélération du volume de fond passant de 2-4u en mai/juin à 6u début août. Le cycle de commande est d'environ une fois toutes les deux semaines. Étape 4: La recommandation de 5u se base sur la moyenne lissée des commandes organiques (6, 4, 2) ajustée à la hausse pour couvrir la tendance récente sans sur-stocker un produit à rotation modérée.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel basse fréquence (environ 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune anomalie détectée, les volumes de 1 et 2 unités sont cohérents pour un produit de niche. ÉTAPE 2 (SAISONNALITÉ): Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3 (TENDANCE): Rythme de commande mensuel observé (juin, juillet). Toutefois, aucune commande n'a été passée en août jusqu'au 25, suggérant un besoin imminent. ÉTAPE 4 (RECOMMANDATION): Avec seulement deux points de données, la visibilité est faible. En restant conservateur pour éviter le sur-stockage d'un produit à rotation lente, une commande d'une unité (soit le volume de la première commande observée) est préconisée pour couvrir la fin de mois sans risque majeur de rupture de stock mort car la demande de fond est très basse (moyenne 1.5u). Nous anticipons légèrement le cycle par rapport au mercredi habituel car nous sommes lundi sans stock récent enregistré depuis 45 jours environ. La confiance est faible en raison de la pauvreté de l'historique (N=2).

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier, commande tous les 10 à 15 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable et unitaire (1u) avec un rythme de commande bimensuel (environ toutes les 2 semaines). Aucun outlier n'a été détecté, la demande de fond est de 1 unité. Bien qu'il n'y ait pas de données N-1 pour confirmer une saisonnalité estivale, la stabilité des 3 derniers mois (mai à juillet) suggère une consommation constante. La commande actuelle intervient le lundi 25 août, soit environ 6 semaines après la dernière commande enregistrée (09/07), ce qui indique un possible besoin de réapprovisionnement pour maintenir le stock de fond, malgré un ralentissement du rythme en août. Une quantité de 1 unité est recommandée pour couvrir la demande habituelle sans risque de sur-stockage.

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bimensuelles (tous les 10-14j) principalement les lundis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune anomalie détectée, les volumes sont constants à 1 unité depuis mai. ÉTAPE 2 (SAISONNALITÉ): Pas de données N-1 disponibles pour confirmer un pic estival, mais la demande de fond ne varie pas malgré la période de juillet. ÉTAPE 3 (TENDANCE): Rythme stable de 2 commandes par mois environ. La dernière commande date du 09/07, suggérant un besoin immédiat de réapprovisionnement après une pause en août. ÉTAPE 4 (RECOMMANDATION): Avec un historique 100% stable sur le volume (1u), il n'y a aucune justification pour augmenter le stock. On maintient la quantité habituelle de 1 unité.

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 10 à 14 jours, commandes alternées entre lundi et mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les commandes sont strictement constantes à 1 unité. ÉTAPE 2: Données N-1 absentes, mais la stabilité sur 3 mois suggère une faible sensibilité saisonnière immédiate. ÉTAPE 3: La fréquence est régulière (environ 2 à 3 commandes par mois) et le volume est stable. ÉTAPE 4: La demande de base est de 1 unité. Le jour de la demande (lundi) correspond à un pic d'activité historique pour ce client. Une commande de 1 unité est recommandée pour maintenir le flux sans risque de sur-stockage.

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (une seule commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique insuffisant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune donnée aberrante car une seule commande de 6u est présente. ÉTAPE 2 (Saisonnalité) : Pas de données N-1 pour confirmer un impact estival typique des soft-drinks. ÉTAPE 3 (Tendance) : Historique quasi-inexistant empêchant d'identifier un cycle ou une tendance. ÉTAPE 4 (Recommandation) : En l'absence de données récurrentes, la stratégie conservatrice impose de se baser sur le seul point de donnée connu (6u) pour couvrir un besoin ponctuel sans risquer de sur-stockage sur un produit à faible rotation apparente.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité anormale détectée, la demande de fond est fixée à 1 unité. Étape 2: Absence de données N-1 pour confirmer une saisonnalité estivale, bien que le produit (citronnade) y soit propice. Étape 3: La tendance est strictement stable (1 unité par commande) avec une fréquence espacée de 3 à 4 semaines. Étape 4: La dernière commande remontant au 9 juillet, un réapprovisionnement de 1 unité est logique pour maintenir le stock de fond, malgré le faible volume de données disponible. On reste conservateur sur ce produit à faible rotation (Slow Mover). Shéma de commande B2B très granulaire (à l'unité). Aucun signal de croissance ne justifie de passer à 2 unités pour le moment car le cycle de rotation est lent (environ 1 mois). Nous préconisons 1 unité pour couvrir le besoin mensuel habituel identifié sur les 3 derniers mois de données disponibles, tout en évitant le surstockage sur un produit à faible vélocité de vente déjà présent en fin de période estivale (fin août). La confiance est qualifiée de 'low' car l'échantillon de données est limité à 3 points historiques et l'écart entre les commandes est irrégulier (21 jours puis 49 jours sans données intermédiaires). Un volume de 1 unité est donc la recommandation la plus sûre pour ce profil de produit 'slow-stock'. Aucun outlier n'a été retiré car le volume de 1 unité est le minimum commandable constaté historiquement pour ce client B2B spécifique sur cette référence Ritchie Citron en canette de 330ml de l'agroalimentaire. La date demandée (lundi) est cohérente avec le premier point d'entrée de l'historique (lundi 26 mai). Nous recommandons donc de suivre le pattern minimaliste observé jusqu'à présent afin de garantir la fraîcheur et la rotation optimale de l'article dans les rayons du distributeur ou de l'établissement concerné par cette commande en cours de calcul prévisionnel automatisé via notre modèle supply chain.

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle basse fréquence de 21 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les commandes sont strictement de 1 unité. ÉTAPE 2: Données N-1 absentes, mais aucune fluctuation estivale visible entre mai et juillet malgré la catégorie boisson. ÉTAPE 3: La tendance est à la stabilité absolue (1u). Le rythme est lent (mensuel environ). La commande actuelle du 25/08 (lundi) respecte le jour de la commande de mai. ÉTAPE 4: La demande de fond est de 1u tous les ~28 jours. Bien que le délai entre juillet et août soit légèrement plus long, le volume par commande ne montre aucune croissance justifiant un stock supplémentaire. Recommandation conservatrice de 1 unité pour maintenir le flux sans immobilisation inutile.

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 20 à 30 jours (irrégulier)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est strictement de 1 unité par commande. Étape 2: Pas de données N-1 disponibles, mais les données de mai à juillet ne montrent aucune accélération malgré la période estivale. Étape 3: La tendance est parfaitement stable (1u) mais la fréquence est faible et espacée (environ 1 commande par mois). Étape 4: Étant donné le faible volume unitaire et l'absence de pic récent, une commande de 1 unité suffit à couvrir le besoin habituel sans risque de sur-stockage sur un produit à rotation lente. La confiance reste faible due au faible nombre de points de données (3 commandes). Chaque commande précède une période de 3 à 4 semaines de stock pour le client b2b car le volume unitaire est minimal (1 carton/unité).On maintient le stock de sécurité minimal de 1u pour le lundi demandé afin de rester conservateur sur une référence à faible rotation et tendance stable à l'unité sans signaux de saisonnalité forte sur ce segment premium (Ritchie). Comme la dernière commande date du 09/07, le client est probablement en rupture de stock au 25/08 après 45 jours sans commande, ce qui justifie un réapprovisionnement de 1u immédiatement pour couvrir le cycle suivant de 3-4 semaines sans engendrer de sur-stockage inutile d'une boisson de spécialité (Cola artisanal). La valeur recommandée est de 1 unité conformément à la demande de fond après analyse des 3 derniers mois montrant un volume plat sans accélération malgré l'été. Ce volume bas indique que le client commande par carton/unité à chaque fois qu'il atteint son seuil d'alerte. Un surplus serait inadéquat ici vu le cycle de réapprovisionnement et le segment spécifique du produit cola craft canette 330ml qui cible souvent une niche de marché en b2b. La quantité de 1 correspond au comportement de commande observé de mai à juillet inclusivement et reste la base la plus sûre pour la recommandation finale pour l'utilisateur actuel afin d'éviter tout sur-stock résiduel.

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec commandes principalement le lundi (tous les 15-20 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune donnée aberrante détectée, les volumes sont très faibles et cohérents. Étape 2 (Saisonnalité) : Pas de données N-1 disponibles, mais le profil du produit (tartinade olive/tomate) suggère une consommation estivale stable. Étape 3 (Tendance) : La demande est très faible (moyenne de 1.33 unités par commande) avec une fréquence espacée. Étape 4 (Recommandation) : Compte tenu de la faible rotation et de l'historique limité, une approche conservatrice de 1 unité est recommandée pour couvrir la demande de fond sans risquer le sur-stockage sur un produit à faible volume unitaire. Le lundi étant le jour habituel de commande, la demande est alignée sur le cycle identifié mais reste minimale en volume par commande car aucune accélération n'est observée entre juin et août sur ce SKU spécifique malgré la période estivale théoriquement favorable aux produits de type aperitivo/tartinable en début de saison. On privilégie la sécurité du stock mort sur ce volume marginal au détriment d'un éventuel manque à gagner minime (1u). Chaque commande est espacée d'environ 15 à 20 jours.

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données datant de juin 2025. Ces deux commandes montrent toutefois une régularité parfaite : 1 unité commandée chaque lundi (23 et 30 juin). Bien qu'il n'y ait pas de données récentes pour juillet et août, la demande de fond identifiée est de 1 unité par cycle. En l'absence de données N-1 pour confirmer une saisonnalité estivale ou une tendance de croissance, et conformément au principe de prudence (mieux vaut sous-estimer sur un faible historique), la recommandation se stabilise à 1 unité pour reprendre le cycle hebdomadaire du lundi identifié précédemment durant la période d'activité observée. La confiance est faible en raison du trou de données entre fin juin et fin août (8 semaines sans historique). Petit stock de sécurité intégré via la baseline de 1u unitaire qui est le minimum commandable observé au préalable par cycle d'approvisionnement habituel du client sur cet article spécifique de boisson aloe vera (ALO30). Aucun outlier détecté car les volumes sont constants (1u). Pas d'ajustement saisonnier possible sans historique N-1 ou données pivots de juillet/août. Recommandation finale conservatrice à 1 pour valider la reprise du flux régulier sans risque de surstockage sur un produit à rotation lente ou incertaine après une interruption d'achat notable de 2 mois par rapport au dernier historique enregistré en base de données client. Jour de commande aligné avec le cycle historique du lundi détecté en juin dernier sur les dernières transactions connues pour cet SKU particulier d'organic crunch aloe vera originaux 500ml distribués en canal B2B spécialisé.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, principalement le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par semaine
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune commande anormale détectée, toutes les transactions sont de 1 unité. ÉTAPE 2 (SAISONNALITÉ): Données N-1 absentes, mais aucune fluctuation majeure sur les 3 derniers mois malgré la période estivale. ÉTAPE 3 (TENDANCE): Rythme stable de 1 unité par commande hebdomadaire le lundi. ÉTAPE 4 (RECOMMANDATION): Le pattern étant parfaitement stable et la date actuelle correspondant au cycle habituel du lundi, une commande de 1 unité suffit pour couvrir la demande hebdomadaire sans générer de sur-stock.

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance bimensuelle
- **Saisonnalité**: none
- **Tendance**: Instable, faible volume (4u - 10u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 10 unités le 11/06 est traitée comme un outlier potentiel ou un surstockage initial face à la commande de 4 unités constatée le 23/06. ÉTAPE 2 (Saisonnalité) : Aucune donnée N-1 disponible, impact considéré comme nul par prudence. ÉTAPE 3 (Tendance) : Historique très pauvre (seulement 2 points de données en 3 mois). La dernière commande connue (23/06) était de 4 unités le lundi. ÉTAPE 4 (Recommandation) : En l'absence de données récentes au-delà de juin, on privilégie une approche conservatrice basée sur la consommation réelle basse observée pour éviter le surstockage sur un produit bio de niche.

</details>




### 📊 Données d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (32)

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
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 1.1u (21j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.5u (17j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (21j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | Stock prédit: 0.6u (8j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: 0.5u (5j restants) → prédit 3u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-16j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | Stock prédit: -2.1u (-18j restants) → prédit 4u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | Stock prédit: -0.7u (-7j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.9u (-25j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-25j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: -1.8u (-34j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | Stock prédit: -2.3u (-39j restants) → prédit 4u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -4.1u (-79j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:02:39.057Z*
