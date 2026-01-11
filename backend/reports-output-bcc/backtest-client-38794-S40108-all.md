# Rapport Backtest - Client DLL AD CHAUDFONTAINE

## Contexte

- **Client** : DLL AD CHAUDFONTAINE (ID: 38794)
- **Commande réelle** : S40108
- **Date commande** : 2025-11-04 11:04:51
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,969 input + 4,340 output = 31,309 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.8% | 29 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 61.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 19.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 47 jours avant la date actuelle. L'historique montre une rotation très faible et espacée (environ une unité tous les 1.5 à 2 mois selon les données N et N-1). Le délai depuis la dernière commande dépasse largement le cycle de rotation estimé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement pour maintenir le stock en rayon. En suivant la règle de précaution B2B et la gestion des rotations faibles (1-2u), une commande de 1 unité (médiane historique) est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 146 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 30 et 60 jours. La dernière commande remontant au 17 septembre (soit 47 jours), le délai dépasse largement le seuil de 70% du cycle moyen, créant un risque de rupture imminent dans les 30 prochains jours. Bien que l'historique N-1 montre des volumes légèrement supérieurs, l'historique récent est très stable avec une rotation régulière de 1 unité par commande. En application de la règle de la médiane sur les commandes récentes et du principe de précaution pour les rotations faibles, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 146 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>3. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande moyen est d'environ 65 jours (63 jours entre juin et juillet, 65 jours entre juillet et septembre). La dernière commande remonte au 17 septembre 2025, soit 47 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 3 décembre (soit 77 jours après la dernière commande). Le risque de rupture est avéré car nous dépassons largement le cycle habituel durant cette période. Conformément à la règle de la médiane sur l'historique récent (1u, 1u, 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 176 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 47 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 1 à 2 mois). En appliquant le principe de précaution B2B, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture imminent. L'historique de l'année précédente confirme également une activité sur cette période (octobre/novembre). La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 161 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 47 jours. L'historique N-1 montre une activité régulière en octobre et novembre (cycle moyen observé d'environ 45-60 jours sur ce produit à faible rotation). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est réel pour couvrir la fin d'année. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 1u. La médiane historique, hors pics exceptionnels de juillet N-1, est de 1u. En respectant le principe de précaution B2B sans surestimer pour un produit à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 178 tokens
- **Total**: 1,166 tokens



</details>


<details>
<summary><strong>6. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 40 et 80 jours. La dernière commande remonte au 17 septembre 2025, soit 47 jours avant la date actuelle. Étant donné que nous entrons dans la fenêtre de réapprovisionnement (seuil de 30 jours) et que l'historique N-1 montre une activité en octobre/novembre, un risque de rupture est identifié. En suivant la règle de la médiane des commandes récentes (1u, 2u, 1u), la quantité retenue est de 1 unité pour couvrir le besoin sans surstocker sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 152 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 60 jours (juin-juillet-septembre). La dernière commande datant du 17 septembre 2025, soit il y a 47 jours, nous avons dépassé 70% du cycle moyen. Un risque de rupture est donc identifié pour les 30 prochains jours (Replenishment Threshold Days). Concernant la quantité, bien que l'historique N-1 affichait des pics à 2u, les trois dernières commandes de 2025 sont constantes à 1u. En application de la règle de la médiane sur l'historique récent et du principe de ne pas surestimer les faibles rotations, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 176 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>8. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 30 à 45 jours. La dernière commande remontant au 17 septembre (soit 47 jours), le délai moyen est dépassé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre une commande en octobre, l'absence de mouvement récent confirme le besoin de déclencher une commande par précaution. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes récentes (rotation faible et régulière).

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 146 tokens
- **Total**: 1,170 tokens



</details>


<details>
<summary><strong>9. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles irréguliers (42 à 55 jours environ). La dernière commande remonte au 17 septembre 2025, soit 47 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou une commande déjà due selon le principe de précaution B2B. L'historique de l'année précédente (N-1) confirme également une activité régulière sur la période octobre/novembre. Pour la quantité, la médiane des commandes récentes (1, 2, 3) est de 2 unités. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 162 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>10. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 40 à 50 jours. La dernière commande remonte au 17 septembre 2025, soit 47 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une vente manquée. Bien que l'historique N-1 montre des pics à 2 unités, les commandes récentes sont systématiquement de 1 unité. En application de la règle de la médiane sur l'historique récent et du principe de précaution sans surstockage, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 154 tokens
- **Total**: 1,161 tokens



</details>


<details>
<summary><strong>11. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 06/08/2025, soit environ 89 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle trimestriel standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane historique et au maintien strict du stock pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 116 tokens
- **Total**: 984 tokens



</details>


<details>
<summary><strong>12. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit plus de 110 jours sans activité. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle suggéré par l'historique (environ 80 jours entre la commande de 2024 et celle de 2025). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un réapprovisionnement est nécessaire. La quantité retenue correspond à la médiane historique (1 unité).

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 132 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>13. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 144 jours (2 unités). Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils habituels. En cas de doute sur le cycle, une commande est prévue pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la valeur unique de l'historique récent, conformément à la règle de maintien des faibles rotations (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 134 tokens
- **Total**: 1,008 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-07-14 09:12:22: 1u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u
- 2024-09-03 07:31:07: 2u
- 2024-07-15 07:56:08: 2u
- 2024-07-12 10:35:47: 2u
- 2024-06-04 13:13:29: 1u
- 2024-05-06 12:49:53: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-07-14 09:12:22: 1u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-07-14 09:12:22: 2u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u
- 2024-09-03 07:31:07: 2u
- 2024-07-15 07:56:08: 3u
- 2024-07-12 10:35:47: 3u
- 2024-06-04 13:13:29: 2u
- 2024-05-06 12:49:53: 1u
- 2024-03-26 13:17:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-07-14 09:12:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u
- 2024-09-03 07:31:07: 1u
- 2024-07-15 07:56:08: 3u
- 2024-07-12 10:35:47: 3u
- 2024-05-06 12:49:53: 2u
- 2024-03-26 13:17:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-08-06 11:17:40: 2u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u
- 2024-09-03 07:31:07: 1u
- 2024-07-12 10:35:47: 1u
- 2024-06-04 13:13:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-07-14 09:12:22: 1u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:31:07: 2u
- 2024-07-15 07:56:08: 2u
- 2024-05-06 12:49:53: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-08-06 11:17:40: 1u
- 2025-07-14 09:12:22: 1u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u
- 2024-07-15 07:56:08: 2u
- 2024-07-12 10:35:47: 1u
- 2024-06-04 13:13:29: 1u
- 2024-05-06 12:49:53: 1u
- 2024-03-26 13:17:28: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-08-06 11:17:40: 3u
- 2025-06-12 12:33:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u
- 2024-09-03 07:31:07: 2u
- 2024-07-15 07:56:08: 3u
- 2024-07-12 10:35:47: 2u
- 2024-06-04 13:13:29: 2u
- 2024-03-26 13:17:28: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:28:40: 1u
- 2025-08-06 11:17:40: 1u
- 2025-07-14 09:12:22: 1u
- 2025-06-12 12:33:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:31:07: 2u
- 2024-07-12 10:35:47: 1u
- 2024-06-04 13:13:29: 1u
- 2024-05-06 12:49:53: 2u
- 2024-03-26 13:17:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 11:17:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:12:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:58:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-12 12:33:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:06.629Z*
