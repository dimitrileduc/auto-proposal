# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39743
- **Date commande** : 2025-10-16 11:39:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 20,565 input + 3,437 output = 24,002 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 21 produits prédits, 14 corrects |
| **Rappel** | 87.5% | 16 produits réels, 14 détectés |
| **F1-Score** | 75.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 3 | 4 | 1.0 | 25.0% | partial | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen de commande est d'environ 28 jours. La dernière commande remonte au 24 septembre, soit 21 jours avant la date actuelle. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent dans cet horizon (21 + 30 = 51 jours, dépassant largement le cycle habituel). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 3u, 1u, 4u, 4u, 3u, 4u. La médiane de ces quantités est de 3,5. Conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,106 tokens
- **Output**: 187 tokens
- **Total**: 1,293 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 45 à 50 jours. La dernière commande date du 24 septembre 2025, soit il y a 21 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture intervient dans l'horizon des 51 jours après la dernière commande (21 + 30), ce qui correspond exactement à la fin du cycle habituel. Par principe de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique récent affiche une médiane de 4 unités (3, 4, 4, 4). Bien que la dernière commande fût de 3 unités, le volume historique stable à cette période l'année dernière (4 unités en septembre) confirme la pertinence de la médiane de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,073 tokens
- **Output**: 193 tokens
- **Total**: 1,266 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 25 à 30 jours (dernières commandes le 24/09, 26/08, 04/08). Au 15/10, cela fait 21 jours depuis la dernière commande, ce qui place le prochain besoin à l'intérieur de la fenêtre de réapprovisionnement de 30 jours (risque de rupture imminent). Historiquement, les quantités sont très stables. La médiane des commandes récentes est de 4 unités (valeurs : 3, 4, 4, 4, 3, 4). Conformément aux règles de gestion B2B, nous prévoyons une commande de 4 unités pour couvrir le cycle à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,072 tokens
- **Output**: 173 tokens
- **Total**: 1,245 tokens



</details>


<details>
<summary><strong>4. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 24 septembre, soit 21 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock pour éviter une rupture, d'autant plus que le cycle exact n'est pas encore établi (principe de précaution B2B). ÉTAPE 2 : L'historique récent montre une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou faibles, la médiane de 3 unités est retenue pour cette commande.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 141 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 25 à 30 jours (intervalles de 29, 22, 25, 30 et 20 jours). La dernière commande datant du 24 septembre, soit il y a 21 jours, le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes (5 des 6 dernières commandes).

**Tokens utilises pour cette prediction:**
- **Input**: 1,078 tokens
- **Output**: 152 tokens
- **Total**: 1,230 tokens



</details>


<details>
<summary><strong>6. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 24/09/2025, soit 21 jours avant la date actuelle. Le cycle historique moyen est d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon de prévision (21 + 30 = 51 jours, dépassant largement le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes de 1u et 2u. La médiane des commandes récentes est de 1u. Conformément aux règles pour les rotations faibles et la règle de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 993 tokens
- **Output**: 202 tokens
- **Total**: 1,195 tokens



</details>


<details>
<summary><strong>7. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 24 septembre, soit il y a 21 jours. L'historique montre un cycle moyen d'environ 30 à 45 jours entre les commandes récentes. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (21 jours écoulés + 30 jours de seuil = horizon à 51 jours, dépassant le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les trois dernières commandes sont constantes à 1 unité. Bien que l'historique N-1 montre des volumes légèrement supérieurs (2u), la tendance récente est stable à 1u. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 208 tokens
- **Total**: 1,197 tokens



</details>


<details>
<summary><strong>8. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 24 septembre, soit 21 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique. Le cycle historique est irrégulier mais montre une activité récurrente à cette période (septembre/octobre). En application du principe de précaution B2B face à un cycle incertain, un besoin est détecté. Pour la quantité, la médiane des commandes récentes (1u, 2u, 1u) est de 1. Conformément à la règle de ne pas surestimer les produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 151 tokens
- **Total**: 1,140 tokens



</details>


<details>
<summary><strong>9. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 23 jours entre chaque réapprovisionnement. La dernière commande datant du 11 septembre (soit 34 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent est très stable avec une médiane de 4 unités (valeurs : 3, 4, 4, 4, 5). Conformément aux règles de gestion, nous maintenons cette quantité médiane pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 149 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>10. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 23 jours. La dernière commande datant du 11 septembre (soit 34 jours avant la date actuelle), le délai dépasse largement le cycle habituel et entre dans la fenêtre critique des 30 jours de réapprovisionnement. Il existe donc un risque de rupture imminent. Concernant la quantité, les commandes sont très stables, oscillant entre 3 et 5 unités. La médiane des commandes récentes est de 4 unités, ce qui correspond également à la quantité la plus fréquente. Conformément aux règles de gestion, nous maintenons ce volume de 4 unités pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 152 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>11. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/08/2025, soit plus de 70 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement le cycle moyen observé historiquement (environ 45-60 jours en 2024). Un risque de rupture est probable dans l'horizon des 30 jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u) et à la dernière commande enregistrée, évitant ainsi tout surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 146 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>12. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 72 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (tous les 1 à 2 mois en moyenne). Le délai depuis la dernière commande dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours. En suivant la règle de la médiane des commandes récentes et historiques (2u, 1u, 3u, 3u, 2u), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 144 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>13. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/08/2025, soit plus de 70 jours sans réapprovisionnement. Bien que l'historique récent soit limité à une seule commande de 2 unités, l'historique N-1 montre une rotation régulière (tous les 1 à 2 mois) avec des quantités comprises entre 1 et 3 unités. En application du principe de précaution B2B face à un cycle irrégulier et un risque de rupture probable sous 30 jours, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane de l'historique global et à la dernière commande enregistrée.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 153 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>14. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande enregistrée date du 22 juillet 2025, soit il y a plus de 80 jours. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture ou un besoin imminent. En suivant la règle de précaution B2B, une commande est nécessaire. La quantité est fixée à 3 unités, ce qui correspond à la médiane des commandes récentes et à la quantité la plus fréquente observée sur l'historique global, tout en privilégiant la valeur basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 164 tokens
- **Total**: 1,169 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 1u
- 2025-08-04 11:51:02: 4u
- 2025-07-10 11:10:19: 4u
- 2025-06-10 13:21:55: 3u
- 2025-05-21 11:23:56: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u
- 2025-07-10 11:10:19: 4u
- 2025-05-21 11:23:56: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u
- 2025-07-10 11:10:19: 4u
- 2025-06-10 13:21:55: 3u
- 2025-05-21 11:23:56: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 2u
- 2025-08-26 07:12:09: 2u
- 2025-08-04 11:51:02: 1u
- 2025-07-10 11:10:19: 2u
- 2025-06-10 13:21:55: 2u
- 2025-05-21 11:23:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-27 05:39:39: 2u
- 2024-05-08 09:59:31: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 1u
- 2025-07-10 11:10:19: 2u
- 2025-06-10 13:21:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-05 12:11:39: 2u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 5u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 1u
- 2025-07-10 11:10:19: 1u
- 2025-06-10 13:21:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-05 12:11:39: 2u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 5u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:45:50: 1u
- 2025-07-10 11:10:19: 2u
- 2025-06-10 13:21:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-05-08 09:59:31: 2u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 5u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u
- 2025-06-30 13:34:17: 4u
- 2025-06-10 13:21:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u
- 2025-06-30 13:34:17: 4u
- 2025-06-10 13:21:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 07:46:41: 3u
- 2025-06-10 13:21:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 12:13:39: 4u
- 2024-08-05 08:15:52: 3u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 4 | Predicted 4u but not ordered |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Predicted 4u but not ordered |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Predicted 3u but not ordered |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 2 | Predicted 2u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Predicted 2u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 4 | Predicted 4u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 4 | Predicted 4u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 6 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 36 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:13.901Z*
