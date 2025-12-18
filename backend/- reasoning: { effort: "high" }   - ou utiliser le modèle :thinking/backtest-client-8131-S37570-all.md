# Rapport Backtest - Client ILIS    SA, FRANCESCO LOZANO

## Contexte

- **Client** : ILIS    SA, FRANCESCO LOZANO (ID: 8131)
- **Commande réelle** : S37570
- **Date commande** : 2025-06-20 08:53:32
- **Date cutoff système** : 2025-06-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 5,775 input + 2,336 output = 8,111 total


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
| **MAE** | 147.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 72.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 53.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -72.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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
| [PF0077] FILOU PROVENCALE 5 L | 23 | 50 | 27.0 | 54.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 104 | 52.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 39 | 52 | 13.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: Commande hebdomadaire chaque vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à 160u
- **Outliers détectés**: 240u

**🧠 Raisonnement LLM:**
L'analyse montre un rythme hebdomadaire très stable fixé à 160 unités chaque vendredi. L'historique récent présente un outlier à 240u le 06/06 (potentiel stockage ou événement ponctuel), suivi d'un retour immédiat à la normale de 160u le 13/06. Une commande isolée le mardi 03/06 n'a pas cassé le cycle de fin de semaine. En l'absence de données N-1 pour confirmer une saisonnalité estivale, nous restons sur la demande de fond de 160u. La demande actuelle intervient un jeudi, soit la veille du jour de commande habituel (vendredi), ce qui confirme le besoin de réapprovisionnement pour couvrir la semaine à venir.

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 23u vs Médiane: 24u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 23u (confidence: medium)
- 📊 **Baseline N-1**: 22.67u
- 📊 **Médiane**: 24u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 27u (54.0%)
- 📉 **Erreur Médiane**: 26u (52.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 22u
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 80u du 03/06 est identifiée comme un outlier massif (stockage exceptionnel ou promotion), la moyenne de fond hors pic se situant à 22.67u. ÉTAPE 2 (Saisonnalité) : Pas de données N-1 pour confirmer un pic saisonnier, analyse basée sur le flux récent. ÉTAPE 3 (Tendance) : Le rythme est très régulier (chaque vendredi) avec des volumes stables autour de 20-24u. ÉTAPE 4 (Recommandation) : Le besoin est estimé à la moyenne de fond. Étant donné que nous sommes jeudi et que le client commande habituellement le vendredi, la commande actuelle de 23 unités est cohérente avec son cycle hebdomadaire de consommation.

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 4u vs Médiane: 5u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, principalement le vendredi (cycle 7j ou 14j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 5u à 3u)
- **Outliers détectés**: 60u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 60u le 11/04 est traitée comme un outlier (promotion ou stock initial). La consommation de fond se situe entre 3u et 5u. Étape 2: Aucune donnée N-1 disponible, impact saisonnier considéré comme nul par défaut. Étape 3: On observe une légère tendance à la baisse (dernière commande à 3u contre 5u précédemment) et un rythme de réapprovisionnement décalé (dernière commande il y a 6 jours). Étape 4: La recommandation de 4 unités permet de couvrir la demande de fond lissée (moyenne hors outlier de 4.5u) tout en restant conservateur face à la baisse récente à 3u, afin d'éviter le surstockage sur un produit à faible volume unitaire.

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
- **Pattern temporel**: Cycle de 10 à 25 jours, majoritairement les vendredis
- **Saisonnalité**: none
- **Tendance**: Stable à 52u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une stabilité exceptionnelle de la demande de fond avec une quantité fixe de 52 unités par commande, sans aucun outlier détecté. Bien que l'intervalle entre les commandes varie (entre 11 et 25 jours), le volume ne fluctue jamais, suggérant une gestion par lot fixe (remplissage de palette ou format logistique standard de 10kg x 52). La dernière commande datant du 03/06 (il y a 16 jours), nous sommes dans la fenêtre habituelle de réapprovisionnement. En l'absence de données N-1 pour confirmer une saisonnalité estivale et face à une tendance parfaitement plate, la recommandation reste fixée sur le standard historique de 52 unités.

</details>


<details>
<summary><strong>5. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 39u vs Médiane: 52u (Réel: 52u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 39u (confidence: low)
- 📊 **Baseline N-1**: 43.33u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 52u
- 📉 **Erreur LLM**: 13u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle complexe (4j puis 25j), possible cycle mensuel ou bi-mensuel erratique
- **Saisonnalité**: none
- **Tendance**: Stable avec alternance de volumes 26u/52u (multiple de couche palette ?)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les données sont trop limitées pour isoler des outliers statistiquement, bien que 52u apparaisse deux fois, suggérant un besoin récurrent. ÉTAPE 2 (Saisonnalité) : Aucune donnée N-1 disponible, impact inconnu. ÉTAPE 3 (Tendance) : La moyenne mobile est de 43,3u mais le dernier intervalle de 27 jours suggère une consommation plus lente qu'une commande hebdomadaire. ÉTAPE 4 (Recommandation) : Nous sommes jeudi, à la veille du jour de commande habituel (vendredi). En l'absence de visibilité sur le stock actuel et avec un historique de 3 points seulement, nous optons pour une approche conservatrice basée sur la moyenne pondérée, légèrement réduite pour éviter le sur-stockage en période d'incertitude sur la fréquence réelle (39u correspondant à 0.75x le gros volume habituel). La confiance est faible car le faible volume de données ne permet pas de confirmer la durée de consommation d'un lot de 52u. Chaque commande semble couvrir environ 20-30 jours de stock au vu des dates d'avril et mai (28/04 au 23/05 = ~25j). La commande du 19/06 intervient 27 jours après la dernière commande du 23/05, ce qui valide la nécessité d'un réapprovisionnement maintenant sans pour autant sur-dimensionner le lot avant d'avoir plus de données sur la demande estivale réelle en ketchup (potentiellement forte en été mais non prouvée ici). Une quantité de 39u permet de couvrir environ 3 semaines de consommation moyenne tout en limitant les risques de DLC sur un format 10KG si la demande ralentissait subitement en juin. Le client semble commander par multiples de 26 (26, 52), 39 représente un compromis entre ces deux paliers logistiques (1.5 x 26).

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

**✅ Quantité LLM**: 23u (confidence: medium)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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

**✅ Quantité LLM**: 39u (confidence: low)
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

*Rapport généré automatiquement le 2025-12-18T12:00:50.103Z*
