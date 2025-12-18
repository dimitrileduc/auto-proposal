# Rapport Backtest - Client SCHMETS DELICATESSES

## Contexte

- **Client** : SCHMETS DELICATESSES (ID: 52744)
- **Commande réelle** : S40293
- **Date commande** : 2025-11-12 13:44:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 24,486 input + 4,412 output = 28,898 total


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
| **MAE** | 1.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 41.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 9 | 8 | 1.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (passé de 2-5u à 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande faible avec des intervalles variant de 30 à 60 jours. Historiquement, le mois de novembre (N-1) a enregistré une commande de 6u un mardi. La commande la plus récente (octobre 2025) confirme ce volume de 6u. Étant donné que la date demandée (mardi 11 novembre) correspond au jour de commande préférentiel du client pour ce produit, et que le dernier intervalle suggère un besoin imminent, je prévois la reconduction de la dernière quantité observée qui est alignée avec le pic de l'année précédente à la même période.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 9u vs Médiane: 8u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 9u (confidence: high)
- 📊 **Baseline N-1**: 9u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 1u (12.5%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-33j)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +15%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très régulier d'environ 30 jours. En N-1 (novembre 2024), le volume était de 8 unités. Les données récentes montrent une accélération de la demande avec 8u en octobre puis 10u en septembre. Étant donné la stabilité de la base (8u) et la tendance légèrement haussière sur les volumes récents par rapport à l'année précédente, une quantité de 9 unités est la plus probable pour maintenir le stock sans sur-stockage ni rupture, lissant la pointe de septembre et confirmant le palier d'octobre.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 8u à 2u/4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande approximativement mensuel (intervalles de 30-35 jours). Historiquement, en novembre 2024, le client commandait 8u un mardi, mais la tendance récente (septembre et octobre 2025) montre un volume divisé par deux (2u et 4u). La prédiction au 11 novembre respecte l'intervalle d'environ 40 jours depuis la commande du 3 octobre. Bien que la tendance soit à la baisse par rapport à N-1, le volume semble s'être stabilisé entre 2u et 4u lors des deux derniers mois. Je retiens 4u pour couvrir la demande du prochain cycle, en privilégiant la valeur stable la plus récente.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande mensuel extrêmement régulier. Sur les deux derniers mois (septembre et octobre 2025), la quantité est stable à 4 unités. Historiquement, le mois de novembre (N-1) a enregistré 3 unités le même mardi, mais la tendance récente montre un palier ferme à 4 unités. La date de prédiction (mardi) correspond parfaitement au jour d'achat privilégié historiquement pour ce client. La valeur de 5u en mars 2024 est considérée comme un outlier mineur ou une variation de stock de sécurité, le mode statistique étant de 4u.

</details>


<details>
<summary><strong>5. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (de 3u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel. En novembre 2024 (N-1), le client avait commandé 3u un mardi début de mois. Cependant, la tendance récente montre une augmentation du volume de fond (5u lors de la dernière commande d'octobre 2025). Bien que la commande de septembre ait été plus faible (2u), le produit semble stabilisé sur un volume plus élevé lors des mois d'activité normale. La date demandée (mardi 11/11) correspond parfaitement au créneau mensuel attendu après la commande du 03/10. Je retiens la dernière valeur (5u) comme l'indicateur le plus fiable de la demande actuelle.

</details>


<details>
<summary><strong>6. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j) le mardi
- **Saisonnalité**: weak
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel très régulier, principalement le mardi. L'historique N-1 sur la même période affichait 3u à 4u. La commande la plus récente (octobre 2025) ayant été passée à 3u, et le volume historique montrant une stabilité quasi-totale à cette valeur (75% des occurrences), la quantité de 3u est la plus probable pour le prochain cycle de novembre.

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 6u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: high)
- 📊 **Baseline N-1**: 5.75u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-33j)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 5-6u
- **Outliers détectés**: 2u, 8u

**🧠 Raisonnement LLM:**
L'historique montre une grande stabilité du produit sur un rythme mensuel avec une prédominance des commandes le mardi (6 occurrences sur 10). Bien que les deux derniers mois aient montré des variations (8u puis 2u), la moyenne combinée de ces deux derniers mois (5u) reste proche de la moyenne historique long terme de 5.6u. Le pic à 8u en septembre semble compensé par la faible commande d'octobre (2u), suggérant un ajustement de stock client. Pour novembre, on anticipe un retour à la normale autour de la valeur pivot historique de 6u, qui est la quantité la plus fréquente (60% des commandes).

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (8u en N-1 -> 4u récent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une transition d'un volume de 8u (2024) vers une consommation plus faible de 4u sur les deux derniers mois (septembre et octobre 2025). Bien que le produit commandé en N-1 le 5 novembre fût de 8u, la tendance récente est très stable à 4u par mois. Le cycle de commande est d'environ 30 jours. La date de prédiction (mardi 11 novembre) correspond à la fenêtre mensuelle attendue après la commande du 3 octobre. La baisse de volume semble structurelle plutôt que saisonnière, je privilégie donc la quantité de 4u observée récemment pour minimiser le MAPE.

</details>


<details>
<summary><strong>9. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 8u vs Médiane: 8u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: high)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 4u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-32j)
- **Saisonnalité**: weak
- **Tendance**: Hausse nette +100% (passage de 4u à 8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une transition claire du profil de consommation. En 2024, le produit oscillait entre 3u et 5u (moyenne 4u) avec une forte prévalence de commandes le mardi. Cependant, les deux dernières commandes (septembre et octobre 2025) montrent une stabilisation stricte à 8u, marquant un doublement du volume de fond. Le cycle est d'environ un mois. La date de prédiction (11 novembre) correspond parfaitement au cycle mensuel suite à la commande du 3 octobre et s'aligne avec le jour historique préférentiel (mardi). Je privilégie la tendance récente de 8u qui reflète le nouveau besoin du client.

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
- **Pattern temporel**: Cycle mensuel (~30-35j) erratique
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande par mois en moyenne. Bien que l'année N-1 (novembre 2024) indiquait 4 unités, l'activité récente en 2025 (septembre et octobre) s'est stabilisée à 2 unités par commande. Étant donné que la dernière commande date du 3 octobre (vendredi) et que nous prédisons pour le 11 novembre, nous sommes dans la fenêtre habituelle du cycle mensuel (environ 40 jours d'intervalle constatés récemment). La tendance baissière par rapport à N-1 oriente vers le maintien du volume récent de 2 unités.

</details>


<details>
<summary><strong>11. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: weak
- **Tendance**: Stabilisation à 4u
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'historique montre une commande par mois environ. La valeur de 8u en novembre 2024 semble être un outlier ponctuel car les commandes suivantes se sont stabilisées entre 4u et 5u. Les deux dernières commandes (septembre et octobre 2025) sont strictement identiques à 4u chacune, malgré un changement de jour de commande (lundi/vendredi). Pour le mardi 11 novembre 2025 (environ 40 jours après la dernière commande), on privilégie la tendance récente de consommation de fond de 4 unités plutôt que le pic exceptionnel de l'année précédente.

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

**✅ Quantité LLM**: 6u (confidence: medium)
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

**✅ Quantité LLM**: 9u (confidence: high)
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

**✅ Quantité LLM**: 5u (confidence: medium)
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

**✅ Quantité LLM**: 6u (confidence: high)
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

**✅ Quantité LLM**: 4u (confidence: high)
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

**✅ Quantité LLM**: 8u (confidence: high)
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
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 6 | Stock prédit: 1.5u (13j restants) → prédit 6u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T11:14:27.518Z*
