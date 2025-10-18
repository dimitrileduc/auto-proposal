import type { ClientProcessingConfig } from "./client.types";

/**
 * Configuration pour l'orchestrateur auto-proposal
 *
 * Utilisé par:
 * - orchestrator.task.ts (task Trigger.dev principale)
 *
 * Hérite de ClientProcessingConfig et ajoute les paramètres
 * spécifiques à l'orchestration batch.
 */
export interface OrchestratorConfig extends ClientProcessingConfig {
  /** Seuil d'inactivité en jours (ex: 90 jours sans commande) */
  inactivityDays: number;

  /** Limite le nombre de clients à analyser (debug), "all" = tous */
  maxClientsToAnalyze: number | "all";

  /** Si true, force la réanalyse de tous les clients inactifs, même ceux ayant déjà des devis auto-proposal (tag 82) */
  forceReanalysis: boolean;

  /** Si true, génère les rapports markdown pour tous les clients avec risk */
  generateReports: boolean;
}

/**
 * Payload pour la task Trigger.dev "auto-proposal-orchestrator"
 *
 * Cette task orchestre le traitement batch de tous les clients inactifs
 * en déclenchant des tasks "client-proposal" en parallèle.
 */
export interface OrchestratorTaskPayload {
  /** Configuration d'orchestration (override partiel de autoProposalConfig) */
  config?: Partial<OrchestratorConfig>;
}
