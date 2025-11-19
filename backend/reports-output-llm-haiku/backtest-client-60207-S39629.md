# Rapport Backtest - Client BIOFRESH BELGIUM NV-SA

## Contexte

- **Client** : BIOFRESH BELGIUM NV-SA (ID: 60207)
- **Commande réelle** : S39629
- **Date commande** : 2025-10-08 13:49:43
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 11
- **Tokens**: 9,999 input + 5,321 output = 15,320 total
- **Coût**: $0.0293 (~2.93¢)
- **Coût par produit LLM**: $0.0027


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 6.7% | 15 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 12.5% | Score équilibré global |

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
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (1)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 120 | 120 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 120u vs Médiane: undefinedu (Réel: 120u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 120u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:
1. Analyse temporelle:
- Intervalles entre commandes: 
  * Entre 2025-09-16 et 2025-08-26 : 21 jours
  * Entre 2025-08-26 et 2025-07-23 : 34 jours
  * Entre 2025-07-23 et 2025-07-09 : 14 jours
  * Entre 2025-07-09 et 2025-06-20 : 19 jours
- Variation relativement stable, avec des intervalles entre 14-34 jours
- Tendance à un cycle de commande d'environ 3-4 semaines

2. Analyse des quantités:
- 4 commandes sur 5 à 120 unités
- Une commande à 60 unités (probablement une commande réduite)
- Quantité majoritaire et constante : 120 unités
- Variation considérée comme normale en B2B (±30%)

3. Recommandation:
- Quantité recommandée : 120 unités
- Cohérence avec l'historique des commandes
- Permet de maintenir un stock stable
- Correspond au volume standard des précédentes commandes

**📅 Analyse Temporelle:**
Intervalles de commande réguliers, centrés autour de 3-4 semaines, avec une légère variabilité acceptable

**📊 Analyse Quantité:**
Quantité stable à 120 unités, avec une seule variation à 60 unités considérée comme normale

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (14)

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 45 | Stock prédit: 31.1u (22j restants) → prédit 45u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 28 | Stock prédit: 4.6u (10j restants) → prédit 28u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 21 | Stock prédit: -4.9u (-5j restants) → prédit 21u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 18 | Stock prédit: 7.6u (15j restants) → prédit 18u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 60 | Stock prédit: 13.8u (12j restants) → prédit 60u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 20 | Stock prédit: 4.6u (12j restants) → prédit 20u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 45 | Stock prédit: 13.8u (12j restants) → prédit 45u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 35 | Stock prédit: -43.8u (-68j restants) → prédit 35u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 21 | Stock prédit: -20.7u (-53j restants) → prédit 21u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 15 | Stock prédit: -9.0u (-45j restants) → prédit 15u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 18 | Stock prédit: -14.4u (-40j restants) → prédit 18u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 42 | Stock prédit: -72.2u (-61j restants) → prédit 42u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 28 | Stock prédit: -20.8u (-46j restants) → prédit 28u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 24 | Stock prédit: -16.9u (-52j restants) → prédit 24u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:56:14.521Z*
