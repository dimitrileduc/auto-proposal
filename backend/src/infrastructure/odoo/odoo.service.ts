/**
 * Service Odoo - Point d'entrée unifié
 * Factory pour créer le client selon le type d'API
 */

import { createJson2Client } from "./clients/json2-client";
import { createXmlRpcClient } from "./clients/xmlrpc-client";
import { OdooApiType } from "../../types";

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
