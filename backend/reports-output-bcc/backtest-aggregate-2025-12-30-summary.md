# Rapport de Performance - Systeme de Prediction de Reapprovisionnement

## Contexte de l'Analyse

- Clients analyses: 748 clients
- Methode: Backtest sur commandes reelles (prediction J-1)
- Periode d'analyse: 120 jours d'historique

## Segmentation des Produits

Le systeme segmente les produits en deux categories selon leur historique de commandes:

### Produits de Base

Produits commandes au moins 2 fois dans les 120 derniers jours.
Ces produits disposent de suffisamment de donnees pour une prediction fiable.

### Produits Optionnels

Produits commandes une seule fois dans les 120 derniers jours.
Donnees limitees - prediction exploratoire necessitant validation.

## 1. Detection du Risque de Rupture

| Segment | Volume | Recall | Precision |
|---------|--------|--------|-----------|
| Produits de Base | 65% | 100.0% | 52.5% |
| Produits Optionnels | 35% | 55.8% | 51.3% |

**Recall**: Pourcentage des besoins reels detectes par le systeme.
**Precision**: Pourcentage des suggestions correspondant a un achat reel.

## 2. Precision des Quantites

| Metrique | Valeur |
|----------|--------|
| WMAPE (mediane) | 26.9% |

**WMAPE**: Ecart moyen pondere entre quantites predites et quantites commandees.
Plus la valeur est basse, plus les predictions sont precises.

## Recommandation d'Utilisation

- **Produits de Base**: Activation en mode automatique
- **Produits Optionnels**: Affichage en mode suggestion (validation manuelle recommandee)

---

*Rapport genere le 2025-12-30*
