# Rapport Backtest - Client AVEVE BV - WM Retail

## Contexte

- **Client** : AVEVE BV - WM Retail (ID: 18017)
- **Commande réelle** : S39724
- **Date commande** : 2025-10-14 13:40:13
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,051 input + 590 output = 3,641 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 125 | 125 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 125 | 125 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 125 | 125 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 125u vs Médiane: 438u (Réel: 125u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 125u
- **Baseline calculee**: 125u
- **Mediane historique**: 438u
- **Reel commande**: 125u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 313u (250.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 125u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13/08/2025, soit 61 jours. L'historique récent montre un cycle d'environ 86 jours (entre mai et août). 61 jours représentent 71% du cycle moyen, ce qui dépasse le seuil de précaution de 70%. Un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont stables à 125u. Bien que l'historique N-1 affiche des volumes plus élevés (750u), la tendance actuelle de 2025 montre une baisse significative et stabilisée. En suivant la règle de la médiane des commandes récentes et le respect de la tendance à la baisse, la quantité retenue est de 125u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,041 tokens
- **Output**: 201 tokens
- **Total**: 1,242 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 125u vs Médiane: 125u (Réel: 125u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 125u
- **Baseline calculee**: 125u
- **Mediane historique**: 125u
- **Reel commande**: 125u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 125u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit il y a 61 jours. L'historique montre une activité régulière à cette période l'année dernière (octobre 2024). Le cycle moyen est irrégulier mais le délai actuel dépasse largement les fréquences habituelles de réapprovisionnement. Il existe un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. La quantité récurrente sur les commandes récentes et une grande partie de l'historique N-1 est de 125 unités. Les volumes de 750u et 1500u sont considérés comme des pics exceptionnels (promotions ou stock initial). En suivant la règle de la médiane et de la prudence, la quantité de 125u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,044 tokens
- **Output**: 204 tokens
- **Total**: 1,248 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 125u vs Médiane: 125u (Réel: 125u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 125u
- **Baseline calculee**: 125u
- **Mediane historique**: 125u
- **Reel commande**: 125u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 125u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 juillet 2025 (il y a 90 jours). L'historique montre un cycle de réapprovisionnement irrégulier mais fréquent (tous les 2 à 3 mois en moyenne). Avec un seuil de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de commande. Bien qu'une commande exceptionnelle de 750u ait eu lieu récemment, l'historique N-1 sur la même période (octobre/novembre) ainsi que la récurrence globale indiquent des volumes plus stables de 125u. En suivant la règle de la médiane et de la prudence face aux pics exceptionnels, une quantité de 125u est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 966 tokens
- **Output**: 185 tokens
- **Total**: 1,151 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:06:26: 125u
- 2025-08-13 08:04:11: 125u
- 2025-05-19 07:59:44: 125u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:45:01: 750u
- 2024-07-16 06:24:08: 750u
- 2024-05-27 14:17:06: 750u
- 2024-02-26 13:37:14: 750u
- 2024-01-03 14:32:01: 125u
- 2023-12-18 13:03:41: 125u
- 2023-11-06 12:18:37: 750u

**Quantite Mediane (fallback)**: 125u
**Quantite Reelle**: 125u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:06:26: 125u
- 2025-08-13 08:04:11: 125u
- 2025-05-19 07:59:44: 125u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:45:01: 750u
- 2024-07-30 11:11:55: 125u
- 2024-06-03 13:00:35: 125u
- 2024-02-26 13:37:14: 1500u
- 2024-01-22 10:58:00: 125u
- 2024-01-03 14:32:01: 125u
- 2023-12-04 12:29:44: 750u

**Quantite Mediane (fallback)**: 125u
**Quantite Reelle**: 125u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 06:36:10: 750u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-30 11:11:55: 125u
- 2024-06-03 13:00:35: 125u
- 2024-04-16 06:29:03: 750u
- 2024-01-22 10:58:00: 125u
- 2023-11-06 12:18:37: 750u

**Quantite Mediane (fallback)**: 125u
**Quantite Reelle**: 125u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:38.935Z*
