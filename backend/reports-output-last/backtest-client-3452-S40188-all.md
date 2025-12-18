# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S40188
- **Date commande** : 2025-11-07 11:42:07
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 6,396 input + 17,373 output = 23,769 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 472.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 79.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 392 | 294.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 | 780 | 650.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 392u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 392u
- 📉 **Erreur LLM**: 294u (75.0%)
- 📉 **Erreur Médiane**: 294u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le lundi (intervalles 7-14 jours). Toutes les commandes récentes (5 derniers points) sont des lundis à 98u.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -392u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Pattern hebdomadaire LUNDI ultra-stable (5/5 dernières commandes). Date cible JEUDI = hors cycle → prédire prochain lundi (2025-11-10). OUTLIERS: Le pic 392u (juil.2024) et 196u (sept.2024) sont obsolètes et non répétés; la tendance actuelle est stable à 98u depuis 3 mois. DÉCISION: 98u est la valeur la plus probable pour la prochaine commande (lundi suivant), avec 95% de confiance.

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - LLM: 130u vs Médiane: 130u (Réel: 780u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 130u (confidence: high)
- 📊 **Baseline N-1**: 130u
- 📊 **Médiane**: 130u
- ✅ **Réel commandé**: 780u
- 📉 **Erreur LLM**: 650u (83.3%)
- 📉 **Erreur Médiane**: 650u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (Lun.) avec 5 commandes sur 3 mois
- **Saisonnalité**: none
- **Tendance**: downward
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1) Analyse Rythmique DÉTERMINANTE** : 5/5 commandes récentes sur lundi → cycle hebdomadaire strict. Date prédiction (jeudi) est out-of-cycle → règle spéciale: prédire la **prochaine commande lundi 2025-11-10**, pas 0. **2) Filtrage Outliers** : Baseline=130u (3/5 occurrences, 60%). 390u=pic saisonnier (20%). 780u=outlier majeur (20%, 2,5× la moyenne). Ce dernier est isolé sans répétition, probable stockage exceptionnel pré-fêtes. En agroalimentaire B2B, privilégier la récurrence stable sur le dernier point aberrant réduit drastiquement le MAPE. **3) Décision MAPE-first** : La valeur 130u est le mode statistique et le comportement d'achat régulier du client. 390u trop élevé pour cycle ordinaire, 780u trop exceptionnel. Prédiction = **130u**.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:40:31: 98u
- 2025-10-27 07:02:27: 98u
- 2025-10-13 07:49:42: 98u
- 2025-09-08 10:16:06: 98u
- 2025-09-01 08:56:14: 98u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:05:31: 196u
- 2024-09-23 11:56:39: 196u
- 2024-08-06 10:01:31: 98u
- 2024-07-11 10:01:48: 392u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 392u

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:40:31: 780u
- 2025-10-20 08:14:48: 130u
- 2025-09-29 15:27:45: 390u
- 2025-09-22 10:46:37: 130u
- 2025-09-08 10:16:06: 130u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-14 11:37:32: 390u
- 2024-10-01 06:38:15: 130u
- 2024-09-09 11:24:26: 130u
- 2024-09-05 05:51:58: 130u
- 2024-08-06 10:01:31: 130u
- 2024-07-11 10:01:48: 390u

**✅ Quantité LLM**: 130u (confidence: high)
**📊 Quantité Réelle**: 780u

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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | Stock prédit: 609.8u (30j restants) → prédit 130u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 95 | Stock prédit: 44.2u (1j restants) → prédit 95u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:08:30.687Z*
