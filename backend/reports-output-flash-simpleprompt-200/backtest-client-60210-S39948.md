# Rapport Backtest - Client BIOK BOIS DE VILLERS

## Contexte

- **Client** : BIOK BOIS DE VILLERS (ID: 60210)
- **Commande réelle** : S39948
- **Date commande** : 2025-10-28 07:20:57
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 16,109 input + 5,453 output = 21,562 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.0% | 25 produits prédits, 18 corrects |
| **Rappel** | 94.7% | 19 produits réels, 18 détectés |
| **F1-Score** | 81.8% | Score équilibré global |

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
| **MAE** | 0.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (18)

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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (15 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (de 4u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande mensuelle régulière. L'intervalle depuis la dernière commande (08/10) est de 19 jours, ce qui est légèrement plus court que le cycle habituel de ~30 jours observé précédemment (35j puis 26j). Cependant, la quantité commandée oscille entre 3 et 4 unités. Vu que la dernière commande était de 3 unités (en baisse par rapport aux 4 précédentes) et que nous nous rapprochons de la fin du mois, une commande de 4 unités est plus probable pour compenser le stock avant le cycle de novembre.

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (~25-30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 3u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande par mois environ. La dernière commande du 08/10 (1u) était anormalement basse par rapport aux précédentes (3u) et a eu lieu il y a 19 jours. La commande actuelle arrive un lundi, jour de la semaine déjà observé dans l'historique de ce produit bio premium. En tenant compte de la moyenne mobile pondérée et du besoin de restockage après une petite commande de 1u, une quantité de 2u permet de stabiliser le stock sans surestimer la tendance baissière récente.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 5.33u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 3u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+20% sur la dernière commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande toutes les 4 à 5 semaines (intervalles de 22 et 36 jours). La demande actuelle se situe le 27 octobre, soit seulement 19 jours après la dernière commande du 8 octobre. Comme le cycle habituel de ~30 jours n'est pas encore écoulé, la quantité nécessaire pour couvrir la fin du mois est plus faible que d'habitude. On observe une base stable de 5u, mais le rapprochement de la date de commande suggère un besoin de réassort partiel ou un stock de sécurité anticipé. Une réduction à 4u est recommandée pour éviter le surstockage face à ce raccourcissement de cycle.

</details>


<details>
<summary><strong>4. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30-35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande ultra-stable mais de très faible volume (1 unité par commande). L'intervalle entre les deux dernières commandes est de 36 jours. La date de prédiction (27 octobre) se situe 19 jours après la dernière commande du 8 octobre. Bien que nous soyons un peu en avance sur le cycle habituel de ~30 jours, la constance absolue de la quantité unitaire (1u) ne laisse aucune place à une variation statistique. La prédiction de 1 unité est la plus probable pour répondre au besoin dès que le cycle de réapprovisionnement se déclenche.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long de 20 à 35 jours (cycle mensuel)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande environ tous les 30 jours (02/09 -> 08/10). La commande du 27/10 arrive légèrement plus tôt que l'intervalle moyen (~19 jours après la précédente), mais s'aligne sur un besoin mensuel. Bien que la tendance des trois derniers points soit décroissante (3, 2, 1), la moyenne mobile se situe à 2 unités. Étant donné qu'il n'y a pas de données N-1 pour confirmer une saisonnalité, je préconise un retour à la moyenne de 2 unités pour compenser la faible quantité (1u) de début octobre et stabiliser le stock sur ce cycle.

</details>


<details>
<summary><strong>6. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 25 et 35 jours
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données séparés de 36 jours. On observe une baisse de 3 unités en septembre à 1 unité début octobre. La commande actuelle intervient 19 jours après la dernière, ce qui est plus court que l'intervalle précédent (36j), suggérant un besoin de réapprovisionnement intermédiaire faible. Une moyenne pondérée favorisant la donnée la plus récente (1u) mais tempérée par le stock de sécurité minimal suggère une commande de 2 unités pour stabiliser le stock sans sur-stocker face à une tendance incertaine.

</details>


<details>
<summary><strong>7. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 35 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 4u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint (seulement deux points de données). On observe un intervalle d'environ 36 jours entre les deux dernières commandes. La commande du 08/10 (1u) montre un ralentissement par rapport à celle du 02/09 (4u). La prédiction pour le 27/10 intervient seulement 19 jours après la dernière commande, ce qui est plus court que le cycle observé. Cependant, pour répondre à la demande à cette date précise, une quantité intermédiaire de 2 unités est recommandée pour équilibrer la moyenne pondérée tout en tenant compte de la tendance baissière récente.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilité parfaite à 2 unités par commande. Bien que l'intervalle entre les deux premières commandes était de 36 jours, la demande arrive ici seulement 19 jours après la dernière. Cependant, le volume de 2 unités semble être le 'minimum order quantity' ou le besoin structurel fixe du client pour cette référence de niche. Sans historique N-1 ni signe de croissance, le maintien de la quantité habituelle de 2 unités est le scénario le plus probable pour minimiser l'erreur (MAPE).

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~22-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite sur ses deux seules occurrences (6 unités). L'intervalle observé est de 22 jours entre août et septembre. Bien qu'un intervalle plus long se soit écoulé jusqu'au 27 octobre (environ 8 semaines sans commande enregistrée entre-temps), le volume habituel pour ce type de snacking bio en B2B ne montre aucun signe d'accélération de tendance. L'absence de données N-1 limite la visibilité sur une éventuelle saisonnalité d'automne, mais la stabilité du volume unitaire (multiples de 6) suggère un conditionnement fixe ou un besoin régulier de réapprovisionnement de rayon.

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 22 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une constance parfaite avec deux commandes successives de 3 unités. L'intervalle entre les deux premières commandes était de 22 jours (11 août au 2 septembre). La date de prédiction (27 octobre) intervient 55 jours après la dernière commande, ce qui suggère une commande sautée ou un cycle de réapprovisionnement plus long. Malgré cet écart temporel, le volume par commande est strictement identique (3u), indiquant une consommation de fond stable sans signe de croissance ou de saisonnalité (absence de données N-1). La prédiction repose sur la répétition de ce volume standard.

</details>


<details>
<summary><strong>11. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec un socle de 2-3 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (deux points de données). On observe une commande toutes les 3 à 4 semaines environ. La dernière commande datant du 2 septembre, nous sommes à 55 jours sans commande, ce qui suggère une rupture du rythme habituel et un besoin de réapprovisionnement imminent. La quantité de 3 unités est retenue pour s'aligner sur le volume le plus élevé observé récemment et couvrir le retard de cycle probable pour ce produit à faible rotation.

</details>


<details>
<summary><strong>12. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 21-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais de faible volume (1 unité par commande). Le cycle entre les deux dernières commandes était de 22 jours. La date de prédiction (27 octobre) intervient 55 jours après la dernière commande du 2 septembre, suggérant un saut de cycle ou un besoin de réapprovisionnement immédiat. Compte tenu de la constance absolue des volumes précédents (toujours 1u), il n'y a aucun signal justifiant une augmentation du volume unitaire malgré le délai allongé.

</details>


<details>
<summary><strong>13. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-établi (donnée unique isolée)
- **Saisonnalité**: none
- **Tendance**: Stable (une seule commande de 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande historique de 1 unité enregistrée il y a près de deux mois, la base statistique est insuffisante pour établir un cycle ou une tendance. En l'absence de saisonnalité N-1 connue et de signal de croissance, la recommandation par défaut reste l'unité minimale observée (1u) pour couvrir une demande sporadique potentielle.

</details>


<details>
<summary><strong>14. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~21-30 jours) le lundi ou mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais de faible volume (1 unité par commande). Le cycle semble être mensuel avec des commandes passées le 11 août puis le 2 septembre. Un intervalle de 8 semaines s'est écoulé depuis la dernière commande (02/09), ce qui suggère que le client arrive au bout de son stock ou suit un cycle de réapprovisionnement lent. Étant donné la constance absolue des quantités précédentes (1u), il n'y a aucune justification statistique pour augmenter le volume à 2u.

</details>


<details>
<summary><strong>15. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme indéterminé (unique point de donnée)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique extrêmement limité d'une seule commande un mois auparavant. En l'absence de répétition de cycle ou de données N-1, la valeur de référence de 1 unité est maintenue comme la quantité la plus probable pour ce produit de niche.

</details>




### 📊 Données d'Input LLM (15 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 3u
- 2025-09-02 10:03:59: 4u
- 2025-08-11 11:56:21: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 6u
- 2025-09-02 10:03:59: 5u
- 2025-08-11 11:56:21: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 2u
- 2025-09-02 10:03:59: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 6u
- 2025-08-11 11:56:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>11. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 2u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-08-11 11:56:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-08-11 11:56:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>15. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |


---

## False Negatives (1)

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
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | Stock suffisant: 1.9u (32j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:35:56.038Z*
