/**
 * "Suggestion commande" activity types
 * @module features/suggestion-activity/types
 */
import type { SalespersonInfo } from "../../infrastructure/odoo/clients/odoo-client.types";

/**
 * Closed list of reasons for not creating an activity (FR-016)
 */
export type SkipReason =
  | "no_salesperson"
  | "inactive_salesperson"
  | "salesperson_no_company_access"
  | "open_activity"
  | "recent_follow_up"
  | "no_products";

/**
 * Details attached to a skip decision
 */
export interface SkipDetail {
  /** Date of the last follow-up (Odoo datetime, UTC) for recent_follow_up */
  date?: string;
  /** Open activity found, for open_activity */
  activityId?: number;
  /** Opportunity carrying the open activity or the last follow-up */
  leadId?: number;
}

export type { SalespersonInfo } from "../../infrastructure/odoo/clients/odoo-client.types";

/**
 * Everything Odoo tells us about a client before deciding its eligibility
 *
 * Filled in batch by the orchestrator pre-filter (P1..P5),
 * then for a single client by the task re-check (Q1..Q4).
 */
export interface PartnerContext {
  partnerId: number;
  partnerName: string;
  commercialPartnerId: number;
  /** Analysed company (FOODPRINT = 3): the opportunity and the activity live there */
  companyId: number;
  salesperson?: SalespersonInfo;
  /** res.partner.team_id of the client */
  partnerTeamId?: number;
  /** All opportunities of the client and its contacts in the analysed company, archived included */
  leadIds: number[];
  /** Open "Suggestion commande" activity on one of these opportunities */
  openActivity?: { id: number; leadId: number };
  /** Most recent follow-up trace (done or vanished activity) since runDate − delay */
  lastFollowUp?: {
    /** mail.message.date (Odoo datetime, UTC) */
    date: string;
    messageId: number;
    leadId: number;
  };
}

/**
 * Result of the eligibility rule for one client
 */
export type EligibilityDecision =
  | { eligible: true }
  | { eligible: false; reason: SkipReason; detail?: SkipDetail };

/**
 * Outcome of a client in the run, one category per client (FR-017)
 */
export type SuggestionActivityOutcome =
  | {
      kind: "created";
      activityId: number;
      leadId: number;
      leadName: string;
      /** true when the opportunity was created for this activity */
      leadCreated: boolean;
      salespersonId: number;
      salespersonName: string;
      /** "YYYY-MM-DD" */
      dateDeadline: string;
    }
  | {
      /** Test mode: what would have been created */
      kind: "would_create";
      /** Existing opportunity that would carry the activity (absent when one would be created) */
      leadId?: number;
      /** Name of the carrying opportunity, existing or to be created */
      leadName: string;
      leadCreated: boolean;
      /** Absent only when eligibility is not checked (backtest) and the client has no salesperson */
      salespersonId?: number;
      salespersonName?: string;
    }
  | {
      kind: "skipped";
      reason: SkipReason;
      label: string;
      detail?: SkipDetail;
    }
  | {
      kind: "error";
      message: string;
      /** Opportunity created without its activity */
      leadCreatedId?: number;
    };

