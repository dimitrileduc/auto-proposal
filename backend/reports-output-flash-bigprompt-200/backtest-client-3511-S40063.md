# Rapport Backtest - Client CARRY GERON SA

## Contexte

- **Client** : CARRY GERON SA (ID: 3511)
- **Commande réelle** : S40063
- **Date commande** : 2025-11-03 13:20:39
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 6,939 input + 1,235 output = 8,174 total


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
| **MAE** | 36.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 51.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 54.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0075] FILOU CHASSEUR  10 L | 94 | 44 | 50.0 | 113.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0078] FILOU CHASSEUR 5 L | 100 | 160 | 60.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 24 | 22 | 2.0 | 9.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 25 | 60 | 35.0 | 58.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 94u vs Médiane: 59u (Réel: 44u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 94u (confidence: high)
- 📊 **Baseline N-1**: 88u
- 📊 **Médiane**: 59u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 50u (113.6%)
- 📉 **Erreur Médiane**: 15u (34.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j) le lundi
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (+15-20% par mois récemment)
- **Outliers détectés**: 104u

**🧠 Raisonnement LLM:**
L'historique montre une fidélité stricte au lundi pour ce produit, avec un cycle mensuel. On observe une tendance haussière nette sur les trois derniers mois (52u -> 66u -> 88u), soit une croissance de 20-30% à chaque itération. Les valeurs de 104u en N-1 semblent être des doubles commandes ponctuelles ou des stocks de sécurité spécifiques non reproduits récemment. La ligne de base actuelle est de 88u (dernière commande). En appliquant une croissance modérée mais alignée sur la tendance récente pour la commande attendue le lundi suivant le dimanche 02/11, on projette une quantité de 94u.

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
- **Pattern temporel**: Mensuel (tous les 30 à 35 jours environ)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive vers 100u
- **Outliers détectés**: 160u, 120u, 20u, 30u

**🧠 Raisonnement LLM:**
L'analyse de l'historique récent (3 derniers mois) montre une stabilisation claire autour de 100 unités le premier lundi du mois (06/10, 11/08), avec une exception à 160 le 01/09 considérée comme un pic de rentrée. La prédiction étant demandée pour le dimanche 02/11, cela correspond à la veille du cycle habituel du premier lundi du mois de novembre. En appliquant la règle de gestion des jours hors cycle, la quantité prévue pour le cycle imminent du lundi 03/11 est de 100 unités, cohérente avec la baseline actuelle et la fréquence mensuelle observée sur 2 ans.

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
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 11-12u vers 24u)
- **Outliers détectés**: 22u

**🧠 Raisonnement LLM:**
L'historique montre une transition nette d'une base de 11u (majoritaire en 2024) vers une nouvelle base de 12u, puis 24u lors de la commande la plus récente (octobre 2025). Le client commande systématiquement le lundi selon un cycle mensuel. La date cible étant un dimanche, j'anticipe selon les règles la commande du lundi 03 novembre. La quantité de 24u enregistrée il y a 30 jours (6 octobre) semble être le nouveau palier de consommation ou un format de commande doublé (2x12u) devenu récurrent. En agroalimentaire B2B, la dernière valeur sur un cycle stable est le meilleur prédicteur du besoin immédiat.

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 25u vs Médiane: 30u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 35u (58.3%)
- 📉 **Erreur Médiane**: 30u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (30u vers 20u)
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
L'historique montre un pattern de commande mensuel très marqué, s'effectuant majoritairement le lundi (60% des cas). La date de prédiction étant un dimanche, nous anticipons la commande du lendemain (lundi 03/11). Le volume historique de référence était de 30u-40u en N-1, mais les données récentes de 2025 montrent un fléchissement (30u en septembre, 20u en août). Le pic de 60u en sept. 2024 est considéré comme un outlier car non reproduit cette année. On se base sur une moyenne pondérée des deux derniers mois pour stabiliser la tendance baissière, retenant 25u comme compromis entre la dernière commande (20u) et le volume récurrent précédent (30u).

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

**✅ Quantité LLM**: 94u (confidence: high)
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

**✅ Quantité LLM**: 25u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-18T11:15:29.510Z*
