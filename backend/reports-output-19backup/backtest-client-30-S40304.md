# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S40304
- **Date commande** : 2025-11-13 10:07:30
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 24,191 input + 19,328 output = 43,519 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.0% | 20 produits prédits, 2 corrects |
| **Rappel** | 66.7% | 3 produits réels, 2 détectés |
| **F1-Score** | 17.4% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 37 jours observé en 2025, cycle plus court historiquement
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -80% volume vs N-1
- **Outliers détectés**: 4u, 5u

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement significatif de la consommation en 2025 avec un cycle de commande étendu à environ 37-40 jours. La dernière commande datant du 2 octobre, le seuil de réapprovisionnement arrive à échéance à la mi-novembre. Une commande d'une unité est donc prévue d'ici le 12 décembre.

</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 35 à 40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un intervalle régulier entre les commandes d'environ 37-38 jours (ex: 26 août au 02 octobre). La dernière commande ayant eu lieu le 02 octobre 2025, la prochaine commande était théoriquement prévue autour du 08 novembre 2025. Au 12 novembre 2025, le produit est donc en attente de réapprovisionnement imminent. La quantité standard par commande est de 1 unité (les deux lignes du 02 octobre sont assimilées à un seul événement de commande).

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 13:11:26: 1u
- 2025-10-02 13:10:20: 1u
- 2025-08-26 09:02:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 07:58:24: 3u
- 2024-10-24 13:24:00: 2u
- 2024-10-11 06:31:27: 1u
- 2024-09-30 06:51:46: 1u
- 2024-09-24 13:15:25: 1u
- 2024-09-12 06:23:22: 2u
- 2024-08-29 06:19:36: 4u
- 2024-08-23 08:30:23: 1u
- 2024-08-19 06:01:21: 1u
- 2024-08-05 06:18:28: 5u
- 2024-07-10 11:35:11: 3u
- 2024-07-04 07:31:57: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 13:11:26: 1u
- 2025-10-02 13:10:20: 1u
- 2025-08-26 09:02:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:51:46: 1u
- 2024-08-23 08:30:23: 1u
- 2024-03-28 11:30:09: 1u
- 2024-03-21 09:42:04: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (18)

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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: -1.1u (-20j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 8 | Stock prédit: -8.0u (-20j restants) → prédit 8u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 5 | Stock prédit: -5.0u (-20j restants) → prédit 5u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 8 | Stock prédit: -9.0u (-20j restants) → prédit 8u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 8 | Stock prédit: -4.0u (-20j restants) → prédit 8u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 6 | Stock prédit: -3.0u (-20j restants) → prédit 6u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 8 | Stock prédit: -4.0u (-20j restants) → prédit 8u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -6.9u (-67j restants) → prédit 2u mais non commandé |


---

## False Negatives (1)

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
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | En rupture (-20j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |


---

*Rapport généré automatiquement le 2025-12-18T21:31:57.286Z*
