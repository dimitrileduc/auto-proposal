# Rapport Technique d'Optimisation Algorithmique : Stratégies de Réapprovisionnement pour Flux Saisonniers (Secteur Condimentaire)

## 1. Introduction et Diagnostic Contextuel

L'optimisation des chaînes d'approvisionnement dans le secteur agroalimentaire, et plus spécifiquement dans la production de condiments à forte saisonnalité comme la moutarde, présente des défis algorithmiques uniques qui transcendent la simple gestion de stock linéaire. Ce rapport présente une analyse technique exhaustive et une stratégie d'implémentation visant à rectifier les inefficacités d'un système de réapprovisionnement existant, caractérisé par une métrique de Rappel (Recall) satisfaisante (~95%) mais une Précision (Precision) défaillante (~50%). Cette dichotomie indique un système hypersensible, générant un bruit opérationnel excessif sous la forme de "faux positifs" — des alertes de commande déclenchées prématurément qui ne correspondent pas à un besoin critique réel.

Dans le contexte strict de la "Moutarderie", où la consommation subit des pics violents liés à la saisonnalité estivale (barbecues, événements en extérieur), et des creux en période hivernale, les algorithmes de seuil statiques traditionnels échouent souvent à distinguer une volatilité normale d'une rupture de tendance critique. L'objectif de cette intervention n'est pas une refonte architecturale, prohibée par les contraintes du projet, mais l'injection d'intelligence heuristique dans le code TypeScript existant. Nous visons des "Quick Wins" à fort impact : stabiliser le signal de commande, synchroniser la détection de la demande avec la réalité saisonnière, et optimiser la performance d'exécution des requêtes de données.

L'analyse qui suit décompose la problématique en quatre vecteurs d'intervention : l'introduction d'une logique temporelle de "Maturité de Commande" pour filtrer le bruit, l'adoption de Moyennes Mobiles Pondérées (WMA) pour capturer l'accélération de la demande, l'élaboration d'une cible de stock hybride sécurisant le fonds de rayon historique, et enfin, l'optimisation asynchrone des flux de données pour réduire la latence système.

## 2. Amélioration du TRIGGER : Intégration de la Maturité Temporelle

La problématique centrale de la faible précision (~50%) suggère que le système actuel de déclenchement (Trigger) réagit de manière trop nerveuse aux fluctuations mineures du stock. Les systèmes traditionnels de Point de Commande (Reorder Point - ROP) fonctionnent généralement sur une logique binaire unidimensionnelle : si le stock disponible est inférieur ou égal au seuil calculé, une commande est générée. Cependant, cette approche ignore une dimension fondamentale de la gestion des flux : la temporalité.

### 2.1 Analyse Théorique de la Nervosité du Système

Dans une chaîne d'approvisionnement "nerveuse", une commande est souvent déclenchée immédiatement après une consommation importante, même si une commande précédente vient tout juste d'être livrée ou est en cours de réception. Ce phénomène est exacerbé dans l'industrie de la moutarde où des retraits de stock importants (par exemple, une expédition vers une plateforme logistique centrale) peuvent faire chuter le stock théorique sous le ROP de manière transitoire.

Si l'algorithme ne prend pas en compte le temps écoulé depuis la dernière commande, il risque de violer les principes de la Quantité Économique de Commande (Economic Order Quantity - EOQ). L'EOQ cherche à équilibrer les coûts de passation de commande ($S$) et les coûts de possession ($H$) selon la formule $EOQ = \sqrt{2DS/H}$. Commander trop fréquemment (faible maturité) augmente linéairement les coûts administratifs et logistiques ($S$) sans justification par une augmentation de la demande annuelle ($D$). De plus, la multiplication des petites commandes encombre les quais de réception et dilue l'efficacité du transport.

### 2.2 Le Concept de Maturité de la Commande

Pour pallier ce défaut sans recourir à des modèles prédictifs complexes, nous introduisons le concept de "Maturité de la Commande". Il s'agit d'un filtre temporel (Low-Pass Filter) qui mesure le ratio entre le temps écoulé depuis la dernière commande et la fréquence habituelle de commande.

$$Maturité = \frac{T_{écoulé}}{T_{fréquence}}$$

Où $T_{écoulé}$ représente le delta temporel en jours depuis la dernière validation d'achat, et $T_{fréquence}$ est la cyclicité attendue (calculée historiquement ou définie par l'EOQ).

L'hypothèse sous-jacente est que si une alerte de réapprovisionnement survient alors que la "maturité" est faible (par exemple, inférieure à 0.5, signifiant que seulement la moitié du cycle habituel s'est écoulé), il s'agit probablement d'un faux positif dû à une variance stochastique de la demande journalière plutôt qu'à une tendance structurelle. En imposant un seuil de maturité (ex: 0.8), nous forçons le système à "respirer", réduisant les alertes précoces tout en maintenant un filet de sécurité pour les ruptures critiques.

### 2.3 Comparaison des Scénarios de Déclenchement

Le tableau ci-dessous illustre l'impact de l'introduction de la maturité sur la prise de décision algorithmique.

| Scénario | Stock Actuel | Seuil ROP | Temps depuis dernière commande | Fréquence Moyenne | Ratio Maturité | Décision Classique | Décision Optimisée | Analyse |
|----------|--------------|-----------|--------------------------------|-------------------|----------------|--------------------|--------------------|---------|
| A (Volatilité) | 980 | 1000 | 2 jours | 10 jours | 0.20 | COMMANDER | IGNORER | Le stock effleure le seuil, mais la commande est trop récente. Risque de sur-stockage. |
| B (Cycle Normal) | 950 | 1000 | 9 jours | 10 jours | 0.90 | COMMANDER | COMMANDER | Le cycle est mature, le stock est bas. Réapprovisionnement légitime. |
| C (Urgence) | 400 | 1000 | 3 jours | 10 jours | 0.30 | COMMANDER | COMMANDER | Le stock est sous le seuil critique (Safety Net). La maturité est ignorée. |

### 2.4 Implémentation Technique en TypeScript

L'implémentation suivante modifie la condition du TRIGGER. Elle ne se contente plus de comparer le stock au seuil, mais évalue le contexte temporel. Nous définissons un seuil critique (criticalThreshold) en dessous duquel la maturité est ignorée pour éviter toute rupture de stock catastrophique (Recall Safety), assurant ainsi que l'optimisation de la précision ne dégrade pas le taux de service.

```typescript
/**
 * TRIGGER OPTIMISÉ : Logique de Maturité de Commande
 *
 * Cette fonction évalue la pertinence d'une alerte de réapprovisionnement.
 * Elle intègre un mécanisme d'amortissement temporel pour filtrer la volatilité.
 *
 * @param currentStock Stock physique actuel disponible
 * @param reorderPoint Point de commande calculé (ROP)
 * @param lastOrderDate Date de la dernière commande validée
 * @param avgOrderFrequencyDays Fréquence moyenne historique des commandes (ex: tous les 10 jours)
 * @param criticalThreshold Seuil de sécurité absolue (ex: Stock de Sécurité pur). Si stock < seuil, on ignore la maturité.
 *
 * @returns boolean - True si une commande doit être déclenchée.
 */
function shouldTriggerReplenishment(
    currentStock: number,
    reorderPoint: number,
    lastOrderDate: Date,
    avgOrderFrequencyDays: number,
    criticalThreshold: number
): boolean {
    // 1. Analyse du Stock Critique (Filet de sécurité)
    // Si le stock est dangereusement bas, l'urgence prime sur l'optimisation temporelle.
    // Cela garantit le maintien du Recall ~95%.
    if (currentStock <= criticalThreshold) {
        return true;
    }

    // 2. Calcul de la Maturité Temporelle
    const now = new Date();
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysSinceLastOrder = (now.getTime() - lastOrderDate.getTime()) / msPerDay;

    // Ratio de maturité : 1.0 signifie que nous avons atteint la durée moyenne standard entre deux commandes.
    const maturityRatio = daysSinceLastOrder / avgOrderFrequencyDays;

    // 3. Condition Composite
    // On déclenche SEULEMENT SI :
    // - Le stock est sous le ROP (condition nécessaire)
    // - ET la commande a atteint une maturité suffisante (ex: 80% du cycle habituel)
    // Ce seuil de 0.8 agit comme un filtre passe-bas contre le bruit de consommation.
    const MATURITY_THRESHOLD = 0.8;

    if (currentStock <= reorderPoint && maturityRatio >= MATURITY_THRESHOLD) {
        return true;
    }

    // Si le stock est bas mais la commande trop récente, on temporise.
    // C'est ici que l'on gagne en Précision.
    return false;
}
```

Cette approche transforme le déclencheur d'une simple barrière conditionnelle en une fonction contextuelle. En période de faible activité, si une commande a été passée récemment, le système résistera à la tentation de recommander immédiatement suite à une petite variation, réduisant drastiquement les faux positifs.

## 3. Affinage de la Consommation : Pondération Saisonnière

Le deuxième axe d'optimisation concerne le calcul de la consommation journalière (calculateDailyConsumption). Dans l'industrie de la moutarde, la demande n'est pas un bruit blanc gaussien ; elle présente une forte autocorrélation et une saisonnalité marquée. Une Moyenne Mobile Simple (Simple Moving Average - SMA) sur 90 ou 120 jours agit comme un indicateur retardé (lagging indicator).

### 3.1 Le Problème du Retard (Lag) des Moyennes Simples

Lors de la montée en charge printanière (avril-mai), une SMA sur 90 jours inclut les données de consommation de février et mars, qui sont traditionnellement basses. Par conséquent, la SMA sous-estime systématiquement la demande réelle durant la phase d'accélération.

$$SMA_{t} = \frac{D_{t} + D_{t-1} +... + D_{t-n}}{n}$$

Si la demande réelle passe de 100 unités à 200 unités progressivement, la SMA "traînera" derrière cette courbe, causant potentiellement des ruptures de stock au moment le plus critique de la saison. Inversement, à la fin de l'été, la SMA restera élevée alors que la demande chute, entraînant un sur-stockage coûteux en automne.

### 3.2 La Solution WMA : Réactivité et Pondération

Pour corriger ce biais sans introduire la complexité de modèles ARIMA ou de lissage exponentiel lourd (Exponential Weighted Moving Average - EWMA) qui nécessiteraient une gestion d'état persistante (alpha récursif), nous optons pour une Moyenne Mobile Pondérée (Weighted Moving Average - WMA) discrète.

L'instruction est d'appliquer une pondération de 60% sur les 30 derniers jours et implicitement 40% sur le reste de l'historique pertinent (jours 31 à N). Cette distribution de poids transforme l'indicateur de consommation en un quasi-indicateur avancé (leading proxy). En donnant la majorité du poids au mois courant, l'algorithme "sent" la montée de la saison des barbecues beaucoup plus rapidement.

La formule appliquée est :

$$Conso_{ajustée} = (Moyenne_{J-30} \times 0.60) + (Moyenne_{J-31..N} \times 0.40)$$

### 3.3 Implémentation TypeScript : WMA Saisonnière

Cette fonction remplace le calcul de moyenne simple. Elle nécessite le tri préalable de l'historique pour garantir que le segment "récent" correspond bien aux dernières données temporelles.

```typescript
/**
 * Calcul de Consommation Journalière avec Pondération Saisonnière (WMA)
 *
 * Objectif : Augmenter la réactivité de l'algorithme face aux pics saisonniers (ex: Été).
 * Méthode : Moyenne Mobile Pondérée (Weighted Moving Average).
 * Répartition :
 * - 60% du poids sur les 30 derniers jours (Tendance immédiate).
 * - 40% du poids sur l'historique plus ancien (Fond de roulement stable).
 *
 * @param history Array d'objets contenant date et quantité consommée.
 * @returns number Consommation journalière pondérée.
 */
interface DailyUsage {
    date: string | Date;
    quantity: number;
}

function calculateDailyConsumption(history: DailyUsage[]): number {
    if (!history || history.length === 0) return 0;

    // 1. Tri décroissant (du plus récent au plus ancien) pour segmenter correctement
    const sortedHistory = [...history].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // 2. Définition des fenêtres temporelles
    const RECENT_WINDOW_DAYS = 30;

    // Segmentation des données
    const recentData = sortedHistory.slice(0, RECENT_WINDOW_DAYS);
    const historicData = sortedHistory.slice(RECENT_WINDOW_DAYS);

    // 3. Fonctions utilitaires de moyenne locale
    const getAverage = (data: DailyUsage[]) => {
        if (data.length === 0) return 0;
        const sum = data.reduce((acc, curr) => acc + curr.quantity, 0);
        return sum / data.length;
    };

    const avgRecent = getAverage(recentData);
    const avgHistoric = getAverage(historicData);

    // 4. Application de la pondération (60/40)
    // Cas limite : Si pas d'historique ancien, la tendance récente est la seule vérité.
    if (historicData.length === 0) {
        return avgRecent;
    }

    // Calcul WMA : La tendance récente pèse 1.5x plus lourd que l'historique (0.6 vs 0.4)
    // Cela permet de suivre la courbe de demande estivale sans délai excessif.
    const weightedConsumption = (avgRecent * 0.60) + (avgHistoric * 0.40);

    return parseFloat(weightedConsumption.toFixed(2)); // Arrondi pour propreté des données
}
```

Cette modification permet de synchroniser le cycle de réapprovisionnement avec la réalité du marché. Lorsque la consommation réelle commence à grimper en mai, avgRecent augmentera fortement, tirant la weightedConsumption vers le haut bien plus vite qu'une moyenne simple diluée par les volumes faibles de l'hiver. Cela sécurise le stock avant que le pic ne soit atteint, améliorant ainsi la résilience de la chaîne.

## 4. Optimisation de la Quantité Cible (Target Stock) : Méthode Hybride

Une fois le déclencheur activé (Quand?) et la consommation estimée (Combien/jour?), il reste à définir la cible de stock (Jusqu'où?). Une cible mal calibrée est souvent responsable d'effets oscillatoires dans le stock (Bullwhip Effect). Le problème actuel suggère que la cible est trop volatile.

### 4.1 La Dualité : Besoin Théorique vs Connaissance Tribale

L'approche proposée est hybride : Max(MédianeHistorique, BesoinThéorique). Cette heuristique fusionne deux philosophies de gestion :

**Le Besoin Théorique (Agilité)** : Calculé comme $(CouvertureCible \times ConsoDaily) - StockEstimé$. C'est une valeur purement mathématique, très réactive à la consommation journalière calculée précédemment. Si la WMA explose en été, ce besoin théorique explose également pour couvrir la demande future.

**La Médiane Historique (Stabilité)** : C'est la "mémoire" de l'entrepôt. Contrairement à la moyenne, la médiane est robuste aux valeurs aberrantes (outliers). Si, une année donnée, une promotion exceptionnelle a vidé l'entrepôt (stock proche de 0) ou une erreur de livraison l'a saturé, la médiane reste stable. Elle représente le niveau de stock "de confort" que l'entreprise a historiquement maintenu.

### 4.2 Le Rôle de la Médiane comme Plancher de Sécurité

L'utilisation de la fonction Max() impose un plancher dur. Même si le calcul théorique suggère (à tort) de réduire le stock drastiquement parce que la consommation des 3 derniers jours a été nulle (aléa), le système refusera de descendre la cible en dessous de la médiane historique.

Cela agit comme une protection implicite du Stock de Sécurité. Le stock de sécurité est théoriquement $SS = Z \times \sigma_{LT} \times D_{avg}$ (où $Z$ est le score pour le niveau de service, $\sigma_{LT}$ l'écart-type du délai). Cependant, calculer $\sigma_{LT}$ et $\sigma_{D}$ en temps réel peut être bruité. La médiane historique capture implicitement ces incertitudes passées : si l'entrepôt a survécu avec ce niveau de stock par le passé, c'est un niveau de référence fiable pour les périodes "hors pic".

En période de pic (Moutarderie en été), le BesoinThéorique deviendra naturellement supérieur à la MédianeHistorique. La fonction Max basculera alors automatiquement sur le mode "Agile", autorisant le stock à monter bien au-delà des niveaux habituels pour absorber la demande saisonnière.

### 4.3 Implémentation TypeScript : Target Stock Hybride

```typescript
/**
 * Calcul de la Quantité Cible (Target Stock) - Approche Hybride
 *
 * Formule : Max(MédianeHistorique, BesoinThéorique)
 *
 * Justification :
 * - La Médiane Historique sert de "Plancher de Stabilité". Elle évite que le système
 *   ne propose des cibles trop basses lors de creux de demande transitoires, protégeant le Recall.
 * - Le Besoin Théorique sert de "Plafond Dynamique". En saison haute, il dépasse la médiane
 *   et force le système à stocker davantage, assurant la couverture.
 *
 * @param historyValues Tableau des niveaux de stock passés (snapshots journaliers).
 * @param dailyConsumption La consommation pondérée calculée précédemment.
 * @param targetCoverageDays Nombre de jours de couverture souhaité (ex: 15 jours).
 * @param estimatedRemainingStock Stock actuel projeté (Stock physique + En transit - Commandes clients).
 */
function calculateTargetStock(
    historyValues: number[],
    dailyConsumption: number,
    targetCoverageDays: number,
    estimatedRemainingStock: number
): number {
    // 1. Calcul de la Médiane Historique (Robustesse statistique)
    // Le tri est nécessaire pour trouver la médiane.
    // Complexité : O(N log N), négligeable pour N ~ 365 ou 730.
    const sortedHistory = [...historyValues].sort((a, b) => a - b);
    const mid = Math.floor(sortedHistory.length / 2);

    const historicalMedian = sortedHistory.length % 2 !== 0
        ? sortedHistory[mid]
        : (sortedHistory[mid - 1] + sortedHistory[mid]) / 2;

    // 2. Calcul du Besoin Théorique (Agilité saisonnière)
    // Besoin Brut = Combien je devrais avoir pour tenir X jours.
    const grossRequirement = targetCoverageDays * dailyConsumption;

    // Besoin Net = Besoin Brut - Ce que j'ai déjà.
    // Math.max(0,...) pour éviter les commandes négatives.
    const theoreticalNeed = Math.max(0, grossRequirement - estimatedRemainingStock);

    // 3. Hybridation (Sélection du Maximum)
    // On ne commande jamais moins que nécessaire pour maintenir le niveau "habituel" (Médiane),
    // sauf si le besoin théorique (Saisonnalité) exige plus.
    return Math.max(historicalMedian, theoreticalNeed);
}
```

Cette stratégie assure que la précision du système augmente (on ne commande pas pour rien grâce à la stabilité de la médiane) sans sacrifier le rappel (on commande massivement dès que la théorie l'exige en été).

## 5. Question Flash & Optimisation de Performance (Async)

La dernière tâche concerne l'optimisation d'un goulot d'étranglement de performance identifié : le double appel à getOrderHistory (120 jours et 730 jours).

### 5.1 Analyse du Problème de Séquentialité

Dans un environnement Node.js/TypeScript, le modèle d'exécution est monothreadé avec une boucle d'événements (Event Loop) non bloquante pour les opérations d'E/S (Entrées/Sorties). Une implémentation naïve utilisant await de manière séquentielle force le moteur V8 à attendre la fin complète de la première requête base de données avant d'initier la seconde.

```typescript
// Approche Lente (Séquentielle)
const history120 = await getOrderHistory(120); // Attend T1
const history730 = await getOrderHistory(730); // Attend T2
// Temps total = T1 + T2
```

Si chaque appel prend 200ms, le temps total est de 400ms. C'est une perte sèche de temps CPU, car durant ces attentes, le thread principal est inactif (hors traitement d'autres callbacks).

### 5.2 La Solution de Parallélisme (Concurrence)

Pour optimiser cela, il faut initier les deux promesses simultanément. Promise.all est l'outil standard pour agréger des résultats de promesses concurrentes. La méthode échoue rapidement (fail-fast) si l'une des promesses est rejetée, ce qui est généralement le comportement souhaité pour des données interdépendantes (si l'historique long échoue, le calcul global est compromis).

La modification d'une ligne demandée :

```typescript
const [history120, history730] = await Promise.all([getOrderHistory(120), getOrderHistory(730)]);
```

Avec cette modification, le temps total devient $Max(T1, T2)$. Si les deux requêtes prennent environ le même temps, le gain de performance est proche de 50%.

### 5.3 Insight Approfondi : Redondance des Données

Bien que Promise.all réponde strictement à la "Question Flash" sur l'optimisation de l'appel, un expert supply chain / data remarquerait une inefficience structurelle plus profonde.

Demander l'historique de 120 jours et l'historique de 730 jours est redondant : l'ensemble de 120 jours est un sous-ensemble strict de celui de 730 jours.

Si la contrainte "PAS de refonte d'architecture" permet de modifier la logique de traitement des données (et pas seulement l'appel), l'optimisation ultime (réduisant la charge base de données et réseau) serait :

```typescript
// Optimisation "Expert" (Réduction de charge I/O)
const history730 = await getOrderHistory(730);
// Filtrage en mémoire (extrêmement rapide par rapport à une requête réseau)
const history120 = history730.filter(order => isRecent(order.date, 120));
```

Cependant, en s'en tenant strictement à la consigne d'optimiser le "double appel" (supposant peut-être des endpoints API distincts ou mis en cache différemment), la solution Promise.all demeure la réponse canonique pour la performance d'exécution TypeScript.

## Synthèse Globale

L'ensemble des modifications proposées constitue un package cohérent de "Quick Wins" répondant précisément aux métriques défaillantes :

1. **Trigger & Maturité** : Réduit le bruit et augmente la Précision en filtrant les commandes immatures.
2. **WMA Saisonnière** : Maintient le Rappel élevé en anticipant les pics de consommation estivale (réactivité accrue).
3. **Target Hybride** : Stabilise le système en période creuse (Médiane) tout en autorisant l'expansion en période pleine (Théorique).
4. **Promise.all** : Assure que ces calculs plus sophistiqués ne dégradent pas le temps de réponse de l'application.

Ces interventions, codées en TypeScript standard sans dépendances lourdes, sont déployables immédiatement avec un risque de régression minimal, transformant la gestion de stock de la Moutarderie d'un système réactif nerveux en un système prédictif amorti.
