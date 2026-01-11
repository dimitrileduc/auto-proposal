# Rapport Backtest - Client Les Amis de Kinderleven – Vie d’Enfant ASBL

## Contexte

- **Client** : Les Amis de Kinderleven – Vie d’Enfant ASBL (ID: 33936)
- **Commande réelle** : S40257
- **Date commande** : 2025-11-12 08:03:45
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,991 input + 1,619 output = 10,610 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 10 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 88.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -2.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 6 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 octobre 2025, soit 32 jours avant la date actuelle. Le cycle de commande historique (N-1) montre une fréquence de réapprovisionnement toutes les deux semaines environ durant cette période. Le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours, confirmant un risque de rupture imminent. Pour la quantité, bien que la dernière commande fût de 8 unités, l'historique N-1 sur la même période indique une consommation stable de 6 unités. En application de la règle de prudence B2B privilégiant la médiane basse en cas de doute sur une rotation irrégulière, une commande de 6 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 159 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 octobre 2025, soit il y a 32 jours. L'historique de l'année précédente montre une fréquence de commande rapprochée en octobre et novembre (environ tous les 13 jours). Le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, confirmant un risque de rupture imminent. Pour la quantité, bien que la dernière commande fût de 8 unités, l'historique N-1 sur la même période indique une consommation régulière de 6 unités. En application de la règle de prudence B2B privilégiant la médiane basse en cas de doute, une commande de 6 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 158 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 octobre 2025, soit il y a 32 jours. L'historique de l'année précédente montre une fréquence de commande soutenue durant la période d'octobre et novembre (tous les 13 jours environ). Le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent. Pour la quantité, bien que la commande la plus récente soit de 2 unités, l'historique N-1 sur la même période affiche une consommation régulière de 4 unités. Par mesure de précaution B2B et pour s'aligner sur la saisonnalité historique constatée, la quantité de 4 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 169 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 octobre 2025, soit il y a 32 jours. L'historique N-1 montre une commande le 24 octobre, indiquant un besoin cyclique à cette période de l'année. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré car le cycle habituel est dépassé. ÉTAPE 2 : ESTIMATION QUANTITÉ. La commande la plus récente était de 6u, mais la commande historique N-1 pour la même période était de 4u. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute ou de rotation irrégulière pour éviter le surstock, la quantité de 4u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 190 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 octobre 2025, soit il y a 32 jours. Bien que le cycle récent soit peu documenté, l'historique de l'année précédente montre une rotation active sur la période fin octobre / début novembre (commandes les 24/10 et 06/11). Le délai depuis la dernière commande dépasse le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent. En application du principe de précaution B2B et pour couvrir les besoins basés sur l'historique N-1, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et à la constante observée lors des commandes de l'année précédente à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 176 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>6. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 octobre 2025, soit il y a 32 jours. L'historique de l'année précédente montre une commande à la même période (fin octobre), confirmant un besoin saisonnier ou régulier. Le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent. En suivant la règle de la médiane des commandes récentes et la stabilité du volume historique (5u à 6u), une quantité de 6 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 134 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 octobre 2025 (il y a 32 jours). L'historique de l'année précédente montre une fréquence de commande rapprochée en octobre et novembre (environ tous les 13 jours). Bien que le cycle actuel semble plus long, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture imminent. En suivant le principe de précaution B2B et en se basant sur la médiane des commandes historiques (6u l'an dernier, 8u récemment), la quantité de 6 unités est retenue (choix de la valeur la plus basse en cas de doute pour éviter le surstock).

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 162 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

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
La dernière commande remonte au 10 octobre 2025, soit il y a 32 jours. L'historique de l'année précédente montre une fréquence de commande rapprochée en octobre et novembre (environ tous les 13 jours). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture imminent. Pour la quantité, bien que la dernière commande fût de 4 unités, l'historique N-1 sur la même période montre une régularité à 3 unités. En application du principe de prudence et de l'utilisation de la médiane/valeur basse en cas de doute, une commande de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 168 tokens
- **Total**: 1,071 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-06 10:09:14: 6u
- 2024-10-24 13:21:58: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-06 10:09:14: 6u
- 2024-10-24 13:21:58: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-06 10:09:14: 4u
- 2024-10-24 13:21:58: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 13:21:58: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-06 10:09:14: 3u
- 2024-10-24 13:21:58: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 13:21:58: 5u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-06 10:09:14: 6u
- 2024-10-24 13:21:58: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-10 14:22:19: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-06 10:09:14: 3u
- 2024-10-24 13:21:58: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Predicted 2u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 4 | Predicted 4u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:08.356Z*
