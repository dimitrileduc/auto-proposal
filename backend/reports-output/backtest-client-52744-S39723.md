# Rapport Backtest - Client SCHMETS DELICATESSES

## Contexte

- **Client** : SCHMETS DELICATESSES (ID: 52744)
- **Commande réelle** : S39723
- **Date commande** : 2025-10-14 13:32:48
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 19 produits prédits, 0 corrects |
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

## False Positives (19)

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | Stock prédit: 4.0u (19j restants) → prédit 6u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 8 | Stock prédit: 5.0u (16j restants) → prédit 8u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | Stock prédit: 2.4u (14j restants) → prédit 4u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Stock prédit: 2.2u (11j restants) → prédit 4u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 3 | Stock prédit: 3.0u (29j restants) → prédit 3u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 4 | Stock prédit: 3.7u (29j restants) → prédit 4u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | Stock prédit: 2.0u (20j restants) → prédit 3u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 6 | Stock prédit: 0.2u (0j restants) → prédit 6u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | Stock prédit: 2.0u (9j restants) → prédit 4u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 8 | Stock prédit: 5.5u (21j restants) → prédit 8u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.7u (19j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Stock prédit: 1.2u (13j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 4 | Stock prédit: 1.7u (7j restants) → prédit 4u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 8 | Stock prédit: 4.2u (22j restants) → prédit 8u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Stock prédit: 0.5u (8j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 4 | Stock prédit: -0.9u (-7j restants) → prédit 4u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 5 | Stock prédit: 0.2u (1j restants) → prédit 5u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: -0.7u (-29j restants) → prédit 2u mais non commandé |


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
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 40 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-18T10:44:07.404Z*
