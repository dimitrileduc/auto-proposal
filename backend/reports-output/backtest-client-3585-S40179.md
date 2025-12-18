# Rapport Backtest - Client ILIS    SA

## Contexte

- **Client** : ILIS    SA (ID: 3585)
- **Commande réelle** : S40179
- **Date commande** : 2025-11-06 14:07:11
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 5,906 input + 7,350 output = 13,256 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 90.9% | Score équilibré global |

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
| **MAE** | 80.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 65.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -65.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 400 | 320.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 4 | 10 | 6.0 | 60.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0077] FILOU PROVENCALE 5 L | 40 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 88 | 36.0 | 40.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 160u (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 320u (80.0%)
- 📉 **Erreur Médiane**: 240u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel, exclusivement le vendredi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 240u en septembre à 80u fin octobre
- **Outliers détectés**: 800u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur le jour de commande (vendredi). Après un pic en septembre (240u), on observe une décrue constante des volumes : 240, 160, puis 80 unités le 24/10. Le client a sauté le vendredi 31/10, ce qui suggère un passage d'un cycle de 7 jours à un cycle de 14 jours (fréquent en fin de saison ou période creuse). La prochaine commande est donc attendue le vendredi 07/11 (dans la fenêtre des 30 jours). Compte tenu de la tendance baissière et du palier minimum observé historiquement, la quantité prévue est de 80 unités.

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 40u vs Médiane: 80u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 30u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier avec une accélération temporaire (bi-mensuelle) durant la période août-septembre
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 50u à 40u après un pic estival exceptionnel
- **Outliers détectés**: 160u, 80u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilisation de la demande après un pic atypique en août/septembre (jusqu'à 160u en une journée). Historiquement, la base de consommation est de 30u, mais la tendance 2025 s'est stabilisée à un niveau supérieur. Le cycle actuel est d'environ 30 jours (dernière commande le 24/10). Une commande est donc attendue entre le 21 et le 28 novembre 2025. En suivant la tendance de décrue progressive observée (80 > 50 > 40), la prochaine commande devrait se maintenir à 40u, reflétant une consommation de fond plus élevée que l'année précédente tout en évitant le surstockage après la fin de la haute saison.

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 104u (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 52u (confidence: medium)
- 📊 **Baseline N-1**: 52u
- 📊 **Médiane**: 104u
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 36u (40.9%)
- 📉 **Erreur Médiane**: 16u (18.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 25-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 52u avec des pics ponctuels en période estivale
- **Outliers détectés**: 104u, 156u, 182u

**🧠 Raisonnement LLM:**
L'analyse montre une unité de base récurrente de 52u (probablement une unité logistique complète). Bien qu'il y ait eu des pics importants en août 2025 (104u et 156u), l'historique N-1 montre que la demande se stabilise à 52u en période hivernale (novembre/décembre). On observe une absence de commande depuis fin août (68 jours), ce qui suggère une rupture du cycle habituel. Cependant, l'historique de l'année précédente confirme une commande à la mi-novembre. On prévoit donc une reprise du cycle ce mois-ci pour la quantité de base.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-24 11:20:59: 80u
- 2025-10-17 12:59:10: 160u
- 2025-10-10 09:19:46: 160u
- 2025-09-26 09:43:49: 240u
- 2025-09-12 08:28:12: 240u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:23:33: 80u
- 2024-07-15 07:19:05: 240u
- 2024-06-28 08:15:03: 800u
- 2024-06-24 06:41:26: 320u
- 2024-06-10 06:26:08: 80u
- 2024-05-31 10:26:02: 80u
- 2024-05-27 07:14:06: 240u
- 2024-05-17 14:12:43: 320u
- 2024-04-25 14:17:14: 320u
- 2024-04-25 13:58:12: 160u
- 2024-04-05 10:00:00: 240u
- 2024-03-22 10:15:32: 160u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-24 11:20:59: 40u
- 2025-09-23 13:54:09: 50u
- 2025-09-12 08:28:12: 80u
- 2025-08-29 11:50:51: 80u
- 2025-08-29 11:50:51: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:23:33: 30u
- 2024-08-06 06:22:18: 30u
- 2024-06-28 08:15:03: 30u
- 2024-06-10 06:26:08: 30u
- 2024-05-27 07:14:06: 30u
- 2024-04-25 14:17:14: 30u
- 2024-03-22 10:15:32: 30u
- 2024-03-15 10:54:41: 30u
- 2024-03-12 13:08:50: 30u
- 2024-02-09 07:26:34: 10u
- 2024-01-05 07:48:07: 40u
- 2023-12-01 09:40:17: 20u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-29 11:50:51: 104u
- 2025-08-05 09:10:12: 156u
- 2025-08-05 08:25:24: 26u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-28 08:15:03: 104u
- 2024-06-24 06:41:26: 52u
- 2024-05-31 10:26:02: 52u
- 2024-05-27 07:14:06: 52u
- 2024-04-25 14:17:14: 52u
- 2024-03-22 10:15:32: 52u
- 2024-03-12 13:08:50: 52u
- 2024-02-09 07:26:34: 52u
- 2024-01-18 13:13:49: 52u
- 2023-12-01 09:40:17: 52u
- 2023-11-16 07:09:41: 52u

**✅ Quantité LLM**: 52u (confidence: medium)
**📊 Quantité Réelle**: 88u

</details>




---

## False Positives (1)

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
| [PF0089] FILOU VOL AU VENT 400 GR | 10 | Stock prédit: 1.7u (26j restants) → prédit 10u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T20:00:41.223Z*
