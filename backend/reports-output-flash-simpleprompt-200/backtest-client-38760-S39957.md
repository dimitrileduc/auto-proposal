# Rapport Backtest - Client CRF MARKET REMOUCHAMPS FONVAL

## Contexte

- **Client** : CRF MARKET REMOUCHAMPS FONVAL (ID: 38760)
- **Commande réelle** : S39957
- **Date commande** : 2025-10-28 10:53:28
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 16,101 input + 4,968 output = 21,069 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 91.4% | 35 produits prédits, 32 corrects |
| **Rappel** | 100.0% | 32 produits réels, 32 détectés |
| **F1-Score** | 95.5% | Score équilibré global |

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
| **MAE** | 0.72 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 1.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 17 | Avec erreur |

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

## True Positives (32)

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
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | 5 | 1.0 | 20.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 4 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF020] JF SAUCE AIOLI 250ML WECK | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle approximatif de 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable et unitaire (1u) avec un intervalle moyen de 25 à 35 jours. La dernière commande datant du 17 septembre (il y a 40 jours), le besoin de réapprovisionnement pour ce produit à faible rotation est certain. Aucune saisonnalité n'est observée, et le volume par commande ne varie jamais, ce qui justifie le maintien de la quantité à 1 unité malgré le léger décalage du cycle.

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle (intervalle ~30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u, 0u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande très faible et fragmentée, tournant quasi exclusivement autour de 1 unité par commande. Bien que l'intervalle entre les deux dernières commandes (août et septembre 2025) soit de 26 jours, l'absence de commande fin octobre suggère que le client est en phase de réapprovisionnement pour ce produit de niche. La donnée N-1 d'octobre (22/10/2024) confirme un besoin unitaire à cette période de l'année. Malgré un pic isolé à 3u en avril 2024, le mode statistique est de 1u.

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (environ 1 commande toutes les 3 à 5 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de très faible volume, oscillant entre 1 et 2 unités par commande. Sur les 3 derniers mois (période récente), le volume s'est stabilisé à 1 unité par commande avec un intervalle de 26 à 40 jours. La dernière commande datant du 17 septembre (soit 40 jours avant la date cible du 27 octobre), le client est dans sa fenêtre critique de réapprovisionnement. Malgré l'absence de saisonnalité marquée en N-1 sur cette période précise, la tendance actuelle privilégie le maintien de l'unité minimale de commande (1u) pour ce produit de niche.

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 25 et 40 jours (environ mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande sporadique mais persistante de ce produit avec un volume très faible (moyenne de 1,2 unité par commande). La dernière commande date du 17 septembre (il y a 40 jours), ce qui correspond à la borne haute du cycle de réapprovisionnement observé. Bien qu'il n'y ait pas de saisonnalité marquée en octobre l'an dernier, le délai écoulé depuis la dernière commande justifie une commande de maintien. Au vu de la faible rotation (jamais plus de 2u), 1 unité est le choix le plus probable pour minimiser l'erreur de prédiction.

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 26 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u/commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de commande observé se situe entre 26 et 30 jours (du 22/08 au 17/09). La date de prédiction (27/10) se situe exactement à un intervalle de 40 jours après la dernière commande du 17/09, suggérant qu'un réapprovisionnement est dû. Le volume est extrêmement stable (2 unités systématiques) sans bruit statistique ni outlier détecté. En l'absence de données N-1 pour confirmer une saisonnalité, la moyenne pondérée de la période récente est privilégiée.

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 40 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à légèrement baissière (1-2u)
- **Outliers détectés**: 4u, 0u

**🧠 Raisonnement LLM:**
L'analyse montre une commande environ une fois par mois. La dernière commande date du 17 septembre (il y a 40 jours). Une commande le 27 octobre s'inscrit parfaitement dans ce cycle de réapprovisionnement mensuel. Bien que l'historique N-1 à la même période (22 octobre) affichait 3 unités, les données récentes de 2025 (août et septembre) montrent un ralentissement vers 1 à 2 unités. Le passage de 1u en août à 2u en septembre suggère un besoin de 2 unités pour couvrir la période à venir, compensant le délai légèrement plus long depuis la dernière commande (40 jours).

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique avec cycle de 30-45j
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable et faible, oscillant majoritairement à 1 unité par commande. Bien que la dernière commande (août 2025) ait été de 2 unités, la moyenne sur 2024 et 2025 reste proche de 1. L'intervalle de temps depuis la dernière commande (plus de 60 jours) suggère un besoin de réapprovisionnement imminent. La quantité de 1 correspond au mode statistique du produit sur les deux dernières années.

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique très lent (tous les 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement stable mais à faible fréquence. Dans l'historique (N-1 et période récente), le volume par commande est systématiquement de 1 unité (les valeurs 0u correspondent probablement à des passages de commandes sur d'autres références sans celle-ci). La dernière commande datant du 22 août, l'intervalle de deux mois est cohérent avec le cycle observé entre août et octobre 2024. Il n'y a aucun signal de croissance de volume unitaire, la recommandation de 1u est donc la plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, cycles de 3 à 5 semaines
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive de 3-4u à 5u (+25%)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'historique montre une accélération du volume unitaire passant d'une moyenne de 3 unités en début d'année N-1 à 4-5 unités sur les commandes les plus récentes. Bien qu'il y ait eu une pause apparente dans les commandes entre août et octobre 2025 (rupture de rythme de plus de 60 jours), la dernière donnée de référence (août 25) indique un besoin de 5 unités. En B2B agroalimentaire, la mayonnaise à la truffe subit une légère poussée à l'approche de la fin d'année. Le lundi étant un jour de commande hors cycle habituel, il s'agit probablement d'un réapprovisionnement de stock sécuritaire pour le début de saison. On privilégie le maintien de la tendance haute à 5 unités.

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 5u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.25u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles de 20 à 35 jours (Cycle mensuel approximatif)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (de 1-4u en N-1 à 5u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération du volume unitaire passant d'une moyenne de 2.6 unités en 2024 à 5 unités lors de la dernière commande d'août 2025. Bien que le rythme soit espacé (environ une commande par mois), la période actuelle (octobre) correspond historiquement à un besoin de réapprovisionnement après le creux de septembre. Le passage de 4u à 5u semble être la nouvelle base de consommation stable. La commande tombant un lundi (hors jours habituels de fin de semaine) suggère un besoin réel plutôt qu'un automatisme de stock, justifiant le maintien du volume haut de 5 unités.

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des cycles variant de 14 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne passée de 1u à 3u)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Le produit présente une demande erratique sans fréquence hebdomadaire fixe. Historiquement, le volume oscille entre 1 et 2 unités en 2024, mais la dernière commande enregistrée en août 2025 montre un pic à 3 unités. Étant donné l'absence de commande en septembre et début octobre, il existe un besoin de réapprovisionnement. Cependant, la date cible est un lundi alors que les cycles habituels tombent en fin de semaine ; je préconise une quantité de 2 unités, correspondant à la médiane des commandes positives, pour couvrir le besoin sans surstocker ce type de produit de niche (vinaigrette). La confiance est faible due au manque de données sur les 60 derniers jours et à l'irrégularité temporelle du client sur cette référence spécifique (JF024). Chaque commande semble être un achat d'opportunité ou de reconstitution de stock basique plutôt qu'un flux poussé par la saisonnalité pure dans ce cas précis (absence de données en oct N-1). On se basera sur la moyenne pondérée récente vs historique N-1 stable à 1-2u. La dernière valeur de 3u est traitée comme un léger pic de tendance, ramenant la baseline théorique à 2u pour la prochaine itération en l'absence de pic saisonnier identifié à fin octobre par le passé sur ce produit spécifique (dernière commande N-1 fin sept). La valeur 2u minimise le risque d'erreur (MAPE) par rapport à 1u ou 3u dans ce contexte de vide de 2 mois sans data (rattrapage modéré). On applique une logique de lissage sur un produit peu fréquenté. On considère 2u comme le point d'équilibre entre la reprise de stock et l'historique lent de rotation. Lundi n'étant pas son jour favori, on ne sur-stocke pas à 3u.

</details>


<details>
<summary><strong>12. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique, intervalle de 15 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Instable avec inactivité prolongée
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et sporadique avec aucune commande enregistrée sur les 3 derniers mois ni sur la période équivalente en N-1 (août-octobre). Cependant, le produit a connu des commandes isolées de 1u et 3u par le passé. La date demandée étant un lundi (jour hors cycle historique), et face à une inactivité prolongée, la quantité recommandée est fixée à l'unité minimale de 1 pour couvrir un éventuel besoin de réapprovisionnement de stock fond de rayon après une longue période sans mouvement.

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 0.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique, environ 1 commande toutes les 4-6 semaines
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande constante mais très faible (mode de 1 unité) avec des intervalles de commande espacés d'environ un mois. Aucune commande n'ayant été passée durant les trois derniers mois, le client est techniquement en phase de réapprovisionnement cyclique. Bien qu'aucune saisonnalité forte ne soit identifiée pour octobre, la récurrence historique de 1u aux alentours de ces dates (22 oct N-1) et le besoin de stocker ce type de condiment suggèrent une commande unitaire. Le volume de 3u en juillet 2024 est considéré comme un outlier au vu de la moyenne historique.

</details>


<details>
<summary><strong>14. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittent (cycle ~45-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable mais très faible volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique et irrégulière. Le produit n'a pas été commandé depuis plus d'un an (septembre 2024), ce qui indique une rotation très lente ou un déférencement partiel. Cependant, les commandes passées varient entre 1u et 4u avec une moyenne basse. Etant donné l'absence de données récentes sur les 3 derniers mois et la nature du produit (Sauce Lapin, potentiellement saisonnière pour l'automne/hiver), une quantité minimale de 1 unité est préconisée pour couvrir un besoin ponctuel sans générer de surstock sur une référence à faible rotation.

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 1u
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 2u
- 2024-08-01 11:40:34: 1u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:37:02: 2u
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 3u
- 2024-09-26 06:41:59: 3u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 1u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-21 13:58:20: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 0u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 4u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 2u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 1u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 3u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>10. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 4u
- 2024-08-21 13:58:20: 3u
- 2024-08-01 11:40:34: 2u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 4u
- 2024-04-16 06:31:56: 4u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-22 10:08:24: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 2u
- 2024-07-05 11:27:03: 2u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 2u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-22 09:46:56: 1u
- 2024-09-26 06:41:59: 1u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 3u
- 2024-06-04 13:33:37: 1u
- 2024-05-16 11:57:50: 1u
- 2024-04-16 06:31:56: 1u
- 2024-03-22 09:42:15: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>14. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:41:59: 3u
- 2024-08-01 11:40:34: 0u
- 2024-07-19 10:23:56: 0u
- 2024-07-05 11:27:03: 4u
- 2024-06-04 13:33:37: 0u
- 2024-05-16 11:57:50: 0u
- 2024-04-16 06:31:56: 3u
- 2024-03-22 09:42:15: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

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
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.4u (30j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.7u (-26j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:37:44.479Z*
