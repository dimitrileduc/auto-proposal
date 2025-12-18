# Rapport Backtest - Client SPAR GLABBEEK UNIVAN

## Contexte

- **Client** : SPAR GLABBEEK UNIVAN (ID: 39069)
- **Commande réelle** : S40292
- **Date commande** : 2025-11-12 13:28:54
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 6,701 input + 3,012 output = 9,713 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 1.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 55.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 89.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2-3 mois
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier au vu du très faible volume de données, les quantités oscillent entre 2 et 3 unités. Étape 2: Aucune saisonnalité claire n'est établie car le produit est commandé de manière sporadique sur des périodes très différentes (juillet, octobre, août). Étape 3: La tendance semble stable avec un léger maintien de la demande à 3 unités sur la dernière commande d'août 2025. Étape 4: En l'absence de récurrence forte et par mesure conservatrice, on s'aligne sur la valeur haute du fond de roulement observé (3u) pour couvrir la période jusqu'au prochain réapprovisionnement incertain, tout en notant que la fiabilité de la prédiction est faible due au manque de données historiques denses et régulières sur ce SKU spécifique (seulement 3 points de données en 15 mois). Aucun ajustement de jour n'est nécessaire car il n'y a pas de cycle de jour fixe détecté (JIT absent). Aucun sur-stockage n'est risqué sur une quantité aussi faible (250ml). Trop peu de données pour une analyse plus fine des tendances lourdes alimentaires (fêtes/été). Nous recommandons 3 unités pour maintenir le stock de sécurité habituel de ce client B2B spécifique sur ce condiment spécifique (JF005). La confiance est qualifiée de 'low' car l'intervalle entre les commandes est très long (environ 75-80 jours). On peut supposer une rotation lente ou des achats d'appoint ponctuels hors contrat volumique majeur pour ce type de pot Weck 250ml. Si le client commande aujourd'hui un mardi, c'est pour reconstituer son stock de base après la fin de la période de pic estival/rentrée.

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible et erratique (intervalle de 1 à 3 mois)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur n'est identifiée comme outlier compte tenu de la faiblesse des volumes (1 à 3u). Étape 2 (Saisonnalité): Historique N-1 trop fragmenté pour confirmer une saisonnalité forte, bien qu'un léger pic à 3u ait été observé en juin/août. Étape 3 (Tendance): La dernière commande date d'il y a plus de 2 mois (août 2025), suggérant une rotation très lente. La moyenne historique lissée est de 2.25 unités. Étape 4 (Recommandation): En l'absence de données récentes et avec une fréquence très espacée, la prudence impose une commande de 2 unités pour couvrir le besoin sans risque de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques, environ une fois par mois ou par trimestre, principalement le mardi.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en 2024 vs 1u en 2025)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation (Low Mover). ÉTAPE 1: La commande de 3 unités en octobre 2024 est considérée comme un outlier (stockage préventif ou événement ponctuel), la demande de fond est de 1 unité. ÉTAPE 2: La saisonnalité est faible, bien qu'une commande ait eu lieu en octobre N-1, le volume global reste très bas. ÉTAPE 3: La tendance est à la baisse ou stabilisation au minimum (1 unité). ÉTAPE 4: Étant donné la faible fréquence et le secteur B2B, une commande de 1 unité suffit pour couvrir le besoin sans risque de sur-stockage de produits périssables (sauce cocktail en bocal Weck). Le niveau de confiance est faible en raison de la rareté des points de données récents (dernière commande en août). Les commandes sont historiquement passées le mardi, ce qui correspond à la date actuelle (2025-11-11). Nous recommandons la quantité minimale de 1 unité pour maintenir la disponibilité tout en restant conservateur sur un produit dont la rotation semble ralentir par rapport à l'année précédente à la même époque (3u vs 1u). Aucun rattrapage de volume n'est jugé nécessaire au vu de l'historique récent de 2025 (1u). Quantité finale : 1 unité par prudence logistique sur ce format 250ML Weck (produit premium/artisanal). Une commande de 1 seule unité permet d'ajuster le stock sans encombrer l'étagère de ce client B2B dont la demande n'est pas structurellement haute au mois de novembre (période post-estivale calme pour les sauces de type cocktail avant les fêtes de fin d'année). Les données de décembre 2024 étant manquantes, nous ne pouvons pas anticiper de pic de fêtes dès le 11 novembre sans historique probant à cette date précise l'an passé (septembre/novembre 2024 étant vides de données).

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, historiquement sur un cycle de 30 à 60 jours, principalement le mardi.
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - Ralentissement du rythme de commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: La commande de 3u en oct 2024 est traitée comme un léger outlier ponctuel, la demande de fond se stabilisant à 2u. 2. SAISONNALITÉ: Aucune saisonnalité marquée n'est détectée; le produit est une tartinade bio dont la consommation ne fluctue pas significativement sur les données N-1 disponibles. 3. TENDANCE: On observe une activité très faible récemment (une seule commande en 3 mois le 25 août). Le rythme semble s'allonger. 4. RECOMMANDATION: Bien que le délai depuis la dernière commande soit long (78 jours), le volume historique est systématiquement de 2u. Par prudence et pour éviter le sur-stockage sur un produit à rotation lente, je recommande de rester sur l'unité de base de 2u, le mardi étant le jour habituel de réapprovisionnement pour ce client.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 1u
- 2024-07-19 06:30:26: 2u
- 2024-06-25 06:23:12: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 1u
- 2024-06-25 06:23:12: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:26:37: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 2u
- 2024-06-25 06:23:12: 2u
- 2024-04-16 12:50:41: 2u
- 2024-03-19 15:36:24: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JF037] JF BBQ SQUEEZE 300ML | 2 | Stock prédit: -0.7u (-30j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -2.2u (-52j restants) → prédit 4u mais non commandé |


---

## False Negatives (1)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Stock suffisant: 1.5u (79j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:32.699Z*
