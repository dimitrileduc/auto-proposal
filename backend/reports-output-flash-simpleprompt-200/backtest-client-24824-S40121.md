# Rapport Backtest - Client KOCKARTZ Kockado GmbH (Filiale Eynatten)

## Contexte

- **Client** : KOCKARTZ Kockado GmbH (Filiale Eynatten) (ID: 24824)
- **Commande réelle** : S40121
- **Date commande** : 2025-11-04 14:43:19
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 2,730 input + 1,128 output = 3,858 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 2.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 83.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ 1 commande tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande très sporadique avec des volumes de commande très faibles (moyenne historique stable à ~2 unités). Il n’y a aucun cycle hebdomadaire ou mensuel identifiable, le client commandant par besoin ponctuel de réapprovisionnement de stock. La dernière commande datant d'août 2025 (2u), et sachant que les commandes historiques oscillent majoritairement entre 2u et 3u sans accélération de tendance, la quantité la plus probable pour la commande du 3 novembre (soit 3 mois après la précédente) est de 2 unités pour maintenir le fond de rayon habituel. La confiance est faible car le rythme est irrégulier et le volume unitaire est bas, rendant toute variation proportionnellement importante (MAPE). Aucun rattrapage n'est nécessaire car le délai écoulé correspond à l'intervalle moyen observé historiquement (80-90 jours). Aucun impact saisonnier notable n'est détecté sur novembre/décembre par rapport aux années précédentes pour cette référence spécifique de bio paprika chili en 190g (produit de niche). Nous restons sur la valeur modale de l'historique (2u). Les variations à 1u ou 3u observées en 2024 semblent être des ajustements mineurs du client plutôt que des tendances lourdes. En B2B, pour ce type de conditionnement, le client favorise généralement l'unité de carton standard qui semble être ici de 2 unités ou le multiple de son stock de sécurité habituel (2 unités). Ainsi, 2 est la prédiction la plus précise statistiquement sur l'ensemble du set de données fourni (moyenne arrondie à l'entier le plus fréquent). La date demandée (lundi) est neutre pour ce client qui commande sur différents jours de la semaine sans corrélation jour/quantité apparente. On exclut un effet rattrapage car nous sommes dans la fenêtre basse de la fréquence habituelle de rotation du produit (environ 4 à 6 fois par an). L'absence de commandes en septembre/octobre est cohérente avec les cycles passés, confirmant que le produit n'a pas besoin de volumes supérieurs à ce stade de l'année.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.71u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 2-3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande erratique à très faible rotation (moyenne de 1,85 unité par commande). L'absence de commande depuis août 2025 (environ 3 mois) suggère un besoin de réapprovisionnement imminent pour maintenir le stock de fond de rayon. La demande se concentre historiquement entre 1 et 3 unités sans saisonnalité marquée en fin d'année (2u en déc 2023). Le lundi est un jour cohérent avec les habitudes d'achat précédentes pour ce client. Une commande de 2 unités permet de couvrir la moyenne historique sans risque de surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.12u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable mais très faible fréquence (2u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande très lente et sporadique avec un volume de commande quasi constant de 2 unités par occurrence. Aucun pattern de jour fixe n'est identifié. La dernière commande remonte à août 2025 (il y a ~90 jours), ce qui indique un cycle de réapprovisionnement long. Bien que l'historique 2024 montre une légère activité en fin d'année, le volume unitaire reste ancré à 2u. La prédiction de 2u est la plus probable pour maintenir le stock sans sur-stockage.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 2u
- 2023-12-20 08:32:55: 2u
- 2023-12-12 14:35:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 1u
- 2023-12-12 14:35:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 2u
- 2023-12-20 08:32:55: 2u
- 2023-12-12 14:35:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (1)

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
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Stock prédit: 0.2u (3j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:41:17.440Z*
