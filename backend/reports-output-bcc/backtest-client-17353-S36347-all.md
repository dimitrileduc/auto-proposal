# Rapport Backtest - Client CARREFOUR BELGIUM SA, CRF MARKET ON

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CRF MARKET ON (ID: 17353)
- **Commande réelle** : S36347
- **Date commande** : 2025-06-04 11:13:47
- **Date cutoff système** : 2025-06-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,303 input + 504 output = 4,807 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 1 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 6 produits réels, 0 détectés |
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

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 28 | Predicted 28u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 8 | Product analyzed but LLM -> 0 - client ordered 8u |
| [JF032] JF SAUCE LAPIN 380GX6 | 8 | Product analyzed but LLM -> 0 - client ordered 8u |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF035] JF BURGER SQUEEZE 300ML | 0 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (4 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM predit: 0u | Reel commande: 8u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de consommation, il est impossible d'établir un cycle de rotation ou une quantité médiane. Conformément aux règles de gestion, aucune commande ne peut être préconisée sans base de calcul factuelle.

</details>


<details>
<summary><strong>2. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM predit: 0u | Reel commande: 8u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes et N-1 inexistantes). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible de justifier un besoin de réapprovisionnement immédiat. Le principe de précaution ne peut s'appliquer sans une base minimale de consommation.

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de référence, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution. Le risque de rupture est considéré comme nul faute de consommation enregistrée.

</details>


<details>
<summary><strong>4. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande n'est disponible pour ce produit, que ce soit sur la période récente ou sur l'année précédente (N-1). En l'absence totale d'historique de rotation ou de cycle de vente, il est impossible d'établir un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Par mesure de prudence et pour éviter la création d'un stock mort sans demande avérée, aucune commande n'est préconisée pour le moment.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:28:14.539Z*
