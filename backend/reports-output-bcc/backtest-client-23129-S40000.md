# Rapport Backtest - Client Macavrac

## Contexte

- **Client** : Macavrac (ID: 23129)
- **Commande réelle** : S40000
- **Date commande** : 2025-10-29 14:29:06
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 20,659 input + 3,355 output = 24,014 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 16 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 48.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. Bien que la rotation soit faible, l'historique de l'année précédente montre une commande fin juillet suivie d'une période d'inactivité, mais le principe de précaution B2B impose de prévoir un réapprovisionnement face à une absence prolongée de mouvement pour éviter une rupture de stock sur un cycle irrégulier. La quantité retenue est de 2 unités, correspondant à la médiane historique et à la valeur la plus basse constatée, conformément aux règles de prudence pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 137 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit environ 98 jours. L'historique montre des intervalles de commande très irréguliers (3 à 5 mois). En application du principe de précaution B2B, face à un cycle difficile à déterminer et une absence de commande depuis plus de 3 mois, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité autour de 3 unités (médiane de 3u). Les commandes passées sont de 3u, 3u, 2u, 3u. La médiane de 3 est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 180 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 22 juillet 2025 (soit plus de 90 jours), ce qui dépasse largement le cycle de rotation observé historiquement (environ 60-80 jours). Bien que le produit ait une rotation faible, le délai écoulé depuis la dernière livraison et le seuil de réapprovisionnement de 30 jours indiquent un risque de rupture ou un besoin imminent. En suivant le principe de précaution B2B et en se basant sur la médiane des commandes historiques (2, 3, 2, 3, 5), la quantité retenue est de 3 unités pour couvrir la période sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 150 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>4. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. L'historique N-1 montre une commande récurrente en octobre (11/10/2024). Le cycle moyen historique est d'environ 70-80 jours. Nous avons largement dépassé ce délai, le risque de rupture est critique pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes stables entre 2 et 3 unités. La médiane des commandes historiques est de 2 unités. En application du principe de précaution (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 187 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 à 70 jours entre les commandes de mai et juillet). En application du principe de précaution B2B et pour éviter une rupture prolongée, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques récentes et passées.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 126 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22/07/2025, soit 98 jours. L'historique N-1 montre une commande le 11/10/2024. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles habituels et correspond à une période d'activité l'an dernier. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent affiche 4u, mais l'historique long terme oscille entre 1u et 3u. La médiane de l'ensemble des commandes est de 2u, mais la dernière commande était de 4u et celle de la même période l'an dernier de 3u. En suivant la règle de prudence et la médiane pondérée par la saisonnalité N-1, une quantité de 3u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 227 tokens
- **Total**: 1,164 tokens



</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. L'historique de l'année précédente montre une commande récurrente à cette période précise (11 octobre 2024). Le cycle de rotation moyen étant largement dépassé et le seuil de réapprovisionnement de 30 jours étant atteint par rapport à la saisonnalité N-1, un besoin est identifié par précaution. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur constante des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 131 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. L'historique N-1 montre une commande le 11 octobre 2024, indiquant un besoin récurrent à cette période de l'année. Le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 présente des volumes de 1, 2 et 3 unités. La médiane de l'historique complet est de 2 unités. En application du principe de précaution (choisir la valeur basse en cas de doute sur une rotation faible), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 182 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>9. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. L'historique N-1 montre une commande le 11 octobre 2024. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent ou un besoin de réassort saisonnier. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes constants de 3 unités (médiane de 3u sur les commandes significatives). En suivant le principe de précaution B2B et la stabilité de la rotation historique, une commande de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 175 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>10. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 3u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En l'absence d'historique plus complet pour définir un cycle précis, le principe de précaution s'applique pour éviter une rupture de stock prolongée. La quantité retenue correspond à la dernière commande connue (3 unités), ce qui représente le volume de rotation minimal observé.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 115 tokens
- **Total**: 987 tokens



</details>


<details>
<summary><strong>11. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande n'a été enregistrée sur l'année en cours (2025), alors que l'historique N-1 montre une rotation régulière tous les 3 à 4 mois (janvier, mai, juillet). Le délai depuis la dernière commande théorique est largement supérieur au cycle habituel, ce qui indique un besoin de réapprovisionnement immédiat pour reconstituer le stock en rayon. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente est extrêmement stable avec une quantité constante de 3 unités par commande. En l'absence de données récentes, la médiane de l'historique N-1 (3u) est appliquée pour maintenir le niveau de stock habituel sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 178 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>12. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
Aucune commande récente n'est enregistrée, mais l'historique de l'année précédente montre une commande systématique à cette période (11 octobre 2024). Le délai depuis la dernière occurrence théorique dépasse le cycle habituel, créant un risque de rupture imminent selon le principe de précaution B2B. La quantité est fixée à 4 unités, correspondant à la médiane des commandes passées (3, 4, 6, 6) tout en privilégiant la valeur prudente la plus proche du dernier besoin saisonnier.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 124 tokens
- **Total**: 1,047 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:26:29: 2u
- 2024-05-16 09:47:59: 2u
- 2024-01-22 12:28:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 3u
- 2024-05-16 09:47:59: 2u
- 2024-01-22 12:28:01: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 2u
- 2024-07-31 06:26:29: 3u
- 2024-05-16 09:47:59: 2u
- 2024-01-22 12:28:01: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 2u
- 2024-07-31 06:26:29: 2u
- 2024-05-16 09:47:59: 2u
- 2024-01-22 12:28:01: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:26:29: 2u
- 2024-05-16 09:47:59: 3u
- 2024-01-22 12:28:01: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 3u
- 2024-07-31 06:26:29: 1u
- 2024-05-16 09:47:59: 2u
- 2024-01-22 12:28:01: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 3u
- 2024-07-31 06:26:29: 3u
- 2024-05-16 09:47:59: 3u
- 2024-01-22 12:28:01: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 1u
- 2024-07-31 06:26:29: 2u
- 2024-05-16 09:47:59: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 3u
- 2024-07-31 06:26:29: 1u
- 2024-05-16 09:47:59: 3u
- 2024-01-22 12:28:01: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 12:14:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:26:29: 3u
- 2024-05-16 09:47:59: 3u
- 2024-01-22 12:28:01: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>12. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 07:05:58: 4u
- 2024-07-31 06:26:29: 3u
- 2024-05-16 09:47:59: 6u
- 2024-01-22 12:28:01: 6u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:28.548Z*
