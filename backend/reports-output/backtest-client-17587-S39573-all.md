# Rapport Backtest - Client Epicerie Uhoda Vennes

## Contexte

- **Client** : Epicerie Uhoda Vennes (ID: 17587)
- **Commande réelle** : S39573
- **Date commande** : 2025-10-06 09:26:46
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 28
- **Tokens**: 57,885 input + 16,084 output = 73,969 total
- **Coût**: $0.4149 (~41.49¢)
- **Coût par produit LLM**: $0.0148


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.2% | 42 produits prédits, 11 corrects |
| **Rappel** | 64.7% | 17 produits réels, 11 détectés |
| **F1-Score** | 37.3% | Score équilibré global |

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
| **MAE** | 0.55 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (11)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, intervalle variable (30-60j), commandes espacées
- **Saisonnalité**: none
- **Tendance**: Stable avec légère baisse - moyenne ~2u maintenue
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont irrégulières avec des intervalles variables (30-60+ jours). Pas de pattern hebdomadaire fixe détectable. Dernière commande le 2025-09-15 (lun.), soit 21 jours avant la date de prédiction 2025-10-06.

**ANALYSE DES QUANTITÉS N-1**: Sur la période octobre 2023 - septembre 2024, on observe principalement des commandes de 2u (majorité), avec quelques commandes de 3u (avril et septembre 2024) qui restent exceptionnelles. La quantité de 1u (nov 2023) est ponctuelle.

**TENDANCE RÉCENTE (3 derniers mois)**: Seulement 2 commandes visibles - 2u en septembre et 1u en juillet. La moyenne récente montre une stabilité autour de 1-2u, avec un ralentissement possible du rythme.

**SAISONNALITÉ**: Aucun pattern saisonnier fort identifiable pour début octobre. En octobre 2023, la commande était de 2u. Pas d'événement récurrent détecté.

**DÉCISION**: Baseline à 2u correspondant au mode historique. La quantité de 3u est clairement exceptionnelle (outlier). Compte tenu du rythme irrégulier et de l'absence de signal fort de variation, je recommande 2u comme quantité la plus probable pour cette commande.

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (21-52 jours). Pas de jour fixe identifié, alternance entre lundis et jeudis
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u avec convergence récente vers 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**:
- Historique N-1 montre des commandes espacées (2-6 mois) avec quantités de 1-2u
- Période récente (3 mois): 3 commandes avec intervalles de 21j (17 juil-7 août) et 39j (7 août-15 sept)
- Pas de pattern hebdomadaire fixe (alternance lundi/jeudi)
- Depuis la dernière commande (15 sept), 21 jours se seront écoulés au 6 octobre → cohérent avec rythme récent

**TENDANCE**: 
- Les 3 dernières commandes montrent stabilisation à 1u (vs 2u historique en N-1)
- Aucun outlier détecté - produit de niche (tartinade truffes) avec demande faible et régulière
- Pas d'effet saisonnier identifiable pour octobre

**DÉCISION**: 
- Baseline = 1u (demande récente stabilisée)
- Pas d'ajustement nécessaire : pas de saisonnalité forte, pas de rattrapage attendu
- Le rythme d'environ 3-4 semaines suggère qu'une commande est probable début octobre
- Confidence medium car pattern irrégulier, mais tendance récente claire sur 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~30-40j entre commandes, pas de jour fixe identifiable
- **Saisonnalité**: none
- **Tendance**: Stable à 2u depuis janvier 2024
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
L'historique montre une fréquence irrégulière mais relativement constante (environ tous les 30-40 jours). Les jours de la semaine varient (lundi, mardi, jeudi, mercredi) donc pas de pattern hebdomadaire fixe. Dernière commande le 2025-09-15, donc au 2025-10-06 nous sommes à J+21, ce qui reste dans l'intervalle plausible pour une prochaine commande.

**FILTRAGE OUTLIERS:**
La seule exception notable est la commande de 1u le 2023-11-21. Depuis janvier 2024, toutes les commandes sont strictement de 2u (10 commandes consécutives à 2u). Cette régularité exceptionnelle indique un besoin standardisé très stable.

**SAISONNALITÉ:**
Aucun impact saisonnier détectable. Les commandes de 2u sont identiques en été, automne, hiver et printemps. La date cible (début octobre) ne montre pas de particularité en N-1 (octobre 2024 : 2u).

**CONCLUSION:**
Avec 10 commandes consécutives à 2u sans aucune variation depuis 14 mois, la demande de fond est très clairement établie à 2u. Il n'y a aucun signal de changement de tendance, aucun effet saisonnier, et le timing (21 jours après dernière commande) correspond au rythme habituel. La prédiction de 2u est la plus précise et la plus probable.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement moyen ~21-30j, tendance vers commandes mensuelles
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 2u avec variations 1-2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 3 derniers mois montrent un pattern irrégulier mais avec espacement cohérent:
- 17 juil → 7 août (21j)
- 7 août → 25 août (18j)
- 25 août → 15 sept (21j)
- 15 sept → 6 oct prévu (21j)

Le rythme suggère une commande environ tous les 20-30 jours, compatible avec une demande mensuelle faible.

**FILTRAGE OUTLIERS:**
La commande de 3u (24/09/2024 et 05/08/2024 en N-1) représente des quantités exceptionnelles. Sur 12 commandes historiques, 10 sont de 1-2u, et seulement 2 à 3u. Ces 3u sont détectés comme outliers probables (promotion ou commande groupée).

**ANALYSE SAISONNALITÉ:**
En oct-2023 (N-1), commande de 2u le 19/10. Impact saisonnier faible car le produit (tartinade tomate-basilic) n'a pas de forte saisonnalité en octobre.

**TENDANCE RÉCENTE:**
Les 4 dernières commandes montrent: 1u, 2u, 1u, 2u - oscillation stable entre 1 et 2 unités, avec moyenne à 1.5u. La dernière commande du 15/09 était de 2u.

**DÉCISION:**
Baseline à 2u car:
- Pattern N-1 octobre = 2u
- Rythme respecté (~21j depuis dernière commande)
- Alternance 1u/2u favorise 2u après intervalle standard
- Pas d'indication de rupture de tendance

Prédiction: **2 unités**

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (18j à 3 mois) avec réduction récente à ~18j
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère baisse - majoritairement 2u historique, récent à 1-2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse Rythmique**: Le produit présente un pattern irrégulier avec des commandes espacées (2-3 mois historiquement), mais une accélération récente : dernière commande le 2025-08-25 (lundi), soit 42 jours avant la date de prédiction (2025-10-06, aussi un lundi). Avant cela, commande le 2025-08-07 (18j d'écart). Pas de jour fixe hebdomadaire identifiable.

**Filtrage Outliers**: Le pic de 3u en août 2024 est isolé et non représentatif (promotion probable ou commande groupée). L'historique montre une norme à 2u (6 occurrences sur 10), avec récemment 1-2u.

**Saisonnalité**: Impact faible - octobre 2023 montrait 2u, cohérent avec la baseline. Pas de saisonnalité forte détectée pour ce produit de niche (tartinade mangue curry).

**Tendance**: Légère compression récente (1u puis 2u), mais le délai de 42j depuis la dernière commande suggère que le stock client est probablement en fin de cycle. La baseline historique de 2u reste la référence la plus fiable.

**Décision**: Avec un intervalle de 42j (supérieur aux 18j récents), le client devrait reconstituer son stock. La quantité de 2u représente la demande normative pour ce produit à rotation lente. Prédiction: **2 unités**.

</details>


<details>
<summary><strong>6. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalle variable (1-2 mois entre commandes, parfois plus)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - De 2u (sept-oct 2024) à 1u (juil-août 2025)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Le produit [LV131] Tartinade Potiron présente un pattern de commande irrégulier avec des intervalles variables. Sur N-1, on observe des commandes espacées (oct 2024: 2u, août 2024: 2u). Les 3 derniers mois montrent 2 commandes: 17 juillet 2025 (1u) et 25 août 2025 (1u), soit environ 39 jours d'intervalle. Depuis le 25 août, nous sommes le 6 octobre, donc 42 jours d'écart - cohérent avec le rythme observé.

**Analyse saisonnière:** Malgré le nom "Potiron" évoquant l'automne, l'impact saisonnier est faible. En octobre N-1 (19/10/2024), la commande était de 2u, mais la tendance récente montre une baisse structurelle des volumes.

**Tendance récente:** Nette diminution des quantités commandées: passage de 2u (sept-oct 2024) à 1u sur les 2 dernières commandes de 2025. Cette baisse semble être une réduction volontaire de la demande du client, non un événement ponctuel.

**Outlier identifié:** La commande de 3u en mai 2024 apparaît isolée et exceptionnelle (50% au-dessus du niveau habituel).

**Décision:** La baseline actuelle est clairement établie à 1u par les 2 dernières commandes consécutives. Le rythme d'environ 40 jours entre commandes suggère qu'une commande est attendue. Prédiction: **1 unité**, alignée sur la demande récente stabilisée.

</details>


<details>
<summary><strong>7. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (40-60 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation 1-2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse étape par étape:**

1. **RYTHMIQUE:** L'historique montre des commandes irrégulières sans pattern hebdomadaire ou mensuel strict. Les intervalles varient de 30 à 60 jours (dernier: 07/08/2025, donc 60 jours avant la date de prédiction 06/10/2025). Le client ne suit pas un cycle fixe mais commande selon ses besoins.

2. **OUTLIERS:** La commande de 3u du 16/05/2024 est atypique. Toutes les autres commandes oscillent entre 1-2u. Cette quantité de 3u représente un événement exceptionnel (peut-être un stock de sécurité ou une demande ponctuelle).

3. **SAISONNALITÉ:** Aucun pattern saisonnier détectable. Les commandes sont réparties sur toute l'année (nov, jan, mars, mai, juin, août) sans pic récurrent à une période spécifique.

4. **TENDANCE RÉCENTE:** La dernière commande (07/08/2025) est de 2u. En excluant l'outlier de 3u, le pattern dominant est 1-2u avec une moyenne pondérée vers 2u ces derniers mois (2u en juin 2024, 2u en août 2025).

5. **DÉCISION:** Baseline = 2u (quantité modale excluant outlier). Pour début octobre, 60 jours après la dernière commande, le client devrait renouveler son stock habituel de 2u. Pas d'élément justifiant une hausse ou baisse.

</details>


<details>
<summary><strong>8. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (2-3 mois entre commandes, parfois plus longs)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - La commande de 3u en sept 2024 semble exceptionnelle
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : L'historique montre des commandes très espacées et irrégulières (nov 2023 → mai 2024 = 6 mois, mai → juin = 1 mois, juin → sept = 3 mois, sept 2024 → juil 2025 = 10 mois). Aucun pattern hebdomadaire ou mensuel stable n'est détectable. La dernière commande date du 17 juillet 2025, soit environ 2,5 mois avant la date de prédiction.

**FILTRAGE OUTLIERS** : La commande de 3u du 24 septembre 2024 se démarque nettement des autres (toutes à 1u ou 2u). Sans contexte récurrent à cette période en N-2, cette quantité apparaît comme un événement ponctuel (promotion possible, commande groupée, ou erreur de saisie).

**PATTERN DE FOND** : Hors l'outlier, le client commande systématiquement 1u (4 occurrences sur 5), avec une seule exception à 2u en novembre 2023. La commande récente de juillet 2025 confirme ce pattern à 1u.

**SAISONNALITÉ** : Aucun pattern saisonnier évident. Les commandes sont dispersées sur l'année sans concentration particulière. Pas de signal fort pour octobre en N-1.

**CONCLUSION** : La demande de fond est clairement de 1u. Absence de signal justifiant une quantité différente pour le 6 octobre 2025. Confidence medium car l'irrégularité rend difficile la prévision temporelle exacte, mais la quantité unitaire est cohérente.

</details>




---

## False Positives (31)

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
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Stock prédit: 0.8u (12j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.9u (18j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 1.1u (25j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 1.1u (25j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 0.7u (11j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.6u (25j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: -0.3u (-9j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Stock prédit: 0.4u (23j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.6u (-21j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 2 | Stock prédit: -0.6u (-21j restants) → prédit 2u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: -0.4u (-22j restants) → prédit 1u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -1.8u (-60j restants) → prédit 1u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 1 | Stock prédit: -0.7u (-37j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-21j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.4u (-26j restants) → prédit 1u mais non commandé |
| [CB001] CB Apple juice 25cl | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.8u (-114j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -1.1u (-59j restants) → prédit 1u mais non commandé |


---

## False Negatives (6)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Stock suffisant: 1.5u (56j restants > seuil 30j) |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock suffisant: 1.3u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T09:08:10.519Z*
