# Rapport Backtest - Client Chez Lucienne

## Contexte

- **Client** : Chez Lucienne (ID: 21059)
- **Commande réelle** : S39964
- **Date commande** : 2025-10-28 13:40:43
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 30,651 input + 5,621 output = 36,272 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.0% | 25 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 78.0% | Score équilibré global |

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
| **MAE** | 0.06 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 6.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (16)

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
| [RISH01] RISH kombucha BIO - original 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH06] RISH kombucha BIO - tagette 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15-20 jours (toutes les 2 à 3 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement de commande très stable (1 unité par commande) avec un intervalle moyen de 15 à 20 jours. La dernière commande date du 1er octobre (mercredi). Au 27 octobre, nous sommes à 26 jours de la dernière commande, ce qui place la date de prédiction légèrement au-delà de l'intervalle habituel, signalant une forte probabilité de réapprovisionnement imminent. Malgré le fait que le lundi ne soit pas le jour historique (mardi/mercredi), les règles de gestion imposent de prédire la prochaine commande probable. Compte tenu de la constance absolue des volumes précédents (toujours 1u), la prédiction est fixée à 1 unité.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 15 à 20 jours (bi-mensuel irrégulier)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de réapprovisionnement d'environ 2 à 3 semaines. La dernière commande date du 1er octobre (2u), soit il y a 26 jours. Compte tenu de l'intervalle historique (15-20 jours), le client est actuellement en rupture ou en besoin imminent de stock. Bien que la commande tombe un lundi et que le client commande habituellement le mardi/mercredi, la règle de gestion des jours hors cycle impose de prédire la prochaine commande probable. La tendance récente montre un doublement du volume (de 1u à 2u), je retiens donc 2 unités pour couvrir le prochain cycle.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une consommation extrêmement stable et régulière de 1 unité par commande sur les trois derniers mois. Les intervalles entre les commandes varient (14 jours puis 15 jours), suggérant un besoin de réapprovisionnement dès que l'unité est consommée ou vendue. Bien que la date de prédiction soit un lundi et que les commandes précédentes aient eu lieu le mardi ou mercredi, la règle de continuité du cycle impose de prévoir la prochaine unité consommée. Étant donné l'absence d'outliers et la constance absolue du volume (1u), la prédiction la plus probable pour maintenir le stock est de 1 unité.

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
- **Pattern temporel**: Cycle 21-25 jours (environ une fois par mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un rythme de commande mensuel très stable avec une quantité fixe de 1 unité par commande. Les intervalles entre les trois dernières commandes sont de 20 jours puis 15 jours. La dernière commande date du 01/10. En prédisant pour le 27/10 (lundi), nous nous situons exactement dans la fenêtre de réapprovisionnement mensuel (j+26). Bien que le jour habituel soit plutôt le milieu de semaine (mardi/mercredi), selon les règles de gestion hors-cycle, nous devons prédire la quantité de la prochaine commande probable plutôt que 0. La stabilité absolue de l'historique (1, 1, 1) rend la prédiction de 1u hautement probable.

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 30-35j intermittent surtout le lundi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une érosion constante des volumes pour cette référence. Historiquement commandé à hauteur de 2u ou 3u en 2023-2024, les deux commandes les plus récentes (août et octobre 2025) se sont stabilisées à 1u. Bien que l'intervalle entre les deux dernières commandes soit de 35 jours et que la date de prédiction arrive 26 jours après la dernière, le volume unitaire de 1u représente désormais la demande de fond la plus probable. Prédire 1u permet de respecter la tendance baissière récente tout en couvrant le besoin sur ce jour de commande habituel (lundi).

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement net de la consommation de ce produit. Historiquement, le volume était de 2 ou 3 unités en 2023/2024. Cependant, les deux commandes les plus récentes (août et octobre 2025) sont stabilisées à 1 unité seulement. Bien que le jour de commande semble avoir légèrement glissé du lundi vers le mercredi récemment, le lundi reste le jour historique majeur. En suivant la règle de ne pas prédire 0 pour un jour hors cycle et en privilégiant la tendance immédiate (MAPE minimum), la quantité la plus probable pour la prochaine commande est de 1 unité.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 3u à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement net du produit. Alors que le volume historique (N-1) oscillait entre 2u et 3u, les deux commandes les plus récentes en 2025 sont de 2u (août) puis 1u (octobre). L'intervalle entre les deux dernières commandes est de 35 jours. La date de prédiction (27 octobre) arrive 26 jours après la dernière commande de 1u. Compte tenu de la tendance baissière et de la rotation lente du stock pour ce format 190g, la quantité la plus probable pour la prochaine commande est l'unité minimale.

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long (30-60 jours) avec relâchement récent
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 3u à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une érosion constante des volumes. Alors qu'en 2024 les commandes sur ce produit oscillaient entre 2u et 3u, les deux dernières itérations (août et octobre 2025) sont stabilisées à 1u. Bien que le jour de commande ait glissé vers le mercredi récemment, le lundi reste le jour de référence historique majeur pour ce client. Étant donné la faible vélocité actuelle du produit (cycle de ~35 jours), nous maintenons la prédiction sur la valeur plancher de 1u observée lors des 3 derniers mois pour minimiser le MAPE, malgré la date de prédiction qui semble légèrement en avance sur le cycle théorique du prochain mois.

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique sur deux ans montre une consommation extrêmement stable et faible pour ce produit, avec une quantité constante de 1 unité par commande. Le volume de 2 unités observé en octobre 2024 apparaît comme un outlier ou un micro-pic non reconduit. Les deux dernières commandes (août et octobre 2025) confirment le maintien à 1 unité. Bien que le jour de commande ne soit pas strictement fixe, le lundi fait partie des jours historiques de commande. Le cycle actuel étant environ mensuel, et la dernière commande datant de début octobre, une commande de réapprovisionnement de 1 unité est le scénario le plus probable pour ce lundi 27 octobre.

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long de 15 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 3u à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilisation nette du produit à 1 unité par commande sur les trois derniers mois (août, septembre, octobre 2025). Historiquement, le produit oscillait entre 2 et 3 unités en 2024, mais la tendance récente est strictement monotone à 1u. Bien que la fréquence soit espacée (tous les 15-20 jours), le dernier achat remonte au 01/10/2025 (il y a 26 jours), ce qui place la date de prédiction du 27 octobre dans la fenêtre critique de réapprovisionnement habituel. Le lundi étant un de ses jours de commande fréquents (50% des occurrences N-1), la probabilité de commande est élevée, et le volume prévisible est de 1 unité conformément à la tendance actuelle de consommation.

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non défini (point de données unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec un seul point de données historique (1 unité en septembre), il est difficile d'établir un cycle récurrent. Cependant, en B2B agroalimentaire pour ce type de produit niche (Kombucha 750ml), les commandes sont souvent très stables à l'unité près. Bien que le lundi soit différent du mardi (jour de la première commande), en suivant les règles de prédiction pour le cycle le plus proche et en l'absence de tendance à la hausse, je maintiens la quantité de fond stable à 1 unité.

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 20-30 jours (Cycle mensuel irrégulier)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint avec seulement deux points de données, mais le volume est constant (1 unité par commande). L'écart entre les deux dernières commandes est de 20 jours. La commande demandée pour le 27 octobre arrive environ 41 jours après la dernière commande du 16 septembre, ce qui suggère qu'une nouvelle commande unitaire est due ou imminente. Étant donné la stabilité du volume unitaire en B2B pour ce produit spécifique, la quantité la plus probable est 1.

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-cyclique, commandes sporadiques (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 2u/3u à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une faible rotation pour ce produit. Bien que des pics à 3 unités aient été observés en 2024, les commandes les plus récentes (août et septembre 2025) se sont stabilisées à 1 unité. Le produit semble être commandé 'à l'unité' pour du réassort de stock de sécurité plutôt que pour un flux tendu volumique. La date de prédiction (lundi) correspond au jour de commande historique prédominant. Compte tenu de la tendance récente très stable, une quantité de 1 unité est la plus probable.

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 2u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 2u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 2u
- 2024-06-13 12:45:08: 1u
- 2024-04-29 07:17:35: 1u
- 2024-03-21 08:33:04: 1u
- 2023-12-07 14:11:59: 1u
- 2023-11-21 07:37:42: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:30:26: 1u
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 3u
- 2024-06-13 12:45:08: 2u
- 2024-04-29 07:17:35: 3u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 3u
- 2023-12-07 14:11:59: 3u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u
- 2025-08-27 06:58:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:44:54: 1u
- 2024-07-15 08:47:57: 1u
- 2024-06-13 12:45:08: 3u
- 2024-04-29 07:17:35: 2u
- 2024-03-21 08:33:04: 3u
- 2024-02-05 13:21:58: 1u
- 2023-12-07 14:11:59: 2u
- 2023-11-21 07:37:42: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (9)

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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.5u (30j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.5u (30j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock prédit: 0.4u (28j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -0.4u (-18j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.6u (-42j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:14:50.881Z*
