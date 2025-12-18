# Rapport Backtest - Client SODEXO SAFRAN BE3723

## Contexte

- **Client** : SODEXO SAFRAN BE3723 (ID: 60539)
- **Commande réelle** : S40028
- **Date commande** : 2025-10-30 13:17:36
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 5,392 input + 1,897 output = 7,289 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 8 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 1.83 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 8 | 7 | 1.0 | 14.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 5 | 7 | 2.0 | 28.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très restreint (2 points de données), mais montre une stabilité relative entre 5 et 6 unités. La dernière commande date d'exactement 28 jours (un cycle de 4 semaines pile), ce qui suggère une commande de réapprovisionnement régulière chaque début de mois ou toutes les 4 semaines le mercredi. La tendance légère est à 5u (dernière valeur observée), nous privilégions la stabilité pour minimiser le MAPE compte tenu du faible volume.

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-60 jours) le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence mais une régularité sur le jour de la semaine (mercredi). La dernière commande a eu lieu exactement 28 jours (4 semaines) avant la date de prédiction proposée, suggérant un cycle de réapprovisionnement mensuel. La quantité est passée de 6u en août à 5u en octobre. Compte tenu de la stabilité de ce type de produit de niche (barre protéinée), le maintien à 5 unités est le plus probable pour minimiser le risque de surstockage tout en répondant à la demande habituelle.

</details>


<details>
<summary><strong>3. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), commande le mercredi
- **Saisonnalité**: none
- **Tendance**: Légère baisse (6u vers 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une récurrence mensuelle (28 jours exactement entre le 01/10 et le 29/10). Le volume est passé de 6 unités en août à 5 unités en octobre. Comme la date de prédiction correspond parfaitement au cycle de 4 semaines observé lors de la dernière commande du mercredi 1er octobre, et en l'absence de données N-1 indiquant une saisonnalité, la quantité de 5 unités est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 5u vs Médiane: 6u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 1u (14.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 points de données), mais montre une consommation stable en faible volume B2B. L'intervalle entre la première et la deuxième commande était de 58 jours, et 28 jours se sont écoulés depuis la dernière. Étant donné que le volume est passé de 6u à 5u lors de la commande du 01/10/2025 (mercredi), et que nous sommes exactement 4 semaines plus tard (mercredi 29/10), on privilégie la quantité la plus récente (5u) pour correspondre au rythme de réapprovisionnement mensuel observé.

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 5u vs Médiane: 7u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 7u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 2u (28.6%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel (environ 30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (7u vers 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes espacées de 34 jours. La dernière commande (01/10) était de 5 unités un mercredi. La date de prédiction actuelle (29/10) tombe également un mercredi, soit 28 jours après la précédente, s'insérant parfaitement dans le cycle mensuel observé. Bien que le volume soit passé de 7u à 5u, la stabilité à 5u sur le dernier point de données est privilégiée pour minimiser l'erreur, aucune saisonnalité N-1 n'étant disponible pour infirmer cette tendance.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>4. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-04 11:44:37: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>5. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:11:18: 5u
- 2025-08-28 06:05:44: 7u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 7u

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
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 5 | Stock prédit: 0.8u (5j restants) → prédit 5u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 5 | Stock prédit: 0.8u (5j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:37:02.140Z*
