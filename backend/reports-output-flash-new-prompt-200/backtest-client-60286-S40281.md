# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S40281
- **Date commande** : 2025-11-14 10:24:46
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 15,599 input + 5,381 output = 20,980 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.7% | 42 produits prédits, 15 corrects |
| **Rappel** | 88.2% | 17 produits réels, 15 détectés |
| **F1-Score** | 50.8% | Score équilibré global |

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
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
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

## True Positives (15)

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
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 5 | 2 | 3.0 | 150.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 23 jours
- **Saisonnalité**: none
- **Tendance**: Stable (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES 1 & 2 : Aucune donnée N-1 et aucune commande anormale détectée. Le volume est trop faible pour identifier une saisonnalité. ÉTAPE 3 : Une seule commande enregistrée (1 unité) le 21/10. Il n'y a pas de rythme hebdomadaire établi. ÉTAPE 4 : Compte tenu de la faible rotation du produit et de l'absence d'historique robuste, la stratégie la plus sécuritaire pour éviter le surstockage est de commander l'unité minimale de base (1u). Le niveau de confiance est 'low' faute de récurrence statistique.

</details>


<details>
<summary><strong>2. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (unique commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La seule commande de 1u le 21/10 est considérée comme la demande de fond, aucun outlier détecté. ÉTAPE 2 (Saisonnalité) : Aucune donnée N-1 disponible pour évaluer l'impact saisonnier sur ce produit spécifique. ÉTAPE 3 (Tendance) : Historique quasi inexistant (1 seule commande en 3 mois), ce qui indique soit un lancement de produit, soit une rotation extrêmement faible. ÉTAPE 4 (Recommandation) : En l'absence de récurrence et pour éviter tout sur-stockage sur un produit à rotation lente ou incertaine, la recommandation se limite au strict minimum observé (1 unité). Confiance faible due au manque d'historique.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long irrégulier d'environ 8 semaines
- **Saisonnalité**: none
- **Tendance**: Baisse significative du volume unitaire (-75%)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse est limitée par un historique très faible (2 points de données). ÉTAPE 1: La commande de 8u en août est traitée comme un outlier potentiel ou un stock de lancement, tandis que la commande de 2u en octobre semble refléter la demande de fond réelle. ÉTAPE 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul. ÉTAPE 3: La tendance montre un ralentissement du volume par commande et une fréquence très faible (environ 1 commande tous les 2 mois). ÉTAPE 4: Compte tenu du risque de péremption sur un produit bio et du faible débit récent, une approche conservatrice est adoptée en s'alignant sur la dernière commande connue de 2 unités, malgré le changement de jour de commande (jeudi vs mardi). Un stock de sécurité minimal est privilégié pour éviter le sur-stockage sur un produit à rotation lente pour ce client spécifique.

</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel - Commande isolée détectée
- **Saisonnalité**: none
- **Tendance**: Stable - Volume unitaire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante car une seule commande (1u) est présente dans l'historique récent. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le secteur agroalimentaire suggère une baisse de consommation de boissons fraîches en novembre. Étape 3: Un rythme de commande d'environ 3 semaines semble se dessiner (21/10 au 13/11). Étape 4: En l'absence de traction commerciale forte et compte tenu de la faiblesse des données historiques, je recommande de rester sur le volume minimal de 1 unité pour couvrir le besoin immédiat sans risque de sur-stockage.

</details>


<details>
<summary><strong>5. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée, extrêmement sporadique
- **Saisonnalité**: none
- **Tendance**: Stable mais volume quasi nul
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est limitée par une absence totale d'historique (une seule commande de 1 unité il y a plus de deux mois). ÉTAPE 1: Aucune donnée aberrante car le volume est au minimum (1u). ÉTAPE 2: La saisonnalité ne peut être corrélée sans données N-1 ou récurrence mensuelle. ÉTAPE 3: La tendance est techniquement stable à un niveau très bas, sans preuve de rotation régulière. ÉTAPE 4: Pour éviter tout surstockage sur un produit à rotation lente ou potentiellement en 'test', la recommandation se limite au strict minimum de 1 unité pour répondre au besoin ponctuel sans engagement de stock.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 2u
- 2025-08-26 07:26:18: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:53:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:26:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (27)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: -1.6u (-9j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | Stock prédit: 0.6u (9j restants) → prédit 3u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: -1.1u (-8j restants) → prédit 3u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: -2.6u (-56j restants) → prédit 1u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: -0.9u (-24j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -1.2u (-28j restants) → prédit 2u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 6 | Stock prédit: -1.2u (-37j restants) → prédit 6u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: -0.6u (-34j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: -0.6u (-34j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: -0.6u (-34j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -3.3u (-51j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 6 | Stock prédit: -3.7u (-77j restants) → prédit 6u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 6 | Stock prédit: -2.9u (-48j restants) → prédit 6u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 6 | Stock prédit: -3.9u (-65j restants) → prédit 6u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -4.3u (-66j restants) → prédit 1u mais non commandé |


---

## False Negatives (2)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock suffisant: 0.6u (40j restants > seuil 30j) |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock suffisant: 0.6u (40j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:10:00.167Z*
