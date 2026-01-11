# Rapport Backtest - Client MAISON DESPRIET SA, Nicole

## Contexte

- **Client** : MAISON DESPRIET SA, Nicole (ID: 57477)
- **Commande réelle** : S40196
- **Date commande** : 2025-11-07 12:46:58
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,716 input + 808 output = 5,524 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 5 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 65.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -58.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 480 | 320.0 | 66.7% | partial | Non | Non | LLM |
| [PF0075] FILOU CHASSEUR  10 L | 52 | 44 | 8.0 | 18.2% | partial | Non | Non | LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 7 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 480u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 480u
- **Erreur LLM**: 320u (66.7%)
- **Erreur Mediane**: 320u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier avec une fréquence moyenne d'environ 15 à 20 jours. La dernière commande date du 05/11/2025 (hier). Bien que nous soyons au début d'un nouveau cycle, le seuil de réapprovisionnement de 30 jours couvre largement la prochaine échéance prévue (estimée vers le 20-25 novembre). Par principe de précaution B2B et pour éviter toute rupture sur un produit à rotation constante, une commande est préconisée. La quantité de 160 unités est systématique sur toutes les commandes de 2025, constituant une médiane et une constante parfaite à maintenir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,002 tokens
- **Output**: 168 tokens
- **Total**: 1,170 tokens



</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 52u vs Médiane: 52u (Réel: 44u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 44u
- **Erreur LLM**: 8u (18.2%)
- **Erreur Mediane**: 8u (18.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant de 7 à 58 jours. La dernière commande remonte au 10 octobre, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la limite haute du cycle historique. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 52 unités, correspondant à la médiane des commandes récentes (44, 52, 52, 55), en écartant le pic de 55 unités pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 149 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 21 et 46 jours. La dernière commande remonte au 10 octobre, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la limite haute du cycle habituel. Concernant la quantité, l'historique récent montre une stabilisation à 2 unités sur les trois dernières commandes, après un pic exceptionnel de 6 unités en juillet. En appliquant la règle de la médiane et en privilégiant la quantité la plus basse en cas de doute pour éviter le surstockage, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 157 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>4. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 30 jours entre chaque réapprovisionnement. La dernière commande datant du 10 octobre (soit 27 jours avant la date actuelle), nous atteignons le seuil de 70% du cycle moyen et entrons dans la fenêtre de risque de rupture sous 30 jours. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes, tout en ignorant la baisse ponctuelle à 1 unité observée en août.

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 147 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>5. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 7u vs Médiane: 7u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 7u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 10/10/2025, soit il y a 27 jours. Le cycle moyen observé entre les commandes précédentes est d'environ 50 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons un horizon de 57 jours sans commande, ce qui correspond à 100% du cycle moyen. Le risque de rupture est donc imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 6u et 8u. La médiane de ces quantités est de 7u. Conformément à la règle de précaution et de maintien de la médiane sans surestimation, la quantité retenue est de 7.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 187 tokens
- **Total**: 1,093 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 05:01:57: 160u
- 2025-10-29 12:00:23: 160u
- 2025-10-10 09:26:10: 160u
- 2025-09-23 09:13:34: 160u
- 2025-08-22 08:54:40: 160u
- 2025-08-08 06:49:19: 160u
- 2025-07-02 09:08:06: 160u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 11:45:56: 480u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 480u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 09:26:10: 44u
- 2025-08-29 09:33:32: 55u
- 2025-08-22 08:54:40: 52u
- 2025-07-02 09:08:06: 52u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 44u

</details>


<details>
<summary><strong>3. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 09:26:10: 2u
- 2025-09-23 09:13:34: 2u
- 2025-08-08 06:49:19: 2u
- 2025-07-02 09:08:06: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 11:45:56: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 09:26:10: 2u
- 2025-09-23 09:13:34: 2u
- 2025-08-22 08:54:40: 1u
- 2025-08-08 06:49:19: 2u
- 2025-07-02 09:08:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 09:26:10: 8u
- 2025-09-23 09:13:34: 0u
- 2025-07-02 09:08:06: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 6u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:24.258Z*
