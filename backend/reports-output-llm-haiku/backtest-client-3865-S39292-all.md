# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39292
- **Date commande** : 2025-09-23 06:18:30
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 23
- **Tokens**: 21,689 input + 10,512 output = 32,201 total
- **Coût**: $0.0594 (~5.94¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.8% | 24 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 33.3% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 53.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (5)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques du produit [JF001] JF MAYONNAI TRUFFES 250ML WECK:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variables
- Période récente (août-septembre): commandes très rapprochées
- Écarts allant de 6 à 15 jours
- Pas de régularité stricte, mais tendance à commander toutes les 1-2 semaines

2. Analyse des quantités:
- Quantités majoritairement autour de 5 unités
- Variation entre 1 et 6 unités
- Moyenne proche de 4-5 unités
- Dernières commandes stabilisées à 5 unités

3. Recommandation quantitative:
- Quantité recommandée conservatrice: 5 unités
- Correspond à la tendance centrale des commandes récentes
- Marge de ±30% acceptable en B2B
- Permet de maintenir un stock minimal sans surstockage

Facteurs de confiance modérée:
- Historique récent relativement stable
- Pas de tendance de croissance ou décroissance nette
- Variations de commandes restent dans une plage acceptable

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers mais rapprochés, entre 6-15 jours. Pas de périodicité stricte mais cadence relativement fréquente.

**📊 Analyse Quantité:**
Quantités centrées autour de 5 unités, avec variations mineures entre 1-6 unités. Stabilité récente des commandes.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JF012] JF SAUCE BEARNAISE 250ML WECK:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variables
- Plus courtes en août (0 jours entre 2 commandes)
- Écarts moyens entre 6-45 jours
- Pas de périodicité stricte mais rythme relativement rapproché

2. Analyse des quantités:
- Quantités fluctuantes: 1u, 2u, 3u (2 fois), 4u, 6u
- Moyenne arithmétique: 3.33u
- Médiane: 3u
- Pas de tendance claire à la hausse ou à la baisse
- Variations considérées comme normales en B2B (+/-30%)

3. Recommandation conservatrice:
- Se base sur la médiane de 3u
- Ajustement léger à 4u pour couvrir la variabilité
- Permet de maintenir un stock tampon sans surstock
- Correspond à l'ordre de grandeur des commandes récentes

**📅 Analyse Temporelle:**
Intervalles irréguliers, de 0 à 45 jours, sans périodicité stable

**📊 Analyse Quantité:**
Quantités variables entre 1 et 6 unités, sans tendance linéaire claire

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit JF SAUCE TARTARE 250ML WECK:

1. Analyse des intervalles temporels:
- Intervalles entre commandes variables: entre 8-16 jours
- Dernier intervalle: 14 jours (entre 2025-08-19 et 2025-09-02)
- Pas de régularité stricte, mais rythme relativement rapproché

2. Analyse des quantités:
- Quantités fluctuantes: 1u, 2u, 3u, 4u
- Moyenne : 2.33 unités
- Dernière commande: 1u (le 2025-09-02)
- Variations normales, cohérentes avec les variations B2B attendues (±30%)

3. Recommandation conservatrice:
- Basée sur la dernière commande (1u) et la moyenne (2.33u)
- Choix d'une quantité stable et prudente
- Recommandation : 2 unités

La recommandation tient compte de la variabilité tout en restant conservatrice.

**📅 Analyse Temporelle:**
Intervalles de commande variables, entre 8-16 jours, sans modèle parfaitement régulier.

**📊 Analyse Quantité:**
Quantités fluctuantes entre 1-4 unités, moyenne à 2.33u, dernière commande à 1u.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JF019] JF SAUCE AIOLI PESTO 250M WECK:

1. Analyse temporelle des intervalles:
- Intervalles irréguliers entre commandes
- Période entre commandes variant de 7 à 46 jours
- Dernière commande le 2025-09-02
- Pas de cycle régulier clairement identifiable

2. Analyse des quantités:
- Quantités variables: 1u et 3u
- Alternance entre 1u et 3u
- Pas de tendance linéaire claire
- Dernière commande à 1u

3. Recommandation conservatrice:
- Moyenne des 3 dernières commandes = (1 + 3 + 3) / 3 = 2 unités
- Prise en compte de la variabilité normale en B2B (±30%)
- Choix d'une quantité prudente basée sur le dernier comportement

La recommandation de 2 unités représente un compromis entre la variabilité observée et un approvisionnement sécurisé.

**📅 Analyse Temporelle:**
Intervalles de commandes non réguliers, variant de 7 à 46 jours. Pas de périodicité claire.

**📊 Analyse Quantité:**
Variations entre 1 et 3 unités. Alternance sans tendance linéaire stable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes du produit JF SAMOURAI SQUEEZE 300ML:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes très variables
- Minimum: 15 jours (entre 2024-09-24 et 2024-09-30)
- Maximum: 4 mois (entre 2024-07-05 et 2024-11-12)
- Pas de périodicité régulière claire
- Dernière commande le 2025-06-23 (3 mois avant la date actuelle)

2. Analyse des quantités:
- Quantités fluctuantes entre 1 et 3 unités
- Moyenne: 1.75 unités par commande
- Pas de tendance haussière ou baissière nette
- Variations considérées comme normales en B2B (±30%)

3. Recommandation conservatrice:
- Se base sur la moyenne des dernières commandes
- Prend en compte la variabilité des commandes
- Recommandation de 2 unités pour minimiser le risque de rupture
- Permet de maintenir un stock tampon sans surinvestissement

**📅 Analyse Temporelle:**
Intervalles entre commandes très variables, aucune périodicité claire. Écart type important, suggérant un approvisionnement opportuniste ou basé sur des besoins ponctuels.

**📊 Analyse Quantité:**
Quantités fluctuantes entre 1 et 3 unités. Moyenne de 1.75 unités. Variations considérées comme normales en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (19)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.9u (-5j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -1.1u (-7j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 3 | Stock prédit: 0.9u (9j restants) → prédit 3u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Stock prédit: -1.5u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -0.5u (-4j restants) → prédit 3u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | Stock prédit: -0.6u (-4j restants) → prédit 4u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Stock prédit: 0.5u (27j restants) → prédit 2u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -1.1u (-31j restants) → prédit 2u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Stock prédit: -0.3u (-23j restants) → prédit 2u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -1.0u (-45j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.2u (29j restants) → prédit 1u mais non commandé |


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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-19T15:55:36.522Z*
