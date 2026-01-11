# Rapport Backtest - Client Boucherie de la Platte

## Contexte

- **Client** : Boucherie de la Platte (ID: 52442)
- **Commande réelle** : S39125
- **Date commande** : 2025-09-11 13:51:03
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,308 input + 4,033 output = 27,341 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.4% | 21 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 68.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit 82 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles précédents (environ 45 jours entre mai et juin). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constance absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 165 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit 82 jours avant la date actuelle. Le cycle précédent était de 45 jours. Le délai écoulé dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe de précaution B2B). ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des rotations faibles, la quantité maintenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 152 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation lente et irrégulière. La dernière commande remonte au 20 juin 2025, soit plus de 80 jours sans activité, ce qui dépasse largement les cycles observés. Bien que la demande semble s'essouffler par rapport à l'année précédente (où les volumes étaient de 3u), le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir le risque de rupture sur l'horizon des 30 prochains jours. La quantité retenue est de 2u, correspondant à la médiane des commandes récentes (1u et 2u), afin de maintenir un stock minimal sans risquer de surstockage sur une référence à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 158 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>4. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 20 juin 2025, soit 82 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle de détection d'un besoin incertain (risque de rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (2u), ce qui correspond à la médiane disponible pour maintenir le stock sans risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 155 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>5. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 20 juin 2025, soit 82 jours avant la date actuelle. Bien que le cycle historique soit irrégulier (45 jours entre les deux premières commandes), le délai actuel dépasse largement la fréquence habituelle, ce qui indique un besoin de réapprovisionnement imminent ou une rupture de stock probable dans l'horizon des 30 jours. En application du principe de précaution B2B et face à un cycle difficile à déterminer avec précision, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur les commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 140 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>6. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'historique récent montre un cycle de commande d'environ 45 jours (entre mai et juin). Depuis la dernière commande du 20 juin 2025, 82 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 127 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>7. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 20 juin 2025, soit 82 jours avant la date actuelle. Le cycle précédent était de 45 jours. Le délai écoulé dépasse largement le cycle moyen observé, ce qui indique un besoin de réapprovisionnement imminent ou une rupture de stock probable. En application du principe de précaution B2B et face à une rotation faible mais régulière, la quantité retenue correspond à la médiane historique de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 106 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée date du 06/05/2025, soit plus de 120 jours sans activité. Bien que l'historique récent soit faible, l'historique N-1 montre des commandes régulières entre février et août. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière -> prévoir), une commande est déclenchée pour éviter une rupture prolongée sur ce produit à rotation lente. ÉTAPE 2 : Estimation quantité. L'historique montre des volumes constants de 1u, 2u ou 3u. La médiane des commandes historiques est de 2u. Conformément à la règle de ne pas surestimer pour les rotations faibles, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 185 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 06/05/2025, soit plus de 120 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 60 à 80 jours). Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint par l'absence de commande récente. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane basse de l'historique récent et évitant tout surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 163 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 06/05/2025, soit plus de 120 jours. L'historique de l'année précédente montre une rotation régulière tous les 1.5 à 2 mois (avril, juin, août). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture ou un besoin imminent. En suivant la règle de précaution B2B et en se basant sur la médiane des commandes historiques (2u), une commande de 2 unités est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 146 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 120 jours (06/05/2025), ce qui dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. Bien que la rotation soit très faible, l'absence de commande récente et le principe de précaution B2B suggèrent un risque de rupture de stock ou un besoin de renouvellement pour maintenir la référence en rayon. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité recommandée est fixée à 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 128 tokens
- **Total**: 999 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 1u
- 2025-05-06 10:28:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-02 07:21:47: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 1u
- 2025-05-06 10:28:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 1u
- 2025-05-06 10:28:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:51:23: 3u
- 2024-06-11 06:46:53: 3u
- 2024-04-25 14:47:42: 3u
- 2024-03-12 07:36:26: 2u
- 2024-02-02 07:21:47: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 2u
- 2025-05-06 10:28:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 2u
- 2025-05-06 10:28:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:17:52: 2u
- 2025-05-06 10:28:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 10:28:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:51:23: 2u
- 2024-06-11 06:46:53: 3u
- 2024-04-25 14:47:42: 3u
- 2024-03-12 07:36:26: 2u
- 2024-02-02 07:21:47: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 10:28:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:51:23: 2u
- 2024-06-11 06:46:53: 2u
- 2024-04-25 14:47:42: 2u
- 2024-02-02 07:21:47: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 10:28:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 11:51:23: 2u
- 2024-06-11 06:46:53: 3u
- 2024-04-25 14:47:42: 2u
- 2024-03-12 07:36:26: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 10:28:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:39.080Z*
