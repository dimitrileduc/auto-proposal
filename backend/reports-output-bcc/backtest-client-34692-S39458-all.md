# Rapport Backtest - Client CARREFOUR BELGIUM SA, CARREFOUR MARKET DIEPENBEEK

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CARREFOUR MARKET DIEPENBEEK (ID: 34692)
- **Commande réelle** : S39458
- **Date commande** : 2025-09-30 06:05:53
- **Date cutoff système** : 2025-09-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 24,714 input + 4,381 output = 29,095 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.7% | 27 produits prédits, 11 corrects |
| **Rappel** | 91.7% | 12 produits réels, 11 détectés |
| **F1-Score** | 56.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


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
L'analyse de l'historique montre une rotation faible mais régulière (environ tous les 3 à 4 mois). La dernière commande remonte au 05/08/2025, soit 55 jours. Bien que le cycle moyen soit légèrement supérieur, nous entrons dans une période où une commande a été passée l'année dernière (20/09/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de toutes les commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 148 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/08/2025, soit 55 jours. L'historique montre une commande à la même période l'année dernière (20/09/2024). Le cycle moyen constaté est d'environ 3 à 5 mois, mais l'absence de commande depuis août et la saisonnalité N-1 suggèrent un besoin imminent ou un risque de rupture dans l'horizon des 30 jours. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est extrêmement stable avec des commandes unitaires systématiques (1u). La médiane est de 1. On maintient cette quantité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 191 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse montre un cycle de commande long et irrégulier (environ 90 jours entre les deux dernières commandes). La dernière commande datant du 5 août, soit il y a 55 jours, nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de précaution B2B). En application du principe de précaution face à un cycle incertain, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 129 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande remontant au 05/08/2025 (soit 55 jours), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien qu'une commande de 3u ait été observée l'an dernier à la même période, la tendance récente est stable à 1u ou 2u. En appliquant la règle de la médiane sur l'historique récent (1, 1, 2) et le principe de prudence sur les quantités pour éviter le surstockage, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 170 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>5. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/08/2025, soit 55 jours. Bien que le cycle historique soit irrégulier, le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques (2u), ce qui permet de maintenir le stock sans surstockage pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 124 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>6. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/08/2025, soit 55 jours. Le cycle moyen récent est d'environ 45-55 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. L'historique N-1 montre également une commande à cette période (20/09/2024). Le besoin est confirmé par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les trois dernières commandes sont constantes à 2 unités. La médiane historique récente est de 2. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 2 unités sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 179 tokens
- **Total**: 1,137 tokens



</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 45 à 55 jours. La dernière commande datant du 5 août (soit 55 jours avant la date actuelle), le seuil de réapprovisionnement est largement atteint. Le risque de rupture est imminent dans l'horizon des 30 jours. En suivant la règle de la médiane des commandes récentes (2u, 2u, 1u), la quantité recommandée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 123 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/07/2025, soit environ 90 jours. Bien que la rotation soit très faible, l'historique montre une commande en juillet 2024 et une autre en avril 2024. Le délai depuis la dernière commande dépasse largement le cycle habituel constaté. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 179 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière (dernière commande il y a 90 jours, soit le 01/07/2025). Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B s'applique car le délai depuis la dernière commande est important. En cas de doute sur le cycle ou de rotation sporadique, il convient de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte des historiques récents et N-1, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 139 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 140 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique car le cycle est irrégulier et difficile à déterminer. Un risque de rupture est considéré par défaut pour maintenir le référencement en rayon. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1u sans augmenter pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 152 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>11. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport à l'historique (commande en avril l'année précédente) suggère un risque de rupture ou un besoin de renouvellement de stock imminent. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est déclenchée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite à 2 unités. Conformément à la règle sur les rotations faibles, on maintient la quantité historique de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 178 tokens
- **Total**: 1,068 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 1u
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:45:49: 1u
- 2024-07-11 14:27:29: 1u
- 2024-04-18 09:54:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 1u
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:45:49: 1u
- 2024-04-18 09:54:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 1u
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 07:37:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 2u
- 2025-07-01 06:52:40: 1u
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:45:49: 1u
- 2024-07-11 14:27:29: 3u
- 2024-05-16 07:37:46: 1u
- 2024-04-18 09:54:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:45:49: 2u
- 2024-05-16 07:37:46: 1u
- 2024-04-18 09:54:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 2u
- 2025-07-01 06:52:40: 2u
- 2025-05-08 07:23:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:45:49: 3u
- 2024-05-16 07:37:46: 2u
- 2024-04-18 09:54:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:26:19: 2u
- 2025-07-01 06:52:40: 2u
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 06:45:49: 2u
- 2024-04-18 09:54:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 06:52:40: 1u
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 14:27:29: 1u
- 2024-04-18 09:54:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 06:52:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 09:54:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 07:23:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 07:23:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 09:54:57: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:11:28.459Z*
