# Rapport d'Audit et d'Optimisation : Système de Détection de Rupture de Stock

**Date :** 24 mai 2024
**Auteur :** Analyste Senior, Optimisation de la Chaîne d'Approvisionnement
**Objet :** Analyse des performances du système de détection de rupture et recommandations d'optimisation (Objectif F1-Score > 75%)

## 1. Analyse des Résultats Actuels et Diagnostic Stratégique

L'analyse des performances actuelles du système révèle une stagnation des métriques d'équilibre (F1-Score) et un compromis défavorable entre la détection des besoins (Recall) et la pertinence des suggestions (Precision). Le système ne parvient pas à s'améliorer en augmentant la fenêtre d'analyse, ce qui signale des failles méthodologiques fondamentales.

### A. Performance Globale (90j vs 180j) : L'Illusion du Gain en Rappel

La comparaison des métriques agrégées sur les deux fenêtres d'analyse testées (90 jours et 180 jours) est la suivante :

**Configuration 90 jours :**
- Recall : 64.0%
- Precision : 53.5%
- F1-Score : 53.6%

**Configuration 180 jours :**
- Recall : 69.9% (+5.9% vs 90j)
- Precision : 47.9% (-5.6% vs 90j)
- F1-Score : 53.1% (-0.5% vs 90j)

Le passage à une fenêtre de 180 jours génère un gain marginal de 5.9% en Recall, mais ce gain est entièrement annulé par une perte de 5.6% en Précision. Le F1-Score, notre métrique cible principale, stagne ou régresse légèrement.

Cette dynamique est pathologique. En théorie, une fenêtre d'analyse plus large devrait fournir plus de données pour stabiliser les estimations de consommation et améliorer la précision. Le fait que la Précision se dégrade suggère fortement que l'algorithme de calcul de la consommation est défaillant.

L'algorithme actuel (une moyenne simple) est hypersensible aux outliers. Une fenêtre de 180 jours a une probabilité plus élevée de capturer une commande exceptionnelle (promotion annuelle, pic saisonnier) qu'une fenêtre de 90 jours. Cette commande anormale fausse la moyenne de consommation à la hausse, ce qui accélère l'estimation de la date de rupture et génère une augmentation des Faux Positifs (alertes prématurées), expliquant ainsi la chute de la Précision.

### B. Analyse Détaillée par Segment : La Défaillance du Segment "LOW"

L'analyse des segments isolés révèle que le segment "LOW" (produits avec 1 seule commande) est une source majeure de bruit et dégrade considérablement les performances globales :

**Segment LOW (90 jours) :**
- Recall : 100%
- Precision : 59.8%
- (Concerne 25 clients)

**Segment LOW (180 jours) :**
- Recall : 95.5%
- Precision : 46.7%
- (Concerne 44 clients)

Un Recall de 100% avec une Précision de 59.8% (90j) signifie que pour 6 besoins réels détectés, le système génère 4 fausses alertes. À 180 jours, la Précision s'effondre à 46.7%, signifiant que plus de la moitié des alertes de ce segment sont incorrectes.

Ce segment souffre d'une méthodologie statistiquement invalide. Il utilise le `clientReorderWindow` (médiane des intervalles de tous les produits du client) pour estimer la consommation d'un produit commandé une seule fois. Une médiane ne peut être définie sur un seul point de donnée, et l'heuristique applique le comportement général du client à un produit spécifique sans justification.

Ce segment correspond à un problème de "demande intermittente" (ou "long-tail"). Pour ces produits, l'objectif ne devrait pas être la précision d'une prévision, mais la modélisation de la probabilité d'un événement de réachat.

### C. Synthèse des Arbitrages Métier (Coût des Erreurs)

Une analyse des coûts d'erreur est essentielle pour prioriser le rééquilibrage du système.

**Faux Négatif (FN) : Ne pas proposer un besoin réel**
- Coût : Élevé et direct
- Le client tombe en rupture de stock, entraînant une insatisfaction, une perte de vente immédiate, et un risque de churn (le client se fournit chez un concurrent)

**Faux Positif (FP) : Proposer un produit non nécessaire**
- Coût : Apparemment faible (le client ignore l'alerte)
- Coût Caché (Systémique) : "Fatigue des alertes" (Alert Fatigue)
- Lorsque la Précision du système tombe en dessous d'un seuil acceptable (comme les 47.9% du 180j), les utilisateurs apprennent à ignorer toutes les suggestions, y compris les Vrais Positifs
- La confiance est érodée et le système devient inutile

Le système actuel (surtout 180j) favorise excessivement le Recall au détriment de la Précision, créant un système bruyant et peu fiable. Pour atteindre les cibles (R>80%, P>70%), nous devons d'abord corriger les failles logiques qui génèrent des Faux Positifs avant d'augmenter le Recall.

## 2. Problèmes Identifiés et Priorisation

L'audit révèle que les performances médiocres ne sont pas dues à un mauvais réglage des paramètres (fenêtre, seuil), mais à des erreurs logiques fondamentales dans les algorithmes de calcul.

Le tableau suivant priorise les problèmes identifiés en fonction de leur impact estimé sur les métriques et de la facilité de leur correction (conformément à la contrainte "simple").

### Tableau 1 : Matrice de Priorisation des Problèmes

| Problème | Gravité | Impact Recall | Impact Precision | Impact F1 | Complexité Fix | Priorité |
|----------|---------|---------------|------------------|-----------|----------------|----------|
| P1 - Hypothèse Stock (Q4) | Critique | Neutre | ↑↑↑ | ↑↑↑ | Moyenne | Critique |
| P2 - Heuristique LOW (Q5) | Élevé | ↓ | ↑↑↑ | ↑↑ | Faible | Élevée |
| P3 - Moyenne Instable (Q3) | Élevé | Neutre | ↑↑ | ↑↑ | Faible | Élevée |
| P4 - minOrders=2 (Q3) | Moyen | ↓ | ↑ | ↑ | Faible | Moyenne |
| P5 - Seuil Fixe (Q2) | Moyen | Variable | Variable | ↑ | Faible | Moyenne |
| P6 - Fenêtre Rigide (Q1) | Moyen | ↑ | ↑ | ↑ | Faible | Moyenne |

### A. Problème 1 (Critique) : L'Hypothèse d'Estimation de Stock (Q4)

**Diagnostic :** L'algorithme actuel `stock = lastQuantity - (daysElapsed × consommation)` repose sur une hypothèse implicite : le stock du client était nul (ou proche de zéro) juste avant la réception de sa `lastQuantity`.

**Invalidation :** Cette hypothèse est fondamentalement fausse. Les clients commandent avant d'être en rupture complète pour couvrir le délai de livraison et conserver un stock de sécurité (Safety Stock). Leur stock réel au moment de la commande N est `(Stock Résiduel de N-1) + lastQuantity`.

**Impact :** Le système sous-estime systématiquement le stock réel du client. Par conséquent, l'estimation de la date de rupture est systématiquement prématurée. Ceci est la cause racine principale de la faible Précision (47.9-53.5%) et de la majorité des Faux Positifs.

### B. Problème 2 (Élevé) : L'Heuristique Invalide du Segment LOW (Q5)

**Diagnostic :** L'algorithme `consommation = totalQuantity / clientReorderWindow` est défaillant, comme détaillé en 1.B.

**Invalidation :** Ce segment est un cas classique de demande intermittente ("lumpy demand"). L'utilisation d'une médiane basée sur le comportement global du client pour prédire un produit spécifique commandé une fois est une corrélation fallacieuse.

**Impact :** Génération massive de Faux Positifs (P=46.7%), polluant les métriques globales et érodant la confiance des utilisateurs.

### C. Problème 3 (Élevé) : L'Instabilité de l'Algorithme de Consommation (Q3)

**Diagnostic :** L'algorithme `consommation = totalQuantity / actualDays` pour le segment DEFAULT (2+ commandes) est une moyenne simple.

**Invalidation :** Les données de ventes sont presque toujours asymétriques ("skewed"). Les moyennes sont notoirement non robustes aux outliers. Une seule commande promotionnelle double ou triple la `totalQuantity`, faussant la consommation journalière pour toute la fenêtre.

**Impact :** Ce problème amplifie le Problème 1. Une consommation surévaluée (P3) accélère la déplétion (fictive) du stock sous-estimé (P1), ce qui aggrave la génération de Faux Positifs.

### D. Problèmes 4, 5, 6 (Moyen/Basse) : Erreurs de Paramétrage (Q1, Q2, Q3)

Ces problèmes concernent les leviers de réglage du système. Il est inutile de les ajuster tant que le moteur (P1, P2, P3) n'est pas corrigé.

**P4 - minOrders = 2 :** Deux points de données ne fournissent qu'un seul intervalle. Il est statistiquement instable, voire impossible, de calculer une médiane ou une moyenne robuste à partir d'un seul intervalle.

**P5 - Seuil = 19 jours :** Ce seuil (Reorder Point, ROP) est fixe. Un ROP efficace doit inclure un stock de sécurité qui s'adapte à la volatilité de la demande du client. Un seuil "one-size-fits-all" est sous-optimal.

**P6 - Fenêtre = 90/180j :** Pour les produits à demande fluctuante (typique du retail), les données récentes sont plus pertinentes, favorisant des fenêtres courtes. Pour les produits stables ou saisonniers, des fenêtres longues sont nécessaires.

L'ordre de correction est impératif : 1. Corriger la Logique (P1, P2, P3) ; 2. Optimiser les Paramètres (P4, P5, P6).

## 3. Recommandations d'Optimisation

Les améliorations suivantes sont conçues pour être simples, chirurgicales, et respecter les contraintes d'implémentation (pas de ML).

### A. Fondations : Robustesse des Calculs (Haute Priorité)

#### Amélioration 1 : Remplacer la Moyenne par la Médiane pour la Consommation (Segment DEFAULT)

**Problème adressé :** P3 (Q3) - L'algorithme de consommation par moyenne est instable et sensible aux outliers.

**Solution :** Changer l'algorithme de calcul de la consommation journalière pour le segment DEFAULT. Utiliser la médiane de la quantité par commande divisée par la médiane de l'intervalle entre les commandes.

**Implémentation :**

Pour un client/produit avec N commandes dans la fenêtre d'analyse :
1. Extraire la liste des Quantités de commandes : $Q = [Q_1, Q_2,..., Q_n]$
2. Extraire la liste des Intervalles (jours entre les commandes) : $I = [I_1, I_2,..., I_{n-1}]$
3. Calculer : $Consommation\_Journaliere = \frac{\text{Mediane}(Q)}{\text{Mediane}(I)}$

Note : Ce calcul nécessite $N \ge 3$ commandes pour avoir au moins 2 intervalles (voir Amélioration 3). La médiane est une statistique robuste simple à calculer.

**Impact attendu :**
- Recall : Neutre à légère hausse
- Precision : Hausse significative (↑↑)
- F1-Score : Hausse
- Risques : Faible
- Priorité : Élevée

#### Amélioration 2 : Filtrage Simple des Outliers (Alternative à A1 ou Complément)

**Problème adressé :** P3 (Q3) - Outliers faussant les calculs.

**Solution :** Avant tout calcul (moyenne ou médiane), exclure les commandes qui sont des anomalies statistiques évidentes en utilisant la méthode de l'Intervalle Interquartile (IQR).

**Implémentation :**
1. Calculer Q1 (25e percentile) et Q3 (75e percentile) des Quantités de commandes
2. Calculer l'Intervalle Interquartile : $IQR = Q3 - Q1$
3. Définir une "barrière" supérieure : $Barriere = Q3 + (1.5 \times IQR)$
4. Exclure toutes les commandes où $Quantité > Barriere$ des calculs de consommation

**Impact attendu :**
- Recall : Neutre
- Precision : Hausse (↑)
- F1-Score : Hausse
- Risques : Moyen (Si un client change durablement son volume de commande, cette règle pourrait filtrer la "nouvelle normale" en la traitant comme un outlier)
- Priorité : Moyenne (Préférer l'Amélioration 1 pour sa simplicité)

#### Amélioration 3 : Augmenter minOrders de 2 à 3 pour le Segment DEFAULT

**Problème adressé :** P4 (Q3) - Instabilité statistique. Deux commandes ne fournissent qu'un seul intervalle, rendant le calcul d'une $Mediane(Intervalles)$ (A1) impossible ou instable.

**Solution :** Augmenter le seuil minimum de commandes pour être éligible au segment DEFAULT.

**Implémentation :**

Modifier la logique de segmentation :
```
IF count(commandes_produit) >= 3 THEN segment = DEFAULT
ELSE segment = LOW (donc 1 ou 2 commandes)
```

**Impact attendu :**
- Recall : Baisse (légère)
- Precision : Hausse (↑)
- F1-Score : Hausse
- Risques : Faible
- Priorité : Moyenne (à faire en conjonction avec A1)

### B. Correction des Failles Logiques (Haute Priorité)

#### Amélioration 4 : Refonte de l'Estimation de Stock (Logique "Temps + Quantité")

**Problème adressé :** P1 (Q4) - L'hypothèse de stock `stock = lastQuantity` est la cause racine de la faible Précision (Faux Positifs).

**Solution :** Remplacer l'hypothèse erronée par une heuristique simple pour estimer le stock résiduel au moment de la dernière commande, basée sur la demande pendant le délai de livraison (Lead Time Demand).

**Implémentation :**
1. Calculer $Consommation\_Journaliere$ (via A1: Médiane)
2. Définir $LeadTime\_Client\_Jours$ (fixé à 5 jours selon le prompt)
3. Heuristique : Le client commande typiquement lorsqu'il lui reste juste assez de stock pour couvrir le délai de livraison (son point de commande ROP inclut la demande pendant le lead time)
4. Estimer : $Stock\_Residuel\_Moyen = Consommation\_Journaliere \times LeadTime\_Client\_Jours$
5. Modifier la formule de stock :
   - $Stock\_Initial\_Estime = lastQuantity + Stock\_Residuel\_Moyen$
   - $Stock\_Actuel\_Estime = Stock\_Initial\_Estime - (daysElapsed \times Consommation\_Journaliere)$
6. La logique de décision reste : $alerte \ SI \ Stock\_Actuel\_Estime < (Consommation\_Journaliere \times Seuil\_Total\_Jours)$

**Impact attendu :**
- Recall : Neutre à légère baisse
- Precision : Hausse très significative (↑↑↑)
- F1-Score : Hausse majeure
- Risques : Élevé (si mal implémenté), mais nécessaire
- Priorité : Critique

#### Amélioration 5 : Refonte Complète du Segment "LOW" (1-2 Commandes)

**Problème adressé :** P2 (Q5) - L'heuristique `clientReorderWindow` est invalide et génère du "spam" (P=46.7%).

**Solution :** Abandonner l'heuristique actuelle. Implémenter une stratégie dédiée à la demande intermittente, qui est simple, conservatrice et basée sur des règles fixes.

**Implémentation :**

Ce segment gère les produits avec 1 ou 2 commandes (par A3).

1. Abandonner `clientReorderWindow` et consommation
2. Logique (1 ou 2 commandes) : Utiliser une règle métier fixe conservatrice
3. Définir un intervalle de réachat par défaut : $Default\_Reorder\_Interval = 120 \ jours$ (paramètre à affiner)
4. $Alerte \ SI \ (jours\_depuis\_derniere\_commande > (Default\_Reorder\_Interval - Seuil\_Jours\_LOW))$

(Voir A7 pour $Seuil\_Jours\_LOW$)

**Impact attendu :**
- Recall : Baisse (↓)
- Precision : Hausse très significative (↑↑↑)
- F1-Score : Hausse majeure
- Risques : Faible
- Priorité : Élevée

### C. Optimisation des Paramètres (Moyenne Priorité - Post-Fondations)

Ces ajustements ne doivent être effectués qu'APRES l'implémentation des améliorations A1, A3, A4 et A5.

#### Amélioration 6 : Fenêtres d'Analyse Adaptatives par Segment

**Problème adressé :** P6 (Q1) - La fenêtre rigide n'est optimale pour aucun segment.

**Solution :** Utiliser des fenêtres différentes pour les segments DEFAULT et LOW, en s'appuyant sur nos nouvelles logiques (A1-A5).

**Implémentation :**
- `analysisWindowDays.default: 90`
- `analysisWindowDays.low: 180` (ou 365)

**Raisonnement :**
- **DEFAULT :** Maintenant que nous utilisons la Médiane (A1), le calcul est robuste. Nous pouvons utiliser une fenêtre courte (90j) pour être plus réactifs aux tendances récentes, ce qui améliore la pertinence
- **LOW :** Nous avons besoin d'une fenêtre longue (180j+) non pas pour l'analyse (puisque nous utilisons une règle fixe A5), mais pour capturer les 2e et 3e commandes et faire passer le produit au segment DEFAULT (A3). C'est une fenêtre de "capture" et non d'analyse

**Impact attendu :**
- Recall : Hausse (↑)
- Precision : Hausse (↑)
- F1-Score : Hausse
- Risques : Faible
- Priorité : Moyenne

#### Amélioration 7 : Seuils de Déclenchement Adaptatifs par Segment

**Problème adressé :** P5 (Q2) - Le seuil de déclenchement $19 \ jours$ est rigide et inadapté.

**Solution :** Définir des seuils de sécurité (`targetCoverage`) différents pour DEFAULT et LOW, afin d'aligner notre tolérance au risque avec la prévisibilité du segment.

**Implémentation :**
- `replenishmentThreshold.leadTime: 5` (constant)
- `replenishmentThreshold.targetCoverage.default: 14` (seuil total $14+5 = 19 \ jours$)
- `replenishmentThreshold.targetCoverage.low: 5` (seuil total $5+5 = 10 \ jours$)

**Raisonnement :**

Le compromis Precision/Recall peut être ajusté via le seuil.

- **Segment LOW (A5) :** Le problème est une Précision catastrophique (46.7%). Nous devons augmenter la Précision. Pour ce faire, nous devons réduire le seuil (ex: de 19j à 10j). Cela rend le système plus conservateur : il n'alertera que lorsque la rupture est très probable/imminente, éliminant les Faux Positifs "marginaux"
- **Segment DEFAULT (A1, A4) :** La logique est maintenant robuste. Le seuil de 19j (14j de sécurité) est un bon point de départ

**Impact attendu :**
- Recall : Baisse (↓) (principalement sur LOW)
- Precision : Hausse majeure (↑↑) (principalement sur LOW)
- F1-Score : Hausse (↑)
- Risques : Moyen
- Priorité : Moyenne

## 4. Configuration Recommandée et Plan de Validation

### A. Configuration Recommandée Finale

```json
{
  "analysisWindowDays": {
    "default": 90,
    "low": 180
  },
  "minOrders": {
    "default": 3,
    "low": 1
  },
  "replenishmentThreshold": {
    "leadTime": 5,
    "targetCoverage": {
      "default": 14,
      "low": 5
    }
  },
  "fallbackReorderInterval": {
    "low": 120
  },
  "consumptionAlgorithm": {
    "default": "median",
    "low": "fallback"
  },
  "stockEstimation": {
    "method": "leadTimeDemand"
  }
}
```

### B. Plan de Tests Séquentiels (Validation)

Les changements proposés étant interdépendants, une validation incrémentale (backtesting) est requise avant un test A/B en production.

#### Test 1 (Backtest - DEFAULT) : Valider la nouvelle logique CORE

**Action :** Appliquer A1 (Médiane) + A3 (minOrders=3) + A4 (Stock Corrigé) sur les données DEFAULT (90j et 180j)

**Hypothèse :** La Précision doit augmenter massivement (> 75%). Le Recall doit être stable ou > 70%. La fenêtre 90j (A6) devrait surpasser la 180j.

#### Test 2 (Backtest - LOW) : Valider la stratégie de "confinement"

**Action :** Appliquer A5 (Fallback 120j) + A7 (Seuil 10j) sur les données LOW (90j et 180j)

**Hypothèse :** La Précision doit augmenter massivement (> 70-80%). Le Recall va chuter (ex: 50-60%), ce qui est attendu et acceptable.

#### Test 3 (Backtest - Global) : Valider l'impact agrégé

**Action :** Combiner les configurations de Test 1 (sur DEFAULT) et Test 2 (sur LOW)

**Hypothèse :** Les métriques globales doivent atteindre les objectifs : R > 80%, P > 70%, F1 > 75%. (Le Recall élevé du segment DEFAULT, plus large, compensera la baisse du Recall du segment LOW).

#### Test 4 (A/B Test - Production) : Valider en conditions réelles

**Action :** Déployer la configuration du Test 3 sur une cohorte de 10-20% des clients. Mesurer les Taux de Vrais Positifs (alertes suivies d'une commande) et les Faux Positifs (alertes ignorées).

**Objectif :** Confirmer que le F1-Score (basé sur le comportement réel) dépasse celui du groupe de contrôle.

### C. Métriques de Validation

**Primaires :** Recall, Precision, F1-Score (par segment et global)

**Secondaires (Business) :**
- Taux de Conversion des Alertes : (Commandes générées par alerte) / (Total alertes). C'est la vraie Précision
- Taux de "Mute" : % d'utilisateurs masquant les alertes (mesure de la "fatigue")

**Secondaires (Diagnostic) :**
- Taille des Segments : Distribution des clients/produits entre DEFAULT et LOW après A3

### D. Seuils d'Acceptation

- **Go/No-Go (Backtest) :** F1-Score Global > 70%
- **Go/No-Go (A/B Test) :** F1-Score (A/B) > F1-Score (Contrôle) avec une significativité statistique ($p < 0.05$) ET F1-Score (A/B) > 75%

## 5. Données et Analyses Complémentaires Requises

Les recommandations actuelles sont basées sur les agrégats fournis et les principes de gestion des stocks. Pour affiner l'implémentation (notamment les paramètres A5, A7) et valider les hypothèses, les données suivantes sont nécessaires :

### Accès aux Fichiers JSON

`90j-*.json`, `180j-*.json` : L'analyse des distributions (Q6) est actuellement impossible. Il est nécessaire de :
- Analyser la distribution des scores de Précision
- Calculer le coefficient de variation des intervalles de commande pour confirmer l'existence de clients "stables" vs "volatils" (pour affiner A7)

### Documentation Système

`system-overview.md` :
- Clarification de `actualDays` : Est-ce `date_derniere_commande - date_premiere_commande` ?
- Clarification de `clientReorderWindow` : Comment est-elle calculée s'il n'y a qu'une commande produit ?

### Analyse des Erreurs (FP/FN)

**Analyse des Faux Positifs (FP) :** Quand le système génère une fausse alerte, à combien de jours de la vraie commande (si elle existe) était-il ? Cela validera l'impact de P1 (Hypothèse de Stock).

**Analyse des Faux Négatifs (FN) :** Quand un besoin est manqué, pourquoi ? Le stock estimé était-il trop élevé ? La consommation trop basse ?

### Données Brutes (Historique de Commandes)

Nécessaire pour simuler (backtester) les Améliorations A1 (Médiane) et A4 (Stock Corrigé).
