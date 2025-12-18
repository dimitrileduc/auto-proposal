# Rapport Backtest - Client Le Fourgon SAS

## Contexte

- **Client** : Le Fourgon SAS (ID: 56363)
- **Commande réelle** : S37059
- **Date commande** : 2025-06-24 06:16:08
- **Date cutoff système** : 2025-06-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 2,727 input + 1,080 output = 3,807 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
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
| **MAE** | 4.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 15.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 14.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [MF0024] MF KETCHUP 250g | 24 | 32 | 8.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0047] MF Mayonnaise 250ml | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RF003] REFIELD Maïs 500G  | 42 | 48 | 6.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0021] MF Sauce BBQ 250ml | 13 | 16 | 3.0 | 18.8% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - LLM: 24u vs Médiane: 16u (Réel: 32u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: medium)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 8u (25.0%)
- 📉 **Erreur Médiane**: 16u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), traditionnellement le mardi
- **Saisonnalité**: weak
- **Tendance**: Hausse corrélée à la saison estivale (+100% vs avril)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La commande de 32u en mai est traitée comme un pic saisonnier/promotionnel par rapport à la base historique de 16-20u. Étape 2 (Saisonnalité): En juin (N-1), la commande était de 20u. Nous observons une légère hausse saisonnière à l'approche de l'été. Étape 3 (Tendance): Le volume est passé de 16u en avril à 32u en mai, indiquant une accélération de la demande en restauration. Étape 4 (Recommandation): En combinant la base de 16-20u avec une croissance modérée pour juin et la proximité du pic de mai, une quantité de 24u permet de couvrir le mois tout en restant conservateur face à l'augmentation des volumes.

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 30-35 jours (premier mardi du mois)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -20% (16u vs 20u N-1)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: La commande de 32u en avril est isolée par rapport aux 20u (N-1) et 16u (mai), suggérant un restockage exceptionnel. La base saine se situe autour de 18u. 2. SAISONNALITÉ: Faible influence visible, bien que la mayonnaise soit un produit estival, les données N-1 montrent un volume stable en juin. 3. TENDANCE: La dernière commande de mai (16u) montre une érosion par rapport à juin N-1 (20u). 4. RECOMMANDATION: Nous sommes en avance sur le cycle habituel (23 juin au lieu du 1er mardi de juillet). Pour éviter le surstockage tout en couvrant le début de saison estivale, on s'aligne sur le volume récent le plus bas (16u).

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - LLM: 42u vs Médiane: 40u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 42u (confidence: low)
- 📊 **Baseline N-1**: 36u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 6u (12.5%)
- 📉 **Erreur Médiane**: 8u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~35 jours), premier mardi du mois
- **Saisonnalité**: none
- **Tendance**: Hausse modérée +25%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune donnée aberrante détectée sur les deux points fournis (32u et 40u), les deux volumes semblent refléter une consommation B2B régulière. 2. SAISONNALITÉ: Impossible à confirmer sans data N-1, cependant le maïs 500g est un produit stable hors périodes estivales spécifiques. 3. TENDANCE: On observe une croissance de 25% entre avril et mai. Le cycle habituel est le premier mardi du mois ; aucune commande n'ayant été passée début juin, un besoin de réapprovisionnement est critique après 7 semaines d'écart. 4. RECOMMANDATION: La base moyenne est de 36u. En appliquant la tendance haussière observée (+25% soit 45u) mais en restant conservateur dû au faible historique et au délai allongé depuis la dernière commande, une quantité de 42u est préconisée pour couvrir le mois de juillet sans risque massif de sur-stockage.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 32u
- 2025-04-01 07:53:14: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-04 14:36:38: 20u

**✅ Quantité LLM**: 24u (confidence: medium)
**📊 Quantité Réelle**: 32u

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 16u
- 2025-04-01 07:53:14: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-04 14:36:38: 20u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 40u
- 2025-04-01 07:53:14: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 42u (confidence: low)
**📊 Quantité Réelle**: 48u

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

*Rapport généré automatiquement le 2025-12-18T12:15:36.014Z*
