# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 55
- **Tokens**: 50,724 input + 68,939 output = 119,663 total


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
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 7.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 25 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Pattern temporel**: Rythme de 1 à 2 commandes par mois, principalement le lundi ou le mercredi.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Les données sont très homogènes avec des quantités de 1 ou 2 unités, aucune anomalie détectée. La moyenne de base est de 1,8u. ÉTAPE 2 : Absence de données N-1, mais la consommation est restée stable sur les 3 derniers mois malgré la période estivale. ÉTAPE 3 : La tendance est stable. L'intervalle entre les commandes varie de 7 à 28 jours (moyenne 14 jours). La dernière commande datant d'il y a 19 jours, un cycle est à renouveler. ÉTAPE 4 : En se basant sur la stabilité du produit (mode à 2u) et le délai depuis la dernière commande, une quantité de 2 unités permet de couvrir la demande sans risque de sur-stockage pour cette référence à faible rotation.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ toutes les 1 à 3 semaines (principalement lundi et mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1,75u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants entre 1 et 2 unités. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul sur la base des données actuelles. Étape 3: La tendance est stable à faible volume. On observe une pause en juillet mais une reprise début août sur le même rythme. Étape 4: Avec une moyenne de 1,75 et un historique de 2 unités sur la majorité des commandes, une recommandation de 2 unités permet de maintenir le stock sans risque de sur-stockage majeur sur ce produit à faible rotation. Étant donné le faible nombre de points de données, la confiance est faible.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes toutes les 2 à 3 semaines, principalement le lundi ou mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable à 2 unités par commande. Aucun outlier n'a été détecté. Malgré une absence de données N-1 pour confirmer la saisonnalité, le rythme de croisière sur les 3 derniers mois est régulier (environ une commande tous les 15-20 jours). La dernière commande datant du 6 août (il y a 19 jours), le besoin de réapprovisionnement arrive à échéance selon le cycle observé. La recommandation reste conservatrice sur la valeur modale de 2 unités pour éviter le surstockage sur un produit à rotation modérée.

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
- **Pattern temporel**: Rythme de commande fluctuant entre hebdomadaire (juin) et mensuel (juillet-août), alternant entre lundi et mercredi.
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique récent (5 commandes) montre une demande de fond très stable, oscillant presque exclusivement entre 1 et 2 unités (moyenne de 1,8u). Aucun outlier n'est détecté. Bien que nous manquions de données N-1 pour confirmer la saisonnalité, le profil 'Tartinade Tomato Basilico' est typiquement estival. Le rythme de commande s'est ralenti en août (dernière commande le 06/08, soit il y a 19 jours). Avec un délai moyen d'environ 3 semaines observé récemment, une nouvelle commande le 25/08 est cohérente avec le cycle actuel. La quantité de 2u est recommandée pour maintenir le stock sans risque de sur stockage sur un produit à faible rotation unitaire.

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
- **Pattern temporel**: Alternance entre un rythme hebdomadaire en juin et un rythme mensuel (env. 28j) sur juillet/août
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u par commande malgré un ralentissement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une grande stabilité du volume commandé (systématiquement 2u, sauf une exception à 1u). Il n'y a aucun outlier détecté. Le produit, bien que saisonnier par nature (houmous), ne montre pas de pic de volume mais plutôt un étalement de la fréquence entre juin et août. La dernière commande datant d'il y a 19 jours, et le volume habituel étant très faible, une recommandation de 2 unités permet de couvrir les besoins sans risque de surstockage pour ce produit de type tartinade.

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
- **Pattern temporel**: Rythme variable entre 1 et 4 semaines, préférentiellement le lundi et le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1.75u en moyenne)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des quatre dernières commandes montre une grande stabilité de volume (entre 1 et 2 unités) sans aucune anomalie statistique. Malgré l'absence de données N-1, le produit affiche une demande de fond constante. La dernière commande datant du 6 août (il y a 19 jours), et le cycle observé en juin étant plus serré (7-12 jours), nous sommes dans la fenêtre de réapprovisionnement logique. La recommandation de 2 unités permet de s'aligner sur le maximum observé tout en restant conservateur pour ce produit à faible rotation.

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
- **Pattern temporel**: Cycle bimensuel à hebdomadaire, majoritairement le lundi (3/5) et mercredi (2/5).
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune anomalie détectée, les volumes sont très faibles et constants (1 à 2 unités). ÉTAPE 2: Produit de type tartinade (apéritif), potentiellement lié à une saisonnalité estivale, mais l'absence de données N-1 limite l'analyse ; on reste sur la consommation réelle constatée. ÉTAPE 3: La tendance s'est stabilisée à 2 unités par commande depuis juin. La dernière commande date d'il y a 19 jours (6 août), ce qui suggère un besoin de réapprovisionnement imminent. ÉTAPE 4: Compte tenu de la stabilité des volumes et de l'intervalle depuis la dernière commande, une quantité de 2 unités permet de couvrir la demande habituelle sans risque de sur-stockage.

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier de 2 à 4 semaines, principalement le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune anomalie détectée, la demande est parfaitement constante à 2 unités par commande. Étape 2 : Malgré le profil estival du produit (Ananas Coco), aucune variation saisonnière n'est visible sur les 3 derniers mois, la demande reste stable. Étape 3 : La fréquence varie entre 12 et 28 jours ; la dernière commande remontant au 6 août (il y a 19 jours), nous sommes dans la fenêtre habituelle de réapprovisionnement. Étape 4 : La recommandation est de maintenir le volume historique de 2 unités pour couvrir le cycle de vente stable observé.

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
- **Pattern temporel**: Initialement hebdomadaire en juin, évoluant vers un cycle toutes les 3-4 semaines en juillet et août.
- **Saisonnalité**: none
- **Tendance**: Volume par commande stable à 2u, mais ralentissement de la fréquence de réapprovisionnement.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilité remarquable du volume par commande (80% des commandes à 2 unités). Bien que la fréquence ait ralenti depuis juin (passant de 3 commandes/mois à 1 commande/mois), le besoin unitaire reste constant. La dernière commande datant du 6 août (2u), et la date actuelle étant le 25 août (soit un intervalle de 19 jours), il est logique de commander 2 unités pour maintenir le stock sur le cycle de consommation actuel de 3 semaines constaté durant l'été.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ 1 à 2 fois par mois avec des intervalles de 7 à 37 jours
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que ce produit est un 'slow mover' avec des volumes de commande très faibles (1 ou 2 unités). Aucun outlier n'a été identifié. En l'absence de données N-1, l'impact saisonnier ne peut être quantifié, bien que le segment tartinade soit généralement estival. La tendance est stable. La dernière commande (2 unités le 06/08) remonte à 19 jours ; compte tenu de l'irrégularité du cycle, une recommandation de 2 unités permet de couvrir la demande potentielle des 3 prochaines semaines sans risque majeur de sur-stockage sur un tel volume.

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
- **Pattern temporel**: Rythme variable entre 7 et 20 jours, commandes principalement les lundis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.6u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les volumes sont constants entre 1 et 2 unités. Étape 2 : Absence de données N-1, mais la demande sur la période estivale reste stable sans pic de saisonnalité visible. Étape 3 : La tendance est stable. La dernière commande remonte au 06/08 (il y a 19 jours), ce qui correspond au cycle de réapprovisionnement observé. Étape 4 : Pour ce produit à faible rotation, une commande de 2 unités permet de couvrir le besoin habituel tout en limitant le risque de sur-stockage, tout en tenant compte du délai depuis la dernière livraison.

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
- **Pattern temporel**: Mensuel à bi-mensuel, principalement le lundi et mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une grande stabilité avec un volume récurrent de 2 unités par commande. Aucun événement promotionnel ou pic anormal (outlier) n'est identifié. Le rythme de commande semble ralentir légèrement en fréquence (passage d'un rythme hebdomadaire fin juin à un rythme mensuel en juillet/août), mais le volume par commande reste fixe à 2 unités. La dernière commande datant du 6 août (il y a 19 jours), un réapprovisionnement est pertinent pour la date du 25 août. Vu la nature périodique et le faible volume, on maintient la quantité habituelle.

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
- **Pattern temporel**: Cycle mensuel strict toutes les 4 semaines (28 jours), historiquement le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune anomalie détectée, la demande est parfaitement constante à 2 unités. Étape 2: Absence de données N-1, mais la stabilité parfaite sur les 3 derniers mois (période estivale) suggère une absence de saisonnalité marquée pour cette référence. Étape 3: Le rythme de commande est très régulier (tous les 28 jours). La commande actuelle intervient au bout de 19 jours, ce qui suggère un besoin de réapprovisionnement standard pour maintenir le stock de fond avant le prochain cycle. Étape 4: En suivant la tendance stable et le volume historique, une commande de 2 unités est préconisée pour couvrir les 4 prochaines semaines sans risque de sur-stockage.

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 3 à 4 semaines, commande habituellement le mercredi
- **Saisonnalité**: strong
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des trois derniers mois montre une stabilité totale avec des commandes unitaires (1u) effectuées toutes les 3 à 4 semaines le mercredi. Bien que le secteur des boissons fraîches soit sujet à une forte saisonnalité en août, le volume de ce client spécifique ne varie pas. L'intervalle depuis la dernière commande (19 jours) suggère que le stock arrive à épuisement selon son rythme habituel. Une recommandation de 1 unité est suffisante pour maintenir ce cycle régulier sans risque de sur-stockage.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 12 et 44 jours, principalement le lundi et mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 5-6u après normalisation
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 10u en juin est traitée comme un pic de stockage ou une anomalie ponctuelle (2x la moyenne des autres commandes). La demande de fond se situe autour de 4-6u. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le secteur des chips soit propice aux pics estivaux. ÉTAPE 3: On observe un retour à une fréquence plus courte en août (6u) après une absence totale de données en juillet. ÉTAPE 4: La moyenne globale est de 5.5u. Compte tenu de l'absence de visibilité long terme et de la volonté de rester conservateur en B2B, une commande de 5 unités est recommandée pour couvrir les 15-20 prochains jours sans saturer le stock.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, toutes les 2 à 6 semaines, alternance entre lundi et mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable à légère hausse (passage de 4u à 6u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond oscillant entre 2u et 6u après avoir écarté le pic de 10u de juin (potentielle promotion ou stockage de début d'été). Bien que nous soyons en fin de période estivale (saisonnalité forte pour les chips), l'absence de données N-1 incite à la prudence. La dernière commande enregistrée était de 6u il y a environ 3 semaines. Une recommandation de 5 unités permet de couvrir la tendance récente tout en restant conservateur pour éviter un sur-stockage en fin de saison, surtout avec un historique de seulement 4 points de données.

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycles irréguliers de 12 à 19 jours, alternance entre lundi et mercredi.
- **Saisonnalité**: weak
- **Tendance**: Stable entre 4u et 6u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 10u en juin est traitée comme un outlier (2,5x la moyenne basse), ramenant la demande de fond à 4u. ÉTAPE 2: Absence de données N-1, mais le secteur des chips suggère une fin de saison d'été ; impact estimé faible sur ce volume. ÉTAPE 3: La tendance récente après le trou de juillet montre une reprise à 6u début août. Le cycle de commande actuel (19 jours depuis la dernière saisie) indique un besoin de réapprovisionnement imminent. ÉTAPE 4: En croisant la demande de fond (4u) et la dernière commande (6u), une recommandation de 5u permet de maintenir le stock sans risque d'obsolescence en fin d'été.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle environ 28-30 jours), historiquement le mercredi
- **Saisonnalité**: none
- **Tendance**: Légère hausse (passage de 1u à 2u) sur volume très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très limité (2 dates). ÉTAPE 1: Aucune anomalie détectée, les volumes de 1 et 2 unités sont cohérents pour un produit de niche. ÉTAPE 2: Absence de données N-1, impact saisonnier considéré comme nul par défaut. ÉTAPE 3: Le produit semble suivre un rythme mensuel (juin, juillet). La commande de début août semble avoir été sautée, ce qui suggère un besoin imminent. ÉTAPE 4: Une quantité de 2 unités est recommandée pour couvrir la demande du mois à venir tout en tenant compte de la légère croissance observée lors de la dernière commande, tout en restant prudent face à la faible rotation globale.

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier tous les 7 à 16 jours (moyenne 11j), commandes passées exclusivement le lundi ou le mercredi.
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande, malgré une interruption prolongée de 47 jours.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des cinq dernières commandes montre une stabilité absolue de la quantité (systématiquement 1 unité). Il n'y a aucun outlier ni tendance à la hausse. Bien qu'il n'y ait pas eu de commande depuis le 9 juillet (soit un intervalle de plus de 6 semaines, bien supérieur au cycle habituel de 11 jours), rien dans les données ne justifie de commander plus d'une unité. La recommandation reste conservatrice à 1 unité pour répondre à la demande de fond tout en tenant compte de la faible rotation observée. La confiance est faible en raison de l'absence de données N-1 et de l'interruption prolongée de l'historique récent.

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier alternant entre 7 et 16 jours. Commandes effectuées exclusivement les lundis et mercredis.
- **Saisonnalité**: none
- **Tendance**: Volume stable à 1u, mais forte baisse de la fréquence (gap de 47 jours depuis la dernière commande).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, la demande est constante à 1 unité par commande. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité estivale, bien que le produit (boisson énergisante) y soit théoriquement sensible. Étape 3 : On observe une rupture brutale du rythme de commande habituel depuis le 9 juillet (plus de 6 semaines d'inactivité). Étape 4 : Étant donné que le volume historique n'a jamais dépassé 1 unité et que la reprise d'activité est incertaine après une longue pause, la prudence impose de rester sur la quantité minimale habituelle de 1 unité pour éviter le sur-stockage d'un produit possiblement en fin de vie ou à faible rotation.

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (environ tous les 10-12 jours) identifié en mai/juin avec une interruption notable depuis juillet.
- **Saisonnalité**: weak
- **Tendance**: Strictement stable à 1u par commande avec une baisse de la fréquence de réapprovisionnement.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité absolue dans le volume de commande (1 unité systématique). ÉTAPE 1: Aucun événement ou promotion n'a été détecté, la demande de fond est de 1u. ÉTAPE 2: Malgré l'absence de données N-1, le produit est resté stable durant les mois de forte chaleur, indiquant une faible sensibilité saisonnière pour ce client spécifique. ÉTAPE 3: On observe une rupture temporelle importante (plus de 45 jours sans commande depuis le 09/07), suggérant soit une rotation lente, soit un stock de sécurité suffisant. ÉTAPE 4: Étant donné qu'aucune commande n'a jamais dépassé l'unité, nous recommandons de maintenir 1 exemplaire pour couvrir le besoin immédiat sans risquer le surstockage, en tenant compte du jour de commande (lundi) qui coïncide avec les habitudes passées.

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
- **Pattern temporel**: Données insuffisantes (point unique)
- **Saisonnalité**: none
- **Tendance**: Stable (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée le 09/07/2025 (6 unités). ÉTAPE 1: Aucune valeur aberrante ne peut être identifiée, la base est fixée à 6u. ÉTAPE 2: Bien que le cola soit un produit saisonnier, l'absence de données N-1 empêche tout ajustement précis. ÉTAPE 3: La commande initiale date de 7 semaines, suggérant une rotation très lente ou un besoin ponctuel non récurrent. ÉTAPE 4: Conformément au principe de prudence pour éviter le sur-stockage en B2B sur un produit à faible visibilité, la recommandation se base sur le maintien du volume précédent.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle régulier de 21 à 23 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue avec des commandes systématiques d'une seule unité. Bien que le secteur agroalimentaire puisse suggérer une saisonnalité pour une limonade au citron, les données disponibles ne montrent aucune variation de volume entre mai et juillet. Le cycle habituel de 3 semaines a été dépassé (dernière commande il y a 47 jours), ce qui indique un besoin de réapprovisionnement immédiat. Compte tenu du volume très faible et constant, la recommandation reste fixée à 1 unité pour éviter tout surstockage inutile sur une référence à faible rotation.

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
- **Pattern temporel**: Cycle mensuel erratique (tous les 21 à 45 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Historique très stable avec des commandes systématiques d'une seule unité. Aucun outlier détecté. ÉTAPE 2 : Bien que le secteur agroalimentaire soit sensible à la saisonnalité estivale, la demande pour ce produit spécifique reste figée à 1 unité malgré la période de juin/juillet. ÉTAPE 3 : La tendance de volume est parfaitement plate. On observe toutefois un allongement du délai depuis la dernière commande (47 jours contre ~22 jours habituellement), indiquant un besoin de réapprovisionnement immédiat. ÉTAPE 4 : Compte tenu de la stabilité absolue du volume par commande (1u), il n'y a aucune justification pour augmenter le stock, malgré le retard de cycle.

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande cyclique environ tous les 21-23 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable et faible (1 unité par commande). L'étape 1 (De-eventing) ne révèle aucun outlier. L'étape 2 (Saisonnalité) ne montre aucun impact sur le volume malgré la période estivale, la consommation restant fixe. L'étape 3 (Tendance) indique une stabilité parfaite, bien que le délai entre la dernière commande (9 juillet) et aujourd'hui (25 août) soit anormalement long (double du cycle habituel). ÉTAPE 4 : Compte tenu de la faible rotation du produit et de la politique conservatrice pour éviter le sur-stockage sur des petits volumes, une recommandation de 1 unité est maintenue pour couvrir le besoin immédiat et relancer le cycle.

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 15 à 20 jours, principalement observé le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes oscillent entre 1 et 2 unités. Étape 2: Absence de données N-1 pour confirmer une saisonnalité estivale, bien que le produit (tartinade) y soit propice. Étape 3: La tendance est stable mais très faible, avec une absence notable de commandes durant les mois de juillet et août, suggérant un ralentissement ou un stock résiduel important chez le client. Étape 4: En raison du faible volume historique et de l'incertitude sur la reprise après 8 semaines d'arrêt, une recommandation conservatrice de 1 unité est préconisée pour minimiser les risques d'invendus.

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire identifié le lundi (observé en juin)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux commandes enregistrées en juin 2025, toutes deux de 1 unité le lundi. Bien que nous soyons un lundi (jour habituel), l'absence de données pour juillet et début août suggère une rotation très faible ou irrégulière. Sans preuve de croissance ou de saisonnalité spécifique (manque de données N-1), la recommandation reste conservatrice à 1 unité pour répondre à la demande de fond minimale identifiée.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme hebdomadaire observé fin juin, principalement le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et stable de 1 unité par commande. Bien qu'un cycle hebdomadaire semble se dessiner le lundi en juin, il existe une absence totale de données pour les mois de juillet et août 2025. Sans visibilité sur les 8 dernières semaines ni historique N-1 pour évaluer l'activité estivale, la prudence impose de recommander la quantité minimale de 1 unité. Ce choix évite le sur-stockage sur une référence à très faible rotation et permet de tester la reprise de la demande.

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
- **Pattern temporel**: Irrégulier (2 commandes en juin, puis aucune donnée pendant 2 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (10u à 4u) suivie d'une inactivité prolongée
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ÉTAPE 1: Nettoyage - La commande de 10u semble être un pic initial (peut-être un lancement ou stock de sécurité), la base réelle semble plus proche de 4u. ÉTAPE 2: Saisonnalité - Aucune donnée N-1 disponible ; l'impact ne peut être modélisé. ÉTAPE 3: Tendance - L'historique est très pauvre avec seulement deux points en juin et un silence de deux mois (juillet/août), suggérant une rotation très faible ou un produit sur catalogue dormant. ÉTAPE 4: Recommandation - Compte tenu de l'absence de données récentes et de la faible fréquence, je recommande la quantité la plus basse observée (4u) pour limiter le risque de sur-stockage tout en testant la reprise de la demande.

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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 5u (confidence: low)
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

**✅ Quantité LLM**: 5u (confidence: low)
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

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: 0.5u (5j restants) → prédit 3u mais non commandé |
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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 6 | Stock prédit: -4.1u (-79j restants) → prédit 6u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:25:07.458Z*
