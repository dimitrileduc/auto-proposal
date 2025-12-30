/**
 * Odoo service - unified entry point
 *
 * Factory to create the Odoo client based on API type (XML-RPC or JSON-2).
 *
 * @module infrastructure/odoo
 */

import { createJson2Client } from "./clients/json2-client";
import { createXmlRpcClient } from "./clients/xmlrpc-client";
import { OdooApiType } from "../../types";

/**
 * Creates and returns an Odoo client instance
 *
 * @param apiType - The Odoo API type (XMLRPC or JSON2)
 * @returns Configured Odoo client for the specified API type
 * @throws Error if apiType is invalid
 */
export function createOdooClient(apiType: OdooApiType) {
  switch (apiType) {
    case OdooApiType.XMLRPC:
      console.log("🔌 Using Odoo XML-RPC client");
      return createXmlRpcClient();
    case OdooApiType.JSON2:
      console.log("🔌 Using Odoo JSON-2 client");
      return createJson2Client();
    default:
      throw new Error(`Invalid odooApiType: ${apiType}`);
  }
}
