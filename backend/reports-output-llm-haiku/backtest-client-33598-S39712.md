# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S39712
- **Date commande** : 2025-10-14 13:24:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 25
- **Tokens**: 23,990 input + 11,035 output = 35,025 total
- **Coût**: $0.0633 (~6.33¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.5% | 32 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 22.2% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (4)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | 48 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [LV130] LV BIO Tartinade Paprika Chili 190g :

1. Analyse temporelle des intervalles :
- Intervalle moyen entre commandes : environ 14-15 jours
- Régularité très constante : presque toutes les 2 semaines
- Dernier intervalle (08/10 au 14/10) : 6 jours (légèrement court)

2. Analyse des quantités :
- Quantité quasi-constante à 100u (6/7 commandes)
- Une seule variation à 225u le 15/07 (probablement commande exceptionnelle)
- Pas de tendance claire à l'augmentation ou la diminution

3. Recommandation :
- Quantité recommandée : 100 unités
- Confiance haute due à la très grande stabilité historique
- Écart standard minimal dans les commandes
- Aucun signal de changement de besoin

**📅 Analyse Temporelle:**
Intervalles réguliers de 14-15 jours, avec une légère variation récente (6 jours)

**📊 Analyse Quantité:**
Quantité stable à 100u, une seule variation à 225u non représentative

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de la commande du produit LV136:

1. Analyse temporelle des intervalles:
- Entre 1ère et 2ème commande: 27 jours
- Entre 2ème et 3ème commande: 27 jours
👉 Intervalle TRÈS RÉGULIER, période de répétition constante de 27-28 jours

2. Analyse des quantités:
- Toutes les 3 commandes sont strictement identiques à 100 unités
- Aucune variation, donc quantité extrêmement stable
- Correspond à un besoin récurrent et prévisible

3. Recommandation de quantité:
- Historique montre une demande constante de 100 unités
- Pas de raison de s'écarter de ce volume
- Variation acceptable de ±30% = entre 70 et 130 unités
- RECOMMANDATION FINALE: 100 unités

**📅 Analyse Temporelle:**
Intervalles réguliers de 27 jours entre commandes successives, indiquant un cycle d'approvisionnement stable et prévisible.

**📊 Analyse Quantité:**
Quantité parfaitement constante à 100 unités, sans aucune variation, reflétant un besoin uniforme.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour [LV135] LV Tartinade Basilico 190g:

1. Analyse des intervalles entre commandes:
- Intervalles quasi-réguliers entre les commandes
- Écart moyen : environ 30-35 jours
- Dernière commande le 2025-09-09
- Prochaine commande attendue autour du 2025-10-14 (cohérent avec le rythme précédent)

2. Analyse des quantités:
- Quantité parfaitement stable à 100 unités
- 4 commandes consécutives à 100 unités
- Aucune variation significative
- Représente probablement un besoin standard du client

3. Recommandation quantitative:
- Quantité recommandée: 100 unités (reconduction du volume habituel)
- Dans la fourchette de ±30% acceptée en B2B : entre 70 et 130 unités
- Choix conservateur mais aligné sur l'historique

Facteurs de confiance:
- Historique stable
- Pas de signaux de changement
- Recommandation basée sur un pattern clair

**📅 Analyse Temporelle:**
Commandes régulières tous les 30-35 jours, dernière le 2025-09-09, prochaine attendue autour du 2025-10-14

**📊 Analyse Quantité:**
Commandes stables à 100 unités, aucune variation détectable

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 48u vs Médiane: undefinedu (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [LV002] LV Pizza Croccantina au romarin 150 g bio :

1. Analyse des intervalles temporels :
- Entre 2025-06-24 et 2025-07-15 : 22 jours
- Entre 2025-07-15 et 2025-09-09 : 56 jours
- Les intervalles sont variables mais restent dans une plage acceptable en B2B

2. Analyse des quantités :
- Quantité constante à 48 unités pour chaque commande
- Aucune variation significative détectée
- Stabilité parfaite des commandes

3. Recommandation conservative :
- Maintien de la quantité standard de 48 unités
- Aucun besoin d'ajustement compte tenu de l'historique stable
- Variation acceptable de ±30% (entre 34 et 62 unités) non nécessaire ici

**📅 Analyse Temporelle:**
Intervalles variables (22-56 jours) mais cohérents pour un approvisionnement B2B

**📊 Analyse Quantité:**
Quantité constante à 48 unités, pas de variation notable

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (28)

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
| [PF3259] EVD MOUTARDE FORTE 350 GR | 3900 | Stock prédit: 3900.0u (30j restants) → prédit 3900u mais non commandé |
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Stock prédit: 14.3u (0j restants) → prédit 110u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 237.4u (9j restants) → prédit 336u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 37.1u (1j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 504 | Stock prédit: -164.3u (-1j restants) → prédit 504u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 378 | Stock prédit: 137.0u (2j restants) → prédit 378u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 61.4u (16j restants) → prédit 80u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 22.0u (22j restants) → prédit 27u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 125 | Stock prédit: 67.2u (10j restants) → prédit 125u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: 50.2u (5j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 66.1u (9j restants) → prédit 100u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 115 | Stock prédit: 64.0u (8j restants) → prédit 115u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 38.6u (8j restants) → prédit 100u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 80 | Stock prédit: 36.2u (15j restants) → prédit 80u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 50 | Stock prédit: 22.6u (15j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 100 | Stock prédit: 10.0u (3j restants) → prédit 100u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Stock prédit: 30.8u (11j restants) → prédit 126u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: -13.3u (-4j restants) → prédit 100u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 1.0u (0j restants) → prédit 50u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 4.3u (3j restants) → prédit 48u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Stock prédit: 5.0u (3j restants) → prédit 56u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 75 | Stock prédit: -83.0u (-24j restants) → prédit 75u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Stock prédit: 13.5u (7j restants) → prédit 100u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 125 | Stock prédit: -97.4u (-26j restants) → prédit 125u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 50 | Stock prédit: -18.8u (-24j restants) → prédit 50u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock prédit: -34.8u (-34j restants) → prédit 56u mais non commandé |
| [PF1626] BONI VINAI MIEL MOUTARDE 450ML | 123 | Stock prédit: -191.2u (-61j restants) → prédit 123u mais non commandé |
| [PF1624] BONI VINAIGRETTE MANGUE 450ML | 625 | Stock prédit: -208.5u (-19j restants) → prédit 625u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:53:25.360Z*
