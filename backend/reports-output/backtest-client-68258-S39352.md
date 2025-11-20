# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 14
- **Tokens**: 28,633 input + 8,024 output = 36,657 total
- **Coût**: $0.2063 (~20.63¢)
- **Coût par produit LLM**: $0.0147


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (10)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (16j, 3j, 48j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-4u (hors outlier du 2025-07-07)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit montre un pattern irrégulier avec seulement 4 commandes sur 3 mois. Intervalles : 48 jours (07/07→23/07), 48 jours (23/07→09/09), 3 jours (09/09→12/09). Pas de pattern hebdomadaire ou mensuel clair.

**Filtrage outliers**: La commande de 6u du 07/07 sort clairement du profil habituel (2-4u), probablement un événement ponctuel ou un rattrapage. Les 3 autres commandes montrent une cohérence : 2u, 4u, 2u.

**Synthèse décisionnelle**: 
- Aucune donnée N-1 pour valider un effet saisonnier
- Demande de fond stable : moyenne des commandes normales = (2+4+2)/3 = 2,67u ≈ 3u
- Le rythme irrégulier suggère une demande faible mais récurrente
- Le dernier achat (12/09) remonte à 12 jours, pas de rupture flagrante de rythme
- La commande du 24/09 (mercredi) suit logiquement la tendance observée

**Conclusion**: Quantité la plus probable = 3u (compromis entre les 2u et 4u observés, reflétant la demande de fond). Confiance moyenne en raison du faible historique et du pattern irrégulier.

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées (21-43 jours entre commandes, dernièrement 3-21j)
- **Saisonnalité**: none
- **Tendance**: Stable avec faible volume - moyenne ~2.5u, médiane 2u
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le client présente un pattern irrégulier avec 4 commandes sur 3 mois. Intervalles observés: 7/07→19/08 (43j), 19/08→09/09 (21j), 09/09→12/09 (3j). Les deux dernières commandes rapprochées (3j) suggèrent un cycle qui se normalise après une longue pause.

**Filtrage outliers**: La commande de 5u du 09/09 apparaît comme un pic exceptionnel (2x la moyenne des autres commandes: 2+1+2=5/3≈1.67u). Les autres quantités (1u, 2u, 2u) sont cohérentes.

**Profil produit**: Confiture bio artisanale en B2B - produit de niche à rotation lente, typique des assortiments complémentaires. Sans données N-1, impossible d'identifier une saisonnalité.

**Décision**: 12 jours se sont écoulés depuis la dernière commande (12/09). Si le client reprend son rythme normal post-rattrapage, la demande de fond se situe à 2u (valeur modale et médiane). Le pic de 5u était probablement un réassort après rupture, d'où la commande de 2u trois jours après pour compléter.

**Prédiction**: 2 unités - quantité la plus probable basée sur la demande de fond stabilisée, sans surgonfler.

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement variable (16-21-23 jours). Aucun pattern hebdomadaire fixe détecté.
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse récente : 3u → 4u → 1u (outlier?) → 4u → 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Les intervalles entre commandes sont irréguliers (07/07→23/07 : 16j | 23/07→19/08 : 27j | 19/08→09/09 : 21j | 09/09→12/09 : 3j). La dernière séquence 09/09→12/09 montre un intervalle très court (3 jours), ce qui suggère soit une commande de rattrapage, soit un nouveau rythme plus fréquent. **PATTERN DÉTECTÉ** : Les 3 dernières commandes "normales" montrent une quantité récurrente de 4u (12/09, 09/09, 23/07). La commande de 1u du 19/08 semble atypique, possiblement une commande d'ajustement ou de test. **TENDANCE** : Passage de 3u (juillet) vers 4u (septembre) indiquant une légère hausse de la demande de base (+33%). **PRÉDICTION** : Depuis le 12/09, 12 jours se sont écoulés au 24/09. Compte tenu du rythme moyen de ~20 jours et de la stabilisation récente à 4u, la quantité la plus probable est **4 unités**. La baseline théorique se situe à 3,5u (moyenne pondérée excluant l'outlier de 1u), mais la tendance récente forte vers 4u justifie cette prédiction. Confiance medium en raison de l'historique limité (5 points) et de l'irrégularité du rythme.

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes espacées de 51 jours (23 juil → 12 sept), historique très limité
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Historique extrêmement limité (2 commandes seulement)**

**1. ANALYSE RYTHMIQUE**
- Seulement 2 points de données : 23/07 (mer.) et 12/09 (ven.)
- Intervalle : 51 jours entre les 2 commandes
- Prédiction pour le 24/09 : 12 jours après la dernière commande
- Aucun pattern hebdomadaire/mensuel détectable avec si peu de données
- Produit saisonnier (confiture rhubarbe bio) mais sans historique N-1 pour validation

**2. FILTRAGE OUTLIERS**
- Aucun outlier détecté : les quantités (2u puis 1u) sont cohérentes pour un produit de niche bio
- Pas d'événement exceptionnel identifiable

**3. ANALYSE TENDANCE**
- Évolution : 2u → 1u = baisse de 50%
- Hypothèses possibles :
  * Commande d'essai initiale (2u) puis ajustement à la demande réelle (1u)
  * Produit en phase de déclin ou fin de saison rhubarbe
  * Client occasionnel avec demande faible et irrégulière

**4. DÉCISION**
- **Baseline** : 1 unité (dernière commande la plus récente et représentative)
- **Pas d'ajustement saisonnier** : absence de données N-1
- **Pas de rattrapage** : 12 jours seulement depuis dernière commande, trop tôt pour une nouvelle commande si rythme ~50j
- **Prédiction conservatrice** : Si commande intervient, elle sera probablement de 1u (maintien du niveau récent)

**LIMITE MAJEURE** : La probabilité qu'une commande ait lieu le 24/09 est faible (12 jours vs rythme observé de 51j). Si commande, quantité attendue = 1u.

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (16-21-27 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50% (6u→4u→2u→3u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Intervalles: 16j (07/07→23/07), 27j (23/07→19/08), 21j (19/08→09/09), puis 15j jusqu'au 24/09
- Pattern irrégulier mais globalement mensuel (~20j en moyenne)
- Pas de jour de semaine fixe (lun→mer→mar→mar→mer prédit)

**ANALYSE DE TENDANCE:**
- Série descendante: 6u → 4u → 2u → 3u sur 3 mois
- La commande de 6u du 07/07 apparaît comme un outlier (2x la moyenne des autres)
- Stabilisation récente: 2u puis 3u (moyenne 2.5u)
- Tendance baissière mais avec léger rebond à la dernière commande

**FILTRAGE OUTLIERS:**
- 6u est anormal comparé au reste (2-3-4u)
- Sans données N-1, impossible de confirmer saisonnalité
- Les 3 dernières commandes (4u, 2u, 3u) sont plus représentatives

**DÉCISION:**
Pas de saisonnalité identifiable. La demande récente oscille entre 2-3u avec un léger rebond. L'intervalle de 15j depuis la dernière commande (09/09→24/09) est cohérent avec le rythme semi-mensuel. La baseline se situe à 3u (dernière commande = signal le plus récent d'un retour après le creux de 2u). Prédiction: **3 unités**.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance 20-30j (récemment accéléré à ~15j entre les 2 dernières commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse récente (4u → 6u puis maintien à 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Intervalles: 07/07→23/07 (16j), 23/07→19/08 (27j), 19/08→09/09 (21j), 09/09→24/09 (15j prévision)
- Pattern irrégulier mais dans une fourchette 15-27 jours, sans jour fixe de semaine
- Dernière commande il y a 15j suggère que le client est dans son cycle normal de réapprovisionnement

**ANALYSE DE TENDANCE:**
- Volume historique: 6u, 4u, 6u, 6u
- La commande à 4u (23/07) semble être une exception ponctuelle (peut-être ajustement stock)
- Depuis août, stabilisation claire à 6u (2 commandes consécutives)
- Pas de données N-1 pour confirmer saisonnalité, mais aucun élément contextuel suggérant impact saisonnier

**OUTLIERS:**
- Aucun outlier détecté - toutes les quantités dans fourchette normale B2B pour ce format premium

**SYNTHÈSE DÉCISIONNELLE:**
- Baseline établie à 6u basée sur les 2 dernières commandes identiques
- Intervalle de 15j cohérent avec le rythme observé
- Produit premium bio à rotation modérée stable
- Absence d'éléments suggérant changement de volume

**CONCLUSION:** 6 unités représentent la quantité la plus probable pour cette commande de réapprovisionnement standard.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14-21-27 jours). Tendance vers des commandes toutes les 3 semaines environ
- **Saisonnalité**: none
- **Tendance**: Baisse -67% - passage de 6u (début juillet) à 2u (août-septembre)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les 4 dernières commandes montrent des intervalles de 14j (9/09→19/08), 27j (19/08→23/07) et 16j (23/07→07/07). Pattern irrégulier mais avec une fréquence approximative de 2-3 semaines. La prochaine commande au 24/09 serait 15 jours après la dernière (09/09), cohérent avec le rythme observé.

**Analyse de tendance**: Chute nette des volumes : 6u→4u→2u→2u. Les deux dernières commandes se stabilisent à 2u, suggérant un nouveau niveau de demande de fond. La commande de 6u du 07/07 apparaît comme un outlier ou une phase de lancement produit.

**Saisonnalité**: Aucune donnée N-1 disponible. Pas d'élément indiquant un impact saisonnier particulier.

**Décision**: La stabilisation à 2u sur les deux dernières commandes (19/08 et 09/09) constitue le signal le plus fiable. Absence d'éléments justifiant une rupture ou un rattrapage. En agro B2B premium/bio, ce niveau suggère un client régulier mais à faible volume (peut-être épicerie fine, coffee shop). Prédiction: **2 unités**.

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (19j, 43j, 76j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Hausse récente - progression de 2u à 4u sur dernière commande
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse du pattern:** Historique très limité (3 commandes sur 3 mois) avec des intervalles très irréguliers : 19 jours entre juillet-août, puis 21 jours, puis 15 jours jusqu'à la date de prédiction. Pas de pattern hebdomadaire clair, malgré 2 commandes tombant un mardi.

**Tendance détectée:** Progression nette observée : 2u → 2u → 4u. La dernière commande du 9 sept montre un doublement, suggérant soit une accélération de la demande, soit un rattrapage après sous-estimation.

**Filtrage outliers:** La quantité de 4u pourrait être exceptionnelle, mais l'intervalle réduit (15 jours depuis dernière commande) suggère plutôt une croissance organique du produit premium bio.

**Décision:** Sans saisonnalité N-1 et avec un historique court, je privilégie une approche conservatrice basée sur la moyenne pondérée avec surpondération de la dernière observation (4u × 0,5 + 2u × 0,3 + 2u × 0,2 = 2,6u). Arrondi à 3u pour refléter la tendance haussière tout en évitant de surestimer si les 4u étaient exceptionnels. Produit premium bio = demande typiquement plus faible mais croissante.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance ~20-25 jours entre commandes (23j, 27j, 16j)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité 2-4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Les 4 dernières commandes montrent des intervalles de 16 jours (07/07→23/07), 27 jours (23/07→19/08), et 21 jours (19/08→09/09). La prédiction est pour le 24/09, soit 15 jours après la dernière commande du 09/09. Ce délai est cohérent avec le pattern observé (moyenne ~21 jours).

**Pattern de quantité** : Sur les 4 dernières commandes, 3 fois 4u et 1 fois 2u. La commande de 2u (23/07) semble être une anomalie ponctuelle, peut-être un réajustement de stock ou une commande partielle. Les autres commandes sont stables à 4u.

**Tendance** : Pas de tendance haussière ou baissière marquée. Le produit maintient une demande régulière autour de 4 unités par commande depuis 3 mois.

**Saisonnalité N-1** : Aucune donnée historique disponible, donc impossible d'identifier un effet saisonnier.

**Décision** : La baseline théorique est de 3.5u (moyenne des 4 dernières commandes). Cependant, en excluant l'anomalie du 23/07, le mode est clairement 4u. Compte tenu du rythme de commande cohérent et de la stabilité récente, **je recommande 4 unités**. La confiance est moyenne car l'historique est court (seulement 3 mois) et le pattern temporel n'est pas parfaitement régulier.

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (~21-30 jours) - Principalement mardi/mercredi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité (2-6u, moyenne ~4u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les commandes sont espacées irrégulièrement (07/07→23/07=16j, 23/07→19/08=27j, 19/08→09/09=21j). Pattern mensuel approximatif. Depuis la dernière commande du 09/09 (mardi), 15 jours se sont écoulés au 24/09, ce qui reste dans le cycle habituel.

**Filtrage outliers**: La commande de 6u du 19/08 semble être une exception (+50% vs moyenne). Les autres valeurs oscillent entre 2-4u. Cette commande exceptionnelle est isolée.

**Tendance**: En excluant l'outlier de 6u, la demande de fond est stable autour de 3-4u (moyenne des 3 autres commandes = 3.33u). La commande la plus récente (09/09) était de 4u, signalant un retour à la normale après le pic.

**Décision**: Baseline théorique à 4u (valeur médiane et dernière observation). Pas de saisonnalité N-1 détectable, pas de signal de rattrapage imminent. La prédiction de 4u correspond au comportement récurrent du client pour ce produit premium bio à rotation modérée.

</details>




---

## False Positives (8)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Stock prédit: 3.7u (30j restants) → prédit 2u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: 1.9u (18j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 10 | Stock prédit: 2.8u (5j restants) → prédit 10u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Stock prédit: -4.5u (-24j restants) → prédit 2u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 4 | Stock prédit: -5.5u (-60j restants) → prédit 4u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 4 | Stock prédit: -7.0u (-61j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:05:38.024Z*
