# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 7,880 input + 3,540 output = 11,420 total
- **Coût**: $0.0205 (~2.05¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.5% | 8 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 44.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 55.6% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (3)

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
| [PF0078] FILOU CHASSEUR 5 L | 240 | 160 | 80.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 88 | 44.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 20 | 12 | 8.0 | 66.7% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 240u vs Médiane: undefinedu (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 80u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit FILOU CHASSEUR 5 L :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes principalement entre 7-15 jours
- Régularité relativement constante, surtout sur les 3-4 derniers mois
- Aucune longue période d'interruption détectée

2. Analyse des quantités :
- Variations entre 160u et 400u
- Modes principaux : 160u, 240u, 320u
- Dernière commande : 240u (date 2025-09-29)
- Moyenne glissante récente autour de 240u

3. Recommandation quantitative :
- Choix conservateur de 240u
- Correspond à la dernière commande
- Dans la zone médiane des commandes historiques
- Respecte la variation normale de ±30% en B2B

**📅 Analyse Temporelle:**
Intervalles réguliers, principalement entre 7-15 jours, avec une stabilité notable sur les derniers mois

**📊 Analyse Quantité:**
Variations entre 160u-400u, modes principaux à 160u, 240u, 320u. Tendance récente autour de 240u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: undefinedu (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 44u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variables mais globalement entre 7-15 jours
- Irrégularité détectée mais pas complètement chaotique
- Dernière commande le 2025-09-29 (132u), environ 7 jours avant la date actuelle

2. Analyse des quantités:
- Quantités très variables: min 52u, max 275u
- Tendance récente autour de 110-132u
- Variations de ±30% observées, ce qui correspond aux attentes B2B
- Les 2 dernières commandes à 132u suggèrent une stabilisation récente

3. Recommandation conservative:
- Choisir la quantité médiane récente
- Privilégier la dernière quantité commandée (132u)
- Prendre en compte la variabilité potentielle du besoin client

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers mais contenus entre 7-15 jours, avec une légère tendance à se stabiliser récemment.

**📊 Analyse Quantité:**
Fortes variations de 52u à 275u, mais récemment stabilisation autour de 110-132u.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 20u vs Médiane: undefinedu (Réel: 12u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 8u (66.7%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes pour le produit [PF3266] JF SAUCE BEARNAISE 3L :

1. Analyse des intervalles entre commandes :
- Entre la dernière commande (2025-09-11) et l'avant-dernière (2025-07-29) : 44 jours
- Entre 2025-07-29 et 2025-06-30 : 30 jours
- Entre 2025-06-30 et 2025-06-19 : 11 jours
Les intervalles semblent irréguliers mais globalement entre 30-45 jours, suggérant un rythme de réapprovisionnement assez variable.

2. Analyse des quantités :
- Les quantités oscillent entre 20u et 30u
- Dernières commandes : 20u (2x fois consécutives)
- Variation des quantités : ±33% (acceptable dans la fourchette B2B de ±30%)
- Pas de tendance claire à la hausse ou à la baisse

3. Recommandation conservative :
- Dernier point de commande : 20 unités
- Compte tenu de la variabilité et du principe de prudence
- Recommandation : 20 unités

La recommandation se base sur la dernière tendance observée tout en restant dans les variations normales du marché B2B.

**📅 Analyse Temporelle:**
Intervalles entre commandes variables : 11-44 jours, moyenne autour de 35 jours. Pas de régularité stricte.

**📊 Analyse Quantité:**
Quantités entre 20-30u, dernières commandes stabilisées à 20u. Variations conformes aux normes B2B.

**📈 Tendance détectée:** ❌ Non

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
| [PF1140] FILOU SAUCE CHASSEUR 850G | 8 | Stock prédit: 1.9u (5j restants) → prédit 8u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (29j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 7 | Stock prédit: 1.6u (13j restants) → prédit 7u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: -0.7u (-29j restants) → prédit 1u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |


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
| [PF0084] FILOU CARBONNADES 800 GR | 1 | Stock suffisant: 0.7u (46j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:54:09.134Z*
