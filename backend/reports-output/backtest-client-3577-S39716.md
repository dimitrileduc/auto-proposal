# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S39716
- **Date commande** : 2025-10-14 08:27:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 3
- **Tokens**: 6,734 input + 1,892 output = 8,626 total
- **Coût**: $0.0486 (~4.86¢)
- **Coût par produit LLM**: $0.0162


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
| **MAE** | 56.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 46.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 128 | 128 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 224 | 112 | 112.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 128u vs Médiane: 64u (Réel: 128u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 128u (confidence: medium)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 128u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 64u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande principalement le Mardi, rythme irrégulier variant de 3 à 35 jours
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 64-128u, avec légère préférence pour 64u récemment
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Pattern dominant: commandes le MARDI (9 occurrences sur 15)
- La date de prédiction est un MARDI (2025-10-14), aligné avec le pattern habituel
- Dernière commande: 2025-10-09 (jeudi), soit 5 jours avant → intervalle court suggérant un retour au rythme normal
- Intervalles récents: 23j (16/09→09/10), puis 5j → client revient à une fréquence plus régulière

**FILTRAGE OUTLIERS:**
- 192u apparaît 2 fois (juin 2024, novembre 2023) → événements promotionnels ponctuels, à exclure
- Novembre 2023 (192u) suit un pattern de fin de trimestre
- Baseline sans outliers: majorité entre 64u et 128u

**ANALYSE SAISONNALITÉ N-1:**
- Sept 2024 (même période N-1): 64u le 03/09
- Octobre N-1: pas de données directes, mais pattern stable 64-128u
- Impact saisonnier FAIBLE: pas de pic marqué en octobre historiquement

**TENDANCE RÉCENTE (3 mois):**
- Août: 128u (lun) + 64u + 64u = oscillation 64-128u
- Sept: 128u (mar)
- Oct: 64u (jeu) mais commande exceptionnelle en milieu de semaine
- **Point clé**: Le 16/09 (mardi) = 128u, c'est la référence la plus pertinente pour un mardi

**DÉCISION:**
- Prédiction pour un MARDI (jour de prédilection du client)
- Dernière commande mardi: 128u (16/09)
- Le 09/10 (64u jeudi) semble être un réassort court d'appoint
- Baseline théorique: ~96u (moyenne pondérée)
- **Recommandation: 128u** → quantité standard pour les commandes du mardi, cohérente avec le pattern récent et le retour au rythme normal

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 224u vs Médiane: 224u (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 224u (confidence: medium)
- 📊 **Baseline N-1**: 112u
- 📊 **Médiane**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 112u (100.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec concentration sur les mardis, intervalle variable de 1 à 70+ jours entre commandes
- **Saisonnalité**: weak
- **Tendance**: Hausse forte +200% (passage de 112u baseline N-1 à 224-448u en N)
- **Outliers détectés**: 448u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: 
L'historique N-1 montre des commandes principalement le mardi avec une baseline stable à 112u (10/12 commandes). En N, rupture de rythme : seulement 2 commandes récentes (04 et 05 août 2025), avec 224u + 448u sur 2 jours consécutifs, suggérant un rattrapage après ~70 jours sans commande.

**FILTRAGE OUTLIERS**: 
Le 448u du 05/08 est clairement exceptionnel (4x la baseline N-1, 2x la nouvelle norme N). La commande de 224u du 04/08 semble représenter le nouveau niveau de demande standard.

**TENDANCE**: 
Doublement net de la demande de fond (112u → 224u), confirmé par la période récente. Le 448u est isolé et ne doit pas influencer la prédiction.

**SAISONNALITÉ**: 
Octobre 2024 ne montre aucune donnée, donc pas de référence saisonnière forte. Impact faible.

**DÉCISION**: 
La prédiction du 14/10/2025 (mardi, jour privilégié) doit refléter la nouvelle baseline à 224u, en écartant le pic de 448u comme événement ponctuel (probable promotion ou rattrapage). Intervalle depuis dernière commande (~70j) justifie une commande de reconstitution au niveau standard.

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

*Rapport généré automatiquement le 2025-11-20T09:00:15.129Z*
