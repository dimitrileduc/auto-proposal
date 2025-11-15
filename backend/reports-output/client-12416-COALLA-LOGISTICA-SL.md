# 📊 Rapport Auto-Proposal - COALLA LOGISTICA SL

**📅 Date:** 15/11/2025 10:48
**🆔 Client ID:** 12416
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 1.3s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 4**
- Urgents (rupture ≤ 0j): 1
- Modérés (0 < rupture ≤ 19j): 3

**Total produits (Phase 1): 4**
**Quantité totale brute: 85 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[PF1799] LD MAYONNAISE OEUFS 250ML WECK</strong> (ID: 9254) - 20 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5442
- **Stock restant estimé**: 2.38
- **Jours avant rupture**: **4j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-06-24 | S37656 | 10 | 16.08€ |
| 2025-05-22 | S36993 | 10 | 16.08€ |
| 2025-04-22 | S36324 | 30 | 16.08€ |
| 2025-02-11 | S34831 | 30 | 16.08€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [10, 10, 30, 30]
- **Nombre commandes**: 4
- **Valeur médiane**: 20

</details>

<details>
<summary>🟡 <strong>[PF1803] LD SAUCE TARTARE 250ML WECK</strong> (ID: 9258) - 50 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.3605
- **Stock restant estimé**: 10.95
- **Jours avant rupture**: **8j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-06-24 | S37656 | 30 | 16.08€ |
| 2025-05-22 | S36993 | 50 | 16.08€ |
| 2025-04-22 | S36324 | 50 | 16.08€ |
| 2025-03-24 | S35576 | 20 | 16.08€ |
| 2025-02-11 | S34831 | 50 | 16.08€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [30, 50, 50, 20, 50]
- **Nombre commandes**: 5
- **Valeur médiane**: 50

</details>

<details>
<summary>🔴 <strong>[PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> (ID: 9264) - 5 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.3571
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-06-24 | S37656 | 5 | 16.08€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [5]
- **Nombre commandes**: 1
- **Valeur médiane**: 5

</details>

<details>
<summary>🟡 <strong>[PF3284] LD MOUTARDE DOUCE 250ML WECK</strong> (ID: 16993) - 10 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.2857
- **Stock restant estimé**: 1.00
- **Jours avant rupture**: **3j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-06-24 | S37656 | 5 | 15.24€ |
| 2025-05-22 | S36993 | 5 | 15.24€ |
| 2025-04-22 | S36324 | 10 | 15.24€ |
| 2025-03-24 | S35576 | 10 | 15.24€ |
| 2025-02-11 | S34831 | 12 | 15.24€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [5, 5, 10, 10, 12]
- **Nombre commandes**: 5
- **Valeur médiane**: 10

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 1358.40€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF1799] LD MAYONNAISE OEUF... | 9254 | 20 | 0 | 20 | 16.08€ | 321.60€ |
| [PF1803] LD SAUCE TARTARE 2... | 9258 | 50 | 0 | 50 | 16.08€ | 804.00€ |
| [PF1809] LD SAUCE BEARNAISE... | 9264 | 5 | 0 | 5 | 16.08€ | 80.40€ |
| [PF3284] LD MOUTARDE DOUCE ... | 16993 | 10 | 0 | 10 | 15.24€ | 152.40€ |

**Total (Phase 2.5): 1358.40€**

---
