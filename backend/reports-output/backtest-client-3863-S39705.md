# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 4
- **Tokens**: 8,949 input + 2,646 output = 11,595 total
- **Coût**: $0.0665 (~6.65¢)
- **Coût par produit LLM**: $0.0166


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 32u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement croissant - 14j entre sept, 58j entre juil-sept
- **Saisonnalité**: weak
- **Tendance**: Baisse -67% (64u→48u→32u→16u sur dernières commandes)
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes récentes montrent:
- 14 juil (lun): 64u
- 10 sept (mer): 48u (58j plus tard)
- 24 sept (mer): 32u (14j plus tard)  
- 8 oct (mer): 16u (14j plus tard)
→ Pattern irrégulier avec stabilisation récente sur rythme bi-mensuel (mercredi)

**TENDANCE NETTE À LA BAISSE:**
Séquence claire: 64→48→32→16 = baisse constante de -25% à chaque commande
Cette décroissance systématique sur 3 mois suggère:
- Soit perte de parts de marché
- Soit rotation plus rapide du stock
- Soit ajustement à la demande réelle du client final

**SAISONNALITÉ N-1 FAIBLE:**
Oct 2024: 32u (4 oct)
La date de prédiction (13 oct 2025) est 5 jours après la dernière commande (8 oct: 16u)
→ Trop tôt pour une nouvelle commande selon le rythme récent de ~14j

**FILTRAGE OUTLIERS:**
64u (juillet) identifié comme pic - période estivale possible. Les 48u et 32u de N-1 sont cohérents avec la tendance actuelle.

**DÉCISION:**
Vu que la dernière commande date de 5 jours seulement, et que le rythme s'est stabilisé à ~14j, la probabilité d'une commande le 13 oct est FAIBLE. Si commande, elle suivrait la tendance baissière → 16u (continuation du pattern 64→48→32→16).

La prédiction prudente mais réaliste est 16u, alignée sur la demande la plus récente et la trajectoire observée.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 32u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: medium)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel irrégulier (~14-28j), migration vers mercredi en 2025
- **Saisonnalité**: weak
- **Tendance**: Stable avec volumes 32-48u, légère hausse fréquence
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 3 derniers mois montrent un pattern clair:
- 2025-07-14 (lun.) → 2025-09-10 (mer.): 58 jours [32u]
- 2025-09-10 (mer.) → 2025-09-24 (mer.): 14 jours [32u]
- 2025-09-24 (mer.) → 2025-10-08 (mer.): 14 jours [48u]
- 2025-10-08 (mer.) → 2025-10-13 (lun.): **5 jours seulement**

Le client a établi un rythme bimensuel en septembre (14j) avec commandes le mercredi. La dernière commande date du 08/10 (mer.), soit il y a 5 jours seulement. Ceci est TRÈS court par rapport au pattern établi.

**FILTRAGE OUTLIERS:**
Les quantités de 48u apparaissent 3 fois (août 2024, juillet 2025, octobre 2025) mais ne sont pas des outliers - elles correspondent à des commandes de restockage plus importantes dans un cycle normal. La baseline est 32u (majorité des commandes N-1).

**ANALYSE SAISONNALITÉ N-1:**
Octobre 2024 montrait: 04/10 avec 32u (commande unique ce mois). Impact saisonnier faible - pas de pattern fort identifiable.

**DÉCISION:**
Le délai de 5 jours depuis la dernière commande (08/10) est ANORMAL par rapport au rythme récent (14j). DEUX scénarios:
1. **Erreur de date prédiction** ou commande anticipée exceptionnelle → improbable
2. **Commande de rattrapage/complément** après une vente forte

La progression récente montre une accélération: 32u → 32u → 48u. La dernière commande à 48u + cycle très court suggère une demande soutenue. Cependant, commander 5 jours après suggère soit un besoin urgent, soit un volume plus important.

**PRÉDICTION:** 48u - volume correspondant au niveau récent atteint (08/10), cohérent avec une commande de complément rapide dans un contexte de demande accrue.

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance vers cycle ~14-28j. Récemment : 14j (10/09→24/09→08/10). Historique N-1 : intervalles variables (11-35j)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 16u maintenue sur 3 derniers mois et alignée avec historique N-1 (hors pics 32u)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 3 dernières commandes montrent un cycle régulier de ~14 jours (10/09→24/09→08/10). La prédiction pour le 13/10 intervient 5 jours après la dernière commande (08/10), ce qui est TROP TÔT pour un réapprovisionnement immédiat si on suit le cycle de 14j. CEPENDANT, le pattern historique N-1 montre une variabilité d'intervalle, et la date du 13/10 pourrait correspondre à une commande de réassort anticipé.

**FILTRAGE OUTLIERS**: Les commandes de 32u (14/06/2024 et 26/01/2024) sont clairement exceptionnelles - elles représentent un doublement ponctuel (promotion ou stock de sécurité). Toutes les autres commandes sur 20 mois = 16u strictement.

**SYNTHÈSE**: 
- Baseline ultra-stable : 16u (100% des commandes récentes)
- Pas de saisonnalité détectable (volumes identiques oct 2024 vs oct 2025)
- Tendance : STABLE (aucune dérive)
- Date de prédiction (lundi 13/10) = 5j après dernier ordre → Si commande à cette date, c'est pour maintenir le stock régulier à 16u

**DÉCISION**: La quantité la plus PROBABLE = 16u (pattern dominant absolu). Aucun signal ne justifie un doublement ou une variation.

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées: 14 jours puis 72 jours (rupture longue). Pattern hebdomadaire mercredi récent (2x consécutives)
- **Saisonnalité**: none
- **Tendance**: Baisse -75% (64u → 16u stabilisé)
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
**Analyse pas à pas:**

1. **RYTHMIQUE DÉTECTÉE**: 
   - Commande 64u le 14/07 (lundi) puis rupture de 72 jours
   - Reprise le 24/09 (mercredi) avec 16u
   - Nouvelle commande le 08/10 (mercredi) avec 16u (intervalle 14j)
   - Pattern émergent: rythme bimensuel le mercredi depuis septembre

2. **OUTLIERS & TENDANCE**:
   - 64u du 14/07 est clairement un outlier (4x supérieur aux commandes récentes)
   - Possible commande de rattrapage post-rupture estivale ou changement de besoin client
   - Depuis septembre: stabilisation à 16u/commande avec pattern régulier

3. **ABSENCE DE SAISONNALITÉ**:
   - Pas de données N-1 pour valider un cycle annuel
   - La période analysée (juillet-octobre) ne montre pas de pattern saisonnier identifiable

4. **DÉCISION**:
   - La prédiction porte sur le 13/10 (lundi), soit 5 jours après la dernière commande du 08/10
   - Le pattern récent montre un rythme ~14j entre commandes
   - Trop tôt pour une nouvelle commande selon le rythme bimensuel observé
   - Cependant, si commande intervient, volume attendu = baseline stabilisé à 16u
   - **Prédiction: 16u** (niveau de demande structurelle actuelle)

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

*Rapport généré automatiquement le 2025-11-20T09:04:17.789Z*
