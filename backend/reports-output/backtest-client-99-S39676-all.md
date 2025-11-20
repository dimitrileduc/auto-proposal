# Rapport Backtest - Client La Fermette Godelaine de Saint-Georges

## Contexte

- **Client** : La Fermette Godelaine de Saint-Georges (ID: 99)
- **Commande réelle** : S39676
- **Date commande** : 2025-10-13 07:37:52
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 24
- **Tokens**: 48,689 input + 14,068 output = 62,757 total
- **Coût**: $0.3571 (~35.71¢)
- **Coût par produit LLM**: $0.0149


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.3% | 33 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 43.5% | Score équilibré global |

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
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (10)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [MF0053] MF Maïs 500g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - seulement 2 commandes sur 3 mois (intervalle 38 jours puis 4 jours avant prédiction)
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (de 2u à 1u entre les deux commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse du contexte:** Historique extrêmement limité avec seulement 2 commandes sur 3 mois. Produit premium/bio niche avec pattern d'achat très irrégulier.

**Analyse rythmique:** Première commande le 01/09 (lun.) = 2u, puis 38 jours sans commande, suivie d'une commande le 09/10 (jeu.) = 1u. Pas de pattern hebdomadaire ou mensuel identifiable. La prédiction tombe 4 jours après la dernière commande (13/10).

**Tendance observée:** Baisse de 50% entre les deux seules commandes (2u → 1u), suggérant soit une réduction de la demande, soit une normalisation après un test initial plus volumineux.

**Décision:** Vu la proximité temporelle avec la dernière commande (seulement 4 jours), il est statistiquement peu probable qu'une nouvelle commande intervienne si tôt. Cependant, si commande il y a, la tendance récente indique 1u comme volume standard actuel. En l'absence totale de saisonnalité N-1 et avec un historique minimal, je privilégie la donnée la plus récente (1u) comme référence.

**Confidence faible** en raison du manque critique de données historiques pour établir un pattern fiable.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (45j puis 39j puis 4j). Pas de pattern hebdomadaire ou mensuel clair.
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes faibles et sporadiques (1-2u) sans tendance marquée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse du contexte :**
- Historique très limité : seulement 3 commandes sur 3 mois (18 juil, 1 sept, 9 oct)
- Pas de données N-1 pour référence saisonnière
- Intervalles très irréguliers : 45 jours, puis 39 jours, puis seulement 4 jours

**Pattern détecté :**
- Aucun rythme hebdomadaire ou mensuel identifiable
- Produit premium/bio à faible rotation (total 4u sur 3 mois)
- La dernière commande (9 oct, jeu.) remonte à 4 jours seulement → très récente

**Décision :**
Étant donné que :
1. La dernière commande est du 9 octobre (il y a 4 jours seulement)
2. Les quantités sont systématiquement faibles (1-2u)
3. Les intervalles historiques sont longs (39-45j entre commandes normales)
4. Le court délai depuis la dernière commande suggère qu'il n'y a PAS de besoin immédiat

→ **Prédiction : 1 unité** (quantité minimale observée, correspondant au pattern de demande sporadique et faible de ce produit premium)

La confiance est faible en raison du manque de données historiques et de l'absence de pattern clair.

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (14j, 21j, 18j, 48j)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre 4 commandes sur 3 mois avec des intervalles très variables (48j entre 18/07 et 05/08, puis 27j, 21j, et 21j). Pas de pattern hebdomadaire fixe détecté. La dernière commande date du 22/09 (lundi), soit 21 jours avant la date de prédiction (13/10, également lundi). Le rythme s'est légèrement accéléré ces derniers temps.

**FILTRAGE OUTLIERS**: Aucun outlier détecté. Les quantités oscillent naturellement entre 1u et 2u, ce qui est cohérent pour un produit premium bio en phase de lancement/distribution progressive.

**TENDANCE**: Les 2 dernières commandes montrent un pattern 2u-1u-2u, avec une moyenne de 1.5u sur les 4 observations. Pas de données N-1 pour confirmer la saisonnalité. Le produit semble en phase de demande stable faible.

**DÉCISION**: Compte tenu du cycle de ~21 jours observé récemment et du fait que la dernière commande était de 2u il y a 21 jours, je privilégie une commande de 2u. Le pattern alternant suggère une légère préférence pour 2u (50% des commandes), et l'intervalle de temps écoulé correspond au rythme récent. En B2B agroalimentaire, ce volume reflète probablement un réassort standard pour ce produit premium à rotation modérée.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec dominance lundie - intervalles variables (21j puis 44j)
- **Saisonnalité**: none
- **Tendance**: Stable - quantité constante à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique montre 3 commandes sur 3 mois avec intervalles irréguliers: 18/07 (ven.) → 01/09 (lun.) = 44 jours, puis 01/09 → 22/09 (lun.) = 21 jours. On observe une préférence pour le lundi (2/3 commandes) mais pas de cycle fixe hebdomadaire/mensuel. La dernière commande date du 22/09, soit 21 jours avant la date de prédiction (13/10 = lundi aussi).

**FILTRAGE OUTLIERS**: Aucun pic détecté - toutes les commandes sont strictement identiques à 2u. Aucune donnée N-1 pour valider une saisonnalité. Pas d'événement exceptionnel identifiable.

**SYNTHÈSE**: Demande ultra-stable en volume (100% à 2u), fréquence variable mais possiblement en cours de régularisation (intervalle passé de 44j à 21j). Le 13/10 tombe un lundi (jour privilégié du client) et respecte un intervalle de 21j identique au dernier cycle. La constance parfaite des quantités (2u sur 100% des commandes) indique une demande de fond très prévisible. Pas de raison d'anticiper une variation à la hausse ou à la baisse. **Prédiction: 2u** (quantité historique invariable).

</details>




---

## False Positives (23)

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
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Stock prédit: 0.9u (28j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.9u (21j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.9u (25j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Stock prédit: 1.8u (21j restants) → prédit 2u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: 0.8u (11j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock prédit: 1.8u (21j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Stock prédit: -0.7u (-8j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Stock prédit: -1.1u (-21j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: -0.8u (-18j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.9u (-30j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.6u (-37j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: -0.8u (-28j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |
| [CB005] CB Apple juice 1l | 1 | Stock prédit: 0.1u (9j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: -3.8u (-76j restants) → prédit 1u mais non commandé |
| [LEA04] LEAMO ginger beer bio 750ml | 1 | Stock prédit: -0.7u (-46j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 0.9u (40j restants > seuil 30j) |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Stock suffisant: 0.9u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T09:04:10.197Z*
