# Rapport Backtest - Client DLL AD WELKENRAEDT ETS ADOLPHE

## Contexte

- **Client** : DLL AD WELKENRAEDT ETS ADOLPHE (ID: 38842)
- **Commande réelle** : S39734
- **Date commande** : 2025-10-16 11:36:31
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 45
- **Tokens**: 41,354 input + 7,187 output = 48,541 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.7% | 45 produits prédits, 21 corrects |
| **Rappel** | 91.3% | 23 produits réels, 21 détectés |
| **F1-Score** | 61.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (21)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD015] LD Onion Spread 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD012] LD Organic Samphire Spread 135 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (21 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 90 jours entre les commandes récentes (juin à septembre). Au 15 octobre, 36 jours se sont écoulés depuis la dernière commande. Bien que nous ne soyons pas encore au terme du cycle théorique, le délai de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture à l'horizon de la mi-novembre. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane historique et au volume le plus fréquent (mode) observé tant sur l'année en cours que sur la période N-1, respectant ainsi la règle de prudence sur les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 183 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (juillet, août, septembre). La dernière commande datant du 9 septembre, nous sommes à 36 jours d'intervalle au 15 octobre, ce qui dépasse le cycle habituel et entre dans la fenêtre de risque des 30 jours (Replenishment Threshold). Bien que l'historique N-1 affichait des quantités de 2u, la tendance récente sur les trois dernières commandes est stabilisée à 1u. En application de la règle de la médiane sur l'historique récent et du principe de prudence (choisir la valeur la plus basse en cas de doute), une commande de 1u est nécessaire pour couvrir le besoin immédiat sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 177 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/09/2025, soit 36 jours avant la date actuelle. Le cycle historique récent montre un intervalle d'environ 33 jours entre les deux dernières commandes. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. L'historique récent est très stable avec des commandes unitaires (1u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 153 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>4. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours (juin, juillet, août, septembre). La dernière commande datant du 09/09/2025, le délai écoulé est de 36 jours, ce qui dépasse le cycle habituel et confirme un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application de la règle de la médiane sur l'historique récent (4, 4, 3, 4), la quantité de 4 unités est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,021 tokens
- **Output**: 143 tokens
- **Total**: 1,164 tokens



</details>


<details>
<summary><strong>5. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 33 jours entre chaque commande (juin à septembre). La dernière commande remonte au 09/09/2025, soit 36 jours avant la date actuelle. Le délai dépasse déjà le cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Pour la quantité, l'historique récent présente des volumes de 3u et 4u. Conformément à la règle de la médiane sur les commandes récentes (4, 3, 3, 4), la valeur retenue est de 4 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 159 tokens
- **Total**: 1,162 tokens



</details>


<details>
<summary><strong>6. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 28, 35 et 33 jours. La dernière commande date du 09/09/2025, soit 36 jours écoulés. Ce délai dépasse le cycle moyen et le seuil de réapprovisionnement de 30 jours, confirmant un risque de rupture imminent. Concernant la quantité, l'historique récent oscille entre 1u et 2u. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 152 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 35 jours (03/07, 07/08, 09/09). Au 15/10, cela fait 36 jours depuis la dernière commande, ce qui dépasse le cycle moyen et entre dans la fenêtre de risque des 30 jours du seuil de réapprovisionnement. En application du principe de précaution B2B et face à ce besoin détecté, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1) et respectant la règle de ne pas surestimer pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 169 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>8. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 31 jours (intervalles de 21, 35 et 33 jours). La dernière commande datant du 09 septembre (soit 36 jours avant la date actuelle), nous avons dépassé le cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En suivant la règle de la médiane des quantités récentes (1, 2, 1, 1), la quantité recommandée est de 1 unité, privilégiant la valeur la plus basse et constante pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 150 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 30 à 60 jours). La dernière commande remonte au 09/09/2025, soit 36 jours avant la date actuelle. Ce délai dépasse le seuil de réapprovisionnement de 30 jours et correspond à l'intervalle historique constaté (ex: août à septembre 2025). De plus, une commande avait été passée à la même période l'année dernière (03/10/2024). En application du principe de précaution B2B et pour éviter une rupture sur ce produit à faible rotation, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 185 tokens
- **Total**: 1,142 tokens



</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/09/2025, soit 36 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une consommation constante et minimale de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 163 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>11. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 69 jours. L'intervalle précédent était de 55 jours. Nous avons largement dépassé le cycle moyen constaté. En application du principe de précaution B2B (jours depuis dernière commande > 70% du cycle), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles sur les rotations faibles, on privilégie la valeur la plus basse de la médiane pour éviter le surstockage. La quantité de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 171 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>12. [LD009] LD Organic Asparagus Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 35 jours (entre juillet et août). La dernière commande remontant au 7 août 2025, soit il y a 69 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin non couvert. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1u), une commande de 1 unité est nécessaire pour maintenir le stock sans surstocker ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 134 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>13. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle observé entre les deux dernières commandes est de 35 jours. La dernière commande remonte au 07/08/2025, soit 69 jours avant la date actuelle (15/10/2025). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une rotation très faible et constante de 1 unité. Conformément aux règles pour les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 193 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>14. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 à 35 jours. La dernière commande datant du 07/08/2025 (soit plus de 60 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. En suivant la règle de la médiane des quantités récentes (2u, 2u, 1u), la quantité recommandée est de 2 unités pour reconstituer le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 138 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>15. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 35 jours entre les deux dernières commandes. Au 15 octobre, 69 jours se sont écoulés depuis la dernière commande (07/08), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 128 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>16. [LD012] LD Organic Samphire Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 à 35 jours. La dernière commande datant du 07/08/2025 (soit plus de 60 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 132 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>17. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande long et irrégulier (environ 55-60 jours). La dernière commande datant du 07/08/2025 (soit 69 jours avant la date actuelle), le délai dépasse largement le cycle moyen constaté. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la valeur basse de l'historique récent (médiane entre 1u et 2u, choix de la plus basse en cas de doute) pour éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 161 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>18. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/08/2025, soit 69 jours. Bien que le cycle soit irrégulier (55 jours entre les deux dernières commandes), le délai actuel dépasse largement la fréquence observée. En application du principe de précaution B2B (risque de rupture imminent ou cycle incertain), un besoin de réapprovisionnement est détecté pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 182 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>19. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 07/08/2025, soit 69 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B et pour éviter une rupture de stock prolongée sur un produit à faible rotation, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 141 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>20. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 30 à 60 jours). La dernière commande enregistrée date du 07/08/2025, soit plus de 60 jours avant la date actuelle (15/10/2025). Le délai écoulé dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou un besoin non couvert pour la période actuelle. En suivant le principe de précaution B2B et en se basant sur la médiane historique des commandes récentes (1u), une commande de 1 unité est nécessaire pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 151 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>21. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 juin 2025, soit 124 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement pour éviter une rupture de stock permanente sur cette référence. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 141 tokens
- **Total**: 1,014 tokens



</details>




### Donnees d'Input LLM (21 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-06-13 09:33:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 05:54:47: 1u
- 2024-05-30 09:18:01: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 1u
- 2025-07-03 12:19:43: 1u
- 2025-06-13 09:33:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 12:47:02: 2u
- 2024-08-14 05:54:47: 2u
- 2024-05-30 09:18:01: 2u
- 2024-04-23 14:38:28: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 05:54:47: 1u
- 2024-07-05 11:29:19: 2u
- 2024-04-23 14:38:28: 2u
- 2024-03-19 14:34:17: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 4u
- 2025-08-07 09:25:52: 4u
- 2025-07-03 12:19:43: 3u
- 2025-06-13 09:33:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 12:47:02: 5u
- 2024-08-14 05:54:47: 4u
- 2024-07-05 11:29:19: 4u
- 2024-05-30 09:18:01: 4u
- 2024-04-23 14:38:28: 4u
- 2024-03-19 14:34:17: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 4u
- 2025-08-07 09:25:52: 3u
- 2025-07-03 12:19:43: 3u
- 2025-06-13 09:33:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 12:47:02: 5u
- 2024-08-14 05:54:47: 4u
- 2024-05-30 09:18:01: 4u
- 2024-04-23 14:38:28: 4u
- 2024-03-19 14:34:17: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u
- 2025-07-03 12:19:43: 2u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u
- 2025-07-03 12:19:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u
- 2025-07-03 12:19:43: 1u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 12:47:02: 1u
- 2024-08-14 05:54:47: 1u
- 2024-07-05 11:29:19: 1u
- 2024-04-23 14:38:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 11:29:19: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LD009] LD Organic Asparagus Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u
- 2025-07-03 12:19:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u
- 2025-07-03 12:19:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u
- 2025-07-03 12:19:43: 2u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u
- 2025-07-03 12:19:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LD012] LD Organic Samphire Spread 135 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u
- 2025-07-03 12:19:43: 1u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u
- 2025-06-13 09:33:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u
- 2025-07-03 12:19:43: 1u
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-03 12:47:02: 1u
- 2024-08-14 05:54:47: 1u
- 2024-05-30 09:18:01: 2u
- 2024-04-23 14:38:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 09:33:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (24)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Predicted 1u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:09:08.827Z*
