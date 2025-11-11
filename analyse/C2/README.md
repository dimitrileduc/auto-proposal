# Analyse Comparative C2 - Prédictions vs Réalité

## Note Générale

**La comparaison porte sur des devis générés au 18/10/2025 avec des commandes postérieures.**

Pour être précis, nous devrions comparer les commandes réelles avec les devis simulés à la même date. Cette contrainte temporelle explique certaines divergences observées, car le contexte client peut évoluer entre la prédiction et la commande réelle.

---

## Analyses par Client

### [S39837 - CINEMA GALERIES](./S39837/)

**Client ID:** 60264
**Devis prédit:** 18/10/2025
**Commande réelle:** 23/10/2025 (S39893)

**Limitation PDF:**
Il semble que le PDF ne reprenne que la première page de listing produit et non tous les produits. **NUT03 et NUT06** sont bien présents dans le devis AI généré au 18/10 (visible dans Odoo) mais n'apparaissent pas dans l'export PDF.

**Niveau de confiance:**
Les prédictions sont LOW confidence (se basent sur une seule commande dans la fenêtre historique de 180 jours), ce qui explique les différences de quantités observées.

**Documents:**
- [notes.md](./S39837/notes.md) - Comparaison détaillée
- [rapport_1810.md](./S39837/rapport_1810.md) - Rapport technique de prédiction
- [PDF Devis AI](./S39837/Odoo%20-%20S39837%20(CINEMA%20GALERIES%20-%20Devis%20AI)1810.pdf)

---

### [S40009 - LES SORBIERS](./S40009/)

**Client ID:** 60468
**Devis prédit:** 18/10/2025
**Commande réelle:** 04/11/2025 (S40043)

**Limitation PDF:**
Il semble que **LV132, LV001 et REB08** soient présents en page 7 du devis AI et non sur le PDF exporté par le commercial. Ces produits sont bien dans le système Odoo mais invisibles dans l'export PDF.



**Documents:**
- [notes.md](./S40009/notes.md) - Comparaison détaillée
- [rapport_client-60468-.md](./S40009/rapport_client-60468-.md) - Rapport technique de prédiction
- [PDF Devis AI](./S40009/Odoo%20-%20S40009%20(Les%20Sorbiers%20-%20Devis%20AI).pdf)

---

### [S40090 - THE SOURCE](./S40090/)

**Client ID:** 60554
**Devis prédit:** 18/10/2025
**Commande réelle:** 28/10/2025

**Limitation PDF:**
2 produits présents dans Odoo mais non visibles dans le PDF exporté:
- **WIG03** - WIGNAC cidre naturel 750ml (2 TU6)
- **MATE01** - MATE MATE thé glacé bio pétillant au yerba maté verre 330ml (1 TU24)



**Documents:**
- [notes.md](./S40090/notes.md) - Comparaison détaillée
- [rapport-client-60554-.md](./S40090/rapport-client-60554-.md) - Rapport technique de prédiction
- [PDF Devis AI](./S40090/Odoo%20-%20S40090%20(The%20Source%20-%20Devis%20AI).pdf)


---


