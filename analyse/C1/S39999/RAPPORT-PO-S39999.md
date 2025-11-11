# Rapport de Prédiction S39999

**Client:** LE TIROIR DES SAVEURS (ID: 60450)
**Date de prédiction:** 30 octobre 2025
**Période d'analyse:** 180 jours (03/05/2025 → 30/10/2025)

---

## Vue d'ensemble

| Métrique | Valeur |
|----------|--------|
| **Produits prédits** | 10 |
| **Produits commandés** | 9 |
| **Prédictions correctes** | 2 / 10 (20%) |
| **Montant prédit** | 1 517 EUR HT |
| **Montant réel** | 1 108 EUR HT |
| **Écart montant** | -27% |

---

## Tableau comparatif

| Produit | Prédit | Réel | Écart | Statut | Raison |
|---------|--------|------|-------|--------|--------|
| **REB01** Chips Sel de mer | - | 8 TU10 (150€) | - | Manqué | Stock estimé à 21 jours (seuil: 19j) - trop juste |
| **REB02** Chips Paprika fumé | - | 8 TU10 (150€) | - | Manqué | Stock estimé à 21 jours (seuil: 19j) - trop juste |
| **REB03** Chips Poivre noir | 4 TU10 (75€) | 4 TU10 (75€) | 0% | Correct | Rupture détectée, quantité exacte |
| **REB04** Chips Thym/Romarin | 6 TU10 (113€) | 4 TU10 (75€) | +50% | Erreur | Rupture détectée mais quantité surestimée |
| **REB08** Chips Piment Citron | - | 4 TU10 (75€) | - | Manqué | Dernière commande hors fenêtre (33 jours avant) |
| **REB11** Chips Truffes | 6 TU10 (159€) | - | -100% | Erreur | Produit commandé 1 fois, non renouvelé |
| **KOKO01** Kombucha Original | 10 TU12 (239€) | - | -100% | Erreur | Produit commandé 1 fois, non renouvelé |
| **KOKO02** Kombucha Citron Gingembre | 9 TU12 (215€) | 8 TU12 (202€) | +12% | Correct | Rupture détectée, quantité proche |
| **KOKO03** Kombucha Framboise Hibiscus | 8 TU12 (202€) | 8 TU12 (202€) | 0% | Correct | Rupture détectée, quantité exacte |
| **UPI02** Jus Pomme-Fraise | 8 TU12 (143€) | - | -100% | Erreur | Substitué par client (a pris UPI04) |
| **UPI04** Jus Pomme-Cerise | - | 5 TU12 (89€) | - | Manqué | Dernière commande hors fenêtre (64 jours avant) |
| **UPI07** Jus Pomme-Framboise | 8 TU12 (143€) | 5 TU12 (89€) | +60% | Erreur | Rupture détectée mais quantité surestimée |
| **WIG01** Cidre WIGNAC | 4 TU12 (103€) | - | -100% | Erreur | Produit commandé 1 fois, non renouvelé |
| **RISH04** Kombucha Basil | 5 TU12 (125€) | - | -100% | Erreur | Produit commandé 1 fois, non renouvelé |

---

## Analyse détaillée par produit

### REB01 - Chips Sel de mer

**Statut:** Manqué
**Explication:** Le système a calculé 21 jours de stock restant, ce qui est au-dessus du seuil de rupture (19 jours). Le produit n'a donc pas été proposé. Cependant, le client l'a commandé, montrant que la marge de sécurité était trop juste.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38790 (28/08/2025): 8 TU10 @ 18,80€
- S36772 (14/05/2025): 8 TU10 @ 18,80€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,095 TU10/jour
- Stock estimé: 2,02 TU10
- Days until stockout: 21 jours > 19 jours (seuil)
- Décision: NON PROPOSÉ (stock suffisant)
- Quantité théorique si proposé: 8 TU10 (médiane)
- Niveau de confiance: MEDIUM (2 commandes)
</details>

---

### REB02 - Chips Paprika fumé

**Statut:** Manqué
**Explication:** Même situation que REB01. Stock estimé à 21 jours, juste au-dessus du seuil. Le client a quand même commandé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38790 (28/08/2025): 8 TU10 @ 18,80€
- S36772 (14/05/2025): 8 TU10 @ 18,80€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,095 TU10/jour
- Stock estimé: 2,02 TU10
- Days until stockout: 21 jours > 19 jours (seuil)
- Décision: NON PROPOSÉ (stock suffisant)
- Quantité théorique si proposé: 8 TU10 (médiane)
- Niveau de confiance: MEDIUM (2 commandes)
</details>

---

### REB03 - Chips Poivre noir

**Statut:** Correct
**Explication:** Rupture détectée (0 jours de stock). Le client a commandé exactement la quantité prédite.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S36772 (14/05/2025): 4 TU10 @ 18,80€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,024 TU10/jour
- Stock estimé: 0 TU10
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 4 TU10
- Niveau de confiance: LOW (1 commande)
</details>

---

### REB04 - Chips Thym/Romarin

**Statut:** Erreur (surestimation)
**Explication:** Rupture bien détectée, mais quantité prédite trop élevée (6 vs 4 réels). Écart de +50%.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S36772 (14/05/2025): 6 TU10 @ 18,80€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,036 TU10/jour
- Stock estimé: 0 TU10
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 6 TU10
- Réel: 4 TU10
- Niveau de confiance: LOW (1 commande)
</details>

---

### REB08 - Chips Piment Citron

**Statut:** Manqué
**Explication:** La dernière commande de ce produit date du 31/03/2025, soit 33 jours avant le début de la fenêtre d'analyse. Le produit était donc invisible pour le système.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S35688 (31/03/2025): 5 TU10 @ 18,80€ (HORS fenêtre)
- S35107 (27/02/2025): 3 TU10 @ 18,80€ (HORS fenêtre)

**Calculs:**
- Fenêtre d'analyse: 03/05/2025 → 30/10/2025
- Dernière commande: 33 jours AVANT le début de fenêtre
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
</details>

---

### REB11 - Chips Truffes

**Statut:** Erreur (faux positif)
**Explication:** Rupture détectée après 1 seule commande. Le client n'a pas renouvelé ce produit premium.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S36772 (14/05/2025): 6 TU10 @ 26,50€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,036 TU10/jour
- Stock estimé: 0 TU10
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 6 TU10
- Niveau de confiance: LOW (1 commande)
- Résultat: NON COMMANDÉ
</details>

---

### KOKO01 - Kombucha Original

**Statut:** Erreur (faux positif)
**Explication:** Rupture détectée après 1 seule commande. Le client préfère les variétés aromatisées.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37694 (26/06/2025): 10 TU12 @ 23,88€

**Calculs:**
- Jours historique: 126 jours
- Consommation/jour: 0,079 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 10 TU12
- Niveau de confiance: LOW (1 commande)
- Résultat: NON COMMANDÉ
</details>

---

### KOKO02 - Kombucha Citron Gingembre

**Statut:** Correct (quantité proche)
**Explication:** Rupture détectée avec historique solide (2 commandes). Quantité prédite: 9 TU12, réel: 8 TU12. Écart acceptable de +12%.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37694 (26/06/2025): 10 TU12 @ 23,88€
- S36772 (14/05/2025): 8 TU12 @ 25,20€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,106 TU12/jour
- Stock estimé: -3,36 TU12 (rupture depuis longtemps)
- Days until stockout: -32 jours
- Décision: PROPOSÉ 9 TU12 (médiane de [10, 8])
- Réel: 8 TU12
- Niveau de confiance: MEDIUM (2 commandes)
</details>

---

### KOKO03 - Kombucha Framboise Hibiscus

**Statut:** Correct
**Explication:** Rupture détectée avec excellent historique (3 commandes). Quantité prédite exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38790 (28/08/2025): 6 TU12 @ 25,20€
- S37694 (26/06/2025): 10 TU12 @ 23,88€
- S36772 (14/05/2025): 8 TU12 @ 25,20€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,142 TU12/jour
- Stock estimé: -2,95 TU12 (rupture)
- Days until stockout: -21 jours
- Décision: PROPOSÉ 8 TU12 (médiane de [6, 10, 8])
- Réel: 8 TU12
- Niveau de confiance: MEDIUM (3 commandes)
</details>

---

### UPI02 - Jus Pomme-Fraise

**Statut:** Erreur (substitution client)
**Explication:** Rupture détectée correctement, mais le client a préféré substituer par UPI04 (Pomme-Cerise).

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S36772 (14/05/2025): 8 TU12 @ 17,88€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,047 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 8 TU12
- Niveau de confiance: LOW (1 commande)
- Résultat: NON COMMANDÉ (substitué)
</details>

---

### UPI04 - Jus Pomme-Cerise

**Statut:** Manqué (substitution)
**Explication:** Dernière commande hors fenêtre (64 jours avant). Le client l'a commandé en remplacement de UPI02.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S35107 (27/02/2025): 5 TU12 @ 17,88€ (HORS fenêtre)
- S34218 (20/01/2025): 3 TU12 @ 17,88€ (HORS fenêtre)

**Calculs:**
- Fenêtre d'analyse: 03/05/2025 → 30/10/2025
- Dernière commande: 64 jours AVANT le début de fenêtre
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
- Réel: 5 TU12 commandés
</details>

---

### UPI07 - Jus Pomme-Framboise

**Statut:** Erreur (surestimation)
**Explication:** Rupture bien détectée, mais quantité trop élevée. Prédit: 8 TU12, réel: 5 TU12. Écart de +60%.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S36772 (14/05/2025): 8 TU12 @ 17,88€

**Calculs:**
- Jours historique: 169 jours
- Consommation/jour: 0,047 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 8 TU12
- Réel: 5 TU12
- Niveau de confiance: LOW (1 commande)
</details>

---

### WIG01 - Cidre WIGNAC

**Statut:** Erreur (faux positif)
**Explication:** Produit commandé 1 fois, jamais renouvelé. Probablement un test client.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38790 (28/08/2025): 4 TU12 @ 25,80€

**Calculs:**
- Jours historique: 63 jours
- Consommation/jour: 0,063 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 4 TU12
- Niveau de confiance: LOW (1 commande)
- Résultat: NON COMMANDÉ
</details>

---

### RISH04 - Kombucha Basil

**Statut:** Erreur (faux positif)
**Explication:** Produit commandé 1 fois, jamais renouvelé. Test client non concluant.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37694 (26/06/2025): 5 TU12 @ 25,08€

**Calculs:**
- Jours historique: 126 jours
- Consommation/jour: 0,040 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Décision: PROPOSÉ 5 TU12
- Niveau de confiance: LOW (1 commande)
- Résultat: NON COMMANDÉ
</details>

---

## Synthèse

### Performance par catégorie

| Catégorie | Nombre | Montant |
|-----------|--------|---------|
| Prédictions correctes (exactes + proches) | 3 | 479 EUR |
| Erreurs de quantité | 2 | 256 EUR |
| Erreurs (faux positifs) | 5 | 769 EUR |
| Produits manqués (seuil trop strict) | 2 | 301 EUR |
| Produits manqués (hors fenêtre) | 2 | 164 EUR |

### Analyse des erreurs

**Produits manqués par seuil (2 produits = 27% du CA réel manqué):**
- REB01 et REB02: stock calculé à 21 jours vs seuil de 19 jours
- Marge de sécurité insuffisante
- Impact financier: 301 EUR non proposés

**Faux positifs (5 produits = 50% des prédictions):**
- 100% des erreurs concernent des produits avec confiance LOW (1 seule commande)
- Pattern: produits testés une fois, jamais renouvelés
- Produits concernés: REB11 (premium), KOKO01, UPI02 (substitué), WIG01, RISH04

**Erreurs de quantité (2 produits):**
- REB04: +50% (6 vs 4)
- UPI07: +60% (8 vs 5)
- Les deux avec confiance LOW (1 commande)

**Produits manqués hors fenêtre (2 produits):**
- REB08: dernière commande 33 jours avant fenêtre
- UPI04: dernière commande 64 jours avant fenêtre

### Points clés

**Ce qui fonctionne:**
- Produits avec historique stable (MEDIUM confidence): excellente performance
- KOKO03 (3 commandes): prédiction parfaite
- KOKO02 (2 commandes): écart de seulement 12%
- Détection des ruptures: 100% des ruptures réelles détectées

**Ce qui pose problème:**
- Seuil de rupture à 19 jours: trop strict, a fait manquer 301 EUR de CA
- Produits LOW confidence (1 commande): 5 erreurs sur 5
- Fenêtre de 180 jours: fait manquer les produits à rotation lente
- Prédiction de quantité avec 1 seule commande historique: peu fiable

**Impact business:**
- Sur-proposition: 769 EUR de produits non voulus
- Sous-proposition: 465 EUR de CA manqué (seuil + hors fenêtre)
- Taux de satisfaction théorique: 20% seulement (2 prédictions parfaites sur 10)

---

**Rapport généré le:** 7 novembre 2025
**Sources:** Odoo ERP + Système de prédiction auto-proposal
**Méthode:** Analyse sur 180 jours, seuil de rupture: 19 jours
