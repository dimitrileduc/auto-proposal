# Rapport Backtest - Client Ô P'tit Sterlain

## Contexte

- **Client** : Ô P'tit Sterlain (ID: 56943)
- **Commande réelle** : S39587
- **Date commande** : 2025-10-07 07:02:23
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,891 input + 3,401 output = 23,292 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.4% | 19 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 64.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 38.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/07/2025, soit environ 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (50 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 171 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation irrégulière avec une dernière commande remontant à 90 jours (8 juillet 2025). Bien que le cycle moyen soit difficile à établir précisément, le délai écoulé depuis la dernière commande dépasse largement les seuils de sécurité habituels, créant un risque de rupture imminent ou une absence de stock en rayon. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (2u, 3u, 3u, 3u, 2u) et au volume commandé à la même période l'année précédente (septembre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 168 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 08/07/2025, soit environ 90 jours. Bien que la rotation soit faible et irrégulière en 2025 (cycle de ~50 jours entre les deux dernières commandes), l'historique N-1 montre une activité plus soutenue durant la période septembre/octobre (commandes de 2u). En application du principe de précaution B2B face à un cycle incertain et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes (2025), privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 173 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours. La dernière commande remontant au 8 juillet 2025 (soit environ 90 jours avant la date actuelle), le délai de réapprovisionnement habituel est largement dépassé. En application du principe de précaution B2B et face à un risque de rupture imminent sous 30 jours, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente observée dans l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 134 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>5. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/07/2025, soit environ 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (60 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément aux règles sur les rotations faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 151 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>6. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 mai 2025, soit plus de 130 jours sans activité pour ce produit. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 30 à 60 jours). Un risque de rupture est identifié pour la période à venir. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est la médiane historique de 2 unités, évitant toute surestimation du stock de sécurité.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 141 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>7. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 mai 2025, soit plus de 130 jours sans activité. Bien que le cycle historique soit irrégulier, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours au catalogue. En se basant sur l'historique récent et N-1, la quantité commandée est systématiquement de 2 unités (médiane et mode). On maintient donc cette quantité de 2 unités pour couvrir le besoin potentiel sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 133 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>8. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 30 à 60 jours). Un besoin est donc détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une rotation très faible de 1 à 2 unités. Conformément à la règle des rotations faibles (1-2u), on maintient la quantité minimale historique. La médiane et la valeur la plus basse de l'historique N-1 étant de 1 unité, cette quantité est retenue pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 195 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>9. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 140 jours. Bien que le cycle soit irrégulier et difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité (médiane de l'historique récent) pour maintenir une disponibilité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 122 tokens
- **Total**: 995 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:19:39: 1u
- 2025-05-19 07:39:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:19:39: 2u
- 2025-05-19 07:39:41: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:17:18: 3u
- 2024-07-08 06:35:18: 3u
- 2024-06-27 12:13:31: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:19:39: 1u
- 2025-05-19 07:39:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:17:18: 2u
- 2024-08-02 06:16:37: 2u
- 2024-06-27 12:13:31: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:19:39: 2u
- 2025-05-19 07:39:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:17:18: 1u
- 2024-06-27 12:13:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:19:39: 1u
- 2025-05-19 07:39:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:39:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:17:18: 2u
- 2024-08-02 06:16:37: 3u
- 2024-06-27 12:13:31: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:39:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:17:18: 2u
- 2024-08-02 06:16:37: 2u
- 2024-06-27 12:13:31: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:39:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:17:18: 1u
- 2024-08-02 06:16:37: 1u
- 2024-06-27 12:13:31: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 07:39:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:26.773Z*
