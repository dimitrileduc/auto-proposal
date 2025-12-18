# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 31,162 input + 61,384 output = 92,546 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score équilibré global |

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
| **MAE** | 74.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 57.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 42.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 100 | 50 | 50.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 93 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 124 | 62 | 62.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 155 | 124 | 31.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 868 | 434 | 434.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 80 | 40 | 40.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 186 | 93 | 93.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: 25u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 50u (100.0%)
- 📉 **Erreur Médiane**: 25u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (14 jours) s'effectuant principalement le jeudi.
- **Saisonnalité**: weak
- **Tendance**: Stable avec un léger ralentissement (-20% vs N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des historiques 2024 et 2025 révèle un pattern très régulier de réapprovisionnement tous les 14 jours. ÉTAPE 1: Aucune valeur n'a été isolée comme outlier car les quantités (25u/50u) correspondent à des unités logistiques standard (cartons/couches). ÉTAPE 2: La saisonnalité est stable sur cette période par rapport à N-1, bien que les volumes soient passés de 125u environ à 100u. ÉTAPE 3: La tendance récente confirme un besoin hebdomadaire lissé de 50u, soit 100u par cycle bimensuel. ÉTAPE 4: Nous sommes à J-1 du cycle habituel (jeudi). Pour garantir la disponibilité sans sur-stocker, une commande de 100u est recommandée pour couvrir les deux prochaines semaines, s'alignant sur le volume du cycle précédent (1er et 2 octobre).

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel d'environ 14 jours, souvent concentré sur les mercredis ou jeudis.
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u par unité de commande.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité exceptionnelle : toutes les commandes sont strictement de 434 unités (probablement une palette ou un lot standardisé). Le rythme de réapprovisionnement suit un cycle de 14 jours (comparaison des dates : 04/09, 18/09, 01/10). La date actuelle (15/10) tombe exactement 14 jours après la dernière fenêtre de commande (01/10). Bien que la saisonnalité des tartinades bio puisse faiblir en automne, la stabilité du volume par commande (434u) et le respect strict du calendrier justifient la commande d'une unité standard pour maintenir le stock de transition.

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 93u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: medium)
- 📊 **Baseline N-1**: 124u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes massives en cycle bi-hebdomadaire (tous les 14 jours), majoritairement le jeudi.
- **Saisonnalité**: strong
- **Tendance**: Légère baisse de volume par cycle vs N-1 (155u en 2025 vs 186u en 2024 sur début octobre).
- **Outliers détectés**: 279u, 93u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de réapprovisionnement bi-hebdomadaire très marqué. ÉTAPE 1: Les volumes de 279u (Sept 2024) sont isolés comme des pics promotionnels, la base se situant autour de 155-186u par cycle de 14 jours. ÉTAPE 2 : Une forte saisonnalité est confirmée sur le segment 'Tartinade Bio' à cette période de l'année. ÉTAPE 3 : La dernière commande groupée majeure (155u) a eu lieu les 1er et 2 octobre 2025. Nous sommes aujourd'hui le mercredi 15 octobre, soit exactement 13-14 jours après, ce qui correspond à la fenêtre habituelle du cycle. ÉTAPE 4 : Bien que le besoin théorique soit plus élevé, la tendance 2025 est légèrement inférieure à N-1. Pour respecter une approche conservatrice en B2B et éviter le surstockage après un gros réapprovisionnement début octobre, une quantité de 93u (correspondant à 3 unités logistiques de 31u) est recommandée pour couvrir la fin de mois.

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 124u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 124u (confidence: medium)
- 📊 **Baseline N-1**: 124u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 62u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-hebdomadaire (tous les 14 jours), principalement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Hausse de rattrapage puis stabilisation
- **Outliers détectés**: 93u, 217u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de réapprovisionnement stable tous les 14 jours. ÉTAPE 1: La commande du début octobre 2025 (217u cumulées) est un outlier haut, compensant la faible commande du 18 septembre (31u). ÉTAPE 2: En 2024, à la même période (début octobre), le volume était de 124u. ÉTAPE 3: La demande se normalise après un pic de début de mois. ÉTAPE 4: Pour le réapprovisionnement du 15 octobre (exactement 14 jours après le début du cycle précédent), nous recommandons 124 unités. Cette quantité correspond à 4 unités logistiques de 31, alignée sur l'historique N-1 pour stabiliser les stocks après le fort volume récent.

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 155u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 155u (confidence: low)
- 📊 **Baseline N-1**: 186u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 31u (25.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-hebdomadaire identifié (tous les 13-14 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse marquée (+100% entre les deux derniers cycles)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Les quantités sont des multiples de 31 (conditionnement probable). Aucun outlier évident malgré la forte hausse. ÉTAPE 2 : Absence de données N-1 pour confirmer une saisonnalité, bien que le secteur suggère une stabilité en automne. ÉTAPE 3 : Rythme de commande régulier tous les 14 jours. On observe un doublement du volume lors du dernier cycle (passant de 124u à 248u cumulés sur le 01-02 octobre). ÉTAPE 4 : La moyenne des deux cycles est de 186u. Pour rester conservateur et éviter le surstockage après un pic important à 248u, je préconise 155u (soit 5 unités de conditionnement de 31), ce qui couvre une demande de fond supérieure au premier cycle tout en sécurisant les stocks.

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-hebdomadaire (14 jours) très régulier le jeudi.
- **Saisonnalité**: strong
- **Tendance**: Baisse saisonnière confirmée (Passage de 868u à 434u début octobre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante en quantité unitaire (multiple constant de 434u), ce qui indique une contrainte logistique de type palette complète. ÉTAPE 2: On observe une forte saisonnalité sur ce produit de tartinade (pic estival/septembre jusqu'à 1302-1736u par commande) qui s'estompe en octobre. ÉTAPE 3: La comparaison avec N-1 (octobre 2024) confirme le passage à une seule unité logistique (434u) pour la période automnale. Le cycle de 14 jours est parfaitement respecté. ÉTAPE 4: La dernière commande ayant eu lieu le 02/10, la prochaine est prévue pour demain le 16/10. Compte tenu du ralentissement saisonnier validé par l'historique N-1 à la même date, une commande de 434u est optimale pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 868u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 868u (confidence: high)
- 📊 **Baseline N-1**: 868u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 434u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bi-hebdomadaire (tous les 14 jours) avec des commandes groupées le mercredi ou jeudi.
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 868u par cycle de 14 jours
- **Outliers détectés**: 3040u, 1302u

**🧠 Raisonnement LLM:**
L'analyse montre une unité logistique de base de 434u. En excluant les pics exceptionnels d'août 2024, la demande de fond est très stable. Le cycle de commande est strictement bi-hebdomadaire (tous les 14 jours). En agrégeant les commandes par cycle, on observe une moyenne de 868u (2 unités logistiques) : (1302u le 04/09 + 434u le 18/09 + 868u le 01-02/10) / 3 = 868u. La date actuelle (15/10) correspond parfaitement à l'échéance du cycle de 14 jours par rapport au 01/10. La recommandation est de 868u pour maintenir le stock sans sur-stockage, en cohérence avec la stabilité N-1 sur la même période.

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 80u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 66.67u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 40u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-hebdomadaire strict (tous les 14 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 100 unités par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité exceptionnelle avec un cycle de commande de 14 jours. Les commandes sont systématiquement effectuées par multiples de 40 unités (colisage ou couche de palette). Sur les 3 dernières commandes (40u, 120u, 40u), la moyenne par cycle est de 66.6 unités. Étant donné que nous sommes exactement à J+14 de la dernière commande et que la demande est stable par rapport à l'année précédente (N-1), une commande de 80 unités (2 multiples de 40) est recommandée pour couvrir les deux prochaines semaines sans risque de rupture, tout en restant conservateur par rapport au pic de 120u observé en septembre.

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 186u vs Médiane: 62u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 186u (confidence: medium)
- 📊 **Baseline N-1**: 155u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 93u (100.0%)
- 📉 **Erreur Médiane**: 31u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bihebdomadaire (tous les 14 jours), commande systématique le jeudi.
- **Saisonnalité**: strong
- **Tendance**: Stable sur les deux derniers cycles à 155u, mais en retrait de 28% par rapport à N-1.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier tous les 14 jours le jeudi. 1. DE-EVENTING: Aucun outlier n'a été retiré, les volumes sont cohérents avec des multiples de colisage de 31u. 2. SAISONNALITÉ: L'historique N-1 démontre une forte accélération en octobre (passage de 217u à 279u). 3. TENDANCE: En 2025, la demande est stable à 155u sur septembre. Cependant, aucune commande n'est enregistrée pour le créneau théorique du 02/10, suggérant un besoin immédiat de réapprovisionnement pour couvrir la période actuelle. 4. RECOMMANDATION: Sur une base de 155u (moyenne récente), nous appliquons un ajustement saisonnier de +31u (soit +20%) pour anticiper la hausse d'octobre observée l'an dernier, tout en restant conservateur par rapport au pic de l'année précédente (279u). La quantité recommandée de 186u correspond à exactement 6 colis de 31 unités.

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (environ tous les 14 jours le jeudi)
- **Saisonnalité**: strong
- **Tendance**: Baisse saisonnière (Fin de saison BBQ)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que ce produit (Sauce BBQ Bio) est fortement saisonnier. En N-1, le cycle de commande s'est arrêté brusquement début octobre (dernière commande le 03/10). Pour 2025, la dernière commande date du 18/09 (25u), ce qui signifie qu'un cycle a déjà été sauté (celui du 02/10). Bien que nous soyons en fin de saison BBQ, l'absence de commande depuis 27 jours suggère un besoin de réapprovisionnement pour couvrir la demande résiduelle d'automne. Je recommande la quantité minimale habituelle de 25 unités pour éviter la rupture tout en minimisant le risque de sur-stockage hivernal.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 50u
- 2025-10-01 14:24:40: 25u
- 2025-10-01 14:23:59: 25u
- 2025-09-18 11:03:27: 25u
- 2025-09-18 11:02:40: 50u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:12:09: 25u
- 2024-09-19 21:11:27: 50u
- 2024-09-05 07:12:20: 25u
- 2024-09-05 07:12:01: 50u
- 2024-09-05 07:11:43: 25u
- 2024-09-05 07:10:56: 25u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-19 08:03:40: 434u
- 2025-09-18 11:02:40: 434u
- 2025-09-04 08:22:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:33: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:58:01: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 31u
- 2025-10-01 14:24:40: 31u
- 2025-10-01 14:23:59: 31u
- 2025-09-18 11:03:27: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u
- 2024-09-19 21:12:31: 31u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 62u
- 2024-09-05 07:12:20: 93u
- 2024-09-05 07:12:01: 93u
- 2024-09-05 07:11:43: 62u
- 2024-09-05 07:10:56: 31u
- 2024-08-09 05:43:38: 62u

**✅ Quantité LLM**: 93u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 62u
- 2025-10-01 14:24:40: 62u
- 2025-10-01 14:23:59: 31u
- 2025-09-18 11:03:27: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u
- 2024-09-19 21:13:09: 31u
- 2024-09-19 21:12:31: 31u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 62u
- 2024-09-05 07:12:20: 93u
- 2024-09-05 07:12:01: 93u
- 2024-09-05 07:11:43: 31u
- 2024-09-05 07:10:56: 31u

**✅ Quantité LLM**: 124u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:44:40: 62u
- 2025-10-02 06:43:53: 93u
- 2025-10-01 14:24:40: 93u
- 2025-09-18 11:03:27: 31u
- 2025-09-18 11:02:40: 93u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 155u (confidence: low)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>6. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:43:53: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-18 11:01:30: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u
- 2024-08-07 13:00:33: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:32: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:43:53: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 868u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 868u
- 2024-08-07 13:00:33: 868u
- 2024-08-07 13:00:03: 434u

**✅ Quantité LLM**: 868u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u
- 2025-09-18 11:02:40: 40u
- 2025-09-18 11:02:12: 40u
- 2025-09-04 08:22:56: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-08 06:02:21: 40u
- 2024-08-07 13:00:49: 40u
- 2024-08-07 13:00:33: 40u
- 2024-07-25 07:58:01: 40u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-18 11:03:27: 93u
- 2025-09-18 11:02:40: 31u
- 2025-09-18 11:01:30: 31u
- 2025-09-04 08:22:56: 93u
- 2025-09-04 08:22:01: 62u

**📅 Commandes N-1 (même période année dernière):**
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
- 2024-09-05 07:10:56: 31u
- 2024-08-09 05:43:38: 31u

**✅ Quantité LLM**: 186u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-18 11:02:12: 25u
- 2025-09-04 08:22:01: 25u
- 2025-09-04 08:20:24: 25u
- 2025-08-07 14:18:24: 25u
- 2025-07-18 10:37:55: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u
- 2024-07-01 05:44:03: 25u
- 2024-07-01 05:43:42: 25u
- 2024-07-01 05:43:20: 25u
- 2024-06-28 11:30:23: 25u

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 25u

</details>




---

## False Positives (16)

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | Stock prédit: -8.7u (-2j restants) → prédit 31u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: 7.3u (3j restants) → prédit 62u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -15.5u (-3j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 940 | Stock prédit: -782.0u (-16j restants) → prédit 940u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1450 | Stock prédit: -5125.0u (-17j restants) → prédit 1450u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 2600 | Stock prédit: -2150.0u (-17j restants) → prédit 2600u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 1750 | Stock prédit: -1385.0u (-17j restants) → prédit 1750u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 1060 | Stock prédit: -1084.0u (-17j restants) → prédit 1060u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 700 | Stock prédit: -611.0u (-17j restants) → prédit 700u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 450 | Stock prédit: -1395.0u (-17j restants) → prédit 450u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -4.2u (0j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: -233.6u (-19j restants) → prédit 248u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 200 | Stock prédit: -650.0u (-37j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -572.1u (-38j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:21:33.237Z*
