# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 11,450 input + 5,263 output = 16,713 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.0% | 43 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 13.0% | Score équilibré global |

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
| **MAE** | 18.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (3)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 56 | 112 | 56.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 56u (50.0%)
- 📉 **Erreur Médiane**: 56u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes massives groupées le samedi
- **Saisonnalité**: none
- **Tendance**: Pic de volume ponctuel (cumul de 336u en 1 jour)
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): L'historique ne contient qu'une seule journée d'activité (12 avril) avec 5 commandes totalisant 336 unités. La commande de 112u est traitée comme un outlier potentiel ou un doublement de lot. La base unitaire récurrente semble être de 56u. Étape 2 (Saisonnalité): Aucune donnée N-1 disponible pour évaluer la saisonnalité, impact considéré comme nul par défaut. Étape 3 (Tendance): On observe un comportement de commande atypique (5 commandes en moins de 2 minutes), suggérant une saisie manuelle groupée ou un événement promotionnel immédiat. Le jour actuel (dimanche) suit immédiatement ce pic du samedi. Étape 4 (Recommandation): Sans historique sur la durée de rotation de ces 336 unités, la prudence impose de revenir à la plus petite unité de commande cohérente (56u) pour couvrir un éventuel besoin résiduel sans aggraver un sur-stockage probable après le volume massif de la veille.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Concentration massive de commandes le même jour (samedi)
- **Saisonnalité**: none
- **Tendance**: Pic de volume ponctuel et inhabituel
- **Outliers détectés**: 112u

**🧠 Raisonnement LLM:**
L'analyse montre une anomalie de données : 5 commandes ont été passées quasi-simultanément le samedi 12 avril (entre 10:31 et 10:32). La commande de 112u est considérée comme un outlier (double du volume unitaire habituel de 56u observé sur les autres lignes). En l'absence d'historique N-1 ou de recul sur plusieurs semaines, la demande de fond est estimée à 56 unités (le lot standard répété). La recommandation reste prudente à 56u pour couvrir la demande courante sans risquer le sur-stockage suite à l'explosion de commandes la veille, qui ressemble à une régularisation de stock ou une commande groupée exceptionnelle plutôt qu'à une tendance de consommation quotidienne durable. La confiance est faible car les données ne couvrent qu'un seul jour d'activité historique réelle sur ce produit via l'interface de commande le 12 avril 2025. Nous préconisons de maintenir le volume unitaire standard identifié (56u). Aucun impact saisonnier ne peut être validé sans données N-1 ou périodicité prolongée sur ce produit premium bio spécifique le dimanche 13 avril (lendemain immédiat d'un gros réapprovisionnement). Une commande de 56 unités est suffisante pour maintenir la disponibilité s'il s'agit d'une forte rotation naissante tout en limitant l'exposition au stock immobilisé après les 336 unités déjà commandées la veille (somme totale des 5 commandes du samedi). Le besoin immédiat (dimanche) est probablement déjà couvert par la livraison du samedi, mais une prédiction de 56u est la base théorique nettoyée.

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 56u vs Médiane: 56u (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: low)
- 📊 **Baseline N-1**: 56u
- 📊 **Médiane**: 56u
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées le samedi matin (triple saisie)
- **Saisonnalité**: none
- **Tendance**: Stable à 56u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Les trois commandes enregistrées le 12 avril sont identiques (56u) et très rapprochées dans le temps (quelques minutes/secondes), suggérant soit une saisie multiple par erreur, soit un éclatement de commande pour un même besoin hebdomadaire. La valeur 56u est retenue comme base. Étape 2: Aucune donnée N-1 n'est disponible pour évaluer la saisonnalité, impact considéré comme neutre. Étape 3: Le pattern est ultra-récent (toutes les données datent de la veille). Le cycle semble être hebdomadaire le samedi. Étape 4: Puisqu'une commande massive de 168u (3x56) ou au moins un réapprovisionnement de 56u vient d'avoir lieu hier (12 avril), une nouvelle commande le dimanche 13 avril est prématurée par rapport au cycle observé. Cependant, pour maintenir le stock de sécurité sur ce volume de 56u identifié comme l'unité de besoin standard, la recommandation reste fixée sur cette unité de base par prudence, bien que la confiance soit faible due au manque d'historique long terme ou de visibilité sur les stocks restants après les saisies de la veille. On privilégie la stabilité par rapport au dernier mouvement connu sans appliquer de hausse de tendance injustifiée sur 24h d'historique seulement. Si les 3 commandes du 12/04 étaient une erreur de saisie, recommander 56u sécurise le flux réel; si elles étaient volontaires, le besoin hebdomadaire est déjà couvert et cette recommandation servira de stock tampon constant pour le prochain cycle hebdomadaire prévu samedi prochain N+6 jours (Période B2B). Nous restons conservateurs sur la valeur pivot identifiée de 56u. Étant donné l'absence d'historique, la confiance reste basse car nous ne savons pas si les commandes de la veille étaient exceptionnelles ou régulières (pas de comparaison possible avec les semaines précédentes). La date du jour étant un dimanche, lendemain d'un gros volume enregistré, on recommande la quantité standard observée de 56u pour pallier toute rupture si le volume de la veille était une commande spot déjà consommée.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:25: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: low)
**📊 Quantité Réelle**: 112u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:32:35: 112u
- 2025-04-12 10:32:05: 56u
- 2025-04-12 10:32:00: 56u
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: low)
**📊 Quantité Réelle**: 56u

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-04-12 10:31:43: 56u
- 2025-04-12 10:31:18: 56u
- 2025-04-12 10:04:36: 56u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 56u (confidence: low)
**📊 Quantité Réelle**: 56u

</details>




---

## False Positives (40)

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
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: NaNu (NaNj restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: NaNu (NaNj restants) → prédit 72u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 54 | Stock prédit: NaNu (NaNj restants) → prédit 54u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 36 | Stock prédit: NaNu (NaNj restants) → prédit 36u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 3 | Stock prédit: NaNu (NaNj restants) → prédit 3u mais non commandé |
| [SOWA01] SOWA citron menthe 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 6 | Stock prédit: NaNu (NaNj restants) → prédit 6u mais non commandé |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Stock prédit: NaNu (NaNj restants) → prédit 5u mais non commandé |
| [KLAK01] KLAK Maté 330ml | 2 | Stock prédit: NaNu (NaNj restants) → prédit 2u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 18 | Stock prédit: NaNu (NaNj restants) → prédit 18u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 26 | Stock prédit: NaNu (NaNj restants) → prédit 26u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 18 | Stock prédit: NaNu (NaNj restants) → prédit 18u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: NaNu (NaNj restants) → prédit 30u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 42 | Stock prédit: NaNu (NaNj restants) → prédit 42u mais non commandé |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 13 | Stock prédit: NaNu (NaNj restants) → prédit 13u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: NaNu (NaNj restants) → prédit 10u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: NaNu (NaNj restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: NaNu (NaNj restants) → prédit 25u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 23 | Stock prédit: NaNu (NaNj restants) → prédit 23u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 8 | Stock prédit: NaNu (NaNj restants) → prédit 8u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 56 | Stock prédit: NaNu (NaNj restants) → prédit 56u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: NaNu (NaNj restants) → prédit 64u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: NaNu (NaNj restants) → prédit 64u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:02:47.286Z*
