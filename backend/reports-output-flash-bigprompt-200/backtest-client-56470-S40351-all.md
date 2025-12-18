# Rapport Backtest - Client Saccone, Cédric - La ferme au moulin

## Contexte

- **Client** : Saccone, Cédric - La ferme au moulin (ID: 56470)
- **Commande réelle** : S40351
- **Date commande** : 2025-11-13 13:55:48
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 13,329 input + 2,364 output = 15,693 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 12 produits prédits, 4 corrects |
| **Rappel** | 44.4% | 9 produits réels, 4 détectés |
| **F1-Score** | 38.1% | Score équilibré global |

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
| **MAE** | 1.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 87.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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
| [LV161] LV Tartinade Mangue curry 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 0 | 2.0 | 0.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 0 | 1.0 | 0.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec cycle mensuel/bimestriel
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement stable mais très sporadique (toujours 1 unité par commande). Les intervalles entre les commandes sont longs (30 à 60 jours). La dernière commande enregistrée date de mi-août 2025. Compte tenu du délai écoulé (environ 90 jours depuis la dernière commande), le besoin de réapprovisionnement pour ce produit à faible rotation est probable. En l'absence de toute variation de volume historique, la prédiction se maintient à l'unité standard de 1.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 0u
- 📉 **Erreur LLM**: 1u (Infinity%)
- 📉 **Erreur Médiane**: 1u (Infinity%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique long (30-45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une consommation extrêmement stable et faible (1 unité par commande) depuis plus d'un an (données 2024 et 2025). Bien que les intervalles de commande soient larges et irréguliers, le volume par commande ne dévie jamais de l'unité. Étant donné qu'il n'y a eu aucune commande enregistrée depuis août 2025, le stock est probablement écoulé ou en phase de renouvellement. Conformément aux guidelines B2B, nous prédisons la prochaine quantité de réapprovisionnement indépendamment du cycle hebdomadaire spécifique, soit 1 unité.

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle extrêmement sporadique (approx. 30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation avec une demande très ponctuelle. La valeur de 2u en septembre 2024 est considérée comme un outlier par rapport à la récurrence de 1u (66% des commandes). Bien que la date de prédiction soit un mercredi, le client ne présente pas de jour de commande rigide. Étant donné la stabilité de la quantité unitaire sur les points les plus récents et l'absence de tendance à la hausse, la prédiction se porte sur 1 unité pour la prochaine fenêtre de commande probable.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-09 06:25:50: 1u
- 2024-07-09 12:21:29: 1u
- 2024-06-21 06:27:18: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-06 10:05:50: 1u
- 2024-08-09 06:25:50: 1u
- 2024-07-09 12:21:29: 1u
- 2024-06-21 06:27:18: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 0u

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-06 10:05:50: 2u
- 2024-08-09 06:25:50: 1u
- 2024-06-21 06:27:18: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (8)

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
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: -0.6u (-31j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Stock prédit: -0.6u (-32j restants) → prédit 2u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.1u (12j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [DIS0011] Display Foodprint Karton LV | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV136] LV Tartinade Betterave 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV131] LV Tartinade Potiron 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:18:59.756Z*
