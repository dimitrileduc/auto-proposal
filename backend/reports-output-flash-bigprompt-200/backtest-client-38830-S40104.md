# Rapport Backtest - Client DLL AD SOUMAGNE MARVAN

## Contexte

- **Client** : DLL AD SOUMAGNE MARVAN (ID: 38830)
- **Commande réelle** : S40104
- **Date commande** : 2025-11-04 11:03:09
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 34,110 input + 6,484 output = 40,594 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 18 produits prédits, 15 corrects |
| **Rappel** | 88.2% | 17 produits réels, 15 détectés |
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
| **MAE** | 0.47 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 18.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
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

## True Positives (15)

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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | 6 | 2.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles longs de 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique très fragmenté avec des quantités extrêmement faibles (systématiquement 1u ou 2u). La dernière commande enregistrée en septembre 2025 était de 1u. Bien que la fréquence de commande soit irrégulière (dernier intervalle de plus d'un an entre août 2024 et sept 2025), la demande de fond lorsqu'elle s'exprime est de 1 unité. En l'absence de cycle hebdomadaire clair et compte tenu de la nature 'slow-mover' du produit, on privilégie la répétition du dernier volume observé (1u) pour minimiser le MAPE, le lundi étant un jour ouvré standard pour une reprise de cycle.

</details>


<details>
<summary><strong>2. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (intervalle 30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit JF037 présente une demande extrêmement stable mais de très faible volume (systématiquement 1 unité par commande). L'historique N-1 et la donnée la plus récente de septembre 2025 confirment ce besoin unitaire. Bien que l'intervalle entre les commandes soit irrégulier, il n'y a aucune preuve de déclin ou d'augmentation. En suivant la règle de ne pas prédire 0 pour un jour hors cycle et en se basant sur la dernière valeur cohérente avec l'historique long terme, la quantité la plus probable pour la prochaine commande est de 1 unité.

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel à très faible fréquence (semi-annuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le produit présente un historique de commandes très erratiques et espacées (seulement 4 commandes en 16 mois). Le volume est extrêmement stable avec une prédominance de l'unité (1u), à l'exception d'une commande de 3u en juillet 2024 considérée comme un outlier par rapport à la tendance récente. La dernière commande datant de septembre 2025 était de 1u. En l'absence de cycle hebdomadaire ou mensuel identifiable, la quantité la plus probable pour toute nouvelle opportunité de commande est l'unité minimale de 1u.

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence sporadique (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une consommation extrêmement stable mais très espacée. Toutes les commandes valides enregistrées (historique N-1 et récent) sont systématiquement de 1 unité. Bien que le rythme ne soit pas hebdomadaire, la dernière commande remonte à mi-septembre, suggérant qu'une nouvelle commande unitaire est probable pour couvrir les besoins de novembre. En l'absence de toute variation de volume (toujours 1u), la probabilité que la demande soit différente de l'unité est quasi nulle pour ce client B2B.

</details>


<details>
<summary><strong>5. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (long intervalle > 60j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une très faible fréquence de commande pour ce produit (4 commandes en 18 mois). Cependant, chaque commande aboutissant à une transaction effective affiche une quantité constante de 1 unité (le 0u en 2024-07-10 est ignoré car non représentatif d'une vente). Selon les règles de gestion des jours hors cycle, comme il n'y a pas de jour de livraison fixe mais que le volume par commande est systématiquement de 1 unité depuis juin 2024, la prédiction se porte sur la quantité standard de la prochaine commande probable. La prédiction est de 1 unité, reflétant l'unité de vente minimale observée.

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2-3u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit présente une rotation très faible et irrégulière. L'historique N-1 sur la même période (30 oct 2024) montre une commande de 1u. Cependant, la dernière commande enregistrée en août 2025 est de 3u. Le volume de 4u en août 2024 semble être un maximum ponctuel. En l'absence de cycle hebdomadaire strict (commandes éparses), le lundi 3 novembre est traité comme la prochaine fenêtre probable de réapprovisionnement mensuel. La moyenne pondérée entre le fond historique ( ~2u) et la dernière commande (3u) suggère une quantité de 2u pour stabiliser les stocks sans sur-stockage.

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1u-2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une consommation très faible et irrégulière (6 commandes en 14 mois). La moyenne historique est proche de 1.6u. La dernière commande (août 2025) était de 2u. Étant donné l'absence de commande en septembre et octobre, le stock client est probablement bas pour ce produit de niche. Le lundi 03 novembre n'est pas le jour de commande habituel (plutôt fin de semaine), mais conformément aux règles, je prédis la quantité du prochain cycle probable. Compte tenu de la faible rotation, une quantité de 1u est la plus statistiquement probable pour éviter un surstockage tout en couvrant le besoin de fond.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF021] JF PICKLES 350 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-03-21 09:11:51: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 07:06:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:22:07: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 07:06:50: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 4u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 07:06:50: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:22:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 3u
- 2024-03-21 09:11:51: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: -0.5u (-14j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 0.5u (26j restants) → prédit 2u mais non commandé |


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
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.6u (38j restants > seuil 30j) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock suffisant: 0.6u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:18:53.317Z*
