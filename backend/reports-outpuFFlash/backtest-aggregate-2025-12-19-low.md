# Rapport Backtest Agrégé

## Contexte

- **Date d'exécution** : 19/12/2025 14:05:10
- **Clients analysés** : 2
- **Clients réussis** : 2
- **Clients échoués** : 0

### Configuration

- **Jours d'avance** : 1j
- **Fenêtre d'analyse** : 120j
- **Couverture cible** : 25j
- **Lead time** : 5j

---

## Statistiques Globales

### Métriques Principales

| Métrique | Moyenne | Médiane | Interprétation |
|----------|---------|---------|----------------|
| **Recall** | 50.0% | 50.0% | % de besoins réels détectés |
| **Precision** | 50.0% | 50.0% | % de prédictions correctes (50.0% proposés non commandés) |
| **F1-Score** | 50.0% | 50.0% | Équilibre détection/précision |
| **wMAPE** | 25.0% | 25.0% | ⚖️ Écart pondéré robuste (métrique principale) |
| **MAPE** | 25.0% | 25.0% | Écart moyen (info, biaisé) |
| **Bias** | 25.0% | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |



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
<summary>wMAPE vs MAPE : Quelle différence ? 🆕</summary>

**wMAPE (Weighted MAPE)** - ⚖️ MÉTRIQUE PRINCIPALE RECOMMANDÉE

- **Calcul** : sum(|Prédit - Réel|) / sum(Réel) × 100%
- **Pondération globale** sur tous les produits détectés
- **Robuste** aux petites quantités (pas d'explosion d'erreur)
- **Symétrique** : traite sous/sur-estimation équitablement
- **Recommandé** par experts supply chain (Blue Yonder, 2024-2025)

**Exemple wMAPE** :
- Produit A : Prédit 10, Réel 12 → Erreur absolue = 2u
- Produit B : Prédit 5, Réel 4 → Erreur absolue = 1u
- wMAPE = (2 + 1) / (12 + 4) × 100% = 18.8%

**MAPE (Mean Absolute Percentage Error)** - ℹ️ POUR INFO (biaisé)

- **Calcul** : Moyenne des (|Prédit - Réel| / Réel × 100%)
- **Problème 1** : Asymétrique (pénalise 2-3× plus sur-estimation)
- **Problème 2** : Explose sur petites quantités (prédit 2, réel 1 = 100%!)
- **Gardé** pour comparaison historique

**Exemple MAPE** (même cas) :
- Produit A : (2/12) × 100% = 16.7%
- Produit B : (1/4) × 100% = 25%
- MAPE = (16.7% + 25%) / 2 = **20.8%** (pénalisé par produit B!)

**✅ Bon score wMAPE** : < 25% (vs MAPE < 30%)
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

**⚠️ Limitations** : Asymétrique, sensible aux petites quantités → Préférer **wMAPE**

**Bon score** : < 30%
</details>

---

## Distribution des Performances

**Comment se répartissent les 2 clients ?**

### Détection des besoins (Recall)

| Score | Clients | % |
|-------|---------|---|
| ≥80% | 1 | 50% |
| 50-80% | 0 | 0% |
| <50% | 1 | 50% |

### Justesse des prédictions (Precision)

| Score | Clients | % |
|-------|---------|---|
| ≥70% | 1 | 50% |
| 40-70% | 0 | 0% |
| <40% | 1 | 50% |



---

*Rapport généré automatiquement le 2025-12-19T13:05:10.303Z*
