# Comparaison S40009: Predit 18/10 vs Reel 04/11

Il semble que LV132 , LV001 et REB08 soit presents en page 7 du devis AI et non sur le pdf exporte par le commerical. Concernant les items barrés en rouge que je suppose qui signifie non commande réelement jai un gros doute vu le nombre d incohérence sur des produits avec « medium  confidence «  

## Produits predits avec quantite partielle (6)

| Produit | Predit | Reel | Ecart | Confidence | Justification |
|---------|--------|------|-------|------------|---------------|
| LV138 Carotte gingembre | 2 TU6 | 1 TU6 | -1 | LOW (1 cmd) | Qte surestimee |
| JOY05 Cerise | 4 TU8 | 2 TU8 | -2 | MEDIUM (2 cmd) | Qte surestimee |
| JOY02 Fraise | 3 TU8 | 1 TU8 | -2 | MEDIUM (3 cmd) | Qte surestimee |
| JOY03 Abricot | 2 TU8 | 1 TU8 | -1 | MEDIUM (4 cmd) | Qte surestimee |
| JOY08 Framboise | 3 TU8 | 2 TU8 | -1 | MEDIUM (3 cmd) | Qte surestimee |
| JOY06 Rhubarbe | 3 TU8 | 1 TU8 | -2 | MEDIUM (2 cmd) | Qte surestimee |

## Faux positifs - Produits predits non vendus (12)

| Produit | Predit | Reel | Ecart | Confidence | Justification |
|---------|--------|------|-------|------------|---------------|
| LV217 Basilico | 2 TU6 | 0 | -2 | LOW (1 cmd) | Faux positif: Stock suffisant |
| JOY01 Orange | 2 TU8 | 0 | -2 | MEDIUM (4 cmd) | Faux positif: Stock suffisant |
| REB01 Sel mer 125g | 2 TU10 | 0 | -2 | MEDIUM (3 cmd) | Faux positif: Stock suffisant |
| REB05 Sel mer 35g | 4 TU20 | 0 | -4 | MEDIUM (2 cmd) | Faux positif: Stock suffisant |
| REB02 Paprika 125g | 3 TU10 | 0 | -3 | MEDIUM (3 cmd) | Faux positif: Stock suffisant |
| REB06 Paprika 35g | 2 TU20 | 0 | -2 | MEDIUM (3 cmd) | Faux positif: Stock suffisant |
| REB03 Poivre 125g | 2 TU10 | 0 | -2 | MEDIUM (2 cmd) | Faux positif: Stock suffisant |
| fsv10 Cajou oignon | 3 TU1 | 0 | -3 | MEDIUM (2 cmd) | Faux positif: Stock suffisant |
| fsv03 Noisette | 3 TU1 | 0 | -3 | MEDIUM (2 cmd) | Faux positif: Stock suffisant |
| fsv04 Amande | 3 TU1 | 0 | -3 | LOW (1 cmd) | Faux positif: Stock suffisant |
| LV336 Tomato Basilico | 1 TU6 | 0 | -1 | LOW (1 cmd) | Faux positif: Stock suffisant |
| LV055 Mini grissini | 3 TU16 | 0 | -3 | LOW (1 cmd) | Faux positif: Stock suffisant |

## Produits non compares (manque info PDF)

| Produit | Predit | Reel | Note |
|---------|--------|------|------|
| LV132 Houmous | 1 TU6 | ? | Pas d'annotation sur PDF |
| LV001 Pizza Croccantina | 3 TU12 | ? | Pas d'annotation sur PDF |
| REB08 Piment citron | 1 TU10 | ? | Pas d'annotation sur PDF |

## Produits non predits (4 faux negatifs)

| Produit | Predit | Reel | Ecart | Historique 180j | Justification |
|---------|--------|------|-------|-----------------|---------------|
| LV160 | 0 | 4 | +4 | 2 cmd (04/08, 27/05) | Faux negatif: Seuil rupture non atteint (stock > 19j) |
| LV129 | 0 | 2 | +2 | 2 cmd (04/08, 27/05) | Faux negatif: Seuil rupture non atteint (stock > 19j) |
| LV188 | 0 | 1 | +1 | 2 cmd (17/09, 17/06) | Faux negatif: Seuil rupture non atteint (stock > 19j) |
| JOY04 | 0 | 1 | +1 | 3 cmd (17/09, 11/06, 22/04) | Faux negatif: Seuil rupture non atteint (stock > 19j) |

**Performance:**
- Corrects: 0/21 (0%) - Aucune qte exacte
- Partiels: 6/21 (29%) - Produit detecte mais qte surestimee
- Faux positifs: 12/21 (57%) - Stock client suffisant
- Faux negatifs: 4 produits non predits
- Non compares: 3/21 (14%) - LV132, LV001, REB08 sans annotation

**Total detection: 6/25 produits reellement vendus (24%)**

**Probleme majeur:** 57% de faux positifs indique que le seuil de rupture (19 jours) est trop optimiste. Le client avait probablement du stock suffisant pour la plupart des produits predits.
