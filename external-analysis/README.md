# External Analysis - Système de Détection de Rupture de Stock

Ce dossier contient la documentation et les résultats nécessaires pour une analyse externe du système de prédiction de rupture de stock.

## Structure

```
external-analysis/
├── README.md                  # Ce fichier
├── system-overview.md         # Documentation technique du système
├── prompt.md                  # Guide d'analyse et questions à explorer
└── results/                   # Résultats des backtests
    ├── 90j-default.md         # Rapport 90j - segment DEFAULT (200 clients)
    ├── 90j-default.json       # Données brutes 90j - DEFAULT
    ├── 90j-low.md             # Rapport 90j - segment LOW (25 clients)
    ├── 90j-low.json           # Données brutes 90j - LOW
    ├── 180j-default.md        # Rapport 180j - segment DEFAULT (200 clients)
    ├── 180j-default.json      # Données brutes 180j - DEFAULT
    ├── 180j-low.md            # Rapport 180j - segment LOW (44 clients)
    └── 180j-low.json          # Données brutes 180j - LOW
```

## Fichiers

### Documentation

- **system-overview.md**: Description complète du système de détection
  - Algorithmes de calcul de consommation quotidienne
  - Estimation du stock et prédiction de rupture
  - Logique de déclenchement des propositions
  - Impact de la fenêtre d'analyse
  - Métriques de performance

- **prompt.md**: Guide pour l'analyse externe
  - Questions à explorer
  - Métriques à optimiser
  - Contraintes (pas de ML, solutions simples)
  - Format de réponse attendu

### Résultats

Chaque fichier contient les résultats d'un backtest avec une configuration spécifique:

#### Fichiers Markdown (.md)
Rapports lisibles avec:
- Statistiques globales (Recall, Precision, F1-Score, MAPE)
- Distribution des performances
- Interprétation des métriques

#### Fichiers JSON (.json)
Données brutes incluant:
- Configuration du backtest
- Métriques agrégées (moyenne, médiane, écart-type, percentiles)
- **Résultats individuels par client** avec:
  - ID et nom du client
  - Métriques de performance (Recall, Precision, F1, MAPE)

### Segments

- **DEFAULT (no-low)**: Produits avec 2+ commandes dans la fenêtre d'analyse
  - Plus stable et prévisible
  - Consommation calculée sur historique réel

- **LOW**: Produits avec 1 seule commande dans la fenêtre d'analyse
  - Plus incertain
  - Consommation estimée via le pattern du client (clientReorderWindow)

## Performances actuelles

### 90 jours

| Segment | Clients | Recall | Precision | F1-Score | MAPE |
|---------|---------|--------|-----------|----------|------|
| DEFAULT | 200 | 64.0% | 53.5% | 53.6% | 47.3% |
| LOW | 25 | 100.0% | 59.8% | 68.9% | 30.3% |

### 180 jours

| Segment | Clients | Recall | Precision | F1-Score | MAPE |
|---------|---------|--------|-----------|----------|------|
| DEFAULT | 200 | 69.9% | 47.9% | 53.1% | 37.3% |
| LOW | 44 | 95.5% | 46.7% | 57.3% | 26.3% |

### Trade-off observé

- **180j vs 90j**: +5.9% Recall mais -5.6% Precision
- **F1-Score**: Quasi équivalent (~53%)
- **Segment LOW**: Performances généralement meilleures mais beaucoup de faux positifs

## Objectifs d'amélioration

| Métrique | Actuel | Cible | Gap |
|----------|--------|-------|-----|
| Recall | 64-70% | > 80% | +10-16% |
| Precision | 48-54% | > 70% | +16-22% |
| F1-Score | ~53% | > 75% | +22% |

## Comment utiliser ces fichiers

### Pour une analyse rapide

1. Lire `system-overview.md` pour comprendre le système
2. Consulter les rapports .md dans `results/` pour vue d'ensemble
3. Identifier les patterns et problèmes évidents

### Pour une analyse approfondie

1. Lire `system-overview.md` en détail
2. Charger les fichiers JSON dans un outil d'analyse (Python, R, Excel)
3. Analyser les résultats individuels par client
4. Suivre le guide dans `prompt.md` pour exploration systématique
5. Comparer les performances 90j vs 180j client par client

### Exemple d'analyse Python

```python
import json
import pandas as pd

# Charger les résultats
with open('results/90j-default.json') as f:
    data_90j = json.load(f)

with open('results/180j-default.json') as f:
    data_180j = json.load(f)

# Extraire les résultats individuels
df_90j = pd.DataFrame(data_90j['individualResults'])
df_180j = pd.DataFrame(data_180j['individualResults'])

# Analyser les distributions
print(df_90j['metrics'].apply(pd.Series).describe())

# Comparer les clients
df_90j['config'] = '90j'
df_180j['config'] = '180j'
comparison = pd.concat([df_90j, df_180j])

# Grouper par client pour voir qui performe mieux avec quelle config
# ...
```

## Prochaines étapes

1. **Analyser** les résultats en suivant `prompt.md`
2. **Identifier** les améliorations simples possibles
3. **Proposer** une configuration optimale
4. **Tester** avec un nouveau backtest (ex: 120j)
5. **Valider** les changements avant déploiement

## Contact

Pour questions ou clarifications sur le système, le backtest, ou les données.
