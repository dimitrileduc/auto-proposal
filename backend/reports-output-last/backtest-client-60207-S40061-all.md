# Rapport Backtest - Client BIOFRESH BELGIUM NV-SA

## Contexte

- **Client** : BIOFRESH BELGIUM NV-SA (ID: 60207)
- **Commande réelle** : S40061
- **Date commande** : 2025-11-03 08:38:25
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 8,540 input + 21,734 output = 30,274 total


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
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 11.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 60 | 54 | 6.0 | 11.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 60u vs Médiane: 120u (Réel: 54u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 60u (confidence: medium)
- 📊 **Baseline N-1**: 60u
- 📊 **Médiane**: 120u
- ✅ **Réel commandé**: 54u
- 📉 **Erreur LLM**: 6u (11.1%)
- 📉 **Erreur Médiane**: 66u (122.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle initialement mensuel (~21-22 jours) avec commandes le mardi/mercredi. Rupture de rythme le 21 octobre avec une commande intercalaire après 13 jours seulement, indiquant soit un ajustement ponctuel, soit un changement de fréquence vers un cycle bi-mensuel plus court.
- **Saisonnalité**: strong
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit étant un thé glacé saisonnier, la baisse à 54u le 21 octobre coïncide avec la basse saison. Cette valeur, malgré son intervalle atypique, est la donnée la plus récente et reflète le réalignement saisonnier des volumes. Les commandes précédentes de 120-126u correspondaient à la fin de saison (consolidation des stocks), mais la tendance de fond retourne au niveau de base hivernal observé fin août (60u). Le dimande étant hors cycle, cette quantité correspond à la prochaine commande attendue le mardi 04/11.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:38:04: 54u
- 2025-10-08 13:49:43: 126u
- 2025-09-16 06:05:48: 120u
- 2025-08-26 08:04:32: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 60u (confidence: medium)
**📊 Quantité Réelle**: 54u

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
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 40 | Stock prédit: 6.9u (5j restants) → prédit 40u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 15 | Stock prédit: 5.1u (11j restants) → prédit 15u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 14 | Stock prédit: 7.3u (11j restants) → prédit 14u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 14 | Stock prédit: 1.7u (1j restants) → prédit 14u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 14 | Stock prédit: 7.3u (11j restants) → prédit 14u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 18 | Stock prédit: 9.4u (11j restants) → prédit 18u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 27 | Stock prédit: 5.1u (4j restants) → prédit 27u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 63 | Stock prédit: 34.2u (19j restants) → prédit 63u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 60 | Stock prédit: 16.0u (16j restants) → prédit 60u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 14 | Stock prédit: -8.4u (-17j restants) → prédit 14u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 18 | Stock prédit: 3.6u (11j restants) → prédit 18u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 45 | Stock prédit: 7.6u (9j restants) → prédit 45u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 48 | Stock prédit: -11.7u (-65j restants) → prédit 48u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 12 | Stock prédit: -19.6u (-59j restants) → prédit 12u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:13:34.525Z*
