# 📊 RAPPORT COMPARATIF : Prédiction vs Réel
## Cas Client : LE TIROIR DES SAVEURS (30 octobre 2025)

---

## 🎯 RÉSUMÉ

| Métrique | Résultat | Statut |
|----------|----------|--------|
| **Précision montant** | 61% (1108€ réel vs 1818€ prédit) | 🔴 Écart -39% |
| **Taux détection produits** | 78% (7/9 produits détectés) | 🟡 Acceptable |
| **Taux quantité exacte** | 57% (4/7 quantités parfaites) | 🟡 Acceptable |
| **MOQ atteint (300€)** | ✅ Oui (1108€) | ✅ OK |

---

## 📋 COMPARAISON DÉTAILLÉE : PRÉDICTION vs RÉEL

### ✅ Prédictions Parfaites (4 produits)

<details>
<summary><b>REB02 - Chips Paprika</b> | Prédit: 8 TU10 (150€) | Réel: 8 TU10 (150€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38790** (28/08/2025) : 8 TU10 @ 18,80€
- **S36772** (14/05/2025) : 8 TU10 @ 18,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [8, 8]
- **Médiane calculée** : 8 TU10
- **Quantité prédite** : 8 TU10

### ✅ Résultat
Prédiction parfaite : 8 TU10 prédit = 8 TU10 réel (0% écart)

Le client commande toujours la même quantité, le système a correctement identifié ce pattern.

</details>

<details>
<summary><b>REB01 - Chips Sel de mer</b> | Prédit: 8 TU10 (150€) | Réel: 8 TU10 (150€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38790** (28/08/2025) : 8 TU10 @ 18,80€
- **S36772** (14/05/2025) : 8 TU10 @ 18,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [8, 8]
- **Médiane calculée** : 8 TU10
- **Quantité prédite** : 8 TU10

### ✅ Résultat
Prédiction parfaite : 8 TU10 prédit = 8 TU10 réel (0% écart)

Le client commande toujours la même quantité, le système a correctement identifié ce pattern.

</details>

<details>
<summary><b>REB03 - Chips Poivre noir</b> | Prédit: 4 TU10 (75€) | Réel: 4 TU10 (75€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S36772** (14/05/2025) : 4 TU10 @ 18,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [4]
- **Dernière commande** : 4 TU10
- **Quantité prédite** : 4 TU10

### ✅ Résultat
Prédiction parfaite : 4 TU10 prédit = 4 TU10 réel (0% écart)

Malgré la confiance LOW (1 seule commande), la prédiction est parfaite. Le client a reproduit son comportement précédent.

</details>

<details>
<summary><b>KOKO03 - Kombucha Framboise</b> | Prédit: 8 TU12 (202€) | Réel: 8 TU12 (202€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38790** (28/08/2025) : 6 TU12 @ 25,20€
- **S37694** (26/06/2025) : 10 TU12 @ 23,88€
- **S36772** (14/05/2025) : 8 TU12 @ 25,20€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (3 commandes)
- **Quantités historiques** : [6, 10, 8]
- **Médiane calculée** : 8 TU12
- **Quantité prédite** : 8 TU12

### ✅ Résultat
Prédiction parfaite : 8 TU12 prédit = 8 TU12 réel (0% écart)

La médiane des 3 commandes passées correspond exactement à la commande réelle.

</details>

---

### ⚠️ Prédictions avec Écart de Quantité (3 produits)

<details>
<summary><b>KOKO02 - Kombucha Citron</b> | Prédit: 9 TU12 (215€) | Réel: 8 TU12 (202€) | ⚠️ -11% écart</summary>

### 📊 Historique des commandes
- **S37694** (26/06/2025) : 10 TU12 @ 23,88€
- **S36772** (14/05/2025) : 8 TU12 @ 25,20€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [10, 8]
- **Médiane calculée** : 9 TU12
- **Quantité prédite** : 9 TU12

### ⚠️ Résultat
Légère sur-prédiction : 9 TU12 prédit > 8 TU12 réel (-11% écart, -13€)

La médiane de [10, 8] donne 9, mais le client a commandé 8. Écart acceptable.

</details>

<details>
<summary><b>REB04 - Chips Thym</b> | Prédit: 6 TU10 (113€) | Réel: 4 TU10 (75€) | ⚠️ -33% écart</summary>

### 📊 Historique des commandes
- **S36772** (14/05/2025) : 6 TU10 @ 18,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [6]
- **Dernière commande** : 6 TU10
- **Quantité prédite** : 6 TU10

### ⚠️ Résultat
Sur-prédiction modérée : 6 TU10 prédit > 4 TU10 réel (-33% écart, -38€)

Avec 1 seule commande historique, le système répète la dernière quantité. Le client a réduit sa commande de 6 à 4.

</details>

<details>
<summary><b>UPI07 - Jus Framboise</b> | Prédit: 8 TU12 (143€) | Réel: 5 TU12 (89€) | ⚠️ -38% écart</summary>

### 📊 Historique des commandes
- **S36772** (14/05/2025) : 8 TU12 @ 17,88€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [8]
- **Dernière commande** : 8 TU12
- **Quantité prédite** : 8 TU12

### ⚠️ Résultat
Sur-prédiction modérée : 8 TU12 prédit > 5 TU12 réel (-38% écart, -54€)

Avec 1 seule commande historique, le système répète la dernière quantité. Le client a réduit sa commande de 8 à 5.

</details>

---

### ❌ Sur-prédictions (5 produits non commandés)

<details>
<summary><b>WIG01 - Cidre WIGNAC</b> | Prédit: 4 TU12 (103€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38790** (28/08/2025) : 4 TU12 @ 25,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [4]
- **Dernière commande** : 4 TU12
- **Quantité prédite** : 4 TU12

### ❌ Résultat
Sur-prédiction totale : 4 TU12 prédit > 0 réel (-100% écart, -103€)

Le client a commandé ce produit 1 seule fois il y a 63 jours et ne l'a jamais re-commandé. C'était probablement un test non concluant.

</details>

<details>
<summary><b>KOKO01 - Kombucha Original</b> | Prédit: 10 TU12 (239€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S37694** (26/06/2025) : 10 TU12 @ 23,88€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [10]
- **Dernière commande** : 10 TU12
- **Quantité prédite** : 10 TU12

### ❌ Résultat
Sur-prédiction totale : 10 TU12 prédit > 0 réel (-100% écart, -239€)

Le client a commandé ce produit 1 seule fois il y a 126 jours et ne l'a jamais re-commandé. Le client préfère les variétés aromatisées (Citron, Framboise).

</details>

<details>
<summary><b>RISH04 - Kombucha Basil</b> | Prédit: 5 TU12 (125€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S37694** (26/06/2025) : 5 TU12 @ 25,08€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [5]
- **Dernière commande** : 5 TU12
- **Quantité prédite** : 5 TU12

### ❌ Résultat
Sur-prédiction totale : 5 TU12 prédit > 0 réel (-100% écart, -125€)

Le client a commandé ce produit 1 seule fois il y a 126 jours et ne l'a jamais re-commandé. C'était probablement un test.

</details>

<details>
<summary><b>UPI02 - Jus Fraise</b> | Prédit: 8 TU12 (143€) | Réel: 0 (substitué par UPI04) | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S36772** (14/05/2025) : 8 TU12 @ 17,88€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [8]
- **Dernière commande** : 8 TU12
- **Quantité prédite** : 8 TU12

### ❌ Résultat
Sur-prédiction totale : 8 TU12 prédit > 0 réel (-100% écart, -143€)

Le client a commandé ce produit 1 seule fois il y a 169 jours. Cette fois, il a substitué par UPI04 (Cerise) qui n'était pas dans l'historique de la fenêtre d'analyse.

</details>

<details>
<summary><b>REB11 - Chips Truffes</b> | Prédit: 6 TU10 (159€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S36772** (14/05/2025) : 6 TU10 @ 26,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [6]
- **Dernière commande** : 6 TU10
- **Quantité prédite** : 6 TU10

### ❌ Résultat
Sur-prédiction totale : 6 TU10 prédit > 0 réel (-100% écart, -159€)

Produit premium commandé 1 seule fois il y a 169 jours, jamais re-commandé. Le prix élevé (26,50€ vs 18,80€ pour les autres chips) suggère que c'était un test.

</details>

---

### ❌ Produits Manqués (2 produits commandés mais non prédits)

<details>
<summary><b>REB08 - Chips Piment</b> | Prédit: 0 | Réel: 4 TU10 (75€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans la fenêtre d'analyse (180 jours)**

Dernière commande hors fenêtre : 28/03/2025 (216 jours)

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit hors fenêtre d'analyse
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 4 TU10 réel (+75€)

Le produit avait été commandé il y a 216 jours, soit au-delà de la fenêtre d'analyse de 180 jours. Le système ne l'a donc pas détecté.

</details>

<details>
<summary><b>UPI04 - Jus Cerise</b> | Prédit: 0 | Réel: 5 TU12 (89€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans la fenêtre d'analyse (180 jours)**

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit hors fenêtre d'analyse ou nouvelle substitution
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 5 TU12 réel (+89€)

Le client a substitué UPI02 (Fraise) par UPI04 (Cerise). Ce produit n'était pas dans l'historique de la fenêtre d'analyse.

</details>

---

## 📈 RÉPARTITION PAR CATÉGORIE D'ERREUR

| Catégorie | Nombre | % Total | Montant Écart | Observation Clé |
|-----------|--------|---------|---------------|-----------------|
| ✅ **Parfait** | 4 | 29% | 0€ | Tous ont confiance MEDIUM ou historique stable |
| ⚠️ **Erreur quantité** | 3 | 21% | -105€ | Écarts modérés (-11% à -38%) |
| ❌ **Sur-prédit** | 5 | 36% | **-769€** | 🚨 **100% sont LOW confidence** |
| ❌ **Manqué** | 2 | 14% | +164€ | Hors fenêtre d'analyse (180 jours) |

### 🔑 Insight Principal

**100% des sur-prédictions (5/5) sont des produits LOW confidence** avec 1 seule commande historique, représentant **88% de l'erreur brute** (-769€ sur -874€ d'écart négatif).

Les produits MEDIUM confidence ont un taux de réussite de 75% (3/4 parfaits, 1/4 avec léger écart).

---

## 📊 TABLEAU RÉCAPITULATIF

| # | Produit | Prédit | Réel | Écart | Confiance | Statut |
|---|---------|--------|------|-------|-----------|--------|
| 1 | **REB02** - Chips Paprika | 8 TU10<br>150€ | 8 TU10<br>150€ | **0%** | MEDIUM | ✅ Parfait |
| 2 | **REB01** - Chips Sel de mer | 8 TU10<br>150€ | 8 TU10<br>150€ | **0%** | MEDIUM | ✅ Parfait |
| 3 | **REB03** - Chips Poivre noir | 4 TU10<br>75€ | 4 TU10<br>75€ | **0%** | LOW | ✅ Parfait |
| 4 | **KOKO03** - Kombucha Framboise | 8 TU12<br>202€ | 8 TU12<br>202€ | **0%** | MEDIUM | ✅ Parfait |
| 5 | **KOKO02** - Kombucha Citron | 9 TU12<br>215€ | 8 TU12<br>202€ | **-11%** | MEDIUM | ⚠️ Léger |
| 6 | **REB04** - Chips Thym | 6 TU10<br>113€ | 4 TU10<br>75€ | **-33%** | LOW | ⚠️ Moyen |
| 7 | **UPI07** - Jus Framboise | 8 TU12<br>143€ | 5 TU12<br>89€ | **-38%** | LOW | ⚠️ Moyen |
| 8 | **WIG01** - Cidre WIGNAC | 4 TU12<br>103€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 9 | **KOKO01** - Kombucha Original | 10 TU12<br>239€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 10 | **RISH04** - Kombucha Basil | 5 TU12<br>125€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 11 | **UPI02** - Jus Fraise | 8 TU12<br>143€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 12 | **REB11** - Chips Truffes | 6 TU10<br>159€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 13 | **REB08** - Chips Piment 🔍 | 0<br>0€ | 4 TU10<br>75€ | **+100%** | - | ❌ Manqué |
| 14 | **UPI04** - Jus Cerise 🔍 | 0<br>0€ | 5 TU12<br>89€ | **+100%** | - | ❌ Manqué |
| | **TOTAL** | **1 818€** | **1 108€** | **-39%** | | **7/14 OK** |

🔍 = Produits manqués (hors fenêtre d'analyse ou substituables)

---

**Rapport généré le** : 5 novembre 2025
**Cas analysé** : Vente S39999 - LE TIROIR DES SAVEURS
**Analysé par** : Auto-Proposal System v2
**Données sources** : prediction-S39999.json + SALE-S39999-le-tiroir-des-saveurs.md
