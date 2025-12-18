# Rapport Backtest - Client SODEXO SAFRAN BE3723

## Contexte

- **Client** : SODEXO SAFRAN BE3723 (ID: 60539)
- **Commande réelle** : S40028
- **Date commande** : 2025-10-30 13:17:36
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 8,189 input + 11,668 output = 19,857 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 8 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 1.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 23.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -19.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (6)

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
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 8 | 7 | 1.0 | 14.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 6 | 7 | 1.0 | 14.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (environ 58-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 5-6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur deux points de données : une commande le 04/08 et une le 01/10, soit un intervalle de 58 jours. En projetant ce cycle, la prochaine commande devrait intervenir 58 jours après le 01/10, ce qui nous amène au 28/11/2025. Cette date tombe précisément le dernier jour de la fenêtre de prédiction de 30 jours (29/10 au 28/11). Bien que l'historique soit limité, la régularité temporelle et la stabilité des volumes (5 et 6u) suggèrent une commande de 5 unités en fin de période. La confiance est faible en raison du faible volume de données.

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long d'environ 58 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 5-6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux commandes enregistrées. Celles-ci montrent un intervalle de 58 jours (environ 2 mois) pour des quantités stables (6u puis 5u). La dernière commande datant du 1er octobre, la prochaine est statistiquement attendue autour du 28 novembre. Cette date tombant exactement à la limite de la fenêtre de prédiction de 30 jours (29 octobre au 28 novembre), nous anticipons une commande de réapprovisionnement de 5 unités pour clore le cycle. La confiance est faible en raison du manque de profondeur historique pour confirmer ce rythme.

</details>


<details>
<summary><strong>3. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel long d'environ 55-60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux commandes enregistrées (août et octobre). L'intervalle observé entre ces deux point est de 58 jours. En appliquant ce cycle à la dernière commande du 01/10/2025, la prochaine commande est projetée aux alentours du 28/11/2025, ce qui correspond exactement à la limite de la fenêtre de prévision de 30 jours. Étant donné la faible rotation du produit et le volume constant, une commande de 5 unités est anticipée pour la fin de période. La confiance est faible en raison de la pauvreté des données historiques.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long bimensuel (environ tous les 58-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (Léger ralentissement de 6u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre seulement deux commandes espacées de 58 jours (04/08 et 01/10). Sur la base de cet intervalle, la prochaine commande est estimée aux alentours du 28 novembre 2025. Comme notre fenêtre d'analyse s'étend du 29 octobre au 28 novembre, la commande tombe exactement à la fin de la période de prédiction. La quantité recommandée est de 5 unités, s'alignant sur la commande la plus récente et la tendance stable du produit. Le niveau de confiance est faible en raison de la rareté des points de données.

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 6u vs Médiane: 7u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 1u (14.3%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 34 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume moyen de 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur seulement deux points de données. On observe un intervalle de 34 jours entre la commande du 28 août et celle du 1er octobre. Étant donné que nous sommes le 29 octobre, soit 28 jours après la dernière commande, et que le cycle estimé est de 34 jours, la prochaine commande devrait intervenir vers le 04 novembre, ce qui se situe dans la fenêtre des 30 prochains jours. Le volume moyen des commandes précédentes étant de 6 unités (moyenne de 5 et 7), nous prédisons une commande unique de 6 unités.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-28 06:05:44: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>




---

## False Positives (2)

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
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 5 | Stock prédit: 0.8u (5j restants) → prédit 5u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 5 | Stock prédit: 0.8u (5j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T20:01:25.721Z*
