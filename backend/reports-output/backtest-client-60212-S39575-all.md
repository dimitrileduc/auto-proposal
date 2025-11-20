# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S39575
- **Date commande** : 2025-10-09 06:38:48
- **Date cutoff système** : 2025-10-09 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 20
- **Tokens**: 40,545 input + 11,440 output = 51,985 total
- **Coût**: $0.2932 (~29.32¢)
- **Coût par produit LLM**: $0.0147


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 27 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 60.0% | Score équilibré global |

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
| Exact Match (=0u) | 12 | Égalité parfaite |
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
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (21j, 22j, 7j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable - quantités oscillent entre 1-2u sans tendance claire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Historique très limité avec seulement 3 commandes sur 3 mois. Intervalles: 20-08→10-09 (21j), 10-09→02-10 (22j). Pattern instable puis rupture brutale: dernière commande 02-10 (jeudi), soit seulement 7 jours avant la date de prédiction (09-10, jeudi aussi). Ce délai court peut indiquer soit un changement de rythme, soit une commande ponctuelle exceptionnelle.

**FILTRAGE OUTLIERS**: Aucun outlier détecté. Quantités cohérentes (1-2u). Dernière commande de 1u peut signaler: (a) nouveau niveau de demande réduit, ou (b) commande d'appoint.

**DÉCISION**: Données insuffisantes pour établir pattern fiable (seulement 3 points). Pas de N-1 pour saisonnalité. Vu le délai très court depuis dernière commande (7j vs ~21j historique), probabilité élevée que le client n'ait PAS encore besoin de réapprovisionner le 09-10. Toutefois, si rythme hebdomadaire jeudi/jeudi se confirme: 1u semble cohérent avec dernière commande. Par précision maximale et vu l'accélération récente du rythme, je privilégie 1u (niveau récent observé) plutôt que 2u, mais avec confiance faible vu données limitées.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles variables (6-14 jours récemment)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 5 dernières commandes montrent des intervalles variables:
- 20/08 → 27/08: 7 jours (mer→mer)
- 27/08 → 10/09: 14 jours (mer→mer)
- 10/09 → 22/09: 12 jours (mer→lun)
- 22/09 → 02/10: 10 jours (lun→jeu)

Pattern irrégulier sans jour fixe, mais fréquence moyenne ~10-11 jours entre commandes. La prochaine prédiction est pour le 09/10 (jeudi), soit 7 jours après la dernière commande du 02/10.

**QUANTITÉS HISTORIQUES:**
Sur les 5 dernières commandes: 2u, 2u, 3u, 2u, 3u
- Mode: 2u (60%)
- Moyenne: 2.4u
- Dernière commande: 3u

**TENDANCE:**
Pas de tendance nette à la hausse ou baisse. Oscillation stable entre 2 et 3 unités. Pas d'outliers détectés - ces quantités représentent la demande normale.

**DÉCISION:**
La dernière commande (02/10) était de 3u, il y a seulement 7 jours. L'intervalle court suggère un rythme soutenu. Le jeudi précédent (02/10) a donné 3u. La moyenne récente est de 2.4u mais la dynamique actuelle favorise 3u. 

**Prédiction: 3 unités** - alignée sur la dernière commande et le volume le plus récent observé un jeudi.

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, intervalle variable 7-14 jours récemment
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u (dernières commandes: 2u, 2u, 3u, 1u, 2u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les 5 dernières commandes montrent un pattern irrégulier (20 août → 27 août = 7j, 27 août → 10 sept = 14j, 10 sept → 22 sept = 12j, 22 sept → 2 oct = 10j). Dernière commande le 2025-10-02 (jeudi), donc 7 jours seulement avant la date de prédiction (2025-10-09, jeudi). Le client ne semble pas suivre un jour fixe hebdomadaire.

**FILTRAGE OUTLIERS**: La quantité de 3u du 10 septembre est légèrement supérieure mais reste dans une plage cohérente. La commande de 1u du 27 août apparaît comme sous-normale. Aucune donnée N-1 pour valider la saisonnalité.

**ANALYSE DE TENDANCE**: Sur les 5 dernières commandes, 3 commandes de 2u apparaissent (60%), confirmant que 2u est la quantité modale. Moyenne = (2+2+3+1+2)/5 = 2,0u exactement.

**DÉCISION**: Étant donné que la dernière commande date de seulement 7 jours et que le client a commandé 2u (quantité modale), et qu'aucune rupture de rythme significative n'est observée, la prédiction la plus probable est une continuité à 2u. Le produit premium bio a probablement une rotation régulière mais modérée en B2B.

</details>


<details>
<summary><strong>4. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables : 26 jours (20/08→27/08 = 7j), puis 26 jours (27/08→22/09), puis 17 jours jusqu'à la date de prédiction (22/09→09/10)
- **Saisonnalité**: none
- **Tendance**: Stable - Oscillation entre 1-2 unités sans tendance claire
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : L'historique montre seulement 3 commandes sur 2 mois avec des intervalles irréguliers (7 jours, puis 26 jours). Aucun pattern hebdomadaire ou mensuel clair n'émerge. Il s'agit manifestement d'un produit à faible rotation avec des commandes sporadiques.

**Analyse des quantités** : Les commandes sont de 1u, 1u et 2u. La commande de 2u du 20/08 apparaît comme un léger outlier mais reste dans une fourchette cohérente pour ce type de produit de niche (boisson bio spécifique).

**Absence de saisonnalité** : Aucune donnée N-1 disponible et le produit semble récent dans l'assortiment. Pas d'indication de saisonnalité exploitable.

**Tendance** : Volumes très faibles et stables (1-2u), typique d'un produit de découverte ou à faible demande B2B. La moyenne arithmétique donne 1,33u.

**Décision** : En l'absence de pattern clair et avec une moyenne de 1,33u, la prédiction la plus probable est **1 unité**. Les commandes de 1u représentent 2/3 de l'historique. Le délai de 17 jours depuis la dernière commande suggère qu'une petite commande de réapprovisionnement est cohérente. Confidence moyenne car l'historique est limité mais les volumes sont cohérents.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~14-23 jours avec concentration mercredi/lundi
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2-3u (dernières commandes: 2u, 3u, 1u, 3u, 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique**: Les commandes sur 3 mois montrent un pattern irrégulier avec intervalles variables (13j, 12j, 14j, 23j). Deux jours privilégiés: mercredi (3 occurrences) et lundi (2 occurrences). La date de prédiction 2025-10-09 est un jeudi, légèrement atypique. Le dernier achat remonte au 22/09 (lundi), soit 17 jours avant la prédiction, ce qui s'inscrit dans la fourchette observée.

**Tendance**: Pas d'outliers détectés. Les quantités oscillent entre 1u et 3u avec une moyenne de 2.4u. La dernière commande (2u le 22/09) est proche de cette moyenne. Aucune tendance haussière ou baissière marquée.

**Saisonnalité**: Absence de données N-1, donc impact saisonnier non évaluable. Produit bio premium suggère une demande plus constante que saisonnière.

**Décision**: En l'absence de pattern fort et avec un jeudi (jour moins fréquent), je privilégie la dernière valeur observée (2u) qui reflète le comportement récent du client. La baseline théorique de 2.4u arrondis à 2u représente la prédiction la plus probable sans surgonfler.

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Seulement 2 commandes espacées de 37 jours (04/08 et 10/09)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: L'historique est extrêmement limité avec seulement 2 commandes sur 3 mois (04/08 et 10/09, soit 37 jours d'écart). Aucun pattern hebdomadaire ou mensuel clair n'est identifiable. La prédiction pour le 09/10 intervient 29 jours après la dernière commande du 10/09.

**FILTRAGE OUTLIERS**: Aucune donnée N-1 disponible pour identifier la saisonnalité. Les 2 quantités observées (1u et 1u) sont cohérentes, sans pic exceptionnel.

**SYNTHÈSE**: 
- Produit à très faible rotation (nouveau produit ou client occasionnel)
- Volume unitaire constant à 1u quand commande
- Intervalle irrégulier (~37j entre les 2 seules commandes)
- Impossible de confirmer un cycle mensuel avec 2 points seulement

**DÉCISION**: Face à l'absence de données robustes, je me base sur la constante observée: quand ce client commande ce produit, c'est systématiquement 1 unité. La probabilité qu'il commande le 09/10 est incertaine (manque d'historique pour établir la fréquence), mais SI commande il y a, le volume le plus probable reste 1u. Confidence LOW en raison du manque critique de données historiques.

</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalle moyen ~21-42 jours, dernières commandes espacées de 14j puis 28j
- **Saisonnalité**: none
- **Tendance**: Stable - Commandes constantes à 1u depuis 3 mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique:** L'historique montre 3 commandes sur 3 mois (16 juil, 27 août, 10 sept), toutes un mercredi. Intervalles: 42j puis 14j, ce qui suggère un pattern irrégulier mais avec préférence pour le mercredi. La date de prédiction (9 oct, jeudi) est à 29 jours de la dernière commande (10 sept), ce qui se situe dans la fourchette observée.

**Stabilité quantitative:** Toutes les commandes sont strictement identiques (1 unité), sans aucun outlier. Cela indique une demande très prévisible en volume, probablement liée à des tests produits, un point de vente spécifique à faible rotation, ou un client B2B de petite taille.

**Absence de saisonnalité:** Aucune donnée N-1 disponible et les 3 mois récents ne montrent aucune variation saisonnière. Produit de niche (bio, faible calories, saveur spécifique) = demande stable.

**Décision:** Compte tenu de la constance absolue des quantités (100% des commandes = 1u) et de l'absence de signaux indiquant un changement de comportement, la prédiction la plus précise est 1 unité. Confidence medium car l'historique est court (3 points) et le timing exact des commandes reste imprévisible.

</details>


<details>
<summary><strong>8. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement (42 jours d'écart), insuffisant pour établir un pattern fiable
- **Saisonnalité**: none
- **Tendance**: Stable à 1u - données insuffisantes pour détecter une tendance
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Données extrêmement limitées**

Avec seulement 2 commandes historiques (16 juillet et 27 août 2025), l'analyse est contrainte :

1. **ANALYSE RYTHMIQUE** :
   - Intervalle : 42 jours entre les 2 commandes
   - Les deux tombent un mercredi, mais échantillon trop faible pour confirmer un pattern hebdomadaire
   - Depuis la dernière commande (27 août) jusqu'à la date de prédiction (9 octobre) : 43 jours
   - Cet intervalle correspond quasi-exactement à l'intervalle observé → possible cycle ~40-45 jours

2. **STABILITÉ DES VOLUMES** :
   - 100% des commandes = 1 unité
   - Aucun outlier détecté
   - Produit de niche (Kombucha) à rotation lente typique

3. **ABSENCE DE SAISONNALITÉ** :
   - Pas de données N-1 pour validation
   - Période récente trop courte

**DÉCISION** : La prédiction la plus probable est **1 unité**, basée sur :
- Cohérence parfaite des volumes historiques (1u systématique)
- Respect du cycle temporel observé (~42-43 jours)
- Nature du produit (boisson premium à faible rotation)

**RÉSERVE** : Confiance LOW en raison du très faible historique. Toute rupture de pattern serait indétectable.

</details>


<details>
<summary><strong>9. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement (intervalle de 35 jours entre les 2 seules commandes observées)
- **Saisonnalité**: none
- **Tendance**: Stable - quantité constante à 1u sur les 2 observations
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** : Historique très limité avec seulement 2 commandes (16 juillet et 20 août 2025), toutes deux des mercredis, avec un intervalle de 35 jours. Impossible d'établir un pattern fiable avec si peu de données. La date de prédiction (9 octobre, jeudi) se situe 50 jours après la dernière commande, ce qui suggère une possible commande mais sans certitude.

**FILTRAGE OUTLIERS** : Aucun outlier détecté. Les 2 commandes sont identiques (1u), suggérant soit un produit de test/niche, soit un démarrage récent de référencement.

**SAISONNALITÉ** : Absence totale de données N-1, donc aucun pattern saisonnier identifiable. Produit apparemment récent ou très peu commandé.

**TENDANCE** : Stable à 1u par commande, mais fréquence d'achat incertaine (35 jours entre les 2 observations).

**DÉCISION** : Face à un historique aussi limité, je base ma prédiction sur la constante observée : 1 unité par commande. C'est la quantité la plus probable si une commande intervient, bien que la probabilité qu'une commande ait lieu à cette date précise soit incertaine. Le produit semble être une référence à très faible rotation (boisson artisanale/premium DAF Fruit Passion-Hibiscus). Confiance LOW en raison du manque de données historiques.

</details>


<details>
<summary><strong>10. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Seulement 2 commandes sur 3 mois (19 jours puis 49 jours d'écart)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande, mais fréquence très espacée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse détaillée:**

1. **RYTHMIQUE:** Historique extrêmement limité avec seulement 2 commandes:
   - 16/07/2025 (mercredi): 1u
   - 04/08/2025 (lundi): 1u
   - Intervalle: 19 jours
   - Depuis dernière commande (04/08) jusqu'à date de prédiction (09/10): 66 jours
   
   Le pattern est clairement irrégulier et peu fréquent. Pas de rythme hebdomadaire ou mensuel détectable.

2. **OUTLIERS:** Aucun pic anormal. Toutes les commandes sont de 1u, suggérant soit:
   - Un produit de niche/spécialité
   - Un nouveau client en phase de test
   - Une demande très faible et sporadique

3. **SAISONNALITÉ:** Aucune donnée N-1 disponible. Pas d'impact saisonnier détectable.

4. **TENDANCE:** Stable à 1u par commande quand elle survient. La confiture d'abricot bio étant un produit spécialisé, les volumes unitaires faibles sont cohérents avec un segment premium B2B.

**DÉCISION:** Avec un historique aussi limité (2 points seulement) et un pattern de commande très espacé, la prédiction repose sur la constante observée: 1 unité par commande. Le fait que 66 jours se soient écoulés depuis la dernière commande suggère qu'une nouvelle commande pourrait survenir, mais le volume restera probablement identique (1u) basé sur la régularité parfaite observée.

Confidence "medium" car l'historique est très court, mais la cohérence (2/2 commandes = 1u) apporte une certaine fiabilité.

</details>




---

## False Positives (15)

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
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Stock prédit: 1.9u (10j restants) → prédit 3u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.3u (11j restants) → prédit 1u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.4u (23j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -1.8u (-53j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: -1.3u (-46j restants) → prédit 2u mais non commandé |


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
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock suffisant: 1.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T09:01:19.445Z*
