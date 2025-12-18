# Rapport Backtest - Client AU VERT G

## Contexte

- **Client** : AU VERT G (ID: 60166)
- **Commande réelle** : S39838
- **Date commande** : 2025-10-21 09:26:44
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,852 input + 3,096 output = 10,948 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 22.2% | 9 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 36.4% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'est détectée sur les deux points de données fournis, la demande de fond est fixée à 5 unités. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, mais le secteur des boissons suggère une baisse potentielle après l'été, bien que non visible ici. Étape 3: Le volume est parfaitement stable (5u commandées le 20/08 puis le 25/09). Le délai entre les commandes est d'environ 36 jours. La commande actuelle intervient 25 jours après la dernière, soit légèrement en avance sur le cycle observé. Étape 4: En l'absence d'historique profond, la stratégie conservatrice impose de maintenir le volume de 5 unités, correspondant au besoin récurrent identifié lors des deux derniers mois sans signe de croissance ou de baisse drastique du stock tampon du client. La confiance est faible en raison du très petit échantillon de données (n=2). Trop tôt pour appliquer un coefficient de tendance ou de saisonnalité robuste sur ce SKU spécifique au-delà de la stabilité constatée sur le court terme d'août-septembre vers octobre (mi-saison). Cependant, le passage de l'été vers l'automne ne semble pas avoir encore affecté le panier moyen de 5 unités de ce client pour ce soda spécifique. On privilégie donc 5 unités pour assurer la continuité sans risque de sur-stockage important puisque le rythme semble être de 5 unités par mois. La date de lundi est inhabituelle par rapport au milieu de semaine habituel, ce qui pourrait indiquer une rupture de stock imminente chez le client justifiant le maintien du volume plein de 5u plutôt qu'une réduction protectrice de stock de sécurité fin de mois d'octobre. Si ce volume de 5u est son unité logistique minimale de commande, cela renforce la pertinence du maintien à 5u plutôt que de descendre à 4u ou monter à 6u sans signal fort d'accélération des ventes locales du client final sur ce produit de niche (cola belge). Le choix final se base donc sur la moyenne arithmétique simple sans pondération complexe faute de profondeur temporelle suffisante mais avec une assurance sur la répétabilité du besoin immédiat du client B2B en question qui consomme environ 1 canette par semaine en moyenne si l'on regarde le flux global mensuel par rapport aux 30 jours classiques de rotation.

</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-36 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points de données) mais montre une stabilité parfaite à 5 unités par commande avec un intervalle d'environ un mois. ÉTAPE 1: Aucune valeur aberrante n'est détectée sur les deux commandes de 5u. ÉTAPE 2: Pas de données N-1 disponibles pour évaluer la saisonnalité, mais le produit (cola zero) est généralement stable en automne pour le B2B. ÉTAPE 3: La tendance est stable. La commande actuelle intervient 25 jours après la précédente, ce qui est légèrement plus tôt que le cycle de 36 jours observé entre août et septembre. ÉTAPE 4: Compte tenu de la régularité des volumes et de l'absence d'historique de croissance, la recommandation reste fixée à la demande de fond de 5 unités pour éviter le surstockage, surtout pour un lundi hors cycle habituel de fin de semaine (mercredi/jeudi). Le niveau de confiance est faible en raison du manque de profondeur historique (seulement 2 commandes). Mais en supply chain B2B, la répétabilité du volume (5u) prime en l'absence de signaux de rupture de tendance ou de promotion prévue par l'utilisateur l'an dernier sur cette période spécifique (octobre). Aucun ajustement significatif n'est nécessaire à ce stade car le rythme est stable malgré le faible recul, et il y a peu de risques d'accélération brutale pour une boisson 'Zero' isolée à ce stade du calendrier annuel (hors fêtes).

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-25 12:59:50: 5u
- 2025-08-20 08:20:14: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-25 12:59:50: 5u
- 2025-08-20 08:20:14: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (7)

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
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Stock prédit: 1.0u (24j restants) → prédit 2u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock prédit: -0.5u (-8j restants) → prédit 3u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | Stock prédit: 0.5u (8j restants) → prédit 4u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: -0.5u (-20j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: -0.7u (-25j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 24 | Stock prédit: -0.9u (-45j restants) → prédit 24u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | Stock prédit: -0.9u (-29j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:13:16.531Z*
