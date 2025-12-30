/**
 * ACE Offline Optimization - Test rapide
 *
 * Extrait exemples des backtests v2, calcule baseline, lance ACE, compare.
 *
 * Usage:
 *   npx tsx src/optimization/run-ace-optimization.ts
 *
 * Env:
 *   MAX_EXAMPLES=100   (default: 100)
 *   MAX_EPOCHS=2       (default: 2)
 */

import "dotenv/config";
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { ax, AxACE, type AxMetricFn } from "@ax-llm/ax";
import { studentLLM, teacherLLM, MODEL, TEACHER_MODEL } from "./ax-config.js";

// Config
const MAX_EXAMPLES = parseInt(process.env.MAX_EXAMPLES || "100");
const MAX_EPOCHS = parseInt(process.env.MAX_EPOCHS || "2");
const BACKTEST_DIR = "./reports-output-v19-400";
const OUTPUT_DIR = "./optimization-results";

// Signature du stock predictor - CLASSIFICATION BINAIRE OUI/NON
const stockPredictorSignature = `
"Expert Supply Chain B2B - Prédiction risque de rupture

OBJECTIF: Prédire si le client va commander ce produit dans les 30 prochains jours.

MÉTHODE:
1. Analyser les patterns de commande récents (5 mois)
2. Comparer avec l'historique N-1 pour détecter la saisonnalité
3. Identifier si une commande est probable

IMPORTANT: En cas de doute, répondre OUI (principe de précaution B2B)"

productName:string "Nom du produit",
recentOrders:string "Historique récent (5 mois)",
lastYearOrders:string "Historique N-1",
currentDate:string "Date d'analyse"
->
ruptureRisk:class "OUI, NON" "Risque de rupture - OUI si commande probable, NON sinon",
reasoning:string "Explication courte"
`;

// Types
interface OrderItem {
  date: string;
  quantity: number;
}

interface ProductData {
  productName: string;
  reality?: { quantity: number };
  llm?: {
    input?: {
      recentOrders: OrderItem[];
      lastYearOrders: OrderItem[];
    };
  };
}

interface BacktestV2 {
  meta: { config: { cutoffDate: string } };
  products: {
    truePositives: ProductData[];
    falsePositives: ProductData[];
    falseNegatives: ProductData[];
  };
}

interface TrainingExample {
  productName: string;
  recentOrders: string;
  lastYearOrders: string;
  currentDate: string;
  ruptureRisk: "OUI" | "NON";  // Classification binaire
}

// Helpers
function formatOrders(orders: OrderItem[]): string {
  if (!orders?.length) return "(Aucune commande)";
  return orders
    .map((o) => {
      const date = o.date.split(" ")[0];
      const day = new Date(date).toLocaleDateString("fr-FR", { weekday: "short" });
      return `${date} (${day}): ${o.quantity}u`;
    })
    .join("\n");
}

function extractFromProduct(
  product: ProductData,
  cutoffDate: string,
  type: "TP" | "FP" | "FN"
): TrainingExample | null {
  if (!product.llm?.input) return null;

  const { recentOrders, lastYearOrders } = product.llm.input;

  // Classification binaire basée sur la RÉALITÉ (pas la prédiction)
  // TP = vraie commande → OUI (il fallait commander)
  // FP = fausse alerte → NON (il ne fallait PAS commander)
  // FN = commande ratée → OUI (il fallait commander!)
  let ruptureRisk: "OUI" | "NON";
  switch (type) {
    case "TP":
      ruptureRisk = "OUI";  // Client a commandé = risque était réel
      break;
    case "FP":
      ruptureRisk = "NON";  // Client n'a pas commandé = pas de risque
      break;
    case "FN":
      ruptureRisk = "OUI";  // Client a commandé mais on l'a raté = risque était réel!
      break;
  }

  return {
    productName: product.productName,
    recentOrders: formatOrders(recentOrders),
    lastYearOrders: formatOrders(lastYearOrders),
    currentDate: cutoffDate.split(" ")[0],
    ruptureRisk,
  };
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Convertir le playbook JSON en texte pour le prompt
function formatPlaybookForPrompt(playbook: any): string {
  if (!playbook?.sections) return "";

  const lines: string[] = ["RÈGLES DÉCOUVERTES PAR ACE:"];

  for (const [section, bullets] of Object.entries(playbook.sections)) {
    lines.push(`\n## ${section}`);
    for (const bullet of bullets as any[]) {
      const content = typeof bullet === "string" ? bullet : bullet.content;
      if (content && !content.startsWith("invent-")) {
        // Nettoyer le contenu (enlever les IDs)
        lines.push(`- ${content.substring(0, 500)}`);
      }
    }
  }

  return lines.join("\n");
}

// 1. Extraction des exemples
async function extractExamples(): Promise<TrainingExample[]> {
  console.log("1. Extraction des exemples depuis backtests...");

  const files = readdirSync(BACKTEST_DIR).filter((f) => f.endsWith("-v2.json"));
  console.log(`   ${files.length} fichiers trouvés`);

  const tp: TrainingExample[] = [];
  const fp: TrainingExample[] = [];
  const fn: TrainingExample[] = [];

  for (const file of files) {
    try {
      const content = readFileSync(join(BACKTEST_DIR, file), "utf-8");
      const data: BacktestV2 = JSON.parse(content);
      const cutoffDate = data.meta.config.cutoffDate;

      for (const product of data.products.truePositives || []) {
        const ex = extractFromProduct(product, cutoffDate, "TP");
        if (ex) tp.push(ex);
      }
      for (const product of data.products.falsePositives || []) {
        const ex = extractFromProduct(product, cutoffDate, "FP");
        if (ex) fp.push(ex);
      }
      for (const product of data.products.falseNegatives || []) {
        const ex = extractFromProduct(product, cutoffDate, "FN");
        if (ex) fn.push(ex);
      }
    } catch (e) {
      // Skip invalid files
    }
  }

  console.log(`   TP: ${tp.length}, FP: ${fp.length}, FN: ${fn.length}`);

  // Balance: 50% TP, 25% FP, 25% FN
  // FN = crucial pour apprendre "quand dire OUI"
  const targetTP = Math.floor(MAX_EXAMPLES * 0.5);
  const targetFP = Math.floor(MAX_EXAMPLES * 0.25);
  const targetFN = Math.floor(MAX_EXAMPLES * 0.25);

  const selected = [
    ...shuffle(tp).slice(0, targetTP),
    ...shuffle(fp).slice(0, targetFP),
    ...shuffle(fn).slice(0, targetFN),
  ];

  console.log(`   Final: ${selected.length} exemples\n`);
  return shuffle(selected);
}

// 2. Calcul métriques
interface MetricResult {
  recall: number;
  precision: number;
  f1: number;
  accuracy: number;
}

function calculateMetrics(
  results: Array<{ pred: "OUI" | "NON"; actual: "OUI" | "NON" }>
): MetricResult {
  let tp = 0,
    fp = 0,
    fn = 0,
    tn = 0;

  for (const { pred, actual } of results) {
    const predOUI = pred === "OUI";
    const actualOUI = actual === "OUI";

    if (predOUI && actualOUI) tp++;
    else if (predOUI && !actualOUI) fp++;
    else if (!predOUI && actualOUI) fn++;
    else tn++;
  }

  const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
  const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
  const f1 = precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;
  const accuracy = results.length > 0 ? (tp + tn) / results.length : 0;

  return { recall, precision, f1, accuracy };
}

// 3. Baseline
async function runBaseline(
  predictor: ReturnType<typeof ax>,
  examples: TrainingExample[]
): Promise<MetricResult> {
  console.log("2. Calcul baseline (sans ACE)...");

  const sample = examples;
  const results: Array<{ pred: "OUI" | "NON"; actual: "OUI" | "NON" }> = [];

  for (const ex of sample) {
    try {
      const result = await predictor.forward(studentLLM, {
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
      });
      // Normaliser la réponse
      const predRisk = (result.ruptureRisk || "NON").toString().toUpperCase();
      results.push({
        pred: predRisk === "OUI" ? "OUI" : "NON",
        actual: ex.ruptureRisk,
      });
    } catch (e) {
      results.push({ pred: "NON", actual: ex.ruptureRisk });
    }
  }

  const metrics = calculateMetrics(results);
  console.log(`   Recall: ${(metrics.recall * 100).toFixed(1)}%`);
  console.log(`   Precision: ${(metrics.precision * 100).toFixed(1)}%`);
  console.log(`   F1: ${(metrics.f1 * 100).toFixed(1)}%\n`);

  return metrics;
}

// 4. ACE Optimization
async function runACE(
  examples: TrainingExample[]
): Promise<{ playbook: any; metrics: MetricResult; instruction: string | null }> {
  console.log(`3. ACE Optimization (${MAX_EPOCHS} epochs)...`);

  const predictor = ax(stockPredictorSignature);

  // Métrique CLASSIFICATION BINAIRE simple
  // ACE fonctionne mieux avec une métrique simple: 1 = correct, 0 = incorrect
  const aceMetric: AxMetricFn = ({ prediction, example }) => {
    const pred = ((prediction as any).ruptureRisk || "NON").toString().toUpperCase();
    const actual = ((example as any).ruptureRisk || "NON").toString().toUpperCase();

    const predOUI = pred === "OUI";
    const actualOUI = actual === "OUI";

    // Métrique simple: match exact
    if (predOUI === actualOUI) return 1;  // Correct (TP ou TN)
    return 0;  // Incorrect (FP ou FN)
  };

  // ACE avec Gemini Flash pour tout
  const ace = new AxACE(
    {
      studentAI: studentLLM,
      teacherAI: studentLLM,
      verbose: true,
    },
    {
      maxEpochs: MAX_EPOCHS,
      allowDynamicSections: true,
    }
  );

  // Fix: Patcher le reflector pour forcer bulletTags en array
  try {
    const reflector = (ace as any).getOrCreateReflectorProgram?.call(ace);
    if (reflector) {
      const baseDesc = reflector.getDescription?.() || "";
      reflector.setDescription(
        baseDesc + "\n\nCRITICAL: bulletTags MUST be a JSON array like [{\"id\":\"abc\",\"tag\":\"helpful\"}], NEVER a single object. If no tags, return empty array []."
      );
    }
  } catch (e) {
    // Ignore si ça marche pas
  }

  // ACE exemples: seulement les inputs + ground truth output (ruptureRisk)
  // Ne PAS inclure reasoning car c'est un output généré par le modèle
  const axExamples = examples.map((ex) => ({
    productName: ex.productName,
    recentOrders: ex.recentOrders,
    lastYearOrders: ex.lastYearOrders,
    currentDate: ex.currentDate,
    ruptureRisk: ex.ruptureRisk,  // Ground truth pour l'évaluation: OUI ou NON
  }));

  const startTime = Date.now();

  let result: any = null;
  let playbook: any = {};
  let instruction: string | null = null;

  try {
    result = await ace.compile(predictor, axExamples, aceMetric);
    playbook = result.artifact?.playbook || {};
    instruction = result.optimizedProgram?.instruction || null;

    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`   Terminé en ${duration} min`);
    console.log(`   Best score: ${result.optimizedProgram?.bestScore?.toFixed(3) || "N/A"}`);

    // Appliquer et valider
    if (result.optimizedProgram) {
      console.log("\n   AVANT applyTo - instruction length:", predictor.getInstruction?.()?.length || "N/A");
      result.optimizedProgram.applyTo(predictor);
      console.log("   APRÈS applyTo - instruction length:", predictor.getInstruction?.()?.length || "N/A");

      // Debug: afficher un extrait de l'instruction
      const instr = predictor.getInstruction?.() || "";
      if (instr.length > 200) {
        console.log("   Instruction contient playbook:", instr.includes("RÈGLES") || instr.includes("Inventory") || instr.includes("playbook"));
        console.log("   Extrait fin instruction:", instr.slice(-300));
      }
    }
  } catch (error: any) {
    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n⚠️ ACE a crashé après ${duration} min: ${error.message}`);

    // Essayer de récupérer ce qu'on peut de l'optimizer
    try {
      // Accéder aux propriétés internes de ACE pour récupérer le playbook partiel
      playbook = (ace as any).playbook || (ace as any)._playbook || {};
      instruction = (ace as any).currentInstruction || null;
      console.log(`   Playbook partiel récupéré: ${JSON.stringify(playbook).length} chars`);
    } catch (e2) {
      console.log(`   Impossible de récupérer le playbook partiel`);
    }
  }

  // 🔧 FIX: Injecter le playbook dans le prompt AVANT validation
  if (playbook && playbook.sections) {
    const playbookText = formatPlaybookForPrompt(playbook);
    if (playbookText) {
      console.log(`\n   Injection du playbook (${playbookText.length} chars) dans le prompt...`);
      predictor.setInstruction(stockPredictorSignature + "\n\n" + playbookText);
    }
  }

  // Validation post-ACE (avec ou sans optimisation)
  console.log("\n4. Validation post-ACE...");
  const sample = examples;
  const valResults: Array<{ pred: "OUI" | "NON"; actual: "OUI" | "NON" }> = [];

  for (const ex of sample) {
    try {
      const res = await predictor.forward(studentLLM, {
        productName: ex.productName,
        recentOrders: ex.recentOrders,
        lastYearOrders: ex.lastYearOrders,
        currentDate: ex.currentDate,
      });
      // Normaliser la réponse
      const predRisk = (res.ruptureRisk || "NON").toString().toUpperCase();
      valResults.push({
        pred: predRisk === "OUI" ? "OUI" : "NON",
        actual: ex.ruptureRisk,
      });
    } catch (e) {
      valResults.push({ pred: "NON", actual: ex.ruptureRisk });
    }
  }

  const metrics = calculateMetrics(valResults);
  console.log(`   Recall: ${(metrics.recall * 100).toFixed(1)}%`);
  console.log(`   Precision: ${(metrics.precision * 100).toFixed(1)}%`);
  console.log(`   F1: ${(metrics.f1 * 100).toFixed(1)}%\n`);

  return {
    playbook,
    metrics,
    instruction,
  };
}

// Main
async function main() {
  console.log("=".repeat(60));
  console.log("  ACE Offline Optimization");
  console.log("=".repeat(60));
  console.log(`Config: ${MAX_EXAMPLES} exemples, ${MAX_EPOCHS} epochs`);
  console.log(`Model: ${MODEL}\n`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // 1. Extraction
  const examples = await extractExamples();

  // Sauvegarder exemples
  writeFileSync(
    join(OUTPUT_DIR, "training-examples-ace.json"),
    JSON.stringify(examples, null, 2)
  );

  // 2. Baseline
  const baselinePredictor = ax(stockPredictorSignature);
  const baseline = await runBaseline(baselinePredictor, examples);

  // 3. ACE
  const { playbook, metrics: aceMetrics, instruction } = await runACE(examples);

  // 4. Comparaison
  console.log("=".repeat(60));
  console.log("  RÉSULTATS");
  console.log("=".repeat(60));
  console.log(`\n         | Baseline | ACE      | Delta`);
  console.log(`---------+----------+----------+-------`);
  console.log(
    `Recall   | ${(baseline.recall * 100).toFixed(1).padStart(6)}%  | ${(aceMetrics.recall * 100).toFixed(1).padStart(6)}%  | ${((aceMetrics.recall - baseline.recall) * 100).toFixed(1)}%`
  );
  console.log(
    `Precision| ${(baseline.precision * 100).toFixed(1).padStart(6)}%  | ${(aceMetrics.precision * 100).toFixed(1).padStart(6)}%  | ${((aceMetrics.precision - baseline.precision) * 100).toFixed(1)}%`
  );
  console.log(
    `F1       | ${(baseline.f1 * 100).toFixed(1).padStart(6)}%  | ${(aceMetrics.f1 * 100).toFixed(1).padStart(6)}%  | ${((aceMetrics.f1 - baseline.f1) * 100).toFixed(1)}%`
  );

  // 5. Sauvegarder playbook
  const savedData = {
    version: "1.0",
    optimizerType: "ace",
    optimizedAt: new Date().toISOString(),
    model: MODEL,
    config: { maxExamples: MAX_EXAMPLES, maxEpochs: MAX_EPOCHS },
    baseline,
    aceMetrics,
    playbook,
    instruction,
  };

  writeFileSync(
    join(OUTPUT_DIR, "ace-playbook.json"),
    JSON.stringify(savedData, null, 2)
  );

  console.log("\n\nPlaybook sauvegardé: optimization-results/ace-playbook.json");

  // Afficher l'instruction optimisée
  if (instruction) {
    console.log("\n" + "=".repeat(60));
    console.log("  INSTRUCTION OPTIMISÉE");
    console.log("=".repeat(60));
    console.log(instruction);
  }

  // Afficher les règles découvertes
  if (playbook && Object.keys(playbook).length > 0) {
    console.log("\n" + "=".repeat(60));
    console.log("  PLAYBOOK / RÈGLES DÉCOUVERTES");
    console.log("=".repeat(60));
    console.log(JSON.stringify(playbook, null, 2));
  }
}

main().catch(console.error);
