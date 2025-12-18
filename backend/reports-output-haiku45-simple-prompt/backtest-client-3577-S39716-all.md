# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S39716
- **Date commande** : 2025-10-14 08:27:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,340 input + 3,592 output = 10,932 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 100.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 83.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 87.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 56.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 96 | 128 | 32.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 280 | 112 | 168.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 96u vs Médiane: 64u (Réel: 128u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: medium)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 128u
- 📉 **Erreur LLM**: 32u (25.0%)
- 📉 **Erreur Médiane**: 64u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes épisodiques sans cycle hebdomadaire fixe. Pattern principal: Mardi (5 occurrences en N-1), mais rupture récente avec commande jeudi 2025-10-09. Intervalles irréguliers: 24j (09/16 à 10/09), 7j (08/05 à 08/04 - apparemment deux commandes successives lundi/mardi). Pas de pattern mensuel détectable.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive avec stabilisation récente. Moyenne N-1: 112u. Moyenne 3 derniers mois: 89.6u. Demande récente dominée par quantités de 64u (3 fois vs 128u x2 en période récente).
- **Outliers détectés**: 192u, 192u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **RYTHME OBSERVÉ:**
   - N-1 (2023-2024): Pattern Mardi dominant (5 commandes sur 10 = 50%). Volumes alternant 64/128/192u
   - Période récente (août-octobre 2025): Rupture du pattern Mardi
     * 04/08 (Lun): 128u
     * 05/08 (Mar): 64u
     * 12/08 (Mar): 64u
     * 16/09 (Mar): 128u
     * 09/10 (Jeu): 64u
   - Constat: Client s'éloigne du Mardi récemment (dernier mardi 16/09, puis jeudi 09/10)

2. **CYCLE RÉVÉLÉ:**
   - Intervalle 09/16 → 10/09 = 23 jours (quasi-mensuel)
   - Intervalle 08/05 → 08/12 = 7 jours (une semaine)
   - Pas de cycle rigide: comportement erratique

3. **FILTRAGE OUTLIERS:**
   - Pics à 192u: 2024-09-03 (64u seulement avant), 2023-11-29 (192u). Occurrences rares (2/10 = 20%). Probables promotions/campagnes ponctuelles → À IGNORER pour baseline.
   - Demande "normale": 64u et 128u (80% des observations)

4. **SYNTHÈSE TENDANCES:**
   - Moyenne N-1: (64+192+128+64+64+64+128+128+192+128)/10 = 1152/10 = 115.2u
   - Moyenne 3 mois récents: (128+64+64+64+128)/5 = 448/5 = 89.6u
   - **Tendance: Baisse de ~22% (115.2 → 89.6)**
   - Saisonnalité octobre N-1: ABSENT (pas de données oct 2024)
   - Saisonnalité septembre: 64u (2024) vs 128u (2025) = légère hausse

5. **DEMANDE PRÉDICTIVE:**
   - Baseline corrigée = 110u (moyenne conservative N-1 + 3 mois récents)
   - Ajustement baisse récente: -15% = 110 × 0.85 ≈ 94u
   - **Date prédiction: LUNDI 13/10/2025** (hors cycle Mardi habituel)
     * Historique: Un seul lundi (04/08 = 128u)
     * Contexte: Dernier jeudi (09/10) = 64u, donc client peut commander en fin de semaine
     * Probabilité commande lundi faible, mais si elle arrive: quantité basse attendue

6. **PRÉDICTION FINALE:**
   - Scénario probable: Commande d'ajustement ou complément après celle du 09/10
   - Quantité estimée: 96u (arrondi 94u, entre 64u et 128u, tenant compte baisse tendance)
   - Confidence MEDIUM: Cycle instable, pas de certitude jour/quantité, saisonnalité faible, mais pattern baisse confirmé

**Règle appliquée:** En agroalimentaire B2B sans cycle stricte, privilégier la données la plus fiable (3 mois = 89.6u) pondérée avec trend baisse observée.

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 280u vs Médiane: 224u (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 280u (confidence: medium)
- 📊 **Baseline N-1**: 112u
- 📊 **Médiane**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 168u (150.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec 2 pics récents : lundi 2025-08-04 (224u) et mardi 2025-08-05 (448u). Pattern N-1 montre quasi-exclusivement des mardis (11/12 commandes un mardi), avec volumes stables à 112-224u. Rupture claire du rythme en août 2025.
- **Saisonnalité**: weak
- **Tendance**: Hausse nette +100% en août 2025 vs N-1 (112u baseline → 224-448u récent). Possible effet rattrapage ou changement de consommation du client.
- **Outliers détectés**: 448u, 224u

**🧠 Raisonnement LLM:**

ANALYSE ÉTAPE PAR ÉTAPE :

1️⃣ **RYTHME PASSÉ (N-1)** :
   - 11/12 commandes un MARDI (93% des cas)
   - Volumes très stables : 112u ou 224u (multiple de 112u)
   - Intervalles réguliers (~4-6 semaines entre commandes)
   - Pattern établi et prévisible

2️⃣ **RUPTURE RÉCENTE (Août 2025)** :
   - 2025-08-04 (lundi) : 224u ⚠️ Déviation jour de semaine
   - 2025-08-05 (mardi) : 448u ⚠️ Double du maximum habituel
   - Intervalle très court : 1 jour seulement entre les 2 commandes
   - Signature : effet RATTRAPAGE ou PROMOTION immédiate

3️⃣ **INTERPRÉTATION** :
   - La commande du lundi (224u) peut être un rattrapage partiel
   - La commande du mardi (448u) est l'achat régulier MAJORÉ (double volume = 2×224u)
   - Ces 2 commandes consécutives ne reflètent pas la demande moyenne stable
   - Cependant : la tendance baissière N-1 → croissance août 2025 confirme une VRAIE augmentation de consommation

4️⃣ **PRÉDICTION POUR 2025-10-13 (Lundi)** :
   - Date demandée : **LUNDI** (historiquement jour exceptionnel)
   - N-1 comparable (2024-07-08 lundi) : 112u
   - Dernière tendance : hausse +100% (224-448u vs 112u N-1)
   - Rythme : ~2 mois depuis dernière commande (août 05)
   
   **Hypothèses testées** :
   • Retour à N-1 + croissance = 112u × 2 = 224u
   • Maintien nouveaux volumes = 280u (moyenne 224+448 / 2.4, ajustée)
   • Stabilisation haussière = 336u (1.5× baseline = 112×3)
   
   **Choix** : **280u** = compromis prudent et réaliste
   - Reconnaît la hausse de consommation (+150% vs N-1)
   - Ne surévalue pas les 448u du 2025-08-05 (pic probable)
   - Reste compatible multiple de 112u (280 ≈ 2.5×112, arrondi à 280 pour integer)
   
5️⃣ **CONFIDENCE : MEDIUM** (et non HIGH) car :
   ✓ Données récentes très limitées (seulement 2 commandes 2025)
   ✗ Jour de semaine atypique (lundi au lieu de mardi habituel)
   ? Raison de la hausse inexpliquée (promotion, nouveau client, erreur de saisie ?)

**CONCLUSION** : Prédire **280 unités** = meilleur équilibre entre prudence et réactivité face à l'augmentation observée.


</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:37:17: 64u
- 2025-09-16 09:22:58: 128u
- 2025-08-12 09:46:11: 64u
- 2025-08-05 11:52:23: 64u
- 2025-08-04 08:50:19: 128u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 12:49:47: 64u
- 2024-06-11 06:48:14: 192u
- 2024-05-21 13:18:20: 128u
- 2024-04-23 07:54:51: 64u
- 2024-04-09 09:07:56: 64u
- 2024-03-19 08:47:39: 64u
- 2024-02-13 10:12:54: 128u
- 2024-01-16 13:29:59: 128u
- 2023-11-29 10:59:25: 192u
- 2023-11-07 14:55:48: 128u

**✅ Quantité LLM**: 96u (confidence: medium)
**📊 Quantité Réelle**: 128u

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 11:52:23: 448u
- 2025-08-04 08:50:19: 224u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-08 06:47:45: 112u
- 2024-06-11 06:48:14: 224u
- 2024-05-21 13:18:20: 224u
- 2024-05-16 11:00:25: 112u
- 2024-04-23 07:54:51: 112u
- 2024-04-09 09:07:56: 224u
- 2024-03-19 08:47:39: 112u
- 2024-03-12 11:47:36: 112u
- 2024-02-13 10:12:54: 112u
- 2024-01-16 13:29:59: 112u
- 2023-12-27 07:11:21: 112u
- 2023-11-07 14:55:48: 112u

**✅ Quantité LLM**: 280u (confidence: medium)
**📊 Quantité Réelle**: 112u

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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: 84.5u (9j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:09:55.146Z*
