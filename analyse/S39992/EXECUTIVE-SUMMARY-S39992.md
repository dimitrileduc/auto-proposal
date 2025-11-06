# 📊 RAPPORT COMPARATIF : Prédiction vs Réel
## Cas Client : ITM BURENTRAD SA BURENVILLE (29 octobre 2025)

---

## 🎯 RÉSUMÉ

| Métrique | Résultat | Statut |
|----------|----------|--------|
| **Précision montant** | 69% (306€ réel vs 445€ prédit) | 🟡 Écart -31% |
| **Taux détection produits** | 62% (8/13 produits détectés) | 🟡 Acceptable |
| **Taux quantité exacte** | 100% (8/8 quantités parfaites) | ✅ Excellent |
| **MOQ atteint (300€)** | ✅ Oui (306€) | ✅ OK |

---

## 📋 COMPARAISON DÉTAILLÉE : PRÉDICTION vs RÉEL

### ✅ Prédictions Parfaites (8 produits)

<details>
<summary><b>JF034 - Samourai Squeeze 300ml</b> | Prédit: 1 TU12 (26€) | Réel: 1 TU12 (26€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU12 @ 26,40€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU12
- **Quantité prédite** : 1 TU12

### ✅ Résultat
Prédiction parfaite : 1 TU12 prédit = 1 TU12 réel (0% écart)

Malgré la confiance LOW (1 seule commande), la prédiction est parfaite. Le client a reproduit son comportement précédent.

</details>

<details>
<summary><b>JF036 - Mitraillette Squeeze 300ml</b> | Prédit: 1 TU12 (26€) | Réel: 1 TU12 (26€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU12 @ 26,40€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU12
- **Quantité prédite** : 1 TU12

### ✅ Résultat
Prédiction parfaite : 1 TU12 prédit = 1 TU12 réel (0% écart)

Comportement régulier du client pour les squeeze 300ml.

</details>

<details>
<summary><b>JF012 - Sauce Béarnaise 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 1 TU6 (20€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 19,50€
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [1, 1]
- **Médiane calculée** : 1 TU6
- **Quantité prédite** : 1 TU6

### ✅ Résultat
Prédiction parfaite : 1 TU6 prédit = 1 TU6 réel (0% écart)

Le client commande toujours la même quantité, le système a correctement identifié ce pattern.

</details>

<details>
<summary><b>JF009 - Sauce Tartare 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 1 TU6 (20€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 19,50€
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [1, 1]
- **Médiane calculée** : 1 TU6
- **Quantité prédite** : 1 TU6

### ✅ Résultat
Prédiction parfaite : 1 TU6 prédit = 1 TU6 réel (0% écart)

Pattern stable détecté avec succès.

</details>

<details>
<summary><b>JF018 - Sauce Samourai 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 1 TU6 (20€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU6
- **Quantité prédite** : 1 TU6

### ✅ Résultat
Prédiction parfaite : 1 TU6 prédit = 1 TU6 réel (0% écart)

La stratégie single_recent_order a bien fonctionné.

</details>

<details>
<summary><b>JF055 - Mayo Miel Moutarde 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 1 TU6 (20€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU6
- **Quantité prédite** : 1 TU6

### ✅ Résultat
Prédiction parfaite : 1 TU6 prédit = 1 TU6 réel (0% écart)

Le client a re-commandé exactement la même quantité.

</details>

<details>
<summary><b>JF008 - Mayonnaise du Chef 470ml</b> | Prédit: 1 TU6 (26€) | Réel: 1 TU6 (26€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 25,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU6
- **Quantité prédite** : 1 TU6

### ✅ Résultat
Prédiction parfaite : 1 TU6 prédit = 1 TU6 réel (0% écart)

Comportement stable et prévisible du client.

</details>

<details>
<summary><b>JF014 - Sauce Béarnaise 470ml</b> | Prédit: 1 TU6 (26€) | Réel: 1 TU6 (26€) | ✅ 0% écart</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 25,80€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU6
- **Quantité prédite** : 1 TU6

### ✅ Résultat
Prédiction parfaite : 1 TU6 prédit = 1 TU6 réel (0% écart)

Quantité standard pour les formats 470ml.

</details>

---

### ❌ Sur-prédictions (11 produits non commandés)

<details>
<summary><b>JF002 - Mayonnaise Basilic 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU6
- **Quantité prédite** : 1 TU6

### ❌ Résultat
Sur-prédiction totale : 1 TU6 prédit > 0 réel (-100% écart, -20€)

Le client a commandé ce produit 1 seule fois il y a 57 jours et ne l'a jamais re-commandé. C'était probablement un test non concluant.

</details>

<details>
<summary><b>JF054 - Mayonnaise Citron 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 19,50€
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [1, 1]
- **Médiane calculée** : 1 TU6
- **Quantité prédite** : 1 TU6

### ❌ Résultat
Sur-prédiction totale : 1 TU6 prédit > 0 réel (-100% écart, -20€)

Malgré 2 commandes historiques et confiance MEDIUM, le client n'a pas re-commandé ce produit. Comportement imprévisible.

</details>

<details>
<summary><b>JF039 - Mayo Baraki Squeeze 300ml</b> | Prédit: 1 TU12 (30€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU12 @ 30,00€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU12
- **Quantité prédite** : 1 TU12

### ❌ Résultat
Sur-prédiction totale : 1 TU12 prédit > 0 réel (-100% écart, -30€)

Produit commandé une seule fois il y a 57 jours, jamais re-commandé. Test non concluant.

</details>

<details>
<summary><b>JF056 - Sauce Chipotle 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 19,50€
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [1, 1]
- **Médiane calculée** : 1 TU6
- **Quantité prédite** : 1 TU6

### ❌ Résultat
Sur-prédiction totale : 1 TU6 prédit > 0 réel (-100% écart, -20€)

Confiance MEDIUM mais produit non re-commandé. Le client semble varier les sauces piquantes.

</details>

<details>
<summary><b>JF017 - Sauce Cocktail 250ml</b> | Prédit: 1 TU6 (20€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 19,50€
- **S37552** (20/06/2025) : 1 TU6 @ 19,50€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `median_recent_orders`
- **Confiance** : MEDIUM (2 commandes)
- **Quantités historiques** : [1, 1]
- **Médiane calculée** : 1 TU6
- **Quantité prédite** : 1 TU6

### ❌ Résultat
Sur-prédiction totale : 1 TU6 prédit > 0 réel (-100% écart, -20€)

Pattern régulier détecté mais client n'a pas commandé cette fois. Rotation des produits.

</details>

<details>
<summary><b>JF024 - Vinaigrette Ciboule 200ml</b> | Prédit: 1 TU9 (27€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU9 @ 27,00€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU9
- **Quantité prédite** : 1 TU9

### ❌ Résultat
Sur-prédiction totale : 1 TU9 prédit > 0 réel (-100% écart, -27€)

Produit commandé une seule fois il y a 57 jours. Le client a préféré la Caesar cette fois.

</details>

<details>
<summary><b>JF025 - Vinaigrette FH 200ml</b> | Prédit: 1 TU9 (27€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU9 @ 27,00€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU9
- **Quantité prédite** : 1 TU9

### ❌ Résultat
Sur-prédiction totale : 1 TU9 prédit > 0 réel (-100% écart, -27€)

Le client alterne entre différentes vinaigrettes. Pattern de rotation.

</details>

<details>
<summary><b>JF021 - Pickles 350ml</b> | Prédit: 1 TU6 (21€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S38927** (02/09/2025) : 1 TU6 @ 20,94€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU6
- **Quantité prédite** : 1 TU6

### ❌ Résultat
Sur-prédiction totale : 1 TU6 prédit > 0 réel (-100% écart, -21€)

Produit commandé une seule fois, non re-commandé. Test non concluant.

</details>

<details>
<summary><b>JF035 - Burger Squeeze 300ml</b> | Prédit: 1 TU12 (26€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU12 @ 26,40€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU12
- **Quantité prédite** : 1 TU12

### ❌ Résultat
Sur-prédiction totale : 1 TU12 prédit > 0 réel (-100% écart, -26€)

Le client a commandé Samourai et Mitraillette Squeeze, mais pas Burger. Rotation des saveurs.

</details>

<details>
<summary><b>JF033 - Andalouse Squeeze 300ml</b> | Prédit: 1 TU12 (26€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU12 @ 26,40€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU12
- **Quantité prédite** : 1 TU12

### ❌ Résultat
Sur-prédiction totale : 1 TU12 prédit > 0 réel (-100% écart, -26€)

Commandé une seule fois il y a 131 jours. Le client n'a pas re-commandé.

</details>

<details>
<summary><b>JF037 - BBQ Squeeze 300ml</b> | Prédit: 1 TU12 (26€) | Réel: 0 | ❌ -100% sur-prédit</summary>

### 📊 Historique des commandes
- **S37552** (20/06/2025) : 1 TU12 @ 26,40€

### 🔢 Calcul de la quantité prédite
- **Stratégie** : `single_recent_order`
- **Confiance** : LOW (1 seule commande)
- **Quantités historiques** : [1]
- **Dernière commande** : 1 TU12
- **Quantité prédite** : 1 TU12

### ❌ Résultat
Sur-prédiction totale : 1 TU12 prédit > 0 réel (-100% écart, -26€)

Produit commandé une seule fois, non re-commandé. Le client semble tester différentes saveurs de squeeze.

</details>

---

### ❌ Produits Manqués (5 produits commandés mais non prédits)

<details>
<summary><b>JF041 - Mayonnaise Squeeze 300ml</b> | Prédit: 0 | Réel: 1 TU12 (26€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans l'historique de ce client**

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit jamais commandé par ce client
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 1 TU12 réel (+26€)

Ce produit n'a jamais été commandé par ITM BURENTRAD dans le passé. Il s'agit d'une **première commande** pour ce produit. Le système ne pouvait pas le détecter.

</details>

<details>
<summary><b>JF057 - Mayonnaise Oeufs 720ml</b> | Prédit: 0 | Réel: 1 TU6 (28€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans l'historique de ce client**

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit jamais commandé par ce client
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 1 TU6 réel (+28€)

Ce produit n'a jamais été commandé par ITM BURENTRAD dans le passé. Il s'agit d'une **première commande** pour ce produit. Le système ne pouvait pas le détecter.

</details>

<details>
<summary><b>JF005 - Mayonnaise Oeufs 250ml</b> | Prédit: 0 | Réel: 1 TU6 (20€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans la fenêtre d'analyse (180 jours)**

Dernière commande hors fenêtre : **S34073** (06/01/2025) - il y a 297 jours

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit hors fenêtre d'analyse (180 jours)
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 1 TU6 réel (+20€)

Le produit avait été commandé il y a 297 jours, soit au-delà de la fenêtre d'analyse de 180 jours. Le système ne l'a donc pas détecté. Le client a **re-commandé après une longue pause**.

</details>

<details>
<summary><b>JF028 - Vinaigrette Caesar 200ml</b> | Prédit: 0 | Réel: 1 TU9 (27€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans la fenêtre d'analyse (180 jours)**

Dernière commande hors fenêtre : **S33398** (20/11/2024) - il y a 344 jours

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit hors fenêtre d'analyse (180 jours)
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 1 TU9 réel (+27€)

Le produit avait été commandé il y a 344 jours, soit au-delà de la fenêtre d'analyse de 180 jours. Le client a **re-commandé après presque un an**.

</details>

<details>
<summary><b>JF001 - Mayonnaise Truffes 250ml</b> | Prédit: 0 | Réel: 1 TU6 (23€) | 🔍 Manqué</summary>

### 📊 Historique des commandes
**Aucune commande dans la fenêtre d'analyse (180 jours)**

Dernière commande hors fenêtre : **S34806** (18/02/2025) - il y a 254 jours

### 🔢 Calcul de la quantité prédite
- **Stratégie** : Produit hors fenêtre d'analyse (180 jours)
- **Confiance** : N/A
- **Quantité prédite** : 0 (non détecté)

### ❌ Résultat
Produit manqué : 0 prédit < 1 TU6 réel (+23€)

Le produit avait été commandé il y a 254 jours, soit au-delà de la fenêtre d'analyse de 180 jours. Produit premium que le client commande **occasionnellement**.

</details>

---

## 📈 RÉPARTITION PAR CATÉGORIE D'ERREUR

| Catégorie | Nombre | % Total | Montant Écart | Observation Clé |
|-----------|--------|---------|---------------|-----------------|
| ✅ **Parfait** | 8 | 42% | 0€ | **100% des quantités prédites sont exactes** |
| ❌ **Sur-prédit** | 11 | 58% | **-262€** | 73% sont LOW confidence (8/11) |
| ❌ **Manqué** | 5 | 26% | +124€ | 2 nouveaux + 3 hors fenêtre (180 jours) |

### 🔑 Insight Principal

**100% des produits détectés ont des quantités PARFAITES** (8/8). Le système de quantification fonctionne parfaitement pour ce client. Le problème est dans la **sélection des produits à inclure**, pas dans le calcul des quantités.

73% des sur-prédictions (8/11) sont des produits LOW confidence avec 1 seule commande, représentant **78% de l'erreur de sur-prédiction** (-204€ sur -262€).

Les produits MEDIUM confidence ont un taux de succès de 40% (2/5 parfaits, 3/5 sur-prédits), montrant que même avec 2 commandes, le comportement du client reste imprévisible en raison de la **rotation des produits**.

---

## 📊 TABLEAU RÉCAPITULATIF

| # | Produit | Prédit | Réel | Écart | Confiance | Statut |
|---|---------|--------|------|-------|-----------|--------|
| 1 | **JF034** - Samourai Squeeze | 1 TU12<br>26€ | 1 TU12<br>26€ | **0%** | LOW | ✅ Parfait |
| 2 | **JF036** - Mitraillette Squeeze | 1 TU12<br>26€ | 1 TU12<br>26€ | **0%** | LOW | ✅ Parfait |
| 3 | **JF012** - Béarnaise 250ml | 1 TU6<br>20€ | 1 TU6<br>20€ | **0%** | MEDIUM | ✅ Parfait |
| 4 | **JF009** - Tartare 250ml | 1 TU6<br>20€ | 1 TU6<br>20€ | **0%** | MEDIUM | ✅ Parfait |
| 5 | **JF018** - Samourai 250ml | 1 TU6<br>20€ | 1 TU6<br>20€ | **0%** | LOW | ✅ Parfait |
| 6 | **JF055** - Mayo Miel Moutarde | 1 TU6<br>20€ | 1 TU6<br>20€ | **0%** | LOW | ✅ Parfait |
| 7 | **JF008** - Mayo Chef 470ml | 1 TU6<br>26€ | 1 TU6<br>26€ | **0%** | LOW | ✅ Parfait |
| 8 | **JF014** - Béarnaise 470ml | 1 TU6<br>26€ | 1 TU6<br>26€ | **0%** | LOW | ✅ Parfait |
| 9 | **JF002** - Basilic 250ml | 1 TU6<br>20€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 10 | **JF054** - Citron 250ml | 1 TU6<br>20€ | 0<br>0€ | **-100%** | MEDIUM | ❌ Sur-prédit |
| 11 | **JF039** - Baraki Squeeze | 1 TU12<br>30€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 12 | **JF056** - Chipotle 250ml | 1 TU6<br>20€ | 0<br>0€ | **-100%** | MEDIUM | ❌ Sur-prédit |
| 13 | **JF017** - Cocktail 250ml | 1 TU6<br>20€ | 0<br>0€ | **-100%** | MEDIUM | ❌ Sur-prédit |
| 14 | **JF024** - Ciboule 200ml | 1 TU9<br>27€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 15 | **JF025** - Vinaigrette FH | 1 TU9<br>27€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 16 | **JF021** - Pickles | 1 TU6<br>21€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 17 | **JF035** - Burger Squeeze | 1 TU12<br>26€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 18 | **JF033** - Andalouse Squeeze | 1 TU12<br>26€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 19 | **JF037** - BBQ Squeeze | 1 TU12<br>26€ | 0<br>0€ | **-100%** | LOW | ❌ Sur-prédit |
| 20 | **JF041** - Mayo Squeeze 300ml 🔍 | 0<br>0€ | 1 TU12<br>26€ | **+100%** | - | ❌ Manqué |
| 21 | **JF057** - Mayo Oeufs 720ml 🔍 | 0<br>0€ | 1 TU6<br>28€ | **+100%** | - | ❌ Manqué |
| 22 | **JF005** - Mayo Oeufs 250ml 🔍 | 0<br>0€ | 1 TU6<br>20€ | **+100%** | - | ❌ Manqué (297j) |
| 23 | **JF028** - Caesar 200ml 🔍 | 0<br>0€ | 1 TU9<br>27€ | **+100%** | - | ❌ Manqué (344j) |
| 24 | **JF001** - Truffes 250ml 🔍 | 0<br>0€ | 1 TU6<br>23€ | **+100%** | - | ❌ Manqué (254j) |
| | **TOTAL** | **445€** | **306€** | **-31%** | | **8/24 OK** |

🔍 = Produits manqués (nouveaux produits ou hors fenêtre d'analyse de 180 jours)

---

**Rapport généré le** : 6 novembre 2025
**Cas analysé** : Vente S39992 - ITM BURENTRAD SA BURENVILLE
**Analysé par** : Auto-Proposal System v2
**Données sources** : prediciton.json + SALE-S39992-tipi-boutique-zero-dechet.md
