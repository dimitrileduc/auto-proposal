# Rapport Backtest - Client BVBA DRINK & FOOD

## Contexte

- **Client** : BVBA DRINK & FOOD (ID: 3755)
- **Commande réelle** : S39706
- **Date commande** : 2025-10-14 06:43:12
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 5
- **Tokens**: 11,998 input + 4,339 output = 16,337 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 2.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 80u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes généralement espacées de 2-4 semaines, sans jour fixe récurrent. Pattern irrégulier mais avec occurrence dominante le lundi (4 commandes sur 9 en période récente)
- **Saisonnalité**: weak
- **Tendance**: Stable à 80u avec pics occasionnels à 160u
- **Outliers détectés**: 160u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Intervalles entre 3 derniers mois: 18j (25/8→29/9), 17j (23/7→25/8), 8j (31/7→23/7 impossible, relecture: 31/7→23/7 = impossible)
   - Relecture correcte: 29/9 | 11/9 (18j) | 25/8 (17j) | 31/7 (25j) | 23/7 (8j)
   - Intervalles très irréguliers: pas de cycle quotidien fixe
   - Jours variés (lun, jeu, mer, lun) → pas de pattern jour-fixe stricto sensu
   - MAIS: Lundi représente 4/5 commandes récentes → possible préférence lundi (cohérent avec date prédiction: lundi 13/10)

2. **FILTRAGE OUTLIERS**
   - Pics à 160u identifiés (N-1: 2024-06-12, 2024-04-22; aucun en période récente)
   - Fréquence: ~1/5 commandes = 20% des cas
   - Interprétation: Pics exceptionnels (promotions, stock client bas) → NOT part du baseline
   - Tendance N-1: 4 pics 160u / 12 commandes = 33% (taux supérieur à N-2025: 0/5)
   - Saisonnalité Oct-2024 vs Oct-2025: N-1 montre 80u stable (pas de pic enregistré en oct 2024)

3. **SAISONNALITÉ**
   - Octobre 2024: Pas de donnée précise pour 13/10/2024
   - Dernier point N-1 proche: 24/9/2024 = 160u (pic)
   - Autres sept 2024: aucun → impact faible
   - Conclusion: Saisonnalité FAIBLE (variance N-1 limitée, pas de pattern saisonnier Oct spécifique)

4. **TENDANCE ACTUELLE**
   - Moyenne récente (3 mois): (80+80+80+80+80)/5 = 80u
   - Écart-type très faible
   - Stabilité maximale → AUCUNE hausse de demande détectée
   - Dernière commande 29/9 = 80u (baseline confirmée)

5. **DÉCISION FINALE**
   - Date 2025-10-13 = LUNDI (cohérent avec 4/5 récentes)
   - Pas de prédicteurs d'exception (promo connue, rupture trend)
   - Baseline 80u est le mode de distribution
   - Pics 160u = événements rares (20%) → à ne pas systématiser
   - Confiance HIGH: pattern très régulier et stable depuis 6 mois

**RECOMMANDATION: 80u** (plus probable, minimise MAPE vs risk de surstock)

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, majorité les mardis/mercredis. Dernière commande 16-sep-2025 (mardi). Intervalle moyen ~30j sur N-1, mais derniers 3 mois très fragmentés (intervalles: 22j, 25j, 37j). Pas de cycle hebdomadaire strict.
- **Saisonnalité**: weak
- **Tendance**: Hausse légère +20% (N-1 avg 2.3u → Récent avg 2.3u stable, mais pic à 6u en oct N-1 non confirmé récemment)
- **Outliers détectés**: 6u, 4u, 4u

**🧠 Raisonnement LLM:**
ANALYSE CHAIN-OF-THOUGHT:

1. **RYTHMIQUE & CYCLES**
   - N-1 (2023-2024): Commandes très sporadiques (intervalles 20-130j). Aucun jour fixe apparent.
   - Récent (3 derniers mois): 16-sep (mar) 3u, 25-aug (lun) 3u, 31-jul (jeu) 1u
   - Intervalle récent: 22j (31jul→25aug), 22j (25aug→16sep) → Possible cycle ~22-25j
   - DATE PRÉDICTION: 13-oct-2025 (lundi) = 27j après dernière commande (16-sep). Dépasse légèrement le cycle habituel (+5j) → LÉGER RATTRAPAGE possible.

2. **FILTRAGE OUTLIERS**
   - N-1 pics: 6u (13-oct-2023, vendredi) et 4u (25-jun & 12-jun) 
   - Dates N-1 ne correspondent PAS à la date prédiction (13-oct vs 13-oct-2023 oui, mais en vendredi) → Pas de saisonnalité calendaire confirmée
   - 6u classé OUTLIER (possible promo/erreur), pas confirmé récemment
   - Distribution stable: moyenne globale ~2.3u

3. **TENDANCE**
   - N-1 moyenne: (2+1+2+4+4+2+1+3+1+2+6)/11 = 2.5u
   - Récent moyenne: (3+3+1)/3 = 2.3u → Quasi stable, légère baisse du pic
   - Pas de hausse nette confirmée → Tendance: STABLE

4. **SAISONNALITÉ**
   - Octobre N-1: 1 commande (2u) + 1 pic (6u) = profil pas répétitif
   - Pas de pattern saisonnier fort identifiable
   - Impact: WEAK

5. **DÉCISION**
   - Baseline: 2.5u (demande médiane stable)
   - Cycle 22-25j + date à j+27 → léger retard de rattrapage (+5-10%)
   - Formule: 2.5u × 1.0 (pas de tendance) + buffer rattrapage minimal = 2.5u → ARRONDIR à 3u
   - 3u: sécurise le léger retard sans surstock
   - Confiance MEDIUM: peu de données récentes (3 mois seulement), rythme peu régulier

PRÉDICTION FINALE: 3 unités
- Justification: Demande de fond 2.5u + léger effect rattrapage du délai (+20%), arrondi à l'entier supérieur pour minimiser rupture en agro B2B.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 15:25:16: 80u
- 2025-09-11 08:18:04: 80u
- 2025-08-25 08:11:04: 80u
- 2025-07-31 05:42:22: 80u
- 2025-07-23 08:42:42: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:11:41: 160u
- 2024-08-21 11:24:26: 80u
- 2024-08-13 06:35:30: 80u
- 2024-07-25 06:08:11: 80u
- 2024-06-12 13:04:35: 160u
- 2024-06-06 09:56:07: 80u
- 2024-05-27 08:24:25: 80u
- 2024-05-03 12:12:17: 80u
- 2024-04-22 11:43:15: 160u
- 2024-04-08 12:25:11: 80u
- 2024-03-20 08:07:07: 80u
- 2024-02-29 06:52:13: 80u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 05:58:23: 3u
- 2025-08-25 08:11:04: 3u
- 2025-07-31 05:42:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:11:41: 2u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 2u
- 2024-06-25 09:29:04: 4u
- 2024-06-12 13:04:35: 4u
- 2024-05-27 08:24:25: 2u
- 2024-05-03 12:12:17: 1u
- 2024-04-25 08:06:34: 3u
- 2024-03-20 08:07:07: 1u
- 2023-12-12 09:14:02: 2u
- 2023-10-13 09:09:05: 6u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (2)

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
| [PF0077] FILOU PROVENCALE 5 L | 1 | Stock prédit: -1.4u (-27j restants) → prédit 1u mais non commandé |
| [PF3272] JF PEPPER MAYONNAISE 925ML | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:09:54.626Z*
