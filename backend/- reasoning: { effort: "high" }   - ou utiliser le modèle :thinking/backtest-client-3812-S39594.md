# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S39594
- **Date commande** : 2025-10-08 06:30:49
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 7,716 input + 2,851 output = 10,567 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 13.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (6)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0030] MF Tarti Mangue Curry 250g  | 21 | 16 | 5.0 | 31.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 24 | 16 | 8.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 21u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 21u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 5u (31.3%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ancrage hebdomadaire mobile (Lun/Mar) avec une latence observée fin septembre
- **Saisonnalité**: none
- **Tendance**: Hausse récente de +100% sur le dernier volume (potentiel stock de sécurité ou pic de vente)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
L'analyse montre une consommation de fond très stable à 16 unités durant le mois d'août. La commande de 32 unités du 29/09 est traitée comme un outlier (x2 de la moyenne) ou un besoin de restockage après une absence de commande en septembre. La date actuelle (mardi) correspond au cycle historique. Ma recommandation applique une base de 16u avec un coefficient de sécurité de +30% (soit env. 21u) pour couvrir la tendance à la hausse observée fin septembre tout en restant conservateur en l'absence de données N-1.

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bimensuelles le lundi (cycle de 7 à 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 32u à 16u
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 48u en N-1 est traitée comme un outlier saisonnier ou promotionnel. La base stable récente oscille entre 16u et 32u. ÉTAPE 2 (Saisonnalité): Impact faible car la base actuelle (16u-32u) est inférieure à N-1; nous sortons de la période estivale qui semble plus forte. ÉTAPE 3 (Tendance): On observe un ralentissement du volume (16u lors de la dernière commande du 29/09) et une fréquence de commande d'environ 15 jours. ÉTAPE 4 (Recommandation): La demande de fond s'est stabilisée à 16u. Étant donné que la dernière commande date d'il y a 8 jours, une commande de 16u permet de maintenir le stock sans risque de sur-stockage, suivant la tendance conservatrice actuelle.

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier (7 à 40 jours), principalement le lundi ou mardi
- **Saisonnalité**: weak
- **Tendance**: Stable à 16u
- **Outliers détectés**: 48u, 32u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Les volumes de l'année N-1 (48u et 32u) sont écartés car ils s'apparentent à des chargements initiaux ou des promotions, contrastant avec la stabilité parfaite des 5 dernières commandes. ÉTAPE 2 (Saisonnalité): Bien que le secteur soit saisonnier, ce produit spécifique montre une demande de fond constante de 16u depuis juillet, sans pic estival marqué sur la période récente. ÉTAPE 3 (Tendance): La tendance est extrêmement stable (flat) à 16 unités par commande, avec une fréquence de réapprovisionnement d'environ une fois par mois ou lors de besoins spécifiques. ÉTAPE 4 (Recommandation): La quantité de 16u est systématique sur toutes les commandes de 2025. Maintenir ce volume permet de couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 24u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 8u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire (mardi/lundi) en accélération
- **Saisonnalité**: none
- **Tendance**: Hausse récente (volume x3 sur la dernière commande)
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 48u le 26/08 est considérée comme un outlier (x3 la base de 16u), probablement un stockage préventif ou une promotion. La demande de fond est stable à 16u. Étape 2: Aucune donnée N-1 disponible, saisonnalité non évaluable mais impact supposé faible sur ce type de tartinable. Étape 3: Le rythme de commande s'est accéléré en août (hebdomadaire) par rapport à juillet. Étape 4: Pour le 07/10 (un mardi), nous repartons sur la base de 16u avec un coefficient de sécurité de +50% (24u) pour couvrir l'accélération de fréquence observée fin août et éviter une rupture après une période d'inactivité de septembre non documentée. On reste conservateur par rapport au pic de 48u.

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent, commandes toutes les 2-4 semaines environ
- **Saisonnalité**: weak
- **Tendance**: Stable à 16u
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 32u en août 2024 est identifiée comme un outlier (2x le volume habituel), probablement un événement ponctuel. La demande de fond est fixée à 16u. Étape 2: Faible saisonnalité constatée; bien qu'un volume plus important ait été vu en août N-1, les données récentes de 2025 montrent une stabilisation à 16u. Étape 3: Tendance stable sur les deux dernières livraisons (août 2025). Le jour de commande actuel (mardi) est cohérent avec l'historique récent. Étape 4: Application d'une stratégie conservatrice basée sur la répétabilité du volume de 16u constaté sur 3 des 4 points de données disponibles.

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: low)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 24 jours (irrégulier)
- **Saisonnalité**: none
- **Tendance**: Stable à 16u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune quantité n'est considérée comme un outlier ; l'historique affiche une stabilité parfaite à 16 unités par commande. 2. SAISONNALITÉ: Aucune donnée N-1 n'est disponible et les données des 3 derniers mois sur ce tartinable (aubergine) ne montrent pas de fluctuation liée à la transition été/automne. 3. TENDANCE: Volume stable à 16u. Cependant, on note un espacement important (49 jours) entre la dernière commande (19/08) et aujourd'hui (07/10), suggérant une rotation lente ou un stock résiduel important. 4. RECOMMANDATION: Bien que le rythme soit lent, la quantité habituelle de 16u semble être le minimum logistique ou commercial standard pour ce client. On maintient cette base par conservatisme, mais avec une confiance faible due à l'irrégularité temporelle des commandes de ce SKU spécifique sur les derniers mois (juillet, août puis silence en septembre). Pour éviter la péremption sur un produit frais de 250g, on ne dépasse pas le standard historique de 16u sans signal de hausse claire.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 32u
- 2025-08-26 09:44:27: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 21u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 32u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 48u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 48u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 09:44:27: 48u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 09:44:27: 16u
- 2025-08-11 11:36:10: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 16u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 07:45:38: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: low)
**📊 Quantité Réelle**: 16u

</details>




---

## False Positives (3)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Stock prédit: 12.0u (21j restants) → prédit 16u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: 12.8u (27j restants) → prédit 16u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 16 | Stock prédit: -5.9u (-11j restants) → prédit 16u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-18T12:00:26.743Z*
