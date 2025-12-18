# Rapport Backtest - Client DLL AD SOUMAGNE MARVAN

## Contexte

- **Client** : DLL AD SOUMAGNE MARVAN (ID: 38830)
- **Commande réelle** : S40104
- **Date commande** : 2025-11-04 11:03:09
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 18,420 input + 5,867 output = 24,287 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 18 produits prédits, 15 corrects |
| **Rappel** | 50.0% | 30 produits réels, 15 détectés |
| **F1-Score** | 62.5% | Score équilibré global |

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
| **MAE** | 0.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: Sporadique et très faible volume (intervalles de plusieurs mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement erratique avec des volumes unitaires (1u ou 2u) espacés de plusieurs mois. La dernière commande date de mi-septembre (1u). Sur ce profil de produit 'slow-mover' en B2B, il n'y a pas de saisonnalité marquée ni de récurrence hebdomadaire. La probabilité de commande est faible, mais si elle survient le 3 novembre, elle se limitera au strict minimum opérationnel de 1 unité constaté sur les périodes récentes.

</details>


<details>
<summary><strong>2. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.8u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ tous les 1 à 2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement faible et discontinue. Toutes les commandes historiques valides sont de 1 unité. La dernière commande remonte au 16 septembre 2025. Avec un intervalle habituel de 30 à 60 jours observé entre les commandes (septembre-novembre correspond à cet intervalle), et compte tenu de la stabilité unitaire du produit, la probabilité d'une commande d'une unité pour ce début novembre est élevée.

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique et très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique pour ce produit (4 commandes en 14 mois). Le volume standard est systématiquement de 1 unité, à l'exception d'un événement isolé à 3 unités en juillet 2024. Il n'y a pas de cycle hebdomadaire ou mensuel identifiable. Sans signal de croissance ou de saisonnalité à cette période (octobre/novembre N-1 indique 1u), la probabilité la plus forte est une commande unitaire.

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ 1 unité tous les 2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique pour ce produit (5 unités commandées sur les 15 derniers mois). La dernière commande remonte au 16 septembre 2025 (soit ~45 jours). Bien que le rythme ne soit pas strictement mensuel, l'intervalle moyen suggère qu'une nouvelle unité de 'Mayonnaise Wasabi' est susceptible d'être commandée début novembre pour reconstituer le stock de présentation ou répondre à une demande de niche récurrente.

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
- **Pattern temporel**: Très sporadique (intervalles irréguliers de plusieurs mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement faible et irrégulière, mais constante en volume lorsqu'elle survient (toujours 1 unité). La dernière commande remontant à août 2025 pour ce format squeeze 300ml, et compte tenu de l'historique 2024 qui montre des espacements de 1 à 3 mois, l'occurrence d'une commande en novembre est statistiquement probable. En l'absence de tendance à la hausse ou de saisonnalité marquée, la quantité standard de 1 unité est maintenue.

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
- **Pattern temporel**: Commande sporadique sans cycle fixe (intervalle ~30-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u-3u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une demande irrégulière avec un volume historique moyen faible (moyenne de 2.4u). La dernière commande date d'août (3u), suggérant un besoin de réapprovisionnement après un intervalle de plus de 75 jours. La saisonnalité N-1 à la même période (fin octobre/début novembre) indique un besoin unitaire (1u). En combinant la moyenne lissée hors pic (2u) et la faible activité récente, une commande de 2 unités est la plus probable pour couvrir la demande sans surstockage sur ce format 250ml.

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, intervalle long (30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière pour ce produit. La dernière commande date de plus de 80 jours (août 2025), ce qui est supérieur à l'intervalle moyen observé en 2024. Étant donné l'absence de saisonnalité marquée en fin d'année sur l'historique N-1 et la tendance récente stabilisée à 2 unités lors du dernier réapprovisionnement, une commande de 2 unités est la plus probable pour compenser l'absence prolongée de mouvements.

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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: low)
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
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 0.5u (26j restants) → prédit 1u mais non commandé |


---

## False Negatives (15)

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
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.6u (38j restants > seuil 30j) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock suffisant: 0.6u (38j restants > seuil 30j) |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:40:28.227Z*
