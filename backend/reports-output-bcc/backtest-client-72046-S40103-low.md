# Rapport Backtest - Client EDEKA Rhein Ruhr Stiftung & Co. KG, Adebahr Lebensmittel KG

## Contexte

- **Client** : EDEKA Rhein Ruhr Stiftung & Co. KG, Adebahr Lebensmittel KG (ID: 72046)
- **Commande réelle** : S40103
- **Date commande** : 2025-11-04 09:33:57
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 7,737 input + 732 output = 8,469 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 7 produits réels, 0 détectés |
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

## False Negatives (7)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (7 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de consommation ou de cycle de rotation, il est impossible d'identifier un besoin ou de calculer une médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'est enregistrée dans l'historique récent ni sur la période N-1. En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'établir un besoin ou une tendance de consommation. Conformément au principe de ne pas surestimer sans base historique, aucune quantité n'est préconisée pour le moment.

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'est enregistrée dans l'historique récent ni pour l'année précédente (N-1). En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'établir un besoin de réapprovisionnement. Conformément aux règles de gestion, aucune quantité ne peut être préconisée sans base historique minimale.

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, aucun risque de rupture n'est identifiable pour les 30 prochains jours. Aucune commande de réapprovisionnement n'est justifiée.

</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes et N-1 inexistantes). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'établir un besoin ou une quantité de réapprovisionnement. Le risque de rupture ne peut être évalué, la quantité est donc maintenue à zéro par défaut.

</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes et N-1 inexistantes). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible d'identifier un besoin ou de calculer une médiane. Conformément aux règles de gestion, aucune commande ne peut être déclenchée sans base de calcul.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:25:02.546Z*
