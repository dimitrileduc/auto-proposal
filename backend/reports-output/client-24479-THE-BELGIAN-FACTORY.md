# 📊 Rapport Auto-Proposal - THE BELGIAN FACTORY

**📅 Date:** 14/11/2025 10:36
**🆔 Client ID:** 24479
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 822ms

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 3
- Modérés (0 < rupture ≤ 19j): 0

**Total produits (Phase 1): 3**
**Quantité totale brute: 217 unités**

### Détails par produit


<details>
<summary>🔴 <strong>[PF1878] JEFKE MOUTARDE PET 2,1 L</strong> (ID: 9311) - 84 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 1.4595
- **Stock restant estimé**: -29.51
- **Jours avant rupture**: **-20j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-06-30 | S37725 | 42 | 16.02€ |
| 2025-03-24 | S35592 | 84 | 15.30€ |
| 2024-12-02 | S33616 | 252 | 15.30€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [42, 84, 252]
- **Nombre commandes**: 3
- **Valeur médiane**: 84

</details>

<details>
<summary>🔴 <strong>[PF0078] FILOU CHASSEUR 5 L</strong> (ID: 8987) - 80 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 2.7632
- **Stock restant estimé**: -268.16
- **Jours avant rupture**: **-97j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-04-14 | S36158 | 80 | 8.96€ |
| 2025-04-07 | S35868 | 5 | 8.96€ |
| 2025-03-31 | S35726 | 80 | 8.96€ |
| 2025-03-12 | S35362 | 80 | 8.96€ |
| 2025-03-07 | S35246 | 80 | 8.96€ |
| 2025-02-20 | S34984 | 80 | 8.96€ |
| 2025-02-10 | S34803 | 80 | 8.96€ |
| 2024-12-09 | S33738 | 160 | 8.15€ |
| 2024-12-02 | S33616 | 10 | 8.15€ |
| 2024-11-25 | S33492 | 80 | 8.15€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: high
- **Quantités historiques**: [80, 5, 80, 80, 80]
- **Nombre commandes**: 10
- **Valeur médiane**: 80

</details>

<details>
<summary>🔴 <strong>[PF3266] JF SAUCE BEARNAISE 3L</strong> (ID: 14903) - 53 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.2103
- **Stock restant estimé**: 0.00
- **Jours avant rupture**: **0j**
- **Seuil réappro**: 19j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2024-12-09 | S33716 | 53 | 8.60€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [53]
- **Nombre commandes**: 1
- **Valeur médiane**: 53

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 2518.28€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [PF1878] JEFKE MOUTARDE PET... | 9311 | 84 | 0 | 84 | 16.02€ | 1345.68€ |
| [PF0078] FILOU CHASSEUR 5 L | 8987 | 80 | 0 | 80 | 8.96€ | 716.80€ |
| [PF3266] JF SAUCE BEARNAISE 3L | 14903 | 53 | 0 | 53 | 8.60€ | 455.80€ |

**Total (Phase 2.5): 2518.28€**

---
