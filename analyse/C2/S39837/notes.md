# Comparaison S39837: Predit 18/10 vs Reel 23/10

 Il semble que le pdf ne reprenne que la premiere page de listing produit et non ts les produits. NUT03 ET NUT06 sont bien présente dans le devis 1I génère au 18/10.  les predictions sont low confidence ( se base sur une seule commande dans la fenêtre historique ) ce qui explique les differences. 

| Produit | Predit | Reel | Ecart | Confidence | Justification |
|---------|--------|------|-------|------------|---------------|
| NUT07 Caramel | 5 TU15 | 5 TU15 | 0 | LOW (1 cmd) | Correct: Qte exacte |
| NUT05 Gingembre | 5 TU15 | 5 TU15 | 0 | LOW (1 cmd) | Correct: Qte exacte |
| NUT04 Amandes | 3 TU15 | 2 TU15 | -1 | LOW (1 cmd) | Qte surestimee de 1 unite |
| NUT03 Mediterran | 5 TU15 | 3 TU15 | -2 | LOW (1 cmd) | Qte surestimee, produit correct |
| NUT06 Cerises | 4 TU15 | 3 TU15 | -1 | LOW (1 cmd) | Qte surestimee, produit correct |
| NUT08 Noix grillees | 0 | 4 TU15 | +4 | - | Faux negatif: Pas d'historique 180j |

**Performance:**
- Corrects: 2/6 (33%) - NUT07 et NUT05 qte exacte
- Partiels: 3/6 (50%) - NUT04, NUT03, NUT06 detectes mais qte surestimee
- Faux negatifs: 1/6 (17%) - NUT08 non predit

**Cause:** Confiance LOW basee sur 1 seule commande (S38463 du 12/08)
