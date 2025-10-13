# 📊 Rapport Auto-Proposal - FRITERIE RENOMMEE

**📅 Date:** 13/10/2025 22:08
**🆔 Client ID:** 3688
**📧 Email:** francis@rstransports.be
**⏱️ Durée d'exécution:** 1.8s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 1
- Modérés (0 < rupture ≤ 19j): 2

**Total produits (Phase 1): 3**
**Quantité totale brute: 39 unités**

### Détails par produit


<details>
<summary>🔴 <strong>[PF0085] FILOU CURRY KETCHUP  10 KG</strong> (ID: 8989) - 6 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0968
- **Stock restant estimé**: -1.77
- **Jours avant rupture**: **-18j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-04 | S38977 | 2 | 19.57€ |
| 2025-06-11 | S37402 | 10 | 19.57€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [2, 10]
- **Nombre commandes**: 2
- **Valeur médiane**: 6

</details>

<details>
<summary>🟡 <strong>[PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> (ID: 8984) - 30 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5403
- **Stock restant estimé**: 8.39
- **Jours avant rupture**: **15j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-03 | S38967 | 30 | 23.18€ |
| 2025-08-04 | S38322 | 7 | 23.18€ |
| 2025-06-11 | S37402 | 30 | 23.18€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [30, 7, 30]
- **Nombre commandes**: 3
- **Valeur médiane**: 30

</details>

<details>
<summary>🟡 <strong>[PF0097] FILOU MOUTARDE 5 KG</strong> (ID: 8998) - 3 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0403
- **Stock restant estimé**: 0.39
- **Jours avant rupture**: **9j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-03 | S38967 | 2 | 7.21€ |
| 2025-06-11 | S37402 | 3 | 7.21€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [2, 3]
- **Nombre commandes**: 2
- **Valeur médiane**: 3

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 834.45€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0085] FILOU CURRY KETCHU... | 8989 | 6 | 0 | 6 | 19.57€ | 117.42€ |
| [PF0072] FILOU MAYONNAISE O... | 8984 | 30 | 0 | 30 | 23.18€ | 695.40€ |
| [PF0097] FILOU MOUTARDE 5 KG | 8998 | 3 | 0 | 3 | 7.21€ | 21.63€ |

**Total (Phase 2.5): 834.45€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91641
**Nom:** S39764
**État:** draft
**Date création:** 13/10/2025 20:08

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0085] FILOU CURRY KETCHU... | 8989 | 6 | 19.57€ | 117.42€ | 7.05€ | 124.47€ |
| [PF0072] FILOU MAYONNAISE O... | 8984 | 30 | 23.18€ | 695.40€ | 41.72€ | 737.12€ |
| [PF0097] FILOU MOUTARDE 5 KG | 8998 | 3 | 7.21€ | 21.63€ | 1.30€ | 22.93€ |

**Total HT (Odoo): 834.45€**
**Total TVA: 50.07€**
**Total TTC: 884.52€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 834.45€ | 834.45€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.