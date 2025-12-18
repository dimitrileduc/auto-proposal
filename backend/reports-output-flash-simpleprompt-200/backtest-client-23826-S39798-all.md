# Rapport Backtest - Client La ferme du vieux bure

## Contexte

- **Client** : La ferme du vieux bure (ID: 23826)
- **Commande réelle** : S39798
- **Date commande** : 2025-10-20 06:51:11
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 16,144 input + 5,238 output = 21,382 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.5% | 44 produits prédits, 9 corrects |
| **Rappel** | 75.0% | 12 produits réels, 9 détectés |
| **F1-Score** | 32.1% | Score équilibré global |

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
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (9)

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
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 3 semaines (21-25 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u en N-1 vers 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement stable mais faible, passant d'un palier de 2 unités en 2024 à un palier de 1 unité en 2025. Le rythme de commande observé durant les 3 derniers mois montre une récurrence toutes les 3 semaines environ (15/09, 25/08). La date de prédiction (19/10) correspond exactement à un intervalle de 34 jours depuis la dernière commande, suggérant qu'une commande de réapprovisionnement de fond de rayon est due. Étant donné la tendance récente de 2025, la quantité la plus probable est le maintien à 1 unité.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence sporadique (cycles de 40 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 4u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une diminution constante du volume par commande, passant d'une moyenne de 3u en 2024 à 1u systématique sur les deux dernières occurrences (août et septembre 2025). L'intervalle entre les commandes est long (environ 40 jours). La commande intervient environ 34 jours après la dernière saisie, ce qui s'inscrit dans le rythme de consommation actuel très lent de ce client pour cette référence. Étant donné la tendance baissière stabilisée à l'unité minimale, une commande de 1 unité est la plus probable.

</details>


<details>
<summary><strong>3. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier de 40 jours (cycle long)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique (1 unité tous les 35-40 jours). Il n'y a aucune preuve de croissance ou de variation saisonnière. Étant donné que la commande précédente date de 34 jours, le client entre dans sa fenêtre de réapprovisionnement habituelle pour maintenir son stock de sécurité minimal. La recommandation reste à 1 unité, reflétant une consommation de niche stable.

</details>


<details>
<summary><strong>4. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 20 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse vers stabilisation à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de réapprovisionnement régulier avec une stabilisation du volume à l'unité. Bien que la commande soit demandée pour un dimanche, le comportement historique suggère un besoin unitaire constant pour couvrir la période à venir sans signe de croissance de volume.

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très longue traîne, cycle irrégulier (> 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement sporadique avec seulement quatre points de données sur 18 mois. Le volume moyen par commande est très faible (1.5u). La dernière commande remontant à fin août (55 jours avant), et la tendance générale oscillant entre 1 et 2 unités, une recommandation de 1 unité est la plus probable pour maintenir le stock sans surstockage, compte tenu de la faible rotation du produit.

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable - Première commande
- **Saisonnalité**: none
- **Tendance**: Indéterminée - Données insuffisantes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'absence totale d'historique (N-1 et 3 derniers mois) empêche tout calcul statistique de tendance ou de saisonnalité. Pour un produit type boisson premium (RITCHIE Citron-Gingembre), la prédiction par défaut en l'absence de données ne peut excéder le minimum logistique ou l'unité de vente de base pour tester le marché. Il est recommandé de commander une quantité minimale (1 unité ou 1 carton selon le conditionnement standard non spécifié ici) pour initialiser le stock sans risque d'obsolescence.

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 3-4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais très faible (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique avec un intervalle de plusieurs mois entre chaque commande. Il n'y a aucun volume enregistré sur les trois derniers mois, suggérant soit une rotation très lente, soit un arrêt du référencement. Cependant, sur l'historique disponible, la moyenne se situe à 1.67 unités. Étant donné que les commandes passées oscillent entre 1 et 2 unités, et en l'absence de signal de croissance, la recommandation se porte sur 2 unités pour couvrir un éventuel besoin de réapprovisionnement de fond, bien que la probabilité d'une commande un dimanche sur ce profil de produit soit statistiquement faible.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-25 06:31:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 2u
- 2024-01-03 08:57:40: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-05 13:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 3u
- 2024-01-03 08:57:40: 4u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-05 13:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-25 06:31:24: 1u
- 2025-08-05 13:48:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:31:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 2u
- 2024-01-03 08:57:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 1u
- 2024-01-03 08:57:40: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (35)

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
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: 1.0u (30j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: 0.3u (18j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.3u (23j restants) → prédit 1u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Stock prédit: -0.0u (-1j restants) → prédit 2u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: -0.9u (-35j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Stock prédit: 0.2u (16j restants) → prédit 1u mais non commandé |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: -0.2u (-17j restants) → prédit 1u mais non commandé |
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Stock prédit: -0.9u (-53j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -0.8u (-33j restants) → prédit 2u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.0u (-4j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | Stock prédit: -0.9u (-55j restants) → prédit 1u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 1 | Stock prédit: -0.5u (-37j restants) → prédit 1u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | Stock prédit: -0.9u (-55j restants) → prédit 1u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |


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
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [fsv04] Amande nature bio vrac 2,8 kg | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:36:40.426Z*
