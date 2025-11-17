# Plan d'Implémentation : Amélioration Calcul Consommation (Produits 1 Commande)

## 🎯 Objectif
Améliorer la précision du calcul de consommation pour les produits commandés une seule fois en utilisant les fréquences réelles (client/produit) au lieu du temps écoulé depuis la commande.

**Impact estimé** : Precision 42% → 70% (+28 points), réduction de ~150 FP/client

---

## 📋 Architecture de la Solution

### Stratégie Cascade (3 niveaux)
```
SI produit avec 1 seule commande ALORS :
  1️⃣ Priorité 1 : Utiliser fréquence moyenne du CLIENT (ses autres produits)
  2️⃣ Priorité 2 : Utiliser fréquence moyenne du PRODUIT (tous clients)
  3️⃣ Priorité 3 : Fallback prudent (seuil minimum 60j ou temps écoulé)
SINON :
  ✅ Méthode actuelle (inchangée)
```

---

## 🔨 Étapes d'Implémentation

### **ÉTAPE 1 : Créer service fréquence client**

**Fichier** : `backend/src/features/stock-replenishment/utils/client-frequency.service.ts`

**Fonction** : `getClientAverageReorderInterval(clientId, daysOfHistory, referenceDate)`

**Logique** :
1. Récupérer toutes les commandes du client (via Odoo)
2. Calculer intervalles entre commandes consécutives
3. Retourner la **médiane** des intervalles (plus robuste que moyenne)

**Type de retour** : `number | null` (null si < 2 commandes)

---

### **ÉTAPE 2 : Créer service fréquence produit**

**Fichier** : `backend/src/features/stock-replenishment/utils/product-frequency.service.ts`

**Fonction** : `getProductAverageReorderInterval(productId, daysOfHistory, referenceDate)`

**Logique** :
1. Récupérer tous les clients qui commandent ce produit
2. Pour chaque client, calculer ses intervalles de commande du produit
3. Retourner la **médiane globale** de tous les intervalles

**Type de retour** : `number | null` (null si pas assez de données)

---

### **ÉTAPE 3 : Modifier consumption.utils.ts**

**Fichier** : `backend/src/features/stock-replenishment/utils/consumption.utils.ts`

**Changements** :
1. Ajouter 2 paramètres optionnels : `clientAverageReorderDays?`, `productAverageReorderDays?`
2. Ajouter logique cascade pour `orders.length === 1`
3. Conserver logique actuelle pour plusieurs commandes

**Code clé** :
```typescript
if (orders.length === 1) {
  // Cascade : client → produit → fallback
  if (clientAverageReorderDays) {
    return totalQuantity / clientAverageReorderDays;
  }
  if (productAverageReorderDays) {
    return totalQuantity / productAverageReorderDays;
  }
  // Fallback prudent
  return totalQuantity / Math.max(60, daysSinceFirstOrder);
}
```

---

### **ÉTAPE 4 : Modifier stock-replenishment.service.ts**

**Fichier** : `backend/src/features/stock-replenishment/stock-replenishment.service.ts`

**Changements** :
1. Importer les 2 nouveaux services
2. **AVANT la boucle** : Calculer fréquence client UNE FOIS
3. **Dans la boucle** :
   - Détecter produits avec 1 commande
   - Calculer fréquence produit si nécessaire
   - Passer les fréquences à `calculateDailyConsumption()`

**Optimisation** : Fréquence client calculée 1 fois, fréquence produit seulement si nécessaire

---

### **ÉTAPE 5 : Ajouter métadonnées dans types**

**Fichier** : `backend/src/features/stock-replenishment/stock-replenishment.types.ts`

**Ajouter dans `StockPredictionDetails`** :
```typescript
export interface StockPredictionDetails {
  consumption_per_day: number;
  estimated_stock_remaining: number;
  days_until_stockout: number;
  replenishment_threshold_days: number;

  // NOUVEAU : Métadonnées pour debug/backtest
  consumption_calculation_method?:
    | "client_frequency"    // Utilisé fréquence client
    | "product_frequency"   // Utilisé fréquence produit
    | "fallback_prudent"    // Utilisé fallback 60j
    | "standard";           // Méthode actuelle (plusieurs commandes)
  frequency_days_used?: number | null;  // Fréquence utilisée (en jours)
}
```

**Utilité** : Tracer dans les rapports quelle méthode a été utilisée

---

### **ÉTAPE 6 : Ajouter méthodes Odoo (si nécessaire)**

**Fichier** : `backend/src/infrastructure/odoo/clients/odoo-client.types.ts`

**Ajouter interface** :
```typescript
export interface OdooClient {
  // ... existant

  /**
   * Récupère toutes les commandes d'un client (pour calcul fréquence)
   */
  getClientOrders(
    partnerId: number,
    windowDays: number,
    referenceDate: string
  ): Promise<Array<{ id: number; date_order: string }>>;

  /**
   * Récupère tous les clients qui commandent un produit (pour fréquence produit)
   */
  getProductOrdersByAllClients(
    productId: number,
    windowDays: number,
    referenceDate: string
  ): Promise<Array<{
    partner_id: number;
    date_order: string;
  }>>;
}
```

**Implémentation** : Dans `xmlrpc-client.ts` et `json2-client.ts`

---

## 📊 Impact sur les Backtests

### Modifications à faire :
- **Aucune modification** du flow de backtest
- Les métadonnées ajoutées apparaîtront automatiquement dans les rapports
- Permet de comparer "ancien vs nouveau" en regardant `consumption_calculation_method`

### Métriques à surveiller :
- Precision (attendu : +25-30%)
- Recall (attendu : -3 à -5%, acceptable)
- F1-Score (attendu : +15-20%)
- Nb de FP avec `stock = 0` (attendu : -60%)

---

## 🧪 Tests Recommandés

### Tests unitaires à créer :

1. **`client-frequency.service.test.ts`**
   - Client avec 2 commandes → intervalle correct
   - Client avec 1 commande → null
   - Client sans commande → null

2. **`product-frequency.service.test.ts`**
   - Produit commandé par 3 clients → médiane correcte
   - Produit commandé par 1 client → intervalle ou null

3. **`consumption.utils.test.ts`**
   - 1 commande + fréquence client → utilise fréquence client
   - 1 commande + fréquence produit → utilise fréquence produit
   - 1 commande sans fréquences → fallback
   - Plusieurs commandes → méthode actuelle inchangée

### Test d'intégration :
- Backtest sur FOODPRINT SRL (client catastrophique actuel)
- Vérifier que Precision passe de 1.2% → ~25%+

---

## ⚙️ Configuration

**Fichier** : `backend/src/config/auto-proposal.ts`

**Ajouter section** :
```typescript
export const autoProposalConfig = {
  // ... existant

  // Configuration fréquences (nouvelles)
  frequencyCalculation: {
    minOrdersForClientFrequency: 2,  // Min commandes client pour calcul fréquence
    minOrdersForProductFrequency: 5,  // Min commandes produit tous clients
    fallbackMinimumDays: 60,          // Seuil prudent si pas de fréquence
  },
}
```

---

## 📝 Ordre d'Exécution

1. ✅ Créer `client-frequency.service.ts`
2. ✅ Créer `product-frequency.service.ts`
3. ✅ Ajouter méthodes Odoo (`getClientOrders`, `getProductOrdersByAllClients`)
4. ✅ Modifier `consumption.utils.ts` (ajouter logique cascade)
5. ✅ Modifier `stock-replenishment.types.ts` (ajouter métadonnées)
6. ✅ Modifier `stock-replenishment.service.ts` (intégrer services)
7. ✅ Ajouter config dans `auto-proposal.ts`
8. ✅ Écrire tests unitaires
9. ✅ Lancer backtest de validation

---

## 🚀 Validation

**Critères de succès** :
- ✅ Code compile sans erreur
- ✅ Tests unitaires passent
- ✅ Backtest FOODPRINT : Precision > 20% (vs 1.2% actuel)
- ✅ Backtest agrégé : Precision > 65% (vs 42.7% actuel)
- ✅ Aucune régression sur clients avec historique (Recall stable)

**Rollback si** :
- Precision agrégée < 50%
- Recall < 65%
- Erreurs Odoo (timeout, API)

---

## 📦 Fichiers Modifiés/Créés

### Nouveaux fichiers (2)
- `backend/src/features/stock-replenishment/utils/client-frequency.service.ts`
- `backend/src/features/stock-replenishment/utils/product-frequency.service.ts`

### Fichiers modifiés (5)
- `backend/src/features/stock-replenishment/utils/consumption.utils.ts`
- `backend/src/features/stock-replenishment/stock-replenishment.service.ts`
- `backend/src/features/stock-replenishment/stock-replenishment.types.ts`
- `backend/src/infrastructure/odoo/clients/odoo-client.types.ts`
- `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts` (+ json2-client.ts)

### Config (1)
- `backend/src/config/auto-proposal.ts`

---

## 🔍 Analyse du Problème Actuel

### Comportement débile pour 1 commande

**Exemple concret** :
```
Client FOODPRINT commande tous les 21j en moyenne
Produit X : 1 commande de 100u il y a 73j

❌ CALCUL ACTUEL (FAUX) :
consumptionPerDay = 100 / 73 = 1.37/j
estimatedStock = 100 - (73 × 1.37) = 0
→ TRIGGER (probablement FAUX)

✅ CALCUL FUTUR (INTELLIGENT) :
consumptionPerDay = 100 / 21 = 4.76/j
estimatedStock = 100 - (73 × 4.76) = -247
→ TRIGGER (probablement VRAI, en rupture depuis 52j)
```

### Impact dans les backtests

**FOODPRINT SRL (cas catastrophique)** :
- 244 produits prédits, 3 corrects → Precision **1.2%**
- 122 produits (50% des FP) avec `stock = 0` (1 commande ancienne)
- **Avec la fix** : Precision estimée **25%+** (×20 mieux)

**Global (200 clients)** :
- 161 rapports sur 300 ont le problème
- Precision actuelle : 42.7%
- **Avec la fix** : Precision estimée **65-70%**

---

## 💡 Pourquoi cette approche ?

### Logique métier
Un client qui commande tous les 21j en moyenne consomme probablement ses produits en ~21j, pas en 73j.

### Avantages
- ✅ Utilise données réelles du comportement client
- ✅ Fonctionne pour nouveaux clients (fréquence produit)
- ✅ Fallback robuste si pas de données
- ✅ Aucun impact sur produits avec historique

### Trade-offs
- ⚠️ 2 appels Odoo supplémentaires par client (fréquences)
- ⚠️ Recall peut baisser légèrement (-3 à -5%)
- ✅ Mais Precision ×1.6 meilleure → F1-Score global +18%
