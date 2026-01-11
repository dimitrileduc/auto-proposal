# Rapport Backtest - Client FERME SAINT CHRISTOPHE

## Contexte

- **Client** : FERME SAINT CHRISTOPHE (ID: 3889)
- **Commande réelle** : S38701
- **Date commande** : 2025-08-26 13:22:36
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,605 input + 705 output = 4,310 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 61.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1392] SC MOUTARDE SALICORNES 220 ML | 375 | 250 | 125.0 | 50.0% | partial | Non | Non | LLM |
| [PF1441] SC BEARNAISE SALICORNES 220ML | 250 | 250 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF1500] SC VINAIGRETTE SALICORNES 500 | 440 | 500 | 60.0 | 12.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF1392] SC MOUTARDE SALICORNES 220 ML</strong> - LLM: 375u vs Médiane: 334u (Réel: 250u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 375u
- **Baseline calculee**: 375u
- **Mediane historique**: 334u
- **Reel commande**: 250u
- **Erreur LLM**: 125u (50.0%)
- **Erreur Mediane**: 84u (33.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 375u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 20 mai 2025, soit environ 97 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 85 jours entre nov. et fév.). Dans un contexte B2B, le risque de rupture à l'horizon de 30 jours est élevé par principe de précaution. ÉTAPE 2 : La dernière commande était de 375u. En l'absence d'une série de données permettant de calculer une médiane stable, on maintient le volume de la commande la plus récente (375u), qui se situe entre les deux valeurs historiques de l'an dernier (334u et 500u).

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 180 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>2. [PF1441] SC BEARNAISE SALICORNES 220ML</strong> - LLM: 250u vs Médiane: 250u (Réel: 250u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 250u
- **Baseline calculee**: 250u
- **Mediane historique**: 250u
- **Reel commande**: 250u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 250u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 20 mai 2025, soit plus de 90 jours sans activité. Bien que le cycle historique soit difficile à établir avec une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout si le seuil de réapprovisionnement est de 30 jours. La quantité retenue est de 250 unités, correspondant à la dernière commande connue (médiane sur historique récent), en ignorant le pic de l'année précédente (334u) pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 139 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>3. [PF1500] SC VINAIGRETTE SALICORNES 500</strong> - LLM: 440u vs Médiane: 334u (Réel: 500u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 440u
- **Baseline calculee**: 440u
- **Mediane historique**: 334u
- **Reel commande**: 500u
- **Erreur LLM**: 60u (12.0%)
- **Erreur Mediane**: 166u (33.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 440u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 mai 2025, soit 97 jours sans réapprovisionnement. L'historique N-1 montre une commande importante fin mai (440u) suivie d'une absence de mouvement jusqu'en février. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande est très important. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent ne présente qu'une seule valeur (500u). En croisant avec l'historique N-1 (440u et 334u), la médiane se situe autour de 440u. En cas de doute entre deux volumes (500 vs 440), la règle impose de choisir la valeur la plus basse pour éviter le surstockage. Quantité retenue : 440u.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 246 tokens
- **Total**: 1,157 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF1392] SC MOUTARDE SALICORNES 220 ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 14:19:20: 375u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-01 08:32:00: 334u
- 2023-11-07 12:02:14: 500u

**Quantite Mediane (fallback)**: 375u
**Quantite Reelle**: 250u

</details>


<details>
<summary><strong>2. [PF1441] SC BEARNAISE SALICORNES 220ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 14:19:20: 250u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-01 08:32:00: 334u

**Quantite Mediane (fallback)**: 250u
**Quantite Reelle**: 250u

</details>


<details>
<summary><strong>3. [PF1500] SC VINAIGRETTE SALICORNES 500</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 14:19:20: 500u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:08:20: 440u
- 2024-02-01 08:32:00: 334u

**Quantite Mediane (fallback)**: 440u
**Quantite Reelle**: 500u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1393] SC MAYONNAISE SALICORNES 220ML | 375 | Predicted 375u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:23.743Z*
