# Rapport Backtest - Client Maison JUPRELLE Cie, SA

## Contexte

- **Client** : Maison JUPRELLE Cie, SA (ID: 25077)
- **Commande réelle** : S38721
- **Date commande** : 2025-08-26 06:47:38
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 19,148 input + 3,144 output = 22,292 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.0% | 20 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 91.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 47.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 15.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 12 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 8 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | 2 | 3.0 | 150.0% | partial | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 5 | 6 | 1.0 | 16.7% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 14 juillet, soit il y a 42 jours. Le cycle précédent était de 42 jours (entre juin et juillet). Nous sommes donc à l'échéance exacte du cycle de rotation habituel. Le risque de rupture dans les 30 prochains jours est avéré. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 2 unités par commande. La médiane des commandes récentes est de 2. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 142 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 8u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre des commandes toutes les 4 à 6 semaines environ (42 jours entre mai et juin, 42 jours entre juin et juillet). Depuis la dernière commande du 14 juillet, 42 jours se sont écoulés. Nous atteignons le cycle moyen de réapprovisionnement et le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande était de 5u, l'historique récent montre une récurrence à 8u (mai et juin). En suivant la règle de la médiane sur les commandes récentes (5, 8, 8), la quantité retenue est de 8u pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 166 tokens
- **Total**: 1,173 tokens



</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit 42 jours. Le cycle historique moyen est d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la fin de la période de couverture. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au mode constant des commandes récentes et historiques (rotation régulière de 2u).

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 126 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 5u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre des intervalles d'environ 30 à 40 jours (05/05, 02/06, 14/07). Au 25/08, cela fait 42 jours depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture immédiat. Pour la quantité, l'historique récent présente des volumes de 2u, 5u et 5u. La médiane de ces commandes récentes est de 5u. Bien qu'une commande de 10u ait été observée l'année dernière à la même période, la règle de prudence B2B privilégie la médiane récente pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 183 tokens
- **Total**: 1,205 tokens



</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 14 juillet 2025, soit il y a 42 jours. L'historique montre un cycle moyen d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes affichent 2u, 2u et un pic à 5u. La médiane des commandes récentes est de 2u. Conformément aux règles, on ignore le pic exceptionnel de 5u et on privilégie la médiane la plus basse en cas de doute pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,024 tokens
- **Output**: 185 tokens
- **Total**: 1,209 tokens



</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 5u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 3u (150.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 14 juillet, soit 42 jours. Le cycle moyen récent est d'environ 35-40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une grande stabilité avec des commandes de 4u, 5u et 5u. La médiane des commandes récentes est de 5u. Bien qu'une commande de 11u ait été observée l'an dernier à la même période, elle est traitée comme un pic exceptionnel. Conformément aux règles, on maintient la quantité régulière la plus basse en cas de doute, soit 5u.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 202 tokens
- **Total**: 1,192 tokens



</details>


<details>
<summary><strong>7. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 42 jours (entre juin et juillet). Depuis la dernière commande du 14 juillet, 42 jours se sont écoulés. Nous sommes donc à 100% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. En suivant le principe de précaution B2B et la médiane des commandes récentes, une quantité de 2u est préconisée pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 149 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 14 juillet, soit 42 jours avant la date actuelle. Le cycle moyen observé est d'environ 35-40 jours. Nous avons largement dépassé ce cycle, et le risque de rupture est critique pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2, 3 et 4 unités. La médiane de ces commandes est de 3 unités. Conformément à la règle de prudence consistant à privilégier la médiane et à ne pas surestimer en cas de doute, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 159 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>9. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet, soit 42 jours. Le cycle précédent était de 42 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle de rotation observé. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et faible de 1 unité par commande. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations très faibles, on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 156 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 6u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre des commandes toutes les 4 à 6 semaines (42 jours en moyenne). La dernière commande datant du 14 juillet (il y a 42 jours), le cycle moyen est atteint. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Concernant la quantité, les commandes récentes sont très stables (6u, 6u, 7u). Conformément à la règle de la médiane et à la prudence B2B consistant à choisir la valeur basse en cas de doute, une quantité de 6 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,010 tokens
- **Output**: 140 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 42 jours entre les commandes récentes. La dernière commande datant du 14 juillet (soit 42 jours avant la date actuelle), le cycle est atteint. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Pour la quantité, l'historique récent présente des volumes de 5u et 6u, tandis que l'historique N-1 sur la même période oscillait entre 8u et 10u. En appliquant la règle de la médiane sur les données récentes et en privilégiant la prudence (valeur la plus basse en cas de doute), une commande de 5 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 169 tokens
- **Total**: 1,190 tokens



</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le cycle de commande récent montre un intervalle d'environ 42 jours entre les deux dernières commandes (juin et juillet). À la date du 25 août, 42 jours se sont écoulés depuis la dernière commande du 14 juillet. Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). La quantité est basée sur la médiane constante des commandes récentes (2u), ce qui correspond également au volume historique habituel pour ce produit à rotation lente mais régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 119 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 40 jours (mai, juin, juillet). La dernière commande datant du 14 juillet (soit 42 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement dépassé, ce qui indique un risque de rupture imminent. Conformément à la règle de la médiane sur l'historique récent, la quantité de 2 unités est maintenue, car elle correspond à la rotation stable observée sur les trois dernières commandes. Les volumes plus élevés de l'année précédente (5u) sont considérés comme des pics exceptionnels et ne sont pas retenus pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 164 tokens
- **Total**: 1,140 tokens



</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit 84 jours. L'historique N-1 montre une commande le 08/07/2024, indiquant une consommation estivale. Le délai depuis la dernière commande dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent est limité à une commande de 4u, tandis que l'historique N-1 oscille entre 2u et 3u. La médiane globale des commandes est de 3u. En suivant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 204 tokens
- **Total**: 1,144 tokens



</details>


<details>
<summary><strong>15. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 112 jours. Bien que le cycle soit difficile à établir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le délai depuis la dernière commande dépasse largement les seuils usuels. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique, afin de maintenir une disponibilité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 123 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>16. [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 112 jours (05/05/2025). Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin en cas de cycle irrégulier, une commande est nécessaire pour éviter une rupture de stock prolongée. La quantité retenue correspond à la médiane historique (1 unité), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 117 tokens
- **Total**: 996 tokens



</details>


<details>
<summary><strong>17. [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/05/2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande de 1 unité est préconisée pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, tout en évitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 122 tokens
- **Total**: 1,000 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 2u
- 2025-06-02 12:19:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 07:00:06: 2u
- 2024-04-09 07:49:41: 3u
- 2023-11-30 08:44:43: 4u
- 2023-10-12 14:01:04: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 5u
- 2025-06-02 12:19:03: 8u
- 2025-05-05 08:32:32: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 12u
- 2024-05-30 07:00:06: 5u
- 2024-04-09 07:49:41: 6u
- 2024-01-23 09:15:06: 5u
- 2023-09-14 11:59:53: 10u
- 2023-08-28 09:13:31: 10u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 2u
- 2025-06-02 12:19:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 2u
- 2024-05-30 07:00:06: 2u
- 2024-04-09 07:49:41: 1u
- 2024-01-23 09:15:06: 2u
- 2023-11-30 08:44:43: 1u
- 2023-09-14 11:59:53: 2u
- 2023-08-28 09:13:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 5u
- 2025-06-02 12:19:03: 5u
- 2025-05-05 08:32:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 10u
- 2024-05-30 07:00:06: 3u
- 2024-04-09 07:49:41: 4u
- 2024-01-23 09:15:06: 5u
- 2023-11-30 08:44:43: 4u
- 2023-09-14 11:59:53: 4u
- 2023-08-28 09:13:31: 5u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 5u
- 2025-06-02 12:19:03: 2u
- 2025-05-05 08:32:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 6u
- 2024-05-30 07:00:06: 2u
- 2024-04-09 07:49:41: 2u
- 2024-01-23 09:15:06: 2u
- 2023-11-30 08:44:43: 1u
- 2023-09-14 11:59:53: 2u
- 2023-08-28 09:13:31: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 5u
- 2025-06-02 12:19:03: 5u
- 2025-05-05 08:32:32: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 11u
- 2024-05-30 07:00:06: 3u
- 2024-01-23 09:15:06: 3u
- 2023-09-14 11:59:53: 4u
- 2023-08-28 09:13:31: 5u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 2u
- 2025-06-02 12:19:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-01-23 09:15:06: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 4u
- 2025-06-02 12:19:03: 3u
- 2025-05-05 08:32:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 4u
- 2024-04-09 07:49:41: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 1u
- 2025-06-02 12:19:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 7u
- 2025-06-02 12:19:03: 6u
- 2025-05-05 08:32:32: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 07:00:06: 4u
- 2024-04-09 07:49:41: 4u
- 2024-01-23 09:15:06: 5u
- 2023-11-30 08:44:43: 2u
- 2023-09-14 11:59:53: 6u
- 2023-08-28 09:13:31: 10u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 5u
- 2025-06-02 12:19:03: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 8u
- 2024-05-30 07:00:06: 3u
- 2024-04-09 07:49:41: 4u
- 2024-01-23 09:15:06: 3u
- 2023-11-30 08:44:43: 4u
- 2023-10-12 14:01:04: 1u
- 2023-09-14 11:59:53: 8u
- 2023-08-28 09:13:31: 10u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 2u
- 2025-06-02 12:19:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 07:00:06: 1u
- 2024-04-09 07:49:41: 2u
- 2024-01-23 09:15:06: 2u
- 2023-10-12 14:01:04: 1u
- 2023-09-14 11:59:53: 2u
- 2023-08-28 09:13:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 14:31:11: 2u
- 2025-06-02 12:19:03: 2u
- 2025-05-05 08:32:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-09 07:49:41: 3u
- 2024-01-23 09:15:06: 2u
- 2023-09-14 11:59:53: 5u
- 2023-08-28 09:13:31: 5u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:19:03: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:38:09: 2u
- 2024-05-30 07:00:06: 2u
- 2024-04-09 07:49:41: 3u
- 2024-01-23 09:15:06: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:32:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:32:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:32:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 5 | Predicted 5u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:42.857Z*
