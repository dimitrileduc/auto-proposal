import type { InactiveClient } from "../../features/client-inactivity/inactivity.types";

/**
 * Configuration pour traiter UN client
 *
 * Utilisé par:
 * - client-proposal.workflow.ts
 * - client-proposal.task.ts
 *
 * Cette config contient uniquement les paramètres nécessaires
 * pour traiter un client individuel (phases 1, 2.5, 3).
 */
export interface ClientProcessingConfig {
  /** Nombre de jours d'historique à analyser (ex: 180 = 6 mois) */
  analysisWindowDays: number;

  /** Date de référence pour l'analyse d'historique (format: "YYYY-MM-DD HH:MM:SS"). Si non fournie, utilise aujourd'hui. */
  analysisEndDate?: string;

  /** Jours de couverture souhaités (ex: 14 jours) */
  targetCoverage: number;

  /** Délai d'approvisionnement en jours (ex: 5 jours) */
  leadTime: number;

  /** Montant minimum de commande en euros (MOQ) */
  moqMinimum: number;

  /** Si true, skip la création du devis Odoo (Phase 3) */
  skipOdooQuoteGeneration: boolean;

  /** Si true, génère les rapports markdown pour les clients avec risk. Default: true */
  shouldGenerateReport?: boolean;
}

/**
 * Payload pour la task Trigger.dev "client-proposal"
 *
 * Cette task traite un client individuel et exécute
 * le workflow complet (ou partiel si skipOdooQuoteGeneration=true)
 */
export interface ClientTaskPayload {
  /** Client à traiter */
  client: InactiveClient;

  /** Configuration de traitement */
  config: ClientProcessingConfig;
}
