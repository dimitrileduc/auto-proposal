# Rapport Backtest - Client CARREFOUR BELGIUM SA, CARREFOUR MARKET AALTER

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CARREFOUR MARKET AALTER (ID: 58330)
- **Commande réelle** : S35834
- **Date commande** : 2025-04-07 06:46:16
- **Date cutoff système** : 2025-04-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 14,628 input + 1,439 output = 16,067 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 1 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 10 produits réels, 0 détectés |
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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 12 | Predicted 12u but not ordered |


---

## False Negatives (10)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (10 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de consommation ou de cycle de commande, il est impossible de justifier un besoin de réapprovisionnement immédiat selon les critères de précaution B2B. Le risque de rupture ne peut être évalué, la quantité est donc fixée à 0 par défaut.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de consommation, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car le produit ne présente aucune activité commerciale enregistrée.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de référence, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution B2B.

</details>


<details>
<summary><strong>4. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de rotation, il est impossible d'établir un cycle de commande ou une quantité médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée à cette date.

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de consommation, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
ÉTAPE 1 - DÉTECTION DU BESOIN : Aucun historique de commande récent ou sur l'année précédente (N-1) n'est disponible pour ce produit. En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'identifier un besoin ou un risque de rupture imminent. Conformément aux règles de gestion, aucune commande ne peut être déclenchée sans base historique minimale. ÉTAPE 2 - ESTIMATION QUANTITÉ : La quantité est fixée à 0 car aucun besoin n'est détecté.

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de base, aucun besoin de réapprovisionnement n'est détecté. Le risque de rupture est considéré comme nul faute de consommation enregistrée.

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique, le risque de rupture ne peut être évalué et aucune commande ne peut être justifiée selon les règles de gestion basées sur la médiane historique.

</details>


<details>
<summary><strong>9. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de consommation, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car aucune demande n'est enregistrée pour cette référence.

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (ni récente, ni à N-1). En l'absence totale d'historique de rotation ou de cycle de commande identifiable, il est impossible de justifier un besoin de réapprovisionnement immédiat. Conformément aux règles de gestion, aucune quantité ne peut être préconisée sans base de calcul.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:28:23.723Z*
