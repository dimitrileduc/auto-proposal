# Rapport Backtest - Client ASBL L'Accueil - Magasin du Val Dieu

## Contexte

- **Client** : ASBL L'Accueil - Magasin du Val Dieu (ID: 52570)
- **Commande réelle** : S39743
- **Date commande** : 2025-10-16 11:39:00
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 15,243 input + 5,721 output = 20,964 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.0% | 20 produits prédits, 13 corrects |
| **Rappel** | 81.3% | 16 produits réels, 13 détectés |
| **F1-Score** | 72.2% | Score équilibré global |

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
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -2.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (13)

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
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [WIG03] WIGNAC cidre naturel bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 4 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 20 et 30 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25%
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Étape 1: Identification d'un outlier bas (1u en août) probablement dû à une correction ou un reliquat. La moyenne de fond lissée se situe autour de 3.5 unités. Étape 2: La saisonnalité N-1 sur la fenêtre septembre/octobre montre une activité stable (4u), sans pic massif pour ce produit de tartinade. Étape 3: On observe une légère érosion des volumes sur 2025 (moyenne de 3u sur les derniers mois actifs vs 4u en 2024). L'absence de commande début octobre suggère un besoin de réapprovisionnement imminent. Étape 4: En croisant la baisse de tendance récente et le besoin de fond, une commande de 3 unités est recommandée pour couvrir le cycle de 4 semaines sans créer de surstock, restant conservateur face à la baisse de volume observée en septembre.

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.7u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 25-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à légère baisse (passage de 4-5u à 3-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable entre 3 et 5 unités par commande. Etape 1: Aucun outlier majeur n'a été détecté, les variations restant dans une fourchette B2B standard. Etape 2: La saisonnalité N-1 montre un volume légèrement plus élevé en été/début d'automne (4-5u) suivi d'une stabilisation. Etape 3: La tendance récente (août/septembre 2025) confirme un besoin de 3.5 unités en moyenne. Etape 4: La dernière commande remontant au 24 septembre (soit 21 jours), la commande du 15 octobre s'inscrit parfaitement dans le cycle de rotation mensuel. Nous recommandons 4 unités pour couvrir le mois à venir tout en évitant le sur-stockage sur un produit à rotation modérée.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours), commande généralement entre le lundi et le mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3.7u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, les volumes varient de 2u à 5u avec une régularité notable (moyenne globale de 3.7u). Étape 2 : On observe une légère hausse en été (4u-5u entre juin et août) et un retour à la normale en septembre/octobre. Étape 3 : La tendance récente montre une stabilisation à 4u en août suivie d'une légère baisse à 3u en septembre, restant cohérent avec l'historique de fin d'année N-1. Étape 4 : Le cycle de commande est d'environ 1 fois par mois. La dernière commande datant du 24 septembre, le besoin pour la mi-octobre se situe à la fin du cycle habituel. Une recommandation de 4 unités permet de couvrir la demande de fond tout en sécurisant un léger stock de sécurité pour ce produit stable.

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 25-30 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1.5u à 2u avec légère accélération de fréquence
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très stable pour ce produit. Etape 1 : Les pics à 3u en 2024 ont été isolés comme des événements ponctuels. Etape 2 : Aucune saisonnalité marquée n'est visible sur les données N-1 vs actuelles. Etape 3 : La tendance récente montre une stabilisation à 2u lors des deux dernières commandes (août/septembre). Etape 4 : Pour la commande du 15 octobre, le maintien à 2u est préconisé pour couvrir le cycle habituel de 4 semaines tout en évitant le sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 30-35 jours (mensuel irrégulier)
- **Saisonnalité**: none
- **Tendance**: Stable à 4-5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants (4-5 unités). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que le cidre puisse fluctuer en été, la tendance reste stable ici. Étape 3: Le rythme de commande est mensuel (environ tous les 30 à 35 jours). La dernière commande datant du 11 septembre, nous sommes à 34 jours de délai, ce qui correspond au cycle habituel. Étape 4: La moyenne lissée est de 4,33. Comme nous sommes en octobre (période neutre) et en l'absence de tendance haussière marquée, une approche conservatrice de 4 unités est recommandée pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 4-5 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune anomalie détectée, les volumes sont constants (4-5u). La demande de fond est de 4,33u par commande. ÉTAPE 2 (SAISONNALITÉ): Pas de données N-1 disponibles. Bien que le cidre rosé soit sensible à la période estivale, les volumes n'ont pas montré de pic majeur en juillet/août. ÉTAPE 3 (TENDANCE): Stabilité observée avec un léger ralentissement de la fréquence (dernière commande il y a 5 semaines). Le jour de commande (mercredi) est cohérent avec le milieu de semaine habituel. ÉTAPE 4 (RECOMMANDATION): Compte tenu de l'historique très stable et de l'absence de tendance haussière, une commande de 4 unités (arrondi conservateur) suffit à couvrir le cycle de réapprovisionnement sans risque de surstockage.

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique long (environ 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse d'activité (volumétrie annuelle en chute)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune commande n'est identifiée comme outlier car les volumes sont uniformément faibles (1 à 3u). Étape 2 (Saisonnalité) : Pas de corrélation temporelle évidente entre 2024 et 2025. Le produit ne présente pas de pic saisonnier identifiable à la mi-octobre. Étape 3 (Tendance) : On observe un fort ralentissement avec seulement 1 commande sur les 3 derniers mois (août). Le volume historique moyen est de 2.2u par commande. Étape 4 (Recommandation) : Malgré une demande ponctuelle en août de 2u, le manque de récurrence impose une approche conservatrice. La quantité de 2u permet de couvrir le fond de roulement historique sans risquer le sur-stockage sur une référence dont la rotation s'essouffle visiblement en B2B pour ce point de vente spécifique au mois d'octobre. Confiance basse due à la faible densité des données récentes (dernière commande il y a plus de 70 jours). Chaque commande semble être un réapprovisionnement de complément plutôt qu'un cycle de stock régulier. La recommandation finale est de 2 unités, s'alignant sur la dernière commande et la moyenne basse historique pour minimiser les risques d'invendus sur un produit à date de péremption sensible (133g, snacking). Aucun ajustement saisonnier positif ne s'applique ici car la période de fin d'année n'avait pas généré de surcroît d'activité l'an dernier sur ce SKU spécifique (pas de data sur Q4 2024). On reste donc sur le socle minimal observé de 2 unités pour maintenir la présence rayon sans alourdir le stock dormant en cas de faible rotation persistante constatée depuis l'été 2025.

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u en début 2024 vers 2u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes (1u-3u) sont cohérents avec un produit de niche. Étape 2: Aucune saisonnalité marquée n'apparaît entre 2024 et 2025 sur ces périodes. Étape 3: On observe une légère érosion des volumes, passant de pics à 3u en 2024 à 2u lors de la dernière commande d'août 2025. Étape 4: La demande est sporadique (dernier mouvement il y a 70 jours). Étant donné l'absence de commande en septembre/début octobre, un réapprovisionnement de 2 unités permet de couvrir la demande de fond tout en restant conservateur face au ralentissement observé. Niveau de confiance faible dû à la pauvreté des données récentes (une seule commande en 3 mois). Pour un produit de ce type, il est préférable de ne pas surstocker une référence à rotation lente (slow-mover). Pour finir, le jour de la semaine n'impacte pas ce produit sans cycle fixe identifié sur un jour précis de la semaine : mercredi est cohérent avec le spectre des commandes passées (lun-jeu). Quantité recommandée finale: 2u pour assurer la disponibilité sans risque financier majeur pour le client B2B sur cette référence secondaire (MF noix de cajou).

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle à bimestrielle sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume (3u en début 2024 à 2u en août 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les volumes sont faibles et cohérents (1u à 3u). Étape 2 (Saisonnalité): Pas de corrélation temporelle évidente entre 2024 et 2025. Étape 3 (Tendance): On observe un ralentissement du rythme de commande (dernière commande enregistrée il y a plus de 2 mois) et une légère baisse de volume unitaire (passant de 3u à 2u). Étape 4 (Recommandation): La quantité recommandée de 2 unités permet de couvrir la demande de fond observée lors de la dernière commande tout en évitant un sur-stockage sur un produit à rotation lente. La confiance est faible car l'historique est trop espacé.

</details>


<details>
<summary><strong>10. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.43u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence de commande (env. toutes les 4 à 8 semaines). Pas de jour fixe identifié.
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3.5u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : La commande de 1u en juin 2024 est traitée comme une anomalie basse. Les autres commandes oscillent entre 3u et 5u. Étape 2 (Saisonnalité) : Faible impact détecté, bien qu'un léger pic à 4-5u soit visible vers l'été/automne en N-1. Étape 3 (Tendance) : Données très éparses en 2025 avec une seule commande en juillet (3u), suggérant une stabilité ou un ralentissement. Étape 4 (Recommandation) : En l'absence de commande depuis juillet, le besoin de réapprovisionnement est probable mais le manque de données récentes impose la prudence. On recommande 3u pour couvrir la demande de fond sans risquer le surstockage sur un produit à rotation lente (low rotation). Aucun critère ne justifie un volume supérieur à la moyenne historique de 3.4 unités car nous sommes hors période de pic identifié de fin d'année (septembre/octobre N-1 à 4u). Nous privilégions une approche conservatrice de 3u pour maintenir un stock tampon minimal face à un cycle de commande imprévisible (plus de 80 jours depuis la dernière commande). Il est fortement recommandé de vérifier les stocks réels sur site au vu de la faible fréquence d'achat constatée cette année par rapport à l'année précédente à la même époque (septembre N-1 avait eu une commande, pas septembre 2025). Le niveau de confiance est 'low' dû à l'absence de données entre juillet et octobre 2025 (trou de 3 mois). Cette recommandation de 3 unités permet de sécuriser la disponibilité immédiate du produit tout en limitant les risques de dépréciation pour ce format 190g si la rotation continue de ralentir comme observé sur le dernier trimestre comparatif. En B2B, ce type de profil produit correspond souvent à une référence de complément de gamme.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 1u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 4u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 3u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 3u
- 2025-08-26 07:12:09: 4u
- 2025-08-04 11:51:02: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-09-02 13:29:56: 4u
- 2024-08-05 08:15:52: 5u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 2u
- 2024-05-08 09:59:31: 3u
- 2024-04-16 12:46:58: 3u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:45:50: 2u
- 2025-08-26 07:12:09: 2u
- 2025-08-04 11:51:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:29:56: 1u
- 2024-08-05 08:15:52: 2u
- 2024-06-27 05:39:39: 2u
- 2024-05-08 09:59:31: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 1u
- 2024-02-20 11:06:01: 3u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 07:04:59: 4u
- 2025-08-26 07:12:09: 4u
- 2025-07-22 07:46:41: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [MF0055] MF Noix de cajou - Curry 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:51:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-27 05:39:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 3u
- 2024-02-20 11:06:01: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 07:46:41: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 12:13:39: 4u
- 2024-08-05 08:15:52: 3u
- 2024-06-27 05:39:39: 5u
- 2024-06-05 12:11:39: 1u
- 2024-04-16 12:46:58: 3u
- 2024-03-25 10:03:13: 4u
- 2024-02-20 11:06:01: 4u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>




---

## False Positives (7)

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
| [LV161] LV Tartinade Mangue curry 190g | 4 | Stock prédit: -0.1u (0j restants) → prédit 4u mais non commandé |
| [WIG01] WIGNAC cidre naturel bio 330ml | 4 | Stock prédit: 0.3u (2j restants) → prédit 4u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 3 | Stock prédit: -0.4u (-4j restants) → prédit 3u mais non commandé |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 4 | Stock prédit: -2.1u (-17j restants) → prédit 4u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 4 | Stock prédit: 1.1u (25j restants) → prédit 4u mais non commandé |


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
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Stock suffisant: 2.5u (101j restants > seuil 30j) |
| [VID0009] Consigne casier | 6 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 36 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:10:29.060Z*
