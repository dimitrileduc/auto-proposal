# 🤖 Auto-Proposal System

## 📋 Vue d'ensemble

Système automatique de génération de propositions commerciales pour clients inactifs, basé sur l'analyse de leurs historiques de commandes et prédictions de rupture de stock.

### Principe

- **Ne proposer que les produits déjà commandés** par le client historiquement
- **Détecter automatiquement** les besoins basés sur l'inactivité et le risque de rupture
- **Automatiser complètement** la génération de devis et l'envoi d'emails

---

## 🔄 Workflow Complet

```
┌─ CRON Quotidien (Trigger.dev) ─┐
│
├─ Phase 0: Détection Clients Inactifs
│  └─ Clients sans commande depuis 30j
│     📖 backend/src/features/client-inactivity/
│
├─ Phase 1 & 2: Analyse Stock & Calcul Quantités
│  │  📖 backend/src/features/stock-replenishment/
│  │
│  ├─ 1. TRIGGER - Détection risque rupture
│  │  └─ Calcul consommation/jour + prédiction stock restant
│  │  └─ Skip si daysUntilStockout > 19j
│  │
│  └─ 2. QUANTITÉ - Médiane historique
│     └─ Stratégie à 4 niveaux selon historique client
│
├─ Phase 2.5: Préparation Proposition (Pricing & MOQ)
│  │  📖 backend/src/features/proposal-preparation/
│  │
│  ├─ Enrichissement avec prix historiques
│  ├─ Calcul total de la commande
│  └─ Ajustement MOQ si total < 300€
│
├─ Phase 3: Génération Devis Odoo ✅
│  │  📖 backend/src/features/proposal-generation/
│  │
│  ├─ Création devis draft via XML-RPC
│  └─ Tag "Auto-proposal" (ID: 82)
│
├─ Phase 4: Email Client (TODO)
│  └─ mail.template.send_mail() + mail.mail.send()
│  └─ Template: sale.email_template_edi_sale
│
└─ Phase 5: Génération Rapports ✅
   │  📖 backend/src/reports/ + backend/src/workflow/
   │
   ├─ Rapport Global (global-report-{date}.md)
   │  ├─ Statistiques globales (clients inactifs, avec historique, avec risque)
   │  ├─ Liste des exemples détaillés avec liens
   │  └─ Tableau comparatif RAW → AJUSTÉ → ODOO
   │
   └─ Rapports Clients (client-{id}-{name}.md)
      ├─ Phase 1: Stock Analysis (RAW) avec dropdowns par produit
      ├─ Phase 2.5: Pricing + MOQ (ADJUSTED)
      ├─ Phase 3: Devis Odoo (QUOTE)
      └─ Comparaison prix historiques vs Odoo
```

---

## 📊 Détails par Phase

### Phase 0: Détection Clients Inactifs

**Objectif**: Identifier les clients nécessitant une proposition

- Seuil: 30 jours sans commande (configurable)
- Vérification quotidienne via CRON
- 📖 `backend/src/features/client-inactivity/`

---

### Phase 1: TRIGGER - Détection Risque de Rupture

**Objectif**: Détecter si un produit risque une rupture de stock

**Méthode**:
1. Calcul consommation/jour sur 180j d'historique
2. Prédiction stock restant
3. Décision: Commander si `daysUntilStockout ≤ 19j`

**Seuil**: `targetCoverage (14j) + leadTime (5j) = 19 jours`

📖 `backend/src/features/stock-replenishment/`

---

### Phase 2: QUANTITÉ - Calcul Basé Historique

**Objectif**: Proposer une quantité réaliste basée sur l'historique

**Stratégie médiane à 4 niveaux**:

| Lignes commandes | Quantité proposée       | Confiance |
| ---------------- | ----------------------- | --------- |
| 0                | Skip                    | -         |
| 1                | Répéter cette quantité  | Low       |
| 2-4              | Médiane de toutes       | Medium    |
| 5+               | Médiane des 5 dernières | High      |

**Pourquoi la médiane ?**
- Ignore les outliers (événements exceptionnels)
- Exemple: `[10, 12, 11, 100, 12]` → Médiane = 12 (vs Moyenne = 29)

📖 `backend/src/features/stock-replenishment/docs/QUANTITY-STRATEGY.md`

---

### Phase 2.5: PRICING & MOQ - Préparation Proposition

**Objectif**: Transformer les quantités en proposition validée avec prix et MOQ

**Étapes**:
1. Enrichissement avec prix (mode `historyPriceForClient`)
2. Calcul total de la commande
3. Ajustement MOQ si total < 300€ (algorithme round-robin)

**⚠️ Limitation actuelle - Pricing**:
- L'API Odoo v17 ne permet pas d'obtenir les prix avec pricelist via XML-RPC
- Utilise les prix de l'historique (inclut pricelist mais pas le bon palier de quantité)
- Solutions futures: module custom Odoo ou merger Phase 2.5 + Phase 3

📖 `backend/src/features/proposal-preparation/README.md`

---

### Phase 3: Génération Devis Odoo ✅

**Objectif**: Créer un devis draft dans Odoo

**Implémentation**:
- Création sale.order via XML-RPC
- Tag "Auto-proposal" (ID: 82)
- Utilise les données de Phase 2.5 (quantités + prix)

**Tests validés**:
- Client 24199 (avec MOQ): 307.06€ HT → Quote S39592
- Client 81 (sans MOQ): 799.10€ HT → Quote S39593
- Match parfait: 0.00€ de différence entre Phase 2.5 et Odoo

📖 `backend/src/features/proposal-generation/`

---

### Phase 4: Email Client (TODO)

**Objectif**: Envoyer l'email du devis au client

**Implémentation requise**:
- 3 appels API: `getTemplateId()` → `mail.template.send_mail()` → `mail.mail.send()`
- Template: `sale.email_template_edi_sale`

---

### Phase 5: Génération Rapports ✅

**Objectif**: Générer des rapports markdown pour suivi et analyse

**2 types de rapports**:

#### 1. Rapport Global (`global-report-{date}.md`)
- **Statistiques globales**: Clients inactifs, avec historique, avec risque, total produits, moyenne
- **Liste des exemples**: Les N clients traités avec liens vers rapports détaillés
- **Tableau comparatif**: Client | ID | Produits | RAW (€) | AJUSTÉ (€) | ODOO HT (€) | Rapport

#### 2. Rapports Clients (`client-{id}-{name}.md`)
- **Phase 1 (RAW)**: Stock Analysis avec dropdowns par produit (historique, prédiction, calcul quantité)
- **Phase 2.5 (ADJUSTED)**: Pricing + MOQ (prix historiques, ajustement MOQ si < 300€)
- **Phase 3 (QUOTE)**: Devis Odoo réel (prix avec pricelist, taxes, total TTC)
- **Comparaison**: Écart prix historiques vs Odoo

**Localisation**: `reports-output/`

📖 `backend/src/reports/` + `backend/src/workflow/README.md`

---

## ⚙️ Configuration

```typescript
// backend/src/config/auto-proposal.ts
{
  inactivityDaysThreshold: 30,     // Seuil déclenchement (jours)
  analysisWindowDays: 180,         // Fenêtre d'analyse historique (6 mois)
  targetCoverage: 14,              // Stock souhaité après livraison (jours)
  leadTime: 5,                     // Délai livraison (jours)

  quantityStrategy: {
    maxRecentOrderLines: 5,        // Limiter aux 5 dernières lignes
    minOrdersForMediumConfidence: 2,
    minOrdersForHighConfidence: 5,
  },

  pricing: {
    minimumOrderAmount: 300,       // MOQ global en euros
  },

  quoteGeneration: {
    autoProposalTagId: 82,         // Tag Odoo "Auto-proposal"
  },
}
```

---

## 📁 Architecture

```
backend/src/
├── config/
│   └── auto-proposal.ts                      // Configuration globale
│
├── features/                                 // Features métier
│   ├── client-inactivity/                    // Phase 0
│   ├── stock-replenishment/                  // Phase 1 & 2
│   ├── proposal-preparation/                 // Phase 2.5
│   └── proposal-generation/                  // Phase 3
│
├── reports/                                  // Phase 5
│   ├── formatters.ts                         // Utils markdown (tables, titles, etc.)
│   ├── client-report.ts                      // Rapport par client (3 phases)
│   └── global-report.ts                      // Rapport global (stats + tableau)
│
├── workflow/                                 // Orchestration
│   ├── auto-proposal.workflow.ts             // Workflow principal
│   ├── client-proposal.workflow.ts           // Workflow 1 client
│   ├── workflow.stats.ts                     // Stats globales
│   └── README.md                             // 📖 Doc workflow
│
├── infrastructure/
│   └── odoo/                                 // Clients XML-RPC & JSON-2
│
└── trigger/                                   // Task Trigger.dev (TODO)
```

---

## 📝 État d'avancement

### ✅ DONE

- **Phase 0**: Client inactivity detection
- **Phase 1**: Stockout detection (TRIGGER)
- **Phase 2**: Quantity calculation (stratégie médiane)
- **Phase 2.5**: Proposal preparation (Pricing & MOQ)
- **Phase 3**: Quote generation (draft avec tag)
- **Phase 5**: Report generation (global + par client)

### 🚧 TODO

- [ ] **Phase 4**: Email automatique (mail.template API)
- [ ] **Orchestration**: Trigger.dev CRON quotidien
- [ ] **Anti-spam**: minDaysBetweenProposals entre propositions
- [ ] **Monitoring**: Logs, alertes, retry logic

---

## 📖 Documentation détaillée

- **Workflow orchestration**: `backend/src/workflow/README.md`
- **Phase 1 & 2**: `backend/src/features/stock-replenishment/README.md`
- **Stratégie quantités**: `backend/src/features/stock-replenishment/docs/QUANTITY-STRATEGY.md`
- **Phase 2.5**: `backend/src/features/proposal-preparation/README.md`

---

## ⚠️ Limitations connues

### Pricing (Phase 2.5)

**Problème**: L'API Odoo v17 (XML-RPC) ne permet pas d'obtenir les prix avec pricelist de manière programmatique

**Impact**:
- Utilise les prix de l'historique (mode `historyPriceForClient`)
- Prix potentiellement obsolètes si pricelist ou paliers ont changé

**Solutions possibles**:
1. Module custom Odoo exposant `_get_pricelist_price()`
2. Merger Phase 2.5 + Phase 3 (laisser Odoo calculer les prix)

### UoM

Les quantités récupérées d'Odoo sont déjà dans le bon UoM (TU6, TU12, etc.). Aucune conversion nécessaire.
