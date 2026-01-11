# Rapport Backtest - Client EDEN

## Contexte

- **Client** : EDEN (ID: 24752)
- **Commande réelle** : S40117
- **Date commande** : 2025-11-04 13:50:57
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,506 input + 1,136 output = 7,642 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 175.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 94.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 91.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -94.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 10 | 157 | 147.0 | 93.6% | partial | Non | Non | LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 10 | 400 | 390.0 | 97.5% | partial | Non | Non | LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 10 | 123 | 113.0 | 91.9% | partial | Non | Non | LLM |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 10 | 61 | 51.0 | 83.6% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 10u vs Médiane: 8u (Réel: 157u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 8u
- **Reel commande**: 157u
- **Erreur LLM**: 147u (93.6%)
- **Erreur Mediane**: 149u (94.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit plus de 70 jours sans réapprovisionnement. Bien que l'historique récent soit limité à une seule commande de 10 unités, le délai écoulé dépasse largement les cycles habituels suggérés par l'historique N-1 (mars, juin, octobre). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, une commande est nécessaire. La quantité retenue est de 10 unités, correspondant à la valeur de la commande la plus récente, évitant ainsi de se baser sur le pic exceptionnel de 336 unités de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 933 tokens
- **Output**: 164 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 10u vs Médiane: 16u (Réel: 400u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 16u
- **Reel commande**: 400u
- **Erreur LLM**: 390u (97.5%)
- **Erreur Mediane**: 384u (96.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22/08/2025, soit 73 jours. L'historique N-1 montre une activité importante sur la période de novembre (pics en 2023, commande fin octobre en 2024). Le cycle est irrégulier mais le délai depuis la dernière commande dépasse largement le seuil de précaution face à la saisonnalité observée l'an dernier. Le risque de rupture sous 30 jours est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est limité à une commande de 10u. Les volumes de 2023 étaient exceptionnels (pics > 100u) et ne sont pas représentatifs de la tendance actuelle plus basse (8u, 20u, 25u en 2024). En suivant la règle de la médiane des commandes récentes et le principe de prudence (choisir la valeur la plus basse en cas de doute sur la reprise de volume), la quantité de 10u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,016 tokens
- **Output**: 253 tokens
- **Total**: 1,269 tokens



</details>


<details>
<summary><strong>3. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 10u vs Médiane: 25u (Réel: 123u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 25u
- **Reel commande**: 123u
- **Erreur LLM**: 113u (91.9%)
- **Erreur Mediane**: 98u (79.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit plus de 70 jours avant la date actuelle. Bien que le cycle récent soit difficile à établir avec une seule commande proche, l'historique de l'année précédente montre une activité importante sur la période de novembre (plusieurs commandes totalisant un volume élevé). En application du principe de précaution B2B et face à l'absence de visibilité sur la rotation actuelle, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 10 unités, correspondant à la médiane (et valeur unique) de l'historique récent, privilégiant la prudence face aux volumes exceptionnels de l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 979 tokens
- **Output**: 161 tokens
- **Total**: 1,140 tokens



</details>


<details>
<summary><strong>4. [PF3200] LD FR TARTINADE BIO ASPERGE 180G</strong> - LLM: 10u vs Médiane: 6u (Réel: 61u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 6u
- **Reel commande**: 61u
- **Erreur LLM**: 51u (83.6%)
- **Erreur Mediane**: 55u (90.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit 73 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 10 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock initialement mis en place.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 131 tokens
- **Total**: 1,008 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:51:37: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 12:12:32: 336u
- 2024-06-06 12:51:25: 30u
- 2024-03-21 11:26:51: 8u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 157u

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:51:37: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 12:12:32: 20u
- 2024-06-06 12:51:25: 25u
- 2024-03-21 11:26:51: 8u
- 2023-12-11 08:10:56: 45u
- 2023-11-24 12:59:18: 12u
- 2023-11-24 12:59:02: 66u
- 2023-11-24 12:58:58: 192u
- 2023-11-24 12:58:54: 121u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 400u

</details>


<details>
<summary><strong>3. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:51:37: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 12:12:32: 40u
- 2024-03-21 11:26:51: 8u
- 2023-12-11 08:10:56: 90u
- 2023-11-24 12:59:02: 75u
- 2023-11-24 12:58:58: 64u
- 2023-11-24 12:58:54: 46u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 123u

</details>


<details>
<summary><strong>4. [PF3200] LD FR TARTINADE BIO ASPERGE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:51:37: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 61u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 96 | Predicted 96u but not ordered |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 71 | Product analyzed but LLM -> 0 - client ordered 71u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM predit: 0u | Reel commande: 71u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse des données montre une absence totale d'historique de commandes, que ce soit sur la période récente ou sur l'année précédente (N-1). En l'absence de flux historique ou de cycle de rotation identifiable, il n'y a aucune preuve de demande pour ce produit. Le risque de rupture à l'horizon de 30 jours est considéré comme nul car aucune consommation n'est enregistrée. Selon les règles de gestion, aucune commande n'est déclenchée sans signal de demande préalable.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:14:07.395Z*
