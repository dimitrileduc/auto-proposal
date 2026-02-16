# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 104
- **Tokens**: 92,361 input + 15,393 output = 107,754 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 15.2% | 46 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
| **F1-Score** | 25.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 51.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [RIT01] RITCHIE Orange - verre 275ml | 20 | 10 | 10.0 | 100.0% | partial | LLM |
| [RIT02] RITCHIE Citron - verre 275ml | 20 | 20 | 0.0 | 0.0% | exact | LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 5 | 10 | 5.0 | 50.0% | partial | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 15 | 20 | 5.0 | 25.0% | partial | LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 5 | 3 | 2.0 | 66.7% | partial | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 5 | 15 | 10.0 | 66.7% | partial | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 5 | 10 | 5.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 20u vs Médiane: 20u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 10u
- **Erreur LLM**: 10u (100.0%)
- **Erreur Mediane**: 10u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
La dernière commande date d'hier (12 avril) pour 20 unités. Bien que le cycle de commande ne soit pas encore établi avec une seule donnée récente, le principe de précaution B2B s'applique face à l'absence d'historique long terme. Dans un scénario de lancement ou de rotation irrégulière, il est nécessaire de prévoir un réapprovisionnement pour couvrir l'horizon des 30 prochains jours (Replenishment Threshold Days). La quantité retenue correspond à la médiane (et unique valeur) de l'historique récent, soit 20 unités, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 145 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>2. [RIT02] RITCHIE Citron - verre 275ml</strong> - LLM: 20u vs Médiane: 20u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 20u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
La dernière commande date d'hier (12 avril) pour 20 unités. Bien que la commande soit très récente, il s'agit de l'unique point de donnée disponible pour ce produit (pas d'historique N-1). En l'absence de cycle de commande établi et selon le principe de précaution B2B (incertitude sur la rotation), un risque de rupture ne peut être exclu sur un horizon de 30 jours. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques, la quantité retenue est la médiane de l'historique récent, soit 20 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 141 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>3. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande date d'hier (12 avril), mais avec un seul point de données historique, le cycle de rotation est indéterminé. En application du principe de précaution B2B et de la règle de détection du besoin en cas de cycle irrégulier ou difficile à déterminer, un risque de rupture est considéré pour l'horizon des 30 prochains jours. La quantité retenue correspond à la médiane de la commande récente unique (5 unités) afin de maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 113 tokens
- **Total**: 989 tokens



</details>


<details>
<summary><strong>4. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 15u vs Médiane: 15u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 20u
- **Erreur LLM**: 5u (25.0%)
- **Erreur Mediane**: 5u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
La dernière commande date d'hier (12 avril) pour 15 unités. Bien que le stock vienne d'être renouvelé, l'absence d'historique long et l'impossibilité de définir un cycle de rotation précis imposent l'application du principe de précaution B2B. Avec un seuil de réapprovisionnement de 30 jours et un historique limité à une seule commande récente, le risque de rupture ne peut être écarté. Conformément aux règles, en cas de doute sur le cycle ou de données insuffisantes, il convient de prévoir une commande. La quantité retenue correspond à la médiane (et unique valeur) de l'historique récent, soit 15 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 159 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>5. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 5u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date d'hier (12/04), mais il n'existe qu'un seul point de donnée historique récent. En l'absence d'historique permettant de définir un cycle de rotation précis, le principe de précaution B2B s'applique pour éviter une rupture immédiate si le stock reçu était destiné à une consommation instantanée ou un stock tampon faible. ÉTAPE 2 : Estimation de la quantité. En suivant la règle de la rotation régulière et de la médiane sur l'unique commande disponible, la quantité de 5 unités est maintenue pour stabiliser le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 144 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>6. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 5u vs Médiane: 5u (Réel: 15u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 15u
- **Erreur LLM**: 10u (66.7%)
- **Erreur Mediane**: 10u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date d'hier (12/04/2025). Bien que le stock soit récent, il n'y a qu'une seule commande historique de 5 unités. En B2B, face à un historique quasi inexistant et une rotation indéterminée, le principe de précaution s'applique pour éviter une rupture immédiate si le stock initial était destiné à une consommation rapide. Le risque de rupture sous 30 jours est considéré comme "DOUTE" par manque de recul. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de cycle établi, on se base sur la seule valeur connue (médiane de 5u). On maintient cette quantité de 5 unités pour sécuriser l'approvisionnement initial.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 187 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>7. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 5u vs Médiane: 5u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date d'hier (12/04), mais il n'existe qu'une seule commande dans l'historique récent. Le cycle de rotation est donc indéterminé. Selon le principe de précaution B2B (règle principale), en cas de doute sur le cycle ou d'historique irrégulier/difficile à déterminer, il faut prévoir une commande pour éviter toute rupture potentielle dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. En l'absence de données multiples pour calculer une médiane, on se base sur la seule valeur de référence récente qui est de 5 unités. Cette quantité est maintenue pour assurer le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 169 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [RIT02] RITCHIE Citron - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>3. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>4. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>5. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 15u

</details>


<details>
<summary><strong>7. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-12 10:51:51: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>




---

## False Positives (39)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Predicted 5u but not ordered |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 4 | Predicted 4u but not ordered |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 5 | Predicted 5u but not ordered |
| [fsv14] Amandes grillées bio vrac 2,8kg | 3 | Predicted 3u but not ordered |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 5 | Predicted 5u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 180 | Predicted 180u but not ordered |
| [LEA04] LEAMO ginger beer bio 750ml | 10 | Predicted 10u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 120 | Predicted 120u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 60 | Predicted 60u but not ordered |
| [DAM05] Dr. Antonio Martins eau de coco bio & fairtrade 330ml | 30 | Predicted 30u but not ordered |
| [BUD03] BUDDY bio functional & energy drink mangue passion - 250ml | 60 | Predicted 60u but not ordered |
| [BUD04] BUDDY bio functional & energy drink grenade hibiscus - 250ml | 60 | Predicted 60u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 20 | Predicted 20u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 90 | Predicted 90u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 180 | Predicted 180u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 180 | Predicted 180u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 180 | Predicted 180u but not ordered |
| [KOKO02] KOKO Kombucha citron gingembre 330ml | 40 | Predicted 40u but not ordered |
| [KOKO03] KOKO Kombucha framboise hibiscus 330ml | 40 | Predicted 40u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Predicted 40u but not ordered |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 15 | Predicted 15u but not ordered |
| [JOY08] JOY! Confiture bio à la framboise 370g | 196 | Predicted 196u but not ordered |
| [WIG02] WIGNAC cidre rosé bio 330ml | 20 | Predicted 20u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 30 | Predicted 30u but not ordered |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 30 | Predicted 30u but not ordered |
| [JOY03] JOY! Confiture bio à l'abricot 370g | 203 | Predicted 203u but not ordered |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 46 | Predicted 46u but not ordered |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [OCC05] OCCHIOLINO premium arancello 500ml | 5 | Predicted 5u but not ordered |
| [JOY02] JOY! Confiture bio à la fraise 370g | 196 | Predicted 196u but not ordered |
| [JOY04] JOY! Confiture bio aux 4 fruits 370g | 199 | Predicted 199u but not ordered |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 257 | Predicted 257u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 36 | Predicted 36u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 36 | Predicted 36u but not ordered |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 36 | Predicted 36u but not ordered |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 12 | Predicted 12u but not ordered |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 12 | Predicted 12u but not ordered |
| [JOY05] JOY! Confiture bio à la cerise 370g | 200 | Predicted 200u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [RIT09] RITCHIE Cola - canette 330ml | 6 | Product analyzed but LLM -> 0 - client ordered 6u |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM predit: 0u | Reel commande: 6u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande de 5 unités a été effectuée il y a seulement 1 jour (12 avril 2025). Avec un seuil de réapprovisionnement de 30 jours, le stock actuel est jugé suffisant pour couvrir la période immédiate. Il n'y a aucun risque de rupture à court terme ni d'historique suggérant une rotation quotidienne nécessitant un réapprovisionnement dès le lendemain.

</details>


<details>
<summary><strong>2. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
La dernière commande de 5 unités a été effectuée il y a seulement 1 jour (12 avril 2025). Avec un seuil de réapprovisionnement de 30 jours, le stock actuel est considéré comme suffisant pour couvrir la période immédiate. Il n'y a aucun risque de rupture détecté à ce stade, le cycle de rotation ne justifiant pas une nouvelle commande dès le lendemain.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:04:19.053Z*
