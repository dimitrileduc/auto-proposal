# Comparaison S40090: Predit 18/10 vs Reel 28/10


## Produits predits avec quantite exacte (6)

| Produit | Predit | Reel | Ecart | Confidence | Justification |
|---------|--------|------|-------|------------|---------------|
| REB04 Thym/romarin | 1 TU10 | 1 TU10 | 0 | LOW (1 cmd) | Correct: Qte exacte |
| REB08 Piment citron | 1 TU10 | 1 TU10 | 0 | MEDIUM (2 cmd) | Correct: Qte exacte |
| WIG02 Cidre rose 330ml | 1 TU12 | 1 TU12 | 0 | LOW (1 cmd) | Correct: Qte exacte |
| WIG04 Cidre rose 750ml | 1 TU6 | 1 TU6 | 0 | MEDIUM (2 cmd) | Correct: Qte exacte |
| KOKO03 Kombucha framboise | 1 TU12 | 1 TU12 | 0 | LOW (1 cmd) | Correct: Qte exacte |
| UPI08 Jus pomme-citron | 1 TU12 | 1 TU12 | 0 | LOW (1 cmd) | Correct: Qte exacte |

## Produits predits avec quantite partielle (3)

| Produit | Predit | Reel | Ecart | Confidence | Justification |
|---------|--------|------|-------|------------|---------------|
| REB01 Sel mer | 1 TU10 | 2 TU10 | +1 | MEDIUM (2 cmd) | Qte sous-estimee |
| REB02 Paprika | 1 TU10 | 2 TU10 | +1 | MEDIUM (2 cmd) | Qte sous-estimee |
| REB03 Poivre | 1 TU10 | 2 TU10 | +1 | MEDIUM (2 cmd) | Qte sous-estimee |

## Faux positifs - Produits predits non vendus (8)

| Produit | Predit | Reel | Ecart | Confidence | Justification |
|---------|--------|------|-------|------------|---------------|
| REB11 Truffes | 1 TU10 | 0 | -1 | MEDIUM (2 cmd) | Faux positif: Stock suffisant |
| WIG01 Cidre naturel 330ml | 1 TU12 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |
| KOKO01 Kombucha original | 1 TU12 | 0 | -1 | MEDIUM (2 cmd) | Faux positif: Stock suffisant |
| KOKO02 Kombucha citron gingembre | 1 TU12 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |
| UPI05 Jus pomme-gingembre | 1 TU12 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |
| UPI07 Jus pomme-framboise | 1 TU12 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |
| MANA02 Energy drink | 1 TU24 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |
| WIG06 Petillant pommes | 1 TU12 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |

## Produits non compares (manque info PDF)

| Produit | Predit | Reel | Confidence | Note |
|---------|--------|------|------------|------|
| WIG03 Cidre naturel 750ml | 2 TU6 | ? | LOW (1 cmd) | Pas d'annotation sur PDF (presente dans Odoo) |
| MATE01 The glace mate | 1 TU24 | ? | LOW (1 cmd) | Pas d'annotation sur PDF (presente dans Odoo) |

## Produits non predits (6 faux negatifs)

| Produit | Predit | Reel | Ecart | Historique 180j | Justification |
|---------|--------|------|-------|-----------------|---------------|
| DAF003 Passionfruit | 0 | 1 | +1 | Aucune cmd | Faux negatif: Pas d'historique chez ce client |
| DAF004 Peach Lemon | 0 | 1 | +1 | Aucune cmd | Faux negatif: Pas d'historique chez ce client |
| FO002 Hibiscus | 0 | 1 | +1 | Aucune cmd | Faux negatif: Pas d'historique chez ce client |
| FO003 Peach | 0 | 1 | +1 | Aucune cmd | Faux negatif: Pas d'historique chez ce client |
| MATE02 Canette 250ml | 0 | 1 | +1 | Aucune cmd | Faux negatif: Pas d'historique chez ce client |
| fsv01 Cerneaux noix | 0 | 1 | +1 | Aucune cmd | Faux negatif: Pas d'historique chez ce client |

**Performance:**
- Corrects: 6/17 (35%) - Qte exacte
- Partiels: 3/17 (18%) - Qte sous-estimee (client a commande plus)
- Faux positifs: 8/17 (47%) - Stock client suffisant
- Faux negatifs: 6 produits non predits
- Non compares: 2/19 (11%) - WIG03, MATE01 non annotes

