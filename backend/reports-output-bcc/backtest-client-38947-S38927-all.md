# Rapport Backtest - Client ITM BURENTRAD SA BURENVILLE

## Contexte

- **Client** : ITM BURENTRAD SA BURENVILLE (ID: 38947)
- **Commande réelle** : S38927
- **Date commande** : 2025-09-02 10:14:12
- **Date cutoff système** : 2025-09-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,537 input + 2,012 output = 13,549 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.2% | 13 produits prédits, 6 corrects |
| **Rappel** | 46.2% | 13 produits réels, 6 détectés |
| **F1-Score** | 46.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible avec une seule commande enregistrée il y a 73 jours (20 juin). Bien que le cycle soit difficile à établir avec un seul point de données, le délai écoulé depuis la dernière commande dépasse largement les standards de réapprovisionnement habituels. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane du seul historique récent disponible, conformément à la règle de ne pas augmenter les quantités sans raison sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 153 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 juin 2025, soit 73 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien de la médiane historique, la quantité préconisée est de 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 174 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 70 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en mai/juin. En application du principe de précaution B2B (doute sur le cycle = prévoir), un réapprovisionnement est nécessaire pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1 et 2 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 163 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 juin 2025, soit 73 jours avant la date actuelle. Bien que la rotation soit très faible, l'historique montre des commandes espacées de 2 à 3 mois. À l'approche de l'horizon des 30 jours (Replenishment Threshold Days), le risque de rupture est présent par précaution B2B, car le cycle habituel est largement entamé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes unitaires (1u ou 2u). Conformément à la règle de rotation très faible et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 184 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 70 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées de 2 à 3 mois. À la date du 1er septembre, nous entrons dans une fenêtre de risque de rupture par rapport au cycle habituel. En application du principe de précaution B2B (doute sur le cycle = prévoir), un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 173 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 20 juin 2025, soit plus de 70 jours sans réapprovisionnement. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle habituel suggéré par l'historique. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), une commande est nécessaire. La quantité retenue correspond à la médiane historique constante de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 122 tokens
- **Total**: 1,009 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 12:07:06: 2u
- 2024-05-16 06:51:31: 1u
- 2024-03-26 14:23:44: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 06:51:31: 1u
- 2024-03-26 14:23:44: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 06:51:31: 1u
- 2024-03-26 14:23:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 06:51:31: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF021] JF PICKLES 350 ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:21:20.338Z*
