# 📊 Rapport Auto-Proposal - Le Fourgon SAS

**📅 Date:** 18/12/2025 13:15
**🆔 Client ID:** 56363
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 4.7s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 4**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 30j): 1

**Total produits (Phase 1): 4**
**Quantité totale brute: 95 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[MF0024] MF KETCHUP 250g</strong> (ID: 564) - 24 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5370
- **Stock restant estimé**: 6.76
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
- **Consommation/jour**: 0.5370
- **Stock restant estimé**: -9.24
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
<summary>🔴 <strong>[RF003] REFIELD Maïs 500G </strong> (ID: 16951) - 42 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.2685
- **Stock restant estimé**: -19.62
- **Jours avant rupture**: **-15j**
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
- **Consommation/jour**: 0.2407
- **Stock restant estimé**: -3.74
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

- **Montant initial: 1202.70€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [MF0024] MF KETCHUP 250g | 564 | 24 | 0 | 24 | 13.80€ | 331.20€ |
| [MF0047] MF Mayonnaise 250ml | 14850 | 16 | 0 | 16 | 13.80€ | 220.80€ |
| [RF003] REFIELD Maïs 500G  | 16951 | 42 | 0 | 42 | 10.20€ | 428.40€ |
| [MF0021] MF Sauce BBQ 250ml | 561 | 13 | 0 | 13 | 17.10€ | 222.30€ |

**Total (Phase 2.5): 1202.70€**

---
