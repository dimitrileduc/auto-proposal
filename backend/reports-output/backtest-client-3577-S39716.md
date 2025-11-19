# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S39716
- **Date commande** : 2025-10-14 08:27:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 3
- **Tokens**: 4,726 input + 3,672 output = 8,398 total
- **Coût**: $0.0693 (~6.93¢)
- **Coût par produit LLM**: $0.0231


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 101.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 86.6% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 64 | 128 | 64.0 | 50.0% | ✅ partial | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 250 | 112 | 138.0 | 123.2% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 64u vs Médiane: undefinedu (Réel: 128u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 128u
- 📉 **Erreur LLM**: 64u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
Les commandes montrent deux niveaux distincts : 64u et 128u.
- Commandes à 64u : 6 occurrences (2025-10-09, 2025-08-12, 2025-08-05, 2025-07-17, 2025-07-11, 2025-06-24)
- Commandes à 128u : 2 occurrences (2025-09-16, 2025-08-04)

Les commandes de 128u représentent exactement le double de la quantité standard. Analyse:
- La commande du 2025-09-16 (128u) arrive après une période de 35 jours sans commande → probable rattrapage/consolidation
- La commande du 2025-08-04 (128u) est suivie le lendemain (2025-08-05) d'une commande standard de 64u → anomalie possible (erreur, promotion, ou besoin exceptionnel)

Demande de fond identifiée : 64u (quantité récurrente et stable)

ÉTAPE 2 - SAISONNALITÉ:
Période d'observation : Juin à Octobre 2025
Fréquence des commandes par mois:
- Juin : 1 commande (64u)
- Juillet : 2 commandes (64u chacune) = 128u total
- Août : 3 commandes (dont 1x128u + 2x64u) = 256u total - PÉRIODE HAUTE
- Septembre : 1 commande (128u)
- Octobre : 1 commande (64u) au 09/10

Les boulettes tomate montrent une activité accrue en JUILLET-AOÛT (période estivale). Nous sommes actuellement mi-octobre, donc en sortie de période haute. La demande revient à un niveau standard/modéré typique de l'automne.

ÉTAPE 3 - TENDANCE RÉCENTE:
Analyse des 4 dernières commandes vs les 4 précédentes:
- Dernières 4 : 64u (09/10), 128u (16/09), 64u (12/08), 64u (05/08) = 320u sur ~2 mois
- Précédentes 4 : 128u (04/08), 64u (17/07), 64u (11/07), 64u (24/06) = 320u sur ~1.5 mois

Volume total similaire mais fréquence en léger ralentissement. La dernière commande (64u le 09/10) confirme un retour à la normale post-saison estivale. Intervalles entre commandes:
- Récent : 5j entre 09/10 et date actuelle (14/10), 23j avant, 35j avant
- Historique : 7j, 6j, 17j

Tendance : STABLE à LÉGÈREMENT DÉCROISSANTE (normalisation post-été)

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base demande de fond : 64u
- Ajustement saisonnier : 0% (mi-octobre = période normale, pas de pic)
- Ajustement tendance : 0% à -10% (stabilisation après été, mais restons sur la valeur standard)
- Facteur sécurité : Conservateur

La dernière commande date du 09/10 (5 jours seulement), ce qui est très récent. Le cycle moyen entre commandes est de 15-20 jours environ. Il n'y a pas d'urgence immédiate.

RECOMMANDATION : 64u
Justification : Quantité standard observée, période normale (hors pic estival), stock récent suffisant, approche conservatrice privilégiée.


**📅 Analyse Temporelle:**

Intervalle moyen entre commandes : ~17 jours
Dernière commande : il y a 5 jours (2025-10-09)
Cycle actuel : Début de cycle, pas d'urgence de réapprovisionnement immédiat
Régularité : Modérée avec variations liées à la saisonnalité estivale (juillet-août plus dense)


**📊 Analyse Quantité:**

Distribution des quantités : 
- 64u : 75% des commandes (6/8) - QUANTITÉ STANDARD
- 128u : 25% des commandes (2/8) - Commandes exceptionnelles (consolidation/rattrapage)
Moyenne brute : 80u | Médiane : 64u
Demande de fond identifiée : 64u (après exclusion des pics)
Variation observée : Normale pour le B2B (facteur 2x lié aux cycles d'achat groupé)


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 250u vs Médiane: undefinedu (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 250u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 138u (123.2%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):**
Analyse des 4 commandes disponibles:
- 2025-08-05: 448u (OUTLIER PROBABLE - 2x la commande précédente)
- 2025-08-04: 224u
- 2025-06-30: 112u
- 2025-06-24: 224u

La commande de 448u représente exactement le double de celle du jour précédent (224u) et 4x celle du 30/06. Cela ressemble fortement à un événement ponctuel (promotion estivale, stockage préventif, ou correction avant période de fermeture).

**Demande de fond estimée** (hors outlier): Entre 112u et 224u, soit ~168u en moyenne.

**ÉTAPE 2 - SAISONNALITÉ:**
- Produit: "VIN CIBOULET PET 450" - segment vin en format PET (nomade/picnic)
- Commandes concentrées en juin-août (période estivale)
- Pic d'activité visible en août (2 commandes rapprochées dont 1 grosse)
- **Date actuelle: 14 octobre** = PÉRIODE POST-ESTIVALE (demande attendue en baisse)

Le format PET et la période estivale suggèrent un produit à forte saisonnalité été. En octobre, nous sommes hors saison haute.

**ÉTAPE 3 - TENDANCE RÉCENTE:**
- Juin: 2 commandes (112u + 224u) sur 6 jours = 336u
- Août: 2 commandes (224u + 448u outlier) sur 2 jours
- **Écart temporel critique**: Dernière commande il y a 70 jours (début août → mi-octobre)

Cette absence de commande depuis 2 mois confirme la saisonnalité forte. La tendance post-été est clairement **EN BAISSE**.

**ÉTAPE 4 - RECOMMANDATION FINALE:**
- **Base de fond**: 168u (moyenne hors outlier 448u)
- **Ajustement saisonnier**: +50% car malgré la période basse, il faut anticiper une commande de réapprovisionnement après 70 jours sans achat = 168u × 1.5 = 252u
- **Ajustement tendance**: Pas de réduction supplémentaire car le client commande probablement pour reconstituer un stock minimal hors saison
- **Principe de prudence**: Arrondi à 250u (format standard proche de 224u habituel)

**JUSTIFICATION**: En période hors saison, le client devrait commander une quantité proche de sa "base normale" (224u), légèrement supérieure pour compenser les 70 jours sans réapprovisionnement. 250u représente un compromis sécurisé sans sur-stocker.


**📅 Analyse Temporelle:**

Historique très court (4 commandes sur 4 mois). Fréquence irrégulière: 6 jours entre les 2 premières commandes (juin), puis 35 jours jusqu'à août, puis 2 commandes consécutives en août (1 jour d'écart). Depuis, 70 jours sans commande. Pattern temporel suggère des commandes groupées en période estivale suivies d'une pause prolongée hors saison. La prochaine commande devrait être une reconstitution de stock minimal pour la période automnale/hivernale à faible rotation.


**📊 Analyse Quantité:**

Quantités variables: 112u, 224u (×2), 448u. Le 224u apparaît comme la quantité "standard" (50% des commandes). Le 112u représente probablement une demi-commande, et le 448u un doublement exceptionnel (événement promotionnel ou stockage préventif estival). Ratio min/max de 1:4 témoigne d'une forte variabilité, typique des produits saisonniers en B2B agroalimentaire. La quantité de fond normalisée se situe autour de 168-224u.


**📈 Tendance détectée:** ✅ Oui

</details>




---

## False Positives (1)

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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: 75.7u (8j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:29:54.203Z*
