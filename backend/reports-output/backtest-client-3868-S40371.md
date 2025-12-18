# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S40371
- **Date commande** : 2025-11-14 15:19:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 10,203 input + 18,636 output = 28,839 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 92.9% | 14 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 96.3% | Score équilibré global |

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
| **MAE** | 18.15 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 64 | 80 | 16.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 32 | 80 | 48.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV136] LV Tartinade Betterave 190g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 25 | 53 | 28.0 | 52.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 50 | 53 | 3.0 | 5.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 32u vs Médiane: 32u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: high)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 16u (33.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle récurrent d'environ 28 à 32 jours avec une forte prévalence des commandes le vendredi.
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume modal de 32u.
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle moyen de 29 jours. La dernière commande datant du 17 octobre 2025 (il y a 27 jours), la prochaine commande est attendue de manière imminente, probablement le vendredi 14 ou 21 novembre. Historiquement, le volume oscille entre 16u et 32u, avec une préférence marquée pour 32u (mode statistique). En suivant la tendance de la dernière commande et le besoin de réapprovisionnement cyclique, une quantité de 32u est recommandée pour l'unique prochaine commande dans la fenêtre des 30 jours.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle récurrent d'environ 21 à 28 jours, principalement le vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à 48u
- **Outliers détectés**: 80u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande de fond très stable à 48 unités (mode statistique clair). ÉTAPE 1 : Une commande de 80u en sept. 2024 a été identifiée comme une anomalie ponctuelle. ÉTAPE 2 : Aucune saisonnalité forte n'est observée, le produit se comporte comme une référence fond de rayon. ÉTAPE 3 : La tendance récente confirme un volume de 48u par commande. ÉTAPE 4 : Le cycle de commande récent (15-21 jours) a été franchi, la dernière commande datant d'il y a 27 jours (17/10/2025). Une commande de réapprovisionnement est donc attendue avec une probabilité très élevée dans les prochains jours. Conformément à la règle de non-cumul, nous prédisons une seule livraison de 48u.

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 64u vs Médiane: 64u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: high)
- 📊 **Baseline N-1**: 64u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 16u (20.0%)
- 📉 **Erreur Médiane**: 16u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 15 et 30 jours, avec une forte préférence pour les commandes le vendredi.
- **Saisonnalité**: weak
- **Tendance**: Stable à 64u sur les derniers mois après une année 2024 principalement à 80u.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une commande très régulière. La dernière livraison date du vendredi 17 octobre 2025. Avec un cycle moyen de 20 à 25 jours, le client a déjà dépassé son délai habituel (27 jours écoulés au 13 novembre). Une commande est donc attendue dans la fenêtre immédiate (probablement le vendredi 14 ou le vendredi 21 novembre). Bien que l'historique 2024 affichait souvent 80u, les trois dernières commandes de septembre et octobre 2025 sont strictement constantes à 64u, ce qui définit la nouvelle demande de fond. Conformément à la règle, je ne suggère qu'une seule commande de 64u.

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 48u (60.0%)
- 📉 **Erreur Médiane**: 48u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 21 jours (3 semaines) identifié, jour de commande habituel le vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à 32u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité parfaite sur les deux dernières commandes (32u). L'intervalle observé entre les commandes est de 21 jours. La dernière commande datant du 17/10/2025, le délai écoulé est de 27 jours au moment de l'analyse (13/11/2025). Le client a dépassé son cycle habituel de 21 jours mais se trouve dans une fenêtre temporelle où le stock de sécurité doit être entamé. Une commande est donc hautement probable dans les 30 prochains jours, possiblement dès le vendredi 14/11. On maintient la quantité fixe de 32u.

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - LLM: 25u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle initial de 15 jours (septembre), suivi d'une période d'inactivité de 48 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u (sur historique court)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre deux commandes identiques de 25 unités espacées de 15 jours en septembre. Depuis le 26 septembre, aucune commande n'a été enregistrée (48 jours de silence). Bien que le cycle théorique de 15 jours soit largement dépassé, la nature du produit (tartinade apéritive bio) et l'approche de la période festive de fin d'année suggèrent un réapprovisionnement imminent dans la fenêtre des 30 prochains jours pour compenser l'épuisement probable des stocks. On préconise le maintien de la quantité habituelle de 25 unités pour la prochaine commande.

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 25u vs Médiane: 75u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 75u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 50u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé ou cycle long (>45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable (basé sur un point de données unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée le 26 septembre 2025 (25u). Depuis cette commande, 48 jours se sont écoulés sans nouvel achat. Dans un contexte de distribution agroalimentaire B2B, ce délai suggère soit un produit à rotation lente, soit une commande ponctuelle. Cependant, comme nous entrons dans la période de fin d'année (favorable aux produits de type 'Tartinade') et que le stock précédent a probablement été écoulé en 7 semaines, il est raisonnable de prévoir une commande de réassort dans les 30 prochains jours. La quantité est maintenue à 25u, calquée sur l'unique volume de référence connu.

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 25u vs Médiane: 25u (Réel: 53u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 53u
- 📉 **Erreur LLM**: 28u (52.8%)
- 📉 **Erreur Médiane**: 28u (52.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle initial de 15 jours observé en septembre, suivi d'une absence prolongée de 48 jours
- **Saisonnalité**: strong
- **Tendance**: Stable à 25u avec potentiel de réactivation saisonnière
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur deux points de données identiques (25u) en septembre avec un intervalle de 15 jours. Bien qu'aucune commande n'ait été enregistrée depuis 48 jours (octobre blanc), le produit (Tartinade aux Truffes) est fortement lié à la saisonnalité des fêtes de fin d'année. À partir de la mi-novembre (date actuelle), une commande de réapprovisionnement pour les stocks de Noël est hautement probable. En l'absence d'historique N-1, nous prédisons la prochaine commande sur la base de la quantité habituelle de fond de 25 unités, sans cumuler malgré l'absence prolongée, conformément à la règle de la commande unique.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 16u
- 2024-09-23 07:00:28: 32u
- 2024-08-16 11:44:09: 32u
- 2024-07-05 09:22:25: 16u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 32u
- 2024-03-27 14:20:05: 32u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 16u
- 2024-01-05 08:53:58: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 48u
- 2025-09-26 09:47:05: 48u
- 2025-09-11 14:14:00: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 48u
- 2024-09-23 07:00:28: 80u
- 2024-08-16 11:44:09: 48u
- 2024-07-05 09:22:25: 64u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 48u
- 2024-03-27 14:20:05: 48u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 48u
- 2024-01-05 08:53:58: 48u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 64u
- 2025-09-26 09:47:05: 64u
- 2025-09-11 14:14:00: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 80u
- 2024-09-23 07:00:28: 48u
- 2024-08-16 11:44:09: 80u
- 2024-07-05 09:22:25: 80u
- 2024-05-06 12:17:20: 80u
- 2024-04-25 07:54:19: 80u
- 2024-03-27 14:20:05: 80u
- 2024-02-23 08:25:35: 64u
- 2024-01-26 09:38:43: 80u
- 2024-01-05 08:53:58: 64u

**✅ Quantité LLM**: 64u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 53u

</details>




---

## False Positives (1)

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
| [LV331] LV Tartinade Lentils Balsamico 190g | 25 | Stock prédit: -27.0u (-24j restants) → prédit 25u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T19:58:13.670Z*
