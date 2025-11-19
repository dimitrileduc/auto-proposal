# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 26
- **Tokens**: 26,283 input + 11,130 output = 37,413 total
- **Coût**: $0.0655 (~6.55¢)
- **Coût par produit LLM**: $0.0025


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
| **MAE** | 12.20 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 12.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 46 | 93 | 47.0 | 50.5% | ✅ partial | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | 124 | 62.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 37 | 50 | 13.0 | 26.0% | ✅ partial | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour [PF1694] LD FR TARTINAD BIO POIVRON 200:

1. Analyse des intervalles temporels:
- Périodicité très régulière: commandes tous les 14-15 jours
- Intervalles constants entre 12-16 jours
- Modèle de commande très stable et prévisible

2. Analyse des quantités:
- Quantité IDENTIQUE à chaque commande: 434 unités
- Variation = 0%
- Aucune fluctuation, commandes parfaitement standardisées

3. Recommandation conservatrice:
- Reconduction de la quantité historique: 434 unités
- Variation acceptable de ±30% possible mais non nécessaire ici
- Stabilité extrême des commandes suggère un besoin constant

**📅 Analyse Temporelle:**
Périodicité régulière de 14-15 jours, commandes très prévisibles et synchronisées

**📊 Analyse Quantité:**
Quantité constante de 434 unités, aucune variation détectée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G:

1. Analyse temporelle des intervalles:
- Commandes quasi-régulières tous les 14-15 jours
- Pattern stable depuis juillet 2025
- Intervalles moyens entre commandes : environ 14-15 jours
- Quelques commandes groupées le même jour (ex: 2025-09-04, 2025-08-07)

2. Analyse des quantités:
- Quantité standard: 434 unités
- Quelques commandes de 868 unités (doublement ponctuel)
- Pas de variation significative hors ±30%
- Dernières commandes strictement à 434 unités (octobre 2025)

3. Recommandation conservatrice:
- Quantité recommandée: 434 unités
- Correspond à la quantité standard des dernières commandes
- Aligné avec l'historique récent
- Permet absorption des variations mineures du marché

**📅 Analyse Temporelle:**
Commandes régulières avec un cycle moyen de 14-15 jours, stabilité depuis juillet 2025

**📊 Analyse Quantité:**
Quantité standard de 434u, quelques commandes à 868u sans pattern clair. Variations dans la norme (+/- 30%)

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 62u vs Médiane: undefinedu (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques:

1. Analyse temporelle des intervalles:
- Intervalle moyen entre commandes: environ 14-15 jours
- Pattern régulier mais avec quelques variations
- Dernière commande le 2025-10-15, donc probablement prêt pour une nouvelle commande

2. Analyse des quantités:
- Quantités récurrentes: 31u, 62u, 93u, 124u
- Modes principaux: 31u (très fréquent) et 62u 
- Variations normales observées, cohérentes avec les variations B2B attendues de ±30%

3. Recommandation quantitative:
- Mode principal: 31u
- Recommandation conservatrice: 62u (×2 du mode)
- Justification: 
  * Couvre les besoins moyens
  * Permet une small safety stock
  * Compatible avec les variations historiques
  * Proche des commandes typiques récentes

**📅 Analyse Temporelle:**
Commandes quasi-bimensuelles, intervalle moyen 14-15 jours, pattern semi-régulier

**📊 Analyse Quantité:**
Variations entre 31u et 124u, modes principaux 31u et 62u, écart-type acceptable

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 46u vs Médiane: undefinedu (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 46u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 47u (50.5%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Analyse temporelle:
- Intervalles entre commandes variables mais globalement réguliers
- Fréquence principale: tous les 15-30 jours
- Dernières commandes: 15-17 jours d'intervalle (tendance récente)

2. Analyse des quantités:
- Volumes récurrents principaux: 31u et 93u
- Quelques commandes à 62u
- Pas de croissance/décroissance linéaire claire
- Variations normales dans la plage B2B (±30%)

3. Calcul de la recommandation:
- Moyenne des 5 dernières commandes: 47u
- Médiane: 31u
- Recommandation conservatrice: 46u
  = Arrondi statistique entre moyenne et mode
  = Capture la variabilité sans sur-stocker
  = Sécurise l'approvisionnement

**📅 Analyse Temporelle:**
Intervalles variables mais réguliers, centrés autour de 15-30 jours entre commandes

**📊 Analyse Quantité:**
Volumes principaux: 31u et 93u, variations normales en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 62u vs Médiane: undefinedu (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 62u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [PF3349] LD FR TARTINADE BIO AVOCAT 180G :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes principalement entre 13-15 jours
- Certaines commandes très proches (même jour)
- Régularité relativement stable avec un cycle d'environ 2 semaines

2. Analyse des quantités :
- Quantités récurrentes : 31u, 62u, 93u
- Pas de tendance linéaire claire
- Variations cycliques entre ces 3 volumes
- Variations normales dans la plage B2B attendue (±30%)

3. Recommandation conservatrice :
- Mode (quantité la plus fréquente) = 62 unités
- Correspond au volume médian de l'historique
- Sécurise l'approvisionnement sans sur-stocker
- Prend en compte la variabilité des commandes précédentes

**📅 Analyse Temporelle:**
Cycle de commande approximatif : 13-15 jours, avec quelques variations. Certaines commandes groupées le même jour suggèrent des achats potentiellement liés à des promotions ou des besoins de réassort spécifiques.

**📊 Analyse Quantité:**
Variations entre 31, 62 et 93 unités. Pas de croissance/décroissance linéaire. Variations dans une plage acceptable de ±30% typique du B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: undefinedu (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [PF1690] LD BBQ BIO 300G:

1. Analyse temporelle:
- Intervalles entre commandes: Très réguliers
- Fréquence moyenne: Environ toutes les 2-3 semaines
- Dernier intervalle: Entre 2025-09-18 et 2025-10-15 (27 jours)
- Cohérence temporelle très forte

2. Analyse des quantités:
- Quantité constante à 25 unités pour TOUTES les commandes
- Aucune variation détectée
- Stabilité parfaite de la demande

3. Recommandation:
- Quantité recommandée = 25 unités (reconduction stricte du pattern)
- Confidence élevée due à la régularité absolue des commandes précédentes
- Aucun besoin d'ajustement dans la fourchette ±30%

**📅 Analyse Temporelle:**
Intervalles réguliers de 2-3 semaines, dernière commande il y a 27 jours. Pattern temporel très stable.

**📊 Analyse Quantité:**
Quantité constante de 25 unités sur tous les historiques. Aucune variation significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 37u vs Médiane: undefinedu (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 37u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 13u (26.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML:

1. Analyse temporelle des intervalles:
- Périodicité quasi-régulière entre les commandes
- Intervalles principaux : ~2-4 semaines 
- Dernier intervalle entre commandes : 13 jours (2025-10-02 et 2025-10-15)

2. Analyse des quantités:
- Deux volumes principaux récurrents : 25u et 50u
- Alternance entre ces deux volumes
- Pas de tendance linéaire claire, mais variations structurées
- Moyenne des dernières commandes : 37.5u
- Dernière commande : 25u le 2025-10-02

3. Recommandation quantitative:
- Moyenne pondérée des dernières commandes
- Prise en compte des variations B2B (±30%)
- Recommandation conservatrice : 37u
- Correspond à la moyenne des volumes habituels
- Sécurise le stock sans sur-stocker

**📅 Analyse Temporelle:**
Commandes régulières tous les 13-15 jours, avec une certaine prévisibilité

**📊 Analyse Quantité:**
Volumes alternant entre 25u et 50u, sans tendance linéaire mais avec un schéma récurrent

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes :

1. Intervalles entre commandes :
- Très régulier : commandes principalement tous les 10-15 jours
- Clusters de commandes le même jour (4 fois en août, 2 fois en septembre)
- Dernières commandes : 2025-10-01 et 2025-10-02 (quasi quotidiennes)

2. Analyse des quantités :
- 100% des commandes à 434 unités
- Aucune variation de quantité
- Absolument constant sur 4 mois (juillet à octobre 2025)

3. Recommandation conservatrice :
- Quantité recommandée = 434 unités
- Basée sur la constance historique
- Alignée sur le pattern B2B observé
- Variation acceptable de ±30% = entre 304 et 564 unités
- Notre recommandation est pile dans la zone standard

Facteurs supplémentaires :
- Produit alimentaire (tartinade bio)
- Commandes régulières suggèrent un besoin stable
- Pas de signes de changement dans la demande

**📅 Analyse Temporelle:**
Commandes très régulières, principalement à intervalle de 10-15 jours, avec quelques clusters le même jour. Dernières commandes fin septembre/début octobre très rapprochées.

**📊 Analyse Quantité:**
Quantité parfaitement constante à 434 unités, sans aucune variation sur 4 mois d'historique.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 62u vs Médiane: undefinedu (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques:

1. Analyse temporelle des intervalles:
- Intervalles réguliers entre commandes (principalement entre 2-4 semaines)
- Dernières commandes très rapprochées (plusieurs commandes par jour)
- Cycle moyen de réapprovisionnement: environ 14-16 jours

2. Analyse des quantités:
- Deux quantités distinctes: 31u et 62u
- 62u semble être la quantité de commande standard récente
- Dernières 4 commandes à 62u (depuis 2025-10-02)
- Variations de quantité correspondent à des achats groupés/multiples

3. Recommandation de quantité:
- Quantité recommandée: 62 unités
- Choix basé sur la tendance récente des commandes
- Correspond au pattern des dernières commandes
- Confiance élevée car cohérence des données

4. Validation par la règle B2B:
- Variation acceptable de ±30%
- 62u reste dans une plage de commande normale

**📅 Analyse Temporelle:**
Intervalles réguliers de 14-16 jours, avec des commandes multiples par période. Dernièrement, commandes très rapprochées, suggérant un besoin stable.

**📊 Analyse Quantité:**
Deux quantités standard: 31u et 62u. Tendance récente forte vers 62u, dernières 4 commandes à ce volume.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>10. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: undefinedu (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques:

1. Analyse temporelle des intervalles:
- Commandes très régulières, principalement tous les 15-20 jours
- Intervalles entre commandes: 
  * Entre 2 commandes: 12-15 jours en moyenne
  * Pic occasionnel à 80u, mais majoritairement 40u

2. Analyse des quantités:
- Quantité standard: 40 unités
- Quelques commandes exceptionnelles à 80 unités (2 sur 17 commandes)
- Pas de tendance significative à la hausse/baisse
- Variations considérées comme normales en B2B (±30%)

3. Recommandation:
- Quantité recommandée: 40 unités
- Basée sur la fréquence et la quantité la plus récurrente
- Cohérent avec le comportement d'achat historique
- Sécurise l'approvisionnement sans risque de surstock

**📅 Analyse Temporelle:**
Commandes régulières tous les 12-15 jours, avec une périodicité stable

**📊 Analyse Quantité:**
Quantité standard de 40u, quelques variations à 80u considérées comme normales

**📈 Tendance détectée:** ❌ Non

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | Stock prédit: 31.0u (8j restants) → prédit 31u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | Stock prédit: 31.0u (11j restants) → prédit 31u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 88 | Stock prédit: 25.0u (1j restants) → prédit 88u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 434.0u (11j restants) → prédit 434u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 0.0u (0j restants) → prédit 434u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -19.2u (-4j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-17j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1432 | Stock prédit: -5125.0u (-18j restants) → prédit 1432u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 590 | Stock prédit: -2150.0u (-18j restants) → prédit 590u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 400 | Stock prédit: -1385.0u (-18j restants) → prédit 400u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 272 | Stock prédit: -1084.0u (-18j restants) → prédit 272u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 210 | Stock prédit: -611.0u (-18j restants) → prédit 210u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 408 | Stock prédit: -1395.0u (-17j restants) → prédit 408u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -16.7u (-1j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: -240.8u (-20j restants) → prédit 248u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -575.4u (-39j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:53:26.740Z*
