# Configuration

## 🎯 Rôle

Centralise tous les paramètres configurables du système Auto-Proposal (détection, analyse, quantité, pricing, workflow).

---

## 📦 Inventaire des Composants

### Fichier: `auto-proposal.ts`

**Description:** Configuration unique exportée sous forme d'objet `autoProposalConfig` contenant tous les paramètres du système.

<details><summary>Voir l'implémentation complète</summary>

```typescript
// Configuration auto-proposal
export const autoProposalConfig = {
  // Odoo API type
  odooApiType: OdooApiType.XMLRPC,

  // Client inactivity detection (defaults calculés dynamiquement si null)
  inactivityDetection: {
    dateMin: null,  // Si null: aujourd'hui - 30 jours
    dateMax: null,  // Si null: aujourd'hui
  },

  // Stock replenishment parameters
  targetCoverage: 25,
  leadTime: 5,
  analysisWindowDays: 120,

  // Quantity calculation strategy
  quantityStrategy: {
    maxRecentOrderLines: 5,
    minOrdersForMediumConfidence: 2,
    minOrdersForHighConfidence: 5,
  },

  // Pricing & MOQ configuration
  pricing: {
    minimumOrderAmount: 300,
  },

  // Quote generation configuration
  quoteGeneration: {
    autoProposalTagId: 82,
    noteTemplate: "🤖 Proposition automatique générée par Auto-Proposal System",
  },

  // Product filtering configuration
  productFiltering: {
    excludedCategoryIds: [
      8, 10, 12, 14, 17, 19, 20, 25, 40, 46, 287, 582, // Consignes
      294, // Palettes
      24, 29, 30, 249, 252, 253, 262, 264, 265, 276, 291, 538, 556, 557, 583, 585, 586, 587, // Emballages
      7, 13, 15, 16, 18, // Lavage à façon
      50, 51, 52, // Fermetures/Bouchons
      547, 577, // Vaisselle
      21, 289, 551, 580, // Transport
      11, 26, 284, 285, 286, 288, 295, 555, 560, // Consommables/Frais généraux
      53, 554, 697, // Stockage/Services
    ],
  },

  // Workflow configuration
  workflow: {
    generateReports: true,
    forceReanalysis: false,
  },

  // Testing configuration
  testing: {
    defaultClientId: 3,
    includeDraftOrders: false,
  },
};
```

</details>

---

## 🔧 Structure de Configuration Détaillée

### 1. Type d'API Odoo

```typescript
odooApiType: OdooApiType.XMLRPC
```

- **Options:** `OdooApiType.XMLRPC` ou `OdooApiType.JSON2`
- **Par défaut:** `XMLRPC` (compatibilité maximale avec toutes versions Odoo)
- **Impact:** Détermine quel client Odoo sera utilisé dans tout le système

### 2. Détection d'Inactivité

```typescript
inactivityDetection: {
  dateMin: null,  // Si null: aujourd'hui - 30 jours
  dateMax: null,  // Si null: aujourd'hui
}
```

- **Defaults:** `null` pour calcul dynamique dans `orchestrator.task.ts`
- **Calcul runtime:** `dateMin = getDateDaysAgo(30)`, `dateMax = getTodayAsDateString()`
- **Override:** Possibilité de fournir `dateMin`/`dateMax` personnalisés via payload HTTP
- **Avantage:** Permet des analyses rétroactives avec dates explicites

### 3. Paramètres d'Analyse Stock

```typescript
targetCoverage: 25,     // Jours de couverture cible
leadTime: 5,            // Délai de livraison en jours
analysisWindowDays: 120 // Fenêtre d'historique à analyser
```

- **`targetCoverage`:** Nombre de jours de stock souhaité après réapprovisionnement
- **`leadTime`:** Délai entre commande et livraison (ajouté au seuil de rupture)
- **`analysisWindowDays`:** Nombre de jours d'historique pour calculer la consommation

**Calcul du seuil de rupture:**

```
seuilRupture = (targetCoverage + leadTime) jours
             = (25 + 5) = 30 jours
```

### 4. Stratégie de Quantité (Médiane)

```typescript
quantityStrategy: {
  maxRecentOrderLines: 5,           // Limite à 5 commandes récentes
  minOrdersForMediumConfidence: 2,  // Seuil confiance Medium
  minOrdersForHighConfidence: 5,    // Seuil confiance High
}
```

**Niveaux de confiance:**

- **Low:** 1 commande → médiane de [qty]
- **Medium:** 2-4 commandes → médiane des quantités
- **High:** 5+ commandes → médiane des quantités

**Stratégie actuelle:** Médiane à 4 niveaux (0, 1, 2-4, 5+) - voir `backend/src/features/stock-replenishment/utils/quantity.utils.ts:57`

### 5. Pricing & MOQ

```typescript
pricing: {
  minimumOrderAmount: 300 // MOQ global en euros
}
```

- **MOQ:** Minimum Order Quantity (Montant minimum de commande)
- **Algorithme:** Round-robin pour augmenter les quantités jusqu'à atteindre 300€
- **Impact:** Si total initial < 300€, le système augmente progressivement les quantités

### 6. Génération de Devis

```typescript
quoteGeneration: {
  autoProposalTagId: 82,
  noteTemplate: "🤖 Proposition automatique..."
}
```

- **`autoProposalTagId`:** ID du tag CRM Odoo "Auto-proposal" (doit exister dans `crm.tag`)
- **`noteTemplate`:** Message ajouté dans le champ `note` du devis Odoo

**Usage du tag:**

- Identifie les devis générés automatiquement
- Permet de filtrer les clients ayant déjà reçu une proposition (évite le spam si `forceReanalysis: false`)

### 7. Filtrage des Produits

```typescript
productFiltering: {
  excludedCategoryIds: [8, 10, 12, ...] // 56 catégories exclues
}
```

**Catégories exclues (non-food):**

- **Consignes:** Bouteilles/bocaux/casiers non facturés (8, 10, 12, 14, 17, 19, 20, 25, 40, 46, 287, 582)
- **Palettes:** 294
- **Emballages:** Cartons, films, couvercles, étiquettes (24, 29, 30, 249, 252, 253, 262, 264, 265, 276, 291, 538, 556, 557, 583, 585, 586, 587)
- **Lavage à façon:** Prestations de nettoyage (7, 13, 15, 16, 18)
- **Fermetures/Bouchons:** 50, 51, 52
- **Vaisselle:** 547, 577
- **Transport:** 21, 289, 551, 580
- **Consommables/Frais généraux:** 11, 26, 284, 285, 286, 288, 295, 555, 560
- **Stockage/Services:** 53, 554, 697

**Impact:** Ces produits sont exclus de l'analyse stock car ils ne correspondent pas à des produits alimentaires consommables.

### 8. Workflow

```typescript
workflow: {
  generateReports: true,   // Génération rapports markdown
  forceReanalysis: false   // Réanalyse clients avec tag 82
}
```

- **`generateReports`:** Si `false`, aucun rapport markdown n'est généré (gain de performance)
- **`forceReanalysis`:**
  - `false` (défaut): Exclut les clients ayant déjà un tag "Auto-proposal" (82) → évite le spam
  - `true`: Analyse TOUS les clients inactifs, même ceux avec proposition récente

**Référence code:** `backend/src/features/client-inactivity/inactivity.service.ts:29`

```typescript
if (!autoProposalConfig.workflow.forceReanalysis) {
  clientDomain.push(["category_id", "not in", [excludeTagId]]);
}
```

### 9. Configuration de Test

```typescript
testing: {
  defaultClientId: 3,        // Arthur Schwaiger (client démo)
  includeDraftOrders: false  // Inclure commandes brouillon
}
```

- **`defaultClientId`:** Client utilisé pour les tests manuels (`/routes/client-task.ts`)
- **`includeDraftOrders`:** Si `true`, les commandes en état "draft" sont incluses dans l'analyse d'historique

---

## 🔧 Guides Pratiques

<details><summary>Comment modifier la période d'inactivité par défaut ?</summary>

**Option 1:** Modifier les defaults dans `auto-proposal.ts` (affecte tous les runs):

```typescript
inactivityDetection: {
  dateMin: null,  // Si null: getDateDaysAgo(45) au lieu de 30
  dateMax: null,
}
// Note: Le calcul `getDateDaysAgo(30)` est codé dans orchestrator.task.ts:66
```

**Option 2:** Passer une config personnalisée lors du trigger (override ponctuel):

```bash
curl -X POST http://localhost:3000/api/orchestrator-task \
  -H "Content-Type: application/json" \
  -d '{"config": {"dateMin": "010925", "dateMax": "011025"}}'
```

**Option 3:** Définir des defaults non-null dans `auto-proposal.ts`:

```typescript
inactivityDetection: {
  dateMin: "2025-09-01 00:00:00",  // Fixe au lieu de dynamique
  dateMax: "2025-10-01 00:00:00",
}
```

</details>

<details><summary>Comment ajuster le seuil de rupture stock ?</summary>

Modifier les paramètres `targetCoverage` et `leadTime` dans `auto-proposal.ts`:

```typescript
// Exemple: Augmenter le seuil de 30 à 35 jours
targetCoverage: 30, // 30 jours au lieu de 25
leadTime: 5, // 5 jours (inchangé)
// → Seuil = 30 + 5 = 35 jours
```

**Impact:**

- Plus de produits détectés en risque de rupture
- Quantités commandées potentiellement plus élevées

</details>

<details><summary>Comment changer la stratégie de quantité (médiane → moyenne) ?</summary>

1. **Modifier la fonction de calcul** dans `backend/src/features/stock-replenishment/utils/quantity.utils.ts`:

```typescript
// Remplacer
const medianQty = calculateMedian(quantities);

// Par
const averageQty = quantities.reduce((sum, q) => sum + q, 0) / quantities.length;
```

2. **Ajuster les seuils de confiance** dans `auto-proposal.ts` si nécessaire:

```typescript
quantityStrategy: {
  maxRecentOrderLines: 10,  // Analyser plus de commandes pour moyenne fiable
  minOrdersForMediumConfidence: 3,
  minOrdersForHighConfidence: 7,
}
```

**Attention:** La médiane est plus robuste aux valeurs aberrantes que la moyenne.

</details>

<details><summary>Comment modifier le MOQ minimum (300€) ?</summary>

Changer la valeur dans `auto-proposal.ts`:

```typescript
pricing: {
  minimumOrderAmount: 500, // 500€ au lieu de 300€
}
```

**Impact:**

- L'algorithme round-robin augmentera les quantités jusqu'à atteindre 500€
- Moins de devis générés (filtrage plus strict)

</details>

<details><summary>Comment ajouter/retirer des catégories de produits à exclure ?</summary>

1. **Identifier l'ID de la catégorie** dans Odoo (`product.category`)

2. **Ajouter/retirer l'ID** dans `productFiltering.excludedCategoryIds`:

```typescript
productFiltering: {
  excludedCategoryIds: [
    8, 10, 12, 14, // ... catégories existantes
    999, // ← Nouvelle catégorie à exclure
  ],
}
```

3. **Retirer une catégorie:**

```typescript
// Supprimer l'ID de la liste si on veut l'inclure dans l'analyse
excludedCategoryIds: [
  8, 10, 12, // 14 retiré → cette catégorie sera maintenant analysée
];
```

**Référence:** Liste complète des catégories dans `backend/src/config/auto-proposal.ts:38-106`

</details>

<details><summary>Comment activer/désactiver la génération de rapports ?</summary>

Modifier le flag `generateReports` dans `auto-proposal.ts`:

```typescript
workflow: {
  generateReports: false, // Désactive la génération de rapports
  forceReanalysis: false,
}
```

**Impact:**

- `false` : Aucun fichier markdown généré dans `/reports-output/` (gain de performance)
- `true` : Génération automatique des rapports globaux et par client

**Utilité:** Désactiver en production si les rapports ne sont pas utilisés.

</details>

<details><summary>Comment forcer la réanalyse des clients avec tag "Auto-proposal" ?</summary>

Activer le flag `forceReanalysis` dans `auto-proposal.ts`:

```typescript
workflow: {
  generateReports: true,
  forceReanalysis: true, // ← Analyse TOUS les clients inactifs
}
```

**Comportement par défaut (`false`):**

- Exclut les clients ayant déjà le tag "Auto-proposal" (ID: 82)
- Évite le spam de propositions multiples

**Avec `forceReanalysis: true`:**

- Analyse TOUS les clients inactifs, même ceux avec proposition récente
- **Risque:** Création de multiples devis pour le même client

**Référence code:** `backend/src/features/client-inactivity/inactivity.service.ts:29`

</details>

<details><summary>Comment changer le tag Odoo "Auto-proposal" ?</summary>

1. **Créer un nouveau tag** dans Odoo (CRM → Configuration → Tags)

2. **Noter l'ID du tag** (visible dans l'URL ou via API)

3. **Modifier la config:**

```typescript
quoteGeneration: {
  autoProposalTagId: 123, // ← Nouvel ID au lieu de 82
  noteTemplate: "🔵 Proposition automatique v2",
}
```

**Impact:**

- Tous les nouveaux devis seront taggés avec ce nouvel ID
- L'ancien tag (82) ne sera plus appliqué

</details>

---

## 🔗 Points de Vigilance

### ⚠️ Configuration Importée Partout

La config est importée dans de nombreux modules:

```typescript
import { autoProposalConfig } from "../config/auto-proposal";
```

**Conséquences:**

- ✅ **Centralisation:** Un seul endroit à modifier
- ⚠️ **Redémarrage requis:** Toute modification nécessite un redémarrage de l'application
- ❌ **Pas de modification à la volée:** Les changements ne sont pas appliqués en temps réel

### ⚠️ Cohérence entre Paramètres

Certains paramètres sont interdépendants:

```typescript
// ✅ Cohérent
targetCoverage: 25,
leadTime: 5,
analysisWindowDays: 120, // 4 mois > (25 + 5) jours

// ❌ Incohérent
targetCoverage: 60,
leadTime: 10,
analysisWindowDays: 60, // Fenêtre trop courte pour calculer consommation sur 70 jours
```

**Règle:** `analysisWindowDays` doit être **significativement plus grand** que `targetCoverage + leadTime`.

### ⚠️ Validation des IDs Odoo

Les IDs suivants **doivent exister** dans Odoo:

- `autoProposalTagId: 82` → Tag dans `crm.tag`
- `excludedCategoryIds: [8, 10, ...]` → Catégories dans `product.category`

**Test:** Vérifier l'existence via XML-RPC:

```typescript
const tagExists = await odooClient.search("crm.tag", [["id", "=", 82]]);
console.log("Tag exists:", tagExists.length > 0);
```

### ⚠️ Impact du Flag `forceReanalysis`

```typescript
forceReanalysis: true // ⚠️ DANGER en production
```

**Risques:**

- Création de multiples devis pour le même client
- Spam des commerciaux avec des propositions redondantes
- Surcharge du système Odoo

**Recommandation:** Laisser à `false` par défaut, activer uniquement pour tests/démos.

### ⚠️ Performance de la Génération de Rapports

```typescript
generateReports: true // Coût en temps/mémoire
```

**Impact:**

- Génération de **1 rapport global** + **N rapports clients** (N = nombre de clients analysés)
- Peut ralentir l'exécution si N > 100 clients

**Optimisation:** Désactiver si les rapports ne sont pas consultés.

---

## 🔗 Références

### Modules Utilisant la Config

- **Détection inactivité:** `backend/src/features/client-inactivity/inactivity.service.ts`
- **Analyse stock:** `backend/src/features/stock-replenishment/stock-replenishment.service.ts`
- **Calcul quantité:** `backend/src/features/stock-replenishment/utils/quantity.utils.ts`
- **Pricing & MOQ:** `backend/src/features/proposal-preparation/moq/moq-adjustment.service.ts`
- **Génération devis:** `backend/src/features/proposal-generation/proposal-generation.service.ts`
- **Workflow orchestrator:** `backend/src/trigger/orchestrator.task.ts`

### Documentation Associée

- 📖 [Orchestration Trigger.dev](../trigger/README.md)
- 📖 [Détection Inactivité](../features/client-inactivity/README.md)
- 📖 [Analyse Stock](../features/stock-replenishment/README.md)
- 📖 [Préparation Proposition](../features/proposal-preparation/README.md)

### Ressources Externes

- [Odoo API - crm.tag Model](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html)
- [Odoo API - product.category Model](https://www.odoo.com/documentation/17.0/applications/inventory_and_mrp/inventory.html)

---

**Dernière mise à jour:** 2025-10-27
**Refactoring:** Migration vers `dateMin`/`dateMax` (remplacement de `inactivityDaysThreshold`)
