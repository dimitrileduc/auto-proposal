# Rapport Backtest - Client TAN

## Contexte

- **Client** : TAN (ID: 60545)
- **Commande réelle** : S39699
- **Date commande** : 2025-10-16 08:11:02
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,027 input + 4,305 output = 30,332 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.0% | 25 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 68.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LEA10] LEAMO ginger beer bio 330ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 37 jours (intervalles de 23, 35 et 51 jours). La dernière commande datant du 05/09/2025, soit il y a 40 jours, nous avons dépassé le cycle moyen et le seuil de 70% de ce dernier. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation très régulière et stable, la quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 163 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 25 et 50 jours. La dernière commande datant du 05/09/2025 (soit 40 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, présentant un risque de rupture imminent. En application du principe de précaution B2B et de la détection d'un cycle irrégulier, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au volume des deux commandes les plus récentes, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 143 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 05/09/2025, soit 40 jours avant la date actuelle. Le cycle moyen observé est d'environ 37 jours. Le délai depuis la dernière commande dépasse déjà le cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. La médiane des commandes récentes est de 1.5u. En suivant le principe de précaution B2B et en observant que les deux dernières commandes étaient de 2u, la quantité de 2u est retenue pour couvrir le besoin sans surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 171 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 55 jours (63 jours entre mai et juillet, 51 jours entre juillet et septembre). La dernière commande datant du 05/09/2025, soit il y a 40 jours, nous atteignons 72% du cycle moyen. Le risque de rupture est donc identifié pour l'horizon des 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle de la médiane sur les quantités historiques (1, 2, 2), la quantité retenue est de 2 unités pour couvrir le prochain cycle tout en évitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 165 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>5. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'historique récent montre un cycle de commande régulier d'environ 35 à 40 jours (20/08 au 05/09 = 16 jours, mais 16/07 au 20/08 = 35 jours). Au 15 octobre, 40 jours se sont écoulés depuis la dernière commande du 5 septembre. Le délai dépasse largement 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 151 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>6. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/09/2025, soit 40 jours avant la date actuelle. Le cycle moyen observé entre les commandes récentes est d'environ 15 à 90 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent car nous entrons dans la fenêtre habituelle de commande. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 180 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 56 jours. Le cycle moyen observé est d'environ 45 jours. Nous avons largement dépassé ce cycle et entrons dans la fenêtre de risque des 30 prochains jours (Replenishment Threshold Days). Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane et la valeur la plus fréquente étant de 2u, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 148 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>8. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 20 août, soit 56 jours. Le cycle précédent était de 35 jours. Nous avons largement dépassé le cycle moyen et le seuil de réapprovisionnement de 30 jours est atteint. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une consommation constante et très faible de 1 unité par commande. La médiane des quantités récentes est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 139 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>9. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 56 jours. Le cycle précédent était de 70 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons l'échéance du cycle habituel (70-80 jours) durant cette période. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et régulière de 2 unités par commande. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 157 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>10. [LEA10] LEAMO ginger beer bio 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 35 jours (5 semaines). La dernière commande datant du 20 août 2025, soit il y a 56 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. En application de la règle de la médiane sur les quantités récentes (1, 2, 3), la quantité retenue est de 2 unités pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 136 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>11. [ORG10] ORGANICA crunchy fruit mangue 18g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juillet 2025, soit 91 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et face à l'incertitude du cycle sur un produit à faible rotation, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 175 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>12. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 16 juillet 2025, soit il y a environ 91 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle trimestriel standard. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire. La quantité retenue correspond à la médiane historique (1u) pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 112 tokens
- **Total**: 982 tokens



</details>


<details>
<summary><strong>13. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 11 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (environ 23 jours) crée une incertitude sur le stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une quantité constante de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 est maintenue pour éviter tout surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 163 tokens
- **Total**: 1,053 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:01:26: 2u
- 2025-07-16 09:26:46: 2u
- 2025-06-11 07:07:39: 2u
- 2025-05-19 12:18:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:01:26: 2u
- 2025-07-16 09:26:46: 2u
- 2025-06-11 07:07:39: 1u
- 2025-05-19 12:18:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:01:26: 2u
- 2025-07-16 09:26:46: 2u
- 2025-06-11 07:07:39: 1u
- 2025-05-19 12:18:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:01:26: 1u
- 2025-07-16 09:26:46: 2u
- 2025-05-19 12:18:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:01:26: 1u
- 2025-08-20 11:31:36: 1u
- 2025-07-16 09:26:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:01:26: 1u
- 2025-08-20 11:31:36: 1u
- 2025-05-19 12:18:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:31:36: 2u
- 2025-06-11 07:07:39: 1u
- 2025-05-19 12:18:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:31:36: 1u
- 2025-07-16 09:26:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:31:36: 2u
- 2025-06-11 07:07:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LEA10] LEAMO ginger beer bio 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:31:36: 2u
- 2025-07-16 09:26:46: 1u
- 2025-06-11 07:07:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [ORG10] ORGANICA crunchy fruit mangue 18g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:26:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 09:26:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 07:07:39: 1u
- 2025-05-19 12:18:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:46.295Z*
