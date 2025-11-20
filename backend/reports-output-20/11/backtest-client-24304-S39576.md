# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 28
- **Tokens**: 58,058 input + 6,937 output = 64,995 total
- **Coût**: $0.2782 (~27.82¢)
- **Coût par produit LLM**: $0.0099


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.3% | 32 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 72.0% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 23.6% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit avec historique quasi inexistant : aucune donnée N-1 et seulement 2 commandes unitaires sur les 3 derniers mois (août et septembre). Il s'agit probablement d'un nouveau référencement ou d'un produit à rotation très faible. La médiane des commandes récentes est de 1 unité. Je recommande 1 unité pour minimiser le risque de surstocks tout en maintenant la disponibilité, mais la confiance est très faible vu le manque de données historiques.

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes récentes (1u et 2u) espacées d'un mois. Cela suggère un produit en début de référencement ou à très faible rotation. La médiane des commandes récentes (1.5u) indique une demande sporadique minimale. Je recommande 1 unité car c'est la quantité la plus fréquente observée et la plus probable pour éviter le surstock sur un produit à faible vélocité.

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Aucune donnée N-1 disponible et seulement 2 commandes récentes (1u chacune en août et septembre), ce qui ne permet pas d'identifier de pattern saisonnier ou tendance claire. La médiane des commandes récentes est de 1 unité avec un rythme mensuel régulier. Confiance faible car le produit semble nouveau ou avec très peu d'historique - recommandation prudente d'1 unité pour couvrir la demande mensuelle observée.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: N/Au (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
8u

**🧠 Raisonnement LLM:**
Absence totale d'historique N-1 pour établir une saisonnalité. Les 5 dernières commandes récentes montrent une demande concentrée entre 3-6 unités (médiane = 5u), avec un pic isolé à 8u en juillet qui semble exceptionnel. Sans pattern saisonnier identifiable et avec des données limitées, je recommande la médiane récente de 5 unités comme quantité la plus probable pour octobre.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
6u

**🧠 Raisonnement LLM:**
Produit récent ou nouvelle référence sans historique N-1, ce qui limite fortement la visibilité. Sur les 3 derniers mois, la médiane des commandes est de 3 unités (4 commandes sur 5), avec une seule commande à 6u identifiée comme exceptionnelle. En l'absence de pattern saisonnier détectable et avec une demande récente stable autour de 3 unités, je recommande 3 unités pour la prochaine période.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
5u

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible, je me base uniquement sur les 5 commandes récentes. La commande de 5u en juillet semble légèrement élevée (peut-être un événement estival). Les 4 autres commandes montrent une demande régulière de 1-4u avec médiane à 3u. Sans historique pour valider la saisonnalité, je recommande 3u comme quantité la plus probable, mais avec faible confiance due au manque de recul.

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
5u

**🧠 Raisonnement LLM:**
Sans données N-1, je m'appuie uniquement sur les 3 derniers mois. La commande de 5u fin août semble exceptionnelle (peut-être rentrée scolaire ou événement ponctuel). Les 4 autres commandes montrent une régularité à 2-3u, avec une médiane à 3u. Aucune saisonnalité claire détectable, la demande de fond semble stable autour de 3u par commande pour ce produit premium bio.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
5u

**🧠 Raisonnement LLM:**
Absence totale de données N-1, ce qui limite fortement la fiabilité. Sur les 3 derniers mois, on observe une demande régulière de 1-3 unités par commande (médiane = 3u), avec une exception à 5u en juillet (possiblement liée à un événement estival). La fréquence de commande est d'environ 2 semaines, suggérant une demande stable mais modeste pour ce produit premium bio. Je recommande 3 unités, correspondant à la médiane observée, mais avec une confiance faible due au manque d'historique profond.

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
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
Absence totale de données N-1, donc je me base uniquement sur la période récente. Les 3 dernières commandes montrent une demande très stable de 2 unités (la commande de 3u du 14 juillet apparaît comme une légère exception ponctuelle). La médiane et le mode récent convergent clairement vers 2 unités, avec un rythme d'environ 1 commande toutes les 2-3 semaines pour ce produit à rotation modérée.

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-50%

**🔍 Outliers détectés:**
4u

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable autour de 2-3 unités par commande (médiane ~2.5u), avec les commandes de 4u identifiées comme légèrement au-dessus de la norme. Cependant, la période récente (3 derniers mois) révèle une baisse marquée et cohérente : 4 commandes consécutives de 1-2u avec une nette prédominance de 1u (3 fois sur 4). Sans saisonnalité évidente pour ce produit de niche, je privilégie la tendance récente qui indique un volume réduit, probablement lié à une baisse d'intérêt client ou une réorganisation de gamme. La quantité recommandée de 1 unité reflète la demande actuelle observée.

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-67%

**🔍 Outliers détectés:**
4u

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande de fond stable autour de 2-3 unités (avec un pic isolé à 4u en janvier). Cependant, la période récente révèle une baisse marquée et constante à 1 unité par mois sur les 4 derniers mois. Aucune saisonnalité évidente n'est détectable pour octobre. La tendance baissière récente étant cohérente et régulière, je recommande 1 unité, reflétant la nouvelle réalité de la demande.

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-40%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande stable autour de 4u (médiane 4, sans outliers détectés). Cependant, la période récente révèle une baisse nette de consommation: les 5 dernières commandes sont systématiquement plus basses (1-3u, médiane 2u) versus 3-5u en N-1. Cette tendance baissière de -40% semble structurelle sur 3 mois, sans saisonnalité marquée en octobre N-1. Je recommande 2u pour refléter la demande actuelle réelle.

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
1u, 1u

**🧠 Raisonnement LLM:**
Produit nouveau ou très faible rotation sans historique N-1. Les deux seules commandes récentes (août et septembre) montrent des unités isolées, probablement des tests clients ou commandes exceptionnelles. En l'absence totale de pattern établi et avec seulement 2 points de données sporadiques, je recommande la quantité minimale observée (1u) pour tester la demande réelle sans risque de surstock sur ce produit bio à péremption limitée.

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 et seulement 4 commandes sur 3 mois récents, toutes d'1 unité chacune. Le pattern montre une demande très faible et régulière (environ 1 unité par mois), sans saisonnalité détectable. Confiance faible due au manque d'historique pour valider la tendance sur cycle annuel complet.

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 3 commandes récentes (1u, 1u, 2u) sur 3 mois. Le pattern suggère une demande très faible et régulière, environ 1 unité par commande mensuelle. Sans historique saisonnier ni volume significatif, je recommande 1 unité basée sur la médiane récente, avec une confiance faible due au manque de profondeur des données.

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 pour établir une référence saisonnière. Les 3 derniers mois montrent une demande très faible et régulière (1-2 unités/mois), sans pattern particulier ni commande exceptionnelle détectée. En l'absence d'historique robuste et vu la médiane récente à 1 unité, je recommande 1 unité pour cette période, reflétant la demande actuelle observée sur ce produit apparemment à faible rotation.

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Produit avec historique très limité : aucune donnée N-1 et seulement 2 commandes récentes d'1 unité chacune sur 3 mois. Il s'agit manifestement d'un produit à très faible rotation (niche ou nouveau). La médiane récente étant de 1u avec un rythme ~mensuel, je recommande 1 unité pour éviter le surstock sur ce produit lent, même si la confiance est faible par manque de données.

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
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
L'historique N-1 montre une demande de fond stable autour de 2 unités par commande (la commande de 3u en mars 2024 semble exceptionnelle). La vue récente confirme cette tendance avec 2 commandes de 2u en juillet et août 2025. Aucune saisonnalité marquée n'est détectable, et la fréquence de commande reste faible mais régulière. Je recommande 2 unités, cohérent avec le pattern observé.

</details>




---

## False Positives (14)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (19j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -0.1u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.8u (-5j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.2u (-14j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -2.3u (-28j restants) → prédit 2u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -1.0u (-27j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-41j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-27j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: -1.7u (-69j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T20:02:36.711Z*
