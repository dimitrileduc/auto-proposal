# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S40360
- **Date commande** : 2025-11-14 12:32:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 14,494 input + 5,590 output = 20,084 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.3% | 16 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 72.0% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (9)

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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


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
- **Pattern temporel**: Cycle mensuel identifié
- **Saisonnalité**: none
- **Tendance**: Stable à 1u/mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation extrêmement régulière et de faible volume (1 unité par commande). Les données historiques couvrent uniquement les deux derniers mois, mais le rythme est stable avec un intervalle d'environ 30 jours entre les commandes. Sans historique N-1 pour confirmer une saisonnalité de fin d'année et compte tenu de la nature 'stock de fond' de ce produit dans ce contexte, une approche conservatrice est privilégiée. La quantité recommandée suit strictement la demande de fond observée à 1 unité pour éviter tout sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique le mercredi environ tous les 40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité anormale détectée, la demande de fond est fixée à 1 unité. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: Le rythme de commande est très lent (tous les 1.5 mois) avec une stabilité parfaite du volume (1u). La commande actuelle arrive seulement 8 jours après la précédente, ce qui est inhabituellement rapproché par rapport au cycle de 40 jours observé entre septembre et novembre. Étape 4: Étant donné la faible vélocité du produit et le stock probablement encore suffisant suite à la commande du 05/11, une recommandation conservatrice d'une seule unité est préconisée pour couvrir les besoins immédiats sans créer de sur-stock inutile sur une référence à faible rotation. Confiance faible due au très faible nombre de points de données (2 commandes). Même si le jour habituel est le mercredi, le passage au jeudi n'impacte pas le volume ici au vu de la fréquence globale élevée du cycle de réapprovisionnement réel du client pour cette référence spécifique (JOY04). Solo la fréquence est jugée erratique à ce stade, justifiant la prudence sur la quantité commandée (1 unité). La proximité entre les deux dernières commandes suggère peut-être un besoin nouveau ou une rupture locale, mais l'absence d'historique robuste impose la prudence (1u). En supply chain B2B agroalimentaire, sur un tel volume (1u), le risque de rupture est aussi faible que le coût de possession, mais l'optimisation impose ici de ne pas doubler le stock sans signal de croissance clair (stable à 1u). Par conséquent, 1 unité est recommandée pour maintenir la continuité minimale du stock de sécurité sans alourdir le BFR sur une référence 'slow-mover'.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une prédominance pour le mercredi (75% des commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère accélération (moyenne 2,25 unités)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité aberrante n'a été identifiée sur les 4 points de données disponibles (volumes de 1 à 3 unités). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit Chips Bio est généralement stable en automne. Étape 3: On observe une tendance stable à légèrement haussière (dernière commande à 3u). Le client semble commander principalement le mercredi; cette demande de jeudi arrive juste après le créneau habituel, suggérant un besoin réel immédiat. Étape 4: La moyenne lissée est de 2,25 unités. Compte tenu du délai depuis la dernière commande (8 jours) et du volume de la semaine passée (3u), une recommandation de 3 unités permet de couvrir la demande sans risque de surstockage majeur pour ce format 125g.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel variable, prédominance le mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 1u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Pas d'outliers identifiés, les volumes (1u à 3u) sont cohérents pour un produit bio premium B2B. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles, impact considéré nul pour le moment. ÉTAPE 3 (Tendance): On observe une accélération du volume sur les deux derniers mois (passant de 1-2u à 3u le 5 novembre) et un raccourcissement de l'intervalle entre les deux dernières commandes (environ 30 jours contre 60 auparavant). ÉTAPE 4 (Recommandation): La dernière commande date d'il y a seulement 8 jours (3u), cependant la demande actuelle intervient hors cycle habituel un jeudi. Au vu de la tendance haussière récente, une commande de 3 unités (le maximum observé) permet de couvrir la demande sans risque majeur de sur-stockage.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une base de commande toutes les 3 à 6 semaines, systématiquement le mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier, les volumes (2-3 unités) étant très stables et faibles. Étape 2: Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul par prudence. Étape 3: On observe une légère accélération du volume sur la dernière commande (3u le 05/11) après un long intervalle de 6 semaines. Le jour de commande habituel est le mercredi; la demande actuelle intervient un jeudi, soit juste après le créneau habituel. Étape 4: La base moyenne est de 2.33 unités. Étant donné l'absence d'historique long et la faible fréquence, une approche conservatrice est adoptée pour éviter le sur-stockage sur un produit à rotation lente. On recommande 2 unités pour couvrir la demande de fond sans saturer les stocks avant le prochain cycle de décembre/janvier (période creuse post-fêtes en bio). Une seule unité de sécurité n'est pas nécessaire ici au vu du faible volume unitaire moyen/commande très espacé dans le temps (3 semaines min). Moins on a de données, plus on reste proche de la moyenne basse historique (2u). Son volume est en légère hausse, mais une commande de 3u est déjà passée il y a seulement 8 jours, ce qui suggère que le stock client n'est pas encore épuisé, d'où la recommandation de 2u pour un ajustement de complément de rayon ou une commande spécifique client si le stock tourne plus vite en novembre qu'en septembre (passage de 42 jours à 30 jours entre les dernières commandes). La confiance est faible à cause du petit échantillon de données (3 points). Quantité retenue: 2u pour plus de sécurité contre le sur-stockage sur un petit format 125g.

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), début de mois
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ 30 jours (03/09, 02/10, 05/11). ÉTAPE 1: Aucune quantité n'est considérée comme un outlier, les volumes étant très faibles et cohérents pour du B2B de niche. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, impact considéré neutre. ÉTAPE 3: On observe une tendance baissière sur les trois derniers mois (3, 2, puis 1 unité). ÉTAPE 4: Bien que la dernière commande soit de 1u, la moyenne glissante est de 2u. Pour éviter une rupture sur un produit 'Deluxe' bio qui semble suivre un réapprovisionnement de fond mensuel, une recommandation de 2 unités est préconisée pour stabiliser le stock sans risque de sur-stockage majeur.

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle de 30-34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (moyenne de 2.33u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune commande n'est identifiée comme outlier, les volumes (2u, 3u, 2u) sont homogènes. ÉTAPE 2 (Saisonnalité) : Pas de données N-1 disponibles, mais la stabilité sur les 3 derniers mois suggère un impact saisonnier négligeable à ce stade. ÉTAPE 3 (Tendance) : Le rythme est strictement mensuel (03/09, 02/10, 05/11). La demande actuelle arrive environ 8 jours après la dernière commande du 05/11, ce qui est précoce par rapport au cycle habituel de 30 jours. ÉTAPE 4 (Recommandation) : Compte tenu de la faible rotation et du cycle mensuel habituel non encore révolu, une quantité conservatrice de 2 unités est préconisée pour couvrir les besoins immédiats sans sur-stocker ce produit de niche.

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (tous les 8 à 15 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u - 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté au vu du très faible historique, les volumes de 1 et 2 unités sont cohérents pour du micro-réapprovisionnement. Étape 2 : Absence de données N-1, impact saisonnier inconnu (noté 'none' par prudence). Étape 3 : Tendance stable sur un volume très bas. La fréquence semble être bimensuelle. Étape 4 : La demande de fond est de 1.5 unités sur les deux derniers mois. Étant donné l'absence d'historique solide et la politique conservatrice pour éviter le sur-stockage sur un produit à faible rotation, une commande de 1 unité est recommandée pour maintenir une présence en rayon sans risque financier.

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 3u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (début de mois)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (1u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier faute d'un historique massif, bien que le passage de 1u à 4u suggère une adoption croissante. Étape 2: Aucune donnée N-1 n'est disponible pour valider une saisonnalité, impact considéré comme neutre. Étape 3: On observe une tendance haussière sur les deux points de données (sep/oct), avec un cycle d'environ 30 jours. Étape 4: La date actuelle (mi-novembre) indique un besoin de réapprovisionnement après 40 jours sans commande. En restant conservateur face au faible volume de données (Low confidence), une quantité de 3 unités est recommandée pour couvrir la demande de fond sans risquer le surstockage, en lissant la transition entre 1 et 4 unités.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-10-02 06:12:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-09-24 12:59:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-10-02 06:12:05: 1u
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-10-02 06:12:05: 2u
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-10-02 06:12:05: 3u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 14:52:11: 2u
- 2025-10-02 06:12:05: 3u
- 2025-09-03 06:51:32: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:12:05: 1u
- 2025-09-24 12:59:39: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:12:05: 4u
- 2025-09-03 06:51:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (7)

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 2.3u (22j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: 0.5u (7j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.6u (-19j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.7u (-40j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 6 | Stock prédit: -0.5u (-39j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:09:36.245Z*
