# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S39562
- **Date commande** : 2025-10-06 09:21:48
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 8
- **Tokens**: 17,625 input + 5,058 output = 22,683 total
- **Coût**: $0.1287 (~12.87¢)
- **Coût par produit LLM**: $0.0161


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
| **MAE** | 17.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 38.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 88 | 44.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 20 | 12 | 8.0 | 66.7% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 160u (confidence: medium)
- 📊 **Baseline N-1**: 160u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 160u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec dominance lundis - Intervalle variable 4-18 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse -33% (240u→160u dernier mois)
- **Outliers détectés**: 320u, 480u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Historique récent (3 mois): 19/08→12/08 (7j), 12/08→11/09 (30j), 11/09→15/09 (4j), 15/09→29/09 (14j)
- Pattern irrégulier mais prédominance lundis (6/9 commandes en N-1, 3/5 en période récente)
- Prédiction pour lundi 06/10, soit 7 jours après la dernière commande (29/09) → cohérent avec rythme hebdo possible

**FILTRAGE OUTLIERS:**
- N-1 montrait volumes élevés: 320u (juin-juillet-août), 240u-320u (sept)
- Détecté 2 commandes groupées le même jour 27/08/2024 (160+320) et 24/07/2024 (320+320) = outliers de regroupement
- Période récente stabilisée: 160u (3 fois consécutives), puis remontée 240u (29/09)

**SYNTHÈSE & DÉCISION:**
- Saisonnalité faible: même période N-1 (début oct) = 80u seulement (30/09/2024), mais contexte différent (fin de série)
- Tendance nette de baisse: volumes N-1 (240-320u) vs N (160u dominant)
- Dernière commande 240u (29/09) = possible rattrapage après intervalle 14j
- Retour attendu au rythme de fond: **160u** (quantité modale des 3 derniers mois)

Le 240u du 29/09 semble compenser l'intervalle long (14j). Avec un retour à cycle hebdo (7j), la demande de fond à 160u est la plus probable.

</details>


<details>
<summary><strong>2. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 104u (Réel: 88u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: medium)
- 📊 **Baseline N-1**: 130u
- 📊 **Médiane**: 104u
- ✅ **Réel commandé**: 88u
- 📉 **Erreur LLM**: 44u (50.0%)
- 📉 **Erreur Médiane**: 16u (18.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance à 2-3 semaines d'intervalle. Historiquement: lundi dominant (5/12 occurrences N-1), mais récemment diversifié (lun/mar/jeu)
- **Saisonnalité**: weak
- **Tendance**: Hausse +27% (de 104u standard vers 132u récent)
- **Outliers détectés**: 208u, 18u

**🧠 Raisonnement LLM:**
**Analyse temporelle**: Dernière commande le 29/09 (lundi), soit 7 jours avant la date de prédiction (06/10 lundi). L'intervalle moyen récent est de 14-18 jours, ce qui rend une commande possible début octobre.

**Pattern identifié**: 
- N-1 (sept-oct): 104u (16/09), 104u (09/09), 156u (26/09) → moyenne ~120u hors outlier
- N (juillet-sept): 52u, 104u, 104u, 132u, 132u

**Tendance claire**: Migration de 104u (standard historique) vers 132u (nouveau standard) sur les 2 dernières commandes de sept 2025. Hausse de +27%.

**Outliers détectés**: 
- 208u (14/08/24): double commande exceptionnelle
- 18u (24/07/24): erreur/reliquat (corrigé le même jour avec 156u)

**Saisonnalité faible**: Sept-Oct N-1 montrait des volumes stables autour de 104-156u. Pas de pic saisonnier marqué pour cette période.

**Décision**: Le nouveau standard de 132u observé 2 fois consécutivement en septembre 2025 reflète une croissance de la demande client. Avec un intervalle de 7 jours depuis la dernière commande (rythme accéléré par rapport aux 14-18j habituels), mais compatible avec un réapprovisionnement début octobre, je projette la quantité récente stabilisée à 132u.

</details>


<details>
<summary><strong>3. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 20u vs Médiane: 25u (Réel: 12u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: medium)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 12u
- 📉 **Erreur LLM**: 8u (66.7%)
- 📉 **Erreur Médiane**: 13u (108.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec espacement très large (44 jours entre les 2 dernières commandes, historique N-1 montre intervalles variables de 10-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +150% (passage de 6-10u en N-1 à 20u en période récente)
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

**1. RYTHMIQUE & FRÉQUENCE:**
- Historique N-1: Commandes espacées de 10 à 40+ jours, sans pattern hebdomadaire clair
- Dernières commandes: 2025-07-29 → 2025-09-11 (44 jours d'écart)
- Date de prédiction: 2025-10-06 (25 jours après dernière commande)
- Pattern: Commandes irrégulières, probablement basées sur épuisement du stock

**2. TENDANCE & CHANGEMENT STRUCTUREL:**
- N-1 (mai-sept 2024): Quantités de 4-10u (moyenne ~7u, avec un pic à 16u le 24/07)
- Période récente (juil-sept 2025): Deux commandes à 20u chacune
- **Rupture nette:** Le client a DOUBLÉ ses volumes de commande (+150%)
- Ceci suggère soit une hausse de la demande client final, soit un changement de politique d'approvisionnement (commandes plus espacées mais plus volumineuses)

**3. SAISONNALITÉ:**
- Impact faible: Les volumes N-1 en septembre (6-10u) ne montrent pas de pic saisonnier fort
- Pas de récurrence événementielle claire à début octobre

**4. DÉCISION:**
- Les 20u observés sur les 2 dernières commandes représentent le NOUVEAU NIVEAU DE RÉFÉRENCE
- Aucun élément ne suggère que ces quantités soient exceptionnelles (pas de promotion indiquée, répétition du pattern)
- Le rythme irrégulier rend la prédiction de la date difficile, mais SI commande le 06/10, la quantité sera probablement alignée sur le nouveau standard

**PRÉDICTION: 20 unités** - Alignement sur le nouveau niveau de demande stabilisé en 2025

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

*Rapport généré automatiquement le 2025-11-20T08:59:33.201Z*
