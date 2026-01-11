# Rapport Backtest - Client DLL AD HOTTON COUDELHO

## Contexte

- **Client** : DLL AD HOTTON COUDELHO (ID: 38808)
- **Commande réelle** : S39336
- **Date commande** : 2025-11-07 11:09:55
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 17,465 input + 2,659 output = 20,124 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 15 produits prédits, 9 corrects |
| **Rappel** | 64.3% | 14 produits réels, 9 détectés |
| **F1-Score** | 62.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 68.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 41.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -68.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 10 | 8.0 | 80.0% | partial | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une commande à la même période (30 octobre 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1 et 2 unités. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 177 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>2. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 15 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande récente et l'approche du seuil de réapprovisionnement de 30 jours créent une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 168 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 juillet 2025, soit plus de 110 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique ici : en cas de doute sur la rotation ou de cycle irrégulier, il faut prévoir une commande pour éviter une rupture prolongée si le produit est toujours référencé. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, respectant ainsi la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 136 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>4. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 114 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un horizon de 30 jours. Conformément aux règles de gestion des rotations faibles (1-2u) et en l'absence de données N-1, la quantité est maintenue à 2 unités, correspondant au volume de la dernière commande connue.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 125 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement en B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. Conformément à l'Étape 2 pour les produits à rotation faible (1-2u), la quantité est maintenue à 2 unités, correspondant au volume de la dernière commande connue.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 137 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>6. [JF048] JF DISPLAY SAUCES 250ML </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique, sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 182 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 10u
- **Erreur LLM**: 8u (80.0%)
- **Erreur Mediane**: 8u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande récurrente fin octobre/début novembre (2024-10-30). Avec une date actuelle au 2025-11-06 et un seuil de réapprovisionnement de 30 jours, le cycle annuel est dépassé. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente est constant avec des commandes de 2 unités. La médiane et la valeur constante étant de 2, cette quantité est retenue pour maintenir le stock habituel sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 185 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>8. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente enregistrée, mais l'historique N-1 indique une commande le 30 octobre. Nous sommes actuellement le 6 novembre, soit 7 jours après la date anniversaire de la commande précédente. En l'absence de cycle régulier et par principe de précaution B2B, un risque de rupture est identifié pour couvrir la période de consommation annuelle. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique récent, la prévision se base sur la commande de l'année précédente à la même période. La quantité de 1 unité est maintenue conformément à la règle sur les rotations très faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 155 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation très faible avec une seule commande enregistrée l'année dernière à la même période (30 octobre). Bien qu'il n'y ait pas de commandes récentes, le principe de précaution B2B et l'analyse de l'historique N-1 suggèrent un besoin potentiel pour couvrir la période actuelle. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la base N-1 est utilisée. La quantité est fixée à 1 unité, conformément à la règle de maintien des rotations très faibles (1-2u) sans surestimation pour le stock de sécurité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 158 tokens
- **Total**: 1,034 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 09:35:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:56:08: 1u
- 2024-05-30 06:55:07: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 09:35:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 09:35:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>4. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 09:35:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 09:35:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>6. [JF048] JF DISPLAY SAUCES 250ML </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 12:58:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:56:08: 2u
- 2024-05-30 06:55:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>8. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:56:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:56:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD015] LD Onion Spread 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 10 | Product analyzed but LLM -> 0 - client ordered 10u |
| [TVF013] TVF DISPLAY TARTINADES 200ML | 1 | Never ordered in previous analysis window (no history) |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Never ordered in previous analysis window (no history) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Never ordered in previous analysis window (no history) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM predit: 0u | Reel commande: 10u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes et N-1 inexistantes). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'établir un besoin ou une quantité de réapprovisionnement fiable. Conformément aux règles de gestion, aucune commande n'est préconisée sans signal de demande préalable.

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande n'est disponible pour ce produit, que ce soit sur la période récente ou sur l'historique N-1. En l'absence totale d'historique de rotation ou de cycle de commande identifiable, il est impossible de justifier un besoin de réapprovisionnement immédiat. Conformément aux règles de gestion, aucune quantité ne peut être estimée sans base de calcul.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:12:07.214Z*
