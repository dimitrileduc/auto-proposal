# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 31,595 input + 10,141 output = 41,736 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.8% | 26 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 70.0% | Score équilibré global |

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
| **MAE** | 120.21 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -34.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (14)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 651 | 868 | 217.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 155 | 155 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 93 | 124 | 31.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 62 | 93 | 31.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 93 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel ou bi-mensuel le jeudi/vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u par unité de commande
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité extrême dans les volumes de commande (multiples de 434u correspondants probablement à une palette complète ou une unité logistique standard). ÉTAPE 1: L'unique commande de 868u en juillet 2024 est identifiée comme un doublement ponctuel (outlier). ÉTAPE 2: La saisonnalité N-1 montre une activité stable en octobre/novembre avec le même volume (434u). ÉTAPE 3: La tendance récente est parfaitement stable. La commande du 7 novembre (434u répétée 3 fois le même jour) suggère un réapprovisionnement massif récent. ÉTAPE 4: Étant donné que nous sommes mardi et que le cycle habituel tombe en fin de semaine, une commande de base d'une unité logistique (434u) est recommandée pour maintenir le stock de sécurité sans risque de sur-stockage, tout en respectant la structure de commande historique du client.

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 62u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 41.3u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 31u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire flexible (jeu/ven) avec lissage bimensuel
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive -35% vs N-1
- **Outliers détectés**: 186u, 155u, 124u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Les gros volumes de juillet 2024 (93u à 186u) suggèrent des promotions estivales ou des stocks de mise en avant, à exclure pour la base. Étape 2 (Saisonnalité) : Le produit 'Kids 180G' montre un pic estival (juin/juillet), nous sommes actuellement en période creuse de novembre. Étape 3 (Tendance) : Les volumes récents se sont stabilisés autour de multiples de 31u (unité de conditionnement probable). La fréquence est passée de bimensuelle à hebdomadaire fin octobre/début novembre. Étape 4 (Recommandation) : Bien que la moyenne lissée soit de 41u, le groupement récent du 07/11 (124u total sur 3 lignes) indique un besoin de stocker pour la semaine. Pour un mardi, on recommande 2 unités logistiques (62u) pour couvrir le milieu de semaine jusqu'au prochain cycle habituel du vendredi.

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ) le jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u par commande avec consolidation récente
- **Outliers détectés**: 75u

**🧠 Raisonnement LLM:**
Étape 1: Les commandes sont extrêmement stables à 25u. Le pic du 07/11/2025 (3x25u le même jour) est traité comme un événement de consolidation de commande groupée plutôt qu'une hausse de consommation. Étape 2: La saisonnalité N-1 montre une activité constante en automne sans pic majeur. Étape 3: Le rythme bimensuel est respecté (16/10, 30/10, 07/11). La demande actuelle (mardi 11/11) intervient seulement 4 jours après la dernière livraison massive du vendredi 07/11. Étape 4: Bien que la commande arrive hors cycle habituel, l'historique montre que les besoins sont toujours satisfaits par multiples de 25u. On maintient la commande standard de 25u pour couvrir la prochaine période de 15 jours.

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 50u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 50u (confidence: high)
- 📊 **Baseline N-1**: 41.67u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ) le jeudi ou vendredi
- **Saisonnalité**: strong
- **Tendance**: Hausse significative du volume par commande (de 25u à 50u)
- **Outliers détectés**: 75u, 100u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage des données montrant que les commandes de 75u et 100u le 07/11 sont des anomalies promotionnelles ou de restockage massif (outliers). La base stable de 2024 était de 25u par unité de commande. Étape 2: La saisonnalité N-1 confirme une forte activité en octobre/novembre avec des commandes groupées régulières. Étape 3: On observe un doublement de la demande de fond récente (50u le 07/11 vs 25u historiquement). Étape 4: La recommandation de 50u correspond à la nouvelle demande de fond observée, en ignorant les pics promotionnels récents pour éviter le sur-stockage, tout en sécurisant le volume face à la tendance haussière de fin d'année.

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées par blocs de 40u, cycle bimensuel (tous les 14-15 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 40u par unité de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité extrême du produit (PF1699) avec une unité logistique fixe de 40u par ligne de commande. 1. DE-EVENTING: Pas d'outliers détectés, chaque interaction est de 40u exactement. 2. SAISONNALITÉ: Faible influence, le volume reste constant entre la période actuelle et N-1 (septembre/octobre). 3. TENDANCE: Le rythme s'est intensifié récemment (passant de bimensuel à hebdomadaire fin octobre/début novembre avec 3 commandes le 07/11). 4. RECOMMANDATION: La date actuelle (mardi 11/11) suit de très près les commandes massives du vendredi 07/11 (120u au total). Pour éviter le surstockage tout en maintenant le flux habituel, une commande standard d'une unité logistique (40u) est recommandée.

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel principalement le jeudi, avec accélération récente en novembre
- **Saisonnalité**: weak
- **Tendance**: Hausse de fréquence significative en novembre
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La valeur de 868u du 07/11 est identifiée comme un doublement exceptionnel (outlier) par rapport à la constante de 434u observée sur 100% des autres transactions historiques. Étape 2 (Saisonnalité): Pas de pic majeur à la même période en N-1, le produit est stable. Étape 3 (Tendance): On observe un regroupement de 3 commandes le même jour (07/11) totalisant 1736u, suggérant un besoin de stock important ou un reliquat. Étape 4 (Recommandation): Malgré le pic récent, l'unité standard de commande reste 434u. Compte tenu de la commande massive du 7 novembre, il est prudent de revenir au volume de base unitaire de 434u pour éviter le surstockage après l'anomalie de volume de la semaine passée.

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ), principalement le jeudi ou vendredi.
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par commande unitaire
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité exceptionnelle du produit PF1694 avec une unité de base de commande (UVC/Colis) fixée à 434 unités. ETAPE 1: La valeur de 868u du 07/11 est identifiée comme un doublement de commande (outlier) probablement lié à un regroupement logistique. ETAPE 2: Aucune saisonnalité marquée n'est visible entre N-1 et N sur cette période d'automne. ETAPE 3: La tendance est strictement stable. ETAPE 4: Bien que la commande tombe un mardi (hors cycle de fin de semaine), le volume habituel de 434u est la recommandation la plus sûre pour maintenir le stock sans créer de sur-stockage, étant donné que le stock de sécurité semble calibré sur ce multiple.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14-21 jours) majoritairement le jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u par unité de commande
- **Outliers détectés**: 1302u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La quantité standard observée est systématiquement de 434u. Le volume de 1302u du 07/11/2025 est un outlier (3x la normale) probablement lié à un groupage de commandes ou une promotion. ÉTAPE 2 (Saisonnalité): Les données N-1 montrent une activité régulière de fin d'été à fin d'automne sans pic massif de saisonnalité sur ce produit stable (tartinade bio). ÉTAPE 3 (Tendance): La tendance est à la stabilité parfaite (multiple de 434u). Le jour actuel est un mardi, alors que les commandes tombent d'habitude le jeudi/vendredi. ÉTAPE 4 (Recommandation): On se base sur le fond de cuve de 434u. Bien que la dernière commande (07/11) soit très récente (4 jours), l'aspect bimensuel suggère qu'un réapprovisionnement standard de 434u suffit pour maintenir le stock sans risque de sur-stockage après le pic exceptionnel du 07/11.

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 651u vs Médiane: 868u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 651u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 217u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) le jeudi
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +50% sur le volume de base
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
Étape 1: Le volume standard historique est de 434u. Les occurrences de 868u sont identifiées comme des doubles commandes ou consolidations. Étape 2: N-1 montre une stabilité parfaite à 434u toutes les deux semaines en octobre/novembre. Étape 3: On observe une accélération récente (commandes rapprochées entre le 30/10 et le 07/11) et une augmentation des volumes cumulés par session. Étape 4: Le passage du jeudi au vendredi puis ce mardi indique un besoin de stock plus fréquent. Je recommande 651u (434u base + 50% de stock de sécurité/tendance) pour couvrir cette accélération tout en restant conservateur face aux pics de 868u qui pourraient sur-stocker.

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 155u vs Médiane: 93u (Réel: 155u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 155u (confidence: high)
- 📊 **Baseline N-1**: 124u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ)
- **Saisonnalité**: strong
- **Tendance**: Hausse significative +100% vs N-1
- **Outliers détectés**: 186u

**🧠 Raisonnement LLM:**
L'analyse montre une structure de commande bimensuelle très régulière. ÉTAPE 1: La commande de 186u du 07/11 est traitée comme un outlier car elle représente le double du volume standard par ligne. La demande de fond s'établit à 124u par cycle (4 multiples de 31u). ÉTAPE 2: On observe une saisonnalité forte avec une concentration des volumes sur octobre/novembre. ÉTAPE 3: La tendance est à la hausse par rapport à l'an dernier (volumes cumulés par cycle passés de ~124-186u en 2024 à ~341u brut en 2025). ÉTAPE 4: La date actuelle (mardi) arrive seulement 4 jours après la massive commande du vendredi 07/11 (341u total). Il est probable que le client anticipe un besoin ou complète un stock avant la prochaine grosse échéance de 14 jours. Recommandation conservatrice de 155u (5 unités logistiques de 31) pour soutenir la croissance de demande observée sans créer de surstock après le pic du 07/11.

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: high)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 31u (25.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ), historiquement le jeudi, glissant vers le vendredi
- **Saisonnalité**: strong
- **Tendance**: Hausse significative +200% vs N-1
- **Outliers détectés**: 124u, 124u

**🧠 Raisonnement LLM:**
L'analyse montre une accélération majeure des volumes par rapport à l'année précédente (moyenne de 31u/ligne en 2024 vs 93u/ligne en 2025). Le produit suit un cycle bimensuel strict (intervalles de 14 jours : 17/10, 31/10, 07/11). La commande actuelle du mardi 11/11 intervient seulement 4 jours après la massive réception du vendredi 07/11 (310u cumulées). Cependant, la structure de commande suggère une préparation de stock pour la période de fin d'année, typique de l'agroalimentaire bio en novembre. Les pics à 124u sont traités comme des outliers de restockage. La recommandation se base sur l'unité de commande standard actuelle (93u) pour maintenir le flux sans sur-stocker après le gros volume du 07/11.

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 62u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Baseline N-1**: 46.5u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 31u (33.3%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ le jeudi/vendredi)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -15% vs N-1
- **Outliers détectés**: 155u, 93u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : L'historique N-1 montre des pics à 155u et 93u liés à des groupements de commandes. La base stable se situe entre 31u et 62u. ÉTAPE 2 (Saisonnalité) : En octobre/novembre 2024, le volume cumulé bimensuel était d'environ 200u. En 2025, nous observons une réduction des volumes sur les mêmes périodes. ÉTAPE 3 (Tendance) : La dernière commande du 07/11 (vendredi) cumulait 186u (31+93+62). La demande actuelle intervient seulement 4 jours après, ce qui est inhabituel pour ce cycle. ÉTAPE 4 (Recommandation) : Bien que le cycle bimensuel vienne d'être livré, la date actuelle (mardi) suggère un besoin de réajustement ou une commande de complément. On se base sur le multiple standard de 31u. Une recommandation de 62u (2 unités logistiques de base) permet de couvrir la demande de fond sans risquer le sur-stockage en période de baisse de régime.

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 93u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (Jeudi/Vendredi)
- **Saisonnalité**: none
- **Tendance**: Hausse marquée (Volume x3.5 sur la dernière semaine)
- **Outliers détectés**: 217u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Les commandes du 30/10 totalisent 62u, constituant la base de référence. Le cumul du 07/11 (217u) est traité comme un pic exceptionnel probablement lié à une mise en avant ou un stockage de pré-fêtes. ÉTAPE 2 (Saisonnalité): Pas de données N-1, mais le secteur suggère un impact à venir pour les fêtes. ÉTAPE 3 (Tendance): Accélération forte constatée le vendredi précédent (3 commandes distinctes totalisant 217u). ÉTAPE 4 (Recommandation): Bien que la base soit de 62u, la dynamique récente et le fait que nous soyons un mardi (hors cycle de fin de semaine) imposent une commande de sécurité. Une quantité de 93u (multiple standard de 31u observé) permet de couvrir la tendance haussière sans atteindre les sommets de l'outlier du 07/11.

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14-15 jours), principalement le jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 40u par commande (multiple logistique fixe)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une stabilité remarquable avec une quantité fixe de 40 unités par commande depuis plus d'un an, ce qui indique probablement un conditionnement logistique (type couche de palette ou carton complet). 
1. DE-EVENTING: Aucun outlier détecté, toutes les lignes sont à 40u.
2. SAISONNALITÉ: Faible influence sur le volume par commande, bien que la fréquence semble plus élevée en juillet-août.
3. TENDANCE: Stable. La dernière commande date du vendredi 07/11 (80u cumulées sur deux lignes). 
4. RECOMMANDATION: Bien que nous soyons mardi, seulement 4 jours après la dernière livraison, le maintien du format standard de 40u est préconisé pour respecter l'unité logistique client et sécuriser le stock B2B sans risque de sur-stockage massif.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 434u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-02 06:43:53: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:31: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-08-09 05:43:38: 104u
- 2024-08-09 05:43:13: 104u
- 2024-08-09 05:42:53: 104u
- 2024-07-03 06:05:40: 434u
- 2024-07-03 06:04:58: 868u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**✅ Quantité LLM**: 50u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 1302u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:46: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**✅ Quantité LLM**: 651u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 155u (confidence: high)
**📊 Quantité Réelle**: 155u

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 93u (confidence: high)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**✅ Quantité LLM**: 62u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (12)

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: 335.7u (10j restants) → prédit 434u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: 354.7u (13j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: 185.3u (8j restants) → prédit 248u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 420 | Stock prédit: 537.4u (14j restants) → prédit 420u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 210 | Stock prédit: -579.6u (-15j restants) → prédit 210u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 235 | Stock prédit: -568.1u (-14j restants) → prédit 235u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: -274.7u (-22j restants) → prédit 25u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 210 | Stock prédit: -782.0u (-39j restants) → prédit 210u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1375 | Stock prédit: -5125.0u (-42j restants) → prédit 1375u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 650 | Stock prédit: -2150.0u (-40j restants) → prédit 650u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 314 | Stock prédit: -1084.0u (-40j restants) → prédit 314u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 159 | Stock prédit: -611.0u (-40j restants) → prédit 159u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:08:05.688Z*
