# Rapport Backtest - Client Le Cortil asbl, Amandine Duhaut

## Contexte

- **Client** : Le Cortil asbl, Amandine Duhaut (ID: 71197)
- **Commande réelle** : S39713
- **Date commande** : 2025-10-14 10:02:46
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,185 input + 1,054 output = 7,239 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -60.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 6 | 5.0 | 83.3% | partial | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | 6 | 5.0 | 83.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 24 septembre, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très récent unique, il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 3 unités, correspondant à la dernière observation stable.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 149 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>2. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 97 jours entre les deux dernières commandes. La dernière commande datant du 24 septembre (il y a 19 jours), nous entrons dans la zone de risque au cours des 30 prochains jours (seuil de réapprovisionnement), car le délai cumulé atteindra 49 jours. Bien que le cycle soit irrégulier, le principe de précaution B2B impose de prévoir un besoin pour éviter une rupture. Pour la quantité, la valeur la plus basse et la plus récente (3u) est privilégiée par rapport au pic de 10u, conformément à la règle de ne pas surestimer le stock de sécurité sur des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 161 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>3. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 24 septembre, soit il y a 19 jours. Bien que l'historique soit limité, l'intervalle entre les deux commandes précédentes était d'environ 97 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation (1-2u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 177 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>4. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 97 jours. Nous sommes actuellement à 19 jours depuis la dernière commande (24/09). Bien que le délai soit court par rapport au cycle précédent, la rotation est très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est considéré pour l'horizon des 30 prochains jours. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. Conformément à la règle sur les rotations très faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 165 tokens
- **Total**: 1,060 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:27:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:27:55: 3u
- 2025-06-19 10:38:10: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:27:55: 2u
- 2025-06-19 10:38:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>4. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:27:55: 2u
- 2025-06-19 10:38:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:23.021Z*
