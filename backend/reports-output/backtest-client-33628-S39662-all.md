# Rapport Backtest - Client LIDL BELGIE GMBH

## Contexte

- **Client** : LIDL BELGIE GMBH (ID: 33628)
- **Commande réelle** : S39662
- **Date commande** : 2025-10-13 04:38:31
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 3
- **Tokens**: 4,938 input + 3,779 output = 8,717 total
- **Coût**: $0.0715 (~7.15¢)
- **Coût par produit LLM**: $0.0238


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
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
| **MAE** | 128.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (1)

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
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 256 | 384 | 128.0 | 33.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167)</strong> - LLM: 256u vs Médiane: undefinedu (Réel: 384u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 256u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 384u
- 📉 **Erreur LLM**: 128u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
La commande du 2025-08-26 (1024u) est clairement un outlier - elle représente 4x la quantité standard observée. Il s'agit très probablement d'une promotion, d'un stockage préventif ou d'une commande exceptionnelle. En l'excluant, les 9 autres commandes montrent un pattern beaucoup plus stable:
- 6 commandes à 256u (août-septembre)
- 4 commandes à 128u (juin-juillet)
La demande de fond réelle oscille entre 128u et 256u.

ÉTAPE 2 - SAISONNALITÉ:
On observe une progression nette liée à la saisonnalité:
- Juin-Juillet 2025: 4 commandes de 128u (période basse - été)
- Août-Septembre 2025: 6 commandes de 256u (doublement des volumes)
- Date actuelle: 13 octobre 2025

Pour un produit "boulettes tomate", la hausse août-septembre correspond à la rentrée scolaire et au retour des habitudes de consommation institutionnelles (restauration collective, cantines). Octobre maintient généralement ce niveau avant les variations hivernales. Nous sommes donc en période HAUTE/STABLE, justifiant le maintien du niveau 256u.

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 4 dernières commandes (hors outlier) montrent:
- 05/09: 256u
- 01/09: 256u
- 14/08: 256u
- 08/08: 256u

Stabilité parfaite à 256u depuis début août. La fréquence est également régulière (3-6 jours d'intervalle). Aucune accélération ni ralentissement détecté. Tendance = STABLE (coefficient 0%).

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base de demande (post-nettoyage): 256u (standard août-septembre)
- Ajustement saisonnier: 0% (octobre maintient le niveau rentrée)
- Ajustement tendance: 0% (parfaite stabilité)
- Facteur sécurité: Approche conservatrice maintenue

Calcul: 256u × 1.0 (saison) × 1.0 (tendance) = 256u

La dernière commande date du 05/09, soit 38 jours. Avec une fréquence historique de 4-7 jours en période haute, le réapprovisionnement est urgent.


**📅 Analyse Temporelle:**

Fréquence des commandes:
- Juin-Juillet: Intervalle moyen de 7-14 jours (4 commandes sur 32 jours)
- Août-Septembre (hors outlier): Intervalle moyen de 3-6 jours (6 commandes sur 35 jours) - Accélération nette
- Depuis dernière commande (05/09): 38 jours écoulés - ALERTE RUPTURE

L'accélération de la fréquence en août-septembre (doublement du rythme) confirme la hausse saisonnière. Le délai actuel de 38 jours sans commande suggère soit une rupture en cours, soit un stock tampon épuisé. Réapprovisionnement URGENT nécessaire.


**📊 Analyse Quantité:**

Distribution des quantités (hors outlier 1024u):
- 128u: 4 occurrences (40%) - Période juin-juillet
- 256u: 6 occurrences (60%) - Période août-septembre

Moyenne hors outlier: 199u
Médiane: 256u
Mode: 256u (dominante récente)

Le doublement de 128u → 256u entre juillet et août est cohérent et structurel (pas une variation aléatoire). Les 256u représentent la norme établie depuis 2.5 mois pour la période post-rentrée. Volume stable et prévisible.


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
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 480 | Stock prédit: -406.0u (-4j restants) → prédit 480u mais non commandé |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 480 | Stock prédit: -173.2u (-1j restants) → prédit 480u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:28:58.418Z*
