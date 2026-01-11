# Rapport Backtest - Client SAS CSF, ENTREPÔT NÎMES

## Contexte

- **Client** : SAS CSF, ENTREPÔT NÎMES (ID: 56952)
- **Commande réelle** : S40189
- **Date commande** : 2025-11-07 12:31:14
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,143 input + 184 output = 1,327 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 110.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -66.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 56 | 166 | 110.0 | 66.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 56u vs Médiane: 48u (Réel: 166u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 48u
- **Reel commande**: 166u
- **Erreur LLM**: 110u (66.3%)
- **Erreur Mediane**: 118u (71.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une absence de commandes récentes depuis le 02/10/2025 (soit 35 jours), ce qui dépasse le seuil de réapprovisionnement de 30 jours. L'historique de l'année précédente (N-1) confirme une activité importante sur la période d'octobre et novembre (pics saisonniers liés aux produits de type Vol-au-vent). En l'absence de commandes récentes en novembre 2025, le risque de rupture est critique. La quantité est déterminée par la médiane des commandes de la même période l'an dernier (octobre/novembre 2024), en excluant le pic exceptionnel de 288u, soit une base de 56u pour couvrir le besoin immédiat sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,143 tokens
- **Output**: 184 tokens
- **Total**: 1,327 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 11:47:01: 104u
- 2025-09-29 15:35:59: 8u
- 2025-09-29 15:35:01: 16u
- 2025-07-18 12:28:24: 40u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 14:44:39: 56u
- 2024-10-30 07:39:44: 48u
- 2024-10-18 11:54:00: 288u
- 2024-10-14 12:34:27: 60u
- 2024-10-11 07:24:02: 8u
- 2024-10-08 08:59:23: 36u
- 2024-08-07 06:15:09: 48u
- 2024-07-24 05:58:20: 192u
- 2024-07-19 09:42:51: 84u
- 2024-07-10 11:27:05: 16u
- 2024-07-08 09:31:35: 24u
- 2024-07-04 12:51:34: 13u

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 166u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:48.570Z*
