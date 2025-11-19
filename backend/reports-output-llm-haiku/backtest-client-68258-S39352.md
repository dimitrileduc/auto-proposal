# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S39352
- **Date commande** : 2025-09-24 12:49:59
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 16
- **Tokens**: 14,968 input + 7,265 output = 22,233 total
- **Coût**: $0.0410 (~4.10¢)
- **Coût par produit LLM**: $0.0026


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
| **MAE** | 0.90 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 26.7% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 4 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques de JOY02:

1. Intervalles temporels entre commandes:
- Les commandes sont irrégulières
- Intervalle moyen: environ 14-15 jours
- Variation significative entre les intervalles (de 7 à 45 jours)

2. Analyse des quantités:
- Quantités très variables: min 2u, max 10u
- Tendance récente plus basse (2u, 4u, 2u dans les dernières commandes)
- Écart-type important indiquant des achats opportunistes

3. Recommandation quantitative:
- Moyenne des 3 dernières commandes: (2 + 4 + 2) / 3 = 2.67u
- Avec une marge conservatrice de ±30%: 4u
- Choix volontairement légèrement au-dessus de la moyenne récente pour sécuriser le stock

**📅 Analyse Temporelle:**
Commandes non régulières, intervalles variables entre 7 et 45 jours

**📊 Analyse Quantité:**
Fortes variations de 2u à 10u, tendance récente à la baisse

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [JOY03] JOY! Organic Apricot Jam 370g:

1. Analyse des intervalles entre commandes:
- Intervalles variables : entre 11 et 21 jours
- Pas de régularité stricte
- Dernier intervalle: 3 jours entre 09/09 et 09/12
- Dernier intervalle court suggère une demande récente active

2. Analyse des quantités:
- Quantités très variables : 1u, 2u, 4u, 5u, 6u
- Moyenne : environ 3.33 unités
- Dernière commande : 2 unités (légèrement en-dessous de la moyenne)
- Pas de tendance claire à la hausse ou à la baisse

3. Recommandation conservative:
- Basée sur la moyenne et les dernières commandes
- Ajustement avec une marge de sécurité de ±30%
- Recommandation de 3 unités comme point médian prudent

Stratégie: Commande modérée qui s'aligne avec l'historique récent sans sur-stocker.

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 11-21 jours, dernièrement plus rapprochés

**📊 Analyse Quantité:**
Variations significatives de 1 à 6 unités, moyenne autour de 3.33u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JOY04]:

1. Analyse des intervalles de commande:
- Intervalle moyen entre commandes : environ 14-15 jours
- Les commandes ne sont pas strictement régulières mais suivent un pattern semi-constant
- Dernier intervalle (12-13 jours) est proche de la moyenne historique

2. Analyse des quantités:
- Quantités historiques: 1, 2, 3, 4 unités
- Mode (valeur la plus fréquente): 4 unités
- Dernières commandes (4u, 4u) indiquent une stabilisation récente
- Variation normale entre 1 et 4 unités, cohérente avec la note sur les variations B2B (±30%)

3. Recommandation:
- Quantité recommandée: 4 unités
- Basée sur la tendance récente et le mode des commandes
- Approche conservative qui respecte le pattern observé

**📅 Analyse Temporelle:**
Intervalles de commande semi-réguliers, centrés autour de 14-15 jours. Variabilité acceptable dans un contexte B2B.

**📊 Analyse Quantité:**
Quantités variant entre 1 et 4 unités. Stabilisation récente autour de 4 unités. Variations cohérentes avec les pratiques B2B.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>4. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [JOY06] JOY! Organic Rhubarb Jam 370g:

1. Analyse des intervalles de commande:
- Intervalle moyen entre commandes : environ 50-52 jours
- 1ère période (09/12 - 07/23) : 50 jours
- 2ème période (07/23 - 06/23) : 52 jours
- Conclusion : Intervalles relativement réguliers et prévisibles

2. Analyse des quantités:
- Tendance décroissante : 3u → 2u → 1u
- Variations : Diminution progressive des volumes
- Amplitude des variations : -33% entre chaque commande
- Dans la fourchette acceptable de ±30% en B2B

3. Recommandation conservatrice:
- Dernière commande : 1 unité
- Moyenne historique : 2 unités
- Choix de 2 unités pour maintenir un stock stable
- Permet de compenser la tendance à la baisse
- Reste dans les variations normales acceptables

**📅 Analyse Temporelle:**
Intervalles réguliers de 50-52 jours entre commandes, indiquant un comportement d'achat stable et prévisible.

**📊 Analyse Quantité:**
Décroissance progressive des quantités (3u → 2u → 1u), mais reste dans les variations normales de ±30% en B2B.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JOY05] Organic Cherry Jam 370g :

1. Analyse des intervalles temporels :
- Intervalles entre commandes relativement réguliers
- Moyenne d'environ 2 semaines (14-15 jours)
- Écart-type faible, suggesting un comportement d'achat assez standardisé

2. Analyse des quantités :
- Quantités oscillant entre 2 et 6 unités
- Moyenne : 4 unités
- Dernières commandes : tendance à la baisse (3u, 2u, 4u)
- Variations normales et conformes aux attentes B2B (±30%)

3. Recommandation de quantité :
- Dernière commande : 3 unités
- Choix conservateur aligné sur les dernières tendances
- Quantité recommandée : 3 unités

La recommandation prend en compte la stabilité relative des commandes et privilégie une approche prudente.

**📅 Analyse Temporelle:**
Commandes espacées de 14-15 jours en moyenne, comportement d'achat régulier

**📊 Analyse Quantité:**
Variations entre 2-6 unités, moyenne à 4 unités, tendance récente à la baisse

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: undefinedu (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit [REB01] ReBEL chips premium & bio:

1. Analyse des intervalles entre commandes:
- Entre les dernières commandes, les intervalles varient entre 11 et 32 jours
- Légèrement irrégulier mais cohérent dans une plage acceptable
- Dernière commande le 2025-09-09, environ 15 jours avant la date actuelle

2. Analyse des quantités:
- Quantités oscillant entre 4 et 10 unités
- Tendance centrale autour de 6 unités (mode)
- Dernières commandes à 6 unités suggèrent une stabilité récente
- Variations dans une plage acceptable (±30% considéré comme normal en B2B)

3. Recommandation conservative:
- Reconduire la quantité récente de 6 unités
- Cohérent avec l'historique et le comportement d'achat
- Minimise le risque de sur ou sous-stockage

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais acceptables:
- Max: 32 jours
- Min: 11 jours
- Moyenne: ~19 jours
Dernière commande il y a ~15 jours

**📊 Analyse Quantité:**
Quantités:
- Minimum: 4u
- Maximum: 10u
- Mode: 6u
- Écart-type: relativement faible
Dernières commandes stabilisées à 6 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit REB02:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variables mais globalement autour de 2-4 semaines
- Dernier intervalle: 21 jours entre 2025-08-19 et 2025-09-09
- Variation temporelle modérée mais pas complètement irrégulière

2. Analyse des quantités:
- Quantités fluctuantes : 6u, 4u, 4u, 2u, 2u 
- Tendance à la baisse récente des volumes
- Dernières deux commandes à 2u suggèrent un potentiel ajustement à la baisse

3. Recommandation conservative:
- Moyenne des 2-3 dernières commandes = 2-4u
- Prise en compte de la variation normale de ±30%
- Recommandation prudente : 3 unités

La recommandation de 3u permet de couvrir les besoins récents tout en restant flexible.

**📅 Analyse Temporelle:**
Intervalles de commande variables entre 14-28 jours, moyenne autour de 20-21 jours. Légère variabilité mais pas de pattern complètement aléatoire.

**📊 Analyse Quantité:**
Quantités décroissantes récemment : de 6u à 2u. Dernières commandes stabilisées autour de 2u. Variations normales dans la plage B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la recommandation de commande pour [REB03] ReBEL chips:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers mais relativement rapprochés
- Entre les commandes: 20-40 jours environ
- Dernière commande le 2025-09-09 (15 jours avant la date actuelle)

2. Analyse des quantités:
- Quantités variables: 2u, 4u, 6u
- Moyenne : 3.5 unités
- Variation importante mais dans la plage acceptable (±30%)
- Dernière commande à 4 unités semble être un bon point de référence

3. Recommandation conservatrice:
- Choix de 4 unités basé sur la dernière commande
- Correspond à la moyenne historique
- Prend en compte les variations normales en B2B
- Permet de maintenir un stock tampon sans surstock

**📅 Analyse Temporelle:**
Commandes espacées de 20-40 jours, rythme irrégulier mais compatible avec un usage B2B

**📊 Analyse Quantité:**
Quantités fluctuantes (2-6u) avec moyenne à 3.5u, dernière commande à 4u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la demande historique pour les ReBEL chips piment citron:

1. Analyse des intervalles entre commandes:
- Entre les commandes: ~15-30 jours
- Intervalle moyen: environ 22 jours
- Pattern: Relativement régulier, légère variabilité acceptable

2. Analyse des quantités commandées:
- Variation entre 2u et 6u
- Mode (quantité la plus fréquente): 4 unités
- Moyenne: 4 unités
- Pas de croissance ou décroissance claire dans la demande

3. Recommandation quantitative:
- Quantité recommandée: 4 unités
- Justification:
  * Correspond à la quantité la plus récurrente
  * Représente la tendance centrale de l'historique
  * Reste dans la variation normale de ±30%
  * Minimise le risque de surstock ou de rupture

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement stables, centrés autour de 22 jours. Léger écart type, mais pattern cohérent.

**📊 Analyse Quantité:**
Quantités variant entre 2-6u, avec 4u comme mode. Variations normales sans tendance marquée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape des commandes historiques pour le produit [REB04] ReBEL chips premium:

1. Analyse des intervalles entre commandes:
- Les commandes sont relativement régulières
- Intervalle moyen entre commandes : environ 2-3 semaines
- Écart type modéré, mais pas totalement irrégulier
- Dernière commande le 2025-09-09 (15 jours avant la date actuelle)

2. Analyse des quantités commandées:
- Quantités variantes : 2u, 4u, 6u
- Pas de tendance linéaire claire
- Variations entre 2 et 6 unités (±30% comme mentionné)
- Moyenne des commandes : 4.4 unités
- Dernière commande : 4 unités

3. Recommandation conservative:
- Basée sur la dernière commande et la moyenne
- Arrondi à 4 unités pour rester dans la zone de variation normale
- Prend en compte la stabilité relative des commandes précédentes

La recommandation de 4 unités représente un choix prudent qui s'aligne avec l'historique récent et les variations attendues en B2B.

**📅 Analyse Temporelle:**
Commandes régulières, intervalle moyen 2-3 semaines. Dernière commande récente (15 jours avant la date actuelle). Modèle de commande relativement stable avec légères variations.

**📊 Analyse Quantité:**
Quantités variant entre 2 et 6 unités. Moyenne de 4.4 unités. Dernière commande à 4 unités. Variations normales sans tendance linéaire claire.

**📈 Tendance détectée:** ❌ Non

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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | Stock prédit: 3.7u (30j restants) → prédit 3u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 2 | Stock prédit: 1.9u (18j restants) → prédit 2u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 10 | Stock prédit: 2.8u (5j restants) → prédit 10u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | Stock prédit: -4.5u (-24j restants) → prédit 4u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 4 | Stock prédit: -5.5u (-60j restants) → prédit 4u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 5 | Stock prédit: -7.0u (-61j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:56:25.645Z*
