# Rapport Backtest - Client UPFRESH - HUPPA

## Contexte

- **Client** : UPFRESH - HUPPA (ID: 3460)
- **Commande réelle** : S39539
- **Date commande** : 2025-10-03 09:41:57
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,195 input + 3,145 output = 10,340 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 40.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0078] FILOU CHASSEUR 5 L | 120 | 160 | 40.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 120u vs Médiane: 160u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: medium)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 40u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec 2 patterns détectés: (1) Jeudis isolés en août-septembre 2025 (7-8 juil), (2) Vendredis récurrents historiquement (N-1 et anciens). Pattern primaire récent: ~8-10 jours entre commandes en 3 derniers mois. Aucun cycle 30j détecté. Rupture nette du rythme: N-1 était dominé par vendredis, N actuel montre mersam-jeuven mixtes.
- **Saisonnalité**: weak
- **Tendance**: Bifurcation: N-1 montrait stabilité 80-160u avec légère préférence 80u (8/12 commandes=67%). Septembre 2025 montre hausse à 160u (2/3 commandes récentes). Tendance: +33% vs N-1, mais nombre de points limité. Mois de septembre N-1: 1 seule commande (80u). Octobre N-1: donnée manquante. Hausse modérée +20% recommandée par prudence.
- **Outliers détectés**: 160u, 160u, 160u

**🧠 Raisonnement LLM:**
CHAÎNE DE RAISONNEMENT SYNTHÉTISÉE:

**PHASE 1 - ANALYSE RYTHMIQUE:**
- N-1 (2024): Pattern vendredi dominant (7/12 commandes) + jeudis sporadiques. Intervalle moyen: ~28 jours.
- Récent (3 derniers mois 2025): Rupture majeure du pattern. Cycle accéléré ~8-10 jours entre sept commandes. Mélange jeu/ven/mer sans régularité.
- Constat: Le rythme a fondamentalement changé. Client accélère sa fréquence de commande.

**PHASE 2 - FILTRAGE OUTLIERS:**
- Trois valeurs 160u en 5 commandes récentes (66%) vs une seule 80u.
- N-1: 160u = 5/12 (42%). 
- Détection: Hausse réelle de la demande (non outlier mais shift structurel).
- Aucune évidence de promotion/erreur (horaires normaux 08h-14h, dates cohérentes).

**PHASE 3 - SAISONNALITÉ:**
- Septembre N-1: 1 commande (80u). Septembre N: 2 commandes moyennes (120u).
- Impact saisonnier FAIBLE (données éparses, pas de pattern récurrent identifié).
- Poids marginal sur la prédiction.

**PHASE 4 - SYNTHÈSE DÉCISIONNELLE:**
Jeudi 2025-10-02 = jour atypique (peu de précédent). 
Baseline logique = Moyenne pondérée:
- Dernière 3 commandes (poids 60%): (160+80+160)/3 = 133u
- Moyenne N-1 (poids 40%): 107u
- Baseline = 133×0.6 + 107×0.4 = 79.8 + 42.8 = **122.6u ≈ 120u**

Ajustement tendance: +20% de prudence sur hausse réelle détectée → validé.

**RECOMMANDATION FINALE: 120 UNITÉS**
- Cible la tendance récente (hausse 80→160u confirmée par 3/5 commandes)
- Évite la surgonflage (ne pas sauter à 160u d'emblée sans jeudi précédent)
- Confidence MEDIUM: données fragmentées, jour inhabituel, mais pattern suffisant (5 pts récents).

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 14:17:46: 160u
- 2025-09-05 12:22:01: 80u
- 2025-08-14 08:19:07: 160u
- 2025-08-08 11:47:43: 80u
- 2025-08-07 12:26:12: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:06:54: 80u
- 2024-08-30 09:47:24: 160u
- 2024-08-12 09:07:12: 160u
- 2024-07-19 09:36:52: 80u
- 2024-06-28 10:23:12: 160u
- 2024-06-17 07:31:21: 80u
- 2024-05-31 10:28:10: 80u
- 2024-05-27 06:49:47: 120u
- 2024-04-30 06:38:23: 160u
- 2024-04-05 09:23:24: 80u
- 2024-03-22 10:12:21: 80u
- 2024-03-15 10:48:34: 80u

**✅ Quantité LLM**: 120u (confidence: medium)
**📊 Quantité Réelle**: 160u

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
| [PF0088] FILOU VOL AU VENT 800 GR | 8 | Stock prédit: -3.0u (-11j restants) → prédit 8u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:09:31.196Z*
