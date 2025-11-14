# Rapport Backtest - Client CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON

## Contexte

- **Client** : CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON (ID: 24092)
- **Commande réelle** : S39541
- **Date commande** : 2025-10-03 10:10:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 59 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 1 produits réels, 0 détectés |
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

## False Positives (59)

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
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 2 | Stock prédit: -0.4u (-6j restants) → prédit 2u mais non commandé |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF0539] JF VOL AU VENT 2,5 KG | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF0501] YVALLI VINAIGRETTE 5 KG JERRY | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF1552] LV KETCHUP BIO 290G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 3 | Stock prédit: -1.4u (-58j restants) → prédit 3u mais non commandé |
| [PF0096] FILOU MOUTARDE 3 KG | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3301] DLL MAYONNAISE CITRON 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 1 | Stock prédit: -0.9u (-77j restants) → prédit 1u mais non commandé |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML | 1 | Stock prédit: -1.0u (-107j restants) → prédit 1u mais non commandé |
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 2 | Stock prédit: -0.9u (-70j restants) → prédit 2u mais non commandé |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3272] JF PEPPER MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF3251] JEFKE CHIVE VINAIGRETTE 5L | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1473] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1446] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1526] JF SAUCE TARTARE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF1527] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PF2003] TVF TARTINADE BIO PAPRIKA200ML | 2 | Stock prédit: -3.3u (-177j restants) → prédit 2u mais non commandé |
| [PF3240] TVF TARTINADE BIO BETTERAVE RAIFORT 180G | 2 | Stock prédit: -3.3u (-177j restants) → prédit 2u mais non commandé |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [PF2002] TVF TARTINADE BIO MANGUE 200ML | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF2004] TVF TARTINADE BIO CAROTTE200ML | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF2005] TVF TARTINADE BIO OLIVE 200ML | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF2006] TVF TARTINADE BIO AUBERGINE200 | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF2007] TVF TARTINADE BIO TOMATE 200ML | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF3239] TVF TARTINADE BIO MOUTARDE AGAVE 180G | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF3250] TVF TARTINADE BIO POIS CHICHES 180G | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF3291] TVF LITTLE MISS MANGO 380G | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF3292] TVF MISS BEAUTY AUBERGINE 380G | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF3293] TVF MISS CHEEKY CHICKPEA 380G | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |
| [PF3294] TVF BEST FRIENDS TOMATO & BASILICO 380G | 2 | Stock prédit: -1.9u (-125j restants) → prédit 2u mais non commandé |


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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 1 | Stock suffisant: 1.2u (25j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-14T09:35:36.437Z*
