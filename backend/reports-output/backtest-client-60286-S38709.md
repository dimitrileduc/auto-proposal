# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 51
- **Tokens**: 103,657 input + 28,831 output = 132,488 total
- **Coût**: $0.7434 (~74.34¢)
- **Coût par produit LLM**: $0.0146


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
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (28 produits)


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
- **Pattern temporel**: Irrégulier : ~7-13 jours entre commandes (lun/mer variables), dernier intervalle 28 jours (30/06→06/08)
- **Saisonnalité**: none
- **Tendance**: Stable : oscillation 1-2u sans tendance nette, moyenne 1.8u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Les 5 dernières commandes montrent un rythme irrégulier (intervalles de 8j, 7j, 12j, 19j puis 28j). Pas de pattern hebdomadaire fixe détectable (alternance lun/mer). Le dernier intervalle de 28j (30/06→06/08) est anormalement long, suggérant une possible période de fermeture estivale ou stock restant. 

**Quantités observées** : Oscillation systématique entre 1u et 2u (4 commandes à 2u, 1 seule à 1u). Aucun outlier détecté. La moyenne est de 1.8u.

**Décision** : La prédiction pour le 26/08 (20 jours après la dernière commande du 06/08) doit tenir compte du pattern dominant de 2u (80% des cas). L'absence de saisonnalité N-1 et la stabilité des volumes récents orientent vers la valeur modale. En agro B2B, ce produit de niche (tartinade aubergine) montre une demande régulière de réassort à 2u.

**Prédiction finale : 2 unités** (valeur modale cohérente avec le rythme de réapprovisionnement observé).

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
- **Pattern temporel**: Irrégulier avec intervalles variables (12-19 jours), tendance bi-mensuelle
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Historique de 4 commandes sur 3 mois (11/06, 23/06, 30/06, 06/08). Intervalles: 12j, 7j, puis 37j (rupture estivale probable). Pattern irrégulier sans jour fixe (lun/mer variables). Depuis la dernière commande (06/08), 20 jours se sont écoulés au 26/08, ce qui correspond au rythme naturel de ~12-19j observé hors période estivale.

**ANALYSE QUANTITATIVE**: Sur les 4 commandes: 3×2u et 1×1u. Moyenne = 1.75u. Aucun outlier détecté - toutes les quantités sont cohérentes pour un produit de niche (tartinade spécialisée). La dernière commande (2u) confirme le niveau de demande standard.

**SAISONNALITÉ**: Absence de données N-1, impossible d'identifier un pattern saisonnier. Le trou de 37 jours (juillet-août) suggère un ralentissement estival classique en B2B, mais la reprise début août (2u) indique un retour à la normale.

**DÉCISION**: Baseline de 1.75u arrondie à 2u car: (1) 75% des commandes = 2u, (2) dernière commande = 2u (donnée la plus récente), (3) intervalle de 20j cohérent avec le rythme pré-estival. Confiance medium car historique limité mais pattern quantitatif stable.

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
- **Pattern temporel**: Irrégulier (~10-16 jours, tendance mensuelle)
- **Saisonnalité**: none
- **Tendance**: Stable (2u dominantes, 1 commande à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les 5 dernières commandes montrent des intervalles variables (13j, 7j, 12j, 16j, 37j entre 26/05 et 06/08). Pas de pattern hebdomadaire fixe, mais une fréquence globale de ~2-3 semaines. La dernière commande date du 06/08 (mer.), soit 20 jours avant la date de prédiction (26/08 mardi).

**Analyse des quantités**: Sur les 5 commandes récentes, 4 sont à 2u et 1 seule à 1u (26/05). Aucun outlier détecté - les quantités sont homogènes et stables. La moyenne est de 1.8u, mais la médiane et le mode sont à 2u.

**Saisonnalité**: Aucune donnée N-1 disponible, donc pas d'effet saisonnier identifiable. Produit niche (Tartinade Mangue curry) avec demande régulière faible.

**Décision**: Le pattern dominant est 2u par commande. L'intervalle de 20 jours depuis la dernière commande est cohérent avec le rythme observé (10-16j en moyenne récente). La commande à 1u semble être une exception ponctuelle. Je recommande **2 unités**, quantité la plus probable et récurrente.

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
- **Pattern temporel**: Irrégulier avec dominance mercredi (3/5), intervalle moyen ~20j mais instable (13-28j)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u avec exception 1u en juillet
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le produit montre un pattern irrégulier avec 5 commandes sur 3 mois. Intervalles observés: 23/06→30/06 (7j), 30/06→09/07 (9j), 09/07→06/08 (28j). Dominance du mercredi (3/5 commandes) mais pas de cycle fixe. Dernière commande le 06/08 (mer.) → la prédiction pour le 26/08 (mar.) intervient 20 jours après, cohérent avec le rythme moyen.

**ANALYSE QUANTITATIVE**: Sur les 5 commandes: 4×2u et 1×1u (09/07). Pas d'outlier détecté - la commande de 1u peut être une réduction ponctuelle ou ajustement stock. Moyenne: 1.8u. Mode: 2u (80% des cas). Tendance récente: retour à 2u en août après l'exception de juillet.

**SAISONNALITÉ**: Aucune donnée N-1 disponible, impossible d'évaluer l'impact saisonnier. Produit tartinade (consommation potentiellement stable hors saison estivale).

**DÉCISION**: La date du 26/08 tombe un mardi (pas le mercredi privilégié) mais l'intervalle de 20j justifie une commande. Le pattern dominant est 2u (4/5 cas). L'exception de 1u en juillet semble ponctuelle. **Prédiction: 2 unités** - quantité modale et cohérente avec le dernier ordre. Confiance medium due au faible historique (5 points) et pattern temporel instable.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, espacements variables (13j, 7j, 9j, 28j, 13j) - Principalement mercredi et lundi
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u avec une exception à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: L'historique montre 5 commandes sur 3 mois avec des intervalles irréguliers (entre 7 et 28 jours). Les jours privilégiés sont mercredi (3 fois) et lundi (2 fois). La dernière commande date du 06/08 (mercredi), soit 20 jours avant la date de prédiction (26/08, mardi). Pas de pattern hebdomadaire fixe détectable.

**Analyse quantitative**: Sur les 5 dernières commandes, 4 sont à 2u et seulement 1 à 1u (30/06). Cette unique commande à 1u représente probablement un ajustement ponctuel de stock plutôt qu'un outlier promotionnel. La quantité dominante est clairement 2u (80% des cas).

**Saisonnalité**: Absence de données N-1, donc aucun impact saisonnier identifiable. Le produit (tartinade houmous) n'indique pas de forte saisonnalité intrinsèque en B2B.

**Décision**: En l'absence de pattern temporel strict mais avec une constance quantitative forte (2u), et considérant que nous sommes à ~20 jours de la dernière commande (cohérent avec la fréquence observée), la baseline de 2u est la plus probable. Pas d'élément suggérant une modification de ce niveau de demande.

**Prédiction finale: 2 unités** - Quantité modale et médiane de l'historique récent.

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
- **Pattern temporel**: Irrégulier - Intervalles variables (12j, 7j, 19j, 20j) avec concentration légère en début de semaine
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1-2 unités sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse étape par étape:**

1. **RYTHMIQUE:** L'historique montre 4 commandes sur ~2.5 mois avec des intervalles très variables (20j entre 11/06 et 30/06, 7j entre 23/06 et 30/06, puis 37j entre 30/06 et 06/08, et maintenant 20j jusqu'à la date de prédiction 26/08). Pas de pattern hebdomadaire fixe détectable. Le rythme moyen est d'environ 1 commande toutes les 2-3 semaines.

2. **OUTLIERS:** Aucun pic exceptionnel détecté. Les quantités oscillent naturellement entre 1u et 2u, ce qui est cohérent pour un produit de niche Bio en format 190g.

3. **TENDANCE:** Sur les 4 observations (2u, 2u, 1u, 2u), la moyenne est de 1.75u. La dernière commande (06/08) était de 2u. Pas de tendance haussière ou baissière nette - le produit semble avoir une demande de fond stable.

4. **SAISONNALITÉ:** Absence de données N-1 et période estivale actuelle. Les tartinades peuvent avoir une légère baisse en été, mais l'historique récent ne le confirme pas.

**DÉCISION:** Étant donné que:
- La dernière commande était de 2u (il y a 20j)
- Le pattern montre 3 commandes sur 4 à 2u
- L'intervalle depuis dernière commande (20j) correspond au rythme observé
- Aucun signal de baisse de demande

→ **Prédiction: 2 unités** (arrondi supérieur de la baseline 1.75, cohérent avec le mode statistique)

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec commandes espacées de 7-18 jours, prédominance lundi-mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec exception ponctuelle de 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: L'historique montre 5 commandes sur 3 mois (26 mai - 6 août), soit ~15 jours d'intervalle moyen. Les commandes arrivent principalement en début de semaine (lun-mer). Dernière commande le 6 août (mercredi), donc 20 jours d'écart au 26 août (mardi) - cohérent avec le pattern observé.

**Analyse quantitative**: Sur 5 commandes, 4 fois 2u et 1 fois 1u (26 mai - possiblement une commande de test ou rupture stock fournisseur). La norme claire est 2u par commande.

**Outliers**: Aucun pic significatif. La commande de 1u le 26/05 semble être l'exception plutôt qu'une tendance.

**Saisonnalité**: Absence de données N-1, impossible d'évaluer un effet saisonnier. La période récente (été) ne montre pas de variations liées à la saison.

**Tendance**: Demande stable autour de 2u. Produit de niche (bio, tartinade olives) avec rotation régulière mais faible volume.

**Conclusion**: La quantité la plus probable est 2u, correspondant à la demande récurrente observée. Le jour (mardi) est cohérent avec le pattern lun-mer. Confidence medium car historique limité (3 mois seulement) mais pattern clair.

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
- **Pattern temporel**: Irrégulier - intervalles variables (12j, 28j, 27j) sans pattern hebdomadaire clair
- **Saisonnalité**: none
- **Tendance**: Stable - demande constante à 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse Rythmique**: Les 4 commandes récentes montrent des intervalles variables (23/06→11/06=12j, 11/06→09/07=28j, 09/07→06/08=27j). Soit ~20j entre la dernière commande (06/08) et la date de prédiction (26/08), ce qui correspond au rythme observé. Pas de pattern hebdomadaire fixe (mer/lun/mer/mer).

**Filtrage Outliers**: Aucun événement exceptionnel détecté. Toutes les commandes sont parfaitement stables à 2 unités. Absence de données N-1 pour identifier une saisonnalité.

**Synthèse**: Demande B2B ultra-stable avec une régularité parfaite de 2 unités par commande sur les 3 derniers mois. L'intervalle de 20 jours depuis la dernière commande s'inscrit dans le rythme habituel (12-28j). Aucun élément n'indique une rupture de pattern ou un changement de volume.

**Décision**: La baseline de 2 unités représente à la fois la moyenne historique et la constante observée. En l'absence de tout facteur de variation, la prédiction la plus précise est 2 unités.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 5 à 28 jours (18/06→23/06: 5j, 23/06→30/06: 7j, 30/06→09/07: 9j, 09/07→06/08: 28j)
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1u et 2u, majorité à 2u (4/5 commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit présente un pattern irrégulier avec des intervalles variables (5 à 28 jours). La dernière commande date du 06/08 (mercredi), soit 20 jours avant la date de prédiction (26/08, mardi). Cet espacement est dans la fourchette observée.

**Analyse de tendance**: Sur les 5 dernières commandes, 4 sont de 2u et 1 seule de 1u (18/06). La quantité modale est clairement 2u. Aucun outlier détecté - toutes les valeurs sont cohérentes avec une demande faible et régulière.

**Absence de saisonnalité**: Pas de données N-1 pour identifier un pattern saisonnier. Les commandes récentes (juin-août) ne montrent pas de variation saisonnière marquée.

**Décision**: La baseline de 2u correspond à la demande dominante observée (80% des cas). L'intervalle de 20 jours depuis la dernière commande justifie une nouvelle commande. En l'absence de signal de changement structurel, la prédiction la plus probable est 2u.

Confidence "medium" car l'historique est court (5 points) et le pattern irrégulier, mais la stabilité des quantités commandées renforce la prédiction.

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
- **Pattern temporel**: Irrégulier - commandes espacées de 12-18 jours, sans jour fixe (lun./mer. alternés)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-2 unités sur 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse détaillée:**

1. **RYTHMIQUE IDENTIFIÉE**: 
   - 11 juin → 23 juin (12j) → 30 juin (7j) → 6 août (37j)
   - Pas de jour fixe : alternance lundi/mercredi
   - Rythme perturbé en juillet-août (écart de 37j inhabituel, possiblement congés)
   - 26 août = 20 jours après dernière commande → retour au rythme normal post-vacances

2. **PATTERN DE COMMANDE**:
   - 50% des commandes = 2 unités (11 juin, 6 août)
   - 50% des commandes = 1 unité (23 juin, 30 juin)
   - Moyenne arithmétique = 1.5u
   - **AUCUN outlier** détecté - volumes cohérents pour une tartinade spécialisée B2B

3. **CONTEXTE TEMPOREL**:
   - Absence de données N-1 → pas d'effet saisonnier identifiable
   - Produit de niche (tartinade betterave) → demande stable, pas de forte saisonnalité alimentaire
   - Dernière commande le 6 août = 2u → signal de reprise après période creuse

4. **DÉCISION**:
   - Le client revient à un rythme normal après l'écart estival
   - La dernière commande (la plus récente) = 2u indique le niveau actuel de demande
   - Baseline théorique = 1.5u, mais arrondi à 2u car:
     * Pattern B2B favorise les quantités rondes
     * Dernière transaction = 2u (signal fort)
     * Produit non périssable → pas de sous-commande systématique

**Conclusion**: 2 unités représente la quantité la plus probable, alignée sur le dernier comportement d'achat et la médiane haute de l'historique.

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
- **Pattern temporel**: Irrégulier - Intervalles variables (7j, 5j, 28j, 22j) avec prédominance mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à légère hausse - oscillation entre 1-2u avec maintien du niveau 2u récent
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: L'historique montre un pattern irrégulier sur 3 mois (18 juin→23 juin=5j, 23→30 juin=7j, 30 juin→9 juil=9j, 9 juil→6 août=28j). Les commandes tombent majoritairement en milieu de semaine (mercredi: 3 fois, lundi: 2 fois). La prédiction tombe un mardi (26 août), soit 20 jours après la dernière commande du 6 août.

**Tendance récente**: Les 2 dernières commandes (9 juil et 6 août) montrent une stabilisation à 2u, contre des quantités mixtes 1-2u en juin. Pas d'outliers détectés - toutes les commandes restent dans la fourchette normale du produit de niche.

**Absence de saisonnalité**: Aucune donnée N-1 disponible, impossible de valider un effet saisonnier. Le produit bio tartinade ne présente pas de pattern saisonnier évident dans les données récentes.

**Décision**: Baseline théorique de 1,6u (moyenne des 5 commandes), mais pondération forte sur les 2 dernières commandes (2u) qui montrent une consolidation du niveau de demande. L'intervalle de 20 jours depuis la dernière commande justifie une commande normale (pas de rattrapage). **Prédiction: 2 unités** - niveau récent stabilisé, confiance moyenne car pattern temporel peu prévisible mais volume cohérent.

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
- **Pattern temporel**: Irrégulier - 5 commandes sur 10 semaines (intervalles: 7j, 28j, 9j, 5j, 23j)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Le produit montre un pattern de commande irrégulier sans jour fixe (mélange de lun/mer). Les intervalles varient fortement (5 à 28 jours), suggérant un réapprovisionnement "à la demande" plutôt qu'un cycle fixe. Dernière commande le 06/08 (mer), soit 20 jours avant la date de prédiction (26/08 mardi).

**VOLUME** : Sur les 5 commandes récentes, 4 sont de 2u et 1 seule de 1u (18/06). Aucun outlier détecté - il s'agit d'un produit à très faible rotation (tartinade spécialisée ail des ours, produit de niche).

**SAISONNALITÉ** : Pas de données N-1, mais la période juin-août montre une activité continue sans rupture saisonnière notable. Le produit semble avoir une demande résiduelle stable.

**DÉCISION** : La moyenne des 3 dernières commandes (2, 2, 2) = 2u. La tendance de fond est à 2u par commande depuis juillet. L'intervalle de 20 jours depuis la dernière commande correspond au pattern observé. Prédiction : **2 unités** (quantité modale et la plus probable pour ce type de produit B2B à faible rotation).

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
- **Pattern temporel**: Mensuel (~28-30j), commandes régulières le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable - quantité constante à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- 3 commandes observées : 11/06 (mer.), 09/07 (mer.), 06/08 (mer.)
- Intervalles : 28 jours puis 28 jours → pattern mensuel très régulier
- Jour de commande systématique : mercredi
- Prochaine commande attendue : fin août, soit autour du 03/09 (28j après 06/08)
- La date de prédiction 26/08 (mardi) est à 20 jours de la dernière commande, donc légèrement en avance sur le cycle habituel

**ANALYSE QUANTITATIVE:**
- Quantité parfaitement stable : 2u à chaque commande
- Aucun outlier détecté
- Pas de données N-1 pour valider la saisonnalité, mais les 3 derniers mois montrent une demande constante
- Aucune rupture de tendance, aucune variation

**DÉCISION:**
Le client suit un pattern mensuel strict avec commandes de 2 unités le mercredi. Bien que la date de prédiction (26/08, mardi) soit légèrement anticipée par rapport au cycle observé (~28j = début septembre), si une commande intervient à cette date, elle suivra la même logique quantitative établie. La régularité parfaite des 3 dernières commandes (2u-2u-2u) ne laisse aucun doute sur la quantité attendue.

**Prédiction : 2 unités** (cohérent avec l'historique à 100%)

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
- **Pattern temporel**: Irrégulier - commandes espacées de ~21-28 jours avec écart de 20j puis 28j entre les 3 dernières
- **Saisonnalité**: none
- **Tendance**: Stable - quantités constantes à 1u sur toute la période observée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse du pattern:** Le produit montre un historique très court (3 commandes seulement) avec des quantités strictement identiques de 1 unité. Les intervalles sont irréguliers: 18/06→09/07 (21j), puis 09/07→06/08 (28j). La prédiction est pour le 26/08, soit 20 jours après la dernière commande du 06/08.

**Rythmicité:** Pas de pattern hebdomadaire fixe (toutes les commandes tombent un mercredi mais espacées de 3-4 semaines). Le rythme suggère des commandes mensuelles approximatives mais pas strictement calendaires.

**Absence de saisonnalité N-1:** Aucune donnée historique pour valider un effet saisonnier.

**Tendance:** Totalement stable en volume (1u systématiquement), aucun outlier détecté.

**Décision:** Avec 20 jours écoulés depuis la dernière commande et un rythme moyen de ~24-25 jours, nous sommes dans la fenêtre probable de réapprovisionnement. La constance absolue des quantités (1u sur 3 commandes) est un signal fort. 

**Prédiction: 1 unité** - reflète exactement le comportement historique observé. Confiance medium due au faible historique (seulement 3 points) mais pattern de quantité très cohérent.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (16j, 12j, 44j entre les 4 dernières commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité - moyenne autour de 5-6u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont irrégulières avec des intervalles variables (26/05→11/06: 16j, 11/06→23/06: 12j, 23/06→06/08: 44j). Pas de pattern hebdomadaire ou mensuel clair identifiable. La prédiction est pour le 26/08, soit 20 jours après la dernière commande du 06/08 - un intervalle dans la fourchette observée.

**FILTRAGE OUTLIERS**: La commande de 10u du 11/06 apparaît comme un pic ponctuel (2.5x la moyenne des autres). Les autres valeurs (2u, 4u, 6u) sont cohérentes. Moyenne sans outlier: (2+4+6)/3 = 4u. Moyenne globale incluant l'outlier: 5.5u.

**SYNTHÈSE**: Absence de données N-1, donc aucun effet saisonnier identifiable. La tendance récente montre une demande de fond stable autour de 4-6 unités. La commande la plus récente (6u au 06/08) reflète probablement le mieux la demande actuelle. 

**DÉCISION**: Baseline à 5u (médiane entre 4u et 6u des commandes normales). La prédiction de 5u représente la quantité la plus probable, équilibrant les commandes récentes hors outlier. Confiance moyenne due au faible historique et pattern irrégulier.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables: 12j, 16j, 43j, 92j. Pas de pattern hebdomadaire ou mensuel clair détectable
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité - Moyenne récente ~5.5u (hors outlier potentiel)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont espacées de manière très irrégulière (12, 16, 43, 92 jours), sans pattern hebdomadaire ou mensuel identifiable. Aucun jour de la semaine privilégié (lun, mer apparaissent 2x chacun). Depuis le 06/08, 20 jours se sont écoulés - dans la fourchette basse des intervalles observés.

**FILTRAGE OUTLIERS**: Le 10u du 11/06 se détache nettement (2.5x la moyenne des autres). Possible commande de rattrapage ou événement ponctuel. Les 3 autres commandes oscillent entre 2-6u.

**SYNTHÈSE**: Sans N-1 pour valider la saisonnalité, avec un historique court (4 points sur 3 mois) et irrégulier, la baseline s'établit autour de 4-5u (moyenne des commandes récentes hors outlier: (6+4+2)/3 = 4u, avec outlier: 5.5u). La dernière commande (6u le 06/08) étant récente et représentative, je retiens une baseline de 5u.

**DÉCISION**: En l'absence de pattern clair et avec historique limité, je privilégie une prédiction prudente basée sur la moyenne pondérée récente = **5 unités**. Confidence LOW en raison du manque de données et d'irrégularité forte.

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 5u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (16j, 12j, 44j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 4-6u (hors outlier)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes montrent un pattern irrégulier avec des intervalles très variables : 16 jours (11/06→23/06), 44 jours (23/06→06/08), puis 20 jours jusqu'à la date de prédiction (26/08). Pas de jour fixe identifiable (mix lun/mer). Le client semble commander selon ses besoins réels sans régularité stricte.

**FILTRAGE OUTLIERS**: La commande de 10u du 11/06 se détache clairement des autres (2u, 4u, 6u). C'est probablement un réassort exceptionnel ou une commande groupée. Les 3 autres commandes gravitent autour de 4-6u avec une moyenne de 4u.

**TENDANCE**: Sur les 3 commandes normales (hors outlier 10u), on observe : 2u → 4u → 6u, suggérant une légère progression. La dernière commande "normale" (6u le 06/08) est la plus récente et la plus représentative.

**SAISONNALITÉ**: Aucune donnée N-1 disponible. Produit bio premium thym/romarin - pas de saisonnalité forte attendue pour ce type d'article.

**DÉCISION**: En l'absence de pattern fixe et avec une tendance stable/légère hausse, je me base sur la moyenne pondérée des commandes normales avec poids fort sur la plus récente (6u). Baseline théorique = 5u (compromis entre 4u et 6u). Pas de rattrapage à prévoir car le délai de 20j reste dans la norme observée.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement sur 3 mois (intervalle ~28 jours entre juin et juillet)
- **Saisonnalité**: none
- **Tendance**: Hausse +100% (1u → 2u entre les 2 dernières commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Contexte ultra-limité** : Seulement 2 commandes historiques (11 juin: 1u, 9 juillet: 2u), sans données N-1 pour valider la saisonnalité.

**Analyse rythmique** : Intervalle de ~28 jours entre les 2 commandes. Si ce pattern se maintient, la prochaine commande serait attendue début août (~28j après le 9 juillet). La date de prédiction (26 août) représente un décalage de ~48 jours depuis la dernière commande, suggérant soit un retard, soit un rythme plus espacé.

**Tendance observée** : Doublement de la quantité (1u → 2u), mais avec un historique trop court pour confirmer s'il s'agit d'une vraie tendance haussière ou d'un ajustement ponctuel du besoin réel du client.

**Décision** : En l'absence de pattern fiable et avec une tendance récente montrant 2u à la dernière commande, je recommande **2 unités** comme prédiction la plus probable. C'est la dernière quantité observée, reflétant le besoin actuel apparent du client. Confidence LOW en raison du manque critique de données historiques pour valider ce choix.

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (6-12-9-39 jours), pas de pattern hebdomadaire clair
- **Saisonnalité**: none
- **Tendance**: Stable - quantités constantes à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 5 dernières commandes montrent des intervalles variables: 26 mai→11 juin (16j), 11→18 juin (7j), 18→30 juin (12j), 30 juin→9 juillet (9j). Pas de pattern hebdomadaire fixe détecté (commandes sur lun/mer). La prédiction pour le 26 août se situe 48 jours après la dernière commande du 9 juillet, ce qui suggère un possible rattrapage.

**FILTRAGE OUTLIERS:**
Aucun outlier détecté - toutes les commandes sont constantes à 1 unité. Comportement cohérent et stable en quantité.

**ABSENCE DE SAISONNALITÉ:**
Pas de données N-1 disponibles, donc aucun effet saisonnier identifiable. Produit de niche (energy drink bio) avec demande faible et régulière.

**SYNTHÈSE:**
Ce produit présente un comportement de "commande minimale récurrente" typique en B2B agroalimentaire pour des références de niche. Malgré l'intervalle long depuis la dernière commande (48j vs moyenne ~11j), le pattern historique montre systématiquement des commandes unitaires. Le client semble commander au besoin, probablement en fonction de sa rotation stock ou de demandes clients spécifiques.

**DÉCISION:** Prédiction de 1 unité - cohérent avec 100% de l'historique récent. Confiance moyenne car l'intervalle long crée une incertitude sur le timing exact, mais pas sur la quantité.

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (9-19 jours), prédominance mercredi/lundi, faible volume récurrent
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les intervalles entre commandes sont irréguliers: 26 mai→11 juin (16j), 11→18 juin (7j), 18→30 juin (12j), 30 juin→9 juillet (9j). Aucun pattern hebdomadaire fixe détecté, mais une légère préférence pour mercredi (3/5) et lundi (2/5). La date de prédiction (26 août, mardi) tombe 48 jours après la dernière commande du 9 juillet - un délai inhabituel qui suggère soit un arrêt temporaire, soit un besoin de réapprovisionnement imminent.

**Filtrage outliers**: Toutes les commandes récentes montrent une quantité constante de 1u. Aucun outlier détecté. Cette régularité parfaite indique probablement un besoin de test/échantillon ou une demande B2B très spécifique à faible volume.

**Synthèse**: Sans données N-1, impossible d'identifier un pattern saisonnier. La tendance récente est ultra-stable (100% des commandes = 1u). Le produit (boisson énergétique bio mango-passion) semble être une référence à rotation lente, possiblement en phase de test marché ou commande à la demande ponctuelle. 

**Décision**: La probabilité la plus forte est une commande de 1u si le besoin se matérialise, cohérente avec l'historique complet. Le délai de 48j depuis la dernière commande crée une incertitude (d'où confidence medium), mais la régularité parfaite du volume commande la prédiction de 1u.

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
- **Pattern temporel**: Irrégulier : intervalles variables (7-16 jours), mais prédominance mercredi (3/5 commandes). Dernière commande il y a 48 jours (rupture notable du rythme)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande sur tous les historiques récents, pas de variation quantitative
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Le client commande de manière irrégulière (intervalles de 7 à 16 jours entre mai et juillet), avec une préférence pour le mercredi (3/5 commandes). La dernière commande date du 09/07, soit 48 jours avant la date de prédiction (26/08), ce qui représente une rupture inhabituelle du rythme.

**Analyse quantitative** : Toutes les commandes historiques sont strictement de 1 unité. Aucune variation, aucun outlier détecté. Ce pattern ultra-stable suggère soit un besoin très régulé, soit des commandes de test/échantillons.

**Absence de saisonnalité** : Pas de données N-1 pour identifier des pics saisonniers. Les 3 derniers mois ne montrent aucun pattern saisonnier.

**Décision** : La longue interruption (48 jours) pourrait indiquer : (1) arrêt temporaire du besoin, (2) commande imminente de rattrapage, ou (3) changement de fournisseur. Cependant, la régularité parfaite de 1u à chaque commande passée indique que QUAND le client commande, c'est toujours 1u. Le mardi 26/08 correspond au jour de la semaine typique (proche du mercredi habituel). 

**Prédiction** : 1 unité, car l'historique montre une constance absolue des quantités commandées, même si l'incertitude porte sur le TIMING de la prochaine commande (d'où confidence medium).

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
- **Pattern temporel**: Données insuffisantes - Une seule commande en 3 mois (9 juillet)
- **Saisonnalité**: none
- **Tendance**: Indéterminé - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CRITIQUE DE LA SITUATION:**

**1. ANALYSE RYTHMIQUE:**
- Historique extrêmement limité : UNE SEULE commande disponible (6u le 9 juillet 2025)
- Intervalle entre dernière commande et date de prédiction : ~48 jours (9 juillet → 26 août)
- Impossible de détecter un pattern hebdomadaire ou mensuel fiable
- Aucune donnée N-1 pour valider la saisonnalité

**2. FILTRAGE DES OUTLIERS:**
- Pas d'outliers détectables avec un seul point de données
- La quantité de 6u semble modeste pour du B2B agroalimentaire (format canette)
- Pourrait indiquer : nouveau client, produit de niche, ou commande test

**3. CONTEXTE PROBLÉMATIQUE:**
- L'absence de commandes entre le 9 juillet et aujourd'hui (26 août) est préoccupante
- Deux hypothèses : 
  a) Client très occasionnel (risque de 0 commande)
  b) Commandes espacées de ~2 mois (auquel cas une commande serait attendue)

**4. DÉCISION:**
Face à l'incertitude maximale, j'applique le principe de la dernière valeur connue (6u) comme meilleure estimation par défaut. C'est la seule référence quantitative disponible. Toutefois, la probabilité d'une commande exactement le 26 août est faible vu l'irrégularité apparente.

**LIMITE MAJEURE:** Cette prédiction a une très faible fiabilité. Il faudrait au minimum 3-4 commandes pour établir un pattern minimal.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~21-30j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique : Les commandes sont espacées de ~21 jours (26 mai → 18 juin) puis ~21 jours (18 juin → 9 juillet). Cela établit un pattern mensuel approximatif. La prochaine commande attendue serait donc fin juillet/début août, et nous sommes le 26 août, soit ~48 jours après la dernière commande du 9 juillet - cela représente 2x le cycle habituel.

Analyse quantitative : Toutes les commandes historiques montrent systématiquement 1 unité, sans aucune variation. Aucun outlier détecté. Ceci suggère un besoin de réassort minimal et régulier, typique d'un produit à faible rotation (canette 330ml en niche).

Absence de saisonnalité N-1 : Pas de données N-1 pour valider un effet saisonnier estival. Les données récentes ne montrent aucune tendance haussière ou baissière - le volume reste constant à 1u.

Décision : Malgré le retard apparent par rapport au rythme habituel (ce qui pourrait suggérer un rattrapage), la stabilité absolue des quantités commandées (toujours 1u) et l'absence de pattern de rattrapage dans l'historique disponible me conduit à recommander 1 unité. Le client semble commander uniquement ce dont il a besoin immédiatement, sans stockage anticipé. Confidence moyenne car l'écart temporel inhabituel pourrait signaler soit un changement de comportement, soit simplement un besoin ponctuel reporté.

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
- **Pattern temporel**: Commandes très espacées (~21-30j), irrégulier, produit à faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Le produit RITCHIE Cola ZERO présente un historique très limité avec seulement 3 commandes sur les 3 derniers mois:
- 26/05 (lun) → 18/06 (mer): 23 jours d'écart
- 18/06 (mer) → 09/07 (mer): 21 jours d'écart
- 09/07 (mer) → 26/08 (mar): 48 jours d'écart

Pattern identifié: Produit à très faible rotation, commandes espacées de 3-4 semaines, toujours de 1 unité. Pas de jour fixe détecté (lun, mer variables).

**FILTRAGE OUTLIERS**: Aucun outlier détecté. Toutes les commandes sont de 1 unité, suggérant une demande de complément/dépannage plutôt qu'un produit stratégique.

**SAISONNALITÉ**: Pas de données N-1 disponibles. Aucun pattern saisonnier identifiable sur 3 mois. Impact: none.

**TENDANCE**: Demande ultra-stable à 1 unité par commande. Produit manifestement secondaire dans le catalogue client.

**DÉCISION**: Avec 48 jours depuis la dernière commande (09/07), on observe un allongement de l'intervalle. Cependant, la régularité absolue des quantités (100% à 1u) et l'absence de signaux de croissance indiquent que SI commande il y a le 26/08, elle sera de 1 unité. 

Baseline = 1u (demande de fond constante)
Prédiction finale = **1 unité**

Confiance medium car: historique limité (3 points) mais pattern très stable en volume.

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
- **Pattern temporel**: Irrégulier - intervalles variables (23j puis 21j puis 48j)
- **Saisonnalité**: none
- **Tendance**: Stable - demande unitaire constante à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre 3 commandes sur 3 mois avec des intervalles irréguliers: 26/05→18/06 (23j), 18/06→09/07 (21j), 09/07→26/08 (48j). Le pattern n'est pas fixe (ni hebdomadaire ni mensuel strict), mais les intervalles récents étaient ~3 semaines. Le prochain intervalle attendu (48j depuis dernière commande) suggère qu'une commande est due.

**ANALYSE QUANTITATIVE**: Toutes les commandes historiques sont strictement de 1 unité. Aucun outlier détecté. Il s'agit manifestement d'un produit à faible rotation, probablement commandé en petites quantités pour des besoins spécifiques ou tests.

**SAISONNALITÉ**: Aucune donnée N-1 disponible, impossible d'identifier un pattern saisonnier. L'impact saisonnier est considéré nul.

**TENDANCE**: Parfaitement stable à 1u par commande sur toute la période observée.

**DÉCISION**: Compte tenu du pattern ultra-stable (100% des commandes = 1u), de l'absence de saisonnalité détectable, et du fait que l'intervalle depuis la dernière commande (48j) dépasse largement le rythme habituel (~20-23j), une commande de **1 unité** est la prédiction la plus probable. Confiance moyenne car le rythme irrégulier rend l'exactitude de la date incertaine.

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
- **Pattern temporel**: Irrégulier - Intervalles variables (16j, 19j, 57j). Pas de pattern hebdomadaire ou mensuel clair.
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes de 1u principalement, une exception à 2u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre 3 commandes sur les 3 derniers mois avec des intervalles très irréguliers (16 jours entre mai-juin, 19 jours en juin, puis 57 jours depuis la dernière commande du 30 juin). Pas de pattern jour fixe détectable. La prochaine date de prédiction (26 août) se situe 57 jours après la dernière commande, ce qui correspond à l'intervalle actuel.

**FILTRAGE OUTLIERS**: Les quantités sont majoritairement de 1u (2 commandes sur 3). La commande de 2u du 11 juin est identifiée comme un outlier probable - possiblement un rattrapage ou une demande ponctuelle spécifique.

**SYNTHÈSE**: Sans données N-1 pour valider la saisonnalité, et avec un historique très limité (3 points), la baseline est calculée sur la demande de fond = 1u (quantité modale). Le produit semble être une référence à rotation lente avec demande unitaire standard. Aucun élément ne suggère une hausse structurelle.

**DÉCISION**: Quantité recommandée = 1u (demande de fond typique). Confiance medium car l'historique est court, mais le pattern 1u est cohérent (67% des commandes).

</details>


<details>
<summary><strong>27. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes très espacées (5-7 jours d'intervalle), pas de pattern hebdomadaire clair
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes unitaires constantes (1u systématiquement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les 3 commandes récentes montrent des intervalles de 5 jours (18→23 juin) puis 7 jours (23→30 juin). Pas de jour fixe identifié (mer., lun., lun.). Le rythme semble être ~5-7 jours entre commandes, sans pattern hebdomadaire strict. Au 26/08, soit 57 jours après la dernière commande du 30/06, il y a eu une rupture significative du rythme habituel.

**Filtrage outliers**: Aucun pic détecté. Toutes les commandes sont strictement de 1 unité, ce qui suggère soit des commandes de test/échantillon, soit un client à très faible volume avec demande ponctuelle.

**Synthèse**: Produit organique de niche (aloe vera grenade-myrtille) avec historique limité sur 12 jours seulement (18-30 juin). La rupture de 57 jours sans commande indique soit une saisonnalité estivale défavorable, soit un client occasionnel. En l'absence de données N-1 et avec seulement 3 points de données identiques (1u), la prédiction la plus probable reste 1 unité si le client reprend commande. Cependant, la longue période sans activité crée une incertitude sur la reprise effective, d'où une confiance medium plutôt que high.

</details>


<details>
<summary><strong>28. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 4u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - seulement 2 commandes en 3 mois (intervalle de 12 jours entre les deux)
- **Saisonnalité**: none
- **Tendance**: Baisse -60% (de 10u à 4u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Historique très limité avec seulement 2 commandes sur 3 mois (11 juin et 23 juin), soit un intervalle de 12 jours. Depuis la dernière commande du 23 juin, 64 jours se sont écoulés jusqu'au 26 août - rupture totale du pattern précédent. Aucun rythme clair identifiable (ni hebdomadaire, ni mensuel).

**FILTRAGE OUTLIERS**: La commande de 10u du 11 juin semble être une quantité inhabituelle (possiblement un test produit ou commande initiale). La commande suivante de 4u représente une baisse de 60%, suggérant que 10u était au-dessus de la demande réelle.

**SYNTHÈSE**: Absence totale de données N-1, historique ultra-court (2 points seulement), et rupture d'approvisionnement de 2 mois. La tendance observable montre une décroissance de 10u → 4u. Sans pattern clair et avec un délai aussi long depuis la dernière commande, le client pourrait soit avoir arrêté le référencement, soit commander ponctuellement. 

En privilégiant la donnée la plus récente (4u) comme référence de demande réelle du client, et en l'absence d'indicateurs de rattrapage ou de saisonnalité, je recommande **4 unités** comme quantité la plus probable. Confiance faible due au manque de données historiques.

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
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (20j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: 0.4u (4j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-17j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
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

*Rapport généré automatiquement le 2025-11-20T09:07:22.945Z*
