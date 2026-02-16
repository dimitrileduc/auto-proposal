# Rapport Backtest - Client Bei Valerie einkaufen & geniessen

## Contexte

- **Client** : Bei Valerie einkaufen & geniessen (ID: 24487)
- **Commande réelle** : S39598
- **Date commande** : 2025-10-08 07:30:06
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 28,099 input + 5,189 output = 33,288 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.2% | 21 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 86.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 15.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées mais régulières (février, mars, août). Le délai depuis la dernière commande dépasse largement les cycles observés précédemment, ce qui indique un besoin de réapprovisionnement imminent pour éviter une rupture prolongée. En suivant le principe de précaution B2B et la règle de la médiane historique (1u), une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 124 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. L'historique N-1 montre une commande le 27 octobre 2023 et une activité régulière entre février et août. Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement les cycles habituels observés. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes constants entre 1u et 3u. La médiane des commandes historiques est de 2u. Conformément à la règle de ne pas surestimer et de privilégier la médiane stable, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 206 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. L'historique N-1 montre une activité régulière entre octobre et décembre (27/10, 01/12, 12/12). Le délai depuis la dernière commande dépasse largement le cycle habituel, et nous entrons dans une période de consommation historiquement active. Le risque de rupture est élevé face à la saisonnalité N-1. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes faibles et stables (1u, 2u, 3u). La médiane des commandes significatives est de 2 unités. En respectant le principe de précaution sans surstocker sur une rotation faible, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 198 tokens
- **Total**: 1,186 tokens



</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit 118 jours. L'historique N-1 montre une commande le 27 octobre 2023 et une activité régulière en fin d'année. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les fréquences habituelles et nous entrons dans une période historiquement active (octobre/décembre). Par principe de précaution B2B, un besoin est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche une commande de 4u, mais l'historique long (N-1) montre une médiane de 2u (valeurs : 1, 1, 2, 2, 2, 2, 3). Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 249 tokens
- **Total**: 1,237 tokens



</details>


<details>
<summary><strong>5. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit 118 jours. L'historique N-1 montre une activité régulière entre août et décembre (commandes en août, octobre et décembre). Bien que le cycle soit irrégulier, nous entrons dans une période historiquement active. En application du principe de précaution B2B (doute sur le cycle = prévoir), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est très faible (1u). En regardant l'historique global, les quantités oscillent entre 1u et 3u. La médiane de l'historique complet est de 1u, mais les périodes de fin d'année (octobre/août) montrent souvent des besoins de 2u. Par mesure de sécurité sans surestimer, la quantité de 2u est retenue pour s'aligner sur la commande d'octobre N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 239 tokens
- **Total**: 1,210 tokens



</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. L'historique N-1 montre une activité régulière entre août et décembre (commandes en août, octobre, décembre). Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent pour la période automnale. Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 3u, tandis que l'historique N-1 oscille entre 1u et 2u. La médiane de l'ensemble des commandes est de 1.5u. En suivant la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 217 tokens
- **Total**: 1,170 tokens



</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. L'historique N-1 montre une commande en août et une en décembre, suggérant un cycle de rotation lent mais régulier (environ tous les 3-4 mois). Avec un seuil de réapprovisionnement de 30 jours et une dernière commande datant de près de 4 mois, le risque de rupture est élevé ou le cycle est atteint. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique complet (récent et N-1) est d'une stabilité absolue avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 199 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit 118 jours. L'historique N-1 montre une commande le 14 août 2024, indiquant un besoin passé non encore couvert cette année à la même période. Le cycle est irrégulier et le délai depuis la dernière commande est très important. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. La dernière commande était de 2u, tandis que les commandes N-1 étaient de 1u. La médiane se situe entre 1 et 2. Conformément à la règle de maintien des volumes pour les rotations faibles et au principe de précaution, la quantité de 2u est retenue pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 213 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en juin et août. Avec un seuil de réapprovisionnement de 30 jours et une absence de commande depuis près de 4 mois, il existe un doute sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : La dernière commande était de 2u. En suivant la règle de maintien des quantités pour les rotations faibles et en se basant sur la médiane récente, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 175 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en août et une en décembre. Le délai depuis la dernière commande dépasse largement les cycles observés, créant un doute sur l'état du stock. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais existante), un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des commandes de 1u (2023, 2024) et une commande de 2u en 2025. La médiane historique est de 1u. Conformément à la règle de ne pas augmenter sans raison pour les faibles rotations et de choisir la valeur la plus basse en cas de doute, la quantité retenue est 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 220 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 juin 2025, soit environ 118 jours. L'historique montre un cycle de commande très espacé et irrégulier (environ tous les 3 à 4 mois). Bien que la rotation soit faible, le délai depuis la dernière commande dépasse largement le cycle habituel observé en 2024, ce qui crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane et à la valeur constante des commandes récentes et historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 155 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le produit présente une rotation lente mais régulière avec un cycle de commande moyen constaté d'environ 3 à 4 mois. La dernière commande remontant au 11 juin 2025 (soit il y a environ 118 jours), le délai dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou une consommation du stock actuel. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et au volume de la commande la plus récente, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 143 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>13. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une commande tous les 4 mois). La dernière commande remonte au 11 juin 2025, soit il y a environ 118 jours. En comparant avec l'historique N-1, une commande avait été passée fin octobre (27/10/2023). Compte tenu du délai écoulé depuis la dernière vente et de la saisonnalité observée l'année précédente, un risque de rupture est identifié dans l'horizon des 30 jours. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 170 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>14. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit très faible, l'historique montre une commande à la même période l'année précédente (juin) et une autre en décembre. Compte tenu du délai écoulé et de l'approche de la fin d'année (période de commande constatée en 2023), il existe un doute sur le cycle. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires de 1u. La médiane des quantités est de 1. Conformément à la règle sur les rotations très faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 191 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>15. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 171 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>16. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit très faible, l'absence d'historique complet rend le cycle incertain. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est prévue pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 175 tokens
- **Total**: 1,050 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 2u
- 2024-03-12 08:15:24: 1u
- 2024-02-20 13:22:31: 1u
- 2023-12-01 13:07:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 2u
- 2024-06-12 12:43:52: 2u
- 2024-03-12 08:15:24: 2u
- 2024-02-20 13:22:31: 1u
- 2023-12-01 13:07:59: 1u
- 2023-10-27 06:27:26: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 2u
- 2024-06-12 12:43:52: 1u
- 2024-03-12 08:15:24: 3u
- 2024-02-20 13:22:31: 1u
- 2023-12-12 14:36:08: 2u
- 2023-12-01 13:07:59: 1u
- 2023-10-27 06:27:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 2u
- 2024-06-12 12:43:52: 2u
- 2024-03-12 08:15:24: 3u
- 2024-02-20 13:22:31: 1u
- 2023-12-12 14:36:08: 2u
- 2023-12-01 13:07:59: 2u
- 2023-10-27 06:27:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 2u
- 2024-06-12 12:43:52: 1u
- 2024-03-12 08:15:24: 3u
- 2024-02-20 13:22:31: 1u
- 2023-12-01 13:07:59: 1u
- 2023-10-27 06:27:26: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 1u
- 2024-03-12 08:15:24: 2u
- 2024-02-20 13:22:31: 1u
- 2023-12-12 14:36:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 1u
- 2024-03-12 08:15:24: 1u
- 2023-12-01 13:07:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 1u
- 2024-03-12 08:15:24: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 1u
- 2023-12-01 13:07:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 1u
- 2024-02-20 13:22:31: 1u
- 2023-12-12 14:36:08: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 06:07:05: 1u
- 2024-06-12 12:43:52: 2u
- 2024-03-12 08:15:24: 1u
- 2024-02-20 13:22:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-12 12:43:52: 1u
- 2024-02-20 13:22:31: 1u
- 2023-10-27 06:27:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-12 12:43:52: 1u
- 2023-12-01 13:07:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 12:34:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:14.367Z*
