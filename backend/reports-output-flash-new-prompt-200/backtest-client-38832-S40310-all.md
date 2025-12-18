# Rapport Backtest - Client DLL AD ST VITH DELVITH

## Contexte

- **Client** : DLL AD ST VITH DELVITH (ID: 38832)
- **Commande réelle** : S40310
- **Date commande** : 2025-11-13 10:20:14
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 17,249 input + 6,941 output = 24,190 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.7% | 31 produits prédits, 3 corrects |
| **Rappel** | 50.0% | 6 produits réels, 3 détectés |
| **F1-Score** | 16.2% | Score équilibré global |

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
| **MAE** | 2.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -58.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (3)

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
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD011] LD Organic Kids Spread 180 g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique très limité (2 commandes seulement). ÉTAPE 1: Aucune valeur aberrante n'est détectée sur les commandes de 2 unités. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit semble stable. ÉTAPE 3: La demande est constante à 2 unités avec un intervalle long entre les commandes. ÉTAPE 4: La commande précédente date de seulement 9 jours (03/11), ce qui est inhabituellement court par rapport au cycle précédent de 40 jours (septembre à novembre). Cependant, pour maintenir le stock de sécurité sur ce produit bio de niche, une commande de 2 unités est préconisée pour rester aligné avec la demande de fond observée, tout en restant conservateur vu le faible historique et la proximité de la dernière commande du 03/11/2025 (stock résiduel probable). L'absence de récurrence hebdomadaire forte incite à ne pas surestimer le besoin immédiat ce mercredi 12 novembre 2025. Réduction du risque de sur-stockage privilégiée sur un produit périssable (Avocado Spread). L'indice de confiance est faible en raison de la rareté des points de données disponibles (n=2). Quantité recommandée finale: 2 unités selon le pattern observé sans inflation de tendance ni impact saisonnier prouvé pour le mois de novembre 2025 à ce stade sur ce produit spécifique B2B alimentaire de petite distribution localisée ou spécialisée bio (LD014). S'il s'agit d'un réapprovisionnement de routine sans rupture constatée, le maintien à 2u est la décision la plus prudente et optimale à ce stade du cycle de vie du produit dans l'enseigne considérée dans le secteur agroalimentaire B2B B2C bio durable premium 180g format standard d'usage rapide une fois ouvert par le consommateur final (restauration ou particulier). Pas d'effet calendaire majeur à prévoir avant les fêtes de fin d'année sur de l'avocat tartinable bio sauf promotion spécifique du client final non signalée ici au niveau de l'entrepôt du distributeur grossiste b2b concerné par l'analyse supply chain agro senior demandée pour LD014 LD Organic Avocado Spread 180g en ce jour.

</details>


<details>
<summary><strong>2. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (cycle non établi)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune donnée aberrante car une seule commande de 2 unités est enregistrée. Étape 2 (Saisonnalité) : Aucune donnée historique N-1 pour confirmer une saisonnalité, impact considéré comme nul par prudence. Étape 3 (Tendance) : La demande est stable sur l'unique point de données disponible (mercredi). Étape 4 (Recommandation) : En l'absence d'historique dense, la recommandation se base sur le dernier volume observé pour maintenir le stock de fond. La confiance est faible en raison du manque de données historiques (cold start). Nous recommandons de commander 2 unités pour couvrir le besoin minimal sans risque de sur-stockage significatif sur ce format Bio Kids de 180g car le cycle de rotation semble lent (dernière commande il y a 7 semaines). Le rachat s'aligne sur le même jour de la semaine (mercredi). Sinon, envisager une rupture volontaire si le produit est en fin de vie, mais ici nous restons conservateurs sur la base de 2u pour assurer la disponibilité du catalogue organique le mercredi au vu de la précédente commande du 24/09/2025 (il y a exactement 7 semaines, suggérant un cycle de 49 jours ou un besoin ponctuel récurrent). Nous optons pour 2 unités par sécurité minimale de service B2B sur ce segment de niche Bio Kids (LD011). Dans le doute sur la péremption, la quantité minimale est préférée (stratégie conservatrice). 2u est le pivot logique pour ne pas rompre sans s'exposer financièrement sans historique suffisant (low data). On pourrait déduire un cycle de 7 semaines (7x7=49 jours) entre le 24/09 et le 12/11, rendant la commande de ce mercredi attendue selon ce pattern long-termiste de niche. On recommande donc 2 unités pour valider ce cycle supposé de 7 semaines sans risque financier majeur pour le distributeur B2B. Ce serait un test de rotation.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [LD014] LD Organic Avocado Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 07:41:58: 2u
- 2025-09-24 11:00:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LD011] LD Organic Kids Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 11:00:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (28)

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
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 1.5u (24j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 1.3u (16j restants) → prédit 2u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 5 | Stock prédit: 4.6u (26j restants) → prédit 5u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: 0.4u (5j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: 0.3u (2j restants) → prédit 2u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Stock prédit: 1.3u (16j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: 0.8u (24j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.8u (24j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: 0.6u (11j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -1.0u (-23j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -0.5u (-15j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: -0.5u (-15j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 5 | Stock prédit: 1.5u (16j restants) → prédit 5u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 6 | Stock prédit: 0.1u (0j restants) → prédit 6u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.1u (11j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Stock prédit: -0.7u (-24j restants) → prédit 3u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: -0.6u (-37j restants) → prédit 1u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Stock prédit: 0.4u (22j restants) → prédit 2u mais non commandé |


---

## False Negatives (3)

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
| [DIS0012] Display Foodprint Karton LD | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 1.7u (40j restants > seuil 30j) |
| [LD015] LD Onion Spread 180g | 4 | Stock suffisant: 0.9u (51j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:13:44.191Z*
