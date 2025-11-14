# 📊 Rapport Auto-Proposal - EMBALDIF SARL

**📅 Date:** 14/11/2025 10:38
**🆔 Client ID:** 33821
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 1.2s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 4**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 1

**Total produits (Phase 1): 4**
**Quantité totale brute: 26 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> (ID: 9029) - 12 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.3444
- **Stock restant estimé**: 4.80
- **Jours avant rupture**: **13j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-17 | S39242 | 11 | 45.12€ |
| 2025-08-07 | S38393 | 20 | 45.12€ |
| 2025-07-16 | S38078 | 12 | 45.12€ |
| 2025-06-02 | S37187 | 12 | 45.12€ |
| 2025-03-20 | S35524 | 10 | 45.12€ |
| 2025-03-10 | S35293 | 10 | 45.12€ |
| 2025-01-08 | S34157 | 18 | 45.12€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [11, 20, 12, 12, 10]
- **Nombre commandes**: 7
- **Valeur médiane**: 12

</details>

<details>
<summary>🔴 <strong>[PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> (ID: 9348) - 6 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1481
- **Stock restant estimé**: -2.74
- **Jours avant rupture**: **-18j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-07 | S38393 | 6 | 38.34€ |
| 2025-07-16 | S38078 | 6 | 38.34€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [6, 6]
- **Nombre commandes**: 2
- **Valeur médiane**: 6

</details>

<details>
<summary>🔴 <strong>[PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> (ID: 9035) - 4 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0370
- **Stock restant estimé**: -3.37
- **Jours avant rupture**: **-91j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-03-20 | S35524 | 4 | 37.08€ |
| 2025-03-10 | S35293 | 4 | 37.08€ |
| 2025-01-08 | S34157 | 2 | 37.08€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [4, 4, 2]
- **Nombre commandes**: 3
- **Valeur médiane**: 4

</details>

<details>
<summary>🔴 <strong>[PF0539] JF VOL AU VENT 2,5 KG</strong> (ID: 9034) - 4 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0148
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-01-08 | S34157 | 4 | 65.22€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [4]
- **Nombre commandes**: 1
- **Valeur médiane**: 4

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 1180.68€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0516] YVALLI PROVENCALE ... | 9029 | 12 | 0 | 12 | 45.12€ | 541.44€ |
| [PF0609] YVALLI SAUCE TOMAT... | 9348 | 6 | 0 | 6 | 38.34€ | 230.04€ |
| [PF0549] YVALLI SAUCE PIZZA... | 9035 | 4 | 0 | 4 | 37.08€ | 148.32€ |
| [PF0539] JF VOL AU VENT 2,5 KG | 9034 | 4 | 0 | 4 | 65.22€ | 260.88€ |

**Total (Phase 2.5): 1180.68€**

---
