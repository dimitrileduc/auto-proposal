# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39361
- **Date commande** : 2025-09-24 09:45:50
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 13
- **Tokens**: 12,014 input + 5,865 output = 17,879 total
- **Coût**: $0.0331 (~3.31¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 14 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 0.63 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (8)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit LV160:

1. Analyse des intervalles temporels:
- Intervalles entre commandes: 
  * 2025-06-10 → 2025-07-10 : 30 jours
  * 2025-07-10 → 2025-08-04 : 25 jours
  * 2025-08-04 → 2025-08-26 : 22 jours
- Tendance : Intervalles relativement réguliers (25-30 jours), suggérant un cycle d'approvisionnement stable

2. Analyse des quantités:
- Quantités historiques : 3u, 4u, 4u, 1u
- Variation significative du dernier point (1u) par rapport aux précédents
- Moyenne des 3 dernières commandes : (4 + 4 + 3) / 3 = 3.67u
- Variation dans une plage acceptable (±30%)

3. Recommandation conservatrice:
- Quantité recommandée : 3 unités
- Justification : 
  * Proche de la moyenne historique
  * Prend en compte la variabilité normale en B2B
  * Évite le surstock tout en maintenant un approvisionnement suffisant

**📅 Analyse Temporelle:**
Cycle d'approvisionnement régulier, intervalle moyen de 25-30 jours entre commandes

**📊 Analyse Quantité:**
Quantités stables autour de 3-4 unités, avec légère variabilité normale en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit LV161:

1. Analyse des intervalles temporels:
- Entre les commandes: environ 24-28 jours
- Intervalle quasi-régulier (écart de +/- 4 jours)
- Suggère un cycle d'approvisionnement mensuel stable

2. Analyse des quantités:
- 3 commandes à 4 unités
- 1 commande à 3 unités
- Variation mineure de ±1 unité (dans la zone de tolérance B2B de ±30%)
- Quantité moyenne: 3.75 unités
- Tendance de commande très stable

3. Recommandation:
- Quantité recommandée: 4 unités
- Basée sur la majorité des commandes précédentes
- Cohérente avec le comportement historique
- Permet une marge de sécurité légère

**📅 Analyse Temporelle:**
Intervalles réguliers autour de 24-28 jours, cycle mensuel stable

**📊 Analyse Quantité:**
Quantités stables autour de 4 unités, avec une légère variation occasionnelle

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit LV162:

1. Analyse des intervalles temporels:
- Entre la dernière commande (2025-08-26) et avant (2025-08-04): ~22 jours
- Entre (2025-08-04) et (2025-07-10): ~25 jours
- Entre (2025-07-10) et (2025-06-10): ~30 jours
→ Intervalle relativement régulier et stable, autour de 22-30 jours

2. Analyse des quantités:
- 4u répété 3 fois consécutivement (2025-08-26, 2025-08-04, 2025-07-10)
- Une commande précédente à 3u (2025-06-10)
- Variation mineure, cohérente avec la tolérance B2B de ±30%
- Tendance principale semble être 4u

3. Recommandation quantitative:
- Quantité stable autour de 4 unités
- Légère variation historique entre 3-4u acceptable
- Recommandation conservatrice: 4 unités

**📅 Analyse Temporelle:**
Intervalles réguliers de 22-30 jours entre commandes, suggérant un cycle d'approvisionnement stable

**📊 Analyse Quantité:**
Quantité principalement stable à 4u, avec une légère variation ponctuelle à 3u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour le produit [LV055] LV Mini grissini à l'huile d'olive 100g bio:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  * 2025-08-26 - 2025-08-04 = 22 jours
  * 2025-08-04 - 2025-07-10 = 25 jours
  * 2025-07-10 - 2025-06-10 = 30 jours
- Les intervalles sont relativement réguliers, autour de 3-4 semaines (22-30 jours)
- Tendance : Commandes assez stables et prévisibles

2. Analyse des quantités:
- Quantités historiques: 2u, 1u, 2u, 2u
- Moyenne : 1.75 unités
- Variation minimale, avec un seul point à 1u
- La quantité de 2u semble être la plus représentative

3. Recommandation conservatrice:
- Basée sur l'historique, je recommande 2 unités
- Confiance moyenne car historique court mais relativement stable
- Marge de ±30% acceptable en B2B (entre 1 et 3 unités)
- Pas de tendance significative de croissance ou décroissance

**📅 Analyse Temporelle:**
Intervalles entre commandes réguliers, centrés autour de 3-4 semaines (22-30 jours). Cycle d'approvisionnement stable.

**📊 Analyse Quantité:**
Quantités stables autour de 2 unités, avec une légère variation ponctuelle à 1 unité. Pas de tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (6)

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
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 2.3u (16j restants) → prédit 4u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Stock prédit: 1.4u (10j restants) → prédit 3u mais non commandé |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | Stock prédit: 1.7u (9j restants) → prédit 4u mais non commandé |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | Stock prédit: 1.7u (9j restants) → prédit 4u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 3 | Stock prédit: -0.6u (-10j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:57:25.962Z*
