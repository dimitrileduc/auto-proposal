# Rapport Backtest - Client Ferme A l'arbre

## Contexte

- **Client** : Ferme A l'arbre (ID: 24304)
- **Commande réelle** : S39576
- **Date commande** : 2025-10-06 09:27:30
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 30
- **Tokens**: 45,381 input + 9,627 output = 55,008 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.3% | 32 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 72.0% | Score équilibré global |

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
| **MAE** | 0.28 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (18)

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
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (commandes espacées d'environ 4 semaines: 25 août puis 22 septembre)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern mensuel régulier détecté avec 2 commandes espacées de ~28 jours (25/08 et 22/09), toutes deux à 1 unité. La prédiction pour le 05/10 se situe 13 jours après la dernière commande, soit ~à mi-chemin avant la prochaine commande attendue (~20-22 octobre). CEPENDANT, l'historique très limité (2 points seulement) et l'absence de données N-1 créent une incertitude. Aucun pic saisonnier identifiable début octobre en agroalimentaire pour ce type de produit. La demande de fond étant stable à 1 unité et aucun signal de rupture de rythme, je maintiens la prédiction à 1 unité avec une confiance moyenne due au manque de profondeur historique. Le produit semble avoir une rotation lente mais régulière.

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~28-30j) - 2 commandes sur 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable - Quantités très faibles (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (2 commandes seulement). Pattern mensuel détecté: 2025-08-25 puis 2025-09-22 (28j d'écart). Prochaine commande attendue fin octobre (30j après 2025-09-22 = ~2025-10-22), MAIS la date de prédiction (2025-10-05) est 17 jours AVANT ce cycle attendu. Volume moyen: 1.5u. Produit bio niche à très faible rotation. Sans saisonnalité N-1 ni pic historique, et vu la faible fréquence, la probabilité d'une commande le 2025-10-05 existe mais avec quantité minimale. Prédiction conservative: 1u (produit à rotation très lente, commande probable de réassort minimal si stock bas).

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (2 commandes: 25 août → 22 sept = 28j)
- **Saisonnalité**: none
- **Tendance**: Stable (2 commandes identiques à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique limité (2 commandes seulement) mais pattern clair: commandes mensuelles régulières (~28j) de 1 unité exactement. Dernière commande le 22/09 (lundi), prédiction pour le 05/10 = 13 jours après. Vu le cycle mensuel observé, le prochain réassort théorique serait attendu autour du 20-22/10, soit 15j APRÈS la date de prédiction. Cependant, variabilité possible dans le cycle d'approvisionnement B2B. Absence de données N-1 empêche validation saisonnière. La régularité parfaite (2×1u) suggère une demande de fond stable sans pics. Prédiction: 1 unité (maintien du pattern observé). Confidence medium car faible historique mais cohérence parfaite des données disponibles.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande régulière chaque Lundi, cycle ~14 jours (parfois écart de 2 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère volatilité (3-6u baseline, pic isolé à 8u le 14/07)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
Pattern clair: commandes exclusivement le LUNDI, cycle bi-hebdomadaire dominant. Les 4 dernières commandes (hors outlier du 14/07) montrent une fourchette 3-6u avec médiane à 4u. Le 22/09 (dernière commande) affiche 3u, mais la séquence globale (3-5-6-3) suggère une demande de fond à ~4-5u. La prédiction vise le 05/10 (dimanche), MAIS le client ne commande JAMAIS le dimanche - hypothèse: commande décalée au lundi 06/10. Absence totale de données N-1 et saisonnalité non décelable. Quantité recommandée: 4u (compromis entre dernière commande basse à 3u et moyenne mobile à 4.25u, ajusté à l'entier le plus probable pour minimiser MAPE)

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-systématique chaque Lundi, cycle hebdomadaire 14j (2 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable avec baseline 3u (pic 6u = outlier, 5u = stock transition)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Pattern ultra-régulier détecté: 5 commandes sur 10 semaines, toutes le LUNDI. Intervalles: 14j→14j→14j→83j (rupture estivale Jul-Août)→14j. Baseline=3u (4 occurrences sur 5), le 6u du 25/08 est un outlier isolé (probable rattrapage post-vacances), le 5u du 14/07 marque une transition pré-estivale. Depuis la reprise Sept, retour strict à 3u×2. Prochaine commande attendue Lundi 06/10 (lendemain de la date de prédiction dimanche 05/10) avec quantité habituelle 3u. Pas de saisonnalité N-1, pas de tendance haussière confirmée. Prédiction: 3u (quantité modale et récente).

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-systématique chaque Lundi, intervalle moyen 14-21 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec fluctuation 1-5u, moyenne 2.8u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair détecté : commandes EXCLUSIVEMENT le lundi (5/5 occurrences). Dernière commande le 2025-09-22 (lun.), soit 13 jours avant la date de prédiction (2025-10-05 dimanche). PROBLÈME MAJEUR : la prédiction tombe un DIMANCHE, alors que le client ne commande JAMAIS ce jour. Hypothèses : (1) Commande anticipée inhabituelle, (2) Erreur de date cible, (3) Nouvelle habitude. Quantités historiques oscillent entre 1-5u sans outlier, médiane=3u. En l'absence de saisonnalité N-1 et vu la stabilité du volume moyen (2.8u), je retiens 3u comme valeur médiane la plus probable. Confiance medium car le jour inhabituel introduit une incertitude structurelle sur la réalisation effective de la commande.

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-systématique chaque Lundi, cycle ~14j (bi-hebdomadaire)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 3u (dernière commande 3u le 2025-09-22)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Pattern très clair : 5 commandes consécutives le lundi, rythme bi-hebdomadaire régulier (14j entre commandes). La quantité de 5u du 2025-08-25 est isolée (probable promotion ou besoin ponctuel), les 4 autres commandes convergent vers 3u (incluant la plus récente). Absence de données N-1 mais stabilité forte sur 3 mois. La prédiction pour dimanche 2025-10-05 : le client devrait commander 3u lors de sa prochaine commande lundi 2025-10-06 (13j après le 2025-09-22). Comme la prédiction tombe un dimanche (jour inhabituellement calme en B2B), je table sur la quantité habituelle de fond = 3u.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ~Lundi toutes les 2 semaines (intervalle de 14j observé entre 08/09 et 22/09, entre 11/08 et 25/08)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-3u (pic à 5u le 14/07 probablement exceptionnel)
- **Outliers détectés**: 5u

**🧠 Raisonnement LLM:**
Pattern bi-hebdomadaire stable détecté (commandes régulières le lundi). Les 3 dernières commandes montrent 2u→3u→3u, suggérant une demande de fond à 2-3u. Le pic de 5u au 14/07 semble isolé (probable promotion ou événement). Prochaine commande attendue début octobre suit la même logique. En l'absence de saisonnalité N-1 et avec une tendance stable récente, la quantité la plus probable est 3u (médiane des 3 derniers ordres hors outlier).

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande cyclique tous les ~14 jours, principalement les Lundis
- **Saisonnalité**: none
- **Tendance**: Stable à 2u (la commande de 3u en juillet est un outlier)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Pattern très régulier identifié: commandes espacées de 14 jours environ (25/08, 08/09, 22/09) avec quantité constante de 2u. La prochaine commande selon ce cycle tombe autour du 06/10, soit un jour après la date de prédiction (05/10). La commande de 3u du 14/07 est isolée et précède de 6 semaines le pattern régulier actuel, donc traitée comme outlier. Aucune donnée N-1 pour valider une saisonnalité. Le client a établi un rythme stable bihebdomadaire à 2u depuis août. La date de prédiction (dimanche 05/10) précède de 1 jour le lundi attendu, mais le pattern de 2u reste la prédiction la plus probable. Confiance élevée basée sur 3 commandes consécutives identiques.

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier ~30-40j, anciennement Mardi, désormais stabilisé sur Lundi depuis 3 mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (passage de 2-3u en N-1 à 1u stable depuis 3 mois)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Pattern clair identifié: commandes mensuelles (~30-40j) stabilisées à 1u depuis 3 mois consécutifs (25/08, 08/09, 22/09). L'historique N-1 montre des quantités de 2-4u mais la tendance récente indique une forte baisse structurelle de la demande (-50%). Les 4u de mai/août 2024 sont des outliers dans un contexte de demande moyenne à 2-3u. Depuis juillet 2025, nouveau régime stable à 1u par commande. Rythme actuel: ~14j entre commandes, prochaine attendue début octobre. Pas de saisonnalité forte détectée pour cette période. La donnée la plus récente (3 commandes consécutives à 1u) est le meilleur prédicteur. Recommended_quantity=1u (demande normalisée actuelle).

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel régulier ~28-30j, ancrage Lundi/Mardi
- **Saisonnalité**: weak
- **Tendance**: Baisse nette -67% (passage 3u→1u depuis juillet 2025)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Pattern clair: commandes mensuelles régulières (dernier cycle 14 jours entre 08/09 et 22/09, puis 13j jusqu'au 05/10). Tendance forte depuis juillet 2025: stabilisation à 1u systématique (4 commandes consécutives à 1u). La saisonnalité N-1 montre fluctuations 2-4u mais non corrélée à octobre spécifiquement. Le pic à 4u (jan 2024) est isolé=outlier. Rythme attendu: ~30j après le 22/09 pointe vers début octobre. Le client a clairement réduit ses volumes structurellement (-67%) depuis mi-2025. Prédiction: 1u (continuité du nouveau régime de commande, haute confiance car 4 observations identiques récentes).

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier, migration vers Lundi (5 dernières commandes toutes en Lundi vs Mardi historique)
- **Saisonnalité**: none
- **Tendance**: Baisse significative -50% (moyenne N-1: 4.2u → 3 derniers mois: 2.2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair: client commande désormais systématiquement le LUNDI (5 commandes consécutives lun. depuis juil-25). Intervalle moyen 14-18 jours. Dernière commande 22/09 (lun.) → prochaine attendue début octobre. TENDANCE BAISSIÈRE CONFIRMÉE: N-1 moyenne 4.2u, mais 3 derniers mois stabilisés à 2-3u (médiane=2u, seule exception 14/07 à 3u). Aucun pic saisonnier détecté en oct-24. La quantité 2 reflète la nouvelle baseline stable post-ajustement client, cohérente avec 4 des 5 dernières commandes (2,2,2,1 + exception 3). Pas de rattrapage justifié car rythme respecté.

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~28j (2 commandes espacées de 28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable - commandes régulières de 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern mensuel détecté: commande le 11/08 puis le 08/09 (28j d'écart). La prédiction pour le 05/10 s'inscrit dans ce rythme (~27j après la dernière commande). Les 2 commandes historiques montrent une demande constante de 1u sans variation. Absence de données N-1 mais stabilité parfaite des commandes récentes. Pas d'outliers détectés. La quantité de base étant systématiquement 1u et aucun signal de changement de comportement n'étant visible, la prédiction logique est 1u. Confidence medium car seulement 2 points de données, mais pattern cohérent.

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande quasi-mensuelle - cycle moyen 17-20 jours avec une tendance vers espacements de ~14 jours
- **Saisonnalité**: none
- **Tendance**: Stable - demande constante de 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern très clair et régulier: 4 commandes consécutives de 1u chacune (14/07, 11/08, 25/08, 08/09), toutes un lundi. Intervalle moyen récent: 18 jours (33j→14j→14j = tendance vers cycles bimensuels). Au 05/10/2025 (27 jours après dernière commande du 08/09), nous sommes largement dans la fenêtre de commande attendue. Aucun outlier, aucune saisonnalité N-1, profil client B2B stable avec quantités unitaires constantes (produit de niche bio). La prochaine commande suivra logiquement le pattern établi: 1 unité. Pas de signal justifiant une variation.

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande environ tous les 14 jours, exclusivement le Lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (sauf unique commande de 2u en août)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair: commandes bimensuelles régulières le lundi (25/08, 08/09, prochaine attendue ~22/09). Volumes stables à 1u sauf 1 occurrence isolée de 2u (11/08). La date de prédiction (05/10) tombe un dimanche, jour inhabituel, mais en suivant le rythme de 14j depuis le 08/09, la prochaine commande serait attendue vers le 22/09. Si elle a déjà eu lieu, le prochain cycle pointera vers début octobre. Baseline à 1u reflète le comportement modal. Absence de saisonnalité N-1 et historique court limitent la confiance, mais le pattern récent est cohérent. Recommandation: 1u, quantité la plus probable sans surgonfler.

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel régulier ~28-30j, toujours le Lundi
- **Saisonnalité**: none
- **Tendance**: Stable avec légère tendance à la hausse (moyenne 1.33u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern mensuel très clair: 14 Juil (lun), 11 Août (lun), 8 Sept (lun) = cycle constant ~28-30j. Prochaine commande attendue début Oct (28j après 8/9). Quantités: 1u-2u-1u, moyenne 1.33u mais médiane 1u. Le 2u d'Août semble être une commande légèrement supérieure mais pas un outlier franc (pas de promo identifiée). Tendance globale stable autour de 1u. La date de prédiction (5 Oct dimanche) est légèrement en avance sur le cycle attendu (6-7 Oct lundi), mais compatible avec une commande hebdo. Vu la stabilité du pattern et l'absence de saisonnalité N-1, la quantité la plus probable reste 1u (valeur modale). Le 2u reste une exception isolée. Pas de signal de rattrapage ni de rupture justifiant un ajustement à la hausse.

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bimensuelle (intervalle 14 jours) - Lundi fixe
- **Saisonnalité**: none
- **Tendance**: Stable - demande unitaire constante
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern clair détecté: 2 commandes espacées de 14 jours exactement (25/08 et 11/08), toutes deux le lundi, avec quantité unitaire fixe. Le rythme bimensuel suggère une prochaine commande mi-octobre. Cependant, la prédiction demandée (05/10, dimanche) ne correspond pas au pattern habituel (lundi). Historique court (2 points) limite la confiance. Aucun outlier, pas de saisonnalité N-1. La demande stable de 1 unité par commande indique un produit de niche/spécialité avec rotation faible. Baseline=1.0 car moyenne exacte. Recommandation: 1 unité (cohérent avec 100% des commandes historiques), mais confiance medium car date prédiction atypique vs pattern jour observé.

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalle variable 28-42 jours, sans jour fixe hebdomadaire
- **Saisonnalité**: none
- **Tendance**: Stable - Quantités récurrentes de 2u (85% des commandes), pic isolé de 3u en mars 2024
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Historique montre une demande de fond stable à 2u par commande (6/7 commandes récentes). Le pic de 3u en mars 2024 est isolé sans récurrence saisonnière. Rythme actuel : dernière commande 25/08, intervalle moyen ~35j suggère prochaine commande fin septembre/début octobre. Pas de pattern hebdomadaire détectable ni de saisonnalité forte pour octobre. La date de prédiction (5 octobre) tombe dans la fenêtre probable mais reste un dimanche (jour atypique en B2B). Quantité 2u reflète la demande structurelle observée sur 85% des occurrences, sans justification de surconsommation ponctuelle.

</details>




### 📊 Données d'Input LLM (18 produits)


<details>
<summary><strong>1. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-08-25 10:25:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 5u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 3u
- 2025-08-25 10:25:08: 6u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 4u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 5u
- 2025-08-11 06:51:13: 3u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 3u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 2u
- 2025-09-08 12:03:17: 2u
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 4u
- 2024-06-11 06:44:54: 2u
- 2024-05-13 13:42:50: 4u
- 2024-04-15 11:54:11: 2u
- 2024-03-19 14:47:15: 2u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 1u
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 3u
- 2024-08-06 09:10:28: 2u
- 2024-06-11 06:44:54: 3u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 3u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:21:08: 3u
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 2u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 4u
- 2024-08-06 09:10:28: 5u
- 2024-06-11 06:44:54: 4u
- 2024-05-13 13:42:50: 3u
- 2024-04-15 11:54:11: 5u
- 2024-03-19 14:47:15: 5u
- 2024-02-09 08:53:20: 3u
- 2024-01-09 14:02:13: 4u
- 2023-11-14 09:13:44: 5u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>14. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 12:03:17: 1u
- 2025-08-11 06:51:13: 2u
- 2025-07-14 11:44:16: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 1u
- 2025-08-11 06:51:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>18. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 10:25:08: 2u
- 2025-07-14 11:44:16: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:43:33: 2u
- 2024-08-06 09:10:28: 2u
- 2024-05-13 13:42:50: 2u
- 2024-03-19 14:47:15: 3u
- 2024-02-09 08:53:20: 2u
- 2024-01-09 14:02:13: 2u
- 2023-11-14 09:13:44: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (14)

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
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: 0.6u (20j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.6u (-4j restants) → prédit 1u mais non commandé |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Stock prédit: 0.6u (15j restants) → prédit 1u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | Stock prédit: -1.1u (-13j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -2.3u (-27j restants) → prédit 2u mais non commandé |
| [REB05] REB chips bio - sel de mer 35g | 1 | Stock prédit: -1.3u (-30j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: -1.0u (-26j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Stock prédit: -1.0u (-26j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.7u (-41j restants) → prédit 1u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-26j restants) → prédit 1u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | Stock prédit: -1.6u (-68j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T13:34:21.108Z*
