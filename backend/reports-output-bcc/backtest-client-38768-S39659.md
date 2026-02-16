# Rapport Backtest - Client CRF MARKET SOUMAGNE GEMA SA

## Contexte

- **Client** : CRF MARKET SOUMAGNE GEMA SA (ID: 38768)
- **Commande réelle** : S39659
- **Date commande** : 2025-10-13 07:35:01
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 27,244 input + 4,861 output = 32,105 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.7% | 30 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 53.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit environ 51 jours. Bien que la rotation soit faible, l'historique montre une commande à la même période l'année précédente (juillet) et un intervalle d'environ 3 mois entre les commandes de 2025. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou le besoin de renouveler le stock de présentation est présent. En B2B, le principe de précaution s'applique pour éviter une absence de produit sur une longue période. ÉTAPE 2 : Estimation quantité. L'historique est constant avec des commandes unitaires (1u) en 2024 et 2025. La médiane et le mode sont de 1. On maintient donc cette quantité de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 202 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit 51 jours. Le cycle moyen récent est d'environ 50-60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable avant la prochaine opportunité de commande. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent (2025) et passé (2024) montre une stabilité absolue avec des commandes systématiques de 1 unité. La médiane est de 1. On maintient cette quantité constante.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 163 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit 51 jours. Le cycle précédent était de 57 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le risque de rupture est imminent (89% du cycle moyen atteint). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande. La médiane des commandes récentes est de 1. Conformément à la règle de ne pas surestimer pour les rotations faibles, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 166 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 43 à 57 jours. La dernière commande datant du 22 août (soit 51 jours avant la date actuelle), nous avons dépassé 70% du cycle moyen estimé. En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. Concernant la quantité, l'historique récent est extrêmement stable avec une rotation constante de 1 unité par commande. La médiane étant de 1, cette quantité est maintenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 138 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais constante), un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 1u et l'historique N-1 montre 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 163 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>6. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 mai 2025, soit environ 151 jours. Bien que la rotation soit extrêmement faible et irrégulière (une seule commande en 2024 et une en 2025), le délai écoulé depuis la dernière vente dépasse largement tout cycle raisonnable. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre une constante de 1 unité par commande (médiane = 1). Conformément à la règle sur les rotations très faibles, on maintient la quantité minimale de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 183 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 mai 2025, soit environ 150 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées (mars, juillet, mai). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 156 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>8. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte au 14 mai 2025, soit environ 151 jours. Bien que le cycle soit difficile à définir précisément, l'historique N-1 montre une commande en septembre (20/09/2024), suggérant un besoin potentiel à cette période de l'année. En application du principe de précaution B2B (incertitude sur le cycle = prévoir) et pour éviter une rupture prolongée sur un produit à faible rotation, une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 160 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>9. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 mai 2025, soit environ 151 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B s'applique face à une absence de commande sur une période aussi longue pour un produit actif. Un risque de rupture ou un besoin de renouvellement de stock est probable d'ici 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique. La médiane des commandes récentes est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 159 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>10. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 mai 2025, soit environ 151 jours. L'historique montre un cycle de rotation lent mais régulier (environ tous les 2 à 4 mois). Bien que le cycle habituel soit dépassé, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le produit a été commandé à la même période l'année précédente (juillet/octobre). La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique (toutes les commandes passées sont de 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 151 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 mai 2025, soit environ 150 jours sans activité. L'historique de l'année précédente montre une commande de 3 unités le 20 septembre 2024, indiquant un besoin saisonnier ou une rotation lente mais existante à cette période de l'année. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane des commandes historiques (1, 1, 2, 3), afin de couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 151 tokens
- **Total**: 1,073 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 13:48:16: 1u
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 10:31:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 13:48:16: 1u
- 2025-06-26 09:24:18: 1u
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 07:41:40: 1u
- 2024-03-28 07:54:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 13:48:16: 1u
- 2025-06-26 09:24:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-28 07:54:21: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 13:48:16: 1u
- 2025-06-26 09:24:18: 1u
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:24:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 07:41:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 07:41:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 10:31:00: 1u
- 2024-03-28 07:54:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 07:41:40: 1u
- 2024-05-16 06:57:23: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 10:31:00: 1u
- 2024-05-16 06:57:23: 1u
- 2024-03-28 07:54:21: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 11:30:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 07:41:40: 3u
- 2024-05-16 06:57:23: 2u
- 2024-03-28 07:54:21: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:35.414Z*
