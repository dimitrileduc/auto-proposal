# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 14
- **Tokens**: 28,658 input + 3,565 output = 32,223 total
- **Coût**: $0.1394 (~13.94¢)
- **Coût par produit LLM**: $0.0100


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
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.7% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | 4 | 2.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
6u

**🧠 Raisonnement LLM:**
Sans données N-1 pour référence saisonnière, je m'appuie uniquement sur la vue récente de 3 mois. Les commandes montrent un pattern relativement stable (2u, 4u, 2u) avec une commande à 6u en juillet qui semble légèrement exceptionnelle. La médiane des commandes (2, 2, 4, 6) est de 3u, ce qui représente la quantité la plus probable pour la prochaine commande. Confiance faible en raison de l'absence d'historique N-1 et du faible volume de données récentes (4 commandes seulement).

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
5u

**🧠 Raisonnement LLM:**
Sans données N-1 et avec seulement 4 commandes récentes sur 3 mois, la visibilité est très limitée. La commande de 5u le 9 sept semble être un pic ponctuel (possiblement événement/promotion). Les 3 autres commandes montrent une demande de fond de 1-2 unités par commande. Je recommande 2 unités (médiane des commandes récurrentes), reflétant la demande la plus probable observée dans ce contexte de produit premium bio à rotation lente.

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: N/Au (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Sans historique N-1, je m'appuie uniquement sur les 3 derniers mois qui montrent un pattern cohérent : 5 commandes avec une médiane de 4 unités (distribution: 1u, 3u, 4u, 4u, 4u). La fréquence est régulière (environ 2-3 semaines entre commandes) sans pic exceptionnel détecté. Je recommande 4 unités, qui correspond à la valeur la plus fréquente et à la médiane haute, reflétant la demande probable sans surestimer.

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes récentes (1u et 2u) sur 3 mois. La référence [JOY06] semble être un produit à rotation très faible ou en fin de vie. Sans historique et avec une demande sporadique, je recommande 1 unité basée sur la commande la plus récente (sept 2025), correspondant au niveau minimal de réapprovisionnement pour éviter surstock sur un produit à faible vélocité.

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 4u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.75u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1, donc impossible d'identifier une saisonnalité ou demande de fond historique. Les 3 derniers mois montrent 4 commandes éparses (6u, 4u, 2u, 3u) avec une médiane de 3,5u et moyenne de 3,75u, sans pattern clair ni outlier évident. Je recommande 4 unités basé sur la médiane récente, mais avec confiance faible vu le manque d'historique et la variabilité observée.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: N/Au (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Sans historique N-1, je me base uniquement sur les 3 derniers mois qui montrent une demande régulière et cohérente (6u, 6u, 4u, 6u). La médiane est de 6 unités avec des commandes espacées d'environ 2-3 semaines, ce qui indique un rythme de consommation stable. Aucune saisonnalité détectable ni commande exceptionnelle. Je recommande 6 unités, quantité la plus fréquente et représentative du besoin actuel.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 empêche l'analyse saisonnière. Les 3 derniers mois montrent une demande récente cohérente (2-2-4-6u) avec une médiane de 3u et aucun outlier détectable. Je recommande 3 unités basé sur cette régularité récente, mais la confiance reste faible par manque d'historique long terme pour valider les patterns.

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 3 commandes récentes (4u, 2u, 2u) sur les 3 derniers mois, soit environ 1 commande/mois avec des quantités faibles. La médiane est de 2u, mais la commande la plus récente (4u) suggère une légère progression. Je recommande 3u comme compromis réaliste entre la médiane (2u) et le dernier pic (4u), reflétant une demande de fond très faible et irrégulière pour ce produit premium bio.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit sans historique N-1, donc nouveau ou très faible rotation. Les 3 derniers mois montrent 4 commandes espacées (2u, 4u, 4u, 4u) avec une médiane de 4u. La fréquence est environ 1 commande toutes les 2-3 semaines. Aucun pattern saisonnier détectable, ni outlier identifiable. Je recommande 4 unités basé sur la médiane récente, mais confiance faible vu l'absence totale de référence historique et le nombre limité de points de données.

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: N/Au (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1, donc l'analyse repose uniquement sur les 3 derniers mois. Les 4 commandes récentes montrent une demande régulière (2u, 4u, 4u, 6u) avec une médiane de 4 unités et une moyenne proche. Pas de pattern saisonnier détectable ni de commande exceptionnelle identifiée. La régularité des commandes (~2 semaines d'intervalle) et l'homogénéité des quantités suggèrent une demande stable de fond autour de 4 unités pour ce produit premium bio.

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | Stock prédit: 3.7u (30j restants) → prédit 2u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: 1.9u (18j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 10 | Stock prédit: 2.8u (5j restants) → prédit 10u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | Stock prédit: -4.5u (-24j restants) → prédit 4u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 4 | Stock prédit: -5.5u (-60j restants) → prédit 4u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 4 | Stock prédit: -7.0u (-61j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T20:02:38.582Z*
