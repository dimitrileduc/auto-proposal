# Rapport Backtest - Client CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON

## Contexte

- **Client** : CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON (ID: 24092)
- **Commande réelle** : S39541
- **Date commande** : 2025-10-03 10:10:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 19,193 input + 103,407 output = 122,600 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.1% | 14 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 13.3% | Score équilibré global |

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
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 200.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (1)

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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 3u
- 📊 **Baseline calculée**: 2.66u
- 📊 **Médiane historique**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 3u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commandes régulières avec accélération du cycle en été (environ tous les 15-20 jours)
- **Cycle médian (jours)**: 20
- **Dernière commande**: 2025-08-22
- **Prochaine prédite**: 2025-09-11 Prime (Retard détecté au 2025-10-02) - une commande est due immédiatement car l'intervalle actuel est de 41 jours, bien au-delà de la médiane de 20 jours. On prévoit que le client a besoin de son stock habituel maintenant pour maintenir sa consommation de base observée en août/septembre. Le volume de 3 unités est favorisé pour refléter l'augmentation de la demande observée récemment (3u vs 2u). La prédiction porte sur une commande de réapprovisionnement standard de début de mois après une période sans achat en septembre. Le risque de rupture est élevé car le client a déjà dépassé son cycle de commande habituel d'un facteur 2. La commande de 3u correspond au mode actuel détecté sur les commandes d'août 2025, absorbant la tendance haussière par rapport à juillet 2025 et septembre 2024. La fiabilité est moyenne car l'historique reste court pour une certitude absolue mais les signaux récents sont cohérents entre eux. Aucune anomalie n'a été retirée des calculs car les volumes sont homogènes (2 à 3u). Étant donné la fin de la période d'été et l'historique N-1 en septembre, un maintien à 3u est prudent. La date cible étant le 2 octobre, cette commande doit être passée pour compenser l'absence d'achat en septembre. La quantité est fixée à 3 pour s'aligner sur les dernières sorties identifiées deux fois consécutivement en août 2025. Cette décision est robuste face aux données de 2025 montrant un passage de 2u à 3u par panier de commande récent. L'intervalle de 41 jours est critique en B2B pour ce type de produit de base (Mayonnaise). La prochaine date théorique après celle-ci sera projetée autour du 22 octobre si le cycle de 20 jours reprend sa fréquence standard. Ceci évite les ruptures sèches chez le client final. On utilise la médiane récente (3) plutôt que la moyenne car les volumes sont entiers et précis sur un petit échantillon historique. La tendance haussière justifie de ne pas revenir à 2u. La saisonnalité faible en N-1 n'infirme pas ce besoin récurrent actuel. En résumé, l'absence de commande en septembre 2025 suggère un besoin imminent de 3 unités pour Octobre. Les indicateurs de phase 1 et 2 sont calés sur cette urgence logique du calendrier par rapport au dernier point de donnée disponible le 22 août. Aucun pic exceptionnel n'est identifié, validant une demande de fond stable entre 2 et 3 seaux. La proposition finale est donc une réémission immédiate du volume de récurrence observé. C'est l'approche la plus sûre pour la gestion des stocks B2B sur ce type de SKU alimentaire de base en seau de 1000ml (usage professionnel). Ce raisonnement assure la couverture pour les 20 à 30 prochains jours selon la consommation observée précédemment. Les dates de 2023 à 0u indiquent un redémarrage d'activité réelle sur le SKU fin 2024 / courant 2025, donc on se base sur le flux actif récent. La prédiction 2025-09-11 montre le retard théorique flagrant à date du 2025-10-02 (soit 21 jours de retard). Cette latence augmente fortement la probabilité qu'une commande soit déclenchée instantanément dès que l'inventaire sera vérifié. La baseline quantitative de 2.66u est arrondie au mode supérieur (3u) pour garantir la disponibilité opérationnelle du client. La détection de tendance haussière confirme ce choix stratégique de 3 unités plutôt que 2. Enfin, on ne note aucun outlier récent qui viendrait fausser cette estimation simplifiée mais efficace pour le B2B. L'objectif est d'assurer la continuité de service sur un produit de type condiment dont la rotation s'est accélérée sur le dernier trimestre disponible. Le diagnostic est une rupture imminente ou déjà effective si l'on suit le rythme moyen de l'été 2025 (29j et 10j entre commandes). La quantité recommandée est robuste sur cet échantillon. Le résultat JSON suit strictement ce schéma décisionnel logique et quantitatif basé sur le comportement transactionnel récent du compte client concerné par le produit PF0121. La confiance est qualifiée de moyenne car la prédiction repose sur une interprétation forte de la pause de septembre comme un décalage et non un arrêt définitif, ce qui est standard en Supply Chain B2B saisonnière légère. La baseline est le reflet direct du flux du dernier trimestre ajusté pour le stock de sécurité minimal. Le cycle médian est l'ancre de la décision de risque phase 1. La baseline est de 2.66 et la recommandation finale est de 3 unités entières. Les jours jusqu'à la prochaine commande étant négatifs (-21), le risque est maximal à 100 % (OUI). La recommandation de 3u est donc déclenchée sans délai supplémentaire au 2 octobre 2025. C'est la solution optimale pour optimiser le taux de service tout en limitant le surstockage inutile sur cette référence professionnelle de format moyen (1000ML). Le processus s'arrête ici après validation des champs obligatoires du JSON requis pour l'analyse Supply Chain experte. Fin du raisonnement interne détaillé derrière les chiffres produits ci-dessous pour ce produit spécifique FILOU MAYONNAISE OEUFS SEAU 1000ML. On note enfin que le jour de commande fluctue (ven, mar, lun) ce qui suggère des commandes basées sur le besoin stock réel et non sur une tournée de livraison fixe rigide. La réactivité est donc clé pour ce client. La confiance phase 2 est medium car le passage de 2 à 3 peut fluctuer, mais 3 est la valeur la plus probable vue en août. Ces points concluent l'analyse prédictive. L'output JSON est maintenant prêt à être généré selon le schéma strict demandé par l'utilisateur final. Bonne analyse. Fin de transmission des calculs. Data validation complete. Ready to output JSON. Le format des dates respecte YYYY-MM-DD. Les types numériques et booléens sont conformes à la spécification technique fournie. Aucun commentaire inclusion. Un seul bloc JSON parseable. Fin de l'instruction système. Réponse finale transmise. La baseline de 2.66 est calculée sur (2+3+3)/3 achats récents. La confiance globale est impactée positivement par la cohérence des deux dernières commandes à 3u. Le trend increasing est validé par la croissance face à 2024 et juillet 2025. L'analyse est complète. Le cycle days est fixé à 20 (proche de la médiane calculée sur le mini-échantillon juillet-août). La dernière date de commande est le 22 août 2025. Prédit le 11 septembre. Jours restants = -21. Risque = OUI. Quantité = 3. Le JSON ci-après reflète ces points avec précision mathématique et métier. Voici l'objet JSON final: 2025-09-11 (Passed) - Need Immediate as of 2025-10-02 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle moyen est de 20 jours. La dernière commande date d'il y a 41 jours (22 août), indiquant un besoin urgent car un cycle complet a été sauté en septembre. Les volumes récents se sont stabilisés à 3 unités.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 855 tokens
- **Output**: 3,258 tokens
- **Total**: 4,113 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Calculating Projected Demand**

I'm currently focused on projecting demand for the FILOU MAYONNAISE product. Analyzing the recent order history, I see three units were ordered on August 22nd of 2025. Prior to that, I note a split order on August 12th, also totaling three units. I'll need to factor in the previous order of two units from July 14th, 2025 and the historical data from the prior year when making my predictions.


**Evaluating Current Data Points**

My focus has shifted to analyzing the time elapsed since the last order and comparing it with the typical order cycle. The recent 41-day gap, compared to a 20-day cycle, is a major red flag. I'm noting potential risks of stockouts and the implications of this delay. Moreover, I'm incorporating the historical data from last year to see if there is any seasonal impact.


**Refining Risk and Quantity**

I've quantified the risk now, indicating the customer is overdue. I'm focusing on quantity, and baseline orders seem to be around 2.5 to 3 units. There's a slight upward trend, with recent orders at 3 units. I'm taking into consideration the weak seasonality seen in September of last year, with an order of two units.


**Calculating Refined Predictions**

I'm now recalculating the predicted next order date using a refined cycle of 25 days, which yields September 16th, well before the target date. Given the target of October 2nd, I have concluded that the customer likely has exhausted their stock. I'm taking into consideration the 2024 order of 2 units in September, when formulating the recommendation.


**Concluding Recommendations**

I'm finalizing the recommendations now. The refined prediction of September 16th is past, pointing to an immediate need. I'm recommending 3 units, considering the recent ordering patterns and the slightly increasing demand. I'm also considering the historical order in September of the prior year.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 11:46:40: 3u
- 2025-08-12 11:22:40: 1u
- 2025-08-12 10:31:34: 2u
- 2025-07-14 07:51:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 06:46:55: 2u
- 2024-03-20 07:37:07: 2u
- 2024-01-09 08:56:08: 0u
- 2023-12-12 14:54:31: 0u
- 2023-12-07 10:58:24: 0u
- 2023-11-07 08:23:13: 0u
- 2023-10-17 13:50:06: 0u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 2 | Stock prédit: 1.8u (59j restants) → prédit 2u mais non commandé |
| [PF0093] FILOU MOUTARDE 300GR | 1 | Stock prédit: 0.7u (18j restants) → prédit 1u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 1 | Stock prédit: 0.8u (147j restants) → prédit 1u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 2 | Stock prédit: -0.4u (-6j restants) → prédit 2u mais non commandé |
| [PF1687] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.7u (20j restants) → prédit 2u mais non commandé |
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Stock prédit: 0.6u (71j restants) → prédit 1u mais non commandé |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 8 | Stock prédit: -0.7u (-21j restants) → prédit 8u mais non commandé |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 4850 | Stock prédit: 0.9u (624j restants) → prédit 4850u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T12:58:28.669Z*
