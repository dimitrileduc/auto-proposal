# Rapport Backtest - Client ESCALADE FACE NORD

## Contexte

- **Client** : ESCALADE FACE NORD (ID: 60311)
- **Commande réelle** : S39568
- **Date commande** : 2025-10-08 06:46:25
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 16,977 input + 3,082 output = 20,059 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.4% | 19 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 64.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.78 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 64 jours entre les deux dernières commandes. Au 07/10/2025, 27 jours se sont écoulés depuis la dernière commande (10/09). Bien que nous soyons à environ 42% du cycle moyen, le seuil de réapprovisionnement de 30 jours place l'horizon de risque à 57 jours après la dernière commande, soit très proche du cycle habituel (64 jours). Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation régulière mais lente, une commande est préconisée. La quantité est fixée à 2 unités, correspondant à la médiane et à la constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 174 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 septembre, soit 27 jours. Le cycle précédent était de 64 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque (27 + 30 = 57 jours, proche du cycle de 64 jours). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 175 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 64 jours (entre juillet et septembre). La dernière commande date du 10 septembre, soit il y a 27 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 57 jours d'ancienneté à l'échéance du seuil, ce qui est très proche du cycle moyen (89% du cycle). Par principe de précaution B2B et pour éviter une rupture sur ce produit à rotation lente, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes unitaires (médiane de 1u). La quantité de 1 unité est donc maintenue pour couvrir le prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 180 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>4. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 10 septembre, soit il y a 27 jours. Bien que le cycle historique soit long (environ 60 jours), le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B et pour éviter une rupture potentielle dans les 30 prochains jours, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 150 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>5. [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 10 septembre, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. En l'absence d'un historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles et le maintien des quantités constatées, la médiane de 2 unités est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 149 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/07/2025, soit environ 91 jours. Le cycle précédent était de 57 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un besoin de réapprovisionnement imminent ou une rupture de stock probable d'ici les 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité parfaite avec des commandes de 2 unités. En suivant la règle de maintien de la quantité pour les rotations faibles et régulières, la médiane de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 152 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 08/07/2025, soit il y a 91 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé est important. En application du principe de précaution B2B (cycle incertain = prévoir commande) et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. ÉTAPE 2 : En l'absence de cycle régulier, la quantité est basée sur l'unique historique récent disponible (2u). Conformément aux règles sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 151 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>8. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 57 jours (entre mai et juillet). La dernière commande remonte au 08/07/2025, soit 91 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont constantes à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité historique de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 175 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>9. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 12 mai 2025, soit environ 148 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit actif crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un réapprovisionnement est préconisé. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane des commandes récentes est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 171 tokens
- **Total**: 1,050 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:07: 2u
- 2025-07-08 12:45:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:07: 2u
- 2025-07-08 12:45:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:07: 1u
- 2025-07-08 12:45:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:07: 1u
- 2025-07-08 12:45:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 06:21:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 12:45:46: 2u
- 2025-05-12 12:07:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 12:45:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 12:45:46: 1u
- 2025-05-12 12:07:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-12 12:07:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 2 | Predicted 2u but not ordered |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 2 | Predicted 2u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 2 | Predicted 2u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | Predicted 2u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:45.299Z*
