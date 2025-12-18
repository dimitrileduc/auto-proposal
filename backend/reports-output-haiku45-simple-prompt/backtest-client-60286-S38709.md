# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-25 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 55
- **Tokens**: 122,818 input + 43,392 output = 166,210 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.4% | 62 produits prédits, 30 corrects |
| **Rappel** | 100.0% | 30 produits réels, 30 détectés |
| **F1-Score** | 65.2% | Score équilibré global |

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
| **MAE** | 0.23 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 7.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -1.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 26 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (30)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 5 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern bi-hebdomadaire irrégulier : commandes détectées mercredi (3x) et lundi (2x). Intervalle moyen ~20-25 jours. Pas de cycle strictement régulier observable. Dernière commande le 2025-08-06 (mercredi) → 19 jours avant la date de prédiction (2025-08-25, lundi). Décalage jour habituel : demande prédite un LUNDI vs historique concentré sur lundi/mercredi.
- **Saisonnalité**: none
- **Tendance**: Stable à 1.8u (moyenne des 3 derniers mois = (2+1+2+2+2)/5 = 1.8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE : 

1️⃣ **ANALYSE RYTHMIQUE** :
   - 5 commandes en 3 mois : fréquence ~1 commande/16 jours (modérée)
   - Distribution des jours : 3 mercredi (2025-08-06, 2025-07-09, 2025-06-11) + 2 lundi (2025-06-30, 2025-06-23)
   - Intervalle dernière commande → prédiction : 19 jours (2025-08-06 → 2025-08-25)
   - **Absence de pattern rigide** : le client ne commande pas strictement le même jour chaque semaine
   - Rupture potentielle : dernière commande était un mercredi, la prédiction est un lundi (décalage d'1.5 jours dans la semaine)

2️⃣ **ANALYSE DES QUANTITÉS** :
   - Historique : [2u, 1u, 2u, 2u, 2u]
   - Moyenne : 1.8u (très stable autour de 2u)
   - Médiane : 2u
   - Aucun outlier détecté (pas de pic ou creux exceptionnel)
   - La quantité 1u (2025-07-09) peut être une variation normale, pas une anomalie

3️⃣ **SAISONNALITÉ** :
   - Aucune donnée N-1 disponible → impact saisonnier impossible à mesurer
   - Produit agro (tartinade) : potentiellement sensible aux saisons, mais 3 mois = été stable
   - Impact : **none** (données insuffisantes, pas d'indicateur saisonnier détecté)

4️⃣ **TENDANCE** :
   - Commandes récentes : 2u (août) → 1u (juillet) → 2u (juin) → 2u (juin)
   - Pas de hausse ni baisse nette : **tendance stable**
   - Stabilité autour de 2u observée (4 commandes sur 5 = 2u)

5️⃣ **GESTION DU DÉCALAGE JOUR** :
   - Prédiction : lundi (jour nouveau dans l'historique)
   - Dernière commande : mercredi
   - Les lundis passés affichent aussi 2u → pas d'impact jour spécifique
   - Rattrapage minimal attendu (intervalle classique)

**CONCLUSION PRÉDICTIVE** :
- Baseline théorique : 1.8u (moyenne)
- Ajustement : arrondi par excès à 2u (cohérent avec majorité observée et stabilité agro)
- Confiance MEDIUM : peu de données (5 commandes), absence de N-1, pattern non strictement régulier

**DÉCISION FINALE : 2 unités** (maximize probabilité, minimise risque rupture sur produit stable)

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement les lundis (30-55 jours d'écart) avec une occurrence mercredi. Pas de cycle hebdomadaire strict identifié.
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5-2u, sans tendance haussière ou baissière marquée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE** :
   - Historique très court et fragmenté (4 points de données sur 3 mois)
   - Intervalles entre commandes: 30j (06/06→30/06), 7j (30/06→06/06 inversé), 19j (11/06→30/06), 56j (06/08→11/06 inversé)
   - Dernier point: 06/08/2025 (mercredi) = 20 jours avant la date de prédiction
   - Les lundis ne montrent pas de régularité stricte (30/06 et 23/06 seulement)
   - **Conclusion**: Aucun cycle hebdomadaire fixe (lun/mar/mer) détectable

2. **FILTRAGE OUTLIERS** :
   - Aucune valeur exceptionnelle: toutes les commandes sont entre 1u et 2u
   - Pas d'événement promotionnel visible
   - Données cohérentes dans la plage 1-2 unités

3. **SAISONNALITÉ** :
   - Absence totale de données N-1 (août 2024)
   - Impossible d'identifier un pattern saisonnier
   - Impact saisonnalité = "none"

4. **TENDANCE** :
   - Distribution: 2u, 1u, 2u, 2u (moyenne = 1.75u)
   - Pas de progression nette hausse/baisse
   - Tendance: STABLE à 1.5-2u

5. **PARTICULARITÉS DU JOUR DEMANDÉ** :
   - 25/08/2025 = LUNDI (jour de marché potentiel en agro-alimentaire)
   - Deux commandes précédentes les lundis montrent: 1u (23/06) et 1u (30/06)
   - **Mais** la dernière commande (06/08) est mercredi à 2u → possible rupture du pattern lundi
   - La proximité des 20 jours suggère rattrapage possible si client en démarrage ou reconstitution

6. **SYNTHÈSE DÉCISIONNELLE** :
   - Moyenne simple: (2+1+2+2)/4 = 1.75u ≈ **2u** avec arrondi conservateur
   - Pattern lundi historique: moyenne = 1.5u, mais dernière commande 2u
   - Risque faible de stockout avec 2u (volume réel bien couvert)
   - **PRÉDICTION**: 2 unités (cohérent avec tendance centrale et dernière observation)

**CONFIANCE = MEDIUM** : Données limitées (n=4), pattern peu régulier, absence N-1, mais tendance stable observable offre un socle fiable.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes principalement le lundi et mercredi, rythme irrégulier avec intervalles variables (7-15 jours). Pas de cycle strict identifiable.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec une exception à 1u (26-05). Pas de tendance haussière ou baissière détectable sur 3 mois.
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **Analyse Rythmique**
   - 5 commandes sur 3 mois : 2025-08-06 (mer), 2025-06-30 (lun), 2025-06-23 (lun), 2025-06-11 (mer), 2025-05-26 (lun)
   - Jours préférentiels : lundi (3x) et mercredi (2x) → client commande en milieu de semaine
   - Intervalles : 6j (06→23 juin), 7j (23→30 juin), 41j (30 juin→06 août)
   - Pattern irrégulier : pas de cycle fixe (hebdomadaire stricte ≠ 100% régularité)

2. **Filtrage des Outliers**
   - 25-05 (lun): 1u = exception → baisse ponctuelle sur 5 données
   - Toutes autres: 2u = demande "normale"
   - Pas d'indice promotionnel ou saisonnier expliquant la baisse

3. **Saisonnalité & Contexte**
   - Aucune donnée N-1 disponible → impossible de détecter un cycle annuel
   - Août N-1 : inconnu → pas d'ajustement saisonnier possible
   - Produit agroalimentaire (Tartinade Mangue Curry) : faible probabilité de pic saisonnier net en août

4. **Tendance Immédiate**
   - Dernière commande: 06-08 (2u)
   - Dernières 4 commandes hors outlier: 2u, 2u, 2u, 2u
   - Direction: **STABLE** (pas de trend haussier/baissier)

5. **Synthèse & Décision**
   - Baseline = Moyenne des données normales = 2u
   - Date de prédiction: lundi 25-08 (jour préférentiel identifié)
   - 19 jours depuis dernière commande (06-08) → cohérent avec pattern irrégulier (attente 15-45j entre commandes)
   - Aucune raison d'anticiper un rattrapage ou une exception

**CONCLUSION:** Demande stable à 2u. Pas de croissance détectable. Pas de saisonnalité exploitable (N-1 absent). La prédiction logique est **2 unités**.

**Confiance:** MEDIUM (données limitées N-1 absentes, mais pattern récent très stable)


</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, cycles variables : intervalles de 10-18 jours. Pas de jour fixe identifié. Jours observés : lundi, mercredi. Pattern peu régulier.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u (moyenne 1,8u sur 5 dernières commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **ANALYSE RYTHMIQUE**
   - Historique : 5 commandes sur ~2 mois (depuis début juin)
   - Intervalles entre commandes : 12j (6/11→6/23), 7j (6/23→6/30), 9j (6/30→7/9), 28j (7/9→8/6)
   - Pas de régularité stricte : ni cycle hebdomadaire fixe, ni mensuel régulier
   - Jours concernés : lundi (3×), mercredi (2×) - légère préférence lundi
   - Date de prédiction : 2025-08-25 (lundi) → correspond au jour habituel

2. **ANALYSE DE TENDANCE**
   - Toutes les commandes = 2u, sauf une = 1u (2025-07-09)
   - Moyenne = 1,8u
   - Aucune hausse ou baisse nette → demande STABLE
   - Pas d'outliers significatifs → pas d'événement exceptionnel détecté

3. **CONTEXTE SAISONNIER**
   - Aucune donnée N-1 disponible
   - Pas de pic saisonnier identifiable
   - Impact saisonnier = NONE

4. **DÉLAI DEPUIS DERNIÈRE COMMANDE**
   - Dernière commande : 2025-08-06 (19 jours avant la date de prédiction)
   - Intervalle dans la moyenne des 28 jours précédents
   - Pas d'indicateur de "rattrapage" ou de rupture de stock imminent

5. **DÉCISION FINALE**
   - Baseline = 1,8u (moyenne récente)
   - Tendance = Stable à 2u (mode)
   - Pattern = Irrégulier mais volumes constants
   → **Quantité la PLUS PROBABLE = 2 unités** (correspond au pattern majoritaire 4/5)
   
**Confiance MEDIUM** : Données limitées (5 points), pattern peu régulier, mais demande claire et stable permet bonne prédiction.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières tous les ~20-30 jours. Pas de jour fixe identifié. Alternance entre lundi et mercredi observée.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u (4 commandes sur 5 dernières à 2u, 1 commande à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: Les 5 dernières commandes s'étalent sur ~70 jours (juin-août 2025). Intervalles observés: 17j (juin), 12j (juin-juillet), 59j (juillet-août). Aucun jour de la semaine fixe détecté (alternance Lun/Mer). Le pattern n'est PAS hédomadaire régulier.

FILTRAGE OUTLIERS: Aucune donnée N-1 disponible pour identifier la saisonnalité. Les 5 valeurs récentes (2, 2, 1, 2, 2) ne présentent pas de pics exceptionnels. La valeur 1u du 30-06 pourrait être une rupture mineure (événement ou erreur), mais reste cohérente avec l'ordre de grandeur.

SYNTHÈSE: 
- Baseline: 1.8u (moyenne des 5 dernières: (2+2+1+2+2)/5 = 1.8)
- Tendance: Stable, légère prédominance de 2u (80% des cas)
- Saisonnalité: Non évaluable (pas N-1), impact supposé faible en B2B agroalimentaire pour produit stable
- Jour de prédiction (lundi 2025-08-25): compatible avec historique (2 commandes le lundi observées)

DÉCISION: Recommandation de 2u (arrondi supérieur de la baseline 1.8, aligné sur la modalité dominante). Confiance MEDIUM car données limitées (5 commandes) et rythme irrégulier sans pattern cyclique fort.

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes espacées de 12 à 45 jours. Pas de jour fixe identifié (variations mer./lun.). Dernière commande: 2025-08-06, avant-dernière: 2025-06-30 (37 jours d'écart)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u. Moyenne récente: 1.75u (4 commandes: 2+1+2+2). Pas de signal de hausse ou baisse nette.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE:**
   - Historique: 4 commandes seulement sur 3 mois (fréquence très basse)
   - Intervalles: 06/11→06/23 (12j), 06/23→06/30 (7j), 06/30→08/06 (37j)
   - Aucun pattern hebdomadaire ou mensuel régulier détecté
   - Jours variés: mercredi et lundi alternent, aucune cyclicité claire
   - **Verdict**: Client très irrégulier, possiblement petite entreprise ou commandes sporadic

2. **FILTRAGE OUTLIERS:**
   - Toutes les quantités sont 1-2u → homogènes, pas d'pics exceptionnels
   - Pas de données N-1 pour confirmer saisonnalité estivale
   - Pas d'événement explicite détectable (promo, erreur)

3. **SYNTHÈSE & DÉCISION:**
   - **Baseline**: Moyenne simple = (2+1+2+2)/4 = 1.75u
   - **Dernière commande** (08/06): 2u (donnée la plus récente, poids +40%)
   - **Tendance**: Stable (pas de drift visible)
   - **Jour prédiction**: Lundi 2025-08-25 (client a commandé lundi 2x: 06/30 et dans les données anciennes)
   - **Recommandation**: Arrondir à 2u (proche de la demande médiane et de la dernière commande)

**CONFIANCE MEDIUM** car:
✓ Données cohérentes sur 4 points (pas d'aberration)
✓ Pattern de base stable
✗ Très peu de données (N=4, pas de N-1)
✗ Fréquence très basse (37j entre deux commandes)
✗ Impossibilité de détecter un vrai cycle fiable

**Prédiction finale: 2 unités** (maximise précision sans sur-stock inutile)


</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec intervalles variables (6-45 jours). Concentration majoritaire le lundi (3/5 commandes), secondairement mercredi (2/5). Pas de cycle fixe hebdomadaire strict détecté.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u. Historique court (3 mois) sans données N-1 limitent la détection de saisonnalité. Moyenne récente: 1.8u.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎN DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE:
   - Dates: 26/5 (L), 11/6 (M), 23/6 (L), 30/6 (L), 6/8 (M)
   - Intervalles: 16j, 12j, 7j, 37j
   - Pattern: Irrégulier, mais concentration lunidienne (60%). Dernière commande: 6/8 (M) → prédiction 25/8 (L) = 50 jours après
   - INTERPRÉTATION: Client ne commande pas selon un cycle régulier. Durée 50j suggère possibilité de rattrapage ou période d'inactivité commerciale (vacances estivales août probables)

2️⃣ FILTRAGE OUTLIERS:
   - Toutes les quantités (1u, 2u, 2u, 2u, 2u) sont proches
   - Quantité unique de 1u (26/5) pourrait être commande réduite/test
   - Pas d'outlier majeur détectable

3️⃣ ANALYSE DE TENDANCE:
   - Historique court (3 mois), aucune donnée N-1
   - Stable à 2u majoritairement (4/5 commandes)
   - Moyenne: (2+2+2+2+1)/5 = 1.8u → arrondi à baseline 2u
   - Aucun pic ou baisse progressive

4️⃣ CONTEXTE CALENDAIRE:
   - Date de prédiction: 25/8/2025 (lundi)
   - Dernière commande: 6/8/2025 (mercredi)
   - Gap de 19 jours = délai normal observable
   - Absence de commande juillet-août = possible fermeture/vacances estivales client

5️⃣ DÉCISION FINALE:
   - Demande de fond STABLE à 2 unités
   - Pattern irrégulier mais sans rupture de tendance
   - Pas de saisonnalité détectable (données insuffisantes N-1)
   - Prédiction: **2 unités** (confiance medium due à régularité modérée et historique court)

⚠️ RISQUE RÉSIDUEL: Long délai depuis dernière commande pourrait indiquer stock client suffisant ou inactivité saisonnière. Recommander confirmations auprès du commercial si délai dépasse 25j post-commande.

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande régulière tous les ~30-45 jours. Dernière commande: 2025-08-06 (mercredi). Intervalle depuis dernière commande: 19 jours. Prédiction date: 2025-08-25 (lundi) = 19 jours après. Pas de pattern jour fixe détecté (mix lun/mer), mais régularité mensuelle claire.
- **Saisonnalité**: none
- **Tendance**: Stable à 2u. Aucune donnée N-1 disponible, mais 4 commandes consécutives à 2u sur 3 mois = demande parfaitement régulière et prévisible.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

**ANALYSE RYTHMIQUE:**
- 4 commandes observées, toutes de 2 unités (100% de régularité)
- Intervalles: 2025-06-11 → 2025-06-23 (12 jours), 2025-06-23 → 2025-07-09 (16 jours), 2025-07-09 → 2025-08-06 (28 jours)
- Tendance moyenne intervalle: ~18-19 jours, compatible avec prédiction à J+19 depuis dernière commande
- Pas de jour fixe (lun/mer alternent) = client commande ad hoc mais avec régularité de volumes

**FILTRAGE OUTLIERS:**
- Aucun pic, aucune baisse = données homogènes, aucun outlier détecté
- Absence complète de N-1 = pas de saisonnalité observable, impact = "none"

**SYNTHÈSE DÉCISIONNELLE:**
Pour un produit agroalimentaire avec historique PARFAITEMENT RÉGULIER (4/4 commandes = 2u), la règle prime: **Demande stable = moyenne simple + confiance maximale**
- Baseline = 2u (moyenne parfaite)
- Tendance = stable (aucune variation)
- Saisonnalité = non applicable (pas de données comparatives)
- **Recommandation: 2u** (probabilité quasi-certaine en B2B avec historique régulier)

**GESTION DU CONTEXTE J+19:**
Bien que la date soit lundi et non mercredi, la régularité temporelle (≈30j cyclique) prime sur le jour calendaire. Le client respecte son cycle de commande, pas un jour fixe.

**CONFIANCE: HIGH** car:
- 4 observations homogènes (100% de stabilité)
- Aucune ambiguïté dans les données
- Pattern clair malgré absence N-1
- Minimise MAPE en restant fidèle à l'observable (2u)


</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement mercredis (3 fois) et lundis (2 fois) sur 5 commandes. Pas de cycle régulier détecté. Intervalles variables: 41j (06/06→30/06), 7j (30/06→23/06 impossible, sûrement 23/06→18/07), 22j (18/07→09/08), 28j (09/08→06/09). Pattern hebdomadaire fragmenté sans périodicité stricte.
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u. Moyenne: 1.8u. Aucune tendance haussière ou baissière observable. Demande très régulière malgré l'irrégularité des dates.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 5 commandes sur ~70 jours avec un pattern chaotique. Les jours varient (lun/mer), mais aucun cycle fixe n'émerge. Les intervalles entre commandes sont imprévisibles (7j à 41j). TENDANCE: Les quantités sont stables entre 1-2u, avec une moyenne de 1.8u. Aucun pic ou creux détecté - pas d'outliers. SAISONNALITÉ: Aucune donnée N-1, donc pas d'analyse saisonnière possible (impact=none). DÉCISION: Avec une moyenne de 1.8u et une stabilité confirmée, arrondir à 2u est la prédiction la plus probable. Le client demande rarement, mais quand il le fait, c'est généralement 2u (3/5 commandes). Confiance MEDIUM car peu de données (N=5) et irrégularité des dates rend difficile toute extrapolation fiable. La date du lundi 2025-08-25 ne correspond à aucun pattern clair permettant une surconfiance."

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle clairement établi. Historique limité avec 4 commandes sur 3 mois. Dernière commande le 2025-08-06 (mercredi), prédiction pour 2025-08-25 (lundi) = 19 jours d'intervalle.
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u. Pattern récent: alternance 1u (juin) → 2u (août), pas de hausse ou baisse progressive évidente.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
## Analyse Chain of Thought:

**1. ANALYSE RYTHMIQUE**
- Historique très limité (4 commandes en 3 mois)
- Dates de commande: 30/06, 23/06 (7j d'intervalle, lundy), puis gap de 17j, puis 11/06 (mer.), puis gap de 56j jusqu'au 06/08 (mer.)
- Pattern PAS régulier: les intervalles varient fortement (7j → 17j → 56j)
- Aucun cycle hebdomadaire ou mensuel établi avec certitude
- Le client NE commande PAS systématiquement à jour fixe

**2. FILTRAGE DES OUTLIERS**
- Pas d'événements exceptionnels repérables (pas de N-1, pas de promotions signalées)
- Les 4 commandes fluctuent entre 1u et 2u: très homogène
- Pas d'anomalie détectée

**3. ANALYSE DE SAISONNALITÉ**
- N-1 absent → impossible d'identifier un pattern saisonnier
- Impact saisonnalité = "none"

**4. DÉTECTION DE TENDANCE**
- Moyenne simple: (2+1+1+2)/4 = 1.5u
- Pondérée (poids 2x sur dernière commande): (2+1+1+2×2)/5 = 1.6u
- Trend observé = STABLE, pas de hausse/baisse progressive
- Dernière commande (06/08): 2u
- Intervalle avant cette date: 56 jours (très long) → mais comportement récent ancré sur 2u

**5. CONTEXTE DE PRÉDICTION**
- Date demandée: 2025-08-25 (lundi)
- Jours depuis dernière commande: 19 jours (entre lundi et mercredi)
- Pas de corrélation jour fixe identifiée

**6. CONCLUSION**
- Baseline = 1.5u (moyenne équilibrée)
- Dernière tendance observée = 2u (plus récent)
- Risque : demande très irrégulière avec données limitées → confiance medium
- PRÉDICTION = 2u (arrondi supérieur vers dernière observation, prudent mais pas excessif)

**Rationale finale:** Avec seulement 4 observations et pas de cycle régulier, on privilégie la dernière information (2u récente) plutôt que la moyenne théorique (1.5u). Cela minimise le MAPE sur demandes variables.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières, principalement les lundis et mercredis. Derniers 3 mois: mercredis (06/18, 07/09, 08/06) et lundis (06/23, 06/30). Pas de cycle hebdomadaire strict détecté. Intervalles variables: 5j (18-23 juin), 7j (23-30 juin), 19j (30 juin-18 juillet absent), 28j (18 juin-18 juillet), 28j (09 juillet-06 août).
- **Saisonnalité**: none
- **Tendance**: Stable à 1,4u en moyenne (min: 1u, max: 2u). Aucune tendance à la hausse ou baisse significative détectée.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DETAILLÉE:

1. **RYTHME DE COMMANDE**: Le client alterne entre lundis et mercredis sans cycle hebdomadaire précis. Les 5 commandes sur 3 mois révèlent une cadence très irrégulière (intervalles: 5, 7, 19, 28, 28 jours).

2. **DATE PRÉDITE - LUNDI 25 AOÛT**: 
   - Dernière commande lundi: 30 juin (1u)
   - Dernière commande mercredi: 06 août (2u)
   - Intervalle depuis 06 août → 25 août: 19 jours
   - Ce lundi pourrait correspondre à un cycle de rattrapage après l'inactivité estivale

3. **ANALYSE QUANTITATIVE**:
   - Moyenne brute: 1.4u
   - Dernier mois (depuis 06 août): 2u sur mercredi
   - Commandes récentes: les 2 dernières (07/09, 08/06) = 2u chacune
   - Commandes antérieures plus anciennes: 1u ou 2u

4. **SAISONNALITÉ**: 
   - Pas de donnée N-1 → impossible d'identifier pattern saisonnier
   - Août est période estivale/ralentissement en agro → potentiel léger impact négatif
   - Impact saisonnier classé: "none" (pas d'évidence)

5. **DÉCISION**:
   - La tendance récente (dernières 2 commandes = 2u) prime sur la moyenne globale
   - Bien que le lundi soit jour "atypique" pour ce client (plutôt mercredi), il reste compatible avec le pattern observé
   - Pondération: 70% tendance récente (2u) + 30% historique (1.4u) = 1.82u → arrondi à **2u**
   - Confiance: MEDIUM (données limitées, pattern irrégulier, sans N-1)

**CONCLUSION**: Commande **2 unités** = équilibre entre stabilité tarifaire du produit et dernières commandes observées.

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes bi-hebdomadaires à trois-hebdomadaires, sans jour fixe apparent. Cycle mixte Lundi-Mercredi observé : Mer. 06/08 → Mer. 09/07 (intervalle 28j), Mer. 18/06 → Lun. 23/06 (5j), puis Lun. 30/06. Pattern irrégulier suggérant une demande opportuniste ou contrôlée par le client.
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 1,5-2u. Dernière commande 2u (06/08), 4 commandes sur 5 à 2u. Pas de hausse ou baisse significative sur 3 mois.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE ÉTAPE PAR ÉTAPE :

1. **ANALYSE RYTHMIQUE** :
   - 5 commandes sur 3 mois (juin-août 2025)
   - Intervalles : 28j (06/08→09/07), 5j (18/06→23/06), 7j (23/06→30/06)
   - CONSTAT : Pas de jour fixe (mix lundi-mercredi), pas de cycle régulier strict
   - Le rythme est IRRÉGULIER mais la fréquence s'accélère légèrement depuis mi-juin

2. **PATTERN DE QUANTITÉS** :
   - Distribution : 2u, 2u, 2u, 2u, 1u
   - 80% des commandes = 2 unités
   - 20% des commandes = 1 unité (isolé le 18/06)
   - Baseline statistique = (2+2+2+2+1)/5 = 1.8u → arrondi à 2u

3. **ABSENCE DE SAISONNALITÉ** :
   - Pas de données N-1 pour comparer août 2024
   - Pattern stable sur 3 mois = comportement non saisonnier apparent
   - Impact saisonnier : WEAK

4. **DÉTECTION D'OUTLIERS** :
   - La commande 1u du 18/06 pourrait être ponctuelle (aberrante)
   - Mais seul événement sur 5 → trop peu de preuve pour l'exclure
   - Pas de déclencheur explicite (promotion, rupture) identifiable

5. **PRÉDICTION POUR LUNDI 25/08** :
   - Dernière commande : 06/08 (mercredi) → +19 jours avant prediction
   - Cycle moyen observé : ~10-15 jours entre commandes récentes
   - Délai cohérent avec réapprovisionnement B2B (3 semaines acceptable)
   - Quantité : 80% probabilité de 2u (pattern dominant)
   - Confidence : MEDIUM (données limitées à 5 points, pas de N-1, pattern irrégulier)

**RECOMMANDATION FINALE** : 2 unités
- Justification : Alignement sur la tendance dominante (4 sur 5)
- Hypothèse raisonnable : Client B2B stable, petit volume, commandes régulières toutes les 2-3 semaines
- Risk : Underfulfill si pic exceptionnel, mais données insufficient pour justifier surge

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle récurrente le 2nd mercredi du mois (cycle ~30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u - Aucun pic, aucune baisse observée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

ANALYSE CHAÎNE DE PENSÉE :

1️⃣ ANALYSE RYTHMIQUE
   - 3 commandes uniquement sur 3 mois : 06-08 (mer.), 09-07 (mer.), 11-06 (mer.)
   - Intervalles : 28 jours (06-08 vs 09-07) et 29 jours (09-07 vs 11-06)
   - Pattern détecté : Cycle MENSUEL RÉCURRENT (~30 jours) toujours le MERCREDI (stable à 100%)
   - Jours du mois : 6, 9, 11 (2ème semaine du mois → 2ème mercredi)

2️⃣ DÉCALAGE DATE DE PRÉDICTION
   - Prédiction demandée : LUNDI 25-08-2025
   - Prochain mercredi attendu : 27-08-2025 (soit +2 jours)
   - Le client ne commande JAMAIS le lundi → Cette commande est ANORMALE (hors pattern)
   - Hypothèses : (a) Client avance sa commande pour raison interne, (b) Données test, (c) Rattrapage
   - En agro B2B, aucun signal de rattrapage n'est visible dans l'historique

3️⃣ FILTRAGE OUTLIERS
   - Aucun pic détecté : 2u, 2u, 2u (parfaite régularité)
   - Aucun creux : stabilité absolue
   - Pas d'événement exceptionnel dans l'historique limité

4️⃣ SAISONNALITÉ
   - Pas de données N-1 → Impossible d'identifier saisonnalité agroalimentaire
   - Impact : NONE (données insuffisantes)

5️⃣ TENDANCE
   - Sur 3 mois : Stable à 2u (moyenne = 2.0u, volatilité = 0%)
   - Aucun signal de hausse/baisse
   - Trend: STABLE

6️⃣ DÉCISION FINALE
   - Baseline théorique = 2u (demande moyenne observée)
   - Coefficient ajustement jour : Lundi ≠ Mercredi → Pas d'ajustement probabilisé (client hors cycle)
   - Commande sur jour décalé = Demande probable = BASELINE (2u)
   - Recommandation : 2u (respect de la quantité de commande régulière du client)

CONFIANCE : HIGH
   - 3 points de données avec 100% de régularité
   - Pattern mensuel très clair
   - Aucune volatilité observée
   - Seul risque : Décalage jour inexplicable, mais quantité attendue = 2u


</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande régulière le mercredi, cycle mensuel apparent (~30 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 3 commandes espacées d'environ 30 jours (06/08 → 09/07 ≈ 28j, 09/07 → 18/06 ≈ 21j), toutes émises un MERCREDI pour une quantité constante de 1u. La demande est extrêmement stable et régulière.

CONTEXTE PRÉDICTION: La date demandée est lundi 25/08/2025, soit 19 jours après la dernière commande du 06/08/2025 (mercredi). Cet écart est INFÉRIEUR au cycle habituel (~30j), suggérant que le prochain cycle normal aurait lieu autour du mercredi 03/09/2025, soit 28-30 jours après la dernière commande.

INTERPRÉTATION: La demande de prédiction pour un LUNDI (jour anormal) intervient en avance du cycle habituel mercredi. Deux hypothèses:
1. Le client souhaite avancer sa commande (rattrapage/besoin urgent)
2. Il s'agit d'une commande exceptionnelle hors cycle

DÉCISION: En l'absence de contexte explicite et face à un très faible volume (1u), je recommande de maintenir la quantité historique de 1u. Le pattern est trop court et trop stable pour justifier une variation. Cependant, la confiance est BASSE car:
- Seulement 3 points de données
- Pas de données N-1 pour valider la saisonnalité
- Commande en avance du rythme habituel (anomalie mineure)
- Volume extrêmement faible rend difficile la détection de tendances

RECOMMANDATION: 1u (maintien du pattern stable détecté)

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier sans cycle hebdomadaire fixe. Commandes espacées: 45j (06/06→23/06), 12j (23/06→11/06 impossible, relecture: 11/06→26/05=17j arrière, 26/05→23/06=28j), 48j (23/06→06/08). Pas de jour de semaine récurrent (mer., lun., mer., lun.).
- **Saisonnalité**: none
- **Tendance**: Volatilité avec demande erratique: 2u → 10u (pic 11/06) → 4u → 6u. Moyenne récente ~5.5u, mais sans tendance claire.
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1️⃣ ANALYSE RYTHMIQUE:
   - Données très parcimonieuses (n=4 points sur ~3 mois)
   - Intervalles entre commandes: 17j, 28j, 45j → AUCUN pattern régulier identifiable
   - Jours de semaine: mer., lun., mer., lun. → Pas de synchronisation hebdomadaire fixe
   - Absence totale de cycle fiable (pas lundi fixe, pas vendredi habituel, pas fin de mois)

2️⃣ FILTRAGE OUTLIERS:
   - Pic identifié: 10u (11/06) → Probable commande de rattrapage ou événement ponctuel
   - Deux commandes très basses: 2u (26/05) et 4u (23/06) → Faible demande de référence?
   - Dernière commande: 6u (06/08, mercredi) → Signal le plus récent fiable
   - Absence totale de données N-1 → Impossibilité d'évaluer saisonnalité

3️⃣ ABSENCE DE SAISONNALITÉ:
   - Aucune donnée N-1 disponible → seasonality_impact = "none"
   - Données sur août, juin, mai: pas assez récurrentes pour conclure

4️⃣ SYNTHÈSE TENDANCE:
   - Moyenne simple: (2+10+4+6)/4 = 5.5u
   - Moyenne récente (2 derniers mois): (4+6)/2 = 5u
   - Dernier point: 6u (06/08)
   - Aucune hausse ou baisse systématique → Stabilité autour de 5-6u

5️⃣ DÉCISION FINALE:
   ✓ Baseline = 5.5u (moyenne pondérée)
   ✓ Recommended_quantity = 6u (dernière commande récente, arrondi de baseline)
   ✓ Confidence = LOW car:
     - Seul 4 données points
     - Pas de pattern identifié
     - Intervalles totalement erratiques
     - Données N-1 manquantes pour saisonnalité
   
   STRATÉGIE SUPPLY CHAIN APPLIQUÉE:
   En B2B Agroalimentaire, face à client erratique sans pattern:
   → Ne pas surgonfler (risque surstock/dates limite)
   → Suivre la dernière commande validée (6u)
   → Rester prêt à des pics occasionnels (10u observé)

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pas de pattern régulier identifié. Commandes éparse sur 3 mois : 2025-06-23 (lun), 2025-06-11 (mer), 2025-05-26 (lun), 2025-08-06 (mer). Intervalles variables (15j, 12j, 46j). Aucun cycle hebdomadaire ou mensuel clair détecté.
- **Saisonnalité**: none
- **Tendance**: Instable avec pic isolé à 10u en juin, puis retour à 2-6u. Pas de tendance claire.
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE :

1. **ANALYSE RYTHMIQUE** 
   - Données très limitées : seulement 4 commandes sur 3 mois
   - Jours variés : lundi (2×), mercredi (2×) → pas de jour fixe
   - Intervalles entre commandes : +46j (26 mai→23 juin), +12j (23 juin→11 juin INCOHÉRENT EN DATE), +56j (11 juin→6 août)
   - Conclusion : AUCUN cycle régulier détectable

2. **FILTRAGE OUTLIERS**
   - Pic isolé à 10u le 2025-06-11 (mercredi)
   - Autres quantités : 6u, 4u, 2u → moyenne hors pic = 4u
   - Le pic de 10u semble exceptionnel, probablement lié à un événement (promotion, déstockage, erreur)
   - À ne PAS reproduire systématiquement

3. **ABSENCE DE SAISONNALITÉ N-1**
   - Pas de données historiques N-1 disponibles
   - Impossible de valider un pattern saisonnier
   - Impact saisonnalité = "none"

4. **TENDANCE RÉCENTE**
   - Dernière commande : 6u le 2025-08-06 (mercredi)
   - Cette commande est la plus proche temporellement
   - Pas de hausse ou baisse progressive → demande apparemment stable entre 4-6u

5. **SYNTHÈSE & DÉCISION**
   - Baseline = moyenne simple des commandes "normales" = (6 + 4 + 2) / 3 = 4u
   - OU moyenne pondérée avec poids sur dernière commande = 5.5u
   - Le fait que la date prédite soit un lundi (comme 2 des 4 commandes) n'ajoute pas d'information du fait de la faible régularité
   - Confiance BASSE en raison : données insuffisantes, pattern instable, absence de N-1
   
**RECOMMANDATION FINALE : 6u**
   - Proche de la dernière commande observée (6u)
   - Légèrement au-dessus de la baseline théorique (5.5u)
   - Stratégie conservatrice raisonnable face à l'incertitude
   - Minimise le risque de rupture avec données limitées

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Pas de cycle hebdomadaire fixe détecté. Intervalles variables : 44 jours (06-23→08-06), 12 jours (11-13→06-11), 16 jours (26-05→06-11). Jours mélangés (lun-mer-mer-lun). Absence complète de synchronisation calendaire.
- **Saisonnalité**: none
- **Tendance**: Stable avec variabilité - Moyenne récente ~5.5u, dernière commande 6u (08-06). Pas de tendance haussière ou baissière nette, mais fluctuations importantes (2u → 10u → 4u → 6u).
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE:**

1. **DÉTECTION PATTERN TEMPOREL**
   - Historique très limité (4 commandes sur 3 mois)
   - Intervalles erratiques : 44j, 12j, 16j → zéro régularité hebdomadaire
   - Jours alternés (lun-mer-mer-lun) → pas de jour fixe de commande
   - **Conclusion : Pas de cycle détectable**

2. **ANALYSE QUANTITÉS**
   - Série : 2, 10, 4, 6 (du 26-05 au 06-08)
   - Le 10u (11-06) → outlier probable = pic ponctuel (promotion B2B ? achat groupé ?)
   - Baseline sans outlier : (2+4+6)/3 = **4u** (demande normale)
   - Avec outlier lissé : moyenne = **5.5u**
   - **Dernière commande (06-08) : 6u** = indicateur plus fiable que la moyenne

3. **PRÉDICTION JOUR LUNDI 25-08**
   - Pas de saisonnalité N-1 (aucune donnée)
   - Pas de pattern jour fixe
   - La prédiction doit reposer sur : demande moyenne + signal dernière commande
   - Moyenne robuste = 5.5u, dernière cmd = 6u
   - **Tendance proche de 5-6u**

4. **DÉCISION FINALE**
   - Préférer la **quantité PROBABLE** plutôt que prudente
   - Dernier signal = 6u (confiance modérée car données partielles)
   - Arrondir baseline 5.5u à **6u** = cohérent avec trend récent
   - **Recommandation : 6 unités**
   - **Confiance : MEDIUM** (données insuffisantes, pas de pattern clair, mais signal récent cohérent)

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - 2 observations sur ~2 mois : 09/07/2025 (mercredi) + 11/06/2025 (mercredi). Possible tendance mercredi mais data insuffisante pour confirmer un cycle fiable.
- **Saisonnalité**: none
- **Tendance**: Stable à ~1.5u - Deux commandes identiques à 2u et 1u, moyenne 1.5u. Pas d'évolution significative observable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE:** Données minimales (2 observations seulement) + absence d'historique N-1 = confiance structurellement basse.

**CHAÎNE DE RAISONNEMENT:**

1. **Analyse Rythmique:**
   - Dernière commande: 2025-07-09 (mercredi) → 2u
   - Pénultième: 2025-06-11 (mercredi) → 1u
   - Intervalle: 28 jours (proche cycle mensuel, mais sur mercredi fixe)
   - Date prédiction: 2025-08-25 (lundi) = 47 jours après dernière commande
   - ⚠️ Rupture du rythme mercredi-mercredi

2. **Filtrage Outliers:**
   - Aucun pic exceptionnel détecté (1u et 2u = volumes très cohérents)
   - Pas de promotion identifiée
   - Pas d'erreur apparente

3. **Saisonnalité:**
   - Sans données N-1 (été 2024), impossible d'évaluer effet saisonnier
   - Impact: **none** (par défaut, faute de comparaison)

4. **Tendance:**
   - Légère hausse: 1u → 2u
   - Mais sur 2 points seulement = trop peu pour affirmer hausse structurelle
   - Classification: **Stable** autour de 1.5u

5. **Déduction Finale:**
   - Baseline: (1 + 2) / 2 = **1.5u**
   - Variation observée: ±0.5u (entre 1 et 2)
   - Décalage jour (lundi vs mercredi): risque léger de rattrapage vs risque réduit
   - **Recommandation: 2u** (arrondi à l'entier supérieur, proche dernière commande)
   - Alternative prudente: 1u (moyenne) - mais dernière tendance penche vers 2u

**JUSTIFICATION DU CHOIX 2u:**
- Conforme à dernière commande (2025-07-09 = 2u)
- Minimise MAPE vs hypothèse 1u (sur historique limité)
- Cohérent avec possible légère hausse (1→2)
- En agroalimentaire B2B, mieux vaut aligner sur dernière demande confirmée

**Confiance: LOW** - Données insuffisantes (2 points), pas de N-1, pattern jour décalé, risque rattrapage à surveiller.

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sur les 3 derniers mois : 09/07 (mer), 30/06 (lun), 18/06 (mer), 11/06 (mer), 26/05 (lun). Pas de jour fixe récurrent (mélange lundi/mercredi). Intervalles variables : 9j, 12j, 7j, 16j. Aucun cycle hebdomadaire clair ni pattern mensuel régulier détecté.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Toutes les 5 dernières commandes sont exactement 1 unité, aucune variabilité observée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Historique limité à 5 commandes sur 2.5 mois (mai-juillet 2025). Pas de N-1 disponible pour saisonnalité. Les jours de commande varient (mercredi et lundi mélangés) et les intervalles ne montrent aucun pattern régulier (9, 12, 7, 16 jours). La date de prédiction (25/08, lundi) n'offre pas de signal de rattrapage particulier. ANALYSE DE TENDANCE : Toutes les commandes historiques = 1 unité exactement. Aucune hausse, baisse ou pic détecté. La demande est STABLE à 1u. ABSENCE D'OUTLIERS : Pas de promotion, erreur ou événement exceptionnel identifiés - cohérence totale à 1u suggère un demand régulière minimale. CONCLUSION : Avec une stabilité observée à 1u et sans saisonnalité exploitable, la prédiction la plus probable reste 1u. Confiance MEDIUM (pas de N-1, volume très bas, peu de données) mais signature ultra-claire (100% des commandes = 1u justifie cette prédiction par la loi des grands nombres sur petit échantillon).

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier sur 2-3 mois : commandes espacées de 11-45 jours. Aucune récurrence fixe hebdomadaire détectable (mercredi et lundi alternent sans cycle clair). Délai moyen entre commandes: ~31 jours.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - toutes les commandes des 3 derniers mois portent sur 1 unité unique, aucune hausse/baisse observable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE :**
Les 5 commandes récentes (3 derniers mois) montrent un pattern très fragmenté :
- 2025-05-26 (lun) → 2025-06-11 (mer) : 16 jours
- 2025-06-11 (mer) → 2025-06-18 (mer) : 7 jours
- 2025-06-18 (mer) → 2025-06-30 (lun) : 12 jours
- 2025-06-30 (lun) → 2025-07-09 (mer) : 9 jours

Aucun jour de semaine n'émerge comme récurrent (mix mercredi/lundi). Aucun cycle mensuel clair. La date de prédiction (lundi 2025-08-25) s'écarte du dernier enregistrement du 2025-07-09, soit ~47 jours d'écart.

**FILTRAGE OUTLIERS :**
Aucun pic anormal détecté. Toutes les commandes = 1 unité systématiquement.

**SAISONNALITÉ :**
Aucune donnée N-1 disponible. Impact saisonnier = "none".

**TENDANCE :**
Demande stable à 1u constamment. Aucune indication de hausse/baisse.

**DÉCISION FINALE :**
Avec un produit à demande ultra-stable (1u à chaque commande) et aucun pattern prédictif robuste, la baseline est 1 unité. Cependant, le délai très long depuis la dernière commande (47 jours vs moyenne ~31j) suggère un possible rattrapage léger, mais sans donnée N-1 pour confirmer une saisonnalité août, la prudence impose de rester à la baseline.

**Confiance MEDIUM** : Données très réduites (5 points), aucune N-1, pattern peu régulier, mais demande extrêmement prévisible en volume.

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans cycle hebdomadaire clair. Distribution entre jours de semaine (lundi et mercredi). Intervalles variables: 9j (30→18 juin), 7j (18→11 juin), 16j (11 juin→26 mai), 35j (26 mai→9 juillet). Aucun cycle régulier hebdomadaire ou mensuel détectable.
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité. Aucune hausse, aucune baisse observable. Toutes les 5 commandes récentes = 1u exactement.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE APPROFONDIE:

**1. ANALYSE RYTHMIQUE**
L'historique montre 5 commandes sur ~2,5 mois (09/07 → 26/05):
- 2025-07-09 (mer.) → 2025-06-30 (lun.): 9j
- 2025-06-30 (lun.) → 2025-06-18 (mer.): 12j
- 2025-06-18 (mer.) → 2025-06-11 (mer.): 7j
- 2025-06-11 (mer.) → 2025-05-26 (lun.): 16j

**Conclusion**: Pas de cycle régulier détectable. Les commandes alternent entre lundi et mercredi de manière imprévisible, avec des intervalles de 7-16 jours. Aucun pattern hebdomadaire strict, aucun cycle mensuel identifiable.

**2. ANALYSE VOLUMÉTRIQUE**
Quantités observées: [1u, 1u, 1u, 1u, 1u]
- Moyenne: 1u
- Std Dev: 0u
- Min/Max: 1u / 1u
- Coefficient de variation: 0% (stabilité parfaite)

Aucun outlier, aucune variation. Ce client commande TOUJOURS 1 unité.

**3. DÉTECTION DE SAISONNALITÉ**
- Aucune donnée N-1 disponible → pas de comparaison saisonnière possible
- Période couverte (mai-juillet): avant pic estival potentiel
- Contexte été 2025: produit boisson énergisante BIO peut voir une hausse en été, mais données insuffisantes pour valider
- Impact saisonnalité: NONE (données insuffisantes + demande très stable)

**4. TENDANCE & RATTRAPAGE**
- Aucune hausse progressive observée
- Aucune rupture de commande
- Date prédiction: lundi 25 août 2025 (3 semaines après dernière commande du 09/07)
- La période estivale (août) peut voir une variation, MAIS le pattern d'achat ultra-régulier à 1u suggère une demande inélastique (produit de base pour client B2B ou contracting fixe)

**5. DÉCISION FINALE**
- Baseline théorique: 1 unité
- Ajustement saisonnier: aucun (données insuffisantes)
- Ajustement tendance: aucun (stable parfait)
- **Quantité recommandée: 1 unité**
- Confiance: HIGH (100% consistance sur 5 observations, zéro variabilité)

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Une seule commande en 3 mois. Impossible de déterminer un cycle habituel (hebdomadaire, mensuel, ou événementiel). Commande du 2025-07-09 (mercredi) reste isolée dans l'historique accessible.
- **Saisonnalité**: none
- **Tendance**: Stable à 6u (dernière observation unique) - Pas de tendance identifiable avec une seule donnée récente. N-1 absent → impossible d'évaluer saisonnalité.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Raisonnement Chain of Thought:

1. **ANALYSE RYTHMIQUE**
   - Seule commande connue: 2025-07-09 (mercredi) → 6 unités
   - Intervalle depuis cette commande: 47 jours (du 9 juillet au 25 août)
   - PROBLÈME: Un seul point de données récent = impossible d'identifier un pattern fiable
   - Absence totale d'historique N-1 → aucune baseline saisonnière
   - Impossibilité de détecter: cycle hebdomadaire, bi-hebdomadaire, ou mensuel

2. **HYPOTHÈSES EXPLORÉES**
   - **Commande unique exceptionnelle?** Possible mais non confirmé
   - **Rythme très long (45-50j)?** Seul l'intervalle observé pourrait le suggérer
   - **Résurgence attendue le 25 août?** Hypothèse : si cycle ~45j, la prochaine commande aurait dû survenir aux alentours du 23-24 août → très proche de la date de prédiction

3. **DÉCISION FINALE**
   Avec UNE SEULE donnée et ZÉRO historique N-1, la seule approche responsable est la **prudence maximale**:
   - Ne pas inventer de pattern fictif
   - Reproduire la dernière quantité observée (6u) = approche "baseline conservative"
   - **Confiance: FAIBLE** – cette prédiction est un pari très risqué

**RECOMMANDATION**: Urgent de récupérer l'historique complet (minimum 6-12 mois) pour affiner le modèle. Le produit PAO03 mérite une analyse robuste donnée son marché B2B en Belgique.</reasoning>
</invoke>

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 30-44 jours, sans jour fixe de la semaine (Lundi, Mercredi détectés). Pas de cycle hebdomadaire clairement établi.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Trois commandes consécutives de 1 unité unique, suggérant une demande de fond très faible et constante pour ce produit.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE CHAÎNE DE PENSÉE** :

1️⃣ **ANALYSE RYTHMIQUE** :
   - Intervalles observés : 43 jours (18/06 → 09/07), 44 jours (26/05 → 18/06)
   - Jours de semaine : Mercredi, Mercredi, Lundi → pas de jour fixe détectable
   - Pattern : Commandes très espacées (~6 semaines), irrégulières en jour de semaine
   - Hypothèse : Petit client/point de vente avec rotation très lente du produit

2️⃣ **FILTRAGE OUTLIERS** :
   - Aucun pic exceptionnel, aucune promotion détectée
   - Toutes les quantités = 1u → comportement parfaitement homogène
   - Pas de variation saisonnière observable (N-1 absent)

3️⃣ **SYNTHÈSE DÉCISION** :
   - Absence de N-1 : saisonnalité non évaluable → "none"
   - Donnée la plus récente : 2025-07-09 = 1u
   - Intervalle précédent ~43j → attente d'une prochaine commande possible proche du 2025-08-22 (≈43j après 09/07)
   - Date prédiction (25/08) : légèrement au-delà du cycle attendu mais cohérent
   - **Baseline = 1u** (seule quantité observée, stable)

**RECOMMANDATION FINALE** : **1 unité**
- Confiance FAIBLE car : données très limitées (3 points), intervalles irréguliers, absence totale de contexte saisonnier
- Cependant, règle d'Or agro B2B appliquée : prédire la quantité LA PLUS PROBABLE (1u) plutôt que sur-approvisionner
- Risque de rattrapage minime vu l'espacemant de ~6 semaines entre commandes

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes très sporadiques sans rythme régulier. Intervalles: 44 jours (26/05→18/06), 52 jours (18/06→09/07). Aucun jour de la semaine récurrent.
- **Saisonnalité**: none
- **Tendance**: Demande extrêmement faible et erratique - toutes les commandes à 1u. Aucune tendance discernable.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE**
   - Seules 3 données disponibles sur 3 mois (07/05 → 09/07)
   - Intervalles très irréguliers: 44j, puis 52j
   - Jours de semaine variés: lundi, mercredi, mercredi (pas de cycle hebdomadaire)
   - Pas de pattern détectable avec aussi peu de donnees

2. **DEMANDE EXTRAORDINAIREMENT FAIBLE**
   - Toutes les commandes = 1 unité (canette 330ml unique)
   - Ce n'est PAS un produit B2B à fort volume (comportement plutôt « essai » ou « test ponctuel »)
   - Hypothèse: Client potentiel testant le produit, ou cas d'usage marginal

3. **ABSENCE DE SAISONNALITÉ**
   - Zéro données N-1 pour comparaison
   - Volume trop faible pour analyser saisonnalité
   - Impact = "none"

4. **DATE DE PRÉDICTION: 2025-08-25 (Lundi)**
   - Depuis 09/07, 47 jours se sont écoulés
   - Intervalle moyen observé: ~48j
   - Coïncidence possible d'une commande ce jour
   - MAIS confiance très basse: données insuffisantes

5. **DÉCISION FINALE**
   - Baseline = 1u (seule quantité jamais commandée)
   - Aucune justification d'ajustement (pas de trend, pas de hausse)
   - Recommended = 1u par défaut
   - Confidence = LOW (trop peu de données, pattern trop erratique)

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier - Commandes mensuelles/bi-mensuelles (intervalles de 20-43 jours). Dernière commande: 18 jours avant la prédiction. Pas de cycle hebdomadaire détecté.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Toutes les trois commandes récentes sont de 1 unité sans variation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE:**
   - Intervalle 1 (18/06 → 26/05): 23 jours
   - Intervalle 2 (09/07 → 18/06): 21 jours
   - Intervalle 3 (25/08 → 09/07): 47 jours
   - Aucun pattern hebdomadaire (jours différents: lun., mer., mer.)
   - Les commandes s'étalent sur ~50 jours avec une moyenne d'intervalle de ~30 jours
   - RUPTURE: L'intervalle dernier (47j) est NETTEMENT PLUS LONG que les deux précédents (21-23j)

2. **CONTEXTE CALENDAIRE:**
   - Prédiction demandée pour lundi 25 août 2025 (fin d'été/rentrée)
   - Dernière commande: mercredi 09 juillet (18 jours avant la prédiction)
   - Pas de données N-1 → pas d'analyse saisonnière possible

3. **STABILITÉ DE LA DEMANDE:**
   - Toutes les commandes = 1 unité (canette 330ml)
   - Aucune variation quantitative → pas d'outliers
   - Tendance: STABLE (ni hausse ni baisse)

4. **DÉTECTION DE PATTERN:**
   - Pas de cycle fixe identifiable (intervalles trop variables: 21j, 23j, 47j)
   - Client de très petite consommation (1u par commande)
   - Possible: petits achats ponctuels pour dégustations, tests, ou consommation très faible

5. **SYNTHÈSE & DÉCISION:**
   - Baseline logique: 1 unité (unique quantité observée)
   - Pas de saisonnalité (données N-1 manquantes)
   - Pas de tendance (volumes constants)
   - Pas de signal d'accélération malgré l'allongement du dernier intervalle
   - PRÉDICTION FINALE: 1 unité (reconduction du pattern stable)

⚠️ CAVEAT: Confiance BASSE en raison de:
   - Très peu de données (n=3 commandes seulement)
   - Pattern irrégulier sans cycle détectable
   - Absence de données N-1 pour valider la saisonnalité
   - Intervalle dernier anormalement long (47j vs 21-23j attendus)

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.3u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans pattern fixe détecté. Intervalles variables: 19 jours (30 juin → 11 juin), puis 16 jours (11 juin → 26 mai). Pas de cycle hebdomadaire apparent (mardi, mercredi, lundi sur 3 points)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u). Pas de tendance haussière ou baissière nette observable sur 3 points
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DÉTAILLÉE:

1. **ANALYSE RYTHMIQUE**: 
   - Historique très court (3 commandes sur 2 mois)
   - Intervalles: 19j (30 juin - 11 juin), 16j (11 juin - 26 mai) = pas de régularité stricte
   - Jours variables: lundi, mercredi, lundi = aucun pattern hebdomadaire identifiable
   - Fréquence moyenne: ~1 commande tous les 17-18 jours

2. **NATURE DE LA DEMANDE**:
   - Volumes extrêmement faibles: 1u, 2u, 1u
   - Pas d'outliers détectés (pas de pics exceptionnels)
   - Tendance STABLE autour de 1-2 unités
   - Aucune donnée N-1 pour contextualiser la saisonnalité

3. **CONTEXTE DE LA PRÉDICTION**:
   - Date demandée: 25 août 2025 (lundi)
   - Dernier jour de commande: 30 juin 2025 (56 jours avant la prédiction!)
   - Écart anormal: habituellement commande tous les 17-18j, là c'est +56j
   - INTERPRÉTATION: Soit inactivité du client, soit données partielles

4. **DÉCISION**:
   - Baseline = moyenne simple des 3 valeurs = (1+2+1)/3 = 1.33u
   - Le pattern stable + faible volume → prédiction prudente
   - Arrondi à l'entier MINIMUM viable: **1 unité**
   - Cependant, confiance TRÈS BASSE en raison des données insuffisantes

**RISK**: Cet historique fragmenté et ce long silence suggèrent une forte incertitude. Client peut être inactif ou données incomplètes.

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire chaque lundi (cycle 7 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE CHAÎNE DE PENSÉE:

1. **ANALYSE RYTHMIQUE**
   - Données disponibles: 2 commandes (2025-06-30 et 2025-06-23)
   - Intervalle entre les deux: Exactement 7 jours (lun. 23 juin → lun. 30 juin)
   - Pattern identifié: Commande rigoureusement hebdomadaire chaque LUNDI
   - Aucune rupture de rythme observée
   
2. **QUANTITÉS & TREND**
   - Les 2 dernières commandes: 1u et 1u
   - Tendance: Parfaitement STABLE à 1 unité
   - Aucun pic, aucune baisse progressive
   - Pas de variabilité détectée
   
3. **SAISONNALITÉ**
   - Aucune donnée N-1 disponible pour validation
   - Données récentes trop courtes (2 points) pour détecter pattern saisonnier
   - Impact saisonnier: NONE (par défaut en absence de données historiques longues)
   
4. **OUTLIERS & ÉVÉNEMENTS EXCEPTIONNELS**
   - Aucun pic anormal identifié
   - Aucun événement exceptionnel visible
   - Données cohérentes et régulières
   
5. **DÉCISION FINALE**
   - Nous sommes lundi 2025-08-25
   - Pattern hebdomadaire confirmé (Lundi → Lundi)
   - Stabilité parfaite à 1u
   - Le client respecte un rythme de commande très régulier et minimaliste
   - Baseline = Moyenne historique = 1u
   - Aucune raison de s'écarter de ce pattern établi
   
**PRÉDICTION: 1 unité**
Confiance HIGH car: (a) pattern très régulier et prévisible, (b) aucune variabilité, (c) cycle hebdomadaire clairement établi, (d) jour de semaine identique.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières - Pattern hebdomadaire faible. Commandes observées: lun. (2x), mer. (1x). Intervalle moyen ~7 jours, mais distribution sporadique sur différents jours de semaine.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - Toutes les commandes observées sont des quantités unitaires (1u chaque). Pas de hausse détectable. Demande très faible et homogène.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE DÉTAILLÉE:**

1. **Données disponibles**: 3 commandes sur 3 mois (juin 2025)
   - 2025-06-30 (lun.) → 1u
   - 2025-06-23 (lun.) → 1u  
   - 2025-06-18 (mer.) → 1u

2. **Pattern rythmique identifié**:
   - Intervalle moyen: ~7 jours entre dernières commandes
   - Jours variables: lundi (2x), mercredi (1x) → pas de jour fixe strict
   - La prédiction pour lundi 2025-08-25 s'aligne avec une possible récurrence hebdomadaire faible

3. **Filtrage outliers**: 
   - Aucun pic détecté → toutes les commandes sont des 1u régulières
   - Pas de promotion ou événement identifiable dans l'historique

4. **Saisonnalité**: 
   - Aucune donnée N-1 disponible → impossible d'identifier un effet saisonnier août-2024
   - Impact estimé: **NONE**

5. **Tendance**: 
   - Demande **STABLE et TRÈS FAIBLE** (1u en permanence)
   - Pas de croissance ni de baisse détectable
   - Baseline = Moyenne = Mode = 1u

6. **Synthèse & Décision**:
   - Le produit ALO31 est à très faible rotation (1u/semaine environ)
   - Pattern peu robuste (seulement 3 points) mais homogène
   - Aucun signal de rupture de tendance
   - **Prédiction: 1u** (conservation de la demande régulière observée)

**Confiance MEDIUM** car l'historique est court (3 mois) et le rythme hebdomadaire n'est pas strictement régulier. Toutefois, l'homogénéité totale des quantités renforce la fiabilité du point de prédiction.

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 5u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 7u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern insuffisant - Seulement 2 commandes sur 3 mois (juin 2025): lundi 23/06 (4u) et mercredi 11/06 (10u). Intervalle de 12 jours. Impossibilité de déterminer un cycle hebdomadaire ou mensuel fiable.
- **Saisonnalité**: none
- **Tendance**: Hausse observable entre les 2 points: passage de 10u (11/06) à 4u (23/06) suggère une BAISSE (-60%), mais deux points insuffisent pour conclure une tendance fiable.
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
ANALYSE CRITIQUE :

1. **DONNÉES EXTRÊMEMENT LIMITÉES** : Seules 2 commandes sur les 3 derniers mois (intervalle de 12 jours). Pas de données N-1 pour validation saisonnière. Ceci est le facteur limitant majeur de cette prédiction.

2. **PATTERN RYTHMIQUE** : 
   - 11/06 (mercredi) : 10u
   - 23/06 (lundi) : 4u
   - Intervalle: 12 jours (ni hebdomadaire régulier, ni mensuel)
   - Impossible de détecter un cycle fiable (hebdo, bihebdo, ou mensuel)
   - La date de prédiction (lundi 25/08) ne correspond à aucun jour de commande antérieur

3. **ANALYSE DE TENDANCE** :
   - Variation observée: 10u → 4u = **-60% de baisse**
   - Amplitude très volatile pour une si courte fenêtre
   - Cette baisse peut signifier: (a) réduction de demande légitime, (b) stock client suffisant après le 10u, (c) données lacunaires masquant le vrai pattern

4. **OUTLIER DETECTION** :
   - 10u (11/06): Légèrement au-dessus de la moyenne (7u) → Classé comme léger outlier, possiblement besoin ponctuel
   - 4u (23/06): Sous la moyenne → Retour à la normale ou baisse confirmée?

5. **BASELINE CALCULATION** :
   - Moyenne simple: (10 + 4) / 2 = **7u** (baseline théorique sans saisonnalité)
   - Cette moyenne masque l'incertitude mais reste la meilleure hypothèse neutre

6. **AJUSTEMENT FINAL** :
   - Aucune saisonnalité identifiable (N-1 absent)
   - Tendance récente baissière (-60%)
   - Prudence sur extrapolation: 2 points = signal faible
   - **Recommandation**: Appliquer une légère correction baissière à la baseline
   - **7u × 0.71 ≈ 5u** (pondération vers le dernier point observé 4u, légèrement lissé)

7. **GESTION INCERTITUDE** :
   - Confiance: **LOW** en raison des données extrêmement réduites
   - Conseil: Augmenter fréquence de collecte de données pour affiner le modèle
   - Cette prédiction est une **meilleure estimation** mais NON fiable pour engagement long terme

**RECOMMANDATION: 5 unités** (prédiction conservative reflétant la baisse récente, sans sur-correction)

</details>




### 📊 Données d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (32)

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
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 1.1u (21j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.5u (17j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (5j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (21j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 3 | Stock prédit: 0.6u (8j restants) → prédit 3u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 3 | Stock prédit: 0.5u (5j restants) → prédit 3u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-16j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Stock prédit: -0.9u (-21j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-12j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | Stock prédit: -2.1u (-18j restants) → prédit 4u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 3 | Stock prédit: -0.7u (-7j restants) → prédit 3u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.9u (-25j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-25j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: -1.8u (-34j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | Stock prédit: -3.3u (-38j restants) → prédit 3u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | Stock prédit: -2.3u (-39j restants) → prédit 4u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -4.1u (-79j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:14:07.683Z*
