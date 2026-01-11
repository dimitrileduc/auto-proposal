# Rapport Backtest - Client Ferme du Vallon

## Contexte

- **Client** : Ferme du Vallon (ID: 23329)
- **Commande réelle** : S39151
- **Date commande** : 2025-09-17 12:18:11
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 45
- **Tokens**: 41,547 input + 7,579 output = 49,126 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.1% | 45 produits prédits, 32 corrects |
| **Rappel** | 100.0% | 32 produits réels, 32 détectés |
| **F1-Score** | 83.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.03 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 51.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 76.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 19 | Avec erreur |

---

## True Positives (32)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 5 | 1 | 4.0 | 400.0% | partial | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 6 | 1 | 5.0 | 500.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (32 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/07/2025, soit plus de 60 jours. L'historique N-1 montre une activité régulière en juillet et août (2u par mois). Bien que le cycle récent soit lent, l'absence de commande depuis juillet et la présence de ventes l'année dernière à cette période indiquent un risque de rupture ou un besoin de réapprovisionnement imminent sous 30 jours. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. La médiane des commandes historiques (récentes et N-1) est de 2 unités. Les commandes de 2u sont la norme sur ce produit, à l'exception de la toute dernière (1u). En suivant la règle de la médiane et de la stabilité, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 209 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande d'environ 50 à 70 jours (mai à juillet). Depuis la dernière commande du 9 juillet 2025, 69 jours se sont écoulés, ce qui dépasse largement le cycle habituel et indique un risque de rupture imminent ou une commande déjà due. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, bien que des pics à 6u soient visibles historiquement, la commande la plus récente est de 2u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 162 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>3. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 49 jours entre les deux dernières commandes. Au 16 septembre 2025, 69 jours se sont écoulés depuis la dernière commande (09/07/2025), ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. En suivant la règle de précaution B2B et en privilégiant la médiane des quantités récentes (médiane entre 2u et 5u, avec choix de la valeur la plus basse en cas de doute), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 153 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 49 jours entre les deux dernières commandes (mai à juillet). La dernière commande datant du 9 juillet 2025, soit il y a 69 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une commande en retard. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, la médiane des commandes récentes est de 2,5 unités ; conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 164 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>5. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 jours entre les commandes récentes. La dernière commande datant du 09 juillet (soit plus de 65 jours), le seuil de réapprovisionnement est largement dépassé, confirmant un risque de rupture imminent. En application de la règle de la médiane sur l'historique récent (2u et 4u) et du principe de prudence consistant à choisir la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 128 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>6. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 69 jours. L'historique N-1 montre une commande début août, indiquant un cycle de rotation déjà dépassé ou en cours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé par principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles et stables (1u ou 2u). La médiane des commandes est de 2u. Conformément à la règle de maintien des rotations faibles, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 164 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit environ 69 jours. L'historique montre un cycle de réapprovisionnement d'environ 50 à 70 jours (mai à juillet). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité autour de 2 unités (médiane des commandes). On maintient cette quantité constante pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 163 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>8. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 60 jours. Bien que la rotation soit faible, l'historique de l'année précédente montre une activité régulière en juillet/août. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de réapprovisionnement imminent selon le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 1u et 2u. La médiane des commandes récentes et de l'historique N-1 (souvent 1u) suggère de maintenir une quantité minimale. En cas de doute sur une faible rotation, la règle impose de choisir la valeur la plus basse pour éviter le surstock. Quantité retenue : 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 197 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>9. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 60 jours. L'historique N-1 montre une activité sur la période juillet-août. Bien que la rotation soit faible, le délai écoulé depuis la dernière commande dépasse largement le cycle habituel constaté l'an dernier. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes de 1u ou 2u. En suivant la règle de la médiane et le choix de la valeur la plus basse en cas de doute pour les produits à rotation très faible (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 193 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>10. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 69 jours. Le cycle précédent était de 49 jours. Nous avons largement dépassé le cycle moyen et le seuil de 30 jours est atteint. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 161 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 69 jours avant la date actuelle. L'historique N-1 montre une activité régulière durant l'été et l'automne (juillet, août, septembre). Le délai depuis la dernière commande dépasse largement le cycle habituel constaté en 2024, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 3u et 4u. La médiane de l'historique récent est de 3,5u. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 193 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>12. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit environ 69 jours. Bien que la rotation soit lente, le délai écoulé dépasse largement le cycle observé entre les deux dernières commandes (49 jours). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité à 2 unités par commande. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane des commandes récentes, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 167 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>13. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/07/2025, soit plus de 60 jours. Bien que le cycle soit irrégulier, l'historique de l'année précédente montre une activité en août et septembre (2u et 10u). En application du principe de précaution B2B et face à un risque de rupture probable dans les 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes de la même période l'an dernier (août/septembre 2024) et à la valeur basse sécuritaire pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 151 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>14. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 6u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 6u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 3u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande récent montre un intervalle d'environ 49 jours entre les deux dernières commandes. La dernière commande datant du 9 juillet 2025 (soit 69 jours avant la date actuelle), le seuil de 70% du cycle moyen est largement dépassé, indiquant un risque de rupture imminent. Bien que l'historique de l'année précédente montre des volumes plus élevés (4u à 10u), la tendance récente s'est stabilisée à 3 unités. En appliquant la règle de la médiane des commandes récentes et le principe de précaution face à une rotation irrégulière, une commande de 3 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 150 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>15. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 60 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés historiquement (environ 45-60 jours en 2024). En application du principe de précaution B2B et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité à 2 unités (2025-07, 2024-03, 2024-02). Le pic de 8 unités en 2023 est considéré comme exceptionnel. La médiane des commandes significatives récentes étant de 2, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 211 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>16. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 69 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande en septembre (26/09/2023). Le délai depuis la dernière commande dépasse largement le cycle habituel observé en 2024. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 1u. La médiane historique récente est de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1u sans augmenter pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 186 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>17. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation lente avec un intervalle moyen d'environ 50 à 60 jours. La dernière commande remontant au 09/07/2025 (soit plus de 60 jours), le risque de rupture est imminent ou déjà avéré pour la période de couverture de 30 jours. L'historique N-1 confirme également une activité régulière sur cette période (août/septembre). En application de la règle de la médiane sur les commandes récentes (2u et 3u) et du principe de prudence privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 158 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>18. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/07/2025, soit 69 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 50 à 70 jours (ex: mai à juillet). Le délai actuel dépasse largement ce cycle, ce qui indique un risque de rupture imminent ou une commande due dans l'horizon des 30 jours. En appliquant le principe de précaution B2B et en se basant sur la médiane des commandes récentes (2u et 3u), la quantité recommandée est de 2 unités, privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 153 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>19. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 4u (400.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un cycle de commande d'environ 49 jours (entre mai et juillet). La dernière commande remonte au 09/07/2025, soit 69 jours avant la date actuelle (16/09/2025). Le délai écoulé dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes précédentes sont de 4u et 5u. En appliquant la règle de la médiane et le principe de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 182 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>20. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 49 jours (entre mai et juillet). Au 16 septembre, 69 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. En suivant la règle de la médiane sur les quantités récentes (2u et 2u), la quantité préconisée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 125 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>21. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 09/07/2025, soit plus de 60 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en juillet/août. Selon le principe de précaution B2B et le cycle irrégulier, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute ou de rotation faible), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 961 tokens
- **Output**: 168 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>22. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 5u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 4u (400.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation très lente avec une dernière commande remontant à près de 4 mois (21 mai 2025). Bien que le cycle soit irrégulier, l'absence de commande récente et l'approche de la période automnale (où des volumes plus importants de 10u ont été observés l'an dernier en septembre) créent un risque de rupture ou un besoin de réapprovisionnement par précaution. En suivant la règle de la médiane historique et en écartant le pic exceptionnel de 10u pour privilégier la prudence, une quantité de 5 unités est préconisée pour couvrir les 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 148 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>23. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 21 mai 2025, soit environ 118 jours. Bien que l'historique récent soit très faible (1u), l'historique N-1 montre une activité significative en septembre (10u le 26/09/2023). En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. Conformément à la règle de rotation très faible (1-2u) et pour éviter le surstockage sur un produit à faible fréquence, la quantité minimale de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 158 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>24. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 21 mai 2025, soit environ 118 jours sans activité. Bien que l'historique récent soit faible, l'analyse de l'année précédente (N-1) montre une commande de 10 unités fin septembre 2023, suggérant un besoin saisonnier ou une reprise de cycle à cette période de l'année. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes les plus récentes (2024-2025), privilégiant la prudence face aux volumes plus importants constatés par le passé.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 175 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>25. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 6u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 5u (500.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 mai 2025, soit environ 118 jours sans activité. L'historique de l'année précédente montre une activité régulière durant la période de septembre (commande le 26/09/2023). Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique car nous entrons dans une période historiquement active et le délai depuis la dernière commande dépasse largement les cycles habituels. Pour la quantité, on ignore le pic exceptionnel de 10u (mai 2025) et on se base sur la médiane de l'historique (2, 2, 2, 4, 6, 7, 10). La médiane se situe à 4u, mais compte tenu de la commande de 6u à la même période l'an dernier et du besoin de couvrir le seuil de 30 jours, une quantité de 6u est retenue pour sécuriser le stock sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 227 tokens
- **Total**: 1,199 tokens



</details>


<details>
<summary><strong>26. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 mai 2025, soit environ 118 jours. L'historique montre une rotation irrégulière avec des intervalles variant de 45 à 120 jours. Selon le principe de précaution B2B, le délai depuis la dernière commande dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent sous 30 jours. La quantité retenue est de 6 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques (6u), tout en écartant le pic ponctuel de 8u.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 135 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>27. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 mai 2025, soit environ 118 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles standards de rotation. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 4u et l'année précédente 3u. En suivant la règle de la médiane et de la stabilité sur les faibles rotations, la quantité de 4u est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 167 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>28. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 21 mai 2025, soit environ 118 jours. Bien que l'historique récent soit limité à une seule commande de 2 unités, l'historique de l'année précédente montre une activité régulière durant la période de septembre (commande le 26/09/2023). Le cycle de commande est irrégulier, ce qui, selon le principe de précaution B2B, impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane de l'historique global (1, 1, 1, 2, 2, 3) et à la dernière commande enregistrée.

**Tokens utilises pour cette prediction:**
- **Input**: 959 tokens
- **Output**: 162 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>29. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 mai 2025, soit environ 118 jours sans activité. Bien que l'historique récent soit très faible (une seule commande de 2u), la règle de précaution B2B impose de prévoir un réapprovisionnement face à une absence prolongée de commande, surtout avec un seuil de 30 jours. En l'absence de cycle régulier identifiable, le principe de détection du besoin s'applique. La quantité retenue est de 2 unités, correspondant à la médiane (et valeur unique) de la commande la plus récente, respectant ainsi la règle de ne pas surestimer pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 154 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>30. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 mai 2025, soit environ 118 jours. Bien que l'historique récent soit faible, une commande a eu lieu à la même période l'année dernière (août). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. La commande la plus récente est de 1u. Malgré un pic à 6u l'année dernière, la règle de la médiane et la prudence sur les rotations faibles imposent de maintenir la quantité minimale observée récemment pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 166 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>31. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 4u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 mai 2025, soit environ 118 jours. Bien que la rotation soit lente, l'historique de l'année précédente montre une commande en août (N-1). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. La dernière commande était de 4 unités. La médiane des commandes significatives (en excluant les unités isolées de 1u qui semblent insuffisantes pour maintenir un stock linéaire) suggère de maintenir le volume récent le plus stable. On retient 4 unités pour assurer la disponibilité sans surstockage massif.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 178 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>32. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 mai 2025, soit environ 118 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment (environ 60 jours entre les commandes de 2024). Un risque de rupture est identifié pour la période de 30 jours à venir. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) montre une constance absolue avec des commandes systématiques de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 190 tokens
- **Total**: 1,095 tokens



</details>




### Donnees d'Input LLM (32 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 1u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 2u
- 2024-05-30 08:14:30: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u
- 2025-05-21 08:02:07: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 5u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 3u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 5u
- 2024-03-21 09:17:18: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u
- 2025-05-21 08:02:07: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:14:30: 2u
- 2024-03-21 09:17:18: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 1u
- 2024-05-30 08:14:30: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-01 07:07:00: 2u
- 2024-03-21 09:17:18: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 1u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 1u
- 2024-07-01 07:07:00: 1u
- 2024-05-30 08:14:30: 3u
- 2024-03-21 09:17:18: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 3u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-01 07:07:00: 1u
- 2024-03-21 09:17:18: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 3u
- 2025-05-21 08:02:07: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 2u
- 2024-05-30 08:14:30: 2u
- 2024-03-21 09:17:18: 6u
- 2024-02-05 13:23:35: 8u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-21 09:17:18: 6u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 1u
- 2025-05-21 08:02:07: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 2u
- 2024-05-30 08:14:30: 2u
- 2024-03-21 09:17:18: 6u
- 2024-02-05 13:23:35: 4u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 3u
- 2025-05-21 08:02:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 4u
- 2024-07-01 07:07:00: 6u
- 2024-03-21 09:17:18: 8u
- 2024-02-05 13:23:35: 8u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>15. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-21 09:17:18: 2u
- 2024-02-05 13:23:35: 2u
- 2023-09-26 06:47:59: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 1u
- 2025-05-21 08:02:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:14:30: 2u
- 2024-03-21 09:17:18: 3u
- 2024-02-05 13:23:35: 5u
- 2023-09-26 06:47:59: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u
- 2025-05-21 08:02:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 4u
- 2024-05-30 08:14:30: 3u
- 2024-04-25 08:22:30: 6u
- 2024-03-21 09:17:18: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 3u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 1u
- 2024-04-25 08:22:30: 6u
- 2024-03-21 09:17:18: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 5u
- 2025-05-21 08:02:07: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 2u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:31:17: 1u
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 1u
- 2024-07-01 07:07:00: 2u
- 2024-04-25 08:22:30: 3u
- 2024-02-05 13:23:35: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-21 09:17:18: 5u
- 2024-02-05 13:23:35: 5u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-21 09:17:18: 5u
- 2024-02-05 13:23:35: 3u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>24. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 1u
- 2024-05-30 08:14:30: 2u
- 2024-03-21 09:17:18: 4u
- 2024-02-05 13:23:35: 3u
- 2023-09-26 06:47:59: 10u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>25. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-07-01 07:07:00: 2u
- 2024-05-30 08:14:30: 6u
- 2024-03-21 09:17:18: 4u
- 2024-02-05 13:23:35: 2u
- 2023-09-26 06:47:59: 7u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 6u
- 2024-05-30 08:14:30: 6u
- 2024-03-21 09:17:18: 8u
- 2024-02-05 13:23:35: 6u
- 2023-09-26 06:47:59: 4u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>27. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>28. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 1u
- 2024-05-30 08:14:30: 1u
- 2024-04-25 08:22:30: 3u
- 2024-02-05 13:23:35: 1u
- 2023-09-26 06:47:59: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>29. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>30. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 6u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>31. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 1u
- 2024-05-30 08:14:30: 3u
- 2024-03-21 09:17:18: 1u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>32. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-21 08:02:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-01 06:23:12: 2u
- 2024-03-21 09:17:18: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF021] JF PICKLES 350 ML | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 2 | Predicted 2u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 6 | Predicted 6u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Predicted 2u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:50.342Z*
