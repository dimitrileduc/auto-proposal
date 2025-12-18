# Rapport Backtest - Client Un poids c'est tout

## Contexte

- **Client** : Un poids c'est tout (ID: 9940)
- **Commande réelle** : S39885
- **Date commande** : 2025-10-28 07:15:40
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 13,881 input + 4,978 output = 18,859 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.0% | 20 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
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
| **MAE** | 1.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 139.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 63.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (7)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0012] MF Olives Mix 500g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0052] MF Pois chiches  500g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance trimestrielle
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation très lente avec une demande de fond stable de 1 unité. ÉTAPE 1: La commande de 3u de juillet 2024 est traitée comme un outlier (achats groupés ou nécessité ponctuelle). ÉTAPE 2: On observe une légère hausse historique en période estivale (N-1), mais pas d'impact significatif pour la période actuelle (octobre/novembre). ÉTAPE 3: La tendance récente confirme une demande unitaire (dernière commande en septembre à 1u). ÉTAPE 4: Compte tenu de la faible fréquence de rotation et de l'absence de signaux de croissance, la recommandation reste conservatrice à 1 unité pour couvrir le besoin immédiat sans risquer le surstockage sur un produit qui peut rester en stock plusieurs mois. Le changement de jour de commande (lundi au lieu de mardi) n'indique pas de changement de volume de consommation dans ce contexte B2B lent localisé sur ce SKU spécifique [MF0052]. Pour un item à rotation aussi faible, l'objectif est le flux tendu strict à 1u par commande ponctuelle d'appoint plutôt qu'un stock de masse prédictif élevé car la récurrence n'est pas hebdomadaire mais plutôt trimestrielle/semestrielle selon l'historique fourni sur les 2 dernières années d'exploitation du produit pois chiche 500g sur ce compte client spécifique ou point de vente particulier concerné par les données transmises transmises ici en input direct du modèle de prévision automatique par apprentissage supervisé couplé à cette expertise métier Senior Supply Chain agroalimentaire ainsi synthétisée en une prédiction unitaire logique et robuste face aux incertitudes marché courantes en fin d'année civile hors période forte liée spécifiquement aux périodes de fêtes régionales pouvant impacter ce type de légumineuses sèches transformées ou non selon préparation culinaire associée chez le consommateur final hors périmètre direct gestionnaire ici concerné prioritairement par une efficience opérationnelle maximale centrée coût stockage versus disponibilité linéaire minimale requise statutairement ou contractuellement parlant entre les parties prenantes du cycle achat revente considéré globalement sur cette référence active unique à faible vélocité de vente constatée historiquement entre 2023 et 2025 inclus selon data fournie ci avant.

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, cycle long irrégulier (60-90 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 3u en juillet 2024 est traitée comme un léger outlier saisonnier (été), la base stable étant de 2u. Étape 2: Faible saisonnalité observée, bien qu'un pic estival léger apparaisse en N-1, nous sommes actuellement fin octobre (période de creux historique). Étape 3: La tendance est stable avec un volume constant de 2u sur les 3 dernières années, mais la fréquence est très faible (dernière commande il y a 83 jours). Étape 4: En l'absence de commande depuis août et malgré le jour de commande inhabituel (lundi au lieu de mardi), on maintient la quantité de fond de 2u pour assurer le stock sans risque de perte sur ce produit à rotation lente ou intermittente (B2B). Nous restons conservateurs vu le manque de données récentes sur les 3 derniers mois (1 seule commande). Aucun signe de hausse de consommation n'est visible sur cette période de l'année (octobre). Il est probable qu'il s'agisse d'un réapprovisionnement de routine pour maintenir une référence en rayon/catalogue après épuisement du stock d'août (cycle de ~3 mois). La recommandation finale est donc de 2 unités, alignée sur le mode historique du produit, pour éviter tout surstockage sur une référence à faible débit prévisible pour la fin d'année (hors pic festif non encore amorcé). L'analyse de la tendance ne suggère aucune croissance justifiant un passage à 3 unités ou plus le 27 octobre, surtout qu'aucun historique ne montre de commande significative en fin d'année (novembre/décembre 08/12/2023 à 2u). La quantité recommandée de 2u sécurise le besoin courant sans alourdir l'inventaire en période de faible activité pour ce type de tartinable ail des ours, plus propice au printemps/été normalement, mais ici consommé de façon très ponctuelle toute l'année. La base de 2.0 est ainsi confirmée.

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes (1 seule entrée nulle)
- **Saisonnalité**: none
- **Tendance**: Inexistante
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune donnée d'outlier car l'historique est quasi-inexistant (une seule entrée à 0u). ÉTAPE 2 (SAISONNALITÉ): Pas d'historique N-1 disponible pour le mois d'octobre. Produit type boisson (thé glacé) en période automnale, demande attendue modérée. ÉTAPE 3 (TENDANCE): Aucune tendance observable. ÉTAPE 4 (RECOMMANDATION): En l'absence d'historique de vente et pour éviter la rupture sur un produit 'frais' bio, une quantité minimale de sécurité de 6 unités (correspondant généralement à un fardeau ou carton standard en B2B) est recommandée pour tester le marché sans risque de sur-stockage massif.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0052] MF Pois chiches  500g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 06:26:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-29 06:23:47: 3u
- 2024-05-14 08:48:29: 2u
- 2024-02-06 07:12:28: 1u
- 2023-12-05 08:13:39: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:32:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-29 06:23:47: 3u
- 2024-05-14 08:48:29: 2u
- 2024-02-06 07:12:28: 2u
- 2023-12-05 08:13:39: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 08:32:36: 0u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.3u (-6j restants) → prédit 2u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 3 | Stock prédit: 1.1u (18j restants) → prédit 3u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 2 | Stock prédit: -0.7u (-19j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.7u (-20j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Stock prédit: 0.5u (24j restants) → prédit 2u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Stock prédit: 0.1u (4j restants) → prédit 2u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -1.3u (-45j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |


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
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock suffisant: 0.5u (45j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:14:07.117Z*
