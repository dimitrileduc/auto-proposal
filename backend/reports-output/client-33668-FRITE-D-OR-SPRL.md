# 📊 Rapport Auto-Proposal - FRITE D'OR SPRL

**📅 Date:** 13/10/2025 22:08
**🆔 Client ID:** 33668
**📧 Email:** fritedorl@gmail.com
**⏱️ Durée d'exécution:** 1.8s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 0

**Total produits (Phase 1): 3**
**Quantité totale brute: 66 unités**

### Détails par produit


<details>
<summary>🔴 <strong>[PF0085] FILOU CURRY KETCHUP  10 KG</strong> (ID: 8989) - 55 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.0577
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-22 | S38657 | 55 | 19.57€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [55]
- **Nombre commandes**: 1
- **Valeur médiane**: 55

</details>

<details>
<summary>🔴 <strong>[PF0097] FILOU MOUTARDE 5 KG</strong> (ID: 8998) - 5 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0962
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-22 | S38657 | 5 | 7.21€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [5]
- **Nombre commandes**: 1
- **Valeur médiane**: 5

</details>

<details>
<summary>🔴 <strong>[PF0077] FILOU PROVENCALE 5 L</strong> (ID: 8986) - 6 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1154
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-22 | S38657 | 6 | 9.37€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [6]
- **Nombre commandes**: 1
- **Valeur médiane**: 6

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 1168.62€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0085] FILOU CURRY KETCHU... | 8989 | 55 | 0 | 55 | 19.57€ | 1076.35€ |
| [PF0097] FILOU MOUTARDE 5 KG | 8998 | 5 | 0 | 5 | 7.21€ | 36.05€ |
| [PF0077] FILOU PROVENCALE 5 L | 8986 | 6 | 0 | 6 | 9.37€ | 56.22€ |

**Total (Phase 2.5): 1168.62€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91640
**Nom:** S39763
**État:** draft
**Date création:** 13/10/2025 20:08

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF0085] FILOU CURRY KETCHU... | 8989 | 55 | 19.57€ | 1076.35€ | 64.58€ | 1140.93€ |
| [PF0097] FILOU MOUTARDE 5 KG | 8998 | 5 | 7.21€ | 36.05€ | 2.16€ | 38.21€ |
| [PF0077] FILOU PROVENCALE 5 L | 8986 | 6 | 9.37€ | 56.22€ | 3.37€ | 59.59€ |

**Total HT (Odoo): 1168.62€**
**Total TVA: 70.11€**
**Total TTC: 1238.73€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 1168.62€ | 1168.62€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.