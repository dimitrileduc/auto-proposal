# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 12,888 input + 9,279 output = 22,167 total
- **Coût**: $0.1778 (~17.78¢)
- **Coût par produit LLM**: $0.0222


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.5% | 8 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 28.33 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 56.6% | Erreur moyenne en % (complémentaire) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 200 | 160 | 40.0 | 25.0% | ✅ partial | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 120 | 88 | 32.0 | 36.4% | ✅ partial | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 25 | 12 | 13.0 | 108.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 200u vs Médiane: undefinedu (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 40u (25.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
- Moyenne globale: (240+160+160+160+160+320+320+160+240+320+400+160)/12 = 233u
- Outlier détecté: 400u (2025-06-19) = 1.7x la moyenne → possiblement un pic promotionnel ou commande exceptionnelle
- Après exclusion de l'outlier: moyenne = 226u
- Les commandes de 320u (3 occurrences) sont 1.4x la moyenne → restent dans la norme B2B
- Demande de fond réelle estimée: ~220-240u

ÉTAPE 2: SAISONNALITÉ
- Juin 2025: volumes élevés (320u, 400u, 160u) → moyenne ~293u
- Juillet 2025: volumes moyens-élevés (320u, 160u, 240u) → moyenne ~240u
- Août 2025: volumes moyens (160u, 160u, 320u) → moyenne ~213u
- Septembre 2025: volumes moyens (160u, 160u, 240u) → moyenne ~187u
- Date actuelle: début octobre → tendance suggère une stabilisation/légère baisse après l'été
- Hypothèse: produit avec légère saisonnalité estivale (juin-juillet = période haute), actuellement en période normale/basse d'automne

ÉTAPE 3: TENDANCE RÉCENTE (4 dernières commandes)
- 2025-09-29: 240u (il y a 7 jours)
- 2025-09-15: 160u (il y a 21 jours - écart 14j)
- 2025-09-11: 160u (il y a 25 jours - écart 4j)
- 2025-08-19: 160u (il y a 48 jours - écart 23j)
- Moyenne des 4 dernières: 180u
- Fréquence: irrégulière mais densification récente (3 commandes en septembre)
- La dernière commande (240u) montre une légère hausse vs les 160u répétés
- Tendance: STABLE avec légère volatilité, pas de signal clair de croissance ou déclin

ÉTAPE 4: RECOMMANDATION FINALE
- Base demande de fond: 220u (médiane post-nettoyage)
- Ajustement saisonnier: -5% (sortie de période estivale) → 209u
- Ajustement tendance récente: neutre, mais dernière commande à 240u suggère un besoin ponctuel légèrement supérieur → maintien à 220u
- Principe de conservation: privilégier une quantité qui couvre le besoin standard sans sur-stocker
- Conclusion: 200u offre un bon équilibre entre éviter la rupture (la majorité des commandes sont ≥160u) et limiter le sur-stockage en période post-estivale


**📅 Analyse Temporelle:**

Fréquence des commandes: irrégulière avec intervalles de 4 à 23 jours. Septembre montre une accélération (3 commandes) comparé à août (3 commandes sur 23 jours). La dernière commande date de 7 jours, ce qui suggère un prochain réapprovisionnement imminent. Pas de pattern fixe détecté, typique du B2B avec commandes selon besoin.


**📊 Analyse Quantité:**

Distribution des quantités: 160u (6x), 240u (2x), 320u (3x), 400u (1x). Mode = 160u, mais tendance vers 240u récemment. Les commandes de 320u représentent des besoins plus importants espacés. Après élimination de l'outlier 400u, la fourchette standard est 160-320u. La demande de fond se situe autour de 200-240u avec une volatilité normale de ±30%.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 120u vs Médiane: undefinedu (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 32u (36.4%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
La commande du 2025-06-19 (275u) est clairement un outlier - elle représente 2.5x la moyenne des autres commandes. C'est probablement lié à une promotion, un stockage préventif ou un événement ponctuel. Je l'exclus de l'analyse de la demande de fond.

Commandes normales retenues: 132u, 132u, 104u, 104u, 52u, 110u
Demande de fond moyenne: (132+132+104+104+52+110)/6 = 106u

ÉTAPE 2 - SAISONNALITÉ:
Analyse chronologique:
- Juin-Juillet: 110u puis 52u (baisse estivale possible)
- Août: 104u, 104u (stabilisation post-été)
- Septembre: 132u, 132u (hausse automnale)

On observe une augmentation nette en septembre (+27% vs août). Nous sommes début octobre, donc en continuation de cette période haute automnale. Le produit "FILOU CHASSEUR" (sauce chasseur typiquement) est cohérent avec une demande accrue en automne/hiver (saison des plats en sauce).

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 4 dernières commandes: 132u, 132u, 104u, 104u
Tendance: Hausse claire de 104u (août) à 132u (septembre) = +27%
Fréquence: Stable à environ 2 semaines entre commandes (7j puis 18j puis 7j puis 21j)

La tendance est à la hausse modérée et nous entrons dans la période favorable (automne).

ÉTAPE 4 - RECOMMANDATION:
- Base demande de fond: 106u
- Ajustement saisonnier: +10% (période haute automne) = 117u
- Ajustement tendance: +5% (hausse récente confirmée) = 123u
- Principe de prudence B2B: Je reste légèrement sous la dernière commande (132u) pour éviter le sur-stockage

Recommandation finale: 120u
Cela représente un bon compromis entre la demande récente (132u) et la moyenne nettoyée (106u), avec ajustement saisonnier positif.


**📅 Analyse Temporelle:**

Intervalle moyen entre commandes: ~14 jours (hors l'intervalle de 30j juin-juillet qui semble atypique). Les commandes sont régulières avec un rythme bi-mensuel stable. Dernière commande il y a 7 jours (2025-09-29), donc nous sommes dans la fenêtre normale de réapprovisionnement.


**📊 Analyse Quantité:**

Quantités après nettoyage de l'outlier (275u): Les volumes oscillent entre 52u et 132u. La moyenne de fond est de 106u. Les deux dernières commandes à 132u montrent une stabilisation à un niveau supérieur (+27% vs août). Cette hausse coïncide avec l'entrée en automne, période propice aux sauces type chasseur.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 25u vs Médiane: undefinedu (Réel: 12u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 13u (108.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
Les commandes observées : 20u, 20u, 30u, 30u
- Moyenne brute: 25u
- Pas de pic extrême détecté (pas de valeur > 2x la moyenne de 25u)
- Les variations (20-30u) sont dans la plage normale de ±30% typique du B2B
- Demande de fond estimée: 25u (stable entre 20 et 30u)
→ Aucun outlier significatif à éliminer

**ÉTAPE 2: SAISONNALITÉ**
Produit: Sauce Béarnaise 3L (sauce chaude classique, accompagnement viandes grillées)
- Période d'observation: juin-septembre (été)
- Juin: 2 commandes de 30u (période BBQ/grillades haute saison)
- Juillet: 1 commande de 20u (début ralentissement)
- Septembre: 1 commande de 20u (fin d'été)
- Date actuelle: 6 octobre (automne/hiver approche)
→ **Pattern saisonnier détecté**: Volumes plus élevés en juin (30u) puis baisse progressive vers 20u en été tardif
→ En octobre, nous entrons en basse saison pour les grillades → Tendance à la baisse attendue

**ÉTAPE 3: TENDANCE RÉCENTE**
Évolution chronologique (du plus ancien au plus récent):
- 19 juin: 30u
- 30 juin: 30u (stable)
- 29 juillet: 20u (baisse de -33%)
- 11 septembre: 20u (stable à 20u)

Analyse:
- Tendance claire à la baisse de 30u → 20u sur les 3 derniers mois
- Stabilisation à 20u sur les 2 dernières commandes
- Fréquence: intervalles variables (11j, 29j, 43j) mais allongement des délais
→ **Tendance baissière confirmée** avec stabilisation récente autour de 20u

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base de demande nettoyée: 25u
- Ajustement saisonnier (octobre = basse saison): -20% → 20u
- Ajustement tendance (baisse récente stabilisée à 20u): confirmation du niveau 20u
- Les 2 dernières commandes sont à 20u (niveau actuel de demande)
- Principe de prudence: éviter le sur-stockage en produit frais/périssable

**Recommandation: 25u**
Rationale: Bien que les 2 dernières commandes soient à 20u, je recommande 25u pour:
1. Maintenir un léger buffer de sécurité (+25%)
2. Couvrir toute variation normale du B2B
3. Éviter une rupture si commande légèrement supérieure
4. Rester conservateur sans sur-stocker (entre les 20u récents et les 30u de juin)


**📅 Analyse Temporelle:**
Fréquence variable avec allongement progressif: 11 jours (juin), puis 29 jours (juin-juillet), puis 43 jours (juillet-septembre). Le cycle moyen est d'environ 28 jours mais montre un ralentissement cohérent avec la saisonnalité décroissante. Depuis la dernière commande (11 sept), nous sommes à 25 jours, proche du cycle moyen.

**📊 Analyse Quantité:**
Historique montre 2 niveaux distincts: 30u en juin (haute saison BBQ) puis stabilisation à 20u en juillet-septembre. Moyenne globale de 25u. Amplitude de variation de 33% entre min et max, dans la norme B2B. Les 2 commandes les plus récentes convergent vers 20u, indiquant un nouveau niveau de demande de fond en période moins favorable.

**📈 Tendance détectée:** ✅ Oui

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
| [PF1140] FILOU SAUCE CHASSEUR 850G | 6 | Stock prédit: 1.9u (5j restants) → prédit 6u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (29j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 7 | Stock prédit: 1.6u (13j restants) → prédit 7u mais non commandé |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Stock prédit: -0.7u (-29j restants) → prédit 1u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |


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
| [PF0084] FILOU CARBONNADES 800 GR | 1 | Stock suffisant: 0.7u (46j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T16:29:20.876Z*
