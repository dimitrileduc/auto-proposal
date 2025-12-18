# Rapport Backtest - Client DLL AD SOUMAGNE MARVAN

## Contexte

- **Client** : DLL AD SOUMAGNE MARVAN (ID: 38830)
- **Commande réelle** : S40104
- **Date commande** : 2025-11-04 11:03:09
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 21,406 input + 8,552 output = 29,958 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 18 produits prédits, 15 corrects |
| **Rappel** | 50.0% | 30 produits réels, 15 détectés |
| **F1-Score** | 62.5% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 28.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | 6 | 2.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique, aucune récurrence hebdomadaire ou mensuelle identifiable
- **Saisonnalité**: none
- **Tendance**: Stable mais volume extrêmement faible (1u/mois en moyenne)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée car les volumes sont uniformément bas (0 à 2u). Étape 2: L'historique N-1 (août, juillet, mars) montre une demande très erratique avec un volume quasi-nul, ne permettant pas d'affirmer une saisonnalité. Étape 3: La tendance récente est à la stagnation avec une seule commande de 1u en septembre. Étape 4: Étant donné la faible vélocité du produit et l'absence de pattern de consommation clair, une approche conservatrice de type 'Juste-à-temps' est préconisée. Une unité suffit pour couvrir la demande de fond habituelle sans générer de sur-stock dormant.

</details>


<details>
<summary><strong>2. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 0.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ 1 unité tous les 2-3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, le produit s'écoulant systématiquement par unité unique. Étape 2: La comparaison N-1 ne montre pas de pic saisonnier significatif pour ce format squeeze 300ml en novembre. Étape 3: La tendance est stable mais très lente, avec une seule commande enregistrée ces 3 derniers mois (septembre). Étape 4: Bien que la demande de fond soit inférieure à 1 unité par mois, la nature du produit B2B impose une commande minimale de 1 unité pour maintenir une présence en rayon ou catalogue, tout en restant conservateur pour éviter le sur-stockage d'un produit à rotation lente.

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et sporadique (moyenne tous les 45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à la baisse (quantités minimales de 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover). 1. DE-EVENTING: La commande de 3u en juillet 2024 est traitée comme un outlier saisonnier ou promotionnel, la demande de fond étant de 1u. 2. SAISONNALITÉ: Peu de corrélation visible entre 2024 et 2025 sur cette période; le produit ne semble pas suivre un cycle saisonnier fort en fin d'année. 3. TENDANCE: La fréquence s'est ralentie avec une seule commande enregistrée ces 3 derniers mois (septembre). 4. RECOMMANDATION: Étant donné le stock de sécurité B2B et la faible fréquence, une unité suffit pour couvrir le besoin sans risque de sur-stockage important, en restant conservateur face à l'absence de régularité.

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et espacé (tous les 1 à 2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, le produit se vend systématiquement par unité (1u), ce qui définit la demande de fond. ÉTAPE 2 (Saisonnalité): Pas de corrélation saisonnière visible entre N-1 et N; les volumes restent constants quelle que soit la période. ÉTAPE 3 (Tendance): La tendance est plate avec une fréquence de commande faible. La dernière commande remonte à mi-septembre, suggérant un besoin de réapprovisionnement imminent en novembre. ÉTAPE 4 (Recommandation): En suivant une approche conservatrice pour un produit à faible rotation, le maintien de la quantité standard de 1 unité est optimal pour couvrir le besoin sans risque de surstockage.

</details>


<details>
<summary><strong>5. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, la demande de fond est de 1 unité par commande. ÉTAPE 2: Le produit présente un historique très sporadique sans corrélation saisonnière visible entre 2024 et 2025. ÉTAPE 3: La tendance est à la stabilité absolue (1u) mais avec une fréquence de rotation très lente (dernière commande il y a plus de 75 jours). ÉTAPE 4: Étant donné le caractère B2B et la faible rotation, une commande de 1 unité suffit pour couvrir le besoin sans risque de surstockage inutile. La confiance est faible car le volume de données historiques est très limité pour ce SKU spécifique (seulement 4 points de données sur 14 mois). Il s'agit probablement d'un produit d'appoint ou à faible rotation (C-Class). Quantité finale recommandée : 1 unité par mesure de prudence (minimisation des stocks dormants). Chaque commande passée a toujours été de 1 unité (hors 0u en juillet 2024). Nous maintenons donc ce standard de réapprovisionnement à la demande plutôt que sur stock de masse car il n'y a pas de signe de croissance ou de cycle hebdomadaire structuré (le lundi est un jour 'nouveau' par rapport à l'historique de fin de semaine). Conclusion: 1u pour éviter le surstockage inutile d'une référence à rotation lente (slow-mover). Quantité finale recommandée: 1u car c'est le volume unitaire historique constant. Aucune preuve de besoin de stock de sécurité supplémentaire par rapport aux 300ml de cette référence squeeze qui semble être commandée uniquement au besoin réel immédiat. Pas d'effet saisonnier identifié pour la période de novembre par rapport aux données passées de septembre ou juin/juillet. Confidence 'low' due au trop grand espacement des commandes (dernier point en août, nous sommes en novembre). Recommandation conservatrice recommandée pour ce type de profil.

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 1 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive du volume annuel et ralentissement de fréquence
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 4u en août 2024 est traitée comme un outlier (pic estival isolé), la demande de fond se situe entre 1u et 2u. ÉTAPE 2 (Saisonnalité) : Faible activité historique en novembre (dernière commande N-1 fin octobre). Pas de pic de fin d'année identifié sur ce produit. ÉTAPE 3 (Tendance) : Très faible activité récente avec une seule commande en 3 mois (août). Le produit semble être en fin de cycle ou destiné à des besoins très ponctuels. ÉTAPE 4 (Recommandation) : Au vu de la faible rotation (dernière commande il y a 80 jours) et de l'absence de pattern de croissance, on limite le stock à 1u pour couvrir un besoin ponctuel sans risque de sur-stockage.

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 1 à 3 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1-2u par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très faible et sporadique (1 à 2 unités par commande en moyenne). L'outlier de 3 unités en juin 2024 semble exceptionnel. Bien qu'il y ait eu un léger pic à 2 unités lors de la dernière commande d'août 2025, le volume annuel reste marginal. Compte tenu de l'absence de commande depuis août et de la nature 'sauce bernaise' qui peut connaître un léger regain à l'approche de la fin d'année, une commande de 2 unités est recommandée pour couvrir la demande tout en évitant le surstockage sur un produit à rotation lente. La confiance est faible car les données sont très dispersées dans le temps (seulement 6 points de données en 14 mois).

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF021] JF PICKLES 350 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-03-21 09:11:51: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 07:06:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:22:07: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 07:06:50: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 4u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 07:06:50: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:22:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 3u
- 2024-03-21 09:11:51: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: -0.5u (-14j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 0.5u (26j restants) → prédit 1u mais non commandé |


---

## False Negatives (15)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.6u (38j restants > seuil 30j) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock suffisant: 0.6u (38j restants > seuil 30j) |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:26.632Z*
