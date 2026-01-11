# Rapport Backtest - Client Marme - Hof & Laden

## Contexte

- **Client** : Marme - Hof & Laden (ID: 24799)
- **Commande réelle** : S40209
- **Date commande** : 2025-11-12 10:38:10
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,125 input + 2,370 output = 21,495 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 9 produits prédits, 4 corrects |
| **Rappel** | 20.0% | 20 produits réels, 4 détectés |
| **F1-Score** | 27.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 83.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 indique une commande à la même période (octobre/novembre). En l'absence de données récentes pour infirmer ce besoin et suivant le principe de précaution B2B, un risque de rupture est identifié pour couvrir le cycle annuel. ÉTAPE 2 : Estimation de la quantité. En se basant sur l'historique N-1 (1u) et conformément à la règle sur les rotations très faibles, la quantité de 1 unité est maintenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 144 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>2. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité à cette période (octobre/novembre). En l'absence de données récentes, le principe de précaution B2B s'applique pour éviter une rupture sur un produit à rotation lente mais existante. Le délai depuis la dernière commande théorique dépasse largement les cycles observés. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre des volumes très faibles (1u, 3u, 1u). La médiane de l'historique disponible est de 1u. Conformément aux règles pour les rotations faibles (1-2u) et en choisissant la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 190 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation très faible et irrégulière (3 commandes sur l'année précédente). La dernière commande enregistrée remonte à plus d'un an (octobre 2024). En l'absence d'historique récent et face à un cycle indéterminé, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée sur cette référence, d'autant plus que le délai depuis la dernière commande dépasse largement tout cycle théorique. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre des volumes très bas (1u ou 2u). Conformément aux règles pour les rotations faibles (1-2u) et en privilégiant la valeur basse pour éviter le surstockage, la quantité retenue est de 1 unité (médiane de l'historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 203 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>4. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou de cycle indéterminé, une commande doit être prévue pour initialiser le stock ou répondre à une absence de données. ÉTAPE 2 : Conformément à la règle sur les rotations très faibles ou l'absence d'historique, la quantité minimale de 1 unité est retenue pour couvrir le risque de rupture sans engendrer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 859 tokens
- **Output**: 128 tokens
- **Total**: 987 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:49:30: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:49:30: 1u
- 2024-07-01 06:38:06: 3u
- 2024-02-29 08:47:14: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:49:30: 1u
- 2024-07-01 06:38:06: 2u
- 2024-02-29 08:47:14: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV136] LV Tartinade Betterave 190g | 4 | Predicted 4u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (16)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF067] FIL MOUTARDE 700G BOCAL | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF066] FIL MOUTARDE 300G BOCAL | 3 | Never ordered in previous analysis window (no history) |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 3 | Never ordered in previous analysis window (no history) |
| [LV135] LV Tartinade Basilico 190g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | Never ordered in previous analysis window (no history) |
| [JF068] FIL VOL AU VENT 800G BOCAL  | 1 | Never ordered in previous analysis window (no history) |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (9 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'est enregistrée dans l'historique récent ou sur l'année précédente (N-1). En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'établir un besoin de réapprovisionnement. Conformément aux règles de gestion, aucune quantité ne peut être préconisée sans base historique minimale.

</details>


<details>
<summary><strong>2. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) permettant d'établir un cycle de consommation ou une rotation. En l'absence totale d'historique de vente, le risque de rupture ne peut être caractérisé et aucune quantité ne peut être estimée de manière fiable.

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>4. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de base, aucun besoin de réapprovisionnement n'est détecté. Le risque de rupture est nul car il n'y a aucune consommation enregistrée pour ce produit.

</details>


<details>
<summary><strong>7. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande récente ou historique (N-1) n'est disponible pour ce produit. En l'absence totale d'historique de rotation ou de cycle de commande identifiable, il est impossible de justifier un besoin de réapprovisionnement immédiat. Conformément aux règles de gestion, aucune quantité ne peut être préconisée sans base de calcul minimale.

</details>


<details>
<summary><strong>8. [JF067] FIL MOUTARDE 700G BOCAL</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique, le risque de rupture ne peut être évalué et aucune commande ne peut être justifiée selon les règles de gestion basées sur la médiane historique.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique de rotation, le risque de rupture ne peut être caractérisé et aucune commande de précaution ne peut être quantifiée selon les règles de gestion basées sur la médiane.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:24:01.639Z*
