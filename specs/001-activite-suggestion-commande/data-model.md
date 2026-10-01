# Data Model: Activité « Suggestion commande »

**Plan**: [plan.md](./plan.md) | **Research**: [research.md](./research.md)

Aucune table n'est ajoutée, ni dans Odoo ni dans le backend. Le modèle décrit (1) les enregistrements
Odoo standard que le module et le backend manipulent, (2) les structures TypeScript du backend.

## 1. Côté Odoo (modèles standard, module `moutarderie_suggestion_commande`)

### 1.1 Type d'activité « Suggestion commande » (`mail.activity.type`)

Enregistrement livré par le module, id externe `mail_activity_type_suggestion_commande`, `noupdate`.

| Champ | Valeur | Pourquoi |
|---|---|---|
| `name` | Suggestion commande | FR-003 |
| `res_model` | `crm.lead` | Ne peut être posé que sur une opportunité ; borne les recherches |
| `keep_done` | True | Activités faites archivées (visibles), pas supprimées (R3) |
| `category` | `default` | Aucune action spéciale |
| `chaining_type` | `suggest` | Pas d'activité suivante déclenchée |
| `delay_count` | 0 | Échéance = jour de création |
| `icon` | `fa-shopping-cart` | Repérage visuel |

### 1.2 Activité (`mail.activity`) créée par le backend

| Champ | Valeur | Règle |
|---|---|---|
| `res_model_id` | id `ir.model` de `crm.lead` | Non envoyé : Odoo le déduit du contexte `default_res_model="crm.lead"` (le compte du backend ne lit pas `ir.model`) |
| `res_id` | opportunité porteuse | FR-004 / FR-005 |
| `activity_type_id` | type ci-dessus | Config backend (R8) |
| `summary` | « Suggestion commande <nom du client> » | FR-003 |
| `note` | HTML de la description | FR-007 à FR-010, voir 2.4 |
| `date_deadline` | jour du lancement (Europe/Paris) | FR-003, H3 |
| `user_id` | vendeur de la fiche client | FR-003, R17 |
| `create_uid` (auteur) | compte « Suggestions automatiques » | R18 : la notification standard d'Odoo au vendeur porte ce nom |

**États et transitions** (Odoo 17.0, R1) :

```
[créée, active=True] ──action_feedback (vendeur ou hook devis)──▶ [faite, active=False, date_done]
        │                                                              │
        │ unlink direct (suppression manuelle)                          │ unlink (archivage de l'opportunité)
        │ unlink via write(active=False) de l'opportunité (perdue)      ▼
        ▼                                                         supprimée, trace « faite » conservée
  supprimée + trace « disparue » posée par le module
```

Invariant métier (FR-012) : au plus une activité de ce type ouverte par société cliente (toutes
opportunités du client et de ses contacts confondues). Garanti par le backend (pré-contrôle +
revérification), pas par une contrainte Odoo (un vendeur peut en poser une à la main ; le backend la
respecte alors comme « activité déjà ouverte »).

### 1.3 Trace de relance (`mail.message` sur `crm.lead`)

Deux origines, une seule requête pour le backend (R2) :

| Origine | Auteur | `mail_activity_type_id` | `subtype` | Corps |
|---|---|---|---|---|
| Passage en fait (Odoo, `_action_done`) | utilisateur qui passe en fait (vendeur, ou créateur du devis via le hook) | notre type | `mail.mt_activities` | modèle standard `mail.message_activity_done` + feedback « Devis S… créé le … pour … » |
| Disparition (module, `mail.activity.unlink`) | utilisateur courant (`sudo` pour le droit d'écrire) | notre type | `mail.mt_activities` | « Activité « Suggestion commande » supprimée sans être passée en fait le JJ/MM/AAAA (opportunité marquée perdue ou activité supprimée). » |

Champ discriminant pour le backend : `date` (datetime UTC). Règle FR-013/FR-014 : bloqué si
`differenceInCalendarDays(runDate, date) < 21`.

### 1.4 Opportunité (`crm.lead`)

**Lecture** (FR-004). Opportunité *du client* : `partner_id.commercial_partner_id = client` (couvre la
société et ses contacts). *Ouverte* : `active = True` et `stage_id.is_won = False`. *Comptée* :
`type = 'opportunity'` et `company_id = companyId` (opportunités sans société ignorées). *Choisie* : `create_date` la plus ancienne.

**Création** (FR-005), uniquement si aucune ouverte :

| Champ | Valeur |
|---|---|
| `name` | « Suggestion commande <nom du client> » |
| `type` | `opportunity` |
| `partner_id` | client |
| `user_id` | vendeur de la fiche client |
| `team_id` | `res.partner.team_id`, sinon `res.users.sale_team_id` du vendeur, sinon vide ; une équipe d'une autre société n'est jamais retenue |
| `company_id` | `companyId` (FOODPRINT = 3) |
| `stage_id` | laissé à Odoo (première étape non repliée de l'équipe) |
| `expected_revenue` | non renseigné |

### 1.5 Devis (`sale.order`) — hook de fermeture (FR-011)

Sur `create` : pour chaque commande avec `partner_id`, ensemble cible = activités actives du type sur les
opportunités (archivées comprises) telles que `lead.partner_id.commercial_partner_id ==
order.partner_id.commercial_partner_id` et `lead.company_id == order.company_id`. Action :
`action_feedback(feedback=…)`. Aucun champ ajouté à `sale.order`.

### 1.6 Vendeur (`res.partner.user_id` → `res.users`)

| Cas | Raison d'écart |
|---|---|
| `user_id` vide | pas de vendeur |
| `res.users.active = False` (lu par `read`, pas `search`) | vendeur inactif |
| FOODPRINT absent de `res.users.company_ids` | vendeur sans accès à FOODPRINT |

## 2. Côté backend (TypeScript)

### 2.1 Configuration (`backend/src/config/auto-proposal.ts`)

```ts
defaultCompanyId: 3,
inactivityDetection: { dateMin, dateMax, excludedPartnerTagId: 196, autoProposalOrderTagId: 82 },
activity: {
  /** id prod de mail.activity.type « Suggestion commande », surchargé par ODOO_SUGGESTION_ACTIVITY_TYPE_ID */
  suggestionActivityTypeId: number,        // relevé après installation prod (R8)
  followUpDelayDays: 21,
  summaryPrefix: "Suggestion commande",
  leadNamePrefix: "Suggestion commande",
  introUsual: "Produits que ce client commande régulièrement et qu'il devrait bientôt recommander :",
  introOptional: "Produits commandés plus rarement par ce client, à lui proposer en complément :",
}
```

`quoteGeneration` disparaît. `replenishmentThreshold`, `pricing`, `productFiltering`, `workflow`,
`testing` inchangés.

### 2.2 Configurations de tâche

```ts
interface OrchestratorConfig {            // renommage uniquement
  …existant…
  skipOdooWrite: boolean;                 // ex skipOdooQuoteGeneration, défaut true
}
interface ClientProcessingConfig {
  …existant…
  skipOdooWrite: boolean;                 // défaut true
  eligibilityCheck?: boolean;             // défaut true ; false en backtest (R13)
  runDate?: string;                       // "YYYY-MM-DD", défaut = aujourd'hui Europe/Paris
}
```

### 2.3 Éligibilité (`features/suggestion-activity/`)

```ts
type SkipReason =
  | "no_salesperson" | "inactive_salesperson" | "salesperson_no_company_access"
  | "open_activity" | "recent_follow_up" | "no_products";

const SKIP_LABELS: Record<SkipReason, (d?: SkipDetail) => string> // libellés FR-016

interface PartnerContext {                 // lu avant l'IA (Q1..Q4 de contracts/odoo-api-calls.md)
  partnerId: number; partnerName: string;
  commercialPartnerId: number;
  salesperson?: { id: number; name: string; active: boolean; teamId?: number };
  partnerTeamId?: number;
  leadIds: number[];                       // toutes opportunités du client (archivées comprises)
  openActivity?: { id: number; leadId: number; leadName: string; userId: number; dateDeadline: string };
  lastFollowUp?: { date: string; messageId: number; leadId: number };   // trace ≥ runDate − 21 j
}

type EligibilityDecision =
  | { eligible: true }
  | { eligible: false; reason: SkipReason; detail?: { date?: string; activityId?: number; leadId?: number } };

function decideEligibility(ctx: PartnerContext, runDate: string, delayDays: number): EligibilityDecision;
function isWithinFollowUpDelay(lastDate: string, runDate: string, delayDays: number): boolean;

// prefilter.service.ts — orchestrateur, avant l'IA, en lot (P1..P5)
function buildPartnerContexts(clientIds: number[], companyId: number, typeId: number, runDate: string,
  odoo: OdooClient): Promise<Map<number, PartnerContext>>;
function prefilterEligibility(contexts: Map<number, PartnerContext>, runDate: string, delayDays: number):
  { eligible: number[]; skipped: Array<{ clientId: number; decision: EligibilityDecision }> };
```

Ordre des contrôles : `no_salesperson` → `inactive_salesperson` → `open_activity` → `recent_follow_up`.
`decideEligibility` est la seule implémentation de la règle : appelée en lot par le pré-filtre de
l'orchestrateur, puis pour un client par la revérification de la tâche avant l'écriture.
`no_products` est décidé après l'IA par la tâche.

### 2.4 Description de l'activité (`activity-note.utils.ts`)

```ts
interface ActivityNoteInput {
  lastOrderDate: string | null;            // "YYYY-MM-DD" (commande confirmée, Q6) ; null → « Aucune commande confirmée »
  usual: NoteProduct[];                    // confidence !== 'low'
  optional: NoteProduct[];                 // confidence === 'low'
}
interface NoteProduct { name: string; quantity: number; uom: string; lastOrderDate: string }
function splitProducts(products: ProductWithCurrentPrice[]): { usual: NoteProduct[]; optional: NoteProduct[] };
function buildActivityNote(input: ActivityNoteInput, labels: { introUsual: string; introOptional: string }): string; // HTML
```

Règles : dates au format `JJ/MM/AAAA` ; une liste vide et sa phrase sont omises ; ordre = date de
dernière commande, habituels, optionnels ; quantité entière suivie de l'unité de vente.

### 2.5 Résultat par client (`outcome`)

```ts
type SuggestionActivityOutcome =
  | { kind: "created"; activityId: number; leadId: number; leadName: string; leadCreated: boolean;
      salespersonId: number; salespersonName: string; dateDeadline: string }
  | { kind: "would_create"; leadId?: number; leadName?: string; leadCreated: boolean;   // mode test
      salespersonId: number; salespersonName: string }
  | { kind: "skipped"; reason: SkipReason; label: string; detail?: { date?: string; activityId?: number; leadId?: number } }
  | { kind: "error"; message: string; leadCreatedId?: number };   // opportunité créée sans activité signalée
```

`ClientProposalResult` (reports/types.ts) : `phases.quote`, `quoteName`, `quoteId` supprimés ;
`outcome: SuggestionActivityOutcome` et `activityNote?: string` (HTML de la description) ajoutés. `phases.stockAnalysis`/`proposalFinal` absents quand le
client est écarté avant l'IA.

### 2.6 Statistiques et rapport global

```ts
interface GlobalWorkflowStatistics {
  …existant sans quotesGenerated…
  activitiesCreated: number; leadsCreated: number;
  clientsSkipped: number; clientsFailed: number;
  wouldCreate: number;                     // mode test
}
interface GlobalReportData {
  mode: "test" | "real";
  created: Array<{ clientId; clientName; salespersonName; leadId; leadName; leadCreated: boolean; activityId? }>;
  leadsCreated: Array<{ clientId; clientName; leadId; leadName }>;
  skipped: Array<{ clientId; clientName; label: string }>;      // hors « aucun produit suggéré »
  errors: Array<{ clientId; clientName; message: string; leadCreatedId?: number }>;
  noProducts: Array<{ clientId; clientName }>;                  // section compacte, en dernier
  …statistiques et tableaux existants…
}
```

Invariant FR-017 : `created + wouldCreate + skipped + failed = clientsAnalyzed` (vérifié en test unitaire
sur `calculateGlobalWorkflowStatistics`).

## 3. Relations

```
res.partner (client, is_company) 1──* res.partner (contacts)      commercial_partner_id = client
res.partner.user_id ──▶ res.users (vendeur)
crm.lead.partner_id ──▶ res.partner (client ou contact)           ; company_id = 3
mail.activity (type = Suggestion commande) ──▶ crm.lead            ; user_id = vendeur ; au plus 1 ouverte / client
mail.message (mail_activity_type_id = type) ──▶ crm.lead           ; trace « faite » ou « disparue », datée
sale.order.create ──▶ action_feedback sur les activités ouvertes du même commercial_partner_id et société
```
