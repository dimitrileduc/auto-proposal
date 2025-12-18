# Rapport Backtest - Client DLL PROXY RIXENSART SHOPFRAIS

## Contexte

- **Client** : DLL PROXY RIXENSART SHOPFRAIS (ID: 38871)
- **Commande réelle** : S40110
- **Date commande** : 2025-11-05 14:53:54
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 10,500 input + 3,879 output = 14,379 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 82.4% | Score équilibré global |

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
| **MAE** | 0.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 7.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (7)

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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande d'unité isolée sans cycle hebdomadaire détectable
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover). Étape 1: Aucune valeur aberrante détectée, la demande de fond est strictement de 1 unité par commande. Étape 2: La comparaison entre novembre 2025 et octobre 2024 ne montre aucune accélération saisonnière. Étape 3: La tendance est stable à l'unité. Étape 4: Étant donné la faible fréquence de rotation (un achat tous les 2 mois environ), le risque de rupture est faible et le risque de sur-stockage est élevé. La recommandation se limite à 1 unité pour couvrir le besoin ponctuel sans créer de dormants.

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ultra-faible (tous les 3-4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à l'unité (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande est constante à 1 unité par commande. Étape 2: L'historique N-1 ne montre aucune concentration sur la fin d'année (dernière commande en sept. 2024), suggérant une absence de saisonnalité marquée pour ce produit de niche. Étape 3: La tendance est stable mais la fréquence est très faible (une seule commande en 2025). Étape 4: Étant donné le volume historique unitaire constant et la faible rotation, le risque de rupture est faible sur une commande de 1 unité. Une recommandation conservatrice de 1 unité est maintenue pour éviter le sur-stockage d'un produit à rotation lente.

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Achat sporadique tous les 1 à 2 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable et faible de 1 unité par commande. 1) Aucun outlier détecté car toutes les commandes sont unitaires. 2) La saisonnalité n'est pas marquée malgré le secteur, les volumes restant identiques (1u) entre l'été et l'automne. 3) La tendance est plate (stable à 1u) avec une fréquence de réapprovisionnement très espacée (tous les 30 à 60 jours environ). 4) Bien que la dernière commande remonte à deux mois, le volume historique ne justifie pas de stocker plus d'une unité à la fois pour un produit de 200ml en format Weck, afin d'optimiser la rotation des stocks et la DLC.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois sans jour fixe
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (passage de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques montre un produit à faible rotation. ÉTAPE 1: Aucune valeur aberrante n'a été détectée, les volumes sont très faibles (1-2 unités). ÉTAPE 2: La saisonnalité est faible, bien que l'année précédente montre une commande en octobre/novembre, le volume reste minime. ÉTAPE 3: On observe un ralentissement, la dernière commande étant passée de 2 unités à 1 unité en septembre. ÉTAPE 4: Compte tenu de la faible fréquence et de la tendance à la baisse, une commande de 1 unité est recommandée pour couvrir la demande de fond tout en évitant le sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois sans jour de semaine fixe
- **Saisonnalité**: weak
- **Tendance**: Stable mais volume extrêmement faible (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes (1-2u) sont cohérents avec un produit de niche à faible rotation. Étape 2: La saisonnalité N-1 montre une commande en octobre/septembre, suggérant un besoin constant mais lent. Étape 3: La tendance est stable avec une seule commande récente de 1u en septembre. Étape 4: Étant donné la faible fréquence et le volume unitaire habituel, une commande de 1u suffit pour couvrir la demande sans risque de sur-stockage sur ce produit à la truffe, typiquement sujet à une rotation lente.

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle à bimestrielle
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont très faibles et constants (1-2u). ÉTAPE 2 (Saisonnalité): Pas de pic significatif en fin d'année N-1 (2u en oct, 0 en nov/dec), impact jugé faible. ÉTAPE 3 (Tendance): Demande en léger ralentissement avec une seule unité commandée lors des 5 derniers mois. ÉTAPE 4 (Recommandation): La faible rotation du produit et l'absence de régularité suggèrent une stratégie de réapprovisionnement à l'unité (juste-à-temps) pour éviter le surstockage sur un format 250ml de type sauce premium. Le passage en mardi n'influence pas le volume vu la faible fréquence globale du produit. Commande de 1 unité préconisée pour couvrir les besoins immédiats sans risque financier significatif car les données sont limitées (confidence low). Chaque commande historique est unique et de faible volume (1 ou 2 unités). L'objectif de ne pas sur-stocker impose la quantité minimale de 1 unité au vu de l'historique récent d'une seule commande le dernier trimestre à 1 unité également. On maintient la ligne de fond théorique basse à 1 unité compte tenu du secteur B2B où cette référence semble être un produit de niche ou de niche d'accompagnement spécifique très occasionnelle sur cette période de l'année (novembre). Un stock de sécurité n'est pas justifié ici au-delà du re-order point de 1 car le volume global annuel n'excède pas 4-5 unités d'après les données fournies sur 14 mois glissants. La confiance est faible à cause de la faible fréquence des commandes mais la tendance est très claire sur le volume unitaire : jamais plus de 2, majoritairement 1. La baseline est fixée à 1.25 mathématiquement via la moyenne historique mais arrondie par conservatisme opérationnel à 1 unité.

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 3 mois sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune valeur aberrante détectée, les volumes sont constants entre 1 et 2 unités. ÉTAPE 2 (SAISONNALITÉ): Pas de corrélation saisonnière marquée sur ce format spécifique (250ml), la demande semble opportuniste ou liée au réapprovisionnement de sécurité. ÉTAPE 3 (TENDANCE): La dernière commande date d'il y a deux mois (septembre), ce qui correspond à l'intervalle moyen observé. ÉTAPE 4 (RECOMMANDATION): Compte tenu du très faible débit et de l'absence de commande en octobre, une commande de 1 unité est préconisée pour maintenir le stock sans risque de sur-stockage sur un produit à rotation lente.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:19:34: 1u
- 2024-06-07 10:14:11: 1u
- 2024-04-17 08:29:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 1u
- 2024-06-07 10:14:11: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 2u
- 2024-09-12 10:19:34: 2u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 1u
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 2u
- 2024-04-17 08:29:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 2u
- 2024-09-12 10:19:34: 1u
- 2024-08-07 06:16:00: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-05 10:06:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:23:30: 1u
- 2024-08-07 06:16:00: 2u
- 2024-06-07 10:14:11: 1u
- 2024-04-17 08:29:40: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
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
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: -1.2u (-32j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:16:17.467Z*
