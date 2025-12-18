# Rapport Backtest - Client La fermette

## Contexte

- **Client** : La fermette (ID: 9942)
- **Commande réelle** : S40013
- **Date commande** : 2025-10-30 07:17:13
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 30,474 input + 45,413 output = 75,887 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.9% | 29 produits prédits, 11 corrects |
| **Rappel** | 42.3% | 26 produits réels, 11 détectés |
| **F1-Score** | 40.0% | Score équilibré global |

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
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 40.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -41.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (11)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0033] MF Tarti Poivron chilli 250g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (14 jours) identifié initialement, jour de commande : lundi
- **Saisonnalité**: none
- **Tendance**: Stable en volume (1u) mais rupture de fréquence observée (36 jours d'inactivité)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible mais régulière de 1 unité avec un intervalle de 14 jours en septembre. Bien que le client n'ait pas passé commande depuis 36 jours (sautant potentiellement deux cycles), la prochaine date théorique basée sur ce rythme bimensuel (22/09 + 3 cycles de 14j = 03/11) tombe dans la fenêtre des 30 prochains jours. En l'absence de données indiquant un arrêt définitif du produit, on maintient la recommandation d'une unité pour la prochaine commande. La confiance est faible car l'historique est très court et le cycle habituel a été rompu récemment.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel identifié (14 jours) le lundi, actuellement en retard de cycle
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible mais régulière de 1 unité tous les 14 jours (jours de commande : lundis). Cependant, aucune commande n'a été enregistrée depuis le 22/09/2025, soit un intervalle actuel de 37 jours. Bien que le cycle habituel soit rompu, il est probable qu'une commande de réapprovisionnement (1u) soit passée dans les 30 prochains jours pour reconstituer le stock de sécurité ou répondre à une micro-demande. La confiance est faible car le client semble avoir ralenti ou stoppé ses commandes sur cette référence spécifique.

</details>


<details>
<summary><strong>3. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique isolée, aucune récurrence établie
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (51 jours sans mouvement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur une donnée unique (1 unité le 08/09/2025). Étape 1 : Le volume est trop faible pour isoler des anomalies. Étape 2 : Aucune donnée historique (N-1) ne permet de confirmer une saisonnalité, bien que le produit (limonade) s'y prête en été. Étape 3 : La tendance est à l'inactivité complète depuis 51 jours. Étape 4 : Étant donné que le délai depuis la dernière commande dépasse largement un cycle de rotation standard en B2B sans nouvel achat, il est fort probable que la commande de septembre ait été un test ou un achat ponctuel. En conséquence, aucune commande n'est prévue dans la fenêtre des 30 prochains jours.

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique de commande identifié
- **Saisonnalité**: none
- **Tendance**: Inexistante (nouvel article ou absence d'activité)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une absence totale de commandes tant sur la période N-1 que sur les trois derniers mois. En l'absence de données transactionnelles permettant d'identifier un cycle de réapprovisionnement, une tendance ou une base de consommation, il est impossible de prévoir une commande pour les 30 prochains jours. Par sécurité et sans signal de demande, la recommandation est fixée à 0.

</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle sporadique environ tous les 60 à 90 jours identifié en 2024
- **Saisonnalité**: weak
- **Tendance**: Inactif (aucune commande depuis plus de 12 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande constante de 1 unité par commande en 2024 avec un intervalle de 2 à 3 mois. Cependant, la dernière commande enregistrée remonte au 07/10/2024. Depuis cette date, aucune activité n'a été détectée sur ce produit pendant l'année 2025. Le cycle de commande habituel est donc rompu depuis plus d'un an, ce qui suggère un arrêt de consommation ou de référencement du produit par le client. En l'absence de signal de reprise récent, la probabilité d'une commande dans les 30 prochains jours est nulle.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle historique de 70-80 jours, mais rupture totale de commande depuis plus de 14 mois.
- **Saisonnalité**: weak
- **Tendance**: Inactif / Baisse totale (aucune commande en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une absence totale de commandes pour ce produit depuis le 5 août 2024 (soit plus de 14 mois d'inactivité). Bien qu'il y ait eu une commande en novembre 2023 (2u), le cycle habituel de 2-3 mois a été rompu tout au long de l'année 2025. En l'absence de reprise récente ou de signal de réactivation de la référence par le client, la probabilité d'une commande dans les 30 prochains jours est extrêmement faible. La prédiction est donc fixée à 0.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 1u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 1u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 2u
- 2023-11-07 07:48:10: 2u

**✅ Quantité LLM**: 0u (confidence: medium)
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
| [LB006] LB Brown (7,0%)  33CL | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.9u (-16j restants) → prédit 1u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 3 | Stock prédit: 0.4u (7j restants) → prédit 3u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Stock prédit: -1.0u (-50j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.1u (17j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.8u (-44j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.8u (-52j restants) → prédit 1u mais non commandé |


---

## False Negatives (15)

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
| [MF0014] MF Olives noires 500g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.9u (-55j) mais client a commandé 1u |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.2u (-16j) mais client a commandé 1u |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | En rupture (-61j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [MF0029] MF Tarti Datte chili 250g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0047] MF Mayonnaise 250ml | 1 | En rupture (-16j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [MF0051] MF Kidney Beans 500g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.2u (15j) mais client a commandé 1u |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.0u (-57j) mais client a commandé 1u |
| [VID0009] Consigne casier | 9 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 54 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T20:00:05.641Z*
