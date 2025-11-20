# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 28
- **Tokens**: 58,193 input + 16,011 output = 74,204 total
- **Coût**: $0.4147 (~41.47¢)
- **Coût par produit LLM**: $0.0148


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 33 produits prédits, 18 corrects |
| **Rappel** | 90.0% | 20 produits réels, 18 détectés |
| **F1-Score** | 67.9% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 27.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 22.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (commandes chaque fin de mois)
- **Saisonnalité**: none
- **Tendance**: Stable (1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Seulement 2 commandes historiques disponibles (25/08 et 22/09), espacées de ~28 jours. Les deux commandes tombent un lundi, suggérant un pattern mensuel avec possiblement une préférence pour ce jour de la semaine. La prochaine commande attendue suivant ce rythme serait mi-octobre, cohérent avec la date de prédiction (06/10).

**Filtrage outliers**: Aucun outlier détecté. Les deux quantités sont identiques (1u), montrant une demande très stable et prévisible.

**Absence de saisonnalité**: Pas de données N-1 pour évaluer l'impact saisonnier. Le produit (limonade bio pamplemousse) pourrait théoriquement avoir une saisonnalité estivale, mais octobre reste en période de consommation raisonnable.

**Tendance**: Parfaitement stable à 1 unité par commande. Aucun signe de croissance ou décroissance.

**Conclusion**: Avec un historique limité mais cohérent (2 commandes identiques), la baseline théorique est clairement de 1 unité. La régularité du pattern et l'absence de variation justifient une prédiction de 1u. Confidence "medium" car l'historique reste court (pas "high"), mais la stabilité observée est forte (pas "low").

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (25 août → 22 sept = 28 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Seulement 2 points de données disponibles (25/08 et 22/09), espacés de 28 jours, suggérant un pattern mensuel. La prochaine commande serait attendue vers le 20 octobre, mais la prédiction demandée est pour le 6 octobre (14 jours d'écart avec la dernière commande).

**TENDANCE**: Baisse de 2u à 1u (-50%), mais avec seulement 2 observations, impossible de confirmer s'il s'agit d'une vraie tendance ou d'une variabilité normale de démarrage produit.

**ABSENCE DE SAISONNALITÉ**: Aucune donnée N-1 disponible pour évaluer l'impact saisonnier.

**DÉCISION**: Étant donné que le rythme mensuel observé (~28j) suggère une prochaine commande plutôt vers le 20/10, et que nous sommes le 06/10 (trop tôt dans le cycle), la probabilité d'une commande ce jour est faible. Cependant, si commande il y a, la tendance récente montre 1u. En l'absence de données robustes et avec un historique limité, je recommande **1u** aligné sur la dernière observation, mais avec **confiance faible** car le timing ne correspond pas au pattern observé.

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (deux commandes espacées de 28 jours : 25/08→22/09)
- **Saisonnalité**: none
- **Tendance**: Stable (1u constante)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le client montre un pattern mensuel régulier avec 28 jours entre les deux commandes observées (25/08→22/09). La prochaine commande attendue selon ce rythme serait vers le 20/10 (28j après 22/09), mais la date de prédiction est le 06/10, soit 14 jours après la dernière commande - donc en avance de ~14 jours sur le cycle habituel.

**Demande constante**: Les 2 commandes historiques montrent une quantité parfaitement stable de 1u à chaque fois. Aucun outlier détecté. Produit de niche (bio, faible calories, saveur spécifique gingembre-citronelle) suggérant une demande limitée et régulière.

**Absence de saisonnalité**: Aucune donnée N-1 pour confirmer un effet saisonnier. Les données récentes couvrent août-septembre sans variation.

**Décision**: Bien que la date de prédiction (06/10) ne coïncide pas exactement avec le cycle mensuel observé (~20/10 attendu), si le client passe commande à cette date, il maintiendra vraisemblablement sa quantité habituelle de 1u. Pas d'élément suggérant une augmentation ou un rattrapage. La constance parfaite des commandes passées (1u) justifie une prédiction de **1 unité**.

**Confiance medium**: Pattern identifié sur seulement 2 points, ce qui limite la certitude, mais la stabilité absolue des quantités renforce la prédiction.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bihebdomadaire le lundi (~14 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -40% (de 6u à 3u sur les 3 derniers cycles)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Pattern très clair - commandes exclusivement le LUNDI avec intervalles réguliers (2025-10-06 est un lundi, cohérent avec le rythme). Intervalles : 14j (14/07→11/08), 14j (11/08→25/08), 14j (25/08→08/09), 14j (08/09→22/09). Le prochain cycle naturel serait le 06/10 (14j après le 22/09).

**Filtrage outliers** : Le pic de 8u du 14/07 est isolé et non répété. Les 4 dernières commandes montrent une séquence : 6u → 3u → 5u → 3u.

**Analyse de tendance** : Baisse nette visible - moyenne mobile décroissante. Les deux dernières commandes (5u et 3u) montrent une stabilisation autour de 4u (moyenne = 4u). Pas de données N-1 donc pas d'effet saisonnier identifiable.

**Décision** : La demande de fond se stabilise entre 3-5u après le pic isolé de juillet. Moyenne pondérée des 3 derniers cycles (excluant l'outlier) : (6×1 + 5×2 + 3×3)/6 = 4,33u. La alternance récente 5u/3u suggère un retour vers 4-5u. Étant donné le rythme parfaitement respecté et la date cohérente (lundi), je recommande 4u comme quantité la plus probable, légèrement au-dessus de la dernière commande par effet de régression vers la moyenne récente.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle les lundis (intervalle ~14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable ~3u (après pic isolé de 6u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Pattern très clair de commandes bimensuelles systématiquement le LUNDI. Intervalles: 14j (22/09→08/09), 14j (08/09→25/08), 14j (25/08→11/08), 28j (11/08→14/07). Le client a un cycle de réapprovisionnement régulier tous les 14 jours. La date cible (06/10/25, lundi) est exactement 14 jours après la dernière commande (22/09), ce qui confirme le pattern.

**FILTRAGE OUTLIERS**: La commande de 6u du 25/08 est un outlier évident (2× la norme). Les autres commandes montrent une demande stable de 3u (4 occurrences sur 5), avec une seule exception à 5u le 14/07. La quantité modale est clairement 3u.

**TENDANCE**: Très stable. Après le pic isolé de 6u, retour immédiat à 3u lors des 2 dernières commandes (08/09 et 22/09), confirmant que 3u est la demande de fond normale.

**DÉCISION**: Aucune saisonnalité N-1 disponible, demande récente ultra-régulière, pattern temporel respecté. Prédiction: **3 unités** avec haute confiance.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-hebdomadaire chaque Lundi (intervalle 14 jours en moyenne)
- **Saisonnalité**: none
- **Tendance**: Stable oscillant entre 1-4u (tendance légèrement baissière après pic de juillet)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Pattern très clair - toutes les commandes tombent un LUNDI avec un intervalle oscillant entre 14 et 21 jours (moyenne ~14-15j). La date de prédiction (2025-10-06) tombe un lundi, 14 jours après la dernière commande du 22/09, donc PARFAITEMENT dans le cycle attendu.

**FILTRAGE OUTLIERS**: La commande de 5u du 14/07 semble être un pic exceptionnel (possiblement réapprovisionnement estival ou promotion). Les 4 autres commandes oscillent entre 1u et 4u avec une médiane à 2.5u.

**TENDANCE**: Après exclusion du pic de juillet, on observe une séquence récente: 1u (11/08) → 4u (25/08) → 1u (08/09) → 3u (22/09). Pattern oscillant mais avec dernière commande à 3u montrant un niveau intermédiaire stable.

**DÉCISION**: Aucune donnée N-1 disponible donc pas d'effet saisonnalité. La baseline théorique se situe à 2.5u (moyenne sans outlier). La dernière commande à 3u + respect parfait du rythme bi-hebdomadaire + jour de semaine concordant = forte probabilité de commande similaire. Je recommande 3u comme quantité la plus probable, reflétant le niveau actuel stabilisé du client.

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande toutes les 2 semaines environ (13-14 jours en moyenne), exclusivement le lundi
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3u (moyenne 3.2u hors outlier)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 5 commandes récentes suivent un pattern clair : toujours le lundi, avec intervalles de 14j (14/07→11/08), 14j (11/08→25/08), 14j (25/08→08/09), 14j (08/09→22/09). La dernière commande date du 22/09, donc la prochaine devrait intervenir vers le 06/10 (+14j) = DATE EXACTE DE LA PRÉDICTION. Le rythme bi-hebdomadaire est respecté.

**FILTRAGE OUTLIERS:**
Le pic à 5u du 25/08 est atypique (156% de la moyenne). Les autres commandes sont très homogènes : 3-2-3-3. Ce pic peut s'expliquer par un rattrapage ou un événement ponctuel (début de rentrée scolaire fin août). À exclure du calcul de baseline.

**TENDANCE:**
Hors outlier, la demande est stable : 3u (14/07), 3u (11/08), 2u (08/09), 3u (22/09). Moyenne = 2.75u ≈ 3u. Pas de saisonnalité N-1 disponible. La dernière commande (22/09) = 3u confirme le retour à la normale post-pic.

**DÉCISION:**
Pattern bi-hebdomadaire respecté, date alignée (lundi 06/10), demande stabilisée à 3u. Aucun élément ne justifie de dévier de la baseline. Prédiction : **3 unités**.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle les lundis (intervalle ~14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère variabilité (1-3u base)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**Analyse Rythmique:**
Les commandes suivent un pattern régulier bimensuel les lundis:
- 14/07 → 25/08 (42j, ~3 cycles)
- 25/08 → 08/09 (14j)
- 08/09 → 22/09 (14j)
- 22/09 → 06/10 (14j) ← Date de prédiction

Le cycle est désormais bien stabilisé à 14 jours depuis août, toujours le lundi.

**Filtrage des Outliers:**
La commande du 14/07 (5u) est clairement exceptionnelle - elle représente le double de la demande habituelle et survient avant la stabilisation du pattern. Je l'isole comme outlier probable (lancement produit, promotion, ou stock initial).

**Tendance Récente (3 derniers cycles stabilisés):**
- 25/08: 3u
- 08/09: 2u  
- 22/09: 3u
→ Moyenne = 2.67u, oscillation entre 2 et 3

**Décision:**
Sans données N-1, je me base sur le pattern récent stabilisé. La demande alterne entre 2 et 3 unités avec une légère préférence pour 3u (2 occurrences sur 3). Le produit premium bio a une demande modeste mais régulière.

**Baseline théorique:** 2.5u
**Prédiction finale:** 3u (arrondi supérieur cohérent avec la fréquence observée et dernière commande)

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle (tous les ~14 jours) avec ancrage lundi
- **Saisonnalité**: none
- **Tendance**: Baisse -33% (3u → 2u stabilisé)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client commande systématiquement le lundi avec un intervalle régulier: 14j (25/08→08/09), 14j (08/09→22/09). La date de prédiction (06/10) correspond exactement à 14 jours après la dernière commande (22/09). Le pattern est très stable et prévisible.

**TENDANCE**: Les 3 dernières commandes montrent une stabilisation à 2u (08/09, 25/08, 22/09). La commande de 3u du 14/07 est identifiée comme outlier car elle précède une période de stabilisation claire. Il n'y a pas de rattrapage à prévoir car le rythme bimensuel a été respecté.

**SAISONNALITÉ**: Aucune donnée N-1 disponible, donc impact saisonnier non évaluable. Produit agro (confiture fraise bio) potentiellement saisonnier, mais la demande récente montre une consommation stable en fin d'été/début automne.

**DÉCISION**: Baseline à 2u confirmée par 3 commandes consécutives identiques. Aucun signal de changement de comportement. La prédiction de 2u est la plus probable pour maintenir le MAPE minimal.

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-45j), principalement lundis et mardis en 2025
- **Saisonnalité**: weak
- **Tendance**: Baisse significative -50% (passage de 2-3u à 1u systématique)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client montre un pattern mensuel irrégulier (30-45j entre commandes). En 2025, les 3 dernières commandes sont espacées de ~14-15 jours, avec dernière commande le 22/09 (lundi). Au 06/10, on est à 14 jours d'écart, cohérent avec le rythme bimensuel récent. Le jour (lundi) correspond au pattern 2025.

**TENDANCE CLAIRE**: Rupture nette entre N-1 (moyennes 2-3u avec quelques pics à 4u) et 2025 (stabilisation ferme à 1u systématique sur les 3 derniers mois). Les quantités de 4u en N-1 sont des outliers ponctuels.

**SAISONNALITÉ**: Impact faible. Septembre N-1 montrait 3u, mais la tendance structurelle de baisse en 2025 prime sur la référence saisonnière.

**DÉCISION**: Les 3 dernières commandes (juil-sept 2025) montrent une demande stabilisée à exactement 1u par commande, sans aucune variation. Cette constance récente reflète probablement un ajustement de stock client ou changement de besoin structurel. Prédire 1u est la prévision la plus probable et précise.

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28-30j avec ancrage lundi récent (4 commandes consécutives chaque ~28j depuis juillet)
- **Saisonnalité**: weak
- **Tendance**: Baisse significative -67% (passage de 3u moyenne N-1 à 1u stable depuis juillet 2025)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Pattern mensuel très régulier identifié sur les 3 derniers mois : 14 juil (lun.) → 11 août (lun., +28j) → 8 sept (lun., +28j) → 22 sept (lun., +14j). La dernière commande du 22/09 a cassé le cycle à ~28j, créant un intervalle plus court de 14j. La prédiction pour le 06/10 représente un intervalle de 14j depuis la dernière commande, ce qui suggère soit un retour au rythme mensuel (~28j total depuis le 8/9), soit un nouveau pattern bi-mensuel.

**Filtrage outliers**: La quantité de 4u (jan 2024) est isolée et ancienne, probablement exceptionnelle. Les données N-1 montrent des commandes de 2-3u avec forte irrégularité (intervalles de 1 à 3 mois). 

**Tendance structurelle**: Depuis juillet 2025, stabilisation absolue à 1u par commande (4 occurrences consécutives sans variation). Cette baisse de -67% vs N-1 (moyenne ~2.9u) indique une restructuration client (réduction assortiment, rotation plus rapide, nouveau format distribution).

**Saisonnalité**: Impact faible - aucun pattern saisonnier clair sur septembre-octobre N-1 (3u en sept 2024, pas de données octobre).

**Décision**: La régularité parfaite des 4 dernières commandes à 1u, combinée au pattern mensuel établi et à l'ancrage lundi, justifie une prédiction à 1u. Le délai de 14j depuis le 22/09 reste dans la fenêtre acceptable pour une commande mensuelle décalée. Pas de signal justifiant une variation.

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~28-42j), principalement Lundi/Mardi
- **Saisonnalité**: weak
- **Tendance**: Baisse -30% (moyenne N-1: 4.25u → 3 mois récents: 2.2u)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**Analyse Rythmique:**
Historique N-1 montre des commandes espacées de 30-60 jours, majoritairement le mardi (6/9), quelques lundis (2/9). Période récente (3 derniers mois): pattern très régulier tous les ~14j le lundi (11/07, 25/08, 08/09, 22/09). Prochaine commande attendue autour du 06/10 (14j après 22/09) tombe justement un lundi - cohérent avec le nouveau rythme.

**Filtrage Outliers:**
La commande de 1u du 08/09 est clairement atypique (min historique). Toutes les autres commandes N-1 = 3-5u, récent = 2-3u. Probable rupture stock ou ajustement ponctuel. À exclure du calcul baseline.

**Analyse Saisonnalité:**
Période comparable N-1 (sept-oct 2024): 4u le 03/09. Impact saisonnier faible car pas de pattern fort visible. La baisse observée semble structurelle (réduction demande client final) plutôt que saisonnière.

**Tendance:**
Baisse nette du volume: N-1 moyenne = 4.25u, 3 derniers mois (hors outlier 1u) = 2.67u. Le rythme s'est aussi accéléré (mensuel→bimensuel), suggérant des commandes plus fréquentes mais plus petites.

**Décision:**
Baseline théorique = 2.5u (moyenne pondérée: 70% sur 3 derniers mois hors outlier, 30% sur N-1 comparable). Dernière commande normale = 3u (22/09). Vu le rythme bimensuel établi et la date qui colle parfaitement au pattern, prédiction = **3u** (arrondi supérieur de la baseline, aligné avec dernière valeur stable).

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (Lundi matin)
- **Saisonnalité**: none
- **Tendance**: Stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Historique très limité (seulement 2 commandes). Entre le 11/08/2025 et le 08/09/2025, on observe un intervalle de 28 jours. Les deux commandes ont lieu un lundi matin. La prochaine prédiction est pour le 06/10/2025 (lundi), soit exactement 28 jours après la dernière commande du 08/09, ce qui correspond parfaitement au pattern identifié.

**FILTRAGE OUTLIERS**: Aucune quantité anormale détectée. Les deux commandes sont parfaitement identiques (1u), suggérant une demande récurrente stable et prévisible, sans événement exceptionnel.

**SAISONNALITÉ**: Aucune donnée N-1 disponible pour évaluer l'impact saisonnier. Produit de niche (limonade bio mangue-passion faible calories) avec demande apparemment régulière et faible volume.

**TENDANCE**: Parfaitement stable sur les 2 observations (1u à chaque fois). Aucun signe de hausse ou baisse.

**DÉCISION**: Avec un pattern mensuel régulier de 1 unité par commande, survenant exactement à la date attendue (lundi, 28 jours après), et aucune variation de quantité, la prédiction la plus probable est **1 unité**. Confiance moyenne due au faible historique (seulement 2 points de données), mais cohérence parfaite du pattern observé.

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle le lundi (~14-28 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Stable - Demande constante de 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes historiques montrent un pattern très clair:
- 14/07 (lun.) → 25/08 (lun.): 42 jours
- 25/08 (lun.) → 08/09 (lun.): 14 jours  
- 08/09 (lun.) → 06/10 (lun.): 28 jours

Le client commande systématiquement le LUNDI avec un cycle variable entre 2-4 semaines. La date cible (06/10) tombe exactement un lundi, 28 jours après la dernière commande, ce qui correspond parfaitement au pattern observé.

**FILTRAGE OUTLIERS:**
Aucun outlier détecté. Les 4 commandes sont STRICTEMENT identiques (1 unité), indiquant une demande régulière et prévisible. Pas d'anomalie, pas de promotion, pas d'erreur.

**SAISONNALITÉ:**
Absence de données N-1, mais le produit (confiture bio d'abricot) n'est pas fortement saisonnier en B2B. Les 3 derniers mois couvrent été-début automne avec une demande plate.

**SYNTHÈSE:**
Pattern ultra-stable: 100% des commandes = 1 unité, toujours le lundi, cycle régulier. Aucun élément ne justifie de dévier de cette baseline. La prédiction la plus précise est 1 unité.

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bihebdomadaire (~14j) chaque lundi
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 3 commandes suivent un pattern bihebdomadaire très régulier les lundis (11/08 → 25/08 = 14j, 25/08 → 08/09 = 14j). Le 06/10 est un lundi, soit 28 jours après la dernière commande (08/09), ce qui correspond exactement à 2 cycles de 14 jours. Le client devrait donc commander selon son rythme établi.

**TENDANCE**: On observe une baisse nette de 2u (11/08) vers 1u (25/08 et 08/09). Les 2 dernières commandes sont stables à 1u, confirmant un nouveau niveau de demande.

**OUTLIERS**: Aucun pic exceptionnel détecté. La quantité de 2u du 11/08 semble être un ancien niveau de commande, pas une anomalie promotionnelle.

**SAISONNALITÉ**: Pas de données N-1 pour évaluer l'impact saisonnier. Pour une confiture de cerises bio, octobre peut marquer une légère baisse post-été, mais sans données historiques, impact considéré nul.

**DÉCISION**: Baseline = 1u (moyenne des 2 dernières commandes identiques). Le rythme bihebdomadaire est respecté (28j = 2 cycles). Aucun élément n'indique une rupture ou un rattrapage. Prédiction: 1 unité.

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel régulier (~28-30j) chaque début de mois, toujours le Lundi
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1u (outlier 2u isolé)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern mensuel très régulier avec commandes espacées de ~28-30 jours, systématiquement le lundi (14/07, 11/08, 08/09). La prochaine commande anticipée serait début octobre, cohérent avec le 06/10 (lundi), soit 28 jours après la dernière commande.

**FILTRAGE OUTLIERS**: La commande de 2u du 11/08 est isolée dans un contexte de demande à 1u (14/07 et 08/09). Sans données N-1 pour confirmer un pattern saisonnier estival, cette quantité de 2u est considérée comme un événement ponctuel (possible rattrapage, promotion, ou ajustement de stock).

**TENDANCE**: Hors outlier, la demande de fond est stable à 1u par cycle mensuel. Aucune donnée N-1 pour valider un effet saisonnier en octobre.

**CONCLUSION**: Avec un rythme mensuel établi et une demande de fond à 1u, la prédiction la plus probable pour le 06/10 est 1u. Confidence "medium" car l'historique limité (3 points) ne permet pas de valider la stabilité long-terme ni d'exclure totalement un pattern saisonnier automnal.

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle (~14 jours) - Lundi fixe
- **Saisonnalité**: none
- **Tendance**: Stable - quantités constantes de 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern très clair : commandes tous les lundis avec un intervalle de 14 jours (11 août → 25 août). La prédiction est pour le lundi 6 octobre, soit 42 jours après la dernière commande, ce qui représente exactement 3 cycles de 14 jours. Le client maintient sa régularité hebdo-bimensuelle.

**ANALYSE QUANTITATIVE**: Les 2 commandes historiques montrent une constance parfaite à 1 unité. Aucun outlier détecté. L'absence de données N-1 empêche l'analyse saisonnière, mais la rhubarbe (produit de saison printemps/été) en octobre suggère une demande de fond stable pour un produit bio de niche.

**SYNTHÈSE**: Malgré l'historique court (2 points), la régularité du pattern (jour fixe + quantité fixe) et le respect du cycle de 14 jours indiquent une demande structurée. Le client B2B commande probablement pour reconstituer un stock de rotation lente. En l'absence d'éléments perturbateurs, la prédiction suit la baseline établie.

**DÉCISION**: 1 unité - cohérent avec le pattern observé. Confidence "medium" car historique limité mais comportement très régulier.

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, 6-7 semaines entre commandes récentes (42j entre juil-août 2025), historiquement très espacé
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u depuis août 2024
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Produit de niche (Tarti Pomme Raifort) avec commandes très espacées. Historique N-1 montre 7 commandes sur 10 mois (intervalle moyen ~6 semaines). Période récente (3 derniers mois) : 2 commandes espacées de 42 jours (14/07→25/08). Le 06/10 se situe 42 jours après la dernière commande (25/08), respectant exactement le rythme récent observé.

**Filtrage outliers**: La commande de 3u en mars 2024 est isolée dans un historique dominé par 2u (6/9 commandes). Probable événement ponctuel ou ajustement stock.

**Tendance**: Depuis août 2024, stabilité parfaite à 2u par commande (4 commandes consécutives). Pas de croissance ni décroissance détectable.

**Saisonnalité**: Impact faible. Sept-oct N-1 montrait 2u (03/09/2024), cohérent avec le reste de l'année hors outlier.

**Décision**: Baseline à 2u confirmée par (1) stabilité récente parfaite, (2) respect du cycle ~6 semaines justifiant une commande le 06/10, (3) référence N-1 septembre alignée. Confiance medium car historique limité mais pattern récent très cohérent.

</details>




---

## False Positives (15)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (19j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -0.1u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.8u (-5j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.2u (-14j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -2.3u (-28j restants) → prédit 1u mais non commandé |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Stock prédit: -2.9u (-41j restants) → prédit 1u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -1.0u (-27j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-41j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-27j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: -1.7u (-69j restants) → prédit 1u mais non commandé |


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
| [VID0009] Consigne casier | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 24 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-20T09:05:11.928Z*
