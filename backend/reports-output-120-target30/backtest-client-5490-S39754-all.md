# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score équilibré global |

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
| **MAE** | 18.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 21.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (10)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type |
|---------|--------|------|-----------|----------|------|
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 62 | 31.0 | 50.0% | ✅ partial |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 31 | 93 | 62.0 | 66.7% | ✅ partial |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | 124 | 62.0 | 50.0% | ✅ partial |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | 50 | 25.0 | 50.0% | ✅ partial |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (16)

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | Stock prédit: 31.0u (8j restants) → prédit 31u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | Stock prédit: 31.0u (11j restants) → prédit 31u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 150 | Stock prédit: 25.0u (1j restants) → prédit 150u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 434.0u (11j restants) → prédit 434u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 0.0u (0j restants) → prédit 434u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -19.2u (-4j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 240 | Stock prédit: -782.0u (-17j restants) → prédit 240u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1235 | Stock prédit: -5125.0u (-18j restants) → prédit 1235u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 639 | Stock prédit: -2150.0u (-18j restants) → prédit 639u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 400 | Stock prédit: -1385.0u (-18j restants) → prédit 400u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 307 | Stock prédit: -1084.0u (-18j restants) → prédit 307u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 188 | Stock prédit: -611.0u (-18j restants) → prédit 188u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 422 | Stock prédit: -1395.0u (-17j restants) → prédit 422u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -16.7u (-1j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: -240.8u (-20j restants) → prédit 248u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -575.4u (-39j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-18T09:58:24.022Z*
