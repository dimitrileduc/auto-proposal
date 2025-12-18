# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S39546
- **Date commande** : 2025-10-03 12:32:05
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 10,311 input + 21,185 output = 31,496 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 6 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
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
| **MAE** | 4.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 3.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 3.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 111 | 110 | 1.0 | 0.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 135 | 124 | 11.0 | 8.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 126 | 125 | 1.0 | 0.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML</strong> - LLM: 111u vs Médiane: 216u (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 111u (confidence: low)
- 📊 **Baseline N-1**: 111u
- 📊 **Médiane**: 216u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 1u (0.9%)
- 📉 **Erreur Médiane**: 106u (96.4%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long identifié (estimé à 8 semaines / 56 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (fondée sur une seule observation)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est limitée par un historique ne contenant qu'une seule commande de 111 unités le 14/08/2025. Nous avons atteint aujourd'hui (02/10) un délai de 49 jours (7 semaines pleines) sans réapprovisionnement. Dans un contexte B2B agroalimentaire, ce type de produit de niche (Dressing spécialisé) suit souvent des cycles de 2 mois ou des réapprovisionnements par unité de conditionnement fixe. En projetant un cycle de 8 semaines, une commande de réapprovisionnement est fortement probable durant la fenêtre des 30 prochains jours (aux alentours du 09/10). La quantité recommandée de 111u correspond au volume de base observé, faute d'historique de consommation permettant de calculer un écoulement précis.

</details>


<details>
<summary><strong>2. [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML</strong> - LLM: 135u vs Médiane: 350u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 135u (confidence: low)
- 📊 **Baseline N-1**: 135u
- 📊 **Médiane**: 350u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 11u (8.9%)
- 📉 **Erreur Médiane**: 226u (182.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inconnu ou cycle long (donnée unique)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (donnée historique unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique extrêmement limité avec une seule commande enregistrée le 14/08/2025 pour 135 unités. ÉTAPE 1 : Aucune anomalie n'est détectable avec un seul point. ÉTAPE 2 : Absence de données N-1 pour confirmer une saisonnalité. ÉTAPE 3 : Impossible de dégager une tendance, mais l'écart de 49 jours (7 semaines) depuis la dernière commande suggère l'entrée dans une fenêtre de réapprovisionnement probable (cycle bimestriel ou fin de stock). ÉTAPE 4 : En l'absence de pattern précis, nous reconduisons le volume de la dernière commande unique comme base de référence pour la prochaine commande prévue en octobre. La confiance est faible en raison du manque de données représentatives.

</details>


<details>
<summary><strong>3. [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML</strong> - LLM: 126u vs Médiane: 162u (Réel: 125u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 126u (confidence: low)
- 📊 **Baseline N-1**: 126u
- 📊 **Médiane**: 162u
- ✅ **Réel commandé**: 125u
- 📉 **Erreur LLM**: 1u (0.8%)
- 📉 **Erreur Médiane**: 37u (29.6%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée unique le 14/08, cycle estimé > 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable sur point unique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 126 unités datant du 14/08/2025. Un intervalle de 49 jours s'est écoulé depuis cette date, suggérant un cycle de réapprovisionnement long (bimestriel) ou irrégulier. Dans un contexte B2B, l'absence de commande depuis 7 semaines rend une commande de réapprovisionnement très probable au cours des 30 prochains jours (octobre). En l'absence de données N-1 pour confirmer une baisse saisonnière après l'été, nous nous basons sur le volume de la dernière commande comme référence (126u). Le niveau de confiance est faible car le pattern de consommation n'est pas encore statistiquement établi.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 111u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 111u (confidence: low)
**📊 Quantité Réelle**: 110u

</details>


<details>
<summary><strong>2. [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 135u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 135u (confidence: low)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>3. [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 126u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 126u (confidence: low)
**📊 Quantité Réelle**: 125u

</details>




---

## False Positives (3)

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
| [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML | 20 | Stock prédit: -319.6u (-45j restants) → prédit 20u mais non commandé |
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 118 | Stock prédit: -209.5u (-30j restants) → prédit 118u mais non commandé |
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 141 | Stock prédit: -265.0u (-31j restants) → prédit 141u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T18:56:01.641Z*
