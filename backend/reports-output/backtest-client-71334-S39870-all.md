# Rapport Backtest - Client BIODIS

## Contexte

- **Client** : BIODIS (ID: 71334)
- **Commande réelle** : S39870
- **Date commande** : 2025-10-22 12:36:11
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 13,054 input + 16,248 output = 29,302 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.9% | 18 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 56.0% | Score équilibré global |

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
| **MAE** | 25.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 38.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 24.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 207 | 93 | 114.0 | 122.6% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 31 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: low)
- 📊 **Baseline N-1**: 77.5u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle régulier de 27-28 jours), principalement le mercredi ou jeudi
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+50% entre les deux dernières commandes)
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'historique montre une grande régularité temporelle avec un intervalle de 27-28 jours. La dernière commande ayant eu lieu le 1er octobre, la prochaine est attendue vers le 28 ou 29 octobre, soit durant la fenêtre de prédiction. En termes de volume, la commande de 155u est considérée comme un outlier (possible stock de départ ou promo). La tendance récente est passée de 62u à 93u. Nous retenons le volume de la commande la plus récente (93u) pour couvrir le prochain cycle mensuel, sans cumuler plusieurs commandes.

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 207u vs Médiane: 186u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 207u (confidence: high)
- 📊 **Baseline N-1**: 206.67u
- 📊 **Médiane**: 186u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 114u (122.6%)
- 📉 **Erreur Médiane**: 93u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28 jours, principalement le mercredi ou jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 207u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une régularité remarquable avec un intervalle de commande de 27 à 28 jours. La dernière livraison datant du 1er octobre 2025, la prochaine échéance théorique se situe autour du 29 octobre 2025, soit dans la fenêtre d'analyse des 30 jours. Les quantités sont stables (moyenne de 206.6u) sans aucun outlier détecté ni tendance de croissance/décroissance marquée. La recommandation porte sur une commande unique d'un volume aligné sur la moyenne historique récente.

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: high)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28 jours (4 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 93u
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'historique montre un cycle très stable d'environ 28 jours (Intervalles de 28 et 27 jours). La dernière commande ayant eu lieu le 01/10/2025, la prochaine est attendue autour du mercredi 29/10/2025, ce qui se situe bien dans la fenêtre de prédiction de 30 jours. Bien qu'un pic de 155u ait été observé en août (potentiel stockage initial ou effet estival), la demande de fond s'est stabilisée à exactement 93u lors des deux dernières occurrences. On prévoit donc une commande unique de 93u.

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - LLM: 31u vs Médiane: 47u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: low)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 47u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 15u (24.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle observé de 55 jours entre les deux commandes, mais volume récent suggérant une possible fréquence mensuelle
- **Saisonnalité**: none
- **Tendance**: Stabilisation à 31 unités (demande de fond)
- **Outliers détectés**: 62u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 62u d'août est interprétée comme un stockage pour deux mois ou une commande promotionnelle, alors que les 31u d'octobre semblent correspondre à une unité de besoin mensuelle standard.
ÉTAPE 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme neutre.
ÉTAPE 3: On observe un intervalle de 55 jours entre les commandes. Si l'on divise le volume de 62u par cet intervalle, on obtient environ 1.1 unité/jour. La commande de 31u du 1er octobre devrait donc couvrir environ 28 jours.
ÉTAPE 4: La date estimée de la prochaine commande est le 29 octobre 2025 (01/10 + 28j), ce qui se situe à l'intérieur de la fenêtre des 30 prochains jours (finissant le 20/11). La quantité recommandée correspond au dernier volume de fond observé soit 31 unités.

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 27-28 jours (début de mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 31u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité exceptionnelle tant sur le volume (toujours 31 unités) que sur le rythme (intervalles de 27 et 28 jours). La dernière commande ayant eu lieu le 1er octobre 2025, la prochaine est statistiquement attendue entre le 28 et le 29 octobre 2025, ce qui se situe à l'intérieur de la fenêtre de prédiction des 30 jours. Aucune anomalie ou tendance haussière/baissière n'est détectée. La recommandation porte sur une seule commande conformément aux instructions.

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel identifié de 28 jours (4 semaines), le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 62u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité parfaite sur les deux dernières commandes enregistrées (62 unités à 28 jours d'intervalle). La dernière commande date du 04/09/2025. En suivant un cycle de 4 semaines, une commande aurait dû avoir lieu autour du 02/10/2025. Avec 47 jours écoulés depuis la dernière commande à la date actuelle (21/10/2025), le client est en retard sur son cycle habituel ou a un stock tampon plus important. Il est hautement probable qu'une commande de réapprovisionnement de 62u (volume standard constaté) soit passée dans la fenêtre des 30 prochains jours pour couvrir les besoins de novembre. Conformément aux règles, on ne préconise qu'une seule commande de 62u sans cumul.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: low)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 217u
- 2025-09-04 13:24:31: 186u
- 2025-08-07 12:45:07: 217u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 207u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 93u
- 2025-08-07 12:45:07: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-08-07 12:45:07: 62u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: low)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-09-04 13:24:31: 31u
- 2025-08-07 12:45:07: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: high)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 62u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 62u

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
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | Stock prédit: 7.0u (4j restants) → prédit 40u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 100 | Stock prédit: 9.5u (1j restants) → prédit 100u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 31 | Stock prédit: 0.3u (0j restants) → prédit 31u mais non commandé |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 25 | Stock prédit: 10.0u (12j restants) → prédit 25u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | Stock prédit: 12.4u (4j restants) → prédit 62u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | Stock prédit: -136.4u (-10j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: -34.6u (-26j restants) → prédit 62u mais non commandé |
| [PF1690] LD BBQ BIO 300G | 25 | Stock prédit: -16.3u (-37j restants) → prédit 25u mais non commandé |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | Stock prédit: -16.3u (-37j restants) → prédit 25u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -20.1u (-38j restants) → prédit 40u mais non commandé |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 47 | Stock prédit: -7.9u (-12j restants) → prédit 47u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T19:59:19.984Z*
