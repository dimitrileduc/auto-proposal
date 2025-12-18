# Rapport Backtest - Client The Belgian Factory SRL

## Contexte

- **Client** : The Belgian Factory SRL (ID: 24343)
- **Commande réelle** : S39425
- **Date commande** : 2025-09-29 06:52:19
- **Date cutoff système** : 2025-09-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 7,742 input + 13,426 output = 21,168 total


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
| **MAE** | 45.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 90.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 132.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV189] LV Tartinade Houmous Type 380g | 32 | 80 | 48.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV217] LV Tartinade Basilic 380g | 64 | 21 | 43.0 | 204.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV189] LV Tartinade Houmous Type 380g</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 48u (60.0%)
- 📉 **Erreur Médiane**: 48u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec une reprise d'activité récente (cycle estimé de 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 32u après une période d'inactivité prolongée (sept-24 à août-25)
- **Outliers détectés**: 80u, 160u

**🧠 Raisonnement LLM:**
L'analyse montre que le produit a été réactivé en août 2025 après un an d'absence, avec deux commandes de 32u (64u au total sur 2 jours). En excluant les pics exceptionnels de 2024 (160u et 80u), la quantité standard par commande est de 32u. Puisque 38 jours se sont écoulés depuis la dernière commande (21 août), et que le cycle moyen observé lors des périodes actives est d'environ 30-40 jours, une commande est fortement probable dans les 30 prochains jours (début octobre). On préconise l'unité de commande standard de 32u.

</details>


<details>
<summary><strong>2. [LV217] LV Tartinade Basilic 380g</strong> - LLM: 64u vs Médiane: 32u (Réel: 21u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: medium)
- 📊 **Baseline N-1**: 64u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 43u (204.8%)
- 📉 **Erreur Médiane**: 11u (52.4%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 17 à 70 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 64u
- **Outliers détectés**: 160u

**🧠 Raisonnement LLM:**
Étape 1 : La commande de 160u de mai 2024 a été isolée comme un outlier promotionnel. La demande de fond se cristallise autour de 64u. Étape 2 : La saisonnalité est faible mais présente avec des commandes enregistrées en fin d'été/début d'automne en N-1 et N. Étape 3 : La tendance est stable avec un volume récurrent de 64u lors des deux dernières commandes significatives. Étape 4 : Le cycle moyen constaté varie fortement, mais le dernier intervalle comparable était de 69 jours. En date du 28/09/2025, 38 jours se sont écoulés depuis la dernière commande (21/08). En ajoutant la fenêtre de 30 jours (total 68 jours), on entre précisément dans la zone de réapprovisionnement habituelle pour maintenir le stock. Une commande de 64u est donc hautement probable d'ici fin octobre.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV189] LV Tartinade Houmous Type 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 14:18:28: 32u
- 2025-08-20 07:50:02: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 08:44:23: 32u
- 2024-07-05 09:45:10: 32u
- 2024-05-14 09:11:44: 160u
- 2024-04-30 09:00:52: 32u
- 2024-04-18 12:28:00: 32u
- 2024-02-28 16:55:44: 16u
- 2023-12-15 07:58:38: 80u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>2. [LV217] LV Tartinade Basilic 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 14:18:28: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 08:44:23: 64u
- 2024-07-05 09:45:10: 32u
- 2024-05-31 09:20:27: 80u
- 2024-05-14 09:11:44: 160u

**✅ Quantité LLM**: 64u (confidence: medium)
**📊 Quantité Réelle**: 21u

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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 4 | Stock prédit: 1.6u (25j restants) → prédit 4u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 32 | Stock prédit: -12.0u (-20j restants) → prédit 32u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T19:59:48.375Z*
