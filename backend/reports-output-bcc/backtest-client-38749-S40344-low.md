# Rapport Backtest - Client CRF MARKET HOTTON HODICA SA

## Contexte

- **Client** : CRF MARKET HOTTON HODICA SA (ID: 38749)
- **Commande réelle** : S40344
- **Date commande** : 2025-11-14 12:41:32
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,543 input + 4,035 output = 27,578 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 3 produits réels, 0 détectés |
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

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (3 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (ni récente, ni à N-1). En l'absence totale d'historique de rotation ou de cycle de commande identifiable, il est impossible de justifier un besoin de réapprovisionnement immédiat. Conformément aux règles de gestion, aucune quantité ne peut être estimée sans base de calcul.

</details>


<details>
<summary><strong>2. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique de rotation, le risque de rupture ne peut être caractérisé et aucune commande ne peut être justifiée selon les règles de gestion basées sur la médiane historique.

</details>


<details>
<summary><strong>3. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de rotation, il est impossible d'établir un cycle de commande ou une quantité médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée tant qu'un besoin n'est pas identifié.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:11:52.146Z*
