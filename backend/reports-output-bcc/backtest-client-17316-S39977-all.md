# Rapport Backtest - Client CARREFOUR BELGIUM SA, HYPER TIENEN

## Contexte

- **Client** : CARREFOUR BELGIUM SA, HYPER TIENEN (ID: 17316)
- **Commande réelle** : S39977
- **Date commande** : 2025-10-29 07:08:10
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 36
- **Tokens**: 32,222 input + 4,764 output = 36,986 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 21.1% | 19 produits prédits, 4 corrects |
| **Rappel** | 50.0% | 8 produits réels, 4 détectés |
| **F1-Score** | 29.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -60.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 3 | 2.0 | 66.7% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 indique une commande le 26 septembre. Avec une date actuelle au 28 octobre et un seuil de réapprovisionnement de 30 jours, nous sommes dans la fenêtre critique de renouvellement annuel pour ce produit à rotation très faible. En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture sur un cycle long. ÉTAPE 2 : Estimation de la quantité. L'historique montre une commande unique de 1 unité. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, soit la valeur historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 168 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>2. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 indique une commande à la même période (fin septembre/octobre). En l'absence de cycle de rotation défini, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit à rotation très faible. ÉTAPE 2 : Estimation de la quantité. En suivant la règle des cas particuliers pour les rotations très faibles (1-2u) et l'absence d'historique récent, la quantité est basée sur l'historique N-1. La médiane et la valeur historique étant de 1 unité, cette quantité est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 158 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>3. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande récente, mais l'historique N-1 montre une commande à la même période (fin septembre/octobre). Le délai depuis la dernière commande connue (plus d'un an) dépasse largement tout cycle raisonnable. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée sur ce produit à rotation très faible. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique disponible (N-1) indique une unité. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 175 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>4. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Absence de commandes récentes mais présence d'un historique à la même période l'année dernière (N-1). En application du principe de précaution B2B et de la règle sur l'absence d'historique récent, une commande est déclenchée pour couvrir le besoin potentiel. La quantité retenue est de 1 unité, correspondant à la commande historique, afin de maintenir le stock sans risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 101 tokens
- **Total**: 977 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 07:13:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 07:13:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 07:13:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 07:13:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF021] JF PICKLES 350 ML | 2 | Predicted 2u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (4 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande (1u) a été effectuée le 27 octobre 2025, soit seulement 1 jour avant la date actuelle. Le cycle précédent entre septembre et octobre était de 56 jours. Avec un seuil de réapprovisionnement de 30 jours, le stock actuel est considéré comme suffisant pour couvrir la période à venir. Il n'y a aucun risque de rupture immédiat justifiant une nouvelle commande dès aujourd'hui.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande a été effectuée hier (27 octobre 2025) pour 2 unités. Le cycle de commande historique est long et irrégulier (environ 60 à 90 jours entre les commandes). Avec un seuil de réapprovisionnement de 30 jours, le stock actuel est jugé suffisant pour couvrir la période immédiate. Il n'y a aucun risque de rupture imminent justifiant une nouvelle commande seulement 24 heures après la précédente.

</details>


<details>
<summary><strong>3. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande (1u) a été effectuée il y a seulement 1 jour (27 octobre 2025). Compte tenu de la rotation extrêmement faible et sporadique observée historiquement (une seule commande l'année dernière et une seule cette année), il n'y a aucun risque de rupture de stock dans l'horizon des 30 prochains jours. Le cycle de réapprovisionnement est très long, rendant une nouvelle commande immédiate inutile.

</details>


<details>
<summary><strong>4. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande de 1 unité a été effectuée le 27 octobre 2025, soit seulement 1 jour avant la date actuelle. Historiquement, le cycle de commande est très long (environ 56 jours entre les deux dernières commandes et une seule commande à la même période l'année précédente). Avec un seuil de réapprovisionnement de 30 jours, le stock actuel est considéré comme suffisant pour couvrir la période à venir, le risque de rupture étant quasi nul à cet horizon.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:22:00.405Z*
