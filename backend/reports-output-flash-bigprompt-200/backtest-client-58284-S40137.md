# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S40137
- **Date commande** : 2025-11-05 11:38:00
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 8,528 input + 1,696 output = 10,224 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 22.2% | 9 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 36.4% | Score équilibré global |

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
| **MAE** | 188.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 73.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 72.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -73.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (2)

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
| [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML | 20 | 273 | 253.0 | 92.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 118 | 242 | 124.0 | 51.2% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML</strong> - LLM: 20u vs Médiane: 165u (Réel: 273u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: low)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 165u
- ✅ **Réel commandé**: 273u
- 📉 **Erreur LLM**: 253u (92.7%)
- 📉 **Erreur Médiane**: 108u (39.6%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée / Fréquence indéterminée
- **Saisonnalité**: none
- **Tendance**: Stable à 20u (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée de 20 unités en août 2025 (un jeudi). En l'absence de pattern cyclique ou de saisonnalité N-1, la dernière valeur connue est la meilleure estimation de la demande de fond ('baseline'). Conformément aux règles pour les jours hors cycle, bien que la date cible soit un mardi et l'unique commande passée un jeudi, nous n'attribuons pas 0 mais la quantité probable du prochain réapprovisionnement, soit 20 unités.

</details>


<details>
<summary><strong>2. [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML</strong> - LLM: 118u vs Médiane: 341u (Réel: 242u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 118u (confidence: low)
- 📊 **Baseline N-1**: 118u
- 📊 **Médiane**: 341u
- ✅ **Réel commandé**: 242u
- 📉 **Erreur LLM**: 124u (51.2%)
- 📉 **Erreur Médiane**: 99u (40.9%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / Très faible fréquence
- **Saisonnalité**: none
- **Tendance**: Stable à 118u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule donnée disponible (118u le jeudi 14 août), il est impossible d'établir un cycle hebdomadaire ou mensuel ferme. En B2B, face à une commande isolée unique de cette taille pour un dressing, on considère cette valeur comme la 'quantité type' du client. En l'absence d'historique N-1 ou de tendance, la prédiction la plus probable pour la prochaine occurrence de commande (même pour un mardi) est le maintien du dernier volume connu, conformément aux consignes de ne pas prédire 0 pour les jours hors cycle mais de viser la prochaine commande probable.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 273u

</details>


<details>
<summary><strong>2. [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 12:47:50: 118u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 118u (confidence: low)
**📊 Quantité Réelle**: 242u

</details>




---

## False Positives (7)

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
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 111 | Stock prédit: 25.4u (9j restants) → prédit 111u mais non commandé |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 126 | Stock prédit: 28.9u (9j restants) → prédit 126u mais non commandé |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 130 | Stock prédit: 24.9u (7j restants) → prédit 130u mais non commandé |
| [PF3359] DLL MAYONNAISE AVOCAT CHIPOTLE 200ML | 350 | Stock prédit: 70.4u (8j restants) → prédit 350u mais non commandé |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 401 | Stock prédit: -167.6u (-23j restants) → prédit 401u mais non commandé |
| [PF3350] DLL MARINADE AVOCAT 8 HERBS 240ML | 8 | Stock prédit: -454.2u (-79j restants) → prédit 8u mais non commandé |
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 141 | Stock prédit: -468.5u (-62j restants) → prédit 141u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:13:50.076Z*
