# Rapport Backtest - Client BIOFRESH BELGIUM NV-SA

## Contexte

- **Client** : BIOFRESH BELGIUM NV-SA (ID: 60207)
- **Commande réelle** : S39629
- **Date commande** : 2025-10-08 13:49:43
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 16,097 input + 4,469 output = 20,566 total
- **Coût**: $0.1153 (~11.53¢)
- **Coût par produit LLM**: $0.0144


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 120u vs Médiane: 120u (Réel: 120u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: medium)
- 📊 **Baseline N-1**: 120u
- 📊 **Médiane**: 120u
- ✅ **Réel commandé**: 120u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14-21-27 jours) avec concentration sur mardi-mercredi
- **Saisonnalité**: none
- **Tendance**: Stable autour de 120u avec un seul creux à 60u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les commandes montrent des intervalles variables (14j, 21j, 27j) sans pattern hebdomadaire ou mensuel strict. Cependant, on observe une préférence pour mardi-mercredi. Depuis le 16/09, 22 jours se sont écoulés, ce qui correspond à la fourchette habituelle du client.

**Analyse quantitative**: Sur 4 commandes récentes, 3 sont à 120u et 1 seule à 60u (26/08). La commande à 60u semble être un ajustement ponctuel (peut-être stock résiduel ou test), pas un outlier promotionnel. La tendance dominante est clairement 120u.

**Saisonnalité**: Pas de données N-1 pour valider un effet saisonnier. Le produit (thé glacé pétillant) pourrait être saisonnier (été), mais nous sommes début octobre, encore dans une période potentiellement favorable.

**Décision**: La date de prédiction (08/10, mercredi) correspond au jour de semaine habituel. L'intervalle depuis la dernière commande (22 jours) justifie une nouvelle commande. La quantité modale récente est 120u (75% des cas). Aucun élément ne justifie de dévier de ce baseline.

**Quantité recommandée: 120 unités**

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 48 | Stock prédit: 31.1u (22j restants) → prédit 48u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 14 | Stock prédit: 4.6u (10j restants) → prédit 14u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 14 | Stock prédit: -4.9u (-5j restants) → prédit 14u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 18 | Stock prédit: 7.6u (15j restants) → prédit 18u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 60 | Stock prédit: 13.8u (12j restants) → prédit 60u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 20 | Stock prédit: 4.6u (12j restants) → prédit 20u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 60 | Stock prédit: 13.8u (12j restants) → prédit 60u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 35 | Stock prédit: -43.8u (-68j restants) → prédit 35u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 21 | Stock prédit: -20.7u (-53j restants) → prédit 21u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 9 | Stock prédit: -9.0u (-45j restants) → prédit 9u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 18 | Stock prédit: -14.4u (-40j restants) → prédit 18u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 56 | Stock prédit: -72.2u (-61j restants) → prédit 56u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 28 | Stock prédit: -20.8u (-46j restants) → prédit 28u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 18 | Stock prédit: -16.9u (-52j restants) → prédit 18u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:04:49.933Z*
