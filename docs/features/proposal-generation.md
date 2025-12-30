# Proposal Generation

Crée les devis draft dans Odoo à partir des proposals préparées.

## Objectif

Convertir une proposal en devis Odoo (sale.order) avec:
- **Produits de base**: 2+ commandes précédentes, confiance medium/high
- **Produits optionnels**: 1 commande seulement, confiance low

## Flux

```mermaid
flowchart LR
    A["Proposal Préparée<br/>(avec prix)"] --> B["Segmentation<br/>Confiance"]
    B --> C[\"Base Products<br/>(2+, med/high)\"]
    B --> D[\"Optional Products<br/>(1, low)\"]
    C --> E["Création<br/>Odoo Draft Quote"]
    D --> E
```

## Entrée / Sortie

**Fonction principale:**
```typescript
generateQuote(
  proposal: ProposalPreparationResult,  // Output de proposal-preparation
  odooClient: OdooClient
): Promise<QuoteCreationResult>
```

**Résultat:**
```typescript
{
  quote_id: number;                   // Odoo sale.order ID
  quote_name: string;                 // e.g., "S39591"
  state: 'draft';
  client_id: number;
  client_name: string;
  company_id: number;
  company_name: string;

  order_lines: {
    line_id: number;
    product_id: number;
    product_name: string;
    quantity_ordered: number;
    price_unit: number;               // EUR HT
    subtotal_ht: number;              // quantity × price
    subtotal_ttc: number;             // with tax
    tax_amount: number;
    description: string;              // LLM summary ou factuel
  }[];

  optional_products: {                // sale.order.option
    product_id: number;
    product_name: string;
    quantity: number;
    price_unit: number;
    description: string;
  }[];

  amount_total_ht: number;            // EUR HT
  amount_total_ttc: number;           // with tax
  tax_total: number;
  created_at: string;                 // ISO 8601
}
```

## Configuration

Tag auto-proposal (marquer devis générés):
```typescript
autoProposalTagId: 82  // Default tag ID
```

## Segmentation par confiance

Chaque produit est classé selon sa **confiance** et **nombre de commandes**:

**Base Products** (ajoutés à sale.order.line):
```
confidence === 'medium' OR 'high'
AND order_count >= 2
```
→ Produits "sûrs", à inclure par défaut

**Optional Products** (ajoutés à sale.order.option):
```
confidence === 'low'
OR order_count === 1
```
→ Produits exploratoires, client peut ignorer

## Descriptions de produits

Chaque ligne inclut une `description` générée automatiquement:

**Si LLM disponible** (confidence = high):
```
"Trend shows growing demand: avg 50u/month, recommend 100u for 2-month safety"
```
(Utilise `llm_prediction.summary`)

**Sinon** (factuel):
```
"Recommended: 50u (median over 5 orders)"
OU
"Suggestion: 40u (single historical order)"
```

## Cas d'usage

### 1. Génération standard

```typescript
const proposal = await prepareProposal(stockReplenishment);
const odooClient = initOdooClient(); // JSON-RPC ou XML-RPC

const quote = await generateQuote(proposal, odooClient);
// → Devis "S39591" créé dans Odoo en draft
console.log(`Quote ${quote.quote_name} created with ${quote.order_lines.length} products`);
```

### 2. Vérifier segmentation base vs optional

```typescript
const quote = await generateQuote(proposal, odooClient);

console.log(`Base products: ${quote.order_lines.length}`);
console.log(`Optional: ${quote.optional_products.length}`);

// Analyser par confiance
quote.order_lines.forEach(line => {
  console.log(`${line.product_name}: ${line.quantity_ordered}u - "${line.description}"`);
});
```

### 3. Vérifier taxes calculées

```typescript
const quote = await generateQuote(proposal, odooClient);

console.log(`Total HT: ${quote.amount_total_ht} EUR`);
console.log(`Taxes: ${quote.tax_total} EUR`);
console.log(`Total TTC: ${quote.amount_total_ttc} EUR`);
```

## Intégration Odoo

Crée:
1. **sale.order** (devis)
   - state = "draft"
   - client = partner_id
   - company = company_id (ou default 1)
   - tag = auto-proposal tag

2. **sale.order.line** (articles de base)
   - product_id, quantity, price_unit

3. **sale.order.option** (articles optionnels)
   - product_id, quantity, price_unit

## Intégration

Utilisé par:
- **[Client Proposal task](../tasks/client-proposal.md)** - Étape 3
- **[Backtesting](./backtesting.md)** - Compare avec orders réels

Voir aussi:
- **[Proposal Preparation](./proposal-preparation.md)** - Étape précédente
- **[Odoo Integration](../infrastructure/odoo.md)** - Détails API

---

**Source**: `backend/src/features/proposal-generation/`
