# 📊 Rapport Auto-Proposal - Le Fourgon SAS

**📅 Date:** 17/11/2025 13:02
**🆔 Client ID:** 56363
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 1.5s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 4**
- Urgents (rupture ≤ 0j): 4
- Modérés (0 < rupture ≤ 19j): 0

**Total produits (Phase 1): 4**
**Quantité totale brute: 88 unités**

### Détails par produit


<details>
<summary>🔴 <strong>[MF0024] MF KETCHUP 250g</strong> (ID: 564) - 20 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.8205
- **Stock restant estimé**: -6.56
- **Jours avant rupture**: **-7j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-06 | S36541 | 32 | 13.80€ |
| 2025-04-01 | S35738 | 16 | 13.80€ |
| 2025-03-06 | S35206 | 10 | 13.80€ |
| 2025-02-19 | S34966 | 25 | 13.80€ |
| 2025-02-05 | S34681 | 20 | 13.80€ |
| 2025-01-17 | S34386 | 25 | 13.80€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [32, 16, 10, 25, 20]
- **Nombre commandes**: 6
- **Valeur médiane**: 20

</details>

<details>
<summary>🔴 <strong>[MF0047] MF Mayonnaise 250ml</strong> (ID: 14850) - 20 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.8526
- **Stock restant estimé**: -24.07
- **Jours avant rupture**: **-28j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-06 | S36541 | 16 | 13.80€ |
| 2025-04-01 | S35738 | 32 | 13.80€ |
| 2025-03-06 | S35206 | 10 | 13.80€ |
| 2025-02-19 | S34966 | 35 | 13.80€ |
| 2025-02-05 | S34681 | 20 | 13.80€ |
| 2025-01-17 | S34386 | 20 | 13.80€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [16, 32, 10, 35, 20]
- **Nombre commandes**: 6
- **Valeur médiane**: 20

</details>

<details>
<summary>🔴 <strong>[MF0053] MF Maïs 500g</strong> (ID: 16951) - 32 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.4231
- **Stock restant estimé**: -26.88
- **Jours avant rupture**: **-18j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-06 | S36541 | 40 | 10.20€ |
| 2025-04-01 | S35738 | 32 | 10.20€ |
| 2025-03-06 | S35206 | 65 | 10.20€ |
| 2025-02-19 | S34966 | 20 | 10.20€ |
| 2025-02-05 | S34681 | 16 | 10.20€ |
| 2025-01-17 | S34380 | 49 | 10.20€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [40, 32, 65, 20, 16]
- **Nombre commandes**: 6
- **Valeur médiane**: 32

</details>

<details>
<summary>🔴 <strong>[MF0021] MF Sauce BBQ 250ml</strong> (ID: 561) - 16 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5256
- **Stock restant estimé**: -27.10
- **Jours avant rupture**: **-51j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-04-01 | S35738 | 16 | 17.10€ |
| 2025-03-06 | S35206 | 10 | 17.10€ |
| 2025-02-05 | S34681 | 16 | 17.10€ |
| 2025-01-17 | S34380 | 40 | 17.10€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [16, 10, 16, 40]
- **Nombre commandes**: 4
- **Valeur médiane**: 16

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 1152.00€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [MF0024] MF KETCHUP 250g | 564 | 20 | 0 | 20 | 13.80€ | 276.00€ |
| [MF0047] MF Mayonnaise 250ml | 14850 | 20 | 0 | 20 | 13.80€ | 276.00€ |
| [MF0053] MF Maïs 500g | 16951 | 32 | 0 | 32 | 10.20€ | 326.40€ |
| [MF0021] MF Sauce BBQ 250ml | 561 | 16 | 0 | 16 | 17.10€ | 273.60€ |

**Total (Phase 2.5): 1152.00€**

---
