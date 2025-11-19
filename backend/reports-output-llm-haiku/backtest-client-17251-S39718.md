# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 12
- **Tokens**: 12,473 input + 5,216 output = 17,689 total
- **Coût**: $0.0308 (~3.08¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 37.50 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 31.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (8)

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
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 288 | 192 | 96.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 216 | 108 | 108.0 | 100.0% | ✅ partial | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 288u vs Médiane: undefinedu (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 288u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 96u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes de [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR :

1. Analyse temporelle des intervalles :
- Intervalles principaux : 7-9 jours entre commandes
- Quelques variations : certaines semaines avec 3 commandes le même jour (11/07/2025)
- Dernièrement, intervalles plus courts (2-3 jours)
→ Modèle semi-régulier avec légère accélération récente

2. Analyse des quantités :
- Quantités récurrentes : 96u (stabilité principale)
- Quantités occasionnelles plus élevées : 288u et 384u
- Dernière commande : 288u (10/09/2025)
- Variation normale entre 96u et 288u (±30% acceptable)

3. Recommandation quantitative :
- Choix conservateur basé sur la dernière commande
- Quantité recommandée : 288 unités
- Justification : 
  * Correspond au pattern récent
  * Dans la fourchette de variation acceptable
  * Reflète une possible augmentation de la demande

**📅 Analyse Temporelle:**
Intervalles principaux de 7-9 jours, avec quelques variations. Tendance récente à des intervalles plus courts (2-3 jours). Modèle semi-régulier.

**📊 Analyse Quantité:**
Quantités stables autour de 96u, avec des pics occasionnels à 288u et 384u. Variation considérée comme normale en B2B.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: undefinedu (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [PF01012] CARREFOUR VOL AU VENT 400 GR:

1. Analyse temporelle des intervalles:
- Intervalles de commandes principalement entre 1-2 semaines
- Quelques variations (ex: gap de 3 semaines fin août/début septembre)
- Globalement, un rythme semi-régulier de commandes

2. Analyse des quantités:
- Quantités récurrentes: 96u, 192u, 288u
- Mode (valeur la plus fréquente): 192 unités
- Variations autour de 192u, confirmant un comportement de commande stable
- Pas de dérive significative, juste ajustements normaux B2B

3. Recommandation quantitative:
- Quantité recommandée: 192 unités
- Basée sur la fréquence et le mode des commandes
- Correspond au pattern historique dominant
- Permet flexibilité pour absorber variations ±30%

Conclusion: Recommandation conservatrice de 192 unités, fortement alignée avec l'historique de commandes.

**📅 Analyse Temporelle:**
Commandes semi-régulières, principalement espacées de 1-2 semaines, avec quelques variations naturelles entre 1-3 semaines.

**📊 Analyse Quantité:**
Quantités stables autour de 192 unités, avec variations mineures entre 96-288 unités, typiques des commandes B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: undefinedu (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Intervalles temporels:
- Majoritairement commandes hebdomadaires (tous les 7-14 jours)
- Quelques variations avec 216u (probablement commandes doublées)
- Période stable depuis juillet 2025

2. Analyse des quantités:
- 108 unités = quantité standard
- Très haute régularité (108u répété presque systématiquement)
- Quelques exceptions à 216u (×2 la quantité standard)
- Variations inférieures à 30% (critère B2B de normalité respecté)

3. Recommandation:
- Quantité conservatrice de 108 unités
- Alignée sur l'historique récent
- Répond aux besoins probables du client Carrefour
- Risque minimal de sur/sous-stockage

**📅 Analyse Temporelle:**
Commandes régulières, principalement hebdomadaires, avec quelques variations mineures

**📊 Analyse Quantité:**
Quantité stable autour de 108u, avec occasionnellement 216u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: undefinedu (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques:

1. Analyse temporelle:
- Périodicité globalement régulière
- Intervalles entre commandes principalement entre 7-14 jours
- Dernières commandes très stables (3x96u les dernières semaines)

2. Analyse des quantités:
- Mode principal: 96 unités
- Quelques variations occasionnelles (192u et 288u)
- Variations semblent liées à des achats groupés/constitutions de stock
- Pas de tendance haussière/baissière nette

3. Recommandation:
- Quantité médiane/mode = 96 unités
- Correspond à la majorité des commandes récentes
- Compatible avec le comportement d'achat observé
- Conforme au principe de variation conservatrice (±30%)

**📅 Analyse Temporelle:**
Commandes régulières, principalement aux 7-14 jours, avec stabilisation récente autour de 96u

**📊 Analyse Quantité:**
Quantité principale de 96u, avec quelques variations ponctuelles probablement liées à des stratégies d'achat

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: undefinedu (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [PF3343] SIMPL CARRE VOL AU VENT 800 GR:

1. Analyse temporelle:
- Commandes très régulières, principalement entre 96u et 192u
- Fréquence hebdomadaire à bimensuelle
- Dernières commandes récentes (3 dernières fois) à 192u
- Intervalle moyen entre commandes: 7-14 jours

2. Analyse des quantités:
- Deux paliers de commande principaux: 96u et 192u
- Tendance récente stabilisée à 192u (3 dernières commandes)
- Variations dans une plage acceptable (+/-30%)
- Pas de fluctuations aberrantes

3. Recommandation:
- Quantité recommandée: 192 unités
- Basée sur la tendance récente et la stabilité des commandes
- Correspond aux dernières commandes
- Permet de maintenir un stock tampon sans surstock

Confiance élevée due à la régularité et à la stabilité des données historiques.

**📅 Analyse Temporelle:**
Commandes régulières, interval moyen 7-14 jours, dernière commande le 2025-10-07

**📊 Analyse Quantité:**
Deux paliers principaux (96u et 192u), dernières commandes à 192u, variations normales

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 216u vs Médiane: undefinedu (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 216u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 108u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes:

1. Analyse des intervalles:
- Période régulière: Commandes tous les 14 jours environ
- Intervalle quasi constant de 14 jours entre chaque commande
- Pattern très stable jusqu'au 30 septembre 2025

2. Analyse des quantités:
- Commandes stables à 108u pendant 8 commandes consécutives
- Dernière commande (30/09/2025) en hausse à 216u (+100%)
- Variation significative mais potentiellement justifiée par un besoin ponctuel
- Respect de la règle B2B des variations de ±30%

3. Recommandation:
- Quantité recommandée: 216 unités
- Basée sur la dernière commande qui double le volume habituel
- Prudence conseillée mais suivi de la dynamique récente
- Cohérence avec le pattern de commande stable

Justification de la recommandation:
- Haute confiance (high confidence)
- Volume qui reflète le besoin récent
- Sécurisation du stock sans surcommande excessive

**📅 Analyse Temporelle:**
Commandes régulières tous les 14 jours, avec dernier écart de 2 semaines, pattern temporel très stable

**📊 Analyse Quantité:**
Commandes stables à 108u pendant 8 cycles, dernière commande à 216u, variation significative mais dans la norme B2B

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: undefinedu (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour [PF1952] CARRE VIN CIBOULET PET 450 :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes assez réguliers, principalement entre 7-14 jours
- Période stable : juillet-septembre 2025
- Dernières commandes très rapprochées (tous les 14 jours environ)

2. Analyse des quantités :
- Quantités principales : 98u, 196u, 392u
- Modes principaux : 
  * 98u (6 occurrences)
  * 196u (4 occurrences)
- Variations de quantité semblent correspondre à des multiples/regroupements

3. Recommandation conservatrice :
- Mode dominant : 98 unités
- Variation acceptable en B2B : ±30%
- Recommandation stable : 98 unités
- Risque minimal de rupture ou surstock

Conclusion : Recommander 98 unités comme prochaine commande.

**📅 Analyse Temporelle:**
Commandes régulières, interval moyen 7-14 jours, pattern stable depuis juillet 2025

**📊 Analyse Quantité:**
Variations autour de 98u et 196u, avec quelques commandes à 392u, suggérant des achats groupés ou des besoins variables

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: undefinedu (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commande pour le produit PF3341 CARRE MAYONNAISE BIO 500ML:

1. Analyse temporelle des intervalles:
- Commandes très régulières entre fin juin et septembre 2025
- Intervalles principaux:
  * Entre 3 et 14 jours
  * Aucune période d'interruption significative
  * Rythme de commande stable et prévisible

2. Analyse des quantités:
- Toutes les commandes exactement à 110 unités
- Aucune variation de quantité
- Commandes parfaitement constantes
- Dernière commande le 2025-09-23 (il y a environ 3 semaines)

3. Recommandation:
- Quantité recommandée: 110 unités
- Justification: 
  * Reproduction exacte du pattern historique
  * Aucune raison de modifier la quantité standard
  * Cohérence absolue dans les commandes précédentes

Paramètres de recommandation:
- Variation acceptable: ±30% (entre 77 et 143 unités)
- Niveau de confiance: Élevé (pattern très stable)
- Risque minimal de rupture ou de surstockage

**📅 Analyse Temporelle:**
Intervalles réguliers entre 3-14 jours, rythme de commande stable sans interruption significative

**📊 Analyse Quantité:**
Quantité constante à 110 unités, aucune variation détectable

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 6.5u (0j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 57.2u (8j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -14.0u (-3j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -322.3u (-52j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -438.8u (-62j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:53:43.832Z*
