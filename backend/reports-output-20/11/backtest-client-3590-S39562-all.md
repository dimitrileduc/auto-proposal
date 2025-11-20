# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 17,402 input + 2,036 output = 19,438 total
- **Coût**: $0.0827 (~8.27¢)
- **Coût par produit LLM**: $0.0103


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
| **MAE** | 15.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 29.8% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 130 | 88 | 42.0 | 47.7% | ✅ partial | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 7 | 12 | 5.0 | 41.7% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: N/Au (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: medium)
- 📊 **Baseline N-1**: 240u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-25%

**🔍 Outliers détectés:**
320u, 480u

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande de fond autour de 160-240u avec quelques pics à 320u (probablement événementiels). La période récente confirme une demande stable à 160u sur les 3 derniers mois (4 commandes sur 5 à 160u, 1 seule à 240u fin septembre). Aucune saisonnalité marquée détectée en octobre N-1. La tendance récente montre une stabilisation vers le bas de la fourchette historique, je recommande donc 160u comme quantité la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 130u vs Médiane: N/Au (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 130u (confidence: medium)
- 📊 **Baseline N-1**: 104u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 42u (47.7%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
+20%

**🔍 Outliers détectés:**
208u, 18u

**🧠 Raisonnement LLM:**
La demande de fond N-1 se situe autour de 104u (après exclusion du pic de 208u en août et du 18u atypique en juillet). La période récente montre une tendance haussière stable avec 132u en septembre (x2 commandes) contre 104u l'an dernier, soit environ +20-25%. Je recommande 130u qui reflète cette croissance observée sur les deux dernières commandes de septembre, cohérente avec le développement du client.

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 7u vs Médiane: N/Au (Réel: 12u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: medium)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 5u (41.7%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
20u

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable entre 4-10u avec une médiane autour de 7u. Les deux commandes récentes de 20u (juillet et septembre 2025) représentent clairement des commandes exceptionnelles (promotions ou événements), doublant la taille habituelle. En l'absence de saisonnalité marquée et avec seulement 2 points récents (tous deux exceptionnels), je me base sur le pattern de fond N-1 qui reste la référence la plus fiable pour prédire la prochaine commande normale.

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

*Rapport généré automatiquement le 2025-11-19T20:00:32.646Z*
