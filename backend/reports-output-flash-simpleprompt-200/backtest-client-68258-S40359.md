# Rapport Backtest - Client TERROIRIST, Thomas

## Contexte

- **Client** : TERROIRIST, Thomas (ID: 68258)
- **Commande réelle** : S40359
- **Date commande** : 2025-11-14 11:38:35
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 11,417 input + 4,347 output = 15,764 total


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
| **MAE** | 2.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 68.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | 8 | 5.0 | 62.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 5 | 4.0 | 80.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 3u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 5u (62.5%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des occurrences le mardi et mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume, moyenne de 3.2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des volumes fluctuant entre 1u et 6u avec une moyenne de 3.2 unités. La commande du 12 novembre (hier) était très faible (1u), ce qui suggère soit un reliquat, soit un besoin immédiat incomplet. En l'absence de données N-1 et face à une alternance de petits et moyens volumes, une recommandation de 3 unités (proche de la moyenne des 5 dernières commandes) permet de lisser la demande tout en tenant compte de la faible quantité commandée la veille.

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier mais récent (1 jour d'écart entre les deux dernières commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible demande et une tendance à la baisse des volumes par commande (passant de 3 unités à 1 unité). Une commande a été passée hier (mercredi) pour 1 unité. La demande du jeudi 13 novembre est très rapprochée ; dans ce contexte B2B de faible rotation, il est hautement probable que le besoin soit unitaire pour de l'ajustement de stock ou une commande client spécifique tardive.

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération récente (cycle 24h observé les 12-13 nov)
- **Saisonnalité**: none
- **Tendance**: Hausse de fréquence sur les 24 dernières heures
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très fragmenté. Après deux mois d'inactivité (septembre à novembre), le client a passé une commande de 1u hier (mercredi 12). La demande pour aujourd'hui (jeudi 13) suggère soit un oubli de commande la veille, soit un besoin de micro-réapprovisionnement très spécifique. En l'absence de volume de gros (3u était le maximum en septembre), et vu la commande unitaire de la veille, le maintien à 1 unité est le plus probable pour éviter le surstock sur une référence à faible rotation.

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 4u (80.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme aléatoire, environ toutes les 3 à 4 semaines
- **Saisonnalité**: none
- **Tendance**: Hausse récente à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une commande de 4 unités effectuée seulement la veille de la date de prédiction (mercredi 12 novembre). Compte tenu de la fréquence historique espacée (entre 25 et 60 jours d'intervalle), le besoin immédiat pour le jeudi 13 novembre est quasi nul. La quantité recommandée est fixée à 1 au titre de stock de sécurité résiduel ou ajustement de dernière minute, bien que le cycle de réapprovisionnement soit déjà couvert par l'action de la veille. La confiance reste faible en raison de l'irrégularité des intervalles passés et de la proximité immédiate de la dernière saisie de commande.

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme aléatoire, environ 2 à 3 commandes par mois sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Hausse légère (moyenne mobile passante de 3.3 à 4.6)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière oscillant entre 2 et 6 unités, avec une moyenne stable autour de 4 unités par commande sur les 5 dernières occurrences. Une commande de 4 unités a été passée hier (mercredi 12/11). Une nouvelle commande le lendemain (jeudi) est inhabituelle pour ce produit, suggérant soit un oubli de saisie, soit un besoin immédiat spécifique. Étant donné la stabilité de la consommation et l'absence d'outliers majeurs, la quantité de 4 unités (mode statistique des 3 derniers mois) est la plus probable pour maintenir le stock tampon sans sur-stockage.

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier (~10 à 25 jours) avec préférence pour le mardi et vendredi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (moyenne ~2.8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière de faible intensité. La dernière commande date d'il y a 27 jours (17 oct), ce qui est légèrement plus long que le cycle moyen observé entre les commandes précédentes (~15-20j). On observe un volume oscillant entre 1u et 5u. La moyenne des 5 dernières commandes est de 2.8 unités. Compte tenu du délai de réapprovisionnement depuis la dernière commande de 2 unités, une commande de 3 unités (arrondi de la moyenne pondérée favorisant la stabilité) est le scénario le plus probable pour reconstituer le stock sans sur-stockage.

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalle de 12 à 50 jours
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (seulement 2 points de données) et montre une demande très faible et sporadique pour cette confiture de rhubarbe bio. L'intervalle entre les deux dernières commandes était de 12 jours, mais il s'est écoulé 50 jours depuis la dernière livraison (24 sept). L'absence de commande en octobre suggère soit un écoulement très lent des stocks, soit une rupture de flux. Compte tenu du faible volume historique (1u et 2u), on privilégie la quantité minimale de 1 unité pour éviter le surstock sur un produit à rotation lente, tout en réenclenchant le cycle d'approvisionnement.

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier court terme (cycle 3 jours puis arrêt prolongé)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume extrêmement faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux commandes enregistrées il y a deux mois (septembre). Le volume cumulé sur une semaine était de 6 unités, avec une moyenne de 3 unités par commande. En l'absence de données de saisonnalité N-1 et face à une reprise de commande après 60 jours d'inactivité, la recommandation se base sur la moyenne historique (3u) pour couvrir un besoin ponctuel sans créer de surstock sur un produit bio dont la rotation semble lente.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 6u
- 2025-09-12 12:57:02: 4u
- 2025-09-09 12:58:36: 4u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>2. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-24 12:49:59: 2u
- 2025-09-09 12:58:36: 3u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JOY07] JOY! Organic Fig Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 1u
- 2025-09-12 12:57:02: 3u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 2u
- 2025-08-19 13:27:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-12 11:57:26: 4u
- 2025-10-17 10:21:30: 6u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>6. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 10:21:30: 2u
- 2025-09-24 12:49:59: 4u
- 2025-09-12 12:57:02: 2u
- 2025-09-09 12:58:36: 5u
- 2025-08-19 13:27:28: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 12:49:59: 2u
- 2025-09-12 12:57:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 12:57:02: 5u
- 2025-09-09 12:58:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Stock prédit: 8.0u (24j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: 6.0u (30j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 6.0u (28j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 4.0u (14j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 9 | Stock prédit: -1.8u (-4j restants) → prédit 9u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:34:51.264Z*
