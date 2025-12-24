# 📊 Rapport Auto-Proposal - BONNI

**📅 Date:** 24/12/2025 14:11
**🆔 Client ID:** 3750
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 3.7s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 2
- Modérés (0 < rupture ≤ 30j): 1

**Total produits (Phase 1): 3**
**Quantité totale brute: 38 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> (ID: 9006) - 20 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1273
- **Stock restant estimé**: 3.00
- **Jours avant rupture**: **23j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-06-04 | S37243 | 10 | 8.76€ |
| 2024-02-15 | S28964 | 10 | 8.50€ |
| 2023-11-28 | S27898 | 30 | 8.50€ |
| 2023-08-31 | S04193 | 20 | 8.50€ |
| 2023-08-22 | S04009 | 20 | 8.50€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [10, 10, 30, 20, 20]
- **Nombre commandes**: 5
- **Valeur médiane**: 20

</details>

<details>
<summary>🔴 <strong>[JF031] JF SAUCE LIEGEOISE 380GX6</strong> (ID: 16776) - 6 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1554
- **Stock restant estimé**: -6.11
- **Jours avant rupture**: **-39j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-02-11 | S34774 | 20 | 13.50€ |
| 2025-01-17 | S34204 | 10 | 13.50€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [20, 10]
- **Nombre commandes**: 2
- **Valeur médiane**: 15

</details>

<details>
<summary>🔴 <strong>[JF066] FIL MOUTARDE 300G BOCAL</strong> (ID: 19238) - 12 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0060
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-02-11 | S34774 | 1 | 13.20€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [1]
- **Nombre commandes**: 1
- **Valeur médiane**: 1

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 414.60€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0165] FILOU COCKTAIL FRE... | 9006 | 20 | 0 | 20 | 8.76€ | 175.20€ |
| [JF031] JF SAUCE LIEGEOISE ... | 16776 | 6 | 0 | 6 | 13.50€ | 81.00€ |
| [JF066] FIL MOUTARDE 300G B... | 19238 | 12 | 0 | 12 | 13.20€ | 158.40€ |

**Total (Phase 2.5): 414.60€**

---
