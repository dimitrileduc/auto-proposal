# Rapport Backtest - Client DLL AD DISTRI INCOURT

## Contexte

- **Client** : DLL AD DISTRI INCOURT (ID: 38797)
- **Commande réelle** : S40076
- **Date commande** : 2025-11-05 14:54:26
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 8,600 input + 3,993 output = 12,593 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.1% | 21 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 55.2% | Score équilibré global |

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
| **MAE** | 1.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 63.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 27.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (8)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible rotation, environ 1 commande tous les 2 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune anomalie détectée, les volumes sont constants (1u à l'exception d'un pic à 2u). Étape 2 : Pas de saisonnalité forte au T4, la dernière commande enregistrée en N-1 à cette période (septembre) était de 2u. Étape 3 : Absence de données sur les 3 derniers mois, suggérant une rotation très lente ou un possible déréférencement local. Étape 4 : La demande de fond est de 1u. Compte tenu de la faible fréquence et du risque de surstockage sur un produit à rotation lente, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans alourdir le stock dormant au 04/11/2025. Le niveau de confiance est faible en raison de l'absence de commandes récentes (gap de >12 mois).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).阶段性分析 indique un besoin ponctuel plutôt qu'un rythme soutenu sur ce format premium Weck (250ml).

</details>


<details>
<summary><strong>2. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique tous les 2 mois environ
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec ralentissement significatif
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond constante de 2 unités par commande sur l'historique disponible. ÉTAPE 1: Aucune promotion détectée (les 2u sont la norme), la valeur 0u en juillet 2024 est traitée comme une absence de besoin. ÉTAPE 2: La saisonnalité n'est pas marquée sur ce faible volume. ÉTAPE 3: Tendance en baisse forte de fréquence car aucune commande n'a été passée sur les 3 derniers mois (dernière commande en sept 2024). ÉTAPE 4: Pour un produit à rotation très lente avec une date actuelle en novembre (hors pics identifiés), on maintient la quantité minimum historique de 2 unités pour couvrir le besoin sans risque de sur-stockage massif, malgré le manque de données récentes.

</details>


<details>
<summary><strong>3. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence de commande, environ tous les 2 mois (cycle de 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable mais très sporadique (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune commande atypique, le produit tourne à 1,6 unités en moyenne par commande. Étape 2 (Saisonnalité): Pas de pic saisonnier identifiable dans l'historique N-1 (volume constant 1-2u). Étape 3 (Tendance): Absence de données sur les 3 derniers mois suggérant un besoin imminent pour reconstituer le stock de fond chez le client. La date actuelle correspond à la fenêtre de commande observée en fin d'année 2024. Étape 4 (Recommandation): En l'absence de données récentes et avec un historique de 1 à 2 unités, une commande de 2 unités est préconisée pour couvrir les prochains mois sans risque de surstockage excessif, compte tenu de la faible rotation du produit (Squeeze BBQ). Confiance basse car aucune donnée récente (Q3 2025). les deux unités permettent de sécuriser la disponibilité sur le cycle de 2 à 3 mois à venir.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 1u
- 2024-05-29 15:02:12: 1u
- 2024-03-26 09:37:39: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 0u
- 2024-05-29 15:02:12: 2u
- 2024-03-26 09:37:39: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 10:05:24: 2u
- 2024-09-05 07:19:35: 2u
- 2024-07-05 09:01:00: 1u
- 2024-05-29 15:02:12: 2u
- 2024-03-26 09:37:39: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | Stock prédit: 0.3u (4j restants) → prédit 3u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | Stock prédit: 1.0u (13j restants) → prédit 4u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 3 | Stock prédit: -1.7u (-31j restants) → prédit 3u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Stock prédit: 1.6u (25j restants) → prédit 4u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (29j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-13j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Stock prédit: 0.1u (4j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 4 | Stock prédit: -1.0u (-13j restants) → prédit 4u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 5 | Stock prédit: -0.6u (-7j restants) → prédit 5u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -1.0u (-13j restants) → prédit 4u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.7u (-43j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Stock prédit: 0.1u (8j restants) → prédit 2u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -1.2u (-25j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:13:51.940Z*
