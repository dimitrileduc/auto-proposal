# Rapport Backtest - Client BIODIS

## Contexte

- **Client** : BIODIS (ID: 71334)
- **Commande réelle** : S39870
- **Date commande** : 2025-10-22 12:36:11
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 10,010 input + 3,926 output = 13,936 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.2% | 17 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 58.3% | Score équilibré global |

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
| **MAE** | 26.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 40.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (7)

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
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 85 | 93 | 8.0 | 8.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 202 | 93 | 109.0 | 117.2% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 25 | 62 | 37.0 | 59.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 85u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 85u (confidence: low)
- 📊 **Baseline N-1**: 77.5u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 8u (8.6%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel intermittent (environ tous les 28-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive hors outlier (62u -> 93u)
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: La commande de 155u en août est considérée comme un outlier (stockage été ou promotion), la base saine se situe entre 62u et 93u. 2. SAISONNALITÉ: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. 3. TENDANCE: On observe une croissance de +50% entre septembre (62u) et octobre (93u). 4. RECOMMANDATION: La commande intervient plus tôt que prévu dans le cycle mensuel (20 jours après la dernière). En lissant la tendance haussière récente tout en restant conservateur face à l'absence d'historique long, une quantité de 85u est préconisée pour couvrir les besoins sans surstockage massif avant la fin du mois de novembre. La confiance est faible en raison du très petit échantillon de données (3 points). Chaque unité représentant 200g, le stock reste gérable en B2B frais/sec bio carotte (rotation supposée moyenne). Même avec l'anticipation calendaire, le volume se stabilise entre les deux derniers points de référence réels (62 et 93). Elle permet de répondre à la demande de fond observée à 77.5u avec une marge de sécurité pour la croissance identifiée en octobre (93u). Le passage du mercredi/jeudi au mardi n'impacte pas drastiquement le volume mais suggère une gestion de stock serrée chez le client nécessitant un réapprovisionnement légèrement anticipé par rapport au cycle de 30 jours constaté précédemment. Un volume de 85u équilibre la demande de fond et la tendance récente.

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 202u vs Médiane: 186u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 202u (confidence: medium)
- 📊 **Baseline N-1**: 206.67u
- 📊 **Médiane**: 186u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 109u (117.2%)
- 📉 **Erreur Médiane**: 93u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours), début de mois
- **Saisonnalité**: none
- **Tendance**: Stable avec légère tendance haussière (+8% sur le dernier mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun outlier détecté, les volumes oscillent entre 186 et 217u de manière cohérente pour du B2B. Moyenne de fond à 207u.
ÉTAPE 2 (SAISONNALITÉ): Pas de données N-1 disponibles. Cependant, le volume reste stable entre août et octobre, suggérant une faible cyclicité saisonnière immédiate.
ÉTAPE 3 (TENDANCE): Le rythme est d'une commande par mois. La dernière commande (octobre) est revenue à son niveau haut (217u) après un léger creux en septembre. La demande actuelle arrive 10 jours plus tôt que prévu par rapport au cycle de 28-30 jours.
ÉTAPE 4 (RECOMMANDATION): Puisque nous sommes en avance sur le cycle habituel de réapprovisionnement de début de mois, une quantité légèrement inférieure à la moyenne haute est recommandée pour éviter le sur-stockage avant la fin du mois d'octobre. On vise 202u pour couvrir la fin de mois et le début novembre tout en restant conservateur.

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: medium)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours), début de mois
- **Saisonnalité**: none
- **Tendance**: Stable à 93u
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel stable. 1. DE-EVENTING: La commande de 155u en août est traitée comme un outlier (pic estival ou restockage), la demande de fond se stabilisant à 93u sur septembre et octobre. 2. SAISONNALITÉ: Pas de données N-1 pour confirmer, mais la tartinade tomate peut avoir un pic estival (expliquant l'outlier d'août) qui s'estompe en octobre. 3. TENDANCE: Parfaitement stable sur les deux derniers mois (93u). 4. RECOMMANDATION: Bien que la commande intervienne plus tôt que d'habitude (le 21 au lieu du début de mois suivant), le besoin semble aligné sur le volume de fond habituel de 93 unités pour couvrir la période à venir.

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - LLM: 25u vs Médiane: 47u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 47u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 37u (59.7%)
- 📉 **Erreur Médiane**: 15u (24.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (moyenne environ 45 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée
- **Outliers détectés**: 62u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 62u d'août est traitée comme un outlier (possible stockage d'été ou promotion). La demande de fond est estimée à 31u. Étape 2: Aucun historique N-1 pour confirmer une saisonnalité, impact neutre. Étape 3: On observe une réduction de volume de 50% entre août et octobre. La commande actuelle intervient seulement 20 jours après la précédente, suggérant un besoin plus faible ou une accélération de fréquence non confirmée. Étape 4: En l'absence de données d'historique riches et face à une tendance baissière, une approche conservatrice est adoptée. On recommande 25u (80% de la dernière commande) pour couvrir le besoin immédiat sans risquer le sur-stockage sur un produit à rotation lente ou irrégulière d'olive bio de 200g. La confiance est faible due au faible nombre de points de données (2). Sans cycle fixe par jour de semaine, le passage de commande un mardi n'influe pas sur le volume calculé par rapport au rythme mensuel supposé car le délai semble aléatoire. 

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier (tous les 27 à 28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 31u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite avec une quantité fixe de 31 unités commandée mensuellement (août, septembre, octobre). Aucun outlier n'est détecté. Bien que la commande actuelle intervienne un mardi (21/10) au lieu du premier jeudi du mois (attendu normalement début novembre), le volume de consommation par cycle est extrêmement constant. En l'absence de données N-1 pour confirmer une saisonnalité de fin d'année et compte tenu de la stabilité absolue de la tendance récente, le maintien de la quantité nominale de 31 unités est préconisé pour couvrir le prochain cycle de 30 jours.

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel identifié (tous les 28 jours le jeudi)
- **Saisonnalité**: none
- **Tendance**: Stable à 62u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur les deux derniers mois avec une commande de 62 unités tous les 28 jours (un jeudi). La commande actuelle du mardi 21 octobre intervient exactement 47 jours après la dernière commande du 4 septembre, suggérant qu'une commande a probablement été sautée ou gérée autrement début octobre. Vu la stabilité stricte du volume (62u), il est recommandé de maintenir cette quantité de fond. Le changement de jour (mardi au lieu de jeudi) n'impacte pas le volume car le besoin semble structurellement lié à une rotation de stock mensuelle fixe sans tendance haussière ou baissière détectable.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 85u (confidence: low)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 217u
- 2025-09-04 13:24:31: 186u
- 2025-08-07 12:45:07: 217u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 202u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 93u
- 2025-08-07 12:45:07: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-08-07 12:45:07: 62u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-09-04 13:24:31: 31u
- 2025-08-07 12:45:07: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: high)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 62u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>




---

## False Positives (10)

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
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | Stock prédit: 7.0u (4j restants) → prédit 40u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 31 | Stock prédit: 0.3u (0j restants) → prédit 31u mais non commandé |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 25 | Stock prédit: 10.0u (12j restants) → prédit 25u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | Stock prédit: 12.4u (4j restants) → prédit 62u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | Stock prédit: -136.4u (-10j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: -34.6u (-26j restants) → prédit 62u mais non commandé |
| [PF1690] LD BBQ BIO 300G | 25 | Stock prédit: -16.3u (-37j restants) → prédit 25u mais non commandé |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | Stock prédit: -16.3u (-37j restants) → prédit 25u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -20.1u (-38j restants) → prédit 40u mais non commandé |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 47 | Stock prédit: -7.9u (-12j restants) → prédit 47u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:13.806Z*
