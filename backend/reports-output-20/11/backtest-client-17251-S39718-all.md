# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 12
- **Tokens**: 25,955 input + 3,020 output = 28,975 total
- **Coût**: $0.1232 (~12.32¢)
- **Coût par produit LLM**: $0.0103


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 9.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| Exact Match (=0u) | 7 | Égalité parfaite |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 192u vs Médiane: N/Au (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: medium)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
480u, 576u, 384u

**🧠 Raisonnement LLM:**
L'analyse N-1 révèle une demande de fond autour de 96-288u, avec quelques pics exceptionnels (480u en sept, 576u doublé en juin, 384u). La période récente montre une médiane à 192u (en écartant le 384u du 30/09 qui semble exceptionnel). Pas de saisonnalité marquée octobre vs octobre N-1 (96-288u l'an dernier). Je recommande 192u, soit la médiane cohérente avec le rythme actuel observé et la demande de fond historique.

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: N/Au (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: medium)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
576u, 480u, 384u

**🧠 Raisonnement LLM:**
L'analyse N-1 révèle une demande de fond récurrente autour de 96-192u, avec 3 commandes exceptionnelles en juillet 2024 (576u, 480u, 384u) probablement liées à un événement ou promotion ponctuelle. La période récente (sept-oct 2025) confirme une demande stable avec une médiane à 192u et une fréquence hebdomadaire cohérente. Aucune saisonnalité marquée détectée en octobre N-1 vs octobre N, donc je recommande la médiane récente de 192u, quantité la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: N/Au (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
324u, 216u

**🧠 Raisonnement LLM:**
Les données N-1 montrent une demande de fond très stable à 108u (majorité des commandes), avec deux pics exceptionnels de 216u et 324u (probablement événements ponctuels ou promotions). La période récente confirme cette stabilité avec un rythme régulier de 108u toutes les 1-2 semaines. Aucune saisonnalité marquée détectée, la demande reste constante entre septembre et octobre sur les deux années. La prédiction à 108u reflète fidèlement le comportement d'achat habituel du client Carrefour.

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: N/Au (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: medium)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
192u

**🧠 Raisonnement LLM:**
Absence totale de données N-1, mais la période récente montre un pattern très régulier : 4 commandes consécutives de 96u (juil-oct), avec une seule commande exceptionnelle de 192u fin juillet (probablement un événement ponctuel ou stock de sécurité). La demande de fond est clairement établie à 96u par commande, sans variation saisonnière détectable sur les 3 derniers mois. Je recommande 96u qui correspond à la médiane et au mode observé.

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: N/Au (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: medium)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Aucune donnée N-1 disponible, donc analyse uniquement sur 3 mois récents. La demande est très régulière : 192u par semaine sur 4 commandes consécutives (septembre-octobre), avec une seule exception à 96u début septembre (probablement demi-commande ou ajustement). Le pattern hebdomadaire est constant et cohérent, sans saisonnalité évidente. La médiane est 192u, c'est la quantité la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 108u vs Médiane: N/Au (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: medium)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
216u

**🧠 Raisonnement LLM:**
Absence totale de données N-1, donc l'analyse repose uniquement sur la période récente. Sur les 5 dernières commandes, 4 sont strictement identiques à 108u avec un rythme régulier (toutes les 2 semaines environ), et une seule commande exceptionnelle à 216u (exactement le double, probablement un événement ponctuel ou une promotion). La médiane de 108u représente clairement la demande de fond stable de ce produit.

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: N/Au (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: medium)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
196u, 392u, 588u

**🧠 Raisonnement LLM:**
La demande de fond est très stable à 98u par commande sur N-1 (8 occurrences) et sur la période récente (3 occurrences). Les commandes de 196u et plus (juin 2024 et juillet 2025) sont des commandes groupées exceptionnelles, probablement liées à des promotions ou des événements ponctuels. Aucune saisonnalité marquée n'apparaît, la médiane récente confirme 98u comme quantité la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: N/Au (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: low)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et historique récent très limité (4 commandes sur 3 mois, toutes identiques à 110u). Cette régularité parfaite suggère soit une demande stable soit un conditionnement standard B2B. En l'absence de pattern saisonnier détectable et avec une fréquence irrégulière (juillet et septembre), je recommande la valeur médiane observée de 110u, mais avec une confiance faible vu le manque de profondeur historique pour valider toute tendance.

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 6.5u (0j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 57.2u (8j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -14.0u (-3j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -322.3u (-52j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -438.8u (-62j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T20:00:13.264Z*
