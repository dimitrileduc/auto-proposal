# Rapport Backtest - Client Jardin d'Antan,  QUALITE

## Contexte

- **Client** : Jardin d'Antan,  QUALITE (ID: 52017)
- **Commande réelle** : S37500
- **Date commande** : 2025-06-17 08:09:18
- **Date cutoff système** : 2025-06-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 27,405 input + 5,223 output = 32,628 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.0% | 27 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 77.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.18 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 56.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 16 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV157] LV Ketchup aux tomates 263 ml bio | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV158] LV Moutarde 200 ml | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [LV140] LV Moutarde à l'ancienne  200ml | 4 | 1 | 3.0 | 300.0% | partial | LLM |
| [LV160] LV Tartinade Aubergine 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 6 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV135] LV Tartinade Basilico 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit 34 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En l'absence d'un historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 4 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans tendance inverse, la médiane de 4 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 139 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>2. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit 34 jours. L'intervalle précédent était de 81 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (34 jours écoulés + 30 jours de seuil = 64 jours, proche du cycle précédent). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 3u et 4u. La médiane est de 3,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 185 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>3. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : La dernière commande date du 13 mai, soit il y a 34 jours. L'intervalle précédent était de 81 jours. Bien que le cycle soit irrégulier, le délai actuel dépasse 40% de l'intervalle historique et nous entrons dans la fenêtre de risque des 30 jours (Replenishment Threshold). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre des commandes de 4u et 6u. En appliquant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité de 4 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 179 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>4. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 81 jours entre les deux dernières commandes. La dernière commande datant du 13 mai 2025 (il y a 34 jours), nous entrons dans la zone de risque de rupture à l'horizon des 30 prochains jours (seuil de réapprovisionnement). En application du principe de précaution B2B et face à un historique récent limité, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la valeur la plus basse de l'historique récent (médiane entre 2u et 3u, choix de la valeur inférieure pour éviter le surstockage).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 155 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>5. [LV158] LV Moutarde 200 ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 13 mai, soit il y a 34 jours. Avec un seuil de réapprovisionnement de 30 jours et une seule commande récente, le cycle est incertain. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 3 unités, correspondant à la dernière observation stable.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 142 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>6. [LV140] LV Moutarde à l'ancienne  200ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle précédent de 81 jours. Au 16 juin 2025, 34 jours se sont écoulés depuis la dernière commande (13 mai). Bien que nous ne soyons qu'à environ 42% du cycle théorique, l'historique est trop limité (seulement deux commandes) pour garantir une régularité stricte. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un horizon de 30 jours), une commande est préconisée. La quantité retenue est de 4 unités, correspondant à la constante observée sur les commandes récentes (médiane de 4u).

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 163 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit 34 jours écoulés. L'intervalle précédent était de 81 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (34 + 30 = 64 jours, proche du cycle observé). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 4u et 6u. La médiane est de 5u, mais selon la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité de 4u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 183 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 6u vs Médiane: 5u (Réel: 5u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 13 mai, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de rotation est mensuel. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent présente une commande unique de 6 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans signe de baisse, la médiane de 6 unités est retenue pour assurer le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 152 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>9. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 81 jours entre les deux dernières commandes. Au 16 juin 2025, 34 jours se sont écoulés depuis la dernière commande (13 mai). Bien que nous ne soyons pas encore au terme du cycle théorique, l'absence d'historique N-1 et l'irrégularité potentielle imposent l'application du principe de précaution B2B pour couvrir les 30 prochains jours (Replenishment Threshold). Un risque de rupture est identifié par prudence. Pour la quantité, la médiane entre 4u et 6u est de 5u, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité de 4u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 182 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>10. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 81 jours entre les deux dernières commandes. Au 16 juin 2025, 34 jours se sont écoulés depuis la dernière commande du 13 mai. Bien que nous ne soyons qu'à environ 42% du cycle moyen, le principe de précaution B2B s'applique ici en raison du faible historique (seulement deux points de données), ce qui rend le cycle incertain. Un risque de rupture est possible dans l'horizon des 30 jours de seuil de réapprovisionnement. Pour la quantité, la médiane entre 4u et 6u est de 5u, mais conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible pour éviter le surstockage, la quantité de 4 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 191 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>11. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 5u)</summary>

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
Le cycle de commande observé est d'environ 81 jours (entre février et mai). Depuis la dernière commande du 13 mai 2025, 34 jours se sont écoulés. Bien que nous ne soyons pas encore au terme du cycle théorique, le délai de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture à court terme (horizon J+64). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la valeur la plus basse de l'historique récent (médiane entre 4 et 6, choix de la prudence) pour éviter un surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 166 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>12. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit il y a 34 jours. Le cycle précédent était de 81 jours. Bien que nous ne soyons pas encore au terme du cycle précédent, le délai de réapprovisionnement de 30 jours nous place à un horizon de 64 jours post-commande, approchant la zone de risque (70% du cycle). Par principe de précaution B2B et compte tenu de l'irrégularité de l'historique, un besoin est détecté. ÉTAPE 2 : Estimation. L'historique récent montre des commandes de 4u et 6u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 193 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 5u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit il y a 34 jours. Bien que l'historique soit limité, l'intervalle entre les deux commandes précédentes était d'environ 80 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture potentielle (principe de précaution B2B en cas de cycle irrégulier). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 4u et 6u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 175 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mai, soit 34 jours. L'intervalle précédent était de 81 jours. Bien que le cycle soit irrégulier, nous atteignons une période où le risque de rupture devient probable dans l'horizon des 30 jours (seuil de précaution B2B). Dans le doute sur la rotation exacte, le principe de précaution s'applique. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 4u et 6u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 169 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>15. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande date du 13 mai, soit il y a 34 jours. Bien que l'historique soit limité, le délai entre les deux premières commandes était d'environ 80 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : L'historique récent montre des commandes de 3u et 4u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 166 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>16. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 mai, soit 34 jours avant la date actuelle. Bien que l'historique soit limité, l'intervalle entre les deux commandes précédentes était d'environ 80 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (principe de précaution B2B appliqué face à un cycle irrégulier). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 3u et 4u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 173 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>17. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 février 2025, soit environ 115 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (4 unités) est utilisée comme référence pour maintenir le stock, conformément à la règle de maintien des volumes sur rotation régulière ou faible.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 159 tokens
- **Total**: 1,032 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 3u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 3u
- 2025-02-21 07:11:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV158] LV Moutarde 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV140] LV Moutarde à l'ancienne  200ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 4u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>8. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>9. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>10. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>11. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>12. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 6u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>15. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 4u
- 2025-02-21 07:11:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 09:44:36: 3u
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-21 07:11:20: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 3 | Predicted 3u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Predicted 2u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 3 | Predicted 3u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 5 | Predicted 5u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 4 | Predicted 4u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 4 | Predicted 4u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 4 | Predicted 4u but not ordered |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:45.032Z*
