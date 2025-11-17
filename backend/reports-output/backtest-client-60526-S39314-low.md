# Rapport Backtest - Client ROB - THE GOURMETS' MARKET

## Contexte

- **Client** : ROB - THE GOURMETS' MARKET (ID: 60526)
- **Commande réelle** : S39314
- **Date commande** : 2025-09-22 07:01:50
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j

---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 17 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 20 produits réels, 0 détectés |
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

## False Positives (17)

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
| [RISH07] RISH kombucha BIO - PetNat Fig 750ml  | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 8 | Stock prédit: 0.0u (0j restants) → prédit 8u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 8 | Stock prédit: 0.0u (0j restants) → prédit 8u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 8 | Stock prédit: 0.0u (0j restants) → prédit 8u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 8 | Stock prédit: 0.0u (0j restants) → prédit 8u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 12 | Stock prédit: 0.0u (0j restants) → prédit 12u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 12 | Stock prédit: 0.0u (0j restants) → prédit 12u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 5 | Stock prédit: 0.0u (0j restants) → prédit 5u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | Stock prédit: 0.0u (0j restants) → prédit 4u mais non commandé |


---

## False Negatives (20)

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock suffisant: -1.3u (-22j restants > seuil 19j) |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 3 | Stock suffisant: 2.0u (20j restants > seuil 19j) |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | Stock suffisant: -1.0u (-22j restants > seuil 19j) |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock suffisant: -0.6u (-5j restants > seuil 19j) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | Stock suffisant: -1.2u (-15j restants > seuil 19j) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock suffisant: 1.6u (46j restants > seuil 19j) |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock suffisant: -0.5u (-8j restants > seuil 19j) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Stock suffisant: -0.6u (-8j restants > seuil 19j) |
| [RISH01] RISH kombucha BIO - original 330ml | 10 | Stock suffisant: -2.2u (-9j restants > seuil 19j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 10 | Stock suffisant: -6.6u (-23j restants > seuil 19j) |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 6 | Stock suffisant: -4.4u (-17j restants > seuil 19j) |
| [RISH05] RISH kombucha BIO - rose 750ml | 6 | Stock suffisant: -8.5u (-56j restants > seuil 19j) |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 10 | Stock suffisant: -7.7u (-26j restants > seuil 19j) |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 2 | Stock suffisant: -0.0u (-1j restants > seuil 19j) |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Stock suffisant: -1.0u (-43j restants > seuil 19j) |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Stock suffisant: -3.6u (-32j restants > seuil 19j) |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 6 | Stock suffisant: 0.9u (17j restants > seuil 19j) |
| [LEA09] LEAMO cola bio 330ml | 3 | Stock suffisant: -1.8u (-62j restants > seuil 19j) |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 2 | Stock suffisant: -2.8u (-54j restants > seuil 19j) |
| [LEA07] LEAMO orangeade bio 330ml | 4 | Stock suffisant: -0.4u (-11j restants > seuil 19j) |


---

*Rapport généré automatiquement le 2025-11-17T12:02:13.256Z*
