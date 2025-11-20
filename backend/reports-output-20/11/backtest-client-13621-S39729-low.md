# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S39729
- **Date commande** : 2025-10-14 14:05:41
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 109
- **Tokens**: 223,825 input + 26,548 output = 250,373 total
- **Coût**: $1.0697 (~106.97¢)
- **Coût par produit LLM**: $0.0098


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 45 produits prédits, 0 corrects |
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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
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

## False Positives (45)

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
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 60 | Stock prédit: 60.0u (22j restants) → prédit 60u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Stock prédit: 50.0u (21j restants) → prédit 50u mais non commandé |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Stock prédit: 0.5u (11j restants) → prédit 1u mais non commandé |
| [RF002] REFIELD Passata tomates 500G | 1 | Stock prédit: 0.5u (11j restants) → prédit 1u mais non commandé |
| [PF3400] JF MAYONNAISE OEUFS SQUEEZE 300ML | 112 | Stock prédit: 56.0u (11j restants) → prédit 112u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [MF0021] MF Sauce BBQ 250ml | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: 0.2u (3j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: 6.5u (3j restants) → prédit 36u mais non commandé |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 10 | Stock prédit: -2.7u (-5j restants) → prédit 10u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Stock prédit: -2.7u (-5j restants) → prédit 10u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: -2.7u (-5j restants) → prédit 10u mais non commandé |
| [PF3387] JF VINAIGRETTE CAESAR 240ML | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3383] JF VINAIGRETTE CIBOULETTE 240ML  | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3386] JF VINAIGRETTE MIEL MOUTARDE 240ML | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3385] JF VINAIGRETTE TRUFFES 240ML | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3384] JF VINAIGRETTE FINES HERBES 240ML  | 200 | Stock prédit: -145.5u (-16j restants) → prédit 200u mais non commandé |
| [PF3395] LV SDP SAUCE COCKTAIL 125G | 2100 | Stock prédit: -2863.6u (-30j restants) → prédit 2100u mais non commandé |
| [PF3392] LV FR TARTINAPERO BIO ASPERGE BOCAL 190G | 434 | Stock prédit: -591.8u (-29j restants) → prédit 434u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 3 | Stock prédit: -4.1u (-29j restants) → prédit 3u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: -15.0u (-33j restants) → prédit 10u mais non commandé |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 200 | Stock prédit: -300.0u (-33j restants) → prédit 200u mais non commandé |
| [JOY08] JOY! Confiture bio à la framboise 370g | 200 | Stock prédit: -300.0u (-33j restants) → prédit 200u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 8 | Stock prédit: -27.6u (-76j restants) → prédit 8u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Stock prédit: -138.2u (-76j restants) → prédit 40u mais non commandé |
| [AQUA01] AQUAPAX - eau minérale naturelle 500ml | 111 | Stock prédit: -489.4u (-97j restants) → prédit 111u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T20:01:24.322Z*
