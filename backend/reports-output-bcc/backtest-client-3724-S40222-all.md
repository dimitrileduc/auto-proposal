# Rapport Backtest - Client BOUCHERIE SCHNEIDER

## Contexte

- **Client** : BOUCHERIE SCHNEIDER (ID: 3724)
- **Commande réelle** : S40222
- **Date commande** : 2025-11-10 08:02:33
- **Date cutoff système** : 2025-11-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,801 input + 543 output = 3,344 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 31.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 20 | 29 | 9.0 | 31.0% | partial | Non | Non | LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 6 | 7 | 1.0 | 14.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 20u vs Médiane: 20u (Réel: 29u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 29u
- **Erreur LLM**: 9u (31.0%)
- **Erreur Mediane**: 9u (31.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande datant de 90 jours (11 août). Bien que la rotation soit lente, le délai écoulé dépasse largement les intervalles habituels observés l'année précédente (environ 45 à 60 jours entre août et septembre 2024). En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 20 unités, correspondant à la médiane des commandes historiques (15, 20, 20, 20, 26), en écartant le pic exceptionnel de 26 unités pour privilégier la stabilité du stock.

**Tokens utilises pour cette prediction:**
- **Input**: 963 tokens
- **Output**: 165 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit environ 90 jours. L'historique N-1 montre des commandes espacées de 2 à 3 mois (avril, juin, août). Nous sommes actuellement le 9 novembre, ce qui correspond à l'intervalle habituel de rotation (environ 60-90 jours). Le risque de rupture est imminent ou le cycle de réapprovisionnement est atteint. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la constante historique étant de 1, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 164 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>3. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 6u vs Médiane: 6u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 7u
- **Erreur LLM**: 1u (14.3%)
- **Erreur Mediane**: 1u (14.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit 90 jours avant la date actuelle (9 novembre). L'historique montre des cycles irréguliers (février, avril, août). Selon le principe de précaution B2B, un cycle irrégulier ou une absence de commande depuis plus de 70 jours justifie une commande pour éviter une rupture de stock, d'autant plus que le seuil de réapprovisionnement est de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent affiche une commande de 6u. L'historique N-1 montre des volumes de 3u, 6u et 10u. La médiane de l'historique global est de 6u. En respectant la règle de maintien de la quantité pour les rotations régulières et la médiane, la quantité retenue est de 6u.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 214 tokens
- **Total**: 1,132 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:39:31: 26u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-06 12:29:28: 20u
- 2024-08-22 13:05:35: 20u
- 2024-06-18 08:20:16: 15u
- 2024-04-09 09:24:41: 15u
- 2024-02-09 07:52:04: 20u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 29u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:39:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 13:05:35: 1u
- 2024-06-18 08:20:16: 1u
- 2024-04-09 09:24:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:39:31: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 13:05:35: 3u
- 2024-04-09 09:24:41: 10u
- 2024-02-09 07:52:04: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 7u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0093] FILOU MOUTARDE 300GR | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:13.321Z*
