# Rapport Backtest - Client Maison du Tourisme Hautes Fagnes - Cantons de l'Est

## Contexte

- **Client** : Maison du Tourisme Hautes Fagnes - Cantons de l'Est (ID: 73658)
- **Commande réelle** : S40178
- **Date commande** : 2025-11-06 14:53:12
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,870 input + 1,529 output = 10,399 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.0% | 10 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 46.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 52.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 95.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 94.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -95.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | 70 | 66.0 | 94.3% | partial | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 70 | 68.0 | 97.1% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 26 | 24.0 | 92.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 70u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 70u
- **Erreur LLM**: 68u (97.1%)
- **Erreur Mediane**: 68u (97.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 06/10/2025, soit 30 jours avant la date actuelle. L'intervalle précédent était d'environ 80 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (30 jours écoulés + 30 jours de seuil = 60 jours, proche du cycle constaté). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. La médiane se situe à 1.5u. En suivant la règle de privilégier la quantité la plus basse en cas de doute mais en assurant la rotation, la quantité de 2u est retenue pour couvrir la période de 30 jours à venir, correspondant au volume de la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 210 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>2. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 70u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 70u
- **Erreur LLM**: 69u (98.6%)
- **Erreur Mediane**: 69u (98.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle entre les deux dernières commandes est d'environ 80 jours. La dernière commande date du 06/10/2025, soit 30 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (30 jours écoulés + 30 jours de seuil = 60 jours, proche du cycle constaté). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : La rotation est très faible et constante (1u). La médiane des commandes récentes est de 1u. On maintient cette quantité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 161 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>3. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 26u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 26u
- **Erreur LLM**: 25u (96.2%)
- **Erreur Mediane**: 25u (96.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juillet 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B et l'absence de cycle défini imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément à la règle des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 109 tokens
- **Total**: 987 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 07:23:23: 2u
- 2025-07-18 12:01:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 70u

</details>


<details>
<summary><strong>2. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 07:23:23: 1u
- 2025-07-18 12:01:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 70u

</details>


<details>
<summary><strong>3. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 12:01:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 26u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Predicted 3u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | Predicted 4u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:54.675Z*
