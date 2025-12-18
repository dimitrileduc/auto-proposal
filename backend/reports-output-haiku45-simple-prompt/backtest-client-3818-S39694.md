# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S39694
- **Date commande** : 2025-10-13 10:17:04
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 2
- **Tokens**: 4,669 input + 1,766 output = 6,435 total


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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 32 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 32 | 16.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 24u (Réel: 32u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 18.5u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 16u (50.0%)
- 📉 **Erreur Médiane**: 8u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - pattern dominant: mercredi récent (3 occurrences: 10/09, 20/08, 13/08 tous mercredis). N-1 montre jeudi comme jour préférentiel (6 occurrences sur 12). Rupture de pattern observée: passage de jeudi (N-1) à mercredi (N actuel).
- **Saisonnalité**: weak
- **Tendance**: Stable avec pics ponctuels - Hausse modérée entre N-1 (moyenne 19.3u) et 3 derniers mois (moyenne 21.3u, +10%). Derniers 3 mois: alternance 32u-16u-16u.
- **Outliers détectés**: 48u, 32u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE - Pattern identifié:**
   - N-1 (2024): Jeudi dominant (6/12 commandes), pattern quasi-régulier
   - N actuel (3 derniers mois): Tous les mercredis (10/09, 20/08, 13/08) → changement de jour de commande
   - Intervalle récent: ~7-21 jours entre commandes, suggérant rythme hebdomadaire à bi-hebdomadaire
   - Date de prédiction: DIMANCHE 2025-10-12 (jour hors cycle normal)

2. **GESTION DU JOUR HORS CYCLE:**
   - Client commande normalement mercredi (jours récents)
   - Commande un dimanche est ATYPIQUE → 2 scénarios:
     a) Commande anticipée (raison urgence/inventaire bas) = quantité nomale
     b) Erreur de date/système = prédire sur base mercredi suivant (2025-10-15)
   - Hypothèse retenue: Traiter comme commande standard (absence d'indication urgence)

3. **FILTRAGE OUTLIERS:**
   - 48u (2024-03-14): Pic unique N-1 (x3 vs moyenne) → Événement exceptionnel (promotion/inventaire/erreur), NON récurrent
   - 32u (2025-09-10): Pic récent (x2 vs 16u standard) → Possible rattrapage ou demande saisonnière septembre
   - Données fiables: Le cœur de distribution = 16u (8/15 commandes)

4. **ANALYSE SAISONNALITÉ:**
   - Septembre N-1 (2024-09-09: 16u, 2024-09-05: 32u) vs Septembre N (2025-09-10: 32u)
   - Pic septembre maintenu mais pas à même volume → saisonnalité FAIBLE
   - Pas de signal fort d'augmentation structurelle

5. **TENDANCE:**
   - N-1 moyenne: 19.3u (231u/12 commandes)
   - 3 derniers mois moyenne: 21.3u (64u/3 commandes)
   - Hausse modérée +10%, mais base 32u pourrait être exceptionnel
   - Sans le pic 32u: moyenne 3 mois = 16u exactement

6. **SYNTHÈSE & DÉCISION:**
   - Baseline théorique: 16-18u (cœur de distribution stable)
   - Tendance: Neutre à légèrement haussière (+10%)
   - Jour anormal (dimanche vs mercredi habituel) → risque faible de rattrapage volontaire
   - **RÈGLE D'OR AGRO B2B**: Maximiser précision = viser quantité PROBABLE, pas prudente
   - Quantité la plus probable: 16u (cohérent avec 6/9 dernières commandes non-outliers)
   - Coefficient saisonnalité faible = pas d'ajustement majeur

**RECOMMENDED QUANTITY: 16u** (mode de distribution, aligné tendance stable, pénalité minimale si réalisation 16-32u vs commande 32u)

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:32:45: 32u
- 2025-08-20 12:43:59: 16u
- 2025-08-13 10:37:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 12:35:42: 16u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 16u
- 2024-05-16 08:11:07: 16u
- 2024-05-14 08:23:32: 16u
- 2024-04-18 08:58:20: 16u
- 2024-03-14 08:27:15: 48u
- 2024-02-22 13:59:46: 16u
- 2024-02-09 09:02:46: 16u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 32u

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | Stock prédit: -3.3u (-1j restants) → prédit 32u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: -6.9u (-5j restants) → prédit 16u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:10:14.272Z*
