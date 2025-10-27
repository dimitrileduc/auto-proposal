# Reports Generation

## 🎯 Rôle

Génère des rapports markdown détaillés (global + par client) pour documenter l'exécution complète du workflow auto-proposal.

## 📦 Inventaire des Composants

### Fichier: `global-report.ts`

**Description:** Génère le rapport global agrégé avec statistiques, liste des clients traités et tableau comparatif des montants.

<details><summary>Voir l'implémentation</summary>

```typescript
export function generateGlobalReport(data: GlobalReportData): string {
  const sections: string[] = [];

  // En-tête avec configs
  sections.push(title("📊 Rapport Global Auto-Proposal", 1));
  sections.push(`**📅 Date d'exécution:** ${date.toLocaleDateString("fr-FR")}`);
  sections.push(`**👥 Clients traités:** ${data.clients.length}`);
  sections.push(`**⏱️ Durée totale:** ${durationStr}`);
  sections.push(separator());

  // Statistiques globales
  sections.push(generateGlobalStatsTable(data));
  sections.push(separator());

  // Liste des exemples détaillés
  sections.push(generateDetailedExamplesList(data));
  sections.push(separator());

  // Tableau de tous les clients avec comparaison phases
  sections.push(generateAllClientsTable(data));

  return sections.join("\n");
}
```

**Contenu du rapport:**
- **Header:** Date, nb clients, durée, config (MOQ, seuil)
- **Stats globales:** Clients inactifs, avec historique, avec risque, produits
- **Liste détaillée:** Liens vers rapports individuels par client
- **Tableau comparatif:** RAW vs AJUSTÉ vs ODOO pour tous les clients

</details>

---

### Fichier: `client-report.ts`

**Description:** Génère le rapport détaillé par client en 3 phases: Stock Analysis (RAW), Pricing+MOQ (ADJUSTED), Devis Odoo (QUOTE).

<details><summary>Voir l'implémentation</summary>

```typescript
export function generateClientReport(data: ClientReportData): string {
  const sections: string[] = [];

  // En-tête
  sections.push(title(`📊 Rapport Auto-Proposal - ${data.client.name}`, 1));
  sections.push(generateMetadataSection(data));
  sections.push(separator());

  // Phase 1 - Stock Analysis (RAW)
  sections.push(generatePhase1Section(data));
  sections.push(separator());

  // Phase 2.5 - Pricing + MOQ (ADJUSTED)
  sections.push(generatePhase2Section(data));
  sections.push(separator());

  // Phase 3 - Devis Odoo (si créé)
  if (data.phases.quote) {
    sections.push(generatePhase3Section(data));
    sections.push(separator());

    // Comparaison Phase 2.5 vs Phase 3
    sections.push(generateComparisonSection(data));
  }

  return sections.join("\n");
}
```

**Structure du rapport:**
- **Metadata:** Date, client ID, email, durée
- **Phase 1 (RAW):** Produits à risque, quantités brutes, dropdowns par produit
- **Phase 2.5 (ADJUSTED):** Pricing + ajustement MOQ, tableau détaillé
- **Phase 3 (QUOTE):** Devis Odoo créé avec montants réels HT/TTC
- **Comparaison:** Écart entre prix historiques et prix Odoo réels

</details>

---

### Fichier: `formatters.ts`

**Description:** Utilitaires de formatage markdown pour générer tables, badges, stats et autres éléments visuels.

<details><summary>Voir l'implémentation</summary>

```typescript
// Formatage des montants
export function formatAmount(amount: number | undefined | null): string {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return "0.00€";
  }
  return `${amount.toFixed(2)}€`;
}

// Formatage des dates
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Formatage des durées
export function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms}ms`;
  if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${minutes}m ${seconds}s`;
}

// Génération de tables markdown
export function table(
  headers: string[],
  rows: Array<Array<string | number>>,
  alignments?: Array<"left" | "center" | "right">
): string {
  const lines = [tableHeader(headers, alignments)];
  rows.forEach((row) => {
    lines.push(tableRow(row));
  });
  return lines.join("\n");
}

// Badges de statut
export function badge(
  type: "success" | "warning" | "error" | "info",
  text: string
): string {
  const emoji = {
    success: "✅",
    warning: "⚠️",
    error: "❌",
    info: "ℹ️",
  }[type];
  return `${emoji} **${text}**`;
}
```

**Fonctions disponibles:**
- `formatAmount()`, `formatDate()`, `formatDuration()` - Formatage données
- `title()`, `separator()`, `blockquote()` - Éléments markdown
- `table()`, `tableRow()`, `tableHeader()` - Tables avec alignement
- `badge()`, `statsBlock()`, `truncate()` - Éléments visuels

</details>

---

## 🔧 Guides Pratiques

<details><summary>Comment générer un rapport global?</summary>

**Créer les données de rapport**

```typescript
import { generateGlobalReport } from './reports/global-report';
import type { GlobalReportData } from './reports/global-report';

const reportData: GlobalReportData = {
  executionDate: new Date().toISOString(),
  totalExecutionTime: 125000, // ms
  clients: [
    // ClientReportData[] - tous les clients traités
  ],
  statistics: {
    totalInactiveClients: 500,
    clientsAnalyzed: 10,
    clientsWithOrderHistory: 450,
    clientsWithoutRisk: 400,
    clientsWithRisk: 50,
    totalProducts: 150,
  },
  config: {
    replenishmentThreshold: 19,
    targetCoverageDays: 14,
    analysisWindowDays: 180,
    moqMinimum: 300,
  },
};

const markdown = generateGlobalReport(reportData);

// Sauvegarder le rapport
import fs from 'fs';
fs.writeFileSync('reports-output/global-report-2025-10-27.md', markdown);
```

</details>

<details><summary>Comment générer un rapport par client?</summary>

**Créer les données client**

```typescript
import { generateClientReport } from './reports/client-report';
import type { ClientReportData } from './workflow/workflow.types';

const clientData: ClientReportData = {
  executionDate: new Date().toISOString(),
  executionTime: 5000, // ms
  client: {
    id: 81,
    name: "Restaurant Test",
    email: "test@example.com"
  },
  phases: {
    stockAnalysis: {
      client_id: 81,
      products: [
        // ProductStockStatus[] - produits à risque
      ],
      total_products_in_history: 50,
    },
    proposalFinal: {
      client_id: 81,
      products: [
        // ProductWithCurrentPrice[] - avec prix + MOQ
      ],
      total_amount: 350.00,
      moq_adjustment_applied: true,
      adjustment_details: {
        original_total: 250.00,
        minimum_required: 300.00,
        gap_filled: 100.00,
        products_adjusted: 3,
      },
    },
    quote: {
      quote_id: 91234,
      quote_name: "S39812",
      quote_state: "draft",
      amount_total_ht: 355.50,
      tax_total: 35.55,
      amount_total_ttc: 391.05,
      order_lines: [
        // OrderLine[] - lignes du devis Odoo
      ],
      created_at: new Date().toISOString(),
    },
  },
  summary: {
    productsCount: 5,
    initialAmount: 250.00,
    finalAmount: 350.00,
    moqAdjusted: true,
    moqGap: 100.00,
  },
  config: {
    replenishmentThreshold: 19,
    targetCoverageDays: 14,
    moqMinimum: 300,
  },
};

const markdown = generateClientReport(clientData);

// Sauvegarder
fs.writeFileSync(`reports-output/client-${clientData.client.id}-${clientData.client.name}.md`, markdown);
```

</details>

<details><summary>Comment personnaliser le format des rapports?</summary>

**Modifier les formatters**

```typescript
// backend/src/reports/formatters.ts

// Exemple: Changer le format des montants
export function formatAmount(amount: number): string {
  // Format français: 1 234,56 €
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}

// Exemple: Ajouter un nouveau formatter
export function formatConfidence(confidence: 'low' | 'medium' | 'high'): string {
  const emoji = {
    low: "🔴",
    medium: "🟡",
    high: "🟢",
  }[confidence];
  return `${emoji} ${confidence.toUpperCase()}`;
}
```

**Modifier la structure du rapport client**

```typescript
// backend/src/reports/client-report.ts

// Ajouter une nouvelle section
function generatePhase4Section(data: ClientReportData): string {
  const sections: string[] = [];

  sections.push(title("📧 PHASE 4 - EMAIL ENVOYÉ", 2));
  sections.push("");

  // Votre logique ici

  return sections.join("\n");
}

// L'ajouter au rapport principal
export function generateClientReport(data: ClientReportData): string {
  // ... sections existantes ...

  if (data.phases.email) {
    sections.push(generatePhase4Section(data));
    sections.push(separator());
  }

  return sections.join("\n");
}
```

</details>

<details><summary>Comment organiser les fichiers de rapports?</summary>

**Structure recommandée**

```
backend/reports-output/
├── global-report-2025-10-27.md       # Rapport global du jour
├── client-81-Restaurant-Test.md      # Rapport client #81
├── client-123-Cafe-Bio.md            # Rapport client #123
└── archive/
    ├── 2025-10/
    │   ├── global-report-2025-10-26.md
    │   └── ...
    └── 2025-09/
        └── ...
```

**Génération automatique avec date**

```typescript
import { format } from 'date-fns';

const today = format(new Date(), 'yyyy-MM-dd');
const globalReportPath = `reports-output/global-report-${today}.md`;

// Client name sanitization
const clientFileName = `client-${clientId}-${clientName.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
const clientReportPath = `reports-output/${clientFileName}`;
```

</details>

<details><summary>Comment afficher les rapports dans une UI web?</summary>

**Convertir markdown en HTML**

```typescript
import { marked } from 'marked';

// Lire le rapport markdown
const markdown = fs.readFileSync('reports-output/global-report-2025-10-27.md', 'utf-8');

// Convertir en HTML
const html = marked(markdown);

// Ajouter du styling
const styledHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rapport Auto-Proposal</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown.min.css">
  <style>
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }
  </style>
</head>
<body class="markdown-body">
  ${html}
</body>
</html>
`;

fs.writeFileSync('reports-output/global-report-2025-10-27.html', styledHtml);
```

**Créer une API endpoint**

```typescript
// backend/src/routes/reports.ts
import express from 'express';
import fs from 'fs';
import { marked } from 'marked';

const router = express.Router();

router.get('/reports/:filename', (req, res) => {
  const { filename } = req.params;
  const filepath = `reports-output/${filename}`;

  if (!fs.existsSync(filepath)) {
    return res.status(404).send('Report not found');
  }

  const markdown = fs.readFileSync(filepath, 'utf-8');
  const html = marked(markdown);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown.min.css">
    </head>
    <body class="markdown-body">
      ${html}
    </body>
    </html>
  `);
});

export default router;
```

</details>

---

## 🔗 Points de Vigilance / Dépendances

<details><summary>Configuration et paramètres</summary>

**Format de sortie:**
- Markdown (GitHub-flavored)
- Sauvegarde dans `reports-output/`
- Nom de fichier: `global-report-YYYY-MM-DD.md`, `client-{id}-{name}.md`

**Sections du rapport global:**
- Header: Date, nb clients, durée, config
- Stats globales: Tableau avec métriques
- Liste détaillée: Liens vers rapports clients
- Tableau comparatif: RAW vs AJUSTÉ vs ODOO

**Sections du rapport client:**
- Metadata: Date, client, durée
- Phase 1 (RAW): Produits à risque avec dropdowns détaillés
- Phase 2.5 (ADJUSTED): Pricing + MOQ avec tableau
- Phase 3 (QUOTE): Devis Odoo avec montants HT/TTC
- Comparaison: Écart prix historiques vs Odoo

</details>

<details><summary>Dépendances externes</summary>

**Formats de données:**
- Types: `GlobalReportData`, `ClientReportData`, `ClientWorkflowStatistics`
- Source: Workflow complet (orchestrator + client tasks)

**Formatters markdown:**
- `formatAmount()`: Montants en euros avec 2 décimales
- `formatDate()`: Format français DD/MM/YYYY HH:MM
- `formatDuration()`: ms → s → m s
- `table()`: Tables markdown avec alignement

**File system:**
- Node.js `fs` pour écriture fichiers
- Dossier: `backend/reports-output/`
- Permissions: Écriture requise

</details>

<details><summary>Limitations actuelles</summary>

**Format fixe:**
- Markdown uniquement (pas PDF, HTML natif, Excel)
- Structure homogène pour tous les rapports
- Pas de personnalisation par client

**Dropdowns produits:**
- HTML `<details>` dans markdown
- Support GitHub/GitLab/VSCode uniquement
- Pas de collapse/expand dans tous les viewers

**Tableaux:**
- Alignement simple (left/center/right)
- Pas de colspan/rowspan
- Pas de tri/filtre interactif

**Charts:**
- Pas de graphiques (seulement tables)
- Pas de visualisations (bars, pies, lines)
- Nécessite export vers autre format

**Export:**
- Pas de conversion automatique vers PDF
- Pas d'envoi email automatique
- Pas d'archivage automatique

**Performance:**
- Génération synchrone (bloquant)
- Pas de streaming pour gros rapports
- Charge mémoire proportionnelle au nb de clients

</details>

---

## 🔗 Références

### Modules liés
- **Workflow:** [Client Proposal Task](../../trigger/README.md) - Génère les données de rapport
- **Types:** `workflow/workflow.types.ts` - Définitions TypeScript
- **Configuration:** [Config](../../config/README.md) - Paramètres système

### Documentation markdown
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - Spécification GFM
- [CommonMark](https://commonmark.org/) - Standard markdown
- [Markdown Tables](https://www.markdownguide.org/extended-syntax/#tables) - Syntaxe tables

### Bibliothèques de conversion
- [marked](https://marked.js.org/) - Markdown → HTML
- [markdown-pdf](https://github.com/alanshaw/markdown-pdf) - Markdown → PDF
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
