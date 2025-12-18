# Rapport Backtest - Client LIDL BELGIE GMBH

## Contexte

- **Client** : LIDL BELGIE GMBH (ID: 33628)
- **Commande réelle** : S39662
- **Date commande** : 2025-10-13 04:38:31
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,338 input + 2,579 output = 9,917 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 128.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 256 | 384 | 128.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167)</strong> - LLM: 256u vs Médiane: 256u (Réel: 384u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 256u (confidence: medium)
- 📊 **Baseline N-1**: 384u
- 📊 **Médiane**: 256u
- ✅ **Réel commandé**: 384u
- 📉 **Erreur LLM**: 128u (33.3%)
- 📉 **Erreur Médiane**: 128u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle hebdomadaire fixe. Dernières 5 commandes (3 mois): intervalles de 4-14 jours, sans jour préférentiel. N-1 montre distribution: lun(1), mar(3), mer(3), jeu(2), ven(1) - aucun jour dominant.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive: N-1 moyenne=505u vs 3 derniers mois moyenne=410u (-19%). Dernière commande stable à 256u (4 semaines).
- **Outliers détectés**: 1024u, 768u, 640u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE EN CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE - Pas de pattern régulier
   • 3 derniers mois: 5 commandes en ~35 jours (quasi-hebdomadaire moyen)
   • Intervalles: 4j (ven→lun), 5j (lun→mar), 13j (mar→jeu), 6j (jeu→ven)
   • CONSTAT: Aucune régularité jour/semaine exploitable
   • Date de prédiction (dimanche) = jour atypique pour commande → probablement pas de commande ce jour

2️⃣ FILTRAGE OUTLIERS
   • 1024u (26/08): +300% vs baseline → pic exceptionnel (promotion/commande importante)
   • 768u et 640u (N-1): pics ponctuels, non récurrents au-delà du baseline
   • Pattern stabilisé: dernière commande 256u (05/09) = 3 semaines stabilité
   • Conclusion: Baseline réel = 256-384u, les pics sont des exceptions

3️⃣ SAISONNALITÉ OCTOBRE N-1
   • Octobre 2024: ABSENT de l'historique
   • Septembre N-1 (30/09): 512u (après vide de 18 jours)
   • Septembre N (01/09): 256u
   • Impact saisonnier FAIBLE → pas d'effet automne démontré

4️⃣ TENDANCE OBSERVÉE
   • N-1 (avril-septembre 2024): moyenne 505u
   • N récent (août-septembre 2025): moyenne 410u
   • Évolution: -19% sur l'année → baisse progressive confirmée
   • BUT: Ajuster à la baisse vs N-1

5️⃣ SYNTHÈSE & DÉCISION
   • Baseline théorique: 384u (médiane N-1)
   • Correction tendance baisse: ×0.67 (410/505)
   • Ajustement: 384 × 0.67 ≈ 257u
   • Validation: aligné avec dernière commande stabilisée (256u)
   • **PRÉDICTION: 256u** = plus probable + cohérent avec tendance

⚠️ RISQUE IDENTIFIÉ: Dimanche = jour anormal pour commande B2B
   → Cette prédiction s'appliquerait si prochaine commande lundi matin
   → Confiance MEDIUM car: (1) pattern très irrégulier, (2) manque données octobre N-1, (3) jour aberrant

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167)</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 11:06:08: 256u
- 2025-09-01 08:52:49: 256u
- 2025-08-26 15:25:52: 1024u
- 2025-08-14 13:29:11: 256u
- 2025-08-08 11:41:05: 256u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 13:13:17: 512u
- 2024-09-11 10:27:42: 384u
- 2024-08-20 10:37:14: 256u
- 2024-06-26 10:02:06: 384u
- 2024-06-13 15:25:35: 768u
- 2024-06-11 09:08:43: 512u
- 2024-05-31 06:38:37: 768u
- 2024-05-15 08:55:53: 384u
- 2024-05-15 08:55:53: 256u
- 2024-05-13 08:04:16: 640u
- 2024-04-11 13:23:35: 640u
- 2024-04-09 09:15:49: 384u

**✅ Quantité LLM**: 256u (confidence: medium)
**📊 Quantité Réelle**: 384u

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
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 128 | Stock prédit: -313.6u (-3j restants) → prédit 128u mais non commandé |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 384 | Stock prédit: -88.3u (0j restants) → prédit 384u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:12:19.478Z*
