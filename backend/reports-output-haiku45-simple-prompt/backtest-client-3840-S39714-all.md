# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 6
- **Tokens**: 13,854 input + 5,559 output = 19,413 total


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
| **MAE** | 29.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 3.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 57.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 92 | 43 | 49.0 | 114.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1510 | 1500 | 10.0 | 0.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - LLM: 92u vs Médiane: 0u (Réel: 43u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 92u (confidence: medium)
- 📊 **Baseline N-1**: 80u
- 📊 **Médiane**: 0u
- ✅ **Réel commandé**: 43u
- 📉 **Erreur LLM**: 49u (114.0%)
- 📉 **Erreur Médiane**: 43u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques avec possible cycle hebdomadaire interrompu. Dernière activité jeudi 09-10, avant cela lundi 22-09. Prédit pour lundi 13-10 (10 jours après). Pattern suggère commande occasionnelle sans régularité stricte (hebdo ou mensuelle non confirmée).
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive avec volatilité : pics à 155-165u (N-1), chute à 0-43u (récent). Tendance nette : demande affaiblie sur 3 mois, mais 2 commandes en sept-oct suggerent reprise partielle.
- **Outliers détectés**: 0u, 0u, 0u

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE (Chain of Thought) :**

**1. ANALYSE RYTHMIQUE:**
- Dernières commandes: 09-10 (jeu., 43u+0u), 22-09 (lun., 0u), 10-09 (mer., 0u)
- Intervalles : 17 jours (22/09→09/10), antérieurement mois sans commande
- Pas de cycle hebdo strict identifié. Les dates varient (lun/mer/jeu) sans régularité.
- Date prédiction: 13-10 (lundi) = 4 jours après la dernière spike (09-10)
- Hypothèse: Client peut passer commande sporadiquement, possible regain d'activité en octobre

**2. FILTRAGE OUTLIERS:**
- 3× zéro (09-10 lun, 22-09 lun, 10-09 mer): erreurs/non-livraison ou absence de besoin = À ignorer pour baseline
- 43u (09-10 jeu): dernière vraie commande, faible mais confirmée
- N-1 (155-165u août-juin): CONTEXTE de référence mais données anciennes (>1 an)
- Outliers détectés: [0, 0, 0] = 3 commandes nulles

**3. SAISONNALITÉ:**
- N-1 shows 155u (août) et 165u (juin) → demande historique forte
- Récent (sept-oct) shows 43u max, 0u fréquent → chute nette -75% vs N-1
- Impact: **WEAK** (baisse confirmée, mais pas d'événement saisonnier spécifique identifié à oct-2024)

**4. TENDANCE:**
- Direction: **Baisse progressive -75%** (N-1: 160u avg → Récent: 14u avg)
- Mais: Septembre-Octobre montre 2 commandes récentes (possibilité de rattrapage/reprise)
- Signal mixte: Baisse structurelle mais légère reprise fin sept/début oct

**5. BASELINE THÉORIQUE:**
- Approche 1 (dernière donnée): 43u
- Approche 2 (N-1 normalisé): 160u × 50% (baisse tendance) = 80u
- Approche 3 (moyenne pondérée 3 mois): (43+0+0)/3 = 14u (trop bas, ignore zéros)
- **BASELINE RETENU: 80u** (moyenne prudente entre stabilité structurelle et tendance baisse)

**6. AJUSTEMENTS:**
- Date lundi 13-10: Cohérent avec pattern lundi (22-09 lun). +15% rattrapage possible pour "lundi type"
- 80u × 1.15 = **92u** (arrondi à l'entier)
- Confiance: **MEDIUM** (données récentes sporadiques, baseline N-1 lointaine, pattern peu robuste)

**CONCLUSION:** Commande prévue à **92 unités** pour lundi 13-10, balançant baisse tendancielle vs possible regain d'activité lundi."

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1510u vs Médiane: 1518u (Réel: 1500u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1510u (confidence: high)
- 📊 **Baseline N-1**: 1510u
- 📊 **Médiane**: 1518u
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 10u (0.7%)
- 📉 **Erreur Médiane**: 18u (1.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire irrégulière (jeudi N-1, mercredi et jeudi récents). Dernières 3 commandes sur 25-26 jours (pattern ~8 jours en récent). Rupture du rythme N-1 (jeu/lun/jeu/mer/ven/mar) vs récent (jeu/mer/jeu tous proches)
- **Saisonnalité**: weak
- **Tendance**: Hausse prononcée +150% : N-1 moyenne 435u → Récent 1510u. Tendance structurelle à la hausse avec stabilisation autour de 1500u
- **Outliers détectés**: 758u, 758u, 594u, 484u, 334u

**🧠 Raisonnement LLM:**
ANALYSE APPROFONDIE:

1. **RYTHME ACTUEL** : Les 3 dernières commandes (25-26 jours d'intervalle) montrent une régularité nouvelle et DISTINCTE du N-1. Pattern hebdomadaire N-1 (jeu/lun/jeu/mer/ven) remplacé par un cycle plus serré et régulier en récent.

2. **IDENTIFICATION SAISONNALITÉ** : 
   - N-1 (avant octobre) : 334u-594u (moyenne ~436u)
   - Récent (août-octobre 2025) : 1494u-1536u (moyenne 1510u)
   - Saut brutal de +150-200%, NOT ponctuel (3 commandes cohérentes)
   - Conclusion : HAUSSE STRUCTURELLE DE DEMANDE, pas saisonnalité calendaire

3. **PATTERN STABILISÉ** : Les 3 dernières valeurs (1500, 1494, 1536) sont EXTRÊMEMENT STABLES (écart-type ~18u). Cela indique :
   - Client a augmenté son volume de base
   - Demande régulière à ce nouveau niveau
   - Pas d'événement one-shot (promotion temporaire aurait déjà décrue)

4. **EFFET JOUR DE SEMAINE** : 
   - N-1 : spread across jeu/lun/mer/ven/mar (pas de pattern)
   - Récent : jeu(1500), mer(1494), jeu(1536)
   - Date prédiction : lundi 2025-10-13
   - Pas de corrélation quantité-jour détectée

5. **DÉCISION FINALE** :
   - Baseline = moyenne récente = 1510u (très stable)
   - Aucun facteur d'ajustement temporel identifié
   - Lundi vs jeudi/mercredi récents = pas d'impact significatif
   - Recommandation = 1510u (alignement avec nouvelle demande stable)

**CONFIDENCE HIGH** : 3 points de données homogènes + rupture claire N-1/N = pattern très fiable.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:05:44: 0u
- 2025-10-09 08:02:15: 43u
- 2025-09-22 05:23:57: 0u
- 2025-09-10 06:26:25: 0u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-19 14:23:19: 155u
- 2024-06-12 13:16:37: 165u

**✅ Quantité LLM**: 92u (confidence: medium)
**📊 Quantité Réelle**: 43u

</details>


<details>
<summary><strong>2. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:02:15: 1500u
- 2025-09-10 14:18:40: 1494u
- 2025-08-14 06:52:41: 1536u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:27:40: 758u
- 2024-07-22 13:15:52: 758u
- 2024-05-02 07:07:22: 594u
- 2024-04-17 08:00:24: 244u
- 2024-01-19 12:40:26: 484u
- 2024-01-02 14:39:56: 334u

**✅ Quantité LLM**: 1510u (confidence: high)
**📊 Quantité Réelle**: 1500u

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
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1750 | Stock prédit: 183.4u (2j restants) → prédit 1750u mais non commandé |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4100 | Stock prédit: 966.7u (6j restants) → prédit 4100u mais non commandé |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Stock prédit: -41.5u (-4j restants) → prédit 166u mais non commandé |


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
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | Stock suffisant: 160.1u (40j restants > seuil 30j) |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Stock suffisant: 79.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:10:18.834Z*
