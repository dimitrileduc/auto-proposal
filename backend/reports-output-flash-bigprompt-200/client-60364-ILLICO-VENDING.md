# 📊 Rapport Auto-Proposal - ILLICO VENDING

**📅 Date:** 18/12/2025 12:16
**🆔 Client ID:** 60364
**📧 Email:** N/A
**⏱️ Durée d'exécution:** 945ms

---

## 🔍 PHASE 1 - ANALYSE STOCK (RAW)


**Produits à risque détectés: 3**
- Urgents (rupture ≤ 0j): 2
- Modérés (0 < rupture ≤ 30j): 1

**Total produits (Phase 1): 3**
**Quantité totale brute: 19 unités**

### Détails par produit


<details>
<summary>🟡 <strong>[REB05] REB chips bio - sel de mer 35g</strong> (ID: 18416) - 8 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1667
- **Stock restant estimé**: 0.83
- **Jours avant rupture**: **5j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-16 | S39215 | 10 | 17.40€ |
| 2025-08-06 | S38265 | 6 | 17.40€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [10, 6]
- **Nombre commandes**: 2
- **Valeur médiane**: 8

</details>

<details>
<summary>🔴 <strong>[REB06] REB chips bio - paprika fumé 35g</strong> (ID: 18415) - 4 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.0729
- **Stock restant estimé**: -3.01
- **Jours avant rupture**: **-41j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-09-16 | S39215 | 1 | 17.40€ |
| 2025-08-06 | S38265 | 6 | 17.40€ |

### 🧮 Calcul Quantité
- **Stratégie**: median_recent_orders
- **Confiance**: medium
- **Quantités historiques**: [1, 6]
- **Nombre commandes**: 2
- **Valeur médiane**: 4

</details>

<details>
<summary>🔴 <strong>[NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> (ID: 18318) - 7 unités</summary>

### 📊 Prédiction Stock
- **Consommation/jour**: 0.1707
- **Stock restant estimé**: -9.39
- **Jours avant rupture**: **-55j**
- **Seuil réappro**: 30j

### 📦 Historique Commandes

| Date | Commande | Qté | Prix unit. |
| --- | --- | --- | --- |
| 2025-08-06 | S38265 | 7 | 15.75€ |

### 🧮 Calcul Quantité
- **Stratégie**: single_recent_order
- **Confiance**: low
- **Quantités historiques**: [7]
- **Nombre commandes**: 1
- **Valeur médiane**: 7

</details>


---

## 💰 PHASE 2.5 - PRICING + AJUSTEMENT MOQ


### Avant ajustement MOQ

- **Montant initial: 319.05€**
- **MOQ requis: 300.00€**
- ✅ **Déjà au-dessus du MOQ**

### Détails produits avec pricing


| Produit | ID | Qté brute | Ajust. MOQ | Qté finale | Prix unit. | Sous-total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [REB05] REB chips bio - sel... | 18416 | 8 | 0 | 8 | 17.40€ | 139.20€ |
| [REB06] REB chips bio - pap... | 18415 | 4 | 0 | 4 | 17.40€ | 69.60€ |
| [NOM01] NOMADIC barre proté... | 18318 | 7 | 0 | 7 | 15.75€ | 110.25€ |

**Total (Phase 2.5): 319.05€**

---
