# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 8,845 input + 16,375 output = 25,220 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 8 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 76.9% | Score équilibré global |

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
| **MAE** | 145.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 800 | 640.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 20 | 50 | 30.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 52 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 800u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: high)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 800u
- 📉 **Erreur LLM**: 640u (80.0%)
- 📉 **Erreur Médiane**: 640u (80.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (Vendredi)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les 5 dernières commandes montrent un pattern hebdomadaire clair le vendredi (4/5 commandes), avec une valeur dominante de 160u. La commande de 240u du 06/06 est un outlier isolé (50% au-dessus de la norme) entre deux commandes de 160u. Aucune donnée N-1 disponible. La date de prédiction étant un jeudi (hors cycle), je dois prédire la prochaine commande vendredi (20/06). La quantité la plus probable est 160u, valeur récurrente et stable.

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 20u vs Médiane: 24u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 30u (60.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: weekly_on_friday
- **Saisonnalité**: none
- **Tendance**: slight_decrease
- **Outliers détectés**: -80u, -24u, 24u, 20u

**🧠 Raisonnement LLM:**
Pattern identified: Friday orders with typical quantity of 24u, slight decrease to 20u in last order. 80u on Tuesday is an outlier (likely promotion/exceptional event) and must be excluded. Prediction date (Thursday) is off-cycle, so predicting for next Friday (June 20). Last Friday quantity (20u) is most representative of current trend.

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodique avec tendance à l'allongement des intervalles entre commandes. Le vendredi reste le jour privilégié (80% des commandes).
- **Saisonnalité**: none
- **Tendance**: Légère baisse récente mais non confirmée : tendance stable à 5u sur 3 commandes, puis chute à 3u sur la dernière commande (13/06).
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Le produit PF0088 montre un cycle irrégulier principalement le vendredi. Le jeudi 2025-06-19 étant hors cycle, je dois prédire la quantité de la prochaine commande probable et non 0. L'outlier de 60u est exclu. Les valeurs post-outlier sont [5,5,5,3] avec 5u comme valeur modale. La dernière commande de 3u (13/06) représente une variation non confirmée face à trois commandes stables. En appliquant la règle d'or de précision en agroalimentaire B2B, je privilégie la quantité la plus probable : la valeur stable de 5u plutôt qu'une baisse isolée. Le pattern d'intervalles croissants suggère une demande en baisse, mais pas assez pour justifier une rupture de tendance sur un seul point.

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 104u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: high)
- 📊 **Baseline N-1**: 52u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 104u
- 📉 **Erreur LLM**: 52u (50.0%)
- 📉 **Erreur Médiane**: 52u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aperiodic_with_preference_Friday
- **Saisonnalité**: none
- **Tendance**: constant
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre un pattern exceptionnellement stable avec 5/5 commandes à exactement 52u. Les intervalles varient (11-25 jours) sans cycle hebdomadaire strict, mais avec une préférence pour le vendredi (3/5). La date de prédiction (jeudi) est hors cycle historique. D'après les règles B2B, il faut prédire la quantité de la PROCHAINE commande probable, pas 0. Aucun outlier détecté, la demande est constante. La dernière commande (3 juin) et les précédentes indiquent que la prochaine commande (vendredi 20 juin ou lundi 23 juin) sera de 52u avec très haute probabilité.

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 52u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: low)
- 📊 **Baseline N-1**: 52u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Vendredi dominant avec intervalle de 21 jours entre commandes (cycle potentiel de 3 semaines)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -26u

**🧠 Raisonnement LLM:**
Date de prédiction (jeudi) est hors cycle → prédire la prochaine commande vendredi. Analyse des volumes: 52u se répète 2 fois (dont en dernier) contre 26u une fois. Le coefficient de variation élevé (35%) confirme 26u comme outlier probable. En agro B2B, privilégier la dernière valeur récurrente (52u) pour maximiser la précision et minimiser le MAPE.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 160u
- 2025-06-06 12:50:33: 240u
- 2025-06-03 14:09:59: 160u
- 2025-05-23 11:37:51: 160u
- 2025-05-16 09:00:32: 160u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 800u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 20u
- 2025-06-03 14:09:59: 80u
- 2025-05-16 09:00:32: 24u
- 2025-05-09 08:24:16: 24u
- 2025-05-02 09:39:44: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-13 13:02:52: 3u
- 2025-05-16 09:00:32: 5u
- 2025-04-28 06:00:45: 5u
- 2025-04-18 04:55:33: 5u
- 2025-04-11 07:18:35: 60u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>4. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-03 14:09:59: 52u
- 2025-05-23 11:37:51: 52u
- 2025-04-28 06:00:45: 52u
- 2025-04-04 11:33:35: 52u
- 2025-03-21 12:22:31: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: high)
**📊 Quantité Réelle**: 104u

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-23 11:37:51: 52u
- 2025-05-02 09:39:44: 26u
- 2025-04-28 06:00:45: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 52u (confidence: low)
**📊 Quantité Réelle**: 52u

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
| [PF0097] FILOU MOUTARDE 5 KG | 20 | Stock prédit: -13.5u (-15j restants) → prédit 20u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | Stock prédit: 6.2u (14j restants) → prédit 20u mais non commandé |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 15 | Stock prédit: -2.5u (-22j restants) → prédit 15u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-17T16:28:51.244Z*
