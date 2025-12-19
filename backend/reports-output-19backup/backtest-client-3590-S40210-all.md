# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S40210
- **Date commande** : 2025-11-07 12:48:24
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 10
- **Tokens**: 7,624 input + 4,517 output = 12,141 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 83.3% | Score équilibré global |

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
| **MAE** | 80.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 44.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0078] FILOU CHASSEUR 5 L | 240 | 480 | 240.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 264 | 132.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 12 | 40 | 28.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 240u vs Médiane: 160u (Réel: 480u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: high)
- 📊 **Baseline N-1**: 213.33u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 480u
- 📉 **Erreur LLM**: 240u (50.0%)
- 📉 **Erreur Médiane**: 320u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, principalement les lundis
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 240u sur les dernières semaines
- **Outliers détectés**: 320u

**🧠 Raisonnement LLM:**
Le cycle observé est hebdomadaire avec une forte récurrence chaque lundi. La dernière commande datant du lundi 03 novembre, la prochaine est prévue pour le lundi 10 novembre, soit dans un délai bien inférieur à 30 jours. La quantité recommandée suit la tendance stable des deux dernières commandes à 240 unités.

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (principalement le lundi)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 4-5u
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'analyse des fréquences montre un rythme hebdomadaire constant le lundi. La dernière commande date d'il y a 3 jours (lundi 03/11). La prochaine fenêtre de commande habituelle se situe au lundi 10/11, soit dans l'intervalle des 30 jours. Après l'exclusion du pic de 15u (outlier), la moyenne stable se situe entre 4 et 5 unités.

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 132u (Réel: 264u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: high)
- 📊 **Baseline N-1**: 114.4u
- 📊 **Médiane**: 132u
- ✅ **Réel commandé**: 264u
- 📉 **Erreur LLM**: 132u (50.0%)
- 📉 **Erreur Médiane**: 132u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire à bimensuel (cycle de 7 à 14 jours, principalement le lundi)
- **Saisonnalité**: none
- **Tendance**: Stable, alternance entre 88u et 132u
- **Outliers détectés**: 208u, 18u, 52u

**🧠 Raisonnement LLM:**
Le rythme de commande est très régulier avec un intervalle moyen constaté de 7 à 14 jours. La dernière commande datant d'il y a 10 jours (27 octobre), la prochaine est mathématiquement attendue dans les prochains jours (fenêtre des 30 jours largement couverte). La quantité de 132u est retenue car elle correspond au palier haut habituel et à la croissance légère par rapport aux deux dernières commandes à 88u.

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 12u vs Médiane: 20u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: medium)
- 📊 **Baseline N-1**: 10.5u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 28u (70.0%)
- 📉 **Erreur Médiane**: 20u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle moyen d'environ 28 jours avec commandes centrées sur le lundi ou jeudi.
- **Saisonnalité**: weak
- **Tendance**: Légère hausse stable à 12u
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
La dernière commande datant du 6 octobre (12u), le cycle habituel d'environ 30 jours suggère une nouvelle commande autour du 6 novembre. La quantité de 20u observée en septembre est traitée comme un outlier au regard de l'historique stable entre 8u et 12u.

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 25 à 31 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre des commandes espacées de 25 à 31 jours. La dernière commande ayant eu lieu le 06/10/2025, nous sommes à 31 jours d'intervalle aujourd'hui (06/11/2025). Une commande est donc très probable dans les jours à venir. La quantité de 1 unité est la plus fréquente et la plus récente.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 240u
- 2025-10-27 06:58:44: 240u
- 2025-10-23 09:13:38: 80u
- 2025-10-20 08:16:09: 160u
- 2025-10-20 08:08:48: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 160u
- 2024-10-21 06:08:37: 240u
- 2024-10-10 08:27:59: 160u
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u

**✅ Quantité LLM**: 240u (confidence: high)
**📊 Quantité Réelle**: 480u

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 5u
- 2025-10-27 06:58:44: 2u
- 2025-10-23 09:13:38: 15u
- 2025-10-20 08:16:09: 4u
- 2025-10-20 08:08:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 10u
- 2024-10-21 06:08:37: 4u
- 2024-09-16 11:50:49: 6u
- 2024-08-12 08:25:02: 15u
- 2024-06-24 09:19:20: 4u
- 2024-06-17 07:40:59: 10u
- 2024-06-17 07:22:49: 8u
- 2024-06-06 12:27:23: 4u
- 2024-05-31 06:50:36: 4u
- 2024-05-27 07:09:19: 2u
- 2024-04-04 08:57:19: 10u
- 2024-03-07 02:48:05: 2u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 06:58:44: 132u
- 2025-10-20 08:16:09: 88u
- 2025-10-06 09:21:48: 88u
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 156u
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

**✅ Quantité LLM**: 132u (confidence: high)
**📊 Quantité Réelle**: 264u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:21:48: 12u
- 2025-09-11 08:10:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 10u
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

**✅ Quantité LLM**: 12u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:21:48: 1u
- 2025-09-11 08:10:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-17 07:40:59: 2u
- 2024-06-06 12:27:23: 1u
- 2024-02-22 07:08:34: 2u
- 2024-01-08 09:20:28: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

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
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |


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
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T21:32:42.063Z*
