# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 12,097 input + 3,407 output = 15,504 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 9.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 211.2u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire, principalement le mardi avec des commandes de complément le jeudi
- **Saisonnalité**: strong
- **Tendance**: Hausse saisonnière confirmée +25% vs N-1
- **Outliers détectés**: 480u, 384u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande dominé par le mardi. En 2024, à la même période (début octobre), le volume moyen était de 192u (96u + 288u sur deux semaines). En 2025, on observe une accélération de la demande (moyenne récente à 211u). La commande du jeudi 09/10 (288u) après celle du mardi 07/10 (192u) indique un besoin de stock important pour faire face à la saisonnalité des produits de type 'vol-au-vent' en automne. Pour ce lundi, on se base sur un multiple de couche logistique standard (96u) en visant la stabilité immédiate après le pic de la semaine précédente.

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (Mardi)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 192u
- **Outliers détectés**: 576u, 480u

**🧠 Raisonnement LLM:**
L'analyse montre une récurrence forte le mardi avec une quantité modale de 192 unités. Bien que la demande porte sur un lundi, elle s'inscrit dans le cycle hebdomadaire habituel (la dernière commande ayant eu lieu le jeudi précédent, soit 4 jours d'écart, compensant le volume plus faible de 96u du mardi 07/10). Le volume de 192u correspond à la fois à la tendance récente (septembre) et au volume historique N-1 à la même période (octobre 2024).

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire tous les mardis
- **Saisonnalité**: none
- **Tendance**: Stable à 108u par semaine
- **Outliers détectés**: 324u, 216u

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilité parfaite à 108 unités (correspondant probablement à une palette ou un multiple logistique fixe) commandées chaque mardi. Bien que la demande formulée soit pour un lundi 13 octobre au lieu du mardi 14 habituel, le rythme hebdomadaire de 108u prévaut. Les volumes élevés en N-1 (septembre 2024) n'ont pas de récurrence observable sur 2025, confirmant une baseline stable à 108u. Aucun effet de rattrapage n'est requis car la commande précédente a été passée normalement le 7 octobre.

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: 96u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: high)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: 96u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 96u
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite à 96 unités par commande sur toutes les occurrences récentes (septembre et octobre). Le rythme est strictement hebdomadaire le mardi. La commande actuelle est passée le lundi 13 octobre au lieu du mardi 14 octobre habituel, suggérant une simple anticipation de 24h sans modification du volume de consommation. L'historique de juillet (192u) est considéré comme un outlier représentatif d'un doublement de stock pour pallier une absence de commande en août (période de fermeture ou stock tampon), et n'influence pas la tendance actuelle de 96u.

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: 96u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 192u
- **Outliers détectés**: 96u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur un rythme hebdomadaire le mardi avec une quantité fixe de 192 unités (soit probablement 2 palettes ou un multiple de colisage standard). La commande du 02/09 à 96u est considérée comme une anomalie de démarrage ou un demi-lot. Bien que la date de prédiction soit un lundi 13/10 au lieu du mardi habituel, il s'agit très probablement du déclenchement anticipé de la commande hebdomadaire récurrente. La stabilité absolue des trois dernières semaines (192, 192, 192) confirme ce volume comme le besoin nominal.

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 108u avec un pic de stock récent
- **Outliers détectés**: 216u

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite de 108 unités toutes les deux semaines le mardi (12/08, 26/08, 09/09, 23/09). La commande du 30/09 à 216 unités correspond exactement à un doublement (2x108), probablement pour couvrir deux cycles ou une promotion locale, expliquant l'absence de commande le mardi 07/10. En revenant sur un cycle normal pour le 13/10 (veille du mardi habituel), le besoin standard de 108 unités est le plus probable pour maintenir le flux habituel de consommation.

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) majoritairement le mardi.
- **Saisonnalité**: none
- **Tendance**: Stable à 98u par commande.
- **Outliers détectés**: 392u, 196u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence extrêmement forte de la quantité 98 (ou multiples de 98, suggérant une unité logistique type palette ou couche). Le rythme de commande habituel est bimensuel (Intervalle de 14 jours constaté entre le 09/09 et le 23/09). La dernière commande datant du 23/09, le cycle prévoyait une commande théorique le 07/10. La demande du 13/10 (lundi) intervient avec une semaine de décalage sur le cycle bimensuel, mais la stabilité historique du volume unitaire (98u) dans 80% des cas, hors pics exceptionnels de juillet (cumul de 588u), indique que la quantité de réapprovisionnement standard reste de 98 unités.

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: 110u (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: high)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 110u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 110u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite à 110 unités avec une récurrence marquée le mardi. La commande anticipée d'un jour (lundi au lieu de mardi) suggère un maintien du volume habituel sans rupture de tendance.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 288u
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 384u
- 2025-09-23 14:07:32: 96u
- 2025-09-16 12:31:33: 96u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 96u
- 2024-10-01 09:34:05: 288u
- 2024-09-24 07:15:22: 96u
- 2024-09-17 15:18:07: 480u
- 2024-09-12 12:47:26: 192u
- 2024-09-05 07:15:19: 288u
- 2024-08-27 09:32:47: 192u
- 2024-08-20 08:57:46: 192u
- 2024-08-13 08:17:17: 96u
- 2024-06-25 12:51:56: 288u
- 2024-06-25 12:51:20: 288u
- 2024-06-25 12:50:51: 384u

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 192u
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 288u
- 2025-09-23 14:07:32: 192u
- 2025-09-16 12:31:33: 192u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 192u
- 2024-10-01 09:34:05: 96u
- 2024-08-20 08:57:46: 192u
- 2024-07-15 10:04:22: 576u
- 2024-07-03 11:51:49: 96u
- 2024-07-03 08:54:55: 480u
- 2024-07-02 08:34:10: 384u
- 2024-06-27 12:35:53: 96u
- 2024-06-25 12:51:56: 192u
- 2024-06-25 12:51:20: 192u
- 2024-06-25 12:50:51: 192u
- 2024-06-25 08:49:38: 192u

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 108u
- 2025-09-30 10:39:35: 108u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 108u
- 2024-10-01 09:34:05: 108u
- 2024-09-24 07:15:22: 108u
- 2024-09-17 15:18:07: 216u
- 2024-09-12 12:47:26: 108u
- 2024-07-03 11:51:49: 108u
- 2024-07-02 08:34:10: 324u
- 2024-06-27 12:35:53: 108u
- 2024-06-25 12:51:56: 108u
- 2024-06-25 12:51:20: 108u
- 2024-06-25 12:50:51: 216u
- 2024-06-25 08:49:38: 108u

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 96u
- 2025-09-16 12:31:33: 96u
- 2025-09-09 13:17:20: 96u
- 2025-07-29 04:52:34: 192u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 96u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 192u
- 2025-09-23 14:07:32: 192u
- 2025-09-09 13:17:20: 192u
- 2025-09-02 11:55:00: 96u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-30 10:39:35: 216u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u
- 2025-08-12 09:34:57: 108u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 98u
- 2025-09-09 13:17:20: 98u
- 2025-08-12 10:12:59: 98u
- 2025-07-29 04:52:34: 392u
- 2025-07-29 04:52:06: 196u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 98u
- 2024-09-24 07:15:22: 98u
- 2024-09-12 12:47:26: 98u
- 2024-09-05 07:15:19: 98u
- 2024-08-27 09:32:47: 98u
- 2024-08-20 08:57:46: 98u
- 2024-08-13 08:17:17: 98u
- 2024-08-06 14:39:19: 98u
- 2024-06-25 12:51:56: 196u
- 2024-06-25 12:51:20: 98u
- 2024-06-25 12:50:51: 98u
- 2024-06-25 08:49:38: 196u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 98u

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 110u
- 2025-07-29 04:52:34: 110u
- 2025-07-29 04:52:06: 110u
- 2025-07-22 14:39:10: 110u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 110u (confidence: high)
**📊 Quantité Réelle**: 110u

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 18.2u (1j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 63.4u (9j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -11.9u (-2j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -319.8u (-51j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -436.5u (-61j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:34:21.931Z*
