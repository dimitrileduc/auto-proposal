# 🔍 VÉRIFICATION COMPLÈTE - Prédiction S39999
## Client: LE TIROIR DES SAVEURS | Date prédiction: 30/10/2025

---

## 📋 PARAMÈTRES D'ANALYSE

| Paramètre | Valeur |
|-----------|--------|
| **Date d'analyse** | 30/10/2025 00:00:00 |
| **Fenêtre d'analyse** | 180 jours (03/05/2025 → 30/10/2025) |
| **Target coverage** | 14 jours |
| **Lead time** | 5 jours |
| **Seuil rupture** | 19 jours (14 + 5) |

---

## 📊 TABLEAU RÉCAPITULATIF SIMPLE

| Produit | Prédit 30/10 | Réel | Confiance | Days stockout | Résultat |
|---------|--------------|------|-----------|---------------|----------|
| **REB01** | 0 (NON proposé) | 8 TU10<br>150€ | - | 21j > 19j | 🚨 Manqué (seuil) |
| **REB02** | 0 (NON proposé) | 8 TU10<br>150€ | - | 21j > 19j | 🚨 Manqué (seuil) |
| **REB03** | 4 TU10<br>75€ | 4 TU10<br>75€ | LOW | 0j | ✅ Parfait |
| **REB04** | 6 TU10<br>113€ | 4 TU10<br>75€ | LOW | 0j | ⚠️ +50% |
| **REB08** | 0 (hors fenêtre) | 4 TU10<br>75€ | - | - | ❌ Manqué |
| **REB11** | 6 TU10<br>159€ | 0<br>0€ | LOW | 0j | ❌ Faux + |
| **KOKO01** | 10 TU12<br>239€ | 0<br>0€ | LOW | 0j | ❌ Faux + |
| **KOKO02** | 9 TU12<br>215€ | 8 TU12<br>202€ | MEDIUM | -32j | ⚠️ +12% |
| **KOKO03** | 8 TU12<br>202€ | 8 TU12<br>202€ | MEDIUM | -21j | ✅ Parfait |
| **UPI02** | 8 TU12<br>143€ | 0<br>0€ | LOW | 0j | ❌ Faux + |
| **UPI04** | 0 (hors fenêtre) | 5 TU12<br>89€ | - | - | ❌ Manqué |
| **UPI07** | 8 TU12<br>143€ | 5 TU12<br>89€ | LOW | 0j | ⚠️ +60% |
| **WIG01** | 4 TU12<br>103€ | 0<br>0€ | LOW | 0j | ❌ Faux + |
| **RISH04** | 5 TU12<br>125€ | 0<br>0€ | LOW | 0j | ❌ Faux + |
| **TOTAL** | **1 517€** | **1 108€** | | | **2/10 parfaits** |

**Légende:**
- ✅ = Prédiction parfaite
- ⚠️ = Quantité proche/écart acceptable
- ❌ = Faux positif (prédit mais pas commandé)
- 🚨 = Faux négatif critique (manqué par seuil trop strict)

---

## 🔍 ANALYSE PRODUIT PAR PRODUIT (avec données Odoo vérifiées)

### REB01 - Chips Sel de mer

**Historique complet Odoo:**
- S38790 (28/08/2025): 8 TU10 @ 18,80€ ✅ DANS fenêtre
- S36772 (14/05/2025): 8 TU10 @ 18,80€ ✅ DANS fenêtre
- S35688 (31/03/2025): 5 TU10 @ 18,80€ ❌ AVANT fenêtre
- S35107 (27/02/2025): 6 TU10 @ 18,80€ ❌ AVANT fenêtre
- S34218 (20/01/2025): 5 TU10 @ 18,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 2 (S38790, S36772)
- Première commande: 14/05/2025
- Dernière commande: 28/08/2025
- Total quantités: 16 TU10
- Jours historique: 14/05 → 30/10 = 169 jours
- **Consommation/jour**: 16 / 169 = **0,095 TU10/jour**
- Jours écoulés depuis dernière: 28/08 → 30/10 = 63 jours
- **Stock estimé**: 8 - (63 × 0,095) = **2,02 TU10**
- **Days until stockout**: 2,02 / 0,095 = **21 jours**
- **Seuil**: 19 jours
- **Décision**: 21j > 19j → ❌ **PAS DE RUPTURE** → **NON PROPOSÉ**

**Quantité recommandée théorique:**
- Stratégie: median_recent_orders (2 commandes)
- Médiane de [8, 8]: **8 TU10**

**Résultat réel:**
- ✅ **Commandé: 8 TU10** (150,40€)

**Conclusion**: 🚨 **FAUX NÉGATIF CRITIQUE** - Le système n'aurait PAS DÛ proposer ce produit selon la logique (21j > 19j), mais le client l'a commandé. Le calcul de rupture était trop optimiste.

---

### REB02 - Chips Paprika fumé

**Historique complet Odoo:**
- S38790 (28/08/2025): 8 TU10 @ 18,80€ ✅ DANS fenêtre
- S36772 (14/05/2025): 8 TU10 @ 18,80€ ✅ DANS fenêtre
- S35688 (31/03/2025): 5 TU10 @ 18,80€ ❌ AVANT fenêtre
- S35107 (27/02/2025): 6 TU10 @ 18,80€ ❌ AVANT fenêtre
- S34218 (20/01/2025): 6 TU10 @ 18,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 2 (S38790, S36772)
- Première commande: 14/05/2025
- Dernière commande: 28/08/2025
- Total quantités: 16 TU10
- Jours historique: 169 jours
- **Consommation/jour**: 16 / 169 = **0,095 TU10/jour**
- Jours écoulés: 63 jours
- **Stock estimé**: 8 - (63 × 0,095) = **2,02 TU10**
- **Days until stockout**: 2,02 / 0,095 = **21 jours**
- **Décision**: 21j > 19j → ❌ **PAS DE RUPTURE** → **NON PROPOSÉ**

**Quantité recommandée théorique:**
- Stratégie: median_recent_orders (2 commandes)
- Médiane de [8, 8]: **8 TU10**

**Résultat réel:**
- ✅ **Commandé: 8 TU10** (150,40€)

**Conclusion**: 🚨 **FAUX NÉGATIF CRITIQUE** - Même situation que REB01. Le client était proche de la rupture mais le système l'a manqué de justesse (21j vs 19j).

---

### REB03 - Chips Poivre noir

**Historique complet Odoo:**
- S36772 (14/05/2025): 4 TU10 @ 18,80€ ✅ DANS fenêtre
- S35688 (31/03/2025): 5 TU10 @ 18,80€ ❌ AVANT fenêtre
- S35107 (27/02/2025): 3 TU10 @ 18,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S36772)
- Première commande: 14/05/2025
- Dernière commande: 14/05/2025
- Total quantités: 4 TU10
- Jours historique: 169 jours
- **Consommation/jour**: 4 / 169 = **0,024 TU10/jour**
- Jours écoulés: 169 jours
- **Stock estimé**: 4 - (169 × 0,024) = **0 TU10**
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ**

**Quantité recommandée:**
- Stratégie: single_recent_order (1 commande)
- Confiance: LOW
- **Quantité: 4 TU10**

**Résultat réel:**
- ✅ **Commandé: 4 TU10** (75,20€)

**Conclusion**: ✅ **PRÉDICTION PARFAITE** - Rupture détectée correctement, quantité exacte.

---

### REB04 - Chips Thym/Romarin

**Historique complet Odoo:**
- S36772 (14/05/2025): 6 TU10 @ 18,80€ ✅ DANS fenêtre
- S35688 (31/03/2025): 5 TU10 @ 18,80€ ❌ AVANT fenêtre
- S35107 (27/02/2025): 3 TU10 @ 18,80€ ❌ AVANT fenêtre
- S34218 (20/01/2025): 4 TU10 @ 18,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S36772)
- Jours historique: 169 jours
- **Consommation/jour**: 6 / 169 = **0,036 TU10/jour**
- Jours écoulés: 169 jours
- **Stock estimé**: 6 - (169 × 0,036) = **0 TU10**
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 6 TU10**

**Résultat réel:**
- ⚠️ **Commandé: 4 TU10** (75,20€)

**Conclusion**: ⚠️ **SURESTIMÉ +50%** - Rupture bien détectée, mais quantité trop élevée (6 vs 4).

---

### REB08 - Chips Piment Citron

**Historique complet Odoo:**
- S35688 (31/03/2025): 5 TU10 @ 18,80€ ❌ AVANT fenêtre (33 jours avant)
- S35107 (27/02/2025): 3 TU10 @ 18,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: **0**
- **Décision**: Produit invisible → **NON PROPOSÉ**

**Résultat réel:**
- ✅ **Commandé: 4 TU10** (75,20€)

**Conclusion**: ❌ **FAUX NÉGATIF** - Limitation système (hors fenêtre d'analyse).

---

### REB11 - Chips Truffes

**Historique complet Odoo:**
- S36772 (14/05/2025): 6 TU10 @ 26,50€ ✅ DANS fenêtre
- S35688 (31/03/2025): 4 TU10 @ 26,50€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S36772)
- Jours historique: 169 jours
- **Consommation/jour**: 6 / 169 = **0,036 TU10/jour**
- Jours écoulés: 169 jours
- **Stock estimé**: 0 TU10
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 6 TU10**

**Résultat réel:**
- ❌ **Commandé: 0** (0€)

**Conclusion**: ❌ **FAUX POSITIF** - Rupture détectée mais client n'a pas voulu renouveler (produit premium).

---

### KOKO01 - Kombucha Original

**Historique complet Odoo:**
- S37694 (26/06/2025): 10 TU12 @ 23,88€ ✅ DANS fenêtre
- S34218 (20/01/2025): 4 TU12 @ 25,20€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S37694)
- Jours historique: 26/06 → 30/10 = 126 jours
- **Consommation/jour**: 10 / 126 = **0,079 TU12/jour**
- Jours écoulés: 126 jours
- **Stock estimé**: 10 - (126 × 0,079) = **0 TU12**
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 10 TU12**

**Résultat réel:**
- ❌ **Commandé: 0** (0€)

**Conclusion**: ❌ **FAUX POSITIF** - Rupture détectée mais client n'a pas renouvelé (préfère variétés aromatisées).

---

### KOKO02 - Kombucha Citron Gingembre

**Historique complet Odoo:**
- S37694 (26/06/2025): 10 TU12 @ 23,88€ ✅ DANS fenêtre
- S36772 (14/05/2025): 8 TU12 @ 25,20€ ✅ DANS fenêtre
- S35688 (31/03/2025): 8 TU12 @ 25,20€ ❌ AVANT fenêtre
- S35107 (27/02/2025): 6 TU12 @ 25,20€ ❌ AVANT fenêtre
- S34218 (20/01/2025): 3 TU12 @ 25,20€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 2 (S37694, S36772)
- Première commande: 14/05/2025
- Dernière commande: 26/06/2025
- Total quantités: 18 TU12
- Jours historique: 169 jours
- **Consommation/jour**: 18 / 169 = **0,106 TU12/jour**
- Jours écoulés: 26/06 → 30/10 = 126 jours
- **Stock estimé**: 10 - (126 × 0,106) = **-3,36 TU12**
- **Days until stockout**: **-32 jours** (rupture depuis longtemps)
- **Décision**: -32j < 19j → ✅ **RUPTURE** → **PROPOSÉ**

**Quantité recommandée:**
- Stratégie: median_recent_orders (2 commandes)
- Médiane de [10, 8]: **9 TU12**

**Résultat réel:**
- ⚠️ **Commandé: 8 TU12** (201,60€)

**Conclusion**: ⚠️ **LÉGÈRE SURESTIMATION +12%** - Rupture bien détectée, quantité proche (9 vs 8).

---

### KOKO03 - Kombucha Framboise Hibiscus

**Historique complet Odoo:**
- S38790 (28/08/2025): 6 TU12 @ 25,20€ ✅ DANS fenêtre
- S37694 (26/06/2025): 10 TU12 @ 23,88€ ✅ DANS fenêtre
- S36772 (14/05/2025): 8 TU12 @ 25,20€ ✅ DANS fenêtre
- S35688 (31/03/2025): 8 TU12 @ 25,20€ ❌ AVANT fenêtre
- S35107 (27/02/2025): 6 TU12 @ 25,20€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 3 (S38790, S37694, S36772)
- Première commande: 14/05/2025
- Dernière commande: 28/08/2025
- Total quantités: 24 TU12
- Jours historique: 169 jours
- **Consommation/jour**: 24 / 169 = **0,142 TU12/jour**
- Jours écoulés: 63 jours
- **Stock estimé**: 6 - (63 × 0,142) = **-2,95 TU12**
- **Days until stockout**: **-21 jours**
- **Décision**: -21j < 19j → ✅ **RUPTURE** → **PROPOSÉ**

**Quantité recommandée:**
- Stratégie: median_recent_orders (3 commandes)
- Médiane de [6, 10, 8]: **8 TU12**

**Résultat réel:**
- ✅ **Commandé: 8 TU12** (201,60€)

**Conclusion**: ✅ **PRÉDICTION PARFAITE** - Rupture détectée, quantité exacte.

---

### UPI02 - Jus Pomme-Fraise

**Historique complet Odoo:**
- S36772 (14/05/2025): 8 TU12 @ 17,88€ ✅ DANS fenêtre
- S35107 (27/02/2025): 6 TU12 @ 17,88€ ❌ AVANT fenêtre
- S34218 (20/01/2025): 5 TU12 @ 17,88€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S36772)
- Jours historique: 169 jours
- **Consommation/jour**: 8 / 169 = **0,047 TU12/jour**
- Jours écoulés: 169 jours
- **Stock estimé**: 0 TU12
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 8 TU12**

**Résultat réel:**
- ❌ **Commandé: 0** (substitué par UPI04)

**Conclusion**: ❌ **FAUX POSITIF** - Rupture détectée mais client a substitué par autre produit.

---

### UPI04 - Jus Pomme-Cerise

**Historique complet Odoo:**
- S35107 (27/02/2025): 5 TU12 @ 17,88€ ❌ AVANT fenêtre (64 jours avant)
- S34218 (20/01/2025): 3 TU12 @ 17,88€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: **0**
- **Décision**: Produit invisible → **NON PROPOSÉ**

**Résultat réel:**
- ✅ **Commandé: 5 TU12** (89,40€)

**Conclusion**: ❌ **FAUX NÉGATIF** - Substitution de UPI02, hors fenêtre d'analyse.

---

### UPI07 - Jus Pomme-Framboise

**Historique complet Odoo:**
- S36772 (14/05/2025): 8 TU12 @ 17,88€ ✅ DANS fenêtre
- S35107 (27/02/2025): 6 TU12 @ 17,88€ ❌ AVANT fenêtre
- S34218 (20/01/2025): 3 TU12 @ 17,88€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S36772)
- Jours historique: 169 jours
- **Consommation/jour**: 8 / 169 = **0,047 TU12/jour**
- Jours écoulés: 169 jours
- **Stock estimé**: 0 TU12
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 8 TU12**

**Résultat réel:**
- ⚠️ **Commandé: 5 TU12** (89,40€)

**Conclusion**: ⚠️ **SURESTIMÉ +60%** - Rupture bien détectée, quantité trop élevée (8 vs 5).

---

### WIG01 - Cidre WIGNAC

**Historique complet Odoo:**
- S38790 (28/08/2025): 4 TU12 @ 25,80€ ✅ DANS fenêtre
- S35107 (27/02/2025): 4 TU12 @ 25,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S38790)
- Jours historique: 28/08 → 30/10 = 63 jours
- **Consommation/jour**: 4 / 63 = **0,063 TU12/jour**
- Jours écoulés: 63 jours
- **Stock estimé**: 4 - (63 × 0,063) = **0 TU12**
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 4 TU12**

**Résultat réel:**
- ❌ **Commandé: 0** (0€)

**Conclusion**: ❌ **FAUX POSITIF** - Rupture détectée mais produit commandé 1 fois jamais renouvelé.

---

### RISH04 - Kombucha Basil

**Historique complet Odoo:**
- S37694 (26/06/2025): 5 TU12 @ 25,08€ ✅ DANS fenêtre
- S34617 (31/01/2025): 6 TU12 @ 25,80€ ❌ AVANT fenêtre

**Calcul prédiction (30/10/2025):**
- Commandes dans fenêtre: 1 (S37694)
- Jours historique: 126 jours
- **Consommation/jour**: 5 / 126 = **0,040 TU12/jour**
- Jours écoulés: 126 jours
- **Stock estimé**: 0 TU12
- **Days until stockout**: **0 jours**
- **Décision**: 0j < 19j → ✅ **RUPTURE** → **PROPOSÉ 5 TU12**

**Résultat réel:**
- ❌ **Commandé: 0** (0€)

**Conclusion**: ❌ **FAUX POSITIF** - Rupture détectée mais produit test jamais renouvelé.

---

## 📊 SYNTHÈSE GLOBALE

### Résumé des prédictions

| Catégorie | Produits | Détail |
|-----------|----------|--------|
| ✅ **Parfait** | 2 | REB03, KOKO03 |
| ⚠️ **Proche** | 3 | KOKO02 (+12%), REB04 (+50%), UPI07 (+60%) |
| ❌ **Faux positifs** | 5 | WIG01, KOKO01, RISH04, UPI02, REB11 |
| 🚨 **Faux négatifs critiques** | 2 | REB01, REB02 (21j vs 19j) |
| ❌ **Faux négatifs limites** | 2 | REB08, UPI04 (hors fenêtre) |

### Métriques finales

| Métrique | Valeur |
|----------|--------|
| **Produits prédits** | 10 |
| **Produits commandés** | 9 |
| **Prédictions parfaites** | 2/10 (20%) |
| **Produits manqués** | 4/9 (44%) |
| **Faux positifs** | 5/10 (50%) |
| **Montant prédit** | 1 517€ HT |
| **Montant réel** | 1 108€ HT |
| **Écart** | -27% |

### 🔍 Insights critiques

#### 🚨 Problème #1: Seuil de rupture trop strict
**REB01 et REB02** avaient 21 jours de stock vs seuil de 19j
- Calcul théoriquement correct selon la logique
- **MAIS** le client a commandé quand même
- Le seuil de 19j (14j couverture + 5j délai) est peut-être trop optimiste
- **Suggestion**: Augmenter à 25-30 jours ou ajouter marge de sécurité

#### ❌ Problème #2: Faux positifs = 50% des prédictions
- **100% sont LOW confidence** (1 seule commande)
- Pattern: produits testés 1 fois, jamais re-commandés
- Représentent 51% de l'erreur brute (-769€)
- **Suggestion**: Ne pas proposer les produits LOW confidence avec 1 seule commande

#### ✅ Point positif: MEDIUM confidence fiable
- KOKO03: Parfait (3 commandes)
- KOKO02: Proche à +12% (2 commandes)
- 100% de détection de rupture pour MEDIUM

---

**Rapport généré le**: 7 novembre 2025
**Sources**: Odoo MCP + prediction-S39999.json + SALE-S39999-le-tiroir-des-saveurs.md
**Calculé selon**: /Users/dlstudio/Documents/GitHub/auto-proposal/README.md
