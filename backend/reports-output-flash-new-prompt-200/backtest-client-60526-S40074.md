# Rapport Backtest - Client ROB - THE GOURMETS' MARKET

## Contexte

- **Client** : ROB - THE GOURMETS' MARKET (ID: 60526)
- **Commande réelle** : S40074
- **Date commande** : 2025-11-03 12:12:50
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 11,355 input + 3,622 output = 14,977 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 21 produits prédits, 15 corrects |
| **Rappel** | 93.8% | 16 produits réels, 15 détectés |
| **F1-Score** | 81.1% | Score équilibré global |

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
| **wMAPE** | 23.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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

## True Positives (15)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH01] RISH kombucha BIO - original 330ml | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 6 | 15 | 9.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LEA06] LEAMO maté 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 10u vs Médiane: 8u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Achat sporadique ou démarrage de référencement
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique insuffisant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est limitée par un historique extrêmement pauvre (une seule commande enregistrée il y a 6 semaines). 1. DE-EVENTING : La commande de 10u est considérée comme la base par défaut faute de comparaison. 2. SAISONNALITÉ : Aucune donnée N-1 disponible, impact non mesurable. 3. TENDANCE : Impossible d'établir une pente avec un seul point de donnée ; on observe toutefois un délai important (41 jours) depuis la dernière commande. 4. RECOMMANDATION : Par approche conservatrice, nous maintenons le dernier volume connu (10 unités) pour répondre à un besoin ponctuel sans risquer d'obsolescence sur un produit à faible rotation apparente.

</details>


<details>
<summary><strong>2. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 41 jours
- **Saisonnalité**: none
- **Tendance**: Instable - donnée unique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur abberante identifiée car il n'existe qu'un seul point de donnée de 10 unités. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité sur ce SKU spécifique. Étape 3: La fréquence est trop faible pour établir une tendance; la dernière commande remonte à plus de 5 semaines (22 sept). Étape 4: En l'absence de récurrence et face à une unique donnée historique, la recommandation reste fixée sur le seul volume connu (10 unités) pour couvrir un besoin ponctuel sans risquer d'invendus, le niveau de confiance est faible en raison de la pauvreté de l'historique.

</details>


<details>
<summary><strong>3. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 6u vs Médiane: 12u (Réel: 15u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 12u
- ✅ **Réel commandé**: 15u
- 📉 **Erreur LLM**: 9u (60.0%)
- 📉 **Erreur Médiane**: 3u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (données insuffisantes pour établir un cycle)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique réduit)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a environ 40 jours (6 unités). Sans données N-1 ni historique de fréquence, la recommandation se base sur la reproduction du volume unitaire observé (6u) pour un produit de type boisson kombucha dont la rotation semble lente. La confiance est faible car le pattern de réapprovisionnement n'est pas encore établi. Nous recommandons de commander la même quantité que la dernière fois pour maintenir un stock de sécurité minimal.

</details>


<details>
<summary><strong>4. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 6u vs Médiane: 8u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (cycle non établi)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La seule donnée disponible est de 6 unités, ce qui constitue notre base par défaut. ÉTAPE 2 (Saisonnalité): Aucune donnée N-1 n'est disponible pour comparer l'impact saisonnier de novembre. ÉTAPE 3 (Tendance): Historique extrêmement limité (une seule commande il y a 6 semaines). On ne peut confirmer ni une accélération ni une baisse. ÉTAPE 4 (Recommandation): En l'absence de pattern récurrent, nous recommandons de commander le volume historique minimal observé (6u) pour maintenir une présence produit sans risque de sur-stockage massif sur une référence à faible rotation apparente. Niveau de confiance faible dû au manque de profondeur historique.

</details>


<details>
<summary><strong>5. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel / Basse fréquence
- **Saisonnalité**: none
- **Tendance**: Stable (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante identifiée car nous n'avons qu'un seul point de donnée de 10 unités. Étape 2: Absence d'historique N-1 pour confirmer une saisonnalité, bien que le Kombucha soit sensible à la météo, aucune donnée ne permet d'ajuster ici. Étape 3: Le volume précédent date de fin septembre; le délai de plus de 30 jours suggère un produit à rotation lente ou une commande de réapprovisionnement ponctuelle. Étape 4: En l'absence de tendances d'accélération, la recommandation se base sur le maintien du dernier volume observé (10u) pour couvrir le besoin sans risque de surstockage sur un produit possiblement de niche. La confiance est faible due au manque d'historique récurrent.

</details>


<details>
<summary><strong>6. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée, aucune récurrence établie
- **Saisonnalité**: none
- **Tendance**: Stable à 1u sur horizon long
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante car l'historique est quasi inexistant (1 commande). Étape 2: Impossible de confirmer une saisonnalité sans données N-1, le produit semble être une référence à rotation très faible. Étape 3: La seule commande enregistrée date de plus de 40 jours (septembre), indiquant un besoin ponctuel ou une demande de fond extrêmement faible. Étape 4: En l'absence de pattern de consommation régulier, nous recommandons le réapprovisionnement de l'unité minimale observée (1u). La confiance est faible en raison de la pauvreté des données historiques.

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel / Très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur l'unique point de donnée, la demande de fond est fixée à 2u. Étape 2: Absence d'historique N-1 pour valider une saisonnalité, cependant le thé glacé bio est généralement plus consommé en période estivale (commande en août). Étape 3: Un seul point de donnée disponible le 11/08, aucun cycle hebdomadaire ou mensuel n'est établi. Étape 4: En l'absence de données récurrentes et pour éviter un sur-stockage sur un produit à faible rotation, la recommandation minimale de 2 unités est maintenue pour assurer un stock de sécurité de base.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [RISH01] RISH kombucha BIO - original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>2. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>3. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 15u

</details>


<details>
<summary><strong>4. [RISH05] RISH kombucha BIO - rose 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>5. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 07:01:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 10:26:33: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (6)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 5 | Stock prédit: -1.4u (-12j restants) → prédit 5u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | Stock prédit: 0.9u (18j restants) → prédit 3u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Stock prédit: -1.3u (-15j restants) → prédit 2u mais non commandé |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 3 | Stock prédit: 1.6u (25j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 4 | Stock prédit: -1.2u (-19j restants) → prédit 4u mais non commandé |


---

## False Negatives (1)

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
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock suffisant: 1.3u (67j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:13:14.925Z*
