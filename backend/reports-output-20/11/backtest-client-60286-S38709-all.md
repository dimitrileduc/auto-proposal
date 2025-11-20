# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 54
- **Tokens**: 109,980 input + 13,106 output = 123,086 total
- **Coût**: $0.5265 (~52.65¢)
- **Coût par produit LLM**: $0.0098


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.3% | 71 produits prédits, 30 corrects |
| **Rappel** | 100.0% | 30 produits réels, 30 détectés |
| **F1-Score** | 59.4% | Score équilibré global |

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
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 5 | 6 | 1.0 | 16.7% | ✅ partial | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 7 | 3 | 4.0 | 133.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Sans historique N-1, je me base uniquement sur les 3 derniers mois qui montrent une demande très stable et régulière : 5 commandes de 1-2 unités avec une médiane à 2u. Aucune commande exceptionnelle détectée, pattern de consommation constant mensuel. La quantité recommandée de 2u correspond à la commande typique observée (4 commandes sur 5).

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1, ce qui empêche d'identifier la saisonnalité. Les 4 commandes récentes (juin-août) montrent un pattern régulier de 1-2 unités par commande, avec une médiane de 2u. Sans historique de référence et face à un produit de niche (tartinade carotte-gingembre), je recommande la quantité médiane observée récemment, soit 2 unités, pour éviter le surstock sur un produit à DLC probablement courte.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit apparemment nouveau (aucun historique N-1) avec seulement 5 commandes sur 3 mois récents. La fréquence est d'environ 1 commande par mois avec une quantité stable de 2 unités (sauf 1 exception à 1u). Sans historique de référence et avec si peu de données, je recommande la médiane observée de 2 unités, qui correspond à la demande la plus fréquente. Confiance faible en raison du manque total d'historique et du nombre limité de commandes pour établir un pattern fiable.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Sans données N-1 pour établir une référence saisonnière, je me base uniquement sur les 5 dernières commandes de la période récente (juin-août). La demande est très stable avec une médiane de 2 unités et une seule commande à 1 unité. Je recommande 2 unités, mais avec confiance faible car l'historique est limité (pas de recul annuel) et le produit semble avoir un faible volume de rotation (commandes espacées).

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 mais 5 commandes récentes sur 3 mois montrent un pattern cohérent : majoritairement 2 unités par commande (4 fois sur 5), avec une seule commande à 1 unité. La fréquence est relativement régulière (environ toutes les 3-4 semaines). La médiane est 2u, et c'est aussi la valeur la plus fréquente, ce qui indique une demande de fond stable et modeste pour ce produit de niche (tartinade houmous). Aucun outlier détecté, toutes les commandes sont cohérentes.

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible pour établir une baseline saisonnière. Sur les 3 derniers mois, 4 commandes espacées montrent une demande très faible et régulière (médiane = 2u, moyenne = 1,75u). Pas de pattern saisonnier identifiable, pas de tendance marquée. Je recommande 2 unités, soit la médiane récente, mais avec une confiance faible vu l'historique limité et l'absence de référence annuelle.

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Sans données N-1, je m'appuie uniquement sur les 3 derniers mois qui montrent une demande très régulière de 2 unités par commande (4 commandes sur 5), avec une fréquence d'environ 2-3 semaines. Aucune saisonnalité détectable ni commande exceptionnelle. La médiane récente de 2u reflète une demande de fond stable et modeste pour ce produit bio de niche.

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Sans historique N-1 disponible, je me base uniquement sur les 3 derniers mois qui montrent une demande très régulière de 2 unités par commande, avec une fréquence d'environ toutes les 3-4 semaines. La constance parfaite (4 commandes identiques de 2u) suggère une demande de fond stable sans saisonnalité apparente. Je recommande 2 unités, correspondant à la médiane et au pattern observé, avec une confiance medium due à l'absence de référence N-1 pour valider la saisonnalité.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible, donc l'analyse se base uniquement sur les 3 derniers mois. Les 5 commandes récentes montrent un pattern stable autour de 2 unités (médiane = 2u), avec une seule commande à 1u. Pas de saisonnalité détectable ni de commandes exceptionnelles. La fréquence mensuelle suggère une demande régulière mais modeste pour ce produit de niche (tartinade basilic). Je recommande 2 unités, quantité la plus probable selon l'historique récent.

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Sans historique N-1, je m'appuie uniquement sur les 3 derniers mois qui montrent 4 commandes espacées (2u, 1u, 1u, 2u) avec une médiane de 1.5u. La fréquence est d'environ 1 commande par 3 semaines avec une quantité oscillant entre 1 et 2 unités. Je recommande 2 unités car c'est la valeur la plus fréquente observée, mais ma confiance est faible en l'absence de données N-1 pour valider la saisonnalité ou la demande structurelle de ce produit de niche (tartinade betterave).

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Sans historique N-1, je me base uniquement sur les 5 commandes récentes (3 mois) qui montrent une demande faible et régulière : 2-1-2-1-2 unités, soit une médiane de 2u. L'activité semble stable mais le produit est peu commandé. La confiance est faible car manque de recul historique pour identifier une saisonnalité ou tendance fiable, mais la prédiction de 2 unités correspond au pattern observé.

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Absence totale d'historique N-1, mais la période récente (3 mois) montre une demande très régulière et stable avec 4 commandes de 2u et 1 commande de 1u. La fréquence est environ mensuelle avec une quantité médiane de 2u. Aucun outlier détecté, le produit semble avoir une demande de niche constante. La confiance est moyenne car limitée à 3 mois d'historique seulement.

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: N/Au (Réel: 2u)</summary>

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
Aucun

**🧠 Raisonnement LLM:**
Absence de données N-1 mais la période récente (3 mois) montre une commande régulière et constante de 2 unités par mois, sans aucune variation. Ce pattern mensuel récurrent suggère une demande de fond stable et prévisible pour ce produit de niche (tartinade lentilles curry). Sans élément saisonnier détectable ni variation de tendance, je recommande la médiane observée de 2 unités.

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 et seulement 3 commandes unitaires récentes sur 3 mois, espacées d'environ 1 mois chacune. Le produit montre une demande très faible et régulière (1 unité/mois), sans pattern saisonnier détectable ni événements exceptionnels. La médiane des commandes récentes est 1u, ce qui représente la quantité la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: N/Au (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
10u

**🧠 Raisonnement LLM:**
Aucun historique N-1 disponible, seulement 4 commandes récentes sur 3 mois. La commande de 10u du 11 juin apparaît exceptionnelle comparée aux autres (2u, 4u, 6u). La médiane des commandes normales suggère une demande de fond autour de 4-6 unités. Sans référence saisonnière ni tendance établie, je recommande 5u comme quantité la plus probable, avec une confiance faible due au manque de données historiques.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: N/Au (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
10u

**🧠 Raisonnement LLM:**
Absence totale d'historique N-1 et seulement 4 commandes récentes sur 3 mois rendent la prédiction très incertaine. Les quantités oscillent entre 2u et 6u (baseline), avec un pic à 10u mi-juin probablement exceptionnel. En l'absence de pattern saisonnier identifiable et avec une médiane récente autour de 5u, je recommande 5 unités, mais la confiance reste faible compte tenu du manque de données structurantes.

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 5u vs Médiane: N/Au (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
10u

**🧠 Raisonnement LLM:**
Produit apparemment nouveau sans historique N-1, donc impossible d'évaluer la saisonnalité. Sur les 3 derniers mois, la médiane est de 5u (en écartant le pic de 10u qui semble ponctuel). Les commandes récentes (6u, 4u, 2u) montrent une demande modeste et stable autour de 4-6 unités. Je recommande 5 unités comme quantité la plus probable, avec une confiance faible due au manque d'historique profond.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes très récentes (1u et 2u) sur les 3 derniers mois. Cela suggère soit un produit en phase de lancement, soit une référence à très faible rotation. Sans historique saisonnier et avec une demande sporadique minime, la médiane récente (1,5u) arrondie à 1u représente la prédiction la plus réaliste. Confiance faible due au manque critique de données pour établir un pattern fiable.

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Aucune donnée N-1 disponible pour établir une référence saisonnière. Les 5 dernières commandes sur 3 mois montrent une régularité parfaite (1u à chaque fois) avec une fréquence d'environ 2-3 semaines. Sans historique profond et face à ce pattern très limité, je recommande 1 unité pour la prochaine commande, cohérent avec la demande observée mais avec une confiance faible due au manque de recul.

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Aucune donnée N-1 disponible pour établir une référence saisonnière. Les 5 dernières commandes sur 3 mois montrent une régularité constante de 1 unité par commande, avec une fréquence irrégulière (toutes les 1-3 semaines). Sans historique profond et avec une demande ultra-faible, je recommande 1 unité pour cette référence de niche (boisson énergétique bio) qui présente clairement un écoulement très lent et régulier.

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Sans historique N-1, je m'appuie uniquement sur la période récente qui montre une demande ultra-régulière de 1 unité par commande sur 5 occasions en 3 mois, soit environ 1,5-2u/mois. Il s'agit manifestement d'un produit à très faible rotation, probablement en phase de test ou référencement récent. La recommandation de 1 unité reflète le pattern observé, mais la confiance est faible en raison de l'absence totale d'historique de référence pour valider une quelconque saisonnalité ou tendance de fond.

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 6u vs Médiane: N/Au (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Situation très limitée avec une seule commande récente de 6 unités et aucun historique N-1 pour contextualiser. Sans données de référence, impossible d'identifier une saisonnalité ou tendance fiable. Je recommande 6 unités par défaut en me basant sur la seule observation disponible, mais avec une confiance faible nécessitant un suivi rapproché dès les prochaines commandes.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 et seulement 3 commandes unitaires sur les 3 derniers mois (1u chacune, environ 1 par mois). Il n'y a pas de pattern saisonnier identifiable ni de tendance marquée. La demande semble très faible et sporadique. Je recommande 1 unité basée sur la médiane récente, avec une confiance faible vu le manque d'historique robuste.

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 et seulement 3 commandes récentes très régulières (1u toutes les 3-4 semaines). Le pattern récent suggère une demande sporadique très faible et stable, typique d'un produit de niche ou en phase de test. Sans historique de saisonnalité et avec une fréquence mensuelle constante, je recommande 1 unité, mais la confiance est faible en raison du manque de profondeur historique.

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 pour établir une saisonnalité ou demande de fond historique. Les 3 derniers mois montrent un pattern très régulier : 1 unité tous les ~20-30 jours, sans variation ni événement exceptionnel détectable. Face à cette demande ultra-faible et stable, je recommande 1 unité pour couvrir le cycle habituel observé, mais ma confiance reste faible en raison du manque d'historique profond et du volume minimal qui rend chaque commande potentiellement volatile.

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 et seulement 3 commandes sur les 3 derniers mois (1u, 2u, 1u), ce qui suggère une demande très faible et sporadique. La médiane récente est de 1u, avec un maximum observé de 2u. Aucun pattern saisonnier détectable ni tendance claire. Le produit semble avoir une rotation très lente en B2B, je recommande une quantité minimale de 1u pour tester la demande sans risque de surstock.

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 et seulement 2 commandes unitaires sur 3 mois récents (juin). Pattern très sporadique suggérant une demande marginale ou un produit en phase de test/lancement. La médiane récente indique 1 unité par commande avec fréquence très faible (2 commandes en 3 mois). Je recommande 1 unité pour éviter surstock sur ce produit à rotation extrêmement lente, tout en permettant de servir une potentielle commande ponctuelle.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: N/Au (Réel: 1u)</summary>

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
Absence totale de données N-1 rendant impossible l'identification de saisonnalité. Les 3 commandes récentes (juin 2025) montrent un pattern très régulier de 1 unité par commande, suggérant une demande faible et stable, possiblement un produit en test ou niche. Je recommande 1 unité car c'est la quantité récurrente observée, mais la confiance est faible en raison du manque d'historique et du contexte limité (aucune commande en juillet-août visible).

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 7u vs Médiane: N/Au (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 4u (133.3%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Produit très récent sans historique N-1, seulement 2 commandes observées (4u et 10u en juin). La médiane serait 7u, ce qui représente un point central raisonnable. Confiance faible car données insuffisantes pour établir un pattern fiable - il s'agit probablement d'une phase de lancement ou test produit.

</details>




---

## False Positives (41)

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
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (20j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: 0.4u (4j restants) → prédit 3u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-17j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: -1.9u (-31j restants) → prédit 1u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: -1.9u (-31j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.9u (-31j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: -1.9u (-31j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 3 | Stock prédit: -2.1u (-19j restants) → prédit 3u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | Stock prédit: -0.7u (-8j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: -2.9u (-47j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: -2.9u (-47j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Stock prédit: -2.9u (-47j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -2.9u (-47j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -7.4u (-59j restants) → prédit 2u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-19T20:03:28.751Z*
