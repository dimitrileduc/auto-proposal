# Rapport Backtest - Client BELICIOUS

## Contexte

- **Client** : BELICIOUS (ID: 33756)
- **Commande réelle** : S39994
- **Date commande** : 2025-10-29 13:48:17
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 19,225 input + 3,885 output = 23,110 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.8% | 26 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 47.1% | Score équilibré global |

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
| **MAE** | 4.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 102.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 131.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (8)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 6 | 4.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 10 | 2 | 8.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 8 | 6.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0055] MF Noix de cajou - Curry 133g | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0012] MF Olives Mix 500g | 3 | 8 | 5.0 | 62.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 4u (66.7%)
- 📉 **Erreur Médiane**: 4u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée unique (cycle indéterminé)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u (point unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 2 unités enregistrée le lundi 22 septembre 2025. En l'absence de données N-1 ou de récurrence établie, la stratégie la plus précise consiste à projeter la dernière valeur observée. Le changement de jour (mardi au lieu de lundi) n'est pas significatif pour un produit de ce type (Mayonnaise Truffes) qui ne présente pas de caractère ultra-frais quotidien. On maintient le volume de fond de 2 unités.

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 10u vs Médiane: 8u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: high)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 8u (400.0%)
- 📉 **Erreur Médiane**: 6u (300.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (8u -> 10u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel très marqué, centré autour du 22 du mois lors des deux derniers mois (22/08 et 22/09). La quantité est passée de 8u à 10u entre août et septembre, confirmant une dynamique de croissance par rapport à N-1 (où le volume était de 4u à 8u). Bien que la date de prédiction soit le 28 octobre (soit 6 jours après le 22), le client commande par cycles de ~30 jours. La commande du 22 septembre étant de 10u, et en l'absence de commande entre le 22 septembre et aujourd'hui, la prochaine commande attendue pour fin octobre se stabilise à 10u pour soutenir la tendance récente.

</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (~15-30j)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -80%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique N-1 sur la même période montrait des volumes entre 2u et 5u, mais la dynamique récente de 2025 est très faible avec une seule commande de 1u enregistrée en août. Il y a une rupture de tendance par rapport à l'année précédente (moyenne N-1 de 4.6u vs 1u récent). Bien que le mardi soit un jour cohérent avec l'historique, la faible activité récente sur cette référence biologique suggère une rotation lente. On privilégie la dernière valeur observée (1u) pour minimiser le risque de surstockage sur un produit en perte de vitesse, tout en respectant la règle de ne pas prédire 0 un jour ouvré cohérent avec le cycle historique du client (mardi).-80% de baisse par rapport à N-1 période équivalente (2u). non-calcul de moyenne hybride car la tendance récente est trop éloignée de l'historique lointain (2024). Précision visée : 1u pour suivre le rythme actuel de consommation B2B du produit TVF001 mme si le volume N-1 était plus élevé (2u). Le volume est donc réduit au plancher de sécurité de 1u car le produit est toujours actif mais circule lentement (dernier point en août). La demande pour ce mardi 28 est calée sur cette tendance de fond minimale constatée en août 2025 (1u). Le volume recommandé est 1u.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:23:29: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:23:29: 10u
- 2025-08-22 12:20:23: 8u
- 2025-08-06 11:16:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:29:22: 8u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u

**✅ Quantité LLM**: 10u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 11:16:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 12:48:10: 2u
- 2024-10-11 06:29:22: 5u
- 2024-09-26 06:23:33: 6u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

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
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 0.9u (27j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: 0.4u (8j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Stock prédit: -0.7u (-14j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 3 | Stock prédit: -0.8u (-7j restants) → prédit 3u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Stock prédit: 0.3u (4j restants) → prédit 3u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Stock prédit: -1.2u (-13j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 12 | Stock prédit: 3.0u (11j restants) → prédit 12u mais non commandé |
| [MF0014] MF Olives noires 500g | 4 | Stock prédit: 1.3u (12j restants) → prédit 4u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 3 | Stock prédit: 1.8u (19j restants) → prédit 3u mais non commandé |
| [MF0052] MF Pois chiches  500g | 7 | Stock prédit: 2.1u (10j restants) → prédit 7u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 8 | Stock prédit: 2.9u (19j restants) → prédit 8u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 4 | Stock prédit: 1.8u (14j restants) → prédit 4u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 8 | Stock prédit: 2.5u (15j restants) → prédit 8u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 6 | Stock prédit: 1.3u (9j restants) → prédit 6u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -3.0u (-49j restants) → prédit 3u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.4u (-18j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 4 | Stock prédit: -3.4u (-41j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:15:07.728Z*
