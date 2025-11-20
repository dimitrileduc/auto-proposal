# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S39577
- **Date commande** : 2025-10-09 06:15:56
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 13
- **Tokens**: 28,726 input + 3,314 output = 32,040 total
- **Coût**: $0.1359 (~13.59¢)
- **Coût par produit LLM**: $0.0105


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
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
| **MAE** | 0.92 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

## True Positives (12)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
+25%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'année N-1 montre une demande de fond très stable à 2u par commande (11 fois sur 12), sans saisonnalité marquée ni commande exceptionnelle. La période récente révèle une légère tendance haussière avec 2 commandes à 3u sur 3, suggérant une évolution progressive de la demande. Je recommande 3u pour refléter cette nouvelle dynamique, tout en restant prudent car l'historique récent est limité.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
3u

**🧠 Raisonnement LLM:**
La demande de fond est très stable à 2 unités par commande sur les 12 mois de N-1, avec seulement 2 commandes à 3u (dont une en octobre N-1 et une en juillet récent) que j'identifie comme légèrement exceptionnelles. La période récente confirme ce pattern avec 2 des 3 commandes à 2u et une médiane à 2u. Aucune saisonnalité marquée ni tendance de croissance/décroissance détectable. La fréquence mensuelle des commandes est régulière. Je recommande 2 unités avec forte confiance.

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
1u, 4u

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond très stable autour de 3 unités par commande (médiane = 3u), avec quelques exceptions à 1u, 2u et 4u. La période récente confirme cette tendance avec 2 commandes à 3u et une exception à 1u. Aucune saisonnalité marquée n'est détectable, et nous sommes début octobre avec un historique similaire en octobre N-1 (3u). Je recommande 3 unités, quantité la plus probable et récurrente.

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
3u

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable entre 1 et 2 unités par commande sur 12 mois, sans saisonnalité marquée. La commande récente de 3u semble exceptionnelle (probablement promotionnelle ou événementielle) par rapport au pattern historique constant. Je recommande 2u pour couvrir la demande habituelle sans surestimer, en écartant l'outlier de 3u comme non-représentatif de la demande récurrente.

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 1u)</summary>

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
Les données N-1 montrent une demande de fond très stable à 2 unités sur 12 mois (11 commandes sur 12). La période récente confirme ce pattern avec 2 commandes à 2u, la commande de 3u en septembre 2025 étant probablement ponctuelle. Pas de saisonnalité marquée détectée, donc je recommande la quantité médiane récurrente de 2 unités.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-25%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable autour de 2u par commande (médiane = 2u, fréquence régulière). La période récente (3 derniers mois) révèle une tendance à la baisse avec 2 commandes sur 3 à 1u seulement. Pas de saisonnalité marquée détectée pour octobre. Je recommande 1u, reflétant la demande actuelle observée, plutôt que de maintenir le baseline historique.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-20%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'année N-1 montre une demande de fond stable autour de 2-3 unités par commande (moyenne ~2.3u), sans outliers significatifs ni saisonnalité marquée pour ce produit. La période récente (3 derniers mois) affiche une tendance légèrement à la baisse avec seulement 3 commandes espacées (1u, 2u, 2u), suggérant un ralentissement modéré de l'activité. Sans pattern saisonnier clair et face à une fréquence réduite récente, je recommande 2 unités qui correspond à la médiane récente et reste cohérent avec la demande historique basse.

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
3u

**🧠 Raisonnement LLM:**
La demande de fond sur N-1 est stable autour de 1-2 unités par commande (médiane=2u), avec une fréquence mensuelle relativement régulière. La commande de 3u en juillet 2025 semble être une exception ponctuelle. La période récente montre une continuité de cette demande de fond (1-2u). Pas de saisonnalité marquée détectée, la quantité optimale est de 2 unités, reflétant la commande typique observée historiquement.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-50%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande stable de 2u par commande sur 12 mois, sans événements exceptionnels détectés. La période récente (3 derniers mois) affiche clairement une baisse avec 3 commandes à 1u uniquement. Cette tendance baissière nette de -50% doit être prise en compte : je recommande donc 1u, reflétant la nouvelle réalité du marché plutôt que l'historique.

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
-11%

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
L'historique N-1 montre une demande de fond stable autour de 1.8u en moyenne (médiane 2u) avec des commandes régulières de 1-2u sans outlier détecté. La période récente confirme ce pattern avec 3 commandes sur 3 mois (1u, 2u, 1u = médiane 1u), soit une légère tendance à la baisse. En début octobre, je recommande 1 unité car c'est la quantité la plus probable observée récemment, sans saisonnalité marquée identifiée pour ce produit de tartinade.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
3u

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande de fond très régulière à 2u par commande (11 commandes sur 12 à 2u, une seule à 1u). La période récente confirme ce pattern avec 2 commandes dont une à 2u et une à 3u (probablement légèrement exceptionnelle). Aucune saisonnalité marquée détectée, la demande reste stable autour de 2 unités. Je recommande 2u comme quantité la plus probable.

</details>




---

## False Positives (3)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 0.2u (8j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.3u (-25j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock suffisant: 2.5u (45j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock suffisant: 2.7u (60j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock suffisant: 1.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-19T20:03:23.044Z*
