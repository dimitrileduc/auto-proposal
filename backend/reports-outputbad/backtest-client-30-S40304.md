# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S40304
- **Date commande** : 2025-11-13 10:07:30
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 12,778 input + 25,313 output = 38,091 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 8.8% | 34 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 16.2% | Score équilibré global |

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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadic - no clear weekly cycle identified. Commands occur on various weekdays (Mon, Tue, Wed, Thu, Fri). Recent data shows dramatic slowdown: 3 commands in 3 months vs. 12 commands in 4 months in N-1.
- **Saisonnalité**: weak
- **Tendance**: declining_significantly
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Product discontinuation pattern with 41-day order gap and collapse from 12 orders/4months to 3 orders/3months. Recent stable 1u residual orders override historical 2-5u peaks. Wednesday is non-habitual day, but rules prohibit 0 for non-cycle predictions. Next probable order (if any) would follow recent 1u pattern.

</details>


<details>
<summary><strong>2. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern épars et irrégulier (non hebdomadaire). Intervalles: 7j (1x), 37-38j (2x), 148j (1x), 330j (1x). Pas de saisonnalité détectable. Comportement typique d'un produit à faible rotation commandé ponctuellement à la demande.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit JF039 suit un pattern de commande irrégulier et épars sur 19 mois, sans jour habituel fixe mais avec des intervalles moyens de 37-38 jours. La date de prédiction (mercredi 2025-11-12), bien que n'étant pas un jour historique de commande, se situe dans la fenêtre temporelle attendue du prochain cycle. La double commande du 2025-10-02 (1u à 1min d'intervalle) est considérée comme un artefact non représentatif. La quantité stable et unique observée sur toute la période est de 1 unité. En agroalimentaire B2B, ce comportement correspond à un produit spécialisé à très faible rotation commandé ponctuellement. La prochaine commande probable sera donc de **1 unité**.

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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (31)

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
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 9 | Stock prédit: -9.0u (-20j restants) → prédit 9u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | Stock prédit: -6.0u (-20j restants) → prédit 6u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.6u (-14j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: -2.0u (-20j restants) → prédit 2u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 3 | Stock prédit: -3.0u (-20j restants) → prédit 3u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 4 | Stock prédit: -4.0u (-20j restants) → prédit 4u mais non commandé |
| [DIS0003] Display TVF bois | 3 | Stock prédit: -0.1u (-2j restants) → prédit 3u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: -6.9u (-67j restants) → prédit 1u mais non commandé |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 139 | Stock prédit: -55.4u (-27j restants) → prédit 139u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-17T16:26:24.798Z*
