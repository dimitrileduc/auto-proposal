# 📊 Rapport Auto-Proposal - DUMORTIER   ETS.

**📅 Date:** 13/10/2025 22:05
**🆔 Client ID:** 3894
**📧 Email:** commercial@epices-dumortier.fr
**⏱️ Durée d'exécution:** 2.0s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 4**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 1

**Total produits (Phase 1): 4**
**Quantité totale brute: 176 unités**

### Détails par produit


<details>
<summary>🔴 <strong>[PF0077] FILOU PROVENCALE 5 L</strong> (ID: 8986) - 80 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 2.4390
- **Stock restant estimé**: -2.93
- **Jours avant rupture**: **-1j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-09 | S39096 | 80 | 9.37€ |
| 2025-07-31 | S38268 | 80 | 9.37€ |
| 2025-06-30 | S37683 | 80 | 9.37€ |
| 2025-05-02 | S36475 | 160 | 9.37€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [80, 80, 80, 160]
- **Nombre commandes**: 4
- **Valeur médiane**: 80

</details>

<details>
<summary>🔴 <strong>[PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> (ID: 9029) - 48 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.4634
- **Stock restant estimé**: -1.76
- **Jours avant rupture**: **-1j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-09 | S39096 | 48 | 45.12€ |
| 2025-07-31 | S38268 | 48 | 45.12€ |
| 2025-06-30 | S37683 | 48 | 45.12€ |
| 2025-06-04 | S37155 | 48 | 45.12€ |
| 2025-05-02 | S36475 | 48 | 45.12€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [48, 48, 48, 48, 48]
- **Nombre commandes**: 5
- **Valeur médiane**: 48

</details>

<details>
<summary>🟡 <strong>[PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> (ID: 9035) - 24 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5496
- **Stock restant estimé**: 5.31
- **Jours avant rupture**: **9j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-09 | S39096 | 24 | 37.08€ |
| 2025-06-30 | S37683 | 24 | 37.08€ |
| 2025-06-04 | S37155 | 24 | 37.08€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [24, 24, 24]
- **Nombre commandes**: 3
- **Valeur médiane**: 24

</details>

<details>
<summary>🔴 <strong>[PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> (ID: 9310) - 24 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1529
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-05-09 | S36589 | 24 | 54.06€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [24]
- **Nombre commandes**: 1
- **Valeur médiane**: 24

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 5102.72€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0077] FILOU PROVENCALE 5 L | 8986 | 80 | 0 | 80 | 9.37€ | 749.60€ |
| [PF0516] YVALLI PROVENCALE ... | 9029 | 48 | 0 | 48 | 45.12€ | 2165.76€ |
| [PF0549] YVALLI SAUCE PIZZA... | 9035 | 24 | 0 | 24 | 37.08€ | 889.92€ |
| [PF0509] YVALLI GR BOUL TOM... | 9310 | 24 | 0 | 24 | 54.06€ | 1297.44€ |

**Total (Phase 2.5): 5102.72€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91602
**Nom:** S39725
**État:** draft
**Date création:** 13/10/2025 20:05

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0077] FILOU PROVENCALE 5 L | 8986 | 80 | 9.37€ | 749.60€ | 0.00€ | 749.60€ |
| [PF0516] YVALLI PROVENCALE ... | 9029 | 48 | 45.12€ | 2165.76€ | 0.00€ | 2165.76€ |
| [PF0549] YVALLI SAUCE PIZZA... | 9035 | 24 | 37.08€ | 889.92€ | 0.00€ | 889.92€ |
| [PF0509] YVALLI GR BOUL TOM... | 9310 | 24 | 54.06€ | 1297.44€ | 0.00€ | 1297.44€ |

**Total HT (Odoo): 5102.72€**
**Total TVA: 0.00€**
**Total TTC: 5102.72€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 5102.72€ | 5102.72€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.