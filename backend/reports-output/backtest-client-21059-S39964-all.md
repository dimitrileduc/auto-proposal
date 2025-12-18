# Rapport Backtest - Client Chez Lucienne

## Contexte

- **Client** : Chez Lucienne (ID: 21059)
- **Commande réelle** : S39964
- **Date commande** : 2025-10-28 13:40:43
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 25,010 input + 29,661 output = 54,671 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.2% | 21 produits prédits, 16 corrects |
| **Rappel** | 94.1% | 17 produits réels, 16 détectés |
| **F1-Score** | 84.2% | Score équilibré global |

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
| **MAE** | 0.19 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 18.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Pattern temporel**: Cycle bimensuel d'environ 15 à 20 jours avec une préférence pour le milieu de semaine (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une consommation extrêmement régulière et stable de 1 unité par commande. Le nettoyage des données (Étape 1) ne révèle aucun outlier. Sans données N-1 (Étape 2), nous observons une demande de fond constante. La tendance récente (Étape 3) indique un cycle moyen de 17,5 jours. La dernière commande datant du 1er octobre (il y a 26 jours), le client est actuellement en retard sur son cycle habituel de réapprovisionnement. Une commande est donc très probable dans les 30 prochains jours. En suivant la règle de ne prédire que la prochaine commande (Étape 4), la quantité recommandée est de 1 unité, correspondant au volume historique fixe.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel environ tous les 15-20 jours
- **Saisonnalité**: none
- **Tendance**: Légère hausse (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité relative avec un cycle de réapprovisionnement constaté entre 15 et 20 jours. La dernière commande datant du 1er octobre (soit il y a 26 jours), le client a dépassé son délai habituel et une commande de réassort est hautement probable dans les prochains jours. On observe une légère tendance à la hausse sur la dernière commande (2u contre 1u précédemment). En suivant la règle de prédire uniquement la prochaine commande sans cumuler, le volume recommandé est de 2 unités.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (environ 15-20 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite tant en volume (systématiquement 1 unité) qu'en fréquence (moyenne de 17,5 jours entre les commandes). La dernière transaction remontant au 01/10/2025 (il y a 26 jours), le client a dépassé son cycle habituel, ce qui rend une commande d'une unité extrêmement probable dans les 30 prochains jours pour réapprovisionnement.

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
- **Pattern temporel**: Cycle bimensuel irrégulier (15 à 20 jours), principalement le mardi ou mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur la quantité (1u) avec un cycle de commande moyen de 17,5 jours. La dernière commande datant du 1er octobre (soit il y a 26 jours), le client a dépassé son intervalle habituel. Une commande de réapprovisionnement de 1 unité est extrêmement probable dans les prochains jours pour compenser ce retard de cycle. Bien que le cycle court puisse suggérer deux commandes potentielles dans les 30 prochains jours, conformément à la règle de la commande unique, nous ne prédisons que la prochaine unité.

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique long, environ tous les 35-45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive du volume par commande (de 3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande. La dernière commande date du 01/10/2025 (26 jours avant la date actuelle). L'intervalle observé entre les deux dernières commandes était de 35 jours (27/08 au 01/10). En suivant ce cycle, la prochaine commande est estimée autour du 05/11/2025, soit dans la fenêtre des 30 prochains jours. Concernant le volume, bien que la moyenne historique soit plus haute, les deux commandes les plus récentes sont de 1 unité, indiquant une baisse de la demande de fond pour ce produit spécifique. Nous prévoyons donc une commande unique de 1 unité.

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle variable entre 35 et 60 jours, tendance bimestrielle historiquement.
- **Saisonnalité**: weak
- **Tendance**: Baisse du volume par commande (de 2-3u à 1u) sur les deux derniers mois commandés.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, les volumes sont faibles et stables entre 1 et 3u. Étape 2 : Saisonnalité faible, le produit est présent sur toute l'année sans pic marqué. Étape 3 : Tendance à la baisse du volume unitaire par commande, passant de 2-3u en 2024 à 1u sur les commandes d'août et octobre 2025. Étape 4 : La dernière commande date du 01/10/2025 (il y a 26 jours). Avec un cycle récent de 35 jours, la prochaine commande est attendue autour du 5 novembre 2025, soit dans la fenêtre de prédiction. On privilégie un volume de 1u conformément aux commandes les plus récentes.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent d'environ 35 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse de volume (passage de 3u à 1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité aberrante n'a été identifiée, les volumes oscillant de manière stable entre 1 et 3 unités. Étape 2: La saisonnalité est faible ; le produit est commandé de façon répartie sur toute l'année sans pic festif ou estival majeur. Étape 3: L'analyse de la tendance montre une réduction du volume par commande (1u le 01/10 vs 2u le 27/08). L'intervalle moyen entre commandes est de 40 jours. Étape 4: La dernière commande ayant eu lieu le 1er octobre, la prochaine est statistiquement prévue autour du 10 novembre (soit 40 jours plus tard), ce qui se situe à l'intérieur de la fenêtre des 30 prochains jours. Nous préconisons 2 unités pour la prochaine commande unique, se basant sur la moyenne historique ajustée par la tendance récente à la baisse.

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
- **Pattern temporel**: Cycle sporadique variant de 35 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec des volumes stables entre 1 et 3 unités. Il n'y a pas d'outliers ni de saisonnalité marquée. La dernière commande date du 01/10/2025 (1u), précédée d'une commande le 27/08/2025 (1u), soit un intervalle de 35 jours. En appliquant ce cycle de ~35 jours, la prochaine commande est statistiquement attendue autour du 05/11/2025, ce qui se situe dans la fenêtre de prédiction de 30 jours. La quantité recommandée est de 1 unité, en ligne avec la tendance récente.

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
- **Pattern temporel**: Cycle irrégulier avec une récurrence récente constatée tous les 35 jours environ
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très stable de 1 unité par commande. Le client a passé sa dernière commande le 2025-10-01. Sur la période récente, l'intervalle entre les deux dernières commandes était de 35 jours. En projetant ce cycle (dernière commande + 35 jours), la prochaine commande est estimée autour du 5 novembre 2025, ce qui se situe dans la fenêtre des 30 prochains jours. Aucun pic saisonnier significatif n'est observé à cette période de l'année par rapport aux données N-1.

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle récent de 15 à 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u sur la période récente (baisse vs N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilisation de la demande à 1 unité lors des trois dernières commandes (août, septembre, octobre 2025), avec une fréquence de rotation comprise entre 15 et 20 jours. La dernière commande datant du 1er octobre (il y a 26 jours), le client a dépassé son cycle habituel et devrait passer commande de façon imminente dans les prochains jours. Bien que les volumes aient été plus élevés l'année dernière (3u), la tendance actuelle est fermement ancrée à 1 unité par commande.

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inconnu (une seule commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Stable (volume minimal)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 1 unité réalisée le 16/09/2025. Depuis cette date, un intervalle de 41 jours s'est écoulé sans aucun réachat. En l'absence de données historiques (N-1) et de cycle de récurrence identifiable (le client ayant déjà dépassé un cycle mensuel standard de 30 jours), il est impossible de confirmer un besoin régulier. Pour un produit B2B, une unité isolée suggère soit un achat ponctuel, soit un test non transformé, rendant une commande dans les 30 prochains jours peu probable.

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
- **Pattern temporel**: Cycle initial observé de 20 jours, mais actuellement en rupture de rythme (>40 jours depuis la dernière commande)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande, fréquence espacée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint avec seulement deux points de données (27/08 et 16/09), montrant une demande constante de 1 unité. Bien que l'intervalle de 20 jours soit dépassé (41 jours de latence au 27/10), un réapprovisionnement de fond de rayon est probable dans les 30 jours à venir. On conserve la quantité unitaire habituelle sans cumul, conformément à la tendance observée.

</details>


<details>
<summary><strong>13. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, cycle moyen observé entre 40 et 50 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u) sur la période récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation lente. Après une absence prolongée de données entre octobre 2024 et août 2025, le client a repris des commandes régulières (20 jours d'intervalle entre les deux dernières). La dernière commande datant du 16 septembre 2025 (il y a 41 jours), et le cycle historique se situant autour de 45 jours, une commande de réapprovisionnement est fortement probable avant le 26 novembre. Les deux dernières commandes étant de 1 unité, la recommandation se porte sur cette même quantité pour la prochaine commande.

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

**✅ Quantité LLM**: 1u (confidence: high)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [RISH05] RISH kombucha BIO - rose 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:07:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
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

## False Positives (5)

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
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.1u (3j) mais client a commandé 1u |


---

*Rapport généré automatiquement le 2025-12-18T19:59:25.736Z*
