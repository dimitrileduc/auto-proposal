# Rapport Backtest - Client DLL AD WELKENRAEDT ETS ADOLPHE

## Contexte

- **Client** : DLL AD WELKENRAEDT ETS ADOLPHE (ID: 38842)
- **Commande réelle** : S39734
- **Date commande** : 2025-10-16 11:36:31
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 14,425 input + 4,570 output = 18,995 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.7% | 28 produits prédits, 17 corrects |
| **Rappel** | 85.0% | 20 produits réels, 17 détectés |
| **F1-Score** | 70.8% | Score équilibré global |

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
| **MAE** | 0.35 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 17.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD015] LD Onion Spread 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD012] LD Organic Samphire Spread 135 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 30-40j, commande généralement en milieu de semaine (mar, mer, jeu)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive de 2u à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un ralentissement structurel du produit passant d'une base de 2 unités en 2024 à une base de 1 unité constante sur les deux derniers mois (août et septembre 2025). L'intervalle de commande est d'environ 30 à 35 jours. La commande du 15 octobre intervient 36 jours après la précédente, s'inscrivant parfaitement dans le cycle rythmique actuel de consommation basse.

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long de 30-40 jours (cycle mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité remarquable avec une quantité de 4 unités dans 75% des cas récents et passés. Le cycle de commande est d'environ un mois (dernières commandes le 07/08 et le 09/09). La date cible (15/10) correspond parfaitement à l'échéance de ce cycle (~36 jours après la précédente). Aucune saisonnalité marquée n'est visible sur les mois d'octobre N-1 (5u) et N-2, et la tendance actuelle est solidement ancrée à 4 unités.

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.7u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique stable tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse (de 4-5u à 3-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande relativement stable d'environ une unité de temps par mois. La dernière commande date d'il y a 36 jours (9 septembre), ce qui place la demande du 15 octobre exactement dans la fenêtre de réapprovisionnement habituelle. Bien que la commande d'août soit tombée à 3u, l'historique long terme (N-1) et la commande de septembre confirment un socle solide à 4u. Compte tenu de la stabilité du produit (sauce lapin) et de l'intervalle respecté, 4 unités est la quantité la plus probable sans risque de surstockage.

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande mensuel très marqué (intervalle de 33 jours entre les deux points de données). La dernière commande date du 9 septembre, ce qui place la prédiction du 15 octobre dans la fenêtre logique de réapprovisionnement (36 jours d'écart). La tendance immédiate montre un volume très faible (1 à 2 unités). Etant donné l'absence d'historique N-1 et la décroissance de la dernière commande, le volume le plus probable est le maintien à 1 unité.

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~32 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et un historique très limité (2 points de données). On observe un intervalle de commande d'environ 30 à 35 jours. La dernière commande du 09/09 (1u) montre une diminution par rapport à celle d'août (2u). Étant donné la faible vitesse d'écoulement et le délai de 36 jours depuis la dernière commande, une quantité de 1 unité est la plus probable pour couvrir le besoin immédiat sans surstocker ce produit de niche.

</details>


<details>
<summary><strong>6. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande toutes les 4 à 5 semaines (intervalles de 33 jours). La dernière commande date du 9 septembre, nous sommes le 15 octobre (+36 jours), ce qui correspond parfaitement au cycle de réapprovisionnement attendu. Bien que la moyenne soit de 1.5u, la tendance la plus récente est de 1u. En l'absence de données N-1 pour confirmer une saisonnalité, je privilégie la quantité la plus récente (1u) pour minimiser le risque de surstock sur un produit à faible rotation.

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (une seule commande observée il y a 69 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 2 unités enregistrée en août. En l'absence de données N-1 ou de récurrence hebdomadaire/mensuelle claire, le volume de référence le plus probable reste la dernière valeur observée. L'absence de commandes entre août et octobre suggère soit un produit à rotation très lente, soit un besoin ponctuel spécifique. La prédiction de 2 unités minimise le risque d'erreur par rapport à l'unique point de données disponible.

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (une seule commande observée il y a 69 jours)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (historique insuffisant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une unique commande de 2 unités enregistrée en août. En l'absence de données de saisonnalité N-1 ou de récurrence hebdomadaire, la meilleure estimation statistique consiste à maintenir le volume de la dernière observation (baseline de 2 unités). Le délai de plus de deux mois depuis la dernière commande suggère un produit à faible rotation ou un besoin ponctuel, justifiant une prédiction prudente calquée sur le dernier volume connu.

</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique ou ponctuel (une seule occurrence enregistrée)
- **Saisonnalité**: none
- **Tendance**: Inconnue (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande enregistrée dans l'historique récent (1 unité le jeudi 7 août), il est impossible d'établir un cycle de récurrence (fréquence) ou une tendance de croissance. En l'absence de données N-1 pour justifier une saisonnalité ou un pic spécifique en octobre, la stratégie la plus précise (minimisant l'erreur) consiste à projeter le seul volume connu pour ce produit, soit 1 unité.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 12:47:02: 2u
- 2024-08-14 05:54:47: 2u
- 2024-05-30 09:18:01: 2u
- 2024-04-23 14:38:28: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 4u
- 2025-08-07 09:25:52: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 12:47:02: 5u
- 2024-08-14 05:54:47: 4u
- 2024-07-05 11:29:19: 4u
- 2024-05-30 09:18:01: 4u
- 2024-04-23 14:38:28: 4u
- 2024-03-19 14:34:17: 5u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 4u
- 2025-08-07 09:25:52: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 12:47:02: 5u
- 2024-08-14 05:54:47: 4u
- 2024-05-30 09:18:01: 4u
- 2024-04-23 14:38:28: 4u
- 2024-03-19 14:34:17: 5u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (11)

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
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Stock prédit: 0.5u (10j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock prédit: 0.6u (16j restants) → prédit 2u mais non commandé |
| [LD011] LD Organic Kids Spread 180 g | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: -0.4u (-31j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock suffisant: 0.4u (36j restants > seuil 30j) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock suffisant: 0.5u (36j restants > seuil 30j) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock suffisant: 0.6u (58j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:40:30.045Z*
