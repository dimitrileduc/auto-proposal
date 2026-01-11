# Rapport Backtest - Client DURET Aline

## Contexte

- **Client** : DURET Aline (ID: 33742)
- **Commande réelle** : S39978
- **Date commande** : 2025-10-29 07:39:28
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 32
- **Tokens**: 28,495 input + 4,601 output = 33,096 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 22 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 68.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 4.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit plus de 70 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel observé l'année précédente (environ 40-60 jours entre les pics de fin d'année). Par principe de précaution B2B et pour éviter une rupture sur un produit à longue traîne, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité stricte entre 1 et 2 unités. La médiane des commandes est de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 173 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 14 août 2025, soit 75 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande en septembre et une activité régulière en fin d'année (décembre/janvier). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la période de consommation de fin d'année. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent et N-1 montre une quantité constante de 1u (médiane). En respectant la règle de ne pas surestimer les produits à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 171 tokens
- **Total**: 1,110 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 août 2025, soit 75 jours. Bien que la rotation soit très faible, l'historique montre une commande en septembre l'année précédente. Le cycle est irrégulier et le délai depuis la dernière commande est important. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique (récent et N-1) est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 171 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit 75 jours avant la date actuelle. Bien que la rotation soit faible (1u), le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 à 90 jours entre les commandes). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 124 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit 75 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande début septembre. Le délai écoulé dépasse largement le cycle habituel de réapprovisionnement. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour les rotations faibles (1-2u), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 178 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit plus de 70 jours. Bien que la rotation soit très faible (cycle irrégulier), le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés historiquement. L'historique (N-1 et récent) montre des commandes unitaires de 1 ou 2 unités. En suivant la règle de la médiane sur une rotation faible et en privilégiant la valeur la plus basse en cas de doute, une quantité de 1 unité est préconisée pour couvrir le risque de rupture sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 141 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>7. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit 75 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B et pour éviter une rupture de stock prolongée sur les 30 prochains jours, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la médiane du volume de commande récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 132 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>8. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 14 août 2025, soit 75 jours avant la date actuelle. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (notamment l'écart entre septembre et janvier). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit bio à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande passée, afin de ne pas surstocker un produit dont la demande est ponctuelle.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 144 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>9. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit plus de 70 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment. Un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 149 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>10. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit 75 jours sans activité pour ce produit. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle standard de réapprovisionnement en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1 pour affiner la saisonnalité, une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane et à la dernière commande enregistrée, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 148 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation sporadique (environ tous les 3 à 4 mois). La dernière commande connue date de plus d'un an (septembre 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la valeur constante étant de 1, cette quantité est maintenue pour éviter un surstock sur un produit à rotation très faible.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 163 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>12. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune donnée historique disponible (Recent Orders et Last Year Orders vides). En application du principe de précaution B2B, tout doute sur le cycle ou l'absence de rotation initiale impose de prévoir une commande pour éviter une rupture potentielle dès le lancement ou la mise en stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique pour calculer une médiane, et conformément à la règle sur les rotations faibles ou inconnues, la quantité minimale de 1 unité est sélectionnée pour initier le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 864 tokens
- **Output**: 139 tokens
- **Total**: 1,003 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 2u
- 2024-01-22 12:30:30: 1u
- 2023-12-12 07:34:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-06-05 06:38:43: 2u
- 2024-01-22 12:30:30: 1u
- 2023-12-12 07:34:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-01-22 12:30:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-06-05 06:38:43: 2u
- 2024-01-22 12:30:30: 1u
- 2023-12-12 07:34:52: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-06-05 06:38:43: 2u
- 2024-01-22 12:30:30: 1u
- 2023-12-12 07:34:52: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-06-05 06:38:43: 2u
- 2023-12-12 07:34:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-12 07:34:52: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 2u
- 2024-01-22 12:30:30: 2u
- 2023-12-12 07:34:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-01-22 12:30:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:18:46: 1u
- 2024-06-05 06:38:43: 1u
- 2024-01-22 12:30:30: 1u
- 2023-12-12 07:34:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de rotation, il est impossible d'établir un cycle de commande ou une quantité médiane. Conformément au principe de prudence et sans signal de demande préalable, aucune commande n'est préconisée pour le moment.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:18:35.689Z*
