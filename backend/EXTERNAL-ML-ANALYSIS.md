# Analyse Stratégique et Feuille de Route ML/LLM pour la Prévision Proactive des Réapprovisionnements B2B

**Source** : Analyse externe reçue le 15 novembre 2025

---

## I. Analyse Stratégique : Des Déclencheurs Heuristiques à une Architecture Prédictive de Réapprovisionnement

### A. Validation des Défaillances du Système Actuel

L'analyse fournie du système heuristique actuel est lucide et correcte. Les résultats du backtest (Rappel : 72,3 %, Précision : 42,7 %, MAPE : 41,3 %) sont la signature classique d'un système conceptuellement juste mais mécaniquement défaillant. Le système actuel détecte avec succès la plupart des besoins (rappel élevé), mais génère un volume inacceptable de faux positifs (précision faible), tout en étant très imprécis sur les quantités (MAPE élevé).

Une déconstruction des trois briques révèle des failles fondamentales :

#### Déconstruction de la "Brique A" (Consommation Linéaire)

L'algorithme `consumptionPerDay = sum(quantities) / 180` est la principale source d'erreur. Il applique un modèle continu et linéaire (comme un débit d'eau) à un processus intermittent et événementiel (une commande B2B). La demande intermittente, caractérisée par de nombreuses périodes à zéro, ne peut pas être modélisée avec précision par une simple moyenne. Cette approche par moyenne arithmétique échoue par conception à capturer la saisonnalité, les tendances de croissance (comme dans l'exemple du client saisonnier), ou la nature même des commandes B2B.

#### Déconstruction de la "Brique B" (Logique de Commande Unique)

La prédiction de stock, `estimatedStock = lastOrder.quantity - (daysElapsed × consumptionPerDay)`, est une logique sans mémoire. Elle ignore le signal prédictif le plus riche de l'historique du client : son cycle de commande. L'exemple du Ketchup illustre parfaitement ce problème : le système ignore le schéma ("commande toutes les 15 jours") et se focalise sur le dernier événement ("500 unités"), conduisant à un faux négatif critique. L'objectif n'est pas de modéliser la dernière commande, mais de modéliser l'intervalle entre les demandes (inter-demand interval).

#### Déconstruction de la "Brique C" (Quantité Médiane)

L'utilisation de `quantity = median(last_5_orders)` est réactive, et non prédictive. Comme indiqué, elle ne parvient pas à capturer la croissance et ne fait que répéter le passé. Un modèle prédictif devrait estimer la quantité probable suivante en fonction des tendances et du contexte, et non de la tendance centrale historique.

### B. L'Aperçu Central : Recadrer le Problème de "Série Temporelle" à "Modélisation d'Événements"

La clé pour dépasser la performance actuelle de 43 % de précision ne réside pas dans le réglage fin des heuristiques existantes, mais dans un recadrage fondamental du problème.

#### 1. L'Échec d'Azure AutoML : Un Symptôme de Données Inadaptées

L'échec de la tentative avec Azure AutoML Time Series est un diagnostic précieux. AutoML a échoué parce qu'il a été configuré pour un problème de prévision de séries temporelles standard. Or, les modèles standards (ARIMA, Lissage Exponentiel) sont conçus pour des données denses et continues et échouent systématiquement sur des données éparses et intermittentes.

Le fait qu'un modèle simple (ExponentialSmoothing, RMSE 0,38) ait surperformé un modèle complexe (XGBoost, RMSE 0,71) est un symptôme classique de données éparses combinées à un déficit de features (ingénierie des fonctionnalités). Le modèle XGBoost, bien que puissant, n'avait aucun schéma pertinent à apprendre à partir des 5 colonnes brutes fournies.

#### 2. Le Nouveau Paradigme : Le Modèle en Deux Parties (Hurdle Model)

Le problème doit être reformulé. L'objectif n'est pas de prévoir une seule série temporelle éparse de quantités (ex: [0, 0, 130, 0, 0, 0, 260, 0,...]). L'objectif est de modéliser deux processus distincts mais liés. Cette approche est connue sous le nom de "modèle en deux parties" ou "Hurdle Model" (modèle à obstacle) :

**Partie 1 : Le "Déclencheur" (Classification)**
Quel est le probabilité qu'un client ait un besoin de réapprovisionnement (c'est-à-dire qu'il franchisse son seuil de commande invisible) dans la fenêtre de proposition (ex: 19 jours)? Il s'agit d'un problème de classification binaire.

**Partie 2 : La "Quantité" (Régression)**
Étant donné qu'une commande a lieu, quelle sera la quantité de cette commande? Il s'agit d'un problème de régression entraîné uniquement sur les données non nulles.

#### 3. La Variable Latente : Le Proxy de Stock

La contrainte métier fondamentale est l'absence d'accès aux stocks des clients. L'heuristique actuelle (estimatedStock) est une tentative de créer un proxy pour cette variable latente. La faible précision de 43 % est le coût d'un mauvais proxy.

Le nouveau système ML doit faire de même, mais en utilisant des proxys non linéaires et basés sur les données. Les features conçues pour le modèle de classification (par exemple, `jours_depuis_derniere_commande`, `intervalle_moyen_inter_demande`) ne sont pas seulement des "features" ; elles sont les entrées d'un modèle appris et piloté par les données qui estime l'état caché des stocks du client. Améliorer ce proxy est la clé pour améliorer la précision.

---

## II. La Stratégie ML Fondamentale : Construire un Modèle de Prévision en Deux Parties (Hurdle)

Pour mettre en œuvre ce nouveau paradigme, l'architecture doit être divisée en deux modèles ML distincts qui remplacent les briques B et C.

### A. Partie 1 : Le Modèle "Déclencheur" (Classification Binaire)

Ce modèle remplace la "Brique B" (Prédiction de Stock). Au lieu de calculer un seuil déterministe (`daysUntilStockout < 19`), le système prédira une probabilité : $P(\text{commande dans les 19 prochains jours})$.

**Modèle Recommandé** : LightGBMClassifier ou XGBoostClassifier. Ces modèles basés sur les arbres de décision sont l'état de l'art pour les données tabulaires, gèrent nativement les fonctionnalités catégorielles et sont très performants, comme l'ont démontré les gagnants de la compétition M5.

**Préparation des Données (Cruciale)** : Les données événementielles (historique des commandes) doivent être transformées en un "panel" de données.

- Créer un dataframe avec une ligne pour chaque combinaison `(client_id, product_id, date)` pour toutes les dates de la fenêtre d'analyse (ex: 730 jours). Cela créera un grand ensemble de données, majoritairement composé de zéros.
- **Variable Cible (y)** : Créer une colonne `will_order_in_19d`. Pour une ligne donnée `(client_X, produit_Y, date_T)`, cette valeur est 1 si le client X a commandé le produit Y à un moment quelconque entre $T+1$ et $T+19$. Sinon, elle est de 0.
- **Features (X)** : Ce dataframe sera ensuite enrichi avec les fonctionnalités (features) décrites dans la Section III.

**Implémentation** : Le problème devient une classification binaire standard. Le modèle produira une probabilité (ex: 0,75). Un seuil (ex: $P > 0,5$) peut alors être défini pour déclencher une proposition. Cela permet un réglage fin de la balance Précision/Rappel, contrairement à la règle fixe actuelle de 19 jours.

### B. Partie 2 : Le Modèle "Quantité" (Régression)

Ce modèle remplace la "Brique C" (Quantité Médiane). Il prédit la quantité attendue, conditionnellement au fait qu'une commande ait lieu : $E[\text{quantité} | \text{commande} > 0]$.

**Modèle Recommandé** : LightGBMRegressor ou XGBoostRegressor.

**Préparation des Données** : Ce modèle est entraîné uniquement sur les lignes de commande non nulles de l'historique (les $\approx$ 85 000 lignes).

- **Variable Cible (y)** : `product_uom_qty`.
- **Features (X)** : Les fonctionnalités de la Section III, calculées à la date de la commande.

**Distinction (Hurdle vs. Zero-Inflated)** : L'approche recommandée est un Hurdle Model. Il s'agit d'un processus en deux étapes, plus simple à mettre en œuvre et à déboguer dans un environnement comme scikit-learn. Il s'oppose à un modèle Zero-Inflated (ZI), qui tente de modéliser simultanément les "vrais zéros" (le client n'a pas besoin du produit) et les "zéros événementiels" (le client a besoin du produit mais n'a pas encore commandé). Pour ce cas d'usage B2B, le modèle Hurdle est conceptuellement plus propre : il modélise deux décisions métier distinctes : "Est-ce le moment de recommander?" et "Quelle quantité?".

**Alternative (Avancée)** : Pour une précision potentiellement plus élevée, des frameworks comme XGBoostLSS permettent de modéliser des distributions "Zero-Adjusted" (ex: ZAGamma) ou "Zero-Inflated" (ex: ZIPoisson). Cela modélise la quantité comme une seule distribution complexe. Ceci est une itération potentielle après le MVP.

### C. Implémentation Python (Pipeline Conceptuel scikit-learn)

Pour une implémentation propre, un estimateur scikit-learn personnalisé peut être créé. Cet objet encapsule la logique en deux parties, le rendant compatible avec les pipelines scikit-learn.

```python
import numpy as np
from sklearn.base import BaseEstimator, RegressorMixin
from sklearn.model_selection import train_test_split
from lightgbm import LGBMClassifier, LGBMRegressor

# Concept basé sur [26]
class HurdleRegressor(BaseEstimator, RegressorMixin):
    """
    Un estimateur en deux parties (Hurdle Model) qui utilise
    un classificateur pour prédire la probabilité de non-zéros
    et un régresseur pour prédire la magnitude des non-zéros.
    """
    def __init__(self, classifier=None, regressor=None):
        self.classifier = classifier or LGBMClassifier()
        self.regressor = regressor or LGBMRegressor()

    def fit(self, X, y):
        """
        Entraîne le modèle en deux parties.
        Le classificateur est entraîné sur toutes les données (y > 0 vs y == 0).
        Le régresseur est entraîné uniquement sur les données non nulles (y > 0).
        """
        # 1. Entraîner le classificateur (Partie 1: Le "Déclencheur")
        y_binary = (y > 0).astype(int)
        self.classifier.fit(X, y_binary)

        # 2. Entraîner le régresseur (Partie 2: La "Quantité")
        X_nonzero = X[y > 0]
        y_nonzero = y[y > 0]

        if len(y_nonzero) > 0:
            self.regressor.fit(X_nonzero, y_nonzero)
        else:
            # Gérer le cas où il n'y a pas de données non nulles dans le set d'entraînement
            print("Warning: No non-zero samples found for regression part.")

        return self

    def predict(self, X):
        """
        Prédit la quantité attendue.
        Retourne : P(y > 0) * E[y | y > 0]
        """
        # 1. Prédire la probabilité d'une commande
        prob_nonzero = self.classifier.predict_proba(X)[:, 1]

        # 2. Prédire la quantité conditionnelle
        # S'assurer que le régresseur a été entraîné
        if hasattr(self.regressor, 'classes_'):
            pred_nonzero = self.regressor.predict(X)
            # S'assurer que les prédictions négatives sont remises à zéro
            pred_nonzero[pred_nonzero < 0] = 0
        else:
            # Si le régresseur n'a jamais vu de données non nulles
            pred_nonzero = np.zeros(X.shape)

        # 3. Combiner les prédictions
        expected_value = prob_nonzero * pred_nonzero
        return expected_value

    def predict_trigger_probability(self, X):
        """
        Méthode utilitaire pour obtenir uniquement la probabilité du déclencheur (Partie 1).
        C'est ce qui sera utilisé pour le déclenchement de la proposition.
        """
        return self.classifier.predict_proba(X)[:, 1]

    def predict_quantity_given_order(self, X):
        """
        Méthode utilitaire pour obtenir uniquement la quantité prédite (Partie 2).
        C'est ce qui sera utilisé pour remplir le devis.
        """
        pred_qty = self.regressor.predict(X)
        pred_qty[pred_qty < 0] = 0
        return pred_qty
```

**Note** : Dans l'implémentation de production, le HurdleRegressor ci-dessus ne serait pas utilisé. Au lieu de cela, les deux modèles (LGBMClassifier et LGBMRegressor) seraient entraînés et utilisés séparément, comme décrit dans les sections II.A et II.B, car leurs cibles (`will_order_in_19d` vs `quantity`) et leurs ensembles de données d'entraînement (panel complet vs lignes de commande non nulles) sont différents. Le code ci-dessus est une simplification conceptuelle.

---

## III. Pilier Fondamental : Une Stratégie d'Ingénierie des Fonctionnalités (Feature Engineering) Prioritée

### A. Le Déficit de Fonctionnalités : Pourquoi AutoML a Échoué

L'export actuel (customer_id, product_id, date, quantity, product_category) ne fournit presque aucun signal prédictif. L'"ingénierie des fonctionnalités automatisée" d'AutoML crée de simples décalages (lags) et des fonctionnalités calendaires, qui sont totalement insuffisantes pour la demande intermittente B2B.

La compétition M5 et les études de cas ML B2B ont été remportées grâce à une ingénierie des fonctionnalités sophistiquée. Le modèle (ex: LightGBM) est secondaire par rapport à la qualité des fonctionnalités.

### B. Remplacements Basés sur les Fonctionnalités pour les Heuristiques

L'objectif de l'ingénierie des fonctionnalités est de créer des remplacements dynamiques et basés sur les données pour les heuristiques statiques et défaillantes actuelles.

**Heuristique (Brique A)** : `consumptionPerDay = sum(quantities) / 180` (une moyenne statique sur 180 jours).
→ **Remplacement ML** : Un ensemble de moyennes mobiles dynamiques (ex: `avg_qty_last_30d`, `avg_qty_last_90d`, `avg_qty_last_180d`) et les ratios entre elles (ex: `avg_qty_30d / avg_qty_180d` pour capturer l'accélération).

**Heuristique (Brique B)** : `estimatedStock` (un proxy de cycle sans mémoire basé sur `lastOrder.quantity`).
→ **Remplacement ML** : Un ensemble riche de fonctionnalités de cycle. Les fonctionnalités les plus importantes du modèle seront : `days_since_last_order` (jours depuis la dernière commande), `avg_inter_demand_interval` (ADI, intervalle moyen inter-demande), et `stddev_inter_demand_interval` (écart-type de l'ADI). Celles-ci modélisent directement le "rythme cardiaque" de réapprovisionnement du client.

**Heuristique (Brique C)** : `quantity = median(last_5_orders)` (une tendance centrale statique).
→ **Remplacement ML** : Un ensemble de fonctionnalités de volatilité et de tendance. Ex: `demand_volatility_CV_squared` (Coefficient de Variation au carré), `qty_lag_1_order` (quantité de la commande précédente), et `slope_of_sales_last_6m` (pente de régression linéaire sur l'historique des quantités).

### C. Catalogue des Fonctionnalités Priorisées (Top 15+)

Ce tableau est le plan d'action le plus critique. Il fournit le schéma exact du pipeline de transformation des données.

| Nom de la Fonctionnalité | Source(s) Odoo | Modèle(s) Cible | Justification et Rôle |
|---------------------------|----------------|-----------------|----------------------|
| **Fonctionnalités de Cycle (Remplace Brique B)** | | | |
| `days_since_last_order` | sale.order.line | Classificateur | **(Critique)** La fonctionnalité la plus importante. Proxy direct du niveau de stock invisible du client. |
| `avg_inter_demand_interval` (ADI) | sale.order.line | Classificateur | Modélise le "rythme de réapprovisionnement" du client. L'échec sur l'exemple Ketchup est dû à son absence. |
| `stddev_inter_demand_interval` | sale.order.line | Classificateur | Mesure la fiabilité du rythme. Un écart-type élevé signifie un client erratique. |
| `days_since_second_last_order` | sale.order.line | Classificateur | Capture les cycles plus complexes (ex: commandes groupées). |
| **Fonctionnalités de Tendance & Volatilité (Remplace Briques A & C)** | | | |
| `demand_volatility_CV_squared` | sale.order.line | Les deux | (Coefficient de Variation au carré). Mesure la variation des quantités. Un $CV^2$ élevé = demande "lumpy" (irrégulière). |
| `rolling_avg_qty_30d / 90d` | sale.order.line | Régresseur | Remplacement dynamique de consumptionPerDay. |
| `qty_acceleration_ratio` | sale.order.line | Régresseur | (`rolling_avg_qty_30d / rolling_avg_qty_180d`). Capture la croissance/décroissance (corrige l'erreur de l'exemple saisonnier). |
| `qty_lag_1_order` | sale.order.line | Régresseur | La quantité de la commande précédente. Souvent un prédicteur fort de la suivante. |
| `slope_sales_last_6m` | sale.order.line | Régresseur | Pente d'une régression linéaire simple sur l'historique des quantités. Modélise directement la croissance. |
| **Fonctionnalités Calendaires & Événementielles** | | | |
| `day_of_week`, `month_of_year` | sale.order.line.date | Les deux | Capture la saisonnalité simple (ex: les restaurants commandent le vendredi). |
| `seasonality_index` | sale.order.line | Les deux | Un indice pré-calculé pour ce produit/catégorie basé sur les ventes agrégées de tous les clients. |
| **Fonctionnalités Niveau Client (Statiques)** | | | |
| `customer_type` | res.partner | Les deux | (Catégorielle) ex: 'Restaurant', 'Magasin', 'Distributeur'. Permet au modèle d'apprendre des schémas partagés. |
| `customer_region` | res.partner | Les deux | (Catégorielle) ex: 'Flandre', 'Wallonie', 'Bruxelles'. |
| `customer_total_spend_12m` | sale.order | Les deux | Proxy pour la "taille" du client. |
| **Fonctionnalités Niveau Produit (Statiques)** | | | |
| `product_category_level_1 / 2` | product.product | Les deux | (Catégorielle) ex: 'Condiments', 'Sauces'. |
| `product_popularity` | sale.order.line | Les deux | (Numérique) Nombre total de clients uniques ayant déjà acheté ce produit. |
| **Fonctionnalités d'Interaction (Avancées)** | | | |
| `product_share_of_wallet` | sale.order | Les deux | (Dépense totale du client pour ce produit) / (Dépense totale du client pour tous les produits). |
| `time_since_first_purchase` | sale.order.line | Les deux | (Date du jour) - (Date de la 1ère commande de ce produit par ce client). Capture la maturité de la relation client-produit. |

---

## IV. Un Cadre pour la Scalabilité et les Données Éparses : La Prévision Hiérarchique

### A. Le Problème des 1,3 Million de Séries : L'Échec des Modèles Individuels

Le diagnostic de 72 % des séries (plus de 936 000 paires client-produit) ayant 3 points de données ou moins est correct. Il est mathématiquement impossible d'entraîner un modèle robuste sur 3 points de données.

La solution n'est pas de les traiter comme 1,3 million de séries indépendantes. Il faut utiliser un **Modèle Global (Global Model)** qui "emprunte de la force" (borrows strength) à travers toutes les séries.

### B. Stratégie 1 (MVP Recommandé) : Le "Modèle Global"

C'est l'approche qui a dominé la compétition M5.

Au lieu de construire 1,3 million de modèles, l'approche consiste à construire **un seul Modèle de Classification** et **un seul Modèle de Régression** (décrits dans la Section II).

Dans cette approche, `client_id` et `product_id` ne sont plus des clés de série, mais deviennent des **fonctionnalités catégorielles** (categorical features) dans le modèle.

Le modèle LightGBM créera en interne des représentations (embeddings) pour chaque client et produit. Il apprendra des schémas latents tels que "ce que font les restaurants" ou "comment la mayonnaise est commandée".

Un "Modèle Global" est une forme de modèle hiérarchique implicite. Lorsqu'il rencontre une série éparse pour (Client_A, Produit_B), il base sa prédiction à 90 % sur les schémas partagés appris de (Tous_les_Restaurants, Tous_les_Condiments) et seulement à 10 % sur les 3 maigres points de données locaux. Cela résout le problème de la rareté des données (data sparsity).

### C. Stratégie 2 (Optimisation Avancée) : Réconciliation Hiérarchique Formelle

Si le Modèle Global (Stratégie 1) n'est toujours pas assez précis pour les produits de la "longue traîne", une réconciliation formelle peut être mise en œuvre.

**Définition de la Hiérarchie** : Une hiérarchie basée sur les données Odoo est proposée :

- **Niveau 0** : Ventes Totales
- **Niveau 1** : `product.categ_id` (ex: Sauces, Moutardes)
- **Niveau 2** : `customer_type` (ex: Restaurant, Magasin)
- **Niveau 3** : `res.partner` (ex: DELHAIZE, Restaurant Le Cygne)
- **Niveau 4** : `(partner_id, product_id)` (Séries de base)

**Méthode de Réconciliation** :

- **Éviter Bottom-Up (Ascendant)** : C'est implicitement ce qui est fait maintenant. Prévoir les séries éparses de base et les additionner est imprécis.
- **Envisager Top-Down (Descendant)** : Prévoir le Niveau 0 (Ventes Totales) et le désagréger en fonction des proportions historiques. C'est très robuste et bien adapté aux données éparses, mais cela manque les tendances granulaires au niveau du client.
- **Recommander "Réconciliation Optimale" (MinT)** : Cette méthode combine les prévisions de tous les niveaux, trouvant une prévision "cohérente" qui minimise la variance totale. C'est l'état de l'art en termes de précision.

**Bibliothèques Python** : La bibliothèque Nixtla/hierarchicalforecast est conçue pour cela. Elle serait utilisée pour combiner les prévisions de base (issues du modèle global) et les réconcilier.

**Combinaison (Avancée)** : La littérature est limitée sur la réconciliation de modèles en deux parties (probabilité + quantité). L'approche pragmatique consiste à réconcilier la prédiction de quantité finale ($P \times Q$). Il est fortement recommandé de commencer par la Stratégie 1 (Modèle Global), qui représente 80 % de la valeur pour 20 % de la complexité.

---

## V. L'Application Pragmatique des Grands Modèles de Langage (LLM)

### A. Réponse à la Question 3 : Les LLM sont-ils Pertinents?

**Pour la prévision principale** : **Non**. Pour la tâche centrale de prévision de 1,3 million de séries, les LLM ne sont pas le bon outil en 2025.

- **Coût/Scalabilité** : Le coût d'inférence pour exécuter 1,3 million de prédictions quotidiennes via une API (comme GPT-4o) serait astronomique.
- **Précision** : Sur des données de séries temporelles tabulaires et intermittentes, un modèle LightGBM/XGBoost bien "feature-engineered" surpasse constamment les modèles de prévision SOTA basés sur les LLM (ex: Time-LLM, Chronos, etc.). Les publications ArXiV les plus récentes (fin 2024, début 2025) montrent qu'il s'agit encore d'un domaine de recherche active.
- **Rareté des Données** : Les LLM sont des "few-shot learners", mais ils nécessitent quelques données. Ils ne peuvent pas mieux prévoir à partir de $n=3$ points de données qu'un modèle statistique.

### B. Le Cas d'Usage Correct du LLM : Résoudre le Problème du "Démarrage à Froid" (Cold-Start)

Le modèle ML (Section II) dépend de fonctionnalités historiques (ex: ADI, CV², lags). Il ne peut pas faire de prédiction pour :

- Un tout nouveau client (`res.partner`) sans historique de commandes.
- Un client existant achetant un produit nouvellement listé (`product.product`) pour la première fois.

C'est le problème du "démarrage à froid" (cold-start). L'heuristique actuelle (`orderCount == 1` → `quantity = last order quantity`) est une règle simple pour tenter de le résoudre.

**Approche Hybride** : Utiliser un LLM pour la génération unique de fonctionnalités pour ces entités en démarrage à froid.

#### LLM comme "Moteur de Raisonnement" pour l'Imputation de Fonctionnalités :

Un nouveau client, "Restaurant Le Cygne", est créé dans Odoo.

Les métadonnées disponibles sont : `name='Restaurant Le Cygne'`, `customer_type='Restaurant'`, `region='Bruxelles'`, `email='...'`.

Le modèle ML a besoin de `avg_inter_demand_interval` et `avg_order_quantity` (entre autres), qui sont tous NaN.

Un prompt "Few-Shot Learning" est utilisé pour demander à un LLM (ex: GPT-4o) d'estimer ces paramètres initiaux.

Le prompt du LLM sera "amorcé" avec des exemples d'autres clients similaires.

#### Exemple de Prompt (pour un Nouveau Client) :

```
Vous êtes un analyste de ventes B2B pour une moutarderie artisanale belge. Votre tâche est d'estimer les paramètres d'achat initiaux pour un nouveau client en fonction de son profil Odoo.

**Profil du Nouveau Client :**
- Nom : Restaurant Le Cygne
- Type : Restaurant (Gastronomique)
- Région : Bruxelles

**Exemples (Few-Shot Learning) :**
1.  **Client :** 'Restaurant 't Oud Huis'
    - Type : Restaurant (Gastronomique)
    - Région : Bruxelles
    - Produit : 'Mayonnaise 5L'
    - Intervalle Moyen Inter-Demande : 21 jours
    - Quantité Moyenne par Commande : 20 unités
2.  **Client :** 'Delhaize Botanique'
    - Type : Magasin (Supermarché)
    - Région : Bruxelles
    - Produit : 'Mayonnaise 5L'
    - Intervalle Moyen Inter-Demande : 7 jours
    - Quantité Moyenne par Commande : 260 unités
3.  **Client :** 'Brasserie Georges'
    - Type : Restaurant (Brasserie)
    - Région : Bruxelles
    - Produit : 'Mayonnaise 5L'
    - Intervalle Moyen Inter-Demande : 14 jours
    - Quantité Moyenne par Commande : 40 unités

**Tâche :**
Sur la base du profil du nouveau client et des exemples, générez un objet JSON avec vos meilleures estimations pour 'Restaurant Le Cygne' pour le produit 'Mayonnaise 5L'.

{
  "estimated_avg_inter_demand_interval":?,
  "estimated_avg_order_quantity":?
}
```

**Résultat Attendu** :
Le LLM raisonnera que "Le Cygne" ressemble le plus à "'t Oud Huis" et produira `{"estimated_avg_inter_demand_interval": 20, "estimated_avg_order_quantity": 20}`.

**Action** :
Cette sortie JSON est utilisée pour remplir les valeurs NaN dans la table de fonctionnalités du modèle ML. Le modèle ML peut alors générer sa première prédiction. Après que le client a passé 2-3 commandes réelles, les estimations du LLM sont abandonnées au profit des fonctionnalités réelles et calculées. Il s'agit d'une approche hybride (ML+LLM) puissante, scalable et rentable.

---

## VI. Feuille de Route Incrémentale : Un Plan sur 6 Mois pour Atteindre 70%+ de Précision

### A. Stratégie : Gains Incrémentaux et Validation Pragmatique

L'approche MVP proposée est saine. Elle sera affinée ici. L'objectif est de passer de la baseline heuristique (43 % de Précision) à un système ML à 70 %+. Cette feuille de route est conçue pour une PME avec une équipe technique compétente.

### B. Tableau : Feuille de Route Incrémentale sur 6 Mois

| Phase | Durée | Actions | Outils | Objectif & Métrique Cible |
|-------|-------|---------|--------|---------------------------|
| **Phase 1 : Baseline & Pipeline de Fonctionnalités** | Mois 0-1 | 1. **Baseline Statistique** : Implémenter un modèle intermittent robuste (Méthode de Croston, TSB) pour remplacer l'heuristique consumptionPerDay. C'est un "quick win". <br>2. **Pipeline de Fonctionnalités** : Construire la logique d'ingénierie des fonctionnalités (Section III) comme un batch nocturne qui peuple une "feature table". <br>3. **Backtest** : Ré-exécuter le backtest de 270 jours sur la baseline Croston/TSB. | pandas, statsforecast, sktime, Odoo (SQL) | Valider une meilleure baseline. <br>**Cible** : Précision 43 % → 50-55 %. |
| **Phase 2 : MVP - Le Modèle Global en Deux Parties** | Mois 2-3 | 1. **Développement Modèle** : Construire le modèle "Hurdle" (Section II) en tant que Modèle Global (Section IV). <br>2. **Entraînement** : Entraîner le LGBMClassifier (pour le déclenchement) et le LGBMRegressor (pour la quantité) sur la nouvelle table de fonctionnalités. <br>3. **Tuning & Backtest** : Effectuer un réglage des hyperparamètres et exécuter le backtest complet de 270 jours contre la baseline de la Phase 1. | scikit-learn, LightGBM | Atteindre un saut de précision significatif. <br>**Cible** : Précision 55 % → 65 %+. |
| **Phase 3 : Optimisation & Hiérarchies** | Mois 4-5 | 1. **Analyse d'Erreurs** : Analyser les 35 % de Faux Positifs/Négatifs. Proviennent-ils tous de séries éparses (longue traîne)? <br>2. **Fonctionnalités Hiérarchiques** : Ajouter des fonctionnalités agrégées (ex: `avg_sales_for_category`, `avg_sales_for_client_type`) au modèle global. <br>3. **(Optionnel) Réconciliation Formelle** : Si les séries éparses restent le problème principal, implémenter une réconciliation MinT avec hierarchicalforecast. | hierarchicalforecast | Pousser la précision vers la cible. <br>**Cible** : Précision 65 % → 70-75 %. |
| **Phase 4 : Expansion - Module Cold-Start LLM** | Mois 6 | 1. **Développement Prompter** : Construire le service de "prompting" few-shot LLM (Section V). <br>2. **Intégration** : Connecter ce service au déclencheur de création `res.partner` dans Odoo. <br>3. **Déploiement** : Quand un nouveau client est ajouté, le LLM génère ses fonctionnalités initiales pour la table de fonctionnalités du modèle ML. | API openai / anthropic, Python (requests) | Résoudre le problème du "nouveau client". <br>**Métrique** : Délai avant la première proposition précise. |

---

## VII. Recommandations : Outils, Références et Retour sur Investissement (ROI)

### A. Outillage Recommandé (Une Stack Open-Source et Pragmatique)

- **Modèles de Séries Temporelles (Baseline)** : statsforecast. Offre des implémentations rapides de Croston, TSB, SBA, etc., pour la baseline.
- **Framework ML** : scikit-learn. Utiliser ses objets Pipeline et ColumnTransformer pour construire l'ensemble du pipeline de pré-traitement et de modélisation.
- **Modèles Fondamentaux** : LightGBM ou XGBoost. Ce sont les SOTA pour ce type de tâche de modélisation globale sur données tabulaires.
- **Hiérarchie** : hierarchicalforecast. La bibliothèque SOTA de Nixtla si une réconciliation formelle (Phase 3) s'avère nécessaire.
- **Plateforme** : Éviter le "vendor lock-in" avec des interfaces utilisateur "black-box". L'échec avec Azure AutoML démontre la nécessité d'une approche "code-first" et personnalisable. Le modèle Python personnalisé peut toujours être hébergé et déployé sur Azure Machine Learning (en tant que point de terminaison personnalisé), mais il doit être construit sur mesure.

**À Éviter pour ce Problème** :

- **Prophet (Facebook)** : Connu pour ses faibles performances sur la demande intermittente.
- **ARIMA** : Échoue sur les données intermittentes et n'est pas scalable à 1,3 million de séries.

### B. Références Clés et Justification Académique

Une bibliographie formelle n'est pas fournie, mais les articles et concepts clés pour guider ce projet sont :

- **Sur les Modèles en Deux Parties** : Rozanec et al. (2021), "Reframing demand forecasting: a two-fold approach for lumpy and intermittent demand". Cet article valide directement l'approche proposée (Classification + Régression).
- **Sur les Méthodes Intermittentes** : Les travaux fondateurs de Syntetos & Boylan (2005) sur les méthodes SBA/TSB et les revues récentes de la littérature sur le ML pour la demande intermittente.
- **Sur les Modèles Globaux & Hiérarchiques** : Les résultats de la Compétition M5. C'est l'étude de cas canonique qui a prouvé que les modèles globaux (Global Models) LightGBM, riches en fonctionnalités, sont le moyen le plus efficace de gérer des ensembles de données massifs, épars et hiérarchiques.

### C. Retour sur Investissement (ROI) Attendu

L'objectif principal n'est pas seulement "plus de ventes". L'objectif principal est **l'efficacité commerciale et la rétention client**.

**Le Coût de la Faible Précision** : Une précision de 43 % signifie que pour 100 propositions envoyées, 57 sont erronées (Faux Positifs). Ces 57 propositions "spam" nuisent activement à l'image de marque, agacent les clients et, surtout, font perdre du temps à l'équipe commerciale en suivis de devis non pertinents.

**Le ROI d'une Précision de 70 %** :

- **État Actuel** : 100 propositions envoyées → 43 Vrais Positifs, 57 Faux Positifs.
- **État Cible (70 % Précision)** : 100 propositions envoyées → 70 Vrais Positifs, 30 Faux Positifs.

**Résultat 1 (Efficacité Commerciale)** : Une réduction de 47 % des faux positifs ($(57-30)/57$) est atteinte. Cela libère l'équipe commerciale pour qu'elle se concentre uniquement sur les 30 FP (à analyser) et les 70 VP (à convertir), augmentant considérablement leur productivité et leur taux de conversion.

**Résultat 2 (Augmentation des Revenus)** : Le système identifie 70 opportunités correctes.

**Résultat 3 (Confiance et Précision des Quantités)** : En corrigeant également le MAPE de 41 %, les 70 propositions envoyées sont correctement quantifiées. Cela renforce énormément la confiance, car l'entreprise prédit avec précision le besoin du client, réduisant son risque de rupture de stock et sa charge mentale de gestion.

**En conclusion**, ce projet transforme l'équipe de vente de "spammeurs proactifs" en "copilotes de confiance" pour l'inventaire de leurs clients. Le ROI se mesure en taux de conversion plus élevés, en capacité accrue des représentants commerciaux et en fidélité client améliorée.
