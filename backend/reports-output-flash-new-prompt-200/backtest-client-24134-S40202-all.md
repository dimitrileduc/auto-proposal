# Rapport Backtest - Client Terre de fromages S.A

## Contexte

- **Client** : Terre de fromages S.A (ID: 24134)
- **Commande réelle** : S40202
- **Date commande** : 2025-11-14 10:30:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 12,485 input + 4,500 output = 16,985 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 22 produits prédits, 11 corrects |
| **Rappel** | 73.3% | 15 produits réels, 11 détectés |
| **F1-Score** | 59.5% | Score équilibré global |

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
| **MAE** | 1.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 51.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 53.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [LV146] LV Sauce Aïoli 200 ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 6 | 4.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel / Très faible rotation
- **Saisonnalité**: none
- **Tendance**: Stable (volume minimal)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur l'unique point de donnée. Étape 2: Absence d'historique N-1 pour confirmer une saisonnalité, mais la nature du produit (Aïoli) suggère une demande stable ou estivale hors contexte ici. Étape 3: Le produit présente une rotation extrêmement faible avec une seule unité commandée en 3 mois (08/10). Étape 4: La recommandation se limite au strict minimum (1 unité) pour couvrir une éventuelle demande ponctuelle sans générer de stock mort, compte tenu de la faible vélocité de la référence.

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 6u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle à trimestrielle
- **Saisonnalité**: strong
- **Tendance**: Stable à faible volume (2-3u)
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse montre quatre phases distinctes. 1) Nettoyage: La commande de 10u en Nov-2024 est identifiée comme un outlier (pic de pré-stockage ou promotion) par rapport à la moyenne de fond de 2.5u. 2) Saisonnalité: Il existe un impact fort lié aux produits de fêtes (Truffes). En novembre dernier, le volume a bondi, signalant une préparation pour la fin d'année. 3) Tendance: Le volume récent est faible (2u en octobre), mais le produit entre dans sa phase de haute saisonnalité. 4) Recommandation: On part sur une base de 2.5u, ajustée à la hausse pour anticiper la demande de fin d'année, tout en restant conservateur (6u) par rapport aux 10u de l'an dernier pour éviter le sur-stockage si la dynamique B2B est plus lente cette année.

</details>


<details>
<summary><strong>3. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 9 semaines (jeudi)
- **Saisonnalité**: none
- **Tendance**: Inexistante ou demande très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): L'unique point de donnée (1u) ne présente pas de caractère exceptionnel pour un format 200 ml. ÉTAPE 2 (SAISONNALITÉ): Aucune donnée historique pour confirmer une saisonnalité, bien que le segment tartare soit souvent lié aux périodes de grillades ou fêtes. ÉTAPE 3 (TENDANCE): Aucune commande depuis 60 jours, ce qui suggère une rotation extrêmement lente ou un usage ponctuel. Cependant, la demande actuelle survient un jeudi, identique à l'historique. ÉTAPE 4 (FINAL): Compte tenu du risque de péremption en B2B pour des produits à faible rotation, la recommandation minimale de 1 unité est préconisée pour répondre au besoin sans risque de surstockage.

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage de la commande de 10u (nov 2024) considérée comme un outlier (2.5x la moyenne). La demande de fond se situe autour de 4.4u. Étape 2: On observe une légère hausse en fin d'année (nov/jan) par rapport à l'été, suggérant une faible saisonnalité positive pour ce produit bio grillé/épicé en période hivernale. Étape 3: La tendance globale est à la baisse, passant de pics à 6-8u en 2024 à 3u lors de la dernière commande de septembre 2025. Étape 4: La recommandation de 4u concilie la demande de fond (4.4u) et le ralentissement récent (3u), tout en anticipant le besoin saisonnier de novembre identifié en N-1, restant prudent pour éviter le surstockage sur une référence à faible rotation.

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 6u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 4.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence de commande, environ tous les 2 mois sans jour fixe strict
- **Saisonnalité**: strong
- **Tendance**: En baisse par rapport à N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'est identifiée comme outlier, les volumes oscillent entre 3u et 6u de manière organique. ÉTAPE 2 (Saisonnalité): Le produit (Tartinade Potiron) a une saisonnalité forte liée à l'automne/hiver. En novembre 2024, une commande de 6u a été passée le 12/11. ÉTAPE 3 (Tendance): La dernière commande remonte au 11/09 (3u), montrant un ralentissement par rapport aux 6u de l'année précédente à la même date de septembre (19/09/24). ÉTAPE 4 (Recommandation): Bien que la tendance récente soit à 3u, l'entrée dans le pic saisonnier de novembre justifie de remonter à 6u pour couvrir la demande hivernale tout en restant sur le volume historique haut observé l'an dernier.

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 2 à 3 mois sans jour de semaine fixe
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (2u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'analyse montre deux niveaux de commande : un fond de 2u et des pics à 6u (potentiellement promotionnels ou stock de sécurité). En écartant les pics de 6u (De-eventing), la demande de fond est de 2u. La saisonnalité N-1 montre une commande en novembre (6u), suggérant un besoin actuel, mais la tendance récente de septembre était de 2u. Étant donné la faible fréquence de rotation du produit et l'absence de tendance haussière claire, une commande conservatrice de 2 unités est recommandée pour couvrir la demande bimestrielle sans risquer le sur-stockage.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, sans rythme hebdomadaire fixe (cycle de 1 à 3 mois)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (3u)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation sans cycle de réapprovisionnement rigide. ÉTAPE 1: La commande de 8u en janvier 2024 est traitée comme un outlier (stockage initial ou événement spécifique). La moyenne corrigée s'établit à ~3u. ÉTAPE 2: La saisonnalité est faible, bien qu'un pic léger ait été observé en septembre N-1 (6u) non reproduit en 2025. ÉTAPE 3: La tendance est stable avec la dernière commande de septembre à 3u. ÉTAPE 4: Le jeudi est le jour habituel de commande. Sans commande depuis deux mois, un besoin de réapprovisionnement de fond est probable. On recommande 3 unités pour couvrir la demande de base sans risquer le surstockage sur ce produit lent.

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 mois
- **Saisonnalité**: weak
- **Tendance**: Stable entre 2u et 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES D'ANALYSE : 1. DE-EVENTING : Aucune donnée ne sort du spectre habituel (2u à 4u), pas d'outliers identifiés. 2. SAISONNALITÉ : On observe une commande à la même période en N-1 (12/11/2024) pour 4u. Il semble y avoir un besoin récurent en novembre, potentiellement lié à l'approche des fêtes ou à la rotation de saisonnalité automnale. 3. TENDANCE RÉCENTE : La dernière commande date de 2 mois (septembre) pour 3u. Le volume est stable. 4. RECOMMANDATION : En croisant la stabilité récente (3u) et le pic de l'année dernière à la même date (4u), une commande de 4 unités est préconisée pour couvrir la période sans risque de sur-stockage important, ce produit ayant une rotation lente.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique, historiquement le jeudi
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3-4u par commande
- **Outliers détectés**: 6u, 6u

**🧠 Raisonnement LLM:**
Étape 1: Identification des pics de juin 2024 (6u) comme outliers potentiels liés à une saisonnalité estivale ou promotionnelle. La base de consommation hors pic se situe autour de 3 unités. Étape 2: Saisonnalité faible en novembre; les données N-1 montrent une commande de 3u en septembre mais aucune donnée spécifique sur fin d'année. Étape 3: La tendance est stable avec une dernière commande enregistrée à 4 unités en septembre. Étape 4: En l'absence de données récentes (dernière commande il y a 2 mois), on se base sur la dernière valeur observée le même jour de la semaine (jeudi) en conservant un stock de sécurité minimal, soit 4 unités pour couvrir la demande de fond sans risque de sur-stockage massif sur une référence à faible rotation hebdomadaire automatique liquide ou semi-permanente après analyse des 3 derniers mois peu denses en données. La confiance est faible car l'historique récent est très pauvre (1 seule commande en 2025). Mais la récurrence du jeudi pour les commandes suggère un besoin de réapprovisionnement ponctuel cohérent avec la date actuelle (jeudi 13/11). ainsi la quantité recommandée est de 4u conformément au dernier volume observé en septembre 2025. 

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:15:49: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:15:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 10u
- 2024-09-19 06:59:28: 4u
- 2024-06-20 11:08:54: 2u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 2u
- 2024-03-05 07:47:58: 5u

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [LV145] LV Sauce Tartare 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 10u
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 2u
- 2024-05-27 07:25:56: 4u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 8u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 6u
- 2024-04-10 10:25:30: 3u
- 2024-03-05 07:47:58: 6u

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 6u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 3u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 4u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 8u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 4u
- 2024-09-19 06:59:28: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 06:59:28: 3u
- 2024-06-20 11:08:54: 6u
- 2024-06-07 11:26:46: 6u
- 2024-05-27 07:25:56: 2u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 4u

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Stock prédit: -0.3u (-3j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | Stock prédit: 0.6u (6j restants) → prédit 3u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 3 | Stock prédit: -0.8u (-10j restants) → prédit 3u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | Stock prédit: 0.4u (4j restants) → prédit 5u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |


---

## False Negatives (4)

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
| [REB05] REB chips bio - sel de mer 35g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:13:39.072Z*
