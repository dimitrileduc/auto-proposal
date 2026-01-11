# Rapport Backtest - Client Terre de fromages S.A

## Contexte

- **Client** : Terre de fromages S.A (ID: 24134)
- **Commande réelle** : S40202
- **Date commande** : 2025-11-14 10:30:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 27,358 input + 4,943 output = 32,301 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.3% | 29 produits prédits, 14 corrects |
| **Rappel** | 93.3% | 15 produits réels, 14 détectés |
| **F1-Score** | 63.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.79 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 6 | 4.0 | 66.7% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV131] LV Tartinade Potiron 190g | 6 | 4 | 2.0 | 50.0% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 6 | 2 | 4.0 | 200.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 7 | 2 | 5.0 | 250.0% | partial | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/10/2025, soit 36 jours avant la date actuelle. L'intervalle précédent était de 86 jours. Bien que le cycle soit irrégulier, le délai actuel dépasse 70% de l'intervalle historique observé. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 175 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit il y a 36 jours. L'historique N-1 montre une commande importante de 10u le 12/11/2024, indiquant une saisonnalité liée à la période de fin d'année (produit à la truffe). Le cycle moyen est dépassé et le risque de rupture est élevé pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Bien que l'année dernière ait enregistré un pic de 10u, les commandes récentes de 2025 sont stables à 2u. En application du principe de précaution et de la règle de la médiane sur l'historique récent (2u), la quantité retenue est de 2u pour couvrir le besoin immédiat sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 209 tokens
- **Total**: 1,215 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 30 à 60 jours. La dernière commande datant du 08/10/2025 (il y a 36 jours), nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de 30 jours. Bien que l'historique N-1 montre des volumes plus importants (6-8u), la tendance récente en 2025 indique une baisse significative de la rotation avec des commandes de 2 unités. En application de la règle de la médiane sur l'historique récent et du respect de la tendance à la baisse, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 161 tokens
- **Total**: 1,199 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 40 jours sur l'historique récent. La dernière commande datant du 08 octobre 2025 (soit 36 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, créant un risque de rupture imminent. Concernant la quantité, bien que des pics à 6u aient été observés par le passé, les deux dernières commandes sont stables à 2u. En application de la règle de la médiane et du principe de prudence sur les rotations faibles, une quantité de 2u est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 158 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>5. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 septembre 2025, soit 63 jours avant la date actuelle. L'intervalle précédent était de 59 jours. Le cycle moyen est d'environ 60 jours. Nous avons largement dépassé les 70% de ce cycle (42 jours), le risque de rupture est donc imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et le principe de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 180 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement d'environ 60 jours en 2025 (juillet à septembre). La dernière commande datant du 11 septembre 2025, soit il y a 63 jours, le seuil de réapprovisionnement est largement atteint. Bien que l'historique de l'année précédente (novembre 2024) affiche une commande de 10 unités, les données récentes de 2025 indiquent une stabilisation à la baisse avec deux commandes consécutives de 3 unités. En suivant la règle de la médiane des commandes récentes et le principe de précaution face à une rotation régulière mais faible, une quantité de 3 unités est préconisée pour couvrir les besoins sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 179 tokens
- **Total**: 1,185 tokens



</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 6u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 septembre 2025 (soit 63 jours). L'historique de l'année précédente montre une commande systématique à la mi-novembre (12/11/2024). Le délai depuis la dernière commande dépasse largement le cycle habituel constaté en N-1, ce qui confirme un risque de rupture imminent dans la fenêtre des 30 jours. Pour la quantité, bien que la commande la plus récente soit de 3u, l'historique N-1 affiche une médiane de 6u pour cette période de fin d'année. En application du principe de précaution B2B et de la saisonnalité observée, la quantité de 6u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 168 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 septembre 2025, soit 63 jours avant la date actuelle (13 novembre). L'historique montre un cycle de commande irrégulier mais fréquent en fin d'année (une commande enregistrée le 12 novembre l'année précédente). Le délai depuis la dernière commande dépasse largement le seuil de précaution. Il existe un risque de rupture imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. Les quantités récentes oscillent entre 2u et 4u. La médiane de l'historique global et récent se situe à 2u. En suivant le principe de précaution B2B et la règle de choisir la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 195 tokens
- **Total**: 1,183 tokens



</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 septembre 2025, soit 63 jours avant la date actuelle. Bien que l'historique récent soit limité à une seule commande de 3 unités, l'analyse de l'historique N-1 montre une activité régulière durant cette période (commande de 6 unités en septembre, précédée de cycles de 2 à 3 mois). Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B et de la règle de la médiane sur les volumes récents et historiques stables, une commande de 3 unités est préconisée pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 169 tokens
- **Total**: 1,155 tokens



</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 septembre 2025, soit 63 jours avant la date actuelle (13 novembre). L'historique N-1 montre une commande le 12 novembre 2024, ce qui indique un besoin cyclique à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle habituel constaté l'an dernier (environ 50-60 jours). Le risque de rupture est imminent sous 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 3u. L'historique N-1 oscille entre 2u et 4u avec une médiane à 3u. En suivant la règle de la médiane et la stabilité du produit, une commande de 3u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 195 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 4u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande d'environ 60 jours (juillet à septembre). Depuis la dernière commande du 11 septembre 2025, 63 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Pour la quantité, la médiane des commandes récentes (4u et 5u) est de 4,5u. Conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 147 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>12. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit environ 120 jours. Bien que le cycle historique soit irrégulier, le délai écoulé dépasse largement les intervalles habituels observés en 2024, ce qui indique un besoin de réapprovisionnement imminent ou une rupture probable. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la fois à la dernière commande passée et à la médiane des volumes historiques (excluant les pics à 5-6u et les bas à 1-2u), afin de maintenir un stock cohérent sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 162 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>13. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 6u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 4u (200.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une absence de commandes récentes depuis juillet 2025, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement non couvert. En se basant sur l'historique N-1 à la même période (novembre 2024), une commande de 6 unités avait été passée. Conformément au principe de précaution B2B et à l'analyse de la saisonnalité de l'année précédente, une commande est nécessaire. La quantité retenue est de 6 unités, correspondant au volume observé lors de la dernière période équivalente, afin de sécuriser le stock pour les 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 1,023 tokens
- **Output**: 154 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 7u vs Médiane: 6u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 6u
- **Reel commande**: 2u
- **Erreur LLM**: 5u (250.0%)
- **Erreur Mediane**: 4u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle historique irrégulier, mais la dernière commande enregistrée remonte à juillet 2025, soit plus de 120 jours. En comparaison avec l'historique N-1 (novembre 2024), un besoin est clairement identifié pour cette période de l'année. En application du principe de précaution B2B et face à l'incertitude du cycle, un réapprovisionnement est nécessaire. La quantité est fixée à 7 unités, correspondant à la médiane entre les commandes de l'année dernière (8u, 6u) et les commandes récentes (6u, 2u), afin de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 163 tokens
- **Total**: 1,081 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:15:49: 1u
- 2025-07-14 09:16:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:15:49: 2u
- 2025-07-14 09:16:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 10u
- 2024-09-19 06:59:28: 4u
- 2024-06-20 11:08:54: 2u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 2u
- 2024-03-05 07:47:58: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:15:49: 2u
- 2025-09-11 13:54:54: 2u
- 2025-07-14 09:16:48: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 8u
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 6u
- 2024-06-07 11:26:46: 4u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 6u
- 2024-01-03 08:55:55: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:15:49: 2u
- 2025-09-11 13:54:54: 2u
- 2025-07-14 09:16:48: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 2u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 5u
- 2024-01-03 08:55:55: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 1u
- 2025-07-14 09:16:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u
- 2025-07-14 09:16:48: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 10u
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 2u
- 2024-05-27 07:25:56: 4u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 8u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 6u
- 2024-04-10 10:25:30: 3u
- 2024-03-05 07:47:58: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 2u
- 2025-07-14 09:16:48: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 3u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 4u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 8u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 4u
- 2024-09-19 06:59:28: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 13:54:54: 4u
- 2025-07-14 09:16:48: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:59:28: 3u
- 2024-06-20 11:08:54: 6u
- 2024-06-07 11:26:46: 6u
- 2024-05-27 07:25:56: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>12. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:16:48: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:59:28: 1u
- 2024-06-20 11:08:54: 2u
- 2024-06-07 11:26:46: 2u
- 2024-04-10 10:25:30: 4u
- 2024-03-05 07:47:58: 5u
- 2024-01-03 08:55:55: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>13. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:16:48: 2u
- 2025-06-16 08:54:41: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 2u
- 2024-06-20 11:08:54: 3u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 2u
- 2024-03-05 07:47:58: 5u
- 2024-01-03 08:55:55: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:16:48: 2u
- 2025-06-16 08:54:41: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-12 07:25:49: 8u
- 2024-09-19 06:59:28: 6u

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 2u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 4 | Predicted 4u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 4 | Predicted 4u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | Predicted 4u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:08:00.469Z*
