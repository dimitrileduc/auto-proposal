# Rapport Backtest - Client CARRY GERON SA

## Contexte

- **Client** : CARRY GERON SA (ID: 3511)
- **Commande réelle** : S40063
- **Date commande** : 2025-11-03 13:20:39
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 5,815 input + 12,312 output = 18,127 total


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
| **MAE** | 36.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -19.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0075] FILOU CHASSEUR  10 L | 88 | 44 | 44.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0078] FILOU CHASSEUR 5 L | 100 | 160 | 60.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 12 | 22 | 10.0 | 45.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 30 | 60 | 30.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 88u vs Médiane: 59u (Réel: 44u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 88u (confidence: high)
- 📊 **Baseline N-1**: 68.6u
- 📊 **Médiane**: 59u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 44u (100.0%)
- 📉 **Erreur Médiane**: 15u (34.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel régulier, principalement le lundi (cycle de 4 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (52u -> 66u -> 88u sur les 3 derniers mois)
- **Outliers détectés**: 104u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très stable (mensuel, le lundi). La dernière commande datant du 06/10/2025, la prochaine est attendue autour du 03/11/2025, soit au début de la fenêtre de prédiction. Bien que la base historique (N-1) soit de 52u, on observe une tendance haussière nette sur les trois derniers mois (52, 66, 88). En l'absence de pic de saisonnalité majeur identifié en N-1 pour novembre, nous recommandons de maintenir le volume de la dernière commande (88u) pour couvrir la demande de fond actuelle, sans cumuler plusieurs commandes.

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 100u vs Médiane: 100u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 60u (37.5%)
- 📉 **Erreur Médiane**: 60u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28 à 35 jours, exclusivement le lundi
- **Saisonnalité**: weak
- **Tendance**: Hausse structurelle par rapport à N-1 (passage de 80u à 100u+)
- **Outliers détectés**: 20u, 30u, 40u, 160u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): L'historique récent montre une base solide à 100u. Les valeurs de 20, 30 et 40u de l'année précédente sont traitées comme des reliquats ou des ajustements, tandis que le pic à 160u en septembre 2025 est considéré comme exceptionnel. 
ÉTAPE 2 (Saisonnalité): Pas de forte saisonnalité marquée en fin d'année, mais une consommation plus régulière et volumineuse qu'en début d'année 2024. 
ÉTAPE 3 (Tendance): Le produit suit une tendance haussière (+25%) par rapport à sa moyenne 2024, se stabilisant à 100u sur les derniers mois (août et octobre). 
ÉTAPE 4 (Recommandation): La dernière commande date du 06/10/2025 (il y a 27 jours). Étant donné le cycle habituel de 28-35 jours et l'habitude de commander le lundi, une commande est prévue dans la fenêtre des 30 prochains jours (probablement le lundi 03/11/2025). On retient la quantité standard récente de 100u pour cette commande unique.

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 12u vs Médiane: 24u (Réel: 22u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: medium)
- 📊 **Baseline N-1**: 11.5u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 22u
- 📉 **Erreur LLM**: 10u (45.5%)
- 📉 **Erreur Médiane**: 2u (9.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (30-35j) avec switch périodique vers un cycle de 50-60 jours lors de commandes doubles
- **Saisonnalité**: weak
- **Tendance**: Stable à 12u (pic de stockage récent à 24u)
- **Outliers détectés**: 22u, 24u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable de 11 à 12 unités par commande. On observe un pattern spécifique : le client commande occasionnellement une quantité double (~22-24u), ce qui allonge l'intervalle jusqu'à la commande suivante à environ 50-60 jours (cf. 64 jours entre juillet et septembre 2024, et 49 jours entre novembre 2023 et janvier 2024). La dernière commande le 06/10/2025 était de 24u. En appliquant le cycle de 'rattrapage' de 49 jours observé à la même période en N-1, la prochaine commande est estimée autour du lundi 24 novembre 2025. Cette date se situe dans la fenêtre des 30 prochains jours. La quantité recommandée est un retour à la base de 12 unités après le stockage du mois d'octobre.

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
- **Pattern temporel**: Cycle mensuel d'environ 28 à 30 jours, majoritairement les lundis ou mardis.
- **Saisonnalité**: weak
- **Tendance**: Stable à 30u après une légère baisse à 20u.
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel régulier (intervalle médian de ~30 jours). Il y a une rupture du rythme habituel puisque la dernière commande remonte au 01/09/2025 (soit 62 jours d'absence), ce qui indique une commande de réapprovisionnement imminente dans les prochains jours pour compenser le manque de commande en octobre. Historiquement, en novembre 2023, le client avait commandé 30u. Malgré le pic isolé à 60u en 2024, la demande de fond se cristallise autour de 30u. Compte tenu du retard de cycle, une commande de 30u est prévue pour la prochaine occurrence.

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

**✅ Quantité LLM**: 88u (confidence: high)
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

**✅ Quantité LLM**: 12u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-18T20:01:20.558Z*
