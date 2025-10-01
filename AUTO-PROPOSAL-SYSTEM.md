### Principe

- **Ne proposer que les produits déjà commandés** par le client historiquement
- **Détecter automatiquement** les besoins basés sur l'inactivité et le risque de rupture
- **Automatiser complètement** la génération de devis et l'envoi d'emails

## 🎯 Déclencheur du Système

### Inactivité Client

- Le client n'a plus commandé depuis **X jours** (paramétrable, ex: 30 jours)

## Analyse Déclenchée

### Prédiction de Rupture de Stock

Une fois un client identifié comme inactif, le système analyse pour chaque produit :

- **Consommation/jour** calculée sur l'historique
- **Stock restant théorique** basé sur la dernière commande
- **Date de rupture estimée** selon la consommation moyenne

## Paramètres de Configuration

### Paramètres Globaux

- **X jours d'inactivité** : seuil de déclenchement (ex: 30 jours)
- **Couverture cible** : nombre de jours de stock souhaité (ex: 14 jours)
- **Lead time** : délai de livraison (ex: 5 jours)
- **MOQ & multiples d'UoM** : minimum de commande (ex: 300€ ou moyenne des 12 derniers mois)

## 🔄 Workflow Technique ( Archtecture des steps TBC w/ Arthur )

```
┌─ CRON Quotidien ─┐
│                  │
├─ 1. Détection Clients Inactifs
│  └─ Clients sans commande depuis X jours
│
├─ 2. Analyse Stock & Calcul Quantités
│  ├─ Récupération historique commandes (365j)
│  ├─ Calcul consommation moyenne/jour
│  ├─ Prédiction jours avant rupture
│  └─ Calcul quantités ajustées (seuil 19j)
│
├─ 3. Génération Devis Odoo
│  ├─ Création devis draft
│  └─ Tag "Auto-proposal"
│
└─ 4. Notification Email
   └─ Template standard Odoo
```

### Structure de Fichiers

```
src/
├── config/
│   └── auto-proposal.ts                      // Paramètres globaux configurables
├── features/                                 // Features réutilisables et agnostiques
│   ├── client-inactivity/
│   │   ├── inactivity.service.ts             // Logique détection inactivité
│   │   └── inactivity.utils.ts               // Utils dates, calculs simples
│   ├── stock-replenishment/
│   │   ├── order-history/
│   │   │   ├── order-history.types.ts        // Types/interfaces
│   │   │   ├── order-history.service.ts      // Récupération historique client
│   │   │   └── transform.utils.ts            // Transformation data
│   │   ├── utils/
│   │   │   ├── consumption.utils.ts          // Calculs consommation/jour
│   │   │   ├── prediction.utils.ts           // Utils prédiction stock
│   │   │   └── quantity.utils.ts             // Calculs quantités à commander
│   │   └── stock-replenishment.service.ts    // Orchestrateur principal
│   └── proposal-generation/
│       ├── proposal.service.ts               // Génération devis Odoo
│       └── formatting.utils.ts               // Format devis pour API
├── infrastructure/
│   └── odoo/
│       ├── odoo.service.ts                   // API calls Odoo (JSON-2)
│
├── trigger/ ( TBC )
│
└── types.ts                                  // Types globaux
```

## Algorithme

Voir doc détaillée ici : `backend/src/features/stock-replenishment/README.md`

```
Pour chaque client inactif depuis 30+ jours:
  1. Récupérer historique commandes (365j)
  2. Pour chaque produit commandé:
     - Calculer consommation/jour
     - Prédire jours avant rupture
     - Si rupture < 19j → Commander la différence
  3. Si produits à commander → Générer devis
```

## Actions Automatisées

### 1. Génération Devis Odoo

- Création automatique d'un devis en mode **draft**
- Calcul des quantités basé sur l'algorithme
- Respect des contraintes MOQ et multiples d'UoM

### 2. Envoi Email ( Tbc : Oddo Api vs MailSender Api)

- Template email standard d'Odoo
- Message type : _"Ci-joint une proposition de commande"_
- Pièce jointe : devis PDF généré

### 3. Suivi et Traçabilité

- Tag **"Auto-proposal"** sur tous les devis générés
- Logs détaillés pour monitoring
- Métriques de performance du système

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

- [ ] Algo : Uom et Moq
- [ ] Proposal generation (devis Odoo)
- [ ] Trigger.dev orchestration
- [ ] Email notifications
