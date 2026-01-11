# Rapport Backtest - Client SA DELSOV

## Contexte

- **Client** : SA DELSOV (ID: 56430)
- **Commande réelle** : S34448
- **Date commande** : 2025-01-22 09:22:38
- **Date cutoff système** : 2025-01-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 22,644 input + 3,402 output = 26,046 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.4% | 17 produits prédits, 5 corrects |
| **Rappel** | 55.6% | 9 produits réels, 5 détectés |
| **F1-Score** | 38.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 10.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 26 jours entre les deux dernières commandes. La dernière commande datant du 15 octobre 2024 (soit plus de 90 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à une rotation irrégulière, un besoin est détecté pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2u et 3u), afin de limiter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 155 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 26 jours entre les deux dernières commandes connues. La dernière commande remontant au 15 octobre 2024, le délai écoulé (98 jours) dépasse largement le cycle habituel ainsi que le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à une rotation irrégulière ou une absence de données récentes, un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2u et 3u), afin de couvrir le besoin sans surstocker un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 162 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>3. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 19/09/2024, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B (Doute = Prévoir) pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique) sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 156 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>4. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19/09/2024, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit en catalogue. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture ou de besoin imminent est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u (médiane de l'historique disponible) pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 181 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>5. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin - Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur la rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle dès le lancement ou la mise en stock. ÉTAPE 2 : Estimation quantité - Conformément à la règle sur les rotations très faibles ou inconnues, une quantité minimale de 1 unité est préconisée pour tester la demande sans risquer un surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 861 tokens
- **Output**: 118 tokens
- **Total**: 979 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-15 06:26:47: 3u
- 2024-09-19 08:31:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-10-15 06:26:47: 3u
- 2024-09-19 08:31:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-19 08:31:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-19 08:31:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF037] JF BBQ SQUEEZE 300ML | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (4 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de consommation ou de cycle de commande, il est impossible de justifier un besoin de réapprovisionnement ou de calculer une quantité basée sur la médiane. Le principe de précaution ne peut s'appliquer sans base de rotation minimale.

</details>


<details>
<summary><strong>2. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée de commande récente ou historique (N-1) n'est disponible pour ce produit. En l'absence totale d'historique de rotation, il est impossible d'établir un cycle de commande ou une quantité médiane. Conformément aux règles de gestion, aucune commande ne peut être déclenchée sans un signal de consommation préalable.

</details>


<details>
<summary><strong>3. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique de commande n'est disponible pour ce produit (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de rotation ou de cycle de commande, il est impossible de justifier un besoin de réapprovisionnement immédiat ou de calculer une quantité basée sur la médiane. Conformément aux règles de décision, sans preuve de mouvement, aucune commande n'est générée.

</details>


<details>
<summary><strong>4. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de consommation, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:27:29.550Z*
