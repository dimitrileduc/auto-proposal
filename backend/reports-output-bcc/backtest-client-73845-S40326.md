# Rapport Backtest - Client Le Fresnoy SPRL

## Contexte

- **Client** : Le Fresnoy SPRL (ID: 73845)
- **Commande réelle** : S40326
- **Date commande** : 2025-11-14 12:43:17
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,346 input + 3,315 output = 22,661 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 87.5% | 8 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 93.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.86 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 31.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 24 jours (entre le 12/08 et le 05/09). Depuis la dernière commande du 05/09, 69 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 138 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 69 jours avant la date actuelle. Bien que le cycle soit irrégulier (24 jours entre les deux premières commandes), le délai actuel dépasse largement la fréquence observée. En application du principe de précaution B2B (risque de rupture imminent ou cycle incertain), un besoin de réapprovisionnement est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 3u. Conformément à la règle de privilégier la médiane et, en cas de doute entre deux valeurs, de choisir la plus basse pour éviter le surstockage sur des produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 180 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 69 jours avant la date actuelle. Le cycle entre les deux dernières commandes était de 24 jours. Le délai actuel dépasse largement ce cycle et l'horizon de réapprovisionnement de 30 jours. Par principe de précaution B2B face à un cycle irrégulier, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 3u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 169 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>4. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande d'environ 24 jours entre août et septembre. Depuis la dernière commande du 05/09/2025, 69 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 125 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 24 jours (entre le 12/08 et le 05/09). Depuis la dernière commande du 05/09, 69 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une consommation non couverte. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (moyenne entre 1u et 3u), afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 160 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/09/2025, soit 69 jours avant la date actuelle. Le cycle précédent était de 24 jours. Le délai actuel dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1 unité (médiane basse).

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 186 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 69 jours. Bien que la rotation soit très faible, l'intervalle entre les deux dernières commandes était de 24 jours. Le délai actuel dépasse largement ce cycle et le seuil de réapprovisionnement de 30 jours est largement entamé. Par principe de précaution B2B pour éviter une rupture prolongée sur un produit actif, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 181 tokens
- **Total**: 1,069 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 1u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 3u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 3u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 1u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 3u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 2u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:09:35: 1u
- 2025-08-12 07:14:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:57.516Z*
