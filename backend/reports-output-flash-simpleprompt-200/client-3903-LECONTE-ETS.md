# 📊 Rapport Auto-Proposal - LECONTE ETS

**📅 Date:** 18/12/2025 12:40
**🆔 Client ID:** 3903
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 4.1s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 2**
- Urgents (rupture ≤ 0j): 1
- Modérés (0 < rupture ≤ 30j): 1

**Total produits (Phase 1): 2**
**Quantité totale brute: 47 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> (ID: 9310) - 17 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.4359
- **Stock restant estimé**: 1.77
- **Jours avant rupture**: **4j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-04 | S38980 | 24 | 54.06€ |
| 2025-08-08 | S38434 | 10 | 54.06€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [24, 10]
- **Nombre commandes**: 2
- **Valeur médiane**: 17

</details>

<details>
<summary>🔴 <strong>[PF0077] FILOU PROVENCALE 5 L</strong> (ID: 8986) - 30 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.6419
- **Stock restant estimé**: -2.74
- **Jours avant rupture**: **-4j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-04 | S38980 | 30 | 9.37€ |
| 2025-06-11 | S37394 | 40 | 9.37€ |
| 2025-05-27 | S37102 | 30 | 9.37€ |
| 2025-05-16 | S36860 | 30 | 9.37€ |
| 2025-03-25 | S35614 | 50 | 9.37€ |
| 2025-02-10 | S34792 | 40 | 9.37€ |
| 2024-12-09 | S33750 | 30 | 9.10€ |
| 2024-11-08 | S33190 | 20 | 9.10€ |
| 2024-10-21 | S32868 | 30 | 9.10€ |
| 2024-08-21 | S31760 | 30 | 9.10€ |
| 2024-05-24 | S30439 | 40 | 9.10€ |
| 2024-03-13 | S29310 | 40 | 9.10€ |
| 2023-11-24 | S27851 | 40 | 9.10€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [30, 40, 30, 30, 50]
- **Nombre commandes**: 13
- **Valeur médiane**: 30

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 1200.12€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0509] YVALLI GR BOUL TOM... | 9310 | 17 | 0 | 17 | 54.06€ | 919.02€ |
| [PF0077] FILOU PROVENCALE 5 L | 8986 | 30 | 0 | 30 | 9.37€ | 281.10€ |

**Total (Phase 2.5): 1200.12€**

---
