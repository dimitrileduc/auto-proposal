# Rapport Backtest - Client Dorfladen An Ennen

## Contexte

- **Client** : Dorfladen An Ennen (ID: 8630)
- **Commande réelle** : S39601
- **Date commande** : 2025-10-17 06:18:09
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 7,511 input + 2,284 output = 9,795 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 44.4% | 18 produits réels, 8 détectés |
| **F1-Score** | 53.3% | Score équilibré global |

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
| **wMAPE** | 60.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 68.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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

## True Positives (8)

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
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 1 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable mais très faible volume (1u)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La commande de 5u en novembre 2023 est isolée et traitée comme un outlier; la demande de fond est de 1u. Étape 2 (Saisonnalité): Pas de corrélation saisonnière évidente, les commandes sont sporadiques toute l'année. Étape 3 (Tendance): Volume stable au minimum (1u) mais fréquence très faible; la dernière commande remonte à plus de 5 semaines. Étape 4 (Recommandation): En l'absence de régularité forte et vu le profil B2B de dépannage sur ce produit, une commande de 1 unité est recommandée pour couvrir le besoin immédiat sans risquer le sur-stockage sur une référence à faible rotation.

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 1.5 à 2 mois
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation sans saisonnalité marquée ni outliers évidents (quantités oscillant strictement entre 1u et 2u). La tendance récente indique une baisse de volume (1u lors de la dernière commande vs 2u historiquement au second semestre). Comme la fréquence est espacée et que nous sommes sur un jour de commande (jeudi) inhabituel par rapport au cycle de début/fin de semaine, une approche conservatrice de 1 unité est recommandée pour éviter le surstockage sur un produit dont la demande est erratique mais faible.

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle à bimestrielle
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles (1-2u). Étape 2: Aucune saisonnalité marquée n'apparaît malgré le secteur agroalimentaire, le produit semble être une référence de fond de rayon à faible rotation. Étape 3: La dernière commande remonte à plus de 30 jours (08/09), suggérant un besoin de réapprovisionnement imminent. Étape 4: Compte tenu de la faible fréquence et du volume historique, une commande de 1 unité est recommandée pour couvrir la demande tout en évitant le surstockage sur un produit à rotation lente. La confiance est faible en raison de l'irrégularité des dates de commande.

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Produit inconnu / Pas d'historique
- **Saisonnalité**: none
- **Tendance**: Inexistante (Introduction de produit)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Impossible en l'absence de données transactionnelles. ÉTAPE 2 (Saisonnalité) : Non quantifiable, bien que le segment Bio Toscana suggère une consommation stable. ÉTAPE 3 (Tendance) : Aucune base comparative disponible. ÉTAPE 4 (Recommandation) : En l'absence totale d'historique sur ce SKU, une quantité de sécurité 'pilote' de 6 unités (typiquement un colis standard de 6 pots de 190g) est recommandée. Cette approche conservatrice permet de tester la rotation sans risque de surstockage majeur. La confiance est faible car il s'agit d'une estimation à l'aveugle ou d'un lancement.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:49:41: 1u
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 1u
- 2023-11-07 08:03:59: 5u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-16 12:49:41: 2u
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 2u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (4)

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
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: 0.4u (20j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: 0.4u (25j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: -0.3u (-28j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Stock prédit: -0.5u (-37j restants) → prédit 1u mais non commandé |


---

## False Negatives (10)

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
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock suffisant: 1.6u (140j restants > seuil 30j) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock suffisant: 1.0u (39j restants > seuil 30j) |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock suffisant: 0.9u (49j restants > seuil 30j) |
| [MF0029] MF Tarti Datte chili 250g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:14:54.021Z*
