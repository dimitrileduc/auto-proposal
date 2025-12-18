# Rapport Backtest - Client Le Fourgon SAS

## Contexte

- **Client** : Le Fourgon SAS (ID: 56363)
- **Commande réelle** : S37059
- **Date commande** : 2025-06-24 06:16:08
- **Date cutoff système** : 2025-06-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 4,393 input + 907 output = 5,300 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 2.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 9.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 8.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (4)

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
| [MF0024] MF KETCHUP 250g | 32 | 32 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0047] MF Mayonnaise 250ml | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RF003] REFIELD Maïs 500G  | 40 | 48 | 8.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0021] MF Sauce BBQ 250ml | 13 | 16 | 3.0 | 18.8% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - LLM: 32u vs Médiane: 16u (Réel: 32u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: strong
- **Tendance**: Hausse significative +60%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel très régulier (01/04, 01/05). La quantité est passée de 16u en avril à 32u en mai, indiquant une forte croissance ou un nouveau besoin de fond. Bien que la commande de l'année précédente (juin 2024) fût de 20u, la tendance actuelle de 2025 prime. La date de prédiction (lundi 23 juin) arrive environ 48 jours après la dernière commande, suggérant que le client a légèrement sauté ou décalé son cycle habituel ; selon les règles de gestion des jours hors cycle, nous prédisons le volume de la prochaine commande attendue. Le palier de 32u étant le volume récent le plus récent et le plus cohérent avec la croissance, il est retenu comme cible.

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -20%
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel régulier survenant le mardi (35 jours entre avril et mai). La valeur de 32u en avril semble être un restockage exceptionnel ou un outlier par rapport au volume N-1 (20u) et à la commande la plus récente (16u). La tendance actuelle montre une stabilisation ou une légère baisse vers 16u. Bien que la prédiction soit demandée pour un lundi, selon les consignes de cycle, nous prédisons le volume de la commande imminente du cycle (habituellement le mardi). Le volume de 16u est retenu comme la valeur la plus probable car elle reflète le besoin réel le plus récent sans le bruit de l'outlier d'avril.

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - LLM: 40u vs Médiane: 40u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: medium)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 8u (16.7%)
- 📉 **Erreur Médiane**: 8u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse +25% (de 32u à 40u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle mensuel stable avec deux points de données (avril et mai) tombant tous deux un mardi. La croissance observée est de 25% entre les deux commandes. La date de prédiction est un lundi, soit la veille du jour de cycle théorique (mardi 24 juin). Conformément aux consignes pour les jours hors cycle, nous prédisons la quantité du prochain événement probable. La dernière valeur observée étant de 40u dans une tendance haussière, elle constitue la meilleure base de prédiction pour minimiser le MAPE, sans indications d'effets saisonniers N-1.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 32u
- 2025-04-01 07:53:14: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-04 14:36:38: 20u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 32u

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 16u
- 2025-04-01 07:53:14: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-04 14:36:38: 20u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 40u
- 2025-04-01 07:53:14: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T11:19:02.756Z*
