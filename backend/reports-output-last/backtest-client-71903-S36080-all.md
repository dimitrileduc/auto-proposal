# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 17,648 input + 29,715 output = 47,363 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.5% | 104 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 20.7% | Score équilibré global |

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
| **MAE** | 8.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (12)

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
| [RIT01] RITCHIE Orange - verre 275ml | 20 | 10 | 10.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | 20 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 5 | 10 | 5.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT05] RITCHIE Cola - verre 275ml | 15 | 20 | 5.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | 15 | 10.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | 10 | 5.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 5 | 6 | 1.0 | 16.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 5 | 2 | 3.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | 112 | 56.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: high)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 56u (50.0%)
- 📉 **Erreur Médiane**: 56u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées le samedi avec intervalles de minutes
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE (Clé)**: Toutes les commandes sont le SAMEDI (2025-04-12) avec 5 commandes en 77 secondes, indiquant un pattern de commande groupée hebdomadaire. La date prédite est DIMANCHE (hors cycle). **Règle Jour Hors Cycle appliquée**: Ne pas prédire 0, mais la quantité de la PROCHAINE commande (samedi suivant). **OUTLIER DETECTÉ**: 112u est 2× supérieur aux 4 autres commandes identiques de 56u → pic isolé, probablement erreur ou commande exceptionnelle non répétable. **DONNÉES LIMITÉES**: Seulement 1 jour d'historique. **SYNTHÈSE**: La valeur récurrente stable est 56u (4 occurrences). L'outlier 112u est pondéré à 0% car isolé et sans précédent. Pour le dimanche (hors cycle), je prédis la quantité de la prochaine commande logique (samedi prochain). **Règle d'Or B2B**: Privilégier la précision sur la prudence → 56u est le volume unitaire de commande le plus probable.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: All 5 orders occurred on same day (2025-04-12 Saturday) within 1-minute span, suggesting batch orders from one or multiple B2B clients
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
Pattern clair 56u répété 4 fois sur 5, outlier 112u isolé. Dimanche hors cycle B2B mais règle interdit 0. La prochaine commande probable reprendra le volume standard récurrent.

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular - 3 identical orders on same Saturday (2025-04-12) within 27 minutes interval
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Triple identical orders on same Saturday likely represent single logical order. Sunday prediction requires shifting to next business day (Monday). With no historical variation, 56u is the only observable pattern.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:25: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: high)
**📊 Quantité Réelle**: 112u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:05: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: medium)
**📊 Quantité Réelle**: 56u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u
- 2025-04-12 10:04:36: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: low)
**📊 Quantité Réelle**: 56u

</details>




---

## False Positives (92)

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
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: NaNu (NaNj restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: NaNu (NaNj restants) → prédit 72u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 4 | Stock prédit: NaNu (NaNj restants) → prédit 4u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [fsv14] Amandes grillées bio vrac 2,8kg | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [LEA09] LEAMO cola bio 330ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 15 | Stock prédit: NaNu (NaNj restants) → prédit 15u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Stock prédit: NaNu (NaNj restants) → prédit 120u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [DAM05] Dr. Antonio Martins eau de coco bio & fairtrade 330ml | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [SOWA01] SOWA citron menthe 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [KLAK01] KLAK Maté 330ml | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 18 | Stock prédit: NaNu (NaNj restants) → prédit 18u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 26 | Stock prédit: NaNu (NaNj restants) → prédit 26u mais non commandé |
| [BUD02] BUDDY bio functional & energy drink citorn & gingembre - 250ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Stock prédit: NaNu (NaNj restants) → prédit 60u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Stock prédit: NaNu (NaNj restants) → prédit 90u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 180 | Stock prédit: NaNu (NaNj restants) → prédit 180u mais non commandé |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 40 | Stock prédit: NaNu (NaNj restants) → prédit 40u mais non commandé |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 40 | Stock prédit: NaNu (NaNj restants) → prédit 40u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Stock prédit: NaNu (NaNj restants) → prédit 40u mais non commandé |
| Palette EURO | 333 | Stock prédit: NaNu (NaNj restants) → prédit 333u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 48 | Stock prédit: NaNu (NaNj restants) → prédit 48u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 18 | Stock prédit: NaNu (NaNj restants) → prédit 18u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Stock prédit: NaNu (NaNj restants) → prédit 15u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 196 | Stock prédit: NaNu (NaNj restants) → prédit 196u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 23 | Stock prédit: NaNu (NaNj restants) → prédit 23u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 203 | Stock prédit: NaNu (NaNj restants) → prédit 203u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 46 | Stock prédit: NaNu (NaNj restants) → prédit 46u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [JOY02] JOY! Confiture bio à la fraise 370g | 196 | Stock prédit: NaNu (NaNj restants) → prédit 196u mais non commandé |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 199 | Stock prédit: NaNu (NaNj restants) → prédit 199u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 257 | Stock prédit: NaNu (NaNj restants) → prédit 257u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 48 | Stock prédit: NaNu (NaNj restants) → prédit 48u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 12 | Stock prédit: NaNu (NaNj restants) → prédit 12u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 12 | Stock prédit: NaNu (NaNj restants) → prédit 12u mais non commandé |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Stock prédit: NaNu (NaNj restants) → prédit 200u mais non commandé |
| [JOY07] JOY! Confiture bio à la figue 370g | 281 | Stock prédit: NaNu (NaNj restants) → prédit 281u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: NaNu (NaNj restants) → prédit 64u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: NaNu (NaNj restants) → prédit 64u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:08:35.587Z*
