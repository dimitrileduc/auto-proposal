# Rapport Backtest - Client BONBON CARAMEL

## Contexte

- **Client** : BONBON CARAMEL (ID: 60225)
- **Commande réelle** : S39765
- **Date commande** : 2025-10-16 11:39:34
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 5,329 input + 2,747 output = 8,076 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 90.9% | Score équilibré global |

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
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 30.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (5)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ 1 commande toutes les 5 semaines
- **Saisonnalité**: none
- **Tendance**: Baisse légère (de 3u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune commande identifiée comme outlier, les volumes (2u et 3u) sont cohérents pour du snacking bio premium. 2. SAISONNALITÉ: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. 3. TENDANCE: On observe un espacement important des commandes (dernière il y a 34 jours) et un volume en légère diminution. 4. RECOMMANDATION: Avec seulement deux points de données, la prudence est de mise. La demande de fond se situe autour de 2.5 unités. Compte tenu de la faible rotation et de la volonté de ne pas sur-stocker des produits à date de péremption, une commande de 2 unités est recommandée pour couvrir le besoin immédiat sans risque d'invendus, le mercredi étant un jour cohérent avec l'historique de commande du client (mercredi/jeudi). L'indice de confiance est faible en raison du très petit échantillon de données historiques disponibles (n=2). Sans données sur les stocks actuels, on privilégie le volume le plus bas observé récemment pour limiter le risque financier sur une référence de niche (chips premium/paprika fumé). Aucun ajustement significatif n'est appliqué pour le jour de la semaine car le cycle de commande semble être orienté par le besoin de réapprovisionnement de fond plutôt que par un jour fixe rigide au vu du délai entre les deux dernières commandes (août vs septembre). Le prochain créneau de commande devrait naturellement se situer mi-octobre, ce qui correspond à la date actuelle (2025-10-15). On maintient donc la proposition à 2 unités pour stabiliser le stock sur la base du dernier mouvement observé en septembre.

</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2-3 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante identifiée, les volumes de 2 et 3 unités sont cohérents pour un produit de niche bio. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par prudence. Étape 3: La fréquence est erratique (approx. 5 semaines entre les commandes). Le volume est stable avec une légère hausse de 2 à 3 unités sur la dernière commande. Étape 4: La date actuelle (15 octobre) se situe 34 jours après la dernière commande du 11 septembre, ce qui correspond au cycle observé. Recommandation conservatrice de 3 unités pour couvrir le prochain mois sans risque de sur-stockage important.

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 35 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse de 3u à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n-étant identifiée comme outlier faute de volume suffisant, la demande de fond se situe entre 2 et 3 unités par commande. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: On observe une légère diminution du volume (3u en août vers 2u en septembre) avec un intervalle de commande d'environ 5 semaines. Étape 4: Étant donné la faible fréquence de rotation et l'absence d'historique solide, une approche conservatrice de 2 unités est préconisée pour couvrir les besoins du mois à venir sans risquer le sur-stockage d'un produit bio de niche (chips). Le niveau de confiance est bas en raison du très faible nombre de points de données (2 commandes). Même si la date du jour correspond au cycle de 5 semaines par rapport à la dernière commande (11/09), le volume reste minimaliste sur ce produit spécifique. Nous privilégions le dernier volume observé (2u).  Le jour de commande demandé (mercredi) est cohérent avec l'historique de commande du 6 août (mercredi). Nous recommandons donc de maintenir le niveau plancher observable de 2 unités pour ce réapprovisionnement de mi-octobre afin d'ajuster le stock sans encombrement inutile avant la période des fêtes, potentiellement plus dynamique pour ce type de snack premium bio à consommer lors d'événements familiaux ou festifs d'ici la fin d'année. Ce stock de 2 unités devrait suffire pour les 30 à 40 prochains jours selon la vélocité observée jusque-là dans les commandes précédentes enregistrées par le système pour ce client spécifique dans ce secteur B2B agroalimentaire bio en question ici pour la référence REB04 chips thym/romarin 125g mentionnée dans la requête.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ un cycle de 35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à légère baisse (3u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune anomalie détectée sur les deux points de données, les volumes sont cohérents pour du snacking B2B de niche. Étape 2: Absence de données N-1, impact saisonnier considéré comme nul par défaut. Étape 3: On observe une légère baisse de 3 unités en août à 2 unités en septembre. Le délai entre les commandes est d'environ 5 semaines. Étape 4: La date actuelle (15 octobre) correspond parfaitement au cycle de ~35 jours après la commande du 11 septembre. Compte tenu du faible historique et de l'absence de tendance haussière, une approche conservatrice de 2 unités est recommandée pour couvrir la demande de fond sans risque de surstockage sur un produit à rotation lente d'origine bio/premium (DLUO potentiellement courte). L'indice de confiance est faible en raison de la pauvreté de l'historique (2 points). Les 2 unités permettent de maintenir la présence produit en rayon tout en limitant l'immobilisation financière Trésorerie/Stockage B2B sur une référence peu mobile sur les 60 derniers jours [REB08]. L'absence d'outliers aide à stabiliser la prévision sur la médiane constatée de 2.5 unités, arrondie à l'entier inférieur pour prudence Supply Chain B2B standard sur les produits snacking premium à faible vélocité constatée lors du dernier intervalle de contrôle commande (35j). Le choix est aligné avec la demande du 11 septembre (2u). Les mercredis/jeudis semblent être les fenêtres habituelles de réapprovisionnement pour ce point de vente B2B spécifique sur cette gamme Chips bio piment citron 125g. Total recommandé: 2 unités pour conserver le stock de sécurité sans risque majeur d'obsolescence ou de rupture sur un produit dont le taux de rotation est mensuel au mieux dans le réseau de distribution actuel identifié par les flux de données fournis par l'ERP.

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 35 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée (3u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier (volumétrie très faible de 2-3 unités). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré neutre. Étape 3: On observe une légère baisse de volume entre août (3u) et septembre (2u), avec un intervalle de commande d'environ 5 semaines. Étape 4: La commande actuelle intervient 34 jours après la précédente, respectant le cycle observé. Compte tenu du très faible historique et de la tendance baissière, une approche conservatrice de 2 unités est préconisée pour couvrir la demande sans risque de sur-stockage sur un produit bio de niche à faible rotation (REB01). Localisation du besoin le mercredi cohérente avec l'historique (août). Même si la moyenne est de 2.5, la prudence B2B impose d'arrondir à l'unité inférieure vue la faible fréquence de rotation actuelle (2u). Patron de réapprovisionnement de type 'Flux poussé' minimaliste nécessaire ici jusqu'à preuve de croissance du volume par commande ou accélération du rythme d'achat mensuel (actuellement 1 commande par mois environ). Vu la date (15 octobre), on s'inscrit dans la continuité du cycle de consommation de la rentrée sans facteur saisonnier festif immédiat sur ce type de snacking salé bio premium avant novembre/décembre (potentiel apéritif de fin d'année). Recommandation fixée à 2 unités pour maintenir un service client minimal tout en préservant la trésorerie sur une référence lente d'un point de vue logistique pour l'instant d'après les data fournies. Niveau de confiance faible dû au manque de profondeur historique (seulement 2 points de données).

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:45:25: 2u
- 2025-08-06 06:58:38: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (1)

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
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 3 | Stock prédit: -1.8u (-25j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:14:41.986Z*
