# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 19,452 input + 3,688 output = 23,140 total


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
- 🤖 **LLM prédit**: 192u (confidence: medium)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire ~Mardi (parfois jeudi en rattrapage)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère volatilité 96-288u
- **Outliers détectés**: 480u, 384u, 384u

**🧠 Raisonnement LLM:**
Pattern hebdomadaire identifié: commandes majoritairement le mardi. Dernière commande le 09/10 (jeu.) avec 288u après 192u le 07/10 (mar.) suggère un cycle perturbé. En N-1 même période: 96-288-96-480 (forte volatilité avec pic 480u outlier probable). Exclusion des outliers (480u en sept-24, 384u récurrents): baseline naturelle se situe autour de 96-192-288u. Les 5 dernières commandes hors outliers: 288,192,96,96,192 → médiane=192u. Prochaine commande attendue mardi 14/10 (demain) ou lundi 13/10 selon rythme client. La séquence jeudi 09/10 (288u) après mardi 07/10 (192u) indique un cycle perturbé mais pas de rattrapage massif nécessaire. Volume le plus probable: 192u (quantité récurrente stable, équilibre entre les 96u bas et 288u hauts).

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
- **Pattern temporel**: Mardi dominant (4/5 commandes récentes), rythme hebdomadaire avec dernière commande jeudi 09/10
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 192u (moyenne récente 192u, médiane 192u)
- **Outliers détectés**: 576u

**🧠 Raisonnement LLM:**
Pattern clair: commandes quasi-hebdomadaires le mardi à 192u (16/09, 23/09, 30/09 avec 288u=rattrapage, 07/10 à 96u=demi-commande). Le 576u de juillet 2024 est un outlier isolé (probable promo/stock). La commande du 09/10 (jeudi, 192u) casse légèrement le rythme mardi mais confirme le quantum de 192u. Prochaine date logique: mardi 14/10, mais la prédiction est pour lundi 13/10. Deux scénarios: (1) commande anticipée d'1 jour à 192u (comportement stable), (2) pas de commande lundi car attente du mardi habituel. Vu la régularité forte du pattern mardi et l'absence d'urgence détectée, je privilégie la quantité standard observée de 192u si commande passée, car c'est le quantum de référence constant sur 3 mois.

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
- **Pattern temporel**: Commande chaque Mardi (hebdomadaire strict)
- **Saisonnalité**: weak
- **Tendance**: Stable à 108u
- **Outliers détectés**: 324u, 216u

**🧠 Raisonnement LLM:**
Pattern hebdomadaire parfaitement stable: commandes TOUS les mardis depuis 3 mois à 108u exactement (07/10, 30/09, 23/09, 09/09, 26/08). Les outliers identifiés (324u en 07/2024 et 216u ponctuels) sont des événements isolés sans récurrence saisonnière à cette date. N-1 (oct 2024) montre aussi 108u réguliers. Aucune rupture de rythme (dernière commande 07/10, prochaine attendue 14/10 proche du 13/10). Tendance plate confirmée sur 5 dernières commandes identiques. Prédiction: 108u avec forte confiance.

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
- **Pattern temporel**: Commande chaque Mardi avec cycle hebdomadaire strict
- **Saisonnalité**: none
- **Tendance**: Stable à 96u depuis 3 mois (après normalisation post-outlier du 29/07)
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
Pattern hebdomadaire très stable détecté: commandes systématiques le mardi. Les 4 dernières commandes (sept-oct) montrent une constance parfaite à 96u. L'événement du 29/07 (192u) est un outlier isolé (double quantité, possiblement rattrapage ou promotion). Aucune saisonnalité N-1 disponible. La prédiction pour le mardi 13/10 suit logiquement le rythme hebdomadaire établi avec la quantité standardisée de 96u observée sur les 6 dernières semaines consécutives.

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
- **Pattern temporel**: Hebdomadaire strict - Chaque Mardi (intervalle 7j parfait)
- **Saisonnalité**: none
- **Tendance**: Stable à 192u après transition depuis 96u début septembre
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern hebdomadaire ultra-régulier détecté: 5 commandes consécutives les mardis (09/02, 09/09, 23/09, 30/09, 07/10). Le client a stabilisé sa demande à 192u depuis mi-septembre après une commande de transition à 96u. La prochaine date de prédiction (13/10) tombe un lundi, donc HORS du cycle habituel du mardi. Cependant, si l'on suppose un décalage d'1 jour ou une anticipation, la quantité attendue reste 192u car: (1) Aucun outlier identifié, (2) Tendance parfaitement stable sur 4 semaines à 192u, (3) Pas de saisonnalité N-1 disponible, (4) Le doublement de 96u→192u semble être un ajustement structurel du besoin, désormais consolidé. Prédiction: 192u avec haute confiance.

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
- **Pattern temporel**: Commande chaque Mardi avec cycle de ~14 jours (bi-hebdomadaire)
- **Saisonnalité**: none
- **Tendance**: Stable à 108u avec exception récente 216u (+100%)
- **Outliers détectés**: 216u

**🧠 Raisonnement LLM:**
Pattern bi-hebdomadaire strict détecté: 12/08(mar), 26/08(mar), 09/09(mar), 23/09(mar), 30/09(mar). Les 4 premières commandes montrent une stabilité parfaite à 108u. Le 30/09 montre 216u (exactement 2×108) après seulement 7 jours, suggérant un rattrapage/avance ou erreur de saisie plutôt qu'un changement structurel. Le 13/10 (lundi) casse le pattern mardi habituel, mais en appliquant le cycle 14j depuis le 30/09, on arrive au 14/10. Avec une demande de fond stable à 108u sur 4 commandes consécutives et un outlier isolé non représentatif d'une tendance, la quantité la plus probable reste 108u. Aucune saisonnalité N-1 disponible pour ajuster. Prédiction: 108u.

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
- **Pattern temporel**: Commande bi-hebdomadaire/mensuelle, prédominance Mardi
- **Saisonnalité**: weak
- **Tendance**: Stable à 98u (hors anomalie juillet 2025)
- **Outliers détectés**: 392u, 196u, 196u

**🧠 Raisonnement LLM:**
Pattern clair: client commande 98u de manière récurrente tous les ~14-21 jours, massivement le mardi. N-1 (oct 2024) montre 98u. Les 3 derniers mois confirment 98u comme norme (sept x2, août x1), à l'exception d'une anomalie isolée fin juillet 2025 (588u total = probable rattrapage stock ou erreur système vu les 2 commandes simultanées). Pas de saisonnalité forte détectée. Dernière commande: 2025-09-23 (mar.) = 20 jours avant prédiction (2025-10-13 lun.). Le cycle bi-hebdomadaire/mensuel suggère une commande imminente. La prédiction tombe un lundi (inhabituel) mais reste dans la fenêtre temporelle attendue. Quantité recommandée: 98u (demande de fond stable, aucun indicateur de changement structurel).

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
- **Pattern temporel**: Commande chaque Mardi, pattern hebdomadaire strict
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité fixe 110u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern très stable identifié: 4 commandes consécutives de 110u, toutes des mardis (22/07, 29/07 doublé, 23/09). Cycle hebdomadaire strict avec quantité fixe. La date de prédiction (13/10) est un lundi, donc hors cycle habituel du mardi. Cependant, l'intervalle depuis dernière commande (23/09) est de 20 jours, ce qui suggère qu'une commande est imminente. Le pattern montre une consommation régulière de 110u par cycle. Sans saisonnalité N-1, sans outliers, et avec une stabilité parfaite sur 3 mois, la prédiction optimale reste 110u - la quantité standard observée à chaque réapprovisionnement.

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

**✅ Quantité LLM**: 192u (confidence: medium)
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

*Rapport généré automatiquement le 2025-11-20T13:30:34.812Z*
