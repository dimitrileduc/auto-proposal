# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 32,893 input + 13,162 output = 46,055 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.3% | 45 produits prédits, 24 corrects |
| **Rappel** | 96.0% | 25 produits réels, 24 détectés |
| **F1-Score** | 68.6% | Score équilibré global |

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
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 109.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 182.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 90.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 15 | Avec erreur |

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 12 | 1 | 11.0 | 1100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 24 | 1 | 23.0 | 2300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique trimestriel, commande environ tous les 45-60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive de 4u à 2.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande de fond stable sans outliers majeurs, gravitant autour de 3.5 unités. La saisonnalité N-1 de juillet/août (4-5u) n'a pas été reproduite en 2025 (3u), suggérant un ralentissement de la demande ou un changement de comportement client. La tendance récente montre une baisse avec une dernière commande à 2u en septembre. Puisque nous sommes le mercredi 8 octobre, soit environ 3 semaines après la dernière commande, et compte tenu du rythme bimensuel à trimestriel, une commande de 3 unités permet de reconstituer le stock de sécurité sans risque de sur-stockage massif, tout en tenant compte de la légère érosion des volumes observée.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle approximatif de 15 à 20 jours, principalement en milieu de semaine (mardi/mercredi)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive de 4u à 2u (-50%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement de la consommation sur ce SKU. L'étape 1 (De-eventing) ne révèle pas d'outliers majeurs, les volumes restant faibles (2-6u). L'étape 2 (Saisonnalité) indique que l'activité l'année précédente à la même période était plus soutenue (6u en août), mais la tendance 2025 est nettement à la baisse. L'étape 3 (Tendance) confirme une stabilisation à 2 unités lors des deux dernières commandes (août/septembre). La prédiction finale (Étape 4) privilégie une approche conservatrice de 2 unités pour s'aligner sur la demande de fond récente tout en évitant le sur-stockage sur un produit dont la vitesse de rotation semble diminuer.

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 14 à 20 jours, principalement en milieu de semaine (mardi/mercredi)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2.3u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'a été détectée, les volumes sont constants (2-4u). Étape 2: La saisonnalité N-1 montre des volumes légèrement supérieurs en juillet (3-4u), suggérant un léger ralentissement en octobre. Étape 3: La tendance récente sur les 3 derniers mois montre une stabilisation à 2 ou 3 unités avec un intervalle de commande d'environ 3 semaines. La dernière commande date d'il y a 21 jours (17/09), ce qui rend le besoin actuel pertinent. Étape 4: En appliquant une approche conservatrice sur un produit à faible rotation, une commande de 2 unités couvre la demande de fond sans risque de sur-stockage.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle à bimensuelle
- **Saisonnalité**: none
- **Tendance**: Baisse légère (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles et stables (1-2u). Étape 2: Historique N-1 trop parcellaire pour confirmer une saisonnalité, bien que la Bearnaise soit souvent liée aux périodes de grillades (été). Étape 3: La dernière commande de septembre montre un ralentissement (1u) par rapport à la moyenne historique de 2u. Étape 4: Compte tenu du faible volume de rotation et de la volonté de ne pas sur-stocker sur un produit de type sauce (DLC), une recommandation conservatrice de 1 unité est préconisée pour couvrir les besoins immédiats sans risque d'impayés ou de péremption, d'autant que le rythme actuel semble s'essouffler par rapport à l'été 2024/2025. Le niveau de confiance est bas en raison du très faible nombre de points de données historiques (4 commandes en 14 mois). Solo le maintien d'une unité est justifié par la dernière transaction enregistrée un jour similaire (mercredi). contextuel au secteur B2B agroalimentaire, la prudence prime ici sur un retrait de stock complet ou une hausse arbitraire si la demande n'est pas confirmée par un flux hebdomadaire stable localement sur le point de vente/restaurant client final via les transactions de septembre/août précédents. Finalement, nous recommandons donc 1 unité pour ce mercredi car cela correspond au dernier signal de demande identifié en septembre dernier même jour même heure (mercredi 11h vs mercredi actuel). Cela évite tout surstockage inutile sur cette référence secondaire [JF012] alors que la tendance est baissière immédiate selon la dernière donnée de septembre (1u vs 2u en août). On privilégie la fraîcheur et la rotation lente contrôlée ici plutôt qu'un pari volumétrique sans signaux forts d'achat groupé ou de promotion détectée dans l'échantillon fourni par l'utilisateur final ici présent dans sa demande initiale pré-traitée logiciellement ainsi par l'expert Senior Supply Chain sollicité pour cette tâche précise de prédiction logistique alimentaire complexe et segmentée finement au produit par produit ainsi.

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques (tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u/cycle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les deux commandes historiques sont identiques (2u). Étape 2 : Données N-1 absentes, impact saisonnier non quantifiable mais le produit semble être une référence de fond de rayon. Étape 3 : La tendance est parfaitement stable avec un volume récurrent de 2 unités, bien que la fréquence soit lente (environ 6 semaines entre les commandes). Étape 4 : La demande actuelle (mercredi) s'aligne sur le cycle de la dernière commande. Vu le faible historique et la nature B2B, il est recommandé de maintenir le volume historique de 2 unités pour couvrir le prochain cycle sans risque de surstockage sur un produit à rotation lente de 250ml (format Weck). Habituellement, ce type de volume suggère une consommation ponctuelle ou un stock de sécurité minimal chez le client final faute de débit élevé localement. Niveau de confiance faible dû au faible nombre de points de données (n=2). Nous restons conservateurs à 2 unités ou une unité de colisage standard si applicable (ici supposée 2). Un ajustement à 1u serait trop risqué face à la stabilité des 2u observée lors des 3 derniers mois au même jour de la semaine (mercredi). Pas de tendance à la hausse détectée justificative d'un passage à 3u ou plus. Nous gardons 2u pour respecter l'équilibre stock/rupture sans données prédictives plus fines venant d'un historique N-1 ou d'événements promotionnels en cours sur cette référence spécifique de sauce aïoli pesto haut de gamme. Pas d'indice suggérant un besoin de stockage massif immédiat avant les fêtes d'octobre/novembre sans signal client.

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique avec intervalle de 4 à 6 semaines
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande de fond très stable à 2 unités par commande. La valeur de 5 unités détectée en mai 2024 est considérée comme un outlier (stockage préventif ou pic ponctuel). Bien qu'il y ait eu un pic à 4 unités en juillet N-1, les données récentes de 2025 confirment un rythme constant de 2 unités toutes les 6 semaines environ. La saisonnalité est jugée faible pour ce format spécifique. En l'absence de tendance haussière et pour éviter le sur-stockage sur un produit à rotation lente, la recommandation reste fixée sur la valeur de base de 2 unités.

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 15 et 30 jours, historiquement le mardi/mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (4u -> 5u -> 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités (4, 5, 6) sont cohérentes pour du B2B. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais la nature du produit (mayonnaise) suggère une demande stable. Étape 3: On observe une tendance haussière légère (+1 unité par commande) avec un intervalle de réapprovisionnement d'environ 3 semaines. Étape 4: La recommandation de 6 unités maintient le niveau de la dernière commande pour couvrir la hausse de la demande de fond tout en restant conservateur face à l'espacement des commandes (21 jours).

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle approximatif de 15 à 28 jours (bi-mensuel irrégulier)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande de fond extrêmement stable à 2 unités par commande. Aucun outlier n'est détecté. Bien que l'intervalle entre les commandes soit passé de 14 jours en août à 29 jours en septembre, le volume unitaire reste inchangé. Sans données N-1 pour confirmer une saisonnalité spécifique aux boissons énergisantes bio en octobre et face à une tendance plate, la recommandation reste fixée à la demande de fond de 2 unités, correspondant au besoin récurrent observé sur les trois derniers mois.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 14 et 29 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.66u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles et cohérents (1-2u). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré nul par prudence. Étape 3: La tendance montre une légère accélération du rythme (21 jours vs 29 jours précédemment) avec un volume stable. Étape 4: La date actuelle correspond exactement au cycle de 21 jours constaté entre les deux dernières commandes. Compte tenu du faible volume unitaire, commander 2 unités permet de couvrir le besoin sans risque majeur de sur-stockage, tout en respectant la moyenne haute observée (1.67 arrondi par excès). Confiance faible due au très faible historique (3 points de données). Pour une boisson énergisante bio en 250ml, un stock de sécurité minimal de 2 unités est raisonnable en B2B pour éviter la rupture sur un petit format à rotation lente mais régulière vers cette période de l'année (octobre). Aucun ajustement saisonnier spécifique appliqué par manque de données historiques comparatives sur l'automne N-1. La recommandation finale s’appuie sur le maintien de la disponibilité en s’alignant sur la quantité maximale habituelle constatée lors des cycles récents de trois semaines (2u). Le passage du mardi au mercredi pour la date de commande semble négligeable par rapport au cycle global de réapprovisionnement observé sur ce produit spécifique de niche d'agroalimentaire bio. Il est plus prudent d'avoir 2u qu'une seule afin de sécuriser le client final sur ce segment spécifique de boissons énergisantes fonctionnelles où la rupture est préjudiciable à la fidélité de gamme. On reste conservateur car le produit est traité à l'unité sans preuve de volume de masse imminent ou de campagne promotionnelle signalée dans l'historique fourni précédemment par le biais du système de gestion des commandes habituelles enregistrées sur la période de 3 mois analysée au format standardisé présenté dans le contexte de l'utilisateur final concerné. En conclusion : 2 unités prévues pour le 08/10/2025.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier les mardis et mercredis
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée sur les 3 points de données (1 à 2 unités). ÉTAPE 2 (Saisonnalité): Absence de données N-1 pour confirmer une saisonnalité, impact considéré nul. ÉTAPE 3 (Tendance): On observe une légère accélération du volume passant de 1 à 2 unités lors des deux dernières commandes, effectuées à environ 15-20 jours d'intervalle. ÉTAPE 4 (Recommandation): La demande de fond se stabilise autour de 2 unités. Étant donné le faible historique et la nature conservatrice du secteur B2B, l'arrondi supérieur de la moyenne pondérée (1.67) à 2 unités permet de couvrir le besoin sans risque de sur-stockage massif sur ce format 250ml léger. La confiance est faible en raison du volume de données très limité (3 points). High volatility potential remains due to sparse history, hence maintenance of current recent order levels is recommended over exponential growth forecasting or stock reduction at this stage. Analysis suggests sticking to the high range of recent actuals (2 units) which perfectly fits the Wednesday order day context identified in September's pattern. No seasonality adjustment can be confidently made without previous year records. Overall logic favors stability given the low unit price and drink category characteristics preventing rapid obsolescence risk. Total stock cycle implies a 3-week replenishment rhythm that matches the current date request precisely relative to mid-September activity. Total calculated baseline aligns with a conservative 2-unit replenishment strategy as a ceiling for current trend monitoring and future data accumulation needs to refine future projections more accurately regarding the ginger-lemon specific demand curve during autumn transition in the B2B sector for organic energy drinks specifically sized at 250ml units where bulk buying often occurs at small retail unit counts for this niche product type and size profile as shown by the provided history records so far since August 2025 starting period for this SKU locally monitored.

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les ~40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING) : Aucune valeur aberrante n'est détectée, les volumes sont constants à 2 unités. ÉTAPE 2 (SAISONNALITÉ) : Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3 (TENDANCE) : La tendance est parfaitement stable mais la fréquence est faible. La commande actuelle (mercredi) respecte le pattern du dernier achat (mercredi). ÉTAPE 4 (RECOMMANDATION) : Compte tenu de l'historique très limité (2 points de données) et de la stabilité stricte du volume unitaire, la prédiction se maintient à 2 unités pour couvrir le cycle de réapprovisionnement sans risque de sur-stockage sur un produit bio de niche (125g). La confiance est basse en raison du manque de profondeur historique, mais la réplicabilité du volume suggère une demande de fond constante de 2 unités par commande client B2B sur cette référence spécifique de chips chips premium ReBEL Chips . 

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.66u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (environ toutes les 2 à 4 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable avec un socle à 1.66 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée, les volumes sont très faibles et constants (1-2 unités). Étape 2: Absence de données N-1, impossible de confirmer une saisonnalité, impact considéré comme nul. Étape 3: La tendance est stable. La dernière commande date de 3 semaines (17/09), ce qui suggère qu'un réapprovisionnement est nécessaire pour maintenir le stock rayon. Étape 4: La moyenne lissée est de 1.66 unités. Compte tenu du faible volume unitaire, l'arrondi supérieur à 2 unités est recommandé pour couvrir la période de 3 semaines à venir tout en évitant une rupture sur ce produit premium bio, tout en restant conservateur sur le stockage de chips (volume encombrant). La confiance est faible en raison du très petit nombre de points de données (3 commandes). Chaque unité supplémentaire impacte fortement le stock théorique en jours sur de tels volumes car le rythme est lent (0.5u/semaine). La recommandation de 2 unités permet de tenir environ 1 mois selon l'historique récent (Cycle moyen de 21 jours entre les commandes de 1-2 unités). Même si l'historique est léger, le besoin de réassort se manifeste cycliquement tous les 20 jours environ, ce qui coïncide avec la date actuelle (21 jours après la dernière commande). L'arrondi à 2 unités est donc prudent et logique pour un réassort standard de fond de rayon sans risque massif de surstockage vu l'unité de vente (sachet 125g). Les dates de péremption sur le bio premium sont à surveiller mais 2 unités présentent un risque minimal. Aucune promotion majeure n'est anticipée sans signal préalable dans les données récentes de volume stable. La demande est sporadique mais récurrente, typique d'un produit 'niche' ou complémentaire en B2B local alimentaire. On suit donc le cycle habituel sans chercher une croissance agressive mais en assurant la disponibilité produit car la chips est un produit d'impulsion dont la rupture coûte cher en satisfaction client mais le stockage coûte cher en péremption et volume. 2 unités est le compromis parfait ici entre service et gestion stock. On valide une approche 'Just In Time' adaptée aux flux restreints observés sur l'historique complet disponible (Août/Septembre). La confiance pourra être augmentée avec plus d'historique hivernal. On reste donc sur le socle stable observé de 2 unités pour garder la cohérence avec le pic de Septembre qui est le point le plus récent du cycle de vente détecté. Le passage du mardi au mercredi pour la commande n'influe pas sur le volume final car le décalage est minime par rapport à la fréquence de consommation réelle du produit par le client final B2B du client du fournisseur principal de chips REBEL.

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier (environ toutes les 2 à 4 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.67u de moyenne
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique récent montre une demande de fond très faible mais stable, oscillant entre 1 et 2 unités par commande sans outliers identifiés. Il n'existe pas de données N-1 pour confirmer une saisonnalité, mais le rythme actuel suggère un besoin de réapprovisionnement environ une fois par mois. La commande intervient 3 semaines après la dernière, ce qui correspond à la fréquence observée. En restant conservateur pour éviter le sur-stockage sur un produit à faible rotation, une quantité de 2 unités est recommandée pour couvrir la demande du prochain cycle.

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (toutes les 6 semaines environ)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données sur les trois derniers mois. ÉTAPE 1: Aucune valeur n'est identifiée comme outlier au vu des faibles volumes (1u et 2u). ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, mais le secteur boisson suggère une demande faible en octobre. ÉTAPE 3: La fréquence est très lente (43 jours d'écart) et la dernière commande (17 sept) était de 1 unité. ÉTAPE 4: Compte tenu de la faible rotation et de la stratégie conservatrice pour éviter le sur-stockage sur un produit à faible volume, une recommandation de 1 unité est préconisée pour maintenir une présence minimale en stock sans risque financier, le niveau de confiance reste 'low' dû au manque de profondeur historique de données (2 commandes seulement). Pour un mercredi (jour habituel), 1 unité suffit à couvrir le cycle actuel observé de la demande de fond basique de ce client B2B sur cette référence citron-framboise 275ml échantillonnée périodiquement (test ou complément de gamme). Si le client commande à nouveau aujourd'hui, 1 unité suffit pour couvrir le besoin ponctuel avant la prochaine rotation longue détectée d'environ 1,5 mois par unité en moyenne sur la période.

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ toutes les 6 semaines
- **Saisonnalité**: none
- **Tendance**: Hausse légère (2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur le faible historique disponible. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le secteur suggère un ralentissement post-été. Étape 3: On observe une légère hausse de volume de 2 unités en août à 3 unités en septembre sur un cycle long. Étape 4: En l'absence de recul suffisant, la recommandation se base sur le dernier volume observé (3u) pour couvrir la demande de fond tout en restant conservateur face à l'incertitude du stock actuel chez le client B2B. Le niveau de confiance est faible en raison de la pauvreté de l'historique (2 points de données). Une commande de 3 unités est préconisée pour maintenir le rythme de septembre sans risquer de sur-stockage massif sur une référence à rotation lente (slow mover). Aucun événement promotionnel n'est intégré dans l'analyse actuelle faute d'informations spécifiques fournis dans les consignes contextuelles immédiates du produit pour octobre 2025. Un ajustement à 3 unités permet de répondre à la tendance de croissance modérée observée lors du dernier passage.

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel ou rare (1 commande en 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais faible volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune anomalie détectée sur l'unique commande de 2 unités. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le secteur suggère un ralentissement post-été. Étape 3: Historique très pauvre (une seule commande le 5 août), rendant le cycle de réapprovisionnement incertain. Étape 4: En l'absence de données de consommation réelles et vu le profil B2B à faible rotation, je recommande de rester sur le volume de base de 2 unités pour couvrir une demande ponctuelle sans risque de sur-stockage.

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel (une seule commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 2 unités enregistrée il y a deux mois (août). Sans historique N-1 ni récurrence établie, la demande de fond est fixée par défaut à la dernière valeur connue (2u). Le produit étant une limonade peu calorique, nous sommes hors pic estival en octobre, mais la prudence suggère de maintenir un stock de sécurité minimal égal à la vente unitaire observée pour éviter une rupture sur ce qui semble être une référence de niche ou un test produit. La confiance est faible due au manque de points de données pour valider une tendance.

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 12u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: low)
- 📊 **Baseline N-1**: 12u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 11u (1100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifié (nouveau produit ou absence d'historique)
- **Saisonnalité**: none
- **Tendance**: Inconnue - absence de données historiques
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique de commandes (N-1 et période récente), la prédiction repose sur une approche de lancement sécuritaire. Pour un produit type confiture bio 370g en B2B, une quantité standard de démarrage de 12 unités (généralement correspondant à deux cartons de 6) est recommandée. Cette approche conservatrice permet de tester la rotation du produit sur le point de vente sans risque de sur-stockage initial. La confiance est faible en raison du manque de données statistiques.

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 24u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: low)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 23u (2300.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable - Absence d'historique
- **Saisonnalité**: none
- **Tendance**: Inexistante - Premier référencement ou nouvelle fiche produit
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES DU RAISONNEMENT : 1. DE-EVENTING : Aucune donnée historique pour identifier des outliers. 2. SAISONNALITÉ : Impossible d'analyser l'impact N-1 en l'absence de données. 3. TENDANCE RÉCENTE : Aucune transaction enregistrée au cours des 3 derniers mois. 4. RECOMMANDATION : En l'absence totale d'historique pour ce produit (RIT06), la recommandation est basée sur une quantité de lancement prudente pour un produit type Soda/Cola en format verre 275ml. Le volume de 24 unités (correspondant généralement à un conditionnement standard de 24 bouteilles par caisse/fardeau) est suggéré comme stock de sécurité minimal pour tester la rotation sans risque de sur-stockage majeur. La confiance est faible car aucun calcul statistique n'est possible sans données transactionnelles.

</details>




### 📊 Données d'Input LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 4u
- 2024-07-15 07:59:25: 5u
- 2024-04-15 06:24:25: 3u
- 2024-03-12 14:06:41: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 6u
- 2024-07-15 07:59:25: 4u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 07:59:25: 4u
- 2024-07-01 07:05:34: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-21 13:55:22: 2u
- 2024-07-15 07:59:25: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-01 07:05:34: 4u
- 2024-05-31 07:27:57: 5u
- 2024-04-15 06:24:25: 2u
- 2024-03-12 14:06:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 6u
- 2025-08-19 12:02:03: 5u
- 2025-08-05 06:36:11: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 2u
- 2025-08-19 12:02:03: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 1u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:26:26: 3u
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 06:36:11: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 12u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 24u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (21)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (24j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (22j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-4j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 3 | Stock prédit: 0.1u (0j restants) → prédit 3u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (25j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.2u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.2u (-18j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.5u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.7u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Stock prédit: -1.3u (-35j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 6 | Stock prédit: -1.4u (-43j restants) → prédit 6u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |


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
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock suffisant: 1.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:02:07.422Z*
