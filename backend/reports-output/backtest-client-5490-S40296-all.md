# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 38,616 input + 67,986 output = 106,602 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.0% | 25 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 71.8% | Score équilibré global |

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
| **MAE** | 119.79 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 42.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -1.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (14)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 75 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 120 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 868 | 868 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1302 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 155 | 155 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 310 | 124 | 186.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 186 | 93 | 93.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: medium)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable de 8 à 28 jours, commandes positionnées quasi exclusivement le jeudi ou le vendredi.
- **Saisonnalité**: strong
- **Tendance**: Hausse marquée du volume unitaire (passage de 434u à 1302u le 07/11).
- **Outliers détectés**: 104u

**🧠 Raisonnement LLM:**
L'historique montre que les commandes sont systématiquement des multiples de 434u (l'unité logistique). On observe une accélération en octobre/novembre, similaire à l'année N-1. La dernière commande du 07/11/2025 était de 1302u (3x434u), ce qui constitue un pic de stockage saisonnier. Compte tenu de ce volume récent important, la prochaine commande prévue sous 15-20 jours devrait logiquement revenir à une quantité standard de 434u pour ajuster le stock avant la fin du mois de novembre.

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 62u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 31u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Accélération du cycle de commande : passage de 15 jours à 8 jours entre les trois dernières commandes.
- **Saisonnalité**: none
- **Tendance**: Hausse progressive du volume et de la fréquence de commande depuis mi-octobre.
- **Outliers détectés**: 186u, 155u, 124u

**🧠 Raisonnement LLM:**
L'historique récent montre une réactivation du produit avec une fréquence de commande qui s'intensifie (tous les 8 à 15 jours). La dernière commande du 07/11 était exceptionnellement haute (124u) par rapport aux 31u habituels, suggérant soit une promotion locale, soit un restockage important. Compte tenu de la date actuelle (11/11), une prochaine commande est attendue sous 10 à 14 jours (vers le 21/11). Nous prédisons un volume de 62u (2 unités logistiques de 31u), ce qui constitue un retour à la normale après le pic de 124u tout en suivant la tendance haussière par rapport aux commandes de 31u d'octobre.

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (environ 14 jours) avec des commandes principalement le jeudi ou le vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 25u par unité de commande
- **Outliers détectés**: 75u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Le produit présente une unité de commande ultra-stable de 25u. Les regroupements de commandes (ex: 3x25u le 07/11/2025) sont traités comme des pics de volume mais ne modifient pas la base de 25u par colis.
Étape 2 (Saisonnalité): Bien que le nom 'BBQ' suggère une saisonnalité estivale, l'historique N-1 montre une activité constante et soutenue en octobre et novembre. L'impact saisonnier immédiat est considéré comme faible/stable.
Étape 3 (Tendance): La tendance est extrêmement régulière. Le client commande par multiples de 25u tous les 14 jours environ. Le passage récent de commandes le vendredi (au lieu du jeudi habituel) est noté mais n'influence pas le volume.
Étape 4 (Recommandation): La dernière commande date du 7 novembre. Selon le cycle de 14 jours observé historiquement (même après des pics de volume comme en septembre 2024), la prochaine commande est attendue autour du 21 novembre, ce qui entre dans la fenêtre des 30 jours. Le volume standard par commande étant de 25u, c'est la quantité préconisée.

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 75u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 75u (confidence: high)
- 📊 **Baseline N-1**: 75u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bi-mensuel (14j) historiquement, avec une accélération récente vers un cycle hebdomadaire (8j)
- **Saisonnalité**: strong
- **Tendance**: Hausse significative du volume par commande et raccourcissement du cycle
- **Outliers détectés**: 225u

**🧠 Raisonnement LLM:**
L'analyse montre une structure de commande basée sur des multiples de 25 unités (carton). ÉTAPE 1: Le cumul du 07/11 (225u) est identifié comme un pic exceptionnel (stockage ou promotion majeure), bien au-dessus de la moyenne de 75-100u de l'an dernier. ÉTAPE 2: On observe une forte activité saisonnière en fin d'année (période pré-fêtes), confirmée par l'historique N-1. ÉTAPE 3: La fréquence s'est accélérée, passant de 14 à 8 jours récemment. ÉTAPE 4: La dernière commande datant du 07/11, la prochaine est prévue entre le 15/11 et le 21/11 (dans la fenêtre des 30 jours). En excluant l'outlier massif du 07/11, la demande de fond stabilisée pour une commande unique est fixée à 75u (3 cartons), ce qui correspond au volume standard observé durant la période de haute activité de 2024.

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 120u vs Médiane: 40u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel, principalement le jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Hausse de la fréquence (intervalle réduit à 8 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit commandé systématiquement par multiples de 40 unités. Bien que l'historique N-1 suggérait un cycle de 14 à 28 jours, les données récentes indiquent une accélération avec deux commandes rapprochées de 8 jours (30/10 et 07/11). La dernière commande (120u) montre une légère hausse par rapport à la précédente (80u). Avec une date actuelle au 11/11, la prochaine commande est prévue dans la fenêtre des 30 jours (estimation autour du 14-20 novembre). En suivant la tendance récente et le conditionnement par 40u, la quantité recommandée pour LA PROCHAINE commande est de 120 unités.

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel à mensuel (tous les 20 à 28 jours), principalement le jeudi ou vendredi.
- **Saisonnalité**: none
- **Tendance**: Stable à 434u (multiple logistique fixe)
- **Outliers détectés**: 1736u

**🧠 Raisonnement LLM:**
L'analyse montre que le client commande systématiquement par multiples de 434u (probablement une palette ou couche complète). Malgré un pic exceptionnel le 07/11/2025 (1736u cumulés sur 3 lignes), le rythme historique suggère une commande de réapprovisionnement tous les 21 à 28 jours. En projetant ce cycle à partir du 7 novembre, la prochaine fenêtre d'achat se situe entre le 28 novembre et le 5 décembre 2025, soit dans la fenêtre des 30 jours. Bien que le volume du 07/11 soit important, il ressemble à une opération promotionnelle ou un stockage ponctuel ; la prédiction revient donc à la quantité de fond standard (baseline) de 434u pour la prochaine commande.

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 868u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 868u (confidence: medium)
- 📊 **Baseline N-1**: 868u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (environ tous les 14 jours) historiquement, avec une accélération récente à un cycle hebdomadaire (7-8 jours).
- **Saisonnalité**: weak
- **Tendance**: Hausse du volume par commande (passage de 868u à 1736u) et accélération de la fréquence.
- **Outliers détectés**: 1736u

**🧠 Raisonnement LLM:**
L'historique montre des commandes systématiques par multiples de 434 unités. En 2024, le cycle était stable à 14 jours. Fin 2025, on observe un rapprochement des dates (8 jours entre le 30/10 et le 07/11) et une augmentation du volume. La dernière commande du 7 novembre étant exceptionnellement élevée (1736u, soit 4x434u), elle a probablement couvert un besoin immédiat important. Compte tenu du cycle de 7 à 14 jours, la prochaine commande interviendra entre le 14 et le 21 novembre. Je préconise un retour à la quantité de base observée avant le pic, soit 868u (2x434u), pour la prochaine commande unique.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: medium)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel à mensuel observé (14 à 28 jours), avec une préférence marquée pour le jeudi et le vendredi.
- **Saisonnalité**: weak
- **Tendance**: Stable sur l'unité de base (434u) avec des phases de stockage massif cycliques (pics à +1000u).
- **Outliers détectés**: 1302u

**🧠 Raisonnement LLM:**
L'analyse montre que le produit est commandé par multiples de 434u. Le cycle moyen est d'environ 21 jours. La dernière commande date du 07/11/2025 et était exceptionnellement élevée (2170u cumulés), ce qui ressemble à un stockage promotionnel ou saisonnier. En suivant le pattern de l'année précédente (N-1), une commande massive (ex: 1736u le 17/10/24) est généralement suivie d'une commande de réajustement de base (434u) environ 14 jours plus tard. Une commande est donc hautement probable entre le 21/11/2025 et le 28/11/2025.

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 1302u vs Médiane: 868u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1302u (confidence: high)
- 📊 **Baseline N-1**: 1302u
- 📊 **Médiane**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (tous les 14 jours environ)
- **Saisonnalité**: strong
- **Tendance**: Hausse saisonnière puis stabilisation autour de 1302u
- **Outliers détectés**: 2170u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier de 14 jours. L'historique N-1 confirme une hausse de volume durant la période d'octobre/novembre, passant de 868u à 1302u. La dernière commande du 07/11 (2170u) est considérée comme un outlier (stockage promotionnel ou exceptionnel) car elle représente près de 1.7x le volume saisonnier habituel et arrive seulement 8 jours après la précédente. Pour la prochaine commande prévue aux alentours du 21 novembre, on préconise un retour au volume de fond de 1302u, ce qui correspond au palier haut observé annuellement sur cette période.

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 155u vs Médiane: 93u (Réel: 155u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 155u (confidence: medium)
- 📊 **Baseline N-1**: 162.75u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle historique de 14 jours (bi-mensuel) avec une accélération récente à 8 jours observée fin octobre/début novembre.
- **Saisonnalité**: none
- **Tendance**: Hausse spectaculaire du volume ponctuel (+100% sur la dernière commande), retour à la normale attendu.
- **Outliers détectés**: 341u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable autour de 163 unités par session de commande (multiples de 31u). ÉTAPE 1: La commande du 07/11/2025 (341u) est identifiée comme un outlier massif, représentant plus de deux fois la consommation habituelle. ÉTAPE 2: La comparaison N-1 confirme un rythme régulier sans pic saisonnier spécifique en novembre. ÉTAPE 3: Bien que la fréquence semble s'être accélérée à 8 jours entre les deux derniers points, le volume exceptionnel de la dernière commande suggère un stockage d'avance. ÉTAPE 4: Une commande est prévue dans la fenêtre des 30 jours (estimation entre le 15/11 et le 21/11). En raison du sur-stockage probable dû à l'outlier du 07/11, la recommandation se base sur la limite basse de la baseline historique (155u) pour la prochaine livraison, sans cumuler les cycles suivants.

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 310u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 310u (confidence: high)
- 📊 **Baseline N-1**: 263.5u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 186u (150.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire à cyclique (8-10 jours), typiquement le jeudi ou vendredi
- **Saisonnalité**: weak
- **Tendance**: Hausse marquée des volumes (+40% sur le dernier cycle) et accélération de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une dynamique de croissance nette entre 2024 et 2025. En N-1, le client commandait environ toutes les 2 semaines des volumes de 124u à 186u. Sur la période récente, le rythme s'est accéléré (cycle de 8 jours entre le 30/10 et le 07/11) et les volumes ont bondi à 217u puis 310u. Avec une date actuelle au 11/11 et une dernière commande le 07/11, la prochaine commande interviendra logiquement sous 4 à 6 jours, soit bien avant l'échéance des 30 jours. La quantité recommandée de 310u correspond au maintien du palier de consommation observé lors de la dernière commande (10 colis de 31u).

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 186u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 186u (confidence: high)
- 📊 **Baseline N-1**: 186u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 93u (100.0%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel régulier d'environ 14 jours, historiquement le jeudi, glissant récemment vers le vendredi.
- **Saisonnalité**: weak
- **Tendance**: Stable à forte avec un retour aux volumes de commande groupés (180-220u) après une petite commande de réajustement.
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande bi-mensuel (tous les 14 jours environ). En 2024, le client commandait des volumes importants (entre 217u et 279u par date de livraison). En 2025, après une petite commande de 62u le 30/10, le client est revenu à un volume plus standard de 186u le 07/11. En suivant ce cycle de 14 jours, la prochaine commande est prévue pour le 21 novembre 2025. Nous recommandons de se baser sur le volume de la dernière commande complète (186u, soit 6 multiples de 31u) qui reflète la stratégie de réapprovisionnement actuelle sans cumuler les cycles.

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 62u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (8 jours d'intervalle, jeudi ou vendredi)
- **Saisonnalité**: none
- **Tendance**: Forte hausse ponctuelle (+250%), retour à la moyenne attendu
- **Outliers détectés**: 93u, 93u

**🧠 Raisonnement LLM:**
L'historique montre deux dates de commandes (30/10 et 07/11) espacées de 8 jours, toutes deux constituées de multiples de 31u (probablement la taille d'un carton ou d'une sous-palette). La commande du 07/11 (217u au total) est un pic exceptionnel représentant plus de 3 fois le volume précédent (62u). On interprète ce pic comme un événement promotionnel ou un stockage préventif. Pour la prochaine commande prévue dans les 30 jours, on anticipe un retour à la demande de fond observée le 30/10, soit 62 units (2 x 31u), afin d'absorber le surplus du 07/11.

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel régulier avec un intervalle moyen de 15 à 20 jours
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume de commande par multiple de 40u
- **Outliers détectés**: 120u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une régularité parfaite sur l'unité de commande (multiple de 40u, correspondant probablement au conditionnement logistique). Le cycle de commande moyen est de 17 jours. La dernière commande datant du 7 novembre 2025, la prochaine est prévue entre le 22 et le 27 novembre, ce qui s'inscrit dans la fenêtre des 30 jours. Bien que la dernière commande ait été de 80u (double lot), la demande de fond stabilisée par commande est de 40u. Conformément à la règle de ne prédire que la prochaine commande unique, nous recommandons 40u.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 434u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-02 06:43:53: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:31: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-08-09 05:43:38: 104u
- 2024-08-09 05:43:13: 104u
- 2024-08-09 05:42:53: 104u
- 2024-07-03 06:05:40: 434u
- 2024-07-03 06:04:58: 868u

**✅ Quantité LLM**: 434u (confidence: medium)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**✅ Quantité LLM**: 75u (confidence: high)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**✅ Quantité LLM**: 120u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**✅ Quantité LLM**: 868u (confidence: medium)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 1302u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:46: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u

**✅ Quantité LLM**: 434u (confidence: medium)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**✅ Quantité LLM**: 1302u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 155u (confidence: medium)
**📊 Quantité Réelle**: 155u

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 310u (confidence: high)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**✅ Quantité LLM**: 186u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (11)

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: 335.7u (10j restants) → prédit 434u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: 354.7u (13j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: 185.3u (8j restants) → prédit 248u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 217 | Stock prédit: 537.4u (14j restants) → prédit 217u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 220 | Stock prédit: -579.6u (-15j restants) → prédit 220u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 260 | Stock prédit: -568.1u (-14j restants) → prédit 260u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 75 | Stock prédit: -274.7u (-22j restants) → prédit 75u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 940 | Stock prédit: -782.0u (-39j restants) → prédit 940u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 2500 | Stock prédit: -2150.0u (-40j restants) → prédit 2500u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 1255 | Stock prédit: -1084.0u (-40j restants) → prédit 1255u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 710 | Stock prédit: -611.0u (-40j restants) → prédit 710u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-18T19:52:37.398Z*
