# Rapport Backtest - Client DELHAIZE OTTIGNIES

## Contexte

- **Client** : DELHAIZE OTTIGNIES (ID: 52836)
- **Commande réelle** : S39781
- **Date commande** : 2025-10-22 13:41:36
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 22,228 input + 8,800 output = 31,028 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.7% | 15 produits prédits, 7 corrects |
| **Rappel** | 41.2% | 17 produits réels, 7 détectés |
| **F1-Score** | 43.7% | Score équilibré global |

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
| **MAE** | 2.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 67.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (7)

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | 10 | 7.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle à bimensuelle
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage de l'outlier de 4u (juin 2024) qui semble être un événement isolé. La demande de fond se situe autour de 1u. Étape 2: Faible saisonnalité visible, bien qu'un léger ralentissement soit noté en fin d'année N-1. Étape 3: La tendance récente montre une très faible rotation avec une seule commande de 1u le mois dernier. Étape 4: Compte tenu de la faible fréquence et du volume constant de 1u sur les commandes standard, une commande de 1u est recommandée pour maintenir un stock de sécurité minimal sans risque de sur-stockage sur un produit à rotation lente. La confiance est basse dû au manque de données sur les 6 derniers mois (un seul point de donnée en septembre). Pour un produit de niche (Wasabi), le conservatisme est de mise car il n'y a pas de signal de reprise forte observé en octobre N-1 pour justifier davantage de stock par rapport à la commande de septembre 2025-09-22. Le passage d'une commande un mardi plutôt qu'un lundi ne semble pas indiquer un besoin supplémentaire mais plutôt un réajustement de stock ponctuel par le client après épuisement de son unité habituelle.
    
    SYNTHÈSE: 1 unité (Base stable, tendance conservatrice). Aucun signal de croissance du volume ne justifie une quantité de 2 ou plus sans historique récent conséquent. Le risque de rupture sur un produit spécifique de 250ml est ici secondaire par rapport au risque de péremption ou d'immobilisation de stock inutile pour une référence à unitaire faible fréquence (Slow mover). On maintient le rythme historique récent de 1u par commande pour assurer le fond de rayon du client B2B tout en évaluant l'éventuelle accélération lors de la prochaine commande si le cycle se resserre.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont très faibles et constants (0 à 3u). Étape 2 (Saisonnalité): Impact faible, bien que les données N-1 montrent une légère activité en septembre/octobre (3u en sept 2024). Étape 3 (Tendance): La dernière commande date d'il y a un mois (1u), indiquant une rotation lente. Étape 4 (Recommandation): On base la commande sur la moyenne lissée des périodes actives. Compte tenu de la faible fréquence et du volume habituel, 2 unités permettent de couvrir le mois à venir sans risque de surstockage majeur pour ce produit de niche (Mayonnaise Truffe). Une approche conservatrice est privilégiée vu le manque de données récentes denses sur 2025-Q3/Q4-211025-B2B-agro-truffes-mayo-niche-récurrence-faible-30d-cycle-stabilisé-2u-max-reco-fin-mardi-conforme-historique-période-sept-oct-2024-vs-2025-delta-1u-vers-2u-sécurité-stock-min-b2b-weck-250ml-jf001-sku-check-ok-json-valid-output-only-strict.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 3u (300.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière avec un cycle de 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée, passant de 4u à 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les pics à 4u en Juin et Septembre N-1 semblent être des réapprovisionnements exceptionnels ou promotions; la demande de fond se stabilise autour de 2u. ÉTAPE 2 (Saisonnalité) : Faible impact saisonnier visible, bien que la mayonnaise puisse être corrélée aux périodes estivales, les volumes restent faibles en automne. ÉTAPE 3 (Tendance) : La dernière commande (Septembre 2025) confirme un volume de 2u, montrant une stabilité à bas volume. ÉTAPE 4 (Recommandation) : Malgré l'absence de commande en Octobre N-1, le stock doit être maintenu. Une quantité de 2u est recommandée pour couvrir le mois à venir sans risque de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (demande ponctuelle tous les 1-2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume extrêmement faible (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune valeur aberrante n'est détectée car les volumes sont soit nuls soit unitaires. ÉTAPE 2 (SAISONNALITÉ): Le produit ne montre aucune récurrence saisonnière significative entre N-1 et la période actuelle. ÉTAPE 3 (TENDANCE): La demande est extrêmement faible avec une seule commande réelle de 1 unité enregistrée le mois dernier. ÉTAPE 4 (RECOMMANDATION): Compte tenu du faible volume de rotation et du profil B2B sporadique, la recommandation minimale de 1 unité est préconisée pour répondre à un besoin immédiat sans risque de sur-stockage sur un produit à faible rotation. La confiance est faible en raison de la pauvreté des données historiques.

</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 3u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.25u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 7u (70.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (tous les 1 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (3-4u)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Retrait de la commande à 0u (erreur ou annulation). La moyenne sur les commandes réelles se situe à 3.25u. Étape 2 (Saisonnalité): Pas de corrélation évidente entre 2024 et 2025 sur ce SKU; les volumes restent faibles et sporadiques. Étape 3 (Tendance): La dernière commande (septembre) de 3u est cohérente avec la moyenne historique. Le produit n'est pas sur une phase de croissance. Étape 4 (Recommandation): En l'absence de récurrence forte et face à une faible fréquence de rotation, une commande de 3 unités (volume de base observé) permet de couvrir la demande sans risquer un sur-stockage sur un produit bio dont la DLUO peut être un facteur limitant.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:20:01: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-05 08:59:36: 1u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:20:01: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:51:21: 3u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 07:01:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:51:21: 4u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 07:01:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 07:01:13: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:51:21: 4u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 0u
- 2024-05-27 11:55:31: 4u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 10u

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: -0.8u (-12j restants) → prédit 2u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | Stock prédit: -1.1u (-16j restants) → prédit 3u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: -1.5u (-27j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: 0.2u (4j restants) → prédit 3u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | Stock prédit: 0.7u (9j restants) → prédit 4u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -0.0u (0j restants) → prédit 4u mais non commandé |


---

## False Negatives (10)

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
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.5u (51j restants > seuil 30j) |
| [JF021] JF PICKLES 350 ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock suffisant: 0.6u (75j restants > seuil 30j) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 4 | Stock suffisant: 1.8u (442j restants > seuil 30j) |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock suffisant: 1.8u (442j restants > seuil 30j) |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:18.619Z*
