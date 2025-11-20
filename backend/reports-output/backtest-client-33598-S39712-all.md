# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S39712
- **Date commande** : 2025-10-14 13:24:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 23
- **Tokens**: 47,136 input + 12,646 output = 59,782 total
- **Coût**: $0.3311 (~33.11¢)
- **Coût par produit LLM**: $0.0144


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.8% | 34 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 21.1% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (4)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | 48 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier ~20-30j, majoritairement Mardi/Mercredi
- **Saisonnalité**: none
- **Tendance**: Stable à 100u (hors outlier juillet)
- **Outliers détectés**: 225u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Le client présente un pattern mensuel avec commandes espacées de 15-22 jours (02/09→16/09: 14j, 16/09→08/10: 22j). Les commandes tombent principalement mardi/mercredi, cohérent avec la date de prédiction (mardi 14/10). Dernier ordre le 08/10, donc 6 jours écoulés - bien dans la fenêtre de renouvellement.

**Filtrage outliers:** La commande de 225u du 15/07 est clairement exceptionnelle (2,25× la norme). Toutes les autres commandes sur N et N-1 sont à 100u exactement, indiquant une demande très stable et prévisible.

**Saisonnalité:** Aucun impact saisonnier détecté. La commande N-1 du 08/10/2024 était à 100u, identique aux commandes récentes. Pas d'effet calendrier spécifique à mi-octobre.

**Conclusion:** Demande de fond ultra-stable à 100u, client B2B avec besoin récurrent constant. L'outlier de juillet est isolé (promotion/événement ponctuel). Pattern temporel cohérent avec une nouvelle commande cette semaine. Prédiction: 100u avec confiance élevée.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~30j avec ancrage mardi/mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable (100u récurrent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes montrent un pattern mensuel régulier: 2024-10-01→2025-08-13 (10.5 mois), puis 2025-08-13→2025-09-09 (27j), avec la prochaine prédiction au 2025-10-14 soit 35j après la dernière. Le client commande majoritairement en milieu de semaine (mar/mer).

**VOLUMES**: Toutes les commandes historiques sont exactement à 100u, sans aucune variation. Aucun outlier détecté.

**SAISONNALITÉ N-1**: La date du 2024-10-01 (100u) correspond à la même période (octobre). L'impact saisonnier est faible car le volume reste identique aux autres périodes.

**TENDANCE**: Parfaitement stable sur 12+ mois. Aucun signal de hausse ou baisse.

**DÉCISION**: Le pattern est cristallin - client régulier commandant systématiquement 100u par mois. La date de prédiction (mardi mi-octobre) s'aligne parfaitement avec l'historique. Aucun élément ne justifie de dévier de la baseline.

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-40j entre commandes, majorité mardi)
- **Saisonnalité**: weak
- **Tendance**: Stable (100u constant)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Intervalles observés: 15/07→20/08 (36j), 20/08→09/09 (20j), 09/09→14/10 (35j prévu)
- Pattern mensuel avec préférence pour le mardi (3 commandes/4)
- Rythme moyen: ~30j, la date de prédiction (35j après dernière commande) est cohérente avec ce cycle

**ANALYSE QUANTITATIVE:**
- N-1 (08/10/2024): 100u - référence saisonnière directe
- Dernières commandes (3 mois): 100u stable sans aucune variation
- Aucun outlier détecté, demande parfaitement constante

**SAISONNALITÉ:**
- Impact faible: une seule référence N-1 en octobre, mais correspond exactement au volume récent
- Pas de signal de pic saisonnier à mi-octobre pour ce produit

**DÉCISION:**
- Demande de fond stable à 100u depuis 15 mois minimum
- Aucun signal de rupture, rattrapage ou tendance
- Date cohérente avec cycle mensuel habituel
- **Prédiction: 100u** (continuité du pattern établi)

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: medium)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière espacée (~8 semaines) - Mardi privilégié
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité fixe 48u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Seulement 2 commandes disponibles (15/07 et 09/09), espacées de 56 jours (~8 semaines). Les deux tombent un mardi, suggérant une préférence pour ce jour. La date de prédiction (14/10) est un mardi, situé 35 jours après la dernière commande (09/09).

**Pattern observé:** Quantité strictement constante de 48u sur les 2 occurrences. Aucun outlier détecté. Ce produit bio premium semble avoir une demande régulière modérée.

**Absence de saisonnalité:** Pas de données N-1 pour confirmer un pattern saisonnier. Les 2 points disponibles (été/début automne) montrent une stabilité parfaite.

**Décision:** En l'absence de variation historique et avec une constance absolue sur les commandes disponibles, la baseline de 48u est la prédiction la plus probable. Le mardi correspond au jour habituel de commande.

**Limite:** Historique très court (2 points) limite la confiance, d'où confidence "medium". Cependant, la régularité parfaite des quantités renforce la prédiction de 48u.

</details>




---

## False Positives (30)

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
| [PF3259] EVD MOUTARDE FORTE 350 GR | 3900 | Stock prédit: 3900.0u (30j restants) → prédit 3900u mais non commandé |
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Stock prédit: 14.3u (0j restants) → prédit 110u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 237.4u (9j restants) → prédit 336u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 37.1u (1j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 252 | Stock prédit: -164.3u (-1j restants) → prédit 252u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 378 | Stock prédit: 137.0u (2j restants) → prédit 378u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 61.4u (16j restants) → prédit 80u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 22.0u (22j restants) → prédit 27u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 100 | Stock prédit: 67.2u (10j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: 50.2u (5j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 66.1u (9j restants) → prédit 100u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | Stock prédit: 64.0u (8j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 38.6u (8j restants) → prédit 100u mais non commandé |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 100 | Stock prédit: -75.0u (-6j restants) → prédit 100u mais non commandé |
| [LV339] LV Tripack apéro | 184 | Stock prédit: -138.0u (-6j restants) → prédit 184u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 80 | Stock prédit: 36.2u (15j restants) → prédit 80u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 50 | Stock prédit: 22.6u (15j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 100 | Stock prédit: 10.0u (3j restants) → prédit 100u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Stock prédit: 30.8u (11j restants) → prédit 126u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: -13.3u (-4j restants) → prédit 100u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 1.0u (0j restants) → prédit 50u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 4.3u (3j restants) → prédit 48u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Stock prédit: 5.0u (3j restants) → prédit 56u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 50 | Stock prédit: -83.0u (-24j restants) → prédit 50u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Stock prédit: 13.5u (7j restants) → prédit 100u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 125 | Stock prédit: -97.4u (-26j restants) → prédit 125u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 50 | Stock prédit: -18.8u (-24j restants) → prédit 50u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock prédit: -34.8u (-34j restants) → prédit 56u mais non commandé |
| [PF1626] BONI VINAI MIEL MOUTARDE 450ML | 126 | Stock prédit: -191.2u (-61j restants) → prédit 126u mais non commandé |
| [PF1624] BONI VINAIGRETTE MANGUE 450ML | 625 | Stock prédit: -208.5u (-19j restants) → prédit 625u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T08:58:02.789Z*
