# 📊 Rapport Auto-Proposal - COLONA

**📅 Date:** 11/10/2025 22:36
**🆔 Client ID:** 3466
**📧 Email:** contact@colona.be
**⏱️ Durée d'exécution:** 1.8s

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 0

**Total produits (Phase 1): 3**
**Quantité totale brute: 1239 unités**

### Détails par produit


<details>
<summary>🔴 <strong>[PF3298] COLONA MOUTARDE SUCREE 5 KG</strong> (ID: 17297) - 188 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 4.6420
- **Stock restant estimé**: -16.40
- **Jours avant rupture**: **-3j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-03 | S38950 | 160 | 4.55€ |
| 2025-07-22 | S38190 | 216 | 4.55€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [160, 216]
- **Nombre commandes**: 2
- **Valeur médiane**: 188

</details>

<details>
<summary>🔴 <strong>[PI3285] PI MOUTARDE SUCREE</strong> (ID: 17100) - 1050 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 10.9375
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-07-07 | S37923 | 1050 | 0.76€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [1050]
- **Nombre commandes**: 1
- **Valeur médiane**: 1050

</details>

<details>
<summary>🔴 <strong>[VID001] EURO PALETTE</strong> (ID: 9463) - 1 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0104
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-07-07 | S37923 | 1 | 150.00€ |

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

- **Montant initial: 1803.40€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF3298] COLONA MOUTARDE SU... | 17297 | 188 | 0 | 188 | 4.55€ | 855.40€ |
| [PI3285] PI MOUTARDE SUCREE | 17100 | 1050 | 0 | 1050 | 0.76€ | 798.00€ |
| [VID001] EURO PALETTE | 9463 | 1 | 0 | 1 | 150.00€ | 150.00€ |

**Total (Phase 2.5): 1803.40€**

---

## 📄 PHASE 3 - DEVIS ODOO CRÉÉ


**Devis ID:** 91526
**Nom:** S39649
**État:** draft
**Date création:** 11/10/2025 20:31

### Montants calculés par Odoo (avec ristournes/pricelists)


| Produit | ID | Qté | Prix unit. Odoo | HT | TVA | TTC |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF3298] COLONA MOUTARDE SU... | 17297 | 188 | 4.55€ | 855.40€ | 51.32€ | 906.72€ |
| [PI3285] PI MOUTARDE SUCREE | 17100 | 1050 | 0.76€ | 798.00€ | 47.88€ | 845.88€ |
| [VID001] EURO PALETTE | 9463 | 1 | 150.00€ | 150.00€ | 0.00€ | 150.00€ |

**Total HT (Odoo): 1803.40€**
**Total TVA: 99.20€**
**Total TTC: 1902.60€**

---

## 📊 Comparaison Phase 2.5 vs Phase 3


| Métrique | Phase 2.5 (Prix historiques) | Phase 3 (Prix Odoo réels) | Écart |
| --- | --- | --- | --- |
| Montant HT | 1803.40€ | 1803.40€ | +0.00€ (0.0%) |

> ⚠️ **Note**: Les prix Odoo peuvent différer des prix historiques en raison des pricelists, promotions, et ristournes actives.