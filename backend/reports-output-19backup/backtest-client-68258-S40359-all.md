# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 7,998 input + 4,044 output = 12,042 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 6 produits prédits, 2 corrects |
| **Rappel** | 25.0% | 8 produits réels, 2 détectés |
| **F1-Score** | 28.6% | Score équilibré global |

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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | 8 | 6.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 2u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 6u (75.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais avec une récurrence moyenne de ~21 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - quantité unitaire récente
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre des cycles variables mais une commande est survenue hier (12/11). Basé sur la moyenne historique (21 jours), la prochaine commande devrait tomber dans la fenêtre des 30 prochains jours (autour du 03/12). En excluant le pic de 6u, la moyenne stable suggère une quantité de 2u pour le prochain cycle.

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 15 à 23 jours (moyenne environ 18j)
- **Saisonnalité**: none
- **Tendance**: Hausse légère à 2u
- **Outliers détectés**: 5u, 4u

**🧠 Raisonnement LLM:**
L'historique montre une commande environ tous les 15-20 jours. La dernière commande datant du 17 octobre, le cycle indique un besoin imminent autour du 4-10 novembre, rendant une commande très probable avant le 13 décembre. La quantité de base de 2 unités est retenue après lissage des pics exceptionnels de septembre.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 6u
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 10:21:30: 2u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Stock prédit: 6.0u (30j restants) → prédit 4u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock prédit: 6.0u (28j restants) → prédit 3u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | Stock prédit: 4.0u (14j restants) → prédit 5u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 8 | Stock prédit: -1.8u (-4j restants) → prédit 8u mais non commandé |


---

## False Negatives (6)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock: 0.6u (9j restants) - filtré pour autre raison |
| [JOY02] JOY! Organic Strawberry Jam 370g | 10 | Stock: 4.0u (20j restants) - filtré pour autre raison |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock: 1.0u (9j restants) - filtré pour autre raison |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | En rupture (-4j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [JOY07] JOY! Organic Fig Jam 370g | 2 | Stock: 1.0u (12j restants) - filtré pour autre raison |
| [JOY08] JOY! Organic Raspberry Jam 370g | 5 | Stock: 4.0u (28j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:34:18.751Z*
