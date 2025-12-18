# Rapport Backtest - Client SASPJ ass. RENAUD JOSEPH ET RENAUD FABIAN

## Contexte

- **Client** : SASPJ ass. RENAUD JOSEPH ET RENAUD FABIAN (ID: 60416)
- **Commande réelle** : S39192
- **Date commande** : 2025-09-16 06:28:45
- **Date cutoff système** : 2025-09-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 10,629 input + 4,208 output = 14,837 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.3% | 26 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
| **F1-Score** | 56.4% | Score équilibré global |

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
| **MAE** | 0.18 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
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

## True Positives (11)

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
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle/bimestrielle le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité (fréquence faible)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité anormale détectée, le produit s'écoule par unité. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, mais le produit semble être une référence de niche à rotation lente. Étape 3: Le rythme est très lent (une commande tous les 1.5 à 2 mois environ). Étape 4: La date actuelle (lundi) précède d'un jour le cycle habituel observé de commande (mardi) en août et juin. Étant donné la faible vélocité, une commande de 1 unité suffit pour couvrir le besoin sans risque de sur-stockage, bien que l'historique limité réduise la confiance de la prédiction à 'low'. Nous restons conservateurs sur cette référence spécifique [LV161]. Mais au vu du dernier intervalle (août), un réapprovisionnement est pertinent en septembre pour maintenir une disponibilité minimale face à un client potentiel récurrent chaque mois ou deux mois au début du mois (J+40). L'achat est passé ici le 15, soit un léger décalage par rapport au début de mois habituel, mais justifie le maintien du stock à 1u pour éviter la rupture sur cette niche spécifique mangue-curry en B2B qui a un rythme de renouvellement lent mais existant (1u x 2 commandes sur 3 mois). Pour l'instant, aucune tendance à la hausse n'est observée, une unité suffit amplement pour répondre à la demande ponctuelle identifiée précédemment sans encombrer l'entrepôt, car le produit est probablement sujet à une DLUO sur le segment tartinade agroalimentaire qui ne permet pas un stockage plus massif sans rotation garantie sur ce volume actuel de 2 unités par trimestre observé historiquement sur la période récente (juin à septembre). En résumé: demande de fond estimée à 0.6 commande / mois, soit 1 unité par réapprovisionnement ponctuel quand le stock est écoulé car le produit n'est pas un best-seller.

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (approx. 50 jours entre les commandes)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes de 1 et 2 unités reflètent une demande de fond très faible. ÉTAPE 2 (Saisonnalité): Bien que ce soit une boisson fraîche, l'absence de données N-1 et le faible historique suggèrent un impact saisonnier non-significatif pour ce client spécifique. ÉTAPE 3 (Tendance): La fréquence est très espacée (juin puis août). La dernière commande date de 41 jours, nous approchons du cycle observé de ~50 jours. ÉTAPE 4 (Recommandation): On se base sur la moyenne haute (2u) pour couvrir la période à venir, tout en restant conservateur au vu de la faible rotation du produit.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 45-50 jours le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, les volumes sont trop faibles pour des promotions. Étape 2 : Pas de données N-1, saisonnalité illisible mais improbable sur ce type de snacking bio premium sans historique. Étape 3 : Le rythme de commande est très espacé (7 semaines entre les deux dernières commandes) avec des volumes minimes. Étape 4 : La demande de fond se situe entre 1 et 2 unités. Étant donné l'absence de commande depuis début août et l'approche conservatrice demandée, une recommandation de 1 unité suffit pour couvrir les besoins immédiats sans engendrer de sur-stockage sur un produit à rotation lente. La confiance est faible car basée sur seulement deux points de données historiques et aucune donnée N-1.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (mensuelle/bimestrielle) le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants à 1 unité. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit semble être une référence de niche stable. Étape 3: Le rythme de commande est très lent (tous les deux mois environ) avec une stabilité parfaite du volume unitaire. Étape 4: La commande actuelle intervient un lundi au lieu du mardi habituel, mais après une absence de commande en juillet. On maintient la quantité minimale d'une unité pour éviter le surstockage sur un produit à faible rotation. La confiance est faible en raison de la rareté des points de données historiques (seulement 2 commandes). Mais la tendance est de 1u par commande sans exception détectée à ce jour sur le volume unitaire de 125g Bio Premium qui n'est pas un produit de masse chez ce client B2B spécifique. Recommandation finale: 1 unité pour maintenir la présence sans risque financier sur le stock périssable ou immobilisé inutilement car l'historique ne justifie pas une hausse à 2 unités ou plus actuellement. On conserve la baseline de 1u malgré le décalage de jour.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ 45-50 jours le mardi)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume (de 2u à 1u) sur un rythme espacé
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante car le volume est extrêmement faible (1-2u) et cohérent pour un produit premium bio de niche. Étape 2: Aucune donnée N-1 disponible, mais les chips premium maintiennent une demande de fond stable sans pic saisonnier visible sur l'échantillon. Étape 3: Un ralentissement est observé entre juin (2u) et août (1u). Le cycle de réapprovisionnement semble être de 7 semaines. Étape 4: La date actuelle du 15 septembre (environ 6 semaines après la dernière commande) justifie un déclenchement de commande. Étant donné l'absence d'historique robuste et la tendance baissière du panier, une approche conservatrice de 1 unité est recommandée pour éviter le sur-stockage d'un produit bio à DLUO limitée.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (unique commande 40 jours avant)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): L'unique commande historique de 1u ne présente aucun signe de promotion ou d'outlier. ÉTAPE 2 (Saisonnalité): Aucune donnée N-1 disponible, impossibilité de confirmer une saisonnalité pour ce produit spécifique. ÉTAPE 3 (Tendance): Historique extrêmement pauvre (1 seule commande le 05/08). Le rythme semble très lent ou le produit vient d'être référencé. ÉTAPE 4 (Recommandation): En l'absence de récurrence établie et pour éviter le sur-stockage sur un produit bio dont la rotation semble faible, je recommande la quantité minimale de 1u pour maintenir une présence en rayon tout en restant conservateur.

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (produit nouveau ou inactif)
- **Saisonnalité**: none
- **Tendance**: Inexistante (absence de données)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES 1-3 : L'historique des commandes est totalement vide pour l'année précédente et les 3 derniers mois, rendant impossible l'application de méthodes statistiques classiques de supply chain (de-eventing, saisonnalité, tendance). ÉTAPE 4 : En l'absence totale de données historiques pour ce SKU (potentiellement un nouveau produit ou une reprise de référence), une approche de stock de sécurité minimal ou d'implantation est nécessaire. La recommandation est fixée à l'unité minimale de commande (1) pour tester le flux de sortie sans risquer le sur-stockage immédiat, conformément au principe de conservatisme. Le niveau de confiance est 'low' car aucune donnée de consommation réelle n'appuie ce choix.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:31:19: 1u
- 2025-06-17 06:44:55: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:31:19: 2u
- 2025-06-17 06:44:55: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:31:19: 1u
- 2025-06-17 06:44:55: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:31:19: 1u
- 2025-06-17 06:44:55: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:31:19: 1u
- 2025-06-17 06:44:55: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:31:19: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (15)

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
| [LV146] LV Sauce Aïoli 200 ml | 1 | Stock prédit: 0.3u (19j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.3u (19j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: -0.4u (-10j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Stock prédit: 0.3u (19j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: -0.8u (-39j restants) → prédit 1u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: -0.9u (-55j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: -0.6u (-43j restants) → prédit 1u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -1.4u (-69j restants) → prédit 1u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: -0.5u (-41j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -1.4u (-69j restants) → prédit 1u mais non commandé |


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
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JOY05] Organic Cherry Jam 370g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:04.723Z*
