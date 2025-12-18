# Rapport Backtest - Client CARRY GERON SA

## Contexte

- **Client** : CARRY GERON SA (ID: 3511)
- **Commande réelle** : S40063
- **Date commande** : 2025-11-03 13:20:39
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 4,708 input + 1,557 output = 6,265 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
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
| **MAE** | 33.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (4)

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
| [PF0075] FILOU CHASSEUR  10 L | 78 | 44 | 34.0 | 77.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0078] FILOU CHASSEUR 5 L | 100 | 160 | 60.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 12 | 22 | 10.0 | 45.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 30 | 60 | 30.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 78u vs Médiane: 59u (Réel: 44u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 78u (confidence: high)
- 📊 **Baseline N-1**: 68.6u
- 📊 **Médiane**: 59u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 34u (77.3%)
- 📉 **Erreur Médiane**: 15u (34.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel, typiquement le premier lundi du mois
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (+33% sur les 3 derniers mois)
- **Outliers détectés**: 104u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Les volumes de 104u en N-1 ont été écartés car ils doublent la base de 52u (probables promotions). La base stable de fond se situe autour de 52u. 2. SAISONNALITÉ: Faible influence sur novembre par rapport à l'historique N-1 (52u), mais le produit montre une activité constante toute l'année. 3. TENDANCE: On observe une accélération nette sur le dernier trimestre 2025 (52 -> 66 -> 88). La moyenne glissante récente s'établit à 68.6u. 4. RECOMMANDATION: Bien que la dernière commande fût de 88u, une approche conservatrice est adoptée pour éviter le sur-stockage suite au pic d'octobre. On recommande 78u, ce qui couvre la tendance haussière (+15% vs moyenne récente) tout en restant sous le pic exceptionnel du mois dernier, en accord avec le cycle de réapprovisionnement mensuel du lundi.

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 100u vs Médiane: 100u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 93.33u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 60u (37.5%)
- 📉 **Erreur Médiane**: 60u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier (tous les 30 jours environ, principalement le lundi)
- **Saisonnalité**: weak
- **Tendance**: Hausse structurelle +25% (passage de 80u à 100u de base)
- **Outliers détectés**: 160u, 140u

**🧠 Raisonnement LLM:**
L'analyse met en évidence un cycle de commande mensuel très stable, se produisant généralement le premier lundi du mois. ÉTAPE 1: Les pics de 160u (septembre 2025) et les cumuls de 140u (septembre 2024) sont traités comme des outliers liés à des rentrées de saison ou promotions. La demande de fond est passée de 80u en 2024 à 100u en 2025. ÉTAPE 2: La saisonnalité est faible mais montre un léger ralentissement post-septembre. ÉTAPE 3: La tendance récente confirme 100u comme nouveau standard. ÉTAPE 4: Pour le réapprovisionnement du début novembre, une quantité de 100u est recommandée pour couvrir le mois tout en restant conservateur face au pic exceptionnel de septembre dernier.

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 12u vs Médiane: 24u (Réel: 22u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: high)
- 📊 **Baseline N-1**: 11.5u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 22u
- 📉 **Erreur LLM**: 10u (45.5%)
- 📉 **Erreur Médiane**: 2u (9.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 30-40 jours), principalement le lundi.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (passage de 11u à 12/24u)
- **Outliers détectés**: 22u, 22u, 24u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Les commandes de 22u et 24u sont identifiées comme des doubles commandes ou des stockages préventifs (2x la base de 11u). La demande de fond est de 11u à 12u. ÉTAPE 2 (Saisonnalité): Pas de pic majeur en novembre N-1 (la commande de 22u en nov-23 semble être un regroupement bimestriel car aucune commande en octobre). Faible impact saisonnier. ÉTAPE 3 (Tendance): On observe un passage d'un standard de 11u en 2024 à 12u/24u en 2025, indiquant une légère croissance ou un nouveau format de palettisation/conditionnement. La dernière commande date d'il y a 27 jours. ÉTAPE 4 (Recommandation): On se base sur le nouveau standard de fond de 12u pour couvrir le mois de novembre, en ignorant le pic exceptionnel de 24u d'octobre qui servait probablement à absorber un besoin ponctuel ou une promotion.

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 30u vs Médiane: 30u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 30u (confidence: medium)
- 📊 **Baseline N-1**: 30u
- 📊 **Médiane**: 30u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 30u (50.0%)
- 📉 **Erreur Médiane**: 30u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (passage de 40u à 20u)
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La commande de 60u en sept 2024 est exclue car elle représente le double de la médiane. Étape 2 (Saisonnalité): Pas de pic majeur sur la fin d'année N-1 (stabilité 30-40u), impact saisonnier faible. Étape 3 (Tendance): On observe un ralentissement sur les deux derniers mois (30u en sept, 20u en août) par rapport à la moyenne historique de 40u. Étape 4 (Recommandation): La date actuelle (02/11) correspond au créneau habituel du début de mois. Compte tenu de la baisse de régime récente et de l'absence de commande en octobre, un réajustement à 30u (volume pivot historique) permet de sécuriser le stock sans risque de sur-stockage massif.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:20:55: 88u
- 2025-09-01 09:35:44: 66u
- 2025-08-11 12:34:53: 52u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:19:05: 52u
- 2024-09-05 09:51:57: 104u
- 2024-07-03 11:28:09: 104u
- 2024-06-10 08:11:06: 104u
- 2024-05-14 14:52:20: 52u
- 2024-04-09 09:36:52: 104u
- 2024-03-12 13:12:16: 52u
- 2024-02-12 10:47:57: 52u
- 2024-01-08 10:51:07: 52u
- 2023-12-11 15:03:36: 52u
- 2023-11-20 13:36:57: 52u

**✅ Quantité LLM**: 78u (confidence: high)
**📊 Quantité Réelle**: 44u

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:20:55: 100u
- 2025-09-01 09:35:44: 160u
- 2025-08-11 12:34:53: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:19:05: 40u
- 2024-09-05 09:51:57: 120u
- 2024-09-05 07:02:54: 20u
- 2024-07-03 11:28:09: 80u
- 2024-06-10 08:11:06: 80u
- 2024-05-14 14:52:20: 120u
- 2024-04-09 09:36:52: 80u
- 2024-02-12 10:48:44: 80u
- 2024-02-12 10:47:57: 30u
- 2024-01-08 10:51:07: 80u
- 2023-12-11 15:03:36: 80u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 160u

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:20:55: 24u
- 2025-09-01 09:35:44: 12u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 09:51:57: 11u
- 2024-07-03 11:28:09: 22u
- 2024-06-10 08:11:06: 11u
- 2024-05-14 14:52:20: 11u
- 2024-03-12 13:12:16: 11u
- 2024-02-12 10:47:57: 11u
- 2024-01-08 10:51:07: 11u
- 2023-11-20 13:36:57: 22u

**✅ Quantité LLM**: 12u (confidence: high)
**📊 Quantité Réelle**: 22u

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 09:35:44: 30u
- 2025-08-11 12:34:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 09:51:57: 60u
- 2024-07-03 11:28:09: 30u
- 2024-06-10 08:11:06: 30u
- 2024-05-14 14:52:20: 30u
- 2024-04-09 09:36:52: 50u
- 2024-03-12 13:12:16: 40u
- 2024-02-12 10:47:57: 30u
- 2024-01-08 10:51:07: 40u
- 2023-12-11 15:03:36: 40u
- 2023-11-20 13:36:57: 30u

**✅ Quantité LLM**: 30u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>




---

## False Positives (2)

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
| [PF0096] FILOU MOUTARDE 3 KG | 45 | Stock prédit: 8.7u (10j restants) → prédit 45u mais non commandé |
| [PF0089] FILOU VOL AU VENT 400 GR | 6 | Stock prédit: -5.2u (-52j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:48.187Z*
