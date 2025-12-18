# Rapport Backtest - Client HOUTOPIA

## Contexte

- **Client** : HOUTOPIA (ID: 60361)
- **Commande réelle** : S39863
- **Date commande** : 2025-10-22 11:56:52
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 5,284 input + 2,019 output = 7,303 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
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
| **MAE** | 0.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 43.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 4u vs Médiane: 5u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très irrégulier (43 jours puis 49 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données. On observe un ralentissement de la demande (passage de 10 à 4 unités) avec un intervalle de commande long (~1.5 mois). La date actuelle (21 octobre) se situe 48 jours après la dernière commande du 3 septembre, ce qui correspond à l'intervalle moyen observé. Sans données N-1 pour confirmer une saisonnalité spécifique, je privilégie le volume de la dernière commande connue (septembre) pour coller à la tendance basse actuelle.

</details>


<details>
<summary><strong>2. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, cycle long d'environ 43 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse (5u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points de données). On observe une commande le 22/07 (mardi) et le 03/09 (mercredi), suggérant un cycle de réapprovisionnement lent d'environ 6 semaines. La date de prédiction (21/10) tombe exactement 48 jours après la dernière commande, ce qui correspond au cycle observé. Étant donné la légère baisse entre les deux dernières itérations et l'absence de données de saisonnalité N-1 pour octobre, la quantité la plus probable se situe sur la borne basse récente de 4 unités.

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (~45-50 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (de 5u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points de données). On observe un intervalle de 43 jours entre la première et la deuxième commande. La date de prédiction (21 octobre) se situe exactement 48 jours après la dernière commande du 3 septembre, ce qui correspond à la fenêtre de réapprovisionnement observée. La moyenne des deux dernières commandes est de 4 unités. En l'absence de données N-1 pour confirmer une saisonnalité, je préconise la moyenne pondérée pour lisser la baisse récente tout en tenant compte du volume habituel très faible du produit (micro-unités). Le jour de la semaine (mardi) est cohérent avec l'historique de juillet (mardi) et septembre (mercredi). Pour minimiser le MAPE sur des volumes si petits, la valeur centrale de 4 est la plus statistiquement probable compte tenu du délai écoulé depuis la dernière commande (+48 jours). Il n'y a pas d'effet de rattrapage massif prévu au vu de la faible rotation de la référence (TENSAÏ TEA).  Un arrondi entier simple est appliqué à la baseline calculée (3 et 5). Aucun indice de promotion ou d'outlier n'est détectable au regard du volume unitaire très bas par commande (3-5u). Il est recommandé d'observer la prochaine commande pour valider le cycle de ~45 jours identifié ici comme hypothèse principale de récurrence du client pour ce thé bio citron-sureau de 330ml.

</details>


<details>
<summary><strong>4. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ un cycle de 42 jours entre les deux points de données connus
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux commandes enregistrées (juillet et septembre). Les deux commandes affichent une quantité unitaire stricte (1 unité). Bien que l'intervalle suggère un besoin ponctuel ou un réapprovisionnement très lent, il n'y a aucun signal de croissance ou de variation de volume. La prédiction de 1 unité est la plus probable compte tenu de la stabilité parfaite mais faible du volume historique.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 4u
- 2025-07-22 09:53:28: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 4u
- 2025-07-22 09:53:28: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 3u
- 2025-07-22 09:53:28: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:32:29: 1u
- 2025-07-22 09:53:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (4)

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 4 | Stock prédit: -1.7u (-21j restants) → prédit 4u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Stock prédit: 0.3u (17j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:39:43.444Z*
