# Rapport Backtest - Client BELICIOUS

## Contexte

- **Client** : BELICIOUS (ID: 33756)
- **Commande réelle** : S39994
- **Date commande** : 2025-10-29 13:48:17
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 15,531 input + 30,119 output = 45,650 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.0% | 25 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
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
| **MAE** | 4.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 102.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 131.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 6 | 4.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 9 | 2 | 7.0 | 350.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 8 | 6.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0055] MF Noix de cajou - Curry 133g | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0012] MF Olives Mix 500g | 3 | 8 | 5.0 | 62.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 4u (66.7%)
- 📉 **Erreur Médiane**: 4u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (cycle estimé > 30 jours, dernière commande il y a 36 jours)
- **Saisonnalité**: strong
- **Tendance**: Stable à 2u (basé sur commande unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique ne présente qu'une seule commande de 2 unités le 22 septembre 2025. Le produit étant une mayonnaise à la truffe, il est soumis à une forte saisonnalité positive à l'approche des fêtes de fin d'année (novembre/décembre). Étant donné que 36 jours se sont écoulés depuis la dernière commande, un réapprovisionnement est probable dans les 30 prochains jours pour couvrir la demande de novembre. La confiance est faible en raison de la rareté des données transactionnelles, mais le contexte produit suggère un maintien du stock.

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 9u vs Médiane: 8u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 9u (confidence: medium)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 7u (350.0%)
- 📉 **Erreur Médiane**: 6u (300.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel variant entre 20 et 31 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive observée (moyenne passée de 6u à 9u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune commande n'est considérée comme un outlier strict (>2x moyenne), bien que la commande de 2u soit un point bas de stockage. Étape 2: La saisonnalité est faible mais suggère un maintien des volumes en fin d'année (8u en octobre N-1). Étape 3: La tendance récente est à la hausse avec des passages de 8u à 10u lors des deux derniers mois pleins. Étape 4: Le cycle de commande moyen étant de ~26 jours, et la dernière commande datant du 22 septembre (soit 36 jours d'écart), une commande de réapprovisionnement est prévue très prochainement dans la fenêtre des 30 jours. On préconise 9 unités pour s'aligner sur la tendance haussière récente tout en lissant le pic à 10u.

</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 0u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 4.16u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Historique N-1 bi-mensuel (15-20 jours), mais rupture de rythme majeure en 2025 avec 83 jours d'inactivité.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive à forte - Inactivité prolongée depuis le 06/08/2025.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une dégradation nette de la demande pour ce produit. 1/ Nettoyage : Les volumes historiques sont cohérents (médiane à 4.5u). 2/ Saisonnalité : Bien que l'année N-1 affichait une activité en octobre, l'année en cours est marquée par un silence total de 83 jours. 3/ Tendance : La dernière commande remonte au 06/08/2025 avec une quantité minimale (1u), marquant un fort ralentissement par rapport aux 4.6u de moyenne en 2024. 4/ Recommandation : Le cycle habituel de 15-20 jours est largement dépassé. Sans signal de reprise ou de commande de réapprovisionnement depuis près de 3 mois, la probabilité d'une commande dans les 30 prochains jours est jugée nulle. Le produit semble être en fin de vie ou déréférencé chez ce client.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:23:29: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:23:29: 10u
- 2025-08-22 12:20:23: 8u
- 2025-08-06 11:16:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:29:22: 8u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u

**✅ Quantité LLM**: 9u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 11:16:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 12:48:10: 2u
- 2024-10-11 06:29:22: 5u
- 2024-09-26 06:23:33: 6u
- 2024-09-11 08:44:25: 4u
- 2024-08-22 06:40:04: 6u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (17)

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
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 0.9u (27j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: 0.4u (8j restants) → prédit 2u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 3 | Stock prédit: -0.8u (-7j restants) → prédit 3u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | Stock prédit: 0.3u (4j restants) → prédit 3u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Stock prédit: -1.2u (-13j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 6 | Stock prédit: 3.0u (11j restants) → prédit 6u mais non commandé |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [MF0014] MF Olives noires 500g | 4 | Stock prédit: 1.3u (12j restants) → prédit 4u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 3 | Stock prédit: 1.8u (19j restants) → prédit 3u mais non commandé |
| [MF0052] MF Pois chiches  500g | 7 | Stock prédit: 2.1u (10j restants) → prédit 7u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 4 | Stock prédit: 2.9u (19j restants) → prédit 4u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 4 | Stock prédit: 1.8u (14j restants) → prédit 4u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 6 | Stock prédit: 2.5u (15j restants) → prédit 6u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 4 | Stock prédit: 1.3u (9j restants) → prédit 4u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Stock prédit: -3.0u (-49j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 4 | Stock prédit: -3.4u (-41j restants) → prédit 4u mais non commandé |


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
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | LLM avait prédit 0 (pas de besoin) avec stock: -8.7u (-73j) mais client a commandé 2u |
| [VID0009] Consigne casier | 17 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 102 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T20:00:04.521Z*
