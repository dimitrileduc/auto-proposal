# Rapport Backtest - Client Bicarbonate Et Topinambour

## Contexte

- **Client** : Bicarbonate Et Topinambour (ID: 23947)
- **Commande réelle** : S40182
- **Date commande** : 2025-11-12 08:51:16
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,421 input + 1,389 output = 7,810 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.7% | 7 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 92.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 36.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 15.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que la rotation soit lente, l'historique N-1 montre une commande à la même période (28 octobre 2024). Le délai écoulé dépasse largement tout cycle de rotation raisonnable, créant un risque de rupture ou un besoin de renouvellement de stock imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes stables (3u, 4u, 5u). La médiane de l'historique complet est de 4u. En respectant le principe de précaution B2B et la règle de la médiane, une quantité de 4 unités est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 195 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. L'historique montre des commandes espacées (février, mai, octobre 2024). Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement les intervalles habituels observés l'année précédente. En application du principe de précaution B2B (doute sur le cycle = prévoir commande) et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche 4u. L'historique N-1 oscille entre 3u et 5u. La médiane de l'ensemble des données est de 3.5u. En suivant la règle de choisir la valeur la plus basse en cas de doute tout en restant proche de la rotation régulière, la quantité de 4u (dernière commande) est retenue pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 241 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. L'historique montre des commandes espacées (février, mai, octobre 2024). Étant donné l'absence de commande depuis plus de 4 mois et la présence d'une commande à la même période l'année dernière (28 octobre), le risque de rupture ou le besoin de réapprovisionnement est avéré selon le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 affiche des volumes de 3, 4, 3 et 5 unités. La médiane de ces commandes est de 3.5. En suivant la règle de prudence et la cohérence avec la commande de l'année précédente à la même période (4u), une quantité de 4 unités est préconisée pour couvrir le cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 216 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 130 jours sans activité pour un produit qui présente un historique de rotation (3 commandes en 2024). Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique ici : un délai aussi long sans réapprovisionnement suggère un risque de rupture ou un besoin imminent pour maintenir le référencement en rayon. En suivant la règle de la médiane des quantités historiques (3u, 3u, 2u, 3u), la quantité retenue est de 3 unités pour couvrir le besoin sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 152 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. L'historique montre des commandes espacées de 3 à 5 mois (février, mai, octobre). Nous sommes actuellement le 11 novembre, ce qui correspond à la période de commande observée l'année dernière (octobre/novembre). Le cycle est irrégulier mais le délai depuis la dernière commande dépasse largement les intervalles habituels. En application du principe de précaution B2B (doute sur le cycle), un besoin est identifié pour éviter la rupture. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche 4u. L'historique N-1 oscille entre 3u, 5u et 6u. La médiane de l'ensemble des commandes est de 4.5u. En suivant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4u.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 241 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. L'historique N-1 montre une commande à la même période (28 octobre 2024). Le cycle est irrégulier et très espacé, mais l'absence de commande depuis plus de 4 mois, combinée à la saisonnalité observée l'an dernier, crée un doute sur le niveau de stock actuel. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 2u et 3u. La médiane de l'historique global est de 2u. En cas de doute entre deux quantités (2 ou 3), la règle impose de choisir la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 211 tokens
- **Total**: 1,129 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:42:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 08:35:55: 4u
- 2024-05-27 13:01:31: 3u
- 2024-02-07 09:52:04: 5u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:42:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 08:35:55: 3u
- 2024-05-27 13:01:31: 3u
- 2024-02-07 09:52:04: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:42:25: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 08:35:55: 4u
- 2024-05-27 13:01:31: 3u
- 2024-02-07 09:52:04: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:42:25: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 08:35:55: 3u
- 2024-05-27 13:01:31: 3u
- 2024-02-07 09:52:04: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:42:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 08:35:55: 3u
- 2024-05-27 13:01:31: 6u
- 2024-02-07 09:52:04: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:42:25: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 08:35:55: 2u
- 2024-05-27 13:01:31: 3u
- 2024-02-07 09:52:04: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:33.229Z*
