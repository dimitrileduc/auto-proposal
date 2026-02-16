# Rapport Backtest - Client la petite tour / a l'origine SA

## Contexte

- **Client** : la petite tour / a l'origine SA (ID: 34765)
- **Commande réelle** : S37046
- **Date commande** : 2025-05-26 06:41:46
- **Date cutoff système** : 2025-05-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,241 input + 1,977 output = 15,218 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 11 produits prédits, 11 corrects |
| **Rappel** | 45.8% | 24 produits réels, 11 détectés |
| **F1-Score** | 62.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière sans historique récent sur l'année en cours. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande est déclenchée pour éviter une rupture prolongée. La quantité retenue correspond à la médiane historique (1u) afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 90 tokens
- **Total**: 980 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 indique une commande à la même période l'année dernière (mars). En l'absence de données récentes et face à un cycle indéterminé, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur un produit à rotation très faible. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique disponible (N-1) montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 163 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande récente enregistrée. Cependant, l'historique N-1 montre des commandes sporadiques (novembre et mars). En l'absence de données récentes et face à un cycle irrégulier, le principe de précaution B2B s'applique pour éviter une rupture sur un produit référencé. Le délai depuis la dernière commande théorique dépasse largement les cycles habituels, créant un doute qui justifie un réapprovisionnement. ÉTAPE 2 : ESTIMATION QUANTITÉ. La rotation est très faible (1u par commande). Conformément aux règles sur les faibles rotations, on maintient la quantité minimale historique de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 169 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Ce produit présente une rotation très faible et irrégulière, sans commande récente enregistrée. Cependant, selon le principe de précaution B2B et la règle de détection du besoin en cas de cycle incertain, une commande doit être prévue pour éviter une rupture prolongée. En l'absence d'historique récent, l'analyse se base sur les données N-1 qui indiquent un volume constant de 1 unité par commande. La quantité retenue est donc de 1 unité, correspondant à la médiane historique, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 126 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre des besoins ponctuels. Le délai depuis la dernière commande connue est très important. En application du principe de précaution B2B et de la règle sur les cycles irréguliers/difficiles à déterminer, un besoin est identifié pour éviter une rupture prolongée sur cette référence. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique (N-1) indique une rotation très faible et constante de 1 unité. Conformément à la règle des cas particuliers pour les rotations faibles (1-2u), la quantité de 1 unité est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 161 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre des commandes sporadiques (novembre et mars). Le délai depuis la dernière commande théorique est largement supérieur au cycle habituel. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière -> prévoir), un besoin est identifié pour éviter une rupture prolongée sur cette référence. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique (N-1) est constant à 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique, sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 173 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>7. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation très faible et sporadique (1 unité tous les 4 à 6 mois). En application du principe de précaution B2B et face à l'absence de données récentes pour confirmer l'état du stock, un risque de rupture est considéré par défaut. ÉTAPE 2 : Estimation de la quantité. L'historique montre une constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour assurer une présence minimale en rayon sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 155 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 indique une commande à cette période l'année dernière (mars). En l'absence de cycle de rotation défini et selon le principe de précaution B2B, un besoin est identifié pour éviter une rupture prolongée sur un produit à rotation très faible. ÉTAPE 2 : Estimation de la quantité. Conformément à la règle des rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la dernière commande connue, afin de ne pas surstocker tout en assurant une présence minimale en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 149 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>9. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation très faible et sporadique (1 unité tous les 4 mois environ). La dernière commande connue remontant à plus d'un an, le risque de rupture est considéré comme avéré selon le principe de précaution B2B pour maintenir une présence en rayon. En l'absence de données récentes, la quantité retenue se base sur la constante historique de 1 unité, conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 115 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sporadique. En l'absence de données récentes et compte tenu du principe de précaution B2B, un doute subsiste sur le cycle de rotation. Pour éviter une rupture sur un produit à faible rotation, une commande est préconisée. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année dernière indique des commandes unitaires (1u). La médiane et la valeur constante étant de 1, cette quantité est maintenue pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 146 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>11. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation très faible et sporadique (dernière commande il y a plus d'un an). En l'absence de cycle défini, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur une référence active du catalogue. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une quantité constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 162 tokens
- **Total**: 1,053 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 08:24:32: 1u
- 2023-11-21 07:36:22: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (13)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0051] MF Kidney Beans 500g | 1 | Never ordered in previous analysis window (no history) |
| [RF003] REFIELD Maïs 500G  | 1 | Never ordered in previous analysis window (no history) |
| [MF0061] MF Compote | 1 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [LV136] LV Tartinade Betterave 190g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | Never ordered in previous analysis window (no history) |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Never ordered in previous analysis window (no history) |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Never ordered in previous analysis window (no history) |
| [LV140] LV Moutarde à l'ancienne  200ml | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 12 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 2 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (4 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'a été enregistrée dans l'historique récent ni à la même période l'année dernière (N-1). En l'absence totale de rotation historique et de signal de demande, le risque de rupture est nul. Conformément au principe de ne pas créer de stock sans historique de consommation, aucune commande n'est préconisée.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique montre une absence totale de commandes récentes et aucune commande enregistrée à la même période l'année précédente (0u en mars 2024). En l'absence de cycle de rotation établi ou de demande historique sur ce produit, le risque de rupture à un horizon de 30 jours est considéré comme nul. Conformément au protocole, sans preuve de besoin ou de rotation, aucune commande n'est déclenchée.

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'a été enregistrée sur l'historique récent ni sur la période équivalente de l'année précédente (N-1). En l'absence totale de rotation et de données de consommation, le risque de rupture est nul. Conformément au principe de précaution contre le surstockage, aucune commande n'est préconisée.

</details>


<details>
<summary><strong>4. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'a été enregistrée sur la période récente ni sur la période équivalente de l'année précédente (N-1). En l'absence totale d'historique de rotation et de cycle de commande identifiable, le risque de rupture ne peut être établi. Conformément aux règles de gestion, aucune quantité n'est préconisée sans signal de demande.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:27:20.209Z*
