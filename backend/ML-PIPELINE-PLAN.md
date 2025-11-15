# Pipeline ML Data Preparation - 3 Agents Spécialisés

## 🎯 Objectif
Préparer un dataset unifié pour Azure AutoML afin de remplacer le système de détection de rupture par un modèle ML prédictif.

---

## 🤖 AGENT 1: Data Extraction & Quality (2-3h)

### Tâches:
1. **Extraction Ventes** (sale.order.line - 3 ans)
   - Champs: order_id, client_id, product_id, date_order, quantity, state
   - Filtrer: state IN ('sale', 'done')
   - Validation MCP: ~50K-150K lignes attendues

2. **Extraction Clients** (res.partner)
   - Champs: id, customer_type, region, industry, create_date
   - Enrichissement: total_orders_lifetime, avg_basket_value
   - Validation MCP: ~801 clients actifs

3. **Extraction Produits** (product.product)
   - Champs: id, name, category, price, uom
   - Métriques: product_popularity, velocity, price_tier
   - Validation MCP: ~500-1000 produits actifs

### Outputs: `/backend/ml-data-prep/phase1/`
- raw_sales.parquet, client_metadata.parquet, product_metadata.parquet
- validation_report_phase1.md

---

## 🗓️ AGENT 2: Snapshot Panel Generation (3-4h)

### Tâches:
1. **Identification Paires Actives**
   - Extraire toutes paires (client_id, product_id) uniques
   - Distribution attendue: 42.9% avec 1 commande, 45.6% avec 2-4, 11.5% avec 5+
   - Validation MCP: ~16,763 paires totales

2. **Génération Grille Temporelle**
   - Fréquence: Hebdomadaire (dimanche à dimanche)
   - Période: 2023-01-01 à 2025-11-15 (~150 semaines)
   - Volume: 16,763 paires × 150 semaines = ~2.5M snapshots

3. **Optimisation & Partitionnement**
   - Batch processing par chunks de 10K paires
   - Format Parquet avec compression
   - Partitionnement trimestriel

### Outputs: `/backend/ml-data-prep/phase2/`
- active_pairs.parquet
- snapshots_YYYY_QX.parquet (12 fichiers)
- temporal_validation.md

---

## 🧠 AGENT 3: Feature Engineering & Export (4-5h)

### Tâches:
1. **Calcul Variable Cible**
   - will_order_in_19d: Commande dans [date+1, date+19] jours (0/1)
   - Validation MCP: 100 cas aléatoires
   - Distribution attendue: 15-25% positifs

2. **Features Comportementales** (lookback 180j)
   - days_since_last_order (NULL → 999)
   - order_count_180d (pour flag cold-start)
   - avg_inter_demand_interval (< 2 orders → -1)
   - quantity_variability, trend_indicator

3. **Features Contextuelles**
   - Client: type, region, total_products
   - Produit: category, popularity, price_tier
   - Interaction: client_product_affinity, seasonal_pattern

4. **Gestion Cold-Start**
   - Flag: is_cold_start = 1 si order_count_180d ≤ 1
   - Imputation: ADI = -1, variability = -1, trend = 0
   - Validation: 0 NaN dans dataset final

5. **Export Azure**
   - Format CSV < 2GB
   - Split: train (70%), test (20%), validation (10%)
   - Encodage catégories, normalisation features

### Outputs: `/backend/ml-data-prep/phase3/`
- ml_dataset_complete.csv
- azure_upload_ready/ (train/test/validation sets)
- feature_statistics.json, final_validation_report.md

---

## 📊 Points de Contrôle

### Validation MCP à chaque phase:
- **Agent 1**: Vérifier counts, dates, cohérence données
- **Agent 2**: Valider paires, continuité temporelle, volumes
- **Agent 3**: Contrôler distributions, cold-start (~43%), target balance

### Métriques Finales:
- 2.5M snapshots, 0 NaN
- 43% cold-start correctement flaggés
- 15-25% target positif
- CSV < 2GB compatible Azure

### Timeline: ~10-12 heures total