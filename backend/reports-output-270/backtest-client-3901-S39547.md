# Rapport Backtest - Client CASIMEX

## Contexte

- **Client** : CASIMEX (ID: 3901)
- **Commande réelle** : S39547
- **Date commande** : 2025-10-03 12:50:33
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.8% | 17 produits prédits, 2 corrects |
| **Rappel** | 33.3% | 6 produits réels, 2 détectés |
| **F1-Score** | 17.4% | Score équilibré global |

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
| **MAE** | 75.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type |
|---------|--------|------|-----------|----------|------|
| [PF1542] BORNIBUS BEARNAISE KOSHER 2 10G | 600 | 600 | 0.0 | 0.0% | 🎯 exact |
| [PF1543] BORNIBUS TARTARE KOSHER 220G | 450 | 600 | 150.0 | 25.0% | ✅ partial |


---

## False Positives (15)

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
| [PF3398] BS1833 - BORNIBUS BEARNAISE KOSHER BOCAL 825G  | 96 | Stock prédit: 0.0u (0j restants) → prédit 96u mais non commandé |
| [PF3397] BS1833 COSCO - BORNIBUS BEARNAISE KOSHER BOCAL 825G | 600 | Stock prédit: 0.0u (0j restants) → prédit 600u mais non commandé |
| [PF0679] BR MAYONNAISE KOSHER 500ML BOC | 220 | Stock prédit: 0.0u (0j restants) → prédit 220u mais non commandé |
| [PF1906] BR1586 -  VIN FH KOSHER SQUEEZE 300ML | 56 | Stock prédit: 0.0u (0j restants) → prédit 56u mais non commandé |
| [PF1983] BR1588 - BBQ KOSHER SQUEEZE 300ML | 112 | Stock prédit: 0.0u (0j restants) → prédit 112u mais non commandé |
| [PF1618] BORNIBUS MAYO BAIES ROSES 220G | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF1938] BR MAYONNAISE KOSHE  1000ML BOC | 384 | Stock prédit: 0.0u (0j restants) → prédit 384u mais non commandé |
| [PF1980] BR1582 - KETCHUP KOSHE SQUEEZE 300ML | 56 | Stock prédit: 16.5u (17j restants) → prédit 56u mais non commandé |
| [PF1981] BR BEARNAISE KOSH SQUEEZ 300ML | 56 | Stock prédit: 16.5u (17j restants) → prédit 56u mais non commandé |
| [PF3337] BS1886 - BORNIBUS MAYO TRUFFES KOSHER 210G | 475 | Stock prédit: 16.8u (4j restants) → prédit 475u mais non commandé |
| [PF2014] BR1561 - MOUT DIJON SQUEEZE 300ML | 278 | Stock prédit: 0.0u (0j restants) → prédit 278u mais non commandé |
| [PF1903] BR BURGER KOSHER SQUEEZE 300ML | 112 | Stock prédit: 0.0u (0j restants) → prédit 112u mais non commandé |
| [PF1512] BR1224 - BBQ KOSHER 500 ML BIB | 54 | Stock prédit: -108.0u (-258j restants) → prédit 54u mais non commandé |
| [PF3336] BS1885 - BORNIBUS MAYO BASILIC KOSHER 210G | 300 | Stock prédit: 0.0u (0j restants) → prédit 300u mais non commandé |
| [PF2974] BORNIBUS MAYONNAISE KOSHE 825G | 223 | Stock prédit: -350.0u (-202j restants) → prédit 223u mais non commandé |


---

## False Negatives (4)

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
| [PF0403] BORNIBUS MAYO KOSHER 220G | 600 | Stock suffisant: 331.4u (40j restants > seuil 19j) |
| [PF0625] BORNIBUS MAYO WASAB KOSHER 220 | 600 | Stock suffisant: 331.4u (40j restants > seuil 19j) |
| [PF1541] BORNIBUS AIOLI KOSHER 220G | 300 | Stock suffisant: 120.5u (22j restants > seuil 19j) |
| [CONS070] PALETTE EURO | 10 | Jamais commandé avant dans les 270j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T09:36:51.933Z*
