# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 30
- **Tokens**: 27,768 input + 13,171 output = 40,939 total
- **Coût**: $0.0749 (~7.49¢)
- **Coût par produit LLM**: $0.0025


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
| **MAE** | 0.61 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 48.6% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 4 | 1.0 | 25.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [NOD01] NODA limonade bio:

1. Analyse temporelle des intervalles:
- Intervalles irréguliers entre commandes
- Écarts variant de 26 à 55 jours
- Pas de périodicité claire, mais commandes relativement fréquentes

2. Analyse des quantités:
- Quantités: 1u, 1u, 2u, 1u
- Variation normale des quantités
- Tendance à commander principalement 1u, avec une commande occasionnelle de 2u
- Variations restent dans la plage acceptable de ±30%

3. Recommandation de quantité:
- Moyenne des dernières commandes: 1.25u
- Arrondi conservateur à 2u pour couvrir les variations potentielles
- Prend en compte les achats groupés et le stock de sécurité B2B

**📅 Analyse Temporelle:**
Intervalles de commande variables: 26-55 jours, pas de cycle régulier détecté

**📊 Analyse Quantité:**
Quantités principalement à 1u, avec une commande à 2u. Variations normales sans tendance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour [NOD02] NODA limonade bio:

1. Analyse des intervalles entre commandes:
- Entre 1ère et 2ème commande: 28 jours
- Entre 2ème et 3ème commande: 56 jours
- Intervalle irrégulier mais tendant vers ~42 jours (6 semaines)

2. Analyse des quantités:
- Commande 1: 1 unité
- Commande 2: 2 unités 
- Commande 3: 2 unités
- Stabilisation récente autour de 2 unités
- Variation de +100% puis stabilité

3. Recommandation quantitative:
- Dernières 2 commandes à 2 unités
- Recommandation conservatrice de 2 unités
- Variation acceptable de ±30% = [1, 3] unités
- Choix du point médian pour minimiser les risques

4. Facteurs B2B considérés:
- Petits volumes
- Possible commande groupée
- Variabilité naturelle acceptée

**📅 Analyse Temporelle:**
Intervalles entre commandes irréguliers, tendance vers ~42 jours. Dernier intervalle de 37 jours.

**📊 Analyse Quantité:**
Quantités passant de 1 à 2 unités, puis stabilisation à 2 unités. Variation normale en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de la recommandation de commande pour le produit [NOD03] NODA limonade bio:

1. Analyse temporelle des intervalles:
- Entre 2025-06-30 et 2025-08-25: ~56 jours 
- Entre 2025-08-25 et 2025-09-22: ~28 jours
- Intervalle irrégulier mais tendant à se rapprocher (56j → 28j)
- Dernière commande il y a environ 14 jours (depuis 2025-10-06)

2. Analyse des quantités:
- Historique des quantités: 2u → 1u → 1u 
- Tendance à la stabilisation autour de 1 unité
- Légère décroissance de 2u à 1u

3. Recommandation conservatrice:
- Basée sur les dernières commandes (1u)
- Marge de ±30% acceptable en B2B
- Recommandation finale: 1 unité
- Niveau de confiance moyen du fait des variations d'intervalles

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers mais se resserrant. Tendance à des commandes plus fréquentes.

**📊 Analyse Quantité:**
Quantités passant de 2u à 1u, suggérant une stabilisation ou une légère réduction des besoins.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: undefinedu (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB01] ReBEL chips premium & bio :

1. Analyse des intervalles temporels :
- Les commandes sont globalement régulières, espacées de 2-3 semaines
- Intervalle moyen : environ 14-15 jours
- Variation temporelle relativement stable et prévisible

2. Analyse des quantités :
- Quantités fluctuantes : 3u, 5u, 6u, 3u, 8u, 3u
- Moyenne : 4.67 unités
- Médiane : 4 unités
- Variation significative sans tendance linéaire claire

3. Recommandation conservatrice :
- Choix de 5 unités comme quantité recommandée
- Proche de la médiane des commandes historiques
- Dans la fourchette de variation normale (±30%)
- Équilibre entre stock minimal et risque de surstockage

**📅 Analyse Temporelle:**
Commandes régulières, intervalle moyen de 14-15 jours. Période stable sans grandes irrégularités.

**📊 Analyse Quantité:**
Quantités variables entre 3 et 8 unités. Pas de tendance claire à la hausse ou à la baisse. Variations normales en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB02] ReBEL chips premium & bio - paprika fumé 125g :

1. Analyse des intervalles de commande :
- Les commandes sont relativement régulières, espacées de ~2 semaines
- Intervalle moyen : 14-15 jours
- Légère variabilité mais pas de caractère erratique

2. Analyse des quantités :
- Quantités variantes : 3u, 5u, 6u
- Moyenne : 4 unités
- Pas de tendance linéaire claire mais fluctuations autour de 4 unités
- Variations normales dans la plage B2B acceptable (±30%)

3. Recommandation conservative :
- Basée sur la moyenne historique
- Arrondi à 4 unités pour refléter la tendance centrale
- Prend en compte les variations modérées des commandes précédentes

**📅 Analyse Temporelle:**
Commandes régulières, intervalle moyen de 14-15 jours avec légère variabilité

**📊 Analyse Quantité:**
Fluctuations autour de 4 unités, variations normales en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit REB03:

1. Analyse temporelle des intervalles:
- Les commandes sont principalement espacées de 2 semaines à 1 mois
- Intervalle moyen: environ 15-16 jours
- Pas de régularité stricte, mais un certain rythme semi-régulier est observé

2. Analyse des quantités:
- Quantités variées: 1, 3, 4, 5 unités
- Variation significative mais dans une plage acceptable
- Moyenne des commandes: 2.8 unités
- Pas de tendance linéaire claire à la hausse ou à la baisse

3. Recommandation conservatrice:
- Choix de 3 unités, proche de la moyenne historique
- Respecte la variation acceptable de ±30%
- Minimise le risque de sur-stockage ou de rupture

Paramètres de décision:
- Variabilité des commandes acceptée
- Pas de croissance ou décroissance nette
- Approche prudente en B2B

**📅 Analyse Temporelle:**
Commandes semi-régulières, intervalle moyen de 15-16 jours, variations acceptables

**📊 Analyse Quantité:**
Quantités entre 1 et 5 unités, moyenne à 2.8, variations normales sans tendance forte

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [REB04] ReBEL chips premium & bio - thym/romarin 125g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: ~2 semaines (14-15 jours)
- Quasi-régularité dans la périodicité des commandes
- Dernière commande le 2025-09-22 (14 jours avant la date actuelle)

2. Analyse des quantités:
- Quantités oscillant entre 2 et 5 unités
- Moyenne des commandes: 3.33 unités
- Pas de tendance haussière ou baissière claire
- Variations considérées comme normales en B2B

3. Recommandation conservatrice:
- Se base sur la moyenne et le dernier historique
- Prend en compte la variabilité normale de ±30%
- Recommandation proche de la moyenne: 3 unités

**📅 Analyse Temporelle:**
Périodicité quasi-régulière de 14-15 jours entre commandes, avec une légère variabilité acceptable

**📊 Analyse Quantité:**
Quantités stables entre 2-5 unités, moyenne à 3.33 unités, variations normales en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes de ReBEL chips:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: environ 14-15 jours (irrégulier mais avec une certaine périodicité)
- Dernier intervalle (2025-09-22 au 2025-10-06): 14 jours
- Suggestion: Modèle d'achat semi-régulier, probablement lié à un cycle de consommation/réapprovisionnement

2. Analyse des quantités:
- Variation des quantités: 1u à 5u
- Moyenne: 2.83u
- Dernières commandes stabilisées autour de 2-3u
- Aucune tendance claire de croissance ou décroissance significative

3. Recommandation quantitative:
- Quantité recommandée: 3 unités
- Justification: 
  * Proche de la moyenne historique
  * Cohérent avec les dernières commandes
  * Marge de sécurité de ±30% respectée
  * Quantité conservative adaptée au profil d'achat

**📅 Analyse Temporelle:**
Intervalles de commandes variables mais autour de 14-15 jours, suggérant un cycle d'achat semi-régulier

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 5 unités, moyenne à 2.83u, dernières commandes stabilisées

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Analyse temporelle:
- Intervalles entre commandes : 
  * Entre les dernières commandes : environ 2 semaines (très régulier)
  * Variation maximale : entre 2-4 semaines
- Pattern : Commandes assez consistantes et prévisibles

2. Analyse des quantités:
- Quantités historiques : 1u, 2u (x4), 3u
- Moyenne : 2 unités
- Variation : Entre 1-3 unités (considéré comme normal en B2B)
- Dernières 3 commandes : stabilité à 2 unités

3. Recommandation:
- Quantité conservative basée sur l'historique récent
- Proche de la moyenne et de la dernière commande
- Marge de ±30% prise en compte
- Risque minimal de rupture ou surstock

Conclusion : Recommandation de 2 unités comme quantité optimale et sécurisée.

**📅 Analyse Temporelle:**
Commandes régulières, intervalle moyen de 2-3 semaines. Pattern temporel stable et prévisible.

**📊 Analyse Quantité:**
Quantités stables autour de 2 unités, avec légères variations acceptables (1-3u). Pas de tendance haussière ou baissière significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes du produit MF0033:

1. Analyse des intervalles temporels:
- Les commandes sont relativement régulières, espacées de 2 à 4 semaines
- Intervalle moyen: environ 14-15 jours
- Variation acceptable, mais pas totalement uniforme

2. Analyse des quantités:
- Quantités principalement entre 1 et 2 unités
- Variations mineures: 1u (4 fois), 2u (2 fois)
- Pas de tendance claire d'augmentation ou de diminution
- Fluctuations considérées comme normales en B2B (dans la fourchette ±30%)

3. Recommandation conservative:
- Basée sur la majorité des commandes (1u)
- Prenant en compte la légère variabilité
- Quantité recommandée: 1 unité
- Niveau de confiance: moyen (historique cohérent mais avec légères variations)

**📅 Analyse Temporelle:**
Commandes semi-régulières, intervalle moyen de 14-15 jours, variation acceptable entre 2-4 semaines

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités, variations normales sans tendance marquée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [MF0028] MF Tarti Carotte Gingembre 250g:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers mais relativement rapprochés
- Entre 14 et 45 jours
- Moyenne d'environ 28 jours
- Pattern suggérant un besoin récurrent mais non strictement périodique

2. Analyse des quantités:
- 4 commandes à 1u
- 1 commande à 2u
- Variation visible mais dans la plage acceptable de ±30%
- Tendance principale semble être 1u par commande

3. Recommandation:
- Quantité recommandée: 1u (mode de l'historique)
- Choix conservateur basé sur la majorité des commandes précédentes
- Permet de maintenir un stock minimal sans risque de surstock

Paramètres de décision:
- Variabilité acceptée: ±30%
- Dernière commande: 1u le 2025-09-22
- Prochain approvisionnement anticipé dans la continuité du pattern

**📅 Analyse Temporelle:**
Intervalles entre commandes variables:
- Min: 14 jours
- Max: 45 jours
- Moyenne: ~28 jours
Aucune périodicité stricte détectée

**📊 Analyse Quantité:**
Quantités principalement à 1u
Une commande outlier à 2u
Variation dans la norme acceptable (±30%)

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [MF0027] MF Tarti Aubergine 250g :

1. Analyse temporelle des intervalles :
- Intervalle moyen entre commandes : ~14-15 jours
- Intervalles relativement réguliers : 12-16 jours
- Derniers intervalles : 14 jours, 13 jours, 14 jours
→ Modèle de commande assez cohérent et prévisible

2. Analyse des quantités :
- Quantités historiques : 3u, 1u, 2u, 2u, 3u, 3u, 2u
- Variation entre 1-3 unités
- Moyenne : 2.29 unités
- Pas de tendance claire à la hausse ou à la baisse
- Variations normales dans la plage B2B acceptable (±30%)

3. Recommandation de commande :
- Quantité recommandée : 2 unités
- Basée sur la moyenne et la tendance centrale des commandes
- Approche conservative
- Correspond à la récurrence et au volume habituels

Niveau de confiance : Moyen, car historique régulier mais avec quelques variations

**📅 Analyse Temporelle:**
Intervalles réguliers de 12-16 jours entre commandes, derniers cycles très stables autour de 14 jours

**📊 Analyse Quantité:**
Quantités variant entre 1-3 unités, moyenne de 2.29u, variations normales sans tendance marquée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes pour [NOD04] NODA limonade bio mangue passion 330ml:

1. Analyse des intervalles entre commandes:
- Entre 2025-06-16 et 2025-06-30 : 14 jours
- Entre 2025-06-30 et 2025-08-11 : 42 jours
- Entre 2025-08-11 et 2025-09-08 : 28 jours
- Intervalle irrégulier, pas de modèle temporel clair

2. Analyse des quantités:
- Variations entre 1u et 2u
- Moyenne : 1.25u par commande
- Écart-type relativement faible
- Variations considérées comme normales en B2B (±30%)

3. Recommandation conservatrice:
- Basée sur la moyenne historique
- Arrondi à 2u pour couvrir les variations potentielles
- Prend en compte la marge de sécurité B2B

**📅 Analyse Temporelle:**
Intervalles de commande variables, pas de périodicité fixe détectée. Écart maximal de 42 jours, minimal de 14 jours.

**📊 Analyse Quantité:**
Quantités oscillant entre 1u et 2u. Moyenne de 1.25u. Variations considérées comme normales dans le contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [JOY03] JOY! Organic Apricot Jam 370g :

1. Analyse des intervalles temporels :
- Intervalles réguliers entre commandes
- Période moyenne entre commandes : environ 14-15 jours
- Dernière commande le 2025-09-08
- Écart-type relativement faible, suggérant un comportement d'achat stable

2. Analyse des quantités :
- Quantité constante de 1 unité à chaque commande
- Aucune variation ou tendance à la hausse/baisse
- Commandes très homogènes et prévisibles

3. Recommandation conservatrice :
- Maintenir la quantité historique de 1 unité
- Confiance élevée due à la régularité des commandes précédentes
- Variation acceptable de ±30% : entre 0 et 2 unités
- Choix de 1 unité comme recommandation la plus probable

**📅 Analyse Temporelle:**
Commandes espacées régulièrement de 14-15 jours, avec une progression chronologique constante et prévisible.

**📊 Analyse Quantité:**
Quantité stable de 1 unité, sans variation significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JOY05] Organic Cherry Jam 370g :

1. Analyse temporelle des intervalles :
- Entre la 1ère et 2ème commande : 14 jours
- Entre la 2ème et 3ème commande : 14 jours
=> Interval régulier et constant de 14 jours, suggérant un besoin cyclique stable

2. Analyse des quantités :
- Commande 1 : 1 unité
- Commande 2 : 1 unité
- Commande 3 : 2 unités
=> Légère augmentation de 1 à 2 unités, mais pas de tendance significative
- Variation normale dans la plage attendue (±30%)

3. Recommandation de commande :
- Dernière commande : 2 unités
- Recommandation conservatrice : 1 unité 
- Justification : Maintenir un stock minimal tout en restant proche du comportement historique
- Permet de gérer les variations potentielles sans surstock

**📅 Analyse Temporelle:**
Intervalles réguliers de 14 jours entre commandes, suggérant un cycle d'approvisionnement stable

**📊 Analyse Quantité:**
Quantités stables à 1 unité, avec une légère augmentation à 2 unités lors de la dernière commande

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [JOY01] JOY! Organic Sweet Orange Jam 370g :

1. Analyse des intervalles temporels :
- Intervalles entre commandes : entre 14-45 jours
- Moyenne des intervalles : environ 28 jours
- Régularité : Semi-régulier, avec une légère variabilité

2. Analyse des quantités :
- Quantités historiques : 1u, 2u, 1u, 1u, 1u
- Tendance dominante : 1 unité par commande
- Une commande à 2 unités semble être une exception

3. Recommandation de quantité :
- Quantité conservatrice basée sur l'historique : 2 unités
- Justification : 
  * Couvre la tendance habituelle (1u)
  * Permet une marge pour un potentiel pic (2u)
  * Reste dans la variation normale de ±30%

**📅 Analyse Temporelle:**
Intervalles entre commandes : semi-réguliers, centrés autour de 28 jours, avec une variabilité de ±14 jours

**📊 Analyse Quantité:**
Quantités principalement stables à 1u, avec une variation ponctuelle à 2u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit JOY06:

1. Analyse temporelle des intervalles:
- Entre 2025-06-30 et 2025-08-11: 42 jours
- Entre 2025-08-11 et 2025-08-25: 14 jours
- Intervalles variables, pas de périodicité claire
- Dernier intervalle plus court (14 jours)

2. Analyse des quantités:
- Toutes les commandes sont de 1 unité
- Quantité parfaitement stable
- Aucune variation observée
- Cohérence dans le volume commandé

3. Recommandation conservative:
- Maintien de la quantité historique
- 1 unité recommandée
- Variation acceptable de ±30% (entre 0 et 2 unités)
- Risque minimal de rupture ou surstock

**📅 Analyse Temporelle:**
Intervalles irréguliers (42j puis 14j), pas de cycle standard détecté

**📊 Analyse Quantité:**
Quantité constante de 1 unité, aucune variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [MF0034] MF Tarti Pomme Raifort 250g :

1. Analyse des intervalles temporels :
- Entre 2025-06-16 et 2025-07-14 : environ 28 jours
- Entre 2025-07-14 et 2025-08-25 : environ 42 jours
- Variation des intervalles : +/- 50% (considéré comme normal en B2B)
- Fréquence moyenne : environ 35 jours entre les commandes

2. Analyse des quantités :
- Quantité constante à 2 unités pour chaque commande
- Aucune variation significative
- Stabilité parfaite des volumes commandés

3. Recommandation :
- Quantité conservatrice basée sur l'historique : 2 unités
- Conformité avec le comportement historique
- Marge de sécurité respectée (+/- 30% acceptable)

La recommandation est donc de maintenir une commande de 2 unités.

**📅 Analyse Temporelle:**
Intervalles irréguliers mais contenus (28-42 jours), considérés comme normaux en B2B. Fréquence moyenne d'environ 35 jours.

**📊 Analyse Quantité:**
Quantité stable à 2 unités. Aucune variation détectable. Commandes uniformes.

**📈 Tendance détectée:** ❌ Non

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
| [KOKO01] KOKO Kombucha original 330ml | 2 | Stock prédit: -0.1u (0j restants) → prédit 2u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.8u (-5j restants) → prédit 2u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock prédit: -1.2u (-14j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: -0.8u (-18j restants) → prédit 2u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -2.3u (-28j restants) → prédit 2u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 2 | Stock prédit: -1.3u (-30j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-19T15:56:21.055Z*
