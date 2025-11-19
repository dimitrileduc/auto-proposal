# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 7
- **Tokens**: 6,519 input + 3,668 output = 10,187 total
- **Coût**: $0.0199 (~1.99¢)
- **Coût par produit LLM**: $0.0028


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 5 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score équilibré global |

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
| **MAE** | 37.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 62.3% | Erreur moyenne en % (complémentaire) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 96 | 43 | 53.0 | 123.3% | ✅ partial | 🤖 LLM |
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1521 | 1500 | 21.0 | 1.4% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - LLM: 96u vs Médiane: undefinedu (Réel: 43u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 43u
- 📉 **Erreur LLM**: 53u (123.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Intervalles temporels entre commandes:
- Entre dernières commandes (08:05:44 et 08:02:15): Presque simultanées (3 min 29 sec) - probablement une double commande
- Entre commandes précédentes: 
  2025-10-09 et 2025-09-22 : 17 jours
  2025-09-22 et 2025-09-10 : 12 jours
Intervalle moyen: environ 14-15 jours, légèrement irrégulier mais cohérent

2. Analyse des quantités:
- Commandes récentes: 43u (x2)
- Commande précédente: 500u (outlier significatif)
- Commande avant cela: 96u
Variations importantes, mais dernières commandes semblent converger autour de 40-100u

3. Recommandation conservatrice:
- Prendre la dernière commande standard comme référence
- Quantité recommandée: 96 unités
- Justification: proche de la moyenne récente, dans la fourchette de variation acceptable (±30%)

Stratégie: Commandé prudemment pour maintenir un stock tampon sans surstock.

**📅 Analyse Temporelle:**
Intervalles entre commandes légèrement irréguliers, moyenne ~14-15 jours. Présence de commandes très proches (quasi-simultanées) et d'un outlier à 500u.

**📊 Analyse Quantité:**
Quantités variables entre 43u et 500u, avec convergence récente autour de 40-100u. Variabilité importante mais pattern identifiable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1521u vs Médiane: undefinedu (Réel: 1500u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1521u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 21u (1.4%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour le produit PF3313:

1. Analyse des intervalles entre commandes:
- Intervalles quasi-réguliers: ~1 mois (précisément 30-32 jours)
- Dernière commande le 2025-10-09
- Prochaine commande prévisible fin novembre 2025

2. Analyse des quantités:
- Quantités historiques: 1728u, 1536u, 1494u, 1500u
- Variation entre -13% et +15% autour de la moyenne
- Moyenne arithmétique: 1564u
- Tendance légère à la baisse des volumes

3. Recommandation conservative:
- Choix de 1521u (proche de la moyenne)
- Correspond à une variation de -3% par rapport à la moyenne
- Reste dans la fourchette acceptable de ±30%
- Prend en compte la légère tendance baissière

Paramètres clés:
- Stabilité des intervalles de commande
- Variations de quantité dans les limites normales B2B
- Ajustement prudent mais minimal

**📅 Analyse Temporelle:**
Intervalles de commande réguliers:
- 2025-07-10 → 2025-08-14: 35 jours
- 2025-08-14 → 2025-09-10: 27 jours
- 2025-09-10 → 2025-10-09: 29 jours
Moyenne: ~30-32 jours, très cohérent

**📊 Analyse Quantité:**
Variation des quantités:
- Plus haute: 1728u
- Plus basse: 1494u
- Écart: ±15%
- Moyenne: 1564u
- Tendance légèrement baissière mais stable

**📈 Tendance détectée:** ❌ Non

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
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1680 | Stock prédit: 119.5u (1j restants) → prédit 1680u mais non commandé |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4256 | Stock prédit: 854.1u (5j restants) → prédit 4256u mais non commandé |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Stock prédit: -45.3u (-4j restants) → prédit 166u mais non commandé |


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
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | Stock suffisant: 156.2u (39j restants > seuil 30j) |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Stock suffisant: 77.6u (37j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:54:56.395Z*
