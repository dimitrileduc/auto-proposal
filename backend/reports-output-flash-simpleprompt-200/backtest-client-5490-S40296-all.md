# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 28,247 input + 8,762 output = 37,009 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.8% | 26 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 70.0% | Score équilibré global |

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
| **MAE** | 157.21 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 49.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -38.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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

## True Positives (14)

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
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 42 | 50 | 8.0 | 16.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 80 | 40.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 868 | 434.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 62 | 155 | 93.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 310 | 124 | 186.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 1 | 93 | 92.0 | 98.9% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 47 | 62 | 15.0 | 24.2% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 30 jours couplé à des commandes multiples le même jour
- **Saisonnalité**: weak
- **Tendance**: Stable à 434u par unité de commande
- **Outliers détectés**: 868u, 104u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité frappante sur le volume unitaire de 434u (correspondant probablement à une palette complète ou une unité logistique standard). Bien que la date du 11 novembre soit un mardi, elle suit de très près la salve de commandes du vendredi 07 novembre (3x434u). Historiquement, le client commande par blocs de 434u. Compte tenu du stock potentiellement engagé le 07/11, la commande du 11/11 devrait correspondre à un ajustement résiduel ou une commande de réapprovisionnement standard de 434u pour maintenir le stock de sécurité après le pic de fin de semaine.

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 62u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 31u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme aléatoire à hebdomadaire (souvent jeudi ou vendredi)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 62u-93u par période active
- **Outliers détectés**: 186u, 155u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilisation des volumes après les pics inhabituels de l'été 2024. Sur les 3 derniers mois, le client commande des multiples de 31u (unité de conditionnement probable). La commande du 07/11 totalisait 124u (31+62+31). Étant donné que nous sommes seulement 4 jours plus tard (mardi 11/11), le besoin est probablement un réajustement de stock pour couvrir la semaine. Un volume de 2 colis de 31u (soit 62u) est la prédiction la plus cohérente avec le comportement récent et le lissage de la demande.

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: high)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bimensuel (tous les 14 jours) historiquement le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 25u par commande unitaire
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilité parfaite du volume par commande (25 unités par ligne de commande). Bien que les commandes soient parfois transmises par lots de 3 (ex: le 07/11 pour un total de 75u), le besoin unitaire reste fixe. La date cible du mardi 11 novembre est un jour férié en France, mais correspond à l'intervalle de début de semaine suivant la commande massive du vendredi 07/11. Aucun signe de saisonnalité variable n'est détecté entre N-1 et N, la quantité de 25u est la constante structurelle du client pour ce produit.

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 42u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 42u (confidence: medium)
- 📊 **Baseline N-1**: 41.6u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 8u (16.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel le jeudi, basculant vers des volumes plus importants le vendredi en novembre
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +200%
- **Outliers détectés**: 100u

**🧠 Raisonnement LLM:**
L'analyse montre une mutation du profil de consommation : alors qu'en 2024 le produit tournait à 25u par commande (en grappes), les données de novembre 2025 montrent une accélération brutale (225u cumulées le 07/11). La commande tombe un mardi, hors cycle habituel (jeudi/vendredi), ce qui indique une rotation rapide des stocks. En lissant la tendance récente (225u / 3 commandes = moyenne 75u) mais en tenant compte de la proximité de la dernière grosse commande il y a seulement 4 jours, on table sur un volume de réajustement de type 'baseline de sécurité' proche de deux colis standards de 21u ou un lissage conservateur pour éviter le surstockage après l'envoi massif du 07/11.

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 40u (50.0%)
- 📉 **Erreur Médiane**: 40u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées de 40u à intervalles irréguliers (7 à 15 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 40u par unité de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une constance absolue du volume de commande (systématiquement 40 unités ou multiples de 40 lors de saisies simultanées). Le client a passé trois commandes de 40u le vendredi 7 novembre. La demande pour le mardi 11 novembre (seulement 4 jours plus tard) s'inscrit dans un cycle de réapprovisionnement rapproché. Puisque le produit est stable, sans saisonnalité marquée ni tendance à la hausse/baisse sur le volume unitaire, la quantité standard de 40u est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel avec concentration en milieu/fin de semaine (Mer, Jeu, Ven)
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par unité de commande
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'historique montre une constante quasi-absolue de 434 unités par ligne de commande, que ce soit en 2024 ou 2025. Le 868u du 07/11/2025 est clairement un cumul de deux unités logistiques de 434u passées le même jour. Bien que le mardi ne soit pas le jour habituel de réception des commandes (plutôt Mer-Ven), le client semble maintenir un stock tampon basé sur ce multiple fixe de 434. Aucune saisonnalité marquée n'est visible sur cette période par rapport à N-1. La prédiction se base donc sur l'unité de commande standard du client.

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme hebdomadaire, majoritairement le jeudi, basculant vers le vendredi en novembre
- **Saisonnalité**: none
- **Tendance**: Stable avec augmentation de la fréquence de réapprovisionnement
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'analyse des données montre une unité logistique standard et indivisible de 434 unités (toutes les commandes sont des multiples de 434). Bien que le client commande habituellement le jeudi, on observe une accélération récente (trois lignes de commande cumulant 1736 unités le 07/11). La demande pour le mardi 11/11 correspond à un besoin de réapprovisionnement standard pour maintenir le stock après le pic de fin de semaine dernière. L'outlier de 868u du 07/11 est interprété comme un double lot logistique. La quantité unitaire de 434u est la plus probable pour maintenir la fluidité du stock sans surstockage.

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 434u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes groupées sur une journée tous les 15-20 jours, principalement les jeudis ou vendredis.
- **Saisonnalité**: none
- **Tendance**: Stable à 434u par commande unitaire
- **Outliers détectés**: 1302u

**🧠 Raisonnement LLM:**
L'historique montre une constante remarquable : l'unité de commande de base est de 434u. Bien que plusieurs lignes apparaissent le même jour, elles correspondent souvent à des saisies multiples d'un même lot ou à des besoins de réapprovisionnement par palettes entières. La dernière commande date du vendredi 7 novembre (il y a seulement 4 jours) avec un volume total de 2170u (434+1302+434). Une demande le mardi 11 novembre est inhabituelle par rapport au cycle de ~20 jours observé en octobre. Cependant, dans un contexte B2B, si une commande est générée hors cycle, elle porte quasi systématiquement sur le multiple standard de 434u pour compléter un stock ou répondre à un besoin spécifique immédiat sans attendre le prochain cycle groupé.

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: 868u (Réel: 868u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 868u
- ✅ **Réel commandé**: 868u
- 📉 **Erreur LLM**: 434u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel le jeudi (tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 434u
- **Outliers détectés**: 868u

**🧠 Raisonnement LLM:**
L'historique montre une constante remarquable de 434 unités par commande (ou multiples exacts). Le rythme standard est bi-mensuel le jeudi. Cependant, les dernières commandes des 30/10 (1302u au total) et 07/11 (2170u au total) indiquent des cumuls de multiples de 434u, probablement liés à une opération de stockage ou une promotion ponctuelle. La date du 11/11 étant un mardi (jour férié ou veille de reprise), et suivant de très près le pic du vendredi 07/11, la demande devrait revenir à l'unité de base de production/livraison standard du client, soit 434 unités.

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 62u vs Médiane: 93u (Réel: 155u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 155u
- 📉 **Erreur LLM**: 93u (60.0%)
- 📉 **Erreur Médiane**: 62u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme hebdomadaire le jeudi, décalé exceptionnellement au vendredi récemment. Moyenne de 14 jours entre les vagues de commandes.
- **Saisonnalité**: weak
- **Tendance**: Hausse marquée +85% vs N-1
- **Outliers détectés**: 186u

**🧠 Raisonnement LLM:**
L'analyse montre une accélération des volumes en 2025 par rapport à 2024 (passant de ~186u par cycle à ~341u cumulés sur la dernière session). Cependant, la commande est passée un mardi 11/11, soit seulement 4 jours après le gros réapprovisionnement du vendredi 07/11 (341u au total). Habituellement, le client espace ses commandes de 7 à 14 jours. Cette commande de milieu de semaine est probablement un ajustement de stock complémentaire plutôt qu'un cycle complet de réapprovisionnement. On table sur 2 colis standards (multiple de 31u) pour couvrir la fin de semaine, en tenant compte du fait que le gros du volume vient d'être livré.

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 310u vs Médiane: 93u (Réel: 124u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 310u (confidence: high)
- 📊 **Baseline N-1**: 310u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 124u
- 📉 **Erreur LLM**: 186u (150.0%)
- 📉 **Erreur Médiane**: 31u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (Jeudi ou Vendredi)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +100%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une transition d'un rythme bimensuel en 2024 (toutes les 2 semaines environ 124u total) vers un rythme hebdomadaire soutenu en 2025. Sur les deux dernières semaines, le cumul par session de commande est monté à 217u (30/10) puis 310u (07/11). La demande pour le mardi 11/11, bien qu'en dehors du jour habituel (vendredi), suggère un besoin de stocker avant un jour potentiellement férié ou un pic de milieu de semaine. En l'absence de baisse de régime et compte tenu de la dynamique de croissance forte (+100% vs N-1), on retient le dernier volume consolidé de 310 unités (somme des trois lignes du 07/11).

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 1u vs Médiane: 31u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 92u (98.9%)
- 📉 **Erreur Médiane**: 62u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande bi-mensuelle (tous les 14 jours environ) passant du jeudi au vendredi
- **Saisonnalité**: weak
- **Tendance**: Hausse récente (186u cumulées le 07/11 vs 62u le 30/10)
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'analyse montre une commande massive de 186 unités (31+93+62) effectuée il y a seulement 4 jours (vendredi 07/11). Historiquement, le client suit un cycle de réapprovisionnement de 14 jours (ex: 19/09, 03/10, 17/10 en N-1). La commande du 11/11 intervient trop tôt par rapport au cycle habituel et après un stock de sécurité important constitué le 07/11. En l'absence de commande prévisible ce jour, la quantité recommandée est fixée au minimum technique unitaire ou zéro, mais selon les contraintes demandées (entier >= 1), nous prédisons 1u car le stock vient d'être complété.

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 47u vs Médiane: 31u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 47u (confidence: medium)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 15u (24.2%)
- 📉 **Erreur Médiane**: 31u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (jeudi ou vendredi)
- **Saisonnalité**: none
- **Tendance**: Hausse brutale (x3) sur le dernier cycle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une accélération récente : le volume est passé de 62 unités le 30/10 à 217 unités le 07/11 (3 commandes groupées). Cependant, la date de prédiction (mardi 11/11) tombe seulement 4 jours après une commande massive de 217 unités et avant le cycle habituel de fin de semaine. Il s'agit probablement d'un réapprovisionnement de complément ou d'une commande anticipée suite au volume du 07/11. En lissant la demande hebdomadaire récente (moyenne 139u/semaine) et en tenant compte du stock probablement encore présent après le pic du vendredi précédent, une quantité intermédiaire de 47u (soit 1/3 du volume hebdo moyen) est la plus probable pour un mardi.

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: high)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel (tous les 14 jours environ), préférentiellement le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable à 40u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité exceptionnelle avec une quantité fixe de 40 unités par commande. Bien que deux commandes de 40u aient été enregistrées le même jour (vendredi 07/11, total 80u), cela correspond à un ajustement de cycle après une absence de commande fin octobre. La date de prédiction (mardi 11/11) est proche de la dernière commande du 07/11, mais le rythme bimensuel et le conditionnement par multiple de 40 indiquent que la prochaine unité logique de besoin sera de 40u. Aucune volatilité de volume n'est observée sur deux ans (toujours 40u).

</details>




### 📊 Données d'Input LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 434u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-02 06:43:53: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:31: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-08-09 05:43:38: 104u
- 2024-08-09 05:43:13: 104u
- 2024-08-09 05:42:53: 104u
- 2024-07-03 06:05:40: 434u
- 2024-07-03 06:04:58: 868u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**✅ Quantité LLM**: 25u (confidence: high)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**✅ Quantité LLM**: 42u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 1302u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:23: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:46: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 868u

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 155u

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**✅ Quantité LLM**: 310u (confidence: high)
**📊 Quantité Réelle**: 124u

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 47u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**✅ Quantité LLM**: 40u (confidence: high)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (12)

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
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Stock prédit: 335.7u (10j restants) → prédit 434u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Stock prédit: 354.7u (13j restants) → prédit 434u mais non commandé |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Stock prédit: 185.3u (8j restants) → prédit 248u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 1 | Stock prédit: 537.4u (14j restants) → prédit 1u mais non commandé |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 180 | Stock prédit: -579.6u (-15j restants) → prédit 180u mais non commandé |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 220 | Stock prédit: -568.1u (-14j restants) → prédit 220u mais non commandé |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Stock prédit: -274.7u (-22j restants) → prédit 25u mais non commandé |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 235 | Stock prédit: -782.0u (-39j restants) → prédit 235u mais non commandé |
| [PF1840] LD TARTINADE BIO TRIPACK | 5730 | Stock prédit: -5125.0u (-42j restants) → prédit 5730u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 625 | Stock prédit: -2150.0u (-40j restants) → prédit 625u mais non commandé |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 1556 | Stock prédit: -1084.0u (-40j restants) → prédit 1556u mais non commandé |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 177 | Stock prédit: -611.0u (-40j restants) → prédit 177u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:33:36.823Z*
