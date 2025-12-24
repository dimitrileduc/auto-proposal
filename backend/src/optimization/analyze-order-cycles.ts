/**
 * Analyse des cycles de commande pour déterminer la fenêtre optimale
 *
 * Question: Est-ce que 3 mois (90 jours) est suffisant ou faut-il plus?
 */

import { readFileSync } from "fs";

interface Order {
  date: string;
  quantity: number;
}

interface ProductHistory {
  orders: Array<{ date: string; quantity: number }>;
  features?: {
    avgDaysBetweenOrders?: number;
  };
}

interface Product {
  productName: string;
  history: ProductHistory;
  llm?: {
    input?: {
      recentOrders?: Order[];
    };
  };
}

interface Client {
  clientId: number;
  clientName: string;
  data: {
    meta?: {
      config?: {
        cutoffDate?: string;
      };
    };
    products: {
      truePositives?: Product[];
      falsePositives?: Product[];
      falseNegatives?: Product[];
    };
  };
}

interface PredictionsData {
  metadata: { totalClients: number };
  clients: Client[];
}

function analyzeOrderCycles() {
  const data: PredictionsData = JSON.parse(
    readFileSync("./analysis-folder/predictions-v2-all-clients.json", "utf-8")
  );

  // Pour les produits avec 1 seule commande en 90j, quand était la précédente?
  const gapToPreviousOrder: number[] = [];

  // Simulation: combien de commandes avec différentes fenêtres?
  const windowResults: Record<number, { zero: number; one: number; twoPlus: number }> = {};
  const windows = [90, 120, 150, 180, 210, 240];

  for (const w of windows) {
    windowResults[w] = { zero: 0, one: 0, twoPlus: 0 };
  }

  let totalProducts = 0;

  for (const client of data.clients) {
    const cutoffDate = client.data.meta?.config?.cutoffDate
      ? new Date(client.data.meta.config.cutoffDate)
      : new Date("2025-11-12");

    const allProducts = [
      ...(client.data.products.truePositives || []),
      ...(client.data.products.falsePositives || []),
    ];

    for (const product of allProducts) {
      const allOrders = product.history?.orders || [];
      if (allOrders.length === 0) continue;

      totalProducts++;

      // Trier par date décroissante (plus récent d'abord)
      const sortedOrders = [...allOrders].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      // Pour chaque fenêtre, compter les commandes
      for (const windowDays of windows) {
        const windowStart = new Date(cutoffDate.getTime() - windowDays * 24 * 60 * 60 * 1000);
        const ordersInWindow = sortedOrders.filter(o => {
          const orderDate = new Date(o.date);
          return orderDate >= windowStart && orderDate <= cutoffDate;
        });

        if (ordersInWindow.length === 0) windowResults[windowDays].zero++;
        else if (ordersInWindow.length === 1) windowResults[windowDays].one++;
        else windowResults[windowDays].twoPlus++;
      }

      // Pour les produits avec 1 commande en 90j, calculer le gap vers la précédente
      const window90Start = new Date(cutoffDate.getTime() - 90 * 24 * 60 * 60 * 1000);
      const ordersIn90 = sortedOrders.filter(o => {
        const orderDate = new Date(o.date);
        return orderDate >= window90Start && orderDate <= cutoffDate;
      });

      if (ordersIn90.length === 1 && sortedOrders.length >= 2) {
        // Trouver la commande juste avant la fenêtre de 90j
        const ordersBefore90 = sortedOrders.filter(o => {
          const orderDate = new Date(o.date);
          return orderDate < window90Start;
        });

        if (ordersBefore90.length > 0) {
          // La plus récente avant la fenêtre
          const previousOrder = new Date(ordersBefore90[0].date);
          const lastInWindow = new Date(ordersIn90[0].date);
          const gap = Math.round((lastInWindow.getTime() - previousOrder.getTime()) / (1000 * 60 * 60 * 24));
          gapToPreviousOrder.push(gap);
        }
      }
    }
  }

  console.log("=".repeat(70));
  console.log("  ANALYSE DÉTAILLÉE DES FENÊTRES DE COMMANDE");
  console.log("=".repeat(70));
  console.log(`\nTotal produits analysés: ${totalProducts}`);

  console.log("\n📊 Nombre de commandes par fenêtre:");
  console.log("-".repeat(70));
  console.log("| Fenêtre | 0 cmd        | 1 cmd        | 2+ cmd       |");
  console.log("-".repeat(70));

  for (const w of windows) {
    const r = windowResults[w];
    const total = r.zero + r.one + r.twoPlus;
    console.log(
      `| ${w.toString().padStart(3)}j    | ` +
      `${r.zero.toString().padStart(4)} (${(r.zero/total*100).toFixed(1).padStart(5)}%) | ` +
      `${r.one.toString().padStart(4)} (${(r.one/total*100).toFixed(1).padStart(5)}%) | ` +
      `${r.twoPlus.toString().padStart(4)} (${(r.twoPlus/total*100).toFixed(1).padStart(5)}%) |`
    );
  }
  console.log("-".repeat(70));

  // Analyse du gap pour ceux qui ont 1 commande en 90j
  if (gapToPreviousOrder.length > 0) {
    const sorted = [...gapToPreviousOrder].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    const p25 = sorted[Math.floor(sorted.length * 0.25)];
    const p75 = sorted[Math.floor(sorted.length * 0.75)];
    const p90 = sorted[Math.floor(sorted.length * 0.90)];
    const mean = gapToPreviousOrder.reduce((a, b) => a + b, 0) / gapToPreviousOrder.length;

    console.log("\n📈 Pour les produits avec 1 seule commande en 90j:");
    console.log(`   Nombre de cas analysés: ${gapToPreviousOrder.length}`);
    console.log(`   Gap vers commande précédente:`);
    console.log(`   - Moyenne: ${mean.toFixed(0)} jours`);
    console.log(`   - Médiane: ${median} jours`);
    console.log(`   - 25e percentile: ${p25} jours`);
    console.log(`   - 75e percentile: ${p75} jours`);
    console.log(`   - 90e percentile: ${p90} jours`);

    // Distribution par bucket
    const buckets = [
      { max: 30, label: "≤30j" },
      { max: 60, label: "31-60j" },
      { max: 90, label: "61-90j" },
      { max: 120, label: "91-120j" },
      { max: 150, label: "121-150j" },
      { max: 180, label: "151-180j" },
      { max: Infinity, label: ">180j" },
    ];

    console.log("\n   Distribution du gap:");
    let cumulative = 0;
    for (const bucket of buckets) {
      const count = gapToPreviousOrder.filter(g => {
        const prevMax = buckets[buckets.indexOf(bucket) - 1]?.max || 0;
        return g > prevMax && g <= bucket.max;
      }).length;
      cumulative += count;
      const pct = (count / gapToPreviousOrder.length * 100).toFixed(1);
      const cumPct = (cumulative / gapToPreviousOrder.length * 100).toFixed(1);
      console.log(`   - ${bucket.label.padEnd(10)}: ${count.toString().padStart(4)} (${pct.padStart(5)}%) - cumul: ${cumPct}%`);
    }
  }

  // Recommandation
  console.log("\n" + "=".repeat(70));
  console.log("  RECOMMANDATION");
  console.log("=".repeat(70));

  // Trouver la fenêtre qui donne >50% de produits avec 2+ commandes
  let recommendedWindow = 90;
  for (const w of windows) {
    const r = windowResults[w];
    const total = r.zero + r.one + r.twoPlus;
    if (r.twoPlus / total >= 0.5) {
      recommendedWindow = w;
      break;
    }
  }

  const current = windowResults[90];
  const currentTotal = current.zero + current.one + current.twoPlus;
  const recommended = windowResults[recommendedWindow];
  const recTotal = recommended.zero + recommended.one + recommended.twoPlus;

  console.log(`\n📊 Actuellement (90j): ${(current.twoPlus/currentTotal*100).toFixed(1)}% avec 2+ commandes`);
  console.log(`📊 Avec ${recommendedWindow}j: ${(recommended.twoPlus/recTotal*100).toFixed(1)}% avec 2+ commandes`);

  const gain = recommended.twoPlus - current.twoPlus;
  console.log(`\n→ Gain potentiel: +${gain} produits avec 2+ commandes (+${(gain/currentTotal*100).toFixed(1)}%)`);
}

analyzeOrderCycles();
