# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 7,041 input + 1,389 output = 8,430 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (64u -> 48u -> 32u -> 16u)
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
L'analyse montre une transition du jour de commande du vendredi (en 2024) vers le mercredi de façon systématique sur les 3 dernières commandes de 2025. Le cycle est passé à une fréquence stricte de 14 jours (2025-09-10, 2025-09-24, 2025-10-08). La date de prédiction étant un dimanche, nous visons selon les guidelines la prochaine occurrence du cycle, soit le mercredi 22 octobre. Bien que la dernière commande fût de 16u, celle-ci semble être un point bas alternatif dans une alternance 16/32/48 observée récemment. En isolant les pics de 64u comme des outliers de restockage massif, la moyenne glissante sur les 3 derniers cycles est de 32u, ce qui représente le volume de réapprovisionnement le plus probable pour maintenir le stock linéaire.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 32u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Baseline N-1**: 38.4u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (de 32u à 48u en volume pic)
- **Outliers détectés**: 16u, 48u

**🧠 Raisonnement LLM:**
L'analyse montre une transition du cycle de commande du vendredi vers le mercredi depuis septembre 2025. Le client commande désormais précisément tous les 14 jours (10/09, 24/09, 08/10). La date de prédiction étant le dimanche 12/10, elle tombe entre deux cycles. Suivant les consignes pour les jours hors cycle, la prochaine commande attendue est le mercredi 22/10. Concernant le volume, on observe une alternance ou une augmentation vers 48u (dernière commande et été 2025). Le volume de 32u semble devenir le plancher technique alors que 48u représente le pic de consommation actuel. Compte tenu de la dynamique récente de croissance sur ce produit B2B, je prévois le palier haut de 48u pour la prochaine échéance.

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel stable (tous les 14 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 16u
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité remarquable du produit [MF0048] avec une quantité constante de 16 unités par commande, quel que soit le jour ou la saison. On note que le client a légèrement modifié son jour de commande habituel du vendredi (en 2024) vers le mercredi sur la période récente (septembre/octobre 2025). Bien que la date demandée soit un dimanche (hors cycle), la règle métier impose de ne pas prédire 0. La dernière commande datant du mercredi 2025-10-08, la prochaine occurrence logique du cycle bi-mensuel (environ 14 jours) devrait se situer autour du 22 octobre. Suite aux guidelines, je projette la quantité de cette prochaine commande probable qui reste fixée à 16 unités, les valeurs de 32u observées en 2024 étant traitées comme des doubles-commandes ponctuelles ou erreurs de stock sans récurrence récente.

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Quinzomadaire (tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 16u
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
L'historique récent montre une régularité parfaite de 16 unités toutes les deux semaines (le mercredi). La valeur de 64u en juillet est isolée et traitée comme un outlier non reproductible ici. La date de prédiction (dimanche) étant hors cycle, j'applique la directive de prévoir la quantité du prochain cycle habituel plutôt que zéro. La commande du 08/10 venant d'avoir lieu, la tendance indique une stabilité de volume de 16u pour l'occurrence suivante.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 48u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 32u
- 2025-07-14 07:23:44: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 32u
- 2024-08-07 07:50:22: 48u
- 2024-07-19 07:16:19: 16u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 32u
- 2024-04-19 09:15:16: 32u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u
- 2024-02-23 08:44:27: 32u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-09-10 06:05:27: 16u
- 2025-07-14 07:23:44: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 16u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 16u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 16u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 16u
- 2024-03-22 09:26:53: 16u
- 2024-03-15 08:05:43: 16u
- 2024-02-23 08:44:27: 16u
- 2024-02-19 09:05:29: 16u
- 2024-01-26 13:59:24: 32u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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
| [VID0009] Consigne casier | 96 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 576 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:57:11.141Z*
