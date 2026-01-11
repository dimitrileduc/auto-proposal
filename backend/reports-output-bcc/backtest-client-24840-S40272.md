# Rapport Backtest - Client Al-Terre-Native

## Contexte

- **Client** : Al-Terre-Native (ID: 24840)
- **Commande réelle** : S40272
- **Date commande** : 2025-11-14 10:18:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 26,017 input + 4,367 output = 30,384 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.1% | 27 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 65.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.46 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 21.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 24 septembre 2025, soit environ 50 jours. L'historique de l'année précédente montre une activité régulière sur la période novembre/décembre (commandes les 28/11 et 12/12). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique pour couvrir les besoins de fin d'année. Le cycle est irrégulier mais le risque de rupture est réel selon le principe de précaution B2B. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la dernière commande passée, afin de maintenir un stock minimal sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 160 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours. La dernière commande datant du 24 septembre (soit 50 jours avant la date actuelle), le produit entre dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre une préférence pour 3 unités, les commandes les plus récentes de 2025 oscillent entre 2 et 3 unités. En application de la règle de prudence B2B privilégiant la médiane basse en cas de doute sur une rotation faible, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,055 tokens
- **Output**: 152 tokens
- **Total**: 1,207 tokens



</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 24 septembre 2025, soit 50 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 30 à 45 jours. Le délai depuis la dernière commande dépasse largement ce cycle moyen et l'horizon de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent ou une commande déjà due. Concernant la quantité, l'historique récent est extrêmement stable avec une quantité constante de 2 unités sur les quatre dernières commandes. La médiane des commandes récentes est de 2. Conformément aux règles de gestion des rotations faibles et régulières, on maintient cette quantité de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 156 tokens
- **Total**: 1,195 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement irrégulière mais persistante. La dernière commande remonte au 24 septembre 2025, soit 50 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen observé, ce qui indique un risque de rupture imminent ou un besoin de stock pour couvrir les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane des commandes récentes (1, 2, 2, 3) est de 2 unités. L'historique de l'année précédente à la même période (octobre/novembre) confirmait également des volumes compris entre 1 et 4 unités. La valeur de 2 unités est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,089 tokens
- **Output**: 188 tokens
- **Total**: 1,277 tokens



</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation faible et espacée. La dernière commande remonte à 50 jours (24 septembre), ce qui dépasse le cycle observé entre les deux dernières commandes (71 jours) si l'on considère le seuil de réapprovisionnement de 30 jours (horizon à 80 jours). Par principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la valeur la plus basse des commandes récentes, conformément à la règle de prudence sur les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 136 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 24 septembre, soit plus de 50 jours. Le cycle moyen observé est d'environ 30 à 45 jours. Le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En appliquant la règle de la médiane sur l'historique récent (1u, 2u, 3u) et l'historique N-1 (2u, 3u), la quantité de 2 unités est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 129 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation irrégulière mais persistante. La dernière commande remonte au 24 septembre, soit 50 jours avant la date actuelle. Bien que le volume récent soit faible (1-2u), le délai écoulé dépasse largement les cycles habituels, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (2025), une quantité de 1 unité est préconisée pour couvrir le besoin sans surstocker, la tendance étant à la baisse par rapport à l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,089 tokens
- **Output**: 146 tokens
- **Total**: 1,235 tokens



</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 02/09/2025, soit 72 jours avant la date actuelle. L'historique N-1 montre une activité régulière en octobre, novembre et décembre (cycles de 15 à 30 jours). L'absence de commande depuis septembre indique un risque de rupture imminent ou un besoin de réapprovisionnement pour couvrir la période de fin d'année, dépassant largement le seuil de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des quantités de 1u, 2u et 2u. La médiane des commandes récentes est de 2u. L'historique N-1 sur la même période (novembre/décembre) confirme des volumes entre 1u et 3u. En suivant la règle de la médiane et de prudence, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 217 tokens
- **Total**: 1,273 tokens



</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 49 jours (entre juillet et septembre). Au 13 novembre, 72 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin imminent. En application du principe de précaution B2B et de la règle de la médiane sur de faibles volumes, la quantité recommandée est de 1 unité (valeur la plus basse de l'historique récent) pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 139 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation espacée mais régulière. La dernière commande remonte au 02/09/2025, soit plus de 70 jours avant la date actuelle (13/11/2025). Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique car le risque de rupture est élevé pour les 30 prochains jours (Replenishment Threshold Days). L'historique de l'année précédente confirme également une activité sur la période octobre/novembre. Conformément à la règle de la médiane sur l'historique récent (2u en juin et septembre 2025) et à la consigne de ne pas surestimer les faibles rotations, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 179 tokens
- **Total**: 1,184 tokens



</details>


<details>
<summary><strong>11. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 27 et 49 jours. Depuis la dernière commande du 02/09/2025, 72 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une consommation déjà effectuée. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1u, 2u, 2u), la quantité retenue est de 2 unités pour couvrir le besoin tout en évitant le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 153 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>12. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 juillet 2025, soit environ 120 jours. Bien que le cycle historique soit irrégulier (intervalles de 30 à 60 jours en 2024), l'absence de commande depuis 4 mois sur un produit à rotation faible mais existante crée une incertitude. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique montre des commandes de 1u et 2u. La médiane des commandes récentes et historiques est de 2u. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 185 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande enregistrée remonte au 15 juillet 2025, soit environ 120 jours. Bien que l'historique récent soit incomplet pour la période automnale, l'historique N-1 montre une activité régulière en octobre, novembre et décembre (commandes les 03/10, 28/11 et 12/12). Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent pour la période de fin d'année. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche des volumes de 2u et 3u. L'historique N-1 sur la même période (novembre/décembre) montre des commandes de 1u et 3u. En appliquant la règle de la médiane et le principe de précaution (choisir la valeur la plus basse en cas de doute sur une rotation faible), une quantité de 2u est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,058 tokens
- **Output**: 247 tokens
- **Total**: 1,305 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 2u
- 2024-02-12 14:44:33: 1u
- 2024-01-22 12:42:31: 2u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-07-15 06:23:20: 3u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 3u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 3u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 2u
- 2025-07-15 06:23:20: 2u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 2u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 1u
- 2025-07-15 06:23:20: 3u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 4u
- 2024-09-23 12:43:31: 3u
- 2024-07-15 06:47:21: 2u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 2u
- 2024-02-12 14:44:33: 4u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 2u
- 2023-11-28 08:00:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 1u
- 2025-07-15 06:23:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 1u
- 2024-06-24 13:38:30: 2u
- 2024-03-12 08:16:55: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 1u
- 2025-07-15 06:23:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 13:11:31: 1u
- 2025-09-02 06:43:42: 2u
- 2025-07-15 06:23:20: 1u
- 2025-06-18 06:30:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 3u
- 2024-07-15 06:47:21: 3u
- 2024-06-24 13:38:30: 3u
- 2024-05-21 06:57:18: 3u
- 2024-04-18 09:29:52: 2u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 4u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:43:42: 1u
- 2025-07-15 06:23:20: 2u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 1u
- 2024-07-15 06:47:21: 2u
- 2024-06-24 13:38:30: 2u
- 2024-04-18 09:29:52: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:43:42: 1u
- 2025-07-15 06:23:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:43:42: 2u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 1u
- 2024-09-23 12:43:31: 2u
- 2024-07-15 06:47:21: 2u
- 2024-05-21 06:57:18: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 06:43:42: 1u
- 2025-07-15 06:23:20: 2u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 06:23:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:47:21: 1u
- 2024-05-21 06:57:18: 2u
- 2024-04-18 09:29:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 06:23:20: 3u
- 2025-06-18 06:30:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 13:08:43: 4u
- 2024-09-23 12:43:31: 1u
- 2024-07-15 06:47:21: 2u
- 2024-05-21 06:57:18: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Predicted 2u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 2 | Predicted 2u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [LV344] LV Colis apéro | 3 | Predicted 3u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:20.497Z*
