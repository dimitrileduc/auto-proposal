import { describe, it, expect } from "vitest";
import { activityNoteToMarkdown, buildActivityNote, splitProducts, type NoteProduct } from "./activity-note.utils";
import type { ProductWithCurrentPrice } from "../proposal-preparation/proposal-preparation.types";

const LABELS = {
  introUsual: "Produits que ce client commande régulièrement et qu'il devrait bientôt recommander :",
  introOptional: "Produits commandés plus rarement par ce client, à lui proposer en complément :",
};

function noteProduct(name: string, overrides: Partial<NoteProduct> = {}): NoteProduct {
  return { name, quantity: 24, uom: "TU6", lastOrderDate: "2026-07-03", ...overrides };
}

function product(
  name: string,
  confidence: "low" | "medium" | "high" | null,
  overrides: Partial<ProductWithCurrentPrice> = {}
): ProductWithCurrentPrice {
  return {
    product_id: 1,
    product_name: name,
    product_uom: [27, "TU6"],
    order_history: [
      { order_id: 1, order_name: "S1", date_order: "2026-05-10 09:00:00", quantity: 20, price_unit: 10 },
      { order_id: 2, order_name: "S2", date_order: "2026-07-03 09:00:00", quantity: 24, price_unit: 10 },
      { order_id: 3, order_name: "S3", date_order: "2026-06-01 09:00:00", quantity: 22, price_unit: 10 },
    ],
    quantity_to_order: 24,
    quantity_source: "llm",
    calculation_metadata: {
      strategy: "median_recent_orders",
      confidence,
      historical_quantities: [],
      order_count: 3,
      median_value: 22,
    },
    current_price_unit: 10,
    subtotal: 240,
    moq_adjustment: 0,
    ...overrides,
  };
}

describe("buildActivityNote", () => {
  const note = buildActivityNote(
    {
      lastOrderDate: "2026-08-12",
      usual: [noteProduct("Moutarde 250 g"), noteProduct("Mayonnaise 500 g"), noteProduct("Ketchup 300 g")],
      optional: [noteProduct("Pickles 1 kg", { quantity: 3, uom: "Unités", lastOrderDate: "2026-02-14" })],
    },
    LABELS
  );

  it("starts with the date of the last confirmed order", () => {
    expect(note.startsWith("<p>Dernière commande : 12/08/2026</p>")).toBe(true);
  });

  it("lists usual products then optional products, each list after its sentence", () => {
    const usualIntro = note.indexOf(LABELS.introUsual);
    const usualList = note.indexOf("<ul>");
    const optionalIntro = note.indexOf(LABELS.introOptional);
    const optionalList = note.lastIndexOf("<ul>");

    expect(usualIntro).toBeGreaterThan(0);
    expect(usualIntro).toBeLessThan(usualList);
    expect(usualList).toBeLessThan(optionalIntro);
    expect(optionalIntro).toBeLessThan(optionalList);
    expect(note.match(/<li>/g)).toHaveLength(4);
  });

  it("shows quantity with sales unit and last order date for each product", () => {
    expect(note).toContain("<li>Moutarde 250 g — 24 TU6 — dernière commande : 03/07/2026</li>");
    expect(note).toContain("<li>Pickles 1 kg — 3 Unités — dernière commande : 14/02/2026</li>");
  });

  it("omits the optional list and its sentence when there is no optional product", () => {
    const withoutOptional = buildActivityNote(
      { lastOrderDate: "2026-08-12", usual: [noteProduct("Moutarde 250 g")], optional: [] },
      LABELS
    );
    expect(withoutOptional).not.toContain(LABELS.introOptional);
    expect(withoutOptional.match(/<ul>/g)).toHaveLength(1);
  });

  it("omits the usual list and its sentence when there is no usual product", () => {
    const withoutUsual = buildActivityNote(
      { lastOrderDate: "2026-08-12", usual: [], optional: [noteProduct("Pickles 1 kg")] },
      LABELS
    );
    expect(withoutUsual).not.toContain("devrait bientôt recommander");
    expect(withoutUsual).toContain(LABELS.introOptional);
  });

  it("says so when the client has no confirmed order", () => {
    const noOrder = buildActivityNote({ lastOrderDate: null, usual: [noteProduct("A")], optional: [] }, LABELS);
    expect(noOrder.startsWith("<p>Dernière commande : aucune commande confirmée</p>")).toBe(true);
  });

  it("escapes product names", () => {
    const escaped = buildActivityNote(
      { lastOrderDate: "2026-08-12", usual: [noteProduct("Sel & poivre <bio>")], optional: [] },
      LABELS
    );
    expect(escaped).toContain("Sel &amp; poivre &lt;bio&gt;");
    expect(escaped).not.toContain("<bio>");
  });
});

describe("splitProducts", () => {
  it("puts low confidence products in optional, the others in usual (former quote rule)", () => {
    const { usual, optional } = splitProducts([
      product("Habituel medium", "medium"),
      product("Optionnel", "low"),
      product("Habituel high", "high"),
      product("Sans confiance", null),
    ]);

    expect(usual.map((p) => p.name)).toEqual(["Habituel medium", "Habituel high", "Sans confiance"]);
    expect(optional.map((p) => p.name)).toEqual(["Optionnel"]);
  });

  it("uses the most recent order of the product history, the sales unit and a whole quantity", () => {
    const { usual } = splitProducts([product("Moutarde", "medium", { quantity_to_order: 23.6 })]);

    expect(usual[0]).toEqual({ name: "Moutarde", quantity: 24, uom: "TU6", lastOrderDate: "2026-07-03" });
  });

  it("uses the Paris calendar day of the last order", () => {
    const { usual } = splitProducts([
      product("Moutarde", "medium", {
        order_history: [{ order_id: 1, order_name: "S1", date_order: "2026-07-02 22:30:00", quantity: 1, price_unit: 1 }],
      }),
    ]);

    expect(usual[0].lastOrderDate).toBe("2026-07-03");
  });
});

describe("activityNoteToMarkdown", () => {
  it("renders paragraphs and list items as simple markdown", () => {
    const markdown = activityNoteToMarkdown(
      buildActivityNote(
        {
          lastOrderDate: "2026-08-12",
          usual: [noteProduct("Sel & poivre")],
          optional: [noteProduct("Pickles 1 kg", { quantity: 3, uom: "Unités", lastOrderDate: "2026-02-14" })],
        },
        LABELS
      )
    );

    expect(markdown).toBe(
      [
        "Dernière commande : 12/08/2026",
        "",
        LABELS.introUsual,
        "",
        "- Sel & poivre — 24 TU6 — dernière commande : 03/07/2026",
        "",
        LABELS.introOptional,
        "",
        "- Pickles 1 kg — 3 Unités — dernière commande : 14/02/2026",
      ].join("\n")
    );
  });
});
