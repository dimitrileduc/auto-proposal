# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 55
- **Tokens**: 50,460 input + 24,867 output = 75,327 total
- **Coût**: $0.1398 (~13.98¢)
- **Coût par produit LLM**: $0.0025


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.4% | 62 produits prédits, 30 corrects |
| **Rappel** | 100.0% | 30 produits réels, 30 détectés |
| **F1-Score** | 65.2% | Score équilibré global |

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
| **MAE** | 0.37 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 13.5% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 24 | Égalité parfaite |
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

## True Positives (30)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 7 | 8 | 1.0 | 12.5% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 8 | 6 | 2.0 | 33.3% | ✅ partial | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 7 | 3 | 4.0 | 133.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV160] LV Tartinade Aubergine 190g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes varient entre 7-30 jours
- Moyenne d'environ 14-15 jours entre commandes
- Légèrement irrégulier mais avec une certaine périodicité

2. Analyse des quantités:
- Quantités principalement entre 1-2 unités
- Dernière commande le 2025-08-06 à 2 unités
- Pas de tendance claire de croissance ou décroissance
- Variations considérées comme normales (fluctuations B2B standard)

3. Recommandation quantitative:
- Quantité recommandée: 2 unités
- Basée sur la dernière commande et la moyenne historique
- Approche conservative respectant la variation acceptable de ±30%
- Prend en compte la stabilité relative des commandes précédentes

**📅 Analyse Temporelle:**
Intervalles entre commandes non-uniformes mais avec une périodicité approximative de 14-15 jours. Variabilité considérée comme normale en contexte B2B.

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités, dernière commande à 2 unités. Pas de tendance significative de variation.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour [LV129] LV Tartinade Carotte Gingembre 190g:

1. Analyse des intervalles temporels:
- Intervalles variables entre commandes
- Minimum: 12 jours (entre 2025-06-11 et 2025-06-23)
- Maximum: 47 jours (entre 2025-05-12 et 2025-06-30)
- Dernier intervalle: 37 jours (entre 2025-06-30 et 2025-08-06)
- Pas de périodicité stricte, mais tendance à commander tous les 2-6 semaines

2. Analyse des quantités:
- Quantités oscillant entre 1u et 2u
- Modes principaux: 2u (4 occurrences), 1u (2 occurrences)
- Dernière commande: 2u le 2025-08-06
- Variations normales et cohérentes (±30% acceptable en B2B)

3. Recommandation:
- Quantité recommandée conservatrice: 2 unités
- Basée sur le mode dominant des commandes précédentes
- Alignée avec le profil de consommation observé

**📅 Analyse Temporelle:**
Commandes irrégulières, intervalle moyen ~30 jours, variations acceptables

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités, légère préférence pour 2u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Analyse temporelle:
- Intervalles entre commandes: Relativement réguliers
- Fréquence moyenne: Environ tous les 15 jours
- Dernier intervalle (2025-06-30 au 2025-08-06): 37 jours, légèrement plus long
- Écart-type des intervalles: Modéré, suggère un client avec un besoin stable

2. Analyse des quantités:
- Quantités principales: 2 unités
- Quelques commandes à 1 unité (05-12 et 05-26)
- Variation de ±30% : Entre 1 et 3 unités
- Dernière commande: 2 unités (cohérente avec le comportement habituel)

3. Recommandation:
- Quantité conservatrice basée sur l'historique: 2 unités
- Reflection des besoins constants du client
- Aligné avec la majorité des commandes précédentes
- Marge de sécurité respectée (±30%)

**📅 Analyse Temporelle:**
Commandes tous les 15 jours environ, avec une légère variabilité. Dernier intervalle plus long (37 jours), mais pas significativement.

**📊 Analyse Quantité:**
Quantités principalement à 2 unités, avec quelques variations à 1 unité. Comportement stable, sans tendance claire de croissance ou décroissance.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV162] LV Tartinade Tomato Basilico 190g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes relativement réguliers
- Moyenne des intervalles: environ 2 semaines (14 jours)
- Dernier intervalle entre commandes: 28 jours (2025-07-09 au 2025-08-06)
- Léger allongement récent de l'intervalle, mais cohérent avec un cycle d'approvisionnement stable

2. Analyse des quantités:
- Quantités principalement stables: 1u ou 2u
- Distribution des quantités:
  * 6/8 commandes à 2u
  * 2/8 commandes à 1u
- Pas de tendance claire à la hausse ou à la baisse
- Variations normales pour un contexte B2B

3. Recommandation quantitative:
- Mode (quantité la plus fréquente): 2u
- Variation acceptable de ±30%: entre 1u et 3u
- Recommandation conservatrice basée sur l'historique: 2u

Paramètres de décision:
- Stabilité historique
- Absence de signaux de changement significatif
- Approche prudente en B2B

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement réguliers, autour de 14 jours, avec un léger allongement récent à 28 jours. Cycle d'approvisionnement stable.

**📊 Analyse Quantité:**
Quantités principalement à 2u (6/8 commandes), avec quelques commandes à 1u. Variations normales sans tendance marquée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV132] LV Tartinade Houmous 190g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes relativement réguliers
- Moyenne des intervalles: environ 2 semaines
- Dernier intervalle (2025-07-09 au 2025-08-06): 28 jours
- Variation acceptable, pas de rupture de pattern significative

2. Analyse des quantités:
- Quantités principalement stables: 1-2 unités
- Distribution des quantités:
  * 1u: 3 fois
  * 2u: 5 fois
- Tendance légère vers 2 unités
- Variations normales dans la plage acceptable B2B (±30%)

3. Recommandation quantitative:
- Mode (valeur la plus fréquente): 2 unités
- Dernière commande: 2 unités
- Recommandation conservatrice: 2 unités

La recommandation de 2 unités est cohérente avec l'historique, représente la tendance dominante et reste dans les variations normales du comportement d'achat.

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement stables, moyennes autour de 2 semaines. Léger allongement du dernier intervalle (28 jours) mais non significatif.

**📊 Analyse Quantité:**
Quantités stables entre 1-2 unités, avec une légère prépondérance pour 2 unités. Variations dans la norme B2B de ±30%.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle:
- Intervalles entre commandes variables mais globalement rapprochés
- Fréquence moyenne: environ 2-3 semaines entre chaque commande
- Dernier intervalle: 37 jours (entre 2025-06-30 et 2025-08-06)
- Pas de pattern parfaitement régulier, mais cohérence générale

2. Analyse des quantités:
- Quantités principalement entre 1-2 unités
- Variations normales: 1u et 2u en alternance
- Dernière commande: 2 unités
- Variation dans la fourchette acceptable de ±30%

3. Recommandation conservative:
- Quantité recommandée: 2 unités
- Basée sur la dernière commande et la moyenne historique
- Permet de maintenir un stock tampon sans surstock
- Correspond au comportement d'achat habituel

**📅 Analyse Temporelle:**
Intervalles variables: 
- Min: 12 jours 
- Max: 37 jours
- Moyenne: ~21 jours
Pas de régularité stricte mais cohérence globale

**📊 Analyse Quantité:**
Quantités: 1u, 2u, 2u, 2u, 1u, 2u
Variation normale
Moyenne proche de 1.5 unités
Dernière commande à 2 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [LV134] LV BIO Tartinade Olives Vertes 190g:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes relativement réguliers
- Fréquence moyenne : environ tous les 10-15 jours
- Dernière commande le 2025-08-06 
- Période actuelle : 20 jours depuis dernière commande

2. Analyse des quantités:
- Quantités stables à 2 unités (6 fois sur 7 commandes)
- Une seule commande à 1 unité (mi-mai)
- Pas de tendance significative à la hausse/baisse
- Variations considérées comme normales en B2B

3. Recommandation quantitative:
- Quantité historique dominante : 2 unités
- Confirmation par la stabilité des commandes
- Ajustement conservateur : maintien à 2 unités
- Dans la plage de variation normale (+/- 30%)

**📅 Analyse Temporelle:**
Commandes espacées de 10-15 jours en moyenne. Dernier intervalle de 20 jours légèrement plus long mais pas significatif.

**📊 Analyse Quantité:**
6/7 commandes à 2 unités. Variation minime considérée comme normale en B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV133] LV Tartinade Ananas Coco 190g:

1. Analyse des intervalles entre commandes:
- Intervalles entre commandes relativement réguliers
- Moyenne des intervalles : environ 15-20 jours
- Dernière commande le 2025-08-06
- Pas de longues périodes d'interruption significatives

2. Analyse des quantités:
- Quantités très stables : 
  * 5 commandes sur 6 à 2 unités
  * 1 seule commande à 1 unité (2025-05-12)
- Écart-type faible, indiquant une demande stable
- Variation de ±1 unité, ce qui est dans la norme B2B (< 30%)

3. Recommandation de quantité:
- Maintien de la quantité habituelle : 2 unités
- Choix conservateur basé sur l'historique stable
- Cohérent avec 83% des commandes précédentes

Facteurs supplémentaires:
- Régularité des commandes suggère un besoin constant
- Aucune tendance à la hausse ou à la baisse marquée

**📅 Analyse Temporelle:**
Intervalles moyens entre commandes : 15-20 jours
Dernière commande : 2025-08-06
Écart type des intervalles : faible, indiquant une régularité

**📊 Analyse Quantité:**
Quantité majoritaire : 2 unités (5/6 commandes)
Variation de ±1 unité
Stabilité globale de la demande

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes pour [LV135] LV Tartinade Basilico 190g :

1. Analyse temporelle des intervalles :
- Intervalles entre commandes plutôt réguliers
- Moyenne autour de 7-14 jours
- Dernier intervalle : 28 jours (2025-07-09 → 2025-08-06)
- Tendance à des commandes bimensuelles environ

2. Analyse des quantités :
- Quantités très stables : majoritairement 2u
- Quelques variations ponctuelles à 1u (3 occurrences)
- Pas de tendance haussière ou baissière significative
- Variations dans la normale en B2B (±30%)

3. Recommandation quantitative :
- Mode (valeur la plus fréquente) = 2 unités
- Dernière commande = 2 unités
- Recommandation prudente de 2 unités
- Cohérent avec l'historique et les pratiques B2B

**📅 Analyse Temporelle:**
Commandes régulières, intervalle moyen 10-14 jours, dernièrement plus espacées (28 jours)

**📊 Analyse Quantité:**
Quantités stables autour de 2u, variations mineures acceptables en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  * 06/11 → 06/23 : 12 jours
  * 06/23 → 06/30 : 7 jours
  * 06/30 → 08/06 : 37 jours
- Les intervalles sont variables et irréguliers
- Pas de périodicité claire, mais tendance à commander toutes les 1-2 semaines

2. Analyse des quantités:
- Quantités commandées: 1u, 2u alternativement
- Variation normale entre 1 et 2 unités
- Dernière commande le 08/06/2025 : 2 unités
- Variation dans la plage acceptable de ±30%

3. Recommandation conservative:
- Basée sur le dernier historique et la variabilité
- Quantité recommandée : 2 unités
- Niveau de confiance moyen due à l'irrégularité des commandes

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, principalement entre 7-37 jours, sans périodicité stricte

**📊 Analyse Quantité:**
Quantités oscillant entre 1 et 2 unités, variation considérée comme normale en B2B

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [LV330] LV BIO Tartinade Toscana 190g :

1. Analyse des intervalles de commande :
- Intervalle moyen : environ 10-14 jours
- Dernier intervalle entre commandes : 28 jours (entre 2025-07-09 et 2025-08-06)
- Variabilité observée mais relativement régulière

2. Analyse des quantités :
- Quantités historiques : 1u ou 2u
- Distribution des quantités :
  * 2u : 6 fois
  * 1u : 3 fois
- Mode (valeur la plus fréquente) : 2 unités
- Pas de tendance claire à l'augmentation ou la diminution

3. Recommandation quantitative :
- Recommandation conservatrice basée sur la modalité : 2 unités
- Justification :
  * Correspond à la fréquence de commande la plus courante
  * Permet de maintenir un stock de sécurité
  * S'aligne avec le comportement d'achat historique
- Variation acceptable : entre 1 et 3 unités (±30%)

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers mais contenus, centrés autour de 10-14 jours. Dernier intervalle plus long (28 jours) mais non significatif.

**📊 Analyse Quantité:**
Quantités stables entre 1 et 2 unités, avec une préférence légère pour 2 unités. Variations normales et prévisibles.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande de la tartinade LV126:

1. Analyse temporelle des intervalles:
- Les commandes sont relativement régulières
- Fréquence moyenne: toutes les 2-3 semaines
- Dernier intervalle: 28 jours entre 2025-07-09 et 2025-08-06
- Cohérence temporelle: STABLE

2. Analyse des quantités:
- Quantités principalement stables entre 1 et 2 unités
- Dernières commandes: série de 2u (3 dernières commandes)
- Variation normale: entre 1u et 2u (compatible avec la tolérance B2B de ±30%)
- Pas de tendance haussière ou baissière claire

3. Recommandation quantitative:
- Quantité recommandée: 2 unités
- Basée sur la tendance récente des 3 dernières commandes
- Alignée avec l'historique et les variations acceptables en B2B

**📅 Analyse Temporelle:**
Commandes espacées de 2-3 semaines, rythme régulier. Dernier intervalle de 28 jours.

**📊 Analyse Quantité:**
Variations entre 1-2u, dernières commandes à 2u. Stabilité des volumes.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour le produit [LV137] LV Tartinade Lentilles Curry 190g:

1. Analyse des intervalles entre commandes:
- Intervalles quasi-réguliers entre commandes
- Écarts entre les dates:
  * 2025-06-11 → 2025-07-09 : 28 jours
  * 2025-07-09 → 2025-08-06 : 28 jours
- Période de commande très constante (environ 4 semaines)

2. Analyse des quantités:
- Quantité strictement identique à chaque commande : 2 unités
- Aucune variation de quantité détectée
- Stabilité parfaite des volumes commandés

3. Recommandation quantitative:
- Quantité historique stable : 2 unités
- Aucun signal de changement de besoin
- Recommandation conservative : maintenir à 2 unités
- Variation possible de ±30% acceptable mais non nécessaire ici

**📅 Analyse Temporelle:**
Période de commande régulière de 28 jours, très stable et prévisible

**📊 Analyse Quantité:**
Quantité constante de 2 unités, aucune variation détectée

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [MATE02] MATE MATE thé glacé bio pétillant au yerba maté:

1. Analyse temporelle des intervalles:
- Entre 2025-06-18 et 2025-07-09: 22 jours
- Entre 2025-07-09 et 2025-08-06: 28 jours
Les intervalles sont relativement réguliers, avec une légère augmentation graduelle (22 à 28 jours), suggérant une certaine stabilité dans le rythme de commande.

2. Analyse des quantités:
- Chaque commande est strictement de 1 unité
- Aucune variation de quantité détectée
- Quantité parfaitement constante

3. Recommandation de quantité:
- Compte tenu de l'historique stable
- En respectant la politique B2B de variations ±30%
- La recommandation conservative est de 1 unité

**📅 Analyse Temporelle:**
Intervalles entre commandes relativement stables (22-28 jours), tendance à un léger allongement

**📊 Analyse Quantité:**
Quantité constante de 1 unité à chaque commande, sans variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 7u vs Médiane: undefinedu (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 1u (12.5%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour [REB01] ReBEL chips:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes: 
  - 2025-08-06 à 2025-06-23: 44 jours
  - 2025-06-23 à 2025-06-11: 12 jours
  - 2025-06-11 à 2025-05-26: 16 jours
  - 2025-05-26 à 2025-04-28: 28 jours
Conclusion: Intervalles irréguliers, mais généralement entre 2-6 semaines.

2. Analyse des quantités:
- Quantités commandées: 6u, 4u, 10u, 2u, 10u
- Moyenne: 6.4 unités
- Écart-type: relativement important, montrant des variations significatives
- Pas de tendance linéaire claire

3. Recommandation quantitative:
- Moyenne historique: 6.4u
- Avec une marge de ±30%: entre 4.5u et 8.3u
- Arrondi conservateur: 7 unités

La recommandation de 7 unités représente un équilibre entre les variations historiques et une approche prudente en B2B.

**📅 Analyse Temporelle:**
Intervalles de commande variables, principalement entre 2-6 semaines. Pas de périodicité stricte détectée.

**📊 Analyse Quantité:**
Quantités fluctuantes entre 2 et 10 unités. Moyenne de 6.4u avec des écarts significatifs.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: undefinedu (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour [REB02] ReBEL chips premium & bio - paprika fumé 125g:

1. Analyse temporelle des intervalles:
- Entre les commandes : variations de 12-45 jours
- Pas de périodicité stricte
- Intervalles considérés comme LÉGÈREMENT ERRATIQUES

2. Analyse des quantités:
- Quantités historiques : 2u, 4u, 6u, 10u, 10u
- Moyenne : 6.4 unités
- Grande variabilité des commandes
- Tendance : légère fluctuation sans direction claire

3. Recommandation conservatrice:
- Dernier point de commande : 6 unités (plus récent)
- Proche de la moyenne historique
- Appliqué avec une marge de sécurité B2B standard (±30%)
- Choix de 6 unités comme quantité recommandée

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 12-45 jours, pas de cadence fixe détectable

**📊 Analyse Quantité:**
Haute variabilité (2-10u), sans tendance linéaire claire. Dernière commande à 6u.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 6u vs Médiane: undefinedu (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape des commandes de [REB04] ReBEL chips premium & bio - thym/romarin 125g :

1. Analyse des intervalles temporels :
- Entre les commandes : variations de 12-45 jours
- Pas de périodicité strictement régulière
- Suggère des commandes opportunistes/flexibles

2. Analyse des quantités :
- Quantités : 2u, 4u, 6u, 10u, 10u 
- Moyenne : 6.4 unités
- Forte variabilité (de 2 à 10 unités)
- Pas de tendance linéaire claire
- Dernière commande (6u) proche de la moyenne

3. Recommandation conservatrice :
- Prendre la dernière commande comme référence
- Ajuster légèrement autour de la moyenne
- Quantité recommandée : 6 unités
- Dans la fourchette de ±30% des commandes précédentes
- Permet de maintenir un stock minimal sans surstock

Risque modéré, recommandation pragmatique basée sur les derniers comportements d'achat.

**📅 Analyse Temporelle:**
Intervalles irréguliers : 12-45 jours, commandes non périodiques

**📊 Analyse Quantité:**
Haute variabilité (2-10u), moyenne à 6.4u, dernière commande à 6u

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes du produit [LV331]:

1. Analyse temporelle des intervalles:
- Entre 2025-04-28 et 2025-06-11: 44 jours
- Entre 2025-06-11 et 2025-07-09: 28 jours
- Intervalle moyennement irrégulier, mais tendance à un cycle autour de 1 mois

2. Analyse des quantités:
- Commandes: 2u, 1u, 2u
- Variation entre 1-2 unités (±50%)
- Légère préférence pour 2 unités
- Pas de tendance claire d'augmentation ou de diminution

3. Recommandation conservatrice:
- Quantité médiane/mode: 2 unités
- Variation acceptable en B2B: ±30%
- Recommandation finale: 2 unités

**📅 Analyse Temporelle:**
Intervalles entre commandes variables (28-44 jours), sans pattern strict mais autour de 1 mois

**📊 Analyse Quantité:**
Quantités oscillant entre 1-2 unités, variation de ±50%, stabilité relative

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [BUD02] BUDDY Organic Energy Drink:

1. Analyse temporelle des intervalles:
- Entre les commandes récentes: environ 7-12 jours
- Dernière période: 9 jours depuis la dernière commande (2025-07-09 → 2025-08-26)
- Pattern: Relativement régulier et constant

2. Analyse des quantités:
- Toutes les commandes sont strictement de 1 unité
- Aucune variation de quantité détectée
- Comportement d'achat très stable et prévisible

3. Recommandation conservative:
- Maintien du pattern historique
- Risque minimal de sur/sous-stockage
- Recommandation basée sur la constance historique
- Marge de sécurité respectée (±30%)

Conclusion: Recommandation de 1 unité pour la prochaine commande.

**📅 Analyse Temporelle:**
Intervalles réguliers entre 7-12 jours, avec une moyenne proche de 9 jours. Comportement d'achat temporellement prévisible.

**📊 Analyse Quantité:**
Quantité parfaitement stable à 1 unité par commande. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée des commandes historiques pour le produit [BUD03] BUDDY boisson énergétique biologique:

1. Analyse temporelle des intervalles:
- Les commandes sont relativement régulières
- Intervalle moyen entre commandes: environ 10-14 jours
- Dernier intervalle (26/05 au 11/06): 16 jours
- Dernier intervalle (11/06 au 18/06): 7 jours
- Dernier intervalle (18/06 au 30/06): 12 jours
- Dernier intervalle (30/06 au 09/07): 9 jours

2. Analyse des quantités:
- Quantité CONSTANTE à 1 unité à chaque commande
- Aucune variation significative
- Profil d'achat très stable

3. Recommandation conservatrice:
- Maintenir la quantité historique de 1 unité
- Considérant la marge de ±30%, la recommandation reste 1 unité
- Pas de signal fort pour augmenter ou diminuer

**📅 Analyse Temporelle:**
Commandes espacées de 7-16 jours, avec une moyenne autour de 10-12 jours. Rythme relativement régulier.

**📊 Analyse Quantité:**
Quantité constante de 1 unité. Aucune variation ou tendance détectable.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de la commande pour le produit BUDDY Organic Energy Drink:

1. Analyse des intervalles temporels:
- Les commandes sont très régulières, avec un intervalle moyen de 7-14 jours
- Dernier intervalle: 9 jours entre 2025-06-30 et 2025-07-09
- Intervalles précédents varient entre 7 et 15 jours
- Conclusion: Modèle de commande stable et prévisible

2. Analyse des quantités:
- Quantité constante à 1 unité pour toutes les commandes
- Aucune variation ou tendance haussière/baissière détectée
- Variation de 0% (totalement stable)

3. Recommandation quantitative:
- Historique montre une commande systématique de 1 unité
- Application de la règle B2B (+/- 30%): entre 0 et 2 unités
- Recommandation conservatrice: 1 unité
- Probabilité de besoin stable à court terme

La stratégie est de maintenir le stock minimal tout en assurant la continuité de l'approvisionnement.

**📅 Analyse Temporelle:**
Commandes très régulières, intervalle moyen 7-14 jours. Modèle stable et prévisible.

**📊 Analyse Quantité:**
Quantité constante à 1 unité. Aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 8u vs Médiane: undefinedu (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique de commandes pour le produit PAOLA cola:

1. Analyse des intervalles de commande:
- Les commandes ne sont pas régulières
- Intervalles entre commandes variables: 
  * Entre 07/09 et 03/18: ~4 mois
  * Entre 03/18 et 03/10: ~8 jours 
  * Entre 03/10 et 02/17: ~3 semaines
  * Entre 02/17 et 01/03: ~6 semaines
Ces intervalles sont irréguliers, suggérant des achats opportunistes ou basés sur les besoins.

2. Analyse des quantités:
- Variations significatives : 1u, 4u, 10u, 12u, 6u
- Moyenne : 6.6 unités par commande
- Écart type élevé indiquant des commandes non standardisées
- Dernière commande (6u) proche de la moyenne

3. Recommandation conservative:
- Utiliser la moyenne (6.6u) avec un ajustement conservateur
- Arrondi à 8 unités pour couvrir les variations potentielles
- Respecte la règle des ±30% de variation normale en B2B
- Permet de maintenir un stock de sécurité léger

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, de 8 jours à 4 mois. Aucune périodicité claire détectée.

**📊 Analyse Quantité:**
Fortes variations de 1 à 12 unités. Moyenne de 6.6u. Dernier point à 6u suggère une stabilisation récente.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [RIT08] RITCHIE Citron:

1. Analyse des intervalles temporels:
- Entre la 1ère et 2ème commande: 22 jours
- Entre la 2ème et 3ème commande: 38 jours
- Écart moyen: environ 30 jours (+/- 8 jours)
➜ Intervalle RÉGULIER, suggérant un besoin périodique stable

2. Analyse des quantités:
- Chaque commande est strictement de 1 unité 
- Aucune variation de quantité
- Profil de commande très constant
➜ Demande unitaire stable et prévisible

3. Recommandation conservatrice:
- Historique montre un besoin constant de 1 unité
- Prochain point de commande recommandé: 1 unité
- Confiance moyenne car historique limité mais cohérent

Projection basée sur cycle de ~30 jours et commande unitaire stable.

**📅 Analyse Temporelle:**
Intervalles réguliers autour de 30 jours, avec légère variabilité acceptable (+/- 8 jours)

**📊 Analyse Quantité:**
Commandes unitaires constantes, aucune variation significative

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse des intervalles temporels:
- Entre 2025-05-26 et 2025-06-18: 23 jours
- Entre 2025-06-18 et 2025-07-09: 21 jours
Les intervalles sont remarquablement réguliers, suggérant un besoin constant et prévisible.

2. Analyse des quantités:
- Toutes les commandes sont strictement identiques à 1 unité
- Aucune variation, ce qui indique un besoin stable et standardisé
- Quantité constante de RITCHIE Cola ZERO 330ml

3. Recommandation conservatrice:
- Basée sur l'historique parfaitement stable
- Recommandation de 1 unité, alignée sur les commandes précédentes
- Variation acceptable de ±30% non nécessaire ici, car historique très constant

**📅 Analyse Temporelle:**
Intervalles réguliers de 21-23 jours entre commandes, suggérant un cycle d'approvisionnement stable.

**📊 Analyse Quantité:**
Quantité constante de 1 unité, aucune variation détectée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes de RITCHIE Cola:

1. Analyse des intervalles entre commandes:
- Intervalle entre 1ère et 2ème commande: 22 jours
- Intervalle entre 2ème et 3ème commande: 22 jours
- Intervalle quasi-constant et régulier de 22 jours entre chaque commande

2. Analyse des quantités:
- Quantité constante de 1 unité à chaque commande
- Aucune variation, tendance stable
- Période observée: 3 commandes sur environ 2 mois

3. Recommandation quantitative:
- Maintien de la quantité historique constante: 1 unité
- Variation acceptable de ±30%: entre 0 et 1-2 unités
- Choix conservateur de 1 unité pour préserver la continuité

**📅 Analyse Temporelle:**
Intervalles réguliers de 22 jours entre commandes, suggérant un cycle d'approvisionnement stable

**📊 Analyse Quantité:**
Quantité constante de 1 unité, sans variation significative

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle:
- Intervalles entre commandes : 
  * 15 jours (12/05 → 26/05)
  * 14 jours (26/05 → 11/06)
  * 19 jours (11/06 → 30/06)
  * Dernière commande le 30/06, période actuelle le 26/08 (57 jours sans commande)
- Conclusion : Intervalle relativement régulier autour de 15-19 jours, mais rupture récente

2. Analyse des quantités:
- Quantités historiques : 1u, 2u, 1u, 2u, 1u
- Alternance entre 1 et 2 unités
- Pas de croissance claire, mais oscillation stable
- Variation normale dans la plage B2B (±30%)

3. Recommandation:
- Quantité la plus récurrente : 2 unités
- Confirmation par la stabilité des commandes précédentes
- Recommandation conservatrice : 2 unités

**📅 Analyse Temporelle:**
Intervalles de commandes réguliers (moyenne 16 jours), mais récente interruption de 57 jours

**📊 Analyse Quantité:**
Oscillation stable entre 1 et 2 unités, sans tendance claire de croissance

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:
1. Analyse temporelle:
- Intervalles entre commandes:
  * 2025-06-30 - 2025-06-23 = 7 jours
  * 2025-06-23 - 2025-04-28 = 56 jours
  Les intervalles sont irréguliers, sans pattern clair.

2. Analyse des quantités:
- Toutes les commandes sont de 1 unité
- Quantité constante et stable
- Pas de variation significative

3. Recommandation conservatrice:
- Basée sur l'historique le plus récent
- Maintien de la quantité habituelle
- Quantité recommandée: 1 unité
- Variation acceptable entre 0-2 unités (±30%)

Facteurs de risque/incertitude:
- Intervalles de commande variables
- Manque de données sur la demande réelle
- Recommandation prudente

**📅 Analyse Temporelle:**
Intervalles irréguliers: 7 jours puis 56 jours, aucun pattern prédictif clair

**📊 Analyse Quantité:**
Quantité stable à 1 unité pour toutes les commandes historiques

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [ALO31] ORGANIC CRUNCH:

1. Analyse des intervalles entre commandes:
- Intervalles irréguliers mais rapprochés
- Entre 2025-04-28 et 2025-06-18 : 51 jours
- Entre 2025-06-18 et 2025-06-23 : 5 jours
- Entre 2025-06-23 et 2025-06-30 : 7 jours
- Dernière commande le 2025-06-30
- Dernière période sans commande depuis 2025-06-30 jusqu'à 2025-08-26 (57 jours)

2. Analyse des quantités:
- Quantité CONSTANTE à 1 unité à chaque commande
- Pas de variation significative
- Volume unitaire stable : 500ml

3. Recommandation conservatrice:
- Maintien de la quantité historique
- Prudence face à la période récente sans commande
- Conservation du dernier schéma connu : 1 unité

**📅 Analyse Temporelle:**
Intervalles de commande variables (5-51 jours), tendance récente à des commandes plus fréquentes mais interruption depuis 57 jours

**📊 Analyse Quantité:**
Quantité unitaire constante à 1u, sans variation

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 7u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 4u (133.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse étape par étape de l'historique des commandes pour le produit [REB03] ReBEL chips premium & bio - poivre noir 125g:

1. Analyse des intervalles entre commandes:
- Entre la 1ère et 2ème commande: 12 jours
- Entre la 2ème et 3ème commande: 47 jours
- Intervalles irréguliers, pas de pattern constant détecté

2. Analyse des quantités:
- Commande 1: 4 unités
- Commande 2: 10 unités 
- Commande 3: 10 unités
- Tendance à se stabiliser autour de 10 unités
- Variation de -60% à +150%, ce qui dépasse la variation normale de ±30%

3. Recommandation conservative:
- Moyenne des 2 dernières commandes: (10 + 10) / 2 = 10
- Ajustement conservative: -30% de la moyenne
- Quantité recommandée: 7 unités

La recommandation de 7 unités représente une approche prudente qui tient compte des variations observées tout en restant proche du volume des dernières commandes.

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers : 12 jours puis 47 jours. Aucune périodicité claire n'est établie.

**📊 Analyse Quantité:**
Quantités variant de 4 à 10 unités. Stabilisation récente autour de 10 unités, mais avec une variation initiale significative.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (32)

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
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 1.0u (20j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.4u (16j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (20j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: 0.4u (4j restants) → prédit 3u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-17j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | Stock prédit: 0.2u (11j restants) → prédit 2u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Stock prédit: 0.2u (11j restants) → prédit 2u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: 0.2u (11j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -2.1u (-19j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | Stock prédit: -0.7u (-8j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: -1.8u (-35j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | Stock prédit: -2.4u (-39j restants) → prédit 4u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | Stock prédit: -4.1u (-80j restants) → prédit 3u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T15:57:20.330Z*
