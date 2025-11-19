# Rapport d'Analyse Approfondie : Optimisation des Algorithmes de Prévision pour la Demande Intermittente et la Gestion des Stocks dans le Secteur Agroalimentaire B2B

## 1. Introduction et Diagnostic Systémique

L'analyse détaillée du système de prédiction actuel, déployé dans le contexte spécifique de la distribution alimentaire biologique B2B, révèle une dissonance fondamentale entre la nature stochastique de la demande sous-jacente et les modèles déterministes utilisés pour la capturer. Le problème exposé ne se résume pas à une simple imprécision paramétrique, mais relève d'une **inadéquation structurelle** face à ce que la littérature scientifique qualifie de "demande intermittente" ou "lumpy demand" (demande par paquets).

Le constat d'une distribution bimodale des erreurs — caractérisée par une médiane acceptable (0.875) coexistant avec une moyenne arithmétique démesurée (48.51) — constitue la signature statistique classique d'un environnement où les hypothèses de normalité et de continuité de la demande sont violées.

Dans le secteur des produits biologiques, cette complexité est exacerbée par des facteurs exogènes tels que la saisonnalité, la périssabilité des produits et la volatilité des comportements d'achat des clients professionnels (restaurateurs, détaillants spécialisés). Ces acteurs n'opèrent pas selon un flux de consommation linéaire, mais par à-coups, dictés par leurs propres contraintes de stockage et de trésorerie.

L'algorithme actuel, en s'appuyant sur une moyenne mobile simple (`totalQty / actualDays`) et, plus critiquement, sur l'hypothèse d'un stock nul au moment du réapprovisionnement, amplifie mécaniquement la variance naturelle de la demande. Cette amplification se traduit par les "sur-estimations massives" observées, où le système confond le réapprovisionnement de sécurité du client avec une augmentation structurelle de sa consommation quotidienne.

Ce rapport se propose de déconstruire les mécanismes d'échec du système actuel et de formuler une architecture corrective complète. Nous explorerons le passage nécessaire d'une logique de moyenne simple à des **estimateurs probabilistes biais-corrigés** tels que l'**Approximation de Syntetos-Boylan (SBA)** et la méthode de **Teunter-Syntetos-Babai (TSB)**, spécifiquement conçus pour gérer l'obsolescence et l'intermittence.

De plus, nous introduirons une méthodologie d'inférence des stocks "cachés" via l'analyse inversée des points de commande, permettant de s'affranchir de l'hypothèse erronée de rupture de stock systématique. Enfin, l'analyse remettra en question l'usage du MAPE (Mean Absolute Percentage Error) au profit du **MASE (Mean Absolute Scaled Error)**, métrique plus robuste pour les séries temporelles comportant des zéros.

---

## 2. Phénoménologie de la Demande Intermittente et Bimodale

Pour comprendre pourquoi le segment "LOW" (faible historique) performe paradoxalement mieux que le segment "CLEAN" (historique riche), il est impératif d'analyser la structure statistique des données de ventes. Dans le contexte B2B, la demande est rarement lisse. Elle se caractérise par une **double stochasticité** : celle de l'occurrence de la demande (intervalle entre les commandes) et celle de la quantité demandée (volume de la commande).

### 2.1 La Taxonomie de la Demande : Au-delà de la Moyenne

La classification traditionnelle des modèles de demande repose sur deux vecteurs de variabilité : l'**intervalle moyen entre les demandes** ($p$) et le **coefficient de variation des quantités demandées** ($CV^2$). Selon la matrice de classification proposée par Syntetos, Boylan et Croston (SBC), les données du système actuel semblent se disperser entre deux catégories distinctes, expliquant la distribution bimodale des erreurs.

Les clients du segment "LOW", avec une seule commande ou des commandes très espacées, tombent probablement dans la catégorie de la **demande intermittente pure**. Dans ce cas, la variabilité réside principalement dans le temps, tandis que la quantité, lorsqu'elle survient, est relativement stable ou unique. L'approche naïve ou basée sur la fréquence globale utilisée par l'algorithme actuel pour ce segment agit comme un **estimateur "rétréci" (shrinkage estimator)**, qui lisse le bruit temporel. En l'absence de données suffisantes pour "sur-interpréter" une tendance, le modèle reste conservateur, ce qui minimise l'erreur moyenne.

À l'inverse, le segment "CLEAN", comportant plusieurs commandes, est traité par le système comme une **demande lisse (Smooth Demand)**, alors qu'il s'agit vraisemblablement d'une **demande par paquets (Lumpy Demand)**. La demande par paquets se définit par des intervalles irréguliers combinés à des volumes très volatils.

L'application d'une moyenne simple sur ce type de profil est mathématiquement périlleuse. Si un client commande 500 unités tous les 25 jours, la moyenne mobile calcule une consommation de 20 unités/jour. Si la fenêtre de prédiction de 19 jours tombe entièrement dans une période de "silence" (les 24 jours sans commande), le modèle prédit néanmoins une consommation de 380 unités ($20 \times 19$), générant une erreur massive puisque la consommation réelle apparente pour le système est nulle ou différée. C'est ce mécanisme qui génère les outliers de volume mentionnés dans le diagnostic.

### 2.2 L'Échec des Moyennes Mobiles Simples (SMA) face aux "Pics"

L'utilisation de la formule `QuantityNeeded = (TotalQty / ActualDays)` constitue une tentative de linéarisation d'un processus discret. Les méthodes de prévision traditionnelles, telles que le lissage exponentiel simple (SES) ou les moyennes mobiles (SMA), partent du postulat que les valeurs nulles dans une série temporelle sont porteuses d'information sur le niveau de la demande (indiquant une baisse de la demande).

Or, dans le contexte B2B, **une valeur nulle ne signifie pas nécessairement une absence de besoin**, mais souvent une consommation sur stock existant. En traitant ces zéros comme des baisses de demande moyenne, puis en traitant les grosses commandes de réapprovisionnement comme des pics de consommation instantanée, le modèle SMA oscille violemment. Il sous-estime le besoin juste avant une commande (créant un risque de rupture) et le surestime massivement juste après une grosse commande (créant les erreurs de milliers d'unités rapportées).

Le paradoxe observé — où plus de données (segment CLEAN) conduisent à une performance moindre — est une illustration classique du **compromis biais-variance**. Le modèle "CLEAN" tente de s'ajuster trop précisément à un historique bruité (overfitting) avec un outil inadapté (la moyenne simple), capturant ainsi la variance des dates de commande plutôt que la tendance de fond de la consommation. Le modèle "LOW", par sa simplicité, possède un biais élevé mais une variance très faible, ce qui le rend plus robuste face à l'incertitude radicale des nouveaux clients.

---

## 3. Méthodologies Avancées de Prévision pour le B2B

Pour résoudre l'incapacité du système à déterminer "COMBIEN" commander, il est impératif d'abandonner l'approche monolithique de la moyenne simple au profit de méthodes décomposant la demande en ses facteurs constitutifs : **la fréquence et la sévérité**.

### 3.1 La Méthode de Croston : Séparation des Flux

Proposée initialement en 1972, la **méthode de Croston** a marqué une rupture épistémologique en suggérant que les prévisions ne devaient être mises à jour que lorsque la demande survient réellement. Plutôt que de lisser les zéros, Croston propose de maintenir deux séries de lissage exponentiel distinctes : une pour la **taille de la demande non nulle** ($z_t$) et une pour l'**intervalle de temps** entre deux demandes consécutives ($p_t$).

Mathématiquement, si une demande survient à l'instant $t$, les estimations sont mises à jour selon les équations suivantes :

$$\hat{z}_t = \alpha y_t + (1-\alpha)\hat{z}_{t-1}$$

$$\hat{p}_t = \alpha q_t + (1-\alpha)\hat{p}_{t-1}$$

Où $y_t$ est la demande actuelle, $q_t$ le temps écoulé depuis la dernière commande, et $\alpha$ le coefficient de lissage. Le taux de demande prévu est alors le ratio $\hat{Y} = \hat{z}_t / \hat{p}_t$.

Bien que conceptuellement supérieure à la moyenne mobile pour les données intermittentes, la méthode de Croston souffre d'un défaut théorique majeur identifié par Syntetos et Boylan en 2001 : **elle est biaisée positivement**. L'inversion de l'espérance de l'intervalle ($1/E[p]$) n'est pas égale à l'espérance de l'inverse ($E[1/p]$). Concrètement, cela signifie que la méthode de Croston tend structurellement à surestimer la demande future, ce qui correspond exactement au symptôme de "sur-estimations massives" rapporté.

### 3.2 L'Approximation de Syntetos-Boylan (SBA) : Correction du Biais

Pour pallier le biais de Croston, Syntetos et Boylan ont développé une **approximation (SBA)** qui introduit un facteur de correction déflationniste. Cette méthode est aujourd'hui considérée comme le **standard de référence** pour la prévision de la demande irrégulière, en particulier dans la gestion des pièces de rechange et des stocks industriels, qui partagent des caractéristiques similaires avec l'agroalimentaire B2B.

La formule de prévision SBA est définie comme suit :

$$\hat{Y}_{t} = \left( 1 - \frac{\alpha}{2} \right) \frac{\hat{z}_t}{\hat{p}_t}$$

Ce facteur $(1 - \alpha/2)$ réduit mécaniquement la prévision finale. Dans un système où le MAPE explose à cause des sur-estimations, l'adoption du SBA offre une solution mathématique élégante et peu coûteuse en termes de calcul pour "calmer" les prévisions excessives sans sacrifier la réactivité aux vrais pics de demande.

L'implémentation de cet algorithme en Python est directe et permet de traiter les séries temporelles avec une efficacité computationnelle élevée, essentielle pour un système automatisé gérant de nombreux clients.

### 3.3 La Méthode Teunter-Syntetos-Babai (TSB) : Gestion de l'Obsolescence

Un défi spécifique aux produits bio est leur **cycle de vie** (saisonnalité, arrêt de production, changement de carte des restaurants). Une faiblesse critique des méthodes de Croston et SBA est leur incapacité à mettre à jour la prévision pendant les périodes de silence. Si un client cesse de commander un produit, Croston et SBA conserveront la dernière prévision positive indéfiniment, conduisant à un sur-stockage catastrophique de produits périssables.

La méthode **TSB (2011)** remplace l'estimation de l'intervalle ($p$) par une estimation de la **probabilité de demande** ($d_t$). Contrairement à l'intervalle qui n'est mis à jour qu'à l'occurrence d'une commande, la probabilité est mise à jour à chaque période.

$$\hat{d}_t = \hat{d}_{t-1} + \beta (q_t - \hat{d}_{t-1})$$

Si aucune commande ne survient ($q_t = 0$), la probabilité $\hat{d}_t$ diminue progressivement. Par conséquent, la prévision de demande ($\hat{Y}_t = \hat{z}_t \times \hat{d}_t$) converge vers zéro. Cette propriété rend le TSB particulièrement adapté au segment "CLEAN" pour détecter les atterrissages en douceur (clients qui churnent ou produits hors saison) et éviter les outliers générés par des références devenues obsolètes.

### 3.4 L'Approche ADIDA pour la Réduction de la Variance

Une alternative méthodologique pertinente, notamment suggérée pour réduire la variabilité à haute fréquence, est l'approche **ADIDA (Aggregate-Disaggregate Intermittent Demand Approach)**. Le principe est de ne pas chercher à prévoir la demande au niveau quotidien (trop bruité), mais d'agréger les données sur des fenêtres temporelles plus larges (hebdomadaires ou bi-hebdomadaires) pour "lisser" l'intermittence.

Le processus se déroule en trois étapes :

1. **Agrégation** : Les commandes quotidiennes sont sommées en blocs temporels correspondant à l'intervalle moyen inter-demande.
2. **Prévision** : Un modèle classique (comme le lissage exponentiel simple) est appliqué sur cette série agrégée, qui présente alors une structure beaucoup plus "lisse" et moins de zéros.
3. **Désagrégation** : La prévision agrégée est ensuite redistribuée sur les jours individuels pour générer les ordres de commande.

L'intégration d'ADIDA pourrait être particulièrement bénéfique pour les clients dont la cadence de commande est alignée sur des cycles hebdomadaires (restauration), car elle élimine le bruit journalier qui perturbe actuellement l'algorithme de moyenne simple.

### 3.5 Comparatif des Algorithmes

Le tableau ci-dessous synthétise l'adéquation des méthodes selon les caractéristiques observées :

| Algorithme | Gestion Intermittence | Correction Biais | Gestion Obsolescence | Complexité | Adéquation au cas |
|------------|----------------------|------------------|---------------------|------------|-------------------|
| **Moyenne Mobile (Actuel)** | Faible | Non | Non | Très Faible | ❌ Inadapté (Cause des pics) |
| **Croston** | Élevée | Non (Biais +) | Faible | Moyenne | ⚠️ Risqué (Sur-estimation) |
| **SBA** | Élevée | Oui (Déflation) | Faible | Moyenne | ✅ Recommandé (Robustesse) |
| **TSB** | Élevée | Oui | Élevée | Moyenne | ✅ Recommandé (Produits frais/Saisonniers) |
| **ADIDA** | Moyenne | N/A | Moyenne | Élevée | 🔵 Optionnel (Pour réduction de variance) |

---

## 4. Reconstruction de l'État des Stocks : Le Problème du "Zero-Balance"

L'hypothèse selon laquelle le stock estimé (`EstimatedStock`) est égal à zéro avant la dernière commande est identifiée dans le diagnostic comme une cause probable des erreurs. La littérature confirme qu'il s'agit d'une source majeure de distorsion, connue sous le nom de **Zero Balance Proxy Error**.

Dans la réalité logistique, les clients professionnels anticipent la rupture. Ils commandent lorsque leur stock atteint un **Point de Commande (Reorder Point - ROP)** qui inclut un stock de sécurité pour couvrir le délai de livraison.

### 4.1 L'Erreur de Double Comptage

En supposant `Stock = 0`, l'algorithme actuel attribue la totalité de la quantité commandée à la consommation de la période écoulée. Or, une partie significative de cette commande est destinée à reconstituer le stock de sécurité et non à couvrir une consommation immédiate.

**Exemple concret** : un client consomme 10 unités/jour et a un délai de livraison de 2 jours. Il conserve un stock de sécurité de 20 unités. Son ROP est donc de 40 unités ($2 \times 10$ délai + 20 sécurité). Lorsqu'il commande 100 unités, il a encore 40 unités en stock. L'algorithme actuel, aveugle à ce stock résiduel, suppose qu'il a consommé ses précédentes unités jusqu'à la dernière miette. Cela conduit à une surestimation systématique de la **vélocité des ventes quotidienne (Daily Sales Velocity)**, qui se propage ensuite exponentiellement sur la fenêtre de prévision de 120 jours.

### 4.2 Inférence Dynamique via le "Point de Commande Inversé"

Pour corriger cela sans accès aux inventaires réels des clients (ce qui nécessiterait une intégration VMI complexe), il est possible d'implémenter un algorithme d'**Inférence de Position de Stock**. L'idée est de déduire le niveau de stock déclencheur (ROP) à partir de l'historique des intervalles de commande.

La méthodologie proposée est la suivante :

1. **Estimation du ROP Implicite** : Si un client commande systématiquement tous les 14 jours avec une régularité élevée, on peut inférer que son ROP est atteint à $J-14$.

2. **Calcul du Stock Théorique** ($S_t$) : Au lieu de remettre le compteur à zéro à chaque commande, on simule l'évolution du stock jour par jour :

   $$S_t = S_{t-1} - \text{Consommation}_{\text{estimée}} + \text{Réceptions}$$

   $$\text{Consommation}_{\text{estimée}} = \frac{\text{Médiane des commandes passées}}{\text{Intervalle médian}}$$

3. **Correction par Bornage** :
   - Si la simulation indique un stock négatif, cela signale une consommation plus élevée que prévu (stockout) ; le modèle recalibre alors la consommation estimée à la hausse.
   - Si le stock simulé est très élevé au moment d'une nouvelle commande, cela indique que le client "stocke" (forward buying), et l'algorithme doit ajuster le ROP estimé à la hausse.

Cette approche, proche des **modèles de Markov Cachés (Hidden Markov Models - HMM)** utilisés dans la grande distribution pour estimer les stocks en rayon sans inventaire physique, permet de transformer la variable binaire "Commande/Pas Commande" en une estimation continue du niveau de stock.

En intégrant ce stock résiduel estimé ($S_{residuel}$) dans la formule de commande, on réduit mécaniquement la quantité suggérée :

$$\text{QuantitéNécessaire} = (\text{Cible}) - (\text{StockSimulé})$$

Au lieu de soustraire zéro, on soustrait le stock de sécurité présumé du client, ce qui élimine la "sur-estimation massive".

---

## 5. Gestion des Outliers et Nettoyage Statistique des Données

La question de l'exclusion des commandes exceptionnelles est centrale. Dans le B2B, une commande massive (catering, événementiel) est un signal réel de chiffre d'affaires, mais un "bruit" pour la prévision de la demande récurrente. L'inclusion brute de ces pics dans une moyenne simple déforme durablement la prévision (effet de traîne).

### 5.1 Winsorisation vs Troncature (Trimming)

Exclure purement et simplement ces données (Troncature) est dangereux car cela réduit la taille de l'échantillon, déjà critique pour le segment "LOW". La technique recommandée est la **Winsorisation**.

**La Winsorisation** consiste à plafonner les valeurs extrêmes à un certain percentile (par exemple, le 90ème ou 95ème percentile) plutôt que de les supprimer.

- **Méthode** : Sur une fenêtre glissante de 120 jours, toute commande $Q_i$ supérieure au percentile $P_{95}$ est remplacée par la valeur de $P_{95}$.
- **Avantage** : Cela préserve l'information qu'une "commande importante" a eu lieu, mais empêche son amplitude disproportionnée de fausser le calcul de la moyenne ou du lissage exponentiel.

L'application d'une **Winsorisation Glissante (Rolling Winsorization)** est particulièrement adaptée aux données temporelles, car elle permet aux seuils d'écrêtage de s'adapter dynamiquement à l'évolution saisonnière de l'activité du client.

### 5.2 Pondération Temporelle et Saisonnalité

L'utilisateur s'interroge sur l'usage d'une moyenne pondérée. Dans l'agroalimentaire, la récence est prédictive. La consommation de soupe en hiver ne prédit pas celle de gaspacho en été. Utiliser une fenêtre de 120 jours avec des poids égaux (moyenne simple) introduit une inertie nuisible.

L'adoption de **Moyennes Mobiles Pondérées (WMA)** ou, mieux, de lissage exponentiel (intégré dans SBA/TSB), permet d'attribuer un poids plus fort aux données récentes.

$$\text{WMA}_t = \sum_{i=1}^{n} w_i D_{t-i} \quad \text{avec} \quad w_1 > w_2 > ... > w_n$$

Cependant, il est crucial de noter que les moyennes pondérées sont plus sensibles aux outliers récents que les moyennes simples. C'est pourquoi la **Winsorisation (Section 5.1) doit impérativement précéder l'étape de pondération**. Une fois les pics écrêtés, la pondération peut capturer la tendance saisonnière sans réagir excessivement à un événement ponctuel.

---

## 6. Optimisation des Stocks de Sécurité et Niveaux de Service

La question du seuil fixe de 19 jours (14 jours cible + 5 jours délai) soulève un problème de gestion du risque. Un seuil fixe suppose que tous les produits et tous les clients ont la même variabilité. Or, la théorie des stocks démontre que le stock de sécurité (Safety Stock - SS) doit être proportionnel à l'incertitude, et non au volume moyen.

### 6.1 Transition vers des Buffers Dynamiques

Le stock de sécurité optimal est défini par la formule :

$$SS = Z \times \sqrt{ \bar{L}\sigma_D^2 + \bar{D}^2\sigma_L^2 }$$

Où :
- $Z$ est le facteur de niveau de service (ex: 1.65 pour 95%).
- $\sigma_D$ est l'écart-type de la demande journalière.
- $\sigma_L$ est l'écart-type du délai de livraison (Lead Time).

Pour les produits stables (faible $\sigma_D$), le seuil de 19 jours est probablement excessif, contribuant au sur-stockage. Pour les produits volatiles, il peut être insuffisant.

Nous recommandons l'implémentation d'un **Seuil de Couverture Dynamique**. Au lieu de fixer "19 jours" pour tous, le système devrait calculer :

$$\text{JoursCible}_{\text{client}} = \text{DélaiMoyen} + \text{CycleRevue} + \frac{SS}{\text{DemandeMoyenne}}$$

Cela permet d'allouer le capital (le stock) là où le risque est le plus élevé. Pour un client très prévisible, la cible pourrait descendre à 15 jours, réduisant mécaniquement la quantité commandée et améliorant le MAPE/MASE global.

### 6.2 Intégration de la Variabilité du Délai (Lead Time)

La variabilité du délai fournisseur ($\sigma_L$) est importante. Dans le bio, les aléas logistiques ou de récolte sont fréquents. Si le système actuel utilise un délai fixe de 5 jours, il ignore le risque fournisseur. L'intégration de la variance du délai dans le calcul du buffer (via la formule ci-dessus) permet de sécuriser les approvisionnements critiques sans gonfler artificiellement les commandes sur les produits fiables.

### 6.3 Approche par Bootstrapping (WSS)

Pour les cas où la distribution de la demande est trop erratique pour être modélisée par une loi normale (ce qui est fréquent pour les "outliers de volume"), les méthodes paramétriques (calcul de $\sigma$) peuvent échouer.

Une approche avancée consiste à utiliser le **Bootstrapping (méthode de Willemain, Smart et Schwarz - WSS)**. Cette technique consiste à rééchantillonner aléatoirement l'historique des demandes et des délais pour construire une distribution empirique de la demande pendant le délai de livraison. Le stock de sécurité est alors défini comme le quantile (ex: 95ème centile) de cette distribution simulée.

Bien que plus gourmande en calcul, cette méthode est extrêmement robuste pour les demandes intermittentes et permet de définir des buffers de sécurité "sur mesure" sans hypothèse de normalité.

---

## 7. Métriques d'Évaluation et Validation de la Performance

L'observation "MAPE > 100% pour 15+ clients" est un artefact mathématique prévisible. Le **MAPE (Mean Absolute Percentage Error)** est notoirement inadapté aux faibles volumes.

$$\text{MAPE} = \frac{1}{n} \sum \left| \frac{A_t - F_t}{A_t} \right|$$

Si la demande réelle $A_t$ est proche de 0, le MAPE tend vers l'infini. Si $A_t=1$ et $F_t=2$, l'erreur est de 100%, bien que l'écart absolu (1 unité) soit négligeable opérationnellement.

### 7.1 Adoption du MASE (Mean Absolute Scaled Error)

La littérature académique recommande unanimement l'usage du **MASE** pour les séries intermittentes. Le MASE compare l'erreur du modèle à l'erreur d'une prévision "naïve" (qui consiste à dire que demain sera égal à hier).

$$\text{MASE} = \frac{\text{MAE}}{\text{MAE}_{\text{naïf}}}$$

- Si **MASE < 1**, le modèle apporte de la valeur par rapport à une simple réplication de la dernière commande.
- Si **MASE > 1**, le modèle est moins performant qu'une approche naïve.

Le MASE est **invariant à l'échelle (scale-independent)** et ne diverge pas sur les zéros. Il permettra de comparer équitablement la performance entre les gros clients (CLEAN) et les petits clients (LOW), résolvant le paradoxe de la distribution des erreurs.

### 7.2 Analyse par Quantiles

Au-delà du MASE, il est pertinent d'évaluer la performance du système sur des **quantiles de risque**, notamment pour la gestion des stocks. Plutôt que de chercher une précision ponctuelle (Point Forecast), l'objectif est de s'assurer que la prévision couvre le besoin réel dans X% des cas (Service Level).

L'analyse des **Pertes Pinball (Pinball Loss)** ou des scores de probabilité (Probabilistic Scoring) permettrait de valider si les "buffers dynamiques" proposés en section 6 couvrent effectivement le risque de rupture sans générer de sur-stock.

---

## 8. Feuille de Route et Recommandations Stratégiques

La problématique de la "prédiction des quantités" ne relève pas d'une simple correction de formule, mais d'un **changement de paradigme** : passer d'une logique déterministe (moyenne) à une logique probabiliste (SBA/TSB) et d'une vision statique (stock=0) à une vision dynamique (stock simulé).

Voici la feuille de route recommandée pour l'implémentation :

### Phase 1 : Assainissement et Métriques (Immédiat)

1. **Changement de Métrique** : Remplacer le MAPE par le **MASE** dans les tableaux de bord pour cesser de pénaliser les erreurs non significatives sur les faibles volumes.

2. **Winsorisation** : Implémenter un filtre de Winsorisation (seuil 90ème percentile glissant) sur les données d'entrée pour neutraliser les outliers de volume avant qu'ils n'entrent dans le calcul de la moyenne.

### Phase 2 : Algorithmique de Cœur (Court Terme)

1. **Adoption de SBA/TSB** : Remplacer la formule `TotalQty / ActualDays` par l'algorithme **SBA** pour le segment général (correction du biais de sur-estimation) et **TSB** pour les produits saisonniers/à risque d'obsolescence (gestion des zéros). Ces méthodes utilisent les mêmes données historiques mais les traitent avec une rigueur statistique supérieure.

2. **Segmentation SBC** : Classifier automatiquement les couples Client/Produit selon la matrice SBC (Smooth, Intermittent, Erratic, Lumpy) pour appliquer l'algorithme le plus pertinent (ex: SES pour Smooth, SBA pour Lumpy).

### Phase 3 : Modélisation des Stocks (Moyen Terme)

1. **Inférence de Stock (Inverse ROP)** : Développer le module de calcul du "Stock Implicite". Au lieu d'assumer `EstStock = 0`, utiliser l'historique des fréquences pour estimer le niveau de stock résiduel probable au moment de la commande. Soustraire ce stock résiduel de la proposition de commande.

2. **Buffers Dynamiques** : Remplacer la règle des "19 jours" par un calcul de couverture basé sur la volatilité ($\sigma$) de chaque client.

### Phase 4 : Intelligence Avancée (Long Terme)

1. **Machine Learning (CatBoost/LSTM)** : Pour les clients avec un historique très riche (> 2 ans), envisager des modèles de Machine Learning capables de capturer des non-linéarités complexes et des interactions exogènes (météo, vacances scolaires) que les modèles statistiques (SBA) ne voient pas.

2. **Clustering Comportemental** : Utiliser des techniques de clustering pour identifier des profils de clients similaires et améliorer les prévisions des nouveaux clients ("LOW") par analogie avec des clients établis ("CLEAN"), réduisant ainsi le problème de démarrage à froid (Cold Start).

---

## Conclusion

En conclusion, la "sur-estimation" actuelle est le produit direct de l'application d'une logique linéaire à un phénomène non-linéaire. L'adoption des méthodes SBA/TSB et la reconstruction virtuelle des stocks permettront de réaligner les prévisions du système avec la réalité physique des flux de produits biologiques.

### Tableau Récapitulatif des Améliorations

| Domaine d'Amélioration | Approche Actuelle (Problématique) | Approche Recommandée (Solution) | Bénéfice Attendu |
|------------------------|----------------------------------|--------------------------------|------------------|
| **Algorithme** | Moyenne Mobile Simple (sur-estimations) | SBA (Syntetos-Boylan) ou TSB | Réduction drastique du biais positif (moyenne des erreurs). |
| **Hypothèse Stock** | Stock = 0 à la commande | Inverse ROP & Simulation HMM | Élimination du "double comptage" de la consommation. |
| **Traitement Données** | Brut (sensible aux pics) | Winsorisation Glissante | Stabilisation des prévisions face aux événements ponctuels. |
| **Stock Sécurité** | Fixe (19 jours) | Dynamique ($Z \sigma \sqrt{LT}$) | Réduction des stocks sur produits stables, sécurisation des volatils. |
| **Métrique** | MAPE (instable) | MASE (robuste) | Pilotage fiable de la performance réelle. |
