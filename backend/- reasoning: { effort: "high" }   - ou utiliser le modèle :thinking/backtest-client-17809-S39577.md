# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S39577
- **Date commande** : 2025-10-09 06:15:56
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 16,367 input + 4,567 output = 20,934 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (12)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent, environ toutes les 3 à 4 semaines, sans jour fixe prédominant
- **Saisonnalité**: none
- **Tendance**: Hausse légère avec passage de 2u à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les volumes sont très stables (1-3u). Étape 2 : Pas de saisonnalité marquée en N-1 à cette période (sept/oct), la demande reste constante. Étape 3 : On observe une légère accélération de la demande en 2025 avec des commandes passant de 2u à 3u sur les deux derniers mois actifs, signalant une croissance de la consommation de fond. Étape 4 : La demande de base est de 2u, ajustée à 3u pour suivre la tendance haussière récente observée en septembre. Le stock de sécurité est maintenu via cet arrondi supérieur.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent d'environ 20 à 30 jours, sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec légère fluctuation de stock
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Étape 1: Le nettoyage des données montre une demande de fond très stable de 2 unités par commande. La commande de 3u en juillet est considérée comme un léger surstockage ponctuel compensé par la commande de 1u la semaine suivante. Étape 2: Aucune saisonnalité marquée n'est détectée entre 2024 et 2025; le produit maintient un volume constant toute l'année. Étape 3: La tendance est parfaitement stable à 2 unités. La dernière commande date d'il y a 28 jours (10 sept), ce qui correspond à la fréquence moyenne de réapprovisionnement du client. Étape 4: En suivant une approche conservatrice et au vu de la stabilité historique quasi parfaite du produit (2u dans 85% des cas), une commande de 2 unités est préconisée.

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle variable de 20 à 30 jours, tendance milieu de mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 3u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage de l'outlier de 4u (septembre N-1) qui semble être un pic isolé. La moyenne de fond se stabilise à 2.6u. Étape 2: La saisonnalité est faible, bien que les volumes de fin d'année soient historiquement plus bas (1u en déc/jan vus en N-1), octobre reste sur un plateau standard. Étape 3: La tendance récente montre une stabilisation à 3u sur les deux dernières commandes majeures de juillet et septembre. Étape 4: Le passage de commande un mercredi est cohérent avec la dernière transaction. On maintient la quantité de 3 unités pour couvrir le besoin mensuel sans risque de surstockage, en suivant la stabilité observée sur le deuxième semestre 2025.

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 3u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles de 10 à 45 jours
- **Saisonnalité**: strong
- **Tendance**: Hausse significative (passage de 1.3u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents pour un produit de niche (1-2u). Étape 2: La saisonnalité du potiron est forte à l'approche de l'automne/hiver. En N-1, des commandes régulières ont eu lieu d'octobre à décembre. Étape 3: On observe une accélération récente avec une commande de 3u en septembre 2025, soit le double de la moyenne historique (1.5u). Étape 4: Pour répondre à la hausse de la demande de fond et à l'entrée dans la saison haute (octobre), le maintien de la quantité de 3u est recommandé pour sécuriser le stock sans risque majeur de sur-stockage.

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel irrégulier, cycle moyen de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond extrêmement stable à 2 unités par commande depuis 2023. L'étape 1 révèle l'absence d'outliers majeurs, la commande de 1u en mars 2024 étant une fluctuation mineure. L'étape 2 n'indique aucune saisonnalité marquée pour cette tartinade, les volumes restant identiques en été comme en hiver. L'étape 3 identifie une légère accélération récente avec une commande de 3 unités en septembre 2025 après un creux en août, mais sans confirmation d'une tendance structurelle à la hausse. Pour le mercredi 8 octobre, suivant une commande le 10 septembre, nous sommes dans le cycle habituel. En restant conservateur pour éviter le sur-stockage sur un produit à rotation lente, la recommandation est de 2 unités.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle moyen de 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie majeure détectée, les volumes oscillent systématiquement entre 1 et 2 unités. ÉTAPE 2 (Saisonnalité): Pas de pic marqué en octobre N-1 (dernière commande fin octobre), le produit semble stable avec une faible saisonnalité estivale finie. ÉTAPE 3 (Tendance): On observe un ralentissement sur les deux dernières commandes (1u) par rapport au standard historique de 2u. Le rythme de commande s'est espacé (dernière commande il y a 28 jours). ÉTAPE 4 (Recommandation): La demande de fond est faible. Étant donné la tendance récente à 1 unité et l'absence de pic saisonnier imminent pour ce type de tartinade en octobre, une commande de 1 unité est recommandée pour minimiser le stock dormant tout en couvrant le besoin immédiat.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.15u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 7 à 30 jours, historiquement actif en début de mois.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 2.2u en N-1 à 1.5u en moyenne récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'a été identifiée, les commandes fluctuant de manière cohérente entre 1 et 3 unités. Étape 2: La saisonnalité est faible mais présente avec un léger ralentissement à l'automne (septembre/octobre). Étape 3: On observe un ralentissement de la fréquence et du volume sur les 3 derniers mois (moyenne de 1.66u contre 2.25u l'année précédente). Étape 4: La recommandation de 2 unités permet de couvrir la demande de fond tout en tenant compte de la tendance baissière récente, évitant ainsi un surstockage sur une référence dont la rotation s'essouffle légèrement par rapport à 2024.

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (moyenne d'une commande toutes les 3 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (Nettoyage): La commande de 3u en juillet 2025 est considérée comme un pic isolé par rapport à la moyenne historique de 1.6u. ÉTAPE 2 (Saisonnalité): Pas de pic majeur sur la période octobre en N-1 (une seule commande de 2u fin octobre). Le produit est stable. ÉTAPE 3 (Tendance): La fréquence s'est légèrement espacée récemment (juillet puis septembre). Le jour de commande (mercredi) correspond exactement à la dernière commande passée, confirmant une possible nouvelle habitude de milieu de semaine. ÉTAPE 4 (Recommandation): On se base sur la moyenne épurée (1.6u) arrondie par le haut à 2u pour sécuriser le stock B2B sans risque de sur-stockage massif, la tartinade étant un produit à rotation modérée.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 20 à 30 jours, sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50% (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES DU RAISONNEMENT : 1. DE-EVENTING : Aucune donnée aberrante détectée, les volumes sont très faibles et stables (1-2 unités). 2. SAISONNALITÉ : Pas de corrélation saisonnière marquée entre N-1 et l'année actuelle ; le produit semble être une référence de fond de rayon discrète. 3. TENDANCE : On observe une baisse de volume unitaire (2 unités systématiques en 2024 contre 1 unité en 2025) et un ralentissement de la fréquence (dernière commande il y a 28 jours). 4. RECOMMANDATION : Au vu de la faible rotation récente et de la tendance baissière par rapport à N-1, une commande de 1 unité est recommandée pour couvrir le mois à venir tout en minimisant le risque de sur-stockage.

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une prédominance de commandes le vendredi en N-1, décalé vers le mercredi/jeudi en 2025
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u-2u) avec ralentissement de fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune anomalie détectée, les volumes sont constants entre 1u et 2u. ÉTAPE 2 (SAISONNALITÉ): Faible impact saisonnier observé en octobre/novembre N-1 (commandes de 1u et 2u). ÉTAPE 3 (TENDANCE): Le produit montre une rotation lente. La dernière commande date d'il y a 4 semaines (10 sept). Le cycle est passé de hebdomadaire en juillet à mensuel en septembre. ÉTAPE 4 (RECOMMANDATION): Compte tenu de la faible rotation récente et de la volonté de ne pas sur-stocker un produit de 190g à faible débit, la quantité de 1u est recommandée pour couvrir la demande immédiate tout en restant conservateur.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (environ tous les 20-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec légère accélération récente
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très stable de 2 unités par commande depuis un an. Etape 1 : Une seule commande de 3u identifiée comme un micro-événement, la base de 2u est constante. Etape 2 : Aucune saisonnalité marquée n'est visible sur N-1 entre septembre et novembre. Etape 3 : Bien que les commandes récentes de juillet 2025 montrent un rapprochement des dates (hebdomadaire), le volume unitaire reste ancré à 2u. Etape 4 : La demande actuelle (mercredi) sort du cycle habituel mais correspond à la fenêtre de réapprovisionnement logique après le dernier pic de juillet. Une recommandation de 2 unités permet de maintenir le stock sans risque de sur-stockage sur un produit à rotation lente.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 2u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 2u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 4u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 3u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 3u
- 2024-02-02 09:19:36: 3u
- 2024-01-22 12:29:19: 1u
- 2023-12-15 07:53:16: 1u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 1u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 1u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 2u
- 2023-10-30 07:15:45: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 2u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:18:07: 1u
- 2024-07-15 06:44:53: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 2u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 1u
- 2023-10-30 07:15:45: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (3)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.3u (-24j restants) → prédit 1u mais non commandé |


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
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock suffisant: 2.5u (45j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock suffisant: 2.8u (60j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock suffisant: 1.8u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:01:29.454Z*
