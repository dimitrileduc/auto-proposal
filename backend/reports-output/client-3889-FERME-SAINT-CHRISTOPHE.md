# 📊 Rapport Auto-Proposal - FERME SAINT CHRISTOPHE

**📅 Date:** 13/10/2025 22:07
**🆔 Client ID:** 3889
**📧 Email:** evo@conserverie-st-christophe.com
**⏱️ Durée d'exécution:** 1.6s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 2**
- Urgents (rupture ≤ 0j): 1
- Modérés (0 < rupture ≤ 19j): 1

**Total produits (Phase 1): 2**
**Quantité totale brute: 688 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[PF1392] SC MOUTARDE SALICORNES 220 ML</strong> (ID: 9084) - 313 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 4.2808
- **Stock restant estimé**: 44.52
- **Jours avant rupture**: **10j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-26 | S38701 | 250 | 11.28€ |
| 2025-05-20 | S36940 | 375 | 11.28€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [250, 375]
- **Nombre commandes**: 2
- **Valeur médiane**: 313

</details>

<details>
<summary>🔴 <strong>[PF1393] SC MAYONNAISE SALICORNES 220ML</strong> (ID: 9085) - 375 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 2.5685
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-20 | S36940 | 375 | 14.28€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [375]
- **Nombre commandes**: 1
- **Valeur médiane**: 375

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 8885.64€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF1392] SC MOUTARDE SALICO... | 9084 | 313 | 0 | 313 | 11.28€ | 3530.64€ |
| [PF1393] SC MAYONNAISE SALI... | 9085 | 375 | 0 | 375 | 14.28€ | 5355.00€ |

**Total (Phase 2.5): 8885.64€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91634
**Nom:** S39757
**État:** draft
**Date création:** 13/10/2025 20:07

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF1392] SC MOUTARDE SALICO... | 9084 | 313 | 11.28€ | 3530.64€ | 0.00€ | 3530.64€ |
| [PF1393] SC MAYONNAISE SALI... | 9085 | 375 | 14.28€ | 5355.00€ | 0.00€ | 5355.00€ |

**Total HT (Odoo): 8885.64€**
**Total TVA: 0.00€**
**Total TTC: 8885.64€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 8885.64€ | 8885.64€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.