# Rapport Backtest - Client CARRY GERON SA

## Contexte

- **Client** : CARRY GERON SA (ID: 3511)
- **Commande réelle** : S40063
- **Date commande** : 2025-11-03 13:20:39
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 4,219 input + 1,340 output = 5,559 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 34.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 49.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [PF0075] FILOU CHASSEUR  10 L | 88 | 44 | 44.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0078] FILOU CHASSEUR 5 L | 100 | 160 | 60.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 24 | 22 | 2.0 | 9.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 30 | 60 | 30.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 88u vs Médiane: 59u (Réel: 44u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 88u (confidence: high)
- 📊 **Baseline N-1**: 82u
- 📊 **Médiane**: 59u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 44u (100.0%)
- 📉 **Erreur Médiane**: 15u (34.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), principalement le lundi matin
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (+34% sur les 3 derniers mois)
- **Outliers détectés**: 104u

**🧠 Raisonnement LLM:**
Le client suit un cycle mensuel très régulier, commandant majoritairement le premier lundi du mois. Bien que l'historique N-1 oscillait entre 52 et 104 unités (multiples de 26/52), l'année 2025 montre une accélération constante de la consommation passant de 52u en août à 66u en septembre, puis 88u en octobre. La date de prédiction (dimanche 2 novembre) correspond exactement à la veille du premier lundi de novembre, s'inscrivant parfaitement dans le cycle de 27 à 35 jours observé. La quantité recommandée de 88u maintient le palier atteint le mois précédent pour s'aligner sur cette tendance haussière stabilisée sans toutefois atteindre les pics atypique de 104u de l'an dernier.

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 100u vs Médiane: 100u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 60u (37.5%)
- 📉 **Erreur Médiane**: 60u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel ~30j environ, principalement le premier lundi du mois
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive, passage d'une base 80u (2024) à 100u (2025)
- **Outliers détectés**: 120u, 20u, 160u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence mensuelle forte Calibrée sur le premier lundi du mois (08/01, 12/02, 11/08, 01/09, 06/10). En 2024, le volume standard était de 80u. Sur les 3 derniers mois, la base s'est stabilisée à 100u (le pic de 160u en septembre est un outlier lié à la rentrée/stockage). La commande du 02/11 (dimanche) correspond à l'anticipation de la commande du lundi 03/11. On maintient la tendance stable de 100u observée lors des dernières sessions normales.

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 24u vs Médiane: 24u (Réel: 22u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: high)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 22u
- 📉 **Erreur LLM**: 2u (9.1%)
- 📉 **Erreur Médiane**: 2u (9.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j), généralement le lundi matin.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +100% (passage de 11u/12u à 24u)
- **Outliers détectés**: 22u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ 30 à 35 jours. La dernière commande date du lundi 6 octobre (24 unités). La date de prédiction (2 novembre, dimanche) arrive exactement 27 jours après, se situant dans la fenêtre habituelle de réapprovisionnement mensuel pour ce client (souvent le premier lundi du mois). On observe une transition nette de la base historique de 11-12 unités vers un nouveau palier à 24 unités (doublage du volume par commande) confirmé par l'historique récent d'octobre. Étant donné la stabilité de ce nouveau rythme, la quantité de 24 unités est la plus probable pour maintenir le stock client sans rupture de tendance.

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 30u vs Médiane: 30u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 30u (50.0%)
- 📉 **Erreur Médiane**: 30u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30j) avec commande préférentielle le lundi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 40u à 25-30u
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
L'analyse montre une récurrence mensuelle quasi systématique. Le client commande généralement le lundi. Bien que la tendance récente (août/septembre) montre une baisse de volume (20u et 30u) par rapport à l'année précédente (moyenne 30-40u), l'absence de commande en octobre suggère un besoin de réapprovisionnement imminent en novembre. Le pic de 60u en septembre N-1 semble isolé. Nous préconisons 30u pour s'aligner sur la dernière commande active et la moyenne basse historique, tout en compensant la période de stockage vide d'octobre.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:20:55: 88u
- 2025-09-01 09:35:44: 66u
- 2025-08-11 12:34:53: 52u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:19:05: 52u
- 2024-09-05 09:51:57: 104u
- 2024-07-03 11:28:09: 104u
- 2024-06-10 08:11:06: 104u
- 2024-05-14 14:52:20: 52u
- 2024-04-09 09:36:52: 104u
- 2024-03-12 13:12:16: 52u
- 2024-02-12 10:47:57: 52u
- 2024-01-08 10:51:07: 52u
- 2023-12-11 15:03:36: 52u
- 2023-11-20 13:36:57: 52u

**✅ Quantité LLM**: 88u (confidence: high)
**📊 Quantité Réelle**: 44u

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:20:55: 100u
- 2025-09-01 09:35:44: 160u
- 2025-08-11 12:34:53: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:19:05: 40u
- 2024-09-05 09:51:57: 120u
- 2024-09-05 07:02:54: 20u
- 2024-07-03 11:28:09: 80u
- 2024-06-10 08:11:06: 80u
- 2024-05-14 14:52:20: 120u
- 2024-04-09 09:36:52: 80u
- 2024-02-12 10:48:44: 80u
- 2024-02-12 10:47:57: 30u
- 2024-01-08 10:51:07: 80u
- 2023-12-11 15:03:36: 80u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 160u

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:20:55: 24u
- 2025-09-01 09:35:44: 12u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 09:51:57: 11u
- 2024-07-03 11:28:09: 22u
- 2024-06-10 08:11:06: 11u
- 2024-05-14 14:52:20: 11u
- 2024-03-12 13:12:16: 11u
- 2024-02-12 10:47:57: 11u
- 2024-01-08 10:51:07: 11u
- 2023-11-20 13:36:57: 22u

**✅ Quantité LLM**: 24u (confidence: high)
**📊 Quantité Réelle**: 22u

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 09:35:44: 30u
- 2025-08-11 12:34:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 09:51:57: 60u
- 2024-07-03 11:28:09: 30u
- 2024-06-10 08:11:06: 30u
- 2024-05-14 14:52:20: 30u
- 2024-04-09 09:36:52: 50u
- 2024-03-12 13:12:16: 40u
- 2024-02-12 10:47:57: 30u
- 2024-01-08 10:51:07: 40u
- 2023-12-11 15:03:36: 40u
- 2023-11-20 13:36:57: 30u

**✅ Quantité LLM**: 30u (confidence: medium)
**📊 Quantité Réelle**: 60u

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
| [PF0096] FILOU MOUTARDE 3 KG | 45 | Stock prédit: 8.7u (10j restants) → prédit 45u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 6 | Stock prédit: -5.2u (-52j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:36:53.804Z*
