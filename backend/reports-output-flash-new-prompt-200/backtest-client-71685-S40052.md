# Rapport Backtest - Client CRANSHOF BENOIT

## Contexte

- **Client** : CRANSHOF BENOIT (ID: 71685)
- **Commande réelle** : S40052
- **Date commande** : 2025-11-06 07:13:39
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 6,114 input + 2,351 output = 8,465 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 12 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 44.4% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (4)

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
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-régulier, environ une commande tous les 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Pas d'outliers détectés, le volume est constant à 1 unité. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3 (Tendance): La demande est extrêmement faible et sporadiquement répartie (août puis septembre). Le rythme est lent sans accélération visible. ÉTAPE 4 (Recommandation): Au vu du faible historique et de la fréquence erratique, une commande de réapprovisionnement minimale de 1 unité est recommandée pour couvrir la demande de fond sans risque de sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 45 jours sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et sporadique (seulement 2 unités sur les 3 derniers mois). ÉTAPE 1: Aucune valeur aberrante, les commandes sont unitaires. ÉTAPE 2: Pas de données N-1 pour confirmer une saisonnalité, le produit semble être une référence de niche stable. ÉTAPE 3: La tendance est plate avec un volume de 1 unité par transaction. ÉTAPE 4: Étant donné la faible rotation et l'absence de récurrence rapprochée, la recommandation reste à l'unité minimale pour couvrir le besoin sans risque de sur-stockage sur un produit à rotation lente. La confiance est faible en raison de la pauvreté de l'historique (2 points de données). Pour un produit agroalimentaire type tartinade, un stock de sécurité minimal de 1u suffit ici pour répondre à la demande habituelle constatée en août et septembre 2025-11-05 (mercredi). Finalement, aucun motif ne justifie de commander plus que l'unité habituelle au vu du rythme de rotation actuel (1u environ tous les 1.5 mois). Le délai depuis la dernière commande (fin septembre) suggère qu'un besoin pourrait émerger prochainement en novembre, d'où le maintien à 1 unité pour le réapprovisionnement actuel (mercredi 5 novembre). Recommandation prudente de 1 unité pour répondre à la demande sporadique identifiée sans mobiliser de trésorerie inutilement sur cette référence à très bas volume (LV161). En l'absence de pic de fêtes visible prématurément, l'approche conservatrice prévaut sur un produit à DLC/DLUO potentiellement critique en B2B agroalimentaire (tartinades). Pas de tendance à la hausse ni à la baisse, juste une stabilité unitaire ponctuelle (1 unite par commande).

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée, aucune fréquence établie
- **Saisonnalité**: none
- **Tendance**: Stable (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune quantité anormale détectée car l'historique ne contient qu'une seule commande unitaire. Étape 2: Absence de données N-1 pour confirmer une saisonnalité sur ce produit spécifique. Étape 3: Une seule commande enregistrée il y a environ 3 mois (août 2025), rendant l'analyse de tendance impossible. Étape 4: En l'absence de données récurrentes et pour éviter tout sur-stockage inutile d'un produit bio potentiellement périssable, la recommandation reste fixée sur l'unité minimale observée (1u). Le niveau de confiance est faible en raison de la pauvreté de l'historique.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-25 13:09:42: 1u
- 2025-08-12 06:20:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-25 13:09:42: 1u
- 2025-08-12 06:20:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-12 06:20:41: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [RIT05] RITCHIE Cola - verre 275ml | 2 | Stock prédit: 0.6u (16j restants) → prédit 2u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.2u (-10j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: 0.1u (13j restants) → prédit 1u mais non commandé |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 1 | Stock prédit: -0.5u (-28j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.1u (-13j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 1 | Stock prédit: -3.0u (-83j restants) → prédit 1u mais non commandé |


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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock suffisant: 0.3u (33j restants > seuil 30j) |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock suffisant: 0.3u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:47.626Z*
