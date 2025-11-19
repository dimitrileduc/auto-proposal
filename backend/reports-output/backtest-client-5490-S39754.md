# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S39754
- **Date commande** : 2025-10-16 06:33:00
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 26
- **Tokens**: 42,559 input + 32,536 output = 75,095 total
- **Coût**: $0.6157 (~61.57¢)
- **Coût par produit LLM**: $0.0237


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score équilibré global |

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
| **MAE** | 30.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 53.3% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 62 | 62 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 90 | 93 | 3.0 | 3.2% | ✅ partial | 🤖 LLM |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 75 | 124 | 49.0 | 39.5% | ✅ partial | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 100 | 50 | 50.0 | 100.0% | ✅ partial | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 434 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 180 | 62 | 118.0 | 190.3% | ✅ partial | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 120 | 40 | 80.0 | 200.0% | ✅ partial | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
L'analyse révèle un pattern extrêmement stable : TOUTES les commandes sont de 434 unités exactement. Aucun outlier détecté. Il n'y a ni promotion visible, ni pic isolé, ni correction de stock. Cette uniformité parfaite suggère soit une contrainte logistique (taille de palette standard), soit un contrat d'approvisionnement fixe avec le client B2B.

**ÉTAPE 2: SAISONNALITÉ**
Sur la période juillet-octobre 2025 (4 mois) :
- Juillet : 2 commandes (868u)
- Août : 3 commandes (1302u) 
- Septembre : 5 commandes (2170u) → FORTE HAUSSE
- Octobre : 2 commandes jusqu'au 15/10 (868u)

La fréquence montre une accélération nette en septembre (+67% vs août), ce qui est cohérent avec un produit bio tartinable à base de poivrons : septembre correspond à la récolte des poivrons ET à la rentrée (retour à la consommation normale après la période estivale). Actuellement mi-octobre, nous sommes en sortie de pic saisonnier, avec une décélération déjà observée (2 commandes début octobre vs 5 en septembre).

**ÉTAPE 3: TENDANCE RÉCENTE**
Les 4 dernières commandes (post 04/09) :
- 18/09 : 434u (double commande même jour)
- 18/09 : 434u
- 02/10 : 434u 
- 15/10 : 434u

Intervalle moyen : ~13 jours entre commandes simples. La fréquence diminue légèrement par rapport au pic de septembre (où 3 commandes successives ont eu lieu le 04/09). Volume unitaire : STABLE à 434u. Tendance : LÉGÈRE DÉCÉLÉRATION en fréquence, mais quantité unitaire invariante.

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base de demande : 434 unités (quantité fixe standardisée)
- Ajustement saisonnier : 0% (mi-octobre, sortie de pic septembre, retour à normale)
- Ajustement tendance : 0% (quantité unitaire parfaitement stable, seule la fréquence varie)
- Principe de sécurité conservateur : maintenir la quantité standard

La régularité absolue du volume de 434u indique une contrainte forte (logistique/contractuelle). Modifier cette quantité n'aurait pas de sens métier. La gestion du stock se fait par la fréquence de réapprovisionnement, pas par la variation de volume.


**📅 Analyse Temporelle:**

Fréquence de commande : 
- Intervalle moyen global : ~10-14 jours
- Accélération en septembre : jusqu'à 3 commandes le même jour (04/09) + 2 le 18/09
- Octobre : retour à rythme plus espacé (13 jours entre 02/10 et 15/10)
Pattern : Commandes groupées possibles (doublons/triplons), mais espacement régulier. Saisonnalité nette en septembre avec pic de fréquence.


**📊 Analyse Quantité:**

Stabilité parfaite : 100% des commandes = 434 unités exactement (12/12 commandes identiques). Aucune variation, aucun outlier. Volume mensuel variable uniquement via la fréquence : juillet 868u, août 1302u, septembre 2170u (+67%), octobre ~868u projeté. Cette uniformité stricte suggère une contrainte standardisée (palette complète, MOQ contractuel, ou format d'emballage B2B imposé).


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
Les commandes montrent une régularité remarquable. Sur 17 commandes:
- 15 commandes de 434u (quantité standard récurrente)
- 2 commandes de 868u (exactement 2x434u, le 04/09/2025 et le 03/07/2025)

Les commandes de 868u semblent être des doubles commandes ponctuelles (probablement pour reconstituer un stock ou répondre à une demande groupée), mais ne représentent pas la demande normale. Elles sont isolées et ne créent pas de tendance.

La demande de fond réelle = 434u par commande (88% des commandes).

ÉTAPE 2 - SAISONNALITÉ:
Analyse par période:
- Juillet 2025: 4 commandes (dont 1 double) en 15 jours → période active
- Août 2025: 5 commandes le même jour (07/08) → reconstitution de stock après période de vacances probable
- Septembre 2025: 4 commandes (dont 1 double) sur le mois → retour à la normale
- Octobre 2025: 3 commandes déjà sur les 15 premiers jours → légère accélération

Le produit (tartinade mangue BIO) pourrait avoir une saisonnalité estivale, mais les données récentes (septembre-octobre) montrent que la demande reste soutenue même en automne. Nous sommes à mi-octobre, pas en période de pic saisonnier évident, mais la demande reste stable.

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 4 dernières commandes (octobre + fin septembre):
- 15/10: 434u
- 02/10: 434u  
- 01/10: 434u
- 18/09: 434u

Intervalle entre commandes récentes: 1 jour, 1 jour, puis 14 jours → fréquence en accélération nette début octobre.

Comparé aux périodes antérieures, la fréquence s'est accélérée mais les quantités unitaires restent identiques à 434u. Pas d'augmentation de la taille des commandes, juste une fréquence plus élevée (besoin plus régulier).

Tendance: STABLE en quantité, mais HAUSSE de la fréquence (signal de demande soutenue, pas de sur-dimensionnement nécessaire).

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base demande de fond: 434u (valeur ultra-récurrente)
- Ajustement saisonnier: 0% (octobre pas en pic, demande normale)
- Ajustement tendance: 0% (quantité stable, seule la fréquence augmente)
- Principe de précaution: Rester sur 434u évite le sur-stockage

La régularité extrême des commandes (434u = quantum logistique probable lié au conditionnement) et l'absence de variation dans les quantités récentes indiquent que 434u est la quantité optimale de réapprovisionnement.


**📅 Analyse Temporelle:**

L'analyse temporelle révèle une évolution intéressante:
- Juillet: commandes espacées de 15 jours en moyenne
- Août: 5 commandes groupées le 07/08 (probable réassort post-congés)
- Septembre: retour à un rythme de ~14 jours entre commandes
- Octobre: forte accélération avec 3 commandes en 15 jours (1-2 jours d'écart début octobre, puis 13 jours)

La fréquence de commande a augmenté récemment (passage de ~14 jours à 1-13 jours), ce qui indique une consommation/demande plus rapide, MAIS les quantités par commande restent fixes à 434u. Cette accélération de la fréquence sans augmentation du quantum suggère une gestion en flux tendu plutôt qu'un besoin d'augmenter la taille des commandes.


**📊 Analyse Quantité:**

Distribution des quantités sur 17 commandes:
- 434u: 15 occurrences (88.2%) → Quantum standard très stable
- 868u: 2 occurrences (11.8%) → Exactement 2x434u, commandes exceptionnelles

La quantité 434u est clairement le module de commande standard (probablement lié au conditionnement palette/carton). Les 868u sont des doubles commandes ponctuelles isolées (04/09 et 03/07).

Moyenne brute: 485u
Médiane: 434u
Mode: 434u (dominant)

La médiane et le mode convergent vers 434u, confirmant que c'est la quantité de référence à utiliser. Aucune évolution de la quantité unitaire n'est observée dans le temps, même récemment.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 62u vs Médiane: undefinedu (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
Les commandes sont systématiquement passées en multiples de 31 unités (conditionnement standard). J'observe:
- 7 août 2025: Pic massif de 372u sur une seule journée (6 commandes rapprochées) → OUTLIER probable (promotion, réassort exceptionnel)
- 4 septembre 2025: 279u (4 commandes) → OUTLIER également
- 18 septembre: 155u (3 commandes) → Entre les deux

En excluant ces pics exceptionnels, la demande de fond régulière oscille entre 31-93u par période de commande (moyenne ~62u quand normalisée).

ÉTAPE 2 - SAISONNALITÉ:
- Juillet: 155u total (démarrage période estivale)
- Août: 372u → PIC ESTIVAL MASSIF (ananas = produit d'été)
- Septembre: 434u → Maintien élevé post-été
- Octobre (début): 186u déjà commandés → DÉCÉLÉRATION NETTE

→ L'ananas bio est clairement un produit estival. Nous sommes mi-octobre, donc APRÈS la haute saison. La demande décroît naturellement vers l'automne/hiver.

ÉTAPE 3 - TENDANCE RÉCENTE:
Analyse des 4 dernières périodes de commande:
- 15 oct: 62u (2 commandes)
- 2 oct: 93u (2 commandes)
- 1 oct: 62u (2 commandes)
- 18 sept: 155u (3 commandes)

→ BAISSE PROGRESSIVE très nette depuis septembre. La fréquence diminue (14 jours entre sept et oct, puis stabilisation autour de commandes bihebdomadaires). Volume par commande stable autour de 31-62u.

ÉTAPE 4 - SYNTHÈSE ET RECOMMANDATION:
- Base de demande nettoyée: ~62u (hors outliers promotionnels)
- Ajustement saisonnier: -15% (sortie de saison estivale pour produit ananas)
- Ajustement tendance: -10% (décélération confirmée en octobre)
- Calcul: 62u × 0.85 × 0.90 = 47u

Cependant, le conditionnement standard étant de 31u, et considérant la volatilité B2B:
- 31u = risque de rupture si commande double
- 62u = sécurise 1-2 semaines selon rythme actuel
- 93u = sur-stockage probable en période basse

RECOMMANDATION FINALE: 62 unités (2×31u)
Rationnelle: Compromis conservateur qui couvre la demande bi-hebdomadaire actuelle sans sur-stocker un produit en déclin saisonnier.


**📅 Analyse Temporelle:**

Fréquence de commande:
- Juillet-Août: Commandes toutes les 2-3 semaines avec pics concentrés (7 août)
- Septembre: Accélération (commandes le 4 et le 18, soit ~14 jours)
- Octobre: Maintien du rythme bihebdomadaire (1er, 2, et 15 octobre)

Pattern détecté: Le client commande par vagues groupées (plusieurs commandes le même jour/minute) suggérant un système de commande par lots ou multi-sites. Intervalle moyen actuel: 13-14 jours entre périodes de commande.


**📊 Analyse Quantité:**

Distribution des quantités (par commande individuelle):
- 31u: 17 occurrences (71% des commandes) → STANDARD
- 62u: 4 occurrences (17%) → DOUBLE
- 93u: 5 occurrences (21%) → TRIPLE
- 124u: 1 occurrence (4%) → EXCEPTIONNEL

Volume mensuel:
- Juillet: 155u (2 périodes)
- Août: 372u (OUTLIER - pic estival)
- Septembre: 434u (maintien post-été)
- Octobre (partiel): 186u en 15 jours → projection ~240u/mois SI maintien, mais tendance baissière observée

Moyenne mobile 30j (hors outliers août): ~150-180u/mois soit ~37-45u par commande bihebdomadaire en période normale actuelle.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>4. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 90u vs Médiane: undefinedu (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 90u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 3u (3.2%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
**ÉTAPE 1: DE-EVENTING**
Analyse des volumes par période:
- Juil 2025: 62u (2 commandes de 31u)
- Août 2025: 186u (5 commandes: 31+31+31+62+31)
- Sept 2025: 341u (5 commandes: 93+93+93+62+93) → ÉVÉNEMENT DÉTECTÉ
- Sept mi-mois: 155u (3 commandes: 31+31+93)
- Oct 2025: 62u (2 commandes de 31u chacune)

Le pic de début septembre (4 commandes le même jour 04/09 totalisant 341u) est clairement anormal et ressemble à un stockage préventif ou une promotion. Les commandes groupées d'un même jour sont typiques d'achats B2B consolidés.

**Demande de fond réelle (hors pic sept):**
- Juillet: ~62u/mois
- Août: ~186u/mois
- Septembre (nettoyé): ~155u sur mi-mois = ~310u/mois projeté
- Octobre (partiel): 62u à mi-mois

**ÉTAPE 2: SAISONNALITÉ**
Produit: Pesto à l'Ail des Ours BIO - L'ail des ours est une plante de printemps (récolte mars-mai), mais le produit transformé reste disponible toute l'année.

Observation temporelle:
- Juillet-Août: Demande modérée (62-186u/mois)
- Septembre (hors événement): Hausse notable (~155u mi-mois)
- Octobre (mi-mois): Retour à niveau modéré (62u)

**Période actuelle (mi-octobre):** Nous sommes en automne, possiblement en début de saison haute pour les produits gastronomiques (préparation fêtes de fin d'année). Cependant, le produit "ail des ours" est plus typique du printemps. Les données montrent un retour à la normale après le pic de septembre.

**ÉTAPE 3: TENDANCE RÉCENTE**
Dernières commandes (post-événement):
- 18/09: 155u (31+31+93) 
- 15/10: 62u (31+31)

Intervalle: ~27 jours entre commandes
Volume: Baisse de 155u → 62u (-60%)

**Analyse:** Après le pic anormal de septembre, on observe un retour à un niveau de commande plus bas, similaire à juillet. La tendance récente montre une stabilisation/légère baisse vers la demande de fond.

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base (demande de fond nettoyée): ~80-100u par cycle de commande (basé sur pattern normal)
- Ajustement saisonnier: Légèrement positif (+10%) car entrée dans période automnale (produits gastronomiques pour les fêtes)
- Ajustement tendance: Neutre/légèrement négatif (retour à la normale post-événement)
- Principe de prudence: Rester conservateur

**Calcul:** 
Moyenne des commandes normales (hors pic 04/09): ~80u
Avec ajustement saisonnier léger: 80u × 1.10 = 88u
Arrondi sécuritaire: **90u**

Cette quantité permet de couvrir la demande standard sans surinvestir, tout en tenant compte d'une légère hausse automnale potentielle.

**📅 Analyse Temporelle:**
L'historique montre un cycle de commande irrégulier mais avec des patterns identifiables:
- Fréquence moyenne: ~15-30 jours entre les vagues de commandes
- Commandes souvent groupées le même jour (multiple de 31u: 31, 62, 93), typique du B2B avec conditionnement standard
- Pic anormal le 04/09 avec 4 commandes le même jour (341u total) = événement exceptionnel
- Retour à la normale depuis mi-septembre avec intervalles de ~27 jours
- Pattern stable hors événements: commandes de 31-93u par vague

**📊 Analyse Quantité:**
Distribution des quantités unitaires:
- 31u: Commande la plus fréquente (12 occurrences) = unité de base
- 62u: 2× la base (2 occurrences) = double commande
- 93u: 3× la base (5 occurrences, dont 4 le même jour anormal)

Volumes mensuels (nettoyés):
- Juillet: 62u
- Août: 186u
- Septembre (hors pic 04/09): 155u
- Octobre (projeté sur mois complet): ~120-140u

La quantité de 31u représente clairement l'unité de commande standard (probablement un carton/palette). Les multiples (62u, 93u) correspondent à des commandes groupées. Le pic de 341u en une journée est anormal et doit être exclu de l'analyse de fond.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [PF3349] LD FR TARTINADE BIO AVOCAT 180G</strong> - LLM: 75u vs Médiane: undefinedu (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 75u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 49u (39.5%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**

Analyse des quantités: 31u, 62u, 93u, 93u, 31u, 93u, 62u, 93u, 62u

Quantités observées:
- 31u: 2 occurrences (22%)
- 62u: 3 occurrences (33%)
- 93u: 4 occurrences (44%)

Moyenne brute: 68.9u
Pas d'outliers évidents détectés. Les quantités semblent correspondre à des paliers standard (probablement liés aux unités de conditionnement B2B: 31u = 1 palette, 62u = 2 palettes, 93u = 3 palettes).
Toutes les commandes semblent refléter une demande réelle sans événement promotionnel exceptionnel.

**ÉTAPE 2: SAISONNALITÉ**

Répartition chronologique:
- Août 2025: 1 commande (62u)
- Septembre 2025: 3 commandes (186u total sur période concentrée mi-septembre)
- Octobre 2025: 4 commandes (279u sur 2 semaines)

**Saisonnalité détectée**: Forte accélération de fin d'été vers automne. Produit "Tartinade Avocat Bio" typiquement plus consommé en période de rentrée/automne (retour aux habitudes alimentaires saines, apéritifs d'automne).
Période actuelle (mi-octobre): **PÉRIODE HAUTE**

**ÉTAPE 3: TENDANCE RÉCENTE**

Dernières 4 commandes (octobre): 31u, 62u, 93u, 93u = 279u
Précédentes 4 commandes (sept-août): 31u, 93u, 62u, 93u = 279u

Volume stable MAIS fréquence accélérée:
- Août-Sept (40 jours): 5 commandes
- Oct seul (15 jours): 4 commandes
→ Fréquence multipliée par ~2.5

Dernière commande (15/10): 31u - plus faible que moyenne, possiblement un réassort partiel/urgence.
Avant cela: 62u, 93u, 93u = forte demande continue.

**Tendance**: Accélération nette de la rotation (+40% fréquence), mais dernière commande conservatrice (31u).

**ÉTAPE 4: RECOMMANDATION FINALE**

Base de demande nettoyée: 69u (moyenne sans outlier)
Ajustement saisonnier: +10% (période haute automne)
→ 69u × 1.10 = 76u

Ajustement tendance: La fréquence accélère mais la dernière commande (31u) suggère prudence du client.
→ Maintien à 75u (arrondi commercial)

**Logique conservatrice B2B**: 
- 75u représente un palier intermédiaire prudent
- Correspond à ~2.4 palettes (si conditionnement 31u/palette)
- Évite sur-stockage d'un produit BIO frais avec DLC limitée
- Permet réassort rapide si tendance se confirme


**📅 Analyse Temporelle:**

La fréquence de commande s'est fortement accélérée: 
- Août: 1 commande
- Septembre: 3 commandes concentrées mi-mois (11-18 sept)
- Octobre: 4 commandes en 15 jours

Intervalles entre commandes:
- 28 jours (août→sept)
- 14 jours en moyenne en septembre
- ~4-5 jours en octobre (accélération x3)

Cette accélération indique soit une hausse de consommation finale, soit un changement de stratégie d'approvisionnement vers du flux tendu. La proximité de la date actuelle (16/10) avec la dernière commande (15/10, hier) suggère un besoin imminent peu probable, SAUF si la commande de 31u était un dépannage temporaire.


**📊 Analyse Quantité:**

Distribution des quantités: 3 paliers nets (31u, 62u, 93u) suggérant un conditionnement standardisé B2B.

- Quantité modale: 93u (44% des commandes) = niveau "standard plein"
- Quantité médiane: 62u = niveau intermédiaire
- Quantité minimale: 31u (22%) = réassort partiel/urgence

Les commandes de 31u semblent être des ajustements tactiques, tandis que 62-93u représentent la demande structurelle. La concentration récente de commandes moyennes-hautes (62u, 93u, 93u) avant un 31u suggère une normalisation vers 60-90u avec ajustements ponctuels.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>6. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: undefinedu (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)**
- Analyse de l'historique: TOUTES les commandes sont à 25 unités exactement
- Aucun pic promotionnel détecté (pas de quantités > 50u = 2x la moyenne)
- Aucune correction de stock visible
- Le 2025-09-04 montre 2 commandes le même jour (2x25u = 50u total) mais ce sont probablement 2 clients différents ou une commande scindée
- **Demande de fond réelle = 25 unités par commande de manière très stable**

**ÉTAPE 2: SAISONNALITÉ**
- Produit: "LD BBQ BIO 300G" = Sauce BBQ → FORTE saisonnalité attendue (pic été, baisse automne/hiver)
- Distribution temporelle des commandes:
  * Juillet 2025: 1 commande (été = saison haute BBQ)
  * Août 2025: 1 commande (été = saison haute)
  * Septembre 2025: 3 commandes dont 2 le même jour (fin d'été/début automne)
  * Octobre 2025: 1 commande (automne = hors saison BBQ)
- **Date actuelle: 16 octobre 2025 = PÉRIODE BASSE pour produits BBQ**
- La fréquence se ralentit: 28 jours entre la dernière commande (15 oct) et celle d'avant (18 sept)
- Ajustement saisonnier: -10 à -15% justifié mais la demande reste à 25u

**ÉTAPE 3: TENDANCE RÉCENTE**
- 4 dernières commandes: 25u / 25u / 25u / 25u (25 oct, 18 sept, 4 sept x2)
- Fréquence d'achat:
  * Juil→Août: 20 jours
  * Août→Sept: 28 jours
  * Sept→Oct: 27 jours (entre le 18 sept et 15 oct)
- **Volume stable mais espacement croissant = demande légèrement ralentie**
- Cependant, les quantités restent constantes à 25u → le client maintient son besoin unitaire
- Tendance: STABLE en volume, légère baisse en fréquence (cohérent avec sortie de saison BBQ)

**ÉTAPE 4: RECOMMANDATION FINALE**
- Base demande de fond: 25 unités (100% des commandes historiques)
- Ajustement saisonnier: Période basse BBQ mais quantité commandée reste stable
- Ajustement tendance: Pas de changement de volume unitaire
- Principe de sécurité: En B2B, les commandes sont souvent standardisées par palette/carton
- **Les 25 unités semblent être une unité de commande standard (MOQ ou format logistique)**

→ Recommandation: **25 unités** (maintenir la quantité standard observée)


**📅 Analyse Temporelle:**

Fréquence de commande: environ tous les 25-30 jours. Historique sur 3 mois (juillet à octobre 2025) avec 6 commandes au total. L'espacement s'allonge légèrement en automne (20j → 28j → 27j), cohérent avec la baisse saisonnière des produits BBQ. Dernière commande il y a 1 jour seulement (15 octobre), donc réapprovisionnement imminent peu probable, mais pour anticiper la prochaine commande dans 25-30 jours.


**📊 Analyse Quantité:**

Stabilité parfaite: 100% des commandes à 25 unités exactement. Aucune variation détectée, ce qui suggère fortement une contrainte logistique (MOQ, conditionnement palette, ou politique d'achat client). Moyenne = 25u, médiane = 25u, écart-type = 0. Cette régularité extrême indique un besoin standardisé plutôt qu'une demande fluctuante naturelle.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>7. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 100u vs Médiane: undefinedu (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 50u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

**ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers)**

Analyse des commandes: On observe un pattern très régulier de commandes groupées par DATE plutôt que des commandes isolées:
- 2025-10-15: 25u (1 commande)
- 2025-10-02: 50u (1 commande)
- 2025-10-01: 50u (2x25u même jour)
- 2025-09-18: 125u (4 commandes en quelques minutes: 25+50+25+25)
- 2025-09-04: 125u (4 commandes en quelques minutes: 25+50+25+25)
- 2025-08-07: 125u (5x25u en quelques minutes)
- 2025-07-18: 50u (2x25u)
- 2025-07-03: 100u (2x50u)

Pattern identifié: Les commandes multiples le même jour sont clairement des commandes B2B groupées (plusieurs clients ou plusieurs références d'un même client). Il n'y a PAS d'outliers promotionnels à éliminer - c'est le pattern normal d'achat.

Demande de fond réelle par cycle de commande:
- Octobre (partiel): 125u en 15 jours
- Septembre: 125u en 14 jours (du 04 au 18)
- Août: 125u sur 1 jour
- Juillet: 150u sur 15 jours

**ÉTAPE 2 - SAISONNALITÉ**

Analyse temporelle:
- Juillet: 150u (été - saison HAUTE pour aioli/pesto)
- Août: 125u (été - saison HAUTE)
- Septembre: 125u (fin d'été - transition)
- Octobre: 125u projeté (automne - saison MOYENNE/BASSE)

Saisonnalité détectée: Produit à dominante estivale (aioli/pesto = sauces froides). Nous sommes mi-octobre = sortie de la saison haute. Les volumes restent cependant soutenus autour de 125u par cycle de ~14 jours.

Ajustement saisonnier: La demande se maintient bien malgré l'automne, suggérant une base solide de clients fidèles.

**ÉTAPE 3 - TENDANCE RÉCENTE**

Comparaison des 4 derniers cycles:
- Cycle 1 (07-18 juil): 50u
- Cycle 2 (03-18 août): 125u 
- Cycle 3 (04-18 sept): 125u
- Cycle 4 (01-15 oct): 125u (en cours)

Fréquence: Commandes tous les ~14 jours de manière très régulière depuis septembre.

Tendance: **STABLE** à 125u par cycle depuis août. La demande s'est stabilisée après le pic de mise en place en juillet.

Coefficient de tendance: 0% (stabilité confirmée)

**ÉTAPE 4 - RECOMMANDATION FINALE**

Calcul:
- Demande de fond: 125u par cycle de 14 jours
- Fréquence observée: 1 cycle tous les 14 jours
- Ajustement saisonnier: -10% (sortie saison haute) = 112u
- Ajustement tendance: 0% (stabilité)
- Buffer sécurité conservateur: -10% pour éviter surstock = 100u

**Quantité recommandée: 100 unités**

Rationnelle: 
- Respecte le pattern stable de 125u/14j observé
- Applique une légère prudence (-20% net) car nous entrons en basse saison
- Évite le sur-stockage d'un produit BIO avec DLC limitée
- Permet de couvrir ~11 jours de demande au rythme actuel
- En cas de commande groupée imprévue, un réapprovisionnement rapide reste possible


**📅 Analyse Temporelle:**
Pattern très structuré: commandes groupées tous les 14 jours en moyenne. Cycles réguliers depuis septembre (04 sept, 18 sept, 01 oct, 15 oct). Intervalle stable = 14±2 jours. Prochaine commande attendue vers le 29 octobre.

**📊 Analyse Quantité:**
Volume stable à 125u par cycle depuis août 2025. Commandes fractionnées en multiples de 25u (format B2B standard). Pas d'outliers détectés - les pics correspondent à des commandes groupées normales. Moyenne mobile sur 3 mois: 125u/cycle.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: undefinedu (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
**ÉTAPE 1 - DE-EVENTING:**
Aucun outlier détecté. Toutes les commandes sont strictement identiques à 434 unités. Aucune promotion, pic isolé ou correction de stock visible. La demande est remarquablement stable et standardisée, probablement liée à des contraintes logistiques (palettes complètes, conditionnement standard).

**ÉTAPE 2 - SAISONNALITÉ:**
Période analysée: juillet à octobre 2025. Pour une tartinade tomate BIO, on s'attendrait à une saisonnalité avec pic en été (BBQ, apéros estivaux). Cependant, les données montrent:
- Juillet: 1 commande (434u)
- Août: 4 commandes en 1 jour (1736u au total) - concentration inhabituelle
- Septembre: 4 commandes sur 2 périodes (1736u)
- Octobre: 2 commandes début mois (868u sur 14 jours analysés)

Nous sommes mi-octobre, théoriquement en sortie de saison haute. La fréquence semble se normaliser après le pic concentré d'août. La tartinade tomate reste un produit de fond de gamme BIO avec demande relativement constante en B2B (restauration, magasins bio).

**ÉTAPE 3 - TENDANCE RÉCENTE:**
Les 4 dernières commandes (septembre-octobre) montrent:
- 19/09: 434u
- 18/09: 434u  
- 02/10: 434u
- 01/10: 434u

Intervalles: ~13-14 jours entre les paires de commandes rapprochées. Pattern stable. Fréquence: environ 2 commandes tous les 15 jours = ~870u par période de 15 jours, soit ~58u/jour.

Aucune tendance haussière ou baissière détectable. Stabilité parfaite des quantités unitaires.

**ÉTAPE 4 - RECOMMANDATION:**
- **Base de demande:** 434 unités (standard absolu)
- **Ajustement saisonnier:** 0% (mi-octobre, stabilisation post-saison)
- **Ajustement tendance:** 0% (parfaitement stable)
- **Sécurité:** Pas de sur-stockage nécessaire vu la prévisibilité extrême

La commande suivante devrait intervenir dans ~7-14 jours. Recommandation: **434 unités** (quantité standard optimale).

**📅 Analyse Temporelle:**
Fréquence observée: commandes groupées par paires rapprochées (24-48h d'intervalle) tous les 12-15 jours environ. Pattern récurrent depuis juillet. Dernière commande: 02/10 (il y a 14 jours). Nous sommes dans la fenêtre normale de réapprovisionnement. Rythme stable de ~60u/jour en moyenne.

**📊 Analyse Quantité:**
Stabilité absolue: 100% des commandes = 434 unités exactement. Aucune variation détectée sur 11 commandes. Cette constance suggère un conditionnement logistique standardisé (palette complète, multiple de cartons) plutôt qu'une demande variable. Quantité de référence claire: 434u. Coefficient de variation: 0%.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>9. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 180u vs Médiane: undefinedu (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 180u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 118u (190.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

## ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)

Analyse des commandes:
- Je remarque un pattern récurrent de commandes groupées aux mêmes dates (commandes passées à quelques secondes/minutes d'intervalle)
- 03/07/2025: 31u (commande isolée)
- 18/07/2025: 62+31+62+31 = 186u (groupée en quelques minutes)
- 07/08/2025: 31+62+31+31+62+31+62+31 = 341u (groupée sur ~7 minutes) → OUTLIER MAJEUR
- 04/09/2025: 62+62+31+31 = 186u (groupée)
- 18/09/2025: 31+62+31+31 = 155u (groupée)
- 01/10/2025: 31+62 = 93u (groupée)
- 02/10/2025: 62+62 = 124u (groupée)

La commande du 07/08 (341u) est clairement un outlier (presque 2x les autres dates groupées). Probablement un stockage préventif ou une promotion.

**Demande de fond réelle (hors 07/08):**
- Juillet: 186u sur 1 date
- Septembre: 186u + 155u sur 2 dates = 341u en 14 jours
- Octobre: 93u + 124u = 217u sur 2 jours (début octobre)

Les commandes groupées semblent être la norme (système de commande client B2B), avec des totaux journaliers entre 93u et 186u typiquement.

## ÉTAPE 2: SAISONNALITÉ

Analyse temporelle:
- Juillet (été): 186u
- Août (été): 341u (outlier) → Si normalisé ~186u
- Septembre (rentrée): 341u total / 14 jours entre 2 commandes
- Octobre (automne): 217u sur 2 jours début octobre, nous sommes mi-octobre

Le produit est une tartinade BIO végétale (pois), potentiellement plus consommée:
- En rentrée scolaire (septembre/octobre)
- Période pré-hivernale (boost immunitaire, alimentation saine)

**Période actuelle (mi-octobre):** Nous sommes 14 jours après la dernière commande (02/10), en pleine saison automnale favorable pour ce type de produit bio.

## ÉTAPE 3: TENDANCE RÉCENTE

Comparaison des 4 dernières dates de commande:
- 04/09: 186u (intervalle de 28 jours depuis 07/08)
- 18/09: 155u (intervalle de 14 jours) → légère baisse
- 01/10: 93u (intervalle de 13 jours) → baisse significative
- 02/10: 124u (1 jour après) → mais si on groupe 01+02/10 = 217u

Si on groupe 01-02/10 comme une seule commande: 217u sur 13 jours d'intervalle.

**Tendance:** La fréquence s'accélère (28j → 14j → 13j), ce qui indique une demande soutenue.
Les volumes par période restent stables (155-217u) une fois qu'on ignore l'outlier d'août.

**Coefficient de tendance:** Stable à légèrement haussier (+5-10%) grâce à la fréquence accrue.

## ÉTAPE 4: RECOMMANDATION FINALE

**Base de demande de fond:** 155-186u par cycle de commande (hors outlier)

**Ajustement saisonnier:** +5% (période favorable automne/rentrée pour produits bio)

**Ajustement tendance:** +5% (accélération de la fréquence de commande)

**Calcul:**
- Base moyenne: (155+186+217)/3 ≈ 186u
- Ajustement total: 186u × 1.05 × 1.05 ≈ 205u

**Principe de conservatisme en B2B:** 
Étant donné que nous sommes 14 jours après la dernière commande et que les cycles récents sont de 13-14 jours, une nouvelle commande est imminente. Cependant, pour éviter le sur-stockage, je recommande une quantité proche de la médiane haute observée.

**RECOMMANDATION: 180u**
- C'est dans la fourchette haute des commandes normales (hors outlier)
- Couvre la demande anticipée sans sur-stocker
- Approche conservative adaptée au contexte B2B


**📅 Analyse Temporelle:**

Les commandes sont groupées par dates avec intervalles variables: 15 jours (juillet), 28 jours (juillet-août), 28 jours (août-sept), 14 jours (sept), 13 jours (sept-oct). La fréquence s'accélère récemment (28j → 14j → 13j), passant d'un cycle mensuel à bi-mensuel. Nous sommes à 14 jours depuis la dernière commande, dans la fenêtre attendue pour un nouveau réapprovisionnement. Pattern stable avec accélération récente.


**📊 Analyse Quantité:**

Les quantités journalières varient entre 93u et 217u (hors outlier du 07/08 à 341u). Les commandes sont systématiquement groupées en multiples de 31u et 62u passées à quelques minutes d'intervalle (pattern B2B typique). Volume moyen par cycle: 186u (juillet), 186u (sept/04), 155u (sept/18), 217u (oct/01-02). Demande de fond stable autour de 155-186u par commande groupée. L'outlier d'août (341u) doit être écarté de l'analyse baseline.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>10. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 120u vs Médiane: undefinedu (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 120u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 80u (200.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
J'observe un pattern très clair : des commandes groupées de 40u qui arrivent par vagues de 2-3 commandes simultanées (ou quasi-simultanées le même jour).
- 2025-10-01: 1×40u (40u total)
- 2025-09-18: 3×40u (120u total) - commandes espacées de quelques secondes
- 2025-09-04: 3×40u (120u total) - commandes espacées de quelques secondes
- 2025-08-07: 6×40u (240u total dont 1×80u) - série exceptionnelle
- 2025-07-18: 2×40u (80u total)
- 2025-07-03: 1×40u + 1×80u (120u total)

La série du 07/08 avec 240u est clairement un outlier (probable promotion ou stockage préventif). En excluant cette date, les volumes typiques par période de commande oscillent entre 40u et 120u.

Demande de fond réelle = 80-120u par cycle de commande (environ toutes les 2 semaines).

ÉTAPE 2 - SAISONNALITÉ:
Analyse chronologique:
- Juillet (début été): 2 commandes, volumes 120u et 80u
- Août: 1 commande anormale de 240u (outlier)
- Septembre: 2 commandes de 120u chacune
- Octobre (mi-automne, date actuelle): 1 commande de 40u seulement

Le produit est une vinaigrette Caesar BIO - produit d'assaisonnement avec potentiel saisonnier estival (salades). On observe effectivement des volumes plus élevés en été (juillet-septembre) et un ralentissement début octobre.

Position actuelle: Mi-octobre = sortie de la période haute estivale, entrée en période basse automnale.

ÉTAPE 3 - TENDANCE RÉCENTE:
4 dernières périodes de commande:
1. 2025-10-01: 40u (très faible)
2. 2025-09-18: 120u
3. 2025-09-04: 120u
4. 2025-08-07: 240u (outlier exclu)

En excluant l'outlier d'août, je compare:
- Septembre (2 commandes): 120u par cycle
- Octobre (1 commande récente): seulement 40u

Tendance: BAISSE MARQUÉE sur la dernière commande (-67% vs moyenne septembre), cohérente avec la fin de saison estivale. Cependant, 40u semble exceptionnellement bas - possiblement une commande partielle ou test.

ÉTAPE 4 - RECOMMANDATION FINALE:
Base de calcul:
- Demande de fond (hors outliers): 80-120u par cycle de ~14 jours
- Ajustement saisonnier: -20% (sortie période estivale, mi-octobre)
- Ajustement tendance: La dernière commande à 40u semble trop basse et non représentative du pattern établi

Calcul: 
- Volume moyen normalisé: 100u
- Ajustement saisonnier automne: 100u × 0.80 = 80u
- Marge de sécurité conservative (+50% pour éviter rupture): 80u × 1.5 = 120u

La recommandation de 120u permet:
✓ De couvrir la demande probable sur 2-3 semaines
✓ D'intégrer le ralentissement saisonnier
✓ De maintenir une marge de sécurité sans sur-stocker
✓ De rester aligné avec les volumes commandés en septembre


**📅 Analyse Temporelle:**

Pattern de commande identifié: Cycles réguliers de ~14 jours avec des commandes groupées multiples le même jour (système de commandes par palettes de 40u).

Intervalles entre périodes de commande:
- Oct 01 ← Sept 18: 13 jours
- Sept 18 ← Sept 04: 14 jours  
- Sept 04 ← Août 07: 28 jours
- Août 07 ← Juil 18: 20 jours
- Juil 18 ← Juil 03: 15 jours

Moyenne: ~18 jours entre périodes de commande. La fréquence s'est accélérée récemment (septembre-octobre: 13-14 jours), suggérant une rotation plus rapide malgré les volumes individuels variables.

Depuis la dernière commande (01/10), nous sommes à J+15, donc dans la fenêtre normale de réapprovisionnement.


**📊 Analyse Quantité:**

Analyse des volumes par période de commande (agrégés par jour):
- 2025-10-01: 40u (très faible, inhabituel)
- 2025-09-18: 120u (3×40u - volume standard)
- 2025-09-04: 120u (3×40u - volume standard)
- 2025-08-07: 240u (6 commandes dont 1×80u - OUTLIER probable promo)
- 2025-07-18: 80u (2×40u)
- 2025-07-03: 120u (1×40u + 1×80u)

Volumes normalisés (hors outlier août):
- Minimum: 40u (dernière commande, possiblement partielle)
- Maximum normal: 120u
- Médiane: 120u
- Mode: 40u (unité de base, commandée par multiples)

Insight clé: Le système fonctionne par palettes de 40u. Les commandes typiques sont de 2-3 palettes (80-120u). La dernière commande à 1 palette (40u) est atypique et ne reflète probablement pas la demande complète du cycle.


**📈 Tendance détectée:** ✅ Oui

</details>




---

## False Positives (16)

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
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | Stock prédit: 31.0u (8j restants) → prédit 31u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | Stock prédit: 31.0u (11j restants) → prédit 31u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 50 | Stock prédit: 25.0u (1j restants) → prédit 50u mais non commandé |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | Stock prédit: 434.0u (11j restants) → prédit 434u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | Stock prédit: 0.0u (0j restants) → prédit 434u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -19.2u (-4j restants) → prédit 40u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-17j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 1433 | Stock prédit: -5125.0u (-18j restants) → prédit 1433u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 624 | Stock prédit: -2150.0u (-18j restants) → prédit 624u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 400 | Stock prédit: -1385.0u (-18j restants) → prédit 400u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 315 | Stock prédit: -1084.0u (-18j restants) → prédit 315u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 177 | Stock prédit: -611.0u (-18j restants) → prédit 177u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 408 | Stock prédit: -1395.0u (-17j restants) → prédit 408u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: -16.7u (-1j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: -240.8u (-20j restants) → prédit 248u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: -575.4u (-39j restants) → prédit 434u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:27:30.537Z*
