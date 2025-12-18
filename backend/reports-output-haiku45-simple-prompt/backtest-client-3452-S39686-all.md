# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S39686
- **Date commande** : 2025-10-13 07:49:42
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 9,520 input + 4,128 output = 13,648 total


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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | 130 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 98 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3301] DLL MAYONNAISE CITRON 300ML</strong> - LLM: 130u vs Médiane: 130u (Réel: 130u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 130u (confidence: medium)
- 📊 **Baseline N-1**: 130u
- 📊 **Médiane**: 130u
- ✅ **Réel commandé**: 130u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mixte identifié : commandes régulières les lundis (130u) avec pics exceptionnels (~390u) espacés de 30-45 jours (jeudi/vendredi). Pattern n-1 moins clair mais cohérent avec baseline 130u.
- **Saisonnalité**: weak
- **Tendance**: Stable à 130u en récurrence, avec pics 390u tous les 30-45 jours (événements ponctuels : promotions ou cycles de commande volumineux)
- **Outliers détectés**: 390u, 390u

**🧠 Raisonnement LLM:**

**ANALYSE CHAÎNE DE PENSÉE :**

1. **ANALYSE RYTHMIQUE (Crucial)**
   - Dernières commandes récentes : 2025-09-08 (lun, 130u) et 2025-09-01 (lun, 130u)
   - Avant : 2025-08-22 (ven, 390u) → 17 jours d'écart
   - Puis : 2025-08-14 (jeu, 130u) → 8 jours
   - Puis : 2025-08-11 (lun, 130u) → 3 jours
   - **Pattern détecté** : Les lundis sont des jours de commande standard (130u). Les pics (390u) surviennent tous les 30-45 jours (jeudi/vendredi).

2. **IDENTIFICATION OUTLIERS**
   - 390u en 2025-08-22 et 2025-07-11 (N-1) → Pics exceptionnels, environ 3x la demande standard
   - Ces pics ne semblent PAS liés à des saisonnalités (pas d'été/hiver marqué)
   - Hypothèse : commandes volumineux ponctuels (promotions client, reconstitution stock important) OU erreurs de saisie

3. **SAISONNALITÉ**
   - Pas de différence N-1 vs N en octobre/septembre/août (130u persistant)
   - Octobre N-1 : 130u (mardi 2024-10-01) vs attente dimanche 2025-10-12
   - Impact saisonnier : **FAIBLE** (pas de pic automnal observé)

4. **JOUR DE PRÉDICTION : DIMANCHE 2025-10-12**
   - Jour atypique : les commandes historiques se font Lun-Ven
   - Aucune commande le dimanche dans l'historique
   - Dimanche est un jour non-travail : peu probable qu'une vraie commande client arrive ce jour
   - **Interprétation** : Possible saisie différée (cmd du samedi/lundi enregistrée dimanche) OU test système
   - **Approche conservatrice** : Retourner à la baseline hebdomadaire standard = 130u

5. **SYNTHÈSE DÉCISION**
   - Baseline stable : 130u (pattern dominant)
   - Pics 390u : tous les 30-45j, derniers pics 2025-08-22 (20 jours) et N-1 2024-07-11
   - Prochain pic attendu : ~mi-septembre (raté) ou fin septembre/début octobre
   - Date prédiction (2025-10-12) : 20 jours après 2025-08-22 → **HORS CYCLE normal de pic**
   - Jour dimanche + stabilité récente des 130u → **Retour à baseline 130u**

**CONFIANCE MEDIUM car :**
- ✓ Données suffisantes (9 commandes sur 13 mois)
- ✓ Pattern clair (lundis + pics tous les 30-45j)
- ✗ Jour dimanche = atypique, risque d'interprétation
- ✗ Historique N-1 moins régulier que N (pattern émergent)
</reasoning>


</details>


<details>
<summary><strong>2. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire régulière le lundi (3 derniers mois) - Cycle primaire: lundi. Historique N-1 montre aussi des commandes mardi/jeudi mais moins fréquentes. Pattern actuel très stable: lundi = jour de commande principal
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (de 196u en N-1 septembre à 98u stable en période récente août-septembre 2025)
- **Outliers détectés**: 392u, 196u

**🧠 Raisonnement LLM:**
ANALYSE CHAIN OF THOUGHT:

1. **ANALYSE RYTHMIQUE**
   - Historique N-1 (2024): Commandes en septembre (23-24 sept = lun/mar) à 196u, août à 98u, juillet à 392u
   - Période récente (août-sept 2025): Séquence très régulière = lundi uniquement (8 sept, 1 sept, 25 août) à 98u + 2 exceptions (19 août mardi 98u, 14 août jeudi 196u)
   - OBSERVATION CRITIQUE: Rupture nette du cycle. Le client est passé d'un rythme irrégulier (lun/mar/jeu mixte, avec pics à 196-392u) à un pattern ULTRA-STABLE de 98u chaque lundi
   - Intervalle régulier: ~7 jours (commandes du 8, 1 sept = 1 semaine)

2. **JOUR DE PRÉDICTION**
   - Date demandée: 2025-10-12 = DIMANCHE
   - Jour de commande habituel récent: LUNDI
   - ANOMALIE: Dimanche n'est pas un jour ouvrable typique pour le B2B alimentaire
   - INTERPRÉTATION: Le client commande généralement le LUNDI. Le 12 octobre est un dimanche. La prochaine commande "naturelle" serait lundi 13 octobre. CEPENDANT, si prédiction pour le 12 (veille), c'est probablement une anticipation weekend = MAINTIEN du pattern habituel (98u) mais il faut noter cette anomalie calendaire

3. **FILTRAGE OUTLIERS**
   - 392u (juillet 2024) = pic isolé, contexte inconnu, non reproductible en N (absent)
   - 196u en N-1 vs. 98u stable en N = **baisse de 50%, CONFIRMÉE et MAINTENUE**
   - Cette baisse est structurelle, pas ponctuelle (4 commandes consécutives à 98u)

4. **SAISONNALITÉ**
   - N-1 septembre: 196u × 2 commandes
   - N septembre: 98u × 2-3 commandes
   - IMPACT SAISONNIER: Faible (la baisse est génétique au client, pas calendaire)
   - Pas d'effet "rentrée scolaire" détectable, pas de pic saisonnier obvious

5. **TENDANCE**
   - Direction: Baisse progressive -50% (196u → 98u) entre N-1 et N, puis **STABILISATION à 98u** (dernière donnée: 25 août)
   - Pas de dérive continue, mais plateau à 98u

6. **DÉCISION FINALE**
   - **Pattern dominant**: Lundi = 98u (régulier, prévisible, 4 occurrences récentes)
   - **Exceptions rares** (jeudi 196u, mardi 98u): Bruit marginal, non exploitable
   - **Prédiction**: Dimanche 12 oct pourrait être anticipation du lundi = Maintenir la baseline de **98u**
   - **Confiance**: HAUTE - Pattern ultra-régulier, seulement 3 mois de données mais unanimes

**JUSTIFICATION MAPE MINIMAL**: 
- Appliquer 98u = alignement parfait avec les 3 derniers mois (100% hit rate)
- Tout pic spéculatif (150, 196) = risque de surstock → MAPE dégradée
- Règle supply chain agroalimentaire: La précision > la prudence = maintenir baseline stable observée

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3301] DLL MAYONNAISE CITRON 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 10:16:06: 130u
- 2025-09-01 08:56:14: 130u
- 2025-08-22 08:51:08: 390u
- 2025-08-14 13:30:24: 130u
- 2025-08-11 07:01:13: 130u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 06:38:15: 130u
- 2024-09-09 11:24:26: 130u
- 2024-08-06 10:01:31: 130u
- 2024-07-11 10:01:48: 390u

**✅ Quantité LLM**: 130u (confidence: medium)
**📊 Quantité Réelle**: 130u

</details>


<details>
<summary><strong>2. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 10:16:06: 98u
- 2025-09-01 08:56:14: 98u
- 2025-08-25 08:08:15: 98u
- 2025-08-19 09:02:08: 98u
- 2025-08-14 13:30:24: 196u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 07:05:31: 196u
- 2024-09-23 11:56:39: 196u
- 2024-08-06 10:01:31: 98u
- 2024-07-11 10:01:48: 392u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 98u

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
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 | Stock prédit: 110.0u (4j restants) → prédit 130u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 294 | Stock prédit: -833.0u (-26j restants) → prédit 294u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:09:35.777Z*
