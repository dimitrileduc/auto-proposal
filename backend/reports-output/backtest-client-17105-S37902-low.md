# Rapport Backtest - Client FOODPRINT SRL, FOODPRINT SRL, Adresse de facturation

## Contexte

- **Client** : FOODPRINT SRL, FOODPRINT SRL, Adresse de facturation (ID: 17105)
- **Commande réelle** : S37902
- **Date commande** : 2025-07-04 11:57:50
- **Date cutoff système** : 2025-07-04 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 46 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 0 produits réels, 0 détectés |
| **F1-Score** | 0.0% | Score équilibré global |

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
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (0)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>

*Aucun produit correctement prédit (rappel = 0%)*

---

## False Positives (46)

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
| [PF1797] LV MAYONNAI TOMATE 250ML WECK | 200 | Stock prédit: 200.0u (3j restants) → prédit 200u mais non commandé |
| [PF1804] LV SAUCE TARTARE 250ML WECK | 400 | Stock prédit: 400.0u (3j restants) → prédit 400u mais non commandé |
| [PF3237] LV MAYONNAISE POIVRE 250ML WECK  | 200 | Stock prédit: 200.0u (3j restants) → prédit 200u mais non commandé |
| [PF1942] LV BIO TRIPACK SAUCES 3X135ML | 256 | Stock prédit: 256.0u (3j restants) → prédit 256u mais non commandé |
| [PF1775] TARTINAPERO BIO PAPRIKA 200ML | 350 | Stock prédit: 350.0u (3j restants) → prédit 350u mais non commandé |
| [PF1773] TARTINAPERO BIO MANGUE 200ML | 700 | Stock prédit: 700.0u (3j restants) → prédit 700u mais non commandé |
| [PF1779] TARTINAPERO BIO HOUMOUS 200ML | 350 | Stock prédit: 350.0u (3j restants) → prédit 350u mais non commandé |
| [PF1778] TARTINAPERO BIO TOMATE 200ML | 700 | Stock prédit: 700.0u (3j restants) → prédit 700u mais non commandé |
| [PF1780] TARTINAPERO BIO OLIVE 200ML | 350 | Stock prédit: 350.0u (3j restants) → prédit 350u mais non commandé |
| [PF1855] LV TARTINAPERO BIO TRIPACK | 2560 | Stock prédit: 2560.0u (3j restants) → prédit 2560u mais non commandé |
| [PF2978] TARTINAPERO BIO AIL OURS 200ML | 350 | Stock prédit: 350.0u (3j restants) → prédit 350u mais non commandé |
| [PF1630] LV TARTINADE BIO ANANAS 200ML | 330 | Stock prédit: 330.0u (3j restants) → prédit 330u mais non commandé |
| [PF1705] LV TARTINADE BIO BASILIC 200ML | 660 | Stock prédit: 660.0u (3j restants) → prédit 660u mais non commandé |
| [PF1558] LV TARTINADE BIO CAROTTE 200ML | 1330 | Stock prédit: 1330.0u (3j restants) → prédit 1330u mais non commandé |
| [PF1628] LV TARTINADE BIO HOUMOUS 200ML | 1330 | Stock prédit: 1330.0u (3j restants) → prédit 1330u mais non commandé |
| [PF1683] LV TARTINADE BIO MANGUE 400G | 330 | Stock prédit: 330.0u (3j restants) → prédit 330u mais non commandé |
| [PF1556] LV TARTINADE BIO MANGUE 200ML | 2664 | Stock prédit: 2664.0u (3j restants) → prédit 2664u mais non commandé |
| [PF1704] LV TARTINADE BIO OLIVE 200 | 990 | Stock prédit: 990.0u (3j restants) → prédit 990u mais non commandé |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 1980 | Stock prédit: 1980.0u (3j restants) → prédit 1980u mais non commandé |
| [PF1686] LV TARTINADE BIO PAPRIKA 400G | 332 | Stock prédit: 332.0u (3j restants) → prédit 332u mais non commandé |
| [PF3365] LV BE TARTINADE BIO BROCOLI 190G | 990 | Stock prédit: 990.0u (3j restants) → prédit 990u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Stock prédit: -400.0u (-3j restants) → prédit 400u mais non commandé |
| [PF1473] JF MAYONNAIS POIVRE 250ML WECK | 200 | Stock prédit: -200.0u (-3j restants) → prédit 200u mais non commandé |
| [PI3267] PI MAYONNAISE BIO CONS 250ML | 680 | Stock prédit: -680.0u (-3j restants) → prédit 680u mais non commandé |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 990 | Stock prédit: -990.0u (-3j restants) → prédit 990u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 500 | Stock prédit: -500.0u (-3j restants) → prédit 500u mais non commandé |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Stock prédit: -300.0u (-3j restants) → prédit 300u mais non commandé |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 300 | Stock prédit: -300.0u (-3j restants) → prédit 300u mais non commandé |
| [PF3233] LV BE TARTINADE BIO TOSCANE 190G | 1050 | Stock prédit: -1050.0u (-3j restants) → prédit 1050u mais non commandé |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 300 | Stock prédit: -300.0u (-3j restants) → prédit 300u mais non commandé |
| [PF2002] TVF TARTINADE BIO MANGUE 200ML | 350 | Stock prédit: -350.0u (-3j restants) → prédit 350u mais non commandé |
| [PF2003] TVF TARTINADE BIO PAPRIKA200ML | 350 | Stock prédit: -350.0u (-3j restants) → prédit 350u mais non commandé |
| [PF2007] TVF TARTINADE BIO TOMATE 200ML | 350 | Stock prédit: -350.0u (-3j restants) → prédit 350u mais non commandé |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Stock prédit: -280.0u (-6j restants) → prédit 140u mais non commandé |
| [PF1462] LV AIOLI BIO 200ML | 370 | Stock prédit: -740.0u (-6j restants) → prédit 370u mais non commandé |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2000 | Stock prédit: -4000.0u (-6j restants) → prédit 2000u mais non commandé |
| [PF1951] LV TARTINADE BIO BASILIC 400G | 166 | Stock prédit: -332.0u (-6j restants) → prédit 166u mais non commandé |
| [PF1707] LV TARTINADE BIO LENTILLE 200 | 330 | Stock prédit: -660.0u (-6j restants) → prédit 330u mais non commandé |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2310 | Stock prédit: -4620.0u (-6j restants) → prédit 2310u mais non commandé |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 330 | Stock prédit: -660.0u (-6j restants) → prédit 330u mais non commandé |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 700 | Stock prédit: -1400.0u (-6j restants) → prédit 700u mais non commandé |
| [PF1719] LV VIN CIBOULET PET 250 BIO | 500 | Stock prédit: -1000.0u (-6j restants) → prédit 500u mais non commandé |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Stock prédit: -3066.7u (-46j restants) → prédit 200u mais non commandé |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Stock prédit: -2300.0u (-46j restants) → prédit 150u mais non commandé |
| [PF1524] JF VINAIGRET TRUFFES WECK 200M | 130 | Stock prédit: -1993.3u (-46j restants) → prédit 130u mais non commandé |
| [PF1553] JF VINAIGRET MIEL MOU WECK 200 | 120 | Stock prédit: -1840.0u (-46j restants) → prédit 120u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-18T20:04:27.282Z*
