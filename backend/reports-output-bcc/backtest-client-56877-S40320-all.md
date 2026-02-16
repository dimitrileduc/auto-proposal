# Rapport Backtest - Client SA BOISDIS - INTERMARCHE NANINNE

## Contexte

- **Client** : SA BOISDIS - INTERMARCHE NANINNE (ID: 56877)
- **Commande réelle** : S40320
- **Date commande** : 2025-11-14 10:16:32
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 18 produits réels, 0 détectés |
| **F1-Score** | 0.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (0)

*Aucun produit correctement prédit (rappel = 0%)*

---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (18)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Never ordered in previous analysis window (no history) |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Never ordered in previous analysis window (no history) |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Never ordered in previous analysis window (no history) |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | Never ordered in previous analysis window (no history) |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Never ordered in previous analysis window (no history) |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Never ordered in previous analysis window (no history) |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | Never ordered in previous analysis window (no history) |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Never ordered in previous analysis window (no history) |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Never ordered in previous analysis window (no history) |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Never ordered in previous analysis window (no history) |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Never ordered in previous analysis window (no history) |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:32.942Z*
