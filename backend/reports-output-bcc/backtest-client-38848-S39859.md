# Rapport Backtest - Client Macéli SRL

## Contexte

- **Client** : Macéli SRL (ID: 38848)
- **Commande réelle** : S39859
- **Date commande** : 2025-10-22 13:39:06
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 30,903 input + 5,286 output = 36,189 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.8% | 31 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 70.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.12 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 11.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 22 septembre 2025, soit il y a 29 jours. L'historique montre une commande à la même période l'année dernière (30 septembre 2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de renouvellement est atteint. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes (1, 2, 1, 1) est de 1. En respectant la règle de prudence sur les faibles rotations et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 191 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 22 septembre 2025, soit il y a 29 jours. L'historique montre un cycle de commande irrégulier mais une récurrence sur la période de septembre/octobre (confirmée par la commande du 30/09/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de renouvellement est atteint. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles et constants (1u ou 2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 206 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>3. [MF0050] MF Cornichons aigre doux (belge) 500g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 49 jours. La dernière commande datant du 22 septembre (il y a 29 jours), nous atteignons 60% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 122 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 22 septembre, soit 29 jours. Le cycle moyen récent est d'environ 50-60 jours, mais l'historique N-1 montre une commande fin septembre suivie d'une période d'activité. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Les quantités récentes sont de 4, 2 et 2 unités. La médiane de l'historique récent est de 2 unités. En cas de doute entre la dernière commande (4u) et la médiane (2u), la règle impose de choisir la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 181 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence d'environ 50 à 70 jours. La dernière commande remonte au 22 septembre 2025, soit 29 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour éviter une rupture (principe de précaution B2B). L'historique N-1 confirme également une commande fin septembre/début octobre. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 142 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 22 septembre 2025, soit il y a 29 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock, d'autant plus que l'historique montre une rotation très lente et ponctuelle (1 unité par commande). Le risque de rupture est imminent selon le principe de précaution B2B. ÉTAPE 2 : L'historique récent et N-1 (août 2024) indiquent une quantité constante de 1 unité. Conformément à la règle sur les rotations faibles, la quantité de 1 est maintenue pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 168 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours. La dernière commande remonte au 22 septembre 2025, soit il y a 29 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable avant la prochaine opportunité de commande. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes et à la tendance historique constante pour ce format spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 146 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 78 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en juillet/août. Le délai depuis la dernière commande dépasse largement les cycles habituels observés. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes unitaires (médiane de 1u). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1u sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 184 tokens
- **Total**: 1,103 tokens



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
La dernière commande remonte au 04/08/2025, soit 78 jours. Bien que la rotation soit faible et irrégulière, l'historique N-1 montre une activité durant cette période de l'année. En application du principe de précaution B2B (doute sur le cycle = prévoir), une commande est nécessaire pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la tendance de consommation minimale observée.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 117 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>10. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remonte au 4 août 2025, soit 78 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen observé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours. Conformément à la règle de précaution B2B et à l'historique récent (médiane de 1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 139 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>11. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 78 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés historiquement. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes unitaires (1u) ou très faibles (2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter sans raison.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 174 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>12. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 11 juin 2025, soit plus de 130 jours. Bien que l'historique soit très faible, le délai écoulé dépasse largement tout cycle de rotation raisonnable pour un produit bio. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et à l'utilisation de la valeur la plus récente comme référence de volume, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 179 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>13. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une unité tous les 3 à 5 mois). La dernière commande remonte au 11 juin 2025, soit plus de 130 jours. Bien que le cycle soit lent, le délai écoulé dépasse largement les intervalles habituels constatés en 2024, ce qui induit un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B. Conformément aux règles pour les faibles rotations, la quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 145 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>14. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sur cette période (août/septembre). En l'absence de données récentes et face à un cycle irrégulier, le principe de précaution B2B s'applique pour éviter une rupture potentielle. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente indique une rotation très faible et constante de 1 unité. Conformément aux règles sur les faibles rotations, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 134 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>15. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation très faible et sporadique. En l'absence de données récentes et compte tenu du principe de précaution B2B, un risque de rupture ne peut être exclu si le cycle se réactive. ÉTAPE 2 : Estimation de la quantité. L'historique disponible (N-1) indique une quantité constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique pour éviter une rupture tout en limitant le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 147 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>16. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité sporadique. En l'absence de données récentes pour établir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit à rotation faible. ÉTAPE 2 : Estimation de la quantité. L'historique de l'année précédente indique des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 145 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>17. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le produit présente une rotation très faible et irrégulière (aucune commande récente, 2 unités l'année dernière). La dernière commande enregistrée à cette période l'année précédente date du 30 septembre. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de besoin est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre une stabilité stricte à 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 unité est maintenue pour couvrir le besoin potentiel sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 162 tokens
- **Total**: 1,054 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 1u
- 2025-06-11 08:19:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u
- 2024-08-23 08:16:43: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 1u
- 2025-06-11 08:19:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u
- 2024-08-23 08:16:43: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0050] MF Cornichons aigre doux (belge) 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 2u
- 2025-08-04 11:42:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 4u
- 2025-08-04 11:42:30: 2u
- 2025-06-11 08:19:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 2u
- 2024-08-23 08:16:43: 5u
- 2024-05-31 13:37:55: 4u
- 2024-03-21 08:13:26: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 1u
- 2025-08-04 11:42:30: 1u
- 2025-06-11 08:19:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:16:43: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:20:39: 1u
- 2025-08-04 11:42:30: 1u
- 2025-06-11 08:19:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:16:43: 1u
- 2024-07-15 08:00:15: 2u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u
- 2025-06-11 08:19:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u
- 2025-06-11 08:19:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:19:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 08:19:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 08:16:43: 1u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u
- 2024-08-23 08:16:43: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:00:15: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:00:15: 2u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:00:15: 1u
- 2024-03-21 08:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:21.758Z*
