# 📊 Rapport Auto-Proposal - Duvel Moortgat Nv

**📅 Date:** 13/10/2025 22:06
**🆔 Client ID:** 17394
**📧 Email:** accounts.payable@duvel.be
**⏱️ Durée d'exécution:** 1.8s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 0

**Total produits (Phase 1): 3**
**Quantité totale brute: 30459 unités**

### Détails par produit


<details>
<summary>🔴 <strong>DUVEL/BT-CH-75CL/PROPRE</strong> (ID: 19762) - 28080 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 390.0000
- **Stock restant estimé**: -390.00
- **Jours avant rupture**: **-1j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-07-08 | S37952 | 37440 | 0.15€ |
| 2025-05-22 | S37004 | 18720 | 0.15€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [37440, 18720]
- **Nombre commandes**: 2
- **Valeur médiane**: 28080

</details>

<details>
<summary>🔴 <strong>DUVEL/CA-CH-12*75CL/VIDE (copie)</strong> (ID: 19764) - 2340 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 32.5000
- **Stock restant estimé**: -32.50
- **Jours avant rupture**: **-1j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-07-08 | S37952 | 3120 | 0.00€ |
| 2025-05-22 | S37004 | 1560 | 0.00€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [3120, 1560]
- **Nombre commandes**: 2
- **Valeur médiane**: 2340

</details>

<details>
<summary>🔴 <strong>Palette-CHEP</strong> (ID: 30) - 39 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.5417
- **Stock restant estimé**: -0.54
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-07-08 | S37952 | 52 | 0.00€ |
| 2025-05-22 | S37004 | 26 | 0.00€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [52, 26]
- **Nombre commandes**: 2
- **Valeur médiane**: 39

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 4296.24€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| DUVEL/BT-CH-75CL/PROPRE | 19762 | 28080 | 0 | 28080 | 0.15€ | 4296.24€ |
| DUVEL/CA-CH-12*75CL/VIDE (c... | 19764 | 2340 | 0 | 2340 | 0.00€ | 0.00€ |
| Palette-CHEP | 30 | 39 | 0 | 39 | 0.00€ | 0.00€ |

**Total (Phase 2.5): 4296.24€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91616
**Nom:** S39739
**État:** draft
**Date création:** 13/10/2025 20:06

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| DUVEL/BT-CH-75CL/PROPRE | 19762 | 28080 | 0.15€ | 4296.24€ | 902.21€ | 5198.45€ |
| DUVEL/CA-CH-12*75CL/VIDE (c... | 19764 | 2340 | 0.00€ | 0.00€ | 0.00€ | 0.00€ |
| Palette-CHEP | 30 | 39 | 0.00€ | 0.00€ | 0.00€ | 0.00€ |

**Total HT (Odoo): 4296.24€**
**Total TVA: 902.21€**
**Total TTC: 5198.45€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 4296.24€ | 4296.24€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.