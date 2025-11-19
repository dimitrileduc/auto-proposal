# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S39575
- **Date commande** : 2025-10-09 06:38:48
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 22
- **Tokens**: 20,340 input + 10,065 output = 30,405 total
- **Coût**: $0.0565 (~5.65¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 27 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 60.0% | Score équilibré global |

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
| **MAE** | 0.17 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape :

1. Analyse des intervalles de commande :
- Entre les commandes : environ 10-20 jours d'écart
- Dernier intervalle : 12 jours (2025-09-10 → 2025-10-02)
- Intervalle relativement régulier, suggérant un besoin stable

2. Analyse des quantités :
- Quantités oscillant entre 1 et 2 unités
- Variation normale : 1u, 2u, 2u, 1u, 2u
- Pas de tendance claire à la hausse ou à la baisse
- Variations dans la plage acceptable de ±30%

3. Recommandation conservative :
- Dernière commande : 1u
- Moyenne historique proche de 2u
- Recommandation basée sur la moyenne récente : 2 unités

Recommandation prudente qui s'aligne avec l'historique des commandes et les variations B2B acceptables.

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, entre 10-20 jours. Dernière commande il y a 12 jours. Rythme de commande relativement stable.

**📊 Analyse Quantité:**
Quantités variant entre 1 et 2 unités. Aucune tendance significative de croissance ou de décroissance. Variations considérées comme normales en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [NOD02] NODA limonade bio:

1. Analyse des intervalles entre commandes:
- Entre les commandes, les intervalles sont relativement réguliers
- Moyenne des intervalles : environ 30-45 jours
- Dernier intervalle (08-27 au 10-02) : 36 jours
- Cohérence temporelle indiquant un besoin stable et récurrent

2. Analyse des quantités:
- 3 commandes à 1u
- 1 commande à 2u (probablement un lot exceptionnel)
- Quantité modale/médiane : 1u
- Pas de tendance claire d'augmentation ou de baisse des volumes

3. Recommandation conservatrice:
- Quantité recommandée : 1u
- Alignée sur le comportement historique dominant
- Permet de maintenir un stock minimal sans risque de surstockage
- Respecte la variabilité normale de ±30% en B2B

**📅 Analyse Temporelle:**
Intervalles réguliers, centrés autour de 36-45 jours, suggérant un besoin cyclique stable

**📊 Analyse Quantité:**
Majorité des commandes à 1u, une commande outlier à 2u, pas de tendance significative

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB01] ReBEL chips premium & bio:

1. Analyse des intervalles de commande:
- Période entre commandes: entre 6-16 jours
- Moyenne d'intervalle: environ 10-12 jours
- Pattern: Relativement régulier, sans grande irrégularité significative

2. Analyse des quantités:
- Quantités historiques: 2u, 3u, 4u
- Mode (valeur la plus fréquente): 3 unités
- Variation: Entre 2-4 unités (±33%), ce qui est cohérent avec la tolérance B2B de ±30%
- Pas de tendance claire à la hausse ou à la baisse

3. Recommandation conservative:
- Quantité recommandée: 3 unités
- Basée sur le mode des commandes précédentes
- Alignée avec le comportement historique d'achat
- Prend en compte la variabilité normale du marché B2B

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, centrés autour de 10-12 jours. Aucune variation temporelle significative détectée.

**📊 Analyse Quantité:**
Quantités stables autour de 3 unités, avec variations mineures entre 2-4 unités, conformes aux variations B2B attendues.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit REB08:

1. Analyse temporelle des intervalles:
- Les commandes sont relativement régulières
- Intervalle moyen entre commandes: environ 10-14 jours
- Variation d'intervalle: entre 7 et 17 jours
- Pas de période fixe stricte, mais cohérence relative

2. Analyse des quantités:
- Quantités majoritairement à 2 unités
- Variations entre 1 et 3 unités
- Dernière commande: 2 unités (2025-10-02)
- Pas de tendance haussière ou baissière claire
- Variations considérées comme normales en B2B (+/- 30%)

3. Recommandation conservatrice:
- Quantité recommandée: 2 unités
- Basée sur la moyenne et la dernière commande
- Correspond au comportement historique
- Permet de maintenir un stock stable

**📅 Analyse Temporelle:**
Commandes relativement régulières, intervalle moyen de 10-14 jours, variations acceptables entre 7-17 jours.

**📊 Analyse Quantité:**
Quantités stables autour de 2 unités, variations mineures entre 1-3 unités, considérées comme normales.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes :

1. Analyse des intervalles temporels :
- Intervalles irréguliers entre commandes
- Plage de 7 à 45 jours entre chaque commande
- Pas de périodicité claire, mais commandes relativement fréquentes

2. Analyse des quantités :
- Quantités variables : 1u, 2u, 1u, 2u, 1u
- Moyenne : 1.4 unités par commande
- Variations normales, sans tendance haussière/baissière significative

3. Recommandation conservatrice :
- Dernière commande : 1 unité
- Variation acceptable de ±30%
- Recommandation de 1 unité, avec marge de sécurité
- Quantité stable et cohérente avec l'historique récent

**📅 Analyse Temporelle:**
Commandes espacées de manière irrégulière, sans périodicité stable. Intervalle moyen approximatif de 20-25 jours.

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 2 unités. Pas de tendance claire à l'augmentation ou à la diminution.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB02] ReBEL chips premium & bio - paprika fumé 125g:

1. Analyse temporelle des intervalles:
- Les commandes sont relativement régulières
- Intervalle moyen entre commandes : ~14-15 jours
- Variabilité modérée mais pas excessive
- Dernière commande le 2025-09-22 (17 jours avant la date actuelle)

2. Analyse des quantités:
- Quantités oscillant entre 1 et 3 unités
- Mode (valeur la plus fréquente) : 3 unités
- Moyenne : 2.375 unités
- Variation normale, pas de tendance claire à la hausse/baisse

3. Recommandation conservative:
- Choix de 2 unités comme recommandation
- Correspond à la moyenne historique
- Respecte la marge de ±30% acceptable en B2B
- Tient compte de la dernière commande (2u le 2025-09-22)

**📅 Analyse Temporelle:**
Commandes assez régulières, intervalle moyen 14-15 jours, variabilité modérée

**📊 Analyse Quantité:**
Quantités entre 1-3u, mode à 3u, moyenne à 2.375u, variations normales

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [KOKO02] KOKO Kombucha Lemon Ginger 330ml:

1. Analyse des intervalles temporels:
- Entre 2025-06-10 et 2025-08-04: ~55 jours
- Entre 2025-08-04 et 2025-09-10: ~37 jours
- Intervalles légèrement variables mais relativement proches
- Tendance à des commandes environ tous les 1-2 mois

2. Analyse des quantités:
- Quantité constante à 1 unité à chaque commande
- Aucune variation significative
- Commandes très régulières et stables

3. Recommandation conservative:
- Maintenir la quantité historique de 1 unité
- Variation acceptable de ±30% donnerait une fourchette de 0-2 unités
- Choix de rester à 1 unité pour minimiser le risque de surstock

Conclusion: Recommandation prudente de 1 unité, en cohérence avec l'historique et les principes B2B de gestion des stocks.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais resserrés (37-55 jours), suggérant un rythme semi-régulier

**📊 Analyse Quantité:**
Quantité stable à 1 unité, aucune variation détectée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle des intervalles:
- Entre les commandes: environ 13-15 jours d'intervalle
- Série de commandes relativement régulière et prévisible
- Dernier intervalle: 44 jours (plus long que les précédents)

2. Analyse des quantités:
- Commandes principalement à 1 unité
- Une commande à 2 unités (la plus récente)
- Fluctuation mineure mais acceptable (variation de ±50%)
- Pas de tendance claire d'augmentation ou de diminution

3. Recommandation quantitative:
- La dernière commande était de 2 unités
- En tenant compte de la variabilité normale B2B (±30%)
- Recommandation conservatrice: 2 unités
- Maintien de la dernière quantité commandée

**📅 Analyse Temporelle:**
Intervalles réguliers de 13-15 jours, dernier intervalle plus long (44 jours)

**📊 Analyse Quantité:**
Commandes majoritairement à 1u, dernière commande à 2u. Variations mineures dans la norme.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml :

1. Analyse des intervalles entre commandes :
- Intervalle entre 1ère et 2ème commande : 42 jours
- Intervalle entre 2ème et 3ème commande : 37 jours
- Moyenne des intervalles : environ 40 jours
- Régularité : Quasi-constant, suggère un besoin périodique stable

2. Analyse des quantités :
- Toutes les commandes sont exactement de 1 unité
- Quantité parfaitement stable sans variation
- Aucune tendance à la hausse ou à la baisse n'est détectable

3. Recommandation conservative :
- Compte tenu de la stabilité historique
- En respectant la marge de ±30% en B2B
- Recommandation maintenue à 1 unité
- Prochaine commande estimée autour de mi-novembre 2025

**📅 Analyse Temporelle:**
Intervalles réguliers d'environ 40 jours entre commandes, indiquant un cycle d'approvisionnement stable et prévisible.

**📊 Analyse Quantité:**
Quantité constante de 1 unité par commande, sans variation significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse des intervalles temporels:
- Entre 2025-06-10 et 2025-06-30: 20 jours
- Entre 2025-06-30 et 2025-07-16: 16 jours
- Entre 2025-07-16 et 2025-08-20: 35 jours
Intervalle moyen: ~24 jours (légèrement variable mais cohérent)

2. Analyse des quantités:
- Chaque commande est strictement de 1 unité
- Aucune variation de quantité
- Commandes très régulières et stables

3. Recommandation conservative:
- Compte tenu de l'historique stable
- En respectant la tolérance B2B de ±30%
- Recommandation de 1 unité, alignée sur le pattern historique

Considérations supplémentaires:
- Dernière commande le 2025-08-20
- Temps écoulé depuis: environ 50 jours
- Recommandation maintenue à 1 unité

**📅 Analyse Temporelle:**
Intervalles entre commandes légèrement variables (16-35 jours), moyenne autour de 24 jours. Pas de saisonnalité claire détectée.

**📊 Analyse Quantité:**
Quantité parfaitement stable à 1 unité par commande. Aucune variation ou tendance de croissance/décroissance.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>11. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit JOY03:

1. Analyse temporelle des intervalles:
- Entre 1ère et 2ème commande: 19 jours
- Entre 2ème et 3ème commande: 33 jours
- Intervalle légèrement variable mais proche d'un cycle de ~4-5 semaines
- Pas de pattern strictement régulier, mais cohérent

2. Analyse des quantités:
- 3 commandes consécutives de 1 unité
- Quantité parfaitement stable
- Aucune variation ou tendance à la hausse/baisse
- Correspond à un besoin constant et prédictible

3. Recommandation conservative:
- Maintenir la quantité historique de 1 unité
- Variation acceptable de ±30% suggérerait un intervalle de 0-2 unités
- Choix de rester à 1 unité pour minimiser le risque de sur-stockage

Hypothèse: Client B2B avec besoin régulier et contrôlé de JOY! Organic Apricot Jam.

**📅 Analyse Temporelle:**
Intervalles entre commandes légèrement variables (19-33 jours), suggérant un cycle d'approvisionnement de 4-5 semaines.

**📊 Analyse Quantité:**
Quantité constante de 1 unité sur 3 commandes, indiquant un besoin stable.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (15)

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
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: 1.9u (10j restants) → prédit 3u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Stock prédit: 0.4u (9j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.3u (11j restants) → prédit 1u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.4u (23j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.8u (-53j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: -1.3u (-46j restants) → prédit 2u mais non commandé |


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
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock suffisant: 1.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:54:55.220Z*
