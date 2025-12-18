# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39743
- **Date commande** : 2025-10-16 11:39:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 19,271 input + 28,982 output = 48,253 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.2% | 18 produits prédits, 13 corrects |
| **Rappel** | 65.0% | 20 produits réels, 13 détectés |
| **F1-Score** | 68.4% | Score équilibré global |

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
| **MAE** | 1.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (13)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 0 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel récurrent d'environ 25 à 29 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse du volume par commande (3u) comparé à N-1 (4u)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier compris entre 22 et 29 jours. La dernière commande date du 24 septembre (il y a 21 jours). Sur la base de l'intervalle moyen de 25 jours, la prochaine commande est prévue entre le 19 et le 22 octobre, soit durant la fenêtre des 30 prochains jours. Bien que la moyenne historique haute soit de 4u, la tendance récente sur les deux dernières commandes normales est de 3u. L'outlier de 1u en août est ignoré car probablement lié à un ajustement ponctuel. Une commande unique de 3u est donc prévue.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.7u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel, cycle moyen de 27 à 29 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 4 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie majeure n'est détectée, les volumes oscillent de manière cohérente entre 2 et 5 unités. ÉTAPE 2 (Saisonnalité): Le produit montre une régularité tout au long de l'année avec un léger pic estival en N-1, mais la demande de fond reste stable à l'approche de l'automne/hiver. ÉTAPE 3 (Tendance): Le rythme de commande est très régulier avec un intervalle moyen de 28 jours (29 jours lors de la dernière commande). La tendance est stable. ÉTAPE 4 (Recommandation): La dernière commande a eu lieu le 24 septembre 2025. Avec un cycle de ~28 jours, la prochaine commande est prévue aux alentours du 22 octobre 2025, soit dans la fenêtre des 30 prochains jours. Sur la base du mode (valeur la plus fréquente) de l'historique, nous recommandons 4 unités pour cette unique commande à venir.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.7u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier variant entre 18 et 29 jours (médiane à 26 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 3.5u à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande moyen sur les 3 derniers mois est d'environ 26 jours. La dernière commande ayant été passée le 24 septembre 2025, la prochaine est statistiquement attendue autour du 20 octobre 2025, ce qui se situe bien dans la fenêtre de prédiction des 30 prochains jours. Les volumes historiques sont très stables, oscillant majoritairement entre 3u et 4u. Compte tenu de la stabilité de la demande de fond et de l'historique récent (4u en août), une commande de 4 unités est préconisée pour la prochaine échéance.

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 25 à 30 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u avec une légère hausse par rapport à N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier n'a été identifié, les volumes fluctuant naturellement entre 1u et 3u. Étape 2 : La saisonnalité est jugée faible ; bien que l'historique N-1 s'arrête en septembre, la dynamique de 2025 montre une activité régulière en fin de trimestre. Étape 3 : Les intervalles récents (22 et 29 jours) confirment un besoin récurrent environ une fois par mois. Étape 4 : La dernière commande datant du 24 septembre, le cycle suggère une prochaine commande aux alentours du 20-25 octobre, soit dans la fenêtre des 30 jours. Le volume récent s'est stabilisé à 2u.

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 16 et 35 jours, médiane observée autour de 30-35 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Pas d'outliers identifiés, les volumes sont constants (4-5u).
ÉTAPE 2 : Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par prudence.
ÉTAPE 3 : La tendance de volume est stable (4u sur les deux dernières commandes). Le rythme est fluctuant mais montre une récurrence approximative de 30 jours.
ÉTAPE 4 : La dernière commande date du 2025-09-11. Au 2025-10-15, cela fait 34 jours sans commande. Le client se situe exactement dans sa fenêtre habituelle de réapprovisionnement (35 jours d'écart constatés précédemment). Une commande est donc imminente dans les prochains jours. La quantité recommandée est de 4 unités, correspondant au volume stable des dernières livraisons.

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier entre 16 et 35 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 4 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Aucune anomalie détectée sur les volumes qui oscillent entre 4 et 5 unités. ÉTAPE 2 : Pas d'historique N-1 disponible, mais l'impact saisonnier semble faible sur ce volume de fond de rayon. ÉTAPE 3 : La tendance est très stable avec une moyenne de 4.33 unités par commande. ÉTAPE 4 : L'intervalle depuis la dernière commande (11/09) est de 34 jours, ce qui est supérieur à l'intervalle moyen constaté sur les deux derniers cycles (25.5 jours). Une commande de réapprovisionnement est donc attendue très prochainement dans la fenêtre des 30 jours. On recommande 4 unités pour s'aligner sur les deux dernières commandes récentes.

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 0u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier et sporadique (longue période d'inactivité de 14 mois identifiée entre juin 2024 et août 2025)
- **Saisonnalité**: none
- **Tendance**: Stagnation à très faible rotation (une seule commande sur l'année 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique révèle un produit à très faible rotation. Après une interruption totale de 14 mois, une commande isolée de 2 unités a été enregistrée le 04/08/2025. Depuis cette date, 72 jours se sont écoulés sans réapprovisionnement, ce qui dépasse le cycle moyen observé lors de la période d'activité de 2024 (environ 42 jours). En l'absence de motif de commande saisonnier récurrent dans les données historiques pour la période octobre/novembre et compte tenu de la reprise non confirmée du cycle de vente, il est hautement probable qu'aucune commande n'ait lieu dans les 30 prochains jours.

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 0u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique / Slow Mover (commandes très espacées sans rythme fixe)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4 commandes en S1-2024, seulement 1 commande en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un produit à très faible rotation. Après une période d'activité modérée au premier semestre 2024, le produit a disparu pendant plus de 13 mois avant une unique commande de 2 unités en août 2025. Aucun historique ne mentionne de commandes durant la période d'octobre ou novembre l'année précédente (N-1), suggérant que le produit ne fait pas l'objet d'un besoin saisonnier en fin d'année. Avec un délai de 72 jours depuis la dernière commande et une tendance annuelle en forte baisse, la probabilité d'une commande dans les 30 prochains jours est jugée insuffisante pour recommander un réapprovisionnement.

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 0u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec de longs intervalles (22j à 400j+)
- **Saisonnalité**: weak
- **Tendance**: Instable/Sporadique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation extrêmement erratique. 1/ Aucun outlier n'est à signaler, les quantités étant stables entre 1 et 3 unités. 2/ L'historique N-1 est inexistant pour le dernier trimestre, ne permettant pas de valider une saisonnalité de fin d'année. 3/ La tendance est instable : le produit a connu une interruption totale de plus d'un an avant une commande isolée en août 2025. 4/ Au 15 octobre, il s'est déjà écoulé 72 jours depuis la dernière commande. Si un cycle mensuel ou bimestriel existait, une commande aurait dû apparaître en septembre ou début octobre. Compte tenu de ce silence radio prolongé et de l'absence de pattern prédictible, aucune commande n'est anticipée pour les 30 prochains jours.

</details>


<details>
<summary><strong>10. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 0u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 3.28u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec un cycle moyen de 35 à 45 jours en période active
- **Saisonnalité**: none
- **Tendance**: Stagnante / Inactive (Gap de 85 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que le client n'a pas passé de commande pour ce produit depuis le 22 juillet 2025, soit une période d'inactivité de 85 jours. Cela excède largement l'intervalle maximum observé historiquement (50 jours). De plus, l'historique de l'année précédente (N-1) ne montre aucune commande sur les mois d'octobre et novembre, suggérant une absence de besoin saisonnier sur cette période. La tendance actuelle indique soit un déréférencement implicite, soit une rotation extrêmement faible ne nécessitant pas de réapprovisionnement dans les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 1u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 2u
- 2025-08-26 07:12:09: 2u
- 2025-08-04 11:51:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-27 05:39:39: 2u
- 2024-05-08 09:59:31: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 07:46:41: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-08-05 08:15:52: 3u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (5)

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
| [LV161] LV Tartinade Mangue curry 190g | 4 | Stock prédit: -0.1u (0j restants) → prédit 4u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 0.3u (2j restants) → prédit 4u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Stock prédit: -0.4u (-4j restants) → prédit 3u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |


---

## False Negatives (7)

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
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: 0.5u (21j) mais client a commandé 2u |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: 0.5u (21j) mais client a commandé 2u |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: 0.5u (21j) mais client a commandé 2u |
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Stock suffisant: 2.5u (101j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 4 | LLM avait prédit 0 (pas de besoin) avec stock: -2.7u (-39j) mais client a commandé 4u |
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T19:57:51.514Z*
