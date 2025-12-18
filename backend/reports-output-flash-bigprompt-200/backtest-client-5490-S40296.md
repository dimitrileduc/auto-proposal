# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 45,918 input + 8,889 output = 54,807 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.8% | 26 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 70.0% | Score équilibré global |

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
| **MAE** | 140.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (14)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 868 | 868 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 341 | 155 | 186.0 | 120.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 310 | 124 | 186.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 186 | 93 | 93.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 217 | 62 | 155.0 | 250.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 28-30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par commande
- **Outliers détectés**: 868u, 104u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence quasi-systématique de 434u (multiple logistique standard). Bien que trois lignes de 434u apparaissent le 07/11/2025, cela correspond probablement à une fragmentation de la commande mensuelle habituelle de novembre. Le cycle de commande est d'environ 4 semaines. Comme la date de prédiction (11/11/2025) est un mardi hors cycle et que le volume de novembre a déjà été commandé le 07/11, la règle 'jour hors cycle' m'impose de prédire la prochaine commande probable. Celle-ci interviendra début décembre avec le volume standard de 434u, qui est la constante observée sur 100% des points non-outliers depuis plus d'un an.

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: medium)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées irrégulières, tendance hebdomadaire émergente le vendredi
- **Saisonnalité**: none
- **Tendance**: Baisse nette vs N-1, stabilisation à 31u par unité de commande
- **Outliers détectés**: 186u, 155u, 124u

**🧠 Raisonnement LLM:**
L'analyse montre une mutation structurelle du compte : en 2024 (N-1), le client passait des commandes massives groupées par 3 ou 4 le même jour (cumulant >300u). Sur la période récente (octobre-novembre 2025), le volume a drastiquement chuté pour se stabiliser sur une logique de réapprovisionnement à l'unité de colisage (multiple de 31u). Le 7 novembre, trois lignes ont été commandées (31, 62, 31), suggérant un besoin ponctuel de 124u réparti. Cependant, la tendance de fond depuis 6 mois privilégie des incréments de 31u. Bien que le mardi soit hors cycle (le client privilégiant le vendredi récemment), selon les règles métier, nous prédisons la prochaine unité de commande probable de 31u pour couvrir le prochain besoin.

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bi-mensuel (environ tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite avec des commandes systématiques de 25 unités. Historiquement (N-1 et Recent), les commandes arrivent majoritairement le jeudi ou vendredi avec un intervalle de 14 jours. La dernière commande groupée a eu lieu le vendredi 07/11 (3 x 25u le même jour, totalisant 75u pour couvrir la période). Bien que la prédiction soit demandée pour un mardi (jour hors cycle), les règles de gestion imposent de ne pas prédire 0 et de se projeter sur la prochaine commande probable. Le volume unitaire par ligne de commande étant invariablement de 25u depuis plus d'un an, cette valeur est la plus probable pour la prochaine occurrence.

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 50u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 50u (confidence: medium)
- 📊 **Baseline N-1**: 50u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative (passage de 25u à 50u+)
- **Outliers détectés**: 225u

**🧠 Raisonnement LLM:**
L'historique montre une cyclicité bimensuelle (19/09, 03/10, 17/10, 31/10). Cependant, la semaine précédant la prédiction (07/11) a enregistré une commande exceptionnellement élevée de 225 unités (50+100+75) le vendredi, remplaçant le créneau habituel du jeudi. Cette commande massive a probablement servi à couvrir les besoins des deux prochaines semaines, incluant le mardi 11/11. En suivant la règle du 'jour hors cycle' et la tendance récente qui a doublé par rapport à N-1 (passant de 25u à une base de 50u), nous prédisons la quantité du prochain cycle normal. Le pic du 07/11 est traité comme un outlier de stockage, la demande de fond stabilisée est estimée à 50u.

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées sur une journée tous les 7 à 14 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 40u par ligne
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité absolue sur la quantité unitaire par ligne de commande (toujours 40u). Bien que le 11 novembre soit un mardi et que le client commande habituellement le jeudi ou le vendredi, les règles de gestion imposent de ne pas prédire 0 et de se projeter sur la prochaine commande probable. Le volume par unité de commande n'a jamais varié depuis 2024, quel que soit le volume total de la journée. Par conséquent, la quantité prédite pour la prochaine occurence est de 40u.

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme hebdomadaire à bi-mensuel avec un multiple fixe de 434u
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par commande unitaire
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'historique montre une constante quasi absolue de 434 unités par ligne de commande, que ce soit en N-1 ou sur la période récente. Le pic de 868u observé le 07/11/2025 est un outlier correspondant exactement à 2x434u, probablement un regroupement de besoins. Bien que la demande porte sur un mardi (jour inhabituel par rapport au jeudi/vendredi dominant), les règles de gestion imposent de prédire la prochaine commande probable. Le volume standard par commande étant de 434u sans tendance haussière ou baissière structurelle, cette valeur est retenue comme la plus probable.

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme hebdomadaire, principalement le jeudi ou le vendredi, avec des volumes constants par multiples de 434u
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par unité de commande
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite sur la quantité de base (434 unités), qui correspond probablement à une palette ou un format logistique standard. Bien qu'un pic de 868u (2 doses de 434u) ait été observé le 7 novembre, les commandes précédentes et les données N-1 confirment que 434u est la quantité nominale récurrente. Le client commande généralement en fin de semaine (jeudi/vendredi), mais conformément aux règles de gestion des jours hors cycle, nous prédisons le volume de la prochaine commande probable. Aucune tendance à la hausse ou à la baisse n'est notée, la stabilité à 434u est la plus probable.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel à hebdomadaire (cycles de 14 à 21 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 434u
- **Outliers détectés**: 1302u

**🧠 Raisonnement LLM:**
L'historique montre une constance remarquable de la quantité unitaire à 434u sur deux ans (N-1 et période actuelle). Le volume de 1302u constaté le 7 novembre 2025 correspond exactement à 3 x 434u (probablement un regroupement de plusieurs lignes de commande le même jour). Bien que la date demandée soit un mardi, contrairement au cycle habituel de fin de semaine (jeudi/vendredi), la règle métier stipule de prédire la prochaine commande probable. Comme le produit est extrêmement stable autour du multiple de 434, et qu'il n'y a pas de tendance à la hausse ou à la baisse, la quantité recommandée est de 434u.

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 868u vs Médiane: 868u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 868u (confidence: high)
- 📊 **Baseline N-1**: 868u
- 📊 **Médiane**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse structurelle (passage de 434u à 868u par session)
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'historique montre une régularité bi-mensuelle très stricte. En 2024, le client commandait systématiquement 434u (multiple de couche palette) tous les 14 jours. En octobre/novembre 2025, le volume a doublé pour atteindre 868u (cumul de plusieurs lignes le même jour). La dernière commande a eu lieu le vendredi 7 novembre (2170u au total ce jour-là via 3 lignes, mais la structure unitaire par commande de base reste 868u ou 434u). Bien que la prédiction soit demandée pour un mardi, selon les règles de gestion hors cycle, nous prédisons le volume de la prochaine session probable. La tendance récente indique un palier stabilisé à 868u par cycle.

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 341u vs Médiane: 93u (Réel: 155u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 341u (confidence: high)
- 📊 **Baseline N-1**: 341u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 186u (120.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire le jeudi/vendredi
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 124u/semaine à 341u/semaine)
- **Outliers détectés**: 186u

**🧠 Raisonnement LLM:**
L'analyse montre une structure de commande par blocs hebdomadaires concentrés sur une seule journée (souvent scindée en plusieurs lignes de saisie). En 2024, le volume hebdomadaire était stable autour de 186u (ex: 31+62+62+31 le 03/10). Fin octobre 2025, le volume est passé à 124u (93+31), puis a fortement augmenté le 07/11 pour atteindre un cumul de 341u (93+186+62). Bien que la date de prédiction soit un mardi, le cycle client est hebdomadaire. La valeur 186 du 07/11 est traitée ici comme une accélération de la demande plutôt qu'un outlier d'erreur car elle s'inscrit dans un flux logistique cohérent. Je prévois le maintien du volume constaté lors de la dernière occurrence (341u) pour le prochain cycle.

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 310u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 310u (confidence: high)
- 📊 **Baseline N-1**: 310u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 186u (150.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (7 jours) avec groupement de multiples bons de commande
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +141%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité hebdomadaire stricte (cycle de 7 jours entre le 30/10 et le 07/11). Le volume total par cycle a explosé par rapport à l'année précédente : en 2024, le volume cumulé par session était de 124u (4x31u), tandis qu'en 2025, il est passé à 217u le 30/10 (93+124) puis à 310u le 07/11 (93+124+93). La date de prédiction (mardi 11/11) tombant avant le jour habituel (jeudi/vendredi), je prédis le volume de la prochaine session probable. La tendance étant clairement haussière et stabilisée sur des multiples de 31u, je retiens le dernier palier observé de 310u pour la commande à venir.

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 186u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 186u (confidence: high)
- 📊 **Baseline N-1**: 186u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 93u (100.0%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Quinzomadaire (tous les 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse récente (186u cumulés sur le dernier cycle)
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'analyse des cycles montre que le client commande par blocs bi-mensuels (tous les 14 jours environ). En 2024, le cycle était le jeudi. En 2025, le dernier mouvement a eu lieu le vendredi 07/11 (cumul de 186u : 31 + 93 + 62). La date de prédiction (mardi 11/11) tombe juste après ce pic de commande et avant le prochain cycle prévu. Selon les guidelines, comme le mardi est hors cycle, nous prédisons le volume de la prochaine commande attendue. Le volume de fond s'est stabilisé à 186u par cycle récemment (supérieur aux 62-93u de 2024), reflétant une croissance du besoin sur ce produit. L'outlier de 155u en 2024 est ignoré au profit de la structure actuelle de commandes groupées.

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 217u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 217u (confidence: medium)
- 📊 **Baseline N-1**: 217u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 155u (250.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (jeudi ou vendredi)
- **Saisonnalité**: none
- **Tendance**: Hausse significative (passage de 62u à 217u/semaine)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux sessions de commande groupées : le jeudi 30/10 (total 62u) et le vendredi 07/11 (total 217u distribué sur 3 bons). On observe une tendance à la hausse très marquée entre ces deux semaines. La date de prédiction étant un mardi (hors cycle), j'anticipe le volume de la prochaine commande hebdomadaire prévue le jeudi/vendredi suivant. Sans preuve de pic ponctuel, la dernière valeur totale de 217u est retenue comme la nouvelle base de référence pour ce client.

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14-15 jours) le jeudi ou vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à 40u (multiple fixe)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une constance absolue sur la quantité (toujours 40 unités), suggérant un conditionnement logistique fixe ou un contrat de réapprovisionnement stable. Le client commande généralement tous les 14 jours (bi-mensuel). Les dernières commandes ont eu lieu le vendredi 7 novembre (2x40u, probablement un fractionnement de commande). La date cible du mardi 11 novembre est trop proche de la commande du 7 novembre pour correspondre au rythme de 14 jours, mais selon les guidelines B2B, nous devons prédire la quantité de la prochaine commande probable plutôt que 0. Étant donné la stabilité parfaite du volume (40u) sur plus d'un an, cette valeur est reconduite.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 434u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-02 06:43:53: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:31: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-08-09 05:43:38: 104u
- 2024-08-09 05:43:13: 104u
- 2024-08-09 05:42:53: 104u
- 2024-07-03 06:05:40: 434u
- 2024-07-03 06:04:58: 868u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**✅ Quantité LLM**: 31u (confidence: medium)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**✅ Quantité LLM**: 50u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 1302u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:46: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**✅ Quantité LLM**: 868u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 341u (confidence: high)
**📊 Quantité Réelle**: 155u

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 310u (confidence: high)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**✅ Quantité LLM**: 186u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 217u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (12)

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: 335.7u (10j restants) → prédit 434u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: 354.7u (13j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: 185.3u (8j restants) → prédit 248u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 2077 | Stock prédit: 537.4u (14j restants) → prédit 2077u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 210 | Stock prédit: -579.6u (-15j restants) → prédit 210u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 220 | Stock prédit: -568.1u (-14j restants) → prédit 220u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: -274.7u (-22j restants) → prédit 25u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-39j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1433 | Stock prédit: -5125.0u (-42j restants) → prédit 1433u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 624 | Stock prédit: -2150.0u (-40j restants) → prédit 624u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 314 | Stock prédit: -1084.0u (-40j restants) → prédit 314u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 177 | Stock prédit: -611.0u (-40j restants) → prédit 177u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:12:08.035Z*
