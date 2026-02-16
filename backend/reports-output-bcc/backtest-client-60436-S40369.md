# Rapport Backtest - Client LE CELLIER DU BAUDET - épicerie

## Contexte

- **Client** : LE CELLIER DU BAUDET - épicerie (ID: 60436)
- **Commande réelle** : S40369
- **Date commande** : 2025-11-14 15:09:27
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 30,771 input + 4,999 output = 35,770 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.7% | 26 produits prédits, 15 corrects |
| **Rappel** | 93.8% | 16 produits réels, 15 détectés |
| **F1-Score** | 71.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 11.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 10.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 3.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB05] REB chips bio - sel de mer 35g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (Détection) : La dernière commande remonte au 14 octobre, soit 30 jours avant la date actuelle. Le cycle précédent était de 49 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (30 jours écoulés + 30 jours de seuil = 60 jours, dépassant le cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (Quantité) : L'historique montre des volumes très faibles (1u et 2u). La médiane est de 1,5u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 184 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 45 à 50 jours (22/07, 26/08, 14/10). La dernière commande datant du 14 octobre (soit il y a 30 jours), nous atteignons le seuil critique de réapprovisionnement par rapport au cycle moyen. En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 2 unités, correspondant à la médiane stricte et constante des commandes précédentes, sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 148 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 45 à 50 jours (26 août au 14 octobre = 49 jours). Depuis la dernière commande du 14 octobre, 30 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 60 jours d'intervalle potentiel, ce qui dépasse le cycle moyen constaté. Il existe donc un risque de rupture imminent. La quantité est fixée à 2 unités, correspondant à la médiane constante et stricte observée sur toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 140 tokens
- **Total**: 1,049 tokens



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
L'analyse du cycle de commande montre un intervalle moyen d'environ 42 jours entre les commandes (35 jours entre juillet et août, 49 jours entre août et octobre). La dernière commande datant du 14 octobre, soit il y a 30 jours, nous atteignons le seuil de réapprovisionnement (Replenishment Threshold Days = 30). Selon le principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 2 unités, correspondant à la médiane constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 139 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours entre les réapprovisionnements (49 jours entre juillet et août, 49 jours entre août et octobre). La dernière commande datant du 14 octobre, soit il y a 30 jours, nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de réapprovisionnement de 30 jours (70% du cycle atteint). Conformément au principe de précaution B2B et à la règle de rotation régulière (3 dernières commandes identiques à 2 unités), la quantité retenue est la médiane historique de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 148 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 14 octobre, soit il y a 30 jours. L'historique montre un cycle précédent de 84 jours (juillet à octobre), mais avec un seuil de réapprovisionnement de 30 jours et une rotation de type "faible rotation régulière", le risque de rupture devient significatif à l'approche du prochain mois. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 137 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>7. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 49 jours entre les deux dernières commandes (26/08 au 14/10). Au 13/11, 30 jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (30 + 30 = 60 jours, dépassant le cycle moyen de 49 jours). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 3 unités, correspondant à la médiane constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 148 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>8. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B. Bien que l'historique soit limité à une seule commande, la règle de maintien de la quantité pour les rotations faibles (1-3u) s'applique. La médiane et la valeur unique étant de 3 unités, cette quantité est reconduite pour assurer la disponibilité du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 118 tokens
- **Total**: 990 tokens



</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 26 août, soit environ 79 jours. Bien que le cycle historique semble long (environ 35 jours entre les deux premières commandes), l'absence de commande depuis plus de deux mois et le seuil de réapprovisionnement de 30 jours créent une incertitude sur le stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une consommation constante de 2 unités par commande. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 161 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>10. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 août 2025, soit 79 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture ou besoin imminent), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. En l'absence d'autres données ou de saisonnalité N-1, la médiane de 1 unité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 162 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>11. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (1 unité environ tous les 35 jours). La dernière commande remontant au 26 août 2025, le délai écoulé (79 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande est nécessaire pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la médiane et au volume constant des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 135 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>12. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22/07/2025, soit 114 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin est identifié pour éviter une rupture prolongée ou une absence de référencement en rayon. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane des commandes récentes est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 174 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>13. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 22 juillet 2025, soit plus de 110 jours sans activité pour ce produit. Bien que la rotation soit très faible, l'absence de données historiques sur une année complète et l'irrégularité du cycle de commande imposent l'application du principe de précaution B2B. Dans un scénario d'incertitude sur le cycle, il est nécessaire de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 2 unités, correspondant à la dernière commande connue (médiane du seul point de donnée disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 153 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>14. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit alimentaire bio. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 171 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>15. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur la rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle dès le référencement ou pour tester le flux. ÉTAPE 2 : ESTIMATION QUANTITÉ. Conformément aux règles de rotation très faible ou inconnue, une quantité minimale de 1 unité est préconisée pour initialiser le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 124 tokens
- **Total**: 995 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 1u
- 2025-08-26 07:11:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 3u
- 2025-08-26 07:11:31: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:46:09: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 07:11:31: 2u
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 07:11:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 07:11:31: 1u
- 2025-07-22 06:30:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:30:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:30:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |
| [SOWA03] SOWA ginger beer ardent 250ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 | Predicted 2u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Predicted 1u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de base, aucun risque de rupture ne peut être identifié selon les critères de précaution B2B. Aucune commande n'est préconisée tant qu'un signal de vente initial n'est pas détecté.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:06:46.695Z*
