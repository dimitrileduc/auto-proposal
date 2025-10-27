# Odoo Infrastructure

## 🎯 Rôle

Fournit une couche d'abstraction pour communiquer avec l'ERP Odoo via XML-RPC ou JSON-RPC avec clients spécialisés selon la version d'Odoo.

## 📦 Inventaire des Composants

### Fichier: `odoo.service.ts`

**Description:** Factory pour créer le bon client Odoo selon le type d'API configuré (XML-RPC ou JSON-2).

<details><summary>Voir l'implémentation</summary>

```typescript
export function createOdooClient(apiType: OdooApiType) {
  switch (apiType) {
    case OdooApiType.XMLRPC:
      console.log("🔌 Using Odoo XML-RPC client");
      return createXmlRpcClient();
    case OdooApiType.JSON2:
      console.log("🔌 Using Odoo JSON-2 client");
      return createJson2Client();
    default:
      throw new Error(`Invalid odooApiType: ${apiType}`);
  }
}
```

**Usage:**
```typescript
import { createOdooClient } from './infrastructure/odoo/odoo.service';
import { OdooApiType } from './types';

const odooClient = createOdooClient(OdooApiType.XMLRPC);
```

</details>

---

### Fichier: `clients/xmlrpc-client.ts`

**Description:** Client principal utilisant l'API XML-RPC d'Odoo (compatible Odoo < v19) avec méthodes pour partenaires, commandes, devis et emails.

<details><summary>Voir l'implémentation</summary>

```typescript
export function createXmlRpcClient(): OdooClient {
  const odoo = new XmlRpcOdoo({
    url: ODOO_CONFIG.url,
    db: ODOO_CONFIG.database,
    username: ODOO_CONFIG.username,
    password: ODOO_CONFIG.password,
  });

  return {
    async getInactiveCompanyPartners(dateMin: string, dateMax: string, excludeTagId?: number) {
      // RPC 1: Récupérer les commandes récentes dans la période [dateMin, dateMax]
      const recentOrders = await odoo.searchRead<OdooOrder>("sale.order",
        buildRecentOrdersDomain(dateMin, dateMax, excludeTagId),
        { fields: ["partner_id"] }
      );

      // Déduplication des partner_ids actifs
      const activePartnerIds = [
        ...new Set(recentOrders.map((order) => order.partner_id[0])),
      ];

      // RPC 2: Récupérer les partenaires inactifs
      const inactivePartners = await odoo.searchRead<OdooPartner>("res.partner",
        buildInactivePartnersDomain(activePartnerIds),
        { fields: ["name", "email", "id"] }
      );

      return inactivePartners;
    },

    async getOrderHistoryByPartner(partnerId, windowDays, referenceDate, includeDrafts, excludedCategories) {
      const dateStart = calculateDateBefore(referenceDate, windowDays);

      // RPC 1: Récupérer les commandes du partenaire
      const orders = await odoo.searchRead<OdooOrder>("sale.order",
        buildPartnerOrdersDomain(partnerId, dateStart, states),
        { fields: ["id", "name", "date_order", "partner_id", "state", "order_line"] }
      );

      // RPC 2: Récupérer les lignes de commande avec filtrage catégories
      const domain: any[] = [["id", "in", orderLineIds]];
      if (excludedCategories?.length > 0) {
        domain.push(["product_id.categ_id", "not in", excludedCategories]);
      }

      const orderLines = await odoo.searchRead<OdooOrderLine>(
        "sale.order.line",
        domain,
        { fields: ["id", "product_id", "product_uom_qty", "product_uom", "product_type", "price_unit", "order_id"] }
      );

      return { orders, orderLines };
    },

    async createSaleOrder(data) {
      return await odoo.create("sale.order", data);
    },

    async createSaleOrderLine(data) {
      return await odoo.create("sale.order.line", data);
    },

    async sendQuoteByEmail(quoteId, quoteName, clientEmail, testMode, testEmail) {
      // Récupérer le template email
      const templates = await odoo.searchRead("mail.template",
        [["model", "=", "sale.order"], ["name", "ilike", "Sales Order"]],
        { fields: ["id", "name"], limit: 1 }
      );

      // Envoyer l'email via template
      const emailValues = testMode ? {
        email_to: testEmail,
        partner_ids: [],
        email_cc: '',
      } : {};

      await odoo.execute("mail.template", "send_mail", [
        templates[0].id,  // Template ID
        quoteId,          // res_id (sale.order)
        true,             // force_send
        false,            // raise_exception
        emailValues       // email_values dict
      ]);

      return { success: true, ... };
    },
  };
}
```

**Méthodes disponibles:**
- `getInactiveCompanyPartners()`: Détection clients inactifs
- `getOrderHistoryByPartner()`: Historique commandes + filtrage produits
- `getPartnerCompanyInfo()`: Infos partenaire + company
- `createSaleOrder()`: Création devis header
- `createSaleOrderLine()`: Ajout lignes au devis
- `getSaleOrderDetails()`: Détails complets d'un devis
- `sendQuoteByEmail()`: Envoi email via mail.template

</details>

---

### Fichier: `clients/json2-client.ts`

**Description:** Client alternatif utilisant l'API JSON-RPC v2 d'Odoo (Odoo v19+) plus rapide mais moins compatible.

<details><summary>Voir l'implémentation</summary>

```typescript
async function odooApiRequest<T = any>(
  endpoint: string,
  body: any
): Promise<T> {
  const url = `${ODOO_CONFIG.baseUrl}/json/2/${endpoint}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `bearer ${ODOO_CONFIG.apiKey}`,
      "X-Odoo-Database": ODOO_CONFIG.database,
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10000), // 10s timeout
  });

  return await response.json();
}

export function createJson2Client(): OdooClient {
  return {
    async getInactiveCompanyPartners(dateMin, dateMax, excludeTagId) {
      const recentOrders = await odooApiRequest<OdooOrder[]>(
        "sale.order/search_read",
        {
          domain: buildRecentOrdersDomain(dateMin, dateMax, excludeTagId),
          fields: ["partner_id"],
        }
      );

      const activePartnerIds = [
        ...new Set(recentOrders.map((order) => order.partner_id[0])),
      ];

      const inactivePartners = await odooApiRequest<OdooPartner[]>(
        "res.partner/search_read",
        {
          domain: buildInactivePartnersDomain(activePartnerIds),
          fields: ["name", "email", "id"],
        }
      );

      return inactivePartners;
    },

    async getOrderHistoryByPartner(partnerId, windowDays, referenceDate, includeDrafts, excludedCategories) {
      // Identique à xmlrpc-client mais avec odooApiRequest
      const orders = await odooApiRequest<OdooOrder[]>(
        "sale.order/search_read",
        { domain, fields }
      );

      const orderLines = await odooApiRequest<OdooOrderLine[]>(
        "sale.order.line/search_read",
        { domain, fields }
      );

      return { orders, orderLines };
    },
  };
}
```

**Avantages JSON-RPC:**
- Plus rapide (moins de overhead)
- Timeout configurable (10s par défaut)
- API moderne avec fetch()

**Limitations:**
- Odoo v19+ requis
- API Key nécessaire (pas username/password)
- Moins de méthodes disponibles (pas de createSaleOrder, sendEmail)

</details>

---

### Fichier: `clients/xmlrpc-admin-client.ts`

**Description:** Client XML-RPC étendu pour opérations d'administration (création clients test, opérations bas-niveau).

<details><summary>Voir l'implémentation</summary>

```typescript
export class XmlRpcAdminClient {
  private odoo: XmlRpcOdoo;

  constructor() {
    this.odoo = new XmlRpcOdoo({
      url: ODOO_CONFIG.url,
      db: ODOO_CONFIG.database,
      username: ODOO_CONFIG.username,
      password: ODOO_CONFIG.password,
    });
  }

  async search(model: string, domain: any[]): Promise<number[]> {
    return this.odoo.search(model, domain);
  }

  async read(model: string, ids: number[], fields: string[]): Promise<any[]> {
    return this.odoo.read(model, ids, fields);
  }

  async create(model: string, values: any): Promise<number> {
    return this.odoo.create(model, values);
  }

  async write(model: string, ids: number[], values: any): Promise<boolean> {
    return this.odoo.write(model, ids, values);
  }
}
```

**Usage:**
```typescript
const adminClient = new XmlRpcAdminClient();

// Lire un email
const mails = await adminClient.read('mail.mail', [346482], ['state', 'subject']);

// Créer un client test
const partnerId = await adminClient.create('res.partner', {
  name: 'Test Client',
  email: 'test@example.com',
  is_company: true,
});
```

</details>

---

### Fichier: `clients/odoo-domains.ts`

**Description:** Fonctions utilitaires pour construire des domaines Odoo (filtres) réutilisables et maintenables.

<details><summary>Voir l'implémentation</summary>

```typescript
/**
 * Domain pour récupérer les commandes dans une période donnée
 */
export function buildRecentOrdersDomain(
  dateMin: string,
  dateMax: string,
  excludeTagId?: number
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["date_order", ">=", dateMin],
    ["date_order", "<=", dateMax],
  ];

  if (excludeTagId !== undefined) {
    domain.push(["tag_ids", "not in", [excludeTagId]]);
  }

  return domain;
}

/**
 * Domain pour récupérer les partenaires inactifs
 */
export function buildInactivePartnersDomain(activePartnerIds: number[]): any[] {
  return [
    ["is_company", "=", true],
    ["customer_rank", ">", 0],
    ["active", "=", true],
    "|", // OR operator
    ["sale_order_ids", "=", false], // Jamais commandé
    "&", // AND operator
    ["sale_order_ids", "!=", false],
    ["id", "not in", activePartnerIds], // Pas commandé récemment
  ];
}

/**
 * Domain pour récupérer les commandes d'un partenaire
 */
export function buildPartnerOrdersDomain(
  partnerId: number,
  dateLimitStr: string,
  states: string[]
): OdooDomainCondition[] {
  return [
    ["partner_id", "=", partnerId],
    ["date_order", ">=", dateLimitStr],
    ["state", "in", states],
  ];
}
```

**Notation polonaise inversée:**
- Conditions: `["field", "operator", value]`
- Opérateurs logiques: `"|"` (OR), `"&"` (AND), `"!"` (NOT)
- Implicite AND entre conditions successives

</details>

---

## 🔧 Guides Pratiques

<details><summary>Comment choisir entre XML-RPC et JSON-RPC?</summary>

**Comparaison des deux APIs**

| Critère | XML-RPC | JSON-RPC v2 |
|---------|---------|-------------|
| **Compatibilité** | Odoo v8 - v18 | Odoo v19+ uniquement |
| **Performance** | Standard | Plus rapide (30-40%) |
| **Auth** | Username + Password | API Key |
| **Méthodes** | Toutes | Limitées (read, search_read) |
| **Timeout** | Fixe | Configurable |
| **Complexité** | Simple | Requiert gestion fetch() |

**Quand utiliser XML-RPC:**
- ✅ Odoo < v19
- ✅ Besoin de create/write/execute
- ✅ Envoi d'emails (mail.template)
- ✅ Maximum compatibilité

**Quand utiliser JSON-RPC:**
- ✅ Odoo v19+
- ✅ Lecture seule (search_read)
- ✅ Performance critique
- ✅ API moderne avec fetch()

**Configuration:**
```typescript
// backend/src/config/auto-proposal.ts
export const autoProposalConfig = {
  odooApiType: OdooApiType.XMLRPC, // ou OdooApiType.JSON2
};
```

</details>

<details><summary>Comment construire un domaine Odoo complexe?</summary>

**Syntaxe des domaines**

```typescript
// Domaine simple (AND implicite)
const domain = [
  ["field1", "=", "value1"],
  ["field2", ">", 100],
];
// Équivalent SQL: WHERE field1 = 'value1' AND field2 > 100

// Domaine avec OR
const domain = [
  "|", // OR operator
  ["field1", "=", "value1"],
  ["field2", "=", "value2"],
];
// Équivalent SQL: WHERE field1 = 'value1' OR field2 = 'value2'

// Domaine avec AND + OR
const domain = [
  ["field1", "=", "value1"],
  "|", // OR s'applique aux 2 suivants
  ["field2", "=", "value2"],
  ["field3", "=", "value3"],
];
// Équivalent SQL: WHERE field1 = 'value1' AND (field2 = 'value2' OR field3 = 'value3')

// Domaine avec NOT
const domain = [
  "!", // NOT s'applique au suivant
  ["field1", "=", "value1"],
];
// Équivalent SQL: WHERE NOT (field1 = 'value1')
```

**Opérateurs disponibles:**
- `=`, `!=`: Égalité/Inégalité
- `>`, `>=`, `<`, `<=`: Comparaisons numériques
- `in`, `not in`: Dans une liste
- `like`, `ilike`: Recherche texte (ilike = insensible casse)
- `=?`, `!=?`: Égalité avec gestion NULL

**Exemples concrets:**

```typescript
// Clients actifs avec email
const domain = [
  ["active", "=", true],
  ["email", "!=", false],
];

// Commandes validées depuis le 1er janvier
const domain = [
  ["state", "in", ["sale", "done"]],
  ["date_order", ">=", "2025-01-01 00:00:00"],
];

// Partenaires company OU contact avec email
const domain = [
  "|",
  ["is_company", "=", true],
  ["type", "=", "contact"],
  ["email", "!=", false],
];
```

</details>

<details><summary>Comment gérer les erreurs Odoo?</summary>

**Gestion des erreurs typiques**

```typescript
import { createOdooClient } from './infrastructure/odoo/odoo.service';

try {
  const odooClient = createOdooClient(OdooApiType.XMLRPC);

  const partners = await odooClient.getInactiveCompanyPartners(
    "2025-01-01 00:00:00",
    "2025-10-27 23:59:59"
  );

} catch (error: any) {
  // Erreur d'authentification
  if (error.message.includes('Access Denied')) {
    console.error('❌ Odoo auth failed: Check ODOO_USERNAME and ODOO_PASSWORD');
    throw new Error('Invalid Odoo credentials');
  }

  // Erreur de connexion
  if (error.message.includes('ECONNREFUSED') || error.message.includes('timeout')) {
    console.error('❌ Cannot connect to Odoo: Check ODOO_URL');
    throw new Error('Odoo server unreachable');
  }

  // Erreur de modèle/champ
  if (error.message.includes('Field') || error.message.includes('Model')) {
    console.error('❌ Invalid Odoo field/model:', error.message);
    throw new Error('Odoo schema mismatch');
  }

  // Erreur de domain
  if (error.message.includes('domain')) {
    console.error('❌ Invalid Odoo domain:', error.message);
    throw new Error('Invalid search criteria');
  }

  // Erreur générique
  console.error('❌ Odoo error:', error);
  throw error;
}
```

**Retry sur erreurs transitoires:**

```typescript
async function odooRequestWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      // Retry sur timeout ou erreur serveur
      const isRetryable = error.message.includes('timeout') ||
                          error.message.includes('502') ||
                          error.message.includes('503');

      if (!isRetryable || attempt === maxRetries) {
        throw error;
      }

      console.log(`⚠️  Retry ${attempt}/${maxRetries} after ${attempt * 1000}ms`);
      await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }

  throw new Error('Max retries reached');
}

// Usage
const partners = await odooRequestWithRetry(() =>
  odooClient.getInactiveCompanyPartners(dateMin, dateMax)
);
```

</details>

<details><summary>Comment optimiser les performances Odoo?</summary>

**Stratégies d'optimisation**

**1. Limiter les champs récupérés**
```typescript
// ❌ Mauvais: Récupère TOUS les champs
const partners = await odoo.searchRead('res.partner', domain, {});

// ✅ Bon: Récupère uniquement les champs nécessaires
const partners = await odoo.searchRead('res.partner', domain, {
  fields: ['id', 'name', 'email']
});
```

**2. Utiliser search_read au lieu de search + read**
```typescript
// ❌ Mauvais: 2 appels API
const ids = await odoo.search('res.partner', domain);
const partners = await odoo.read('res.partner', ids, ['name', 'email']);

// ✅ Bon: 1 seul appel API
const partners = await odoo.searchRead('res.partner', domain, {
  fields: ['name', 'email']
});
```

**3. Batch les opérations write/create**
```typescript
// ❌ Mauvais: N appels pour N lignes
for (const line of orderLines) {
  await odoo.create('sale.order.line', line);
}

// ✅ Bon: 1 appel pour toutes les lignes
const lineIds = await Promise.all(
  orderLines.map(line => odoo.create('sale.order.line', line))
);
```

**4. Filtrer côté Odoo, pas en mémoire**
```typescript
// ❌ Mauvais: Récupère tout puis filtre
const allOrders = await odoo.searchRead('sale.order', [], {});
const recentOrders = allOrders.filter(o => o.date_order >= dateMin);

// ✅ Bon: Filtre dans le domain
const recentOrders = await odoo.searchRead('sale.order', [
  ['date_order', '>=', dateMin]
], {});
```

**5. Utiliser limit pour les grandes requêtes**
```typescript
// Pagination
const limit = 100;
let offset = 0;
let allPartners = [];

while (true) {
  const partners = await odoo.searchRead('res.partner', domain, {
    fields: ['id', 'name'],
    limit,
    offset
  });

  if (partners.length === 0) break;

  allPartners.push(...partners);
  offset += limit;
}
```

</details>

<details><summary>Comment tester les requêtes Odoo?</summary>

**Scripts de test manuels**

```typescript
// backend/src/scripts/test-odoo-connection.ts
import { createOdooClient } from '../infrastructure/odoo/odoo.service';
import { OdooApiType } from '../types';

async function testOdooConnection() {
  try {
    const odooClient = createOdooClient(OdooApiType.XMLRPC);

    // Test 1: Connexion basique
    console.log('✅ Test 1: Connection OK');

    // Test 2: Récupérer des partenaires
    const partners = await odooClient.getInactiveCompanyPartners(
      "2025-01-01 00:00:00",
      "2025-10-27 23:59:59"
    );
    console.log(`✅ Test 2: Found ${partners.length} inactive partners`);

    // Test 3: Récupérer l'historique d'un client
    if (partners.length > 0) {
      const history = await odooClient.getOrderHistoryByPartner(
        partners[0].id,
        180,
        "2025-10-27 00:00:00",
        false,
        []
      );
      console.log(`✅ Test 3: Found ${history.orders.length} orders for partner ${partners[0].name}`);
    }

    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('\n❌ Test failed:', error);
    process.exit(1);
  }
}

testOdooConnection();
```

**Exécuter:**
```bash
npx tsx src/scripts/test-odoo-connection.ts
```

</details>

---

## 🔗 Points de Vigilance / Dépendances

<details><summary>Configuration et paramètres</summary>

**Variables d'environnement requises:**
```bash
# XML-RPC
ODOO_URL=https://your-instance.odoo.com
ODOO_DB=your-database
ODOO_USERNAME=your-username
ODOO_PASSWORD=your-password

# JSON-RPC v2 (Odoo v19+)
ODOO_API_KEY=your-api-key
```

**Configuration du client:**
- Type API: `OdooApiType.XMLRPC` ou `OdooApiType.JSON2`
- Timeout: 10s par défaut (JSON-RPC uniquement)
- Retry: Pas de retry automatique (à implémenter)

**Domaines Odoo:**
- Notation polonaise inversée
- Opérateurs: `|` (OR), `&` (AND), `!` (NOT)
- Implicite AND entre conditions

</details>

<details><summary>Dépendances externes</summary>

**Bibliothèques:**
- `odoo-xmlrpc-ts`: Client XML-RPC pour Node.js
- `node-fetch`: HTTP client (JSON-RPC)

**Models Odoo:**
- `res.partner`: Clients/Contacts
- `sale.order`: Commandes/Devis
- `sale.order.line`: Lignes de commande
- `product.product`: Produits
- `product.category`: Catégories produits
- `mail.template`: Templates email
- `mail.mail`: Emails envoyés

**API Odoo:**
- XML-RPC: `/xmlrpc/2/object`
- JSON-RPC v2: `/json/2/{model}/{method}`

</details>

<details><summary>Limitations actuelles</summary>

**XML-RPC:**
- Lent (overhead XML)
- Pas de timeout configurable
- Authentification par credentials (pas API key)

**JSON-RPC v2:**
- Odoo v19+ uniquement
- Méthodes limitées (pas de create/write/execute)
- Pas d'envoi email
- Documentation limitée

**Domaines:**
- Syntaxe complexe (polonaise inversée)
- Pas de validation à la compilation
- Erreurs runtime obscures

**Performance:**
- Pas de cache
- Pas de pooling de connexions
- Pas de batch automatique

**Sécurité:**
- Credentials en clair dans .env
- Pas de refresh token
- Pas de rate limiting

**Types:**
- Types partiels (any[] pour domaines complexes)
- Pas de validation schema Odoo
- Pas de génération automatique depuis Odoo

</details>

---

## 🔗 Références

### Modules liés
- **Features:** Utilisé par tous les modules (inactivity, stock-replenishment, proposal-generation)
- **Configuration:** [Config](../../config/README.md) - Type d'API Odoo

### Documentation Odoo
- [External API](https://www.odoo.com/documentation/17.0/developer/reference/external_api.html) - XML-RPC
- [ORM API](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html) - Modèles et méthodes
- [Search Domains](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#search-domains) - Syntaxe des domaines

### Bibliothèques
- [odoo-xmlrpc-ts](https://github.com/vettloffah/odoo-xmlrpc-ts) - Client XML-RPC TypeScript
- [Node Fetch](https://github.com/node-fetch/node-fetch) - HTTP client
