# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S40210
- **Date commande** : 2025-11-07 12:48:24
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 7,376 input + 2,208 output = 9,584 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 9 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 71.4% | Score équilibré global |

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
| **MAE** | 113.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 51.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -71.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 480 | 400.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 132 | 264 | 132.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 11 | 40 | 29.0 | 72.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 160u (Réel: 480u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 213.3u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 480u
- 📉 **Erreur LLM**: 400u (83.3%)
- 📉 **Erreur Médiane**: 320u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire avec dominance le lundi
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 240u
- **Outliers détectés**: 80u, 320u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande bimodal (Lundi/Jeudi). Le volume principal est capturé le lundi (240u les deux dernières semaines). Historiquement, lorsqu'une commande survient un jeudi peu de temps après un gros volume le lundi précédent (comme le 03/11 pour 240u), le volume est réduit à l'unité de base de 80u ou 160u. Le 23/10 (jeudi), le client n'avait commandé que 80u après un cumul de 320u le lundi précédent. Étant donné la stabilité de la consommation à environ 240-320u par semaine, et ayant déjà commandé 240u ce lundi 03/11, la commande du jeudi 06/11 correspond à un ajustement de fin de semaine.

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire, principalement le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable avec pics ponctuels de stockage
- **Outliers détectés**: 15u, 15u

**🧠 Raisonnement LLM:**
L'analyse montre une récurrence forte le lundi. Une commande de 5u a déjà été passée le lundi 03/11. Cependant, l'historique récent (octobre 2025) et N-1 (avril/juin 2024) montre l'apparition de commandes complémentaires le jeudi à hauteur de 4u à 10u. Étant donné que le volume du lundi dernier (5u) est dans la moyenne basse, et qu'une commande le jeudi 23/10 (15u) suggère un besoin de réapprovisionnement de milieu de semaine en cas de pic d'activité, une quantité de 4u (baseline de sécurité observée sur les jeudis standards) est la plus probable pour compléter le stock sans sur-stocker avant le cycle du lundi suivant.

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 132u (Réel: 264u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 132u (confidence: high)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 132u
- ✅ **Réel commandé**: 264u
- 📉 **Erreur LLM**: 132u (50.0%)
- 📉 **Erreur Médiane**: 132u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (principalement le lundi)
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée vers 110u-132u
- **Outliers détectés**: 18u, 208u

**🧠 Raisonnement LLM:**
L'analyse des cycles récents montre une alternance entre 88u et 132u (multiples de 44u, probablement la taille d'une palette ou d'une couche). La dernière commande date du lundi 27/10 (132u). La commande actuelle intervenant le jeudi 06/11, soit 10 jours plus tard, nous sommes sur un cycle légèrement allongé qui suggère un besoin de réapprovisionnement complet. En comparant avec N-1 à la même période (septembre/octobre 2024), les volumes étaient de 104u-156u. La moyenne pondérée des 5 dernières commandes (114u) et la tendance de consommation actuelle poussent vers le palier haut de 132u pour couvrir le retard de 3 jours par rapport au cycle hebdomadaire habituel.

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 11u vs Médiane: 20u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 11u (confidence: medium)
- 📊 **Baseline N-1**: 9.4u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 29u (72.5%)
- 📉 **Erreur Médiane**: 20u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (25-30 jours) avec préférence pour les lundis et jeudis
- **Saisonnalité**: none
- **Tendance**: Hausse significative +40% vs N-1
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande environ tous les 30 jours. La dernière commande date d'il y a exactement un mois (06/10). Bien que le volume de septembre (20u) semble être un pic exceptionnel de stockage ou d'événement, la commande d'octobre (12u) confirme une hausse structurelle par rapport à la moyenne N-1 qui oscillait entre 6 et 10u. Le besoin théorique se situe à 11.2u (moyenne pondérée excluant l'outlier de 20u mais intégrant la tendance haussière). On arrondit à 11u pour refléter la consommation réelle lissée du trimestre.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 240u
- 2025-10-27 06:58:44: 240u
- 2025-10-23 09:13:38: 80u
- 2025-10-20 08:16:09: 160u
- 2025-10-20 08:08:48: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 160u
- 2024-10-21 06:08:37: 240u
- 2024-10-10 08:27:59: 160u
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 480u

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 5u
- 2025-10-27 06:58:44: 2u
- 2025-10-23 09:13:38: 15u
- 2025-10-20 08:16:09: 4u
- 2025-10-20 08:08:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 10u
- 2024-10-21 06:08:37: 4u
- 2024-09-16 11:50:49: 6u
- 2024-08-12 08:25:02: 15u
- 2024-06-24 09:19:20: 4u
- 2024-06-17 07:40:59: 10u
- 2024-06-17 07:22:49: 8u
- 2024-06-06 12:27:23: 4u
- 2024-05-31 06:50:36: 4u
- 2024-05-27 07:09:19: 2u
- 2024-04-04 08:57:19: 10u
- 2024-03-07 02:48:05: 2u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 06:58:44: 132u
- 2025-10-20 08:16:09: 88u
- 2025-10-06 09:21:48: 88u
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 156u
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u

**✅ Quantité LLM**: 132u (confidence: high)
**📊 Quantité Réelle**: 264u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:21:48: 12u
- 2025-09-11 08:10:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 10u
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u

**✅ Quantité LLM**: 11u (confidence: medium)
**📊 Quantité Réelle**: 40u

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
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 4 | Stock prédit: -0.5u (-5j restants) → prédit 4u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.8u (-48j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:33:52.397Z*
