# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 17
- **Tokens**: 36,102 input + 9,866 output = 45,968 total
- **Coût**: $0.2563 (~25.63¢)
- **Coût par produit LLM**: $0.0151


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
| **MAE** | 126.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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
| [LV363] LV BIO Tartin'apero Avocat 180g  | 430 | 434 | 4.0 | 0.9% | ✅ partial | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 500 | 200 | 300.0 | 150.0% | ✅ partial | 📊 Médiane |
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [LV356] LV SET 3 X 135G trisauces  SDP | 512 | 256 | 256.0 | 100.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: 198u (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: medium)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 198u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 202u (50.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~22-29 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 200u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- 20/08→16/09: 27 jours
- 16/09→08/10: 22 jours
- 08/10→14/10: 6 jours (date de prédiction)

Le client commande environ tous les 22-29 jours. La dernière commande date du 08/10 (mercredi), soit seulement 6 jours avant la date de prédiction (14/10 mardi). 

**FILTRAGE OUTLIERS:**
La commande de 4u le 20/08 est clairement une correction/ajustement technique (livrée en même temps que 196u). La demande réelle ce jour était de 200u (196+4).

**PATTERN IDENTIFIÉ:**
- Toutes les commandes normalisées = 200u exactement
- Aucune saisonnalité N-1 disponible
- Tendance: Parfaitement stable sur les 3 derniers mois
- Pas de jour fixe hebdomadaire, mais cycle mensuel autour de 3-4 semaines

**LOGIQUE DE PRÉDICTION:**
Étant donné que la dernière commande vient d'avoir lieu il y a 6 jours seulement (08/10), et que le cycle habituel est de 22-29 jours, la probabilité d'une nouvelle commande au 14/10 est **faible mais possible** si le client accélère son rythme. 

Cependant, si commande il y a à cette date, elle suivra le pattern établi de 200u. Le client montre une régularité parfaite dans les quantités (3 commandes consécutives à 200u).

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-50j), sans jour fixe identifié
- **Saisonnalité**: none
- **Tendance**: Hausse +24% (350u → 434u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 3 dernières commandes montrent un rythme mensuel irrégulier (19/08→04/09: 16j, puis 04/09→08/10: 34j). Pas de pattern hebdomadaire fixe (mar/jeu/mer). Moyenne ~25j entre commandes. Prochaine commande le 14/10 (6 jours après la dernière du 08/10) semble prématurée si on suit le rythme habituel, mais possible si besoin de réapprovisionnement.

**TENDANCE NETTE**: Transition claire de 350u (standard N-1) vers 434u depuis août 2025. Les 3 dernières commandes sont TOUTES à 434u, confirmant un nouveau palier de demande stable (+24% vs N-1). Aucun outlier détecté - les 350u de N-1 et 305u (mai 2024) reflètent simplement l'ancien niveau.

**SAISONNALITÉ**: Aucun impact saisonnier détectable. Octobre N-1 montrait 350u, cohérent avec le reste de l'année précédente. Pas de pic spécifique à cette période.

**DÉCISION**: La récurrence parfaite de 434u sur les 3 dernières commandes (période récente totalement homogène) indique un nouveau standard de demande. En l'absence de saisonnalité et avec une tendance stabilisée à ce niveau, la prédiction optimale est 434u. Confiance élevée car pattern récent très cohérent.

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 430u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 430u (confidence: low)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 4u (0.9%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes récentes (~50 jours d'écart), données insuffisantes pour pattern fiable
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (864u → 434u entre août et octobre)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **RYTHMIQUE:** Seulement 3 points de données sur 2 mois (20 août et 8 octobre). Les 2 commandes principales sont espacées de ~49 jours. Le 4u du 20/08 est clairement une correction/erreur (commande complémentaire même jour). Pattern insuffisant pour établir un cycle fiable - impossible de déterminer si hebdomadaire ou mensuel.

2. **OUTLIERS:** Le 4u est une anomalie évidente (correction de commande le même jour que 864u). À exclure de l'analyse.

3. **TENDANCE:** Entre les 2 vraies commandes (864u le 20/08 → 434u le 08/10), on observe une baisse de -50%. Cette chute significative peut indiquer:
   - Ajustement après sur-stockage
   - Baisse de demande client final
   - Normalisation après période haute

4. **SAISONNALITÉ:** Aucune donnée N-1 pour valider un pattern saisonnier. Impossible de savoir si octobre est structurellement différent d'août.

5. **PRÉDICTION:** La date cible (14/10) est 6 jours après la dernière commande (08/10). Vu l'intervalle de ~50j observé, une nouvelle commande si tôt est peu probable SAUF si le client a changé son rythme. Si commande il y a, la tendance baissière récente (434u) est le meilleur indicateur disponible.

**CONCLUSION:** Avec données ultra-limitées, je m'appuie sur la dernière observation (434u) comme baseline. Légère réduction à 430u pour refléter la tendance baissière, mais confiance très faible vu le manque de profondeur historique.

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
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 200 | Stock prédit: 151.5u (15j restants) → prédit 200u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 335.2u (16j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 169.1u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 392 | Stock prédit: -192.8u (-9j restants) → prédit 392u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -83.6u (-11j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -102.9u (-13j restants) → prédit 200u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -79.9u (-6j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 392 | Stock prédit: 137.1u (18j restants) → prédit 392u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -131.7u (-13j restants) → prédit 256u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-20T09:02:29.171Z*
