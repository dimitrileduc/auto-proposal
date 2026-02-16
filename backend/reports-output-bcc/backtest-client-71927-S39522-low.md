# Rapport Backtest - Client Plus van Wijnbergen

## Contexte

- **Client** : Plus van Wijnbergen (ID: 71927)
- **Commande réelle** : S39522
- **Date commande** : 2025-10-02 11:48:39
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 859 input + 86 output = 945 total


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
| [JF068] FIL VOL AU VENT 800G BOCAL  | 32 | Product analyzed but LLM -> 0 - client ordered 32u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF068] FIL VOL AU VENT 800G BOCAL </strong> - LLM predit: 0u | Reel commande: 32u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes et N-1 inexistantes). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'identifier un besoin ou de calculer une médiane de réapprovisionnement. Par principe de précaution contre le surstockage sur un produit sans mouvement connu, aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:28:30.039Z*
