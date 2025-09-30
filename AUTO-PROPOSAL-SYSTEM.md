### Principe

- **Ne proposer que les produits déjà commandés** par le client historiquement
- **Détecter automatiquement** les besoins basés sur l'inactivité et le risque de rupture
- **Automatiser complètement** la génération de devis et l'envoi d'emails

## 🎯 Déclencheur du Système

### Inactivité Client

- Le client n'a plus commandé depuis **X jours** (paramétrable, ex: 30 jours)

## 📊 Analyse Déclenchée

### Prédiction de Rupture de Stock

Une fois un client identifié comme inactif, le système analyse pour chaque produit :

- **Consommation/jour** calculée sur l'historique
- **Stock restant théorique** basé sur la dernière commande
- **Date de rupture estimée** selon la consommation moyenne

## ⚙️ Paramètres de Configuration

### Paramètres Globaux

- **X jours d'inactivité** : seuil de déclenchement (ex: 30 jours)
- **Couverture cible** : nombre de jours de stock souhaité (ex: 14 jours)
- **Lead time** : délai de livraison (ex: 5 jours)
- **MOQ & multiples d'UoM** : minimum de commande (ex: 300€ ou moyenne des 12 derniers mois)

## 🔄 Workflow Technique

```
┌─ CRON Quotidien ─┐
│                  │
├─ 1. Détection Clients Inactifs
│  └─ Clients sans commande depuis X jours
│
├─ 2. Analyse Stock & Calcul Quantités ⭐
│  ├─ Récupération historique commandes
│  ├─ Calcul consommation/jour par produit
│  ├─ Estimation stock restant théorique
│  ├─ Prédiction date de rupture
│  ├─ Filtrage produits à risque
│  ├─ Calcul quantités brutes nécessaires
│  └─ Ajustement final (MOQ & multiples UoM)
│
├─ 3. Génération Devis Odoo
│  ├─ Formatage données pour API
│  ├─ Création devis automatique (draft)
│  └─ Tag "Auto-proposal" pour traçabilité
│
└─ 4. Notification Email
   ├─ message_post avec lien portal
   └─ Envoi automatique au client
```

## 🏗️ Architecture Technique

### Stack Technologique

- **Backend** : Hono.js + TypeScript
- **Orchestration** : Trigger.dev v4 (tasks + scheduled jobs)
- **Intégration** : API Odoo pour devis et emails
- **Cron** : Exécution quotidienne via Trigger.dev

### Structure de Fichiers

```
src/
├── config/
│   └── auto-proposal.ts                      // Paramètres globaux configurables
├── features/                                 // Features réutilisables et agnostiques
│   ├── client-inactivity/
│   │   ├── inactivity.service.ts             // Logique détection inactivité
│   │   └── inactivity.utils.ts               // Utils dates, calculs simples
│   ├── stock-analysis/
│   │   ├── order-history/
│   │   │   ├── order-history.types.ts        // Types/interfaces
│   │   │   ├── order-history.service.ts      // Récupération historique client
│   │   │   └── transform.utils.ts            // Transformation data
│   │   ├── stock.service.ts                  // Algo prédiction rupture
│   │   ├── consumption.utils.ts              // Calculs consommation/jour
│   │   └── prediction.utils.ts               // Utils prédiction stock
│   └── proposal-generation/
│       ├── proposal.service.ts               // Génération devis Odoo
│       ├── quantity.utils.ts                 // Calculs quantités, MOQ
│       └── formatting.utils.ts               // Format devis
├── infrastructure/
│   └── odoo/
│       ├── odoo.service.ts                   // API calls Odoo (JSON-2)
│
├── workflows/
│   └── auto-proposal/
│       └── auto-proposal.workflow.ts         // Orchestrateur (compose features)
├── trigger/
│   ├── auto-proposal.task.ts                 // Task Trigger.dev
│   └── daily-scheduler.ts                    // Cron quotidien
└── types.ts                                  // Types globaux
```

## 🧮 Algorithme de Détection (Cœur du Système)

```javascript
// 1. CLIENT INACTIVITY SERVICE
clients_inactifs = getInactiveClients(seuil_inactivité)

pour chaque client in clients_inactifs {

  //TOCHECK ? Ajuster la période pour clients récents
  // ancienneté = getClientAge(client.id)
  // ou prendre en compte la date de la premiere commande .
  période_analyse = min(ancienneté, 365_jours)

  // 2. ORDER HISTORY SERVICE
  historique = getProductOrderHistory(client.id, période_analyse)

  // 3. CONSUMPTION UTILS
  pour chaque produit in historique.products {
    conso_jour = calculateDailyConsumption(produit.orders, période_analyse)

    // 4. PREDICTION UTILS
    dernière_qty = produit.orders[0].quantity  // Plus récente
    jours_écoulés = aujourd'hui - produit.orders[0].date
    stock_estimé = dernière_qty - (jours_écoulés * conso_jour)
    jours_avant_rupture = stock_estimé / conso_jour

    // 5. STOCK SERVICE (orchestrateur)
    si (jours_avant_rupture <= couverture_cible + lead_time) {
      produits_à_commander.push({
        product_id: produit.id,
        quantité_suggérée: (couverture_cible + lead_time) * conso_jour
      })
    }
  }

  // 6. PROPOSAL SERVICE
  si (produits_à_commander.length > 0) {
    createProposal(client.id, produits_à_commander)
  }
}
```

## 🎯 Actions Automatisées

### 1. Génération Devis Odoo

- Création automatique d'un devis en mode **draft**
- Calcul intelligent des quantités basé sur l'algorithme
- Respect des contraintes MOQ et multiples d'UoM

### 2. Envoi Email

- Template email standard d'Odoo
- Message type : _"Ci-joint une proposition de commande"_
- Pièce jointe : devis PDF généré

### 3. Suivi et Traçabilité

- Tag **"Auto-proposal"** sur tous les devis générés
- Logs détaillés pour monitoring
- Métriques de performance du système

## 🚀 Mise en Production

### Phase 1 : Implémentation Core

1. Développement de l'algorithme de détection
2. Intégration API Odoo (devis + emails)
3. Configuration du cron quotidien

---

## 📝 TODO (30/09/2025)

### ✅ Fait

- Client inactivity detection
- Order history retrieval & grouping

### 🚧 En cours (Stock Analysis)

- [ ] `consumption.utils.ts`
- [ ] `prediction.utils.ts`
- [ ] `stock.service.ts`

### ❌ À faire

- [ ] Proposal generation
- [ ] Trigger.dev orchestration
- [ ] Email notifications

**Status** : 🚧 35% complété (~20h restantes)
