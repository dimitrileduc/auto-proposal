# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 31,217 input + 9,770 output = 40,987 total


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
| **MAE** | 8.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 1.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 124 | 124 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 62 | 93 | 31.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: 25u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 93.75u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 50u (100.0%)
- 📉 **Erreur Médiane**: 25u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ), commandes groupées le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 100u par cycle bimensuel
- **Outliers détectés**: 100u, 125u

**🧠 Raisonnement LLM:**
Étape 1 : Nettoyage des données montrant que les commandes ne sont pas unitaires mais souvent passées en rafale le même jour (cumul de 100u à 125u par session). Étape 2 : Pas de saisonnalité marquée entre sept/oct N-1 et N, les volumes restent constants. Étape 3 : La tendance récente confirme un besoin de 100u toutes les deux semaines (le 18/09/25 cumul de 75u, suivi du 01-02/10/25 cumul de 100u). Étape 4 : Nous sommes à J+14 après la dernière grosse session de commande. Bien que nous soyons mercredi, le cycle de réapprovisionnement de 100 unités est arrivé à échéance pour couvrir les deux prochaines semaines.

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
- **Pattern temporel**: Bi-mensuel, majoritairement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, toutes les commandes sont strictement identiques à 434 unités, ce qui indique un conditionnement logistique fixe (palette ou couche complète). ÉTAPE 2 (Saisonnalité): Analyse de N-1 montrant une activité régulière en septembre/octobre sans pic majeur, impact faible. ÉTAPE 3 (Tendance): La stabilité est absolue (0% de variation). Le cycle est de 14 jours environ. ÉTAPE 4 (Recommandation): Nous sommes le mercredi 15/10, soit 13 jours après la commande du 02/10. Le client respecte son cycle bimensuel. La quantité de 434 unités est la norme structurelle de ce flux B2B.

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 62u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Baseline N-1**: 46.5u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ), principalement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25% vs N-1
- **Outliers détectés**: 186u, 279u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage des pics de septembre 2024 (93u cumulés x3) considérés comme du stockage de rentrée. La demande de fond se stabilise autour de multiples de 31u. Étape 2: La saisonnalité N-1 montre une activité soutenue en octobre, confirmée par les volumes récents. Étape 3: Le rythme est bimensuel (dernières commandes groupées les 18/09 et 01-02/10). Nous sommes à J+14 de la dernière séquence, ce qui valide le besoin de réapprovisionnement. Étape 4: Bien que la tendance soit légèrement baissière par rapport aux volumes massifs de 2024, le cycle actuel nécessite la couverture du prochain bloc de 15 jours. Une recommandation de 62u (2 cartons de 31u) permet de couvrir la demande sans risque de surstockage, tout en respectant l'unité logistique identifiée.

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Baseline N-1**: 46.5u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours), principalement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 62u par commande
- **Outliers détectés**: 93u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Les pics à 93u en N-1 ont été écartés car isolés. La base de commande standard est un multiple de 31u. 2. SAISONNALITÉ: Faible influence, bien que le volume soit légèrement supérieur à octobre N-1 (unitaire 31u vs 62u cette année). 3. TENDANCE: Accélération nette sur les deux dernières semaines avec un passage d'un palier de 31u à 62u par session de commande. 4. RECOMMANDATION: Le cycle de réapprovisionnement de 14 jours tombe précisément maintenant (15/10). Compte tenu de la stabilité du besoin récent à 62u (confirmé les 01/10 et 02/10), cette quantité est préconisée pour couvrir les 15 prochains jours sans risque de rupture.

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 124u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 124u (confidence: medium)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bimensuelles le jeudi avec regroupement de bons de commande
- **Saisonnalité**: none
- **Tendance**: Hausse significative du volume par session (+100%)
- **Outliers détectés**: 248u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Les doubles commandes du 02/10 (155u) et 18/09 (124u) suggèrent des livraisons groupées plutôt que des outliers, bien que le cumul du 02/10 soit élevé. Étape 2 (Saisonnalité): Pas de données N-1, impact considéré comme neutre. Étape 3 (Tendance): On observe un doublement des volumes entre mi-septembre (124u/session) et début octobre (248u cumulés sur 2 jours). La fréquence semble être de 14 jours. Étape 4 (Recommandation): Nous sommes exactement 13-14 jours après la dernière grosse commande. Bien que la tendance soit à 248u le 02/10, la prudence B2B impose de revenir à une base solide de 124u (quantité du 18/09) pour éviter le surstockage après un pic important, tout en couvrant le cycle de 15 jours identifié.

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
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ), principalement le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité exceptionnelle du produit PF1694 avec une quantité fixe de 434 unités par commande (correspondant probablement à un multiple de palette ou couche logistique). 1) Aucun outlier détecté, le volume de 434u est la norme constante. 2) La comparaison N-1 montre que le produit ne subit pas de saisonnalité marquée en octobre, restant sur ses volumes de fond. 3) La tendance est strictement stable sur les 3 derniers mois. 4) Bien que la commande intervienne un mercredi (15/10) au lieu du jeudi habituel, l'écart de 13 jours depuis la dernière livraison (02/10) justifie le déclenchement du réapprovisionnement standard de 434u pour maintenir le stock tampon.

</details>


<details>
<summary><strong>7. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours environ), principalement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u par commande
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'analyse montre un comportement de commande extrêmement standardisé par multiple de 434 unités. 1) Nettoyage : Les valeurs de 868u sont identifiées comme des doubles commandes ponctuelles ou regroupements techniques, la base récurrente étant 434u. 2) Saisonnalité : Faible impact sur cette période d'octobre par rapport à N-1, le volume unitaire reste constant. 3) Tendance : Le rythme est parfaitement stable avec une commande toutes les deux semaines. 4) Recommandation : La dernière commande ayant eu lieu le jeudi 2 octobre, le cycle de 14 jours tombe précisément le jeudi 16 octobre. La demande du mercredi 15 octobre est donc parfaitement alignée avec le réapprovisionnement cyclique habituel de 434u.

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours env.), principalement le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 40u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES : 1. Nettoyage : Pas d'outliers détectés, le produit suit un pattern d'approvisionnement extrêmement rigide de 40u (conditionnement logistique probable). 2. Saisonnalité : Bien qu'on soit en période automnale (octobre), le volume de 40u reste identique à celui de l'été 2024 (juillet/août/septembre), indiquant une demande insensible à la saisonnalité pour cette référence. 3. Tendance : Le rythme est stable à environ une commande toutes les deux semaines (04/09, 18/09, 01/10). 4. Recommandation : La dernière commande date du mercredi 01/10. Nous sommes le mercredi 15/10, soit exactement 14 jours plus tard. Le cycle suggère qu'une commande de réapprovisionnement de 40 unités est nécessaire aujourd'hui pour maintenir le stock tampon habituel.

</details>


<details>
<summary><strong>9. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 62u vs Médiane: 62u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Baseline N-1**: 46.5u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 31u (33.3%)
- 📉 **Erreur Médiane**: 31u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours) majoritairement le jeudi
- **Saisonnalité**: strong
- **Tendance**: Hausse significative +40% vs N-1
- **Outliers détectés**: 93u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier toutes les deux semaines le jeudi. 1. DE-EVENTING: Les pics de 93u sont traités comme des stocks de sécurité ponctuels, la base stable se situant entre 31u et 62u. 2. SAISONNALITÉ: Comparaison N-1 montre une accélération des volumes en octobre (fin de saison ail des ours). 3. TENDANCE: Le volume moyen par session de commande est passé de ~45u en 2024 à ~77u en septembre 2025. 4. SYNTHÈSE: Bien que la date soit un mercredi, le cycle de 14 jours est arrivé à échéance fin septembre sans commande enregistrée entre le 18/09 et le 15/10, indiquant un besoin de réapprovisionnement imminent. On recommande 62u pour couvrir la hausse de demande saisonnière observée sans surestimer les pics exceptionnels de 93u.

</details>


<details>
<summary><strong>10. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (environ tous les 14 jours), majoritairement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u ou multiples de 25u (palette/colisage)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité remarquable du produit [PF1690] avec une unité de commande fixe de 25 unités, correspondant probablement à un standard de colisage ou de couche de palette. 1/ Nettoyage: Aucun outlier détecté, toutes les commandes sont des multiples de 25. 2/ Saisonnalité: Bien que le secteur soit saisonnier, ce produit BBQ BIO maintenait des volumes identiques en octobre N-1, suggérant une demande de fond stable en arrière-saison. 3/ Tendance: Le rythme de croisière est de 25u toutes les deux semaines. La dernière commande datant du 18 septembre, un réapprovisionnement est nécessaire après 4 semaines d'intervalle. 4/ Recommandation: On maintient le standard de 25u pour couvrir les deux prochaines semaines, conformément à l'historique de consommation très régulier du client.

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

**✅ Quantité LLM**: 62u (confidence: high)
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

**✅ Quantité LLM**: 62u (confidence: high)
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

**✅ Quantité LLM**: 124u (confidence: medium)
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

**✅ Quantité LLM**: 434u (confidence: high)
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

**✅ Quantité LLM**: 40u (confidence: high)
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

**✅ Quantité LLM**: 62u (confidence: high)
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

**✅ Quantité LLM**: 25u (confidence: high)
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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | Stock prédit: -8.7u (-2j restants) → prédit 62u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 29.5u (0j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: 7.3u (3j restants) → prédit 62u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -15.5u (-3j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-16j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1140 | Stock prédit: -5125.0u (-17j restants) → prédit 1140u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 2500 | Stock prédit: -2150.0u (-17j restants) → prédit 2500u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 401 | Stock prédit: -1385.0u (-17j restants) → prédit 401u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 1255 | Stock prédit: -1084.0u (-17j restants) → prédit 1255u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 177 | Stock prédit: -611.0u (-17j restants) → prédit 177u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 470 | Stock prédit: -1395.0u (-17j restants) → prédit 470u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -4.2u (0j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 496 | Stock prédit: -233.6u (-19j restants) → prédit 496u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 266 | Stock prédit: -650.0u (-37j restants) → prédit 266u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T12:00:59.247Z*
