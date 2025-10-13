# 📊 Rapport Auto-Proposal - City To Ocean

**📅 Date:** 13/10/2025 14:32
**🆔 Client ID:** 73541
**📧 Email:** pieter@citytoocean.org
**⏱️ Durée d'exécution:** 1.8s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 0

**Total produits (Phase 1): 3**
**Quantité totale brute: 26 unités**

### Détails par produit


<details>
<summary>🔴 <strong>OI/Intercalaire plastique consigné</strong> (ID: 14111) - 16 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.4103
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-04 | S38697 | 16 | 5.00€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [16]
- **Nombre commandes**: 1
- **Valeur médiane**: 16

</details>

<details>
<summary>🔴 <strong>OI/Palette IND-DIN</strong> (ID: 14556) - 2 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0513
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-04 | S38697 | 2 | 18.00€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [2]
- **Nombre commandes**: 1
- **Valeur médiane**: 2

</details>

<details>
<summary>🔴 <strong>CPL/Intercalaire plastique consigné</strong> (ID: 9733) - 8 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0899
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-07-16 | S37771 | 8 | 4.20€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [8]
- **Nombre commandes**: 1
- **Valeur médiane**: 8

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 149.60€**
- **MOQ requis: 300.00€**
- ⚠️ **Gap à combler: 150.40€**

### Après ajustement MOQ

- **Produits ajustés: 3/3**
- **Montant ajouté: +159.00€**
- **Montant final: 308.60€**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| OI/Intercalaire plastique c... | 14111 | 16 | +6 | 22 | 5.00€ | 110.00€ |
| OI/Palette IND-DIN | 14556 | 2 | +6 | 8 | 18.00€ | 144.00€ |
| CPL/Intercalaire plastique ... | 9733 | 8 | +5 | 13 | 4.20€ | 54.60€ |

**Total (Phase 2.5): 308.60€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91547
**Nom:** S39670
**État:** draft
**Date création:** 13/10/2025 12:24

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| OI/Intercalaire plastique c... | 14111 | 22 | 5.00€ | 110.00€ | 0.00€ | 110.00€ |
| OI/Palette IND-DIN | 14556 | 8 | 18.00€ | 144.00€ | 0.00€ | 144.00€ |
| CPL/Intercalaire plastique ... | 9733 | 13 | 4.20€ | 54.60€ | 0.00€ | 54.60€ |

**Total HT (Odoo): 308.60€**
**Total TVA: 0.00€**
**Total TTC: 308.60€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 308.60€ | 308.60€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.