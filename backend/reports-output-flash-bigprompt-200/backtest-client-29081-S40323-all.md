# Rapport Backtest - Client CRF MARKET EUPEN SHOPPING CENT ROTENBERG

## Contexte

- **Client** : CRF MARKET EUPEN SHOPPING CENT ROTENBERG (ID: 29081)
- **Commande réelle** : S40323
- **Date commande** : 2025-11-13 12:27:19
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 41
- **Tokens**: 61,734 input + 11,493 output = 73,227 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.0% | 40 produits prédits, 4 corrects |
| **Rappel** | 40.0% | 10 produits réels, 4 détectés |
| **F1-Score** | 16.0% | Score équilibré global |

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
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 83.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 82.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -83.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 7 | 6.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD011] LD Organic Kids Spread 180 g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 6u (85.7%)
- 📉 **Erreur Médiane**: 6u (85.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique s'intensifiant vers un cycle bi-mensuel ou mensuel
- **Saisonnalité**: none
- **Tendance**: Stable à 1u avec pics ponctuels à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond stable de 1 unité, avec des occurrences de 2 unités observées tant l'année dernière (mars/juin) que récemment (octobre). Le client a commandé il y a seulement 5 jours (vendredi 07/11). La demande pour ce mercredi 12/11 intervient très tôt après la dernière commande, suggérant soit un besoin de réapprovisionnement standard de 1u pour maintenir le stock, soit une commande d'anticipation. En l'absence de tendance haussière forte (la dernière commande était de 1u), la quantité la plus probable pour minimiser le MAPE est le mode statistique de 1u.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 5u (83.3%)
- 📉 **Erreur Médiane**: 5u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 3 à 6 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u en début 2024 vers 1u fin 2024/2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très espacé et irrégulier. Historiquement, les volumes sont passés de 2 unités au premier semestre 2024 à 1 unité lors des deux dernières occurrences (octobre 2024 et septembre 2025). La dernière commande datant d'il y a seulement deux mois (septembre 2025), la probabilité de réapprovisionnement est modérée mais la quantité la plus constante et probable dans cette phase de cycle est de 1 unité. Conformément aux règles, nous ne prédisons pas 0 car le produit est toujours actif dans le catalogue client.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 07:28:04: 1u
- 2025-10-17 06:37:14: 2u
- 2025-09-11 13:46:55: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 07:12:57: 1u
- 2024-10-03 13:46:06: 1u
- 2024-06-04 06:42:54: 2u
- 2024-05-06 07:15:31: 1u
- 2024-03-12 07:34:13: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:46:55: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:46:06: 1u
- 2024-06-04 06:42:54: 2u
- 2024-03-12 07:34:13: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (36)

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
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: 0.9u (28j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.7u (8j restants) → prédit 1u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Stock prédit: 0.8u (16j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.5u (26j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: 0.4u (15j restants) → prédit 2u mais non commandé |
| [CB001] CB Apple juice 25cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.3u (-12j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Stock prédit: -0.3u (-12j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -0.5u (-12j restants) → prédit 2u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.0u (4j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -1.4u (-57j restants) → prédit 2u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: 0.2u (24j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -0.6u (-37j restants) → prédit 1u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock prédit: 0.1u (13j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.1u (13j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-18j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -1.2u (-64j restants) → prédit 1u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Stock prédit: -0.3u (-30j restants) → prédit 1u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: -0.3u (-30j restants) → prédit 1u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Stock prédit: -0.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.8u (-53j restants) → prédit 1u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 2 | Stock prédit: -0.3u (-29j restants) → prédit 2u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.2u (25j restants) → prédit 1u mais non commandé |


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
| [DIS0012] Display Foodprint Karton LD | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 0.9u (36j restants > seuil 30j) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Stock suffisant: 0.9u (36j restants > seuil 30j) |
| [LD015] LD Onion Spread 180g | 4 | Stock suffisant: 0.9u (56j restants > seuil 30j) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Stock suffisant: 0.6u (34j restants > seuil 30j) |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:15:43.715Z*
