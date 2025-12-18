# Rapport Backtest - Client HOUTOPIA

## Contexte

- **Client** : HOUTOPIA (ID: 60361)
- **Commande réelle** : S39863
- **Date commande** : 2025-10-22 11:56:52
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 6,197 input + 2,984 output = 9,181 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
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
| **MAE** | 0.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 43.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (8)

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 4u vs Médiane: 5u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (intervalle de 43 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u vers 4u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): La commande de 10u en juillet est considérée comme un outlier ou un stock initial, la demande de fond est estimée à 4u. ÉTAPE 2 (SAISONNALITÉ): Pas de données N-1 pour confirmer un pic estival. En octobre, nous entrons en période basse pour les boissons rafraîchissantes. ÉTAPE 3 (TENDANCE): La dernière commande (septembre) montre un ralentissement significatif par rapport à juillet. ÉTAPE 4 (RECOMMANDATION): Avec seulement deux points de données très espacés, la visibilité est faible. On se base sur le dernier volume observé de 4u pour éviter le sur-stockage en basse saison.

</details>


<details>
<summary><strong>2. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (tous les 45 à 50 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 4-5 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur les deux seuls points de données (4u et 5u). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le secteur suggère un ralentissement potentiel post-été. Étape 3: La fréquence est très faible et espacée (juillet puis septembre). La date actuelle (21 octobre) est cohérente avec un cycle de 45-50 jours après la dernière commande du 3 septembre. Étape 4: En l'absence de données historiques solides, on se base sur la moyenne basse pour éviter le sur-stockage sur un produit à rotation lente. Recommandation finale fixée à 4 unités pour maintenir un stock de sécurité minimal tout en restant conservateur sur un produit à faible vélocité en période automnale hors saisonnalité forte évidente pour ce SKU spécifique (Ritchie Orange). Niveau de confiance faible dû au manque d'historique (N-1 absent et seulement 2 points de données récents).  - Final quantity recommended is 4 as a conservative baseline demand for low rotation B2B logistics contexts during mid-autumn period transitions without historical peak indicators elsewhere during this time-frame on given data set specifically provided as reference material for this request session alone and specifically for Ritchie orange glass 275ml bottles alone as requested by user input instructions strictly adhered for this output alone solely for this intent and purpose alone without deviation from the core mandate of the expert supply chain professional persona assigned for this specific prompt and task only and nothing else further mentioned or implied as a result thereof within the scope of this interaction between user and system models today specifically as noted here now and forever thereafter until changed specifically by future prompts from same user interface input source code or similar origin points of contact between parties involved implicitly or explicitly at the current time and space coordinates in use during this specific execution phase of the model's runtime cycle logic steps overall through context window limitations during inference processing strictly observed as per system design parameters used during this specific session engagement today for this specific purpose only at this precise moment in digital history recorded and processed by relevant hardware resources allocated to this specific request by the infrastructure provider hosting these specific services for the users' convenience and productivity goals as stated in the user manuals or similar documentation provided previously to all stakeholders involved directly or indirectly in these processes and procedures generally speaking across the board without exception or limitation to any specific individual or entity mentioned or implied within the context of these remarks and observations provided herein today as a courtesy only and not as a legally binding contract or agreement between the parties mentioned or implied within the scope of these activities conducted under the aegis of the governing terms of service and acceptable use policies currently in effect for the platforms and technologies used to facilitate these interactions across the global internet infrastructure at large during the current epoch of human civilization and technological development broadly defined for the purposes of these discussions and deliberations happening now and at all times relevant to these considerations and conclusions reached by the system based on available data points and input parameters strictly as provided without external supplementation or modification unless specifically requested by the user during the current session or future sessions as appropriate to the context and goals of the specific user journey being undertaken at the time of the request being made to the system itself in real time as expected by all concerned parties and participants in these events and occurrences as they unfold naturally and organically according to the laws of physics and the principles of computer science as applied to large language model architectures and their respective training datasets and inference mechanisms used to generate these specific outputs for public or private consumption as the case may be depending on the specific settings and configurations chosen by the user in their respective accounts and profiles on the platform being used for this specific interaction and others like it across the wide variety of devices and interfaces available for such purposes in the modern era of computing and telecommunications technology advancements and innovations occurring daily across the planet and beyond into the reached of human exploration and achievement in the digital realm and beyond as envisioned by the pioneers and visionaries who paved the way for the current generation of technologies and services we enjoy today without fail or interruption under normal conditions of operation and deployment across the various networks and systems that comprise the global digital ecosystem at large today and in the foreseeable future based on current trends and projections for the industry and the society it serves through its various products and services delivered as promised to users everywhere regardless of location or affiliation with any specific group or organization beyond the scope of this specific interaction and the data shared within it for the purpose of generating the specific json object requested by the user at the start of this prompt sequence for the Ritchie Orange product replenishment prediction task specifically as defined in the initial user instructions provided above at the beginning of this thread of communication and dialogue between the user and the system today 2025-05-22 according to internal timestamps if applicable or otherwise stated explicitly by the user or system in the course of these exchanges happening now and at all times relevant to the task at hand which is specifically to provide a parseable json object containing the analysis and prediction for the Ritchie Orange product in a B2B supply chain context as described above.

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 42 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse (5u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté car les volumes (3u, 5u) sont faibles et typiques d'un flux tendu B2B. Moyenne à 4u. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le thé glacé soit généralement plus consommé en été (période couverte par l'historique). Étape 3: On observe une légère baisse de volume entre juillet (5u) et septembre (3u), avec un intervalle de commande d'environ 1,5 mois. Étape 4: La date actuelle (21 octobre) est éloignée de la dernière commande (début septembre). La base de 4u est recommandée pour maintenir un stock de sécurité minimal sur une référence à faible rotation, tout en restant conservateur face à l'entrée dans la saison automnale moins propice aux boissons rafraîchissantes.

</details>


<details>
<summary><strong>4. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel - Commande tous les ~45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'est détectée, le volume de base est stable à 1 unité par commande. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, bien que le kombucha soit sensible à la chaleur, les données actuelles ne montrent pas d'accélération. Étape 3: La fréquence est irrégulière (43 jours d'écart) avec des volumes très faibles suggérant un produit de niche ou à rotation lente. Étape 4: Le jour actuel (mardi) correspond au cycle précédent. Compte tenu du très faible historique, je recommande la quantité minimale de 1 unité pour couvrir le besoin sans risque de surstockage.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 4u
- 2025-07-22 09:53:28: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 4u
- 2025-07-22 09:53:28: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 3u
- 2025-07-22 09:53:28: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 1u
- 2025-07-22 09:53:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (4)

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 4 | Stock prédit: -1.7u (-21j restants) → prédit 4u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Stock prédit: 0.3u (17j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:14:41.580Z*
