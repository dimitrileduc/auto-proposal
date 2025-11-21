# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 55
- **Tokens**: 80,963 input + 16,181 output = 97,144 total


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
| **MAE** | 0.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 6.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 26 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, principalement lundi et mercredi, intervalle 7-28 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u avec une exception à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique récent de 5 commandes sur 3 mois montre une demande majoritairement stable à 2u (4 occurrences sur 5). L'unique commande à 1u du 09/07 apparaît comme une exception ponctuelle. Pattern temporel irrégulier avec alternance lundi/mercredi sans fréquence fixe (intervalles variables: 7j, 12j, 19j, 28j). Absence de données N-1 donc pas d'effet saisonnier à considérer. La date cible (25/08, lundi) correspond à un jour de commande habituel. Baseline théorique 1.8u arrondie à 2u pour respecter le comportement modal du client. Pas de signal de rupture de tendance ni de rattrapage nécessaire.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier: 12j puis 7j puis 12j puis 19j - pas de jour fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u par commande, légère dominance de 2u (75% des cas)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (4 commandes sur 10 semaines) montrant demande stable 1-2u. Aucun pattern hebdomadaire clair détecté. Les 3 dernières commandes sur 4 sont de 2u (75%), suggérant que 2u est la quantité standard actuelle. Dernière commande il y a 19j (2025-08-06), intervalle le plus long observé, mais pas assez pour supposer un rattrapage majeur. Absence de données N-1 limite la détection saisonnière. La prédiction de 2u reflète le mode statistique récent et la tendance majoritaire, privilégiant la précision sur la prudence comme demandé pour minimiser le MAPE.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance bi-hebdomadaire à mensuelle (intervalles variables: 7j, 12j, 16j, 37j)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u (dernière commande 1u est une baisse ponctuelle)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique de 5 commandes sur 3 mois montrant un pattern dominant de 2u (4 fois sur 5). La dernière commande de 1u le 26/05 est une exception isolée suivie d'un retour à 2u en juin/août. Dernière commande il y a 19 jours (06/08), compatible avec le rythme habituel de 7-37j. Absence de saisonnalité N-1 et d'événements exceptionnels. La demande de fond est clairement établie à 2u. Prédiction: 2u représente la quantité la plus probable basée sur la récurrence observée et le comportement récent du client.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~2-4 semaines, jours variables (lun/mer)
- **Saisonnalité**: none
- **Tendance**: Stable ~2u avec légère baisse récente (dernière commande 2u puis 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (5 commandes sur 3 mois) montrant un rythme irrégulier entre 13-28 jours. Pattern dominant: 2u (4/5 commandes), avec une seule occurrence à 1u le 2025-07-09. Dernière commande il y a 19 jours (2u le 2025-08-06). Absence de saisonnalité N-1. Le client maintient une demande de fond stable autour de 2 unités sans outliers détectés. La commande unique à 1u peut être considérée comme ponctuelle (ajustement stock ou besoin réduit). Baseline calculée à 1.8u (moyenne pondérée favorisant les 4 commandes à 2u). Prédiction finale: 2u car c'est la quantité modale représentant 80% des commandes récentes, cohérente avec le délai écoulé et l'absence de signaux de changement structurel.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (12j, 7j, 12j, 28j) sans jour fixe, alternance lun/mer
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1u et 2u (moyenne 1.8u) sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern irrégulier avec commandes espacées de 7 à 28 jours. Sur les 5 dernières commandes (75j), 4 fois 2u et 1 fois 1u. La dernière commande du 2025-08-06 (19j avant prédiction) était de 2u. L'intervalle moyen est ~18j, donc le client devrait être en période de besoin. Absence de saisonnalité N-1. La quantité modale est 2u (80% des cas). Recommandation: 2u basée sur la fréquence dominante et le délai écoulé depuis dernière commande.

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier bi-mensuel (~7-14j) - Commandes principalement Lundi/Mercredi
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation 1-2u depuis 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (4 commandes) montrant alternance 1u-2u avec légère dominance de 2u (75% des cas). Dernière commande le 06/08 (mer) avec 2u, soit 19j avant prédiction du 25/08 (lun). Pattern observé: commandes espacées de 7-18j, majoritairement en début de semaine. Absence de saisonnalité N-1 mais régularité relative sur Q2-Q3. La baseline de 1.75u reflète la moyenne pondérée récente. Vu le délai de 19j (supérieur à la moyenne de ~12j entre commandes) et le pattern dominant à 2u, une commande de reconstitution standard de 2u est la plus probable. Pas d'indication de rupture ou d'événement exceptionnel justifiant 1u ou 3u+.

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~10-16j entre commandes (tendance vers rythme bimensuel)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u (dernier commande 1u pourrait être ponctuel)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern: 5 commandes en 91j = ~18j entre commandes, mais dernières semaines montrent accélération (12j depuis dernière commande du 06/08). Quantités très homogènes: 4×2u + 1×1u. L'unique commande à 1u (26/05) semble exceptionnelle comparée au pattern dominant de 2u. Au 25/08, soit 19j après la dernière commande = dans la fenêtre moyenne observée. Sans saisonnalité N-1 ni outliers identifiés, la baseline se fonde sur la médiane stricte (2u). La commande à 1u étant isolée et le rythme de réapprovisionnement étant respecté, la demande structurelle reste 2u. Prédiction: 2u (quantité modale représentant 80% des commandes récentes).

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (12-28j entre commandes, moyenne ~18j)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 2u sur toutes les commandes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair identifié : 4 commandes en 3 mois (11/06, 23/06, 09/07, 06/08) avec quantité constante de 2u à chaque fois. Intervalles : 12j, 16j, 28j (moyenne 18.7j). Depuis la dernière commande (06/08), nous sommes à 19 jours, ce qui correspond exactement au rythme moyen observé. Aucun outlier détecté, aucune saisonnalité N-1 disponible. La stabilité absolue des quantités (2u systématiquement) et le timing cohérent avec le cycle habituel indiquent une demande de fond prévisible. Prédiction : 2 unités avec haute confiance.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire irrégulier - commandes principalement en milieu de semaine (lundi/mercredi) avec intervalles variant de 5 à 28 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse - moyenne 1.8u sur 5 commandes récentes, dernière commande à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern hebdomadaire détecté avec préférence lundi/mercredi. Les 3 dernières commandes sur 4 sont à 2u (seule exception: 1u le 18/06). La date de prédiction (25/08, lundi) correspond au jour privilégié observé. Intervalle depuis dernière commande (06/08): 19 jours, cohérent avec le rythme 2-4 semaines observé. Absence d'outliers et tendance stable autour de 2u justifient une prédiction de 2u pour minimiser l'écart. Pas de saisonnalité N-1 exploitable. Confiance moyenne due à l'historique court (5 points) mais pattern récent homogène.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Alternance ~7-18 jours, pas de jour fixe (lun/mer variables)
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1-2u, moyenne 1.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (4 commandes sur 3 mois) mais pattern clair: alternance 1u-2u avec fréquence irrégulière 7-18j. Dernière commande le 06/08 (2u) à J-19. Le client montre un besoin récurrent modeste sans saisonnalité détectable. L'alternance 1u/2u suggère un stock tampon variable côté client. Baseline théorique 1.5u, mais comme les commandes de 2u représentent 50% du mix et que l'intervalle actuel (19j) dépasse la moyenne observée (suggesting possible besoin cumulé), je recommande 2u. Cette quantité correspond au niveau haut du range habituel et reflète la demande la plus probable pour une commande après cet intervalle, tout en restant conservateur face au manque de profondeur historique.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance bimensuelle (espacement variable 5-7-9-28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable - quantités constantes 1-2u (moyenne ~1.6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse du pattern: Le client commande de manière irrégulière mais récurrente (5 commandes sur 10 semaines). Les quantités oscillent entre 1-2u sans outlier. Dernière commande le 06/08 (2u) → 19 jours d'écart au 25/08, ce qui correspond à l'espacement moyen observé. Les commandes de 2u sont légèrement plus fréquentes (3/5) que les 1u (2/5). Le lundi 30/06 et 23/06 ont généré des commandes (1u et 2u), donc le lundi 25/08 s'inscrit dans un jour potentiel de commande. Sans saisonnalité N-1 et avec un pattern stable récent, la baseline de 1.6u arrondie à 2u reflète la demande modale et la probabilité d'une commande standard post-intervalle typique. Confidence medium car pattern moins régulier qu'un cycle fixe hebdomadaire.

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance bimensuelle (~14-28j), majoritairement lundi/mercredi
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u, légère dominance de 2u (4/5 commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique court (5 commandes sur 2 mois) montrant pattern stable 1-2u. Dernière commande le 2025-08-06 (mer.), prédiction pour 2025-08-25 (lun.) = 19 jours d'écart, cohérent avec rythme observé (7-28j). 80% des commandes = 2u (4/5), dont les 3 plus récentes incluent 2×2u consécutives. Aucun outlier détecté, pas de saisonnalité N-1. Pattern jour: lundi dominant (3/5) ou mercredi (2/5). Baseline théorique 1.8u arrondie à 2u car: (1) modalité la plus fréquente, (2) dernière commande=2u, (3) contexte B2B agro favorise quantités rondes. Confiance medium due à faible historique mais tendance claire vers 2u.

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel strict (~28-29 jours) - Commandes systématiques début de mois (11/06, 09/07, 06/08)
- **Saisonnalité**: none
- **Tendance**: Stable absolu - 2u systématiques sur 3 commandes consécutives
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern mensuel parfaitement régulier détecté (28j entre 11/06-09/07, 28j entre 09/07-06/08). Dernier achat le 06/08, donc prochain cycle attendu fin août/début septembre. Quantité strictement stable à 2u sur 100% des commandes. Aucun outlier, aucune variation saisonnière observable. La date de prédiction (25/08) tombe pile dans la fenêtre de réapprovisionnement attendue (+19j depuis dernier achat). Produit de niche (tartinade lentilles curry) à rotation prévisible en B2B. Recommandation: 2u (continuité absolue du pattern observé).

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~28-30j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes systématiques de 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair et stable sur 3 mois : commandes régulières de 1 unité systématiquement (18/06, 09/07, 06/08). Intervalle moyen ~28j. La prochaine commande attendue fin août (25/08) respecte ce rythme. Aucun outlier, aucune saisonnalité détectable, aucune variation de quantité. Client B2B à demande prévisible commandant strictement 1 canette à chaque réapprovisionnement mensuel. Confiance maximale sur maintien du pattern 1u.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec alternance ~12-16 jours (lun/mer variables)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité (2-6u hors pic)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Pattern irrégulier observé sur 3 mois: 4 commandes espacées de 16j, 12j, puis 19j. Les quantités oscillent entre 2-6u (demande de fond) avec 1 outlier à 10u (23/06, probable promotion/événement). Depuis le dernier achat (06/08), 19 jours se sont écoulés - cohérent avec le rythme moyen. La baseline se calcule sur les 3 dernières commandes hors outlier: (6+4+2)/3=4u, mais avec pondération sur la plus récente (6u) qui montre une légère reprise. Aucune donnée N-1 pour confirmer saisonnalité. Le client commande en petites quantités régulières pour rotation stock. Prédiction 5u = compromis entre dernière commande (6u) et moyenne ajustée (4u), reflétant la demande stable B2B sans surgonfler.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier : 16j, 12j, 44j entre commandes. Pas de jour fixe détecté (mer-lun-mer-lun)
- **Saisonnalité**: none
- **Tendance**: Volatile : 2u→10u→4u→6u. Moyenne mobile ~5.5u, pas de tendance claire
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Historique court (4 commandes sur 3 mois) avec forte volatilité (2-10u). Aucune saisonnalité N-1 disponible. La commande du 10u (11/06) semble exceptionnelle vu l'entourage (2-4-6u). Pattern irrégulier sans jour fixe identifiable. Depuis le dernier achat (06/08), 19 jours écoulés → légèrement au-dessus de l'intervalle moyen (24j). La dernière commande (6u) représente le meilleur proxy récent, cohérente avec la médiane hors outlier (5u). Pas d'indicateur de rattrapage ni d'événement saisonnier à fin août. Prédiction prudente : 6u (reproduction du dernier comportement observé).

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.2u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier bimodal - alternance Lundi/Mercredi avec intervalles variables (12-16j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité - moyenne 5.5u sur période récente
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Pattern d'achat irrégulier sans saisonnalité N-1. Les 4 dernières commandes montrent: 2u→10u→4u→6u. Le pic de 10u (11/06) semble isolé (possiblement stock préventif ou événement ponctuel). En excluant cet outlier, la demande oscille entre 2-6u avec moyenne pondérée ~4.7u. La dernière commande (6u le 06/08) remonte à 19 jours, suggérant un besoin imminent. Le rythme bimodal Lun/Mer et la date de prédiction (Lundi 25/08) correspondent au profil typique. Baseline ajustée à 5.2u, arrondie à 6u pour refléter la dernière commande observée qui représente le besoin actuel stabilisé post-pic. Confiance moyenne due à l'historique court (4 points) et la variabilité inhérente.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~28j entre les 2 commandes observées)
- **Saisonnalité**: none
- **Tendance**: Stable avec volumes faibles (1-2u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes seulement). Pattern observé: commandes mensuelles irrégulières de 1-2u le mercredi. Dernier achat le 9 juillet (2u), soit 47 jours avant la date de prédiction. Vu l'intervalle écoulé (>28j du cycle observé), le client est en phase de réapprovisionnement. La dernière commande de 2u suggère une légère augmentation vs l'achat précédent (1u). Sans saisonnalité N-1 et avec tendance stable-légère hausse, je privilégie la quantité la plus récente comme référence. Prédiction: 2u (volume probable basé sur dernier achat et respect du cycle mensuel écoulé).

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec concentration mer./lun. - Intervalle moyen 16 jours (9j→12j→7j→16j→36j)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante 1u par commande, fréquence variable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern ultra-stable: 5 commandes consécutives de 1u exactement. Pas de saisonnalité N-1 disponible. Intervalle moyen 16j depuis mai, dernier achat il y a 47j (2025-07-09). Le rythme irrégulier suggère consommation faible mais régulière. Aucun élément ne justifie une hausse: pas de tendance volume, pas de pattern saisonnier identifiable, pas de rattrapage prévisible (quantité toujours unitaire). La prédiction la plus probable reste 1u, conforme à 100% de l'historique observé.

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance bi-mensuelle - Intervalles variables: 9j, 7j, 12j, 16j entre dernières commandes. Pattern instable sans jour fixe identifiable
- **Saisonnalité**: none
- **Tendance**: Stable - 100% des commandes récentes à 1u (5/5), aucune variation détectable sur 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Produit de niche (boisson bio spécifique) avec demande ultra-stable: 5 commandes consécutives à exactement 1u sur 3 mois sans aucune exception. Absence totale de données N-1 empêche analyse saisonnière. Pattern irrégulier mais quantité invariable suggère commande de réassort minimal récurrent. Intervalle moyen ~11j depuis dernière commande (2025-07-09) cohérent avec rythme observé. Aucun signal de rupture ou changement de comportement. En contexte B2B agro avec SKU spécialisé, la régularité absolue des quantités unitaires prime sur l'irrégularité temporelle. Prédiction: 1u (100% de certitude basée sur historique sans variance).

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec concentration sur Lundis et Mercredis - intervalles variables (5j, 7j, 12j, 9j, 35j)
- **Saisonnalité**: none
- **Tendance**: Stable - demande unitaire constante (1u par commande) sans variation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Produit à faible rotation avec pattern de commande ultra-stable: 100% des 5 dernières commandes = 1 unité exactement. Intervalles variables (5-35j) suggèrent réapprovisionnement au besoin plutôt que rythme fixe. Absence totale d'outliers et de saisonnalité N-1. La date cible (lundi 25/08) correspond à un jour historiquement commandé (2/5 lundis, 3/5 mercredis). Dernière commande le 09/07 (46j avant prédiction) indique cycle potentiellement actif. En l'absence de signal de rupture ou hausse de demande, la prédiction optimale reste 1 unité - cohérente avec 100% de l'historique récent. Surgonfler serait injustifié statistiquement.

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée unique insuffisante - impossible de déterminer un cycle
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes pour établir une tendance
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande historique (6u le 2025-07-09), il n'existe aucun pattern établi, aucune fréquence détectable, ni tendance calculable. La date de prédiction (2025-08-25) se situe 47 jours après cette unique commande. En l'absence totale de données N-1 et avec un historique aussi limité, la seule référence quantitative disponible est cette commande de 6 unités. Par défaut méthodologique en contexte B2B agroalimentaire avec données insuffisantes, je reproduis la dernière quantité observée comme baseline, tout en signalant une confiance faible. Cette prédiction devra être ajustée dès que de nouvelles données permettront d'établir un pattern réel de consommation.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~30j (26j puis 21j puis 26j)
- **Saisonnalité**: none
- **Tendance**: Stable - Demande constante 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair de commandes unitaires répétées (100% des cas = 1u) avec rythme approximatif mensuel (26-21-26 jours). Aucun outlier, aucune donnée N-1, mais stabilité parfaite sur 3 mois. Intervalle moyen ~24j. Dernière commande le 2025-07-09, donc au 2025-08-25 (47j écoulés) le cycle est largement dépassé (presque 2 cycles). Client commande probablement 1u par livraison pour rotation lente. Aucune raison de dévier de la constante historique de 1u. Prédiction: 1 unité avec haute confiance.

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (21j, 21j, 53j) - pas de jour fixe détecté
- **Saisonnalité**: none
- **Tendance**: Stable - demande unitaire constante (1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (3 commandes sur 3 mois) mais pattern clair : chaque commande = exactement 1 unité. Les intervalles (21j, 21j puis 53j) suggèrent un rythme irrégulier sans jour fixe. Dernière commande le 09/07, soit 47 jours avant la date de prédiction (25/08). L'absence de saisonnalité N-1 et la constance des volumes unitaires indiquent une demande de fond stable. Aucun outlier détecté. La prédiction conserve la baseline observée de 1 unité, cohérente avec 100% des commandes historiques. Confiance medium due au faible historique mais renforcée par la parfaite stabilité des quantités commandées.

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (22j puis 21j puis 44j entre dernières commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - demande unitaire constante de 1u à chaque commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse: 3 commandes sur 3 mois (26 mai, 18 juin, 9 juillet) montrent un pattern totalement stable de 1u par commande. Aucun outlier détecté. Absence de données N-1 empêche l'analyse saisonnière. Fréquence irrégulière (22-44j d'écart) mais volume parfaitement constant. Le 25 août représente 47 jours après la dernière commande du 9 juillet, ce qui s'inscrit dans la plage observée d'irrégularité. La demande unitaire systématique suggère soit un besoin test/échantillon, soit une rotation lente avec commande à la pièce. Aucun élément ne justifie une variation à la hausse ou à la baisse. Prédiction: 1u (100% de probabilité basée sur constance absolue observée).

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (16j puis 19j puis 35j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec majorité à 1u (2u semble exceptionnel le 2025-06-11)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Historique très court (3 commandes en 3 mois) avec pattern irrégulier. La quantité dominante est 1u (2 occurrences sur 3). La commande de 2u le 11/06 apparaît comme outlier isolé sans répétition. Aucune saisonnalité N-1 disponible. Dernier achat le 30/06 (1u) établit le niveau actuel de demande. Intervalle moyen ~23j suggère qu'une nouvelle commande fin août est cohérente. Sans signal de hausse structurelle, la demande de fond reste à 1u. Prédiction conservatrice basée sur le mode statistique et la tendance récente confirmée.

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque Lundi (intervalle 7j constant)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern ultra-stable détecté : 2 commandes consécutives espacées exactement de 7 jours (23/06 et 30/06), toutes deux le lundi, pour 1 unité. La prochaine commande attendue selon ce rythme hebdomadaire tombe précisément le 25/08 (lundi). Aucun outlier, aucune saisonnalité N-1 disponible, tendance parfaitement stable. La demande de fond est clairement établie à 1 unité par semaine. Sans aucun signal de changement dans le comportement d'achat, la prédiction la plus précise est 1 unité.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes hebdomadaires irrégulières (lundi dominant, 1 mercredi). Intervalles: 5j puis 7j. Pattern instable sur faible historique.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande (100% des commandes). Aucune variation de quantité observée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (3 commandes sur 3 mois) mais pattern clair: TOUTES les commandes = 1u exactement. Fréquence ~hebdomadaire avec légère irrégularité. Date de prédiction = lundi, jour majoritaire (2/3 commandes). Absence totale de variation quantitative suggère un besoin unitaire récurrent, probablement lié à un usage test/échantillon ou demande B2B très spécifique. Sans signal de changement (pas d'outlier, pas de trend haussier/baissier), la prédiction la plus probable reste 1u. Confidence medium car faible historique, mais cohérence parfaite des données disponibles.

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Seulement 2 commandes observées: 12j d'écart (11 juin → 23 juin), puis 63j jusqu'à date prédiction
- **Saisonnalité**: none
- **Tendance**: Données insuffisantes - Seulement 2 points. Dernier achat = 4u (baisse vs 10u mais échantillon trop faible)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
CONTEXTE CRITIQUE: Produit premium/bio avec historique ultra-limité (2 commandes seulement sur 3 mois). PATTERN: Pas de rythme détectable - intervalle variable (12j puis +63j de silence). La commande du 11/06 (10u) semble atypique vs dernier achat 23/06 (4u). LOGIQUE: En l'absence de saisonnalité N-1 et avec 63 jours sans réapprovisionnement, le client a probablement encore du stock ou réduit sa demande. La dernière quantité observée (4u) est le signal le plus fiable. Produit de niche → volumes faibles attendus. Prédiction conservatrice mais réaliste compte tenu du manque cruel de données structurantes.

</details>




### 📊 Données d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 3u

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
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 1.1u (21j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.5u (17j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 2 | Stock prédit: 1.6u (21j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.6u (8j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-16j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -2.1u (-18j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | Stock prédit: -0.7u (-7j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.9u (-25j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-25j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: -1.8u (-34j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | Stock prédit: -2.3u (-39j restants) → prédit 4u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -4.1u (-79j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T13:35:43.374Z*
