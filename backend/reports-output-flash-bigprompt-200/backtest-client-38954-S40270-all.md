# Rapport Backtest - Client ITM NANDRIN ST SEVERIN ECONAN

## Contexte

- **Client** : ITM NANDRIN ST SEVERIN ECONAN (ID: 38954)
- **Commande réelle** : S40270
- **Date commande** : 2025-11-12 14:31:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 19,484 input + 3,697 output = 23,181 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.3% | 26 produits prédits, 11 corrects |
| **Rappel** | 64.7% | 17 produits réels, 11 détectés |
| **F1-Score** | 51.2% | Score équilibré global |

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
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 17.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (11)

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
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-40 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible activité avec seulement 4 points en 15 mois. La tendance récente (septembre et octobre 2025) montre une diminution du volume par commande par rapport à 2024 (passant de 3u à 1u). Bien que l'intervalle moyen soit d'environ 40 jours et que la dernière commande date de 29 jours, le volume unitaire le plus probable pour ce type de produit à rotation lente en B2B est de 1 unité, reflétant le comportement d'achat le plus récent.

</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très aléatoire entre 30 et 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique complet (N-1 et récent) est d'une stabilité absolue sur la quantité unitaire : chaque commande passée depuis avril 2024 est de 1 unité. Bien que la fréquence soit irrégulière (entre 1 et 2 mois d'intervalle), il n'y a aucun signal de hausse ou de baisse de volume par commande. La dernière commande date du 13 octobre (il y a environ 30 jours), ce qui place le 11 novembre dans la fenêtre de réapprovisionnement probable. En suivant la règle de ne pas prédire 0 pour un jour hors cycle et vu la constance du produit, la quantité de 1u est la plus probable.

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (~30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée (de 1-2u en N-1 à 3u en récent)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une transition d'une demande de 1 ou 2 unités en 2024 vers une demande constante de 3 unités lors des deux dernières commandes (septembre et octobre 2025). Le cycle de commande est environ mensuel. Bien que la date demandée (11 novembre) soit légèrement plus précoce que l'intervalle habituel de 30-40 jours par rapport à la dernière commande du 13 octobre, la stabilité des volumes récents à 3 unités prime sur la fréquence exacte. La valeur 4u en juillet 2024 est traitée comme un pic saisonnier isolé non reproduit cette année.

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (historique vide)
- **Saisonnalité**: none
- **Tendance**: Absence de tendance (nouveau produit/client)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques pour l'année précédente (N-1) et les 3 derniers mois, il est impossible de dégager un cycle ou une tendance. Selon les règles de supply chain agroalimentaire appliquées aux nouveaux produits/flux, une quantité minimale de 1 unité est préconisée pour lancer le réapprovisionnement, en attendant de pouvoir caractériser la demande réelle. Le mardi n'étant pas identifié comme hors cycle (aucun cycle existant), nous prévoyons l'ouverture du flux à la valeur minimale unitaire.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u
- 2025-09-03 06:38:52: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-13 10:01:26: 3u
- 2024-05-16 11:55:16: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:40:35: 1u
- 2025-09-03 06:38:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 13:45:18: 1u
- 2024-08-13 10:01:26: 1u
- 2024-07-10 05:50:18: 1u
- 2024-05-16 11:55:16: 1u
- 2024-04-15 13:07:50: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 07:40:35: 3u
- 2025-09-03 06:38:52: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 13:45:18: 1u
- 2024-09-30 07:05:31: 1u
- 2024-08-13 10:01:26: 2u
- 2024-07-10 05:50:18: 4u
- 2024-05-16 11:55:16: 2u
- 2024-04-15 13:07:50: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (15)

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
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 0.5u (8j restants) → prédit 2u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Stock prédit: 0.1u (5j restants) → prédit 2u mais non commandé |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.5u (-12j restants) → prédit 2u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: 0.4u (15j restants) → prédit 2u mais non commandé |


---

## False Negatives (6)

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock suffisant: 0.7u (62j restants > seuil 30j) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:17:31.143Z*
