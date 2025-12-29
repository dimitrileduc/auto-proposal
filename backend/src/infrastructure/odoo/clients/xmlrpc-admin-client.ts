/**
 * Extended XML-RPC client for administrative operations
 *
 * Provides low-level CRUD operations for Odoo models.
 * Used for testing and administrative tasks.
 *
 * @module infrastructure/odoo/clients/xmlrpc-admin-client
 */

import { OdooClient as XmlRpcOdoo } from "odoo-xmlrpc-ts";

const ODOO_CONFIG = {
  url: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
  database: process.env.ODOO_DB || "demo-food-autopilot",
  username: process.env.ODOO_USERNAME,
  password: process.env.ODOO_PASSWORD,
};

/**
 * Extended XML-RPC client with administrative capabilities
 */
export class XmlRpcAdminClient {
  private odoo: XmlRpcOdoo;

  /**
   * Initializes the admin client with Odoo connection
   *
   * @throws Error if ODOO_USERNAME or ODOO_PASSWORD environment variables are missing
   */
  constructor() {
    if (!ODOO_CONFIG.username || !ODOO_CONFIG.password) {
      throw new Error("ODOO_USERNAME and ODOO_PASSWORD environment variables are required");
    }

    this.odoo = new XmlRpcOdoo({
      url: ODOO_CONFIG.url,
      db: ODOO_CONFIG.database,
      username: ODOO_CONFIG.username,
      password: ODOO_CONFIG.password,
    });
  }

  /**
   * Searches for records in a model
   *
   * @param model Model name (e.g., "res.partner", "sale.order")
   * @param domain Search domain (filter criteria)
   * @returns Array of matching record IDs
   */
  async search(model: string, domain: any[]): Promise<number[]> {
    return this.odoo.search(model, domain);
  }

  /**
   * Reads records from a model
   *
   * @param model Model name
   * @param ids Record IDs to read
   * @param fields Field names to retrieve
   * @returns Array of record objects with requested fields
   */
  async read(model: string, ids: number[], fields: string[]): Promise<any[]> {
    return this.odoo.read(model, ids, fields);
  }

  /**
   * Creates a new record in a model
   *
   * @param model Model name
   * @param values Field values for the new record
   * @returns ID of the created record
   */
  async create(model: string, values: any): Promise<number> {
    return this.odoo.create(model, values);
  }

  /**
   * Updates records in a model
   *
   * @param model Model name
   * @param ids Record IDs to update
   * @param values Field values to update
   * @returns Success status
   */
  async write(model: string, ids: number[], values: any): Promise<boolean> {
    return this.odoo.write(model, ids, values);
  }
}