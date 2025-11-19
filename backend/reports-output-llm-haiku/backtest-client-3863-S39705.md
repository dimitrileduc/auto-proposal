# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 4
- **Tokens**: 3,839 input + 1,693 output = 5,532 total
- **Coût**: $0.0098 (~0.98¢)
- **Coût par produit LLM**: $0.0025


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
| **MAE** | 10.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (complémentaire) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 40 | 48 | 8.0 | 16.7% | ✅ partial | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 32 | 16 | 16.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour [MF0042] MF Brotaufstrich Tomate Bärlauch 250g :

1. Analyse des intervalles temporels :
- Fréquence quasi-bimensuelle (tous les 10-15 jours)
- Dernier intervalle : 14 jours entre 2025-09-24 et 2025-10-08
- Régularité relativement stable dans les commandes

2. Analyse des quantités :
- Quantités variables : 16u, 32u, 48u, 64u
- Fluctuations probablement liées à des besoins opérationnels
- Dernières commandes convergent autour de 32 unités
- Variations respectent la fourchette de ±30% acceptable en B2B

3. Recommandation :
- Quantité conservative : 32 unités
- Correspond aux dernières commandes récentes
- Minimise le risque de surstock ou de rupture
- Aligné sur le comportement d'achat récent du client

**📅 Analyse Temporelle:**
Commandes régulières tous les 10-15 jours, avec une périodicité relativement stable

**📊 Analyse Quantité:**
Variations entre 16u et 64u, mais concentration récente autour de 32 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 40u vs Médiane: undefinedu (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 8u (16.7%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour le produit [MF0044]:

1. Analyse des intervalles temporels:
- Les commandes sont quasi-régulières, principalement tous les 10-15 jours
- Intervalle moyen: ~14 jours
- Dernier intervalle: 14 jours entre 2025-09-24 et 2025-10-08
- Stabilité temporelle : TRÈS BONNE

2. Analyse des quantités:
- Quantités principales: 32u et 48u
- Variation entre 16u et 48u
- Moyenne: 36,57u
- Médiane: 32u
- Mode: 32u 
- Variations dans la plage normale B2B (±30%)

3. Recommandation quantitative:
- Dernière commande: 48u
- Recommandation conservatrice: 40u
- Justification: Légèrement en-dessous du pic pour gérer le risque
- Variation standard respectée
- Stock de sécurité pris en compte

**📅 Analyse Temporelle:**
Commandes régulières, intervalle moyen de 14 jours, forte prévisibilité

**📊 Analyse Quantité:**
Variations normales entre 16u et 48u, centrées autour de 32-40u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit MF Delikatess Mayonnaise 250ml:

1. Analyse temporelle des intervalles:
- Intervalles quasi-réguliers de 2 semaines à 1 mois
- Seule exception: passage à 32u le 2025-06-25, puis retour à 16u
- Dernières commandes très stables: 16u répété 4 fois consécutivement

2. Analyse des quantités:
- Quantité standard: 16 unités
- Un seul pic à 32u (probablement commande exceptionnelle)
- 6 commandes sur 7 à 16u = forte cohérence
- Variations dans la norme acceptée (±30%)

3. Recommandation:
- Quantité recommandée: 16 unités
- Basée sur la répétition récente et la stabilité historique
- Confiance élevée dans cette recommandation

**📅 Analyse Temporelle:**
Intervalles réguliers de 2-4 semaines, avec une légère variabilité normale en B2B

**📊 Analyse Quantité:**
Quantité stable à 16u, un seul écart ponctuel à 32u, variations conformes aux attentes du secteur

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 32u vs Médiane: undefinedu (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit MF0062:

1. Analyse temporelle des intervalles:
- Les commandes ne sont pas totalement régulières
- Intervalles variables entre 12-45 jours
- Dernières commandes plus rapprochées (14 jours entre 2025-09-24 et 2025-10-08)
- Tendance récente suggère un rythme de commande plus fréquent

2. Analyse des quantités:
- Quantités variables: 16u, 32u, 64u
- Dernières commandes stabilisées à 16u
- Variations rentrant dans la norme B2B (+/-30%)
- Pas de tendance claire d'augmentation/réduction

3. Recommandation conservative:
- Basée sur les deux dernières commandes (16u)
- Ajustement à 32u pour couvrir une potentielle demande légèrement plus haute
- Permet de maintenir un stock tampon sans surstockage

**📅 Analyse Temporelle:**
Intervalles irréguliers, tendance récente à des commandes plus fréquentes (tous les 14 jours)

**📊 Analyse Quantité:**
Variations de quantités entre 16u et 64u, dernières commandes stabilisées à 16u

**📈 Tendance détectée:** ❌ Non

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

*Rapport généré automatiquement le 2025-11-19T15:55:53.518Z*
