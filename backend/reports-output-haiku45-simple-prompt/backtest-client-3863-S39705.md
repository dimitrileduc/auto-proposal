# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 7,244 input + 3,170 output = 10,414 total


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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ❌ Non | 📊 Médiane |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern mixte détecté : Commandes principalement le vendredi (N-1), mais récemment basculé vers le mercredi (3 derniers mois). Intervalle actuel: ~2 semaines entre les commandes récentes (dernier: 2025-10-08 mercredi, précédent: 2025-09-24 mercredi). Historique N-1 montre un rythme quasi-hebdomadaire ou bi-hebdomadaire avec concentration les vendredis.
- **Saisonnalité**: weak
- **Tendance**: Stabilisation progressive à 32-48u avec pics occasionnels à 64u (événements exceptionnels). Dernière commande (2025-10-08): 16u = RUPTURE BAISSE. Moyenne N-1: ~41u. Moyenne récente (3 mois): 40u.
- **Outliers détectés**: 64u, 64u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ DÉTECTION RYTHMIQUE:
- N-1 (2024): Dominante VENDREDI (8 commandes sur ~12). Rythme régulier, cycle hebdo/bi-hebdo.
- 3 DERNIERS MOIS (2025): Basculement net vers MERCREDI. 3 commandes mercredi consécutives (10 sept, 24 sept, 8 oct).
- Intervalle actuel: 14 jours environ entre les commandes mercredi.
- ANOMALIE: Commande prédite le DIMANCHE 2025-10-12 = 2 jours après dernier mercredi. Hypothèse: Rattrapage de fin de semaine OU commande anticipée.

2️⃣ FILTRAGE OUTLIERS:
- Pics à 64u: 2024-07-19, 2024-05-24, 2024-04-19, 2025-07-14. Fréquence ~tous les 2-3 mois = ÉVÉNEMENTS SAISONNIERS (promotions été/printemps?).
- Baseline structurelle: 32-48u. Les 64u ne sont PAS la norme.
- SIGNAL BAISSE CRITIQUE: 2025-10-08 = 16u (moitié de la moyenne). Premier signal depuis 2 mois.

3️⃣ TENDANCE IMMÉDIATE:
- Dernière commande (2025-10-08): 16u ≠ historique régulier (32-48u)
- Moyenne 3 mois: (16+32+48+64)/4 = 40u
- Moyenne N-1: (32+48+48+16+64+32+32+64+48+64+32+32)/12 ≈ 41u
- Tendance stagnante à moyen terme, mais INFLÉCHISSEMENT VERS LE BAS en très récent.

4️⃣ EFFET JOUR DE SEMAINE:
- Dimanche = jour atypique. Si client commande dimanche, c'est rattrapage ou anticipation.
- Dernier vrai cycle: mercredi 2025-10-08 (16u).
- Prochain cycle normal: jeudi/vendredi 2025-10-10~11 → dimanche 2025-10-12 = décalage de 2-4 jours.
- Hypothèse: Client maintient son rythme bi-hebdo et cette commande dimanche rattrape le cycle mercredi précédent.

5️⃣ SYNTHÈSE PRÉDICTIVE:
- Baseline: 40u (moyenne historique)
- Trend actuel: Baisse vers 32u (dernière commande 16u = signal?)
- Saisonnalité oct N-1: 2024-10-04 = 32u. Octobre N-1 = période stable (pas pic).
- CONCLUSION: Retour à une demande "normale" post-pic été. Le 16u du 2025-10-08 pourrait être une déplétion temporaire ou erreur saisie.
- **RECOMMANDATION: 32u** = référence octobre stable + signal baisse récente = compromis prudent.
- Alternative considérée: 48u (moyenne) → jugé trop haut vu baisse. 16u jugé trop bas et non représentatif.

⚠️ CONFIANCE MEDIUM car:
+ Historique long et régulier (12 mois N-1)
+ Pattern clair (dominante 32-48u)
- Jour de commande atypique (dimanche)
- Signal baisse récent (16u) de faible clarté
- Petite base de données récente (4 points seulement sur 3 mois)

</details>


<details>
<summary><strong>2. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-hebdomadaire régulière, jour préférentiel historique: vendredi (N-1), migré vers mercredi (N). Cycle stable d'environ 7-14 jours.
- **Saisonnalité**: weak
- **Tendance**: Stable à 16u - pics de 32u en juin et janvier N-1 (probable one-shot promotionnel ou événementiel, non récurrent en octobre N)
- **Outliers détectés**: 32u, 32u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE :

1️⃣ **ANALYSE RYTHMIQUE** :
   - Historique N-1 : 12 commandes sur ~9 mois (février à octobre) → cycle d'~3-4 semaines
   - Jour préférentiel N-1 : VENDREDI (6 commandes sur 12 = 50%)
   - Derniers 3 mois (Période Récente) : Migration vers MERCREDI (3 commandes consécutives: 24/09, 10/09, 08/10)
   - Intervalle récent : 08/10 → prédiction 12/10 = 4 jours (court)
   - ⚠️ DATE DE PRÉDICTION = DIMANCHE (jour inhabituellement non commercial)
   
   → Le client commande typiquement mercredi (rythme actuel) ou vendredi (historique). Le dimanche 12/10 est un jour hors-cycle.

2️⃣ **FILTRAGE OUTLIERS** :
   - Pics de 32u identifiés : 
     * 26/01/2024 (vendredi) : N-1 distant
     * 14/06/2024 (vendredi) : N-1 distant (possiblement promotion estivale juin)
   - Pas de pics de 32u aux dates équivalentes d'octobre N-1 (04/10 = 16u)
   - ✅ Déclassement : Événements exceptionnels ponctuels, non récurrents en octobre
   - Baseline fiable : 16u (représente 10/12 commandes = 83% du dataset)

3️⃣ **SAISONNALITÉ OCTOBRE** :
   - N-1 (octobre 2024) : 1 seule commande le 04/10 → 16u
   - Pas d'amplification saisonnière identifiée en octobre
   - Impact saisonnier = FAIBLE (stable année sur année)

4️⃣ **SYNTHÈSE & DÉCISION** :
   - Demande de fond extrêmement régulière : 16u
   - Tendance : STABLE (pas de hausse, pas de baisse progressive)
   - Anomalie : Date de prédiction = DIMANCHE (jour inhalatuel)
     * Hypothèse 1 : Anticipation/report de commande prévue mercredi/vendredi → maintenir 16u
     * Hypothèse 2 : Erreur système ou commande exceptionnelle → données insuffisantes pour diverger
   - Règle d'or agro B2B : Ne pas surgonfler sans signal clair
   
   **RECOMMANDATION : 16 unités**
   - Alignement avec la demande récurrente établie
   - Pas d'élément justifiant une déviation
   - Confiance HAUTE : Pattern extrêmement régulier (variance minimale 16u/16u/16u derniers mois)


</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Intervalle très variables : 14 jours (08/10 vs 24/09), puis 72 jours avant (24/09 vs 14/07). Pattern hebdomadaire non identifiable sur les 3 derniers mois.
- **Saisonnalité**: weak
- **Tendance**: Demande stable à 16u (2 dernières commandes identiques) - le pic de 64u du 14/07 semble être un événement isolé (possibilité : promotion, commande client groupée, ou erreur de saisie)
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **RYTHME IDENTIFIÉ** :
   - 3 commandes seulement sur 3 mois → données limitées mais révélatrices
   - Intervalles chaotiques : 14j (08/10→24/09), puis 72j (24/09→14/07)
   - Aucun pattern hebdomadaire fixe détectable
   - Commande dimanche (12/10) = jour ATYPIQUE en B2B alimentaire (usines fermées habituellement)
   - Dernière commande : mercredi 08/10, soit il y a 4 jours

2. **FILTRAGE DES OUTLIERS** :
   - Pic de 64u le 14/07 = 4× la demande habituelle → Event exceptionnel (promotion client, commande anticipée, ou erreur)
   - Les 2 dernières commandes (24/09 et 08/10) = 16u exactement → **Baseline stable**

3. **IMPACT SAISONNALITÉ** :
   - Aucune donnée N-1 disponible → Impossible détecter saisonnalité automne
   - Impact = WEAK (par défaut sur données insuffisantes)

4. **TENDANCE ACTUELLE** :
   - Stable à 16u (dernières 2 observations concordantes)
   - Pas d'indication de hausse/baisse progressive
   - Le dimanche 12/10 peut indiquer une commande anticipée pour début de semaine

5. **DÉCISION FINALE** :
   - Demande de fond théorique = 16u (consensus dernier mois)
   - Pas de justification pour augmenter ("rattrapage" improbable après 4j)
   - Pas de justification pour baisser (stabilité observée)
   - **PRÉDICTION = 16 unités**

**Confiance = MEDIUM** (peu de données historiques, mais concordance forte sur les 2 dernières observations)

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 48u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 32u
- 2025-07-14 07:23:44: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 32u
- 2024-08-07 07:50:22: 48u
- 2024-07-19 07:16:19: 16u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 32u
- 2024-04-19 09:15:16: 32u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u
- 2024-02-23 08:44:27: 32u

**📊 Quantité Médiane (fallback)**: 32u
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-09-10 06:05:27: 16u
- 2025-07-14 07:23:44: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 16u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 16u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 16u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 16u
- 2024-03-22 09:26:53: 16u
- 2024-03-15 08:05:43: 16u
- 2024-02-23 08:44:27: 16u
- 2024-02-19 09:05:29: 16u
- 2024-01-26 13:59:24: 32u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 16u

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

*Rapport généré automatiquement le 2025-12-18T10:10:20.734Z*
