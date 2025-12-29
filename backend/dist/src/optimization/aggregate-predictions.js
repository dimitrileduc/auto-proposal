/**
 * Agrège tous les backtest-client-*-v2.json en un seul fichier
 * compatible avec extract-examples.ts
 */
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
const REPORTS_DIR = join(process.cwd(), "reports-output");
const OUTPUT_FILE = join(process.cwd(), "analysis-folder/predictions-v2-all-clients.json");
async function main() {
    // Trouver tous les fichiers -v2.json
    const files = readdirSync(REPORTS_DIR)
        .filter(f => f.startsWith("backtest-client-") && f.endsWith("-v2.json"));
    console.log(`Found ${files.length} client backtest files`);
    const clients = [];
    for (const file of files) {
        try {
            const content = readFileSync(join(REPORTS_DIR, file), "utf-8");
            const data = JSON.parse(content);
            // Transformer au format attendu par extract-examples
            clients.push({
                clientId: data.client.id,
                clientName: data.client.name,
                data: {
                    meta: {
                        config: {
                            cutoffDate: data.meta.config.cutoffDate,
                        },
                    },
                    products: data.products,
                },
            });
        }
        catch (e) {
            console.warn(`Skip ${file}: ${e}`);
        }
    }
    // Créer le fichier agrégé
    const output = {
        metadata: {
            totalClients: clients.length,
            generatedAt: new Date().toISOString(),
            source: "reports-output aggregation",
        },
        clients,
    };
    writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`\nAgrégé ${clients.length} clients dans ${OUTPUT_FILE}`);
    // Stats
    let totalTP = 0, totalFP = 0, totalFN = 0;
    for (const c of clients) {
        totalTP += c.data.products.truePositives?.length || 0;
        totalFP += c.data.products.falsePositives?.length || 0;
        totalFN += c.data.products.falseNegatives?.length || 0;
    }
    console.log(`\nTotal examples disponibles:`);
    console.log(`  - True Positives: ${totalTP}`);
    console.log(`  - False Positives: ${totalFP}`);
    console.log(`  - False Negatives: ${totalFN}`);
    console.log(`  - TOTAL: ${totalTP + totalFP + totalFN}`);
}
main().catch(console.error);
