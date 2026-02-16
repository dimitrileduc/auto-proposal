# Rapport Backtest - Client CRF MARKET EUPEN SHOPPING CENT ROTENBERG

## Contexte

- **Client** : CRF MARKET EUPEN SHOPPING CENT ROTENBERG (ID: 29081)
- **Commande réelle** : S40323
- **Date commande** : 2025-11-13 12:27:19
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 80
- **Tokens**: 74,270 input + 12,574 output = 86,844 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 8.7% | 69 produits prédits, 6 corrects |
| **Rappel** | 75.0% | 8 produits réels, 6 détectés |
| **F1-Score** | 15.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 81.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 80.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -81.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | partial | LLM |
| [LD011] LD Organic Kids Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 20 à 35 jours entre chaque commande (dernières commandes le 17/10 et le 07/11). Avec une dernière commande effectuée il y a seulement 5 jours, nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). Le cycle étant court et la rotation faible mais constante, le principe de précaution B2B s'applique. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la quantité la plus basse observée, afin d'éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 157 tokens
- **Total**: 1,179 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre une rotation régulière mais lente avec un cycle moyen d'environ 60 à 80 jours. La dernière commande date du 7 novembre 2025 (il y a 5 jours). Bien que le cycle habituel ne soit pas encore atteint, l'historique N-1 montre une accélération des besoins sur la période octobre/novembre (commandes rapprochées en 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est préconisé. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes récentes et à la tendance de consommation stable de ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 176 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/11/2025. Bien que le cycle historique soit long (environ 90 jours), le seuil de réapprovisionnement de 30 jours et le principe de précaution B2B imposent une vigilance. En cas de rotation irrégulière ou de faible volume, il est préférable de prévoir une unité pour éviter une rupture prolongée si le stock actuel est nul. ÉTAPE 2 : Estimation quantité. L'historique récent montre une constance absolue avec des commandes de 1 unité. La médiane est de 1. Conformément aux règles pour les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 169 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>4. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 octobre, soit 26 jours avant la date actuelle. Le cycle précédent était de 95 jours, mais avec seulement deux points de données, le cycle est irrégulier. En appliquant le principe de précaution B2B et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture existe. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles pour les rotations faibles (1-2u), la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 152 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 40 jours (juillet, août, septembre). La dernière commande datant du 11 septembre 2025, soit il y a 62 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent ou une consommation déjà effectuée. Conformément à la règle de précaution B2B et à la stabilité des volumes récents (médiane de 1u sur les trois dernières commandes), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 158 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>6. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
La dernière commande remonte à 121 jours (14 juillet). Bien que la rotation soit très faible (1 unité), l'absence de commande récente et l'incertitude sur le cycle de réapprovisionnement imposent l'application du principe de précaution B2B. Selon la règle de détection du besoin, en cas de doute sur le cycle ou de rotation irrégulière, il convient de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane historique et respectant la règle de ne pas augmenter les stocks sans raison sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 139 tokens
- **Total**: 1,013 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 07:28:04: 1u
- 2025-10-17 06:37:14: 2u
- 2025-09-11 13:46:55: 1u
- 2025-08-06 13:15:33: 1u
- 2025-06-17 07:23:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 07:12:57: 1u
- 2024-10-03 13:46:06: 1u
- 2024-06-04 06:42:54: 2u
- 2024-05-06 07:15:31: 1u
- 2024-03-12 07:34:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 07:28:04: 1u
- 2025-09-11 13:46:55: 1u
- 2025-06-17 07:23:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 07:12:57: 1u
- 2024-10-03 13:46:06: 1u
- 2024-05-06 07:15:31: 2u
- 2024-03-12 07:34:13: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 07:28:04: 1u
- 2025-08-06 13:15:33: 1u
- 2025-07-14 09:23:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 06:37:14: 1u
- 2025-07-14 09:23:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:46:55: 1u
- 2025-08-06 13:15:33: 1u
- 2025-07-14 09:23:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:46:06: 1u
- 2024-06-04 06:42:54: 2u
- 2024-03-12 07:34:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>6. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:23:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>




---

## False Positives (63)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Predicted 1u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Predicted 1u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 2 | Predicted 2u but not ordered |
| [CB001] CB Apple juice 25cl | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [MF0059] MF Confi Fraise- Ardbei | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Predicted 1u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Predicted 1u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [MF0024] MF KETCHUP 250g | 1 | Predicted 1u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Predicted 1u but not ordered |
| [CB006] CB Blackcurrant Apple juice 1l | 2 | Predicted 2u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Product analyzed but LLM -> 0 - client ordered 8u |
| [LD015] LD Onion Spread 180g | 4 | Product analyzed but LLM -> 0 - client ordered 4u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM predit: 0u | Reel commande: 8u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande (1u) a été effectuée il y a seulement 5 jours (le 07/11/2025). L'historique montre un cycle de rotation lent et régulier d'environ 60 à 70 jours entre chaque unité. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est inexistant à court terme puisque nous sommes au tout début d'un nouveau cycle de consommation. Aucun besoin de commande n'est détecté pour cette période.

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM predit: 0u | Reel commande: 4u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande de ce produit (1u) a été effectuée il y a seulement 5 jours (le 07/11/2025). L'historique montre une rotation extrêmement faible et sporadique, avec un intervalle de près de 4 mois entre les deux seules commandes enregistrées. Étant donné que le stock vient d'être renouvelé très récemment et que la fréquence de vente est très basse, il n'y a aucun risque de rupture dans l'horizon des 30 prochains jours. Aucun réapprovisionnement n'est nécessaire pour le moment.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:06:52.370Z*
