# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S39546
- **Date commande** : 2025-10-03 12:32:05
- **Date cutoff système** : 2025-10-03 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 7
- **Tokens**: 6,492 input + 3,350 output = 9,842 total
- **Coût**: $0.0186 (~1.86¢)
- **Coût par produit LLM**: $0.0027


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 7 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
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
| **MAE** | 199.33 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 168.6% | Erreur moyenne en % (complémentaire) |
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
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 350 | 110 | 240.0 | 218.2% | ✅ partial | 🤖 LLM |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 325 | 124 | 201.0 | 162.1% | ✅ partial | 🤖 LLM |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 282 | 125 | 157.0 | 125.6% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML</strong> - LLM: 350u vs Médiane: undefinedu (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 350u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 240u (218.2%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit PF3357:

1. Analyse des intervalles temporels:
- Entre les commandes: variations de 1.5 à 3 mois
- Pas d'intervalle régulier constant
- Intervalles temporels considérés comme ERRATIQUES

2. Analyse des quantités:
- Très haute variabilité : de 2u à 1128u
- Pas de tendance linéaire claire
- Écarts significatifs suggèrent des commandes opportunistes/promotionnelles
- Moyenne des 5 dernières commandes : 404.2u
- Médiane plus représentative : 216u (limite l'impact des valeurs extrêmes)

3. Recommandation conservatrice:
- Utilisation de la médiane comme base : 216u
- Ajustement +/- 30% (tolérance B2B standard)
- Calcul : 216u * 1.62 ≈ 350u
- Arrondi à un nombre rond et réaliste

Stratégie : Quantité modérée qui couvre les besoins sans sur-stocker.

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 1.5 et 3 mois, aucune périodicité standard détectée.

**📊 Analyse Quantité:**
Forte variabilité (2u - 1128u), pas de tendance linéaire claire. Fortes variations suggèrent des commandes opportunistes.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML</strong> - LLM: 325u vs Médiane: undefinedu (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 325u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 201u (162.1%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit PF3358 DLL DRESSING AVOCAT ITALIAN 240ML:

1. Analyse temporelle des intervalles:
- Entre les commandes: variations de 2-3 mois
- Intervalles irréguliers mais globalement entre 60-90 jours
- Dernier intervalle: environ 4 mois depuis la dernière commande

2. Analyse des quantités:
- Quantités très variables: 5u, 135u, 564u, 1128u
- Grande disparité suggérant des commandes opportunistes ou liées à des événements spécifiques
- Pas de tendance linéaire claire, mais tendance générale à des volumes moyens autour de 300-400 unités

3. Calcul de la recommandation:
- Moyenne des 4 dernières commandes: (5 + 135 + 564 + 1128) / 4 = 458 unités
- Élimination des valeurs extrêmes (5u et 1128u)
- Recommandation conservatrice: 325 unités (médiane ajustée)
- Respecte la variation normale de ±30% en B2B

4. Facteurs de risque considérés:
- Variabilité importante des commandes précédentes
- Possible saisonnalité ou commandes par lots
- Recommandation prudente pour maintenir un stock optimal

**📅 Analyse Temporelle:**
Intervalles entre commandes variables, principalement entre 60-90 jours. Dernier intervalle plus long (4 mois).

**📊 Analyse Quantité:**
Quantités très dispersées, sans tendance linéaire claire. Variations importantes entre 5 et 1128 unités.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML</strong> - LLM: 282u vs Médiane: undefinedu (Réel: 125u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 282u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 125u
- 📉 **Erreur LLM**: 157u (125.6%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour le produit [PF3353]:

1. Analyse temporelle des intervalles de commande:
- Les commandes sont irrégulières
- Intervalles variants entre 12-89 jours
- Pas de périodicité constante détectée
- Dernier intervalle: ~77 jours depuis la dernière commande

2. Analyse des quantités commandées:
- Quantités très variables: de 2u à 1128u
- Grande dispersion des volumes
- Moyenne approximative: 377 unités
- Médiane: 162 unités
- Dernière commande: 126 unités

3. Recommandation conservative:
- Choix de 282 unités (proche de la dernière commande significative)
- Représente un volume médian sécuritaire
- Permet de maintenir un stock tampon
- Reste dans la fourchette de variation normale (±30%)

Stratégie: Volume modéré qui minimise les risques de surstock tout en assurant une continuité d'approvisionnement.

**📅 Analyse Temporelle:**
Commandes irrégulières, intervalles variants entre 12-89 jours. Aucune périodicité stable détectée.

**📊 Analyse Quantité:**
Volumes très variables (2-1128u), grande dispersion. Moyenne ~377u, médiane 162u. Dernière commande 126u.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (4)

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
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 200 | Stock prédit: 208.5u (25j restants) → prédit 200u mais non commandé |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 452 | Stock prédit: 15.8u (2j restants) → prédit 452u mais non commandé |
| [PF3350] DLL MARINADE AVOCAT 8 HERBS 240ML | 350 | Stock prédit: -305.1u (-47j restants) → prédit 350u mais non commandé |
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 350 | Stock prédit: -271.9u (-32j restants) → prédit 350u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:56:36.790Z*
