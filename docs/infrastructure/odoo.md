# Odoo Integration

Interface avec Odoo ERP pour lire données et créer devis.

## Objectif

Communiquer avec Odoo en lecture/écriture pour:
- Rechercher clients inactifs
- Récupérer historique commandes
- Créer devis draft (sale.order)

## Client Odoo

Factory pattern pour créer clients:

```typescript
import { createOdooClient } from './infrastructure/odoo';
import { OdooApiType } from '../../types';

const client = createOdooClient(OdooApiType.XMLRPC);
```

### Types de clients

| Type | Avantages | Usage |
|------|-----------|-------|
| **XML-RPC** | Stable, éprouvé | Production |
| **JSON-2** | Moderne, standard | Alternative |

### Configuration

```typescript
{
  odooApiType: 'xml-rpc' | 'json-2',
  odooUrl: 'https://odoo.example.com',
  odooDb: 'production',
  odooUsername: 'user@example.com',
  odooPassword: '...'
}
```

## Opérations principales

### 1. Rechercher clients

```typescript
const clients = await client.search('res.partner', [
  ['name', 'like', 'ACME%'],
  ['active', '=', true]
]);
```

### 2. Récupérer données clients

```typescript
const partner = await client.getRecord('res.partner', clientId, [
  'name', 'email', 'phone'
]);
```

### 3. Rechercher commandes

```typescript
const orders = await client.search('sale.order', [
  ['partner_id', '=', clientId],
  ['date_order', '>=', '2025-01-01'],
  ['state', 'in', ['sale', 'done']]
]);
```

### 4. Récupérer commandes

```typescript
const order = await client.getRecord('sale.order', orderId, [
  'name', 'date_order', 'order_line', 'amount_total'
]);

// Récupérer lignes
const lines = await client.getRecords('sale.order.line', order.order_line);
```

## Créer devis (sale.order)

```typescript
const quoteId = await client.create('sale.order', {
  partner_id: clientId,
  order_line: [
    [0, 0, { product_id: 123, product_qty: 10, price_unit: 50 }],
    [0, 0, { product_id: 456, product_qty: 5, price_unit: 100 }]
  ],
  order_option: [
    [0, 0, { product_id: 789, product_qty: 2, price_unit: 200 }]
  ],
  tag_ids: [[6, 0, [82]]]  // auto-proposal tag
});
```

## Modèles Odoo utilisés

| Modèle | Utilisation |
|--------|------------|
| **res.partner** | Clients (lecture) |
| **sale.order** | Commandes (lecture/écriture) |
| **sale.order.line** | Lignes devis (création) |
| **sale.order.option** | Options devis (création) |
| **product.product** | Produits (lecture) |
| **res.partner.category** | Tags clients (lecture) |

## Gestion d'erreurs

```typescript
try {
  const partner = await client.getRecord('res.partner', clientId);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    console.log('Client not found');
  } else if (error.code === 'AUTH_ERROR') {
    console.log('Authentication failed');
  } else {
    console.log('Unknown error:', error);
  }
}
```

## Connection Pooling

Client utilise connection pooling automatique. Pas de gestion manuelle nécessaire.

## Rate Limiting

Respecte les limits Odoo:
- `p-limit` pour concurrency control
- Batch mode pour recherches multiples

## Voir aussi

- **[Architecture](../ARCHITECTURE.md)** - Stack overview
- **[Getting Started](../GETTING-STARTED.md)** - Configuration env
- Code source: `backend/src/infrastructure/odoo/`

---

**Stack**: Odoo 16+ · Node.js · odoo-xmlrpc-ts
