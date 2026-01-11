# Rapport Backtest - Client LE TIROIR DES SAVEURS

## Contexte

- **Client** : LE TIROIR DES SAVEURS (ID: 60450)
- **Commande réelle** : S39999
- **Date commande** : 2025-10-30 11:13:35
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 10,457 input + 1,502 output = 11,959 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 8 produits prédits, 4 corrects |
| **Rappel** | 57.1% | 7 produits réels, 4 détectés |
| **F1-Score** | 53.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 8 | 8 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 8 | 8 | 0.0 | 0.0% | exact | LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 6 | 8 | 2.0 | 25.0% | partial | LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 10 | 8 | 2.0 | 25.0% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 8u vs Médiane: 6u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 6u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 28 août 2025, soit 62 jours avant la date actuelle. En l'absence d'un historique complet pour établir un cycle moyen précis, le délai écoulé dépasse largement les cycles standards de réapprovisionnement en B2B. En application du principe de précaution (doute sur le cycle = risque de rupture), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente une commande unique de 8 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans tendance inverse, la médiane de 8 unités est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 177 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 8u vs Médiane: 6u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 6u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 août 2025, soit 62 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, car le cycle de rotation pour ce type de produit bio est généralement inférieur à deux mois. En l'absence d'historique long, le principe de précaution B2B s'applique. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 8 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans tendance inverse, la médiane (8) est retenue pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 172 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>3. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 6u vs Médiane: 8u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 8u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle précédent de 63 jours. Au 29 octobre 2025, 62 jours se sont écoulés depuis la dernière commande du 28 août. Le seuil de réapprovisionnement de 30 jours est largement atteint, confirmant un risque imminent de rupture. En application de la règle de la médiane sur l'historique récent (6u et 10u) et du principe de prudence privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 6 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 130 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>4. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 10u vs Médiane: 8u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 8u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 juin 2025, soit plus de 120 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande historique, le principe de précaution B2B s'applique ici : en cas de doute sur la rotation ou de cycle irrégulier, il est nécessaire de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours référencé. La quantité retenue est de 10 unités, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des volumes constants pour les rotations faibles ou isolées.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 145 tokens
- **Total**: 1,019 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:08:37: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:08:37: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:08:37: 6u
- 2025-06-26 08:32:42: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>4. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 08:32:42: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 8u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Predicted 4u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 10 | Predicted 10u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 5 | Predicted 5u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Product analyzed but LLM -> 0 - client ordered 4u |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | Product analyzed but LLM -> 0 - client ordered 4u |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 5 | Product analyzed but LLM -> 0 - client ordered 5u |


### Details des Predictions LLM pour FN (3 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM predit: 0u | Reel commande: 4u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et l'année précédente. En l'absence de données de rotation ou de cycle de vente, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM predit: 0u | Reel commande: 4u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'est enregistrée dans l'historique récent ni sur l'année précédente (N-1). En l'absence totale de données de rotation ou de cycle de commande, il est impossible d'établir un besoin de réapprovisionnement. Conformément au principe de ne pas surestimer le stock sans base historique, aucune quantité n'est préconisée pour le moment.

</details>


<details>
<summary><strong>3. [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml</strong> - LLM predit: 0u | Reel commande: 5u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de référence, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution contre le surstockage. Aucun risque de rupture n'est identifiable.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:20:48.211Z*
