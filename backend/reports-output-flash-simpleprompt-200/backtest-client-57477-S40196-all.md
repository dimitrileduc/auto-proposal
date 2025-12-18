# Rapport Backtest - Client MAISON DESPRIET SA, Nicole

## Contexte

- **Client** : MAISON DESPRIET SA, Nicole (ID: 57477)
- **Commande réelle** : S40196
- **Date commande** : 2025-11-07 12:46:58
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,288 input + 1,119 output = 4,407 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 5 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 100.0% | Score équilibré global |

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
| **MAE** | 64.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -60.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 480 | 320.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 44 | 44 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 4 | 6 | 2.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 480u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: high)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 480u
- 📉 **Erreur LLM**: 320u (66.7%)
- 📉 **Erreur Médiane**: 320u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (chaque mercredi récemment)
- **Saisonnalité**: none
- **Tendance**: Stable à 160u
- **Outliers détectés**: 480u

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilité parfaite à 160 unités avec un rythme qui s'est accéléré vers une fréquence hebdomadaire (chaque mercredi sur les deux dernières semaines). La commande du 2024-09-16 (480u) est considérée comme un outlier ou une commande de stock historique non corrélée à la consommation actuelle. La date de prédiction (jeudi 06/11) suit immédiatement une commande passée le mercredi 05/11. Bien que l'intervalle soit très court, la régularité stricte du volume de 160u sur les 5 dernières occurrences indique un besoin fixe par cycle de réapprovisionnement.

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 44u vs Médiane: 52u (Réel: 44u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 44u (confidence: medium)
- 📊 **Baseline N-1**: 48.33u
- 📊 **Médiane**: 52u
- ✅ **Réel commandé**: 44u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 8u (18.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une tendance hebdomadaire le vendredi (30-40 jours d'écart moyen sur la période globale)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée (55u -> 52u -> 44u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une diminution des volumes lors des trois dernières commandes (55, 52 puis 44 unités). La dernière commande du 10 octobre (44u) semble être le nouveau palier de consommation. Comme la commande actuelle intervient le jeudi 6 novembre, soit environ 4 semaines après la précédente, elle s'inscrit dans un rythme de réapprovisionnement mensuel de fond de rayon. Compte tenu de la tendance baissière et de l'absence de données N-1 pour justifier un pic saisonnier, la quantité la plus probable est le maintien du dernier volume observé (44u).

</details>


<details>
<summary><strong>3. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 18 et 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une constance absolue de la quantité commandée (2 unités) sur toutes les occurrences depuis un an, malgré des intervalles de temps variables. La période entre la dernière commande (10 octobre) et la date actuelle (6 novembre) est de 27 jours, ce qui correspond à la moyenne de réapprovisionnement observée. Aucun signal de croissance ou de saisonnalité ne justifie une déviation du standard de 2 unités.

</details>


<details>
<summary><strong>4. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel irrégulier, préférence marquée pour le vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un plancher à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique récent montre une demande très stable oscillant entre 1 et 2 unités. Le cycle de commande semble être d'environ toutes les deux à trois semaines (intervalles de 14, 32 et 17 jours). La dernière commande datant du 10 octobre (il y a 27 jours), une commande est fortement attendue cette semaine de novembre pour reconstituer le stock. Bien que la commande soit passée un jeudi au lieu du vendredi habituel, le volume de 2 unités est le mode statistique le plus fréquent (75% des occurrences) et correspond à la tendance de consommation actuelle du client.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-05 05:01:57: 160u
- 2025-10-29 12:00:23: 160u
- 2025-10-10 09:26:10: 160u
- 2025-09-23 09:13:34: 160u
- 2025-08-22 08:54:40: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 11:45:56: 480u

**✅ Quantité LLM**: 160u (confidence: high)
**📊 Quantité Réelle**: 480u

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-10 09:26:10: 44u
- 2025-08-29 09:33:32: 55u
- 2025-08-22 08:54:40: 52u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 44u (confidence: medium)
**📊 Quantité Réelle**: 44u

</details>


<details>
<summary><strong>3. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-10 09:26:10: 2u
- 2025-09-23 09:13:34: 2u
- 2025-08-08 06:49:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 11:45:56: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [PF0524] FILOU SAUCE TOMATE 815 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-10 09:26:10: 2u
- 2025-09-23 09:13:34: 2u
- 2025-08-22 08:54:40: 1u
- 2025-08-08 06:49:19: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

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

*Rapport généré automatiquement le 2025-12-18T11:36:44.527Z*
