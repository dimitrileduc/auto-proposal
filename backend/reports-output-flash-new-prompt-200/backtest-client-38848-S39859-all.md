# Rapport Backtest - Client Macéli SRL

## Contexte

- **Client** : Macéli SRL (ID: 38848)
- **Commande réelle** : S39859
- **Date commande** : 2025-10-22 13:39:06
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 16,548 input + 6,528 output = 23,076 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 12 produits prédits, 9 corrects |
| **Rappel** | 37.5% | 24 produits réels, 9 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (9)

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
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel environ tous les 30 à 40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique de 1 unité par commande. L'étape 1 n'identifie aucun outlier car toutes les commandes sont identiques. L'étape 2 ne révèle aucune saisonnalité marquée entre N-1 et N (ventes isolées en août, septembre). L'étape 3 confirme une tendance stable à l'unité sans accélération de fréquence. Bien que la commande actuelle soit un mardi au lieu du lundi/vendredi habituel, le volume de fond ne justifie pas plus d'une unité pour couvrir le besoin sans risque de sur-stockage sur un produit à rotation lente. La confiance est faible en raison du très petit nombre de points de données (3 commandes sur 14 mois). Pour un produit de type tartinade bio (périssable), la recommandation reste conservatrice à 1 unité pour éviter la péremption du stock dormant tout en répondant à la demande ponctuelle identifiée mensuellement depuis septembre 2025. Aucun indicateur ne suggère une hausse de volume immédiate pour la période d'octobre/novembre par rapport aux données passées de 2024. Le maintien du stock à 1u est suffisant pour absorber les 30% de variation standard en B2B sans risque de rupture systémique pour ce type de référence à faible débit unitaire récurrent mais espacé dans le temps. La prédiction finale s'aligne donc sur la demande de fond de 1 unité, en restant prudent face à la date de péremption probable sur un produit 'frais' ou 'épicerie fine bio' à rotation ralentie observé ici sur plus d'un an sans changement de volume unitaire malgré les périodes de rentrée ou de fin d'été identifiées dans les logs historiques fournis précédemment pour ce client spécifique sur ce produit TVF002 PAPRIKA 180g particulier à faible rotation B2B constatée actuellement dans le secteur agroalimentaire considéré ici très précisément selon les données mises à disposition dans ce contexte.

</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique, environ une commande tous les 2 à 4 mois sans jour fixe
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive du volume annuel
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover). Étape 1: Aucune valeur n'est identifiée comme outlier car les volumes sont minimalistes (1u-2u). Étape 2: Une légère activité est notée en période estivale en N-1, mais nous sommes actuellement en octobre, période historiquement calme pour ce type de condiment. Étape 3: La tendance est au ralentissement extrême avec une seule commande enregistrée sur les 6 derniers mois (août 2025). Étape 4: La demande de fond est de 1 unité par commande. Étant donné la faible fréquence et le risque de péremption sur un produit peu mobile, la recommandation est maintenue au strict minimum de 1 unité pour couvrir le besoin ponctuel sans créer de surstock dormeur.

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible et erratique (env. tous les 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation sans pattern hebdomadaire ou saisonnier clair. 1. Nettoyage : Aucune commande ne dépasse 2 unités, pas d'outliers identifiés. 2. Saisonnalité : Les données N-1 montrent des commandes éparses sans corrélation temporelle forte. 3. Tendance : La dernière commande date d'août (1u), suggérant un besoin de réapprovisionnement de fond. 4. Recommandation : Compte tenu de la faible fréquence et du volume historique (majoritairement 1u), une commande de 1 unité est préconisée pour couvrir le besoin sans risque de surstockage sur un produit possiblement périssable.

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité anormale détectée (toutes les commandes sont ≤ 2u). Étape 2: Historique N-1 trop maigre pour confirmer une saisonnalité, bien que le produit soit présent en mai/juillet. Étape 3: La dernière commande remonte à plus de 75 jours (4 août), suggérant un produit à rotation très lente (C-Class). Étape 4: En l'absence de tendance haussière et compte tenu du caractère B2B sporadique, une recommandation conservatrice d'une unité (1u) est préconisée pour couvrir le besoin immédiat sans risquer le sur-stockage sur une référence à faible débit.

</details>


<details>
<summary><strong>5. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants entre 1u et 2u. Étape 2: La saisonnalité est jugée inexistante ou non-identifiable avec ces volumes très faibles ; aucun pic n'est corrélé à la période d'octobre. Étape 3: La tendance est à la stabilité minimale avec une seule commande enregistrée ces 6 derniers mois (août). Étape 4: Compte tenu de la faible rotation du produit (Vinaigrette Caesar 200ml) et de la dernière commande datant de plus de deux mois, une commande de 1 unité suffit pour couvrir les besoins sans risquer un surstockage ou un dépassement de date limite de consommation (DLC), typique de l'agroalimentaire sur des condiments en format 200ml. Approche conservatrice privilégiée car le produit ne semble pas faire partie d'un flux tendu quotidien ou hebdomadaire pour ce client spécifique à cette date (21 octobre). Pour finir, la variance temporelle importante et le volume minimal suggèrent une commande de réapprovisionnement de sécurité unitaire ou un besoin très occasionnel (B2B type restauration à la carte). Nous recommandons 1 unité pour rafraîchir le stock disponible sans immobilisation financière inutile sur une référence à faible rotation actuelle (dernière commande : 04/08/2025). Une commande de 1 unité constitue donc la meilleure option de précaution pour éviter la rupture tout en préservant le stock contre l'obsolescence (DLC). La commande est positionnée à 1u car la valeur moyenne est de 1.25u mais la tendance récente (2025) est strictement à 1u. On ne voit pas de hausse d'activité sur ce produit spécifique en fin d'année d'après N-1. On reste à 1 unité pour limiter l'exposition financière et le risque de gâche alimentaire (DLC). Niveau de confiance faible dû à la rareté des points de données historiques (5 commandes sur 18 mois). On privilégie la fraîcheur plutôt que le volume.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:20:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:00:15: 1u
- 2024-08-23 08:16:43: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-23 08:16:43: 1u
- 2024-07-15 08:00:15: 2u
- 2024-03-21 08:13:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:42:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 08:00:15: 2u
- 2024-05-31 13:37:55: 1u
- 2024-03-21 08:13:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (3)

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
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Stock prédit: 0.2u (24j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |


---

## False Negatives (15)

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
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Stock suffisant: 0.7u (77j restants > seuil 30j) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Stock suffisant: 0.5u (32j restants > seuil 30j) |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:16:24.876Z*
