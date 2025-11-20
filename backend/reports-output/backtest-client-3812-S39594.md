# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S39594
- **Date commande** : 2025-10-08 06:30:49
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 16,503 input + 4,633 output = 21,136 total
- **Coût**: $0.1190 (~11.90¢)
- **Coût par produit LLM**: $0.0149


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (6)

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
| [MF0030] MF Tarti Mangue Curry 250g  | 24 | 16 | 8.0 | 50.0% | ✅ partial | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 16 | 16 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 24u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 24u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 8u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance hebdomadaire/bi-hebdomadaire (8-18 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Hausse récente +100% (16u → 32u sur dernière commande)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Les commandes sont espacées de 4j, 7j, 8j, 15j et 34j. Pattern irrégulier sans jour fixe. La dernière commande date du 29/09 (lundi), soit 9 jours avant la prédiction du 08/10 (mercredi). Ce rythme correspond au pattern observé.

**Analyse de tendance:** Jusqu'à fin août, le produit affiche une demande stable à 16u sur 4 commandes consécutives. La commande du 29/09 double à 32u - possiblement un rattrapage après 34 jours sans commande (vs 4-15j habituellement), ou une réelle hausse de demande.

**Filtrage outliers:** Le 32u pourrait être un effet rattrapage post-longue pause, mais sans données N-1 pour confirmer un pic saisonnier ponctuel, je traite cela comme un signal de hausse structurelle modérée.

**Décision:** Sans saisonnalité détectable et face à un signal mixte (stabilité historique 16u + doublement récent), j'applique une approche pondérée progressive. Baseline 16u + ajustement partiel vers le 32u récent = **24u** (point médian conservateur). Si le 32u reflète une nouvelle normalité, la prochaine commande le confirmera. En agro B2B, cette approche équilibre précision et prudence face à l'incertitude du signal.

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (1 semaine à 6 semaines), pas de jour fixe identifié
- **Saisonnalité**: weak
- **Tendance**: Baisse -50% (de 32u moyenne vers 16u récurrent)
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes récentes montrent un pattern irrégulier sans jour fixe : 14/07 (lun), 07/08 (jeu), 11/08 (lun), 19/08 (mar), 29/09 (lun). Les intervalles varient de 4 jours à 6 semaines. La dernière commande date du 29/09, soit 9 jours avant la date de prédiction (08/10).

**FILTRAGE OUTLIERS**: Le 48u du 28/08/2024 (N-1) apparaît comme un outlier - il est 3x supérieur aux commandes récentes. Aucun pic similaire n'est observé en 2025.

**TENDANCE RÉCENTE**: Baisse nette de la demande. Les 3 derniers mois montrent : 32u (14/07), puis stabilisation à 16u (07/08, 11/08, 29/09) avec une exception à 32u (19/08). La quantité modale actuelle est clairement 16u (apparaît 3 fois sur 5).

**SAISONNALITÉ**: Impact faible. Le 48u de N-1 fin août ne se reproduit pas en 2025. La date du 08/10 n'a pas d'historique comparable.

**DÉCISION**: La demande s'est stabilisée à 16u depuis début août. Le pattern récent montre que 16u est devenu la nouvelle baseline, avec un seul pic à 32u qui peut être considéré comme exceptionnel. Pas de signal de rattrapage imminent. Prédiction: 16u.

</details>


<details>
<summary><strong>3. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: high)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération récente - intervalles de 4j, 8j, 41j, 35j entre commandes. Aucun jour fixe détecté.
- **Saisonnalité**: none
- **Tendance**: Baisse nette -67% (48u→16u) puis stabilisation absolue à 16u sur 5 dernières commandes
- **Outliers détectés**: 48u, 32u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **RYTHMIQUE:** Historique fragmenté montrant des commandes espacées et irrégulières en N-1 (janvier puis août 2024). En 2025, accélération notable avec 5 commandes sur 3 mois (juil-sept), mais sans jour fixe - mix lundi/mardi/jeudi suggérant un réapprovisionnement basé sur le niveau de stock plutôt qu'un calendrier fixe.

2. **OUTLIERS & TENDANCE:** Les 48u (jan 2024) et 32u (août 2024) sont clairement exceptionnels. Depuis juillet 2025, stabilisation PARFAITE à 16u sur 5 commandes consécutives sans aucune variation - c'est un signal très fort. Cette quantité de 16u représente probablement un format de conditionnement standard ou une taille de lot optimale pour ce client.

3. **SAISONNALITÉ:** Aucun pattern saisonnier détectable. La date de prédiction (8 octobre, mercredi) ne correspond à aucun événement spécial en N-1. Le produit (tartinade houmous) n'a pas de forte saisonnalité intrinsèque.

4. **DÉCISION:** La régularité absolue des 5 dernières commandes à 16u constitue le signal le plus fiable. Aucun élément n'indique une rupture imminente de ce pattern. La prochaine commande suivra cette norme établie.

**PRÉDICTION: 16 unités** (confiance haute basée sur la stabilité récente indiscutable)

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance hebdomadaire (7-12 jours), commandes principalement en début de semaine (lundi-mardi)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 16u (baseline), pic exceptionnel de 48u le 26/08 à écarter
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes montrent un pattern irrégulier mais relativement fréquent: 7/08→11/08 (4j), 11/08→19/08 (8j), 19/08→26/08 (7j). Depuis la dernière commande du 26/08, il s'est écoulé 43 jours jusqu'au 08/10, ce qui représente une rupture significative du rythme habituel (7-12j). Les commandes se font principalement en début de semaine.

**FILTRAGE OUTLIERS**: Le pic de 48u du 26/08 est clairement exceptionnel (3x la norme). Les 4 autres commandes sont toutes à 16u, établissant une baseline très stable. Sans données N-1, impossible de confirmer si c'était une promotion saisonnière, mais la constance avant/après suggère un événement ponctuel (promotion, rattrapage stock).

**DÉCISION**: Malgré la rupture de 43 jours (qui pourrait suggérer un rattrapage), l'absence de commande depuis si longtemps en B2B agro peut indiquer: (1) changement de fournisseur temporaire, (2) stock suffisant, ou (3) retour à un rythme normal. La baseline de 16u est extrêmement stable (4/5 commandes). En visant la précision MAPE, je privilégie la quantité modale de 16u plutôt qu'un rattrapage hypothétique qui augmenterait l'erreur si le client revient à son pattern normal. Confiance medium car la rupture temporelle crée de l'incertitude.

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 15-45 jours sans pattern fixe
- **Saisonnalité**: weak
- **Tendance**: Stable - Quantités récurrentes de 16u (sauf 1 pic à 32u en N-1)
- **Outliers détectés**: 32u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: L'historique montre un pattern irrégulier avec des commandes espacées (09/01/24, 28/08/24, 11/08/25, 26/08/25). Les deux dernières commandes récentes (août 2025) sont séparées de 15 jours. Depuis la dernière commande du 26/08/25, on a 43 jours d'écart jusqu'au 08/10/25, ce qui correspond à un cycle de réapprovisionnement cohérent pour ce type de produit à rotation moyenne.

**Filtrage outliers**: La commande de 32u du 28/08/24 est identifiée comme un outlier (2x la quantité standard). Toutes les autres commandes sont à 16u, établissant clairement la demande de fond.

**Vérification saisonnalité**: La date de prédiction (08/10) n'a pas d'historique N-1 direct. La période août-octobre ne montre pas de pattern saisonnier marqué. Impact faible car le produit (Brotaufstrich - pâte à tartiner pomme-raifort) n'a pas de forte saisonnalité alimentaire.

**Conclusion**: La demande de fond est clairement établie à 16u. Aucun élément ne justifie une déviation (pas de saisonnalité forte, cycle de réapprovisionnement cohérent, tendance stable). Je recommande 16u comme quantité la plus probable.

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 16u
- 📊 **Médiane**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 12-24 jours (14/07→07/08: 24j, 07/08→19/08: 12j). Pas de jour fixe identifié (lun/jeu/mar)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 16u sur les 3 dernières commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Les 3 commandes disponibles (14/07, 07/08, 19/08) montrent un rythme irrégulier avec des intervalles variables (24 puis 12 jours), sans jour de semaine récurrent. La prochaine prédiction au 08/10 se situe 50 jours après la dernière commande du 19/08, ce qui suggère un cycle de réapprovisionnement potentiellement perturbé ou un produit à rotation lente.

**Stabilité des volumes:** Les 3 commandes sont identiques à 16u sans aucune variation, indiquant une demande de fond stable et prévisible. Aucun outlier détecté.

**Absence de référence N-1:** Sans données historiques sur l'année précédente, impossible d'identifier un effet saisonnier ou un événement récurrent en octobre.

**Décision:** La constance parfaite des 3 dernières commandes à 16u constitue le signal le plus fiable. Le délai important depuis la dernière commande (50j) pourrait suggérer un stock résiduel, mais en l'absence d'information contraire et vu la régularité des volumes, je maintiens la baseline à 16u. La confiance est moyenne en raison du faible historique (3 points seulement) et de l'irrégularité temporelle.

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Stock prédit: 11.5u (20j restants) → prédit 16u mais non commandé |
| [MF0062] ​MF Tarti Betterave rouge | 16 | Stock prédit: 12.3u (27j restants) → prédit 16u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 16 | Stock prédit: -6.0u (-11j restants) → prédit 16u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:05:36.596Z*
