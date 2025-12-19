# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S40324
- **Date commande** : 2025-11-13 12:28:59
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 69
- **Tokens**: 42,479 input + 35,859 output = 78,338 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.3% | 29 produits prédits, 3 corrects |
| **Rappel** | 50.0% | 6 produits réels, 3 détectés |
| **F1-Score** | 17.1% | Score équilibré global |

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
| **MAE** | 16.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 83.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 83.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -83.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (3)

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
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 21 | 19.0 | 90.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 21 | 17.0 | 81.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 18 | 14.0 | 77.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 21u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 19u (90.5%)
- 📉 **Erreur Médiane**: 19u (90.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier de 21 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive à 1.5u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
La dernière commande remontant au 21 octobre (22 jours avant la date cible), le cycle moyen suggère un besoin imminent sous 8 à 15 jours. La tendance récente montre une stabilisation autour de 1 à 2 unités.

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 8u (Réel: 21u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 17u (81.0%)
- 📉 **Erreur Médiane**: 13u (61.9%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irregular variant entre 30 et 50 jours
- **Saisonnalité**: weak
- **Tendance**: Stable entre 3u et 5u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse des intervalles sur l'historique N-1 et récent montre une fréquence moyenne de commande tous les 35-40 jours. La dernière commande datant du 23 septembre, le stock est probablement épuisé à la mi-novembre. La quantité recommandée de 4 unités correspond à la moyenne stable hors pics exceptionnels observés précédemment.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 18u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 18u
- 📉 **Erreur LLM**: 14u (77.8%)
- 📉 **Erreur Médiane**: 14u (77.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité de commande mensuelle. La dernière commande datant du 9 septembre, le cycle normal de réapprovisionnement indique un besoin critique pour la période actuelle (novembre), justifiant la recommandation d'une quantité de base de 4 unités.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:08:52: 1u
- 2025-09-29 06:22:00: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 2u
- 2024-09-16 12:44:43: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 3u
- 2024-06-19 10:15:51: 3u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 21u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 10u
- 2025-08-22 06:53:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 3u
- 2024-07-11 06:44:28: 2u
- 2024-06-26 12:38:31: 1u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 2u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 21u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:35:00: 5u
- 2025-08-22 06:53:50: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 2u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 1u
- 2024-07-31 06:22:12: 4u
- 2024-06-26 12:38:31: 4u
- 2024-06-19 10:15:51: 2u
- 2024-05-31 12:44:08: 1u
- 2024-05-06 07:16:25: 4u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 18u

</details>




---

## False Positives (26)

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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.1u (17j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Stock prédit: -2.2u (-7j restants) → prédit 3u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: -0.9u (-7j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Stock prédit: 0.9u (11j restants) → prédit 2u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 2 | Stock prédit: 0.7u (7j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: 0.3u (7j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (6j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.9u (15j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -1.0u (-7j restants) → prédit 2u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Stock prédit: -0.4u (-5j restants) → prédit 2u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: 0.7u (19j restants) → prédit 1u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 0.5u (12j restants) → prédit 2u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -1.3u (-24j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -1.1u (-14j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 2 | Stock prédit: -0.4u (-16j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: -0.4u (-7j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 1.4u (39j restants > seuil 30j) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | En rupture (-7j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LD011] LD Organic Kids Spread 180 g | 4 | Stock suffisant: 1.6u (58j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T21:35:15.511Z*
