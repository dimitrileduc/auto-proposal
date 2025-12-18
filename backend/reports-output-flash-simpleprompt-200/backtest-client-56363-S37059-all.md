# Rapport Backtest - Client Le Fourgon SAS

## Contexte

- **Client** : Le Fourgon SAS (ID: 56363)
- **Commande réelle** : S37059
- **Date commande** : 2025-06-24 06:16:08
- **Date cutoff système** : 2025-06-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 2,334 input + 929 output = 3,263 total


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
| **MAE** | 2.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 10.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MF0024] MF KETCHUP 250g | 28 | 32 | 4.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0047] MF Mayonnaise 250ml | 18 | 16 | 2.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RF003] REFIELD Maïs 500G  | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0021] MF Sauce BBQ 250ml | 13 | 16 | 3.0 | 18.8% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - LLM: 28u vs Médiane: 16u (Réel: 32u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 28u (confidence: medium)
- 📊 **Baseline N-1**: 22.67u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 32u
- 📉 **Erreur LLM**: 4u (12.5%)
- 📉 **Erreur Médiane**: 16u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j) le mardi
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (+100% sur le dernier cycle)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une commande mensuelle régulière le mardi. La demande actuelle est sur une forte pente ascendante par rapport à N-1 (20u) et avril (16u), culminant à 32u en mai. La recommandation de 28u ajuste la moyenne pondérée en tenant compte de la croissance organique tout en lissant le pic de mai pour éviter le surstockage, tout en notant que la commande est passée avec un jour d'avance sur le cycle habituel.

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 18u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 2u (12.5%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours) avec jour cible le mardi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (32u -> 16u)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
L'historique montre un cycle mensuel régulier (01/04 -> 06/05). La dernière commande date d'il y a 48 jours (plus long que l'intervalle habituel de ~35 jours), suggérant un besoin imminent par épuisement de stock. Bien que la tendance récente soit à la baisse (16u le 06/05 vs 32u le 01/04), la saisonnalité N-1 (20u en juin) et le délai prolongé depuis la dernière livraison justifient une légère correction à la hausse par rapport au dernier volume reçu. La prédiction est fixée à 18 unités pour s'aligner sur la moyenne pondérée de la période actuelle et la référence N-1, tout en respectant la tendance baissière globale par rapport au pic d'avril.

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - LLM: 48u vs Médiane: 40u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: medium)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 8u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~35 jours), commandes le mardi
- **Saisonnalité**: none
- **Tendance**: Hausse +25%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes espacées de 35 jours (exactement 5 semaines) effectuées un mardi. La commande du 2025-05-06 (40u) marque une croissance de 25% par rapport à celle du 2025-04-01 (32u). La date de prédiction (lundi 2025-06-23) survient exactement 7 semaines (48 jours) après la dernière commande, suggérant un léger retard par rapport au cycle habituel de 5 semaines, ou une transition vers un cycle de 6-7 semaines avec un volume plus important. En appliquant le taux de croissance de +25% sur la dernière valeur connue (40u * 1.20 = 48u), on obtient une projection cohérente avec la montée en puissance du produit.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 32u
- 2025-04-01 07:53:14: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-04 14:36:38: 20u

**✅ Quantité LLM**: 28u (confidence: medium)
**📊 Quantité Réelle**: 32u

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 16u
- 2025-04-01 07:53:14: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-04 14:36:38: 20u

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-06 09:19:13: 40u
- 2025-04-01 07:53:14: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 48u (confidence: medium)
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
| [VID0009] Consigne casier | 64 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 384 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:40:38.480Z*
