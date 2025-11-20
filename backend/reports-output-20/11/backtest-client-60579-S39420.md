# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S39420
- **Date commande** : 2025-10-02 06:12:05
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 15
- **Tokens**: 30,664 input + 3,623 output = 34,287 total
- **Coût**: $0.1463 (~14.63¢)
- **Coût par produit LLM**: $0.0098


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 18 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **MAE** | 1.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 57.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 64.2% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (10)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 4 | 3.0 | 75.0% | ✅ partial | 🤖 LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale d'historique N-1 et seulement 5 commandes sur les 3 derniers mois (moyennes irrégulières sur juillet-septembre: 1-3 unités). La médiane des commandes récentes est de 2 unités, ce qui représente le niveau le plus probable sans pattern saisonnier détectable. Confiance faible due au manque de recul historique pour ce produit apparemment nouveau ou à faible rotation.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
3u

**🧠 Raisonnement LLM:**
Absence totale de données N-1, ce qui limite fortement la fiabilité de l'analyse. Sur les 3 derniers mois, on observe une demande faible et régulière (2u, 2u, 1u) avec une seule commande à 3u qui semble légèrement exceptionnelle. La médiane récente est de 2 unités, ce qui représente la demande la plus probable en l'absence d'historique de référence. Produit bio premium à rotation lente.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit en phase de lancement avec seulement 4 commandes sur 3 mois (1-2 unités par commande, environ 1 commande par mois). Absence totale de données N-1 empêchant toute analyse saisonnière. La demande semble très faible et sporadique, typique d'un produit premium bio en introduction ou niche. Recommandation minimale pour tester le marché sans surstock.

</details>


<details>
<summary><strong>4. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et historique récent très limité (4 commandes sur 3 mois). Les quantités récentes montrent une demande faible et régulière (1-2 unités) sans pattern saisonnier identifiable. Je recommande 2 unités basé sur la médiane récente, mais avec une confiance faible due au manque de profondeur historique pour ce produit qui semble être soit nouveau, soit à très faible rotation.

</details>


<details>
<summary><strong>5. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1, ce qui empêche l'identification de patterns saisonniers. Les 5 commandes récentes (juillet à septembre) montrent une demande extrêmement faible et régulière d'1 unité par commande, avec une fréquence irrégulière suggérant un produit en phase de lancement ou à très faible rotation. Sans historique de référence et vu la faiblesse des volumes, je recommande 1 unité pour éviter le surstock sur ce produit à rotation marginale.

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et historique récent très limité (4 commandes sur 3 mois). Les quantités récentes sont faibles et régulières (1-2 unités), suggérant un produit à faible rotation ou en phase de lancement. Je recommande 2 unités basées sur la médiane/mode observée, avec une confiance faible due au manque de recul historique pour valider toute saisonnalité ou tendance.

</details>


<details>
<summary><strong>7. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit de niche (barre chocolat noir caramel salé bio) avec historique très limité : aucune donnée N-1 et seulement 3 commandes récentes espacées d'environ 1 mois chacune, toutes de 1 unité. Le pattern suggère une demande sporadique ultra-faible sans saisonnalité détectable. Je recommande 1 unité pour couvrir la prochaine commande attendue, mais la confiance est faible vu l'absence totale d'historique profond et le caractère imprévisible de cette référence à rotation très lente.

</details>


<details>
<summary><strong>8. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible et seulement 3 commandes récentes sur 3 mois (juillet-septembre), toutes de 1 unité. La fréquence est très faible (~1u/mois) et extrêmement régulière. Sans historique de référence et avec un volume aussi faible, je recommande 1 unité qui correspond exactement à la médiane observée. Confiance faible car l'historique est trop limité pour détecter toute saisonnalité ou tendance fiable.

</details>


<details>
<summary><strong>9. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale d'historique N-1, ce qui est très problématique pour établir une baseline fiable. La période récente montre 2 commandes minimes (2u et 1u) sur 3 mois, suggérant une demande très faible et sporadique. Je recommande 2 unités basé uniquement sur la dernière commande observée, mais avec une confiance très faible car il pourrait s'agir d'un nouveau produit en phase de test ou d'un article à rotation quasi-nulle.

</details>


<details>
<summary><strong>10. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Données très limitées : seulement 2 commandes récentes (2u et 1u) sur 3 mois, sans aucun historique N-1 pour comparaison. La demande semble très faible et sporadique, suggérant un produit à rotation lente. En l'absence de pattern saisonnier identifiable et avec une médiane de 1,5u sur la période récente, je recommande 2 unités pour couvrir la demande probable tout en évitant le surstock sur un produit périssable.

</details>




---

## False Positives (8)

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.8u (28j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.7u (17j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.3u (12j restants) → prédit 2u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-15j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T20:02:34.597Z*
