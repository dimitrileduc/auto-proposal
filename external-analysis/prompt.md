# Prompt d'Analyse - Optimisation du Système de Détection de Rupture

## Contexte

Vous devez analyser un système de détection de rupture de stock qui prédit quels produits les clients devraient commander. Le système a été testé avec deux configurations de fenêtre d'analyse : **90 jours** et **180 jours**.

## Fichiers à analyser

1. **system-overview.md**: Documentation complète du système
   - Algorithmes de calcul de consommation
   - Estimation du stock
   - Logique de décision

2. **Résultats 90 jours**:
   - `results/90j-default.md` et `.json`: Produits avec 2+ commandes (200 clients)
   - `results/90j-low.md` et `.json`: Produits avec 1 commande (25 clients)

3. **Résultats 180 jours**:
   - `results/180j-default.md` et `.json`: Produits avec 2+ commandes (200 clients)
   - `results/180j-low.md` et `.json`: Produits avec 1 commande (44 clients)

## Objectif

**Proposer des améliorations SIMPLES pour maximiser à la fois Recall ET Precision.**

### Métriques prioritaires

1. **Recall (Sensibilité)**: % de besoins réels détectés
   - Actuellement: 64% (90j) vs 69.9% (180j)
   - Cible: > 80%

2. **Precision**: % de prédictions correctes
   - Actuellement: 53.5% (90j) vs 47.9% (180j)
   - Cible: > 70%

3. **F1-Score**: Équilibre global
   - Actuellement: 53.6% (90j) vs 53.1% (180j)
   - Cible: > 75%

## Questions à explorer

### 1. Choix de la fenêtre d'analyse

- **90j vs 180j**: Quel est le meilleur compromis ?
  - 180j détecte +5.9% de besoins (Recall) mais génère +5.6% de faux positifs (Precision)
  - Le gain en Recall vaut-il la perte en Precision ?

- **Segmentation adaptative**: Faut-il utiliser des fenêtres différentes selon le segment ?
  - DEFAULT (2+ commandes): 90j vs 180j ?
  - LOW (1 commande): 90j vs 180j ?
  - Ou une fenêtre intermédiaire (120j) ?

- **Analyse client par client**: Y a-t-il des patterns ?
  - Certains clients performent mieux avec 90j ?
  - D'autres avec 180j ?
  - Peut-on identifier des critères (fréquence, régularité, volume) ?

### 2. Seuil de déclenchement

**Seuil actuel**: `targetCoverage + leadTime = 14 + 5 = 19 jours`

- **Impact du seuil**:
  - Augmenter le seuil → Plus de détections (↑ Recall) mais plus de faux positifs (↓ Precision)
  - Diminuer le seuil → Moins de faux positifs (↑ Precision) mais plus de manqués (↓ Recall)

- **Questions**:
  - Le seuil de 19 jours est-il optimal ?
  - Faut-il un seuil différent pour DEFAULT vs LOW ?
  - Peut-on adapter le seuil selon la stabilité du client ?

### 3. Algorithme de consommation

**Pour 2+ commandes**: `consommation = totalQuantity / actualDays`
**Pour 1 commande**: `consommation = totalQuantity / clientReorderWindow`

- **Problèmes potentiels**:
  - Moyennes simples sensibles aux outliers (commandes exceptionnelles)
  - Pas de pondération temporelle (commandes récentes = anciennes)
  - Saisonnalité non gérée

- **Améliorations possibles**:
  - Médiane au lieu de moyenne pour résistance aux outliers ?
  - Pondération exponentielle (plus de poids aux commandes récentes) ?
  - Détection et exclusion des outliers avant calcul ?
  - Minimum de commandes requis pour segment DEFAULT (actuellement 2) ?

### 4. Estimation du stock

**Algorithme actuel**: `stock = lastQuantity - (daysElapsed × consommation)`

- **Hypothèse forte**: Stock initial = dernière quantité commandée
  - Problème si client avait encore du stock lors de la dernière commande
  - Sous-estime le stock réel → Faux positifs

- **Améliorations**:
  - Ajuster avec intervalle moyen de commande ?
  - Estimer le stock résiduel à la nouvelle commande ?

### 5. Segment LOW (1 commande)

**Méthode actuelle**: Utilise le `clientReorderWindow` (médiane des intervalles du client)

- **Performance**:
  - 90j LOW: Recall 100%, Precision 59.8%
  - 180j LOW: Recall 95.5%, Precision 46.7%
  - Beaucoup de faux positifs

- **Questions**:
  - Le clientReorderWindow est-il pertinent pour un produit commandé 1 fois ?
  - Faut-il un seuil plus strict pour LOW ?
  - Faut-il exclure les produits avec 1 seule commande ?
  - Ou utiliser une autre heuristique (ex: intervalle = 60j par défaut) ?

### 6. Analyse des distributions

Dans les fichiers JSON, vous avez accès aux résultats individuels de chaque client:

```json
{
  "individualResults": [
    {
      "clientId": 12345,
      "clientName": "Client X",
      "orderName": "S39123",
      "success": true,
      "metrics": {
        "precision": 0.5,
        "recall": 1.0,
        "f1Score": 0.667,
        "mae": 2.5,
        "mape": 50
      }
    }
  ]
}
```

- **Analyses à faire**:
  - Distribution des scores (combien de clients < 50% Precision ?)
  - Corrélation entre métriques (clients avec Recall élevé ont-ils Precision faible ?)
  - Comparaison 90j vs 180j client par client (combien s'améliorent ? se dégradent ?)
  - Y a-t-il des clusters de clients (ex: haute fréquence, basse fréquence) ?

### 7. Trade-offs et priorités business

- **Coût des erreurs**:
  - **Faux Négatif** (ne pas proposer un besoin réel) → Client en rupture, insatisfaction
  - **Faux Positif** (proposer un produit non nécessaire) → Client ignore, travail gaspillé

- **Questions**:
  - Quel type d'erreur est le plus coûteux ?
  - Faut-il favoriser le Recall (détecter plus de besoins) au détriment de la Precision ?
  - Ou l'inverse (ne proposer que des suggestions très sûres) ?

## Contraintes

**IMPORTANT**: Les améliorations doivent rester SIMPLES.

### Autorisé ✅
- Ajuster les paramètres (fenêtre, seuil, segments)
- Changer les formules de calcul (médiane, pondération temporelle)
- Ajouter des règles conditionnelles simples (if/else)
- Filtrer les outliers
- Segmenter différemment les clients

### Interdit ❌
- Machine Learning (régression, classification, réseaux de neurones)
- Algorithmes complexes (forêts aléatoires, gradient boosting)
- Features engineering élaboré
- Ensembles de modèles

## Format de réponse attendu

### 1. Analyse des résultats actuels
- Résumé des performances 90j vs 180j
- Points forts et faiblesses de chaque configuration
- Patterns identifiés dans les données

### 2. Problèmes identifiés
- Liste des problèmes du système actuel
- Impact estimé de chaque problème
- Priorisation (impact vs facilité de correction)

### 3. Recommandations
Pour chaque amélioration proposée:

```markdown
### Amélioration N: [Titre]

**Problème adressé**: [Quel problème est résolu]

**Solution**: [Description précise de la modification]

**Implémentation**: [Comment modifier le code/config]

**Impact attendu**:
- Recall: [estimation]
- Precision: [estimation]
- F1-Score: [estimation]

**Risques**: [Effets secondaires possibles]

**Priorité**: [Haute / Moyenne / Basse]
```

### 4. Configuration recommandée finale

```yaml
# Configuration optimale proposée
analysisWindowDays:
  default: [90 ou 180 ou 120 ou adaptatif]
  low: [90 ou 180 ou 120 ou adaptatif]

replenishmentThreshold:
  default: [nombre de jours]
  low: [nombre de jours]

consumptionAlgorithm:
  method: [moyenne / médiane / pondérée]
  outlierDetection: [oui / non]
  minOrders: [nombre minimum pour DEFAULT]

lowSegmentStrategy:
  enabled: [oui / non]
  fallbackInterval: [jours si clientReorderWindow non disponible]
```

### 5. Tests à réaliser
- Quels tests effectuer pour valider les améliorations ?
- Métriques à surveiller
- Seuils d'acceptation

## Données supplémentaires nécessaires ?

Si vous avez besoin de plus d'informations pour affiner l'analyse, listez:
- Statistiques manquantes
- Analyses supplémentaires à effectuer
- Données brutes à examiner (historique de commandes individuelles, intervalles, etc.)

## Livrables

1. **Rapport d'analyse**: Réponses détaillées aux questions ci-dessus
2. **Liste priorisée d'améliorations**: Avec impact estimé
3. **Configuration recommandée**: Fichier de configuration prêt à tester
4. **Plan de validation**: Comment tester les changements proposés

---

**Objectif final**: Augmenter le F1-Score de 53.5% à > 75% avec des modifications simples et pragmatiques.
