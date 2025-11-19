# Rapport Backtest - Client CENSE DU MAYEUR

## Contexte

- **Client** : CENSE DU MAYEUR (ID: 38718)
- **Commande réelle** : S39652
- **Date commande** : 2025-10-09 11:32:03
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 36
- **Tokens**: 32,405 input + 16,471 output = 48,876 total
- **Coût**: $0.0918 (~9.18¢)
- **Coût par produit LLM**: $0.0026


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
| **MAE** | 0.58 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 47.9% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (19 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [JF001] JF MAYONNAI TRUFFES 250ML WECK :

1. Analyse des intervalles entre commandes :
- Intervalle entre 1ère et 2ème commande : 43 jours
- Intervalle entre 2ème et 3ème commande : 44 jours
L'intervalle est quasi-constant, suggérant un cycle de réapprovisionnement régulier.

2. Analyse des quantités :
- Commandes : 2u, 3u, 2u
- Variation minime (2-3 unités)
- Moyenne : 2.33 unités
- Écart-type faible, indiquant une demande stable
- Variations dans la plage normale de ±30%

3. Recommandation quantitative :
- Quantité de base : 2 unités
- Légère flexibilité pour absorber variations mineures
- Approche conservative privilégiée
- Pas de signes de croissance significative de la demande

Recommandation finale : 2 unités pour la prochaine commande.

**📅 Analyse Temporelle:**
Intervalles de commande très réguliers (43-44 jours), indiquant un cycle de réapprovisionnement stable et prévisible.

**📊 Analyse Quantité:**
Quantités stables autour de 2-3 unités, avec une moyenne de 2,33. Variations mineures considérées comme normales en B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes:

1. Analyse temporelle des commandes:
- Intervalles entre commandes: 
  * 2025-08-05 → 2025-08-19 : 14 jours
  * 2025-08-19 → 2025-09-17 : 29 jours
- Les intervalles sont légèrement irréguliers mais restent dans une plage acceptable (2-4 semaines)

2. Analyse des quantités:
- Historique des quantités : 4u, 2u, 2u
- Tendance à la baisse des quantités (de 4u à 2u)
- Dernières deux commandes stables à 2 unités

3. Recommandation conservative:
- Basée sur les deux dernières commandes identiques (2u)
- Variation acceptable de ±30% = [1, 3] unités
- Recommandation finale : 2 unités

**📅 Analyse Temporelle:**
Intervalles de commandes légèrement variables (14-29 jours), sans pattern régulier strict mais restant cohérents

**📊 Analyse Quantité:**
Quantités passant de 4u à 2u, stabilisation récente autour de 2 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques du produit [JF015] JF SAUCE ANDALOUSE 250ML WECK :

1. Analyse temporelle des intervalles :
- Entre 2025-06-25 et 2025-08-05 : 41 jours
- Entre 2025-08-05 et 2025-08-19 : 14 jours
- Entre 2025-08-19 et 2025-09-17 : 29 jours
Les intervalles sont relativement variables (14-41 jours), pas totalement réguliers mais avec une certaine périodicité.

2. Analyse des quantités :
- Quantités : 2u, 3u, 2u, 2u
- Moyenne : 2.25 unités
- Variation stable autour de 2-3 unités
- Dernière commande à 2u, avant-dernière à 3u
- Variation dans la plage normale de ±30%

3. Recommandation conservatrice :
- Se base sur la moyenne et la dernière commande
- Arrondi à 3 unités pour couvrir les besoins
- Prend en compte une légère marge de sécurité

**📅 Analyse Temporelle:**
Intervalles entre commandes variables (14-41 jours), tendance à un rythme d'environ 3-4 semaines

**📊 Analyse Quantité:**
Quantités stables entre 2-3 unités, moyenne de 2.25u, variations normales en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit JF SAUCE BEARNAISE 250ML WECK:

1. Analyse des intervalles entre commandes:
   - Entre la 1ère et 2ème commande: 42 jours
   - Entre la 2ème et 3ème commande: 51 jours
   - Variation d'environ 9 jours, ce qui suggère un intervalle relativement régulier
   - Moyenne d'intervalle: ~46-47 jours

2. Analyse des quantités:
   - Commande 1: 1 unité
   - Commande 2: 2 unités
   - Commande 3: 2 unités
   - Tendance à la stabilisation autour de 2 unités
   - Variation dans l'acceptable (+/-30%)

3. Recommandation de quantité:
   - Dernières commandes stabilisées à 2 unités
   - Choix conservateur de 2 unités pour la prochaine commande
   - Aligné avec l'historique récent et la variation normale en B2B

**📅 Analyse Temporelle:**
Intervalles de commande relativement réguliers, autour de 46-47 jours, avec une légère variation acceptable de 9 jours.

**📊 Analyse Quantité:**
Quantités passant de 1 à 2 unités, puis stabilisées à 2 unités. Variation cohérente et dans les limites normales.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape des commandes historiques:

1. Analyse des intervalles temporels:
- Entre première et deuxième commande: 43 jours
- Entre deuxième et troisième commande: 44 jours
- Intervalle quasi-constant, suggère un cycle de réapprovisionnement régulier d'environ 1.5 mois

2. Analyse des quantités:
- Progression: 1u → 2u → 2u
- Stabilisation récente à 2 unités
- Variation normale dans la plage B2B de ±30%

3. Recommandation conservative:
- Dernières 2 commandes à 2 unités
- Choix de maintenir le niveau de 2 unités
- Quantité suffisante pour couvrir les besoins sans surinvestissement

**📅 Analyse Temporelle:**
Intervalles réguliers de ~44 jours entre commandes, indiquant un cycle de réapprovisionnement stable

**📊 Analyse Quantité:**
Stabilisation à 2 unités, avec une croissance initiale de 1 à 2 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes du produit [JF020] JF SAUCE AIOLI 250ML WECK:

1. Analyse temporelle des intervalles:
- Entre 2025-06-18 et 2025-06-25 : 7 jours
- Entre 2025-06-25 et 2025-08-05 : 41 jours
- Entre 2025-08-05 et 2025-09-17 : 43 jours
- Dernière commande le 2025-09-17

Les intervalles montrent une certaine variabilité mais restent dans une plage relativement cohérente (entre 7 et 43 jours). On peut considérer le rythme comme semi-régulier.

2. Analyse des quantités:
- Commandes : 1u, 2u, 2u, 2u
- Tendance claire vers 2 unités comme quantité standard
- Dernières 3 commandes consécutives à 2 unités
- Variation marginale de 1u à 2u, considérée comme normale

3. Recommandation conservatrice:
- Quantité recommandée : 2 unités
- Justification : Alignement avec le pattern dominant des commandes récentes
- Marge de sécurité respectée (variations B2B de ±30%)

Probabilité de précision élevée basée sur l'historique stable.

**📅 Analyse Temporelle:**
Intervalles variables mais cohérents, entre 7 et 43 jours, tendance à des commandes tous les 1-2 mois.

**📊 Analyse Quantité:**
Stabilisation autour de 2 unités, avec une légère variation initiale de 1u à 2u.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>7. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 6u vs Médiane: undefinedu (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JF057] JF EGG MAYONNAISE 720ML WECK:

1. Analyse temporelle des intervalles:
- Entre la 1ère et 2ème commande: 15 jours
- Entre la 2ème et 3ème commande: 44 jours
- Intervalle irrégulier, mais tendance à des commandes tous les 15-45 jours

2. Analyse des quantités:
- Progression: 4u → 5u → 6u
- Légère tendance à l'augmentation (+1u à chaque commande)
- Variations dans la plage acceptable de ±30%

3. Recommandation:
- Dernière commande: 6 unités
- Choix conservateur de reconduire la dernière quantité commandée
- Aligné avec la tendance d'augmentation progressive
- Prend en compte la variabilité normale en B2B

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers (15-44 jours), suggérant une demande variable mais pas chaotique

**📊 Analyse Quantité:**
Progression linéaire de 4 à 6 unités, avec une augmentation constante de +1 unité

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>8. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [BUD04] BUDDY Organic Energy Drink:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  2025-06-25 → 2025-08-05 : 41 jours
  2025-08-05 → 2025-08-19 : 14 jours
  2025-08-19 → 2025-09-17 : 29 jours
- Variation significative des intervalles, mais globalement entre 14-41 jours
- Pas de périodicité stricte, mais commandes relativement rapprochées

2. Analyse des quantités:
- Quantités historiques: 3u, 2u, 2u, 2u
- Tendance à la stabilisation autour de 2 unités
- Dernière commande légèrement plus élevée (3u), mais tendance générale à 2u
- Variations dans une plage acceptable (±30%)

3. Recommandation quantitative:
- Quantité recommandée conservatrice: 2 unités
- Basée sur la majorité des commandes précédentes
- Prend en compte la variabilité normale en B2B
- Permet de maintenir un stock de sécurité sans surstock

**📅 Analyse Temporelle:**
Intervalles variables mais rapprochés (14-41 jours), sans périodicité stricte. Commandes fréquentes suggérant un besoin régulier.

**📊 Analyse Quantité:**
Quantités stables autour de 2u, avec une légère variation ponctuelle à 3u. Variation dans la norme acceptable de ±30%.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques du produit [BUD03] BUDDY boisson énergétique biologique:

1. Analyse temporelle des intervalles:
- Entre la dernière commande (2025-09-17) et l'avant-dernière (2025-08-19): 29 jours
- Entre 08-19 et 08-05: 14 jours
- Entre 08-05 et 06-25: 41 jours
Les intervalles sont relativement variables mais montrent une fréquence de commande approximativement mensuelle.

2. Analyse des quantités:
- Variation entre 1u et 3u
- Moyenne des quantités: 2 unités
- Pas de croissance ou décroissance linéaire claire
- Variations dans la plage normale B2B (±30%)

3. Recommandation conservative:
- Basée sur la moyenne historique
- Prenant en compte la variabilité des commandes
- Quantité recommandée: 2 unités

La recommandation de 2 unités représente un équilibre entre les commandes précédentes et les besoins probables.

**📅 Analyse Temporelle:**
Intervalles de commande variables mais globalement mensuels, entre 14 et 41 jours d'écart.

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 3 unités, moyenne de 2 unités, variations considérées comme normales en B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [BUD02] BUDDY Organic Energy Drink:

1. Analyse temporelle des intervalles:
- Entre 2025-08-05 et 2025-08-19: 14 jours (2 semaines)
- Entre 2025-08-19 et 2025-09-17: 29 jours (environ 1 mois)
- Dernière commande à 2025-09-17, actuelle date 2025-10-09
- Intervalle légèrement irrégulier mais avec une certaine périodicité autour de 2-4 semaines

2. Analyse des quantités:
- Commandes: 2u, 1u, 2u
- Variation entre 1-2 unités
- Moyenne proche de 1.67 unités
- Pas de tendance claire à la hausse ou à la baisse
- Variations considérées comme normales (dans la fourchette B2B de ±30%)

3. Recommandation conservative:
- Prendre la quantité la plus récurrente: 2 unités
- Confirme la tendance centrale de l'historique
- Permet de maintenir un stock minimal sans sur-stockage

**📅 Analyse Temporelle:**
Intervalles entre commandes légèrement variables (14-29 jours), suggérant un approvisionnement semi-régulier avec flexibilité

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités, moyenne de 1.67u, variations normales en contexte B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape :

1. Intervalles entre commandes :
- Entre 2025-06-25 et 2025-08-05 : environ 41 jours
- Entre 2025-08-05 et 2025-09-17 : environ 43 jours
→ Intervalle TRÈS RÉGULIER (42-43 jours), suggérant un cycle d'approvisionnement stable.

2. Analyse des quantités :
- 1u → 2u → 2u
- Progression : légère augmentation initiale, puis stabilisation à 2 unités
- Variation dans la plage acceptable de ±30%
- Dernière commande : 2 unités (tendance récente)

3. Recommandation :
- Quantité recommandée : 2 unités
- Basée sur la dernière commande et la stabilité du pattern
- Approche conservative qui respecte le comportement d'achat historique
- Confiance moyenne car historique court mais régulier

**📅 Analyse Temporelle:**
Cycle d'approvisionnement très régulier : ~42-43 jours entre chaque commande. Prochaine commande théorique autour du 2025-10-29.

**📊 Analyse Quantité:**
Stabilisation à 2 unités, avec une légère augmentation initiale de 1 à 2 unités. Variation dans les limites acceptables.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>12. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour [REB02] ReBEL chips premium & bio - paprika fumé 125g:

1. Analyse des intervalles de commande:
- Entre la première et dernière commande: ~2 mois
- Intervalles irréguliers mais relativement rapprochés
   * 2025-06-25 → 2025-08-05 : ~42 jours
   * 2025-08-05 → 2025-08-19 : ~14 jours
   * 2025-08-19 → 2025-09-17 : ~29 jours
Conclusion: Commandes assez fréquentes mais pas à intervalle fixe

2. Analyse des quantités:
- Variations entre 1u et 2u
- Pas de croissance linéaire claire
- Dernière commande à 2u
- Variation dans la plage normale (+/- 30%)

3. Recommandation:
- Quantité conservatrice basée sur l'historique récent
- Privilégier la dernière quantité commandée (2u)
- Prendre en compte la variabilité modérée des commandes

**📅 Analyse Temporelle:**
Commandes tous les 14-42 jours, fréquence irrégulière mais soutenue

**📊 Analyse Quantité:**
Quantités oscillant entre 1u et 2u, dernière commande à 2u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [REB04] ReBEL chips premium & bio - thym/romarin 125g:

1. Analyse temporelle des intervalles:
- Entre la 1ère et 2ème commande: 13 jours
- Entre la 2ème et 3ème commande: 14 jours
- Entre la 3ème et 4ème commande: 45 jours
Les intervalles sont légèrement variables mais restent dans une plage acceptable. On observe une certaine irrégularité mais pas de disruption complète.

2. Analyse des quantités:
- Alternance entre 1u et 2u
- Variation de ±1u autour d'une moyenne de 1.5u
- Dans la marge de variation normale de ±30% pour un contexte B2B
- Pas de tendance linéaire claire à la hausse ou à la baisse

3. Recommandation quantitative:
- Moyenne historique: 1.5u
- Dernière commande: 2u
- Recommandation conservative: 2u pour maintenir le niveau récent
- Prend en compte les variations possibles du marché
- Permet de constituer un stock de sécurité minimal

**📅 Analyse Temporelle:**
Intervalles entre commandes variables (13-45 jours), légère irrégularité détectée mais pas de rupture significative.

**📊 Analyse Quantité:**
Quantités oscillant entre 1u et 2u, variation normale, moyenne de 1.5u.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>14. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [RIT02] RITCHIE Citron - Framboise - verre 275ml:

1. Analyse temporelle des intervalles:
- Entre 1ère et 2ème commande: 43 jours
- Entre 2ème et 3ème commande: 44 jours
- Intervalle quasi-constant, suggérant un comportement d'achat régulier

2. Analyse des quantités:
- Commandes: 1u, 2u, 2u
- On observe une légère stabilisation autour de 2 unités
- Première commande à 1u peut être considérée comme un test initial
- Les deux dernières commandes confirment une tendance à 2 unités

3. Recommandation conservatrice:
- Basée sur les deux dernières commandes
- Variation normale en B2B (±30%) suggère un intervalle entre 1-3 unités
- Recommandation prudente de 2 unités

**📅 Analyse Temporelle:**
Intervalles réguliers autour de 43-44 jours entre commandes, indiquant un comportement d'achat stable et prévisible.

**📊 Analyse Quantité:**
Stabilisation des quantités autour de 2 unités, avec une première commande de test à 1 unité.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>15. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [RIT05] RITCHIE Cola - verre 275ml :

1. Analyse temporelle des intervalles entre commandes :
- Entre la 1ère et 2ème commande : 43 jours
- Entre la 2ème et 3ème commande : 44 jours
⇒ Intervalle quasi constant et régulier (environ 6-7 semaines)

2. Analyse des quantités :
- Commandes : 3u, 2u, 2u
- Variation légère mais cohérente
- Dernière commande à 3u (tendance potentielle à la hausse)
- Dans la fourchette de variation normale B2B (±30%)

3. Recommandation quantitative :
- Moyenne des dernières commandes : 2.33u
- Recommandation conservatrice : 3u (alignée sur la dernière commande)
- Prend en compte la stabilité et la légère tendance haussière

**📅 Analyse Temporelle:**
Intervalles réguliers de 43-44 jours entre commandes, suggérant un cycle d'approvisionnement stable

**📊 Analyse Quantité:**
Quantités entre 2-3 unités, variation normale sans écart significatif

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>16. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [NOD04] NODA limonade bio:

1. Analyse temporelle des intervalles:
- Entre les dernières commandes, les intervalles varient de 42 à 72 jours
- Pas d'intervalle parfaitement régulier, mais une certaine périodicité de 1-2 mois
- Suggère un besoin récurrent mais flexible

2. Analyse des quantités:
- Progression de 1u → 1u → 2u → 2u
- Tendance légère à l'augmentation des volumes
- Variations dans une plage acceptable (+/- 30%)
- Dernières deux commandes stabilisées à 2 unités

3. Recommandation conservatrice:
- Basée sur les deux dernières commandes (2u)
- Prend en compte la légère tendance à la hausse
- Reste dans la variation normale B2B de ±30%

**📅 Analyse Temporelle:**
Intervalles entre commandes variables: 42-72 jours, suggérant un besoin récurrent mais non strictement périodique

**📊 Analyse Quantité:**
Quantités passant de 1u à 2u, montrant une légère tendance à la hausse des volumes

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>17. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour le produit NODA limonade bio:

1. Analyse temporelle des commandes:
- Intervalles entre commandes relativement réguliers
- Écarts moyens: 
  * Entre août et juin: ~2 mois
  * Entre juin et mai: ~1.5 mois 
- Dernier achat le 5 août 2025
- Tendance à commander tous les 1-2 mois

2. Analyse des quantités:
- Quantités stables: 1-2 unités par commande
- Progression légère de 1u à 2u ces derniers mois
- Dernières 3 commandes à 2 unités

3. Recommandation conservatrice:
- Maintenir la dernière quantité commandée
- Prendre en compte les variations B2B de ±30%
- Quantité recommandée: 2 unités

La recommandation de 2 unités reflète la stabilité des commandes récentes et reste dans un intervalle de variation normale.

**📅 Analyse Temporelle:**
Commandes espacées de 1-2 mois, avec une régularité modérée. Dernier achat le 5 août 2025, suggérant un prochain achat potentiel courant octobre.

**📊 Analyse Quantité:**
Quantités passant de 1 à 2 unités, stabilisation récente à 2 unités. Variation cohérente avec les pratiques B2B standards.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>18. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit JOY08:

1. Analyse temporelle des intervalles:
- Entre 2025-01-08 et 2025-03-11: ~2 mois
- Entre 2025-03-11 et 2025-05-16: ~2 mois
- Entre 2025-05-16 et 2025-06-18: ~1 mois
Intervalle relativement régulier autour de 1-2 mois, montrant une certaine cyclicité.

2. Analyse des quantités:
- Quantités: 3u, 3u, 2u, 2u
- Légère tendance à la baisse, mais variations minimes
- Écart maximal de ±1u, ce qui est dans la norme des variations B2B

3. Recommandation:
- Dernière commande: 2 unités
- Moyenne historique: ~2.5 unités
- En tenant compte de la marge de ±30%: 2 unités est une recommandation conservative
- Recommandation alignée avec la dernière commande et la tendance observée

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement réguliers, autour de 1-2 mois. Cyclicité stable détectée.

**📊 Analyse Quantité:**
Quantités stables avec légère tendance à la baisse. Variations mineures (-1/+1u) considérées comme normales en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>19. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le RITCHIE Cola ZERO - verre 275ml:

1. Analyse des intervalles entre commandes:
- Entre 2025-04-22 et 2025-05-05 : 13 jours
- Entre 2025-05-05 et 2025-06-18 : 44 jours
Les intervalles sont irréguliers, ce qui suggère une demande variable.

2. Analyse des quantités:
- Progression des commandes : 1u → 1u → 2u
- Légère tendance à l'augmentation des volumes
- Dernière commande à 2 unités semble être le point de référence actuel

3. Recommandation conservative:
- Basée sur la dernière commande (2u)
- Prise en compte de la variation normale de ±30%
- Recommandation finale : 2 unités
- Confiance moyenne due à l'irrégularité des commandes précédentes

**📅 Analyse Temporelle:**
Intervalles de commande variables: 13 jours puis 44 jours. Pas de périodicité claire.

**📊 Analyse Quantité:**
Commandes de 1u puis 2u, montrant une légère tendance à la hausse du volume.

**📈 Tendance détectée:** ❌ Non

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.1u (23j restants) → prédit 2u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 0.8u (14j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 1.0u (21j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Stock prédit: -0.3u (-5j restants) → prédit 1u mais non commandé |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.0u (24j restants) → prédit 3u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: 0.1u (2j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JF021] JF PICKLES 350 ML | 4 | Stock prédit: -1.3u (-19j restants) → prédit 4u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: -1.6u (-21j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: -0.8u (-12j restants) → prédit 3u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Stock prédit: -1.3u (-36j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Stock prédit: -1.5u (-44j restants) → prédit 2u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | Stock prédit: -0.5u (-21j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:57:11.841Z*
