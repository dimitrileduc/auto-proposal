# Rapport Backtest - Client CRF MARKET BEAURAING DEMARS

## Contexte

- **Client** : CRF MARKET BEAURAING DEMARS (ID: 38736)
- **Commande réelle** : S40078
- **Date commande** : 2025-11-04 13:40:54
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 22,762 input + 34,398 output = 57,160 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.2% | 19 produits prédits, 12 corrects |
| **Rappel** | 66.7% | 18 produits réels, 12 détectés |
| **F1-Score** | 64.9% | Score équilibré global |

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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -31.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (12)

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
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD011] LD Organic Kids Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle sporadique identifié avec un intervalle historique court de 23 jours et une moyenne de commande mensuelle en période d'activité.
- **Saisonnalité**: weak
- **Tendance**: Stable à volume faible (moyenne de 2u sur l'historique total)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des commandes irrégulières mais avec un intervalle d'environ 23-30 jours lorsqu'elles surviennent. La dernière commande datant du 08/10/2025 (il y a 26 jours), le cycle habituel suggère qu'une nouvelle commande est attendue durant la fenêtre d'analyse de 30 jours (avant le 03/12/2025). Bien que le dernier volume fût de 1u, l'entrée dans la période de novembre/décembre, traditionnellement favorable à la consommation de sauce cocktail (prélèvements de fin d'année/fêtes), justifie de retenir la moyenne historique de 2u pour la prochaine commande plutôt que le plus bas niveau récent.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, cycle médian d'environ 55 jours (entre 32 et 73 jours)
- **Saisonnalité**: none
- **Tendance**: Stable mais faible (transition de 2u vers 1u constatée)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une fréquence de réapprovisionnement lente et irrégulière. Le cycle moyen est estimé à environ 55 jours. La dernière commande ayant eu lieu le 08/10/2025, la prochaine échéance théorique se situe autour du 02/12/2025, ce qui l'inclut de justesse dans la fenêtre des 30 prochains jours. La tendance récente sur les 3 dernières commandes suggère un volume de 1 unité par commande plutôt que les 2 unités observées début 2024. La faible quantité de données et l'irrégularité des intervalles justifient un niveau de confiance faible.

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier de 29 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité remarquable avec un cycle de commande de 29-30 jours (11 août, 9 septembre, 8 octobre). La dernière commande ayant eu lieu le 8 octobre, la prochaine est prévue aux alentours du 6 ou 7 novembre 2025, ce qui se situe au début de notre fenêtre d'analyse de 30 jours. Bien que la dernière commande ait été de 1u, le volume habituel observé sur les cycles précédents est de 2u. Sans données N-1 pour confirmer une saisonnalité, nous nous basons sur la moyenne haute pour éviter une rupture sur ce produit à rotation lente mais constante.

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande enregistrée)
- **Saisonnalité**: strong
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 1 unité le 08/10/2025. Cependant, comme 26 jours se sont écoulés et que le produit (Tartinade à la truffe) est fortement lié aux périodes festives de fin d'année, il est très probable qu'une commande de réapprovisionnement survienne dans les 30 prochains jours. En l'absence de données de croissance ou de volume plus élevé, on se base sur la quantité unitaire de la dernière commande pour la prochaine occurrence.

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours) observé exclusivement durant la période estivale et pré-hivernale (avril à septembre).
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u durant la période d'activité.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre deux points critiques : 1) En 2024, l'activité sur cette référence s'est arrêtée après le 24 septembre, sans aucune commande jusqu'au printemps suivant. 2) Pour 2025, la dernière commande date du 9 septembre. Si le cycle habituel de ~30 jours était maintenu, une commande aurait dû avoir lieu début octobre. Avec une date actuelle au 3 novembre et un historique N-1 vide pour cette période, il est fortement probable que le produit soit saisonnier ou en arrêt pour l'hiver. Aucun besoin n'est donc anticipé pour les 30 prochains jours.

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 0u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle trimestriel irrégulier (85-90 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande d'environ 3 mois (91 jours puis 83 jours en 2024). La dernière commande ayant eu lieu le 09/09/2025, la prochaine échéance théorique basée sur ce cycle se situerait aux alentours du 05/12/2025. Cette date se trouve juste après la fenêtre d'analyse des 30 prochains jours (se terminant le 03/12/2025). De plus, le produit présente une rotation extrêmement faible et erratique en 2025, rendant une commande en novembre peu probable selon les patterns observés.

</details>


<details>
<summary><strong>7. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques (intervalle de 14 mois constaté entre les deux occurrences)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 3u à 1u) sur un volume très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement pauvre avec seulement deux points de données en 17 mois (juin 2024 et août 2025). Le délai entre ces deux commandes est de 427 jours. La dernière commande (1 unitée) date de 84 jours (environ 3 mois). Rien dans l'historique ne permet de prédire une commande dans les 30 prochains jours, car le produit semble être un 'slow-mover' absolu ou une commande ponctuelle sans récurrence cyclique identifiée. Par mesure de prudence et respect du cycle observé, la prédiction est de 0.

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (faible fréquence, écart de ~12 mois)
- **Saisonnalité**: none
- **Tendance**: Inactif (dernière commande il y a 84 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement sporadique avec seulement deux commandes enregistrées en deux ans (août 2024 et août 2025, soit un intervalle de 12 mois). La dernière commande date d'il y a 84 jours (août 2025). Au vu de ce rythme très lent et de l'absence de toute activité récente au cours des trois derniers mois, il est statistiquement improbable que le client commande ce produit spécifique dans la fenêtre des 30 prochains jours. En l'absence de cycle de réapprovisionnement régulier, la prédiction est fixée à 0.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 09:07:28: 3u
- 2024-07-30 08:36:52: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:00:06: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-10 10:53:09: 1u
- 2024-06-05 12:10:16: 2u
- 2024-04-15 11:51:21: 2u
- 2024-03-14 08:15:53: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 1u
- 2025-08-11 08:24:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:57:13: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-24 13:12:37: 1u
- 2024-04-15 11:51:21: 2u

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 10:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:00:06: 1u
- 2024-07-30 08:36:52: 1u
- 2024-04-30 10:01:21: 2u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-10 10:53:09: 3u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 09:07:28: 2u

**✅ Quantité LLM**: 0u (confidence: low)
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
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: 1.8u (13j restants) → prédit 4u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 1.5u (24j restants) → prédit 3u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Stock prédit: -1.3u (-20j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.2u (-8j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.2u (-7j restants) → prédit 2u mais non commandé |


---

## False Negatives (6)

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
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | LLM avait prédit 0 (pas de besoin) avec stock: 0.1u (7j) mais client a commandé 2u |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.2u (19j) mais client a commandé 1u |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.2u (26j) mais client a commandé 1u |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.3u (-20j) mais client a commandé 1u |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.7u (55j restants > seuil 30j) |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock suffisant: 1.4u (50j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T20:01:12.055Z*
