# Rapport Backtest - Client COMARKT HUMBEEK  - IZOCK BV

## Contexte

- **Client** : COMARKT HUMBEEK  - IZOCK BV (ID: 38721)
- **Commande réelle** : S39211
- **Date commande** : 2025-09-16 08:54:45
- **Date cutoff système** : 2025-09-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 35,408 input + 5,772 output = 41,180 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.6% | 37 produits prédits, 18 corrects |
| **Rappel** | 81.8% | 22 produits réels, 18 détectés |
| **F1-Score** | 61.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (18)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (18 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 16 juillet 2025, soit il y a environ 60 jours. Historiquement (N-1), une commande a été passée début septembre. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière livraison et l'historique de l'année précédente indiquent un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la consommation historique habituelle pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 162 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 45 à 60 jours. La dernière commande datant du 16 juillet 2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, présentant un risque de rupture imminent. L'historique N-1 confirme également une activité régulière en septembre. En appliquant la règle de la médiane sur les commandes récentes et historiques (majoritairement à 2 unités), la quantité préconisée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 143 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 16 juillet 2025, soit il y a 61 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité en septembre (03/09/2024). En application du principe de précaution B2B (doute sur le cycle = risque de rupture), un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane historique et au volume habituel pour ce produit à faible rotation, afin d'éviter un surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 145 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>4. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 16 juillet 2025, soit 61 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent et respectant la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 127 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>5. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remonte au 16 juillet 2025, soit 61 jours avant la date actuelle. En comparant avec l'historique N-1, une commande avait été passée le 3 septembre 2024. Le délai écoulé dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. Conformément à la règle de précaution B2B et à la médiane historique constante sur ce produit à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 150 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit environ 81 jours. Bien que l'historique récent soit faible, l'historique N-1 montre une commande en septembre (03/09/2024). Compte tenu du délai écoulé et du principe de précaution B2B pour éviter une rupture sur un produit à rotation lente mais existante, un besoin est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 183 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>7. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Étape 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit environ 81 jours. L'historique N-1 montre une activité en septembre (03/09/2024). Bien que la rotation soit faible et irrégulière, le délai depuis la dernière commande dépasse largement les cycles observés, créant un risque de rupture. En application du principe de précaution B2B, un besoin est détecté. Étape 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes de 1u ou 2u. La médiane des commandes est de 1u. Conformément à la règle de ne pas surestimer les produits à faible rotation, la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 180 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 0u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 0u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 49 jours entre les deux dernières commandes (mai et juin). Depuis la dernière commande du 26 juin 2025, 81 jours se sont écoulés, ce qui dépasse largement le cycle moyen constaté. Bien que l'historique de l'année précédente soit nul, l'absence de commande depuis plus de deux mois sur un produit actif génère un doute important et un risque de rupture imminent. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la valeur basse de la médiane historique récente (entre 1u et 2u), afin d'éviter le surstockage sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 169 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>9. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 0u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 0u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation très faible mais régulière (1 unité par commande). La dernière commande remonte au 26 juin 2025, soit plus de 80 jours. Bien que le cycle soit lent, l'historique N-1 montre une activité en septembre (03/09/2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation sporadique, un réapprovisionnement est nécessaire. La quantité retenue correspond à la médiane stricte de l'historique récent (1u).

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 134 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>10. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit plus de 80 jours sans réapprovisionnement. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles observés l'année précédente (environ 50-60 jours entre les commandes de mai et juillet 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 150 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>11. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 0u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 0u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 81 jours. Bien que l'historique soit faible, une commande a eu lieu à la même période l'année dernière (3 septembre 2024). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une rotation très faible de 1 unité. Conformément aux règles sur les rotations faibles, la quantité de 1 unité est maintenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 170 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>12. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 26 juin 2025, soit plus de 80 jours sans réapprovisionnement, ce qui dépasse largement le cycle habituel observé l'année précédente (environ 45-60 jours). Il existe donc un risque de rupture imminent dans l'horizon des 30 jours. Conformément à la règle de la médiane historique, la quantité retenue est de 2 unités, ce qui correspond au volume standard commandé sur la majorité des occurrences passées (2024 et 2025), en écartant le pic ponctuel de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 152 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>13. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec une commande environ tous les 2 à 3 mois. La dernière commande enregistrée date du 26 juin 2025, soit il y a plus de 80 jours. Le cycle moyen étant largement dépassé, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B et à la médiane historique constatée (1 unité), une commande de 1 unité est nécessaire pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 129 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>14. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit plus de 80 jours sans activité. Bien que la rotation soit très faible et irrégulière, l'historique de l'année précédente montre une commande en septembre (03/09/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours face à un cycle incertain, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes historiques (systématiquement 1u), respectant la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 158 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>15. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit environ 81 jours. L'historique N-1 montre une activité régulière entre juin et septembre (commandes en juin, juillet et septembre 2024). Bien que le cycle soit irrégulier, l'absence de commande depuis plus de 80 jours combinée à l'historique de l'année précédente à la même période indique un risque de rupture imminent ou un besoin de réapprovisionnement sous 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une rotation très faible et constante de 1 unité (médiane de 1u). La commande de 2u en juin est traitée comme un pic mineur. En respectant la règle de prudence sur les faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 205 tokens
- **Total**: 1,177 tokens



</details>


<details>
<summary><strong>16. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ 1 unité tous les 1.5 à 2 mois). La dernière commande enregistrée remonte au 26 juin 2025, soit plus de 80 jours avant la date actuelle (15 septembre 2025). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un besoin imminent ou un risque de rupture. Conformément à la règle de la médiane sur l'historique récent et N-1 (où la quantité est systématiquement de 1 unité), une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 158 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>17. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 0u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 0u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 08/05/2025, soit plus de 120 jours sans activité. Bien que l'historique N-1 soit nul à cette période, le principe de précaution B2B s'applique ici car le cycle de rotation est indéterminé. En cas de doute sur le cycle ou de rotation irrégulière, il est nécessaire de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue correspond à la dernière commande connue (1u), respectant la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 133 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>18. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et sporadique (1 unité par commande). La dernière commande remonte au 08/05/2025, soit plus de 120 jours. Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 30 à 60 jours). Pour éviter une rupture prolongée sur cette référence, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 144 tokens
- **Total**: 1,082 tokens



</details>




### Donnees d'Input LLM (18 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:42:48: 1u
- 2025-06-26 06:30:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 1u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:42:48: 2u
- 2025-06-26 06:30:59: 2u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 2u
- 2024-07-16 10:58:33: 2u
- 2024-06-13 13:09:41: 2u
- 2024-05-21 08:47:38: 2u
- 2024-04-05 11:18:46: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:42:48: 1u
- 2025-06-26 06:30:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 1u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:42:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:42:48: 1u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 2u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 2u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 2u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 1u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:58:33: 1u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 3u
- 2025-05-08 08:43:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 2u
- 2024-07-16 10:58:33: 2u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 2u
- 2024-04-05 11:18:46: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 1u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 1u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 1u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 2u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:30:59: 1u
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:36:43: 1u
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 0u
- 2024-05-21 08:47:38: 0u
- 2024-04-05 11:18:46: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:43:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 10:58:33: 0u
- 2024-06-13 13:09:41: 1u
- 2024-05-21 08:47:38: 1u
- 2024-04-05 11:18:46: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:24.231Z*
