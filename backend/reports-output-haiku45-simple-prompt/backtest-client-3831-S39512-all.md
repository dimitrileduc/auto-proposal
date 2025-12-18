# Rapport Backtest - Client DANTESSE GmbH

## Contexte

- **Client** : DANTESSE GmbH (ID: 3831)
- **Commande réelle** : S39512
- **Date commande** : 2025-10-02 08:37:42
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 18,729 input + 7,986 output = 26,715 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 6 produits prédits, 1 corrects |
| **Rappel** | 50.0% | 2 produits réels, 1 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

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
| **MAE** | 10.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 4.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (1)

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
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 240 | 250 | 10.0 | 4.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 240u vs Médiane: 250u (Réel: 250u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: medium)
- 📊 **Baseline N-1**: 87u
- 📊 **Médiane**: 250u
- ✅ **Réel commandé**: 250u
- 📉 **Erreur LLM**: 10u (4.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycles variables: intervalles de 10 à 70 jours en N-1, rupture notable en N actuel. Dates récentes (sept 2025) montrent convergence vers mercredi comme jour privilégié. N-1 confirmait mercredi comme jour de commande (25/09, 17/07, 13/01 en mercredi). Demande actuelle plus rapprochée (22/09 lun → 03/09 mer = 19 jours) vs N-1 plus espacée.
- **Saisonnalité**: weak
- **Tendance**: Hausse nette et rupture: N-1 moyenne ~87u (médiane 75u). N récent: moyenne 252u (+190% vs N-1). Hausse progressive passant de ~50-80u en N-1 à 250u en N (sept 2025).
- **Outliers détectés**: 250u, 250u

**🧠 Raisonnement LLM:**

**ANALYSE ÉTAPE PAR ÉTAPE:**

**1. ANALYSE RYTHMIQUE:**
- **N-1 (2024):** Commandes très irrégulières, espacées de 10 à 70 jours. Jours de semaine variés. Aucun pattern hebdomadaire strict identifiable. Jour mercredi apparaît 4 fois (25/09, 17/07, 13/01, et on manque décembre), suggérant peut-être une légère préférence.
- **N récent (sept 2025):** Changement radical. Deux commandes rapprochées (19 jours d'intervalle) aux quantités massives (250u chacune), toutes deux autour de mercredi.
- **Interprétation:** Rupture de pattern. Passage d'un régime de faible demande espacée à un régime de demande plus régulière et volumineuse.

**2. FILTRAGE OUTLIERS:**
- N-1: 125u appear 3 fois (peaks relatifs), autres ~50-80u. Pas de pic exceptionnel net.
- N récent: 250u × 2 consécutifs = outliers clairs vs N-1 (×3 la moyenne N-1).
- **Question clé:** Sont-ce des pics exceptionnels ou une hausse de tendance structurelle?
  - Indice 1: Les deux 250u sont consécutifs et rapprochés → pattern stable, pas one-shot.
  - Indice 2: N-1 montrait déjà variable (50-125u) donc 250u représente vrai changement.
  - **Conclusion:** Hausse de tendance durable, pas promotion ponctuelle. Possible nouveaux clients ou augmentation de commandes existantes.

**3. SAISONNALITÉ:**
- Pas de données suffisantes pour confirmer saisonnalité fin septembre spécifique.
- Impact **faible** : tendance récente plus importante que parallèle N-1.

**4. SYNTHÈSE & DÉCISION:**
- **Baseline N-1 (median/moyenne):** ~75-87u
- **Trend observé:** +190% (250 vs 87)
- **Mercredi comme jour de prédiction:** Aligné avec récents N (03/09 mercredi = 250u)
- **Scénario optimal:** Le client revient à un rythme mercredi régulier mais à niveau volumé.
- **Quantité prédite:** 240u (proche des 250u récentes, léger conservatisme sur potentiel normalisation, mais reconnaissance de la tendance solide)

**RAISON DU CHOIX 240 VS 250:**
- Les 250u × 2 peuvent inclure un effet de rattrapage (après période calme).
- Mercredi 01/10 = 28 jours après 03/09 = cycle mensuel possible.
- Prudence légère (240 vs 250) = -4% par rapport à dernière donnée, suffisant pour absorber variation naturelle sans sous-estimer la tendance établie.

**CONFIANCE MEDIUM:**
- Données récentes claires et cohérentes (2 obs identiques).
- Mais rupture brutale vs N-1 crée incertitude sur pérennité du niveau 240-250u.
- Manque d'historique intermédiaire entre avril 2025 et juillet 2025 (gap de 3 mois).
</reasoning>


</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 05:31:37: 250u
- 2025-09-03 07:49:42: 250u
- 2025-07-16 13:46:45: 55u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 19:46:57: 125u
- 2024-08-29 12:54:10: 75u
- 2024-08-23 09:48:48: 50u
- 2024-07-17 09:21:00: 80u
- 2024-06-07 10:11:53: 50u
- 2024-05-28 11:15:02: 125u
- 2024-04-23 06:22:53: 50u
- 2024-04-04 06:34:16: 125u
- 2024-03-12 11:50:55: 50u
- 2024-02-15 07:27:41: 70u
- 2024-01-17 14:53:06: 75u
- 2023-12-13 12:47:04: 125u

**✅ Quantité LLM**: 240u (confidence: medium)
**📊 Quantité Réelle**: 250u

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
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 5 | Stock prédit: 2.0u (5j restants) → prédit 5u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Stock prédit: -0.1u (-8j restants) → prédit 1u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 43 | Stock prédit: 16.9u (13j restants) → prédit 43u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 75 | Stock prédit: -3.3u (-1j restants) → prédit 75u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: -0.7u (-45j restants) → prédit 1u mais non commandé |


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
| [CONS070] PALETTE EURO | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:10:16.428Z*
