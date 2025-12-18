# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 10,557 input + 30,592 output = 41,149 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 5 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 43 | 43 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1500 | 1500 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - LLM: 43u vs Médiane: 0u (Réel: 43u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 43u (confidence: medium)
- 📊 **Baseline N-1**: 43u
- 📊 **Médiane**: 0u
- ✅ **Réel commandé**: 43u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 43u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: aperiodic
- **Saisonnalité**: none
- **Tendance**: stable_flat
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse révèle un pattern de commande très épisodique avec rupture de tendance majeure : les volumes 2024 (155-165u) sont >3x supérieurs à la dernière commande 2025 (43u), indiquant une obsolescence des données N-1. Les 3 points à 0u sur 4 lignes récentes ne représentent pas des commandes nulles mais des périodes sans passage de commande, ce qui est typique des produits B2B à rotation lente. La seule commande effective des 3 derniers mois est 43u le 2024-10-09. La date cible (mardi) est hors cycle (dernières commandes sur jeudi/lundi), mais les règles interdisent la prédiction 0 pour un jour hors cycle sauf arrêt complet du produit. Une commande positive de 43u il y a 5 jours infirme l'hypothèse d'arrêt. La prédiction doit donc refléter la nouvelle baseline de commande épisodique.

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1500u vs Médiane: 1518u (Réel: 1500u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1500u (confidence: high)
- 📊 **Baseline N-1**: 1500u
- 📊 **Médiane**: 1518u
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 18u (1.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: MENSUEL (~30j, mercredi/jeudi)
- **Saisonnalité**: none
- **Tendance**: STABLE (~1500u, rupture avec anciens volumes N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le pattern est passé de sporadique (N-1) à mensuel régulier (récent). Les 3 dernières commandes montrent un intervalle moyen de 28j avec volumes ultra-stables (~1500u). La date demandée (14 oct, mardi) n'est pas un jour de commande selon ce rythme mensuel. Application de la règle spéciale 'jour hors cycle' : interdiction de mettre 0, je prédis la quantité de la prochaine commande mensuelle attendue. Les données N-1 étant obsolètes (rupture majeure), je m'appuie exclusivement sur les 3 points récents. La dernière valeur (1500u) est parfaitement représentative de la tendance stable actuelle.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:05:44: 0u
- 2025-10-09 08:02:15: 43u
- 2025-09-22 05:23:57: 0u
- 2025-09-10 06:26:25: 0u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 14:23:19: 155u
- 2024-06-12 13:16:37: 165u

**✅ Quantité LLM**: 43u (confidence: medium)
**📊 Quantité Réelle**: 43u

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:02:15: 1500u
- 2025-09-10 14:18:40: 1494u
- 2025-08-14 06:52:41: 1536u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:27:40: 758u
- 2024-07-22 13:15:52: 758u
- 2024-05-02 07:07:22: 594u
- 2024-04-17 08:00:24: 244u
- 2024-01-19 12:40:26: 484u
- 2024-01-02 14:39:56: 334u

**✅ Quantité LLM**: 1500u (confidence: high)
**📊 Quantité Réelle**: 1500u

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
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1826 | Stock prédit: 119.5u (1j restants) → prédit 1826u mais non commandé |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4224 | Stock prédit: 854.1u (5j restants) → prédit 4224u mais non commandé |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Stock prédit: -45.3u (-4j restants) → prédit 166u mais non commandé |


---

## False Negatives (2)

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
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | Stock suffisant: 156.2u (39j restants > seuil 30j) |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Stock suffisant: 77.6u (37j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:42:40.885Z*
