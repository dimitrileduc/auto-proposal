# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S40210
- **Date commande** : 2025-11-07 12:48:24
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 10,173 input + 14,077 output = 24,250 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 8 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **MAE** | 81.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 51.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 42.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF0078] FILOU CHASSEUR 5 L | 240 | 480 | 240.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 264 | 132.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 240u vs Médiane: 160u (Réel: 480u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: high)
- 📊 **Baseline N-1**: 230u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 480u
- 📉 **Erreur LLM**: 240u (50.0%)
- 📉 **Erreur Médiane**: 320u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire, prédominance marquée le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable à 240u
- **Outliers détectés**: 480u, 80u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très robuste calé sur le lundi. Le client a commandé les lundis 20/10, 27/10 et 03/11. Bien qu'une commande isolée de 80u soit apparue le jeudi 23/10 (outlier/ajustement), le volume de fond s'est stabilisé à 240u sur les deux dernières livraisons hebdomadaires. Étant donné que nous sommes le jeudi 06/11, la prochaine commande interviendra selon toute vraisemblance le lundi 10/11. Conformément à la règle de ne prédire que la prochaine commande uniquement, nous retenons le volume stable de 240u.

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 5u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: high)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire identifié avec une forte récurrence le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable à 5u avec accélération de la fréquence
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage des données effectué en identifiant la commande de 15u (23/10) comme un outlier (3x la demande habituelle). La demande de fond se situe autour de 5u. Étape 2 : La saisonnalité est jugée faible mais le produit est actif à cette période de l'année (Automne), conformément aux données N-1. Étape 3 : On observe une stabilisation du volume à 5u sur les dernières commandes avec une fréquence de passage devenue hebdomadaire (chaque lundi). Étape 4 : La date actuelle étant le jeudi 06/11 et la dernière commande datant du lundi 03/11, la prochaine commande interviendra selon toute probabilité le lundi 10/11. En application de la règle de non-cumul, nous prédisons une quantité de 5 unités pour cette unique prochaine commande.

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 132u (Réel: 264u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: high)
- 📊 **Baseline N-1**: 114.4u
- 📊 **Médiane**: 132u
- ✅ **Réel commandé**: 264u
- 📉 **Erreur LLM**: 132u (50.0%)
- 📉 **Erreur Médiane**: 132u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel (7 à 14 jours), majoritairement le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume récurrent de 132u sur les commandes récentes
- **Outliers détectés**: 208u, 18u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande régulier s'effectuant presque exclusivement le lundi. La dernière commande datant du 27 octobre (il y a 10 jours), et aucun mouvement n'ayant eu lieu le lundi 3 novembre, la prochaine commande est statistiquement attendue pour le lundi 10 novembre. Concernant le volume, bien que la moyenne récente soit de 114u, le palier de 132u est revenu sur 3 des 5 dernières commandes (correspondant probablement à 3 couches logistiques de 44u). En cohérence avec la période de fin d'année (N-1 montrait également un pic de volume à cette période), je recommande la quantité de 132u pour la prochaine commande unique.

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 10u vs Médiane: 20u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 9u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 20u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel identifié (25 à 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Légère hausse du volume par commande (+20%) malgré un espacement des cycles
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'analyse montre un changement de comportement en 2025 : les commandes sont moins fréquentes qu'en 2024 (tous les 25-30 jours contre tous les 10-15 jours l'an dernier) mais portent sur des volumes unitaires légèrement plus importants. La commande de 20u en septembre est traitée comme un outlier (stockage ou promotion). La dernière commande datant du 06 octobre (il y a 31 jours), le client est en rupture de cycle et devrait commander sous peu. Sur la base du fond de roulement historique (8-10u) et de la tendance récente corrigée (12u), une quantité de 10u est recommandée pour la prochaine commande.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 240u
- 2025-10-27 06:58:44: 240u
- 2025-10-23 09:13:38: 80u
- 2025-10-20 08:16:09: 160u
- 2025-10-20 08:08:48: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 160u
- 2024-10-21 06:08:37: 240u
- 2024-10-10 08:27:59: 160u
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u

**✅ Quantité LLM**: 240u (confidence: high)
**📊 Quantité Réelle**: 480u

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 5u
- 2025-10-27 06:58:44: 2u
- 2025-10-23 09:13:38: 15u
- 2025-10-20 08:16:09: 4u
- 2025-10-20 08:08:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 10u
- 2024-10-21 06:08:37: 4u
- 2024-09-16 11:50:49: 6u
- 2024-08-12 08:25:02: 15u
- 2024-06-24 09:19:20: 4u
- 2024-06-17 07:40:59: 10u
- 2024-06-17 07:22:49: 8u
- 2024-06-06 12:27:23: 4u
- 2024-05-31 06:50:36: 4u
- 2024-05-27 07:09:19: 2u
- 2024-04-04 08:57:19: 10u
- 2024-03-07 02:48:05: 2u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 06:58:44: 132u
- 2025-10-20 08:16:09: 88u
- 2025-10-06 09:21:48: 88u
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 156u
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u

**✅ Quantité LLM**: 132u (confidence: high)
**📊 Quantité Réelle**: 264u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:21:48: 12u
- 2025-09-11 08:10:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 10u
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

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
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 4 | Stock prédit: -0.5u (-5j restants) → prédit 4u mais non commandé |


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
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T19:52:47.877Z*
