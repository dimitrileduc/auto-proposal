# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 12
- **Tokens**: 19,985 input + 13,993 output = 33,978 total
- **Coût**: $0.2699 (~26.99¢)
- **Coût par produit LLM**: $0.0225


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 22.50 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 19.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (8)

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
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 240 | 192 | 48.0 | 25.0% | ✅ partial | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 144 | 108 | 36.0 | 33.3% | ✅ partial | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 240u vs Médiane: undefinedu (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 48u (25.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
**ÉTAPE 1 - DE-EVENTING:**
En analysant les données, j'identifie plusieurs outliers:
- 2025-07-11: TROIS commandes le même jour (96u x3 = 288u) = anomalie de correction stock
- 2025-09-30: 384u (4x la moyenne) = pic promotionnel ou stockage préventif
- Les commandes de 288u (2025-10-09, 2025-07-16, 2025-06-19) semblent être des commandes groupées normales

Demande de fond réelle après nettoyage: majoritairement des commandes de 96u (base) et 192-288u (commandes groupées standard).

**ÉTAPE 2 - SAISONNALITÉ:**
Vol-au-vent en bocal = produit apéritif/traiteur:
- Juillet: activité élevée (été, apéritifs estivaux) - 6 commandes dont 288u
- Août-Sept: activité soutenue mais plus espacée
- Oct: forte accélération visible (3 commandes en 14 jours: 384u + 192u + 288u)

Nous sommes mi-octobre = DÉBUT DE SAISON HAUTE (fêtes de fin d'année approchent, période traiteur). La demande s'intensifie nettement depuis fin septembre.

**ÉTAPE 3 - TENDANCE RÉCENTE:**
Les 4 dernières commandes (depuis 2025-09-16):
- 2025-10-09: 288u
- 2025-10-07: 192u
- 2025-09-30: 384u (outlier promo)
- 2025-09-23: 96u

Fréquence: nettement accélérée (commandes tous les 2-7 jours vs 7-14 jours avant)
Volume moyen (hors outlier 384u): 192u
Tendance: **HAUSSE SIGNIFICATIVE** en fréquence (+50%) et volume moyen (passage de 96u à 192-288u).

**ÉTAPE 4 - RECOMMANDATION FINALE:**
- Base de fond: 96-192u (demande récurrente nettoyée)
- Ajustement saisonnier: +30% (entrée période haute pré-fêtes)
- Ajustement tendance: +25% (accélération nette dernières semaines)
- Calcul: base 160u × 1.30 × 1.25 = 260u

**PRINCIPE DE PRÉCAUTION:** Je recommande 240u pour rester conservateur:
- Couvre la demande accélérée récente (192-288u observé)
- Anticipe la saisonnalité montante
- Évite le sur-stockage si l'outlier 384u était exceptionnel
- Permet un réassort rapide vu la fréquence élevée actuelle

**📅 Analyse Temporelle:**
Fréquence de commande fortement accélérée: 
- Juin-Août: 1 commande toutes les 7-14 jours
- Septembre: 1 commande par semaine environ
- Début octobre: 3 commandes en 14 jours (rythme tous les 2-5 jours)

Cette accélération brutale indique soit une demande client finale en forte hausse, soit une préparation pour la saison haute des fêtes. L'intervalle entre commandes a été divisé par 3, signe d'une rotation stock beaucoup plus rapide.

**📊 Analyse Quantité:**
Quantités commandées - 3 profils distincts:
1. **Commandes standard**: 96u (volume le plus fréquent = 9 occurrences sur 16)
2. **Commandes groupées**: 192-288u (5 occurrences)
3. **Outliers**: 384u (1 occurrence isolée le 2025-09-30)

Moyenne globale: ~150u
Médiane: 96u
Moyenne récente (4 dernières, hors outlier 384u): ~192u

**Évolution claire**: passage d'un modèle 96u régulier (juin-août) vers 192-288u depuis septembre. Le volume par commande a DOUBLÉ en période récente, reflétant une demande client accrue.

**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: undefinedu (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
- Commande du 2025-09-30: 288u (potentiel outlier, ~2x la moyenne)
- Commande du 2025-07-01: 288u (potentiel outlier)
- Commande du 2025-07-11: Trois commandes le même jour (96u + 192u + 96u = 384u) - clairement une anomalie de commande/correction
- Après nettoyage, la demande de fond oscille principalement entre 96u et 192u
- Moyenne nettoyée (hors outliers): ~140-160u par commande

ÉTAPE 2: SAISONNALITÉ
- Le produit "VOL AU VENT" est typiquement un produit festif/traiteur avec saisonnalité marquée
- Pics observés: Fin juin/début juillet (saison estivale, événements), fin septembre/début octobre
- Période actuelle: Mi-octobre 2025 - nous sortons d'une période de demande soutenue (sept-début oct)
- Les vols-au-vent sont consommés lors d'événements, apéritifs, fêtes de fin d'année qui approchent
- Nous entrons dans une période potentiellement haute (préparation fêtes novembre-décembre)

ÉTAPE 3: TENDANCE RÉCENTE
- 4 dernières commandes (oct 2025): 192u, 96u, 288u (outlier probable), 192u
- Si on exclut le pic de 288u: pattern de 192u → 96u → 192u
- Fréquence récente: commandes tous les 2-7 jours en octobre (accélération vs septembre qui était ~7 jours)
- Volume moyen septembre-octobre (hors outliers): ~170u
- Tendance: LÉGÈREMENT HAUSSIÈRE avec fréquence accrue (demande soutenue)

ÉTAPE 4: RECOMMANDATION FINALE
- Base de demande nettoyée: 150u (moyenne entre 96u et 192u, modes dominants)
- Ajustement saisonnier: +10% (entrée période pré-fêtes de fin d'année, mais pas encore au pic)
- Ajustement tendance: +10% (demande récente soutenue et fréquence accrue)
- Calcul: 150u × 1.10 × 1.10 = 181,5u
- Arrondissement commercial: 192u (multiple de 96, cohérent avec les commandes standards observées)
- Approche conservatrice validée: 192u correspond à la quantité la plus fréquente récemment commandée


**📅 Analyse Temporelle:**

Intervalle entre commandes très variable: de 2 jours (oct 2025) à 14 jours (juil-août 2025). Accélération nette en octobre avec commandes rapprochées (2-7 jours). Pattern suggère une demande B2B irrégulière mais avec augmentation de fréquence récente. La période juillet montre une anomalie (3 commandes le même jour = correction). Globalement, cycle moyen de 7-10 jours en période normale, réduit à 3-5 jours récemment.


**📊 Analyse Quantité:**

Distribution des quantités: 96u (8 occurrences), 192u (7 occurrences), 288u (2 occurrences). Les quantités sont clairement des multiples de 96 (conditionnement standard probable). Les 288u sont des outliers (promotions ou événements). La demande de fond oscille entre 96u (commande minimale) et 192u (commande standard). Moyenne globale: 159u. Moyenne nettoyée (sans outliers et sans le jour triple): 147u. Les dernières commandes récentes montrent une préférence pour 192u.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: undefinedu (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
- La majorité des commandes sont de 108 unités (10 commandes sur 13)
- Outliers identifiés: 
  * 216u le 2025-07-16 (probable commande groupée ou promotion)
  * 216u le 2025-06-19 (probable commande groupée ou promotion)
  * 3 commandes de 108u le même jour (2025-07-11) = 324u au total ce jour-là, indiquant probablement un rattrapage de stock ou une grosse livraison fractionnée
- Demande de fond réelle: 108 unités par commande

ÉTAPE 2: SAISONNALITÉ
- Produit: Carbonnades (plat traditionnel mijoté, typiquement consommé en période froide)
- Observation: Pic d'activité en juillet 2025 avec 5 commandes dont une double (probable préparation pour l'automne/hiver ou promotion saisonnière)
- Date actuelle: 14 octobre 2025 = début de saison haute pour ce type de produit (automne/hiver)
- MAIS: Depuis août 2025, retour à un rythme régulier et stable de 108u toutes les 2 semaines environ
- Conclusion: Nous sommes en période favorable mais la demande reste stable à 108u

ÉTAPE 3: TENDANCE RÉCENTE
- 4 dernières commandes (sept-oct 2025): 108u, 108u, 108u, 108u
- Fréquence: Très régulière (tous les 7-14 jours)
  * 07/10 → 30/09 = 7 jours
  * 30/09 → 23/09 = 7 jours
  * 23/09 → 09/09 = 14 jours
  * 09/09 → 26/08 = 14 jours
- Volume: STABLE à 108u depuis août (5 commandes consécutives identiques)
- Tendance: NEUTRE, aucun signe de hausse ou baisse

ÉTAPE 4: RECOMMANDATION FINALE
- Base de demande: 108 unités (très stable)
- Ajustement saisonnier: 0% (malgré la saison favorable, pas d'augmentation constatée)
- Ajustement tendance: 0% (stabilité parfaite sur 2+ mois)
- Facteur sécurité: Conservateur maintenu
- RECOMMANDATION: 108 unités

JUSTIFICATION: Le pattern est extrêmement régulier et prévisible depuis août 2025. Les anomalies de juillet ont été nettoyées. Le client commande systématiquement 108u avec une fréquence hebdomadaire/bi-hebdomadaire. Aucun signal ne justifie de dévier de cette quantité standard. Approche conservatrice respectée.


**📅 Analyse Temporelle:**
Fréquence très régulière: 7-14 jours entre commandes depuis août 2025. Pattern stable avec dernières commandes espacées de 7 jours exactement (07/10, 30/09, 23/09). Rythme prévisible suggérant un réapprovisionnement sur cycle fixe.

**📊 Analyse Quantité:**
Volume extrêmement stable à 108 unités depuis août 2025 (5 commandes consécutives identiques). Les commandes de 216u (juin-juillet) et le pic du 11 juillet (3x108u) sont des outliers clairs. Base de demande récurrente: 108u représentant 77% des commandes totales.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: undefinedu (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
- Commandes normales: 96u est la quantité récurrente (apparaît 9 fois sur 12 commandes)
- Commandes 192u: 4 occurrences (juillet principalement)
- Outliers identifiés: 
  * 29/07/2025: 288u (3x la norme) → probable promotion ou stockage préventif
  * 29/07/2025: 192u (même jour que 288u) → probablement lié au même événement
- Demande de fond réelle après nettoyage: 96u majoritaire, avec quelques commandes à 192u en juillet

ÉTAPE 2: SAISONNALITÉ
- Juin-Juillet: forte activité avec quantités augmentées (192u fréquents, pic à 288u fin juillet)
- La mayonnaise est un produit estival fort en B2B (salades, sandwichs, BBQ)
- Septembre-Octobre: retour à un rythme stable de 96u par commande
- Date actuelle (14 octobre): nous sommes en période BASSE post-été
- Les commandes récentes (sept-oct) montrent un pattern régulier à 96u
→ Pas d'ajustement saisonnier à la hausse nécessaire (sortie de saison haute)

ÉTAPE 3: TENDANCE RÉCENTE
- Les 4 dernières commandes (07/10, 30/09, 16/09, 09/09): toutes à 96u
- Intervalle entre commandes: 7 jours (07→30/09), 14 jours (30/09→16/09), 7 jours (16→09/09)
- Fréquence moyenne: environ 1 commande par semaine (pattern hebdomadaire stable)
- Comparaison vs période juillet: baisse de volume mais stabilisation du rythme
- Tendance: STABLE à 96u depuis septembre, pas de signe d'accélération ni de ralentissement
→ Coefficient tendance: 0% (maintien du niveau actuel)

ÉTAPE 4: RECOMMANDATION FINALE
Base de calcul:
- Demande de fond stabilisée: 96u
- Ajustement saisonnier: 0% (période basse, pas de hausse attendue)
- Ajustement tendance: 0% (stable depuis 5 semaines)
- Fréquence: ~7 jours entre commandes
- Dernière commande: 07/10, nous sommes le 14/10 (7 jours écoulés)

Calcul final: 96u (base) × 1.0 (saisonnier) × 1.0 (tendance) = 96u

Approche conservatrice validée car:
- Pattern très régulier depuis 1 mois
- Sortie de saison haute
- DLC probablement limitée (produit frais)
- Risque de sur-stockage > risque de rupture (commandes hebdomadaires possibles)


**📅 Analyse Temporelle:**

Analyse temporelle: Pattern hebdomadaire stable depuis septembre (commandes tous les 7-14 jours). En juillet, forte concentration avec plusieurs commandes rapprochées (pic saisonnier estival typique pour la mayonnaise en B2B). Depuis le retour de septembre, rythme régularisé à ~7 jours d'intervalle avec des volumes constants de 96u. La dernière commande date du 07/10 (il y a 7 jours), ce qui correspond au cycle normal observé.


**📊 Analyse Quantité:**

Analyse quantitative: 96u est clairement la quantité standard (75% des commandes). Les 192u apparaissent principalement en juillet (saison haute). Le pic de 288u du 29/07 est un outlier manifeste (événement ponctuel). Depuis septembre, stabilisation totale à 96u par commande sans variation. Pas de signe d'augmentation progressive ni de baisse inquiétante. Le produit suit un pattern d'achat groupé stable correspondant probablement à un multiple de conditionnement standard.


**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: undefinedu (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
L'historique montre deux patterns de commande: 96u et 192u. Aucun outlier majeur détecté.
- Juillet 2025: commandes multiples le même jour (11/07: 96u+96u+192u, 29/07: 192u+96u) = possiblement des corrections/consolidations techniques, mais les quantités unitaires restent cohérentes (96u ou 192u)
- Pas de pics promotionnels évidents (pas de quantités >400u)
- Les quantités sont stables et suivent un pattern régulier
→ Demande de fond réelle = alternance entre 96u et 192u, avec dominance croissante de 192u récemment

ÉTAPE 2 - SAISONNALITÉ:
Analyse par période:
- Juin-Juillet 2025: 96u dominant (7 commandes de 96u, 2 de 192u sur 9 commandes totales)
- Août 2025: transition (3 commandes de 96u)
- Septembre-Octobre 2025: FORTE AUGMENTATION - 192u systématique (5 commandes consécutives de 192u)

Produit: "Vol au vent" = produit traiteur/pâtisserie. En B2B agroalimentaire, septembre-octobre correspond à:
- Reprise d'activité post-été (restauration, événementiel)
- Préparation saison automnale et fêtes de fin d'année
→ Nous sommes actuellement (14/10/2025) en PÉRIODE HAUTE confirmée

ÉTAPE 3 - TENDANCE RÉCENTE:
Analyse des 4 dernières commandes vs précédentes:
- 4 dernières: 192u, 192u, 192u, 192u (depuis 09/09)
- Fréquence: commandes hebdomadaires régulières (7 jours d'intervalle moyen)
- Avant septembre: dominance de 96u

TENDANCE CLAIRE: Doublement de la demande depuis début septembre, stabilisée à 192u
- Volume: +100% vs période juin-août
- Fréquence: stable et prévisible (cycle hebdomadaire)
- Consistance: 5 commandes consécutives à 192u = nouveau palier stabilisé
→ Coefficient de tendance: demande actuelle établie à 192u

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base de demande actuelle: 192u (pattern établi depuis 5 semaines)
- Ajustement saisonnier: NEUTRE (déjà en période haute, pattern stabilisé)
- Ajustement tendance: NEUTRE (192u est le nouveau standard, pas d'accélération supplémentaire visible)
- Cycle de réapprovisionnement: hebdomadaire (commande attendue dans ~7 jours)
- Sécurité: Le pattern de 192u est très cohérent et fiable

CONCLUSION: 192 unités
Cette quantité correspond exactement au pattern stabilisé depuis 5 semaines consécutives, avec un cycle de réapprovisionnement hebdomadaire clair. Aucun signal de surstockage ni de sous-estimation.


**📅 Analyse Temporelle:**

Fréquence de commande très régulière en période récente:
- 07/10 → 30/09: 7 jours
- 30/09 → 23/09: 7 jours  
- 23/09 → 09/09: 14 jours
- 09/09 → 02/09: 7 jours

Cycle dominant: HEBDOMADAIRE (7 jours). La période pré-septembre montrait plus d'irrégularité (3-21 jours entre commandes), mais depuis septembre la cadence est devenue très prévisible et structurée. Le client commande désormais systématiquement chaque semaine.


**📊 Analyse Quantité:**

Deux régimes distincts identifiés:

PÉRIODE 1 (Juin-Août): Régime BAS
- Quantité dominante: 96u (8 commandes sur 11)
- Quelques 192u ponctuels
- Moyenne: ~110u

PÉRIODE 2 (Septembre-Octobre): Régime HAUT
- Quantité exclusive: 192u (5 commandes consécutives)
- Doublement de la demande
- Stabilité parfaite: 100% des commandes à 192u

Transition nette début septembre = changement de palier de demande, probablement lié à la saisonnalité du produit vol-au-vent (reprise activité traiteur/événementiel automne).


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 144u vs Médiane: undefinedu (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 144u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 36u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
- Commande du 2025-09-30: 216u (exactement 2x la quantité standard de 108u)
- Toutes les autres commandes: 108u constant (8 commandes identiques)
- La commande de 216u représente soit un doublement ponctuel (promotion, anticipation, rattrapage), soit un signal d'augmentation de la demande
- Demande de fond identifiée: 108u sur une longue période stable (juin à septembre)

ÉTAPE 2 - SAISONNALITÉ:
- Période analysée: juin à septembre 2025 (4 mois)
- Produit: Carré boulettes tomate - produit sauce tomate, potentiellement plus demandé en été/automne (saison des barbecues, repas en extérieur)
- Date actuelle: 14 octobre 2025 = début automne, sortie de la haute saison estivale
- Fréquence des commandes: relativement régulière (environ 2 semaines entre chaque commande)
- Pas de saisonnalité extrême détectée, mais légère baisse attendue post-été

ÉTAPE 3 - TENDANCE RÉCENTE (4 dernières commandes):
- 2025-09-30: 216u
- 2025-09-23: 108u (7 jours avant)
- 2025-09-09: 108u (14 jours avant)
- 2025-08-26: 108u (14 jours avant)
- Observation critique: La commande de 216u du 30/09 arrive seulement 7 jours après la commande du 23/09, suggérant soit une erreur de stock, soit une demande réellement en hausse
- Si on considère les deux dernières commandes (216u + 108u en 7 jours), cela représente 324u sur une période normalement couverte par 108u
- Tendance: Signal haussier modéré (+33% à +100% selon interprétation)

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base demande de fond: 108u
- Scénario conservateur: La commande de 216u est un événement ponctuel → recommandation 108u
- Scénario modéré: La demande augmente légèrement (+33%) → recommandation 144u (108 x 1.33)
- Scénario optimiste: Nouvelle demande de base à 216u → trop risqué sans confirmation
- Ajustement saisonnier octobre: Léger impact négatif (sortie d'été) mais compensé par le signal haussier récent
- DÉCISION: 144u = compromis entre la base historique (108u) et le signal récent (216u), représentant +33% d'augmentation prudente
- Rationale: Permet de capter une éventuelle hausse réelle sans sur-stocker si le 216u était exceptionnel


**📅 Analyse Temporelle:**

Fréquence moyenne des commandes: ~14 jours entre juin et septembre (très régulier). Exception notable: seulement 7 jours entre les deux dernières commandes (23/09 et 30/09), suggérant soit une accélération de la rotation, soit un rattrapage de stock. Depuis la dernière commande (30/09), nous sommes au 14/10, soit 14 jours écoulés = cycle normal de réapprovisionnement atteint.


**📊 Analyse Quantité:**

Quantités extrêmement stables: 108u répétées 8 fois consécutives, puis saut à 216u (doublement exact). Le 108u représente probablement un conditionnement logistique (palette, multiple de carton). La commande de 216u = 2x le standard, ce qui est dans la zone des variations normales B2B (±30% mentionné dans les consignes, ici +100% mais sur une seule occurrence). Moyenne incluant outlier: 126u. Moyenne sans outlier: 108u. Médiane: 108u.


**📈 Tendance détectée:** ✅ Oui

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: undefinedu (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
---
Analyse des quantités:
- 11 commandes sur ~4 mois (juin à septembre 2025)
- Quantités observées: 98u (7 fois), 196u (3 fois), 392u (1 fois)
- La commande de 392u (29/07/2025) est clairement anormale (4x la quantité la plus fréquente)
- Les 2 commandes de 196u du même jour (29/07 et 11/07) semblent être des groupements ou anticipations
- Demande de fond identifiée: 98u (apparaît dans 64% des commandes)

Outliers identifiés:
- 392u le 29/07 → probable promotion ou événement ponctuel
- Double commande le 29/07 (196u + 392u) → comportement anormal
- Triple commande le 11/07 → possiblement du stockage préventif ou grosse commande client

ÉTAPE 2: SAISONNALITÉ
---
Analyse temporelle:
- Juin: 1 commande (98u)
- Juillet: 7 commandes (dont les outliers) → PÉRIODE HAUTE
- Août: 1 commande (98u)
- Septembre (jusqu'au 23): 2 commandes (98u chacune)

Le pic de juillet est significatif avec une concentration de commandes. Pour un produit "VIN CIBOULET", cela coïncide avec:
- Saison estivale (consommation de vin rosé/frais)
- Possibles événements B2B (mariages, festivals d'été)

Date actuelle: 14 octobre 2025 → Période POST-ESTIVALE (basse saison attendue)
La fréquence récente (septembre) montre un retour à la normale avec des commandes espacées de ~14 jours à 98u.

ÉTAPE 3: TENDANCE RÉCENTE
---
Analyse des 4 dernières commandes nettoyées (hors outliers de juillet):
- 23/09: 98u (intervalle: 14 jours)
- 09/09: 98u (intervalle: 28 jours depuis 12/08)
- 12/08: 98u (intervalle: 14 jours depuis dernier normal)
- 08/07: 98u

Fréquence: ~14-28 jours entre commandes normales
Volume: STABLE à 98u
Tendance: AUCUNE hausse ou baisse détectable, demande stabilisée post-pic estival

ÉTAPE 4: RECOMMANDATION FINALE
---
Calcul:
- Base de demande nettoyée: 98u
- Ajustement saisonnier (mi-octobre, basse saison): -10% → 88u
- Ajustement tendance (stable): 0% → 88u
- Coefficient conservateur B2B: On reste sur la quantité standard pour éviter le sur-stockage en basse saison

Dernière commande: 23/09 (21 jours passés)
Cycle moyen: 14-28 jours → Nous sommes dans la fenêtre normale de réapprovisionnement

Recommandation: 98u
Rationale: Maintenir la quantité standard car:
1. C'est la demande de fond prouvée (7/11 commandes)
2. Nous sommes en basse saison (octobre)
3. La tendance est stable sans croissance
4. Principe de prudence: éviter le sur-stockage pour un produit potentiellement périssable

**📅 Analyse Temporelle:**
Fréquence de commande: 14-28 jours en période normale. Pic d'activité concentré en juillet (7 commandes) suggérant une forte saisonnalité estivale. Depuis août, retour à un rythme stable avec 98u toutes les 2-4 semaines. Dernière commande il y a 21 jours (23/09), donc nous sommes dans la fenêtre normale de réapprovisionnement. Octobre représente une période de basse saison post-estivale pour ce type de produit viticole.

**📊 Analyse Quantité:**
La quantité de 98u domine largement l'historique (7/11 commandes = 64%). Les quantités supérieures (196u x3 et 392u x1) sont concentrées en juillet et semblent liées à des événements ponctuels (groupements de commandes, promotions estivales). La demande de fond réelle est clairement établie à 98u. Aucune dérive significative détectée depuis août, avec une stabilité remarquable des volumes commandés.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: undefinedu (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: high)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
Toutes les commandes sont strictement identiques à 110 unités. Aucun outlier détecté, aucune anomalie promotionnelle ou pic exceptionnel. La demande est extrêmement régulière et prévisible. Demande de fond réelle = 110u.

ÉTAPE 2 - SAISONNALITÉ:
L'historique couvre juin à septembre 2025. On observe:
- Juin: 1 commande (110u)
- Juillet: 4 commandes (110u chacune) - période très active
- Août: 0 commande visible
- Septembre: 1 commande (110u le 23/09)
- Date actuelle: 14 octobre (mi-automne)

La mayonnaise montre une saisonnalité estivale marquée (pic en juillet = saison des barbecues, salades, événements extérieurs). Nous sommes maintenant à mi-octobre, donc en sortie de saison haute. La fréquence devrait naturellement ralentir en automne/hiver.

ÉTAPE 3 - TENDANCE RÉCENTE:
Les 4 dernières commandes montrent:
- 11/07: 110u
- 22/07: 110u  
- 29/07: 110u (double commande le même jour = 220u total)
- 23/09: 110u

Intervalles temporels:
- Entre 08/07 et 11/07: 3 jours
- Entre 11/07 et 22/07: 11 jours
- Entre 22/07 et 29/07: 7 jours
- Entre 29/07 et 23/09: 56 jours (!)

La tendance est claire: RALENTISSEMENT marqué de la fréquence post-saison estivale. Le délai de 56 jours entre fin juillet et fin septembre confirme la baisse d'activité. Nous sommes à 21 jours de la dernière commande, en pleine période basse.

ÉTAPE 4 - RECOMMANDATION FINALE:
- Base de demande: 110u (constante absolue)
- Ajustement saisonnier: NEUTRE (pas de réduction de quantité unitaire, mais fréquence plus espacée)
- Ajustement tendance: STABLE (quantité par commande inchangée)
- Coefficient de sécurité: Conservateur

Le client commande toujours exactement 110u, quelle que soit la période. Cette quantité correspond probablement à un conditionnement logistique optimal (palette, lot minimum, rotation FIFO pour produit bio périssable). Même en basse saison, le client ne réduit pas la taille de commande, il espace simplement les réapprovisionnements.

CONCLUSION: 110 unités est la quantité optimale, garantissant aucune rupture et respect des contraintes logistiques du client.


**📅 Analyse Temporelle:**
Fréquence de commande très variable avec forte saisonnalité. Période haute (juillet): commandes toutes les 3-11 jours. Période actuelle (octobre): ralentissement marqué avec 56 jours entre la dernière commande estivale et celle de septembre, puis 21 jours jusqu'à aujourd'hui. La mayonnaise bio suit un cycle saisonnier estival typique. Prochaine commande attendue probablement dans les 2-4 semaines en période automnale.

**📊 Analyse Quantité:**
Quantité unitaire parfaitement stable: 100% des commandes = 110 unités exactement (7/7 commandes). Aucune variation, aucun outlier. Cette constance suggère une contrainte logistique forte (lot minimum fournisseur, conditionnement palette, ou politique de réapprovisionnement fixe du client). La régularité parfaite sur 4 mois indique que 110u est la taille de lot optimale pour ce produit bio périssable.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (5)

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
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 6.5u (0j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 57.2u (8j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -14.0u (-3j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -322.3u (-52j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -438.8u (-62j restants) → prédit 98u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:28:17.355Z*
