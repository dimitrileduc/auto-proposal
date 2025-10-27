# Quote Generation

## 🎯 Rôle

Phase 3 du système Auto-Proposal : Création automatique de devis draft dans Odoo via XML-RPC, incluant l'application du tag "Auto-proposal" (ID: 82) et le calcul des taxes par Odoo.

## 📦 Inventaire des Composants

### Fichier: `proposal-generation.service.ts`

**Description:** Service principal exposant `generateQuote(proposal, odooClient)` pour créer un devis Odoo complet avec ses lignes de commande.

<details><summary>Voir l'implémentation</summary>

```typescript
/**
 * Génère un devis Odoo (draft) à partir d'une proposition préparée
 *
 * Étapes:
 * 1. Récupérer company_id du client (requis pour multi-company Odoo)
 * 2. Créer le sale.order avec tag "Auto-proposal"
 * 3. Créer les sale.order.line pour chaque produit
 * 4. Récupérer le devis complet avec lignes + taxes calculées
 * 5. Retourner les détails complets
 */
export async function generateQuote(
  proposal: ProposalPreparationResult,
  odooClient: OdooClient
): Promise<QuoteCreationResult> {
  // 1. Récupérer company_id du client (requis pour multi-company Odoo)
  const partnerInfo = await odooClient.getPartnerCompanyInfo(proposal.client_id);

  // Si le partner n'a pas de company_id, utiliser company 1 par défaut
  let companyId: number;
  if (!partnerInfo.company_id || partnerInfo.company_id === false) {
    companyId = 1;
    companyName = "Default Company";
    console.warn(`⚠️  Client ${proposal.client_id} sans company_id, utilisation company 1 par défaut`);
  } else {
    companyId = partnerInfo.company_id[0];
    companyName = partnerInfo.company_id[1];
  }

  // 2. Créer le devis (sale.order) avec tag
  const quoteId = await odooClient.createSaleOrder({
    partner_id: proposal.client_id,
    company_id: companyId,
    // Format Odoo many2many: [command, _, ids]
    // Command 6 = Replace (remplace tous les tags par cette liste)
    // [6, 0, [82]] = "Assigner uniquement le tag 82"
    tag_ids: [[6, 0, [autoProposalConfig.quoteGeneration.autoProposalTagId]]],
    note: autoProposalConfig.quoteGeneration.noteTemplate,
  });

  // 3. Créer les lignes de commande
  for (const product of proposal.products) {
    await odooClient.createSaleOrderLine({
      order_id: quoteId,
      product_id: product.product_id,
      product_uom_qty: product.quantity_to_order,
      price_unit: product.current_price_unit,
    });
  }

  // 4. Récupérer le devis complet avec lignes + taxes
  const { order, lines } = await odooClient.getSaleOrderDetails(quoteId);

  // 5. Construire le résultat détaillé
  return {
    quote_id: order.id,
    quote_name: order.name,
    state: "draft",
    client_id: proposal.client_id,
    client_name: clientName,
    company_id: companyId,
    company_name: companyName,
    amount_total_ht: order.amount_untaxed,
    amount_total_ttc: order.amount_total,
    tax_total: order.amount_tax,
    order_lines: orderLines,
    lines_count: orderLines.length,
    tag_id: autoProposalConfig.quoteGeneration.autoProposalTagId,
    created_at: order.date_order,
  };
}
```

**Points clés:**
- **5 RPC calls Odoo**: getPartnerCompanyInfo + createSaleOrder + N×createSaleOrderLine + getSaleOrderDetails
- **Tag auto-proposal (82)**: Appliqué automatiquement via `tag_ids: [[6, 0, [82]]]`
- **State = draft**: Le devis n'est PAS envoyé automatiquement au client
- **Calcul taxes**: Effectué par Odoo lors de `getSaleOrderDetails`
- **Multi-company**: Gère le cas où le client n'a pas de company_id (fallback à 1)

</details>

---

### Fichier: `proposal-generation.types.ts`

**Description:** Types TypeScript pour la génération de devis.

<details><summary>Voir l'implémentation</summary>

```typescript
/**
 * Détails d'une ligne de commande dans le devis
 */
export interface QuoteLineDetails {
  // IDs
  line_id: number;
  product_id: number;

  // Infos produit
  product_name: string;
  product_uom: [number, string]; // Ex: [27, "TU6"]

  // Quantités
  quantity_ordered: number;

  // Prix & totaux
  price_unit: number; // Prix unitaire HT
  subtotal_ht: number; // price_subtotal
  subtotal_ttc: number; // price_total
  tax_amount: number; // subtotal_ttc - subtotal_ht
}

/**
 * Résultat de la génération d'un devis Odoo
 */
export interface QuoteCreationResult {
  // Devis Odoo
  quote_id: number;
  quote_name: string; // Ex: "S39591"
  state: "draft";

  // Client
  client_id: number;
  client_name: string;
  company_id: number;
  company_name: string;

  // Totaux (calculés par Odoo)
  amount_total_ht: number; // amount_untaxed
  amount_total_ttc: number; // amount_total
  tax_total: number; // amount_tax

  // Lignes détaillées
  order_lines: QuoteLineDetails[];
  lines_count: number;

  // Metadata
  tag_id: number; // ID du tag appliqué
  created_at: string; // date_order (ISO)
}
```

</details>

## 🔧 Guides Pratiques

<details><summary>Comment créer un devis manuellement (hors workflow) ?</summary>

### Script de test autonome

**Fichier**: `backend/src/scripts/create-test-quote.ts` (existant)

```bash
# Exécuter le script
npx tsx src/scripts/create-test-quote.ts
```

### Code pour créer un devis programmatiquement

```typescript
import { generateQuote } from "../features/proposal-generation/proposal-generation.service";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { autoProposalConfig } from "../config/auto-proposal";
import type { ProposalPreparationResult } from "../features/proposal-preparation/proposal-preparation.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

// 1. Créer une proposition factice (normalement vient de prepareProposal)
const proposal: ProposalPreparationResult = {
  client_id: 123,
  client_name: "Test Client",
  products: [
    {
      product_id: 456,
      product_name: "Test Product",
      product_uom: [1, "Unit"],
      quantity_to_order: 10,
      current_price_unit: 15.50,
      stock_prediction: { /* ... */ },
      historical_quantities: { /* ... */ },
      historical_prices: { /* ... */ },
    }
  ],
  total_amount: 155.00,
  moq_adjustment_applied: false,
};

// 2. Générer le devis
const quote = await generateQuote(proposal, odooClient);

console.log(`✅ Quote created: ${quote.quote_name}`);
console.log(`   Quote ID: ${quote.quote_id}`);
console.log(`   Total HT: ${quote.amount_total_ht}€`);
console.log(`   Total TTC: ${quote.amount_total_ttc}€`);
console.log(`   Lines: ${quote.lines_count}`);
```

### Vérifier le devis dans Odoo

1. Aller dans Odoo → **Sales** → **Quotations**
2. Rechercher le devis par nom (ex: "S39591")
3. Vérifier:
   - État = **Quotation** (draft)
   - Tag = **Auto-proposal** (visible en haut)
   - Lignes de commande = produits proposés
   - Note interne = "🤖 Proposition automatique..."

</details>

<details><summary>Comment ajouter/modifier des lignes de commande ?</summary>

### Ajouter une ligne après création du devis

```typescript
// Après avoir créé le devis
const quoteId = quote.quote_id;

// Ajouter une ligne supplémentaire
await odooClient.createSaleOrderLine({
  order_id: quoteId,
  product_id: 789,  // ID du nouveau produit
  product_uom_qty: 5,
  price_unit: 20.00,
});

// Récupérer le devis mis à jour
const updatedQuote = await odooClient.getSaleOrderDetails(quoteId);
console.log(`Now has ${updatedQuote.lines.length} lines`);
```

### Modifier la quantité d'une ligne existante

**Important**: Odoo ne permet pas de modifier une ligne via `createSaleOrderLine`. Il faut utiliser `write`:

```typescript
import { XmlRpcAdminClient } from "../../infrastructure/odoo/clients/xmlrpc-admin-client";

const adminClient = new XmlRpcAdminClient();

// Modifier la ligne 123 pour passer la quantité à 20
await adminClient.write('sale.order.line', [123], {
  product_uom_qty: 20
});

console.log('✅ Line updated');
```

### Supprimer une ligne

```typescript
// Supprimer la ligne 123
await adminClient.unlink('sale.order.line', [123]);
```

</details>

<details><summary>Comment modifier le tag Odoo (autre que 82) ?</summary>

### Changer le tag ID dans la config

**Fichier**: `backend/src/config/auto-proposal.ts:32-34`

```typescript
quoteGeneration: {
  autoProposalTagId: 123,  // ← Modifier ici (au lieu de 82)
  noteTemplate: "🤖 Proposition automatique générée par Auto-Proposal System",
}
```

### Créer un nouveau tag dans Odoo

1. Aller dans Odoo → **CRM** → **Configuration** → **Tags**
2. Cliquer sur **Create**
3. Remplir:
   - **Name**: "Mon Custom Tag"
   - **Color**: Choisir une couleur
4. Noter l'ID du tag créé (visible dans l'URL: `/web#id=123&...`)
5. Utiliser cet ID dans la config

### Appliquer plusieurs tags

**Fichier**: `proposal-generation.service.ts:55-57`

```typescript
// Appliquer les tags 82 et 99 simultanément
tag_ids: [[6, 0, [82, 99]]],  // ← Ajouter plusieurs IDs
```

**Format Odoo many2many:**
- `[6, 0, [ids]]` = Replace (remplace tous les tags)
- `[4, id]` = Link (ajoute un tag sans supprimer les existants)
- `[3, id]` = Unlink (retire un tag)

</details>

<details><summary>Comment récupérer le PDF du devis ?</summary>

### Méthode 1: Via l'API Odoo (recommandé)

**Script disponible**: `backend/src/scripts/download-quote-pdf.ts`

```bash
# Télécharger le PDF du devis 91592
npx tsx src/scripts/download-quote-pdf.ts
```

### Méthode 2: URL directe Odoo

Le PDF est accessible via:
```
https://your-odoo.com/report/pdf/sale.report_saleorder/{quote_id}
```

**Avec authentification:**
```typescript
const pdfUrl = `${ODOO_URL}/report/pdf/sale.report_saleorder/${quoteId}`;

// Authentification basique
const auth = Buffer.from(`${ODOO_USERNAME}:${ODOO_PASSWORD}`).toString('base64');

const response = await fetch(pdfUrl, {
  headers: {
    'Authorization': `Basic ${auth}`
  }
});

const pdfBuffer = await response.arrayBuffer();
await fs.writeFile(`quote-${quoteId}.pdf`, Buffer.from(pdfBuffer));
```

### Méthode 3: Via JSON-RPC (complexe)

Voir le script `download-quote-pdf-jsonrpc.ts` pour l'implémentation complète avec token.

</details>

<details><summary>Points de vigilance / Dépendances</summary>

### Client XML-RPC obligatoire

**Fichier**: `proposal-generation.service.ts:1`

```typescript
import type { OdooClient } from "../../infrastructure/odoo/clients/odoo-client.types";
```

**Point critique**: La génération de devis utilise **uniquement xmlrpc-client**, pas json2-client.

**Raison**: Les méthodes `create` et `write` sont plus stables en XML-RPC pour les opérations d'écriture.

### Tag ID 82 doit exister dans Odoo

**Fichier**: `backend/src/config/auto-proposal.ts:32`

```typescript
autoProposalTagId: 82,  // Tag "Auto-proposal" dans Odoo (crm.tag)
```

**Vérification SQL Odoo:**
```sql
SELECT id, name FROM crm_tag WHERE id = 82;
```

**Symptôme si le tag n'existe pas:**
```
❌ Error creating sale.order: tag_ids constraint failed
```

**Solution:**
1. Créer le tag manuellement dans Odoo (voir guide ci-dessus)
2. OU modifier `autoProposalTagId` dans la config

### Format many2many Odoo

**Format spécial pour les relations many2many:**

```python
# Python/Odoo notation
tag_ids: [(6, 0, [82, 99])]  # Replace all tags with 82 and 99
```

**En TypeScript:**
```typescript
tag_ids: [[6, 0, [82, 99]]]  // Double array pour compatibilité XML-RPC
```

**Commands disponibles:**
- `6` = Replace (remplace tous)
- `4` = Link (ajoute sans supprimer)
- `3` = Unlink (retire)
- `5` = Unlink all (retire tous)

### État "draft" par défaut

Le devis est créé en état **draft** (brouillon), ce qui signifie:
- ✅ Visible dans Odoo par les commerciaux
- ✅ Modifiable manuellement
- ❌ **PAS envoyé automatiquement** au client
- ❌ Pas de stock réservé

**Pour envoyer le devis au client:**
1. Via email-sending service (Phase 4)
2. OU manuellement dans Odoo: bouton "Send by Email"

### Multi-company Odoo

**Problème**: Certains clients n'ont pas de `company_id` dans Odoo.

**Solution implémentée** (lines 36-44):
```typescript
if (!partnerInfo.company_id || partnerInfo.company_id === false) {
  companyId = 1;  // Fallback à company 1
  console.warn(`⚠️  Client ${proposal.client_id} sans company_id`);
} else {
  companyId = partnerInfo.company_id[0];
}
```

**Impact**: Le devis sera créé dans la company par défaut (ID: 1).

### Performance (5 RPC calls)

**Détail des appels Odoo:**

1. `getPartnerCompanyInfo`: ~50-100ms
2. `createSaleOrder`: ~100-200ms
3. `createSaleOrderLine` × N produits: ~50ms chacun
4. `getSaleOrderDetails`: ~100-200ms

**Total pour un devis de 10 produits**: ~800-1500ms

**Optimisation possible**: Créer toutes les lignes en un seul appel avec `create_multiple` (non implémenté actuellement).

### Relation avec autres modules

**Dépend de:**
- `/features/proposal-preparation/` (ProposalPreparationResult en input)
- `/infrastructure/odoo/clients/xmlrpc-client.ts` (API Odoo)
- `/config/auto-proposal.ts` (Tag ID 82, note template)

**Utilisé par:**
- `/trigger/client-proposal.task.ts` (Phase 3 du workflow)
- `/routes/client-task.ts` (Tests manuels)

**Suivi par:**
- `/features/email-sending/` (Phase 4 - envoi email optionnel)

</details>

## 🔗 Références

- Odoo Sale Order API: [sale.order Documentation](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#model-reference)
- Odoo Many2many Commands: [ORM Documentation](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#odoo.fields.Many2many)
- Configuration: [`/backend/src/config/auto-proposal.ts`](../../config/auto-proposal.ts)
- Types: [`/backend/src/features/proposal-generation/proposal-generation.types.ts`](./proposal-generation.types.ts)
- Client Proposal Task: [`/backend/src/trigger/README.md`](../../trigger/README.md)
- Scripts de test:
  - [`/backend/src/scripts/create-test-quote.ts`](../../scripts/create-test-quote.ts)
  - [`/backend/src/scripts/download-quote-pdf.ts`](../../scripts/download-quote-pdf.ts)
