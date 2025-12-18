# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S39575
- **Date commande** : 2025-10-09 06:38:48
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 20,077 input + 15,757 output = 35,834 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 27 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 60.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (12)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 8 et 21 jours, principalement le mercredi/jeudi
- **Saisonnalité**: none
- **Tendance**: Baisse du volume unitaire (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles et cohérents pour du B2B de niche. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul. Étape 3: On observe un ralentissement de la fréquence (21 jours entre les deux dernières commandes contre 14 auparavant) et une diminution du volume (1u le 02/10). Étape 4: La date actuelle (08/10) est très proche de la dernière commande (02/10), suggérant un besoin de réajustement ou un cycle court. Compte tenu de la moyenne mobile à 1.67u et pour éviter une rupture sur un produit à faible rotation, une commande de 2 unités est préconisée pour couvrir les 2 à 3 prochaines semaines tout en restant conservateur sur le stock immobilisé. Confiance faible due au peu d'historique (3 points de données). Slip de sécurité appliqué car le mercredi est le jour historique de commande du client (2 sur 3). core business days (Wed/Thu).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2 sur 3).ing de commande historique (2  units.

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ 40 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais de très faible volume (1 unité par commande). Les données indiquent un cycle de réapprovisionnement espacé (toutes les 5 à 6 semaines environ). La dernière commande datant d'il y a seulement 6 jours (02/10), une nouvelle commande le 08/10 est prématurée par rapport au rythme historique habituel. Cependant, le volume de base étant l'unité minimale, et aucune tendance à la hausse n'étant détectée malgré le secteur agroalimentaire, la recommandation reste fixée à la quantité de fond de 1 unité pour éviter tout sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel, majoritairement le mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+20%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune commande ne présente un écart type significatif signalant un outlier; les volumes oscillent entre 2 et 3 unités. 2. SAISONNALITÉ: Absence de données N-1, cependant le produit (chips bio) présente une demande de fond stable en période automnale sans pic évènementiel détecté. 3. TENDANCE: On observe une accélération du rythme avec des commandes plus rapprochées en septembre/octobre et une légère hausse du volume (passage fréquent de 2u à 3u). 4. RECOMMANDATION: La moyenne glissante sur 3 mois est de 2.4u. Compte tenu de la dernière commande à 3u et du fait que nous sommes un mercredi (jour historique de commande), une quantité de 3 unités est recommandée pour couvrir la demande de fond tout en sécurisant la légère tendance haussière récente.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel (principalement le mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes oscillent entre 1 et 3 unités avec une moyenne de 2. Étape 2: Aucune donnée N-1 disponible, mais la demande est constante sur les 3 derniers mois. Étape 3: Le rythme de commande suit majoritairement un cycle le mercredi (60% des occurrences), ce qui correspond à la date actuelle. Les volumes récents (2u le 02/10, 2u le 22/09) indiquent une stabilité totale. Étape 4: La moyenne de fond est de 2 unités, et étant donné le caractère périssable/premium du produit bio, une approche conservatrice de 2 unités est recommandée pour maintenir la rotation de stock sans risque de rupture.

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, approx. toutes les 1 à 3 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Pas d'outliers identifiés, les volumes sont constants entre 1 et 2 unités. Étape 2 (Saisonnalité): Données N-1 absentes, impact considéré comme nul par prudence. Étape 3 (Tendance): Rythme irrégulier avec un dernier intervalle de 26 jours (vs 7 jours précédemment), indiquant une rotation lente. Étape 4 (Recommandation): La moyenne lissée est de 1.33 unités. Étant donné l'absence de tendance haussière claire et le profil B2B à faible rotation pour cette référence, une approche conservatrice de 1 unité est recommandée pour éviter le sur-stockage.

</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel environ tous les 14 jours (alternance lun/mer)
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume moyen de 2.4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les commandes oscillent entre 1u et 3u, ce qui est cohérent pour du B2B premium. ÉTAPE 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit maintient un rythme régulier sur l'été/rentrée. ÉTAPE 3: La fréquence moyenne est d'une commande tous les 14,5 jours. La dernière commande date du 22 septembre (il y a 16 jours), ce qui place la demande actuelle pile dans la fenêtre de réapprovisionnement. ÉTAPE 4: Le volume moyen est de 2.4u. En restant conservateur sur un produit bio premium pour éviter le sur-stockage, une commande de 2 unités est préconisée pour couvrir les 15 prochains jours.

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES DU RAISONNEMENT : 1. DE-EVENTING : Aucune anomalie détectée, les volumes sont constants à 1 unité par commande. 2. SAISONNALITÉ : Données N-1 absentes, impact saisonnier non observable sur ce faible volume. 3. TENDANCE : Stable sur les 3 derniers mois avec un volume de 1 unité par cycle de réapprovisionnement (tous les ~35 jours). 4. RECOMMANDATION : Bien que l'intervalle suggère une commande théorique autour de mi-septembre, le stock B2B pour ce type de boisson semble se reconstituer par unité simple. Au vu de la stabilité absolue et de la faible fréquence, une commande d'une unité suffit pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle toutes les 2 à 4 semaines le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité parfaite du produit avec une commande systématique d'une unité le mercredi, environ toutes les deux à quatre semaines. Aucune anomalie n'est détectée dans l'historique récent, et le jour de la demande correspond exactement au cycle habituel du client. Étant donné l'absence de données N-1 pour confirmer une saisonnalité et la nature conservatrice de la gestion B2B, le maintien de la quantité habituelle de 1 unité est recommandé pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec commandes périodiques le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est de 1 unité. Étape 2: Aucune donnée N-1 disponible, mais le produit semble être en phase de test ou très faible rotation. Étape 3: La fréquence est faible (une commande toutes les 6 semaines environ), mais toujours le mercredi. Étape 4: Étant donné que nous sommes un mercredi (jour habituel) et que le volume historique est constant, une commande de 1 unité est recommandée pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 30-35 jours, le mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'est détectée, la demande de fond est de 1 unité. Étape 2: Aucune donnée historique N-1 n'est disponible pour valider une saisonnalité spécifique au secteur ou à ce produit. Étape 3: Le pattern est extrêmement régulier avec une commande exactement le mercredi toutes les 4 à 5 semaines. La tendance est strictement stable. Étape 4: La date actuelle du 08/10 correspond parfaitement au cycle de commande (50 jours après la dernière commande, ce qui suggère une possible rupture de rythme ou un besoin imminent). Étant donné la faible fréquence et le volume unitaire constant, une commande de 1 unité est recommandée pour couvrir le besoin du mois à venir sans risque de sur-stockage.

</details>


<details>
<summary><strong>11. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ toutes les 3 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune anomalie détectée, les volumes sont constants à 1 unité. Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: La fréquence est faible et irrégulière (environ 20 jours d'écart), mais le volume est stable. Étape 4: Compte tenu du faible historique et de la nature B2B, une commande d'une seule unité est recommandée pour couvrir le besoin ponctuel sans générer de sur-stockage inutile pour une référence à rotation lente (Slow Mover). La confiance est faible en raison du manque de profondeur historique (seulement 2 points de données). Pour le jour demandé (mercredi), cela correspond à la dernière date de commande connue en juillet, ce qui n'indique pas de déviation majeure du comportement d'achat habituel pour ce client spécifique sur ce produit 'Organic Apricot Jam'. Un stock de sécurité de 1u suffit pour couvrir la demande de fond observée à ce jour sur les 3 derniers mois sans données N-1 contraires ou saisonnalité forte avérée à cette période précise pour ce type de confiture bio en format 370g dans un cadre de réapprovisionnement standard automatisé ou semi-manuel en agroalimentaire B2B hors période de promotions massives ou de fêtes de fin d'année non encore sensibles au 8 octobre pour ce produit spécifique à usage quotidien régulier ou complémentaire en hôtellerie-restauration (CHRE/HORECA). En conclusion, on maintient la quantité historique de 1u par commande constatée lors des deux occurrences précédentes sans signe d'accélération notable ou de baisse nécessitant un arrêt du réapprovisionnement immédiat tout en restant conservateur face à l'incertitude des données historiques disponibles sur la plateforme de gestion des stocks actuelle du client demandeur qui souhaite éviter les ruptures sèches tout en limitant l'espace de stockage alloué au bio à faible rotation sélective par point de vente ou client final identifié.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 1u
- 2025-09-10 13:32:58: 2u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 1u
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 3u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 2u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:22:23: 2u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 1u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:22:05: 1u
- 2025-08-27 07:04:23: 1u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 1u
- 2025-08-04 11:58:17: 3u
- 2025-07-16 06:29:37: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:32:58: 1u
- 2025-08-04 11:58:17: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:32:58: 1u
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 07:04:23: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-20 11:31:02: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [JOY03] JOY! Organic Apricot Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:58:17: 1u
- 2025-07-16 06:29:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (15)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.5u (6j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: 2.1u (11j restants) → prédit 3u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.6u (6j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.3u (12j restants) → prédit 1u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.8u (-53j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: -1.2u (-46j restants) → prédit 2u mais non commandé |


---

## False Negatives (1)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock suffisant: 1.8u (39j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:02:41.292Z*
