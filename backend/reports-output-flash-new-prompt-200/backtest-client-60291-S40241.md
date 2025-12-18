# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S40241
- **Date commande** : 2025-11-12 09:14:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 21,060 input + 7,845 output = 28,905 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.0% | 27 produits prédits, 17 corrects |
| **Rappel** | 73.9% | 23 produits réels, 17 détectés |
| **F1-Score** | 68.0% | Score équilibré global |

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
| **MAE** | 0.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 32.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (17)

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
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, transition du mercredi vers le mardi
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u > 2u > 3u > 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier, les volumes étant faibles et cohérents (1-4u). Étape 2: Pas de données N-1 pour confirmer une saisonnalité, mais le secteur agro B2B suggère une stabilité hors pics estivaux. Étape 3: On observe une migration du jour de commande du mercredi vers le mardi. La tendance est à la baisse sur les deux dernières semaines (3u puis 1u). Étape 4: La moyenne lissée est de 2.4 unités. Compte tenu de la baisse récente à 1u et de l'absence de signaux de croissance, une approche conservatrice de 2 unités est recommandée pour couvrir la semaine sans surstocker ce produit de niche.

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 4u à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle hebdomadaire stable. ÉTAPE 1: La commande de 4u en septembre est traitée comme un outlier car elle double la moyenne de fond. ÉTAPE 2: Données N-1 absentes, pas d'impact saisonnier flagrant identifié sur ce volume micro. ÉTAPE 3: On observe un glissement du jour de commande (mercredi vers mardi) et une tendance à la baisse sur les deux dernières semaines (3u puis 1u). ÉTAPE 4: La demande de fond se situe à 2u. Malgré la baisse à 1u la semaine dernière, une recommandation de 2u permet de sécuriser le stock sans risque de sur-stockage massif sur ce format verre.

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, approx. bi-mensuel (15-30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : La commande de 1u le 01/10 est traitée comme un outlier (possible reliquat ou ajustement), la demande de fond se stabilise à 5u. Étape 2 (Saisonnalité) : Pas de données N-1, mais le produit (mélange de noix vrac) est généralement stable hors période de fêtes de fin d'année qui approche. Étape 3 (Tendance) : La fréquence semble s'accélérer avec une commande exactement 7 jours après la précédente (04/11), suggérant un besoin hebdomadaire naissant ou une reconstitution de stock. Étape 4 (Recommandation) : On maintient la quantité nominale de 5u observée lors des pics de consommation pour couvrir la semaine à venir sans risque de sur-stockage massif sur un produit vrac.

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ toutes les 7 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur les deux points de données, la base est fixée à 5 unités. Étape 2: Absence d'historique N-1 pour confirmer une saisonnalité, bien que les fruits à coque soient stables en fin d'année. Étape 3: On observe une accélération soudaine du rythme de commande (passage de 7 semaines à 1 semaine entre les deux derniers points), suggérant une hausse de la demande locale ou un besoin de restockage immédiat. Étape 4: En restant conservateur face au manque de données historiques (seulement 2 commandes), la quantité de 5 unités est maintenue pour couvrir le besoin hebdomadaire identifié sur novembre sans risquer un surstockage sur un produit vrac de 3kg spécialisé (Noix du Brésil). Le niveau de confiance est faible car les données sont insuffisantes pour dégager un cycle robuste long terme, mais la répétition du mardi renforce la cohérence logistique du client sur ce mois de novembre 2025. Rapport qualité/quantité conservateur : 5u recommandée pour l'approvisionnement courant du mardi actuel (11/11). Les 3kg par unité font que 5u représentent déjà 15kg, quantité prudente en B2B pour du vrac bio de ce type sans visibilité supplémentaire sur le débit final des ventes au détail du client professionnel. Le passage à 5u hebdomadaire semble être la nouvelle tendance à soutenir après le test fructueux du 04/11. En conclusion, on stabilise sur le volume unitaire de 5 qui semble être le carton ou lot standard de commande du client. L'approche est d'accompagner la montée en puissance de fin d'année sans forcer le stock avant d'avoir un 3ème point de donnée à intervalle régulier hebdomadaire pour valider la pérennité du rythme court terme. Recommandation finale arrêtée à 5 unités.

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une tendance cycle mensuel récent
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité (ventes de fond)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 3u en septembre est traitée comme un outlier (achats de lancement ou stock initial), la demande de fond se stabilisant à 1u. ÉTAPE 2 (Saisonnalité) : Aucune donnée N-1 disponible, cependant le produit (Noix de pécan bio) peut subir une légère hausse en fin d'année, non confirmée ici par les chiffres. ÉTAPE 3 (Tendance) : Les deux dernières commandes (octobre/novembre) sont identiques à 1u, montrant une stabilisation. ÉTAPE 4 (Recommandation) : Le rythme semble se stabiliser sur une commande mensuelle. Étant donné la faible vélocité et l'absence d'historique de fête, une approche conservatrice de 1 unité est préconisée pour éviter le sur-stock sur ce format de 2,2kg.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours), majoritairement le mardi
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u -> 3u -> 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des trois derniers mois montre un cycle de commande régulier d'environ 30 jours, se produisant principalement le mardi. ÉTAPE 1: Aucune valeur n'est identifiée comme outlier, les quantités (2, 3, 4) étant proches. ÉTAPE 2: Pas de données N-1 disponibles, mais le segment chips bio 125g est stable hors période estivale ou fêtes. ÉTAPE 3: On observe une tendance baissière nette (décroissance de 1 unité par commande depuis août). ÉTAPE 4: La base est de 3 unités (moyenne), mais compte tenu de la tendance à la baisse et de l'approche conservatrice pour éviter le sur-stockage, une commande de 2 unités est recommandée pour s'aligner sur le dernier volume observé.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 35 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u → 2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée n'est identifiée comme outlier car l'historique est très limité, mais on observe une décroissance nette. Étape 2: Aucune donnée N-1 disponible pour confirmer la saisonnalité ; le produit semble en phase de test ou de déclin. Étape 3: La tendance récente montre un ralentissement significatif des volumes (passage de 4 unités en août à 1 unité en octobre) malgré une régularité sur le jour de commande (mardi). Étape 4: En appliquant une approche conservatrice face à cette tendance baissière marquée, la recommandation se stabilise à 1 unité pour éviter le surstockage sur un produit à faible rotation lente (Slow Mover). Date de commande cohérente avec le cycle habituel du mardi/mercredi en fin de mois (tous les ~33 jours).ing.

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES : 1. Aucun outlier détecté, les volumes (1u ou 2u) sont cohérents avec un produit de niche. 2. Pas de données N-1 disponibles, mais le volume reste stable malgré l'entrée en période automnale. 3. Le rythme de commande s'est stabilisé autour de 4 semaines (28 jours environ). La dernière commande du 28/10 est récente (14 jours), mais le client commande ce mardi 11/11, respectant son cycle de jour favori (mardi). 4. La tendance court terme montre un passage de 1u à 2u sur les deux derniers mois. Pour éviter la rupture tout en restant conservateur sur un produit à faible rotation, une commande de 2 unités est préconisée.

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, majoritairement les mardis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un léger ralentissement de fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable de 2 unités par commande. Etape 1: Aucun outlier détecté, les volumes sont constants (2u à 3u). Etape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit est resté stable sur la transition été/automne. Etape 3: On observe une stabilisation stricte à 2 unités sur les trois dernières livraisons, malgré un espacement plus important entre les commandes en octobre. Etape 4: La baseline de 2 unités est retenue. Comme nous sommes un mardi (jour habituel) et que la tendance est à la stabilité basse, commander 2 unités permet de maintenir le stock sans risque de sur-stockage.

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (35 jours d'intervalle entre les commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Données insuffisantes pour isoler des outliers de manière fiable, la moyenne historique est à 2 unités. ÉTAPE 2 (SAISONNALITÉ): Aucune donnée N-1 disponible ; l'impact saisonnier ne peut être quantifié, on reste sur une approche neutre. ÉTAPE 3 (TENDANCE): On observe un ralentissement entre août (3u) et septembre (1u). Le cycle de réapprovisionnement semble long (> 30 jours). ÉTAPE 4 (RECOMMANDATION): Avec une dernière commande à 1u et une tendance baissière sur un produit premium de niche, la prudence impose une commande minimale de 1 unité pour couvrir le besoin immédiat sans générer de sur-stock dormant, en attendant d'observer une stabilisation du rythme de consommation sur ce nouveau produit (date actuelle en novembre, dernière commande fin septembre). Cycle de commande non fixé sur un jour spécifique du calendrier client pour le moment au vu des dates éparses (mardi/mercredi). Il s'agit d'une recommandation conservatrice vu la faiblesse de l'historique (2 points de données). Pour une prévision plus fine, il faudrait intégrer les stocks restants en magasin au moment de la demande car une commande pourrait être déclenchée suite à une rupture ponctuelle plutôt qu'à un flux tendu régulier de revente sur les chips premium/bio de ce format (125g). En résumé, la tendance immédiate prévaut sur la moyenne historique pour minimiser le risque financier lié au stockage de produits bio premium à rotation lente potentielle en période hors-festivités immédiates (novembre). Niveau de confiance bas en raison du manque de profondeur de l'historique de commandes fourni (2 entrées sur 3 mois). La recommandation finale reste cohérente avec le dernier signal de demande reçu (septembre).

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (mercredi)
- **Saisonnalité**: none
- **Tendance**: Demande ponctuelle de base unitaire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune donnée de nettoyage car une seule commande de 1u enregistrée. Étape 2 : Absence d'historique N-1 pour confirmer une saisonnalité thé blanc/myrtille, mais la consommation est généralement stable sur ce type de boisson. Étape 3 : Tendance non quantifiable avec un seul point de données à 2 mois d'intervalle. Étape 4 : En l'absence de récurrence (achat spot), la recommandation reste conservatrice à l'unité (1u) pour couvrir une éventuelle demande identique sans risque de sur-stockage sur un produit à faible rotation.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 1u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-09-24 06:16:03: 3u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 1u
- 2025-09-24 06:16:03: 2u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-10-01 07:17:25: 1u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 1u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: 0.8u (21j restants) → prédit 1u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.6u (7j restants) → prédit 1u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.0u (13j restants) → prédit 2u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -0.7u (-16j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.6u (-38j restants) → prédit 1u mais non commandé |


---

## False Negatives (6)

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock suffisant: 1.5u (34j restants > seuil 30j) |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock suffisant: 0.9u (52j restants > seuil 30j) |
| [fsv04] Amande nature bio vrac 2,8 kg | 5 | Stock suffisant: 4.3u (38j restants > seuil 30j) |
| [fsv18] Mendiant bio vrac 2,8kg | 2 | Stock suffisant: 1.7u (33j restants > seuil 30j) |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock suffisant: 4.3u (34j restants > seuil 30j) |
| [fsv03] Noisette nature bio vrac 2,8kg  | 2 | Stock suffisant: 1.8u (59j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:08:38.563Z*
