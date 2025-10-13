import { task } from "@trigger.dev/sdk";
import { runClientAutoProposal } from "../workflow/client-proposal.workflow";
import { autoProposalConfig } from "../config/auto-proposal";
import type { InactiveClient } from "../features/client-inactivity/inactivity.types";
import type { WorkflowConfig, ClientProposalResult } from "../workflow/workflow.types";

/**
 * Résultat complet de la tâche client-proposal
 */
export interface ClientProposalTaskResult {
  client: {
    id: number;
    name: string;
    email?: string;
  };
  config: WorkflowConfig;
  result: ClientProposalResult;
  summary: {
    hasRisk: boolean;
    productsCount: number;
    urgentProductsCount: number;
    moderateProductsCount: number;
    finalAmount: number;
    quoteName?: string;
    quoteId?: number;
  };
  executionTime: number;
}

/**
 * Tâche Trigger.dev pour traiter la proposition automatique d'un client individuel
 *
 * Cette tâche exécute le workflow complet pour un client:
 * - Phase 1 & 2: Stock Analysis + Quantity Calculation
 * - Phase 2.5: Proposal Preparation (Pricing + MOQ)
 * - Phase 3: Quote Generation (si !skipQuoteGeneration)
 * - Génération du rapport markdown automatique si hasRisk
 *
 * La configuration utilise autoProposalConfig comme fallback pour tous les paramètres
 */
export const clientProposalTask = task({
  id: "client-proposal",
  retry: {
    maxAttempts: 3,        // Maximum 3 tentatives (1 + 2 retry)
    factor: 2,             // Délai double entre chaque retry
    minTimeoutInMs: 1000,  // Attendre minimum 1 seconde
    maxTimeoutInMs: 30000, // Maximum 30 secondes d'attente
    randomize: true,       // Ajoute ±25% d'aléatoire au délai
  },
  run: async (payload: {
    client: InactiveClient;
    config?: Partial<WorkflowConfig>;
  }): Promise<ClientProposalTaskResult> => {
    const startTime = Date.now();
    console.log(`📊 Processing client: ${payload.client.name} (ID: ${payload.client.id})`);

    // Utilise autoProposalConfig comme configuration par défaut avec overrides depuis le payload
    const config: WorkflowConfig = {
      inactivityDays:
        payload.config?.inactivityDays ??
        autoProposalConfig.inactivityDaysThreshold,

      analysisWindowDays:
        payload.config?.analysisWindowDays ??
        autoProposalConfig.analysisWindowDays,

      targetCoverage:
        payload.config?.targetCoverage ??
        autoProposalConfig.targetCoverage,

      leadTime:
        payload.config?.leadTime ??
        autoProposalConfig.leadTime,

      replenishmentThreshold:
        (payload.config?.targetCoverage ?? autoProposalConfig.targetCoverage) +
        (payload.config?.leadTime ?? autoProposalConfig.leadTime),

      moqMinimum:
        payload.config?.moqMinimum ??
        autoProposalConfig.pricing.minimumOrderAmount,

      maxClientsForProposalGeneration:
        payload.config?.maxClientsForProposalGeneration ??
        autoProposalConfig.workflow.maxClientsForProposalGeneration,

      skipQuoteGeneration:
        payload.config?.skipQuoteGeneration ??
        false,
    };

    try {
      // Exécute le workflow existant pour ce client avec la configuration fusionnée
      const result = await runClientAutoProposal(payload.client, config);

      if (result.success) {
        if (result.hasRisk) {
          console.log(
            `✅ Client ${payload.client.name}: ${result.productsCount} products at risk, ` +
            `${result.finalAmount?.toFixed(2)}€ HT${result.quoteName ? ` → Quote ${result.quoteName}` : ""}`
          );
        } else {
          console.log(`✅ Client ${payload.client.name}: No replenishment needed`);
        }
      } else {
        console.error(`❌ Client ${payload.client.name}: ${result.error}`);
      }

      // Retourne un objet complet avec toutes les informations utiles
      return {
        client: {
          id: payload.client.id,
          name: payload.client.name,
          email: payload.client.email ?? undefined,
        },
        config,
        result,
        summary: {
          hasRisk: result.hasRisk,
          productsCount: result.productsCount ?? 0,
          urgentProductsCount: result.urgentProductsCount ?? 0,
          moderateProductsCount: result.moderateProductsCount ?? 0,
          finalAmount: result.finalAmount ?? 0,
          quoteName: result.quoteName,
          quoteId: result.quoteId,
        },
        executionTime: Date.now() - startTime,
      };
    } catch (error) {
      console.error(`❌ Failed to process client ${payload.client.name}:`, error);
      throw error;
    }
  },
});