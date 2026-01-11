# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39917
- **Date commande** : 2025-10-27 07:18:16
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 57
- **Tokens**: 52,053 input + 8,669 output = 60,722 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 21.4% | 56 produits prédits, 12 corrects |
| **Rappel** | 70.6% | 17 produits réels, 12 détectés |
| **F1-Score** | 32.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une reprise d'activité récente avec deux commandes de 1 unité en octobre (le 09/10 et le 13/10). Bien que le cycle soit court sur ces deux dates, le délai depuis la dernière commande (13 jours) combiné au seuil de réapprovisionnement de 30 jours crée une incertitude sur la rupture prochaine. En application du principe de précaution B2B et face à une rotation faible mais régulière sur le dernier mois, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 138 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 21 jours (dernières commandes le 01/09, 22/09 et 13/10). Au 26/10, 13 jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande théorique devrait intervenir sous 7 à 10 jours. En suivant la règle de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique oscille strictement entre 1u et 2u. La médiane des commandes récentes est de 1u. Conformément aux consignes de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 199 tokens
- **Total**: 1,193 tokens



</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre une accélération de la rotation avec deux commandes en octobre (le 09/10 et le 13/10). Le délai depuis la dernière commande est de 13 jours, ce qui représente un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle moyen étant irrégulier, le principe de précaution B2B s'applique. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la quantité la plus basse observée lors des derniers mouvements, afin d'éviter un surstockage sur un produit à faible rotation unitaire.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 153 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 21 jours (intervalles de 21 jours entre les trois dernières commandes). La dernière commande datant du 13 octobre (il y a 13 jours), le prochain besoin est estimé aux alentours du 3 novembre, ce qui entre dans l'horizon de réapprovisionnement de 30 jours. En appliquant le principe de précaution B2B et la règle de la médiane sur les volumes récents (1, 2, 2, 2, 2, 1, 1), la quantité préconisée est de 2 unités pour couvrir le risque de rupture imminent.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 158 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre une accélération de la fréquence de commande en octobre (tous les 4 jours environ), après une période plus calme. Depuis la dernière commande du 13 octobre, 13 jours se sont écoulés. Bien que le cycle historique soit irrégulier, le délai actuel dépasse largement la fréquence observée récemment. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé. En suivant la règle de la médiane des quantités récentes (1u, 1u, 2u, 1u, 1u, 2u), la valeur médiane est de 1u. Conformément au principe de précaution B2B et à la règle de choisir la quantité la plus basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 189 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 octobre, soit il y a 13 jours. Bien que le cycle soit irrégulier, on observe une reprise d'activité récente en octobre (2 commandes à 4 jours d'intervalle). Selon le principe de précaution B2B et le risque de rupture sous 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 156 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>7. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre une reprise d'activité en octobre avec deux commandes de 1u (le 09/10 et le 13/10). Le délai depuis la dernière commande est de 13 jours, ce qui, combiné au seuil de réapprovisionnement de 30 jours, présente un risque de rupture imminent si le cycle hebdomadaire observé début octobre se confirme. En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 1u, correspondant à la médiane stricte des commandes récentes et à la tendance de consommation actuelle, évitant ainsi tout surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 158 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variables (19 jours, puis 76 jours). La dernière commande remonte au 22 septembre, soit 34 jours avant la date actuelle. Ce délai dépasse le seuil de réapprovisionnement de 30 jours, créant un risque de rupture ou un besoin imminent selon le principe de précaution B2B. L'historique récent est très stable avec des commandes unitaires systématiques. En suivant la règle de la médiane sur les quantités observées (1, 1, 1), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 144 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>9. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 01/09/2025, soit 55 jours. Bien que l'historique montre une rotation très faible et irrégulière (cycle moyen estimé entre 45 et 60 jours), nous entrons dans la fenêtre critique du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 138 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>10. [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/09/2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 169 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>11. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août, soit 76 jours. Le cycle précédent était de 53 jours. Nous avons largement dépassé le cycle moyen et le seuil de 70% du cycle. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans chercher à augmenter le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 149 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>12. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'existe aucun historique de commande récent ou passé (N-1) pour ce produit. En l'absence totale de données permettant d'établir un cycle de rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle dès le lancement ou la mise en stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. Sans historique pour calculer une médiane, une quantité minimale de 1 unité est préconisée pour assurer une présence en rayon tout en limitant le risque de surstockage sur une référence à rotation inconnue.

**Tokens utilises pour cette prediction:**
- **Input**: 856 tokens
- **Output**: 138 tokens
- **Total**: 994 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-07-18 08:34:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 1u
- 2025-08-05 10:30:50: 1u
- 2025-07-18 08:34:46: 2u
- 2025-07-08 06:27:07: 1u
- 2025-06-19 07:27:09: 1u
- 2025-06-02 12:14:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u
- 2025-06-19 07:27:09: 1u
- 2025-06-02 12:14:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 2u
- 2025-07-08 06:27:07: 2u
- 2025-06-19 07:27:09: 1u
- 2025-06-02 12:14:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 1u
- 2025-06-19 07:27:09: 1u
- 2025-06-02 12:14:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-08-11 09:21:12: 1u
- 2025-08-05 10:30:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:37:52: 1u
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 1u
- 2025-06-19 07:27:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 09:41:05: 1u
- 2025-07-08 06:27:07: 1u
- 2025-06-19 07:27:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:18:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:33:27: 1u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 07:18:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 09:21:12: 1u
- 2025-06-19 07:27:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (44)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Predicted 2u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Predicted 2u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 2 | Predicted 2u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [CB010] CB Jus de Pomme cubis 3l | 1 | Predicted 1u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [MF0014] MF Olives noires 500g | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [LEA04] LEAMO ginger beer bio 750ml | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Never ordered in previous analysis window (no history) |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | Never ordered in previous analysis window (no history) |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 3 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 18 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:11.662Z*
