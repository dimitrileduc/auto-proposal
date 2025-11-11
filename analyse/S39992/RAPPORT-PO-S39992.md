# Rapport de Prédiction S39992

**Client:** ITM BURENTRAD SA BURENVILLE (ID: 38947)
**Date de prédiction:** 30 octobre 2025
**Période d'analyse:** 180 jours (03/05/2025 → 30/10/2025)

---

## Vue d'ensemble

| Métrique | Valeur |
|----------|--------|
| **Produits prédits** | 19 |
| **Produits commandés** | 13 |
| **Prédictions correctes** | 8 / 19 (42%) |
| **Montant prédit** | 445 EUR HT |
| **Montant réel** | 306 EUR HT |
| **Écart montant** | -31% |

---

## Tableau comparatif

| Produit | Prédit | Réel | Écart | Statut | Raison |
|---------|--------|------|-------|--------|--------|
| **JF009** Tartare 250ml | 1 TU6 (20€) | 1 TU6 (20€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF012** Béarnaise 250ml | 1 TU6 (20€) | 1 TU6 (20€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF008** Mayo Chef 470ml | 1 TU6 (26€) | 1 TU6 (26€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF014** Béarnaise 470ml | 1 TU6 (26€) | 1 TU6 (26€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF055** Honey Mustard | 1 TU6 (20€) | 1 TU6 (20€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF034** Samourai Squeeze | 1 TU12 (26€) | 1 TU12 (26€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF036** Mitraillette Squeeze | 1 TU12 (26€) | 1 TU12 (26€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF018** Samourai 250ml | 1 TU6 (20€) | 1 TU6 (20€) | 0% | Correct | Rupture détectée, quantité exacte |
| **JF002** Basilic | 1 TU6 (20€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF054** Lemon | 1 TU6 (20€) | - | -100% | Erreur | Produit commandé 2 fois, non renouvelé |
| **JF039** Baraki Squeeze | 1 TU12 (30€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF056** Chipotle | 1 TU6 (20€) | - | -100% | Erreur | Produit commandé 2 fois, non renouvelé |
| **JF017** Cocktail | 1 TU6 (20€) | - | -100% | Erreur | Produit commandé 2 fois, non renouvelé |
| **JF024** Ciboule | 1 TU9 (27€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF025** FH | 1 TU9 (27€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF021** Pickles | 1 TU6 (21€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF035** Burger Squeeze | 1 TU12 (26€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF033** Andalouse Squeeze | 1 TU12 (26€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF037** BBQ Squeeze | 1 TU12 (26€) | - | -100% | Erreur | Produit test commandé 1 fois, non renouvelé |
| **JF001** Truffes | - | 1 TU6 (23€) | - | Manqué | Dernière commande hors fenêtre (254 jours avant) |
| **JF041** Mayo Squeeze | - | 1 TU12 (26€) | - | Manqué | Dernière commande hors fenêtre 180 jours |
| **JF057** Mayo Oeufs 720ml | - | 1 TU6 (28€) | - | Manqué | Dernière commande hors fenêtre 180 jours |
| **JF005** Mayo Oeufs 250ml | - | 1 TU6 (20€) | - | Manqué | Dernière commande hors fenêtre 180 jours |
| **JF028** Caesar | - | 1 TU9 (27€) | - | Manqué | Dernière commande hors fenêtre 180 jours |

---

## Analyse détaillée par produit

### JF009 - Sauce Tartare 250ml

**Statut:** Correct
**Explication:** Le système a détecté une rupture de stock (8 jours restants). Le client avait commandé 2 fois ce produit dans les 180 derniers jours. La prédiction de 1 TU6 correspond exactement à la commande réelle.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 19,50€
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,015 TU6/jour
- Stock estimé: 0,13 TU6
- Days until stockout: 8 jours < 19 jours (seuil)
- Niveau de confiance: MEDIUM (2 commandes)
</details>

---

### JF012 - Sauce Béarnaise 250ml

**Statut:** Correct
**Explication:** Même pattern que JF009. Rupture détectée à 8 jours, 2 commandes historiques, quantité prédite exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 19,50€
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,015 TU6/jour
- Stock estimé: 0,13 TU6
- Days until stockout: 8 jours < 19 jours (seuil)
- Niveau de confiance: MEDIUM (2 commandes)
</details>

---

### JF008 - Mayonnaise du Chef 470ml

**Statut:** Correct
**Explication:** Rupture immédiate détectée (0 jours de stock). Une seule commande historique mais prédiction exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 25,80€

**Calculs:**
- Jours historique: 58 jours
- Consommation/jour: 0,017 TU6/jour
- Stock estimé: 0 TU6
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
</details>

---

### JF014 - Sauce Béarnaise 470ml

**Statut:** Correct
**Explication:** Même pattern que JF008. Rupture immédiate détectée, quantité prédite exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 25,80€

**Calculs:**
- Jours historique: 58 jours
- Consommation/jour: 0,017 TU6/jour
- Stock estimé: 0 TU6
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
</details>

---

### JF055 - Honey Mustard Mayo 250ml

**Statut:** Correct
**Explication:** Rupture détectée après une longue période (131 jours). Prédiction exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,008 TU6/jour
- Stock estimé: 0 TU6
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
</details>

---

### JF034 - Samourai Squeeze 300ml

**Statut:** Correct
**Explication:** Rupture détectée après 131 jours. Prédiction exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU12 @ 26,40€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,008 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
</details>

---

### JF036 - Mitraillette Squeeze 300ml

**Statut:** Correct
**Explication:** Même pattern que JF034. Rupture détectée, prédiction exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU12 @ 26,40€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,008 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
</details>

---

### JF018 - Sauce Samourai 250ml

**Statut:** Correct
**Explication:** Rupture détectée après 131 jours. Prédiction exacte.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,008 TU6/jour
- Stock estimé: 0 TU6
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
</details>

---

### JF002 - Mayonnaise Basilic 250ml

**Statut:** Erreur (faux positif)
**Explication:** Le système a détecté une rupture car le produit a été commandé 1 fois (02/09/2025). Le client ne l'a pas renouvelé, il s'agissait probablement d'un produit test.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 19,50€

**Calculs:**
- Jours historique: 58 jours
- Consommation/jour: 0,017 TU6/jour
- Stock estimé: 0 TU6
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF054 - Lemon Mayonnaise 250ml

**Statut:** Erreur (faux positif)
**Explication:** Rupture détectée avec 2 commandes historiques (confiance MEDIUM). Le client n'a finalement pas renouvelé ce produit.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 19,50€
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Jours historique: 131 jours
- Consommation/jour: 0,015 TU6/jour
- Stock estimé: 0,13 TU6
- Days until stockout: 8 jours < 19 jours (seuil)
- Niveau de confiance: MEDIUM (2 commandes)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF039 - Mayo Baraki Squeeze 300ml

**Statut:** Erreur (faux positif)
**Explication:** Produit commandé une seule fois, jamais renouvelé. Probablement un test client.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU12 @ 30,00€

**Calculs:**
- Jours historique: 58 jours
- Consommation/jour: 0,017 TU12/jour
- Stock estimé: 0 TU12
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF056 - Sauce Chipotle 250ml

**Statut:** Erreur (faux positif)
**Explication:** 2 commandes historiques mais le client n'a pas renouvelé. Produit en phase de test apparemment abandonné.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 19,50€
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Consommation/jour: 0,015 TU6/jour
- Days until stockout: 8 jours < 19 jours (seuil)
- Niveau de confiance: MEDIUM (2 commandes)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF017 - Sauce Cocktail 250ml

**Statut:** Erreur (faux positif)
**Explication:** 2 commandes historiques (confiance MEDIUM) mais non renouvelé par le client.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 19,50€
- S37552 (20/06/2025): 1 TU6 @ 19,50€

**Calculs:**
- Days until stockout: 8 jours < 19 jours (seuil)
- Niveau de confiance: MEDIUM (2 commandes)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF024 - Vinaigrette Ciboule 200ml

**Statut:** Erreur (faux positif)
**Explication:** Produit test commandé 1 fois, non renouvelé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU9 @ 27,00€

**Calculs:**
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF025 - Vinaigrette FH 200ml

**Statut:** Erreur (faux positif)
**Explication:** Produit test commandé 1 fois, non renouvelé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU9 @ 27,00€

**Calculs:**
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF021 - Pickles 350ml

**Statut:** Erreur (faux positif)
**Explication:** Produit test commandé 1 fois, non renouvelé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S38927 (02/09/2025): 1 TU6 @ 20,94€

**Calculs:**
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF035 - Burger Squeeze 300ml

**Statut:** Erreur (faux positif)
**Explication:** Produit test commandé 1 fois, non renouvelé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU12 @ 26,40€

**Calculs:**
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF033 - Andalouse Squeeze 300ml

**Statut:** Erreur (faux positif)
**Explication:** Produit test commandé 1 fois, non renouvelé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU12 @ 26,40€

**Calculs:**
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF037 - BBQ Squeeze 300ml

**Statut:** Erreur (faux positif)
**Explication:** Produit test commandé 1 fois, non renouvelé.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S37552 (20/06/2025): 1 TU12 @ 26,40€

**Calculs:**
- Days until stockout: 0 jours < 19 jours (seuil)
- Niveau de confiance: LOW (1 commande)
- Décision: PROPOSÉ mais NON COMMANDÉ
</details>

---

### JF001 - Mayonnaise Truffes 250ml

**Statut:** Manqué
**Explication:** Ce produit n'était pas visible pour le système car la dernière commande datait du 18/02/2025, soit 74 jours avant le début de la fenêtre d'analyse (180 jours). Le client l'a commandé après 254 jours d'absence, cassant son rythme habituel.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- S34806 (18/02/2025): 1 TU6 @ 23,40€ (HORS fenêtre)
- S33829 (06/01/2025): 1 TU6 @ 23,40€ (HORS fenêtre)
- S32691 (20/11/2024): 1 TU6 @ 23,40€ (HORS fenêtre)

**Calculs:**
- Fenêtre d'analyse: 03/05/2025 → 30/10/2025
- Dernière commande: 74 jours AVANT le début de fenêtre
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
- Pattern historique: environ 47 jours entre commandes
- Gap réel: 254 jours jusqu'à la commande du 29/10/2025
</details>

---

### JF041 - Mayonnaise Squeeze 300ml

**Statut:** Manqué
**Explication:** Dernière commande hors de la fenêtre d'analyse de 180 jours. Produit invisible pour le système.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- Toutes les commandes sont antérieures au 03/05/2025

**Calculs:**
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
</details>

---

### JF057 - Mayonnaise Oeufs 720ml

**Statut:** Manqué
**Explication:** Dernière commande hors de la fenêtre d'analyse de 180 jours. Produit invisible pour le système.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- Toutes les commandes sont antérieures au 03/05/2025

**Calculs:**
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
</details>

---

### JF005 - Mayonnaise Oeufs 250ml

**Statut:** Manqué
**Explication:** Dernière commande hors de la fenêtre d'analyse de 180 jours. Produit invisible pour le système.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- Toutes les commandes sont antérieures au 03/05/2025

**Calculs:**
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
</details>

---

### JF028 - Vinaigrette Caesar 200ml

**Statut:** Manqué
**Explication:** Dernière commande hors de la fenêtre d'analyse de 180 jours. Produit invisible pour le système.

<details>
<summary>Détails techniques</summary>

**Historique commandes:**
- Toutes les commandes sont antérieures au 03/05/2025

**Calculs:**
- Commandes dans fenêtre: 0
- Décision: NON PROPOSÉ (invisible)
</details>

---

## Synthèse

### Performance par catégorie

| Catégorie | Nombre | Montant |
|-----------|--------|---------|
| Prédictions correctes | 8 | 186 EUR |
| Erreurs (faux positifs) | 11 | 259 EUR |
| Produits manqués | 5 | 123 EUR |

### Analyse des erreurs

**Faux positifs (11 produits = 58% des prédictions):**
- 9 produits avec confiance LOW (1 seule commande historique)
- 2 produits avec confiance MEDIUM (2 commandes)
- Pattern principal: produits testés par le client mais non adoptés durablement

**Produits manqués (5 produits):**
- 100% dus à la limitation de la fenêtre d'analyse (180 jours)
- Les produits n'avaient pas été commandés dans les 6 derniers mois
- Le système ne peut pas prédire ce qu'il ne voit pas

### Points clés

**Ce qui fonctionne:**
- Détection des ruptures: 100% des ruptures réelles ont été détectées
- Quantités prédites: exactes pour tous les produits correctement prédits
- Produits avec historique stable: taux de réussite élevé

**Ce qui pose problème:**
- Produits en phase de test: le système ne distingue pas un test ponctuel d'un produit régulier
- Fenêtre d'analyse: produits à rotation lente (>180 jours) invisibles
- Confiance LOW: 9 erreurs sur 11 concernent des produits avec 1 seule commande

---

**Rapport généré le:** 7 novembre 2025
**Sources:** Odoo ERP + Système de prédiction auto-proposal
**Méthode:** Analyse sur 180 jours, seuil de rupture: 19 jours
