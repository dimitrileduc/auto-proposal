# Rapport Backtest Agrégé

## Contexte

- **Date d'exécution** : 18/11/2025 16:43:12
- **Clients analysés** : 34
- **Clients réussis** : 34
- **Clients échoués** : 0

### Configuration

- **Jours d'avance** : 0j
- **Fenêtre d'analyse** : 120j
- **Couverture cible** : 25j
- **Lead time** : 5j

---

## Statistiques Globales

### Métriques Principales

| Métrique | Moyenne | Médiane | Interprétation |
|----------|---------|---------|----------------|
| **Recall** | 90.3% | 100.0% | % de besoins réels détectés |
| **Precision** | 51.6% | 50.0% | % de prédictions correctes (50.0% proposés non commandés) |
| **F1-Score** | 61.1% | 66.7% | Équilibre détection/précision |
| **MAPE** | 31.1% | 0.0% | Écart moyen sur les quantités prédites |

<details>
<summary>Qu'est-ce que la Moyenne vs Médiane ?</summary>

**Moyenne** : Somme de tous les scores ÷ nombre de clients
- Sensible aux valeurs extrêmes (un très mauvais client tire la moyenne vers le bas)

**Médiane** : Valeur du milieu quand on trie tous les scores
- Robuste aux valeurs extrêmes (meilleure représentation du client "typique")

**Exemple** : 5 clients avec Recall [20%, 80%, 90%, 95%, 100%]
- Moyenne = 77% (tirée vers le bas par les 20%)
- Médiane = 90% (valeur centrale, plus représentative)

**Bon système** : Moyenne et médiane élevées pour Recall/Precision/F1, faibles pour MAE/MAPE
</details>

<details>
<summary>Comment est calculé le Recall ?</summary>

Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Recall = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Client commande 10 produits, système en détecte 8 → Recall = 80%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculée la Precision ?</summary>

Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Precision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Système prédit 10 produits, 6 sont commandés → Precision = 60%

**Bon score** : > 70% (peu de surprédictions)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

Moyenne harmonique entre Precision et Recall

**Calcul** : F1 = 2 × (Precision × Recall) ÷ (Precision + Recall)

**Pourquoi ?** : On peut avoir 100% de precision mais 50% de recall. Le F1 combine les deux.

**Bon score** : > 75% (système performant globalement)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

En moyenne, le système se trompe de combien en pourcentage sur les quantités prédites ?

**Important** : Calculé **uniquement sur les produits correctement détectés** (True Positives = prédits ET commandés)

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%
</details>

---

## Distribution des Performances

**Comment se répartissent les 34 clients ?**

### Détection des besoins (Recall)

| Score | Clients | % |
|-------|---------|---|
| ≥80% | 30 | 88% |
| 50-80% | 1 | 3% |
| <50% | 3 | 9% |

### Justesse des prédictions (Precision)

| Score | Clients | % |
|-------|---------|---|
| ≥70% | 8 | 24% |
| 40-70% | 14 | 41% |
| <40% | 12 | 35% |



---

*Rapport généré automatiquement le 2025-11-18T15:43:12.941Z*
