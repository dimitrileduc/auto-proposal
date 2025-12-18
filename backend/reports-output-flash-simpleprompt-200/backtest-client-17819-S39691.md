# Rapport Backtest - Client Tirtiaux Fruits srl

## Contexte

- **Client** : Tirtiaux Fruits srl (ID: 17819)
- **Commande réelle** : S39691
- **Date commande** : 2025-10-14 13:40:25
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 28
- **Tokens**: 23,666 input + 7,346 output = 31,012 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 32 produits prédits, 24 corrects |
| **Rappel** | 100.0% | 24 produits réels, 24 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 0.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 21.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 17 | Égalité parfaite |
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

## True Positives (24)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (17 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j), avec préférence pour le début de mois (Lundi/Mardi)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très régulière de type 'réapprovisionnement de stock' oscillant entre 1u et 3u. Sur les 3 derniers mois de données disponibles, le client s'est stabilisé à 2 unités par commande avec un intervalle d'environ 30 jours (05/08, 08/09). La commande actuelle (13/10) respecte parfaitement cet intervalle de 35 jours par rapport à la dernière saisie. Bien que l'année N-1 montre parfois des pointes à 3u en octobre/novembre, la tendance récente de 2025 est strictement ancrée à 2u. Aucune anomalie n'est détectée.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, intervalle long (moyenne ~45-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue de la quantité (toujours 1 unité par commande) sur les deux dernières années. Bien que la fréquence soit irrégulière, le volume par commande ne varie jamais. La dernière commande date du 08 septembre (il y a environ 5 semaines), ce qui correspond à la fenêtre basse des cycles observés précédemment. Étant donné l'absence de tendance à la hausse ou de saisonnalité marquée sur cette référence de tartinade, la probabilité de commander plus d'une unité est quasi nulle.

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très espacé (tous les 1 à 3 mois) sans jour fixe strict
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique complet montre une stabilité absolue de la quantité par commande (toujours 1 unité). Le rythme est irrégulier et espacé (environ 35 jours depuis la dernière commande du 08/09/2025), ce qui correspond à la fenêtre temporelle actuelle. Il n'y a aucun signal de croissance ou de saisonnalité impactant ce produit spécifique, la cible de 1 unité est donc statistiquement la plus probable.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-34 jours) le lundi ou mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement stable et régulière de 1 unité par commande avec un intervalle d'environ 4 à 5 semaines. La dernière commande date du 8 septembre, soit il y a 35 jours exactement par rapport à la date de prédiction (13 octobre). Le rythme mensuel est donc respecté et le volume ne montre aucune variation ou tendance à la hausse/baisse.

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique et irrégulière (60-120 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Stable mais faible volume (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement faible et intermittente. Avec seulement trois commandes enregistrées en 18 mois, il n'existe pas de cycle de réapprovisionnement structuré. La dernière commande date de début août (1u), et les volumes historiques ne dépassent jamais 2u. En l'absence de signal de croissance ou de saisonnalité marquée pour cette référence spécifique de sauce en format 250ml, la quantité la plus probable pour une commande ponctuelle est l'unité minimale observée récemment.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (1 commande isolée il y a 69 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (Volume minimum unitaire)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a plus de deux mois. Le produit semble être une référence à faible rotation ou un achat d'opportunité/test. En l'absence de données de saisonnalité N-1 ou de répétitivité récente, la prédiction la plus rationnelle pour minimiser l'erreur (MAPE) est de maintenir la quantité minimale observée (1 unité) plutôt que de risquer un surstock sur un produit premium de niche.

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable entre 1u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable mais sporadique. Bien que le dernier achat remonte à 69 jours (août 2025), dépassant le délai habituel de ~30 jours observé l'année précédente, le volume reste constant entre 1 et 3 unités. Aucun outlier n'est détecté. En 2024, une commande de 2u a été passée fin septembre, suivie de rien en octobre, mais le décalage de la commande de septembre 2025 (absente) suggère un besoin de réapprovisionnement imminent. La moyenne pondérée sur les 10 dernières commandes est de 2.1u. Pour minimiser le MAPE sur ce volume faible, la valeur centrale de 2 unités est la plus probable pour un lundi (jour de commande favori du client).

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.45u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Atypique, environ toutes les 4 à 8 semaines sans jour fixe strict
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et sporadique avec un volume unitaire dominant (1 ou 2 unités). La dernière commande remonte au 5 août (il y a environ 10 semaines), ce qui suggère qu'un réapprovisionnement de maintenance est possible, mais sans aucune preuve de croissance de volume. Compte tenu de la faible rotation du produit (Houmous 190g), une quantité de 1 unité est la plus probable pour minimiser le risque d'invendus tout en répondant à la demande de fond.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique avec cycle long (~60-90 jours) principalement le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais de très faible fréquence (1 unité par commande dans 87,5% des cas). La dernière commande remonte au 5 août 2025. Nous entrons dans une fenêtre temporelle (environ 70 jours après la précédente) où une commande de réapprovisionnement unitaire est statistiquement probable, d'autant plus que le jour demandé (lundi) correspond au jour historique préférentiel du client pour ce produit spécifique.

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Légère hausse de 1u à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais persistante avec une base de 1 unité en 2024. On observe une légère accélération du volume unitaire (passage de 1u à 2u) lors de la dernière commande d'août 2025 et des dernières commandes de fin 2023/début 2024. Le délai depuis la dernière commande (août) est de plus de 60 jours, ce qui suggère un besoin de réapprovisionnement imminent. Étant donné la tendance récente à commander par 2 unités sur les points de données les plus élevés, et le rattrapage nécessaire après deux mois d'absence, la quantité de 2 unités est la plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et sporadique, principalement concentrée sur des unités de 1. Bien que le client n'ait pas commandé récemment (plus de 12 mois d'inactivité sur cette référence dans les données fournies), les commandes passées se font majoritairement le lundi à raison d'une unité. Les pics à 2u en 2024 semblent liés à des ajustements de stock ponctuels ou des commandes espacées de moins de 30 jours. Compte tenu de la faible rotation du produit (Mayonnaise Truffes 250ml), le volume le plus probable pour une reprise d'activité le lundi est de 1 unité.

</details>


<details>
<summary><strong>12. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ultra-faible (intervalles de 3 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et discontinue (seulement 3 commandes en 2 ans). Chaque commande passée était systématiquement de 1 unité, sans aucune accélération ni saisonnalité visible. Bien que la dernière commande enregistrée remonte à près d'un an, la nature du produit (Mayonnaise 200ml en B2B) suggère un besoin d'appoint très ponctuel. La probabilité la plus élevée reste une commande unitaire simple pour reconstituer un micro-stock.

</details>


<details>
<summary><strong>13. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (de 2u à 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation de la demande à 1 unité par commande sur les trois dernières occurrences (août, septembre, fin septembre 2024). Bien que le produit ait connu des volumes légèrement supérieurs début 2024 (2-3u), la tendance sur la seconde moitié de l'année est d'une unité stricte. L'absence de commandes sur les 3 derniers mois suggère une rotation lente, mais la date de prédiction (lundi) correspond parfaitement au jour d'approvisionnement habituel du client pour cette référence. Une quantité de 1 unité est la plus probable pour maintenir le stock sans sur-stockage sur une référence à faible rotation.

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ une commande tous les 3-4 mois
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et irrégulière sans commande au cours des 3 derniers mois. L'historique N-1 montre une alternance entre 1 et 2 unités. Aucune saisonnalité marquée n'est détectée. Compte tenu de l'absence de commande récente (possible rupture de stock ou fin de cycle de vie), une commande de 2 unités est préconisée pour couvrir les besoins du trimestre à venir, en s'alignant sur le volume maximum observé précédemment pour éviter une rupture immédiate après une longue période d'inactivité.

</details>


<details>
<summary><strong>15. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-35j), majoritairement en début de mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en début d'année vs 1.5u fin 2024)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande mensuelle. Bien qu'aucune commande n'ait été enregistrée sur les 3 derniers mois, la date de prédiction (13 octobre) correspond au créneau habituel de réapprovisionnement du client dans le cycle N-1 (septembre/octobre). En l'absence de données récentes suggérant une hausse, on se base sur la moyenne basse de l'automne précédent (2u) tout en notant que les volumes semblent s'éroder légèrement par rapport au début d'année 2024. Le lundi est un jour historiquement valide pour ce client.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (Données inexistantes)
- **Saisonnalité**: none
- **Tendance**: Indéterminée - Nouveau produit ou absence d'historique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques pour l'année précédente (N-1) et les 3 derniers mois, il est impossible de modéliser un cycle ou une tendance. Dans un contexte B2B agroalimentaire pour une référence chips bio (produit avec une DLUO généralement longue), on préconise une commande de test ou de réapprovisionnement minimal (1 unité de base) pour initier le flux. La confiance est faible en raison de la vacuité du dataset.

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inconnu (aucune donnée historique)
- **Saisonnalité**: none
- **Tendance**: Indéterminée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques (N-1 et période récente), il est impossible d'établir une baseline statistique ou une tendance. Pour une référence de type Chips Premium Bio, la recommandation par défaut en Supply Chain Agro pour une première commande ou un produit sans historique est soit 0 (si on attend la demande client) soit l'unité minimale de commande. Je préconise 1 unité comme valeur sentinelle pour tester le marché ou par défaut d'information, sachant que le MAPE ne peut être optimisé sans point de comparaison.

</details>




### 📊 Données d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 2u
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 3u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 2u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 2u
- 2024-02-02 07:19:09: 1u
- 2024-01-09 12:58:28: 2u
- 2023-12-05 08:08:03: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-12-05 08:08:03: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:37:56: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 3u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-12-05 08:08:03: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 2u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-11-07 08:22:06: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 4u
- 2024-01-09 12:58:28: 3u
- 2023-12-05 08:08:03: 3u
- 2023-11-07 08:22:06: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (8)

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
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | Stock prédit: -0.5u (-9j restants) → prédit 3u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -0.3u (-20j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: -0.6u (-35j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: -0.6u (-22j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:37:01.243Z*
