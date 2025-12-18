# Rapport Backtest - Client Kazidomi France

## Contexte

- **Client** : Kazidomi France (ID: 23356)
- **Commande réelle** : S40162
- **Date commande** : 2025-11-06 08:40:04
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 3,182 input + 1,045 output = 4,227 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 14 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 6.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 65.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 147.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 37.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

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
| [LV129] LV Tartinade Carotte Gingembre 190g | 22 | 3 | 19.0 | 633.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 6 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV135] LV Tartinade Basilico 190g | 21 | 21 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV137] LV Tartinade Lentilles Curry 190g | 11 | 16 | 5.0 | 31.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV040] LV Caprons apéritifs 240g | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 26 | 11.0 | 42.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 31 | 17 | 14.0 | 82.4% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 5 | 8 | 3.0 | 37.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 12 | 2 | 10.0 | 500.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 11 | 3 | 8.0 | 266.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 8 | 7 | 1.0 | 14.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 21 | 16 | 5.0 | 31.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 14 | 3 | 11.0 | 366.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 11u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 11u (confidence: low)
- 📊 **Baseline N-1**: 11u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 8u (266.7%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle / Unique (Jeudi)
- **Saisonnalité**: none
- **Tendance**: Stable sur une donnée unique (11u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante car il n'existe qu'une seule commande historique de 11 unités. Étape 2: Absence de données N-1 empêchant une analyse saisonnière fiable, bien que les tartinades puissent être corrélées aux apéritifs. Étape 3: Pas de tendance historique mesurable; le jour de commande actuel (mercredi) est cohérent avec le jour précédent (jeudi). Étape 4: En l'absence d'autres données, la recommandation se base sur l'unique volume historique connu (11u) pour couvrir la demande de fond sans sur-stocker, le niveau de confiance reste bas faute de profondeur historique.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 21u vs Médiane: 17u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 21u (confidence: medium)
- 📊 **Baseline N-1**: 14.5u
- 📊 **Médiane**: 17u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 5u (31.3%)
- 📉 **Erreur Médiane**: 1u (6.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 30 à 45 jours entre les commandes
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive -25% sur la demande de fond
- **Outliers détectés**: 72u, 78u, 96u, 54u, 102u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Exclusion des pics > 40u identifiés comme promotions ou stocks de lancement (moyenne corrigée à ~14.5u). ÉTAPE 2 (SAISONNALITÉ): L'historique N-1 montre une activité soutenue en novembre (42u le 07/11, 72u le 29/11), suggérant une hausse saisonnière pour les fêtes. ÉTAPE 3 (TENDANCE): La dernière commande de septembre (17u) montre une stabilisation de la demande de fond. ÉTAPE 4 (RECOMMANDATION): On prend la base de 14.5u ajustée par un coefficient saisonnier modéré pour anticiper novembre sans reproduire l'outlier de 42u de l'an dernier, soit environ 21u pour couvrir le mois.

</details>


<details>
<summary><strong>3. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 14u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 14u (confidence: low)
- 📊 **Baseline N-1**: 10.5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 11u (366.7%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec pics périodiques, historiquement mensuel ou bi-mensuel.
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive très marquée (2u en sept. 2025)
- **Outliers détectés**: 42u, 42u, 42u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Les commandes de 42u sont identifiées comme des pics promotionnels ou des stocks tampons hors norme. La base réelle (fond de rayon) oscille entre 7 et 13u. Étape 2 (Saisonnalité): En novembre (N-1), on observe une forte activité (30u et 36u), suggérant un pic pré-fêtes ou saisonnier pour ce type de tartinade. Étape 3 (Tendance): On note une chute drastique du volume récent (2u en septembre), indiquant soit un sur-stockage préalable, soit une perte de vitesse du produit. Étape 4 (Recommandation): Bien que la tendance récente soit faible, la saisonnalité historique de novembre impose une remontée de stock. On privilégie une approche conservatrice de 14u (moyenne haute du fond de rayon ajustée) pour couvrir le regain saisonnier sans risquer le sur-stockage massif constaté en N-1.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:03:15: 11u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 11u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 12:52:12: 17u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 13:39:17: 17u
- 2024-09-03 06:40:12: 14u
- 2024-08-14 13:57:42: 10u
- 2024-07-01 04:56:24: 102u
- 2024-05-28 08:10:45: 12u
- 2024-04-09 11:38:43: 54u
- 2024-03-22 09:31:43: 96u
- 2024-02-26 13:32:31: 4u
- 2024-02-19 09:42:57: 78u
- 2023-11-29 10:39:30: 72u
- 2023-11-07 13:59:38: 42u

**✅ Quantité LLM**: 21u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [LV139] LV Tartinade Paprika Chili 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 12:52:12: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 13:39:17: 11u
- 2024-09-03 06:40:12: 8u
- 2024-08-14 13:57:42: 7u
- 2024-07-01 04:56:24: 42u
- 2024-05-28 08:10:45: 13u
- 2024-04-09 11:38:43: 42u
- 2024-02-26 13:32:31: 13u
- 2024-02-19 09:42:57: 42u
- 2023-11-29 10:39:30: 36u
- 2023-11-07 13:59:38: 30u

**✅ Quantité LLM**: 14u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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

*Rapport généré automatiquement le 2025-12-18T12:14:53.201Z*
