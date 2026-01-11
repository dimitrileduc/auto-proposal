# Rapport Backtest - Client SAS CSF, ENTREPÔT CHOLET

## Contexte

- **Client** : SAS CSF, ENTREPÔT CHOLET (ID: 56953)
- **Commande réelle** : S40027
- **Date commande** : 2025-10-30 12:57:08
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,055 input + 131 output = 1,186 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 1 produits réels, 0 détectés |
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

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 96 | Product analyzed but LLM -> 0 - client ordered 96u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM predit: 0u | Reel commande: 96u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande de 96 unités a été effectuée hier (28/10/2025). Le cycle entre les deux dernières commandes était de 20 jours. Avec un stock fraîchement réapprovisionné il y a moins de 24 heures, il n'existe aucun risque de rupture de stock immédiat dans l'horizon des 30 prochains jours (Replenishment Threshold Days). Selon la règle de détection du besoin, le délai depuis la dernière commande est de 0% du cycle moyen, ce qui ne justifie aucune nouvelle commande pour le moment.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:11:04.125Z*
