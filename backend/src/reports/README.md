# Reports Generation

## 🎯 Rôle

Génère des rapports markdown détaillés (global + par client) pour documenter l'exécution complète du workflow auto-proposal : ce qui a été créé dans Odoo (activités « Suggestion commande », opportunités), ce qui a été écarté avec la raison, et les erreurs. Chaque client analysé figure dans une seule catégorie, et le compte rendu indique si le lancement était en mode test ou réel.

## 📦 Inventaire des Composants

### Fichier: `global-report.ts`

**Description:** Génère le compte rendu global du lancement, en français (lu par la cliente) : statistiques, mode, listes des activités créées, opportunités créées, clients écartés et erreurs, puis les exemples détaillés et, en dernier, la liste compacte des clients sans produit suggéré.

<details><summary>Voir l'implémentation</summary>

```typescript
// Listes du compte rendu, une catégorie par client, à partir de TOUS les résultats
// (clients écartés par le pré-filtre compris)
export function buildGlobalReportLists(results: ClientProposalResult[]): GlobalReportLists;
// → { created, leadsCreated, skipped (hors « aucun produit suggéré »), errors, noProducts }

export function generateGlobalReport(data: GlobalReportData): string {
  // En-tête : date (heure de Paris), clients analysés, durée, MOQ, seuil
  // Statistiques (sans division par zéro)
  // **Mode :** TEST (aucune écriture Odoo) | RÉEL
  // ## Activités créées (N)       | Client | Vendeur | Opportunité | Nouvelle ? | Activité |
  // ## Opportunités créées (N)    | Client | Opportunité (id) |
  // ## Clients écartés (N)        | Client | Raison |
  // ## Erreurs (N)                | Client | Message | Opportunité créée sans activité |
  // Exemples détaillés + tableau (clients avec au moins un produit suggéré)
  // ## Aucun produit suggéré (N)  liste simple des noms, sans tableau
}
```

`GlobalReportData` = `executionDate`, `totalExecutionTime`, `clients` (`ClientReportData[]`), `statistics`, `config`, `mode: "test" | "real"`, et les listes de `GlobalReportLists`.

**Contenu du rapport:**
- **Header:** Date, nb clients analysés, durée, config (MOQ, seuil)
- **Statistiques:** Clients inactifs, avec historique, avec produits suggérés, produits, activités créées (ou qui auraient été créées), opportunités créées, clients écartés, erreurs
- **Mode:** TEST ou RÉEL ; en mode test, les titres deviennent « Activités qui auraient été créées » et « Opportunités qui auraient été créées »
- **Listes:** activités, opportunités, écartés avec leur raison (liste fermée), erreurs
- **Exemples détaillés et tableau:** RAW vs AJUSTÉ, limités aux clients passés par l'IA avec au moins un produit suggéré
- **Aucun produit suggéré:** en dernier, noms séparés par des virgules (c'est la grande majorité des ~1 700 clients)

</details>

---

### Fichier: `statistics.ts`

**Description:** Calcule les statistiques du lancement à partir des résultats clients.

```typescript
calculateGlobalWorkflowStatistics(allInactiveClients, clientResults): GlobalWorkflowStatistics;
// activitiesCreated, leadsCreated, wouldCreate, clientsSkipped, clientsFailed
// + statistiques d'analyse (historique, produits suggérés, montants)

outcomeOf(result): SuggestionActivityOutcome;
// l'outcome du client ; un résultat sans outcome est une erreur
```

Invariant (testé) : `activitiesCreated + wouldCreate + clientsSkipped + clientsFailed = clientsAnalyzed`. `leadsCreated` ne compte que les activités créées dont l'opportunité a été créée. Les clients écartés avant l'IA ne comptent pas dans `clientsWithoutOrderHistory`.

---

### Fichiers: `client-report-json.ts` + `client-report-md.ts`

**Description:** Rapport par client (JSON structuré, puis markdown), écrit par la tâche `client-proposal` : phase 2.5 (pricing + MOQ), **PHASE 3 - ACTIVITÉ**, détails produits, détails techniques.

La phase 3 reprend l'`outcome` du client et son libellé (`describeOutcome`) : opportunité (id, nom, nouvelle ou existante), vendeur, échéance, id de l'activité, et la description de l'activité convertie en markdown simple (`activityNoteToMarkdown`). Les détails techniques indiquent `skipOdooWrite`. Les clients écartés avant l'IA n'ont pas de rapport client : ils figurent dans le compte rendu global.

---

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

**Construire les données à partir des résultats clients** (comme l'orchestrateur)

```typescript
import { buildGlobalReportLists, generateGlobalReport } from './reports/global-report';
import type { GlobalReportData } from './reports/global-report';
import { calculateGlobalWorkflowStatistics } from './reports/statistics';
import { prepareAllClientReportData } from './reports/data-preparation';

// clientResults: ClientProposalResult[] — chaque client avec son outcome,
// y compris les clients écartés par le pré-filtre (sans phases)
const reportData: GlobalReportData = {
  executionDate: new Date().toISOString(),
  totalExecutionTime: 125000, // ms
  clients: prepareAllClientReportData(clientResults, workflowConfig),
  statistics: calculateGlobalWorkflowStatistics(allInactiveClients, clientResults),
  config: {
    replenishmentThreshold: 30,
    moqMinimum: 300,
  },
  mode: "test", // ou "real"
  ...buildGlobalReportLists(clientResults),
};

const markdown = generateGlobalReport(reportData);

// Sauvegarder le rapport
import fs from 'fs';
fs.writeFileSync('reports-output/global-report-2026-10-02.md', markdown);
```

</details>

<details><summary>Comment générer un rapport par client?</summary>

**À partir du résultat de la tâche client**

```typescript
import { generateClientReportJSON } from './reports/client-report-json';
import { generateClientReportMarkdown } from './reports/client-report-md';

// result: ClientProposalResult avec phases.stockAnalysis, phases.proposalFinal,
// outcome (created | would_create | skipped | error) et activityNote (HTML)
const json = generateClientReportJSON(result, {
  analysisEndDate: "2026-10-02 00:00:00",
  replenishmentThreshold: 30,
  moqMinimum: 300,
  skipOdooWrite: true,
});

const markdown = generateClientReportMarkdown(json);
// → ... ## PHASE 3 - ACTIVITÉ
//       **Résultat :** activité créée
//       **Opportunité :** Opportunité mars (ID 55) — existante
//       **Vendeur :** Marie
//       **Échéance :** 02/10/2026
//       **Description :** Dernière commande : 16/08/2026 ...

fs.writeFileSync(`reports-output/client-${result.clientId}-${result.clientName}.md`, markdown);
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
// backend/src/reports/client-report-md.ts : generateClientReportMarkdown(data: ClientReportJSON)
// Ajouter une section = pousser des lignes markdown dans `sections` à l'endroit voulu,
// à partir des données de `ClientReportJSON` (client-report-json.ts).
sections.push(`## PHASE 4 - ...`);
sections.push("");
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

**Sections du rapport global (français):**
- Header: Date, nb clients analysés, durée, config
- Statistiques: Tableau avec métriques (activités, opportunités, écartés, erreurs)
- Mode: TEST (aucune écriture Odoo) ou RÉEL
- Activités créées, Opportunités créées, Clients écartés (avec raison), Erreurs
- Exemples détaillés et tableau RAW vs AJUSTÉ (clients avec produits suggérés)
- Aucun produit suggéré: liste compacte, en dernier

**Sections du rapport client (`client-report-md.ts`):**
- Summary: produits habituels / optionnels, montants
- Phase 2.5 (PRICING + MOQ): tableau détaillé
- Phase 3 (ACTIVITÉ): résultat, opportunité, vendeur, échéance, description
- Détails produits (dropdowns LLM, historique)
- Détails techniques: config, `skipOdooWrite`, phases, usage LLM

</details>

<details><summary>Dépendances externes</summary>

**Formats de données:**
- Types: `GlobalReportData` / `GlobalReportLists` (`global-report.ts`), `ClientProposalResult`, `ClientReportData`, `GlobalWorkflowStatistics` (`types.ts`), `SuggestionActivityOutcome` (`features/suggestion-activity/`)
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
- **Workflow:** [Trigger tasks](../trigger/README.md) - Génèrent les données de rapport
- **Activité:** [Suggestion Activity](../features/suggestion-activity/README.md) - `outcome`, libellés, description
- **Types:** `reports/types.ts` - Définitions TypeScript
- **Configuration:** [Config](../config/README.md) - Paramètres système

### Documentation markdown
- [GitHub Flavored Markdown](https://github.github.com/gfm/) - Spécification GFM
- [CommonMark](https://commonmark.org/) - Standard markdown
- [Markdown Tables](https://www.markdownguide.org/extended-syntax/#tables) - Syntaxe tables

### Bibliothèques de conversion
- [marked](https://marked.js.org/) - Markdown → HTML
- [markdown-pdf](https://github.com/alanshaw/markdown-pdf) - Markdown → PDF
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
