# Rapport Backtest - Client BIODIS

## Contexte

- **Client** : BIODIS (ID: 71334)
- **Commande réelle** : S39870
- **Date commande** : 2025-10-22 12:36:11
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 8,627 input + 3,282 output = 11,909 total


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
| **MAE** | 28.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 42.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 29.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 105 | 93 | 12.0 | 12.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 217 | 93 | 124.0 | 133.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 31 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 105u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 105u (confidence: medium)
- 📊 **Baseline N-1**: 77.5u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 12u (12.9%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours) en début de mois
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (62u vers 93u, hors outlier)
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'historique montre un cycle mensuel régulier avec une commande par mois. En isolant la valeur de 155u d'août (outlier potentiel ou stock initial), on observe une croissance de +50% entre septembre (62u) et octobre (93u). La prédiction pour le 21 octobre arrive plus tôt que le cycle habituel (début de mois), ce qui suggère soit un réapprovisionnement anticipé pour faire face à une demande croissante, soit une légère accélération du rythme. La baseline est calculée sur la moyenne des deux derniers mois hors pic (77.5u), ajustée par la tendance haussière récente pour atteindre 105u, reflétant la dynamique positive sans toutefois reproduire le pic atypique d'août.

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 217u vs Médiane: 186u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 217u (confidence: medium)
- 📊 **Baseline N-1**: 206.67u
- 📊 **Médiane**: 186u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 124u (133.3%)
- 📉 **Erreur Médiane**: 93u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~27-28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère oscillation (Moyenne 206u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité mensuelle forte avec un intervalle de 27 à 28 jours entre les commandes. La demande oscille entre 186u et 217u sans tendance baissière ou haussière marquée (moyenne à 206.6). Étant donné que la commande du 21/10 intervient seulement 20 jours après la précédente (01/10), on observe une accélération du rythme de réapprovisionnement, suggérant une rotation plus rapide des stocks sur ce mois. Je retiens la borne haute de 217u observée deux fois sur les trois derniers mois pour couvrir cette accélération de cadence.

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
- **Pattern temporel**: Cycle mensuel (~27-28 jours), début de mois
- **Saisonnalité**: none
- **Tendance**: Stable à 93u
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ une fois par mois. Bien que la commande du 07 août ait été plus élevée (155u), les deux dernières commandes de septembre et octobre sont parfaitement identiques à 93u. Le client semble s'être stabilisé sur ce volume de 15 palettes/fond de rayon. Malgré une demande le 21 octobre (soit 20 jours après la précédente au lieu des 28-30 jours habituels), il n'y a aucun indicateur de croissance ou de saisonnalité justifiant un changement de volume. Nous maintenons la quantité stable la plus récente.

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - LLM: 31u vs Médiane: 47u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: low)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 47u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 15u (24.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ tous les 50-60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse significative -50%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint (2 points de données). On observe un espacement de 55 jours entre la commande d'août (62u) et celle d'octobre (31u). La commande du 2025-10-01 étant la plus récente et marquant une baisse de 50% par rapport à l'été, elle sert d'ancre pour la prédiction. La date cible (21 octobre) étant proche (20 jours après la dernière commande), il est probable que le besoin soit stable à 31u sans volume de rattrapage imminent, la consommation semblant s'étirer sur des cycles longs.

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
- **Pattern temporel**: Cycle mensuel (~27-28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 31u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilité parfaite avec trois commandes successives de 31 unités à environ 28 jours d'intervalle. Bien que la date de prédiction soit légèrement en avance sur le cycle habituel de début de mois (21/10 vs début du mois suivant), le volume par commande est strictement constant. En l'absence d'outliers ou de saisonnalité N-1, la répétabilité du volume (31u) constitue l'indicateur le plus fiable pour minimiser le MAPE.

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
- **Pattern temporel**: Cycle mensuel (~28-30 jours) le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 62u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite sur les deux derniers points de données (62 unités). Le rythme identifié est mensuel (intervalle de 4 semaines entre le 07/08 et le 04/09). La commande intervient ici avec un léger décalage par rapport au jeudi habituel (mardi au lieu de jeudi, avec un intervalle de ~47 jours depuis la dernière commande, suggérant qu'une commande a pu être sautée ou décalée). En l'absence de données N-1 pour confirmer une saisonnalité, la stabilité du volume unitaire (62u) constitue la base la plus fiable pour la prédiction.

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

**✅ Quantité LLM**: 105u (confidence: medium)
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

**✅ Quantité LLM**: 217u (confidence: medium)
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

**✅ Quantité LLM**: 31u (confidence: low)
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

*Rapport généré automatiquement le 2025-12-18T11:36:18.619Z*
