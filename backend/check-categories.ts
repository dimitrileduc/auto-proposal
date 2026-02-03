import { OdooClient } from "odoo-xmlrpc-ts";
import * as dotenv from "dotenv";
dotenv.config();

// Catégories exclues actuelles dans la config
const excludedCategoryIds = [
  // Deposits (returnable containers)
  8, 10, 12, 14, 17, 19, 20, 25, 40, 46, 287, 582,
  // Pallets
  294,
  // Packaging materials
  24, 29, 30, 249, 252, 253, 262, 264, 265, 276, 291, 538, 556, 557, 583, 585, 586, 587,
  // Washing services
  7, 13, 15, 16, 18,
  // Closures / Caps
  50, 51, 52,
  // Tableware
  547, 577,
  // Transport
  21, 289, 551, 580,
  // Consumables / General expenses
  11, 26, 284, 285, 286, 288, 295, 555, 560,
  // Storage / Services
  53, 554, 697,
];

async function checkCategories() {
  console.log("=== Vérification Catégories Produits Odoo Prod ===\n");
  console.log("Catégories à vérifier:", excludedCategoryIds.length);

  const client = new OdooClient({
    url: process.env.ODOO_URL!,
    db: process.env.ODOO_DB!,
    username: process.env.ODOO_USERNAME!,
    password: process.env.ODOO_PASSWORD!,
  });

  // Chercher toutes les catégories exclues
  const categories = await client.searchRead<{id: number, name: string, complete_name: string}>(
    "product.category",
    [["id", "in", excludedCategoryIds]],
    { fields: ["id", "name", "complete_name"] }
  );

  console.log("\n✅ Catégories TROUVÉES:", categories.length);
  categories.sort((a, b) => a.id - b.id);
  categories.forEach((c) => console.log("   ID " + c.id + ": " + c.complete_name));

  // Trouver les IDs manquants
  const foundIds = categories.map(c => c.id);
  const missingIds = excludedCategoryIds.filter(id => !foundIds.includes(id));

  if (missingIds.length > 0) {
    console.log("\n❌ Catégories MANQUANTES:", missingIds.length);
    console.log("   IDs:", missingIds.join(", "));
    console.log("\n   ⚠️ Ces catégories n'existent pas dans Odoo prod !");
    console.log("   → Il faut soit les retirer de la config, soit trouver les équivalents");
  } else {
    console.log("\n✅ Toutes les catégories existent dans Odoo prod !");
  }

  // Afficher toutes les catégories Odoo pour référence
  console.log("\n\n=== TOUTES les catégories Odoo (pour référence) ===");
  const allCategories = await client.searchRead<{id: number, name: string, complete_name: string}>(
    "product.category",
    [],
    { fields: ["id", "name", "complete_name"], order: "id" }
  );
  console.log("Total catégories:", allCategories.length);
  allCategories.forEach((c) => console.log("   ID " + c.id + ": " + c.complete_name));
}

checkCategories().catch(console.error);
