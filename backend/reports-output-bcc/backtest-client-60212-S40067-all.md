# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S40067
- **Date commande** : 2025-11-05 14:53:27
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 30,546 input + 5,206 output = 35,752 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 31.3% | 32 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 46.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique récent montre un cycle de commande moyen d'environ 21 jours (intervalles de 13, 17, 26, 7, 51 et 12 jours). La dernière commande date du 22 octobre, soit il y a 13 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande est statistiquement attendue sous 8 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités commandées sont très stables, oscillant entre 1u et 2u. La médiane des commandes récentes est de 1u. Conformément à la règle de précaution consistant à choisir la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 984 tokens
- **Output**: 205 tokens
- **Total**: 1,189 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 13 à 15 jours. La dernière commande datant du 22 octobre (soit il y a 13 jours), le produit entre dans sa fenêtre critique de réapprovisionnement face au seuil de 30 jours. Le risque de rupture est imminent selon le principe de précaution B2B. Concernant le volume, les quantités oscillent strictement entre 1u et 3u. La médiane des commandes récentes est de 2u. En suivant la règle de prudence qui privilégie la médiane ou la valeur basse en cas de doute, une quantité de 2 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 166 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 10 à 20 jours entre chaque réapprovisionnement. La dernière commande datant du 22 octobre (soit 13 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle récent est très stable avec une quantité récurrente de 3 unités sur les quatre dernières commandes. En appliquant la règle de la médiane sur l'historique récent et en constatant la régularité de la rotation, une quantité de 3 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 150 tokens
- **Total**: 1,144 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 10 à 14 jours. La dernière commande datant du 22 octobre (soit il y a 13 jours), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En suivant la règle de la médiane des commandes récentes (3u, 3u, 4u, 2u, 3u, 2u, 2u, 3u), la valeur médiane est de 3 unités. Ce volume permet de maintenir le stock sans risque de surstockage pour ce produit à rotation stable.

**Tokens utilises pour cette prediction:**
- **Input**: 996 tokens
- **Output**: 147 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>5. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande moyen est d'environ 15 à 20 jours. La dernière commande remonte au 22 octobre, soit 13 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande devrait théoriquement intervenir sous peu. ÉTAPE 2 : L'historique récent montre une stabilisation à 1 unité lors des trois dernières commandes (septembre/octobre), après une phase plus volatile. En suivant la règle de la médiane des commandes récentes et le principe de précaution privilégiant la quantité la plus basse en cas de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 979 tokens
- **Output**: 160 tokens
- **Total**: 1,139 tokens



</details>


<details>
<summary><strong>6. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 15 à 40 jours. La dernière commande date du 22 octobre, soit il y a 13 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans la fenêtre de prévision (prochaine commande théorique autour du 15-20 novembre). En application du principe de précaution B2B et face à une rotation très stable, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 146 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>7. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 60 jours (juin, août, octobre). La dernière commande datant du 09 octobre (il y a 26 jours), le prochain besoin théorique se situe début décembre. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture. Conformément au principe de précaution B2B et à la règle de maintien des rotations faibles (1-2u), une commande de 1 unité est préconisée pour couvrir le cycle à venir, en s'alignant sur la médiane constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 144 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>8. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/10/2025, soit 26 jours. Le cycle moyen observé est d'environ 21 jours sur les commandes récentes. Nous sommes à 26 jours, ce qui dépasse 70% du cycle habituel. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u ou 2u. La médiane des commandes récentes est de 1,5u. Conformément à la règle de prudence (choisir la valeur la plus basse en cas de doute ou de rotation faible), la quantité retenue est de 1u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 962 tokens
- **Output**: 190 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>9. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 septembre, soit 55 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (environ 84 jours entre juin et septembre). Compte tenu du seuil de réapprovisionnement de 30 jours et du principe de précaution B2B en cas de cycle irrégulier, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 164 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>10. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août, soit environ 69 jours. Le cycle précédent était de 70 jours. Nous sommes à l'échéance du cycle moyen et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 151 tokens
- **Total**: 1,040 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:10: 1u
- 2025-10-09 06:38:48: 1u
- 2025-09-22 11:22:05: 1u
- 2025-08-27 07:04:23: 1u
- 2025-08-20 11:31:02: 2u
- 2025-06-30 12:52:01: 1u
- 2025-06-18 13:07:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:10: 3u
- 2025-10-09 06:38:48: 2u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 1u
- 2025-08-04 11:58:17: 3u
- 2025-07-16 06:29:37: 3u
- 2025-06-30 12:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:10: 3u
- 2025-10-02 06:22:23: 3u
- 2025-09-22 11:22:05: 3u
- 2025-09-10 13:32:58: 3u
- 2025-08-20 11:31:02: 1u
- 2025-08-04 11:58:17: 2u
- 2025-07-16 06:29:37: 3u
- 2025-06-30 12:52:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:10: 4u
- 2025-10-09 06:38:48: 3u
- 2025-10-02 06:22:23: 3u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 2u
- 2025-08-20 11:31:02: 2u
- 2025-08-04 11:58:17: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:10: 1u
- 2025-10-02 06:22:23: 1u
- 2025-09-22 11:22:05: 1u
- 2025-09-10 13:32:58: 2u
- 2025-08-20 11:31:02: 3u
- 2025-06-30 12:52:01: 1u
- 2025-06-18 13:07:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-22 13:43:10: 1u
- 2025-10-09 06:38:48: 1u
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u
- 2025-06-10 07:02:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:38:48: 1u
- 2025-08-20 11:31:02: 1u
- 2025-06-18 13:07:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:38:48: 1u
- 2025-10-02 06:22:23: 1u
- 2025-09-10 13:32:58: 2u
- 2025-08-20 11:31:02: 2u
- 2025-06-30 12:52:01: 1u
- 2025-06-18 13:07:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-10 13:32:58: 1u
- 2025-06-18 13:07:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 07:04:23: 1u
- 2025-06-18 13:07:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (22)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Predicted 2u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [LEA06] LEAMO maté 330ml | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et l'année précédente. En l'absence de données de rotation ou de cycle de vente pour ce produit, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:04:30.281Z*
