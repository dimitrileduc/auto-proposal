# Rapport Backtest - Client 3B TRADING & CONSULTING GmbH

## Contexte

- **Client** : 3B TRADING & CONSULTING GmbH (ID: 3857)
- **Commande réelle** : S39969
- **Date commande** : 2025-10-28 15:08:20
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 2,180 input + 653 output = 2,833 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 21.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 44.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -41.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (2)

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
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 42 | 65 | 23.0 | 35.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 17 | 36 | 19.0 | 52.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - LLM: 42u vs Médiane: 44u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 42u (confidence: medium)
- 📊 **Baseline N-1**: 38.5u
- 📊 **Médiane**: 44u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 23u (35.4%)
- 📉 **Erreur Médiane**: 21u (32.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 30 et 60 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse modérée +10%
- **Outliers détectés**: 52u

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une demande de fond stable autour de 39 unités. ÉTAPE 1: Un pic à 52u en juin 2024 a été identifié comme outlier et exclu du calcul de base. ÉTAPE 2: La saisonnalité est faible, bien que les volumes d'automne (septembre/octobre) tendent à être légèrement plus élevés que le creux de début d'année. ÉTAPE 3: On observe une tendance à la hausse sur la dernière commande (44u vs moyenne de 39u), suggérant un besoin accru. ÉTAPE 4: Avec un intervalle de commande d'environ 35 jours et une légère accélération de la consommation, une quantité de 42 unités est recommandée pour couvrir la période à venir sans risque de surstockage excessif, tout en s'alignant sur la dynamique récente.

</details>


<details>
<summary><strong>2. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - LLM: 17u vs Médiane: 26u (Réel: 36u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 17u (confidence: low)
- 📊 **Baseline N-1**: 13u
- 📊 **Médiane**: 26u
- ✅ **Réel commandé**: 36u
- 📉 **Erreur LLM**: 19u (52.8%)
- 📉 **Erreur Médiane**: 10u (27.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération mensuelle
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +300%
- **Outliers détectés**: 44u, 26u, 20u

**🧠 Raisonnement LLM:**
Étape 1: La demande de base est établie à 13u, les volumes de 20u, 26u et 44u étant identifiés comme des outliers (promotions ou stockages massifs). Étape 2: Pas de saisonnalité forte pour la sauce Samourai en octobre par rapport à N-1. Étape 3: On observe une tendance récente à la hausse avec une commande massive de 44u en septembre, suggérant un nouveau besoin client ou un épuisement total des stocks. Étape 4: En restant conservateur face à l'incertitude des volumes (44u étant trop risqué à reproduire), une quantité de 17u (Base + 30%) est recommandée pour accompagner la croissance sans risque de surstockage majeur.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 10:43:24: 44u
- 2025-08-19 08:54:50: 39u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 11:16:06: 39u
- 2024-08-20 14:01:43: 39u
- 2024-06-18 08:04:39: 52u
- 2024-05-13 12:26:04: 40u
- 2024-05-06 09:47:07: 39u
- 2024-04-02 06:09:19: 26u
- 2024-01-31 12:14:02: 39u
- 2023-11-30 08:24:02: 32u

**✅ Quantité LLM**: 42u (confidence: medium)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>2. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 10:43:24: 44u
- 2025-08-19 08:54:50: 13u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 11:16:06: 13u
- 2024-08-20 14:01:43: 13u
- 2024-05-13 12:26:04: 12u
- 2024-05-06 09:47:07: 13u
- 2024-04-02 06:09:19: 26u
- 2024-01-31 12:14:02: 13u
- 2023-11-30 08:24:02: 20u

**✅ Quantité LLM**: 17u (confidence: low)
**📊 Quantité Réelle**: 36u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T12:13:32.493Z*
