# Rapport Backtest - Client Bio 4 Seasons

## Contexte

- **Client** : Bio 4 Seasons (ID: 96)
- **Commande réelle** : S38156
- **Date commande** : 2025-08-04 11:39:40
- **Date cutoff système** : 2025-08-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 36
- **Tokens**: 31,713 input + 5,331 output = 37,044 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 21 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 26 juin, soit 38 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le délai depuis la dernière commande dépasse largement l'horizon de sécurité. Bien que l'historique soit limité à une seule commande, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit actif. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u) et à l'utilisation de la médiane, la quantité maintenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 164 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>2. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/05/2025, soit 87 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane historique récente, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 127 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>3. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/03/2025, soit environ 150 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B et l'absence d'historique sur la période estivale (N-1 non disponible) imposent de prévoir une unité pour éviter une rupture prolongée si un cycle de vente lent se réactive. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u (médiane de l'historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 162 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>4. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte à 150 jours (mars 2025). Bien que la rotation soit extrêmement faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de type boisson (Cola). En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique) pour éviter un surstock inutile tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 175 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/03/2025, soit environ 150 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B s'applique face à une absence de commande sur une période aussi longue pour un produit actif. Le risque de rupture ou de besoin imminent est considéré comme présent par défaut de cycle régulier. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation très faible (1-2u) et à l'utilisation de la médiane, la quantité préconisée est de 1 unité pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 168 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>6. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 06/03/2025, soit environ 150 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de type boisson. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière -> prévoir), un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée sur l'horizon de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 180 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>7. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 06/03/2025, soit environ 150 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B et l'absence d'historique sur l'année précédente imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un horizon de 30 jours. En suivant la règle de la médiane sur l'historique récent (1u) et la consigne de ne pas augmenter les quantités pour les produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 131 tokens
- **Total**: 1,002 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:20:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 09:15:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-06 07:32:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-06 07:32:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-06 07:32:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-06 07:32:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-06 07:32:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [fsv04] Amande nature bio vrac 2,8 kg | 1 | Predicted 1u but not ordered |
| [MANA02] MANA natural energy drink - tropical passion 250ml | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:51.895Z*
