# Rapport Backtest - Client Epices & Tout

## Contexte

- **Client** : Epices & Tout (ID: 25028)
- **Commande réelle** : S39255
- **Date commande** : 2025-10-28 07:18:33
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,987 input + 2,313 output = 15,300 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.7% | 14 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 92.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 34.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -22.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 5 | 6 | 1.0 | 16.7% | partial | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0024] MF KETCHUP 250g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0047] MF Mayonnaise 250ml | 3 | 5 | 2.0 | 40.0% | partial | LLM |
| [MF0052] MF Pois chiches  500g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0051] MF Kidney Beans 500g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [MF0059] MF Confi Fraise- Ardbei | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit environ 119 jours. Bien que l'historique récent soit espacé, l'historique N-1 montre une activité régulière en fin d'année (novembre) et durant l'automne (septembre). En application du principe de précaution B2B et face à l'incertitude du cycle de rotation actuel, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 4u et 6u. La médiane de ces commandes est de 5u. Ce volume est cohérent avec les commandes historiques de l'année précédente (moyenne autour de 4-5u). On retient la médiane de 5u pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 208 tokens
- **Total**: 1,199 tokens



</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à 119 jours (30 juin 2025), ce qui dépasse largement le cycle de rotation observé historiquement. Bien que la rotation soit lente, le principe de précaution B2B impose un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu en novembre l'année précédente (saisonnalité potentielle). La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques (2u), tout en privilégiant la valeur la plus basse pour éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 139 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit environ 119 jours. Bien que le cycle historique soit irrégulier (allant de 1 à 4 mois), le délai actuel dépasse largement les intervalles habituels, ce qui crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques (2u), tout en respectant la règle de choisir la valeur la plus basse en cas de doute sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 151 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit environ 119 jours. L'historique N-1 montre une commande fin août et une en novembre. Bien que le cycle soit irrégulier, l'absence de commande depuis 4 mois et l'approche de la période de fin d'année (commande enregistrée le 28/11 l'an dernier) créent un doute sur le stock disponible. En application du principe de précaution B2B, un besoin est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent affiche 4u, mais l'historique long terme (N-1) est très stable à 3u (médiane de 3u sur 5 commandes). En cas de doute entre 3u et 4u, la règle impose de choisir la valeur la plus basse pour éviter le surstock. La quantité retenue est donc de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 232 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>5. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit environ 119 jours. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 90 jours entre mars et juin). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la quantité la plus fréquente (mode) constatée.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 129 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à près de 4 mois (30 juin), ce qui dépasse largement le cycle habituel observé l'année précédente. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint. Pour la quantité, la médiane historique globale se situe à 3 unités (valeurs : 1, 2, 3, 3, 3, 4). On retient cette valeur de 3 unités, cohérente avec la majorité des commandes passées, en ignorant le pic ponctuel de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 156 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>7. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 30 juin 2025, soit environ 119 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (27 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 159 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>8. [MF0024] MF KETCHUP 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte à environ 120 jours (fin juin), ce qui dépasse largement les intervalles historiques observés. En application du principe de précaution B2B et face à l'incertitude du cycle actuel, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane des commandes récentes (2u), conformément à la règle de maintien des volumes pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 115 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>9. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (Détection) : La dernière commande remonte au 30 juin 2025, soit environ 119 jours. Bien que le cycle historique soit irrégulier, l'absence de commande depuis près de 4 mois, combinée à un historique de commandes à cette période l'année dernière (août/novembre), indique un besoin imminent ou un risque de rupture pour couvrir les 30 prochains jours. En B2B, le principe de précaution s'applique face à ce délai prolongé. ÉTAPE 2 (Quantité) : Les commandes récentes sont stables à 3 unités. La médiane historique globale (incluant N-1) se situe également autour de 2-3 unités. Conformément à la règle de maintien de la rotation régulière et de prudence, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 967 tokens
- **Output**: 190 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>10. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (environ une unité tous les 3 à 4 mois). La dernière commande enregistrée remonte au 30 juin 2025, soit il y a environ 119 jours. Ce délai dépasse largement le cycle moyen observé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock de fond. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité recommandée est fixée à 1 unité (médiane historique) pour couvrir la période de 30 jours sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 951 tokens
- **Output**: 144 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>11. [MF0051] MF Kidney Beans 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit environ 119 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (27 jours entre les deux premières commandes) crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (mieux vaut prévenir une rupture qu'une absence de stock), un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 1u et 2u. La médiane est de 1,5u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 187 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>12. [MF0059] MF Confi Fraise- Ardbei</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/06/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B (incertitude = besoin de réapprovisionnement) pour éviter une rupture prolongée. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (2u). Conformément aux règles de rotation faible, on maintient ce volume sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 138 tokens
- **Total**: 1,007 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 6u
- 2025-06-03 13:36:17: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-25 06:26:00: 4u
- 2024-08-30 07:49:55: 6u
- 2024-06-17 06:23:52: 1u
- 2024-03-14 13:43:25: 6u
- 2024-02-01 11:41:21: 5u
- 2023-11-28 08:28:26: 3u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 2u
- 2025-06-03 13:36:17: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 2u
- 2024-03-14 13:43:25: 5u
- 2024-02-01 11:41:21: 2u
- 2023-11-28 08:28:26: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 2u
- 2025-06-03 13:36:17: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 2u
- 2024-03-14 13:43:25: 1u
- 2023-11-28 08:28:26: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 3u
- 2024-06-17 06:23:52: 3u
- 2024-03-14 13:43:25: 2u
- 2024-02-01 11:41:21: 3u
- 2023-11-28 08:28:26: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 2u
- 2024-06-17 06:23:52: 3u
- 2024-03-14 13:43:25: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 2u
- 2025-06-03 13:36:17: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 3u
- 2024-06-17 06:23:52: 3u
- 2024-03-14 13:43:25: 3u
- 2024-02-01 11:41:21: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 1u
- 2025-06-03 13:36:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [MF0024] MF KETCHUP 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 2u
- 2025-06-03 13:36:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 2u
- 2024-03-14 13:43:25: 3u
- 2024-02-01 11:41:21: 2u
- 2023-11-28 08:28:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0047] MF Mayonnaise 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 3u
- 2025-06-03 13:36:17: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-30 07:49:55: 4u
- 2024-06-17 06:23:52: 2u
- 2024-03-14 13:43:25: 5u
- 2024-02-01 11:41:21: 2u
- 2023-11-28 08:28:26: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>10. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 1u
- 2025-06-03 13:36:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-25 06:26:00: 1u
- 2024-06-17 06:23:52: 1u
- 2024-03-14 13:43:25: 1u
- 2023-11-28 08:28:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [MF0051] MF Kidney Beans 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:37:49: 1u
- 2025-06-03 13:36:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>12. [MF0059] MF Confi Fraise- Ardbei</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 13:36:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:14.410Z*
