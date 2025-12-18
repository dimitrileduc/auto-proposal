# Rapport Backtest - Client SCHMETS DELICATESSES

## Contexte

- **Client** : SCHMETS DELICATESSES (ID: 52744)
- **Commande réelle** : S40293
- **Date commande** : 2025-11-12 13:44:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 16,148 input + 5,000 output = 21,148 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 68.2% | 22 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 81.1% | Score équilibré global |

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
| **MAE** | 1.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 37.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (15)

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 9 | 8 | 1.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 8 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 10 | 4 | 6.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.1u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 1 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 3.8u vers 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse du produit montre une demande de fond stable autour de 4 unités. ETAPE 1: Aucun outlier n'est détecté car les volumes restent dans une plage cohérente de 2 à 6 unités. ETAPE 2: Une légère saisonnalité haute est observée en fin d'année (novembre 2024 à 6u, octobre 2025 à 6u), contrastant avec les volumes de 2u en été. ETAPE 3: La tendance récente montre une accélération avec la dernière commande à 6u après un mois de pause. ETAPE 4: Pour le 11 novembre, jour historiquement actif, je recommande 5 unités. Cela couvre la demande de fond tout en tenant compte de la hausse saisonnière de fin d'année, sans monter au maximum de 6u pour rester conservateur face à l'espacement irrégulier des commandes.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 9u vs Médiane: 8u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 9u (confidence: medium)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 1u (12.5%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier, environ tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (+20% vs N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Aucun outlier majeur détecté, les quantités oscillent naturellement entre 4u et 10u. La demande de fond se situe autour de 7u. ÉTAPE 2 : On observe un pic d'activité relatif en fin d'année (8u en nov 2024), suggérant une légère saisonnalité liée aux fêtes de fin d'année pour ce type de produit gourmet (truffe). ÉTAPE 3 : La tendance récente (sept/oct 2025) montre des volumes plus élevés (8u-10u) par rapport au début d'année 2024, signifiant une croissance du produit. ÉTAPE 4 : En combinant la baseline (7u), la croissance observée (+20%) et la préparation de la période de fin d'année (novembre), une commande de 9 unités est préconisée pour couvrir les besoins sans sur-stockage massif.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 30 à 45 jours)
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive -30% vs N-1
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre une saisonnalité marquée en fin d'année, avec un pic observé en novembre 2024 (8u). Cependant, ce pic de 8u est traité comme un outlier statistique car il double la moyenne habituelle. La tendance récente (septembre/octobre 2025) indique une baisse des volumes par rapport à l'année précédente (4u et 2u). La quantité de base de 4,5u (moyenne hors pic) est ajustée à la baisse pour refléter la tendance de consommation actuelle tout en anticipant un léger regain saisonnier de novembre. On recommande 4 unités pour couvrir la demande tout en restant conservateur face au ralentissement observé en 2025.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.8u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier entre le 1er et le 10 du mois
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (Nettoyage): Aucune anomalie détectée, les volumes oscillent strictement entre 3u et 5u, indiquant une demande de fond très stable. ÉTAPE 2 (Saisonnalité): Pas de pic significatif en novembre N-1 (3u). Le produit montre une consommation linéaire tout au long de l'année sans influence saisonnière marquée. ÉTAPE 3 (Tendance): La moyenne des commandes récentes (100 derniers jours) est de 4u, identique à la moyenne N-1. Aucun signe de croissance ou de déclin. ÉTAPE 4 (Recommandation): La demande est extrêmement prévisible. Bien que la commande intervienne un peu plus tard que d'habitude dans le mois (le 11 au lieu du début de mois), le volume standard de 4u couvre parfaitement le besoin moyen constaté.

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.25u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 3.2u à 3.5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable entre 2u et 5u. Etape 1: Aucun outlier majeur détecté, les variations restent dans une plage B2B standard. Etape 2: La saisonnalité N-1 montre une commande de 3u en novembre, confirmant un besoin constant en fin d'année. Etape 3: La tendance récente affiche une accélération (5u en octobre), suggérant une consommation accrue ou un stock résiduel faible. Etape 4: En croisant la moyenne historique (3.25u) et le pic récent (5u), une commande de 4u permet de couvrir le mois à venir tout en restant conservateur face au risque de surstockage, le produit ayant une rotation lente.

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ toutes les 4 à 6 semaines)
- **Saisonnalité**: weak
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'a été identifiée, les volumes oscillent de manière stable entre 3 et 4 unités. Étape 2: On observe une légère hausse en novembre (4u en 2024 vs moyenne de 3u), suggérant un faible impact saisonnier en prévision des fêtes. Étape 3: La dernière commande d'octobre (3u) confirme la stabilité du produit. Étape 4: La moyenne lissée est de 3.2 unités. Compte tenu de l'historique et de la date (novembre), une commande de 3 unités est recommandée pour couvrir le besoin sans risque de surstockage, tout en restant conservateur face à une fréquence de commande assez espacée.

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 4u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 5.4u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (passage de 6u à 2u récemment)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond historique stable autour de 5.7 unités en N-1. Cependant, la période récente indique une baisse significative d'activité : l'exception de 8u en septembre (restockage de rentrée) a été suivie d'une commande très faible de 2u en octobre. Nous sommes sur une date (mardi) cohérente avec l'historique N-1. Compte tenu du ralentissement récent et de l'absence de pic saisonnier majeur en novembre sur ce type de condiment, une approche conservatrice de 4 unités est recommandée pour couvrir le mois sans risquer le sur-stockage.

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (passage de 8u/6u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une absence d'outliers évidents, les volumes étant constants par blocs. On observe une saisonnalité faible : l'an dernier à la même période (novembre), la commande était de 8 unités, mais la tendance récente (septembre/octobre 2025) montre un passage stable à 4 unités, suggérant une réduction de la consommation ou un changement de stratégie de stock du client. Bien que novembre 2024 ait été plus fort, la priorité est donnée à la tendance baissière récente pour éviter le sur-stockage. La recommandation est de maintenir 4 unités, ce qui correspond au volume observé sur les deux derniers mois de manière stable.

</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 8u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de réapprovisionnement (env. tous les 30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse significative +100%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucun outlier détecté, les volumes sont cohérents sur leurs périodes respectives. ÉTAPE 2: Le produit présente une demande stable en N-1 (moyenne 3.8u/mois) sans pics saisonniers marqués entre octobre et novembre. ÉTAPE 3: On observe un saut brusque de la demande de fond qui est passée de ~4u en 2024 à 8u sur les deux derniers mois (septembre/octobre 2025), indiquant un nouveau palier de consommation ou un nouveau client B2B. ÉTAPE 4: La recommandation s'aligne sur cette nouvelle baseline de 8 unités constatée récemment pour maintenir le niveau de service malgré le changement de rythme, tout en restant conservateur face à l'absence de données sur le début d'année 2025.

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Atypique, environ une commande tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive de 4u à 2u (-50%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes sont faibles et constants (2u à 4u). Étape 2: La saisonnalité est faible; bien que les volumes l'été dernier étaient de 4u, la période actuelle (novembre) correspond historiquement à une commande stable. Étape 3: On observe une tendance baissière nette, passant de 3-4u en 2024 à 2u sur les deux dernières commandes de septembre et octobre 2025. Étape 4: La recommandation se base sur la tendance récente de consommation (2u) pour éviter le sur-stockage sur un produit dont la rotation semble ralentir, tout en respectant le besoin de fond observé sur les trois derniers mois.

</details>


<details>
<summary><strong>11. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 5-6u à 4u)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 8u en novembre 2024 est identifiée comme un outlier (pic isolé) par rapport à la moyenne stable de 5u. Étape 2: La saisonnalité est faible, bien qu'un léger besoin de stock semble apparaître en fin d'année. Étape 3: On observe une légère baisse de régime sur les trois derniers mois, passant d'un palier de 5-6 unités en 2024 à 4 unités constantes sur les commandes de septembre et octobre 2025. Étape 4: La recommandation se base sur cette tendance récente de 4 unités pour éviter le sur-stockage, tout en respectant le cycle de réapprovisionnement mensuel constaté.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 2u
- 2024-08-06 06:28:46: 2u
- 2024-07-10 08:20:57: 2u
- 2024-06-06 09:00:27: 5u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 8u
- 2025-09-01 08:13:47: 10u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 8u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 6u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 8u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 9u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-08-06 06:28:46: 6u
- 2024-07-10 08:20:57: 6u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 4u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 3u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 4u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 5u
- 2025-09-01 08:13:47: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 3u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 2u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 4u
- 2024-10-01 06:56:31: 3u
- 2024-08-06 06:28:46: 3u
- 2024-07-10 08:20:57: 3u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 2u
- 2025-09-01 08:13:47: 8u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 6u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 6u
- 2024-07-10 08:20:57: 6u
- 2024-06-06 09:00:27: 6u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 8u
- 2024-08-06 06:28:46: 8u
- 2024-07-10 08:20:57: 8u
- 2024-05-13 14:17:22: 6u
- 2024-04-18 08:51:22: 6u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 8u
- 2025-09-01 08:13:47: 8u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 4u
- 2024-10-01 06:56:31: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 3u
- 2024-05-13 14:17:22: 4u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 8u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 2u
- 2025-09-01 08:13:47: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 4u
- 2024-08-06 06:28:46: 4u
- 2024-07-10 08:20:57: 4u
- 2024-06-06 09:00:27: 2u
- 2024-05-13 14:17:22: 3u
- 2024-04-18 08:51:22: 3u
- 2024-03-27 07:23:47: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:34:21: 4u
- 2025-09-01 08:13:47: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-05 08:12:13: 8u
- 2024-10-01 06:56:31: 5u
- 2024-08-06 06:28:46: 5u
- 2024-07-10 08:20:57: 5u
- 2024-06-06 09:00:27: 5u
- 2024-05-13 14:17:22: 5u
- 2024-04-18 08:51:22: 6u
- 2024-03-27 07:23:47: 5u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (7)

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
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Stock prédit: 0.1u (0j restants) → prédit 4u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 6 | Stock prédit: 4.6u (23j restants) → prédit 6u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | Stock prédit: 1.5u (13j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 4 | Stock prédit: -1.8u (-21j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 5 | Stock prédit: -0.3u (-4j restants) → prédit 5u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -1.1u (-51j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:10:43.779Z*
