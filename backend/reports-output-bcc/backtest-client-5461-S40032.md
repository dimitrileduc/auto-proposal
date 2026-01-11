# Rapport Backtest - Client RETAIL PARTNERS  SA , RETAIL PARTNERS  SA , Adresse de facturation

## Contexte

- **Client** : RETAIL PARTNERS  SA , RETAIL PARTNERS  SA , Adresse de facturation (ID: 5461)
- **Commande réelle** : S40032
- **Date commande** : 2025-10-30 14:23:31
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 861 input + 120 output = 981 total


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
| [PF0563] BONI MOUTARDE DOUCE 300 GR | 260 | Product analyzed but LLM -> 0 - client ordered 260u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [PF0563] BONI MOUTARDE DOUCE 300 GR</strong> - LLM predit: 0u | Reel commande: 260u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande n'est enregistrée dans l'historique récent ni sur la période N-1. En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'identifier un besoin ou un risque de rupture. Conformément aux règles de gestion, aucune commande ne peut être déclenchée sans base historique minimale. ÉTAPE 2 : QUANTITÉ. La quantité est fixée à 0 car aucun flux n'est détecté.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:18:59.194Z*
