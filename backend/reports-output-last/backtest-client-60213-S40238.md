# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S40238
- **Date commande** : 2025-11-14 10:35:55
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 20
- **Tokens**: 28,534 input + 43,188 output = 71,722 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.2% | 23 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 68.6% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (12)

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
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JOY08] JOY! Organic Raspberry Jam 370g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: monthly
- **Saisonnalité**: none
- **Tendance**: decrease
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit KOKO02 présente une commande le mercredi 2025-10-22 de 1u. Cependant, la date de prédiction (2025-11-13) est un jeudi, donc hors cycle. Les commandes précédentes (2025-09-03: 3u, 2025-09-24: 1u, 2025-10-22: 1u) montrent une tendance à la baisse vers 1u. Aucune donnée N-1 ne permet de valider une saisonnalité. La prochaine commande attendue est le mercredi 19 novembre 2025. Le produit étant stable à 1u, je prédis une quantité de 1u.

</details>


<details>
<summary><strong>2. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel avec variations (3-4 semaines entre commandes), toujours le mercredi
- **Saisonnalité**: none
- **Tendance**: stable avec fluctuations aléatoires (1-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Prédiction pour date hors cycle (jeudi vs mercredi habituel). Prochaine commande mercredi 19/11. Volume stable autour de 2u en moyenne. Dernière commande 2u (22/10) reflète mieux l'état actuel que les variations plus anciennes. Pas de données N-1.

</details>


<details>
<summary><strong>3. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle avec jour fixe (mercredi), intervalles 21-28 jours
- **Saisonnalité**: none
- **Tendance**: Stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le pattern est mensuel (21-28j) toujours un mercredi. La date de prédiction est un jeudi (hors cycle). D'après les règles spéciales Agro B2B, je dois prédire la quantité de la prochaine commande mercredi. Les volumes sont micro-stables (2-3u) avec une claire stabilisation à 2u sur les deux dernières commandes. Le pic à 3u est isolé et ancien (2025-09-03). En micro-volumes B2B, la probabilité de répéter 2u est >80%. MAPE minimal = 2 unités.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles 21j puis 28j, proche d'un cycle mensuel mais focalisé sur mercredi. Aucune outlier majeur détecté (2-4u, écart max 33%).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -2.9999999999999996u

**🧠 Raisonnement LLM:**
**Analyse Rythmique** :
- Pattern clair : commandes le mercredi uniquement (2025-09-03, 2025-09-24, 2025-10-22)
- L'intervalle varie (21-28j) mais le jour est constant → cycle mensuel avec jour fixe
- Date prédite 2025-11-13 = JEUDI → **jour hors cycle**
- Prochaine commande prévisible : mercredi 2025-11-19

**Outliers** :
- Aucun outlier significatif dans 2-4u (écart < 2× moyenne)
- Variations normales pour produit B2B stable

**Décision** (règle données limitées) :
- Privilégier dernière valeur cohérente avec tendance
- Dernière commande : 3u
- Moyenne : 3u
- Tendance : stable
- → Prochaine commande mercredi : **3 unités**

**Risque** : Données très réduites (3 points), cycle mensuel non confirmé sur long terme.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuelle_irreguliere
- **Saisonnalité**: none
- **Tendance**: stable_legere_baisse
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données récentes limitées (3 points) sans historique N-1. Commandes toujours le mercredi avec intervalles irréguliers (21-28 jours). Tendance stable autour de 2-3 unités avec dernière commande à 2u. Jeudi étant hors cycle, prédiction porte sur la prochaine commande mercredi probabile. Dernière valeur la plus représentative de l'état actuel.

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune fréquence stable détectée (intervalle de 49 jours entre les 2 commandes)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
<p><strong>1. Analyse rythmique et cycle</strong></p><ul><li><strong>Données disponibles</strong>: 2 commandes seulement sur 3 derniers mois (intervalle de 49 jours entre le 03/09 et le 22/10)</li><li><strong>Jour habituel</strong>: Les deux commandes tombent un mercredi (mais le rythme n'est pas hebdomadaire ni mensuel)</li><li><strong>Statut du 13/11</strong>: Jeudi = <span style="color:#FF6B35;font-weight:bold">hors cycle habituel</span></li></ul><p><strong>2. Application règle spéciale &lsquo;jour hors cycle&rsquo;</strong></p><p>Conformément aux guidelines : <em>&laquo; Si la date de prédiction ne correspond PAS à leur jour habituel &rarr; N&rsquo;utilise JAMAIS 0, prédit la quantité de la PROCHAINE commande probable &raquo;</em></p><p>Le 13/11 &eacute;tant hors cycle, je dois pr&eacute;voir la commande qui suivra cette date (probablement le mercredi 19/11 ou ult&eacute;rieur).</p><p><strong>3. Gestion outliers &amp; tendance</strong></p><ul><li>Volume extr&ecirc;mement faible : 1u &rarr; 2u</li><li>&Eacute;cart de +100% sur 49 jours, mais avec seulement 2 points, cela ne constitue pas une tendance de croissance fiable</li><li>Aucun pic aberrant (40u type promotion), juste une progression marginale possible</li></ul><p><strong>4. Synth&egrave;se &amp; Calcul</strong></p><table style="width:100%;border-collapse:collapse;margin:10px 0;"><tr><th style="border:1px solid #ddd;padding:6px;background:#f4f4f4;text-align:left;">M&eacute;thode</th><th style="border:1px solid #ddd;padding:6px;background:#f4f4f4;text-align:left;">R&eacute;sultat</th><th style="border:1px solid #ddd;padding:6px;background:#f4f4f4;text-align:left;">Score pertinence</th></tr><tr><td style="border:1px solid #ddd;padding:6px;">Moyenne simple (1+2)/2</td><td style="border:1px solid #ddd;padding:6px;">1,5u &rarr; 2u arrondi</td><td style="border:1px solid #ddd;padding:6px;color:#FF6B35;">Moyenne faible (sur-pondère la valeur ancienne)</td></tr><tr><td style="border:1px solid #ddd;padding:6px;">Derni&egrave;re valeur pond&eacute;r&eacute;e</td><td style="border:1px solid #ddd;padding:6px;"><strong>2u</strong></td><td style="border:1px solid #ddd;padding:6px;color:#4CAF50;">**Recommand&eacute;e** (coh&eacute;rente avec guideline &lsquo;donn&eacute;es limit&eacute;es&rsquo;)</td></tr><tr><td style="border:1px solid #ddd;padding:6px;">Tendance +50% (sur 49j)</td><td style="border:1px solid #ddd;padding:6px;">3u</td><td style="border:1px solid #ddd;padding:6px;color:#FF6B35;">Sur-gonflage (extrapolation non fond&eacute;e sur 2 pts)</td></tr></table><p><strong>5. D&eacute;cision finale</strong></p><p>Privilégier la <strong>dernière valeur cohérente (2u)</strong> comme meilleur estimateur pour minimiser le MAPE sur des données éparses. Ce niveau reflète le volume actuel sans extrapolation hasardeuse, en respectant la règle d&rsquo;or &laquo; précision &gt; prudence &raquo; du supply chain B2B agroalimentaire.</p>

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle/trimestrielle irrégulière (tous les ~3-4 semaines) sur jour fixe (mercredi)
- **Saisonnalité**: none
- **Tendance**: stable_1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
> **ANALYSE RYTHMIQUE**
> - Cycle: Commandes le MERCREDI, toutes les 3-4 semaines
> - Dernière commande: 2025-10-22 (mer.)
> - Fréquence: ~25 jours d'intervalle moyen
> - Date de prédiction: JEUDI 2025-11-13 (hors cycle)
> - Prochaine commande attendue: Mercredi 19 novembre 2025
> 
> **FILTRAGE OUTLIERS**
> - Valeurs: [1u, 1u, 1u]
> - Variance: 0 → Aucun outlier
> - Stabilité absolue du volume
> 
> **DÉCISION**
> La date demandée est un jeudi, hors du jour habituel (mercredi). Les règles exigent de prédire la quantité de la PROCHAINE commande, pas 0. Le pattern montre une commande régulière de 1u le mercredi tous les ~4 semaines. La prochaine commande sera donc le mercredi 19 novembre pour 1u. Aucun élément ne suggère une variation du volume.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuelle irrégulière
- **Saisonnalité**: none
- **Tendance**: décroissante stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande historiquement le mercredi avec un intervalle de 21-28 jours. Le 2025-11-13 étant un jeudi, je dois prédire la quantité de la prochaine commande mercredi probable (2025-11-19) selon la règle spéciale. Les 2 dernières commandes sont stables à 1u, la précédente de 2u représentant un test initial. La tendance récente et la valeur la plus probable sont donc de 1u. Aucune donnée saisonnière N-1 ne contredit ce pattern.

</details>


<details>
<summary><strong>9. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes pour établir une fréquence fiable. Une seule commande sur 3 mois suggère un cycle exceptionnellement long (>70 jours) ou une commande ponctuelle.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Produit en phase test/abandon probable. Commande unique de 1u le 2025-09-03 (mer.), alors qu'en B2B agroalimentaire les MOQ sont bien supérieurs. Aucune récidive en >70 jours confirme l'arrêt. La prédiction 0 respecte la règle d'exception pour produit abandonné tout en maximisant la précision (MAPE minimal).

</details>


<details>
<summary><strong>10. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune commande historique disponible (N-1 et période récente vides)
- **Saisonnalité**: none
- **Tendance**: neutral
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Absence totale de données historiques sur l'année précédente et les 3 derniers mois. En Supply Chain B2B agroalimentaire, cela signifie qu'aucun client n'a commandé ce produit sur une période >15 mois, indiquant un produit inactif ou retiré du catalogue. Prédire une quantité positive créerait un biais majeur (MAPE extrême). La règle 'hors cycle' ne s'applique pas car il n'existe pas de pattern de commande connu.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 1u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [KOKO01] KOKO Kombucha original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-24 13:05:32: 2u
- 2025-09-03 06:56:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 3u
- 2025-09-24 13:05:32: 2u
- 2025-09-03 06:56:39: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-24 13:05:32: 3u
- 2025-09-03 06:56:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 2u
- 2025-09-03 06:56:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 1u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:39: 1u
- 2025-09-24 13:05:32: 1u
- 2025-09-03 06:56:39: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (11)

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
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.5u (25j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 0 | Stock prédit: -1.1u (-26j restants) → prédit 0u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock prédit: 0.2u (14j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 6 | Stock prédit: -0.7u (-38j restants) → prédit 6u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 0 | Stock prédit: -0.6u (-34j restants) → prédit 0u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 8 | Stock prédit: -0.9u (-51j restants) → prédit 8u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:15:45.002Z*
