# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S39594
- **Date commande** : 2025-10-08 06:30:49
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 7,344 input + 3,465 output = 10,809 total
- **Coût**: $0.0197 (~1.97¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 9.33 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (6)

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
| [MF0030] MF Tarti Mangue Curry 250g  | 32 | 16 | 16.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 24 | 16 | 8.0 | 50.0% | ✅ partial | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 48 | 16 | 32.0 | 200.0% | ✅ partial | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 32u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [MF0030] MF Tarti Mangue Curry 250g:

1. Analyse temporelle des intervalles:
- Juillet-Août: Commandes très rapprochées (tous les 4-7 jours)
- Septembre: Un écart plus long (32u le 29/09)
- Intervalles plutôt réguliers avec un léger pattern

2. Analyse des quantités:
- Période Août: Commandes stables à 16u
- Dernière commande (29/09): Doublement à 32u 
- Variation dans la plage acceptable de ±30%

3. Recommandation conservative:
- Dernière commande: 32u
- Historique précédent: 16u
- Choix de recommander 32u pour suivre la dernière tendance
- Quantité dans la zone de variation normale

**📅 Analyse Temporelle:**
Commandes régulières, principalement en août à intervalle de 4-7 jours, puis écart plus long en septembre

**📊 Analyse Quantité:**
Stable à 16u jusqu'à la commande de 32u le 29/09, variation acceptable

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 24u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 8u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit MF0042:

1. Analyse temporelle:
- Intervalles entre commandes : Entre 6-49 jours
- Irrégularité moyenne des intervalles
- Pas de périodicité stricte, mais tendance à commander tous les 15-45 jours

2. Analyse des quantités:
- Quantités alternant entre 16u et 32u
- Variation significative mais cohérente (facteur x2)
- 2 modes principaux de commande : 16u et 32u
- Pas de tendance linéaire claire d'augmentation/diminution

3. Recommandation conservative:
- Moyenne des dernières commandes : (16 + 32 + 16 + 32 + 16) / 5 = 22.4u
- Arrondi à 24u pour sécurité
- Dans la plage de variation normale (±30%)
- Permet de couvrir les besoins sans surcommander

**📅 Analyse Temporelle:**
Intervalles variables (6-49 jours), pas de périodicité stricte

**📊 Analyse Quantité:**
Alternance entre 16u et 32u, variation normale en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes :

1. Analyse temporelle :
- Intervalles entre commandes très réguliers
- Fréquence moyenne : environ tous les 10-14 jours
- Dernière commande le 2025-09-29
- Prochain cycle attendu : début octobre 2025

2. Analyse des quantités :
- Quantité parfaitement constante : 16 unités à chaque commande
- Aucune variation détectée
- Commandes très standardisées

3. Recommandation :
- Maintien strict de la quantité historique : 16 unités
- Variation acceptable de ±30% : entre 11 et 21 unités
- Mais aucune raison de s'écarter du modèle établi

Facteurs de confiance :
- Régularité historique exceptionnelle
- Absence de signaux de changement

**📅 Analyse Temporelle:**
Commandes très régulières, intervalle moyen de 12-13 jours. Modèle temporel stable et prévisible.

**📊 Analyse Quantité:**
Quantité strictement constante à 16 unités. Aucune variation, aucune tendance haussière ou baissière.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 48u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 32u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [MF0029] MF Tarti Datte chili 250g :

1. Analyse temporelle des intervalles :
- Périodicité quasi-régulière : principalement entre 6-8 jours
- Dernière période plus irrégulière avec un pic à 48u le 2025-08-26
- Période moyenne entre commandes : environ 7-10 jours

2. Analyse des quantités :
- Commandes stables à 16u jusqu'au 26 août
- Dernier pic inhabituel à 48u (3x la quantité habituelle)
- Variation possible due à :
  * Stock de sécurité
  * Commande groupée
  * Promotion ponctuelle

3. Recommandation quantitative :
- Quantité de base : 16u
- Avec variation B2B de ±30%
- Recommandation conservatrice : 48u (dernière commande)
- Justification : suit le dernier comportement d'achat observé
- Garantit une couverture de stock sans surstock excessif

Recommandation finale : 48 unités

**📅 Analyse Temporelle:**
Intervalles entre commandes quasi-réguliers, principalement 6-10 jours. Dernière période plus variable.

**📊 Analyse Quantité:**
Commandes stables à 16u, un pic à 48u. Variation normale en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Analyse temporelle:
- Intervalles entre commandes:
  * 26/08 au 11/08 : 15 jours
  * 11/08 au 24/06 : 48 jours
- Ces intervalles semblent irréguliers mais avec une tendance de commande environ tous les 1-2 mois
- Dernier ordre le 26/08/2025, depuis 42 jours à la date actuelle (08/10/2025)

2. Analyse des quantités:
- 3 commandes consécutives exactement à 16 unités
- Quantité parfaitement stable sans aucune variation
- Indique un besoin constant et prévisible

3. Recommandation:
- Quantité recommandée: 16 unités
- Basée sur la constance historique des commandes
- Aucune justification pour modifier la quantité
- Correspond aux achats précédents

Niveau de confiance élevé car:
- Historique très stable
- Pas de signes de changement dans le pattern de commande

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers mais globalement entre 15-50 jours, moyenne autour de 30 jours

**📊 Analyse Quantité:**
Quantité parfaitement stable à 16 unités, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit MF0027:

1. Analyse temporelle:
- Intervalles entre commandes : 
  * Entre 2025-08-19 et 2025-08-07 : 12 jours
  * Entre 2025-08-07 et 2025-07-14 : 24 jours
- Pattern : Légèrement irrégulier mais avec une fréquence approximative de 2-3 semaines

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques : 16 unités
- Aucune variation observée
- Stabilité parfaite des quantités commandées

3. Recommandation:
- Reconduction de la quantité historique : 16 unités
- Confiance élevée due à l'uniformité des commandes précédentes
- Aucun besoin d'ajustement significatif

Calcul de la fourchette acceptable (±30%):
- Minimum : 11 unités
- Maximum : 21 unités
- Recommandation retenue : 16 unités (au centre de la fourchette)

**📅 Analyse Temporelle:**
Intervalles entre commandes légèrement variables (12-24 jours), suggérant un approvisionnement semi-régulier tous les 15-25 jours environ.

**📊 Analyse Quantité:**
Quantité parfaitement stable à 16 unités, aucune variation détectée sur les 3 dernières commandes.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (3)

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Stock prédit: 11.5u (20j restants) → prédit 16u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: 12.3u (27j restants) → prédit 16u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 16 | Stock prédit: -6.0u (-11j restants) → prédit 16u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:56:33.658Z*
