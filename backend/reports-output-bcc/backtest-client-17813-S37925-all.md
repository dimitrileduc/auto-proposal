# Rapport Backtest - Client Ferme du Bosquetiau

## Contexte

- **Client** : Ferme du Bosquetiau (ID: 17813)
- **Commande réelle** : S37925
- **Date commande** : 2025-07-07 11:53:40
- **Date cutoff système** : 2025-07-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 31,168 input + 5,122 output = 36,290 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 68.8% | 32 produits prédits, 22 corrects |
| **Rappel** | 75.9% | 29 produits réels, 22 détectés |
| **F1-Score** | 72.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 21.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 17 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (22)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0060] MF Passata | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV040] LV Caprons apéritifs 240g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (22 produits)


<details>
<summary><strong>1. [MF0060] MF Passata</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 62 jours (05/05/2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle mensuel standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et compte tenu du seuil de réapprovisionnement de 30 jours, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la seule valeur historique connue (médiane).

**Tokens utilises pour cette prediction:**
- **Input**: 866 tokens
- **Output**: 123 tokens
- **Total**: 989 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/05/2025, soit 62 jours écoulés. Le cycle historique entre les deux dernières commandes était de 63 jours. Nous atteignons 98% du cycle moyen, ce qui dépasse largement le seuil de précaution de 70%. Un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 160 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit 62 jours. L'historique montre un cycle moyen d'environ 60 à 90 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour éviter la rupture. En application du principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. On maintient cette quantité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 158 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 60 jours entre les deux dernières commandes (mars et mai). La dernière commande datant du 5 mai 2025, soit il y a 62 jours, nous avons largement dépassé le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la médiane historique et au volume le plus fréquent observé tant sur l'historique récent que sur l'année précédente (N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 149 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>5. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/05/2025, soit 62 jours. Le cycle précédent était de 63 jours (entre mars et mai). Nous sommes à 100% du cycle moyen constaté cette année. Le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité parfaite à 1 unité par commande. Bien qu'une commande de 2 unités ait eu lieu l'an dernier, la règle de précaution B2B et la priorité à la médiane des commandes récentes imposent de maintenir la quantité à 1 unité pour éviter le surstockage sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 175 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 60 jours entre les deux dernières commandes (mars et mai). La dernière commande datant du 5 mai, soit il y a 62 jours, nous avons largement dépassé le cycle habituel. Bien que la rotation soit faible, le risque de rupture est imminent au regard du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (1u en 2025), une commande de 1 unité est préconisée pour maintenir le stock sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 146 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est de 61 jours (entre mars et mai). La dernière commande date du 05/05/2025, soit il y a 62 jours. Nous avons dépassé le cycle habituel, le risque de rupture est donc imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). ÉTAPE 2 : L'historique récent montre une consommation constante et faible de 1 unité par commande. En suivant la règle de la médiane et de la prudence sur les faibles rotations, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 140 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit 62 jours. Le cycle précédent était de 63 jours. Nous arrivons exactement à l'échéance du cycle de rotation habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (médiane = 1). Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 145 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>9. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à 62 jours (05/05/2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = risque de rupture), un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 140 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>10. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 62 jours (05/05/2025). Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (Étape 1) et face à une rotation très faible mais existante, une commande est nécessaire pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 128 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>11. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/05/2025, soit 62 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. La quantité retenue correspond à la médiane de l'historique récent (1u) afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 130 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>12. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit 62 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de rotation est mensuel ou bimestriel. En l'absence d'historique long, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 171 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>13. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte à 62 jours (05/05/2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle mensuel standard. Dans un contexte B2B, l'absence de commande depuis plus de deux mois sur un produit de snacking bio suggère un risque de rupture imminent ou un besoin de réassort pour maintenir la présence en rayon. En application du principe de précaution (incertitude sur le cycle) et du seuil de réapprovisionnement de 30 jours, une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, afin de couvrir le besoin sans risquer de surstockage sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 174 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>14. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/05/2025, soit 62 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'un cycle régulier établi, le principe de précaution B2B s'applique pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 148 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>15. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/05/2025, soit 62 jours. Avec un seuil de réapprovisionnement de 30 jours, nous sommes dans une zone d'incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent présente une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et l'utilisation de la médiane historique, la quantité recommandée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 155 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>16. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/05/2025, soit 62 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien que peu documenté, dépasse largement le délai de précaution habituel pour un produit de snacking. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane des commandes récentes, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 168 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>17. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/03/2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles historiques observés (environ 4 à 6 mois). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u ou 2u. La commande la plus récente étant de 2u et la médiane se situant entre 1 et 2, nous retenons 2u pour maintenir le stock minimal habituel sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 181 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>18. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 03/03/2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais constante), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande de 2u, tandis que l'historique N-1 montre des unités simples (1u). La médiane et la dernière valeur observée convergent vers un besoin de réapprovisionnement minimal. On retient la quantité de 2u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 188 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>19. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/03/2025, soit plus de 120 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles historiques observés (environ 4 à 6 mois). Un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. La médiane est de 1. Conformément aux règles pour les rotations très faibles, on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 169 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>20. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 120 jours (03/03/2025), ce qui dépasse largement tout cycle de rotation identifiable. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la période correspondant à la commande de l'année précédente (août). Conformément aux règles de gestion des faibles rotations, la quantité est fixée à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 123 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>21. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/03/2025, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 169 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>22. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à plus de 120 jours (03/03/2025), ce qui dépasse largement les cycles historiques observés. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement atteint. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 126 tokens
- **Total**: 1,053 tokens



</details>




### Donnees d'Input LLM (22 produits)


<details>
<summary><strong>1. [MF0060] MF Passata</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 2u
- 2024-02-12 06:51:36: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 1u
- 2024-02-12 06:51:36: 1u
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 1u
- 2024-02-12 06:51:36: 1u
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 2u
- 2024-02-12 06:51:36: 1u
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 2u
- 2024-02-12 06:51:36: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV040] LV Caprons apéritifs 240g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:21:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:43:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 2u
- 2024-02-12 06:51:36: 1u
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:43:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 1u
- 2024-02-12 06:51:36: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 1u
- 2024-02-12 06:51:36: 1u
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:43:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-03 09:43:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 05:58:47: 1u
- 2024-02-12 06:51:36: 2u
- 2023-08-28 09:06:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Predicted 1u but not ordered |


---

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0052] MF Pois chiches  500g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Never ordered in previous analysis window (no history) |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | Never ordered in previous analysis window (no history) |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 12 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 2 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0052] MF Pois chiches  500g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution. Le risque de rupture est considéré comme nul faute de demande enregistrée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:18:44.888Z*
