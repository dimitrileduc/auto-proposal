# Rapport Backtest - Client FOODPRINT SRL ECHANTILLON

## Contexte

- **Client** : FOODPRINT SRL ECHANTILLON (ID: 24784)
- **Commande réelle** : S39741
- **Date commande** : 2025-10-15 12:28:37
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 78 produits prédits, 0 corrects |
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

## False Positives (78)

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
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.5u (8j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.5u (11j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [MF0058] MF Confi Groseilles Bessen | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0059] MF Confi Fraise- Ardbei | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: -0.4u (-5j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: -0.4u (-5j restants) → prédit 1u mais non commandé |
| [MF0014] MF Olives noires 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Stock prédit: 0.3u (4j restants) → prédit 2u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 2 | Stock prédit: 0.3u (4j restants) → prédit 2u mais non commandé |
| [MF0052] MF Pois chiches  500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [DIS0001] Display M&F | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [LD015] LD Onion Spread 180g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LD011] LD Organic Kids Spread 180 g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Stock prédit: -0.7u (-21j restants) → prédit 1u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: -0.5u (-20j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: -0.5u (-20j restants) → prédit 2u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Stock prédit: -0.5u (-20j restants) → prédit 2u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: -0.8u (-49j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: -0.5u (-36j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |


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
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 1 | Jamais commandé avant dans les 180j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T10:00:34.084Z*
