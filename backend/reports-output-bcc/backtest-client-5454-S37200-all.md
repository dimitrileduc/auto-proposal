# Rapport Backtest - Client MAISON DESPRIET SA, MAISON DESPRIET SA, Adresse de facturation

## Contexte

- **Client** : MAISON DESPRIET SA, MAISON DESPRIET SA, Adresse de facturation (ID: 5454)
- **Commande réelle** : S37200
- **Date commande** : 2025-06-02 14:59:03
- **Date cutoff système** : 2025-06-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,492 input + 574 output = 4,066 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 41.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 97.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 80.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 97.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0524] FILOU SAUCE TOMATE 815 GR | 8 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [PF0078] FILOU CHASSEUR 5 L | 160 | 80 | 80.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - LLM: 8u vs Médiane: 8u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 mai 2025 (soit 18 jours). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture, d'autant plus qu'il n'y a qu'une seule commande récente, ce qui rend le cycle de rotation incertain. En application du principe de précaution B2B (détection d'un besoin incertain privilégiée), une commande est nécessaire. La quantité retenue est de 8 unités, correspondant à la valeur unique et médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 136 tokens
- **Total**: 1,008 tokens



</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 80u
- **Erreur LLM**: 80u (100.0%)
- **Erreur Mediane**: 80u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 14 mai, soit il y a 18 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique récent limité à une seule commande massive, il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence d'historique multiple pour calculer une médiane, la quantité de la dernière commande (160u) est reconduite pour maintenir le stock opérationnel.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 144 tokens
- **Total**: 1,017 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 12:12:59: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 12:12:59: 160u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 80u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Predicted 1u but not ordered |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:52.008Z*
