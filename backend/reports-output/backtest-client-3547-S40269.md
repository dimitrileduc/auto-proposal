# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S40269
- **Date commande** : 2025-11-12 11:39:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 17,831 input + 35,589 output = 53,420 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 11 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score équilibré global |

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
| **wMAPE** | 6.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 6.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF1194] GF VIN FINES HERBES WECK 330ML | 150 | 160 | 10.0 | 6.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - LLM: 150u vs Médiane: 145u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 150u (confidence: medium)
- 📊 **Baseline N-1**: 152u
- 📊 **Médiane**: 145u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 10u (6.3%)
- 📉 **Erreur Médiane**: 15u (9.4%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec un cycle long (70 à 90 jours) et une récurrence observée en fin d'année (novembre/décembre)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative des volumes par commande (+110% passant de 75u à ~155u)
- **Outliers détectés**: 290u, 16u

**🧠 Raisonnement LLM:**
L'analyse identifie une transition structurelle du volume par commande : le client est passé d'un standard de 75u en 2023 à des commandes de fond de ~150u en 2024/2025 (160u en mai 24, 145u en sept 24, 160u en août 25). La dernière commande date du 25 août 2025, soit il y a 78 jours. L'historique N-1 (2023) montre une commande le 13 novembre, ce qui correspond exactement à la fenêtre actuelle. Compte tenu de l'épuisement probable du stock après 11 semaines d'inactivité et de la saisonnalité de fin d'année, une commande de réapprovisionnement unique de 150u est prévue dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 08:28:00: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:21:49: 145u
- 2024-06-12 06:00:48: 290u
- 2024-06-12 06:00:48: 16u
- 2024-05-27 07:37:32: 160u
- 2024-04-17 06:40:51: 64u
- 2024-03-28 08:01:49: 64u
- 2024-03-18 14:12:55: 75u
- 2024-02-01 14:41:32: 75u
- 2023-12-07 14:03:11: 75u
- 2023-11-13 14:18:34: 75u

**✅ Quantité LLM**: 150u (confidence: medium)
**📊 Quantité Réelle**: 160u

</details>




---

## False Positives (10)

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
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 200 | Stock prédit: 29.5u (4j restants) → prédit 200u mais non commandé |
| [PF1195] GF VIN ANCIENNE WECK 330ML | 320 | Stock prédit: 18.0u (2j restants) → prédit 320u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: -2.1u (0j restants) → prédit 200u mais non commandé |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 125 | Stock prédit: -76.3u (-29j restants) → prédit 125u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Stock prédit: -49.4u (-9j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 200 | Stock prédit: -2.1u (0j restants) → prédit 200u mais non commandé |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 200 | Stock prédit: -2.1u (0j restants) → prédit 200u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 200 | Stock prédit: -2.1u (0j restants) → prédit 200u mais non commandé |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 200 | Stock prédit: -2.1u (0j restants) → prédit 200u mais non commandé |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Stock prédit: 0.8u (2j restants) → prédit 25u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T19:55:50.809Z*
