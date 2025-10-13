/**
 * Client XML-RPC étendu pour les opérations d'administration
 * Utilisé pour créer le client test et autres opérations admin
 */

import { OdooClient as XmlRpcOdoo } from "odoo-xmlrpc-ts";

const ODOO_CONFIG = {
  url: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
  database: process.env.ODOO_DB || "demo-food-autopilot",
  username: process.env.ODOO_USERNAME,
  password: process.env.ODOO_PASSWORD,
};

export class XmlRpcAdminClient {
  private odoo: XmlRpcOdoo;

  constructor() {
    if (!ODOO_CONFIG.username || !ODOO_CONFIG.password) {
      throw new Error("ODOO_USERNAME et ODOO_PASSWORD requis pour XML-RPC");
    }

    this.odoo = new XmlRpcOdoo({
      url: ODOO_CONFIG.url,
      db: ODOO_CONFIG.database,
      username: ODOO_CONFIG.username,
      password: ODOO_CONFIG.password,
    });
  }

  /**
   * Recherche des enregistrements
   */
  async search(model: string, domain: any[]): Promise<number[]> {
    return this.odoo.search(model, domain);
  }

  /**
   * Lecture des enregistrements
   */
  async read(model: string, ids: number[], fields: string[]): Promise<any[]> {
    return this.odoo.read(model, ids, fields);
  }

  /**
   * Création d'un enregistrement
   */
  async create(model: string, values: any): Promise<number> {
    return this.odoo.create(model, values);
  }

  /**
   * Mise à jour d'un enregistrement
   */
  async write(model: string, ids: number[], values: any): Promise<boolean> {
    return this.odoo.write(model, ids, values);
  }
}