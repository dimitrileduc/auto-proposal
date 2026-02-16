# Rapport Backtest - Client Au gré du vent

## Contexte

- **Client** : Au gré du vent (ID: 71559)
- **Commande réelle** : S39434
- **Date commande** : 2025-10-01 07:27:06
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 28,812 input + 4,646 output = 33,458 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 18.2% | 22 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 19 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande récente sur une période aussi longue crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est préconisé. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane et la dernière valeur connue étant de 2, la quantité retenue est 2.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 171 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>2. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le produit présente une rotation très faible avec une seule commande enregistrée il y a 140 jours. Bien que le cycle soit difficile à déterminer, le principe de précaution B2B et l'absence d'historique N-1 imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient. ÉTAPE 2 : En suivant la règle des rotations faibles (1-2u), la quantité est maintenue à 2 unités, correspondant à la dernière commande connue, afin de couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 133 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>3. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur le cycle de rotation, le principe de précaution B2B s'applique : tout doute sur le besoin impose de prévoir une commande pour éviter une rupture potentielle dès le lancement ou la reprise du produit. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique pour calculer une médiane, la règle des rotations très faibles est appliquée par défaut. Une quantité minimale de 1 unité est préconisée pour tester la demande sans générer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 147 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>4. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données permettant d'établir un cycle de rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un nouveau produit ou une référence sans historique. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane historique, la quantité minimale de 1 unité est préconisée pour tester la rotation sans générer de surstock inutile, conformément à la règle de choisir la valeur la plus basse en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 860 tokens
- **Output**: 140 tokens
- **Total**: 1,000 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 07:21:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 07:29:08: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (18)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 2 | Predicted 2u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 2 | Predicted 2u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande n'est disponible pour ce produit, que ce soit dans l'historique récent ou sur l'année précédente (N-1). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'identifier un besoin ou de calculer une médiane de réapprovisionnement. Par mesure de prudence et conformément aux règles de gestion des stocks sans historique, aucune commande n'est préconisée pour le moment.

</details>


<details>
<summary><strong>2. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'identifier un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Conformément aux règles de gestion, aucune commande n'est préconisée sans signal de demande préalable.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:07:53.889Z*
