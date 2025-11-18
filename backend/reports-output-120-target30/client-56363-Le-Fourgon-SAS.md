# 📊 Rapport Auto-Proposal - Le Fourgon SAS

**📅 Date:** 18/11/2025 11:02
**🆔 Client ID:** 56363
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 3.0s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 4**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 30j): 1

**Total produits (Phase 1): 4**
**Quantité totale brute: 85 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[MF0024] MF KETCHUP 250g</strong> (ID: 564) - 16 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5321
- **Stock restant estimé**: 6.46
- **Jours avant rupture**: **12j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-06 | S36541 | 32 | 13.80€ |
| 2025-04-01 | S35738 | 16 | 13.80€ |
| 2025-03-06 | S35206 | 10 | 13.80€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [32, 16, 10]
- **Nombre commandes**: 3
- **Valeur médiane**: 16

</details>

<details>
<summary>🔴 <strong>[MF0047] MF Mayonnaise 250ml</strong> (ID: 14850) - 16 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5321
- **Stock restant estimé**: -9.54
- **Jours avant rupture**: **-17j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-06 | S36541 | 16 | 13.80€ |
| 2025-04-01 | S35738 | 32 | 13.80€ |
| 2025-03-06 | S35206 | 10 | 13.80€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [16, 32, 10]
- **Nombre commandes**: 3
- **Valeur médiane**: 16

</details>

<details>
<summary>🔴 <strong>[MF0053] MF Maïs 500g</strong> (ID: 16951) - 40 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.2569
- **Stock restant estimé**: -20.33
- **Jours avant rupture**: **-16j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-06 | S36541 | 40 | 10.20€ |
| 2025-04-01 | S35738 | 32 | 10.20€ |
| 2025-03-06 | S35206 | 65 | 10.20€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [40, 32, 65]
- **Nombre commandes**: 3
- **Valeur médiane**: 40

</details>

<details>
<summary>🔴 <strong>[MF0021] MF Sauce BBQ 250ml</strong> (ID: 561) - 13 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.2385
- **Stock restant estimé**: -3.80
- **Jours avant rupture**: **-15j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-04-01 | S35738 | 16 | 17.10€ |
| 2025-03-06 | S35206 | 10 | 17.10€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [16, 10]
- **Nombre commandes**: 2
- **Valeur médiane**: 13

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 1071.90€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [MF0024] MF KETCHUP 250g | 564 | 16 | 0 | 16 | 13.80€ | 220.80€ |
| [MF0047] MF Mayonnaise 250ml | 14850 | 16 | 0 | 16 | 13.80€ | 220.80€ |
| [MF0053] MF Maïs 500g | 16951 | 40 | 0 | 40 | 10.20€ | 408.00€ |
| [MF0021] MF Sauce BBQ 250ml | 561 | 13 | 0 | 13 | 17.10€ | 222.30€ |

**Total (Phase 2.5): 1071.90€**

---
