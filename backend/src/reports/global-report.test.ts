import { describe, it, expect } from "vitest";
import { buildGlobalReportLists, generateGlobalReport, type GlobalReportData } from "./global-report";
import { calculateGlobalWorkflowStatistics } from "./statistics";
import { prepareAllClientReportData } from "./data-preparation";
import type { ClientProposalResult, WorkflowConfig } from "./types";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";
import type { StockReplenishmentResult } from "../features/stock-replenishment/stock-replenishment.types";
import type { ProposalPreparationResult } from "../features/proposal-preparation/proposal-preparation.types";

function aiPhases(products: number) {
  const stockAnalysis: StockReplenishmentResult = {
    client_id: 0,
    products: Array.from({ length: products }) as StockReplenishmentResult["products"],
    total_products_in_history: 3,
  };
  const proposalFinal: ProposalPreparationResult = {
    client_id: 0,
    products: Array.from({ length: products }) as ProposalPreparationResult["products"],
    total_amount: products * 100,
    moq_adjustment_applied: false,
  };
  return { stockAnalysis, proposalFinal };
}

function result(
  clientId: number,
  clientName: string,
  outcome: SuggestionActivityOutcome,
  products?: number
): ClientProposalResult {
  return {
    clientId,
    clientName,
    // an Odoo write error is caught by the task (success); only a failed task has no phases
    success: !(outcome.kind === "error" && products === undefined),
    hasRisk: (products ?? 0) > 0,
    productsCount: products,
    phases: products === undefined ? {} : aiPhases(products),
    outcome,
  };
}

const RESULTS: ClientProposalResult[] = [
  result(1, "Épicerie Alpha", {
    kind: "created",
    activityId: 7001,
    leadId: 55,
    leadName: "Opportunité mars",
    leadCreated: false,
    salespersonId: 7,
    salespersonName: "Marie",
    dateDeadline: "2026-10-02",
  }, 3),
  result(2, "Traiteur Bravo", {
    kind: "created",
    activityId: 7002,
    leadId: 901,
    leadName: "Suggestion commande Traiteur Bravo",
    leadCreated: true,
    salespersonId: 7,
    salespersonName: "Marie",
    dateDeadline: "2026-10-02",
  }, 2),
  result(3, "Restaurant Charlie", { kind: "skipped", reason: "no_salesperson", label: "pas de vendeur" }),
  result(4, "Boucherie Golf", {
    kind: "skipped",
    reason: "recent_follow_up",
    label: "relancé il y a moins de 3 semaines (20/09/2026)",
  }),
  result(5, "Café India", { kind: "skipped", reason: "no_products", label: "aucun produit suggéré" }, 0),
  result(6, "Bistrot Juliett", { kind: "error", message: "access denied", leadCreatedId: 902 }, 1),
];

const CONFIG = {
  inactivityDays: 30,
  replenishmentThreshold: 30,
  moqMinimum: 300,
  maxClientsToAnalyze: "all",
  generateReports: true,
  skipOdooWrite: false,
  forceReanalysis: false,
} as WorkflowConfig;

function report(results: ClientProposalResult[], mode: "test" | "real"): string {
  const inactive = results.map((r) => ({ id: r.clientId, name: r.clientName, email: null }));
  const data: GlobalReportData = {
    executionDate: "2026-10-02T05:00:00.000Z",
    totalExecutionTime: 1000,
    clients: prepareAllClientReportData(results, CONFIG),
    statistics: calculateGlobalWorkflowStatistics(inactive, results),
    config: { replenishmentThreshold: 30, moqMinimum: 300 },
    mode,
    ...buildGlobalReportLists(results),
  };
  return generateGlobalReport(data);
}

function section(markdown: string, heading: string): string {
  const start = markdown.indexOf(`## ${heading}`);
  expect(start, `section ${heading}`).toBeGreaterThanOrEqual(0);
  const next = markdown.indexOf("\n## ", start + 1);
  return markdown.slice(start, next === -1 ? undefined : next);
}

describe("buildGlobalReportLists", () => {
  const lists = buildGlobalReportLists(RESULTS);

  it("puts every client in exactly one category list", () => {
    const ids = [...lists.created, ...lists.skipped, ...lists.errors, ...lists.noProducts].map((c) => c.clientId);
    expect(ids.sort()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("lists created opportunities and keeps 'aucun produit suggéré' out of the skipped list", () => {
    expect(lists.leadsCreated).toEqual([
      { clientId: 2, clientName: "Traiteur Bravo", leadId: 901, leadName: "Suggestion commande Traiteur Bravo" },
    ]);
    expect(lists.skipped.map((s) => s.clientId)).toEqual([3, 4]);
    expect(lists.noProducts).toEqual([{ clientId: 5, clientName: "Café India" }]);
  });
});

describe("generateGlobalReport — activity sections (US5)", () => {
  const markdown = report(RESULTS, "real");

  it("states the mode", () => {
    expect(markdown).toContain("**Mode :** RÉEL");
    expect(report(RESULTS, "test")).toContain("**Mode :** TEST (aucune écriture Odoo)");
  });

  it("orders the sections, with 'Aucun produit suggéré' last", () => {
    const order = [
      "## Activités créées (2)",
      "## Opportunités créées (1)",
      "## Clients écartés (2)",
      "## Erreurs (1)",
      "## Aucun produit suggéré (1)",
    ].map((heading) => markdown.indexOf(heading));

    expect(order.every((index) => index >= 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
    expect(markdown.lastIndexOf("\n## ")).toBe(markdown.indexOf("\n## Aucun produit suggéré"));
  });

  it("renders 'Aucun produit suggéré' as a simple list, without table", () => {
    const noProducts = section(markdown, "Aucun produit suggéré");
    expect(noProducts).toContain("Café India");
    expect(noProducts).not.toContain("|");
  });

  it("shows salesperson, opportunity and whether it is new for each created activity", () => {
    const created = section(markdown, "Activités créées");
    expect(created).toContain("| Épicerie Alpha | Marie | Opportunité mars (55) | non | 7001 |");
    expect(created).toContain("| Traiteur Bravo | Marie | Suggestion commande Traiteur Bravo (901) | oui | 7002 |");
  });

  it("shows the reason of each skipped client and the orphan opportunity of an error", () => {
    expect(section(markdown, "Clients écartés")).toContain("| Boucherie Golf | relancé il y a moins de 3 semaines (20/09/2026) |");
    expect(section(markdown, "Erreurs")).toContain("| Bistrot Juliett | access denied | 902 |");
  });

  it("uses the 'would have been created' titles in test mode", () => {
    const testResults = RESULTS.map((r) =>
      r.outcome?.kind === "created"
        ? {
            ...r,
            outcome: {
              kind: "would_create" as const,
              leadId: r.outcome.leadCreated ? undefined : r.outcome.leadId,
              leadName: r.outcome.leadName,
              leadCreated: r.outcome.leadCreated,
              salespersonId: 7,
              salespersonName: "Marie",
            },
          }
        : r
    );
    const testReport = report(testResults, "test");

    expect(testReport).toContain("## Activités qui auraient été créées (2)");
    expect(testReport).toContain("## Opportunités qui auraient été créées (1)");
    expect(testReport).not.toContain("## Activités créées");
  });

  it("keeps detailed examples and client table for clients with suggested products only", () => {
    const examplesStart = markdown.indexOf("Exemples détaillés");
    const noProductsStart = markdown.indexOf("## Aucun produit suggéré");
    const aiSections = markdown.slice(examplesStart, noProductsStart);

    expect(examplesStart).toBeGreaterThan(markdown.indexOf("## Erreurs"));
    expect(aiSections).toContain("Épicerie Alpha");
    expect(aiSections).toContain("Bistrot Juliett");
    expect(aiSections).not.toContain("Restaurant Charlie");
    expect(aiSections).not.toContain("Boucherie Golf");
    expect(aiSections).not.toContain("Café India");
  });
});
