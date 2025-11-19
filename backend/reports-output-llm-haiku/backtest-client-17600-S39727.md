# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 25
- **Tokens**: 23,018 input + 11,410 output = 34,428 total
- **Coût**: $0.0641 (~6.41¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 24 produits prédits, 6 corrects |
| **Rappel** | 85.7% | 7 produits réels, 6 détectés |
| **F1-Score** | 38.7% | Score équilibré global |

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
| **MAE** | 88.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (6)

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
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | 400 | 200.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | 200 | 200.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV356] LV SET 3 X 135G trisauces  SDP | 384 | 256 | 128.0 | 50.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: undefinedu (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit LV361:

1. Analyse des intervalles entre commandes:
- Dernière commande le 2025-09-16 (200u)
- Précédente commande le 2025-08-20 (200u + 4u)
- Intervalle moyen entre commandes: environ 27-28 jours
- Intervalle régulier et prévisible, suggérant un besoin stable

2. Analyse des quantités:
- Commandes principalement à 200 unités
- Une commande complémentaire de 4 unités le même jour
- Variation totalement normale, inférieure à la tolérance B2B de ±30%
- Quantité moyenne : 200 unités

3. Recommandation conservative:
- Maintenir le volume de commande habituel
- Quantité recommandée : 200 unités
- Haute confiance due à la régularité historique

**📅 Analyse Temporelle:**
Commandes espacées de 27-28 jours en moyenne, rythme régulier suggérant un cycle d'approvisionnement stable

**📊 Analyse Quantité:**
Quantité stable autour de 200 unités, avec une variation mineure de 4 unités considérée comme normale

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit LV305:

1. Analyse des intervalles entre commandes:
- Octobre: 434u (2025-10-08)
- Septembre: 434u (2025-09-04)
- Août: 434u (2025-08-19)
- Juillet: 700u (2025-07-02)
- Juin: 350u (2025-06-16)

Observation: Intervalles réguliers de 15-45 jours, avec un noyau stable autour de 434u (3 commandes consécutives identiques).

2. Analyse des quantités:
- Variation entre 350u et 700u
- Mode (valeur la plus fréquente): 434u
- Variation de ±30% confirmée (350u à 700u)
- Pas de tendance linéaire claire, mais stabilisation récente autour de 434u

3. Recommandation quantitative:
- Quantité conservatrice basée sur la répétition récente: 434 unités
- Respecte la tolérance B2B de ±30%
- Aligné sur le comportement de commande récent
- Minimal risque de rupture ou de surstockage

**📅 Analyse Temporelle:**
Intervalles réguliers de 15-45 jours, avec stabilisation récente autour de 30 jours. Dernières 3 commandes à 434u consécutives.

**📊 Analyse Quantité:**
Variations normales entre 350u et 700u. Mode à 434u. Pas de tendance haussière ou baissière significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes:

1. Analyse temporelle:
- Deux commandes identiques le même jour (2025-08-20)
- Dernière commande le 2025-10-08
- Intervalle irrégulier entre les commandes (49 jours puis 14 jours)
- Caractère erratique dans la périodicité

2. Analyse des quantités:
- Première commande: 864u
- Deuxième commande: 4u (probablement une erreur ou commande complémentaire)
- Troisième commande: 434u
- Forte variation entre les commandes (de 4u à 864u)
- Pas de tendance claire, mais dernière commande à 434u semble plus stable

3. Recommandation:
- Prendre la dernière quantité comme référence (434u)
- Appliquer une marge conservatrice de ±30%
- Quantité recommandée: 434u

**📅 Analyse Temporelle:**
Intervalles de commandes irréguliers, pas de cycle claire. Deux commandes simultanées suivies d'une commande espacée.

**📊 Analyse Quantité:**
Variations importantes de 4u à 864u. Dernière commande de 434u considérée comme point de référence.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - LLM: 400u vs Médiane: undefinedu (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 400u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit LV235:

1. Analyse des intervalles entre commandes:
- Entre 2025-07-02 et 2025-08-19 : 48 jours
- Entre 2025-08-19 et 2025-09-04 : 16 jours
- Entre 2025-09-04 et 2025-09-10 : 6 jours
Intervalles irréguliers, mais globalement tendance à des commandes rapprochées récemment.

2. Analyse des quantités:
- Commandes récentes: 400u, 400u
- Commandes précédentes: 600u, 1000u
Variation significative, mais avec stabilisation récente autour de 400 unités
Dernier point: commande de 400u le 2025-09-10

3. Recommandation conservatrice:
- Alignement sur le volume récent (400u)
- Variation acceptable de ±30%
- Recommandation finale: 400 unités

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, tendance à des commandes plus fréquentes récemment. Dernier intervalle très court (6 jours).

**📊 Analyse Quantité:**
Stabilisation autour de 400u, après des variations entre 400u et 1000u. Dernières commandes convergent vers 400 unités.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - LLM: 200u vs Médiane: undefinedu (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle:
- Intervalles entre commandes très réguliers
- Moyenne de ~2 mois entre chaque commande (environ 60-62 jours)
- Dernière commande le 2025-07-02
- Prochaine commande logiquement attendue autour du 2025-09-01 (cohérent avec le cycle)

2. Analyse des quantités:
- Quantité strictement constante à 200 unités
- Aucune variation observée sur 2 ans d'historique
- Représente très probablement un besoin standard/récurrent du client

3. Recommandation:
- Quantité recommandée: 200 unités (reconduction à l'identique)
- Variation acceptable entre 140-260 unités (+/- 30%)
- Haute confiance due à l'historique parfaitement stable

**📅 Analyse Temporelle:**
Intervalles réguliers de ~60 jours entre commandes, cycle stable

**📊 Analyse Quantité:**
Quantité constante à 200u, aucune variation détectable

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - LLM: 384u vs Médiane: undefinedu (Réel: 256u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 384u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 128u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV356] LV SET 3 X 135G trisauces SDP:

1. Analyse temporelle des intervalles:
- Entre 2024-08-07 et 2024-10-01: 55 jours
- Entre 2024-10-01 et 2025-07-02: 274 jours
- Intervalles irréguliers, suggestion d'une demande non-linéaire

2. Analyse des quantités:
- 2024-08-07: 640 unités
- 2024-10-01: 512 unités
- 2025-07-02: 256 unités
- Tendance à la baisse, mais avec des variations significatives

3. Recommandation quantitative:
- Moyenne des 3 dernières commandes: (256 + 512 + 640) ÷ 3 = 469 unités
- En appliquant une correction conservative (±30%): 384 unités
- Choix de 384 unités pour minimiser le risque de surstock tout en maintenant une capacité de réponse

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, variant de 55 à 274 jours. Aucune périodicité claire détectée.

**📊 Analyse Quantité:**
Quantités décroissantes avec variations significatives. Dernière commande à 256 unités contre 640 initialement.

**📈 Tendance détectée:** ✅ Oui

</details>




---

## False Positives (18)

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
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | Stock prédit: 132.8u (9j restants) → prédit 200u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 332.0u (24j restants) → prédit 400u mais non commandé |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Stock prédit: 163.6u (22j restants) → prédit 200u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 300 | Stock prédit: 151.5u (15j restants) → prédit 300u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 335.2u (16j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 169.1u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 392 | Stock prédit: -192.8u (-9j restants) → prédit 392u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -83.6u (-11j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 267 | Stock prédit: -102.9u (-13j restants) → prédit 267u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -79.9u (-6j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 392 | Stock prédit: 137.1u (18j restants) → prédit 392u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 320 | Stock prédit: -131.7u (-13j restants) → prédit 320u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -27.2u (-2j restants) → prédit 434u mais non commandé |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 217 | Stock prédit: -4.0u (0j restants) → prédit 217u mais non commandé |
| [LV364] LV SDP SAUCE Cocktail  125ML | 175 | Stock prédit: -4.0u (0j restants) → prédit 175u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: -23.8u (-3j restants) → prédit 350u mais non commandé |
| [LV301] LV BIO Tartin'apero Aubergine SDP 200 ml  | 350 | Stock prédit: 24.2u (7j restants) → prédit 350u mais non commandé |
| [LV327] LV BIO Tartin'apero Toscane SDP 200 ml   | 350 | Stock prédit: 24.2u (7j restants) → prédit 350u mais non commandé |


---

## False Negatives (1)

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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 350 | Stock suffisant: 418.7u (136j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T15:55:14.686Z*
