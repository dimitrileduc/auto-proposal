# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S39716
- **Date commande** : 2025-10-14 08:27:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 3
- **Tokens**: 2,848 input + 1,338 output = 4,186 total
- **Coût**: $0.0076 (~0.76¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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
| **MAE** | 144.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 125.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (2)

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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 64 | 128 | 64.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 336 | 112 | 224.0 | 200.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 64u vs Médiane: undefinedu (Réel: 128u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 128u
- 📉 **Erreur LLM**: 64u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [PF2036] ITM BOULETTES TOMATE 800 GR :

1. Analyse des intervalles entre commandes :
- Intervalles principalement entre 6-8 jours
- Quelques variations : un intervalle de 14 jours en septembre
- Globalement, un rythme de commande relativement régulier

2. Analyse des quantités :
- Deux quantités récurrentes : 64u et 128u
- Alternance entre ces deux quantités
- Dernières commandes stabilisées à 64u
- Variation inférieure à 30% (acceptable en B2B)

3. Recommandation :
- Quantité de base : 64 unités
- Choix conservateur basé sur les dernières commandes
- Aligné avec le pattern récent et la variabilité normale B2B

**📅 Analyse Temporelle:**
Commandes principalement tous les 6-8 jours, avec quelques variations jusqu'à 14 jours. Rythme globalement stable.

**📊 Analyse Quantité:**
Deux volumes principaux (64u et 128u), dernièrement stabilisé à 64u. Variations contrôlées.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 336u vs Médiane: undefinedu (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 336u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 224u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes:

1. Analyse des intervalles temporels:
- Entre 2025-06-24 et 2025-06-30 : 6 jours
- Entre 2025-06-30 et 2025-08-04 : 35 jours
- Entre 2025-08-04 et 2025-08-05 : 1 jour
- Dernier intervalle depuis 2025-08-05 : environ 70 jours

Les intervalles sont irréguliers, avec des variations significatives entre 1-35 jours.

2. Analyse des quantités:
- Progression des commandes : 112u → 224u → 224u → 448u
- Tendance à doubler la quantité tous les 1-2 mois
- Dernière commande à 448u, mais pas de confirmation d'une tendance stable

3. Recommandation conservative:
- Moyenne des 2 dernières commandes : (224 + 448) / 2 = 336 unités
- Correspond à une variation de +/- 25% par rapport aux dernières commandes
- Prend en compte la variabilité observée sans surestimer
- Aligné avec les variations B2B tolérées (±30%)

**📅 Analyse Temporelle:**
Intervalles irréguliers, de 1 à 35 jours, sans modèle temporel clair

**📊 Analyse Quantité:**
Quantités variables avec tendance à doubler, dernière commande à 448u

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (1)

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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: 75.7u (8j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:54:20.461Z*
