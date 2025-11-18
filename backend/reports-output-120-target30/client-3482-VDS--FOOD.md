# 📊 Rapport Auto-Proposal - VDS  FOOD

**📅 Date:** 18/11/2025 11:00
**🆔 Client ID:** 3482
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 1.6s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 2**
- Urgents (rupture ≤ 0j): 1
- Modérés (0 < rupture ≤ 30j): 1

**Total produits (Phase 1): 2**
**Quantité totale brute: 98 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[PF0078] FILOU CHASSEUR 5 L</strong> (ID: 8987) - 80 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 3.6364
- **Stock restant estimé**: 32.73
- **Jours avant rupture**: **9j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-24 | S39373 | 80 | 8.96€ |
| 2025-08-25 | S38699 | 80 | 8.96€ |
| 2025-08-13 | S38494 | 80 | 8.96€ |
| 2025-07-22 | S38174 | 80 | 8.96€ |
| 2025-06-19 | S37529 | 80 | 8.96€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [80, 80, 80, 80, 80]
- **Nombre commandes**: 5
- **Valeur médiane**: 80

</details>

<details>
<summary>🔴 <strong>[PF0077] FILOU PROVENCALE 5 L</strong> (ID: 8986) - 18 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.6364
- **Stock restant estimé**: -2.36
- **Jours avant rupture**: **-3j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-25 | S38699 | 25 | 9.37€ |
| 2025-08-13 | S38494 | 10 | 9.37€ |
| 2025-07-22 | S38174 | 20 | 9.37€ |
| 2025-06-19 | S37529 | 15 | 9.37€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [25, 10, 20, 15]
- **Nombre commandes**: 4
- **Valeur médiane**: 18

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 885.46€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0078] FILOU CHASSEUR 5 L | 8987 | 80 | 0 | 80 | 8.96€ | 716.80€ |
| [PF0077] FILOU PROVENCALE 5 L | 8986 | 18 | 0 | 18 | 9.37€ | 168.66€ |

**Total (Phase 2.5): 885.46€**

---
