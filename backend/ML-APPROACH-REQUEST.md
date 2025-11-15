# Demande d'Approches ML/LLM pour Auto-Proposal B2B

## 📋 Contexte Business

Nous sommes une entreprise B2B (moutarderie artisanale belge) vendant à 1451 clients (restaurants, magasins, distributeurs). Notre objectif : **prédire automatiquement les besoins de réapprovisionnement de nos clients** pour leur proposer des devis proactifs.

**Contrainte clé** : Nous ne connaissons PAS le stock actuel de nos clients. Nous avons uniquement accès à leur historique de commandes et toute la db odoo. 

---

## 🏗️ Architecture Système Actuel

### Pipeline de Prédiction (3 phases)

**Phase 1 : Stock Replenishment Analysis (TRIGGER + QUANTITÉ)**

```
Entrée : client_id + analysisWindowDays (ex: 180j)
Sortie : Liste de produits à commander avec quantités

Algorithme :
1. Fetch historique commandes client (180j)
2. Pour chaque produit commandé :

   A. CALCUL CONSOMMATION
   consumptionPerDay = sum(quantities) / daysOfHistory

   B. PRÉDICTION STOCK (basé sur dernière commande)
   lastOrder = orders[0]  // Trié DESC par date
   daysElapsed = today - lastOrder.date
   estimatedStock = lastOrder.quantity - (daysElapsed × consumptionPerDay)
   daysUntilStockout = estimatedStock / consumptionPerDay

   C. TRIGGER (Risque de rupture ?)
   threshold = targetCoverage (14j) + leadTime (5j) = 19j
   if daysUntilStockout < 19j → PROPOSER ce produit

   D. QUANTITÉ (Médiane historique)
   if orderCount == 1 → quantity = last order quantity (confidence: low)
   if orderCount 2-4 → quantity = median(all orders) (confidence: medium)
   if orderCount >= 5 → quantity = median(last 5 orders) (confidence: high)
```

**Phase 2.5 : Proposal Preparation (MOQ + Pricing)**
- Récupère prix Odoo actuels
- Applique ajustements MOQ (Minimum Order Quantity)
- Arrondit selon multiples d'UoM

**Phase 3 : Quote Generation**
- Crée devis Odoo via XML-RPC
- Envoie email au client

### Exemple Concret

**Client : DELHAIZE (ID: 3452)**

Historique Mayonnaise (180 derniers jours) :
```
2025-11-06: 130 unités
2025-10-29: 260 unités (8 jours avant)
2025-10-21: 130 unités (8 jours avant)
2025-10-14: 390 unités (7 jours avant)
2025-10-07: 130 unités (7 jours avant)
```

**Calcul système actuel (référence: 14 nov 2025)**
```
consumptionPerDay = (130+260+130+390+130) / 180 = 5.67 unités/jour
lastOrder = 130 unités le 6 nov
daysElapsed = 14 nov - 6 nov = 8 jours
estimatedStock = 130 - (8 × 5.67) = 84.64 unités
daysUntilStockout = 84.64 / 5.67 = 14.9 jours

threshold = 19 jours
14.9 < 19 → ✅ PROPOSER

quantity = median([130, 260, 130, 390, 130]) = 130 unités
```

---

## ⚠️ Limitations du Système Actuel

### 1. **Fenêtre d'analyse fixe (180 jours)**
- Tous les produits analysés sur la même période
- Ne s'adapte pas à la saisonnalité
- Produits récents sous-estimés (dilution sur 180j)

### 2. **Single Order Logic (prédiction basée sur dernière commande uniquement)**
```python
estimatedStock = lastOrder.quantity - (daysElapsed × consumptionPerDay)
```

**Problème** : Ignore les patterns de commande
- Client qui commande 2× par mois en alternant 100 et 500 unités
- Notre système prédit toujours basé sur la dernière commande (100 ou 500)
- Ne capte pas le pattern "commande tous les 15 jours"

**Exemple d'erreur** :
```
Historique Ketchup:
10 oct: 500 unités ← Grosse commande
25 oct: 100 unités ← Petite commande
9 nov: 500 unités  ← Grosse commande

Notre système le 14 nov:
lastOrder = 500 (9 nov)
estimatedStock = 500 - (5j × 30/j) = 350 unités
daysUntilStockout = 350 / 30 = 11.7j → ❌ PAS de proposition

Réalité: Client commande tous les ~15j, prochaine commande = ~24 nov
→ On devrait proposer car 24 nov - 14 nov = 10j < 19j
```

### 3. **Consommation linéaire (moyenne arithmétique)**
```python
consumptionPerDay = sum(quantities) / 180
```

**Problèmes** :
- Ignore tendances (croissance/décroissance)
- Ignore saisonnalité
- Ignore volatilité

**Exemple** :
```
Client restaurant saisonnier:
Jan-Mars: 500 unités/mois (hiver, pleine saison)
Avr-Juin: 100 unités/mois (printemps, basse saison)
Juil-Sept: 50 unités/mois (été, très basse saison)
Oct-Déc: 400 unités/mois (automne, reprise)

Moyenne = 1050 / 12 = 87.5/mois
→ En novembre, on prédit 87.5/mois alors qu'il consomme 400/mois
```

### 4. **Quantité = Médiane historique (pas prédictive)**
```python
if orderCount >= 5:
    quantity = median(last_5_orders)
```

**Problème** : Répète le passé, ne prédit pas
- Client en croissance : commandes 50 → 100 → 200 → 400
- Médiane = 150, alors que prochaine commande sera probablement 600+

### 5. **Pas de features contextuelles**
Le système ignore :
- Taille du client (CA annuel, nb employés)
- Type de client (restaurant, magasin, distributeur)
- Région géographique
- Catégorie de produit
- Prix unitaire
- Relationships cross-produits (corrélations)

---

## 📊 Performances Actuelles (Backtest 270 jours)

**Méthodologie Backtest** :
- 200 clients testés
- Fenêtre d'analyse : 270 jours
- Prédiction à J-1 (1 jour en avance)
- Comparaison avec commandes réelles

**Résultats** :

| Métrique | Moyenne | Médiane | Interprétation |
|----------|---------|---------|----------------|
| **Recall** | 72.3% | 80.0% | Détecte 72.3% des besoins réels |
| **Precision** | 42.7% | 40.0% | 57.3% de faux positifs |
| **F1-Score** | 49.5% | 50.0% | Équilibre détection/précision |
| **MAPE** | 41.3% | 26.4% | Erreur moyenne sur quantités (TP only) |

**Distribution Precision** :
- 50% des clients : Precision < 40% (6 produits proposés, seulement 2-3 commandés)
- 34% des clients : Precision 40-70%
- 17% des clients : Precision > 70%

**Analyse** :
- ✅ Bon Recall (72%) → Détecte la plupart des besoins
- ❌ Faible Precision (43%) → Trop de faux positifs
- ❌ MAPE élevé (41%) → Quantités imprécises

---

## 🧪 Tentatives ML (Azure AutoML Time Series)

### Configuration Testée

**Export de données** :
```csv
customer_id,product_id,date,quantity,product_category
3452,9140,2023-11-15,130,Condiments
3452,9140,2023-11-23,260,Condiments
3452,9140,2023-12-01,130,Condiments
...
```

**Dataset** :
- 730 jours d'historique
- 84,747 lignes
- 1,206 clients uniques
- 1,117 produits uniques
- 49 catégories

**Time Series Config** :
- Time series ID : `(customer_id, product_id)`
- Target column : `quantity`
- Frequency : `D` (Daily) ou `W` (Weekly)
- Forecast horizon : 14 jours

### Problèmes Rencontrés

#### 1. **Demande Intermittente (Sparse Data)**
```
72% des time-series ont ≤ 3 data points sur 730 jours
Exemple typique:
customer=542, product=114:
  2023-11-05: 130
  2023-12-20: 260 (45j gap)
  2024-02-15: 130 (57j gap)
```

**Impact** :
- Azure AutoML ne peut pas détecter de pattern sur 3 points
- Models simples (ExponentialSmoothing) surperforment XGBoost/LightGBM

#### 2. **Résultats Training Azure**
```
ExponentialSmoothing: RMSE = 0.38 ✅ (Best)
Naive: RMSE = 0.39
XGBoost: RMSE = 0.71 ❌ (2× pire)
LightGBM: RMSE = 0.75 ❌ (2× pire)
```

**Interprétation** : Simple smoothing > ML = données trop sparse

#### 3. **Smoothing Problem**
ExponentialSmoothing prédit probablement des valeurs lissées (0.5, 0.6, 1.2) au lieu de patterns réels (0, 130, 260).

#### 4. **Erreur Frequency avec Weekly**
```
Error: "The frequency for time series [(542, 114)] is not consistent.
Expected frequency is '<48 * Days>'"
```

**Cause** : Client commande en moyenne tous les 48 jours
- Azure accepte `frequency='D'` (peut prédire 0 la plupart des jours)
- Azure rejette `frequency='W'` (48j ne correspond pas à 7j × N)

#### 5. **Pas de Features Enrichies**
Azure AutoML génère automatiquement :
- ✅ Lags (quantités passées)
- ✅ Rolling windows (moyennes mobiles)
- ✅ Calendar features (jour semaine, mois)

Mais NE génère PAS :
- ❌ Customer-level features (avg order size, order frequency, growth trend)
- ❌ Product-level features (avg qty across all customers, popularity)
- ❌ Cross-features (customer size × product type)

**Référence Paper** : "Forecasting intermittent demand in B2B sales using machine learning" (2021)
- Ils ont 137 features (20 base + 117 engineered)
- Nos features : 5 (customer_id, product_id, date, quantity, product_category)

---

## 🎯 Objectif Final

**Prédire à un moment T la quantité dont le client a besoin** en fonction de :
- Son historique de commandes (seule donnée disponible)
- Patterns temporels (fréquence, saisonnalité)
- Contexte produit/client (si on enrichit les features)

**Contraintes** :
- ❌ Pas accès au stock client
- ❌ Pas accès à la consommation réelle
- ✅ Historique commandes Odoo (730j+)
- ✅ Métadonnées : catégories, prix, clients

---

## ❓ Questions aux Experts ML/LLM

### 1. **Approche ML Recommandée**

Compte tenu de :
- Demande intermittente (72% des séries ≤ 3 points / 730j)
- Time-series multivariées (1206 clients × 1117 produits = 1.3M combos possibles)
- Features limitées actuellement (5 colonnes)

**Questions** :
- Azure AutoML Time Series est-il adapté ? Ou faut-il une approche spécialisée (Croston's method, ARIMA intermittent, etc.) ?
- Faut-il obligatoirement enrichir les features avant training ? Si oui, lesquelles prioriser ?
- Hierarchical forecasting (prévoir au niveau client puis allouer par produit) serait-il plus robuste ?
- Peut-on combiner ML classique + règles métier (ex: ML prédit fréquence, règles calculent quantité) ?

### 2. **Améliorer les Briques Existantes**

Notre pipeline actuel a 3 briques principales :

**Brique A : Calcul consommation**
```python
consumptionPerDay = sum(quantities) / daysOfHistory
```

**Brique B : Prédiction stock**
```python
estimatedStock = lastOrder.quantity - (daysElapsed × consumptionPerDay)
daysUntilStockout = estimatedStock / consumptionPerDay
```

**Brique C : Calcul quantité**
```python
quantity = median(last_5_orders)
```

**Questions** :
- Quelle(s) brique(s) remplacer en priorité par ML/LLM ?
- Peut-on garder certaines briques (ex: TRIGGER avec règles métier) et ML-ifier uniquement la quantité ?
- Faut-il tout refaire from scratch avec un modèle end-to-end ?

### 3. **LLM Applicability**

Les LLMs e, 2025 sont-ils pertinents pour ce use case ?

**Approches possibles** :
- **Pattern Recognition** : "Analysez cet historique et détectez le pattern de commande"
- **Few-shot Learning** : Donner 5 exemples (historique → quantité réelle) puis prédire nouveau client
- **Reasoning over Data** : "Client commande 130 tous les 7j depuis 6 mois, dernière commande il y a 6j, que proposer ?"

**Questions** :
- LLM sur 1.3M time-series = scalable / coût acceptable ?
- Hybrid approach : ML pour la majorité, LLM pour cas edge (nouveaux clients, patterns complexes) ?
- Prompt engineering suffisant ou faut-il fine-tune un modèle ?

### 4. **Feature Engineering**

Si on doit enrichir les features, lesquelles prioriser ?

**Customer-level** :
- Total orders last 12 months
- Average order size
- Order frequency (avg days between orders)
- Growth trend (slope regression last 6 months)
- Volatility (std dev of order quantities)
- Customer segment (CA bucket: <5k, 5-20k, 20-100k, >100k)
- Region

**Product-level** :
- Average quantity across all customers
- Product popularity (nb customers who order it)
- Category statistics (avg price, avg qty)
- Seasonality index (ratio peak month / avg month)

**Interaction features** :
- Customer lifetime value for this product
- Product share in customer total purchases
- Time since first order of this product
- Acceleration (is customer increasing/decreasing orders?)

**Questions** :
- Top 10 features essentielles pour notre contexte B2B intermittent ?
- Compute-heavy features (rolling stats sur fenêtres variables) valent-elles le coût ?
- Auto-feature engineering (Featuretools, tsfresh) adapté à notre volumétrie ?

### 5. **Stratégie Incrémentale**

**MVP Proposé** :
1. Enrichir export avec 10-15 features clés
2. Tester Azure AutoML avec features enrichies
3. Si échec : basculer sur Croston's method ou Prophet (Facebook)
4. Comparer Precision/Recall avec système actuel (baseline: 43% precision)
5. Si gain < 10% → abandonner ML, optimiser règles métier

**Questions** :
- Cette approche est-elle sensée ?
- Autres stratégies incrémentales recommandées ?
- Faut-il d'abord résoudre le "sparse data problem" (agréger au niveau client ou catégorie) avant de ML-ifier ?

---

## 📦 Données Disponibles

### Odoo Models Accessibles

**sale.order** (commandes)
```python
{
  'id': 12345,
  'partner_id': [3452, 'DELHAIZE'],
  'date_order': '2025-11-06 10:30:00',
  'state': 'sale',  # draft/sent/sale/done/cancel
  'amount_total': 1234.56
}
```

**sale.order.line** (lignes de commande)
```python
{
  'order_id': [12345, 'SO00123'],
  'product_id': [9140, 'Mayonnaise 5L'],
  'product_uom_qty': 130,
  'price_unit': 12.50,
  'product_uom': [3, 'Unité']
}
```

**product.product** (produits)
```python
{
  'id': 9140,
  'name': 'Mayonnaise 5L',
  'categ_id': [42, 'FoodPrint / Condiments / Sauces'],
  'type': 'product',  # product/service
  'list_price': 15.00
}
```

**res.partner** (clients)
```python
{
  'id': 3452,
  'name': 'DELHAIZE LE LION',
  'email': 'commandes@delhaize.be',
  'country_id': [21, 'Belgium'],
  'property_payment_term_id': [1, '30 Days']
}
```

### Export Actuel
- Format : CSV
- Période : 730 jours (configurable)
- Volume : ~85k lignes pour 1206 clients × 1117 produits
- Features : 5 (customer_id, product_id, date, quantity, product_category)

---

## 🎁 Ce que nous attendons

**Réponses concrètes et actionnables** sur :

1. **Meilleure approche ML** pour demande intermittente B2B (méthode + justification)
2. **Features à ajouter** (top 10-15 avec impact estimé sur Precision)
3. **Quelle(s) brique(s) remplacer** en priorité (consommation / stock / quantité / tout)
4. **LLM pertinent ou pas** pour ce use case (+ approche si oui)
5. **Stratégie incrémentale** pour passer de 43% → 70%+ Precision
6. **Benchmarks / Papers** sur forecasting intermittent demand B2B (si disponibles)
7. **Outils recommandés** (Azure AutoML / Prophet / Croston / Custom LSTM / LLM fine-tuned / Hybrid)

**Format souhaité** :
- Approche pragmatique (on est une PME, pas Google)
- Code samples si possible (Python/TypeScript)
- Estimation ROI (coût compute vs gain business)
- Roadmap 3-6 mois (quick wins puis optimisations avancées)

---

**Merci d'avance pour vos recommandations !** 🙏
