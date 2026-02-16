# Rapport Backtest - Client Comptoir Local LLN SRL

## Contexte

- **Client** : Comptoir Local LLN SRL (ID: 74167)
- **Commande réelle** : S40302
- **Date commande** : 2025-11-14 12:32:43
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 106
- **Tokens**: 92,891 input + 14,632 output = 107,523 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.5% | 106 produits prédits, 27 corrects |
| **Rappel** | 90.0% | 30 produits réels, 27 détectés |
| **F1-Score** | 39.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.26 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 21 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (27)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB05] REB chips bio - sel de mer 35g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (27 produits)


<details>
<summary><strong>1. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est de 22 jours (entre le 14/10 et le 05/11). Nous sommes actuellement à 8 jours de la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (vers le 27/11) tombe largement dans la fenêtre de risque. ÉTAPE 2 : L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la médiane de 1 unité est maintenue pour éviter la rupture tout en ne surstockant pas.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 154 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>2. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen observé est de 22 jours (entre le 14/10 et le 05/11). Depuis la dernière commande, 8 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande théorique (prévue vers le 27/11) tombe largement dans la fenêtre de risque. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une consommation constante et régulière de 1 unité par commande. La médiane est de 1. Conformément aux règles de rotation faible, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 161 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est de 22 jours (entre le 14/10 et le 05/11). Nous sommes actuellement à 8 jours de la dernière commande. Bien que nous ne soyons qu'à 36% du cycle moyen, le seuil de réapprovisionnement est de 30 jours, ce qui couvre largement la prochaine échéance théorique (prévue vers le 27/11). Par principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation mais régulier, un besoin est identifié. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane et la quantité constante étant de 1, cette valeur est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 186 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>4. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 22 jours. La dernière commande date d'il y a 8 jours. Le prochain besoin est estimé autour du 27 novembre, ce qui entre dans l'horizon des 30 jours du Replenishment Threshold Days. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une consommation constante de 1 unité par commande. La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 137 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>5. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est de 22 jours (entre le 14/10 et le 05/11). Huit jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (prévue vers le 27/11) tombe largement dans la fenêtre de vigilance. En application du principe de précaution B2B et face à une rotation très faible mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 138 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>6. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 22 jours (entre le 14/10 et le 05/11). La dernière commande date d'il y a 8 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient d'ici environ 14 jours, ce qui entre dans la fenêtre de vigilance. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (1u). La médiane et la tendance constante indiquent qu'il faut maintenir cette quantité de 1 unité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 164 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>7. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : Le cycle moyen observé est de 22 jours (entre le 14/10 et le 05/11). Nous sommes actuellement à 8 jours de la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande théorique (prévue vers le 27/11) tombe largement dans la fenêtre de vigilance. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 169 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/11/2025, soit il y a 8 jours. Avec un seuil de réapprovisionnement de 30 jours et une absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique. Le risque de rupture doit être couvert. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 149 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>9. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre 2025, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite critique du cycle de commande. En l'absence d'historique plus large pour établir une fréquence précise, le principe de précaution B2B s'applique pour éviter une rupture de stock. La quantité retenue est de 3 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 131 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>10. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande date du 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B, malgré un historique limité à une seule commande. ÉTAPE 2 : En l'absence de cycle établi, la quantité est basée sur la dernière commande connue (2 unités) afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 112 tokens
- **Total**: 984 tokens



</details>


<details>
<summary><strong>11. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre 2025, soit il y a 30 jours. Avec un seuil de réapprovisionnement fixé à 30 jours, le risque de rupture est immédiat selon le principe de précaution B2B. Bien que l'historique soit limité à une seule commande, la règle de maintien pour les rotations faibles (1-2u) s'applique. La quantité retenue correspond à la médiane de l'historique récent pour assurer la disponibilité du produit sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 122 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>12. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 14 octobre, soit 30 jours exactement. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture. En l'absence d'historique long pour définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité à 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 145 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>13. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite du cycle de rotation. En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 145 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>14. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B impose de prévoir une commande pour maintenir la disponibilité. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter sans raison spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 157 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte à 30 jours (14 octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B, d'autant plus que le cycle de rotation n'est pas encore stabilisé. En l'absence d'historique long, la quantité est basée sur la dernière commande connue (2 unités) pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 105 tokens
- **Total**: 980 tokens



</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 octobre, soit 30 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de réapprovisionnement est atteint. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles et régulières, la quantité retenue est la médiane du flux récent, soit 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 155 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre 2025, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B. Bien que l'historique soit limité à une seule commande récente, la règle de maintien des rotations faibles (1-2u) s'applique. La quantité retenue correspond à la dernière commande connue (2u) pour assurer la disponibilité du produit sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 120 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>18. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre 2025, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B. Bien que l'historique soit limité à une seule commande récente, la règle de maintien de la quantité pour les rotations faibles (1-2u) s'applique. La médiane des commandes récentes étant de 2 unités, cette quantité est reconduite pour assurer la disponibilité du produit sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 127 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>19. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre 2025, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite du cycle de rotation. Bien que l'historique soit limité à une seule commande, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, respectant la règle de maintien pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 133 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>20. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite critique du cycle de rotation. En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 132 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>21. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite critique du cycle. En l'absence d'historique long permettant de définir une rotation précise, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 147 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>22. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre 2025, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle atteint ou dépassé). L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou d'historique N-1, la quantité retenue correspond à la dernière valeur observée (médiane de l'historique disponible) pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 136 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>23. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B, malgré un historique limité à une seule commande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. En l'absence de cycle établi ou de données N-1, la règle de maintien de la quantité pour les rotations faibles (1-2u) est appliquée. La médiane est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 145 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>24. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement fixé à 30 jours, le risque de rupture est imminent selon le principe de précaution B2B. Bien que l'historique soit limité à une seule commande récente, la règle de maintien de quantité pour les rotations faibles (1-2u) s'applique. La médiane des commandes récentes étant de 1 unité, cette quantité est préconisée pour couvrir le prochain cycle sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 123 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>25. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date de 30 jours (2025-10-14). Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite critique du cycle. En l'absence d'historique plus large pour définir une rotation précise, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité maintenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 147 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>26. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à 30 jours (14 octobre). Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite critique du cycle. En l'absence d'historique long permettant de définir une rotation précise, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et l'utilisation de la médiane, la quantité préconisée est maintenue à 1 unité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 145 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>27. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons la limite critique. En l'absence d'un historique de cycle long, le principe de précaution B2B s'applique pour éviter une rupture de stock imminente. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité observée sans l'augmenter. La médiane des commandes récentes est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 149 tokens
- **Total**: 1,023 tokens



</details>




### Donnees d'Input LLM (27 produits)


<details>
<summary><strong>1. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>24. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>25. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>27. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (79)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | Predicted 3u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | Predicted 3u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | Predicted 3u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | Predicted 1u but not ordered |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 1 | Predicted 1u but not ordered |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | Predicted 1u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Predicted 2u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Predicted 2u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Predicted 1u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | Predicted 1u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Predicted 1u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Never ordered in previous analysis window (no history) |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:29:10.951Z*
