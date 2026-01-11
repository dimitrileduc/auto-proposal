# Rapport Backtest - Client DOMBARD-DORMANS

## Contexte

- **Client** : DOMBARD-DORMANS (ID: 72410)
- **Commande réelle** : S39197
- **Date commande** : 2025-09-22 06:11:50
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 22,829 input + 3,883 output = 26,712 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 26 produits prédits, 13 corrects |
| **Rappel** | 68.4% | 19 produits réels, 13 détectés |
| **F1-Score** | 57.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.15 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV146] LV Sauce Aïoli 200 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que l'historique soit limité à une seule commande de 2 unités, l'absence de données sur le cycle de rotation impose l'application du principe de précaution B2B. Le délai écoulé depuis la dernière commande dépasse largement les seuils de réapprovisionnement habituels, créant un doute sur le stock résiduel. En suivant la règle de la médiane sur l'historique récent (2u) et en privilégiant la valeur la plus basse pour éviter le surstockage, une commande de 2 unités est préconisée pour couvrir les besoins potentiels des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 163 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (environ 30 jours entre mai et juin) indique un besoin de réapprovisionnement par précaution pour éviter une rupture prolongée. ÉTAPE 2 - ESTIMATION QUANTITÉ : L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 164 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>3. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (27 jours). En application du principe de précaution B2B et face à l'incertitude sur ce cycle irrégulier, un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité stricte à 1 unité par commande. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 164 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>4. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 27 jours (entre mai et juin). Depuis la dernière commande du 2 juin 2025, plus de 110 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la valeur basse de la médiane historique (entre 1u et 2u), conformément à la règle de ne pas surestimer les stocks sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 165 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière avec une dernière commande enregistrée il y a plus de 100 jours (02/06/2025). Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le besoin se manifeste dans les 30 prochains jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et au mode de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 129 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité tous les 27 jours environ sur l'historique récent), l'absence de commande depuis plus de 3 mois crée une incertitude majeure sur l'état du stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane et au volume constant des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 135 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (environ 30 jours) indique un besoin de réapprovisionnement par précaution pour éviter une rupture prolongée, conformément au principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. En suivant la règle des rotations faibles et la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 157 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation très faible avec un intervalle constaté de 27 jours entre les deux dernières commandes. La dernière commande remontant au 02/06/2025, le délai de réapprovisionnement est largement dépassé (plus de 100 jours). En application du principe de précaution B2B, l'absence de commande récente crée une incertitude sur le cycle ; un besoin est donc détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une stabilité parfaite à 1 unité par commande. La médiane étant de 1, cette quantité est maintenue conformément à la règle sur les rotations faibles (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 164 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 27 jours (entre mai et juin). La dernière commande remonte au 2 juin 2025, soit plus de 110 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit actif, une commande est nécessaire. La quantité retenue correspond à la médiane historique (1u), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 136 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. Par principe de précaution et pour éviter une rupture prolongée sur un produit actif, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 2 unités (médiane de l'historique disponible) pour couvrir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 158 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>11. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 02/06/2025, soit 111 jours. Bien que la rotation soit très faible, l'absence de commandes récentes rend le cycle difficile à déterminer. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstock tout en assurant une disponibilité minimale.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 156 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (environ 30 jours entre mai et juin) crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (doute sur le cycle = prévoir), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 182 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>13. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de ce type. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter un surstockage inutile tout en assurant la présence du produit en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 173 tokens
- **Total**: 1,047 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 2u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 2u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 13:22:27: 2u
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 10:23:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 1 | Predicted 1u but not ordered |
| [LEA09] LEAMO cola bio 330ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV147] LV Sauce Cocktail 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV158] LV Moutarde 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV140] LV Moutarde à l'ancienne  200ml | 1 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:23:22.951Z*
