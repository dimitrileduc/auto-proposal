# Rapport Backtest - Client CRF MARKET REMOUCHAMPS FONVAL

## Contexte

- **Client** : CRF MARKET REMOUCHAMPS FONVAL (ID: 38760)
- **Commande réelle** : S39957
- **Date commande** : 2025-10-28 10:53:28
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 18,233 input + 5,891 output = 24,124 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 91.4% | 35 produits prédits, 32 corrects |
| **Rappel** | 100.0% | 32 produits réels, 32 détectés |
| **F1-Score** | 95.5% | Score équilibré global |

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
| **MAE** | 0.78 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -1.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 19 | Avec erreur |

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

## True Positives (32)

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
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 4 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF020] JF SAUCE AIOLI 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques N-1 et récents montre une stabilité parfaite de la demande à 1 unité par commande, sans aucun outlier détecté. Le produit ne présente pas de saisonnalité marquée, avec des commandes réparties tout au long de l'année. La tendance est stable à 1u avec une fréquence de réapprovisionnement d'environ une fois par mois. Bien que la dernière commande enregistrée remonte à environ 40 jours (septembre), le besoin actuel correspond au cycle habituel. La recommandation reste à 1 unité pour couvrir le besoin sans créer de sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence de commande (tous les 1 à 2 mois), pas de jour fixe
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Nettoyage effectué sur la commande du 16/04/24 (3u) considérée comme un pic exceptionnel, la demande de fond se situant à 1u. ÉTAPE 2 : Saisonnalité faible ; le produit semble lié à une consommation régulière mais lente, avec une légère présence estivale. ÉTAPE 3 : Tendance stable à 1 unité par commande sur les deux dernières itérations (août et septembre). ÉTAPE 4 : Compte tenu de l'historique de l'année précédente (commande fin octobre en 2024), une commande de 1 unité est nécessaire pour couvrir le besoin actuel. Stratégie conservatrice adoptée pour éviter le sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les +30 jours, historiquement jeudi/vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u à 2u/commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Pas d'outliers identifiés, les volumes sont constants entre 1 et 2 unités. ÉTAPE 2 (Saisonnalité): Pas de pic de fin d'année majeur visible en N-1, le produit reste un produit de niche stable. ÉTAPE 3 (Tendance): Légère baisse de 2u à 1u par commande sur les deux derniers mois. ÉTAPE 4 (Recommandation): La consommation est de fond de rayon. Étant donné la faible vélocité récente (1u en août, 1u en septembre) et l'absence de commande fin octobre, une commande de 1 unité est préconisée pour couvrir les besoins immédiats sans risquer le sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité aberrante identifiée, les volumes oscillent entre 0 et 2 unités. Étape 2: La saisonnalité N-1 montre une légère activité en septembre/octobre (2u), mais le volume global reste très faible et irrégulier. Étape 3: La tendance récente confirme une demande de fond stable (1u en septembre, 2u en août). Le jour de commande habituel se situe en fin de semaine alors que nous sommes lundi, suggérant une commande de réapprovisionnement classique. Étape 4: En appliquant une approche conservatrice pour un produit à faible rotation, une quantité de 1 unité est recommandée pour couvrir le besoin immédiat sans risquer le sur-stockage.

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittente, environ 1 commande par mois
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'a été détectée, la demande de fond est constante à 2 unités par commande. Étape 2: Aucune donnée N-1 n'est disponible pour valider la saisonnalité, mais le secteur agroalimentaire B2B suggère une base stable pour ce type de conditionnement (720ML). Étape 3: La fréquence est faible (une commande environ toutes les 4-5 semaines). La tendance est stable à 2u. Étape 4: Le 27 octobre se situe 40 jours après la dernière commande du 17 septembre, ce qui correspond au cycle observé. Malgré le changement de jour (Lundi au lieu de fin de semaine), le volume habituel de 2 unités est recommandé par prudence pour éviter le sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle aux alentours du 20 du mois
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La valeur de 4u en juillet 2024 a été isolée comme outlier positif. La demande de fond se situe autour de 1.8u sur les périodes actives. Étape 2 (Saisonnalité): Impact faible, le produit circule toute l'année avec un léger regain en automne/hiver (cf. 3u en oct 2024). Étape 3 (Tendance): La tendance récente montre une légère baisse (2u puis 1u en août/sept) par rapport à N-1, mais la fréquence est stable (mensuelle). Étape 4 (Recommandation): En tenant compte de l'historique d'octobre N-1 (3u) et de la tendance récente légèrement plus basse, une quantité de 2u est recommandée pour couvrir la demande du prochain cycle sans risque de sur-stockage important.

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume très faible
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Étape 1: Le volume historique est extrêmement faible (majoritairement 1 unité). La commande de 2 unités en mai 2024 et août 2025 peut être considérée comme un léger pic mais reste dans la marge d'erreur B2B. Étape 2: Aucune saisonnalité claire n'est visible sur les données N-1; le produit semble répondre à un besoin de fond permanent mais intermittent. Étape 3: La dernière commande date de plus de 2 mois (août), suggérant un cycle de rotation lent. Étape 4: Étant donné la faible fréquence et le volume unitaire habituel, une commande de 1 unité suffit pour couvrir les besoins sans risque de surstockage pour ce format squeeze 300ml.

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 0.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (cycles de 20 à 35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
ÉTAPE 1 : La donnée du 16/05/2024 (2u) est considérée comme un pic isolé, la demande de fond se situant à 1u. ÉTAPE 2 : On observe une légère activité en fin d'été/automne en N-1, mais le volume reste très faible. ÉTAPE 3 : Le produit est sur une tendance stable mais à très faible rotation. Aucune commande enregistrée en septembre/octobre 2025 alors qu'il y en avait en N-1, suggérant un besoin de réapprovisionnement imminent. ÉTAPE 4 : Compte tenu de l'historique (1u par commande réussie), une recommandation de 1 unité est optimale pour couvrir le besoin sans risque de sur-stockage sur ce format squeeze de 300ml.

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier, cycle moyen de 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (+15%) par rapport à la moyenne historique
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage effectué sur la valeur nulle de juin 2024. La demande de fond oscille entre 2u et 4u. Étape 2: La saisonnalité N-1 montre une activité stable en octobre (4u), suggérant un maintien des volumes. Étape 3: La dernière commande d'août à 5u indique une tendance haussière par rapport à la moyenne de 3u de l'an dernier. Étape 4: En combinant la moyenne historique ajustée (3.2u) et la tendance récente (5u), une commande de 4u permet de couvrir le mois de novembre sans risque de sur-stockage massif, tout en tenant compte de la croissance légère du produit.

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier avec concentration sur le milieu et fin de mois
- **Saisonnalité**: weak
- **Tendance**: Hausse légère à 5u lors de la dernière commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable autour de 2.7 unités après avoir moyenné les données de l'année précédente (oscillant entre 1 et 4u). Il n'y a pas d'outliers manifestes, les variations de 1 à 4 correspondant à des ajustements de stock B2B classiques. La saisonnalité est faible, bien qu'un ralentissement soit observé après octobre en N-1. La tendance récente montre un volume de 5u en août (dernière livraison connue), suggérant une dynamique positive. Pour la commande du lundi 27 octobre, qui intervient en fin de mois (période de réapprovisionnement record en N-1), une quantité de 3 unités est recommandée pour couvrir les besoins sans risque de sur-stockage massif, tout en restant conservateur face à l'absence de données sur septembre.

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 3 à 6 semaines, avec une préférence pour le vendredi
- **Saisonnalité**: weak
- **Tendance**: Légère hausse (+1 à +2u) constatée sur l'historique récent
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont constants entre 1 et 3 unités. Étape 2 (Saisonnalité): Le produit semble lié aux périodes estivales/douces (vinaigrette), avec une présence en N-1 sur juillet. En octobre, nous entrons en période basse. Étape 3 (Tendance): La dernière commande d'août (3u) montre une légère accélération du volume par rapport aux 1u ou 2u habituelles. Étape 4 (Recommandation): Bien que la fréquence soit sporadique, la dernière commande date de plus de deux mois (août). Il est probable qu'un besoin se manifeste afin de reconstituer le stock de fond pour la période automnale. On recommande 2 unités pour couvrir le cycle de réapprovisionnement sans risque d'obsolescence.

</details>


<details>
<summary><strong>12. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec cycle théorique de 2 à 4 semaines (bi-mensuel)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive vers l'inactivité
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse des données montre un produit à très faible rotation avec une activité sporadique. ÉTAPE 1: La commande de 3 unités en juillet 2024 est traitée comme un outlier car elle représente 3x la demande habituelle. ÉTAPE 2: On observe une légère activité lors de la période estivale en N-1, mais celle-ci s'est éteinte dès le mois d'août. ÉTAPE 3: Aucune commande n'a été enregistrée sur les 3 derniers mois (août à octobre 2025), indiquant une tendance nulle ou un déréférencement de fait. ÉTAPE 4: Bien que la demande de fond soit quasi-nulle, une commande minimale de 1 unité est suggérée pour tester la réactivation du produit sans risque de sur-stockage massif, étant donné l'absence totale d'historique récent sur ce jour (lundi). Une approche conservatrice est impérative ici au vu du manque de données récentes cohérentes avec l'historique N-1 qui était déjà très faible (1u en mai). Malgré le score théorique de 0.5u, on arrondit à l'unité logistique minimale pour la vente (1u). Chaque unité supplémentaire serait un risque de péremption inutile au vu de l'inactivité constatée depuis 14 mois (août 2024). L'indice de confiance est faible en raison de l'absence totale de data sur 2025, rendant toute prédiction spéculative sur une reprise de consommation du produit JF007 chez ce client spécifique. La stratégie recommandée est donc le réapprovisionnement à l'unité (just-in-time de sécurité). La date demandée ce lundi sort du cycle historique de fin de semaine, ce qui renforce l'idée d'une commande de dépannage ponctuelle ou d'un test client plutôt qu'une reprise de routine de stock.

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier, moyenne d'une commande tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande de fond très faible et sporadique, principalement autour de 1 unité par commande. Le pic de 3 unités en juillet 2024 est considéré comme un outlier (promotion ou restockage exceptionnel). Bien que nous soyons fin octobre, période où une commande a été passée l'an dernier (22/10), l'absence totale de commandes sur les 3 derniers mois suggère une rotation très lente ou un reliquat de stock suffisant. Compte tenu de la nature périssable ou du format spécifique (Weck 470ml), une approche conservatrice de 1 unité est recommandée pour couvrir le besoin théorique sans risquer le sur-stockage sur un produit à faible vélocité.

</details>


<details>
<summary><strong>14. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois, principalement jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très erratique et de faible volume (moyenne de 2.25 unités par commande effective). Aucun outlier majeur n'est détecté hors du pic de 4 unités en juillet N-1. Il n'y a aucune commande sur les 3 derniers mois, ce qui suggère soit une rotation très lente, soit un arrêt temporaire. La saisonnalité N-1 montre une activité en septembre/octobre (3u). Étant donné l'absence de données récentes et le jour de commande inhabituel (lundi vs fin de semaine), une recommandation conservatrice de 2 unités permet de couvrir la demande historique sans risquer un sur-stockage sur un produit à faible rotation moyenne (380GX6). Le niveau de confiance est bas car les données sont anciennes et clairsemées (aucune activité récente). Les 2 unités correspondent au besoin minimal observé historiquement pour relancer le stock de sécurité alors que nous entrons en période de fin d'année où des commandes avaient eu lieu l'an passé à cette saison (septembre). Aucun ajustement de tendance n'est possible par manque de données récentes, d'où le maintien à la moyenne basse historique après épuration du pic de juillet (4u). Les commandes à 0u en N-1 indiquent également des périodes de non-réapprovisionnement fréquentes, justifiant la prudence extrême. La recommandation finale de 2u est un compromis entre le besoin historique d'octobre (estimé à 3u) et l'inertie actuelle du produit sur les 90 derniers jours. Ce volume permet d'assurer une disponibilité minimale si le client réactive son cycle d'achat maintenant, sans engager de capital inutilement sur un produit dont la fréquence semble avoir ralenti drastiquement par rapport à 2024. Il n'y a pas d'impact de tendance récent mesurable, on s'appuie donc sur le comportement 'fond de rayon' à bas volume. Le jour demandé (lundi) est atypique, suggérant un besoin ponctuel plutôt qu'un cycle de livraison régulier de fin de semaine.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 3u
- 2024-09-26 06:41:59: 3u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 0u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 4u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 2u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 3u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 3u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 4u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>14. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 3u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (3)

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.4u (30j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.7u (-26j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:12:47.172Z*
