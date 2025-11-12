# Plan de Validation Baseline - Agent 1

## 📋 Paramètres EXACTS utilisés pour la baseline

### Configuration Baseline (AVANT refactoring)
```json
{
  "inactivityDays": 30,
  "analysisWindowDays": 180,
  "targetCoverage": 14,
  "leadTime": 5,
  "forceReanalysis": true,
  "skipOdooQuoteGeneration": true
}
```

### Dates calculées (équivalentes)
```
dateMin = "2025-09-27 00:00:00"  (aujourd'hui - 30 jours)
dateMax = "2025-10-27 00:00:00"  (aujourd'hui)
```

### Appels services exacts

#### 1. Détection clients inactifs
```typescript
// AVANT refactoring (logique actuelle)
const excludeTagId = forceReanalysis ? 82 : undefined;
const clients = await getInactiveClients(30, excludeTagId);
// Résultat: 1536 clients inactifs
```

**APRÈS refactoring (nouvelle logique)**, l'appel équivalent sera :
```typescript
const clients = await getInactiveClients(
  "2025-09-27 00:00:00",  // dateMin
  "2025-10-27 00:00:00",  // dateMax
  excludeTagId
);
// Résultat ATTENDU: 1536 clients inactifs (IDENTIQUE)
```

#### 2. Analyse de réapprovisionnement (pour chaque client échantillon)
```typescript
// AVANT refactoring
const result = await calculateReplenishmentNeeds(
  clientId,
  {
    analysisWindowDays: 180,
    targetCoverage: 14,
    leadTime: 5
  }
);
```

**APRÈS refactoring**, l'appel équivalent sera :
```typescript
const result = await calculateReplenishmentNeeds(
  clientId,
  {
    analysisWindowDays: 180,
    analysisEndDate: "2025-10-27 00:00:00",  // NOUVEAU: date de référence explicite
    targetCoverage: 14,
    leadTime: 5
  }
);
```

## 🎯 Résultats attendus (pour validation Agent 8)

### Clients inactifs
- **Total**: 1536 clients
- **Liste complète**: Voir `before-refactoring.json` → `inactiveClients.clientIds`

### Clients échantillons (5 premiers)

#### Client 1: -B-Local (ID: 9956)
- **10 produits à risque**
- Exemples:
  - `[JOY02] JOY! Organic Strawberry Jam 370g` → 4 unités
  - `[JOY06] JOY! Organic Rhubarb Jam 370g` → 2 unités
  - `[NUT01] NUTS & BERRIES energy bar Deluxe bio 40g` → 1 unité
  - ... (7 autres produits)

#### Client 2: 100% Liégeois (ID: 81)
- **6 produits à risque**
- Exemples:
  - `[REB01] ReBEL chips premium & bio - sel de mer 125g` → 6 unités
  - `[REB03] ReBEL chips premium & bio - poivre noir 125g` → 6 unités
  - `[REB02] ReBEL chips premium & bio - paprika fumé 125g` → 6 unités
  - ... (3 autres produits)

#### Client 3: 3B TRADING & CONSULTING GmbH (ID: 3857)
- **1 produit à risque**
- `[PF0070] FILOU/LD SAUCE ANDALOUSE 10 L` → 39 unités

#### Clients 4 & 5: 3M GENUSSWERTE (ID: 23109) & AB InBev (ID: 17426)
- **0 produits à risque** (pas d'historique de commandes)

## ✅ Critères de validation (Agent 8)

### Validation stricte (100% identique)
1. **Nombre de clients inactifs**: 1536 (exactement)
2. **Liste des client IDs**: Identique (ordre peut varier)
3. **Pour chaque client échantillon**:
   - Même nombre de produits à risque
   - Mêmes product_id
   - Mêmes quantités recommandées (tolérance: ±1 unité pour arrondis)

### Métriques de comparaison
- `days_until_stockout` : Peut varier légèrement (±0.5j) à cause de la date de référence
- `consumption_per_day` : Doit être identique (même historique)
- `estimated_stock_remaining` : Peut varier légèrement

## 🔄 Commande de validation Agent 8

Pour reproduire exactement la même requête après refactoring:

```bash
curl -X POST http://localhost:3000/baseline-test \
  -H "Content-Type: application/json" \
  -d '{
    "useNewLogic": true,
    "dateMin": "2025-09-27 00:00:00",
    "dateMax": "2025-10-27 00:00:00",
    "analysisEndDate": "2025-10-27 00:00:00",
    "forceReanalysis": true
  }'
```

Ou utiliser les **defaults implicites** (doivent donner le même résultat aujourd'hui):
```bash
curl -X POST http://localhost:3000/baseline-test
```

## 📝 Notes importantes

1. **Date de capture**: 2025-10-27T07:18:22.316Z
2. **Clients avec tag 82 inclus**: Oui (`forceReanalysis: true`)
3. **Mode TEST**: Oui (`skipOdooQuoteGeneration: true`) - pas de création de devis
4. **Fichier de référence**: `backend/test-data/before-refactoring.json`

## 🚨 En cas de différence

Si l'Agent 8 détecte des différences:

1. **Nombre de clients différent**: Vérifier la logique du domain Odoo `buildRecentOrdersDomain`
2. **Produits différents**: Vérifier le calcul de `analysisEndDate` et `dateStart` dans l'historique
3. **Quantités différentes**: Vérifier que la stratégie de calcul (médiane) n'a pas changé
4. **Clients manquants/ajoutés**: Comparer les client IDs et investiguer la requête Odoo

## 🎯 Objectif final

**Zéro régression fonctionnelle**: Le refactoring doit produire EXACTEMENT les mêmes résultats avec la nouvelle logique `dateMin/dateMax` qu'avec l'ancienne logique `inactivityDays`.
