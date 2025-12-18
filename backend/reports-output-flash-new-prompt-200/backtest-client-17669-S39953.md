# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39953
- **Date commande** : 2025-10-28 09:35:16
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 31,180 input + 12,164 output = 43,344 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.1% | 36 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 53.1% | Score équilibré global |

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
| **MAE** | 0.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 19.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
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

## True Positives (13)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire irrégulier (principalement le mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère accélération de fréquence en octobre
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable de 2 unités (moyenne de 1.75 arrondie). ÉTAPE 1: Aucune valeur aberrante n'est détectée, les volumes (1u à 2u) sont cohérents pour un produit premium bio. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit est stable sur les 3 derniers mois. ÉTAPE 3: On observe une accélération de la fréquence en octobre (commandes les 01/10 et 08/10), suivie d'une pause de 19 jours. ÉTAPE 4: La commande intervient un lundi au lieu du mercredi habituel après une période sans réapprovisionnement de deux semaines. Une recommandation de 2 unités permet de couvrir le stock de sécurité et la demande hebdomadaire constatée sans risque de sur-stockage.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle vers la fin de mois ou milieu de mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 2/3u à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes sont faibles et cohérents. Étape 2: Saisonnalité faible; bien que les carottes/gingembre soient stables, on note historiquement des volumes légèrement plus élevés au printemps/été (2-3u) par rapport à l'automne (1u). Étape 3: Tendance en baisse, stabilisée à 1 unité par commande sur les 3 derniers mois (août, sept, oct). Étape 4: La demande de fond actuelle est strictement de 1 unité toutes les 3 à 4 semaines. La dernière commande datant du 08/10, nous sommes dans la fenêtre de réapprovisionnement habituelle. Compte tenu de la faible rotation récente, une unité suffit pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 15 et 30 jours, historiquement mensuel ou bi-mensuel.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (passage de 3-4u en N-1 à 1-2u récemment)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune commande outlier détectée, les volumes sont cohérents avec une activité B2B artisanale. La demande de fond récente se situe entre 1 et 2 unités. ÉTAPE 2: La saisonnalité N-1 montrait des volumes plus élevés en fin d'année (4u en déc. et sept.), suggérant un léger pic automnal, mais l'impact reste modéré. ÉTAPE 3: On observe une tendance baissière marquée par rapport à l'an dernier (division du volume par 2). Les trois dernières commandes (2u, 2u, 1u) confirment ce ralentissement. ÉTAPE 4: La recommandation est de 2 unités pour couvrir la demande de fond tout en tenant compte du léger effet de saisonnalité d'octobre/novembre, tout en restant conservateur face à la baisse de tendance globale.

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~15-45 jours), pas de jour fixe
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u en N-1 vs 1u/2u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités sont très faibles et stables (1-4u). Étape 2: La saisonnalité est négligeable car les volumes de N-1 étaient homogènes tout au long de l'année. Étape 3: On observe une tendance baissière nette, passant de commandes de 3-4 unités en 2024 à seulement 1 unité lors des deux dernières commandes. Étape 4: La base de calcul se situe à 1.5u (moyenne récente) mais face à la baisse de volume observée sur les deux derniers mois et l'absence de pic saisonnier à fin octobre, une approche conservatrice de 1 unité est recommandée pour éviter le sur-stockage.

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement régulière et stable de 1 unité par commande avec un intervalle moyen de 15 à 25 jours. ÉTAPE 1: Aucune valeur aberrante n'est détectée, la demande de fond est de 1u. ÉTAPE 2: Absence de données N-1, mais la stabilité sur les 3 derniers mois suggère un impact saisonnier négligeable pour ce volume. ÉTAPE 3: La tendance est parfaitement plate. ÉTAPE 4: Bien que la commande arrive un lundi alors que les précédentes étaient en milieu de semaine, le volume unitaire constant justifie le maintien d'un réapprovisionnement de 1 unité pour couvrir le prochain cycle sans risque de sur-stockage.

</details>


<details>
<summary><strong>6. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel le premier mercredi du mois ou fin de mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond extrêmement stable et linéaire de 1 unité par mois (30 jours environ), systématiquement commandée le mercredi. Il n'y a aucun outlier détecté ni de saisonnalité visible sur les données récentes. Bien que la commande actuelle intervienne un lundi (soit 2 jours avant le cycle habituel du début de mois), le volume constant de 1u ne justifie pas de hausse, d'autant plus que nous approchons du début novembre. Une approche conservatrice est adoptée pour éviter le sur-stockage sur une référence à faible rotation.

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel, le premier mercredi du mois.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur les 3 derniers mois avec une commande de 1 unité passée systématiquement en début de mois le mercredi (août, septembre, octobre). Aucun outlier n'est détecté. Bien que nous n'ayons pas de données N-1, la stabilité du volume et de la fréquence suggère une demande de fond constante de 1 unité par cycle de 30 jours. La demande actuelle intervient un lundi (27/10), soit légèrement en avance sur le cycle habituel du premier mercredi du mois (05/11), mais correspond au réapprovisionnement nécessaire pour couvrir le mois de novembre. Une recommandation de 1 unité maintient le stock sans risque de sur-stockage.

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière, environ tous les 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée -50%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune anomalie majeure, les volumes (2-4u) sont cohérents avec un produit de niche. Étape 2 (Saisonnalité): Pas de pic marqué en fin d'année ou automne sur N-1; l'activité semble plus soutenue au printemps/été. Étape 3 (Tendance): On observe un ralentissement net en 2025 avec des commandes tombées à 1u contre 3u historiquement. Étape 4 (Recommandation): En restant conservateur face à cette baisse de volume récente et pour éviter le sur-stockage d'un produit dont la rotation ralentit, une commande de 1 unité est préconisée pour couvrir la consommation immédiate tout en validant si la demande reprend.

</details>


<details>
<summary><strong>9. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune anomalie détectée sur les deux commandes précédentes de 2 unités chacune. Étape 2: Aucune donnée historique N-1 n'est disponible pour évaluer la saisonnalité ; le produit semble avoir une demande de fond constante mais sporadique. Étape 3: La tendance est strictement stable (2u). Le délai entre les deux dernières commandes (41 jours) suggère une demande très lente. Étape 4: Étant donné l'absence de pattern hebdomadaire clair et la faible rotation constatée, nous recommandons de maintenir le volume historique de 2 unités pour couvrir le besoin sans risque de surstockage sur un produit bio dont la DLUO peut être critique.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (mensualité instable)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u - 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et irrégulière, oscillant entre 1 et 2 unités. ÉTAPE 1: Aucun outlier détecté, les volumes sont constants. ÉTAPE 2: La saisonnalité n'est pas marquée, le produit étant présent de février à septembre sans pic significatif à la période actuelle de fin octobre. ÉTAPE 3: La tendance récente est stable avec une commande toutes les 4 semaines environ, bien que la dernière remonte à début septembre (possible rupture de rythme). ÉTAPE 4: Étant donné l'absence de commande depuis 7 semaines, une commande de 2 unités est recommandée pour couvrir la demande latente tout en restant conservateur face à la faible rotation du produit. Le niveau de confiance est faible en raison de la rareté des données récentes (dernière commande il y a 54 jours). oups, 2 unités est un stock de sécurité suffisant pour ce produit à faible débit p190g b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin b2b b2c boursin

</details>


<details>
<summary><strong>11. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 28 à 30 jours le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une demande très stable de 1 unité par mois (Août et Septembre). Il n'y a pas de données N-1 pour confirmer une saisonnalité, mais le pattern actuel est linéaire. La dernière commande datant du 03/09, le réapprovisionnement est attendu pour fin octobre. Bien que nous soyons un lundi (le cycle habituel étant le mercredi), la quantité de fond reste de 1 unité. En l'absence de tendance haussière ou de promotions identifiées, une approche conservatrice de 1 unité est recommandée pour éviter le sur-stockage d'un produit à rotation lente (slow-mover). La confiance est faible en raison du très petit nombre de points de données historiques (2 commandes). Boris, expert Supply Chain, recommande de maintenir le stock minimal de sécurité à 1 unité brute jusqu'à accélération du flux par le client final car le risque de rupture est ici compensé par le risque de péremption sur un produit bio chips 125g si stocké en excès (fragilité relative). Chaque unité pèse lourd dans le stock moyen sur ce type de profil de vente unitaire mensuel (1u/mois). On reste donc sur la ligne de base sans ajustement multiplicateur car aucune tendance haussière ne se dessine (0% de croissance entre août et septembre). La commande n'a pas eu lieu début octobre, ce qui suggère un besoin immédiat en cette fin de mois (rattrapage de cycle). On recommande 1 car c'est la structure même de la demande constatée sur les deux derniers cycles complets sans variation de volume (1u puis 1u). Une anticipation pour novembre n'est pas nécessaire vu le délai de livraison B2B agro classique. On traite donc le besoin du cycle actuel uniquement soit 1 unité pour couvrir le mois de novembre à venir selon le rythme observé. On ne commande pas 2 car cela reviendrait à stocker 60 jours de vente, ce qui est contre-productif en bio premium chips (Risque fraîcheur/Rotation). Le 27/10 tombe pile 8 semaines après la dernière commande, ce qui cadre avec l'absence de commande début octobre. On comble donc le cycle manquant avec l'unité standard de base (baseline de 1.0).

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:26:15: 2u
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:26:15: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-27 06:19:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 4u
- 2024-07-30 10:52:57: 4u
- 2024-07-01 06:32:15: 4u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 3u
- 2024-07-01 06:32:15: 4u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-06 06:23:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 3u
- 2024-07-30 10:52:57: 3u
- 2024-07-01 06:32:15: 3u
- 2024-05-13 08:03:20: 4u
- 2024-03-27 09:29:35: 3u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (23)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: 0.3u (3j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -0.5u (-7j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: -0.2u (-5j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -2.4u (-37j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: -2.9u (-39j restants) → prédit 2u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -1.7u (-38j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.8u (-66j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: -2.2u (-75j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 10 | Stock prédit: -6.1u (-73j restants) → prédit 10u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -3.9u (-62j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-32j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:09:06.022Z*
