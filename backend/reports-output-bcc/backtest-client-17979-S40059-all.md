# Rapport Backtest - Client Press Line SA

## Contexte

- **Client** : Press Line SA (ID: 17979)
- **Commande réelle** : S40059
- **Date commande** : 2025-11-05 14:51:35
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 26,528 input + 4,748 output = 31,276 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.7% | 30 produits prédits, 8 corrects |
| **Rappel** | 66.7% | 12 produits réels, 8 détectés |
| **F1-Score** | 38.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est d'environ 105 jours. La dernière commande date du 24 septembre, soit il y a 41 jours. Bien que nous ne soyons pas encore à l'échéance théorique du cycle, la rotation est irrégulière et faible. En application du principe de précaution B2B (incertitude sur le cycle), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes de 2 unités. La médiane est de 2. On maintient cette quantité constante sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 163 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 septembre, soit 41 jours. Le cycle précédent était de 70 jours. Bien que nous ne soyons pas encore au terme du cycle moyen, le délai de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture (41 + 30 = 71 jours). En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 169 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>3. [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 24 septembre, soit 41 jours avant la date actuelle. Bien que le volume soit faible (1u), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'un historique plus dense pour établir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée. La quantité retenue correspond à la médiane des commandes récentes (1u), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 118 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 105 jours (entre juin et septembre). La dernière commande date du 24 septembre, soit il y a 41 jours. Bien que le cycle théorique ne soit pas encore atteint, la rotation est irrégulière et faible. En application du principe de précaution B2B (si doute sur le cycle → prévoir), et pour couvrir l'horizon de 30 jours (seuil de réapprovisionnement), une commande est déclenchée. ÉTAPE 2 : Estimation de la quantité. Les deux dernières commandes sont identiques (2u). La médiane est de 2. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 187 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>5. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle observé entre les deux premières commandes (35 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 1u et 2u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 168 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit de type tartinade suggère un besoin de réapprovisionnement imminent ou un cycle irrégulier. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément aux règles pour les rotations faibles (maintenir 1-2u) et à l'utilisation de la médiane historique, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 175 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 146 jours. Bien que la rotation soit très faible, l'absence de commandes récentes sur un produit actif crée une incertitude sur le cycle. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un réapprovisionnement est préconisé. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 2 unités (médiane de l'historique disponible) pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 171 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>8. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 11 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 183 tokens
- **Total**: 1,057 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:01:05: 2u
- 2025-06-11 13:23:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:01:05: 2u
- 2025-07-16 06:25:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:01:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:01:05: 2u
- 2025-06-11 13:23:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 06:25:49: 1u
- 2025-06-11 13:23:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:23:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:23:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:23:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (22)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Predicted 2u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 2 | Predicted 2u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 2 | Predicted 2u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Predicted 2u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Never ordered in previous analysis window (no history) |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Never ordered in previous analysis window (no history) |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Never ordered in previous analysis window (no history) |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:29.261Z*
