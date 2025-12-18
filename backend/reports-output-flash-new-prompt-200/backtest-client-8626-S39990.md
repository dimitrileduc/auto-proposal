# Rapport Backtest - Client Sweet Nature

## Contexte

- **Client** : Sweet Nature (ID: 8626)
- **Commande réelle** : S39990
- **Date commande** : 2025-10-29 11:26:47
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,669 input + 2,374 output = 10,043 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 28 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
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
| **MAE** | 0.86 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 85.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 85.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 85.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
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

## True Positives (14)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle / Très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): L'unique commande historique de 1u ne présente aucun caractère exceptionnel. ÉTAPE 2 (SAISONNALITÉ): Données insuffisantes (absence de N-1) pour confirmer une saisonnalité, bien que les tartinades puissent être sensibles à l'été. ÉTAPE 3 (TENDANCE): Aucune tendance visible avec un seul point de données il y a un mois. ÉTAPE 4 (RECOMMANDATION): Avec une seule vente de 1 unité enregistrée le mois dernier, le produit est en ultra-faible rotation. La recommandation minimale de 1 unité est préconisée pour maintenir une présence en stock tout en évitant le risque de péremption, en attendant de confirmer un rythme de vente régulier.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée, aucune récurrence hebdomadaire ou mensuelle détectée.
- **Saisonnalité**: none
- **Tendance**: Inexistante (trop peu de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a un mois (septembre). Aucun outlier n'est identifiable et la saisonnalité N-1 est inconnue. Sans tendance de croissance visible ni cycle de commande établi, la prudence impose de recommander l'unité minimale de 1 pour couvrir un éventuel besoin ponctuel tout en évitant le risque de sur-stockage sur un produit à faible rotation apparente. Le niveau de confiance est faible en raison de la pauvreté des données historiques.

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (produit sans historique)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (nouveau produit ou nouvelle référence)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique de commandes (N-1 et 3 derniers mois), la recommandation est basée sur un stock de sécurité minimal standard pour un format 190g en B2B. Une quantité de 6 unités correspond généralement au conditionnement standard (colisage) pour ce type de tartinade. Cette approche conservatrice vise à tester la rotation du produit sur le point de vente tout en limitant le risque de gâche ou de sur-stockage initial.

</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 6u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifié (données absentes)
- **Saisonnalité**: none
- **Tendance**: Inconnue - Nouveau produit ou absence d'historique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune donnée historique pour identifier des outliers. ÉTAPE 2: La saisonnalité ne peut être quantifiée sans historique N-1. ÉTAPE 3: Aucune tendance récente disponible. ÉTAPE 4: En l'absence totale de données, une approche conservatrice est adoptée. La quantité de 6 unités correspond généralement au conditionnement standard minimal (carton) pour ce type de tartinade en B2B, permettant une mise en rayon test sans risque de surstockage majeur pour un produit dont on ne connaît pas la rotation.

</details>


<details>
<summary><strong>5. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (produit nouveau ou inactif)
- **Saisonnalité**: none
- **Tendance**: Stagnation totale (0 ventes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 & 2 : L'absence totale d'historique (N-1 et 3 derniers mois) empêche toute identification d'outliers ou de cycles saisonniers. Étape 3 : La tendance est nulle. Étape 4 : Pour un produit référencé mais sans historique récent en B2B, la stratégie conservatrice impose une commande d'implantation minimale de sécurité (1 unité ou 1 colis standard) pour tester la réactivation de la demande sans risque de surstockage sur un produit périssable (Tartinade).

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:56:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:56:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (14)

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
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Stock prédit: -0.5u (-38j restants) → prédit 1u mais non commandé |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | Stock prédit: -0.5u (-38j restants) → prédit 1u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: -1.2u (-63j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.1u (18j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: -0.7u (-49j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: -0.7u (-49j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: -0.7u (-49j restants) → prédit 1u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-25j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:15:52.665Z*
