# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39942
- **Date commande** : 2025-10-29 13:44:03
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 23,744 input + 8,630 output = 32,374 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.9% | 29 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 55.0% | Score équilibré global |

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
| **MAE** | 0.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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

## True Positives (11)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (jeudi) depuis octobre, mensuel auparavant (mercredi)
- **Saisonnalité**: none
- **Tendance**: Fréquence en hausse (passage de mensuel à hebdomadaire), volume stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles et cohérents (1-2u). Étape 2: Aucune donnée N-1 disponible, mais la stabilité d'octobre suggère une absence de pic saisonnier majeur immédiat. Étape 3: On observe une accélération de la fréquence de commande : mensuelle en août/septembre (2u), elle devient hebdomadaire en octobre (1u). Le volume total mensuel reste cohérent (4u/mois). Étape 4: La commande intervient un mardi au lieu du jeudi habituel des deux dernières semaines. Étant donné la faible vélocité et la volonté de ne pas sur-stocker un produit organique, une unité suffit pour couvrir le besoin jusqu'à la semaine suivante.

</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ toutes les 2 à 5 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est strictement de 1 unité par commande. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: La tendance est extrêmement stable (1u par commande) mais la fréquence est irrégulière (intervalle de 14 à 36 jours). Étape 4: La dernière commande remontant à 12 jours (16 oct), la commande actuelle du 28 oct s'inscrit dans un cycle de réapprovisionnement court. Étant donné le faible volume constant et l'absence de données de stock, la recommandation reste à l'unité minimale pour éviter le sur-stockage sur un produit à faible rotation (Slow Mover). NB: Confiance faible due à la faible volumétrie et l'absence d'historique long terme ou N-1. L'écart de jour (mardi vs milieu de semaine) n'influence pas la quantité unitaire ici car le volume est au seuil minimal (1u). Chaque commande déclenche l'achat de l'unité consommée au coup par coup sans effet de masse critique visible pour le moment (B2B à l'unité). Nous restons donc conservateurs avec 1 unité seule au vu des rythmes récents malgré l'absence de pattern hebdomadaire strict (parfois un mercredi, parfois un jeudi). Il est plus prudent ici de garder 1unité si le besoin est exprimé maintenant plutôt que d'attendre ou de doubler la dose sans signal de croissance forte des volumes commandés à chaque passage de bon de commande. La stabilité l'emporte sur l'incertitude du timing exact de la semaine prévue pour la prochaine sortie. 1 est le bon pivot pour maintenir le flux sans risque financier ou physique majeur lié à la péremption ou place en rayon pour ce genre de produit de niche (Crunchy fruit 12g). Un signal fort de croissance serait nécessaire pour passer à 2.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ toutes les 2 à 4 semaines sans jour fixe prédominant
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume par commande (6u -> 2u -> 1u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 6u en septembre est traitée comme un outlier (4.5x la moyenne des autres commandes). La demande de fond réelle se situe autour de 1.33 unités. ÉTAPE 2 (Saisonnalité): Aucune donnée N-1 disponible pour confirmer un cycle, impact considéré comme neutre. ÉTAPE 3 (Tendance): On observe un ralentissement sur les deux derniers mois avec des commandes unitaires (1u) malgré un intervalle de temps qui se réduit. ÉTAPE 4 (Recommandation): Au vu du faible historique et de la tendance baissière des volumes unitaires, une approche conservatrice de 1 unité est recommandée pour couvrir le besoin immédiat sans risque de sur-stockage sur un produit bio à faible rotation apparente (ReBEL chips). L'absence de jour de commande fixe et le faible volume global justifient une confiance basse dans la prédiction statistique pure, mais haute sur la gestion du risque financier (Low stock risk). Pour une reprise de stock, 1 unité suffit au regard du dernier point de contact (16/10).", "day_cycle_analysis": "Date demandée: mardi (28/10), correspondant à l'historique (12/08).

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (7 à 14 jours), passage récent du mercredi au jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 6u le 10/09 est un outlier majeur (> 4x la moyenne des autres commandes) et a été écartée pour le calcul de la demande de fond. ÉTAPE 2 (Saisonnalité) : Pas de données N-1 disponibles, mais les données récentes montrent une activité faible et stable malgré l'entrée en période automnale. ÉTAPE 3 (Tendance) : Le volume est monté à 2u lors de la dernière commande après plusieurs occurrences à 1u. On observe un glissement du jour de commande (Mardi -> Mercredi -> Jeudi). ÉTAPE 4 (Recommandation) : Avec une demande de fond nettoyée proche de 1.25u par commande et une fréquence qui s'est densifiée en octobre (hebdomadaire), une quantité conservatrice de 1 unité est recommandée pour éviter le surstockage sur ce produit à faible rotation, tout en maintenant la présence en rayon car la dernière commande date de 12 jours (probable rupture de stock ou stock bas). Le choix de 1u au lieu de 2u est dicté par la prudence B2B sans visibilité N-1 sur ce produit bio premium spécifique au mardi (hors cycle habituel).

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une tendance bi-mensuelle observée en août et septembre
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.5u - 2u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : La commande de 6u le 10/09 est identifiée comme un outlier (4.5x la moyenne des autres points) probablement lié à un réassort de lancement ou promo. La base de fond est de ~1.33u. Étape 2 (Saisonnalité) : Pas de données N-1 disponibles. Le secteur chips peut être sensible à la météo, mais l'historique court ne permet pas de confirmer un pattern automnal. Étape 3 (Tendance) : Les volumes récents (hors outlier) sont passés de 1u en août à 2u mi-octobre, suggérant une légère hausse de la rotation. Étape 4 (Recommandation) : On recommande 2 unités pour couvrir la demande de fond et la tendance récente tout en restant conservateur face à l'irrégularité des dates de commande, afin d'éviter le sur-stockage sur un produit bio dont la DDM peut être plus courte que le conventionnel (125g). La confiance est faible due au faible nombre de points de données (4). 

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier tendant vers un cycle hebdomadaire (7 jours) en octobre
- **Saisonnalité**: none
- **Tendance**: Hausse de la fréquence de 15j à 7j, volume stable à 1-2u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 6u le 10/09 est identifiée comme un outlier (4x la moyenne des autres commandes) et est exclue du calcul de base. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, impact considéré nul par défaut. ÉTAPE 3 (Tendance): On observe une accélération de la fréquence de réapprovisionnement en octobre (hebdomadaire) par rapport à septembre (bimensuel). Le volume unitaire hors outlier reste faible (1.5u en moyenne). ÉTAPE 4 (Recommandation): La demande de fond est de 1.5u. Compte tenu du passage à un rythme hebdomadaire et de la date actuelle (mardi), une commande de 2u permet de couvrir le cycle de 7 jours observé récemment tout en restant conservateur face à l'absence d'historique long terme.

</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (le jeudi) constaté sur les deux dernières semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande avec accélération de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très stable de 1 unité par commande. Il n'y a pas d'outliers détectés (ÉTAPE 1). L'absence de données N-1 ne permet pas de confirmer une saisonnalité, mais le volume faible suggère un produit de niche ou en phase de test (ÉTAPE 2). On observe une tendance à la régularisation : après une commande isolée en août, le client est passé à un rythme hebdomadaire fixe (tous les jeudis) en octobre (ÉTAPE 3). Bien que nous soyons un mardi, soit 2 jours avant le cycle habituel, le besoin reste de 1 unité pour couvrir le cycle de vente hebdomadaire observé, sans risque de sur-stockage au vu de la stabilité du volume (ÉTAPE 4).

</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 30 jours, majoritairement le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une stabilité parfaite de la demande de fond à 1 unité par commande. 1/ De-eventing : Aucun outlier détecté, toutes les commandes sont unitaires. 2/ Saisonnalité : Absente ou non mesurable sans données N-1, le produit se comporte comme un fond de rayon stable. 3/ Tendance : Rythme bimensuel à mensuel constant. 4/ Final : Bien que la commande intervienne un mardi au lieu du mercredi habituel, le volume de 1 unité est le standard absolu pour ce client sur ce produit. Une recommandation de 1 unité permet de maintenir le stock sans risque d'obsolescence.

</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 20 à 30 jours, commandes en milieu de semaine (mercredi/jeudi).
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, le volume de base est strictement de 1 unité. Étape 2 : Pas de données N-1 pour confirmer une saisonnalité, bien que le secteur suggère un ralentissement hors période estivale pour les softs. Étape 3 : La tendance est extrêmement stable avec une fréquence moyenne d'une commande toutes les 3 à 4 semaines. Étape 4 : Malgré une demande un mardi (légèrement en avance sur le cycle habituel), le volume historique ne justifie pas de commander plus de 1 unité. Prudence maximale recommandée vu le faible historique et la volatilité des dates de commande (intervalle de 21 à 43 jours). Aucun signe de croissance justifiant un surstockage de sécurité (2u).

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (15 à 25 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont constants à 1 unité. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles pour confirmer une saisonnalité, mais le produit (énergie bio) est généralement stable en automne. ÉTAPE 3 (Tendance): La tendance est parfaitement stable avec un volume de 1 unité par réapprovisionnement environ toutes les 3 à 4 semaines. La dernière commande date d'il y a 36 jours, suggérant un besoin imminent de maintien de stock. ÉTAPE 4 (Recommandation): Basé sur la stabilité absolue des volumes précédents et l'absence de signaux de croissance, la recommandation reste conservatrice à 1 unité.

</details>


<details>
<summary><strong>11. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (7 semaines d'écart entre les deux commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume unitaire (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur le faible volume (1u et 2u). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le secteur agro-alimentaire soit sensible, le faible historique empêche une analyse fiable. Étape 3: Un ralentissement est observé avec une commande de 1u le 22 Septembre contre 2u le 6 Août. Il n'y a pas eu de commande pendant plus de 30 jours, suggérant une rotation très lente. Étape 4: Compte tenu de la faible fréquence et de la tendance baissière du volume par commande, une quantité conservatrice de 1 unité est recommandée pour éviter le sur-stockage d'un produit à rotation lente.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 2u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 2u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-10-09 06:22:48: 1u
- 2025-09-22 11:23:24: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-10-09 06:22:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-06 06:21:49: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-06 06:21:49: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:23:24: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:23:24: 1u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (18)

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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (14j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: 0.5u (16j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -1.4u (-10j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.3u (-3j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.4u (10j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -1.9u (-30j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.5u (-19j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.2u (-10j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 12 | Stock prédit: 0.3u (16j restants) → prédit 12u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -1.5u (-28j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:09:18.923Z*
