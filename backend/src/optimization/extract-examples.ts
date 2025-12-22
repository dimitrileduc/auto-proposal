/**
 * Extraction des exemples d'entraînement depuis predictions-v2-all-clients.json
 *
 * Transforme les données de backtest en format compatible avec ax MiPRO
 */

import { readFileSync, writeFileSync } from "fs";
import type { StockTrainingExample } from "./stock-predictor";

// Types pour le JSON source
interface OrderItem {
  date: string;
  quantity: number;
}

interface ProductData {
  productId: number;
  productName: string;
  prediction: {
    quantity: number;
    source: string;
    confidence: "low" | "medium" | "high";
  };
  reality?: {
    quantity: number;
  };
  history: {
    orderCount: number;
    orders: Array<{
      date: string;
      quantity: number;
    }>;
  };
  llm?: {
    input?: {
      recentOrders: OrderItem[];
      lastYearOrders: OrderItem[];
    };
  };
}

interface ClientData {
  clientId: number;
  clientName: string;
  data: {
    meta: {
      config: {
        cutoffDate: string;
      };
    };
    products: {
      truePositives: ProductData[];
      falsePositives: ProductData[];
      falseNegatives: ProductData[];
    };
  };
}

interface PredictionsJSON {
  metadata: {
    totalClients: number;
  };
  clients: ClientData[];
}

interface ExtractionOptions {
  maxExamples?: number;
  diversify?: boolean; // Assurer un mix de TP/FP/FN
  minOrderCount?: number; // Minimum d'historique requis
}

/**
 * Formate les commandes en string lisible pour le prompt
 */
function formatOrders(orders: OrderItem[]): string {
  if (!orders || orders.length === 0) {
    return "(Aucune commande)";
  }

  return orders
    .map((o) => {
      const date = o.date.split(" ")[0]; // Garder juste la date
      const dayName = new Date(date).toLocaleDateString("fr-FR", {
        weekday: "short",
      });
      return `${date} (${dayName}): ${o.quantity}u`;
    })
    .join("\n");
}

/**
 * Extrait un exemple depuis un produit
 *
 * SIMPLIFIÉ: On extrait uniquement la quantité
 * - quantity = 0 signifie pas de commande
 * - quantity > 0 signifie commande avec cette quantité
 */
function extractExample(
  product: ProductData,
  cutoffDate: string,
  type: "TP" | "FP" | "FN"
): StockTrainingExample | null {
  // Vérifier qu'on a les données LLM input
  if (!product.llm?.input) {
    return null;
  }

  const { recentOrders, lastYearOrders } = product.llm.input;

  // Déterminer la quantité ground truth
  let quantity: number;

  switch (type) {
    case "TP":
      // True Positive: commande réelle
      quantity = product.reality?.quantity ?? 0;
      break;
    case "FP":
      // False Positive: pas de commande réelle
      quantity = 0;
      break;
    case "FN":
      // False Negative: commande réelle manquée
      quantity = product.reality?.quantity ?? 0;
      break;
  }

  return {
    productName: product.productName,
    recentOrders: formatOrders(recentOrders),
    lastYearOrders: formatOrders(lastYearOrders),
    currentDate: cutoffDate.split(" ")[0], // Format YYYY-MM-DD
    quantity,
  };
}

/**
 * Extrait tous les exemples du fichier JSON
 */
export async function extractExamples(
  jsonPath: string,
  options: ExtractionOptions = {}
): Promise<StockTrainingExample[]> {
  const { maxExamples = 300, diversify = true, minOrderCount = 2 } = options;

  // Lire le fichier
  const content = readFileSync(jsonPath, "utf-8");
  const data: PredictionsJSON = JSON.parse(content);

  const tpExamples: StockTrainingExample[] = [];
  const fpExamples: StockTrainingExample[] = [];
  const fnExamples: StockTrainingExample[] = [];

  // Parcourir tous les clients
  for (const client of data.clients) {
    const cutoffDate = client.data.meta.config.cutoffDate;
    const products = client.data.products;

    // True Positives - doivent avoir assez d'historique
    for (const product of products.truePositives || []) {
      if (product.history?.orderCount >= minOrderCount) {
        const example = extractExample(product, cutoffDate, "TP");
        if (example) tpExamples.push(example);
      }
    }

    // False Positives - peuvent ne pas avoir d'historique (c'est le point!)
    // On les inclut s'ils ont llm.input
    for (const product of products.falsePositives || []) {
      if (product.llm?.input) {
        const example = extractExample(product, cutoffDate, "FP");
        if (example) fpExamples.push(example);
      }
    }

    // False Negatives - peuvent ne pas avoir d'historique
    for (const product of products.falseNegatives || []) {
      if (product.llm?.input || product.history?.orderCount >= minOrderCount) {
        const example = extractExample(product, cutoffDate, "FN");
        if (example) fnExamples.push(example);
      }
    }
  }

  console.log(`Exemples extraits:`);
  console.log(`  - True Positives: ${tpExamples.length}`);
  console.log(`  - False Positives: ${fpExamples.length}`);
  console.log(`  - False Negatives: ${fnExamples.length}`);

  let finalExamples: StockTrainingExample[];

  if (diversify) {
    // Assurer un mix équilibré
    // On veut plus de TP (cas normaux) mais aussi des FP et FN (edge cases)
    const targetTP = Math.floor(maxExamples * 0.5); // 50% TP
    const targetFP = Math.floor(maxExamples * 0.35); // 35% FP (le problème principal)
    const targetFN = Math.floor(maxExamples * 0.15); // 15% FN

    // Shuffle et prendre
    const shuffledTP = shuffleArray(tpExamples).slice(0, targetTP);
    const shuffledFP = shuffleArray(fpExamples).slice(0, targetFP);
    const shuffledFN = shuffleArray(fnExamples).slice(0, targetFN);

    finalExamples = [...shuffledTP, ...shuffledFP, ...shuffledFN];

    console.log(`\nAprès diversification (max ${maxExamples}):`);
    console.log(`  - TP: ${shuffledTP.length}`);
    console.log(`  - FP: ${shuffledFP.length}`);
    console.log(`  - FN: ${shuffledFN.length}`);
  } else {
    // Prendre tout et limiter
    finalExamples = [...tpExamples, ...fpExamples, ...fnExamples].slice(
      0,
      maxExamples
    );
  }

  // Shuffle final
  return shuffleArray(finalExamples);
}

/**
 * Fisher-Yates shuffle
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Sauvegarde les exemples dans un fichier pour inspection
 */
export function saveExamplesToFile(
  examples: StockTrainingExample[],
  outputPath: string
): void {
  writeFileSync(outputPath, JSON.stringify(examples, null, 2));
  console.log(`Exemples sauvegardés dans ${outputPath}`);
}

// Export pour utilisation directe
export { formatOrders };
