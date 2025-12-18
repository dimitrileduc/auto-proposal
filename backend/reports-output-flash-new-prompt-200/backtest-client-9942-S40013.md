# Rapport Backtest - Client La fermette

## Contexte

- **Client** : La fermette (ID: 9942)
- **Commande réelle** : S40013
- **Date commande** : 2025-10-30 07:17:13
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 23,326 input + 9,492 output = 32,818 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.1% | 35 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 54.2% | Score équilibré global |

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
| **MAE** | 0.54 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 35.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (13)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0047] MF Mayonnaise 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours) le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité toutes les deux semaines
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est fixée à 1 unité par commande. Étape 2: Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: Le pattern observé est une commande de 1 unité tous les 14 jours le lundi. La dernière commande remonte au 22 septembre, ce qui indique un arrêt du cycle habituel depuis plus de 4 semaines (rupture de rythme). Étape 4: Malgré le retard de cycle, la demande reste très faible et sporadique. Nous recommandons de rester conservateur avec 1 unité pour couvrir le besoin immédiat sans risquer le surstockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (environ 14 jours), commande le lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u toutes les 2 semaines
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et stable (1 unité par commande). Le produit suit un cycle bi-mensuel le lundi, bien qu'aucune commande n'ait été enregistrée depuis le 22 septembre (soit une rupture de rythme de plus d'un mois). Puisqu'il n'y a pas de données N-1 pour justifier une saisonnalité et que les volumes sont minimaux, je recommande de rester sur la quantité de base de 1 unité. Le décalage vers un mercredi suggère un besoin ponctuel ou un réapprovisionnement hors cycle. Étant donné le manque de données récentes sur octobre, la confiance est faible, mais le principe de conservation impose de ne pas sur-stocker au-delà de l'unité habituelle de vente B2B observée sur ce produit premium bio.',

</details>


<details>
<summary><strong>3. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 7 semaines
- **Saisonnalité**: none
- **Tendance**: Instable / Données insuffisantes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (Dé-eventing) : La seule commande existante est de 1 unité, considérée comme demande de fond par défaut. Étape 2 (Saisonnalité) : Pas de données N-1 pour comparer, mais le secteur boisson bio faibe calorie tend à ralentir en fin d'octobre. Étape 3 (Tendance) : Aucune commande sur les 6 dernières semaines, indiquant une rotation très lente ou un test produit. Étape 4 (Recommandation) : Au vu du manque de récursivité (cycle > 50 jours), la recommandation est fixée au minimum d'une unité pour maintenir une présence en rayon sans risque de démarque, le profil de consommation étant erratique.

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifié (données absentes)
- **Saisonnalité**: none
- **Tendance**: Inconnue - Nouveau produit ou reprise d'activité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 & 2: L'absence d'historique (N-1 et récent) empêche l'identification d'outliers et de saisonnalité. Étape 3: Aucune tendance ne peut être calculée. Étape 4: En l'absence totale de données, j'applique une stratégie de 'Stock de Sécurité Minimal' basée sur un colisage standard théorique (ex: carton de 6 unités) pour le secteur agroalimentaire B2B. Cette approche conservatrice prévient la rupture immédiate tout en limitant le risque de surstockage sur une référence sans historique. Une réévaluation sera nécessaire après la première rotation.

</details>


<details>
<summary><strong>5. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique / Très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable à très bas volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune donnée aberrante identifiée car le volume est déjà minimal (1-2u). ÉTAPE 2: La saisonnalité ne peut être confirmée en raison du manque de données historiques récentes, bien que le secteur agroalimentaire soit actif. ÉTAPE 3: Absence totale de commandes sur les 3 derniers mois, suggérant une demande dormante ou un produit de niche à très faible rotation. ÉTAPE 4: Compte tenu de l'absence d'activité récente et du principe de prudence pour éviter le sur-stockage d'un produit possiblement périssable (mayonnaise), une commande minimale de 1 unité est recommandée pour tester la reprise de la demande sans risque majeur.

</details>


<details>
<summary><strong>6. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et sporadique (tous les 3 à 5 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande, mais ralentissement marqué
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et irrégulière (1 unité par commande). 1. DE-EVENTING: Aucun outlier n'est détecté, le volume de 1u est constant. 2. SAISONNALITÉ: Aucune saisonnalité claire n'apparaît, le produit ayant été commandé en mars, mai, août et octobre. 3. TENDANCE: Absence totale de commandes sur les 3 derniers mois (depuis août 2024 dans l'historique fourni), ce qui indique une rotation très lente ou un produit de niche. 4. RECOMMANDATION: Bien que la date actuelle soit un mercredi (hors cycle habituel du lundi), la stabilité du besoin historique (1u) impose de rester conservateur. Une commande de 1 unité suffit pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot trimestrielle erratique (intervalle 60-120 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée aberrante détectée, les volumes sont constants (1 à 2 unités). ÉTAPE 2 (Saisonnalité): Pas de corrélation saisonnière visible sur N-1; le produit semble répondre à un besoin spécifique ponctuel plutôt qu'à un cycle météo ou calendaire. ÉTAPE 3 (Tendance): Absence totale de commandes sur les 3 derniers mois (depuis août 2024), indiquant un risque de déréférencement ou un besoin très sporadique. ÉTAPE 4 (Recommandation): En l'absence de tendance haussière et compte tenu du faible historique, nous conservons la moyenne historique haute de 2 unités pour couvrir le besoin sans risque de sur-stock significatif pour ce format 250g. La confiance est faible due à l'inactivité récente.

</details>


<details>
<summary><strong>8. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle et erratique (tous les 3 à 4 mois environ)
- **Saisonnalité**: none
- **Tendance**: Inactivité critique (aucune commande depuis mai 2024)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités (1-2u) sont très faibles et constantes. Étape 2: Aucune saisonnalité visible sur N-1; le produit semble être un article de niche ou de fond de rayon. Étape 3: Tendance fortement baissière ou produit 'mort' car aucune activité n'est enregistrée sur les 3 derniers mois ni même depuis mai 2024. Étape 4: En l'absence de demande récente et pour éviter un risque de péremption sur ce type de tartinable (DAI courte en agro), la recommandation est minimale (1 unité) pour tester la reprise du flux sans stocker inutilement un produit à rotation quasi-nulle.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [MF0047] MF Mayonnaise 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:27:48: 2u
- 2024-03-12 07:30:37: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 1u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 2u
- 2023-11-07 07:48:10: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 2u
- 2024-03-12 07:30:37: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (22)

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
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.9u (-16j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 3 | Stock prédit: 0.4u (7j restants) → prédit 3u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.4u (29j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: 0.3u (22j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.1u (17j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.8u (-44j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -1.0u (-57j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.8u (-52j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: -0.2u (-16j restants) → prédit 1u mais non commandé |
| [MF0061] MF Compote | 1 | Stock prédit: -1.2u (-62j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:11:32.715Z*
