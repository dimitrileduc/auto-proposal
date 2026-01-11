# Rapport Backtest - Client SPUNTINI TIENEN

## Contexte

- **Client** : SPUNTINI TIENEN (ID: 3739)
- **Commande réelle** : S39984
- **Date commande** : 2025-10-29 11:55:35
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,915 input + 263 output = 2,178 total


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 160u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 30 à 35 jours (dernières commandes le 27/08 et le 01/10). Au 28/10, 27 jours se sont écoulés depuis la dernière commande, ce qui place le produit dans la fenêtre de réapprovisionnement critique compte tenu du seuil de 30 jours. La quantité est extrêmement stable à 160 unités sur les quatre dernières commandes. Conformément à la règle de la médiane et de la stabilité du cycle récent, une commande de 160 unités est nécessaire pour couvrir les besoins du mois de novembre et éviter une rupture imminente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,057 tokens
- **Output**: 164 tokens
- **Total**: 1,221 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 13:11:18: 160u
- 2025-08-27 13:01:31: 160u
- 2025-07-24 10:15:49: 160u
- 2025-06-30 11:57:22: 160u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:36:33: 240u
- 2024-07-19 07:08:10: 160u
- 2024-06-06 09:35:24: 160u
- 2024-05-16 15:24:36: 160u
- 2024-02-21 08:17:54: 320u
- 2024-01-11 10:01:12: 160u
- 2023-11-23 10:31:03: 160u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 160u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:50.961Z*
