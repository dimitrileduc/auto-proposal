# Rapport Backtest - Client SPAR GLABBEEK UNIVAN

## Contexte

- **Client** : SPAR GLABBEEK UNIVAN (ID: 39069)
- **Commande réelle** : S40292
- **Date commande** : 2025-11-12 13:28:54
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 5,771 input + 1,911 output = 7,682 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 83.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 44.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 3 mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 2-3 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et irrégulière (environ une commande par trimestre). On observe une corrélation temporelle avec l'année précédente (commande au 01/10/24 pour 3u). La dernière commande datant du 25 août (il y a ~11 semaines), le cycle de réapprovisionnement naturel de ~80 à 90 jours arrive à échéance en novembre. La baseline historique se situant entre 2 et 3 unités, nous prédisons la borne haute (3u) pour s'aligner sur le volume de la dernière commande et de la période équivalente N-1.

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittente à faible volume (cycle estimé ~30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à la hausse (moyenne mobile passant de 1-2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais avec une tendance à l'augmentation du volume unitaire (passant de 1u en 2024 à 3u lors de la dernière commande d'août 2025). L'absence de commande en septembre et octobre 2025 suggère un cycle de réapprovisionnement long. Étant donné que la dernière commande (3u) reflète le besoin actuel pour ce format 250ML et que nous sommes sur un mardi (jour habituel de commande pour ce client en N-1), la quantité de 3 unités est la plus probable pour couvrir la période à venir sans surstocker.

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittent (cycle de plusieurs mois, sporadique)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
La demande pour ce produit est extrêmement faible et intermittente. L'historique montre des commandes unitaires (1u) quasi systématiques ces 15 derniers mois, à l'exception d'une commande de 3u en octobre 2024. Aucune commande n'ayant été passée depuis fin août 2025, le besoin actuel correspond à un réapprovisionnement de confort ou de dépannage. Le volume le plus probable, compte tenu de la tendance b2b sur ce format Weck 250ml, est l'unité minimale constatée récemment.

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.15u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, historiquement les mardis
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u avec pic historique à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité sur le volume de 2 unités, qui représente 83% des commandes historiques. Bien qu'une commande de 3 unités ait été observée en octobre N-1, la dernière commande enregistrée (août 2025) confirme un maintien à 2 unités. Le produit présente une rotation lente avec de longs intervalles. La date de prédiction étant un mardi, jour statistiquement le plus probable pour ce client, une commande de 2 unités est la plus probable pour maintenir le stock sans sur-stockage.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 1u
- 2024-07-19 06:30:26: 2u
- 2024-06-25 06:23:12: 3u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 1u
- 2024-06-25 06:23:12: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 2u
- 2024-06-25 06:23:12: 2u
- 2024-04-16 12:50:41: 2u
- 2024-03-19 15:36:24: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (2)

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
| [JF037] JF BBQ SQUEEZE 300ML | 2 | Stock prédit: -0.7u (-30j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Stock prédit: -2.2u (-52j restants) → prédit 3u mais non commandé |


---

## False Negatives (1)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Stock suffisant: 1.5u (79j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:41:37.599Z*
