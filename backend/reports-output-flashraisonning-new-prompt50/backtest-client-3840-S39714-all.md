# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 7,068 input + 14,522 output = 21,590 total


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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 2.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 45 | 43 | 2.0 | 4.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1500 | 1500 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - LLM: 45u vs Médiane: 0u (Réel: 43u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 45u (confidence: low)
- 📊 **Baseline N-1**: 43u
- 📊 **Médiane**: 0u
- ✅ **Réel commandé**: 43u
- 📉 **Erreur LLM**: 2u (4.7%)
- 📉 **Erreur Médiane**: 43u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tentatives de commandes bi-hebdomadaires ou mensuelles (lundis/jeudis) mais forte instabilité récente
- **Saisonnalité**: none
- **Tendance**: Baisse drastique -70% par rapport à l'historique N-1
- **Outliers détectés**: 155u, 165u

**🧠 Raisonnement LLM:**
L'analyse montre une dégradation nette du volume par rapport à l'année précédente (passant de ~160u à ~40u). Les trois entrées à 0u dans l'historique récent (septembre/octobre) indiquent soit des ruptures de stock, soit des annulations de commande, ce qui rend la lecture de la demande de fond complexe. L'unique commande réelle récente est de 43u le jeudi 09/10/2025. Bien que nous soyons un lundi (jour habituel de commande l'an dernier), la demande actuelle ne justifie pas un retour aux volumes de 150u. On préconise une commande de 45u pour couvrir les besoins immédiats tout en restant conservateur face à l'instabilité du flux actuel.

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1500u vs Médiane: 1518u (Réel: 1500u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1500u (confidence: high)
- 📊 **Baseline N-1**: 1510u
- 📊 **Médiane**: 1518u
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 18u (1.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier (~28-30 jours), généralement en milieu de semaine
- **Saisonnalité**: strong
- **Tendance**: Stable à 1500u après une forte croissance structurelle vs N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun outlier détecté sur la période récente. Les volumes de 2025 (env. 1500u) sont très cohérents entre eux, marquant un changement d'échelle par rapport à 2024. ÉTAPE 2 (SAISONNALITÉ): Le produit a montré une montée en puissance continue en N-1, culminant à l'automne. Ce plateau haut est désormais consolidé. ÉTAPE 3 (TENDANCE): Stabilité remarquable sur les 3 derniers mois (1536, 1494, 1500). La fréquence est devenue prévisible et mensuelle. ÉTAPE 4 (RECOMMANDATION): Bien qu'une commande vienne d'être passée le 09/10, la quantité de fond pour ce cycle de consommation est de 1500u. Compte tenu de la stabilité parfaite de la demande de fond sur le dernier trimestre, nous maintenons ce volume cible sans ajustement agressif, conformément à une approche prudente en B2B.

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

**✅ Quantité LLM**: 45u (confidence: low)
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
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1650 | Stock prédit: 183.4u (2j restants) → prédit 1650u mais non commandé |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4350 | Stock prédit: 966.7u (6j restants) → prédit 4350u mais non commandé |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Stock prédit: -41.5u (-4j restants) → prédit 166u mais non commandé |


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
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | Stock suffisant: 160.1u (40j restants > seuil 30j) |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Stock suffisant: 79.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:20:45.929Z*
