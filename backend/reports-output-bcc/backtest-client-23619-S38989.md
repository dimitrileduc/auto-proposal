# Rapport Backtest - Client Du Champs À L'Assiette

## Contexte

- **Client** : Du Champs À L'Assiette (ID: 23619)
- **Commande réelle** : S38989
- **Date commande** : 2025-09-05 10:09:23
- **Date cutoff système** : 2025-09-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 25,248 input + 4,341 output = 29,589 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.0% | 25 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 64.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 60 jours. Bien que le cycle historique soit irrégulier, le délai écoulé dépasse largement la fréquence habituelle, créant un risque de rupture imminent dans l'horizon des 30 jours (principe de précaution B2B). Pour la quantité, la médiane des commandes récentes (2u et 3u) est de 2,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 142 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 60 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle habituel observé entre mai et juin. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 122 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les dernières commandes (mai à juin). Depuis la dernière commande du 30 juin 2025, 66 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Pour la quantité, bien qu'un pic à 6u ait été observé en mai, la commande la plus récente est de 2u. En suivant la règle de la médiane et le principe de prudence (choisir la valeur la plus basse en cas de doute sur une rotation faible), une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 163 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit 66 jours. L'historique montre un cycle irrégulier (environ 50 à 120 jours). Selon le principe de précaution B2B, le délai depuis la dernière commande est suffisamment long pour induire un risque de rupture imminent ou un besoin de réassort dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 2u et 3u. La médiane est de 2.5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute ou de rotation faible), la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 181 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 52 jours (entre mai et juin 2025). Au 4 septembre, la dernière commande remonte à 66 jours, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent ou une commande déjà en retard. Concernant la quantité, les deux dernières commandes sont identiques (3u) et la médiane historique confirme ce volume. En application du principe de précaution B2B et de la stabilité de la rotation récente, une commande de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 147 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>6. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande observé est d'environ 52 jours. La dernière commande remonte au 30 juin 2025, soit 66 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture ou un besoin imminent. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1u, 1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstocker ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 138 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte à 118 jours (9 mai 2025). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement un cycle de réapprovisionnement standard. En l'absence d'historique récurrent, on retient la quantité minimale observée (1 unité) pour couvrir un besoin potentiel sans risquer de surstockage inutile sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 111 tokens
- **Total**: 983 tokens



</details>


<details>
<summary><strong>8. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit environ 118 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la mi-mai. En application du principe de précaution B2B et face à l'irrégularité du cycle, un risque de rupture est identifié pour couvrir la période à venir. ÉTAPE 2 : Estimation de la quantité. L'historique récent est de 1u, mais la commande correspondante de l'année précédente (N-1) était de 2u. Pour assurer une disponibilité minimale sur ce produit à faible rotation sans créer de surstock massif, la quantité de 2u est retenue pour s'aligner sur le volume historique de la période.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 188 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (2 unités par commande). La dernière commande enregistrée remonte à mai 2025. En comparant avec l'historique N-1, une commande avait été passée en septembre (2023-09-19). Étant donné que nous sommes le 04 septembre et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture pour couvrir le cycle annuel de rentrée. Par mesure de précaution B2B et conformément à la règle de maintien des faibles rotations, une commande de 2 unités (médiane historique) est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 155 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (environ tous les 4 mois). La dernière commande remonte au 09/05/2025, soit environ 118 jours. En comparant avec l'historique N-1 (commande le 19/09/2023), nous entrons dans la fenêtre critique de réapprovisionnement pour couvrir les 30 prochains jours. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est la médiane historique, soit 1 unité, pour éviter une rupture tout en limitant le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 145 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>11. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit environ 118 jours. L'historique N-1 montre une commande le 19/09/2023, ce qui indique un besoin récurrent à l'approche de l'automne. Le cycle étant irrégulier, le principe de précaution B2B s'applique pour éviter une rupture à l'approche de la saison. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes faibles (1u, 2u, 3u). La médiane des commandes historiques est de 1u. Conformément aux règles de rotation faible et de prudence, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 181 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>12. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente et irrégulière avec un cycle moyen d'environ 100 à 120 jours. La dernière commande remonte au 09/05/2025, soit il y a 118 jours. Le cycle habituel est largement dépassé, ce qui indique un besoin imminent de réapprovisionnement pour couvrir les 30 prochains jours. En suivant la règle de la médiane historique (valeurs : 1, 2, 2, 3, 4), la quantité recommandée est de 2 unités. On privilégie cette valeur médiane basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 155 tokens
- **Total**: 1,091 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:40:00: 3u
- 2025-05-09 12:33:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 1u
- 2024-03-21 13:42:44: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:40:00: 1u
- 2025-05-09 12:33:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 1u
- 2024-03-21 13:42:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:40:00: 2u
- 2025-05-09 12:33:24: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 2u
- 2024-03-21 13:42:44: 3u
- 2024-01-22 12:51:36: 6u
- 2023-09-19 06:41:52: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:40:00: 2u
- 2025-05-09 12:33:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 4u
- 2024-01-22 12:51:36: 6u
- 2023-09-19 06:41:52: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:40:00: 3u
- 2025-05-09 12:33:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-01-22 12:51:36: 3u
- 2023-09-19 06:41:52: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:40:00: 1u
- 2025-05-09 12:33:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:33:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:33:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:33:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 2u
- 2024-01-22 12:51:36: 2u
- 2023-09-19 06:41:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:33:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 1u
- 2024-01-22 12:51:36: 1u
- 2023-09-19 06:41:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:33:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 1u
- 2024-01-22 12:51:36: 3u
- 2023-09-19 06:41:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:33:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 12:05:39: 2u
- 2024-03-21 13:42:44: 1u
- 2024-01-22 12:51:36: 3u
- 2023-09-19 06:41:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:21.383Z*
