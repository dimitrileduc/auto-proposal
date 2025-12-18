# Rapport Backtest - Client MAISON DESPRIET SA, Nicole

## Contexte

- **Client** : MAISON DESPRIET SA, Nicole (ID: 57477)
- **Commande réelle** : S40196
- **Date commande** : 2025-11-07 12:46:58
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,810 input + 1,321 output = 5,131 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 5 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
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
| **MAE** | 64.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -60.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 480 | 320.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 44 | 44 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 4 | 6 | 2.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 480u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: high)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 480u
- 📉 **Erreur LLM**: 320u (66.7%)
- 📉 **Erreur Médiane**: 320u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme hebdomadaire le mercredi lors des deux dernières semaines, historiquement erratique
- **Saisonnalité**: weak
- **Tendance**: Stable à 160u
- **Outliers détectés**: 480u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: La commande de 480u en N-1 est identifiée comme un outlier (stockage massif ou promotion), le volume de fond actuel étant strictement stable à 160u. 2. SAISONNALITÉ: Faible influence apparente malgré le secteur agroalimentaire, le produit maintient un volume constant sur les 3 derniers mois. 3. TENDANCE: Parfaite stabilité du volume unitaire (160u). On observe une accélération de la fréquence qui se stabilise sur un rythme hebdomadaire (chaque mercredi). 4. RECOMMANDATION: La commande actuelle intervient un jeudi, soit seulement 1 jour après la précédente du mercredi 05/11. Cependant, la régularité absolue des 5 dernières livraisons à 160u indique un besoin par lot fixe. On maintient 160u pour couvrir le cycle hebdomadaire établi.

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 44u vs Médiane: 52u (Réel: 44u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 44u (confidence: medium)
- 📊 **Baseline N-1**: 50.33u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 8u (18.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire (le vendredi) avec interruptions
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -15%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (Dé-eventing): Aucune valeur aberrante détectée, les quantités oscillent entre 44 et 55u. Étape 2 (Saisonnalité): Pas de données N-1 disponibles, impact considéré neutre en l'état. Étape 3 (Tendance): On observe un cycle hebdomadaire (vendredi), mais avec un trou de 6 semaines entre fin août et début octobre, suivi d'une baisse de volume (de 55u à 44u). La commande actuelle est passée un jeudi au lieu du vendredi habituel. Étape 4 (Recommandation): En adoptant une approche conservatrice face à la baisse de la dernière commande et au manque de données historiques profondes, nous recommandons de s'aligner sur le dernier volume observé (44u) pour éviter le sur-stockage.

</details>


<details>
<summary><strong>3. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 4 à 6 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable et constante de 2 unités par commande sur plus d'un an (N-1 inclus). Aucun outlier n'a été détecté, les volumes sont identiques à chaque itération. La saisonnalité n'apparaît pas comme un facteur d'influence ici car le volume reste statique malgré des périodes différentes (août, septembre, octobre). Le rythme est d'environ une commande par mois. Étant donné que la dernière commande date du 10 octobre (soit environ 4 semaines) et que le stock de sécurité B2B doit être maintenu, la recommandation reste sur le volume historique standard de 2 unités pour couvrir le besoin du mois de novembre.

</details>


<details>
<summary><strong>4. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une tendance dominante le vendredi (75% des commandes)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes oscillent entre 1u et 2u, ce qui est cohérent pour un produit de fond de rayon. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3 (Tendance): Le rythme est d'environ une commande par mois (août ayant eu deux commandes, septembre une, octobre une). La quantité de 2u est revenue comme standard sur les deux dernières commandes. ÉTAPE 4 (Recommandation): La demande de fond se situe à 1.75 unités en moyenne. Étant donné l'approche conservatrice et le format du produit (sauce tomate 815g), une commande de 2 unités permet de couvrir le besoin mensuel observé sans risque de sur-stockage majeur.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 05:01:57: 160u
- 2025-10-29 12:00:23: 160u
- 2025-10-10 09:26:10: 160u
- 2025-09-23 09:13:34: 160u
- 2025-08-22 08:54:40: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 11:45:56: 480u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 480u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-10 09:26:10: 44u
- 2025-08-29 09:33:32: 55u
- 2025-08-22 08:54:40: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 44u (confidence: medium)
**📊 Quantité Réelle**: 44u

</details>


<details>
<summary><strong>3. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-10 09:26:10: 2u
- 2025-09-23 09:13:34: 2u
- 2025-08-08 06:49:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 11:45:56: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-10 09:26:10: 2u
- 2025-09-23 09:13:34: 2u
- 2025-08-22 08:54:40: 1u
- 2025-08-08 06:49:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

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

*Rapport généré automatiquement le 2025-12-18T12:11:38.401Z*
