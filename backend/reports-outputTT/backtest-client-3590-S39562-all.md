# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 11,405 input + 13,881 output = 25,286 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 6 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 60.0% | Score équilibré global |

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
| **MAE** | 17.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 38.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (3)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 88 | 44.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 20 | 12 | 8.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: high)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel dominant (tous les 14 jours environ le lundi)
- **Saisonnalité**: strong
- **Tendance**: Stable avec un socle à 160u, pic récent à 240u
- **Outliers détectés**: 320u, 480u, 640u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les volumes très importants observés en 2024 (cummuls >400u) sont traités comme des outliers promotionnels. Le fond de cuve se situe entre 160u et 240u. ÉTAPE 2 (Saisonnalité) : Produit 'Filou Chasseur' montrant une forte activité en automne (pics en août/septembre N-1). Nous sommes au début de la haute saison. ÉTAPE 3 (Tendance) : La fréquence s'est stabilisée sur un rythme de 14 jours en septembre 2025. La dernière commande (29/09) était de 240u, marquant un pic saisonnier. ÉTAPE 4 (Recommandation) : Avec une dernière commande le 29/09 et un cycle de 14 jours, la prochaine commande est prévue autour du lundi 13/10, soit dans la fenêtre des 30 jours. On recommande la quantité de base de 160u, car les pics à 240u sont rarement consécutifs dans l'historique récent.

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 104u (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: high)
- 📊 **Baseline N-1**: 132u
- 📊 **Médiane**: 104u
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 44u (50.0%)
- 📉 **Erreur Médiane**: 16u (18.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel avec un intervalle moyen de 17 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive stabilisée à 132u
- **Outliers détectés**: 208u, 18u

**🧠 Raisonnement LLM:**
L'analyse de l'historique récent montre une stabilisation de la demande à 132 unités, contre 104 unités l'année précédente. Les intervalles entre les trois dernières commandes sont de 7, 16 et 18 jours, suggérant une fréquence d'environ deux fois par mois. La dernière commande ayant eu lieu le lundi 29 septembre 2025, la prochaine est statistiquement prévue entre le 14 et le 17 octobre 2025, ce qui se situe dans la fenêtre des 30 prochains jours. Conformément à la règle de ne pas cumuler les commandes, nous recommandons le volume standard d'une seule livraison (132u).

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 20u vs Médiane: 30u (Réel: 12u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 8u (66.7%)
- 📉 **Erreur Médiane**: 18u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long d'environ 44 jours observé en 2025 contre un cycle court de 10-15 jours en 2024
- **Saisonnalité**: weak
- **Tendance**: Hausse significative du volume par commande (+150%) avec allongement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une mutation structurelle du comportement d'achat entre 2024 et 2025 : le client est passé de petites commandes fréquentes (médiane 8u) à des commandes plus volumineuses (20u) mais plus espacées. La dernière commande date du 11 septembre 2025. Sur la base du dernier intervalle observé de 44 jours, la prochaine commande est estimée autour du 25 octobre 2025, ce qui se situe à l'intérieur de la fenêtre des 30 prochains jours. Bien que le volume de 20u soit élevé par rapport à l'historique N-1, la répétition stricte de cette quantité sur les deux dernières livraisons en fait la nouvelle référence fiable pour la prochaine commande.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 240u
- 2025-09-15 12:12:38: 160u
- 2025-09-11 08:10:53: 160u
- 2025-08-19 09:04:50: 160u
- 2025-08-12 09:41:05: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u
- 2024-07-24 07:35:24: 320u
- 2024-07-24 06:06:23: 320u
- 2024-06-24 09:19:20: 320u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 160u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u
- 2025-08-26 15:29:17: 104u
- 2025-08-19 09:04:50: 104u
- 2025-07-29 06:11:06: 52u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u
- 2024-05-06 09:33:16: 104u

**✅ Quantité LLM**: 132u (confidence: high)
**📊 Quantité Réelle**: 88u

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 08:10:53: 20u
- 2025-07-29 06:11:06: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u
- 2024-05-06 09:33:16: 6u

**✅ Quantité LLM**: 20u (confidence: medium)
**📊 Quantité Réelle**: 12u

</details>




---

## False Positives (3)

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
| [PF1140] FILOU SAUCE CHASSEUR 850G | 6 | Stock prédit: 2.3u (6j restants) → prédit 6u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (30j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 7 | Stock prédit: 1.7u (13j restants) → prédit 7u mais non commandé |


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
| [PF0084] FILOU CARBONNADES 800 GR | 1 | Stock suffisant: 0.7u (47j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T18:51:48.029Z*
