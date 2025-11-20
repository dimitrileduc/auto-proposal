# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 26
- **Tokens**: 57,300 input + 6,671 output = 63,971 total
- **Coût**: $0.2720 (~27.20¢)
- **Coût par produit LLM**: $0.0105


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
| **MAE** | 11.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.3% | Erreur moyenne en % (biaisé, pour info) |
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
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 62 | 93 | 31.0 | 33.3% | ✅ partial | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | 124 | 62.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | 50 | 25.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: N/Au (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 et récentes montrent une demande extrêmement stable et régulière de 434 unités par commande, avec une fréquence constante tous les 14-16 jours. Aucune saisonnalité particulière n'est détectable, aucun outlier, et la tendance est parfaitement stable entre N-1 et période récente. La prédiction de 434 unités est donc la plus probable avec une très forte confiance.

</details>


<details>
<summary><strong>2. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: N/Au (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
868u

**🧠 Raisonnement LLM:**
Les données N-1 et récentes montrent une demande récurrente extrêmement stable de 434 unités par commande, avec deux commandes exceptionnelles de 868u (double) en août 2024. La fréquence de commande est régulière (~2 semaines), sans saisonnalité marquée entre les périodes. La quantité la plus probable pour le prochain réapprovisionnement est donc 434u, correspondant au pattern standard observé systématiquement.

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 62u vs Médiane: N/Au (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
93u, 93u

**🧠 Raisonnement LLM:**
L'analyse de N-1 montre une demande de fond autour de 62u (avec quelques commandes de 31u qui représentent probablement des demi-commandes), en écartant les 93u qui semblent exceptionnels. La période récente confirme ce pattern avec des commandes majoritairement de 31u (demi-lots) et 62u (lots complets), sans changement notable de tendance. Pas de saisonnalité marquée détectable sur octobre. Je recommande 62u qui correspond à un lot complet standard pour ce produit bio.

</details>


<details>
<summary><strong>4. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 62u vs Médiane: N/Au (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 31u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
93u

**🧠 Raisonnement LLM:**
En analysant N-1 (septembre-octobre 2024), la demande de fond se situe majoritairement à 62u par commande (6 occurrences sur 12), avec 31u pour les petites commandes et 93u comme pic exceptionnel début octobre. La période récente (septembre 2025) montre un pattern similaire avec des commandes de 31u (plus fréquentes récemment) et un pic à 93u identique à N-1. En octobre 2025, on observe 2 commandes de 31u seulement, suggérant que la prochaine commande logique sera probablement une commande standard de 62u pour rééquilibrer les approvisionnements. Pas de saisonnalité forte détectée, donc je privilégie le pattern habituel observé.

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 62u vs Médiane: N/Au (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: low)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 62u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
93u

**🧠 Raisonnement LLM:**
En l'absence totale de données N-1, je m'appuie uniquement sur les 5 commandes récentes (3 derniers mois). Les commandes de 93u apparaissent deux fois consécutives début octobre, mais semblent constituer un pic ponctuel. Les commandes à 31u et 62u représentent plus probablement la demande de fond récurrente. La médiane des données se situe autour de 62u, ce qui constitue ma prédiction la plus probable pour éviter à la fois rupture et surstock. Confiance faible en raison du manque d'historique et du nombre limité de points de données.

</details>


<details>
<summary><strong>6. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: N/Au (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 et récentes montrent une demande extrêmement régulière et stable de 25 unités par commande, sans aucune variation ni exception. Aucune saisonnalité marquée détectée - la fréquence varie légèrement (2-4 semaines entre commandes) mais la quantité reste constante. La tendance récente (août-septembre 2025) confirme exactement le même pattern que N-1, avec une médiane claire à 25u.

</details>


<details>
<summary><strong>7. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 25u vs Médiane: N/Au (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 31.25u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
50u

**🧠 Raisonnement LLM:**
L'analyse N-1 montre une demande de fond autour de 25u par commande (avec quelques pics à 50u identifiés comme exceptionnels). Les 3 derniers mois confirment ce pattern avec majoritairement des commandes de 25u et une seule commande de 50u début octobre. Aucune saisonnalité marquée n'est détectable sur cette période, la demande reste stable. Je recommande 25u comme quantité la plus probable basée sur la fréquence observée.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: N/Au (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande mensuelle parfaitement régulière de 434 unités (12 commandes identiques sur 12 mois). La vue récente confirme cette stabilité avec 5 commandes de 434u en septembre-octobre. Aucune saisonnalité, aucun outlier détecté, et aucune tendance de croissance ou décroissance. Il s'agit manifestement d'un produit avec une demande prévisible et constante, typique d'un réassort régulier en B2B.

</details>


<details>
<summary><strong>9. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 62u vs Médiane: N/Au (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
+50%

**🔍 Outliers détectés:**
93u

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable autour de 31u par commande (avec deux pics à 93u identifiés comme exceptionnels). La période récente révèle une nette tendance à la hausse : toutes les commandes récentes sont à 62u ou combinaisons de 31u+62u, suggérant un doublement du volume de base. Sans saisonnalité marquée évidente, je privilégie la médiane récente de 62u qui reflète l'évolution actuelle de la demande client.

</details>


<details>
<summary><strong>10. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: N/Au (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 et récentes montrent une demande parfaitement stable et régulière de 40 unités par commande, sans aucune variation ni saisonnalité détectable. La fréquence des commandes est cohérente (environ 1-2 commandes par mois) et aucun événement exceptionnel n'est identifié. La prédiction est de 40 unités avec une confiance élevée basée sur cette régularité parfaite sur 12+ mois.

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
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: 25.0u (1j restants) → prédit 25u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 434.0u (11j restants) → prédit 434u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 0.0u (0j restants) → prédit 434u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -19.2u (-4j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 220 | Stock prédit: -782.0u (-17j restants) → prédit 220u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1700 | Stock prédit: -5125.0u (-18j restants) → prédit 1700u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 580 | Stock prédit: -2150.0u (-18j restants) → prédit 580u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 380 | Stock prédit: -1385.0u (-18j restants) → prédit 380u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 314 | Stock prédit: -1084.0u (-18j restants) → prédit 314u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 180 | Stock prédit: -611.0u (-18j restants) → prédit 180u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 410 | Stock prédit: -1395.0u (-17j restants) → prédit 410u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-19T19:59:53.192Z*
