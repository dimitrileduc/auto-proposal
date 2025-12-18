# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S40371
- **Date commande** : 2025-11-14 15:19:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 8,037 input + 3,094 output = 11,131 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 92.9% | 14 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 96.3% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 18.15 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (13)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 64 | 80 | 16.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 32 | 80 | 48.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV136] LV Tartinade Betterave 190g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 25 | 53 | 28.0 | 52.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 50 | 53 | 3.0 | 5.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 32u vs Médiane: 32u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 27.5u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 16u (33.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec prédominance du vendredi (approx. toutes les 4 à 6 semaines)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen de 24u-32u
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable oscillant entre 16u et 32u. ÉTAPE 1: Un pic de 48u en fév-2024 est considéré comme un outlier (stockage préventif). La moyenne épurée se situe autour de 27.5u. ÉTAPE 2: La saisonnalité est faible, bien qu'une légère hausse de fréquence soit notée en fin d'année (octobre/novembre). ÉTAPE 3: La dernière commande d'octobre (32u) confirme une tendance stable. ÉTAPE 4: La prédiction se base sur le palier standard de 32u, volume récurrent le plus fréquent (mode statistique), pour couvrir les besoins jusqu'à la fin de l'année tout en respectant l'anticipation d'un jour par rapport au vendredi habituel.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel à bimensuel, dominante le vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 48u avec une légère accélération de fréquence
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 80u en sept. 2024 a été isolée comme un outlier (promotion ou surstockage), la demande de fond stable étant de 48u. Étape 2: La saisonnalité est faible, bien qu'une légère hausse de fréquence soit notée en fin d'année (octobre/novembre). Étape 3: La tendance récente confirme une stabilité parfaite à 48u sur les deux derniers mois. Étape 4: Malgré la commande tombant un jeudi au lieu du vendredi habituel, le volume de 48u couvre parfaitement le cycle de consommation observé sans risque de surstockage.

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 64u vs Médiane: 64u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: high)
- 📊 **Baseline N-1**: 64u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 16u (20.0%)
- 📉 **Erreur Médiane**: 16u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 3 à 5 semaines, principalement le vendredi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive de 80u à 64u (-20%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes oscillent entre 48u et 80u (multiples de 16), typique de palettes ou couches de transport. Étape 2: La saisonnalité N-1 montrait une stabilité à 80u en fin d'année, mais les données 2025 indiquent un palier inférieur. Étape 3: On observe une tendance baissière consolidée; les trois dernières commandes sont strictement identiques à 64u, abandonnant le standard de 80u de l'année précédente. Étape 4: La demande de fond actuelle est de 64u. Bien que la commande intervienne un jeudi (un jour plus tôt que d'habitude), le stock de sécurité devrait absorber ce décalage sans nécessiter d'augmentation de volume. Recommandation conservatrice à 64u.

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 48u (60.0%)
- 📉 **Erreur Médiane**: 48u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 21 jours environ, commande le vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à 32u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune anomalie détectée sur les deux points de données, la base est fixée à 32u. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: Le rythme observé est une commande toutes les trois semaines (21 jours) le vendredi. La dernière commande date du 17 octobre, soit il y a 27 jours; la commande actuelle (jeudi 13 nov) arrive avec un léger décalage par rapport au cycle théorique de 21 jours mais correspond parfaitement au besoin de réapprovisionnement périodique. Étape 4: La stabilité parfaite des deux dernières occurrences (32u) suggère un besoin récurrent fixe sans signe de croissance ou de déclin. Je recommande de maintenir le volume historique de 32u.

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - LLM: 25u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (environ tous les 15 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante identifiée, les deux commandes sont identiques (25u). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit typé 'Tartinade' ne suggère pas de pic majeur en novembre. Étape 3: La fréquence semble être d'environ deux fois par mois. Cependant, aucune commande n'a été passée en octobre, suggérant soit un reliquat de stock, soit une baisse de la rotation. Étape 4: En l'absence de données récentes (dernière commande il y a 48 jours), nous préconisons de maintenir le volume historique de 25 unités pour couvrir le prochain cycle tout en restant conservateur face à l'inactivité d'octobre. Niveau de confiance faible dû au manque de profondeur historique (seulement 2 points de données). Pourrait s'agir d'un lancement de produit ou d'une rotation lente avec stockage tampon important chez le client b2b. La date demandée (jeudi) est cohérente avec le dernier achat enregistré le jeudi 11 septembre. Étant donné l'absence de commande depuis fin septembre, il est urgent de réapprovisionner si la demande est cyclique, mais sans augmenter les volumes à cause de l'incertitude liée au mois d'octobre vierge de commandes. On opte pour la stabilité (25u). Pour la gestion de la rupture : si le client demande aujourd'hui (jeudi), c'est probablement car son stock de sécurité est entamé suite à la période d'inactivité de livraison d'octobre/début novembre. On maintient 25 unités pour limiter le risque de sur-stockage sur un produit sec bio qui a certes une DLUO correcte mais un flux récent instable.

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 25u vs Médiane: 75u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 75u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 50u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (cycle non établi)
- **Saisonnalité**: none
- **Tendance**: Stable sur échantillon unique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante car il n'existe qu'une seule commande de référence (25u). Étape 2: Absence de données N-1 empêchant une analyse de saisonnalité fiable, bien que les tartinades soient stables hors période de fêtes. Étape 3: Un seul point de donnée en septembre ne permet pas de dégager une tendance, mais indique un volume d'achat par lot (24-25u). Étape 4: En l'absence de récurrence établie et vu l'écart de 7 semaines depuis la dernière commande, on recommande de rester sur le volume de fond de 25 unités pour couvrir un nouveau cycle de stock sans risque de sur-stockage majeur, tout en notant que la fiabilité est faible due au manque d'historique.

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 25u vs Médiane: 25u (Réel: 53u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 53u
- 📉 **Erreur LLM**: 28u (52.8%)
- 📉 **Erreur Médiane**: 28u (52.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (environ tous les 15 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 points de données), ce qui réduit la fiabilité statistique. Cependant, les deux commandes passées à 15 jours d'intervalle sont identiques (25 unités), suggérant une consommation stable et un besoin de réapprovisionnement cyclique pour ce produit de niche (Tartinade aux Truffes). Nous sommes le jeudi 13 novembre, soit exactement 2 mois après la commande du 11 septembre ; une rupture de flux semble avoir eu lieu en octobre ou les données sont manquantes. En l'absence de données N-1 pour valider l'effet des fêtes de fin d'année (très probable pour la truffe), je recommande de maintenir la base de 25 unités pour couvrir le cycle de 15 jours sans risque de sur-stockage massif avant la période de pointe de décembre déjà anticipée par le flux habituel de 25u tous les 15j selon l'historique récent disponible via le canal B2B hebdomadaire/bi-mensuel identifié (jeudi/vendredi). Mode conservateur appliqué vu le manque de profondeur historique sur 3 mois complets (absence d'octobre).- Etape 1: Pas d'outliers identifiés. Etape 2: Aucune donnée N-1. Etape 3: Tendance stable sur l'existant. Etape 4: On reproduit le volume moyen observé pour sécuriser le début de saison festive sans excès prématuré au 13 novembre. Quantité finale: 25u. Confiance basse due à la faible densité de données (2 points uniquement). Aucun outlier détecté (25u semble être la référence). Saisonnalité non chiffrable mais probablement forte en décembre, demandant une prudence au 13 novembre avant l'accélération festive ultime de fin de mois. Trend direction: Stable à 25u sur les relevés disponibles (septembre). Day cycle: La demande tombe un jeudi, cohérent avec les commandes précédentes (jeudi/vendredi). Baseline fixée à 25.0u. Recommandation finale: 25u.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 16u
- 2024-09-23 07:00:28: 32u
- 2024-08-16 11:44:09: 32u
- 2024-07-05 09:22:25: 16u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 32u
- 2024-03-27 14:20:05: 32u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 16u
- 2024-01-05 08:53:58: 32u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 48u
- 2025-09-26 09:47:05: 48u
- 2025-09-11 14:14:00: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 48u
- 2024-09-23 07:00:28: 80u
- 2024-08-16 11:44:09: 48u
- 2024-07-05 09:22:25: 64u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 48u
- 2024-03-27 14:20:05: 48u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 48u
- 2024-01-05 08:53:58: 48u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 64u
- 2025-09-26 09:47:05: 64u
- 2025-09-11 14:14:00: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 80u
- 2024-09-23 07:00:28: 48u
- 2024-08-16 11:44:09: 80u
- 2024-07-05 09:22:25: 80u
- 2024-05-06 12:17:20: 80u
- 2024-04-25 07:54:19: 80u
- 2024-03-27 14:20:05: 80u
- 2024-02-23 08:25:35: 64u
- 2024-01-26 09:38:43: 80u
- 2024-01-05 08:53:58: 64u

**✅ Quantité LLM**: 64u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 53u

</details>




---

## False Positives (1)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV331] LV Tartinade Lentils Balsamico 190g | 25 | Stock prédit: -27.0u (-24j restants) → prédit 25u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-18T12:10:32.756Z*
