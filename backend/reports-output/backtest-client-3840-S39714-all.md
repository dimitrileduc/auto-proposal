# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 7
- **Tokens**: 14,643 input + 4,174 output = 18,817 total
- **Coût**: $0.1065 (~10.65¢)
- **Coût par produit LLM**: $0.0152


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
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 43 | 43 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1510 | 1500 | 10.0 | 0.7% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - LLM: 43u vs Médiane: 70u (Réel: 43u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 43u (confidence: medium)
- 📊 **Baseline N-1**: 43u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 43u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 27u (62.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (7-12-17 jours), pas de pattern hebdomadaire clair
- **Saisonnalité**: none
- **Tendance**: Baisse forte -70% (hors outlier 500u)
- **Outliers détectés**: 500u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes récentes montrent une irrégularité: 10/09 (mer), 22/09 (lun), puis double commande 09/10 (jeu). Intervalles de 12j puis 17j. Depuis la dernière commande (09/10), seulement 5 jours se sont écoulés pour la prédiction du 14/10 (mar) - ce qui est en-deçà du rythme habituel récent.

**FILTRAGE OUTLIERS**: La commande de 500u du 22/09 est clairement exceptionnelle (5x la moyenne). En l'excluant, le niveau normal récent s'établit à: 96u (10/09), puis 43u×2 (09/10) = stabilisation autour de 43u. Les 165u et 155u de N-1 ne sont pas pertinents (produit différent contexte/saisonnalité absente).

**TENDANCE**: Baisse nette de 96u → 43u (-55%) sur les commandes normales hors pic. La double commande de 43u le 09/10 suggère un nouveau niveau de demande stabilisé.

**DÉCISION**: Étant donné que seulement 5 jours séparent la dernière commande (09/10) de la date de prédiction (14/10), et que le rythme habituel est de 12-17 jours, la probabilité d'une commande le 14/10 existe mais elle serait au niveau actuel stabilisé de 43u. La baseline récente post-outlier est clairement 43u.

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1510u vs Médiane: 1518u (Réel: 1500u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1510u (confidence: high)
- 📊 **Baseline N-1**: 1510u
- 📊 **Médiane**: 1518u
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 10u (0.7%)
- 📉 **Erreur Médiane**: 18u (1.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~30j (29-35 jours entre commandes)
- **Saisonnalité**: weak
- **Tendance**: Hausse forte +97% (passage de ~758u en 2024 à ~1510u en 2025)
- **Outliers détectés**: 244u, 334u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client suit un pattern mensuel très régulier : 14/08 → 10/09 (27j) → 09/10 (29j). La prochaine commande le 14/10 (+5j) est cohérente avec ce cycle de ~30j.

**ANALYSE TENDANCE**: Comparaison N-1 vs 2025 montre une hausse structurelle massive :
- 2024 (mai-sept) : 594u → 758u → 758u (moyenne ~703u)
- 2025 (août-oct) : 1536u → 1494u → 1500u (moyenne ~1510u)
- Coefficient multiplicateur : x2.15 (+115%)

Les petites commandes de début 2024 (244u, 334u) sont des outliers liés à une montée en puissance initiale du produit.

**STABILITÉ RÉCENTE**: Les 3 derniers mois montrent une demande ultra-stable autour de 1510u (±20u de variation, soit <2%). Cette stabilité forte indique que le niveau de demande s'est cristallisé.

**SAISONNALITÉ**: Aucun pattern saisonnier détectable sur ce produit bio (tartinade mangue). L'effet N-1 est faible car le produit était en phase de croissance.

**CONCLUSION**: Vu la stabilité parfaite des 3 derniers mois (1536 → 1494 → 1500) et le respect du cycle mensuel, la demande de fond actuelle est de 1510u. Aucun élément ne justifie d'ajustement à la hausse ou à la baisse.

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
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4416 | Stock prédit: 854.1u (5j restants) → prédit 4416u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-20T09:01:17.063Z*
