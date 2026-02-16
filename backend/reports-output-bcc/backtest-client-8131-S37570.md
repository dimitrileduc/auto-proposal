# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,673 input + 1,338 output = 9,011 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 8 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 76.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 144.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | partial | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 24 | 50 | 26.0 | 52.0% | partial | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | partial | LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | partial | LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 800u
- **Erreur LLM**: 640u (80.0%)
- **Erreur Mediane**: 640u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 juin, soit il y a 6 jours. Le cycle moyen observé est d'environ 7 jours (commandes quasi hebdomadaires, souvent le vendredi). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent pour la fin de semaine. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes de 160u, 240u et ponctuellement 400u. La médiane des commandes récentes est de 160u. Conformément à la règle de précaution privilégiant la médiane et la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 160u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 183 tokens
- **Total**: 1,188 tokens



</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 24u vs Médiane: 22u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 22u
- **Reel commande**: 50u
- **Erreur LLM**: 26u (52.0%)
- **Erreur Mediane**: 28u (56.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière (environ tous les 7 à 10 jours). La dernière commande datant du 13 juin (il y a 6 jours), le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). En appliquant la règle de la médiane sur l'historique récent (12, 20, 24, 24, 52, 80), et en excluant le pic exceptionnel de 80u pour éviter le surstockage, la valeur médiane se situe à 24u. Conformément au principe de précaution B2B et à la règle de privilégier la quantité la plus basse en cas de doute sur la volatilité, une commande de 24 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 997 tokens
- **Output**: 185 tokens
- **Total**: 1,182 tokens



</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière (environ toutes les 2 à 3 semaines). La dernière commande datant du 13 juin (il y a 6 jours), le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). En appliquant la méthode de la médiane sur l'historique récent et en excluant les pics exceptionnels de 60u (probablement des événements ponctuels ou promotions), la quantité récurrente se situe entre 3u et 5u. Conformément au principe de précaution B2B et à la règle de la médiane, une commande de 5u est préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 992 tokens
- **Output**: 157 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 104u
- **Erreur LLM**: 52u (50.0%)
- **Erreur Mediane**: 52u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 10 à 25 jours entre les dernières livraisons. La dernière commande datant du 3 juin (soit 16 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Le cycle moyen étant largement entamé, le principe de précaution B2B impose un réapprovisionnement. La quantité est fixée à 52 unités, correspondant à la médiane et à la constante parfaite observée sur l'ensemble de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 984 tokens
- **Output**: 138 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 52u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant de 4 à 25 jours sur les trois dernières commandes. La dernière commande remonte au 23 mai 2025, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement 70% du cycle moyen constaté. Concernant la quantité, l'historique récent montre une récurrence forte de 52 unités (3 fois sur les 4 dernières commandes). La médiane des commandes récentes étant de 52, cette quantité est retenue pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 946 tokens
- **Output**: 150 tokens
- **Total**: 1,096 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 13:02:52: 160u
- 2025-06-06 12:50:33: 240u
- 2025-06-03 14:09:59: 160u
- 2025-05-23 11:37:51: 160u
- 2025-05-16 09:00:32: 160u
- 2025-05-09 08:24:16: 240u
- 2025-04-28 06:00:45: 80u
- 2025-04-18 04:55:33: 400u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 800u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 13:02:52: 20u
- 2025-06-03 14:09:59: 80u
- 2025-05-16 09:00:32: 24u
- 2025-05-09 08:24:16: 24u
- 2025-05-02 09:39:44: 0u
- 2025-04-18 04:55:33: 0u
- 2025-04-11 07:18:35: 52u
- 2025-04-04 11:33:35: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 13:02:52: 3u
- 2025-05-16 09:00:32: 5u
- 2025-04-28 06:00:45: 5u
- 2025-04-18 04:55:33: 5u
- 2025-04-11 07:18:35: 60u
- 2025-04-04 11:33:35: 2u
- 2025-02-26 07:46:50: 3u
- 2025-02-10 07:31:13: 60u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 14:09:59: 52u
- 2025-05-23 11:37:51: 52u
- 2025-04-28 06:00:45: 52u
- 2025-04-04 11:33:35: 52u
- 2025-03-21 12:22:31: 52u
- 2025-01-27 08:10:23: 52u
- 2025-01-22 07:47:46: 52u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 104u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 11:37:51: 52u
- 2025-05-02 09:39:44: 26u
- 2025-04-28 06:00:45: 52u
- 2025-02-26 07:46:50: 52u
- 2025-02-03 09:47:17: 13u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 52u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 20 | Predicted 20u but not ordered |
| [PF0089] FILOU VOL AU VENT 400 GR | 12 | Predicted 12u but not ordered |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:40.421Z*
