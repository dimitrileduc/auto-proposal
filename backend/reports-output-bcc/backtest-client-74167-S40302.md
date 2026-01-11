# Rapport Backtest - Client Comptoir Local LLN SRL

## Contexte

- **Client** : Comptoir Local LLN SRL (ID: 74167)
- **Commande réelle** : S40302
- **Date commande** : 2025-11-14 12:32:43
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 106
- **Tokens**: 92,891 input + 14,632 output = 107,523 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 14 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est de 22 jours (entre le 14/10 et le 05/11). Nous sommes actuellement à 8 jours de la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (vers le 27/11) tombe largement dans la fenêtre de risque. ÉTAPE 2 : L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la médiane de 1 unité est maintenue pour éviter la rupture tout en ne surstockant pas.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 154 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>2. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen observé est de 22 jours (entre le 14/10 et le 05/11). Depuis la dernière commande, 8 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande théorique (prévue vers le 27/11) tombe largement dans la fenêtre de risque. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une consommation constante et régulière de 1 unité par commande. La médiane est de 1. Conformément aux règles de rotation faible, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 161 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est de 22 jours (entre le 14/10 et le 05/11). Nous sommes actuellement à 8 jours de la dernière commande. Bien que nous ne soyons qu'à 36% du cycle moyen, le seuil de réapprovisionnement est de 30 jours, ce qui couvre largement la prochaine échéance théorique (prévue vers le 27/11). Par principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation mais régulier, un besoin est identifié. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane et la quantité constante étant de 1, cette valeur est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 186 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>4. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle entre les deux dernières commandes est de 22 jours. La dernière commande date d'il y a 8 jours. Le prochain besoin est estimé autour du 27 novembre, ce qui entre dans l'horizon des 30 jours du Replenishment Threshold Days. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une consommation constante de 1 unité par commande. La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 137 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>5. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est de 22 jours (entre le 14/10 et le 05/11). Huit jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (prévue vers le 27/11) tombe largement dans la fenêtre de vigilance. En application du principe de précaution B2B et face à une rotation très faible mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 138 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>6. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 22 jours (entre le 14/10 et le 05/11). La dernière commande date d'il y a 8 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient d'ici environ 14 jours, ce qui entre dans la fenêtre de vigilance. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (1u). La médiane et la tendance constante indiquent qu'il faut maintenir cette quantité de 1 unité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 164 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>7. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : Le cycle moyen observé est de 22 jours (entre le 14/10 et le 05/11). Nous sommes actuellement à 8 jours de la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande théorique (prévue vers le 27/11) tombe largement dans la fenêtre de vigilance. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 169 tokens
- **Total**: 1,059 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:55:23: 1u
- 2025-10-14 13:35:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:10.947Z*
