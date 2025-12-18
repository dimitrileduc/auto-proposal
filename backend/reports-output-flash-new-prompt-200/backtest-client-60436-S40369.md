# Rapport Backtest - Client LE CELLIER DU BAUDET - épicerie

## Contexte

- **Client** : LE CELLIER DU BAUDET - épicerie (ID: 60436)
- **Commande réelle** : S40369
- **Date commande** : 2025-11-14 15:09:27
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 7,031 input + 2,638 output = 9,669 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 65.0% | 20 produits prédits, 13 corrects |
| **Rappel** | 92.9% | 14 produits réels, 13 détectés |
| **F1-Score** | 76.5% | Score équilibré global |

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
| **wMAPE** | 13.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 15.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RISH01] RISH kombucha BIO - original 330ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB05] REB chips bio - sel de mer 35g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long irrégulier d'environ 50 jours sur le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, la demande de fond est fixée à 2 unités. Étape 2: Aucune donnée historique N-1 n'est disponible pour évaluer la saisonnalité, impact considéré comme nul par défaut. Étape 3: La fréquence est faible (2 commandes en 3 mois) et irrégulière, mais le volume unitaire est strictement identique (2u). Le jour de commande semble être le mardi, alors que nous sommes un jeudi. Étape 4: En l'absence de tendance à la hausse et vu le faible historique, nous restons conservateurs en recommandant le maintien de la quantité habituelle de 2 unités pour couvrir le prochain cycle de consommation longue sans risquer de sur-stockage sur un produit bio de niche (chips 125g). Ce volume de 2u semble être l'unité de conditionnement minimale ou le besoin standard du client pour ce SKU spécifique au cours des derniers mois de service. La confiance est faible car l'échantillon de données est très réduit (N=2). Aucun ajustement n'est fait pour le décalage de jour (jeudi vs mardi) car le volume ne suggère pas une urgence de réapprovisionnement hebdomadaire mais bien un achat de confort ponctuel tous les deux mois environ (dernier achat il y a 30 jours, suivant attendu théoriquement fin novembre). Cependant, pour éviter toute rupture, une commande de 2u est sécurisée dès maintenant si le stock est épuisé prématurément par rapport au cycle de 50 jours initialement identifié entre août et octobre car le stock précédent a été épuisé en 30 jours si la recharge du 14 octobre est symptomatique d'un besoin stabilisé mensuel désormais plutôt que bimestriel (accélération légère). En restant à 2u, on couvre le risque sans inflation de stock périssable inutile. Finalement, la quantité recommandée est de 2 unités, cohérente avec 100% des commandes passées.

</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle longue durée (environ 50 jours), commande le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les deux seules commandes enregistrées indiquent un besoin constant de 2 unités. ÉTAPE 2: Données N-1 absentes, mais le produit (chips bio) ne présente pas de saisonnalité évidente en novembre pour ce volume. ÉTAPE 3: La tendance est extrêmement stable (2u) avec un intervalle de réapprovisionnement long (7 semaines). La demande actuelle intervient 30 jours après la dernière commande, ce qui est légèrement plus fréquent que le cycle précédent. ÉTAPE 4: Compte tenu de la faible fréquence et de la stabilité des volumes, une commande de 2 unités est recommandée pour maintenir le stock de fond sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long irrégulier (environ 50 jours), commandes le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique très limité de deux points de données espacés de 7 semaines (50 jours). Les deux commandes sont identiques (2 unités le mardi), ce qui définit une demande de fond stable mais à rotation très lente pour ce produit premium. Aucune donnée N-1 n'est disponible pour évaluer une saisonnalité de fin d'année. La commande actuelle intervient un jeudi au lieu du mardi habituel, suggérant un besoin ponctuel ou un réapprovisionnement de sécurité. Vu la stabilité parfaite (2u) et le risque de sur-stockage sur un produit à faible rotation, la recommandation reste fixée à 2 unités pour maintenir le stock sans immobilisation inutile de capital.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long irrégulier d'environ 50 jours (7 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les deux commandes récentes sont identiques (2u). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, mais le produit semble stable sur ses apparitions. Étape 3: Le rythme de commande est lent (août puis octobre), suggérant un produit à faible rotation ou de complément. On note un décalage de jour (jeudi vs mardi habituel), ce qui peut indiquer un besoin spécifique ou un réapprovisionnement de sécurité. Étape 4: La demande de fond est strictement de 2 unités. En l'absence de tendance haussière ou de données saisonnières, la recommandation reste conservatrice à 2 unités pour couvrir le cycle suivant sans risque de surstockage majeur sur un produit bio à rotation lente.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (produit nouveau ou inactif)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (absence de données historiques)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune donnée disponible pour identifier des outliers. Étape 2 (Saisonnalité) : Impossible d'évaluer l'impact sans historique N-1 ou récent. Étape 3 (Tendance) : Aucune commande sur les 3 derniers mois suggère un lancement de produit ou un référencement nouveau. Étape 4 (Recommandation) : En l'absence totale d'historique, une approche conservatrice 'Seed Stock' est adoptée. On recommande une unité symbolique (ou un colisage minimum par défaut) pour tester la rotation du produit et initialiser le stock en rayon sans risque de démarque sur ce type de produit périssable (Tartinade).

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 06:46:09: 2u
- 2025-08-26 07:11:31: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: 1.0u (27j restants) → prédit 2u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.2u (-14j restants) → prédit 1u mais non commandé |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Stock prédit: -1.2u (-62j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | Stock prédit: -1.2u (-61j restants) → prédit 2u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: -0.2u (-19j restants) → prédit 1u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | Stock prédit: -1.2u (-61j restants) → prédit 2u mais non commandé |


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
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Stock suffisant: 1.8u (44j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:11:58.459Z*
