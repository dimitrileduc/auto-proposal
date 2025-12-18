# Rapport Backtest - Client BIOK BOIS DE VILLERS

## Contexte

- **Client** : BIOK BOIS DE VILLERS (ID: 60210)
- **Commande réelle** : S39948
- **Date commande** : 2025-10-28 07:20:57
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 18,837 input + 8,754 output = 27,591 total


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
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 28.0% | Erreur moyenne en % (biaisé, pour info) |
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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 2 | 4.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Pattern temporel**: Cycle 25-30j, début de mois
- **Saisonnalité**: none
- **Tendance**: Légère baisse (de 4u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents (3-4u). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, impact considéré neutre. Étape 3: Le rythme de commande est mensuel (environ tous les 25-30 jours). La dernière commande (08/10) montre un léger ralentissement en volume (3u) par rapport aux précédentes (4u). Étape 4: Nous sommes le 27 octobre, soit 19 jours après la dernière commande. Bien que le cycle habituel soit de ~30 jours, la commande actuelle intervient un lundi, jour de réapprovisionnement classique pour ce client. Compte tenu de la stabilité globale, une quantité de 4 unités est recommandée pour couvrir le mois de novembre à venir sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 25-30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur n'est identifiée comme promotionnelle, les volumes étant très faibles (1-3u). Étape 2 (Saisonnalité): Pas de données N-1 pour confirmer une saisonnalité, impact considéré nul. Étape 3 (Tendance): On observe un ralentissement de la demande, la dernière commande étant descendue à 1 unité le 08/10. Le délai moyen entre les commandes est d'environ 30 jours, ce qui correspond à la date actuelle (27/10). Étape 4 (Recommandation): La moyenne lissée est de 2.33 unités. Compte tenu de la tendance à la baisse et de la politique conservatrice pour éviter le sur-stockage sur un produit à faible rotation, une commande de 2 unités est préconisée pour couvrir les besoins du mois à venir tout en sécurisant un stock minimum par rapport au dernier point de donnée (1u). La confiance est basse car l'historique est très restreint (3 points). / Note: Date demandée cohérente avec le rythme mensuel observé le lundi 11/08 et mardi 02/09 originalement. / Pas d'outliers détectés car volume trop faible pour statuer sur un pic de stockage préventif significatif. / Fin de l'analyse : Volume cible fixé à 2 car c'est la médiane des commandes précédentes et le meilleur compromis entre les pics à 3u et le récent creux à 1u. / Le produit étant bio/premium, il faut éviter l'immobilisation financière inutile sur ce stock à faible vélocité. / Recommandation finale après synthèse : 2 unités. / Confiance maintenue à low en raison du manque de données N-1 sur la période des fêtes de fin d'année qui pourrait influencer le mois de novembre à venir mais n'est pas encore visible ici. / En l'absence de signaux de hausse, on reste prudent. / Recommandé: 2. / Baseline: 2.33. / Seasonality: none. / Trend: -20%. / Outliers: []. / Pattern: Mensuel.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 5u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.33u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 3u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (tous les 30 jours environ)
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+20%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES ANALYSE : 1. Aucun outlier détecté, les volumes (5u, 5u, 6u) sont cohérents pour du snacking B2B premium. 2. Absence de données N-1, mais le cycle mensuel semble stable sur la fin d'été/début d'automne. 3. On observe une légère accélération du volume sur la dernière commande (6u vs 5u précédemment) et un intervalle de commande légèrement plus court (26 jours au lieu de 22-30 jours). 4. La recommandation se base sur la moyenne haute (6u) pour accompagner la légère tendance haussière observée en octobre tout en restant conservateur face à l'absence d'historique long terme.

</details>


<details>
<summary><strong>4. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycles de 35-36 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, le volume de 1 unité est constant sur les deux points de données. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3 (Tendance): La tendance est parfaitement stable (1u) mais la fréquence est faible et espacée (environ 5 semaines). Nous sommes actuellement à J+19 de la dernière commande du 08/10. ÉTAPE 4 (Recommandation): Bien que le cycle habituel semble être de ~35 jours (prévision théorique pour mi-novembre), la demande actuelle du 27/10 suggère soit un besoin anticipé, soit un réajustement de stock. Compte tenu du volume unitaire constant, une commande de 1 unité est recommandée pour couvrir la demande sans risque de sur-stockage sur un produit à rotation lente. La confiance est faible en raison du volume de données historique très limité (seulement 2 points). Nous restons conservateurs à 1 unité car aucune accélération n'est démontrée par l'historique récent de ce client B2B sur cette référence spécifique de snack bio (Organica). L'écart entre le jour demandé (lundi) et les jours habituels (mardi/mercredi) ne justifie pas une hausse de volume, le client semblant commander selon ses ruptures de stock réelles plutôt qu'un jour fixe impératif d'approvisionnement logistique hebdomadaire (logique de 'pull'). Aucun événement promotionnel n'est identifié pour ce produit de niche sur la période actuelle de fin octobre, favorisant le maintien de la quantité de fond unitaire constatée précédemment dans la période récente de 3 mois (Septembre-Octobre). L'analyse conclut sur une stabilité parfaite de la demande de fond réelle malgré l'absence de données sur l'année N-1 (2024). Recommandation finale arrêtée à 1 unité entière pour répondre strictement à la demande ponctuelle identifiée ce lundi 27 octobre 2025 sans créer de stock dormant inutile.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier entre le 8 et le 11 du mois
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée sur les 3 points de données, volumes trop faibles pour isoler des promotions. ÉTAPE 2 (Saisonnalité): Données N-1 absentes. Produit estival (limonade), mais nous entrons en fin d'octobre (période basse). ÉTAPE 3 (Tendance): On observe un ralentissement du volume unitaire (3, 2, puis 1 unité) ainsi qu'un allongement du délai entre les commandes. ÉTAPE 4 (Recommandation): La demande de fond moyenne est de 2u, mais la tendance baissière et l'absence de saisonnalité favorable en automne imposent une approche conservatrice de 1 unité pour éviter le sur-stockage d'un produit à faible rotation actuelle. Confiance faible due à l'historique limité (3 points). Chaque commande semble couvrir environ 30 jours de stock moyen pour ce client spécifique sur cette référence précise (NODA mangue passion). Jusqu'à lundi 27, le client ne semble pas avoir commandé en octobre hormis le 8, le cycle est donc respecté avec une quantité minimale (1u). Chaque unité représente 1 pack ou 1 lot, une livraison de 1 suffit à maintenir la disponibilité durant la baisse cyclique de fin d'année pour ce type de boisson rafraîchissante bio faible en calories sans données historiques supplémentaires le contredisant au niveau macro-saisonnier local (France/Europe Octobre/Novembre). La prédiction finale s'établit à 1 unité pour correspondre au dernier point de contact et à la saisonnalité descendante observée sans avoir besoin d'un rattrapage massif qui risquerait de pénaliser la trésorerie et le stock mort alors que les ventes de boissons fraîches chutent en dehors de l'été. Surtout que la demande est le lundi, jour habituel d'ouverture de stock mais sans urgence de réapprovisionnement forte démontrée par les volumes unitaires récents d'octobre sur ce segment spécifique de produits (Bio/Limonade). Une recommandation de 1u garantit le maintien du catalogue sans exposition au risque.

</details>


<details>
<summary><strong>6. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 30-35 jours
- **Saisonnalité**: none
- **Tendance**: Baisse du volume par commande (de 3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier faute d'historique massif, mais le volume est très faible. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré nul. Étape 3: On observe un ralentissement entre septembre (3u) et octobre (1u). Le délai entre les deux commandes est de 36 jours. Étape 4: La demande actuelle survient seulement 19 jours après la dernière commande de 1u. Étant donné la tendance à la baisse et l'absence de régularité forte, une approche conservatrice de 1 unité est recommandée pour éviter le sur-stockage d'un produit à rotation lente (Slow Mover). Niveau de confiance faible dû au manque de points de données historiques (n=2).

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
- **Pattern temporel**: Irrégulier (30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 4u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (Nettoyage): Aucune commande n'est identifiée comme outlier promotionnel au vu du faible volume historique. ÉTAPE 2 (Saisonnalité): Données N-1 absentes, impact considéré neutre pour octobre sur ce type de boisson énergisante bio. ÉTAPE 3 (Tendance): On observe un ralentissement entre septembre (4u) et octobre (1u), avec un intervalle de commande d'environ un mois. ÉTAPE 4 (Recommandation): La moyenne lissée est de 2.5u. Compte tenu de la tendance baissière et de la stratégie conservatice pour éviter le sur-stockage sur un produit à faible rotation, une commande de 2 unités est préconisée pour couvrir le mois de novembre. La confiance est faible en raison de l'historique très limité (2 points de données). Pour le décalage de jour (lundi demandé vs milieu de semaine habituel), cela n'impacte pas le volume car le cycle est mensuel et non hebdomadaire.

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycle de 30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée, les deux seules commandes historiques sont identiques (2u). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le secteur boisson énergisante bio est généralement stable en automne. Étape 3: Le rythme semble être d'une commande par mois. La dernière commande date d'il y a 19 jours, ce qui suggère un besoin imminent ou une légère avance par rapport au cycle de 30 jours constaté en septembre-octobre. Étape 4: La stabilité parfaite du volume (2u) sur les deux occurrences oriente vers un maintien de cette quantité pour éviter le surstockage sur une référence à rotation lente (low rotation). La confiance est faible car basée sur seulement deux points de données historiques sans historique N-1 pour valider la période d'octobre/novembre. Recommandation conservatrice à 2u pour couvrir le cycle mensuel habituel sans risque d'obsolescence ou d'immobilisation de trésorerie sur un produit de niche (Pomegranate & Hibiscus). localement, nous sommes lundi, ce qui permet une livraison en début de semaine conforme aux habitudes précédentes (milieu de semaine). Aucun ajustement de tendance n'est appliqué faute de volume croissant significatif sur les 60 derniers jours. La recommandation finale est donc alignée sur la demande de fond observée de 2 unités par cycle d'approvisionnement détecté. Le stock de sécurité est implicitement inclus dans ce volume minimal de commande B2B packagé par unité de vente gros (UVG). Ce choix minimise le risque de rupture tout en respectant une gestion de stock 'juste-à-temps' pour ce type de SKU spécifique à faible volume unitaire moyen constaté historiquement sur les derniers mois d'activité enregistrés dans le système de gestion des commandes client centralisé au sein de l'entrepôt logistique ou du point de vente en question dans ce cas de figure précis de chaîne d'approvisionnement agroalimentaire moderne et agile face aux incertitudes du marché actuel particulièrement dynamique durant l'année en cours chez le client final mentionné précédemment.

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 21 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 6u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très limité (2 points de données), ce qui réduit la fiabilité statistique. 1) Aucun outlier détecté car les deux commandes sont identiques à 6 unités. 2) Pas de données N-1 pour confirmer une saisonnalité, mais le produit semble stable sur la fin d'été/début d'automne. 3) La tendance est strictement stable (6u). 4) Le délai entre les deux dernières commandes était de 22 jours, et la commande actuelle intervient 55 jours après la dernière connue, suggérant un besoin de réapprovisionnement immédiat pour maintenir le fond de rayon. On reste sur la quantité historique de 6u, volume standard de colisage probable pour ce type de chips premium bio en B2B sans signal de croissance ou de baisse majeur via les données fournies.

Note : La faible quantité suggère une rotation lente ou un point de vente de petite taille type épicerie fine/bio boutique spécialisée, justifiant une approche conservatrice de 6 unités pour éviter le sur-stockage avant la fin de DLC (chips premium). ou simple respect de l'unité de conditionnement carton (PCB de 6). Pour ces produits, la rupture est souvent gérée par un stock tampon faible mais constant.

Conclusion: On recommande 6 unités pour suivre l'historique stable constaté sur les mois précédents malgré l'écart temporel plus long depuis septembre (éventuelle commande intermédiaire non fournie ou baisse de fréquence). On mise sur la continuité du volume habituel pour assurer la présence en rayon sans risque de périssabilité excessif (DLUO). La date actuelle (lundi) est parfaitement alignée avec le jour habituel de commande (lun/mar). On ne propose pas plus par sécurité vu le manque d'historique robuste.

Synthèse: Volume de fond de 6u, pas de saisonnalité visible, confiance basse due au volume de data, cible 6u par prudence opérationnelle.

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique environ tous les 20 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'est détectée, les volumes sont constants à 3 unités. Étape 2: Aucune donnée historique N-1 n'est disponible pour valider une saisonnalité, nous considérons l'impact comme nul par défaut. Étape 3: La tendance est stable. La fréquence de commande semble s'espacer (août à septembre), suggérant une rotation lente du produit. Étape 4: La demande de base est de 3 unités. Comme nous sommes lundi, jour habituel de commande, et que le volume historique est strictement identique sur les deux derniers points de données, la recommandation reste conservatrice à 3 unités pour éviter le sur-stockage sur une référence à faible rotation (Low turnover product). Niveau de confiance faible dû au faible nombre de points de données (N=2). Aucun ajustement de tendance n'est justifié à ce stade sans accélération visible des ventes (sell-out). Nous maintenons le niveau de stock de sécurité habituel du client pour cette référence bio premium qui a souvent une DLC plus courte que le conventionnel (principe de précaution agroalimentaire). Nous recommandons 3 unités pour couvrir les besoins du mois à venir selon le pattern de commande précédent (septembre-octobre). On peut noter qu'aucune commande n'a eu lieu depuis début septembre, confirmant une faible rotation ou un stock résiduel important côté client (réapprovisionnement opportuniste). Nous validons 3 unités pour rafraîchir le facing sans risque de démarque (perte produit). On surveillera le prochain cycle pour confirmer si le besoin est récurrent tous les 50 jours environ ou si des ventes ont eu lieu en dehors du circuit ERP habituel (promotion locale non listée). On reste sur un volume minimal de 3u qui semble correspondre à un 'colisage' ou une unité de préparation standard pour ce type de chips bio premium piment citron 125g chez ce fournisseur logistique (B2B). Un volume de 3 permet de remplir une tablette sans saturer l'espace de stockage sec.

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
- **Pattern temporel**: Faible fréquence, environ toutes les 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes de 2 et 3 unités sont cohérents pour un produit de niche bio. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: La tendance est stable sur un rythme de commande espacé (tous les 20-30 jours). Étape 4: La moyenne lissée est de 2.5 unités. Compte tenu du délai depuis la dernière commande (septembre), un réapprovisionnement de 3 unités est recommandé pour couvrir le mois à venir tout en restant conservateur face au manque d'historique dense sur ce produit spécifique (ReBEL chips). Confidence 'low' due au très faible nombre de points de données (2 commandes). Même si la demande de fond est de 2.5, on arrondit à 3 pour maintenir un stock de sécurité minimal en B2B sur un produit sec à longue DLC (chips). Cependant, une commande de 2 unités serait également acceptable si le client souhaite limiter son immobilisation financière sur une référence lente d'après les rares informations de rotation fournies (tendance stable). Nous gardons 3 ici comme compromis logique entre la dernière commande (3u) et la précédente (2u). Le jour de commande (lundi) est respecté par rapport au rythme précédent (lun. 11/08). Pas d'accélération notable détectée entre août et septembre, donc on reste sur le volume historique haut observé pour éviter la rupture sur un produit premium sans risque de péremption immédiate (DLUO chips généralement longue). Au vu des 3-4 dernières commandes (seulement 2 ici), la tendance n'affiche ni hausse ni baisse significative, d'où le choix d'un volume médian/haut de 3u pour sécuriser les ventes sans sur-stockage massif sur une référence dont on ne connaît pas la saisonnalité faute d'historique l'an passé sur la même période de fin d'année. Par conséquent, la recommandation finale s’établit à 3 unités commandées ce lundi 27 octobre.

</details>


<details>
<summary><strong>12. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (~30 jours), commande en début de semaine
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants à 1 unité. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: La tendance est extrêmement stable mais à très faible volume (1 unité par mois environ). Étape 4: La demande de fond étant de 1 unité avec une fréquence mensuelle, et la dernière commande remontant à début septembre, un réapprovisionnement de 1 unité est préconisé pour couvrir le besoin latent sans risquer le sur-stockage sur un produit à rotation lente. Confiance faible due au volume de données limité (2 points). Chaque unité représente 100% de variation, la prudence est donc de mise (1 seule unité). Aucun signe de rupture de rythme majeure ici, juste un flux de niche permanent stable à l'unité près d'après les traces de août et septembre 2025 (Période Récente). L'absence de commande en octobre suggère un besoin imminent fin octobre/débu novembre conforme à un rythme de 30 jours environ entre les commandes réelles constatées précédemment (2025-08-11 à 2025-09-02, soit approximativement 3 semaines, octobre ayant été sauté ou décalé). On valide 1u en conservatisme absolu B2B (éviter la péremption/frais stockage). 

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
- **Pattern temporel**: Commande sporadique (1 occurrence isolée)
- **Saisonnalité**: none
- **Tendance**: Stable (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée aberrante car une seule commande de 1 unité est enregistrée. ÉTAPE 2 (Saisonnalité): Pas de données historiques N-1 pour établir un cycle saisonnier. ÉTAPE 3 (Tendance): La data est trop faible (une seule commande en septembre) pour dégager une tendance de croissance ou de baisse. ÉTAPE 4 (Recommandation): En l'absence de récurrence établie et de visibilité sur la rotation du produit, l'approche conservatrice est de maintenir le stock à l'unité minimale observée (1u) pour tester la demande sans risquer le sur-stockage.

</details>


<details>
<summary><strong>14. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ une fois par mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée, demande de fond de 1 unité. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par prudence. Étape 3: Le volume est stable (1u) mais la fréquence est très faible (cycle de ~3 semaines à 1 mois). Étape 4: La date actuelle (lundi) correspond au cycle habituel de début de mois ou de quinzaine observé. Étant donné la faible vélocité du produit, une recommandation de 1 unité est suffisante pour maintenir le stock sans risque de sur-stockage massif, malgré le faible historique de données qui réduit l'indice de confiance à 'low'. Dans ce contexte B2B, on privilégie l'approvisionnement à l'unité sur ce type de référence à faible rotation.

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
- **Pattern temporel**: Commande isolée, aucune récurrence établie
- **Saisonnalité**: none
- **Tendance**: Stable sur volume minimal (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée car une seule donnée est disponible (1 unité), ce qui constitue la demande de fond. Étape 2: Absence d'historique N-1 pour confirmer une saisonnalité, bien que le secteur boisson soit sensible, les données actuelles ne permettent pas d'ajuster. Étape 3: La fréquence est extrêmement faible (une commande en 2 mois), suggérant un produit de niche ou un test de référencement. Étape 4: En l'absence de rotation régulière, la recommandation se limite au strict minimum de 1 unité pour couvrir une éventuelle demande ponctuelle sans immobiliser de stock inutilement.

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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 6u
- 2025-08-11 11:56:21: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T12:10:48.396Z*
