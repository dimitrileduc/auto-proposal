# Rapport Backtest - Client Tirtiaux Fruits srl

## Contexte

- **Client** : Tirtiaux Fruits srl (ID: 17819)
- **Commande réelle** : S39691
- **Date commande** : 2025-10-14 13:40:25
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 28
- **Tokens**: 27,223 input + 8,722 output = 35,945 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 32 produits prédits, 24 corrects |
| **Rappel** | 100.0% | 24 produits réels, 24 détectés |
| **F1-Score** | 85.7% | Score équilibré global |

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
| **MAE** | 0.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 58.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 63.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 32.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
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

## True Positives (24)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 10 | 1 | 9.0 | 900.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (17 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 4 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation extrêmement stable et faible. ÉTAPE 1: Aucune commande ne dépasse le seuil d'outlier (max 3u), la demande de fond est de 2 unités par cycle. ÉTAPE 2: La saisonnalité est faible, bien qu'on observe un léger pic à 3u en automne N-1 (septembre/octobre), les volumes restent marginaux. ÉTAPE 3: La tendance récente est parfaitement stable avec les deux dernières commandes à 2u, respectant le cycle mensuel. ÉTAPE 4: La date actuelle (lundi) correspond parfaitement au rythme historique. Étant donné la faible vélocité du produit (Tartinade 190g), une commande de 2 unités couvre le besoin mensuel habituel sans risque de surstockage.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique itérative (cycle irrégulier long)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité (fréquence raréfiée)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune commande anormale détectée, le produit se vend systématiquement à l'unité (1u). Étape 2 (Saisonnalité): Pas de corrélation saisonnière visible entre 2024 et 2025 à la même période (septembre/octobre). Étape 3 (Tendance): Le volume par commande est parfaitement stable (1u), bien que la fréquence soit faible avec seulement une commande enregistrée le mois dernier. Étape 4 (Recommandation): En suivant la demande de fond historique et la tendance récente, une commande de 1 unité est recommandée pour répondre au besoin ponctuel sans générer de sur-stockage inutile pour ce produit à rotation lente.

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ tous les 30 à 60 jours), majoritairement le lundi.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse historique montre une demande extrêmement stable et unitaire (1 unité par commande). L'étape 1 (De-eventing) ne révèle aucun outlier, toutes les commandes étant identiques. L'étape 2 (Saisonnalité) n'indique aucune corrélation saisonnière spécifique malgré le secteur agroalimentaire, le produit se comportant comme une référence de fond de rayon à faible rotation. L'étape 3 (Tendance) confirme une stabilité parfaite à 1u, avec un rythme de commande espacé. La dernière commande datant du 08/09, le délai de 35 jours est cohérent avec le cycle habituel. La recommandation finale est de maintenir 1 unité pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30-34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique très court et une rotation extrêmement faible (1 unité par mois environ). ÉTAPE 1: Aucune valeur aberrante n'est détectée sur les deux commandes de 1u. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, bien que le secteur agro bio puisse varier, le volume actuel est trop faible pour un ajustement significatif. ÉTAPE 3: La tendance est strictement stable. ÉTAPE 4: Le cycle suggère une commande toutes les 4 à 5 semaines. La dernière commande datant du 08/09, nous sommes dans la fenêtre de réapprovisionnement habituelle (35 jours après). Une quantité de 1u est recommandée pour maintenir le stock minimal sans risque de péremption ou de sur-stockage sur un produit à rotation lente (slow mover). L'indice de confiance est faible en raison de la pauvreté de l'historique (2 points de données).

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes ponctuelles très espacées (cycle de 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique pour cette référence, avec seulement 3 commandes en 18 mois. Aucune saisonnalité n'est détectable compte tenu du faible volume de données. La dernière commande date d'il y a plus de 2 mois (août 2025). En l'absence de tendance à la hausse et pour éviter le sur-stockage sur un produit à faible rotation, une quantité minimale de 1 unité est préconisée pour répondre au besoin ponctuel identifié ce lundi.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (sporadique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune valeur aberrante détectée car l'historique ne contient qu'un seul point de donnée (1u). Étape 2 : Pas de données N-1 pour évaluer la saisonnalité, mais le segment 'chips premium' suggère une demande stable. Étape 3 : La tendance n'est pas calculable statistiquement, mais le volume de 125g indique un produit de niche ou de faible rotation. Étape 4 : En l'absence de récurrence (une seule commande il y a 2 mois), la recommandation reste conservatrice à 1 unité pour répondre à une demande ponctuelle sans risque de sur-stockage sur un produit bio à Date Limite de Consommation.

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 à 45 jours, principalement en début de semaine (lundi/mardi)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen de 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les quantités (1u-3u) sont homogènes. Étape 2 (Saisonnalité): Activité modérée mais présente en septembre-octobre l'an dernier (commandes de 1u et 2u). Étape 3 (Tendance): La dernière commande date d'août (2u), suggérant un besoin de réapprovisionnement après un cycle de 2 mois. Étape 4 (Recommandation): La moyenne pondérée et le mode historique se situent à 2. Pour maintenir le cycle sans risque de sur-stockage sur un produit à rotation lente, la quantité de 2 unités est optimale.

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle à bimensuelle (cycle 30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants entre 1 et 2 unités. Étape 2: Faible saisonnalité observée, bien que les données N-1 montrent des commandes régulières en fin d'année (nov-déc). Étape 3: Tendance stable. La dernière commande remonte à début août (il y a 70 jours), suggérant une rupture probable du stock tampon ou un besoin de réapprovisionnement imminent après un cycle long. Étape 4: En suivant la logique conservatrice et la tendance historique de fin d'année (2u en nov/déc 2023), une commande de 2 unités est recommandée pour couvrir la période à venir sans risque de sur-stockage majeur, d'autant plus que le produit est une tartinade avec une DLC généralement gérable en B2B analytique anonymisé. La confiance reste faible en raison du manque de données sur les 3 derniers mois (une seule commande). Toute commande supérieure à 2u serait risquée au vu de l'historique de rotation lente (low rotation). Elle permet d'anticiper le flux de fin d'année observé en N-1 (nov/déc). Aucun outlier n'est à exclure, le volume de 2 unités étant le plafond historique de commande directe sur ce SKU. La demande de fond est estimée à 1.5u par cycle de commande (moyenne historique stable). La prédiction finale est de 2u pour assurer la disponibilité sur le mois d'octobre/novembre. La date actuelle (lundi) correspond aux habitudes historiques de passation d'ordre pour ce client spécifique sur ce produit (Lundi/Mardi). On privilégie 2u car la dernière commande est lointaine, supposant un stock à zéro chez le client final. Conclusion: Quantité de 2 unités recommandée pour renouveler le stock tampon face à un cycle de réapprovisionnement long constaté ces derniers mois. Risque de sur-stockage minimal car volume faible (2u).

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois, principalement le lundi/mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande avec ralentissement de fréquence
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse des historiques montre une demande de fond très stable de 1 unité par commande. L'outlier de 2u identifié en 2023 semble isolé. Bien que la fréquence de commande ait ralenti (dernière commande en août 2025), le volume par commande reste constant à 1u. On ne note aucune saisonnalité marquée (produit type tartinade, stable sur l'année N-1). La date actuelle (lundi) correspond parfaitement au cycle historique des commandes. Une recommandation conservative de 1 unité suffit pour couvrir le besoin sans risque de sur-stockage, compte tenu de la faible rotation récente.

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 4 à 5 semaines)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une demande de fond stable de 1 unité par commande, passant occasionnellement à 2 unités depuis fin 2023. ÉTAPE 1: Aucune commande n'est identifiée comme promotionnelle (outlier), les volumes restent très bas (1-2u). ÉTAPE 2: Pas de saisonnalité marquée en N-1 sur la période octobre/novembre. ÉTAPE 3: La tendance récente montre une commande de 2u en août, mais le rythme est espacé (dernière commande il y a 2 mois). ÉTAPE 4: Étant donné la faible fréquence et le risque de sur-stockage sur un produit bio à rotation lente, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans immobiliser de stock inutilement.

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 30 et 60 jours, principalement le lundi
- **Saisonnalité**: weak
- **Tendance**: Inactivité critique (aucune commande depuis > 1 an)
- **Outliers détectés**: 2u, 2u

**🧠 Raisonnement LLM:**
Étape 1: La demande de fond historique après retrait des pics de 2u (avril et mai 2024) est de 1u. Étape 2: Faible saisonnalité observée, bien qu'une activité ait été notée en automne N-1. Étape 3: Tendance très incertaine car aucune commande n'a été passée durant les 3 derniers mois ni même depuis juin 2024. Le produit semble être en fin de vie ou sur un cycle de rotation très lent. Étape 4: En l'absence de données récentes, on recommande la quantité minimale de 1u pour tester la reprise de la demande sans risque de sur-stockage sur un produit potentiellement dormant.

</details>


<details>
<summary><strong>12. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande sporadique (tous les 3-4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre un produit à très faible rotation (Slow Mover) avec une demande constante de 1 unité par commande. 1. De-eventing : Aucune valeur aberrante n'est détectée. 2. Saisonnalité : Aucun pattern saisonnier ne ressort de l'historique N-1 (février, mai, novembre). 3. Tendance : Le volume est stable mais la fréquence est extrêmement faible avec une absence totale de commandes sur les 3 derniers mois. 4. Recommandation : Compte tenu de la nature du produit (Mayonnaise 200ml) et de l'absence de consommation récente, on maintient la commande minimale de 1 unité pour couvrir une éventuelle demande ponctuelle sans risque de sur-stockage important.

</details>


<details>
<summary><strong>13. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.15u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (cycle ~30-45 jours), principalement le lundi
- **Saisonnalité**: weak
- **Tendance**: Baisse d’activité (0 commande sur les 3 derniers mois)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage effectué sur le pic de 3u (février). La demande de fond oscille entre 1u et 2u. Étape 2: Faible impact saisonnier visible, bien que les données de fin d'année 2023 montrent un léger usage en novembre. Étape 3: Absence totale de commandes récentes sur les 3 derniers mois, suggérant soit une perte de référencement, soit une rotation très lente du produit. Étape 4: En l'absence de données récentes, nous recommandons la quantité minimale de 1 unité pour tester le réapprovisionnement sans risque de sur-stockage sur un produit à fréquence de rotation déclinante.

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, intervalle long de 3 à 4 mois
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune anomalie détectée, les volumes sont très faibles (1-2u), représentatifs d'une demande de niche. Étape 2 : Pas de saisonnalité visible sur les 4 points de données N-1; le produit semble répondre à des besoins ponctuels plutôt qu'à des cycles saisonniers. Étape 3 : Absence totale de commandes sur les 3 derniers mois, suggérant une rotation très lente ou un dé-référencement de fait. Étape 4 : En l'absence d'historique récent et vu la faible vélocité passée, la recommandation est fixée au minimum de 1 unité pour tester la reprise de la demande sans risque de sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>15. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier, historiquement en début de mois
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (moyenne 2.6u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation lente avec un cycle de commande d'environ 30 jours, généralement en début de mois. ÉTAPE 1: La commande de 4u en février est traitée comme un léger outlier, la demande de fond se situant entre 2 et 3 unités. ÉTAPE 2: On observe une faible saisonnalité avec une présence historique en septembre/octobre (N-1). ÉTAPE 3: Malgré l'absence de données sur les 3 derniers mois (possible arrêt ou référencement saisonnier), la tendance historique reste stable à environ 2.6 unités par commande. ÉTAPE 4: Pour le 13/10/2025, nous recommandons 3 unités pour couvrir le besoins mensuel habituel tout en sécurisant la disponibilité après une période d'inactivité, restant conservateur sur un produit de type tartinade.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Produit nouveau ou inactif (aucune commande passée)
- **Saisonnalité**: none
- **Tendance**: Inexistante (absence de données historiques)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun historique disponible, impossible d'identifier des outliers ou une demande de fond. Étape 2 : Pas de données N-1 pour évaluer la saisonnalité spécifique, bien que les chips bio puissent avoir une demande accrue lors d'événements festifs. Étape 3 : Absence de tendance récente. Étape 4 : En l'absence totale de données, une approche ultra-conservatrice est adoptée. La recommandation de 1 unité est une commande de test pour amorcer le référencement du produit en rayon et observer la rotation réelle (Sell-out) sans risque de sur-stockage ou de perte.

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 10u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: low)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 9u (900.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifié (données manquantes)
- **Saisonnalité**: none
- **Tendance**: Inconnue - Premier référencement ou reprise après arrêt prolongé
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES : 1. DE-EVENTING : Aucune donnée historique fournie, impossible d'isoler des anomalies. 2. SAISONNALITÉ : Sans historique N-1 ni données récentes, l'impact saisonnier est indéterminable. 3. TENDANCE : Absence totale de commandes sur les 3 derniers mois. 4. RECOMMANDATION : Dans un contexte B2B pour un produit sec (chips), l'absence de données suggère soit un lancement de produit, soit une rupture de flux prolongée. La recommandation de 10 unités constitue une 'quantité de test' prudente (carton standard ou stock de sécurité minimal) pour réamorcer la pompe sans risque de sur-stockage majeur sur un nouveau produit.

</details>




### 📊 Données d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 2u
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 3u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 2u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 2u
- 2024-02-02 07:19:09: 1u
- 2024-01-09 12:58:28: 2u
- 2023-12-05 08:08:03: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-12-05 08:08:03: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:37:56: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 3u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-12-05 08:08:03: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 2u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-11-07 08:22:06: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 4u
- 2024-01-09 12:58:28: 3u
- 2023-12-05 08:08:03: 3u
- 2023-11-07 08:22:06: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: -0.5u (-9j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -0.3u (-20j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: -0.6u (-35j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: -0.6u (-22j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:57.781Z*
