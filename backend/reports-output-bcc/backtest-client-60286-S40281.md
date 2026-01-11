# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S40281
- **Date commande** : 2025-11-14 10:24:46
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 71
- **Tokens**: 63,922 input + 10,362 output = 74,284 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.3% | 62 produits prédits, 20 corrects |
| **Rappel** | 95.2% | 21 produits réels, 20 détectés |
| **F1-Score** | 48.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.35 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 17.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -3.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (20)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (20 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 3u vs Médiane: 6u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 6u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 4u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 48 et 56 jours (moyenne ~52 jours). La dernière commande datant du 21 octobre (il y a 23 jours), le prochain besoin est estimé dans environ 29 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié. Pour la quantité, bien que les commandes précédentes fussent de 6 unités, la commande la plus récente est de 3 unités. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance à la baisse, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 169 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>2. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 48 à 56 jours. La dernière commande date du 21 octobre, soit il y a 23 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 53 jours d'écart durant la période de couverture, ce qui correspond à l'échéance théorique du cycle. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. Les trois dernières commandes sont strictement identiques (1u). La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 172 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>3. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre une rotation régulière mais lente avec un cycle moyen d'environ 42 jours. La dernière commande remonte au 21 octobre, soit 23 jours avant la date actuelle. En ajoutant le délai de réapprovisionnement de 30 jours (Replenishment Threshold Days), l'horizon de risque atteint 53 jours après la dernière commande, ce qui dépasse largement le cycle habituel. Le risque de rupture est donc confirmé. Conformément à la règle de rotation faible et constante, la quantité retenue est la médiane historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 129 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>4. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 21 et 56 jours. La dernière commande remonte au 21 octobre, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est identifié car nous entrons dans la fenêtre habituelle de réachat (cycle moyen ~35-40 jours). Conformément à la règle de précaution B2B et à la stabilité historique du produit, la quantité retenue est la médiane des commandes récentes, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 130 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>5. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 mois récemment). La dernière commande date du 21 octobre, soit il y a 23 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (23 + 30 = 53 jours, ce qui correspond à la périodicité observée entre août et octobre). En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 144 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>6. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variables (de 7 à 56 jours). La dernière commande remonte au 21 octobre, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (70% du cycle moyen estimé étant atteint ou dépassé par l'irrégularité). En application du principe de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique récent est extrêmement stable avec une constante de 1 unité par commande. La médiane est de 1, nous maintenons donc cette quantité pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 157 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>7. [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 21 octobre, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (76% du cycle estimé par rapport à la dernière commande). Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir une commande. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent, afin d'éviter tout surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 133 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>8. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 21 octobre, soit 23 jours avant la date actuelle. Bien que la rotation soit faible et irrégulière (reprise après une pause estivale), le délai écoulé représente un risque de rupture imminent face au seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une constance absolue avec des commandes unitaires (1u). La médiane et le mode étant de 1, la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 156 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>9. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation régulière mais lente avec un cycle moyen d'environ 30 à 50 jours entre les commandes. La dernière commande remonte au 21 octobre, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (70% du cycle moyen est atteint ou dépassé). En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage, correspondant à la médiane stricte des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 149 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>10. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier mais persistant, avec une dernière commande effectuée il y a 23 jours (21 octobre). Étant donné que le seuil de réapprovisionnement est de 30 jours et que l'intervalle entre les deux dernières commandes était de 56 jours, nous approchons de la zone de risque (70% du cycle). En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation lente mais constante, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 948 tokens
- **Output**: 149 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>11. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 34 jours sur les dernières occurrences. La dernière commande date du 21 octobre, soit il y a 23 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (70% du cycle atteint). Conformément au principe de précaution B2B et à la régularité parfaite des quantités observées (médiane de 1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 945 tokens
- **Output**: 131 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>12. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 6u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 6u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 4u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant de 20 à 56 jours. La dernière commande remonte au 21 octobre, soit 23 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. Bien que la dernière commande ait été de 2u, l'historique récent montre des volumes plus importants (8u, 6u, 4u). En appliquant la règle de la médiane sur l'historique récent (2, 4, 6, 8), la médiane se situe à 5u. Conformément au principe de précaution B2B privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, une quantité de 4u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 191 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>13. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle entre les deux dernières commandes est de 104 jours. La dernière commande date du 21 octobre, soit 23 jours avant la date actuelle. Bien que nous ne soyons qu'à environ 22% du cycle moyen, la rotation est très faible et irrégulière. Selon le principe de précaution B2B (si doute sur le cycle ou rotation difficile à déterminer), un besoin est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité absolue avec des commandes unitaires (1u). La médiane et la règle de maintien pour les rotations très faibles (1-2u) imposent une quantité de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 172 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>14. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 21 octobre, soit il y a 23 jours. Bien que le cycle historique soit long (environ 3 mois entre les deux premières commandes), la commande la plus récente suggère une accélération ou un besoin ponctuel. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 53 jours sans commande à l'échéance. Par principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 195 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>15. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande d'environ 100 jours entre juillet et octobre. La dernière commande date du 21 octobre, soit il y a 23 jours. Bien que le cycle moyen ne soit pas encore atteint, le seuil de réapprovisionnement de 30 jours nous place dans une fenêtre de risque de rupture potentielle d'ici la mi-décembre. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 151 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>16. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation régulière environ tous les 21 à 28 jours (juin à août). Depuis la dernière commande du 26 août, plus de 70 jours se sont écoulés, ce qui dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Bien que l'activité semble avoir ralenti après l'été, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 933 tokens
- **Output**: 145 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>17. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 35 à 48 jours. La dernière commande remontant au 26 août 2025 (soit 79 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 134 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>18. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit [NUT01] ne présente aucun historique de commande récent ou sur l'année précédente. En application du principe de précaution B2B et de la règle sur les cycles indéterminés, l'absence totale de données crée une incertitude majeure sur la disponibilité du stock. Un besoin est donc détecté par défaut pour éviter une rupture potentielle. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique de rotation, la règle pour les rotations très faibles ou inconnues s'applique. Une quantité minimale de 1 unité est préconisée pour initialiser le stock ou tester la rotation sans risque de surstockage, conformément à la consigne de choisir la valeur la plus basse en cas de doute.

**Tokens utilises pour cette prediction:**
- **Input**: 859 tokens
- **Output**: 179 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>19. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur la rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle dès le lancement ou la mise en stock. Le doute sur le cycle de commande impose de prévoir un besoin. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane historique, on applique la règle des rotations très faibles ou inconnues en prévoyant une quantité minimale de 1 unité pour tester la rotation sans risquer un surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 142 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>20. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Absence totale d'historique de commandes (récentes et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou de cycle indéterminé, un risque de rupture est identifié par défaut. ÉTAPE 2 : Pour un produit sans historique de rotation, la règle impose de ne pas surestimer. Une quantité minimale de 1 unité est préconisée pour initialiser le stock et tester la rotation sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 122 tokens
- **Total**: 984 tokens



</details>




### Donnees d'Input LLM (20 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 3u
- 2025-08-26 07:26:18: 6u
- 2025-07-09 11:07:27: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 2u
- 2025-08-26 07:26:18: 8u
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-07-09 11:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u
- 2025-07-09 11:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 07:26:18: 1u
- 2025-08-06 12:17:47: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 07:26:18: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>20. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (42)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Predicted 4u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | Predicted 4u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 2 | Predicted 2u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 2 | Predicted 2u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Predicted 2u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 2 | Predicted 2u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Predicted 3u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 2 | Predicted 2u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Predicted 2u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Predicted 2u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | Predicted 4u but not ordered |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | Predicted 4u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 3 | Product analyzed but LLM -> 0 - client ordered 3u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes (récent et N-1). En l'absence de données de rotation ou de cycle de vente pour ce produit, aucun besoin de réapprovisionnement ne peut être justifié selon les critères de prédiction. Le risque de rupture est indéterminable, donc aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:05:17.329Z*
