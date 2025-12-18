# Rapport Backtest - Client 3B TRADING & CONSULTING GmbH

## Contexte

- **Client** : 3B TRADING & CONSULTING GmbH (ID: 3857)
- **Commande réelle** : S39969
- **Date commande** : 2025-10-28 15:08:20
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 1,952 input + 626 output = 2,578 total


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
| **MAE** | 14.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 | 65 | 21.0 | 32.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 44 | 36 | 8.0 | 22.2% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - LLM: 44u vs Médiane: 44u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 44u (confidence: medium)
- 📊 **Baseline N-1**: 41.5u
- 📊 **Médiane**: 44u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 21u (32.3%)
- 📉 **Erreur Médiane**: 21u (32.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 28 et 60 jours, tendance lundi/mardi
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +12% vs moyenne historique
- **Outliers détectés**: 52u, 26u

**🧠 Raisonnement LLM:**
L'historique montre une consommation stable autour de 39 unités, mais les données les plus récentes indiquent une accélération (44u le 22/09). L'intervalle depuis la dernière commande est de 35 jours, ce qui correspond au cycle moyen observé. La prédiction de 44u s'appuie sur la conservation du volume de la période précédente (P-1) pour capturer la tendance de croissance actuelle tout en restant dans le canal historique haut (hors pic exceptionnel de 52u). Le lundi est un jour de commande identifié comme standard pour ce client.

</details>


<details>
<summary><strong>2. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - LLM: 44u vs Médiane: 26u (Réel: 36u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 44u (confidence: medium)
- 📊 **Baseline N-1**: 28.5u
- 📊 **Médiane**: 26u
- ✅ **Réel commandé**: 36u
- 📉 **Erreur LLM**: 8u (22.2%)
- 📉 **Erreur Médiane**: 10u (27.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec accélération mensuelle (30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative du volume par commande (+200% sur la dernière)
- **Outliers détectés**: 26u, 44u

**🧠 Raisonnement LLM:**
L'analyse montre une accélération marquée du volume de commande. Historiquement basé sur des multiples de 13 (colisage probable), le client a rompu ce pattern le 22/09 avec une commande de 44 unités (soit environ 3.4x le volume de base). Entre le 22/09 et le 27/10, il s'est écoulé 35 jours, ce qui correspond au cycle de réapprovisionnement observé entre août et septembre. Étant donné que le volume de 44 a été absorbé sur un cycle standard, il devient la nouvelle référence de consommation pour ce client en croissance ou ayant changé son mode de stockage. Je prédis le maintien de ce nouveau palier pour éviter une rupture.

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

**✅ Quantité LLM**: 44u (confidence: medium)
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

**✅ Quantité LLM**: 44u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-18T11:38:30.048Z*
