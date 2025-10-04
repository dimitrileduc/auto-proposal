### Principe

- **Ne proposer que les produits déjà commandés** par le client historiquement
- **Détecter automatiquement** les besoins basés sur l'inactivité et le risque de rupture
- **Automatiser complètement** la génération de devis et l'envoi d'emails

## 🎯 Déclencheur du Système

### Inactivité Client

- Le client n'a plus commandé depuis **30 jours** (configurable via `inactivityDaysThreshold`)
- Vérification quotidienne via CRON

## 📊 Analyse à Deux Phases

Une fois un client identifié comme inactif, le système analyse chaque produit en **deux phases distinctes** :

### Phase 1 : TRIGGER (Détection Risque de Rupture)

**But** : Détecter si un produit risque une rupture de stock

1. **Calcul consommation/jour** sur 180 jours d'historique

   - `consumptionPerDay = totalQuantity / actualDays`
   - `actualDays = min(180, daysSinceFirstOrder)` - Produits récents : évite de diviser par 180j si commandé depuis 60j seulement

2. **Prédiction stock restant**

   - `stockRemaining = lastQuantity - (daysElapsed × consumptionPerDay)`
   - `daysUntilStockout = stockRemaining / consumptionPerDay`

3. **Décision : Commander ?**
   - Seuil : `targetCoverage (14j) + leadTime (5j) = 19 jours`
   - Si `daysUntilStockout > 19j` → Skip (stock OK)
   - Si `daysUntilStockout ≤ 19j` → Passer à Phase 2

### Phase 2 : QUANTITÉ (Calcul Basé Historique Réel)

**But** : Proposer une quantité réaliste basée sur l'historique du client

**Stratégie à 4 niveaux** (selon nombre de lignes de commande) :

| Lignes commandes | Quantité proposée       | Confiance | Stratégie            |
| ---------------- | ----------------------- | --------- | -------------------- |
| 0                | Skip                    | -         | -                    |
| 1                | Répéter cette quantité  | Low       | single_recent_order  |
| 2-4              | Médiane de toutes       | Medium    | median_recent_orders |
| 5+               | Médiane des 5 dernières | High      | median_recent_orders |

**Pourquoi la médiane ?**

- Ignore les outliers (événements exceptionnels)
- Exemple : `[10, 12, 11, 100, 12]` → Médiane = 12 ✅ (vs Moyenne = 29 ❌)

**Pourquoi les 5 dernières ?**

- Capte l'évolution récente du client (croissance, changement pattern)
- Exemple : `[10, 10, 15, 20, 25, 30, 35, 40, 45, 50]` → Médiane 5 dernières = 40 ✅

📖 **Détails complets** : `backend/src/features/stock-replenishment/docs/QUANTITY-STRATEGY.md`

## Paramètres de Configuration

```typescript
// backend/src/config/auto-proposal.ts
{
  // Détection inactivité
  inactivityDaysThreshold: 30,           // Seuil déclenchement

  // Phase 1 (Trigger) + Phase 2 (Quantité)
  analysisWindowDays: 180,               // Fenêtre d'analyse unifiée (6 mois)
  targetCoverage: 14,                    // Stock souhaité après livraison
  leadTime: 5,                           // Délai livraison
  minRequiredHistoryDaysForProduct: 30,  // Historique minimum pour calcul fiable

  // Phase 2 (Stratégie médiane)
  quantityStrategy: {
    maxRecentOrderLines: 5,              // Limiter aux 5 dernières lignes
    minOrdersForMediumConfidence: 2,     // ≥2 lignes = Medium confidence
    minOrdersForHighConfidence: 5,       // ≥5 lignes = High confidence
  },

  // Anti-spam (TODO)
  // minDaysBetweenProposals: 7,        // Jours minimum entre 2 propositions auto
}
```

## 🔄 Workflow

```
┌─ CRON Quotidien (Trigger.dev) ─┐
│
├─ 1. Détection Clients Inactifs
│  └─ Clients sans commande depuis 30j
│     (features/client-inactivity/)
│
├─ 2. Analyse Stock & Calcul Quantités
│  │  (features/stock-replenishment/)
│  │
│  ├─ Phase 1: TRIGGER (Détection risque rupture)
│  │  ├─ Récupération historique 180j (order-history/)
│  │  ├─ Calcul consommation/jour (utils/consumption.utils.ts)
│  │  ├─ Prédiction jours avant rupture (utils/prediction.utils.ts)
│  │  └─ Skip si daysUntilStockout > 19j
│  │
│  └─ Phase 2: QUANTITÉ (Médiane historique)
│     └─ Calcul médiane selon stratégie 4 niveaux (utils/quantity.utils.ts)
│
├─ 3. Génération Devis Odoo
│  │  (features/proposal-generation/)
│  ├─ Création devis draft via XML-RPC/JSON-2
│  └─ Tag "Auto-proposal"
│
└─ 4. Email Client
   └─ Automatique via création devis Odoo
```

### Structure

```
backend/src/
├── config/
│   └── auto-proposal.ts                      // Configuration globale
│
├── features/                                 // Features métier réutilisables
│   ├── client-inactivity/
│   │   ├── inactivity.service.ts             // Détection clients inactifs
│   │   └── inactivity.utils.ts               // Utils dates
│   │
│   ├── stock-replenishment/                  // Module prédiction stock
│   │   ├── stock-replenishment.service.ts    // Orchestrateur 2 phases
│   │   ├── order-history/
│   │   │   ├── order-history.service.ts      // Fetch historique Odoo
│   │   │   ├── order-history.types.ts        // Types
│   │   │   └── transform.utils.ts            // Groupement par produit
│   │   ├── utils/
│   │   │   ├── consumption.utils.ts          // Phase 1: Consommation/jour
│   │   │   ├── prediction.utils.ts           // Phase 1: Prédiction rupture
│   │   │   ├── quantity.utils.ts             // Phase 2: Stratégie médiane
│   │   │   └── median.utils.ts               // Calcul médiane
│   │   ├── docs/
│   │   │   └── QUANTITY-STRATEGY.md          // Doc stratégie 4 niveaux
│   │   └── README.md                         // Doc module
│   │
│   └── proposal-generation/ (TODO)
│       ├── proposal.service.ts               // Génération devis Odoo
│       └── formatting.utils.ts               // Format payload API
│
├── infrastructure/
│   └── odoo/
│       ├── odoo.service.ts                   // Factory Odoo (JSON-2 ou XML-RPC)
│       ├── clients/
│       │   ├── odoo-client.types.ts          // Interface commune
│       │   ├── odoo-domains.ts               // Domaines Odoo réutilisables
│       │   ├── json2-client.ts               // Adapter JSON-RPC 2.0 (Odoo v19+)
│       │   └── xmlrpc-client.ts              // Adapter XML-RPC (Odoo < v19)
│       └── seed-test-orders.ts               // Script test: génère data de test
│
├── trigger/ (TODO)
│   └── daily-auto-proposal.ts                // Task Trigger.dev quotidien
│
└── types.ts                                   // Types globaux (OdooApiType)
```

**Liens documentation** :

- Analyse stock : `backend/src/features/stock-replenishment/README.md`
- Stratégie quantités : `backend/src/features/stock-replenishment/docs/QUANTITY-STRATEGY.md`

## Actions

### 1. Génération Devis Odoo (TODO)

- Création devis **draft** via XML-RPC ou JSON-RPC 2.0
- Tag **"Auto-proposal"** pour traçabilité
- Contraintes MOQ/multiples UoM (à implémenter)
- **Email automatique** envoyé par Odoo

### 2. Anti-spam (TODO)

- Vérifier dernière proposition auto pour ce client
- Config `minDaysBetweenProposals` (ex: 7 jours)
- Skip si proposition récente existe

---

## 📝 TODO

### DONE

- Client inactivity detection
- Order history retrieval
- Stock replenishment analysis (100%)
  - Calcul consommation
  - Prédiction rupture
  - Calcul quantités ajustées

### TODO

- [ ] Contraintes MOQ/multiples UoM
- [ ] Génération devis Odoo
  - [ ] Création devis draft via API
  - [ ] Tag "Auto-proposal" sur devis
  - [ ] Anti-spam : éviter propositions répétées (config: minDaysBetweenProposals)
- [ ] Orchestration Trigger.dev (CRON quotidien)
- [ ] Email : automatique via création devis Odoo
