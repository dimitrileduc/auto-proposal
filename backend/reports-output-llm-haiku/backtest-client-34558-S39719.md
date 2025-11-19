# Rapport Backtest - Client Oufticoop SC

## Contexte

- **Client** : Oufticoop SC (ID: 34558)
- **Commande réelle** : S39719
- **Date commande** : 2025-10-14 10:33:03
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 20
- **Tokens**: 18,420 input + 9,086 output = 27,506 total
- **Coût**: $0.0511 (~5.11¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.2% | 23 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 78.9% | Score équilibré global |

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
| **MAE** | 1.13 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 56.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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

## True Positives (15)

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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 4 | 1 | 3.0 | 300.0% | ✅ partial | 🤖 LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes pour le produit RISH kombucha BIO:

1. Analyse des intervalles entre commandes:
- Intervalles entre commandes: 
  * 2025-09-10 → 2025-08-20 : 21 jours
  * 2025-08-20 → 2025-08-08 : 12 jours
  * 2025-08-08 → 2025-07-22 : 17 jours
  * 2025-07-22 → 2025-07-04 : 18 jours
- Les intervalles sont relativement irréguliers mais se situent entre 12 et 21 jours
- Tendance à une fréquence de commande environ tous les 15-20 jours

2. Analyse des quantités:
- Progression des quantités : 1u → 1u → 2u → 4u
- Tendance à l'augmentation progressive des volumes
- Dernière commande à 4 unités semble être le point le plus récent

3. Recommandation conservative:
- Basée sur la dernière commande (4 unités)
- Prise en compte de la variation normale de ±30%
- Recommandation : 4 unités (maintien du dernier volume commandé)

Facteurs de décision:
- Stabilité récente des commandes
- Dernière commande à 4 unités
- Variation B2B standard respectée

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers mais concentrés autour de 15-20 jours. Fréquence de commande relativement constante.

**📊 Analyse Quantité:**
Progression des quantités de 1u à 4u, avec augmentation progressive et stabilisation récente à 4 unités.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [RISH03] RISH kombucha BIO - gingembre 330ml :

1. Analyse des intervalles entre commandes :
- Intervalle moyen : environ 15-16 jours
- Variation des intervalles : entre 12 et 20 jours
- Pattern : Relativement régulier, suggérant un besoin constant

2. Analyse des quantités :
- Quantités : 1u (4 fois), 2u (1 fois)
- Variation : Principalement 1u, avec une commande de 2u
- Moyenne : 1.2 unités par commande
- Écart-type faible, indiquant une stabilité des commandes

3. Recommandation conservative :
- Basée sur l'historique récent
- Privilégier la quantité la plus fréquente : 1 unité
- Marge de ±30% acceptable en B2B
- Quantité recommandée : 1u (stable et conservatrice)

Facteurs additionnels :
- Aucune tendance claire à l'augmentation
- Commandes régulières suggèrent un besoin constant

**📅 Analyse Temporelle:**
Intervalles de commande relativement constants, centrés autour de 15-16 jours. Variation acceptable entre 12-20 jours, indiquant un comportement d'achat stable.

**📊 Analyse Quantité:**
Quantités principalement à 1u, avec une seule commande à 2u. Distribution stable autour de 1.2u en moyenne. Pas de tendance significative à l'augmentation ou à la diminution.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commande pour le produit REB08:

1. Analyse temporelle des intervalles:
- Entre 2025-07-22 et 2025-08-20: 29 jours
- Entre 2025-08-20 et 2025-09-10: 21 jours
- Intervalle moyen: environ 25 jours
- La régularité est très stable, indiquant un besoin récurrent prévisible

2. Analyse des quantités:
- 3 commandes consécutives à 4 unités exactement
- Aucune variation, quantité parfaitement constante
- Pas de tendance à la hausse ou à la baisse
- Variation = 0%, bien en dessous du seuil B2B de ±30%

3. Recommandation quantitative:
- Reconduction stricte de la dernière commande
- Quantité conservatrice: 4 unités
- Haute confiance due à l'historique ultra-stable
- Pas de signaux d'ajustement nécessaire

**📅 Analyse Temporelle:**
Intervalles très réguliers, autour de 25 jours entre chaque commande. Cycle d'approvisionnement stable et prévisible.

**📊 Analyse Quantité:**
Quantité constante à 4 unités, aucune variation détectable. Commandes parfaitement uniformes.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g:

1. Analyse des intervalles entre commandes:
- Entre 2025-09-10 et 2025-08-08 : 33 jours
- Entre 2025-08-08 et 2025-07-22 : 17 jours
- Entre 2025-07-22 et 2025-07-04 : 18 jours
Les intervalles sont relativement variables mais restent dans une plage de 2-4 semaines, suggérant un pattern d'achat semi-régulier.

2. Analyse des quantités:
- Commandes: 2u, 3u, 2u, 2u
- Moyenne : 2.25 unités
- Variation : Une seule commande à 3u, le reste à 2u
- La quantité semble stable avec une légère variation normale en B2B

3. Recommandation:
- Quantité moyenne historique : 2 unités
- Variation acceptable de ±30% : entre 1 et 3 unités
- Recommandation conservatrice : 2 unités

Hypothèse : Commande régulière de petite taille, probablement pour un point de vente ou un petit établissement.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais cohérents (17-33 jours), suggérant un besoin récurrent mais non strictement périodique.

**📊 Analyse Quantité:**
Quantités stables autour de 2 unités, avec une légère variation ponctuelle à 3 unités. Pas de tendance claire d'augmentation ou de diminution.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [NUT07] NUTS & BERRIES Bar:

1. Analyse temporelle des intervalles:
- Entre 2025-07-04 et 2025-08-08 : 35 jours
- Entre 2025-08-08 et 2025-09-10 : 33 jours
→ Intervalle quasi-régulier (autour de 34-35 jours), suggérant un cycle d'approvisionnement stable.

2. Analyse des quantités:
- Historique: 2u, 3u, 2u
- Moyenne : 2.33u
- Variations mineures (2-3u) sans tendance haussière/baissière claire
- Écart type faible, indiquant une demande relativement constante

3. Recommandation conservatrice:
- Quantité médiane/mode = 2u
- Dans la fourchette normale des variations B2B (±30%)
- Recommandation finale : 2 unités

Facteurs de confiance modérée :
- Historique court (3 commandes)
- Variations mineures mais présentes

**📅 Analyse Temporelle:**
Intervalles réguliers de 33-35 jours entre commandes successives

**📊 Analyse Quantité:**
Quantités stables autour de 2-3 unités, moyenne de 2.33u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g:

1. Analyse des intervalles entre commandes:
- Entre 2025-07-22 et 2025-08-20: 29 jours
- Entre 2025-08-20 et 2025-09-10: 21 jours
- Intervalle relativement régulier, légèrement variable (écart de 8 jours)
- Période moyenne entre commandes: environ 25 jours

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques à 2 unités
- Quantité très stable sans aucune variation
- Aucune tendance haussière ou baissière détectable

3. Recommandation conservatrice:
- Maintien de la quantité historique de 2 unités
- Variation acceptable de ±30% donnerait une fourchette de 1-3 unités
- Choix de rester à 2 unités pour minimiser les risques de rupture
- Prochaine commande prévisible autour du 2025-11-04 (projection)

**📅 Analyse Temporelle:**
Commandes relativement régulières avec un intervalle moyen de 25 jours. Légère variabilité acceptable dans un contexte B2B.

**📊 Analyse Quantité:**
Quantité parfaitement stable à 2 unités sur les 3 dernières commandes. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commande pour [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g :

1. Analyse temporelle des intervalles :
- Entre les commandes : variations de 12-22 jours
- Légèrement irrégulier mais avec une certaine périodicité
- Dernière commande le 2025-09-10, nous sommes le 2025-10-14 (34 jours depuis)

2. Analyse des quantités :
- Quantités historiques : 1u, 2u, 3u, 3u
- Moyenne = 2.25 unités
- Variation normale, pas de tendance claire d'augmentation/diminution
- Fluctuations dans une plage acceptable (±30%)

3. Recommandation conservatrice :
- Arrondi à 2 unités (proche de la moyenne)
- Prend en compte la variabilité B2B
- Évitera le sur-stockage tout en maintenant un niveau de service

**📅 Analyse Temporelle:**
Intervalles entre commandes : 12-22 jours, légèrement irréguliers mais avec une périodicité.

**📊 Analyse Quantité:**
Quantités entre 1-3 unités, moyenne de 2.25u. Variations normales sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [NUT01] NUTS & BERRIES energy bar:

1. Analyse des intervalles temporels:
- Intervalles entre commandes: 12 jours, 12 jours, 14 jours, 18 jours
- Variation relativement régulière, autour de 12-18 jours
- Tendance à des commandes bi-mensuelles

2. Analyse des quantités:
- Quantités alternant entre 1u et 2u
- Pas de croissance ou décroissance linéaire claire
- Variation normale dans la plage B2B (±30%)

3. Recommandation conservative:
- Dernière commande: 1u (2025-08-20)
- Moyenne historique: ~1.6u
- Recommandation prudente: 2u
- Permet de maintenir un stock tampon
- Correspond au pattern de commandes précédent

**📅 Analyse Temporelle:**
Commandes bi-mensuelles, intervalles de 12-18 jours, pattern semi-régulier

**📊 Analyse Quantité:**
Alternance 1u-2u, variation normale, pas de tendance linéaire

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse pas à pas de la commande [NUT03] NUTS & BERRIES:

1. Analyse temporelle des intervalles:
- Entre les dernières commandes: 
  2025-09-10 → 2025-08-08: ~1 mois
  2025-08-08 → 2025-07-22: ~15 jours
  2025-07-22 → 2025-07-04: ~18 jours
Les intervalles sont relativement réguliers, avec une moyenne autour de 15-30 jours.

2. Analyse des quantités:
- Quantités: 1u, 2u, 2u, 2u
- Tendance stable autour de 2 unités
- Dernière commande à 2u confirme la stabilité
- Variation minime acceptable dans la plage B2B (±30%)

3. Recommandation conservative:
- Quantité recommandée: 2 unités
- Basée sur la moyenne des dernières commandes
- Prend en compte la stabilité de l'historique
- Confiance moyenne car historique récent est cohérent

**📅 Analyse Temporelle:**
Intervalles réguliers entre 15-30 jours, pattern stable

**📊 Analyse Quantité:**
Quantités stables autour de 2 unités, variations mineures

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la demande historique pour le produit [NUT02] NUTS & BERRIES energy bar:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  * 20 jours (09/10 - 08/20)
  * 29 jours (08/20 - 07/22)
  * 18 jours (07/22 - 07/04)
- Les intervalles sont relativement réguliers, oscillant entre 18-29 jours
- Tendance à une commande tous les 20-25 jours environ

2. Analyse des quantités:
- Quantités historiques: 1u, 2u, 2u, 2u 
- Dernière commande: 2 unités
- Variation minime, avec une stabilisation récente à 2 unités
- Pas de croissance ou décroissance significative

3. Recommandation conservatrice:
- Basée sur la dernière tendance (2 unités)
- Marge de ±30% acceptable en B2B
- Recommandation finale: 2 unités

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, centrés autour de 20-25 jours. Variation acceptable de ±30%.

**📊 Analyse Quantité:**
Stabilisation récente à 2 unités, avec une variation historique mineure de 1-2 unités.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>11. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour [REB11] ReBEL chips premium & bio - truffes 125g:

1. Analyse temporelle des intervalles:
- Période: De janvier 2025 à août 2025
- Intervalle moyen entre commandes: environ 30-45 jours
- Pattern: Relativement régulier, commandes répétitives à intervalle presque constant

2. Analyse des quantités:
- La majorité des commandes sont de 2 unités
- Une seule commande à 1 unité (janvier 2025)
- Variation stable autour de 2 unités
- Pas de tendance significative à la hausse ou à la baisse

3. Recommandation quantitative:
- Quantité recommandée: 2 unités
- Justification:
  * Correspond à la quantité la plus fréquente historiquement
  * Stable sur la période observée
  * Variation acceptable dans la norme B2B (±30%)

4. Éléments de contexte:
- Produit: Chips premium bio
- Client probablement petit/moyen
- Commandes régulières suggèrent un besoin constant

**📅 Analyse Temporelle:**
Commandes espacées de 30-45 jours, pattern régulier et prévisible

**📊 Analyse Quantité:**
Majorité des commandes à 2 unités, variation minime autour de cette quantité

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>12. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour [NUT04] NUTS & BERRIES:

1. Analyse temporelle des intervalles:
- Entre les commandes: variations de 13-75 jours
- Dernière commande: 2025-08-08
- Temps écoulé depuis dernière commande: environ 67 jours
- Intervalle légèrement irrégulier mais pas complètement erratique

2. Analyse des quantités:
- Quantités: 2u, 2u, 3u, 3u
- Tendance légère à la hausse (de 2 à 3 unités)
- Variation dans une plage acceptable (+/- 30%)
- Dernières deux commandes à 3 unités semblent être le nouveau standard

3. Recommandation conservatrice:
- Basée sur les deux dernières commandes (3u)
- Prise en compte de la variation normale en B2B
- Recommandation finale: 3 unités

**📅 Analyse Temporelle:**
Intervalles entre commandes variables: 13-75 jours, moyenne autour de 45 jours

**📊 Analyse Quantité:**
Progression de 2 à 3 unités, variation stable dans la norme B2B

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>13. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes:

1. Analyse des intervalles entre commandes:
- Les commandes sont relativement régulières, avec des intervalles variant entre 29-47 jours
- Moyenne d'intervalle: environ 37 jours
- Pas de pattern totalement fixe, mais suggère un besoin mensuel

2. Analyse des quantités:
- Variations entre 1-2 unités
- Tendance récente vers 1 unité (3 dernières commandes)
- Pas de croissance ou décroissance significative
- Les variations sont dans la plage normale B2B (±30%)

3. Recommandation de quantité:
- Dernières 3 commandes à 1 unité suggèrent un besoin stable
- Recommandation conservatrice: 1 unité
- Quantité qui correspond au pattern récent
- Permet flexibilité pour achats groupés potentiels

**📅 Analyse Temporelle:**
Intervalles entre commandes:
- Min: 29 jours (entre 2025-05-14 et 2025-06-11)
- Max: 47 jours (entre 2025-01-08 et 2025-04-01)
- Moyenne: ~37 jours
- Variabilité modérée mais pas excessive

**📊 Analyse Quantité:**
Quantités commandées:
- 5 commandes sur la période
- Distribution: 3x1u, 2x2u
- Tendance récente vers 1u
- Variations conformes aux attentes B2B

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (8)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | Stock prédit: 2.0u (16j restants) → prédit 5u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 4 | Stock prédit: 0.7u (10j restants) → prédit 4u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | Stock prédit: 0.7u (7j restants) → prédit 4u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | Stock prédit: -1.6u (-40j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -2.5u (-71j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-48j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 2 | Stock prédit: -2.5u (-71j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:57:05.164Z*
