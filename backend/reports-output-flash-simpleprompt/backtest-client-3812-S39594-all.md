# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S39594
- **Date commande** : 2025-10-08 06:30:49
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 6,688 input + 2,226 output = 8,914 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 75.0% | 8 produits réels, 6 détectés |
| **F1-Score** | 70.6% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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
| [MF0030] MF Tarti Mangue Curry 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 21.33u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire erroné sur août, puis basculement vers un cycle mensuel massif fin septembre
- **Saisonnalité**: none
- **Tendance**: Hausse brutale x2 (passage de 16u à 32u)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
L'analyse montre deux phases : une consommation stable de 16u en août avec un rythme hebdomadaire, suivie d'une commande double (32u) le 29 septembre après un mois d'arrêt. La commande de 32u du 29/09 semble être un stockage par anticipation ou un rattrapage de rupture de stock pour couvrir octobre. Puisque la commande actuelle (07/10) intervient seulement 8 jours après celle de 32u, il s'agit d'un réapprovisionnement de complément. On revient à la base unitaire historique de 16u, le pic de 32u étant considéré comme un outlier de stockage.

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 21.3u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme discontinu mais orienté sur des multiples de 16u, majoritairement lundi/mardi
- **Saisonnalité**: none
- **Tendance**: Baisse progressive par rapport à N-1, stabilisation à 16u
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'analyse montre une consommation par multiples de 16 (1 carton). Bien que l'historique N-1 affiche 48u en août, les données des 3 derniers mois montrent une nette stabilisation vers le bas. Quatre des cinq dernières commandes sont de 16u ou 32u. La dernière commande datant d'il y a seulement 8 jours (lundi 29/09) pour 16u, le stock ne nécessite probablement pas un réapprovisionnement massif. Une commande de 16u est la plus probable pour maintenir le flux tendu observé récemment, évitant le surstockage sur un produit à tendance baissière.

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
- **Pattern temporel**: Rythme discontinu avec une prédominance pour le lundi et mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 16u
- **Outliers détectés**: 32u, 48u

**🧠 Raisonnement LLM:**
L'analyse des 5 dernières commandes (juillet à septembre 2025) montre une stabilité absolue à 16 unités par commande, indépendamment de l'intervalle de temps. Les volumes élevés observés en 2024 (32u et 48u) semblent être des anciens standards ou des opérations spécifiques qui ne reflètent plus la réalité opérationnelle actuelle de 2025. La commande tombe un mardi, ce qui est cohérent avec l'historique récent (majorité lundi/mardi). La prévisibilité du volume unitaire (16u) prime sur la cyclicité calendaire ici.

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (Mardi)
- **Saisonnalité**: none
- **Tendance**: Stable à 16u, pic isolé récent
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence solide de commandes de 16 unités. La commande du 26/08 à 48u (exactement 3x16u) est considérée comme un outlier ou un stockage par anticipation, car le rythme hebdomadaire s'est rompu juste après (absence de données en septembre). Le client commande majoritairement le lundi ou mardi. La prédiction pour ce mardi se base sur le volume de fond habituel de 16u pour assurer le flux sans surstockage après l'anomalie du mois d'août.

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
- **Pattern temporel**: Cycle irrégulier avec une prédominance pour les commandes le lundi ou mardi, toutes les 2 à 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 16u
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
L'historique récent (août 2025) montre une stabilisation parfaite de la demande à 16 unités par commande sur un rythme bimensuel. Bien qu'il y ait eu un pic à 32u en août 2024 (probablement promotionnel ou stockage de pré-saison), les données de 2025 indiquent un volume de fond de 16u. La date de prédiction tombe un mardi, ce qui respecte la logique de commande observée le 26/08. En l'absence de signaux de croissance ou de saisonnalité forte sur ce produit spécifique en octobre, la répétition du dernier volume standard est l'option la plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ toutes les 2 à 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 16u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une constance absolue sur le volume de commande (16 unités systématiques) malgré une fréquence temporelle irrégulière (entre 12 et 24 jours d'intervalle). La dernière commande datant d'août, il s'agit probablement d'un réapprovisionnement de stock de sécurité ou d'une commande sur besoin spécifique. Puisque aucune variation de volume n'a été observée sur les trois derniers points de données, le maintien à 16 unités est la prédiction la plus probable.

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

**✅ Quantité LLM**: 16u (confidence: medium)
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

**✅ Quantité LLM**: 16u (confidence: medium)
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

**✅ Quantité LLM**: 16u (confidence: medium)
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

**✅ Quantité LLM**: 16u (confidence: medium)
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

## False Negatives (2)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 96 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 576 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:33:29.378Z*
