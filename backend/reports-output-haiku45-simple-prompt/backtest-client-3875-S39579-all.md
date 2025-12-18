# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S39579
- **Date commande** : 2025-10-06 12:04:21
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,711 input + 3,869 output = 13,580 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 4 produits prédits, 1 corrects |
| **Rappel** | 33.3% | 3 produits réels, 1 détectés |
| **F1-Score** | 28.6% | Score équilibré global |

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
| **MAE** | 96.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (1)

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 96 | 192 | 96.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 96u vs Médiane: 128u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: medium)
- 📊 **Baseline N-1**: 85u
- 📊 **Médiane**: 128u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 96u (50.0%)
- 📉 **Erreur Médiane**: 64u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes régulières les lundis et mardis, cycle hebdomadaire (7-15 jours entre commandes). N-1 montre aussi des jeudis et mercredis, suggérant une flexibilité jour de semaine mais préférence lundi-mardi.
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive de 64-80u (N-1) vers 80-128u (3 derniers mois), +20% à +60% selon période
- **Outliers détectés**: 192u, 128u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE:
- Dernière commande: 2025-09-22 (lundi) = 80u
- Intervalle jusqu'à 2025-10-05 (dimanche) = 13 jours
- Pattern récent: cycles de 7-15j, avec commandes concentrées lun-mar
- Aujourd'hui = DIMANCHE (jour hors cycle habituel) → client a probablement décalé sa commande

FILTRAGE OUTLIERS:
- 192u (2024-06-17): événement exceptionnel N-1, non-récurrent → à exclure
- 128u (2025-08-19 et 2025-08-04): pics récents suggérant une tendance à la hausse, non des outliers purs

SYNTHÈSE SAISONNALITÉ & TENDANCE:
- N-1 (oct 2024): 1 commande à 80u (stableReference)
- Octobre 2024 comparable = 80u
- Période récente (3 derniers mois): moyenne = (80+128+128+64)/4 = 100u
- Tendance claire: +20-25% vs N-1
- Saisonnalité WEAK: pas de pic drastique identifié en septembre-octobre

AJUSTEMENT JOUR HORS CYCLE:
- Dimanche est INUSUEL pour ce client (toutes ses commandes = lun-jeu)
- Probable rattrapage anticipé ou retard délibéré (anticipation stock vacances ?)
- Augmenter prudentiellement +10% = 80×1.1 = 88u

BASELINE CALCULÉE:
- Moyenne N-1 sur période comparable: 80u
- Moyenne récente 3 mois: 100u
- Moyenne pondérée (poids 60% récent): 0.4×80 + 0.6×100 = 92u
- Ajustement ratio hausse tendance: +5% supplémentaire vs baseline = 92×1.04 ≈ 96u

CONCLUSION:
Prédiction: 96u (arrondi optimal)
- Justification: capture la tendance haussière (+20% vs N-1) tout en restant proche de l'historique régulier
- Confiance MEDIUM: jour dimanche = anomalie, mais pattern sous-jacent clair
- Mape optimal: cette quantité minimise l'écart attendu vs comportement réel

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u
- 2025-08-04 10:51:04: 128u
- 2025-07-14 09:47:20: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u
- 2024-03-13 08:20:22: 128u
- 2024-02-19 10:46:41: 64u

**✅ Quantité LLM**: 96u (confidence: medium)
**📊 Quantité Réelle**: 192u

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
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 64 | Stock prédit: 29.4u (6j restants) → prédit 64u mais non commandé |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | Stock prédit: 10.0u (3j restants) → prédit 48u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 140 | Stock prédit: 108.0u (24j restants) → prédit 140u mais non commandé |


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
| [VID0009] Consigne casier | 192 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 1152 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T10:10:31.516Z*
