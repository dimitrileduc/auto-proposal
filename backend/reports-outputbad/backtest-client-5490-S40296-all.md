# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 41,471 input + 93,940 output = 135,411 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.8% | 26 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 70.0% | Score équilibré global |

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
| **MAE** | 120.21 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 868 | 868 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 93 | 155 | 62.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 310 | 124 | 186.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 31 | 93 | 62.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers observés : 28-41 jours en N-1, 28 jours en 2025 entre les commandes de jeudi. Le dernier intervalle de 8 jours (2025-10-30 au 2025-11-07) est un décalage de jour (jeudi→vendredi), pas un raccourcissement de cycle. Le pattern dominant reste mensuel (~28j) avec changement possible de jour fixe (jeudi→vendredi).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -868u

**🧠 Raisonnement LLM:**
Le produit présente un comportement de commande quasi-déterministe en B2B. La valeur 434u est le contrat implicite avec le client. La prédiction pour le mardi 2025-11-11 doit renvoyer la quantité de la prochaine commande réelle, qui sera inévitablement de 434u quel que soit le jour d'arrivée (jeudi ou vendredi). L'outlier 868u (2024-07-03) était une commande double exceptionnelle non répétée et doit être exclu du modèle prédictif pour éviter un MAPE artificiellement élevé.

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: medium)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun jour de la semaine clairement dominant. Distribution éclatée entre lundi, mercredi, jeudi et vendredi. Absence totale de commandes mardi.
- **Saisonnalité**: none
- **Tendance**: strong decline
- **Outliers détectés**: 186u, 155u, 124u, 93u

**🧠 Raisonnement LLM:**
Le produit a migré d'un profil à volumes élevés irréguliers vers un plateau bas stable. La date de prédiction étant un mardi (hors cycle historique), je privilégie la valeur dominante des 3 derniers mois (31€) tout en validant que le outlier 62€ est isolé. Les pics N-1 >150€ sont abandonnés.

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
- **Pattern temporel**: Le client commande principalement le **jeudi** (9/12 commandes N-1) avec une apparition récente le **vendredi** (3 commandes le 2025-11-07). Aucune commande historique n'est enregistrée un **mardi**.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Quantité invariante sur 17 commandes (100% de 25u). Pattern B2B stable sans variation.

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 50u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 50u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes historiques principalement le JEUDI avec intervalles réguliers de 14 jours. Dernière commande le 2025-10-30 (jeudi) à 25u. Rupture complète de pattern le 2025-11-07 (VENDREDI) avec 3 commandes de volumes massifs (50u, 75u, 100u).
- **Saisonnalité**: none
- **Tendance**: HAUSSE MASSIVE RÉCENTE
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE :** Le client commande historiquement le JEUDI. La date de prédiction (mardi 11 nov) est hors cycle. Je dois donc prédire la PROCHAINE commande probable : **JEUDI 13 NOVEMBRE**. **FILTRAGE OUTLIERS :** Les 25u historiques sont stables. Les valeurs du 7 nov (50-100u) représentent une rupture MASSIVE mais **systématique** (3 commandes distinctes), donc probablement une nouvelle réalité marché (produit BIO, préparatifs fin d'année). Le pic à 100u est un outlier au SEIN de la nouvelle tendance.**DÉCISION :** - Utiliser la médiane des volumes récents (25, 25, 50, 75, 100) = **50u** pour être robuste au pic de 100u- Privilégier une valeur **réellement observée** dans la rupture- Cette hausse de 100% vs historique est crédible pour un produit BIO B2B en Q4- Ne pas revenir à 25u qui ignore la rupture récente- Ne pas prendre 75u ou 100u qui représentent le haut de la nouvelle fourchette

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes exclusivement le jeudi (majorité) ou vendredi, jamais un mardi. Cycle mensuel/quinzainal avec intervalles variables (14j, 27j, 28j).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The product shows a perfectly stable ordering pattern: every single historical order is exactly 40 units, whether from N-1 or recent periods (2025). The client exclusively orders on Thursdays (primary pattern) with occasional Friday orders. Since the prediction date (Tuesday, 2025-11-11) is outside this cycle, I must apply the special rule for off-cycle days: never predict 0, but rather predict the quantity of the next probable order. The next logical order day would be Thursday, 2025-11-13. Given the absolute consistency of 40u across all 15+ historical orders spanning from August 2024 to November 2025, there is zero evidence of any variation or trend change. The prediction is therefore 40 units with very high confidence.

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
- **Pattern temporel**: Aucun jour récurrent dominant nettement
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -868u

**🧠 Raisonnement LLM:**
Pattern stable à 434u avec outlier 868u isolé et non répétitif; jour hors cycle (mardi) sans précédent; obligation de prédire la quantité de la prochaine commande probable selon les règles B2B.

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-weekly on Thursdays
- **Saisonnalité**: none
- **Tendance**: flat
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi 11 novembre est hors cycle habituel (jeudi toutes les 2 semaines). Le pattern historique montre une quantité exceptionnellement stable à 434u (11/12 commandes). La commande de 868u du 7 nov. 2025 est un outlier isolé (double de la normale, non répété). Pour un jour hors cycle, la règle spécifique est de prédire la quantité de la PROCHAINE commande probable, qui sera le jeudi suivant avec la valeur standard.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: weekly_on_thursday
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historiquement 434u sauf 1 outlier ×3 le 07/11

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 868u vs Médiane: 868u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 868u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: hebdomadaire
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**1. ANALYSE RYTHMIQUE & JOUR HORS CYCLE**
La date cible (2025-11-11, mardi) est un jour HORS CYCLE habituel. Le client ne commande jamais le mardi. Les commandes historiques (N-1) sont exclusivement le jeudi (12/12). Les récentes montrent un léger glissement vers le vendredi, mais le jeudi reste le jour de référence. Conformément aux règles, je dois prédire la quantité de la PROCHAINE commande, pas 0.

**2. DÉTECTION DU PATTERN QUANTITÉ**
- Quantité historique stable (N-1) : **434u** (100% des commandes)
- Données récentes (5 lignes) : 
  - 868u apparaît 3 fois (60%)
  - 434u apparaît 2 fois (40%)
- Les 868u ne sont PAS des outliers isolés : ils apparaissent systématiquement sur les 2 derniers jours de commande (30/10 et 07/11), parfois en doublon le même jour.

**3. INTERPRÉTATION STRATÉGIQUE**
Le pattern récent indique une **évolution claire** : le client a augmenté ses volumes. Le 868u (double de la base) n'est pas ponctuel mais récurrent. Cela correspond typiquement à une augmentation d'activité ou de stockage stratégique en B2B agroalimentaire.

**4. RÈGLE DE PRÉCISION vs PRUDENCE**
Consigne clé : "privilégie PRÉCISION sur prudence. Ne surgonfle pas au cas où → vise la quantité la plus PROBABLE."
La probabilité est calculée sur les données les plus récentes :
- Prochain jour de commande (jeudi 13/11 ou vendredi 14/11)
- Probabilité de 868u : très élevée (100% des derniers jours de commande contiennent au moins un 868u)
- Probabilité de 434u seul : faible (décroissante)

**5. DÉCISION QUANTITATIVE**
Pour minimiser le MAPE, le mode des valeurs récentes est optimal : **868u** est la valeur la plus fréquente sur la période pertinente (3 derniers mois). Les 434u représentent l'ancienne baseline, pas la nouvelle réalité opérationnelle.

**Conclusion** : La prochaine commande (jeudi/vendredi prochain) sera très probablement de **868 unités**.

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 155u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: high)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 62u (40.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Semaine irrégulière: intervalles de 7-8 jours entre commandes récentes. Bascullement historique du jeudi vers le vendredi. Plusieurs commandes par jour (2-3 lignes distinctes).
- **Saisonnalité**: none
- **Tendance**: Forte augmentation des volumes: passage de 31-62u (N-1) à 31-62-93-186u (récent). Les quantités sont des multiples de 31 (unité de base). Apparition récente et répétée du volume 93u (3×31) qui est devenu le nouveau standard.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi 11 nov est hors cycle (jour jamais utilisé). Le client commande désormais principalement le vendredi (7 nov: 93u+186u+62u) et occasionnellement le jeudi (30 oct: 93u+31u). La prochaine commande probable est le vendredi 14 nov. Les quantités sont des multiples de 31 (unité de base). Le volume 93u est apparu à deux reprises consécutives (30 oct et 7 nov), démontrant une stabilisation de la demande à ce niveau. Le pic à 186u est un multiple exceptionnel (6×31) qui coexiste avec d'autres commandes le même jour, donc pas un outlier à écarter mais une commande complémentaire. En B2B agro, privilégier la quantité la plus récurrente assure la meilleure précision. Le 93u représente à la fois la tendance actuelle et le volume stable.

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 310u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 310u (confidence: medium)
- 📊 **Baseline N-1**: 155u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 186u (150.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Every 7 days
- **Saisonnalité**: none
- **Tendance**: increasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The last order on 2025-11-07 had total quantity 310u (93+124+93). The previous order on 2025-10-30 had 217u (93+124). The pattern shows consistent multiple orders per day with 93u and 124u as base quantities. Since 2025-11-11 is Tuesday (outside the usual Friday cycle), we predict the next order following the most recent complete pattern from 2025-11-07 (Friday). The same structure is expected for the next cycle: 93u+124u+93u totaling 310u. This represents the most probable next order quantity based on the established daily order pattern.

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 31u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 62u (66.7%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: En N-1, volumes dominants: 62u (7/12 commandes). En période récente, shift majeur vers 31u (3/5 commandes). Le pic de 155u en octobre 2024 est un outlier isolé non répété en 2025. Le 93u apparaît dans les deux périodes (1 fois chacune), mais reste occasionnel.
- **Saisonnalité**: strong
- **Tendance**: decreasing
- **Outliers détectés**: -155u

**🧠 Raisonnement LLM:**
Cycle bi-mensuel/jeudi confirmé | Hors cycle mardi → report au jeudi suivant | Tendance baissière claire 62u→31u | Mode récent: 31u (3/5) | Exclusion outlier 155u | Précision > Prudence

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: low)
- 📊 **Baseline N-1**: 217u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mixte (jeudi et vendredi)
- **Saisonnalité**: none
- **Tendance**: upward
- **Outliers détectés**: -31u, 93u

**🧠 Raisonnement LLM:**
Données épurées = [31, 31, 31, 93, 93]. 31 étant la valeur récurrente, 93 est un multiple mais considéré comme outlier dans ce faible volume. On s’appuie donc sur le mode 31 comme prévision la plus robuste pour minimiser le MAPE.

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
- **Pattern temporel**: Le client commande principalement le **jeudi** (6/8 commandes N-1) avec un rythme **bi-mensuel** (intervalles 14-28 jours). La dernière commande (07/11) est exceptionnellement un vendredi (déjà observé en août 2024).
- **Saisonnalité**: none
- **Tendance**: Stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Toutes les commandes sont de 40u depuis juillet 2024. Le jour de prédiction (mardi) est hors cycle habituel (jeudi/vendredi), mais la règle interdit de prédire 0. Je dois donc prédire la quantité de la prochaine commande probable. Comme le volume est parfaitement stable et sans outlier, la prochaine commande sera certainement de 40u.

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

**✅ Quantité LLM**: 434u (confidence: high)
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

**✅ Quantité LLM**: 31u (confidence: medium)
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

**✅ Quantité LLM**: 50u (confidence: medium)
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

**✅ Quantité LLM**: 40u (confidence: high)
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

**✅ Quantité LLM**: 434u (confidence: high)
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

**✅ Quantité LLM**: 434u (confidence: high)
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

**✅ Quantité LLM**: 868u (confidence: high)
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

**✅ Quantité LLM**: 93u (confidence: high)
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

**✅ Quantité LLM**: 310u (confidence: medium)
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

**✅ Quantité LLM**: 31u (confidence: high)
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

**✅ Quantité LLM**: 31u (confidence: low)
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

## False Positives (12)

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
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 527 | Stock prédit: 537.4u (14j restants) → prédit 527u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 180 | Stock prédit: -579.6u (-15j restants) → prédit 180u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 234 | Stock prédit: -568.1u (-14j restants) → prédit 234u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: -274.7u (-22j restants) → prédit 25u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 230 | Stock prédit: -782.0u (-39j restants) → prédit 230u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1235 | Stock prédit: -5125.0u (-42j restants) → prédit 1235u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 640 | Stock prédit: -2150.0u (-40j restants) → prédit 640u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 313 | Stock prédit: -1084.0u (-40j restants) → prédit 313u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 188 | Stock prédit: -611.0u (-40j restants) → prédit 188u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-17T16:24:02.900Z*
