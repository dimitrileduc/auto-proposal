# Rapport Backtest - Client DLL AD Keerbergen DLK Retail

## Contexte

- **Client** : DLL AD Keerbergen DLK Retail (ID: 71672)
- **Commande réelle** : S39490
- **Date commande** : 2025-10-02 08:03:46
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 16,515 input + 5,718 output = 22,233 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 67.9% | 28 produits prédits, 19 corrects |
| **Rappel** | 95.0% | 20 produits réels, 19 détectés |
| **F1-Score** | 79.2% | Score équilibré global |

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
| **MAE** | 0.42 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 28.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 27.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
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

## True Positives (19)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 6 | 2 | 4.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (13 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commade isolée (1 occurrence en 60 jours)
- **Saisonnalité**: none
- **Tendance**: Inexistante ou inactive
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est limitée par un historique extrêmement pauvre (une seule commande de 1 unité il y a 8 semaines). ÉTAPE 1: Aucune donnée aberrante car volume minimal. ÉTAPE 2: Aucune donnée N-1 pour confirmer une saisonnalité, bien que le segment 'Mayonnaise' puisse être stable. ÉTAPE 3: La tendance ne peut être établie, le produit est soit très peu rotatif, soit nouveau. ÉTAPE 4: Par mesure de prudence et pour éviter une rupture de service sur une référence catalogue, une commande de réapprovisionnement minimale de 1 unité est recommandée pour reconstituer un stock de sécurité de base.

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (une seule commande enregistrée il y a 8 semaines)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique insuffisant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande unique de 1 unité enregistrée le 4 août 2025. Aucun outlier n'est détectable faute de base de comparaison. Bien que nous soyons en octobre (période de transition saisonnière), l'absence de données N-1 ne permet pas de confirmer un pic saisonnier pour ce produit spécifique. En l'absence de tendance claire et face à une fréquence très faible (produit de niche ou commande exceptionnelle), la stratégie recommandée est conservatrice : commander l'unité minimale constatée pour couvrir une éventuelle demande ponctuelle sans risquer de sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (cycles de ~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune quantité n'apparaît comme un outlier vu le faible historique (1u et 2u). Étape 2 (Saisonnalité): Données N-1 absentes, impact saisonnier non-identifiable. Étape 3 (Tendance): On observe un ralentissement entre juillet (2u) et août (1u). Le produit n'a pas été commandé en septembre alors qu'il suivait un cycle mensuel. Étape 4 (Recommandation): En l'absence de commande depuis 60 jours, un besoin de réapprovisionnement est probable mais le volume doit rester minimal (conservateur) pour éviter le sur-stockage sur une référence à faible rotation. On suit la dernière commande connue (1u) comme base de sécurité.

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (environ tous les 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est stable à 2 unités par commande. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: Le rythme de commande est très lent (mensuel) avec une quantité constante. Cependant, la dernière commande enregistrée remonte à début août, suggérant soit une rupture de flux, soit un stock résiduel long. Étape 4: En l'absence de données récentes en septembre, on préconise le maintien de la quantité habituelle de 2 unités pour couvrir le cycle mensuel sans risque de sur-stockage majeur sur un produit à faible rotation. La confiance est faible car l'historique est très limité (2 points de données). Soulignons un décalage de cycle possible car nous sommes en octobre sans commande en septembre (besoin de réapprovisionnement probable). ou un arrêt du produit chez le client final si le volume de 2u couvrait 30 jours d'usage habituel sans signe de reprise récent. Par prudence B2B, on aligne la commande sur l'historique stable de 2 unités par mois de commande active observé durant l'été 2025. Aucun motif n'est présent pour augmenter ou baisser cette quantité de base de 2 unités, par rapport à la moyenne historique des 3 derniers mois. Une approche conservatrice est maintenue avec une recommandation de 2 unités. L'usage d'un coefficient de sécurité majorant n'est pas justifié ici au vu du cycle long identifié de cet article spécifique de sauce béarnaise en format 250ML. Fin de synthèse pour cette recommandation supply chain agroalimentaire B2B pour le produit [JF012] JF SAUCE BEARNAISE 250ML WECK pour la période d'octobre 2025 conformément aux instructions du prompt et de la structure JSON imposée par le schéma fourni au préalable pour cet exercice de prédiction de réapprovisionnement pour l'utilisateur de l'API de gestion du stock et de la supply chain.

</details>


<details>
<summary><strong>5. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 8 semaines
- **Saisonnalité**: none
- **Tendance**: Stagnation à niveau très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune donnée aberrante détectée car une seule commande de 1u est enregistrée. ÉTAPE 2: Aucune donnée N-1 disponible pour évaluer la saisonnalité, bien que le raifort puisse avoir une légère saisonnalité hivernale. ÉTAPE 3: La fréquence est extrêmement faible avec un seul point de données datant de début août (environ 60 jours d'inactivité). Il n'y a pas de tendance haussière ni de rythme hebdomadaire établi. ÉTAPE 4: Compte tenu de la rareté des flux sur cette référence (TVF008), la recommandation reste au minimum de 1 unité pour couvrir une éventuelle demande ponctuelle sans prendre de risque de surstockage sur un produit bio dont la rotation semble incertaine.

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (dernière il y a 90 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune commande anormale détectée car l'historique est quasi inexistant (une seule commande de 1u). ÉTAPE 2 (SAISONNALITÉ): Données N-1 absentes, impact saisonnier impossible à confirmer, considéré comme nul. ÉTAPE 3 (TENDANCE): Le produit semble être une référence à rotation très lente ou de niche (une commande en 3 mois). ÉTAPE 4 (RECOMMANDATION): Avec une seule occurrence historique de 1 unité, la demande de fond est estimée au minimum vital. Étant donné l'absence de données de récurrence, nous recommandons la quantité minimale de 1 unité pour couvrir une éventuelle demande ponctuelle sans risque de sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>7. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (unique occurrence en 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à volume très faible (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): L'unique commande de 1u en juillet ne présente pas les caractéristiques d'un outlier mais d'une demande de fond minimale. ÉTAPE 2 (Saisonnalité): Aucune donnée N-1 n'est disponible et le volume est trop faible pour inférer un impact saisonnier significatif. ÉTAPE 3 (Tendance): Le produit semble être un article à rotation très lente ('slow mover'). Le délai de 3 mois depuis la dernière commande suggère un besoin de réapprovisionnement de type 'un pour un'. ÉTAPE 4 (Recommandation): En l'absence de récurrence, la prudence impose de recommander l'unité minimale (1u) pour couvrir une éventuelle demande identique sans risquer de sur-stocker un produit dont la fréquence est indéterminée.

</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 90 jours (jeudi)
- **Saisonnalité**: none
- **Tendance**: Stagnation quasi-totale
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 1 unité enregistrée il y a trois mois (juillet). Il n'y a aucun historique N-1 pour valider une saisonnalité spécifique à la sauce cocktail. En l'absence de données de rotation régulières ou de tendance haussière, la stratégie prudente en B2B consiste à commander le minimum possible pour répondre à un éventuel besoin ponctuel sans générer de stock mort. La recommandation se base sur le maintien de l'unité unique observée précédemment.

</details>


<details>
<summary><strong>9. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle isolée (une seule occurrence)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a trois mois (juillet). Sans données historiques N-1 ni commandes récurrentes sur les 3 derniers mois, il est impossible d'identifier une saisonnalité ou une tendance de croissance. La demande de fond est estimée à 1 unité sur la base de l'unique point de données disponible. En l'absence de signaux de rotation rapide, une approche prudente (Lean) est adoptée pour éviter le sur-stockage sur un produit à faible rotation. La recommandation est de maintenir le stock minimal de 1 unité.

</details>


<details>
<summary><strong>10. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Occasionnel / Aléatoire
- **Saisonnalité**: none
- **Tendance**: Stable mais volume extrêmement faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très limité (une seule commande de 1 unité en juillet). ÉTAPE 1: Aucune valeur aberrante détectée sur un échantillon unique. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le produit (tartinade) puisse être sujet à une demande estivale. ÉTAPE 3: Aucune tendance mesurable en raison de l'absence de récurrence. ÉTAPE 4: Compte tenu de la faible rotation observée et de l'objectif d'éviter le surstockage, une commande de remplacement de l'unité historique est recommandée pour maintenir une présence minimale en rayon sans risque financier.

</details>


<details>
<summary><strong>11. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable - Absence totale d'historique
- **Saisonnalité**: none
- **Tendance**: Inexistante (Lancement ou Nouveau Référencement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun historique disponible pour identifier des outliers. ÉTAPE 2 (SAISONNALITÉ): Impossible d'évaluer l'impact saisonnier sans données N-1. ÉTAPE 3 (TENDANCE): Aucune tendance récente car aucune commande enregistrée sur les 3 derniers mois. ÉTAPE 4 (RECOMMANDATION): En l'absence totale de données, l'approche doit être ultra-conservatrice pour éviter le sur-stockage d'un produit potentiellement dormant ou dont la rotation est inconnue. Une quantité minimale d'unité de besoin (1 unité) est préconisée pour tester le marché ou répondre à un besoin ponctuel spécifique, tout en minimisant le risque financier.

</details>


<details>
<summary><strong>12. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 6u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (absence de données historiques)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (nouveau produit ou nouvelle référence)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Impossible en l'absence de données. ÉTAPE 2 (Saisonnalité) : Produit de type sauce Béarnaise (usage permanent en restauration, pic potentiel lors des fêtes de fin d'année non encore visible). ÉTAPE 3 (Tendance) : Aucune commande sur les 3 derniers mois, suggérant un lancement de produit ou une reprise de référencement. ÉTAPE 4 (Recommandation) : En l'absence totale d'historique, la stratégie est conservatrice pour éviter le sur-stockage sur un produit à DLC (pot de 470ml). On préconise une commande de test/implantation correspondant généralement à un carton standard (unité de conditionnement courante de 6 ou 12), ici fixée à 6 unités pour minimiser le risque.

</details>


<details>
<summary><strong>13. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable - Produit sans historique
- **Saisonnalité**: none
- **Tendance**: Inconnue - Nouveau produit ou absence de consommation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée disponible, aucun outlier à filtrer. ÉTAPE 2 (Saisonnalité): Pas d'historique N-1 ou récent, impossible de confirmer une saisonnalité pour ce produit spécifique bien que le secteur soit globalement saisonnier. ÉTAPE 3 (Tendance): Absence totale de flux de commandes récents. ÉTAPE 4 (Recommandation): En l'absence de données transactionnelles, j'applique une stratégie conservatrice de 'Stock de sécurité minimal' ou pilotage par l'implantation. La recommandation d'une unité est une valeur refuge technique pour tester le flux de sortie sans risque de démarque ou de sur-stockage sur un produit périssable (vinaigrette).

</details>




### 📊 Données d'Input LLM (13 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 14:04:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 14:04:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 14:04:26: 1u
- 2025-07-03 12:05:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 14:04:26: 2u
- 2025-07-03 12:05:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 14:04:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-03 12:05:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-03 12:05:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-03 12:05:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-03 12:05:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-03 12:05:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (9)

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
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [DIS0004] Display JF bois | 1 | Stock prédit: 0.2u (22j restants) → prédit 1u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: -1.2u (-33j restants) → prédit 1u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.6u (-33j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.4u (-23j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Stock prédit: -1.0u (-26j restants) → prédit 1u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 6 | Stock prédit: -0.3u (-12j restants) → prédit 6u mais non commandé |


---

## False Negatives (1)

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
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock suffisant: 0.4u (41j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:06.304Z*
