# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S39577
- **Date commande** : 2025-10-09 06:15:56
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 13
- **Tokens**: 29,170 input + 7,896 output = 37,066 total
- **Coût**: $0.2059 (~20.59¢)
- **Coût par produit LLM**: $0.0158


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 61.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 3 | 2.0 | 66.7% | ✅ partial | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (48j entre Jul17-Sep10, ~30-40j en N-1)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive +50% (2u→3u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit montre un pattern de commande irrégulier avec des intervalles de 20-40 jours. Dernière commande le 2025-09-10 (mer.), soit 29 jours avant la date de prédiction (2025-10-09 jeudi). Le rythme récent suggère une commande possible dans cette fenêtre.

**Filtrage outliers**: En N-1, la demande était stable à 2u (avec une seule exception à 1u en mars 2024). En 2025, on observe 2 commandes à 3u (Jul17 et Sep10) contre 1 seule à 2u (Jul24), indiquant un nouveau palier de demande plutôt qu'un outlier.

**Tendance récente**: Nette progression de la quantité commandée. N-1 moyen = 2u, récent 2025 = 2.67u moyenne. La quantité 3u devient le nouveau standard (2 des 3 dernières commandes).

**Saisonnalité**: Aucun pattern saisonnier détecté. En octobre N-1, commande de 2u. Avec la tendance haussière observée (+50%), l'équivalent actuel serait 3u.

**Décision**: Compte tenu du nouveau palier de demande établi (3u devient la norme en 2025) et de l'absence de saisonnalité forte, la prédiction optimale est **3 unités**.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~30-60j (historique N-1 mensuel, N actuel très espacé)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère variabilité (2-3u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
L'historique N-1 montre un pattern irrégulier avec des commandes espacées de 11 à 50 jours, sans jour de semaine fixe (lun./mar./ven. variés). En N actuel, seulement 3 commandes depuis janvier : 17/07 (1u), 24/07 (3u), 10/09 (2u). L'intervalle entre la dernière commande (10/09) et la date de prédiction (09/10) est de 29 jours, cohérent avec le rythme mensuel observé.

**FILTRAGE OUTLIERS:**
La quantité de 3u apparaît 2 fois (oct 2024 et juil 2025) mais reste marginale. La très grande majorité des commandes (11/15) sont de 2u. Le 1u de juillet 2025 semble être une micro-commande ponctuelle.

**SAISONNALITÉ:**
Aucun pattern saisonnier détecté. Le produit (tartinade) est commandé toute l'année sans pic notable en octobre N-1 (3u n'est pas significatif statistiquement).

**TENDANCE:**
La demande est stable autour de 2u par commande. Pas de tendance haussière ou baissière claire. La dernière commande récente (10/09) confirme le retour à 2u après le 3u exceptionnel.

**DÉCISION:**
Baseline théorique = 2u (mode statistique). Pas de rattrapage à prévoir car le rythme de 29j est respecté. Pas d'effet saisonnier en octobre. Prédiction : **2 unités**.

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (7-58 jours entre commandes récentes)
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 3u
- **Outliers détectés**: 4u, 1u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes récentes montrent un pattern irrégulier:
- 2025-07-17 (jeu.) → 2025-07-24 (jeu.): 7 jours | 1u puis 3u
- 2025-07-24 (jeu.) → 2025-09-10 (mer.): 48 jours | 3u
- 2025-09-10 (mer.) → 2025-10-09 (jeu.): 29 jours

Pas de jour de semaine fixe évident, mais commandes espacées de ~1 mois en moyenne sur période récente.

**FILTRAGE OUTLIERS:**
- 4u (2024-09-09): Pic isolé, jamais répété = outlier promotionnel probable
- 1u (2025-07-17): Commande exceptionnellement basse, suivie 7 jours après par retour à 3u = possiblement erreur ou ajustement de stock

**COMPARAISON N-1:**
À début octobre 2024 (2024-10-08), commande de 3u. Impact saisonnier faible car produit tartinade paprika-chili (épicé) sans forte variation saisonnière observée.

**TENDANCE:**
Sur les 12 derniers mois N-1: médiane = 3u (mode dominant)
Sur 3 derniers mois 2025: 3u, 3u, 1u → hors outlier 1u, stabilité à 3u
Pas de tendance haussière ou baissière significative.

**DÉCISION:**
Baseline théorique = 3u (quantité récurrente dominante)
La prochaine commande devrait suivre le pattern de base à 3u, confirmé par:
- Référence N-1 à date similaire: 3u
- Dernière commande normale (2025-09-10): 3u
- Intervalle de 29 jours cohérent avec rythme mensuel

</details>


<details>
<summary><strong>4. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalle variable (17-67j en N-1), dernière commande il y a 29 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive +50% (1-2u en N-1 → 3u récent)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
L'historique N-1 montre des commandes irrégulières avec intervalles variables (17-67 jours), sans pattern hebdomadaire ou mensuel fixe. Volumes N-1: majoritairement 1-2u. La dernière commande date du 10/09/2025 (29 jours avant la prédiction du 09/10).

**SAISONNALITÉ:**
En octobre N-1 (2024-10-30), quantité = 1u. Impact saisonnier faible car le produit "Tartinade Potiron" montre une distribution régulière toute l'année sans pic spécifique en octobre malgré le caractère "automnal" du potiron.

**TENDANCE RÉCENTE:**
La commande du 10/09/2025 à 3u marque une augmentation notable (+50% vs moyenne N-1 de 1.5u). Cela suggère soit une croissance de la demande client final, soit un rattrapage après 29 jours sans commande.

**DÉCISION:**
- Baseline théorique N-1 en octobre: 1u
- Coefficient tendance récente: x2 (passage de 1.5u → 3u)
- MAIS: Le 3u peut être un rattrapage lié à l'intervalle de 29j
- Pour une prédiction à 29j post-commande, la demande de fond ajustée se situe entre 2-3u
- Choix conservateur-précis: **2u** (évite sur-stockage tout en captant la croissance tendancielle)

Confiance moyenne car pattern irrégulier rend difficile la prédiction exacte du timing et volume.

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (7j à 48j), pas de jour fixe identifiable
- **Saisonnalité**: none
- **Tendance**: Hausse récente +50% (passage de 2u à 3u en Sept 2025)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les commandes N-1 montrent un pattern irrégulier avec intervalles variant de ~10j à 38j, sans jour de semaine privilégié. En 2025, trois commandes récentes: 17/07 (jeu.), 24/07 (jeu.), 10/09 (mer.) - donc intervalles de 7j puis 48j.

**FILTRAGE OUTLIERS:**
La commande du 10/09/2025 à 3u (vs historique constant à 2u depuis Oct 2023) constitue une anomalie potentielle. Cependant, comme c'est la donnée la plus récente, elle peut signaler soit: (1) un rattrapage après 48j sans commande, (2) une hausse structurelle de demande.

**SAISONNALITÉ:**
Octobre N-1 (30/10/2023) = 2u. Pas de pattern saisonnier fort détecté. Le produit (tartinade) a potentiellement une légère saisonnalité estivale, mais les données ne montrent pas d'impact significatif.

**DÉCISION:**
- Baseline historique stable = 2u (94% des commandes)
- Le 3u récent semble être un rattrapage ponctuel après 48j d'écart (vs 7j précédemment)
- Date de prédiction: 09/10/2025, soit 29j après la dernière commande → retour au rythme normal attendu
- La tartinade basilic-tomate suit probablement une demande régulière B2B sans forte variabilité

**CONCLUSION:** Retour à la baseline de 2u, le pic à 3u étant interprété comme effet rattrapage ponctuel.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~45-60 jours, sans jour fixe de semaine
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50% (2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les intervalles récents sont très irréguliers:
- 2025-07-17 → 2025-07-24: 7 jours
- 2025-07-24 → 2025-09-10: 48 jours
- 2025-09-10 → 2025-10-09 (prédiction): 29 jours

Pas de pattern hebdomadaire fixe. Le rythme semble être de ~1-2 mois entre commandes, avec des variations importantes.

**TENDANCE RÉCENTE:**
On observe une baisse nette des quantités:
- N-1 (2023-2024): Principalement 2u par commande (8/10 commandes)
- Période récente (3 derniers mois 2025): 2u → 1u → 1u
- Les 2 dernières commandes sont de 1u uniquement

**SAISONNALITÉ:**
En octobre N-1 (2024-10-08): 2u commandées
Mais la tendance récente montre clairement une diminution structurelle de la demande, passant de 2u à 1u.

**DÉCISION:**
- Baseline théorique: 1u (nouvelle norme établie sur les 2 dernières commandes)
- Pas d'outliers détectés
- La dernière commande date du 2025-09-10 (29 jours), ce qui reste dans le rythme observé
- L'effet saisonnalité N-1 (2u en octobre) est écrasé par la tendance baissière récente

**PRÉDICTION: 1 unité** - cohérent avec le nouveau niveau de demande stabilisé depuis juillet 2025.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, ~30-45j entre commandes, pas de jour fixe identifié
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (volumes passés de 2-3u à 1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les intervalles récents montrent: 
- 17 juillet → 24 juillet: 7j
- 24 juillet → 10 septembre: 48j
- 10 septembre → 9 octobre (prédiction): 29j

Pattern mensuel irrégulier (~30-45j), pas de jour de semaine récurrent. La dernière commande remonte à 29j, ce qui correspond au rythme habituel observé.

**TENDANCE:**
- N-1 (2024): Commandes majoritairement de 2-3u (moyenne ~2.3u)
- Récent (2025): 1u, 2u, 2u → Moyenne 1.67u
- Baisse de volume nette d'environ 30-40% par rapport à N-1

**SAISONNALITÉ:**
Octobre N-1 (08/10/2024): 3u
Cependant, cette donnée unique n'établit pas de pattern saisonnier fort. L'historique global montre des commandes réparties tout au long de l'année sans pic saisonnier marqué.

**DÉCISION:**
Pas d'outliers détectés. La tendance récente montre une stabilisation autour de 1-2u avec une préférence pour 2u (2 des 3 dernières commandes). Le rythme mensuel est respecté (29j depuis dernière commande).

Baseline théorique: 1.5u
Arrondi à 2u car:
- Majoritairement 2u dans les commandes récentes (2/3)
- Évite la sous-estimation en B2B agroalimentaire
- Volume cohérent avec le nouveau niveau de demande stabilisé

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (24-88 jours), pas de pattern fixe détectable
- **Saisonnalité**: none
- **Tendance**: Baisse -50% sur période récente (moyenne N-1: 1.73u vs 3M récents: 2.0u → mais dernière: 1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les intervalles entre commandes sont très irréguliers (54j entre 2025-07-17 et 2025-09-10, puis 58j entre 2025-07-24 et 2025-09-10). Pas de pattern hebdomadaire ou mensuel clair. La date de prédiction (2025-10-09) se situe 29 jours après la dernière commande du 2025-09-10, ce qui est dans la fourchette basse des intervalles observés.

**FILTRAGE OUTLIERS**: La commande de 3u du 2025-07-17 apparaît comme un pic exceptionnel (150% au-dessus de la moyenne). L'historique N-1 montre principalement des quantités de 1-2u, avec une prédominance de 2u (8/11 commandes).

**SAISONNALITÉ**: Aucune saisonnalité forte détectable. La date comparable N-1 (2024-10-08) montrait 2u, mais cette référence est faible car le comportement récent a évolué.

**TENDANCE RÉCENTE**: Les 3 derniers mois montrent 3u, 2u, puis 1u - une décélération nette. La dernière commande (la plus récente et la plus pertinente) est de 1u seulement, signal fort d'une demande réduite.

**DÉCISION**: Baseline théorique à 1.5u (moyenne des commandes récentes hors outlier de 3u). Cependant, la dernière commande à 1u et l'absence de pattern suggérant un rattrapage imminent conduisent à privilégier la prédiction conservatrice de **1 unité** - la valeur la plus probable reflétant le niveau actuel de demande.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, intervalles variables (18-48 jours). Rythme ralenti en 2025 avec espacement moyen de ~40-50 jours contre ~20-30 jours en 2024
- **Saisonnalité**: weak
- **Tendance**: Baisse -50% (passage de 2u à 1u par commande depuis mi-2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit montre un pattern irrégulier sans ancrage hebdomadaire fixe. En 2024, commandes de 2u espacées de 18-48 jours. En 2025, changement net: quantité divisée par 2 (1u au lieu de 2u) et espacement accru.

**Dernières commandes 2025**: 
- 17/07 (jeu.) → 1u
- 24/07 (jeu.) → 1u (7 jours après)
- 10/09 (mer.) → 1u (48 jours après)

**Timing**: Depuis le 10/09, nous sommes le 09/10 soit 29 jours plus tard. L'intervalle moyen récent étant de 27-48 jours, nous sommes dans la fenêtre de commande probable.

**Saisonnalité**: En septembre 2024 (même période N-1), une commande de 2u avait eu lieu. Cependant, la tendance 2025 montre une baisse structurelle à 1u/commande, probablement liée à une réduction de la demande client ou ajustement des stocks.

**Aucun outlier détecté**: Toutes les commandes sont cohérentes (1-2u), produit de niche (Tartinade Ail des Ours).

**Décision**: La baseline actuelle est clairement établie à 1u depuis mi-2025. Pas d'indicateur de retour aux 2u. Prédiction = **1 unité**.

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (7j à 54j). Historique sparse avec ~1-2 mois entre commandes
- **Saisonnalité**: weak
- **Tendance**: Stable - Oscillation entre 1-2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes sont irrégulières sans pattern hebdomadaire fixe. Historique N-1 montre 11 commandes sur 12 mois (moyenne ~1 commande/mois). Période récente (3 derniers mois) confirme ce rythme avec 3 commandes espacées de 7j puis 54j.

**ANALYSE SAISONNIÈRE**: La date du 09/10/2025 (jeudi) est proche du 08/10/2024 (mardi, 2u). Cependant, l'impact saisonnier reste faible car pas de pattern récurrent fort à cette période sur plusieurs années.

**TENDANCE RÉCENTE**: Les 3 dernières commandes montrent 1u-2u-1u. La dernière commande remonte au 10/09/2025 (1u), soit exactement 29 jours avant la date de prédiction. Le client semble commander environ 1 fois par mois.

**SYNTHÈSE**: Avec un intervalle moyen de ~30j et la dernière commande datant du 10/09, une commande début octobre est plausible. Les quantités oscillent entre 1-2u avec une légère préférence pour 1u en période récente (2 fois sur 3 dernières). Pas d'outlier détecté, demande de fond stable.

**DÉCISION**: Baseline théorique 1.5u → Arrondi à 1u (quantité la plus fréquente récente et minimisation du risque de surestimation).

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (18-79j en N-1, 7j entre les 2 dernières commandes en juillet 2025)
- **Saisonnalité**: none
- **Tendance**: Stable avec léger pic récent
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Le produit montre un pattern irrégulier sans jour fixe de commande. En N-1 (2024), les commandes s'espacent entre 11 et 79 jours avec une quantité stable de 2u (sauf 1u en mai 2024). En période récente (juillet 2025), on observe 2 commandes rapprochées (7j d'intervalle) avec 2u et 3u.

**Filtrage outliers**: La commande de 3u du 2025-07-17 apparaît comme un léger pic (possiblement un rattrapage ou ajustement ponctuel), mais pas assez marqué pour être un événement promotionnel majeur.

**Saisonnalité**: Aucun pattern saisonnier détectable. La date de prédiction (9 oct 2025) vs historique N-1 (8 oct 2024: 2u) ne révèle pas de saisonnalité forte. Les volumes restent homogènes tout au long de l'année.

**Tendance**: Sur les 12 commandes N-1, 11 fois 2u et 1 fois 1u = moyenne 1,92u. La période récente confirme ce socle de 2u comme demande structurelle. Le pic à 3u est isolé et ne constitue pas une nouvelle tendance.

**Décision**: La demande de fond est clairement 2u. Bien que nous soyons à 77 jours de la dernière commande (24 juillet), cela correspond au pattern irrégulier observé. Pour la date du 9 octobre, la quantité la plus probable est **2 unités**, conforme à l'historique stable et au comparatif N-1.

</details>




---

## False Positives (3)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.5u (27j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 0.2u (8j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.3u (-25j restants) → prédit 1u mais non commandé |


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
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock suffisant: 2.5u (45j restants > seuil 30j) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock suffisant: 2.7u (60j restants > seuil 30j) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock suffisant: 1.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T09:06:54.262Z*
