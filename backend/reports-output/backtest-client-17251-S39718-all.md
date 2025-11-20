# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 12
- **Tokens**: 26,160 input + 7,095 output = 33,255 total
- **Coût**: $0.1849 (~18.49¢)
- **Coût par produit LLM**: $0.0154


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 9.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: medium)
- 📊 **Baseline N-1**: 144u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire le mardi (avec exceptions ponctuelles le jeudi)
- **Saisonnalité**: weak
- **Tendance**: Stabilité autour de 96-192u (baseline), avec pics ponctuels exclus
- **Outliers détectés**: 480u, 384u, 384u

**🧠 Raisonnement LLM:**
**Analyse détaillée:**

**1. PATTERN RYTHMIQUE:**
- Forte régularité des commandes le **mardi** (N-1 et période récente)
- La date de prédiction (2025-10-14) est un **mardi** → cohérent avec le pattern
- Dernière commande: 2025-10-09 (jeu.) = il y a 5 jours → rythme hebdomadaire confirmé
- Avant cela: 2025-10-07 (mar.) → double commande sur la même semaine (mar.+jeu.) suggère un rattrapage ou ajustement

**2. FILTRAGE OUTLIERS:**
- **480u** (sep. 2024): outlier majeur, possiblement promotion/événement
- **384u** (2×): juin 2024 (3 commandes le même jour = erreur/consolidation) + sep. 2025
- Baseline récurrente N-1: **96-288u** avec prédominance de **96-192u**

**3. COMPARAISON SAISONNIÈRE N vs N-1:**
- Octobre 2024: 96u (08/10) et 288u (01/10)
- La semaine comparable (mi-octobre) montre **96u en N-1**
- Septembre 2025 récent: forte variabilité (96u, 96u, 384u), puis normalisation avec 192u (07/10) + 288u (09/10)

**4. TENDANCE RÉCENTE (3 derniers mois):**
- Hors outlier 384u, la tendance se stabilise autour de **96-192u** 
- La double commande récente (192u mar. + 288u jeu.) totalise 480u sur 1 semaine = volume exceptionnel
- Probable retour à la normale après ce pic

**5. DÉCISION:**
- Baseline théorique: (96+192+96+96) / 4 ≈ **120u** (hors outliers)
- Mais pattern mardi montre souvent **192u** en N-1 (août 2024: 192u×2, sep.: 192u)
- Le 07/10 (mardi dernier) = 192u → signal fort
- **Prédiction: 192u** = quantité récurrente cohérente pour un mardi standard, en tenant compte du retour à la normale post-pic

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-hebdomadaire chaque Mardi (parfois Jeudi en complément)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 192u (moyenne récente ~192u)
- **Outliers détectés**: 576u, 480u, 384u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 3 derniers mois montrent un pattern très régulier de commandes le Mardi (07/10, 30/09, 23/09, 16/09), avec une exception le 09/10 (jeudi) probablement en complément. Le 14/10/2025 étant un Mardi, il s'inscrit parfaitement dans ce cycle hebdomadaire.

**FILTRAGE OUTLIERS:**
Les valeurs exceptionnelles de juillet 2024 (576u, 480u, 384u) correspondent à une période de forte activité estivale avec plusieurs commandes groupées. Ces volumes ne reflètent pas la demande de fond habituelle. Les multiples commandes du 25/06/2024 (4×192u) suggèrent aussi un événement ponctuel.

**RÉFÉRENCE N-1 (Octobre 2024):**
- 08/10/2024 (Mardi): 192u
- 01/10/2024 (Mardi): 96u
La moyenne d'octobre N-1 = 144u, mais avec forte variabilité.

**TENDANCE RÉCENTE (Septembre-Octobre 2025):**
- 16/09: 192u
- 23/09: 192u  
- 30/09: 288u (possible rattrapage ou commande double)
- 07/10: 96u (commande réduite, compensée par 192u le 09/10)
→ Moyenne lissée = ~192u par cycle hebdomadaire

**DÉCISION:**
La quantité de 192u représente la demande de fond stabilisée observée sur les 2 derniers mois. Le 07/10 (96u) + 09/10 (192u) = 288u sur la semaine dernière, ce qui suggère un rythme normalisé. Le 30/09 (288u) était probablement une double commande. La prédiction de 192u pour ce Mardi 14/10 s'aligne avec le pattern dominant et la saisonnalité faible d'octobre.

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque Mardi, rythme hebdomadaire strict (intervalle 7 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 108u depuis 5 mois
- **Outliers détectés**: 324u, 216u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le pattern est très clair - commandes systématiques chaque MARDI avec un intervalle de 7 jours. Les 5 dernières commandes de 2025 (26/08, 09/09, 23/09, 30/09, 07/10) confirment ce cycle hebdomadaire strict, toutes à 108u. La prochaine commande prévue le 14/10 (mardi) s'inscrit parfaitement dans ce rythme.

**FILTRAGE DES OUTLIERS**: Les quantités de 324u (02/07/2024) et 216u (17/09/2024, 25/06/2024) sont clairement exceptionnelles. Ces pics ponctuels ne se reproduisent pas dans la période récente et ne correspondent à aucune saisonnalité à la date du 14/10.

**SAISONNALITÉ N-1**: En octobre 2024, les commandes étaient à 108u (01/10, 08/10), identiques à 2025. Aucun effet saisonnier particulier détecté pour mi-octobre.

**TENDANCE**: Stabilité absolue à 108u depuis août 2025 (5 commandes consécutives). Pas de rupture de tendance, pas de rattrapage à prévoir puisque le rythme hebdomadaire est respecté (dernière commande le 07/10, soit 7 jours avant la prédiction).

**CONCLUSION**: La demande de fond stable à 108u, associée au respect strict du cycle hebdomadaire, conduit à une prédiction de 108 unités avec une confiance élevée.

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: 96u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: high)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: 96u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque Mardi (7 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 96u après correction d'une anomalie en juillet
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le client présente un pattern hebdomadaire extrêmement régulier avec commandes chaque mardi à intervalle de 7 jours (09/09, 16/09, 30/09, 07/10). La prochaine commande prévue le 14/10 (mardi) suit ce cycle exact.

**FILTRAGE OUTLIERS**: La commande du 29/07 (192u) est clairement exceptionnelle - elle représente exactement le double de la norme. Cela suggère soit un rattrapage après rupture, soit une commande promotionnelle ponctuelle. Depuis septembre, le rythme est revenu à une parfaite stabilité à 96u.

**TENDANCE**: Les 4 dernières commandes montrent une stabilité absolue (96u × 4), indiquant que la demande hebdomadaire de fond est solidement ancrée à ce niveau. Aucune saisonnalité N-1 disponible, mais la régularité récente compense.

**DÉCISION**: Aucun élément ne justifie de dévier de 96u. Le pattern est clair, la fréquence respectée, et la date de prédiction (mardi 14/10) correspond exactement au jour de commande habituel, 7 jours après la dernière commande. Prédiction: 96 unités.

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: 96u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque Mardi hebdomadaire
- **Saisonnalité**: none
- **Tendance**: Hausse récente +100% puis stabilisation à 192u
- **Outliers détectés**: 96u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Le client présente un pattern hebdomadaire très régulier avec des commandes systématiquement le mardi (2/09, 9/09, 23/09, 30/09, 7/10). La prédiction pour le 14/10 (mardi) s'inscrit parfaitement dans ce cycle.

**Analyse de tendance:** On observe une rupture nette début septembre : passage de 96u (2/09) à 192u (9/09), soit un doublement. Cette nouvelle quantité de 192u se maintient ensuite de manière stable sur 4 commandes consécutives (9/09, 23/09, 30/09, 7/10), confirmant qu'il s'agit d'un nouveau niveau de demande structurelle et non d'un pic ponctuel.

**Outliers:** Le 96u du 2/09 apparaît comme une anomalie basse (possible transition ou sous-commande) par rapport au nouveau standard établi.

**Saisonnalité:** Absence de données N-1, donc pas de pattern saisonnier identifiable.

**Décision:** La régularité du rythme hebdomadaire (chaque mardi) et la stabilité parfaite de 192u sur les 4 dernières semaines indiquent une demande prévisible. Aucun élément ne suggère de variation pour la prochaine commande du 14/10.

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande chaque Mardi, cycle régulier de 14 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 108u avec un pic récent exceptionnel
- **Outliers détectés**: 216u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Pattern très clair avec commandes exclusivement le MARDI, intervalle stable de 14 jours (bi-mensuel). Historique sur 3 mois montre 5 commandes, toutes un mardi.

**Analyse des quantités** : 
- 4 commandes sur 5 = 108u (12/08, 26/08, 09/09, 23/09)
- 1 commande = 216u (30/09) → exactement le DOUBLE de la baseline

**Filtrage du outlier** : La commande de 216u du 30/09 est clairement exceptionnelle. Deux hypothèses : (1) rattrapage d'un manque de stock, (2) commande anticipée pour événement ponctuel. Le retour attendu à la normale après un pic isolé est cohérent en B2B.

**Tendance** : Aucune saisonnalité N-1 disponible. Sur période récente, la demande de fond est STABLE à 108u. Le pic de 216u n'a duré qu'une seule occurrence et ne constitue pas une nouvelle tendance.

**Décision** : Le 14/10/2025 étant un mardi (conforme au pattern), et respectant l'intervalle de ~14 jours depuis le 30/09, la quantité la plus probable est le retour à la baseline de 108u. Le doublement était exceptionnel et non structurel.

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande principalement chaque Mardi, rythme bi-mensuel (~14 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable à 98u (hors événements exceptionnels)
- **Outliers détectés**: 392u, 196u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Le produit montre un pattern très clair de commandes le mardi, avec une fréquence bi-mensuelle stable (14-21 jours entre commandes). La dernière commande date du 2025-09-23 (mardi), soit 21 jours avant la date de prédiction 2025-10-14 (mardi) - ce qui correspond parfaitement au cycle observé.

**FILTRAGE OUTLIERS** : Les quantités de 392u et 196u du 2025-07-29 sont clairement exceptionnelles (multiples de 98u commandés le même jour, probablement un événement ponctuel, stock de sécurité ou promotion). Sur les 3 derniers mois, hors cet événement, toutes les commandes sont de 98u. Sur N-1, la tendance était également de 98u (août-octobre 2024), avec un événement exceptionnel en juin 2024 (588u cumulés en une journée).

**SAISONNALITÉ** : Aucun impact saisonnier détecté. Les volumes d'octobre 2024 (98u) sont identiques aux commandes récentes normalisées de 2025.

**TENDANCE** : Stable. La demande de fond reste constante à 98u par commande depuis plus d'un an, hors événements ponctuels.

**DÉCISION** : Le 2025-10-14 étant un mardi respectant le cycle bi-mensuel, avec aucun indicateur de rupture ou d'événement spécial, la quantité la plus probable est la baseline standard de **98 unités**.

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: 110u (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: high)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 110u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque Mardi (intervalle ~7j, sauf période 22 juillet - 23 septembre avec écart de 56j)
- **Saisonnalité**: none
- **Tendance**: Stable à 110u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les données montrent un pattern clair: toutes les commandes sont passées un mardi (22/07, 29/07, 23/09). Entre le 22 et 29 juillet, intervalle de 7 jours = rythme hebdomadaire. Puis rupture de 56 jours (probablement congés d'été), suivie d'une reprise le 23/09. La date de prédiction (14/10) est également un mardi, soit 21 jours après la dernière commande (3 semaines).

**FILTRAGE OUTLIERS:**
Toutes les quantités sont identiques à 110u. Aucune variation détectée. Pas d'événements exceptionnels. La stabilité est totale sur les 4 commandes disponibles.

**SYNTHÈSE:**
- Pattern: Mardi fixe avec fréquence hebdomadaire ou bi-hebdomadaire
- Absence de données N-1: pas d'effet saisonnier observable
- Tendance récente: parfaitement stable à 110u (100% des commandes)
- Le 14/10 correspond au pattern temporel (mardi) et à un intervalle cohérent post-reprise

**DÉCISION:**
Sans aucune variation historique et avec un pattern jour/quantité extrêmement régulier, la prédiction la plus précise est 110u. C'est la demande de fond établie avec une confiance élevée (4/4 commandes identiques).

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 6.5u (0j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 57.2u (8j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -14.0u (-3j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -322.3u (-52j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -438.8u (-62j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T08:58:46.090Z*
