# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39676
- **Date commande** : 2025-10-13 07:37:52
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 80,086 input + 28,715 output = 108,801 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.6% | 29 produits prédits, 8 corrects |
| **Rappel** | 80.0% | 10 produits réels, 8 détectés |
| **F1-Score** | 41.0% | Score équilibré global |

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
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (8)

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
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RF003] REFIELD Maïs 500G  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très irrégulières, sans cycle défini. Dernière commande jeudi 2025-10-09 (3j avant la prédiction dimanche). Historique N-1 montre des commandes sporadiques (lun., jeu., mar.) sans pattern récurrent. Pas de cycle hebdomadaire ou mensuel identifiable.
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u - toutes les commandes récentes (3 derniers mois) et N-1 sont au niveau 1u. Aucune hausse ou baisse progressive détectée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE** 
   - Dernière commande: 2025-10-09 (jeudi) = 3 jours avant la prédiction (dimanche)
   - Intervalles entre commandes récentes: 89j (08-11 à 10-09), 66j (08-05 à 10-09)
   - Pas de pattern hebdomadaire régulier (lun., mar., jeu. alternent)
   - Pas de cycle mensuel identifiable
   - Rythme: très irrégulier, demande sporadique/événementielle

2. **FILTRAGE OUTLIERS**
   - Toutes les quantités = 1u (2024: 2u, 1u, 1u; 2025: 1u, 1u, 1u)
   - Le pic à 2u (2024-08-05) est un événement isolé N-1, non répété
   - Pas d'indication de promotion ou d'erreur spécifique
   - Baseline stable: 1u

3. **SAISONNALITÉ**
   - N-1 (oct 2024): pas de données à cette période
   - Pas de pattern saisonnier détectable
   - Impact saisonnier: FAIBLE

4. **TENDANCE**
   - Direction: STABLE à 1u
   - Aucune hausse/baisse progressive
   - 6 commandes sur 6 = 1u (sauf 1 exception 2u en N-1)

5. **DÉCISION FINALE**
   - Demande irrégulière mais constante à 1u quand elle se manifeste
   - Prédiction dimanche (jour non-cycle): ne change pas l'analyse vue l'irrégularité
   - Baseline = 1u
   - Recommended = **1u** (minimum viable, aligné avec le pattern récent)
   
CONFIANCE MEDIUM: données limitées (6 points), pas de pattern fort, mais cohérence maximale sur la valeur 1u justifie une décision nette.

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très instable - Données insuffisantes. Dernière commande: jeudi 2025-10-09, commande précédente: lundi 2025-09-01 (38 jours d'écart). Aucun cycle régulier détectable.
- **Saisonnalité**: none
- **Tendance**: Données trop limitées pour établir une tendance fiable. Demandes individuelles: 1u (récente) et 2u (ancienne).
- **Outliers détectés**: 1u, 2u

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE DE LA SITUATION:

1. **DONNÉES DISPONIBLES** : Seuls 2 points de commande en 39 jours
   - 2025-09-01 (lundi): 2u
   - 2025-10-09 (jeudi): 1u
   - Intervalle: 38 jours entre les deux commandes

2. **PROBLÈME MAJEUR - Données insuffisantes**:
   - Aucune répétition de pattern observable
   - Impossible de confirmer un cycle hebdomadaire (lun/jeu varient)
   - Impossible de détecter saisonnalité (pas de N-1)
   - Seul 2 observations pour ~40 jours de suivi

3. **ANALYSE DU RYTHME**:
   - Intervalle 38j très irrégulier → pas de cycle 7j ou 30j
   - Dates de commande non alignées (lundi vs jeudi)
   - Possibilité: Client commande uniquement quand en rupture de stock (demand-driven)
   - Pas d'évidence de "rattrapage" ou effect saisonnier

4. **HYPOTHÈSES DE TRAVAIL**:
   - Le client consomme ces chips de manière stable mais passive (commandes rares)
   - Quantités modestes (1-2u) suggèrent consommation B2B faible ou test de marché
   - La dernière commande plus basse (1u vs 2u) ne forme pas une tendance baissière probante

5. **DÉCISION FINALE**:
   - Baseline: Moyenne simple = (2+1)/2 = 1.5u
   - Arrondir à **2u** (dernière commande 1u + buffer conservateur)
   - Rationale: Préférer la stabilité plutôt que la baisse sur 1 seule observation
   - La prédiction reste hautement spéculative (confidence: LOW)

⚠️ **RECOMMANDATION STRATÉGIQUE**: 
Solliciter auprès du client des informations qualitatives: cycle de consommation réel, volumétrie à 6/12 mois, périodes d'intensité commerciale. Cette demande faible et irrégulière masque potentiellement un potentiel croissance inexploité.

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern très irrégulier - Commandes espacées (72j entre juillet et septembre, 44j entre septembre et octobre). Aucun cycle hebdomadaire ou mensuel détectable.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u - Pas de tendance haussière ou baissière significative. Moyenne: 1.33u (arrondie à 1u en pratique).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

ANALYSE DÉTAILLÉE (Chain of Thought):

1. **ANALYSE RYTHMIQUE**
   - 3 commandes sur 3+ mois → données EXTRÊMEMENT limitées
   - Intervalles: 72 jours (2025-07-18 → 2025-09-01), puis 44 jours (2025-09-01 → 2025-10-09)
   - Aucun pattern régulier détectable (hebdomadaire, mensuel ou 2-3 jours)
   - Le client ne commande PAS sur un cycle prévisible
   - La prédiction pour dimanche 2025-10-12 n'a PAS de base temporelle fiable

2. **ANALYSE VOLUMÉTRIQUE**
   - Quantités: 1u (18-jul), 2u (01-sep), 1u (09-oct)
   - Moyenne: (1+2+1)/3 = 1.33u
   - Amplitude très faible (1-2u) → produit low-volume pour ce client
   - Les 2u du 01-sep n'ont pas de précédent immédiat → pourrait être one-shot, pas outlier notable

3. **CONTEXTE AGROALIMENTAIRE B2B**
   - Produit premium bio (chips thym/romarin 125g) → niche, distribution selective
   - Client: comportement d'achat très sporadique/opportuniste
   - Pas de N-1 → impossibilité d'identifier saisonnalité (été vs hiver)
   - Volume ultra-faible → client secondaire ou test produit

4. **GESTION DU JOUR (DIMANCHE)**
   - Prédiction sur un dimanche (jour non-travail) → client ne commande probablement PAS ce jour-là
   - Les données montrent commandes en semaine (lun, jeu, ven)
   - Contexte: il est possible que le client commande le jeudi précédent (09-oct était jeudi) et ait "rattraper" sa consommation

5. **DÉCISION FINALE**
   - Données insuffisantes (3 points) → Confiance BASSE par construction
   - Tendance: STABLE (pas de hausse/baisse, juste volatilité de faible volume)
   - Saisonnalité: NONE (pas de données N-1, produit bio sans pic saisonnier clair)
   - Pattern: IRRÉGULIER → aucune raison de dévier de la baseline historique

**Recommandation**: **1 unité**
   - Basée sur la tendance dominante (1u apparaît 2 fois / 3 commandes)
   - Plus prudent que la moyenne (1.33u) face à la très faible fréquence
   - Aligné avec le comportement sporadique du client
   - Évite la sur-prédiction en contexte de faible confiance


</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, aucun cycle fixe détecté. Distribution: 22/09 (lun), 01/09 (lun), 05/08 (mar), 18/07 (ven). Intervalles variables: 52 jours, 27 jours, 18 jours entre commandes.
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités, pas de saisonnalité N-1 disponible pour comparaison. Demande très faible et sporadique.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1. **ANALYSE RYTHMIQUE CRITIQUE**: L'historique disponible montre 4 commandes sur ~3 mois seulement, avec des intervalles extrêmement irréguliers (52j → 27j → 18j). Aucun pattern hebdomadaire ou mensuel établi. Les deux dernières commandes (22/09 et 01/09) sont toutes deux en lundi, mais séparées de 21 jours - insuffisant pour confirmer un cycle lundi de 21-30j.

2. **FILTRAGE OUTLIERS**: Aucun outlier détecté. Toutes les quantités oscillent entre 1-2u, sans pic exceptionnel suggérant une promotion ou erreur.

3. **SAISONNALITÉ**: Impossible à évaluer faute de données N-1. Pas de profil saisonnier identifié.

4. **TENDANCE**: Stable mais très faible (moyenne 1.25u). Légère augmentation possible vers 2u (2 des 4 dernières commandes), mais données insuffisantes pour confirmer.

5. **CONTEXTE MÉTIER**: ReBEL chips premium & bio (125g) = produit positionnement premium en B2B. Volumes très réduits = probablement petit client ou phase de test commercial.

6. **PRÉDICTION DIMANCHE 12/10**: Date hors cycle habituel (pas de lundi). Client ne commande jamais le week-end dans l'historique.

**DÉCISION**: Baseline conservatrice de 1.5u (moyenne entre 1-2) arrondie à **1 unité** étant donné:
- Dernière commande il y a 20 jours (22/09) = stock probablement suffisant
- Pas de rattrapage visible
- Dimanche = jour atypique pour une B2B agro
- Données insuffisantes = risque élevé d'erreur

**CONFIANCE: LOW** - Données trop éparses (4 pts), pattern inexistant, absence N-1, et prédiction sur jour non-standard pour ce client.

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier détecté - Commandes espacées (lun 22/09, lun 01/09, ven 18/07). Pas de cycle hebdomadaire fixe identifié. Intervalles variables: 21 jours (22/09→01/09) et 45 jours (01/09→18/07). Demande de prédiction: dimanche 12/10/2025 (hors jours de semaine standards pour commandes B2B).
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - Aucune hausse ou baisse observée sur les 3 commandes. Quantité constante malgré intervalles irréguliers.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE DE LA QUALITÉ DES DONNÉES:
• Données très limitées: Seulement 3 commandes sur ~3 mois (juillet-septembre 2025)
• Aucune donnée N-1 pour comparer saisonnalité
• Pattern chaotique: Les intervalles (45j, 21j) ne suggèrent pas de cycle régulier
• Point critique: La prédiction porte sur un DIMANCHE (12/10/2025), jour inhabitual pour commande B2B

ANALYSE RYTHMIQUE:
1. Intervalles observés: 45 jours (18/07→01/09), puis 21 jours (01/09→22/09)
2. Jours de semaine: Vendredi (18/07), Lundi (01/09), Lundi (22/09)
3. ANOMALIE: Pas de cycle hebdomadaire fixe. Les commandes ne suivent pas un jour récurrent (pas chaque vendredi, ni chaque lundi)
4. Implication: Client potentiellement irrégulier ou commandes basées sur stock réel plutôt que calendrier

GESTION DE LA DATE DIMANCHE:
• Le dimanche 12/10 est un jour non-standard pour B2B agroalimentaire
• Hypothèses raisonnables:
  - Erreur de saisie/date système (client commande le vendredi 10/10 ou lundi 13/10)
  - Client utilise un système automatisé sans respect du calendrier
  - Demande exceptionnelle programmée
• CHOIX: Traiter comme une commande normale malgré l'anomalie de jour

STABILITÉ DE LA DEMANDE:
• Baseline constante: 2u à chaque commande (100% de stabilité)
• Aucun trend haussier/baissier
• Aucun outlier détecté (pas d'événements promotionnels ou ponctuels)

PRÉDICTION FINALE:
Baseline = 2 unités (constant observé)
Coefficient saisonnalité = 1.0 (aucune donnée N-1, pas de pattern saisonnier identifié)
Ajustement jour hors-cycle = 0 (demande dimanche = maintien de la demande standard)

**Quantité prédite = 2 unités**

CONFIANCE BASSE (low):
• Historique court (3 points) → insuffisant pour certitude statistique
• Pas de pattern régulier discernable
• Pas de comparaison N-1
• Date de prédiction atypique (dimanche)
→ Recommandation: Valider auprès du client si possible, ou attendre plus de données historiques"

</details>


<details>
<summary><strong>6. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern détectable - pas de donnée disponible
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - pas d'historique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
SITUATION CRITIQUE : Absence totale de données historiques pour cette prédiction. Contexte: - PAO01 PAOLA cola verre 250ml - Date demandée: 2025-10-12 (dimanche) - N-1: Aucune donnée disponible (pas de saisonnalité identifiable) - 3 derniers mois: Aucune commande enregistrée

ANALYSE:
1. IMPOSSIBILITÉ D'ANALYSE RYTHMIQUE: Sans historique, impossible d'identifier un pattern hebdomadaire, mensuel ou saisonnier.
2. FILTRAGE D'OUTLIERS: Néant - aucune donnée à analyser.
3. ABSENCE DE TENDANCE: La recommandation de dimanche (jour traditionnellement faible pour l'agroalimentaire B2B) sans données complique davantage.

DÉCISION - PRÉDICTION MINIMALE:
Recommandation: 1 unité (seuil minimal)
Justification: En absence totale de données historiques et d'informations contextuelles, il est impossible d'appliquer une méthodologie précise. Pour un client sans commandes enregistrées, une commande initiale de 1 unité est la prédiction par défaut, dans l'attente de données futures pour affiner les prévisions.

Confiance: TRÈS BASSE (low) - Cette prédiction est un point de départ empirique.

RECOMMANDATION OPÉRATIONNELLE:
✓ Contactez le client pour obtenir:
  1. Historique antérieur (N-2, N-3)
  2. Volume de consommation estimé/budget
  3. Fréquence de commande préférée
  4. Calendrier spécifique (promotions, événements)
✓ Une fois les données collectées, la prédiction pourra atteindre une confiance "high"

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern inconnu - données insuffisantes
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
SITUATION CRITIQUE - DONNÉES MANQUANTES : Aucune commande historique disponible (N-1 vierge, 3 derniers mois vierges). Il est impossible d'analyser un rythme, une saisonnalité ou une tendance sans base de données. La prédiction pour le 2025-10-12 (dimanche) ne peut reposer que sur une hypothèse par défaut. En contexte B2B Agroalimentaire, une quantité de 1 unité est proposée par défaut pour : (1) amorcer le suivi, (2) tester la disponibilité/fiabilité client, (3) minimiser le risque de surstock en l'absence de pattern confirmé. ACTION RECOMMANDÉE : Collecter immédiatement l'historique complet de ce client (au minimum 12 mois) avant toute prédiction fiable. MAPE potentiel : Très élevé en l'absence de données.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-08-11 09:21:12: 1u
- 2025-08-05 10:30:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:33:27: 2u
- 2024-06-20 06:56:28: 1u
- 2023-11-07 08:16:41: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:45:30: 1u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 1u
- 2025-08-05 10:30:50: 1u
- 2025-07-18 08:34:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 09:41:05: 2u
- 2025-09-01 07:18:56: 2u
- 2025-07-18 08:34:46: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (21)

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
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: 0.9u (28j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.9u (21j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.9u (26j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 1.8u (21j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: 0.9u (12j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.9u (14j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock prédit: 1.8u (22j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 2 | Stock prédit: -0.7u (-7j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.5u (19j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -0.8u (-17j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.8u (-27j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.9u (-29j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.6u (-37j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -0.8u (-27j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: 0.1u (10j restants) → prédit 1u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 1 | Stock prédit: -0.7u (-45j restants) → prédit 1u mais non commandé |


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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 1.0u (40j restants > seuil 30j) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock suffisant: 0.9u (36j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T10:09:59.750Z*
