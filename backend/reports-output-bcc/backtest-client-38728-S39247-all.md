# Rapport Backtest - Client CRF CRESCEMA (MAASEIK)

## Contexte

- **Client** : CRF CRESCEMA (MAASEIK) (ID: 38728)
- **Commande réelle** : S39247
- **Date commande** : 2025-09-17 06:54:18
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 24,647 input + 4,434 output = 29,081 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.2% | 27 produits prédits, 23 corrects |
| **Rappel** | 100.0% | 23 produits réels, 23 détectés |
| **F1-Score** | 92.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.35 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 12.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 16 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (23)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (23 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 24 juillet 2025, soit 54 jours. Le cycle historique montre des commandes environ tous les 40 à 70 jours (ex: juin à juillet 2025 = 38 jours ; avril à juillet 2024 = 72 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En application du principe de précaution B2B et face à un cycle de rotation lent mais existant, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes et historiques (mode à 2u).

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 163 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 24 juillet 2025, soit 54 jours d'inactivité. L'historique de l'année précédente montre des commandes régulières tous les 2 à 3 mois (avril, juillet, septembre). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est statistiquement attendue pour couvrir la période de septembre. Bien que la dernière commande ait été de 4 unités, l'historique long terme (N-1) est stable à 2 unités. En application du principe de précaution B2B (détection d'un besoin probable) et de la règle de la médiane/valeur basse en cas de doute sur le volume, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 180 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 40 à 60 jours. La dernière commande enregistrée date du 24 juillet 2025, soit il y a 54 jours. Le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien que l'historique récent soit limité, la quantité de 4 unités est constante sur les deux dernières commandes de 2025 ainsi que sur la majorité des commandes de 2024. En suivant la règle de la médiane et de la stabilité du cycle, une commande de 4 unités est nécessaire pour couvrir les besoins immédiats.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 155 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 juillet 2025, soit 54 jours. L'historique montre des cycles de réapprovisionnement espacés (environ 2 à 3 mois). À la date du 16 septembre, nous entrons dans la fenêtre critique de réapprovisionnement pour éviter une rupture dans les 30 prochains jours (seuil de précaution B2B). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une consommation très stable de 2 unités par commande (médiane de 2). Conformément à la règle de maintien des rotations faibles, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 166 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>5. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (1 unité par commande). La dernière commande remonte au 24 juillet 2025, soit 54 jours avant la date actuelle. Le cycle observé entre les deux dernières commandes était de 38 jours. Nous avons largement dépassé ce cycle moyen, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B, surtout avec un seuil de réapprovisionnement de 30 jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 150 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>6. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 juillet 2025, soit 54 jours. Le cycle précédent était de 38 jours. Nous sommes largement au-delà du cycle moyen constaté cette année. De plus, l'historique N-1 montre une activité en septembre (13/09/2024). Le risque de rupture est avéré ou le besoin de réapprovisionnement est imminent selon le principe de précaution B2B. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 1u, tandis que l'année dernière elles étaient de 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute et de respecter la tendance récente, la médiane de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 184 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>7. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que l'historique soit irrégulier, le délai actuel dépasse largement les cycles observés précédemment (environ 60-80 jours entre les commandes N-1). En application du principe de précaution B2B et face à un cycle incertain, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes significatives est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 189 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>8. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. L'historique N-1 montre une commande le 13 septembre 2024, ce qui indique une saisonnalité ou un besoin récurrent à cette période de l'année. Le cycle est irrégulier, ce qui impose l'application du principe de précaution B2B pour éviter une rupture. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes historiques (1, 1, 2, 3) se situe entre 1 et 2. La commande la plus récente étant de 2 unités, nous maintenons ce volume pour couvrir le besoin sans surstocker un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 174 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>9. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que la rotation soit très faible, l'historique de l'année précédente montre une commande à la même période (13 septembre 2024). En application du principe de précaution B2B et pour éviter une rupture sur un cycle long, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 153 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 16 juin 2025, soit 92 jours sans activité. Bien que la rotation soit faible, l'historique N-1 montre une commande de 4 unités début juillet. En application du principe de précaution B2B et face à un cycle irrégulier/long, un risque de rupture est identifié pour couvrir la période à venir. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent est très limité (1u) et l'historique N-1 oscille entre 2u et 4u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 193 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>11. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit 92 jours sans activité. Bien que le cycle historique soit irrégulier, le délai écoulé dépasse largement les intervalles habituels, créant une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité de la dernière commande, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 135 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 16 juin 2025, soit 92 jours sans réapprovisionnement. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les standards de rotation habituels pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et au volume de la commande la plus récente, tout en restant prudente par rapport au pic de l'année précédente (4u).

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 132 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>13. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes en avril et juillet. Avec un seuil de réapprovisionnement de 30 jours et une absence de commande depuis 3 mois, le risque de rupture ou de besoin imminent est élevé selon le principe de précaution B2B. ÉTAPE 2 : L'historique récent est limité à 1 unité, mais les commandes de l'année précédente (N-1) à la même période indiquent un volume de 2 unités. En suivant la règle de se baser sur N-1 en l'absence d'historique récent significatif, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 898 tokens
- **Output**: 181 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>14. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. L'historique N-1 montre des commandes en juillet et septembre, indiquant une saisonnalité ou un besoin de réapprovisionnement à cette période de l'année. Le délai depuis la dernière commande dépasse largement un cycle trimestriel standard. Par principe de précaution B2B et pour couvrir l'horizon de 30 jours, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent est très faible (1u). L'historique N-1 montre des volumes de 2u et 3u. La médiane de l'historique global se situe à 2u. En suivant la règle de ne pas surestimer tout en assurant une rotation minimale, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 201 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>15. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit il y a 92 jours. Bien que la rotation soit très faible, l'historique de l'année précédente montre une commande à la même période (13 septembre 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (seuil de réapprovisionnement), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et à la règle de maintien pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 138 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>16. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 16 juin 2025, soit 92 jours. L'historique N-1 montre une commande le 13 septembre 2024. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car nous sommes dans la période anniversaire de la commande de l'an dernier et le délai depuis la dernière commande est important. Le risque de rupture est considéré comme présent par incertitude de cycle. ÉTAPE 2 : L'historique récent et N-1 montre des quantités de 1u et 2u. En suivant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 181 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>17. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais constante), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstock tout en assurant la présence en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 174 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>18. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais constante), un besoin est identifié pour maintenir le référencement en rayon. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 169 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>19. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 70 jours entre avril et juillet). En application du principe de précaution B2B, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique montre une constante de 1 unité par commande. Conformément à la règle sur les rotations faibles, la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 158 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>20. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit il y a 92 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé depuis la dernière commande dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (Étape 1), un risque de rupture est identifié à l'horizon des 30 jours de seuil de réapprovisionnement. Pour la quantité (Étape 2), la médiane historique étant de 1 unité, cette valeur est maintenue pour éviter tout surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 139 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>21. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 92 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juillet. Le délai écoulé dépasse largement les cycles habituels constatés, créant un doute sur la disponibilité du stock actuel. En application du principe de précaution B2B, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 160 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>22. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit plus de 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (avril à juillet). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit bio à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande effectuée, afin de ne pas surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 125 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>23. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande de 2 unités le 13 septembre 2024. Nous sommes actuellement le 16 septembre 2025, ce qui correspond exactement à la période de consommation annuelle identifiée. En l'absence de données récentes et par principe de précaution B2B pour éviter une rupture sur un produit à rotation lente, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. En se basant sur l'historique N-1 (2 unités) et conformément à la règle de maintien des faibles rotations (1-2u), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 168 tokens
- **Total**: 1,059 tokens



</details>




### Donnees d'Input LLM (23 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-24 06:51:34: 2u
- 2025-06-16 10:18:47: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 3u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-24 06:51:34: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 2u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-24 06:51:34: 4u
- 2025-06-16 10:18:47: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 4u
- 2024-04-23 11:31:37: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-24 06:51:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 3u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-24 06:51:34: 1u
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-24 06:51:34: 1u
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 0u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 3u
- 2024-07-04 08:24:02: 1u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 1u
- 2024-07-04 08:24:02: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 4u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 1u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 4u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 2u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 1u
- 2024-07-04 08:24:02: 0u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 1u
- 2024-04-23 11:31:37: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 0u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 0u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 0u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 0u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 1u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:18:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:24:02: 2u
- 2024-04-23 11:31:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:47:58: 2u
- 2024-07-04 08:24:02: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:28.420Z*
