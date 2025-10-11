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

### Phase 2.5 : PRICING & MOQ (Préparation Proposition)

**But** : Transformer les quantités calculées en proposition de commande validée avec prix et MOQ

**Étapes** :

1. **Enrichissement avec prix**

   - Mode `historyPriceForClient` : Utilise le `price_unit` de la dernière commande validée
   - Mode `currentPriceForClient` : Non implémenté (limitation API Odoo v17)

2. **Calcul du total de la commande**

   - `Total = Σ (quantity_to_order × current_price_unit)`

3. **Ajustement MOQ (Minimum Order Quantity)**
   - Si `Total < 300€` → Ajustement en round-robin
   - Algorithme : Distribuer le gap en priorisant les produits les plus commandés
   - Arrêt dès que le MOQ est atteint

**Limitation actuelle - Pricing** :

L'API Odoo v17 ne permet pas d'obtenir les prix actuels avec pricelist via XML-RPC :

- Les méthodes publiques ont été supprimées depuis Odoo v16+
- Le mode `historyPriceForClient` utilise les prix de l'historique de commandes
- Le prix historique inclut le pricelist client mais avec l'ancien palier de quantité

**Solutions futures** :

1. Module custom Odoo exposant une méthode publique
2. Création d'une `sale.order.line` temporaire pour lire le prix calculé
3. Réplication de la logique pricelist côté backend (non recommandé)

📖 **Détails complets** : `backend/src/features/proposal-preparation/README.md`

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

  // Phase 2 (Stratégie médiane)
  quantityStrategy: {
    maxRecentOrderLines: 5,              // Limiter aux 5 dernières lignes
    minOrdersForMediumConfidence: 2,     // ≥2 lignes = Medium confidence
    minOrdersForHighConfidence: 5,       // ≥5 lignes = High confidence
  },

  // Phase 2.5 (Pricing & MOQ)
  pricing: {
    minimumOrderAmount: 300,             // MOQ global en euros
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
│  ├─ A: TRIGGER (Détection risque rupture)
│  │  ├─ Récupération historique 180j (order-history/)
│  │  ├─ Calcul consommation/jour (utils/consumption.utils.ts)
│  │  ├─ Prédiction jours avant rupture (utils/prediction.utils.ts)
│  │  └─ Skip si daysUntilStockout > 19j
│  │
│  └─ B: QUANTITÉ (Médiane historique)
│     └─ Calcul médiane selon stratégie 4 niveaux (utils/quantity.utils.ts)
│
├─ 2.5. Préparation Proposition avec Pricing & MOQ
│  │  (features/proposal-preparation/)
│  │
│  ├─ Enrichissement avec prix historiques (pricing/)
│  ├─ Calcul total de la commande
│  └─ Ajustement MOQ si total < 300€ (moq/)
│     └─ Algorithme round-robin par fréquence de commande
│
├─ 3. Génération Devis Odoo (Draft)
│  │  (features/proposal-generation/)
│  ├─ Création devis draft via XML-RPC/JSON-2
│  └─ Tag "Auto-proposal"
│
└─ 4. Email Client
   └─ mail.template.send_mail() + mail.mail.send()
   └─ Template: sale.email_template_edi_sale
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
│   ├── proposal-preparation/                 // Module pricing & MOQ
│   │   ├── proposal-preparation.service.ts   // Orchestrateur Phase 2.5
│   │   ├── proposal-preparation.types.ts     // Types TypeScript
│   │   ├── pricing/
│   │   │   └── pricing.service.ts            // Enrichissement prix historiques
│   │   ├── moq/
│   │   │   ├── moq-adjustment.service.ts     // Logique ajustement MOQ
│   │   │   └── adjustment-strategy.utils.ts  // Tri produits par fréquence
│   │   ├── __tests__/
│   │   │   ├── test-utils.ts                 // Chargement fichiers JSON test
│   │   │   └── proposal-preparation.test.ts  // Tests d'intégration
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
- Pricing & MOQ : `backend/src/features/proposal-preparation/README.md`

## 🚀 Prochaines Étapes

### Phase 3 : Génération Devis Odoo ✅

**Objectif** : Transformer la proposition validée en devis Odoo draft

- Création devis **draft** via XML-RPC ou JSON-RPC 2.0
- Tag **"Auto-proposal"** pour traçabilité
- Utilisation des données de la Phase 2.5 (quantités ajustées + prix)

**Note** : Les contraintes MOQ et UoM sont déjà gérées en Phase 2.5

### Phase 4 : Email Client (TODO)

**Objectif** : Envoyer l'email du devis au client

**Implémentation** :
```typescript
// 1. Récupérer template ID
const templateId = await getTemplateId('sale.email_template_edi_sale');

// 2. Créer l'email
const mailId = await odoo.execute_kw('mail.template', 'send_mail', [templateId, quoteId]);

// 3. Envoyer (Odoo 16+)
await odoo.execute_kw('mail.mail', 'send', [mailId]);
```

### Phase 5 : Anti-spam (TODO)

- Vérifier dernière proposition auto pour ce client
- Config `minDaysBetweenProposals` (ex: 7 jours)
- Skip si proposition récente existe

### Phase 6 : Orchestration Trigger.dev (TODO)

- CRON quotidien orchestrant toutes les phases
- Gestion des erreurs et retry logic
- Monitoring et alertes

---

## 📝 TODO

### DONE ✅

- **Phase 0** : Client inactivity detection
- **Phase 1** : Stockout detection (TRIGGER)
  - Calcul consommation/jour
  - Prédiction rupture
  - Filtrage des produits de service
- **Phase 2** : Quantity calculation
  - Stratégie médiane à 4 niveaux
  - Gestion UoM native Odoo
- **Phase 2.5** : Proposal preparation (Pricing & MOQ)
  - Enrichissement avec prix historiques
  - Ajustement MOQ (300€) avec algorithme round-robin
  - Architecture future-proof pour prix actuels (mode `currentPriceForClient`)
- **Phase 3** : Quote generation
  - Création devis draft via XML-RPC
  - Tag "Auto-proposal" (ID: 82)
  - Tests validés (client 24199 avec MOQ, client 81 sans MOQ)

### TODO 🚧

- [ ] **Phase 4** : Email automatique
  - [ ] Implémenter sendQuotationEmail() avec mail.template
  - [ ] Template: sale.email_template_edi_sale
- [ ] **Phase 5** : Anti-spam
  - [ ] Config minDaysBetweenProposals
- [ ] **Phase 6** : Orchestration Trigger.dev (CRON quotidien)

### NOTES 📝

- [x] UoM - Géré nativement par Odoo (aucune conversion nécessaire)
- [x] Filtrer produits de service
  - Filtré via `product_type === "service"` (champ Odoo standard)
  - Implémenté dans les 2 clients (XML-RPC + JSON-2)
  - Impact : Évite de proposer "Djo Transport" comme produit physique
- [x] Pricing - Limitation API Odoo v17
  - Impossible d'obtenir prix actuels avec pricelist via XML-RPC
  - Mode `historyPriceForClient` implémenté (prix de l'historique)
  - Solutions futures : module custom Odoo ou sale.order.line temporaire

---

## 📦 Note sur les UoM

Les quantités récupérées d'Odoo sont **déjà dans le bon UoM** (TU6, TU12, etc.). Aucune conversion nécessaire.
Détails: voir `backend/src/features/proposal-preparation/README.md`
