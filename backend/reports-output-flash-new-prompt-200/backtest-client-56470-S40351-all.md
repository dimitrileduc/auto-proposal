# Rapport Backtest - Client Saccone, Cédric - La ferme au moulin

## Contexte

- **Client** : Saccone, Cédric - La ferme au moulin (ID: 56470)
- **Commande réelle** : S40351
- **Date commande** : 2025-11-13 13:55:48
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 8,312 input + 3,420 output = 11,732 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 12 produits prédits, 4 corrects |
| **Rappel** | 44.4% | 9 produits réels, 4 détectés |
| **F1-Score** | 38.1% | Score équilibré global |

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
| **MAE** | 1.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 87.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV161] LV Tartinade Mangue curry 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 0 | 2.0 | 0.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 0 | 1.0 | 0.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique, environ une commande tous les 1 à 2 mois sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, toutes les commandes sont unitaires (1u). Étape 2: Aucune saisonnalité marquée n'apparaît entre N-1 et la période actuelle pour ce produit spécifique. Étape 3: La tendance est extrêmement stable mais à très faible rotation, avec une seule commande enregistrée ces 3 derniers mois (août). Étape 4: Étant donné le caractère sporadique de la demande et le volume unitaire constant, une recommandation de 1 unité est préconisée pour répondre au besoin ponctuel sans créer de surstock dormeur sur une référence à faible rotation.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 0u
- 📉 **Erreur LLM**: 1u (Infinity%)
- 📉 **Erreur Médiane**: 1u (Infinity%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot tous les 30 à 60 jours sans jour fixe strict
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable et faible (1 unité par commande). Les données historiques (N-1 et récentes) ne révèlent aucune accélération de la demande ni aucun outlier (toutes les commandes sont de 1u). Bien que la dernière commande enregistrée remonte à août (environ 90 jours), l'absence de tendance haussière ou de saisonnalité marquée pour cette référence bio spécifique justifie une approche conservatrice. La prédiction se base sur le maintien du stock de sécurité habituel d'une unité pour couvrir le besoin ponctuel sans risquer d'obsolescence sur un produit à faible rotation. La confiance est faible en raison de l'espacement important entre les commandes (faible échantillonnage). Chaque commande passée est de 1u, il est donc logique de recommander 1u pour le réapprovisionnement actuel (mercredi). Aucun signe de rupture de rythme ne suggère une augmentation du volume de commande habituel (1u). La recommandation finale reste donc 1 unité pour répondre à la demande de fond théorique tout en évitant le sur-stockage sur une référence à rotation lente (B2B). Pas d'ajustement saisonnier ou de tendance à appliquer ici contenu de la stabilité parfaite de l'historique (1u constant). La demande est ponctuelle et ne semble pas suivre un cycle hebdomadaire rigide malgré une légère préférence historique pour le vendredi (ici nous sommes mercredi). Aucun impact de saisonnalité N-1 n'est détecté pour ce mois de novembre spécifique sur cette référence de tartinade bio. L'objectif est donc de maintenir le niveau minimal de commande observé historiquement (1 unité). La stratégie est de privilégier la rotation du stock plutôt que le volume, en accord avec les principes B2B de gestion de produits de niche agroalimentaire. La livraison demandée pour un mercredi reste dans la fenêtre habituelle des commandes passées (mardi à vendredi). En conclusion, la quantité de 1 correspond au besoin structurel identifié sans prise de risque inutile sur le stock de couverture (0% d'ajustement requis). Le raisonnement suit les 4 étapes : nettoyage (aucun outlier), saisonnalité (aucune), tendance (stable @ 1u), recommandation (maintien @ 1u).

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique long (> 30 jours), historiquement le vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune anomalie détectée, les volumes sont structurellement bas (1-2u). Étape 2 (Saisonnalité): Historique N-1 montre des commandes en août/septembre mais rien en novembre; l'impact saisonnier est jugé faible pour cette période. Étape 3 (Tendance): Le produit est en très faible rotation avec une seule commande enregistrée ces 3 derniers mois (août). Le mode de commande est passé de vendredi à jeudi, et maintenant mercredi. Étape 4 (Recommandation): Au vu du ralentissement de la fréquence et de la nature 'Tartinade BIO' (produit de niche), une approche conservatrice de 1 unité est préconisée pour couvrir la demande ponctuelle sans risque de péremption.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-09 06:25:50: 1u
- 2024-07-09 12:21:29: 1u
- 2024-06-21 06:27:18: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-06 10:05:50: 1u
- 2024-08-09 06:25:50: 1u
- 2024-07-09 12:21:29: 1u
- 2024-06-21 06:27:18: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 0u

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-14 06:10:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-06 10:05:50: 2u
- 2024-08-09 06:25:50: 1u
- 2024-06-21 06:27:18: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

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
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Stock prédit: -0.1u (-5j restants) → prédit 2u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: -0.6u (-31j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Stock prédit: -0.6u (-32j restants) → prédit 2u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.1u (12j restants) → prédit 1u mais non commandé |


---

## False Negatives (5)

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
| [DIS0011] Display Foodprint Karton LV | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV136] LV Tartinade Betterave 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV131] LV Tartinade Potiron 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:35.389Z*
