# Rapport Backtest - Client CRF MARKET EUPEN SHOPPING CENT ROTENBERG

## Contexte

- **Client** : CRF MARKET EUPEN SHOPPING CENT ROTENBERG (ID: 29081)
- **Commande réelle** : S39163
- **Date commande** : 2025-09-11 13:46:55
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.0% | 87 produits prédits, 20 corrects |
| **Rappel** | 69.0% | 29 produits réels, 20 détectés |
| **F1-Score** | 34.5% | Score équilibré global |

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
| **MAE** | 0.30 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 22.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (20)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0013] MF Olives Vertes 500g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact |


---

## False Positives (67)

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
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [LD015] LD Onion Spread 180g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LD011] LD Organic Kids Spread 180 g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.6u (-22j restants) → prédit 1u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -0.4u (-22j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0052] MF Pois chiches  500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 6 | Stock prédit: 0.0u (0j restants) → prédit 6u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: -0.7u (-48j restants) → prédit 1u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 2 | Stock prédit: -0.8u (-34j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: -0.7u (-80j restants) → prédit 1u mais non commandé |
| [TVF017] TVF TARTINADE BIO TOMATE 380G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TVF014] TVF TARTINADE BIO MANGUE 380G | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL27] FIL MOUTARDE 300ML SQUEEZE  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL26] FIL SAMOURAI 300ML SQUEEZE  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL25] FIL ANDALOUSE 300ML SQUEEZE  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL24] FIL CURRY KETCHUP 300ML SQUEEZE  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL22] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL21] FIL BOULETTES SAUCE CHASSEUR 800G BOCAL  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL20] FIL CARBONNADES 800G BOCAL  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL18] FIL VOL AU VENT 800G BOCAL  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL11] FIL MAYONNAISE ŒUFS 1L SEAU  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL09] FIL MOUTARDE 300G BOCAL | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL08] FIL MOUTARDE 700G BOCAL | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [FIL03] FIL SAUCE CHASSEUR 820G BOCAL  | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB009] CB Cherry Apple juice 1l | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB002] CB Cherry Apple juice 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB003] CB Blackcurrant Apple Juice 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB004] CB Apple Nettle juice 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [CB007] CB Apple Nettle juice 1l | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |


---

## False Negatives (9)

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
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock suffisant: 0.4u (24j restants > seuil 19j) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock suffisant: 0.3u (24j restants > seuil 19j) |
| [MF0059] MF Confi Fraise- Ardbei | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [CB001] CB Apple juice 25cl | 1 | Stock suffisant: 0.6u (24j restants > seuil 19j) |
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 270j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 270j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-14T09:37:50.456Z*
