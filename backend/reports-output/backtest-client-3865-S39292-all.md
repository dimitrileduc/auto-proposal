# Rapport Backtest - Client REWE MARKT GMBH - WEST

## Contexte

- **Client** : REWE MARKT GMBH - WEST (ID: 3865)
- **Commande réelle** : S39292
- **Date commande** : 2025-09-23 06:18:30
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 23
- **Tokens**: 47,401 input + 13,799 output = 61,200 total
- **Coût**: $0.3492 (~34.92¢)
- **Coût par produit LLM**: $0.0152


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.8% | 24 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 33.3% | Score équilibré global |

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
| **MAE** | 0.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (5)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~30j avec concentration sur les mardis
- **Saisonnalité**: weak
- **Tendance**: Hausse +120%
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
L'historique révèle une transformation nette du pattern de commande:
- N-1 (2024): Commandes sporadiques de 1-3u avec des intervalles longs (juin, août, sept)
- Période récente (juil-sept 2025): Rythme mensuel régulier avec volumes 5-6u

Intervalles récents: 15/07 → 11/08 (27j) → 19/08 (8j, likely rattrapage) → 02/09 (14j)
La commande du 02/09/2025 (mardi) remonte à 21 jours, respectant le cycle ~mensuel observé.

**FILTRAGE OUTLIERS:**
Les quantités de 1u en 2024 (doublons du 04/06) sont des anomalies probables. La quantité de 1u du 11/08/2025 accompagne une commande de 5u le même jour = fractionnement logistique, pas outlier de demande.

**SAISONNALITÉ:**
Comparaison sept 2024 vs sept 2025: 3u (19/09/2024) → prévision 5u (23/09/2025)
Impact faible mais hausse structurelle visible: le client a stabilisé sa demande autour de 5u depuis juillet 2025.

**TENDANCE:**
Passage de 1-3u (N-1) à 5-6u (récent) = hausse de +120% sur la baseline
Dernières commandes: 6u → 1u+5u → 5u → 5u
La quantité de 6u (juillet) semble être un léger pic, la normalisation s'établit à 5u.

**CONCLUSION:**
Avec un rythme mensuel établi, une demande stabilisée à 5u et la date du 23/09 (mardi) respectant le cycle, la prédiction optimale est **5 unités**.

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (~30-40j), dernière commande le 2025-09-02, soit 21j avant prédiction
- **Saisonnalité**: weak
- **Tendance**: Hausse +100% (moyenne N-1: 1.7u vs période récente: 3.2u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Pattern irrégulier avec commandes espacées de 20-40j. Dernière commande le 02/09/2025 (4u), soit 21 jours avant la date de prédiction (23/09). Le client ne suit pas un jour fixe mais un rythme mensuel approximatif.

**FILTRAGE OUTLIERS**: La commande de 6u le 15/07/2025 est identifiée comme outlier (pic estival potentiel ou commande exceptionnelle). Les autres commandes récentes oscillent entre 1-4u.

**COMPARAISON N-1**: En sept 2024, une commande de 2u. Volume faible, cohérent avec l'historique N-1 (moyenne 1.7u). Impact saisonnier faible car le produit (sauce béarnaise) n'a pas de forte saisonnalité septembre.

**TENDANCE RÉCENTE**: Sans le pic de 6u, les commandes récentes montrent: 4u (sept), 5u cumulées (août en 2 commandes), 1u (juin). Moyenne pondérée récente (hors outlier) ≈ 3u.

**DÉCISION**: La demande de fond est estimée à 3.2u. Vu le rythme mensuel et la dernière commande de 4u il y a 21j, le client est dans sa fenêtre de réapprovisionnement. Compte tenu de la tendance haussière modérée et de l'absence de saisonnalité forte, **je prédis 3 unités** (arrondi conservateur de la baseline).

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement le mardi (4/8 commandes), intervalle moyen ~3-4 semaines
- **Saisonnalité**: none
- **Tendance**: Hausse modérée récente : moyenne 3M = 2.2u vs N-1 = 1.3u (+69%)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Historique montre commandes espacées de 2-5 semaines, avec préférence pour les mardis. Dernière commande le 02/09/2025 (mardi), soit 3 semaines avant la date de prédiction (23/09, aussi un mardi) - cohérent avec le rythme observé.

**Outliers** : Le pic de 4u du 11/08/2025 (lundi) semble exceptionnel car seule commande un lundi dans l'historique récent et quantité double de la norme. Probablement un rattrapage ou besoin ponctuel.

**Tendance** : En excluant l'outlier de 4u, les 3 derniers mois montrent : 1u, 2u, 3u, 1u = moyenne 1.75u. Légère hausse par rapport à N-1 (1-2u). La commande du 19/08 (3u) et celle du 15/07 (2u) indiquent une demande stabilisée autour de 2-3u.

**Saisonnalité** : Pas de pattern saisonnier fort visible. Les données N-1 de septembre montrent 1u, mais insuffisantes pour établir un cycle annuel.

**Décision** : Baseline théorique à 2.2u. Vu le rythme régulier de ~3 semaines et l'absence de signal de rupture, je recommande **2 unités** - valeur médiane récente, cohérente avec le pattern observé hors outlier, privilégiant la précision sur la prudence.

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec concentration sur Mardi/Lundi, intervalle moyen ~20-30 jours
- **Saisonnalité**: none
- **Tendance**: Hausse récente sur Août (+200% sur 2 commandes de 3u vs baseline 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Le client commande de manière irrégulière avec des intervalles variables (8-14-23-21 jours sur les 4 dernières commandes). Légère préférence pour les mardis (4/8 commandes), et la date de prédiction est un mardi (23/09), ce qui correspond au pattern.

**Détection d'outliers** : Les 2 commandes de 3u en Août 2025 (11 et 19 août) représentent une anomalie nette par rapport à l'historique. Sur 8 commandes totales, 6 sont de 1u. Ces pics d'août pourraient être liés à un événement ponctuel (rattrapage de stock, promotion estivale, événement spécifique) plutôt qu'à un changement structurel de la demande.

**Analyse saisonnière N-1** : Les données de septembre 2024 montrent 1u commandée le 19/09, très proche de notre date cible (23/09). Pas d'impact saisonnier fort détectable - les volumes restent faibles et réguliers en N-1.

**Tendance récente** : La dernière commande (02/09) est revenue à 1u, confirmant le retour à la baseline après les pics d'août. L'intervalle depuis la dernière commande (21 jours au 23/09) correspond au rythme observé.

**Décision** : La baseline de 1u représente le comportement structurel du client (75% des commandes). Les 3u d'août sont des outliers isolés non soutenus par la commande suivante. Prédiction : **1 unité**.

</details>


<details>
<summary><strong>5. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Très faible fréquence (1-2 commandes par trimestre)
- **Saisonnalité**: weak
- **Tendance**: Baisse significative -66% (N-1: moyenne 2u → N: 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse Chain of Thought:**

**1. ANALYSE RYTHMIQUE:**
- Historique très limité avec seulement 3 commandes sur 15 mois
- Intervalles extrêmement irréguliers: juin→juillet 2024 (~1 mois), puis 12 mois de silence jusqu'à juin 2025
- Aucun pattern hebdomadaire ou mensuel détectable
- Dernier achat le 23 juin 2025 (lundi) → 3 mois avant la date de prédiction (23 sept, mardi)
- Produit à rotation très lente, probablement de niche ou en phase de déclin

**2. FILTRAGE OUTLIERS:**
- La commande de 3u (05/07/2024) se démarque nettement vs les 1u
- Possible pic ponctuel (promotion estivale, événement spécifique) non représentatif de la demande structurelle
- Les commandes de 1u (juin 2024 et juin 2025) représentent mieux la baseline récente

**3. SAISONNALITÉ:**
- N-1 montre 2 commandes en été (juin-juillet), N montre 1 commande en juin
- Possible légère saisonnalité estivale mais données insuffisantes pour confirmer
- Impact: **weak** car pas de récurrence claire

**4. TENDANCE:**
- Volume moyen N-1: 2u (moyenne 4u sur 2 commandes) → N: 1u
- Baisse nette de la demande, confirmant un produit en déclin ou remplacé
- La commande la plus récente (juin 2025, 1u) indique la nouvelle normalité

**5. DÉCISION:**
- Avec 3 mois depuis la dernière commande et un rythme trimestriel implicite, septembre serait cohérent pour une nouvelle commande
- La baseline récente (1u) est la référence la plus fiable
- Pas d'élément justifiant une hausse ou une baisse vs la dernière commande

**PRÉDICTION: 1 unité** - Alignée sur la demande récente stabilisée, reflétant un produit à faible rotation avec commandes sporadiques unitaires."

</details>




---

## False Positives (19)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.9u (-5j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -1.1u (-7j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 3 | Stock prédit: 0.9u (9j restants) → prédit 3u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -1.5u (-14j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -0.5u (-4j restants) → prédit 3u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Stock prédit: -0.6u (-4j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Stock prédit: -0.1u (-2j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Stock prédit: 0.5u (27j restants) → prédit 2u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -1.1u (-31j restants) → prédit 2u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.3u (-23j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -1.0u (-45j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.2u (29j restants) → prédit 1u mais non commandé |


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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-20T09:05:05.457Z*
