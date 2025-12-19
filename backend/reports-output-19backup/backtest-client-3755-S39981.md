# Rapport Backtest - Client BVBA DRINK & FOOD

## Contexte

- **Client** : BVBA DRINK & FOOD (ID: 3755)
- **Commande réelle** : S39981
- **Date commande** : 2025-10-29 07:28:14
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 5
- **Tokens**: 3,937 input + 3,436 output = 7,373 total


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 80u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle régulier d'environ 15 à 18 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 80u
- **Outliers détectés**: 160u

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande très stable d'environ 15 jours pour une quantité récurrente de 80 unités. La dernière commande datant du 14 octobre, la prochaine est statistiquement prévue autour du 29-31 octobre, ce qui se situe au début de la fenêtre des 30 prochains jours. Les pics historiques de 160u sont écartés car considérés comme des outliers.

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 28 à 30 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -20%
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une commande régulière environ toutes les 4 semaines. La dernière commande datant du 14 octobre, le prochain réapprovisionnement est prévu pour la mi-novembre, soit dans la fenêtre des 30 prochains jours. En excluant les pics de l'année précédente et en observant la moyenne récente, une commande de 2 unités est attendue.

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable entre 30 et 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1.5u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
La dernière commande enregistrée remonte au 25 août 2025, soit un intervalle de 64 jours sans achat. Historiquement, le client commande en moyenne toutes les 4 à 6 semaines. Bien qu'il n'ait pas passé commande fin octobre comme en N-1 (24/10/2024), le délai actuel dépasse largement son cycle moyen. Un réapprovisionnement est donc très probable dans les 30 prochains jours (novembre) pour reconstituer le stock de ce format 5L. On retient une quantité de 2 unités, correspondant au volume standard hors pics exceptionnels.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:43:12: 80u
- 2025-09-29 15:25:16: 80u
- 2025-09-11 08:18:04: 80u
- 2025-08-25 08:11:04: 80u
- 2025-07-31 05:42:22: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 80u
- 2024-09-24 07:11:41: 160u
- 2024-08-21 11:24:26: 80u
- 2024-08-13 06:35:30: 80u
- 2024-07-25 06:08:11: 80u
- 2024-06-12 13:04:35: 160u
- 2024-06-06 09:56:07: 80u
- 2024-05-27 08:24:25: 80u
- 2024-05-03 12:12:17: 80u
- 2024-04-22 11:43:15: 160u
- 2024-04-08 12:25:11: 80u
- 2024-03-20 08:07:07: 80u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:43:12: 1u
- 2025-09-16 05:58:23: 3u
- 2025-08-25 08:11:04: 3u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 2u
- 2024-09-24 07:11:41: 2u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 2u
- 2024-06-25 09:29:04: 4u
- 2024-06-12 13:04:35: 4u
- 2024-05-27 08:24:25: 2u
- 2024-05-03 12:12:17: 1u
- 2024-04-25 08:06:34: 3u
- 2024-03-20 08:07:07: 1u
- 2023-12-12 09:14:02: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 08:11:04: 1u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 09:57:51: 3u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 1u
- 2024-07-25 06:08:11: 2u
- 2024-06-12 13:04:35: 2u
- 2024-05-27 08:24:25: 2u
- 2024-04-25 08:06:34: 1u
- 2024-03-20 08:07:07: 1u
- 2024-02-05 07:49:45: 2u
- 2023-12-12 09:14:02: 2u
- 2023-12-07 06:46:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

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
| [PF0088] FILOU VOL AU VENT 800 GR | 1 | Stock prédit: 1.0u (30j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T21:32:48.684Z*
