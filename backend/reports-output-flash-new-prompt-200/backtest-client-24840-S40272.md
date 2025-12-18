# Rapport Backtest - Client Al-Terre-Native

## Contexte

- **Client** : Al-Terre-Native (ID: 24840)
- **Commande réelle** : S40272
- **Date commande** : 2025-11-14 10:18:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 14,965 input + 4,912 output = 19,877 total


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
| **MAE** | 0.58 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 54.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 41.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot non-cyclique environ tous les +30 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u avec fréquence en ralentissement
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (Nettoyage): Aucune commande n'est identifiée comme outlier, les volumes étant très stables (1u à 3u). La demande de fond est de 2u. Étape 2 (Saisonnalité): Le produit montre une activité faible mais constante. On note une commande fin novembre l'an dernier (1u). La saisonnalité est jugée faible. Étape 3 (Tendance): Les deux dernières commandes de septembre 2025 sont stables à 2u, mais il n'y a pas eu de commande en octobre, suggérant une rotation lente. Étape 4 (Recommandation): On privilégie la quantité modale de 2u pour couvrir la demande de fin d'année sans risque de sur-stockage sur un produit à faible rotation.

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
- **Pattern temporel**: Commande environ une fois par mois, jour de commande variable (lun/mar/jeu)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 3-4u en moyenne en 2024 à 1-2u fin 2025
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier majeur détecté, les quantités oscillent naturellement entre 1u et 4u. Étape 2 : Pas de pic saisonnier marqué en novembre (1u en 2023), bien que l'automne 2024 ait montré une activité de 4u. Étape 3 : On observe une baisse de volume sur les 6 derniers mois, avec les deux dernières commandes à 1u et 2u seulement, et un espacement plus long entre les commandes (septembre 2025 vs aucune commande en octobre). Étape 4 : La base de consommation récente est faible. Compte tenu du jour de commande (jeudi) et pour éviter une rupture après une longue absence de réapprovisionnement depuis fin septembre, une commande de 2 unités est recommandée.

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, irrégulier, environ tous les 20 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée (passage de 3u à 1u/2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse du produit LV BIO Tartinade montre une demande de fond stable mais de très faible volume. ÉTAPE 1: Aucun outlier détecté, les quantités oscillent organiquement entre 1 et 3 unités. ÉTAPE 2: La saisonnalité est jugée nulle car le produit ne montre pas de pic sur la fin d'année N-1 (2u en oct 2024). ÉTAPE 3: On observe un ralentissement sur 2025 avec des volumes de 1u et 2u contre 3u l'année précédente. ÉTAPE 4: La moyenne lissée pondérée par la tendance récente suggère une commande de sécurité de 2 unités. Étant donné la faible vélocité, un stock de 2 unités permet de couvrir la demande sans risque de surstockage significatif sur ce format 190g.

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (environ toutes les 3 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u N-1 vers 1-2u récent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes oscillent entre 1 et 4 unités. Étape 2: Faible saisonnalité observée, bien que les volumes historiques étaient légèrement supérieurs en fin d'année (2023). Étape 3: La tendance récente montre un ralentissement significatif avec les deux dernières commandes à 2u et 1u contre une moyenne historique de 3u. Étape 4: En combinant la base historique (2.8u moyenne globale) et la tendance actuelle à la baisse, une commande de 2 unités est recommandée pour couvrir le besoin sans risque de sur-stockage, tenant compte d'un rythme de rotation plus lent en 2025.

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier long (45 à 60 jours en moyenne)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 3u en début 2024 à 2u fin 2025
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes oscillent naturellement entre 1u et 3u. ÉTAPE 2 (Saisonnalité): Impact faible, bien qu'un pic à 3u soit visible au S1, la fin d'année montre un ralentissement (1u en octobre N-1). ÉTAPE 3 (Tendance): On observe une érosion du volume passant d'une moyenne de 3u à 2u sur les 3 dernières itérations. Absence de commande depuis 70 jours suggérant un besoin immédiat. ÉTAPE 4 (Recommandation): La base de 2.3u est ajustée à la baisse pour correspondre à la tendance récente et à l'historique de fin d'année. Le choix de 2u permet de couvrir la demande sans risque de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible occurrence, environ une commande tous les 1 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Inexistante (absence de commande depuis 16 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes historiques sont très faibles (1-2u). Étape 2: Faible impact saisonnier visible, bien que le produit (tartinade) puisse être lié à la période estivale, les données N-1 s'arrêtent en juillet. Étape 3: Tendance nulle car aucune commande n'a été passée depuis plus d'un an (juillet 2024). Étape 4: En l'absence de données récentes et avec un historique de faible rotation, une approche conservatrice est nécessaire pour éviter le sur-stockage et le risque de péremption. La recommandation est fixée à l'unité minimale pour tester la reprise de la demande.

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cyclicité longue de 30 à 45 jours concentrée sur le début de semaine (Lundi/Mardi)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen de 3 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique N-1 montre une demande de fond très stable gravitant autour de 3 unités (moyenne de 2.7u). Aucun outlier majeur n'est détecté, les variations (1u à 4u) restant dans les tolérances B2B standard. Bien qu'aucune commande n'ait été passée sur les 3 derniers mois, la période actuelle (novembre) correspond historiquement à un point de commande (cf. commande du 2023-11-28). La saisonnalité est jugée faible car le produit est consommé régulièrement toute l'année. Nous recommandons 3 unités pour couvrir le cycle de fin d'année, tout en restant conservateur face à l'absence de données récentes (dernière commande enregistrée en octobre N-1).

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: -0.6u (-15j restants) → prédit 1u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T12:12:44.438Z*
