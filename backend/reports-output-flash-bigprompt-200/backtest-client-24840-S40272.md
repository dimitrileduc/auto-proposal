# Rapport Backtest - Client Al-Terre-Native

## Contexte

- **Client** : Al-Terre-Native (ID: 24840)
- **Commande réelle** : S40272
- **Date commande** : 2025-11-14 10:18:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 23,331 input + 4,457 output = 27,788 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 22 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 68.6% | Score équilibré global |

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
| **MAE** | 0.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 41.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [LV161] LV Tartinade Mangue curry 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle éparse (20-30j)
- **Saisonnalité**: weak
- **Tendance**: Baisse légère (passage de 3u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très espacé et irrégulier. Historiquement, le client commandait 3 unités en 2023/début 2024, mais les deux dernières commandes de septembre 2025 montrent une stabilisation à 2 unités. Bien que la date de prédiction (jeudi) ne corresponde pas aux jours habituels (lundi/mardi), les règles de gestion interdisent de prédire 0. En l'absence de pic saisonnier visible en novembre (comparaison N-1), la quantité de la prochaine commande probable est alignée sur la tendance récente de 2 unités.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier long (environ 21 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 3-4u à 1-2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une érosion des volumes sur ce produit : les commandes de 4u observées fin 2023/début 2024 ont laissé place à des commandes de 1u et 2u au second semestre 2025. Le rythme de commande est espacé (environ une fois par mois ou tous les deux mois). Bien que le jeudi soit conforme aux jours ouvrés de commande du client par le passé, la tendance récente de septembre 2025 (1u le 02/09 et 2u le 24/09) indique un volume de fond faible. On privilégie la dernière valeur connue (2u) car elle reflète mieux la consommation actuelle que les données N-1 plus élevées.

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u en 2024 -> 1.5u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une faible rotation avec une fréquence de commande erratique. En 2024, le volume standard était de 2-3 unités. En 2025, les deux dernières commandes montrent un ralentissement (2u puis 1u). La moyenne récente de 1.5u, combinée à l'historique stable à 2u pour ce même trimestre en N-1 (octobre), suggère une commande de maintien de petit stock. Étant donné que le client n'a pas commandé depuis fin septembre (>45 jours), une commande de réapprovisionnement de 2 unités est la plus probable pour le mois de novembre.

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec écarts de 20 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une érosion constante des volumes sur ce produit. En 2024, les commandes étaient majoritairement de 3u. Sur la période la plus récente (septembre 2025), nous observons un passage de 2u à 1u. Bien que l'intervalle entre les commandes soit espacé (environ un mois), le volume unitaire se stabilise au plus bas niveau observé historiquement. Pour minimiser le MAPE face à cette tendance décroissante, la prédiction de 1 unité est la plus probable pour la prochaine occurrence.

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible rotation, environ tous les 45 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Légère baisse (de 3u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation lente et régulière. Après un pic à 3u début 2024, le volume s'est stabilisé à 2u lors des dernières itérations (janv 2024 et sept 2025). L'intervalle entre les commandes est long (plusieurs mois), ce qui suggère un produit de stockage non périssable à rotation lente. La dernière commande datant de septembre (2u), la prédiction pour novembre se base sur la continuité de ce volume de fond de 2u, qui correspond à la fois à la dernière valeur observée et à la tendance de stabilisation basse.

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable mais très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une rotation très faible et irrégulière sur ce produit spécifique (LV135). Aucune commande n'a été enregistrée depuis plus d'un an (dernière en juillet 2024), ce qui indique soit un arrêt de référencement, soit une vente extrêmement lente. Cependant, selon les consignes de ne pas prédire 0 pour un produit existant, je me base sur le volume historique moyen de 1.67u arrondi à l'entier supérieur le plus probable (2u) pour couvrir un éventuel besoin de réapprovisionnement de fond de rayon, le jeudi étant un jour déjà utilisé par le passé.

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très irrégulier (30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable mais erratique entre 1u et 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très espacé (toutes les 4 à 8 semaines). La dernière commande en N-1 remonte à début octobre 2024 (4u), précédée d'un historique centré sur une moyenne de 3u. En l'absence de commandes récentes sur les 3 derniers mois, la prédiction s'appuie sur la récurrence annuelle et la baseline historique la plus fréquente. Le volume de 3u est le mode statistique du produit (5 occurrences sur 10), constituant la cible la plus probable pour une commande de réapprovisionnement de fond de rayon en B2B pour ce type de tartinade dont la rotation est lente. Le jeudi correspond à une fenêtre déjà observée dans l'historique (03/10/24 et 18/04/24).一线

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 2u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 4u
- 2024-09-23 12:43:31: 3u
- 2024-07-15 06:47:21: 2u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 2u
- 2024-02-12 14:44:33: 4u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 2u
- 2023-11-28 08:00:23: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 1u
- 2025-09-02 06:43:42: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 3u
- 2024-07-15 06:47:21: 3u
- 2024-06-24 13:38:30: 3u
- 2024-05-21 06:57:18: 3u
- 2024-04-18 09:29:52: 2u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 4u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:43:42: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 1u
- 2024-09-23 12:43:31: 2u
- 2024-07-15 06:47:21: 2u
- 2024-05-21 06:57:18: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 06:47:21: 1u
- 2024-05-21 06:57:18: 2u
- 2024-04-18 09:29:52: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 4u
- 2024-09-23 12:43:31: 1u
- 2024-07-15 06:47:21: 2u
- 2024-05-21 06:57:18: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: -0.8u (-13j restants) → prédit 2u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: 0.4u (11j restants) → prédit 2u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: 0.4u (11j restants) → prédit 2u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 1 | Stock prédit: -0.7u (-29j restants) → prédit 1u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 2 | Stock prédit: -0.6u (-15j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [LV344] LV Colis apéro | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: -0.2u (-17j restants) → prédit 1u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -2.0u (-59j restants) → prédit 2u mais non commandé |


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
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock suffisant: 1.0u (46j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:16:19.121Z*
