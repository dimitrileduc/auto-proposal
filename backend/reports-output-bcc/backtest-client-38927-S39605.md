# Rapport Backtest - Client FERNEL-DIS SRL

## Contexte

- **Client** : FERNEL-DIS SRL (ID: 38927)
- **Commande réelle** : S39605
- **Date commande** : 2025-10-21 07:47:50
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 26,443 input + 4,513 output = 30,956 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.6% | 28 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 69.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 115.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 130.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 105.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 14 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande remontant à 90 jours (22 juillet), ce qui dépasse largement les intervalles habituels. Selon le principe de précaution B2B et la détection d'un besoin incertain, un réapprovisionnement est nécessaire pour couvrir l'horizon de 30 jours. La quantité est déterminée par la médiane des commandes historiques (récentes et N-1), qui se situe entre 3u et 5u. Conformément à la règle de prudence privilégiant la valeur basse en cas de doute sur une rotation irrégulière, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 146 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande remontant à 90 jours (22 juillet), ce qui dépasse largement les intervalles habituels. Selon le principe de précaution B2B et la règle du doute sur le cycle, un besoin de réapprovisionnement est détecté pour couvrir le risque de rupture. Pour la quantité, l'historique récent et N-1 montre une récurrence forte sur la valeur 4u (médiane de l'historique global). Bien que la dernière commande était de 2u, le volume standard de rotation se situe à 4u, quantité retenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 154 tokens
- **Total**: 1,142 tokens



</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 60 à 90 jours. La dernière commande remontant au 22 juillet 2025 (soit environ 90 jours), le risque de rupture est imminent ou déjà avéré pour la période de fin d'année. Bien que les commandes de l'année précédente à la même période étaient de 1 unité, les commandes les plus récentes en 2025 se sont stabilisées à 2 unités. En application de la règle de la médiane sur l'historique récent et du principe de précaution B2B, une commande de 2 unités est nécessaire pour couvrir les besoins des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 158 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement irrégulière mais nécessaire. La dernière commande remonte au 22 juillet 2025, soit environ 90 jours sans activité, ce qui dépasse largement les cycles observés précédemment (13 à 50 jours). Selon le principe de précaution B2B et le risque de rupture à l'horizon de 30 jours, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et à la constante des commandes récentes (3u), stabilisant le stock face à une demande qui a légèrement augmenté par rapport à l'année précédente (2u).

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 148 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>5. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation irrégulière avec une dernière commande enregistrée il y a 90 jours (22 juillet). Bien que l'historique récent soit espacé, le délai écoulé dépasse largement les cycles observés précédemment, créant un risque de rupture imminent selon le principe de précaution B2B. En application de la règle de la médiane sur les commandes récentes (4u, 3u, 4u), la valeur centrale est de 4u. Toutefois, conformément à la consigne de privilégier la prudence et la valeur la plus basse en cas de doute sur une rotation irrégulière, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 150 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>6. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande enregistrée le 22 juillet 2025. À la date actuelle du 20 octobre 2025, le délai depuis la dernière commande (environ 90 jours) dépasse largement les intervalles habituels, ce qui indique un besoin de réapprovisionnement imminent ou une rupture de stock probable (principe de précaution B2B). En appliquant la règle de la médiane sur les commandes récentes (2u, 4u, 4u), la valeur centrale est de 4u, mais conformément aux consignes de privilégier la quantité la plus basse en cas de doute sur une rotation faible et pour éviter le surstockage, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 175 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une absence d'activité depuis le 22 juillet 2025 (soit environ 90 jours). Bien que la rotation soit faible et irrégulière, l'historique de l'année précédente (N-1) indique une commande de 1u en octobre 2024. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. La quantité retenue est de 2u, correspondant à la médiane des commandes récentes (médiane entre 2u et 4u, en privilégiant la valeur la plus basse par prudence).

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 161 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 09/07/2025, soit plus de 100 jours. L'historique 2024 montre une commande récurrente en octobre (07/10/2024). Bien que le cycle soit irrégulier en 2025, le principe de précaution B2B et la saisonnalité N-1 indiquent un besoin imminent pour éviter une rupture sur l'horizon de 30 jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique montre des volumes constants de 2u (médiane historique). Bien qu'une commande de 4u ait eu lieu en mai, la majorité des commandes (75%) se stabilise à 2u. En application de la règle de la médiane et du choix de la valeur la plus basse en cas de doute, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 222 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 100 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en août. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de renouvellement de stock pour la période actuelle. Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 2 unités. La médiane historique se situe entre 1 et 2 unités. En suivant la règle de maintien des quantités pour les rotations faibles, la quantité de 2 unités est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 179 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>10. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/07/2025, soit plus de 100 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 45 à 60 jours). Bien que la rotation soit faible, l'historique N-1 montre une commande systématique en octobre (07/10/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 156 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>11. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours. La dernière commande remontant au 09 juillet 2025 (soit plus de 100 jours), le délai de réapprovisionnement est largement dépassé, ce qui confirme un risque de rupture imminent selon le principe de précaution B2B. Pour la quantité, l'historique récent et N-1 montre une rotation faible et régulière comprise entre 1u et 4u. La médiane des commandes (2u) est retenue conformément aux règles de gestion des faibles rotations pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 148 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation faible et irrégulière. La dernière commande remonte à plus de 100 jours (juillet 2025), ce qui dépasse largement les cycles observés précédemment. Bien que la demande soit sporadique, l'historique N-1 montre une commande en octobre (2024-10-07). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane basse des commandes historiques (1-2u), afin d'éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 162 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>13. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/07/2025, soit plus de 100 jours. L'historique de l'année précédente montre une commande systématique en octobre (07/10/2024), indiquant un besoin saisonnier ou un cycle de réapprovisionnement long. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent pour la période actuelle. En suivant le principe de précaution B2B et en se basant sur la médiane des quantités historiques (2u), une commande de 2 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 137 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>14. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 5u (500.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/07/2025, soit plus de 100 jours sans activité. Bien que l'historique de l'année précédente montre une rotation faible et sporadique (environ tous les 2 mois), le délai actuel dépasse largement le cycle habituel. En application du principe de précaution B2B (Étape 1), un besoin est détecté car l'absence prolongée de commande suggère un risque de rupture imminent ou un besoin de réapprovisionnement de stock. Pour la quantité (Étape 2), on se base sur la commande la plus récente (6u) qui représente le volume de référence actuel, tout en restant prudent face à l'historique N-1 plus faible.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 166 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>15. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une absence de données récentes depuis juillet 2025 (plus de 100 jours). Selon le principe de précaution B2B, un cycle incertain ou une absence prolongée de commande impose de prévoir un réapprovisionnement pour éviter une rupture. En se basant sur l'historique N-1 à la même période (octobre 2024 : 4u) et sur la médiane globale des commandes passées (médiane de 2, 3, 4, 5, 5, 8 = 4.5), la quantité retenue est de 4 unités, privilégiant la valeur la plus basse en cas de doute conformément aux règles de gestion.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 172 tokens
- **Total**: 1,127 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 2u
- 2025-07-09 11:10:01: 5u
- 2025-05-20 10:51:22: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 3u
- 2024-08-08 07:54:40: 5u
- 2024-05-23 08:17:06: 4u
- 2024-04-15 12:06:49: 3u
- 2024-03-05 14:19:26: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 2u
- 2025-07-09 11:10:01: 4u
- 2025-05-20 10:51:22: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:54:40: 4u
- 2024-07-04 08:53:27: 1u
- 2024-05-23 08:17:06: 4u
- 2024-04-15 12:06:49: 4u
- 2024-03-05 14:19:26: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 2u
- 2025-05-20 10:51:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 1u
- 2024-07-04 08:53:27: 1u
- 2024-04-15 12:06:49: 1u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 3u
- 2025-07-09 11:10:01: 3u
- 2025-05-20 10:51:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 2u
- 2024-08-08 07:54:40: 2u
- 2024-04-15 12:06:49: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 4u
- 2025-07-09 11:10:01: 3u
- 2025-05-20 10:51:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 2u
- 2024-03-05 14:19:26: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 2u
- 2025-07-09 11:10:01: 4u
- 2025-05-20 10:51:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 2u
- 2024-08-08 07:54:40: 3u
- 2024-05-23 08:17:06: 2u
- 2024-04-15 12:06:49: 2u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:06: 2u
- 2025-07-09 11:10:01: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 1u
- 2024-04-15 12:06:49: 1u
- 2024-03-05 14:19:26: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 2u
- 2025-05-20 10:51:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 2u
- 2024-07-04 08:53:27: 2u
- 2024-05-23 08:17:06: 2u
- 2024-04-15 12:06:49: 2u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 2u
- 2025-05-20 10:51:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:54:40: 1u
- 2024-07-04 08:53:27: 2u
- 2024-04-15 12:06:49: 1u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 2u
- 2024-07-04 08:53:27: 2u
- 2024-05-23 08:17:06: 1u
- 2024-04-15 12:06:49: 2u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 2u
- 2025-05-20 10:51:22: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 07:54:40: 2u
- 2024-05-23 08:17:06: 1u
- 2024-04-15 12:06:49: 2u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 2u
- 2025-05-20 10:51:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 1u
- 2024-08-08 07:54:40: 1u
- 2024-05-23 08:17:06: 2u
- 2024-04-15 12:06:49: 1u
- 2024-03-05 14:19:26: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 1u
- 2024-08-08 07:54:40: 2u
- 2024-05-23 08:17:06: 2u
- 2024-04-15 12:06:49: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 08:53:27: 1u
- 2024-05-23 08:17:06: 1u
- 2024-04-15 12:06:49: 1u
- 2024-03-05 14:19:26: 1u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:10:01: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 12:30:42: 4u
- 2024-07-04 08:53:27: 2u
- 2024-05-23 08:17:06: 5u
- 2024-04-15 12:06:49: 3u
- 2024-03-05 14:19:26: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | Predicted 4u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | Predicted 4u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:09.362Z*
