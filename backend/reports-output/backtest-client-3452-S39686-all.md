# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S39686
- **Date commande** : 2025-10-13 07:49:42
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 4
- **Tokens**: 6,621 input + 4,906 output = 11,527 total
- **Coût**: $0.0935 (~9.35¢)
- **Coût par produit LLM**: $0.0234


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (2)

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
| [PF3301] DLL MAYONNAISE CITRON 300ML | 130 | 130 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 98 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3301] DLL MAYONNAISE CITRON 300ML</strong> - LLM: 130u vs Médiane: undefinedu (Réel: 130u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 130u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 130u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
- Commande du 2025-08-22: 390u → OUTLIER détecté (3x la moyenne des autres commandes)
- Cette commande représente un événement ponctuel (promotion, stockage préventif, ou correction)
- Commandes "normales" identifiées: 130u (récurrent), 260u (2x130u, probablement commande groupée standard)
- Demande de fond réelle estimée: **130u par commande**

**ÉTAPE 2: SAISONNALITÉ**
- Produit: Mayonnaise citron → Produit condimentaire avec potentiel saisonnier estivale (BBQ, salades)
- Période historique analysée: Juillet-Septembre (été/début automne)
- Date actuelle: 13 octobre 2025 → **SORTIE de la période estivale haute**
- On observe une baisse de fréquence: dernières commandes en septembre (08/09 et 01/09), puis plus rien en octobre
- Ajustement saisonnier: **-10% à -15%** (baisse naturelle post-saison estivale)

**ÉTAPE 3: TENDANCE RÉCENTE**
- 4 dernières commandes "normales" (hors outlier): 130u, 130u, 130u, 130u
- Fréquence des commandes:
  * Juillet-Août: très rapprochées (3-8 jours d'intervalle)
  * Septembre: espacées (7 jours entre les deux)
  * Octobre: aucune commande depuis 35 jours
- **Tendance: Ralentissement net** de la demande et de la fréquence
- Volume unitaire: stable à 130u quand il y a commande
- Coefficient tendance: **Baisse modérée** (demande existe mais moins fréquente)

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base de fond: 130u
- Ajustement saisonnier (octobre post-été): Neutre sur quantité unitaire (le ralentissement est déjà dans la fréquence)
- Ajustement tendance: Demande stable à 130u quand elle survient
- Contexte actuel: Pas de commande depuis 35 jours → le client a probablement encore du stock ou demande réduite
- **Approche conservatrice**: Recommander la quantité standard observée = **130u**
- Rationale: Quand le client commandera, ce sera probablement 130u (pattern constant), mais la fréquence sera plus espacée


**📅 Analyse Temporelle:**

Fréquence historique: Très variable selon la période.
- Juillet-Août (haute saison): commandes tous les 3-8 jours (très fréquent)
- Septembre: ralentissement à ~7 jours entre commandes
- Octobre actuel: aucune commande depuis 35 jours

Le pattern montre une forte saisonnalité estivale avec des commandes fréquentes, suivie d'un net ralentissement en automne. L'intervalle actuel de 35 jours sans commande confirme que nous sommes en période basse. La prochaine commande pourrait survenir sous peu ou être encore plus espacée selon les besoins du client.


**📊 Analyse Quantité:**

Quantités observées (hors outlier):
- Mode dominant: 130u (apparaît 5 fois sur 7 commandes)
- 1x 260u (exactement 2x130u, commande groupée standard)
- 1x 390u (3x130u, outlier probable - événement ponctuel)

La quantité de base est clairement **130u** (unité de commande standard). Le 260u est un multiple logique (2x). Le 390u du 22/08 est un événement isolé à exclure de l'analyse de fond.

Conclusion: Le client commande systématiquement par lots de 130u (1x ou 2x selon ses besoins). Aucune tendance à la hausse ou baisse des volumes unitaires, seulement une variation de fréquence liée à la saisonnalité.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: undefinedu (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
- Commandes multiples de 98u détectées: 98u apparaît 8 fois
- Commandes de 196u (2x98): 3 occurrences (14/08, 18/07, total cohérent avec lot double)
- Commande de 294u (3x98): 1 occurrence le 30/06 (possiblement un pic promotionnel ou stockage préventif avant période estivale)
- Pattern clair: l'unité de commande de base est 98u
- Demande de fond réelle = 98u par commande, avec occasionnellement des lots multiples

ÉTAPE 2 - SAISONNALITÉ:
- Juin-Juillet 2025: Activité intense avec 5 commandes en 32 jours, incluant la commande exceptionnelle de 294u (30/06) et une de 196u (18/07)
- Août 2025: Fréquence très élevée avec 5 commandes en 1 mois (intervalle moyen de ~6 jours)
- Septembre 2025: Ralentissement notable avec seulement 2 commandes espacées de 7 jours
- Octobre actuel (13/10): 35 jours sans commande depuis la dernière (08/09)
- Analyse: Le produit "VINAIGRETTE YOGORETTE" montre une forte saisonnalité estivale (juin-août = pic de consommation pour salades). Octobre marque une période basse post-été.
- Impact: Nous sommes en période de ralentissement saisonnier attendu

ÉTAPE 3 - TENDANCE RÉCENTE:
- 4 dernières commandes (août-septembre): 98u, 98u, 98u, 98u → Volume stable à 98u/commande
- Fréquence: Août = très rapprochée (5-7 jours), Septembre = espacée (7 jours puis arrêt)
- Tendance détectée: DÉCÉLÉRATION CLAIRE de la demande
- Volume stable à 98u mais fréquence en baisse marquée (35 jours d'écart actuel vs 5-7 jours en août)
- Coefficient tendance: -20% à -30% attendu pour période automnale

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base de demande (nettoyée): 98u (unité standard)
- Ajustement saisonnier: Période basse (octobre-hiver pour salades) → Neutre à -15%
- Ajustement tendance: Décélération confirmée → -15%
- Ajustement global potentiel: -25% à -30%
- Calcul: 98u × 0.75 = 73.5u

DÉCISION CONSERVATRICE:
Malgré les ajustements négatifs, je recommande de maintenir 98u car:
1. C'est l'unité de commande standard (conditionnement probable)
2. Évite la rupture si la demande se maintient
3. Le client pourrait commander bientôt (35 jours d'écart est long)
4. Approche conservatrice B2B: mieux vaut avoir 98u disponibles que risquer une rupture
5. La tendance baissière est saisonnière (normale), pas structurelle

Si le produit était vendu en unités libres, je recommanderais 75u, mais le pattern historique montre clairement des lots de 98u.


**📅 Analyse Temporelle:**

Intervalles entre commandes:
- 08/09 → 01/09: 7 jours
- 01/09 → 25/08: 7 jours  
- 25/08 → 19/08: 6 jours
- 19/08 → 14/08: 5 jours
- 14/08 → 11/08: 3 jours
- 11/08 → 05/08: 6 jours
- 05/08 → 18/07: 18 jours
- 18/07 → 30/06: -18 jours (chevauchement, commandes rapprochées)
- 30/06 → 27/06: 3 jours
- 27/06 → 16/06: 11 jours

Fréquence moyenne août: ~5-7 jours (pic d'activité)
Fréquence septembre: 7 jours puis arrêt
Écart actuel (13/10 depuis 08/09): 35 jours → TRÈS SUPÉRIEUR à la normale, indiquant ralentissement saisonnier fort


**📊 Analyse Quantité:**

Distribution des quantités:
- 98u: 8 occurrences (73% des commandes) → STANDARD
- 196u: 2 occurrences (18% des commandes) → DOUBLE LOT
- 294u: 1 occurrence (9% des commandes) → TRIPLE LOT (outlier probable)

Moyenne brute: 134u
Moyenne sans outlier (294u): 118u
Médiane: 98u
Mode: 98u (nettement dominant)

Conclusion: 98u est l'unité de base incontestable, probablement liée au conditionnement carton/palette. Les commandes de 196u et 294u sont des multiples pour stock anticipé ou demandes exceptionnelles.


**📈 Tendance détectée:** ✅ Oui

</details>




---

## False Positives (2)

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
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 260 | Stock prédit: 89.2u (3j restants) → prédit 260u mais non commandé |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 294 | Stock prédit: -854.6u (-27j restants) → prédit 294u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:28:49.587Z*
