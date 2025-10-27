# Client Inactivity Detection

## 🎯 Rôle

Phase 0 du système Auto-Proposal : Détection des clients inactifs via Odoo XML-RPC en analysant les commandes dans une période donnée (dateMin → dateMax), avec option d'exclusion pour forcer la réanalyse.

## 📦 Inventaire des Composants

### Fichier: `inactivity.service.ts`

**Description:** Service principal exposant `getInactiveClients(dateMin, dateMax, excludeTagId?)` pour récupérer la liste des clients sans commande récente.

<details><summary>Voir l'implémentation</summary>

```typescript
/**
 * Récupère les clients inactifs dans une période donnée
 *
 * @param dateMin Date minimum pour la période d'inactivité (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax Date maximum pour la période d'inactivité (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeAutoProposalTagId Optionnel: Tag ID à exclure des commandes récentes lors du calcul d'inactivité.
 *        Si fourni (ex: 82), les clients ayant SEULEMENT des commandes avec ce tag seront considérés comme inactifs.
 *        Si undefined, tous les clients sans commande récente sont inactifs (comportement normal).
 * @returns Liste des clients inactifs
 */
export async function getInactiveClients(
  dateMin: string,
  dateMax: string,
  excludeAutoProposalTagId?: number
): Promise<InactiveClient[]> {
  const partners = await odooClient.getInactiveCompanyPartners(dateMin, dateMax, excludeAutoProposalTagId);
  return transformInactiveClients(partners);
}
```

**Exemple d'utilisation:**
```typescript
// Comportement normal: clients inactifs entre le 26 sept et le 26 oct 2025
const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00")

// Force reanalysis: inclut les clients ayant SEULEMENT des commandes avec tag 82
const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00", 82)
```

</details>

---

### Fichier: `transform.utils.ts`

**Description:** Transformation des données brutes Odoo (`OdooPartner[]`) en objets métier (`InactiveClient[]`).

<details><summary>Voir l'implémentation</summary>

```typescript
export function transformInactiveClients(
  partners: OdooPartner[]
): InactiveClient[] {
  return partners.map((partner) => ({
    id: partner.id,
    name: partner.name,
    email: partner.email || null,
  }));
}
```

**Points clés:**
- Normalise `email` à `null` si absent (pas de string vide)
- Mapping 1:1 depuis OdooPartner vers InactiveClient
- Simple transformation de données sans logique métier

</details>

---

### Fichier: `inactivity.types.ts`

**Description:** Types TypeScript pour le module Client Inactivity.

<details><summary>Voir l'implémentation</summary>

```typescript
export interface InactiveClient {
  id: number;
  name: string;
  email: string | null;
}
```

</details>

---

### Dépendance: `odoo-domains.ts` (Infrastructure Odoo)

**Description:** Construction des domaines Odoo pour les requêtes de détection d'inactivité.

<details><summary>Voir l'implémentation</summary>

```typescript
/**
 * Domain pour récupérer les commandes dans une période donnée
 * @param dateMin Date minimum de la période (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax Date maximum de la période (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeTagId Optionnel: Tag ID à exclure (ex: tag auto-proposal 82)
 */
export function buildRecentOrdersDomain(
  dateMin: string,
  dateMax: string,
  excludeTagId?: number
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["date_order", ">=", dateMin],
    ["date_order", "<=", dateMax],
  ];

  if (excludeTagId !== undefined) {
    // Exclure les commandes ayant ce tag
    domain.push(["tag_ids", "not in", [excludeTagId]]);
  }

  return domain;
}

/**
 * Domain pour récupérer les partenaires inactifs
 * - Partenaires company uniquement
 * - Avec customer_rank > 0 (ont déjà été clients)
 * - Partenaires actifs uniquement (non archivés dans Odoo)
 */
export function buildInactivePartnersDomain(activePartnerIds: number[]): any[] {
  return [
    ["is_company", "=", true],
    ["customer_rank", ">", 0],
    ["active", "=", true], // Exclure les clients archivés
    "|", // Union de deux groupes d'inactifs
    ["sale_order_ids", "=", false], // GROUPE 1: Jamais commandé
    "&", // GROUPE 2: A commandé mais pas récemment
    ["sale_order_ids", "!=", false],
    ["id", "not in", activePartnerIds],
  ] as any[];
}
```

**Algorithme de détection (2 RPC calls):**

1. **RPC 1**: Récupérer les commandes récentes entre `dateMin` et `dateMax`
   - Domain: `buildRecentOrdersDomain(dateMin, dateMax, excludeTagId)`
   - Résultat: Liste de `partner_id` ayant commandé récemment = `activePartnerIds`

2. **RPC 2**: Récupérer les partenaires **inactifs**
   - Domain: `buildInactivePartnersDomain(activePartnerIds)`
   - Critères:
     - `is_company = true` (clients B2B uniquement)
     - `customer_rank > 0` (ont déjà commandé par le passé)
     - `active = true` (non archivés dans Odoo)
     - **ET** (`sale_order_ids = false` **OU** `id not in activePartnerIds`)
   - Résultat: Clients inactifs dans la période donnée

**Notation polonaise inversée Odoo:**
```python
# Logique exprimée en pseudo-code:
(is_company = true) AND
(customer_rank > 0) AND
(active = true) AND
(
  (sale_order_ids = false)  # Jamais commandé
  OR
  (sale_order_ids != false AND id not in activePartnerIds)  # A commandé mais pas récemment
)
```

</details>

---

### Dépendance: `xmlrpc-client.ts` (Infrastructure Odoo)

**Description:** Implémentation de `getInactiveCompanyPartners` utilisant l'API XML-RPC d'Odoo.

<details><summary>Voir l'implémentation</summary>

```typescript
async getInactiveCompanyPartners(dateMin: string, dateMax: string, excludeTagId?: number): Promise<OdooPartner[]> {
  try {
    // RPC 1: Récupérer les commandes récentes dans la période [dateMin, dateMax]
    const recentOrders = await odoo.searchRead<OdooOrder>("sale.order",
      buildRecentOrdersDomain(dateMin, dateMax, excludeTagId),
      { fields: ["partner_id"] }
    );

    // Déduplication des partner_ids actifs
    const activePartnerIds = [
      ...new Set(recentOrders.map((order) => order.partner_id[0])),
    ];

    // RPC 2: Récupérer les partenaires inactifs
    const inactivePartners = await odoo.searchRead<OdooPartner>("res.partner",
      buildInactivePartnersDomain(activePartnerIds),
      { fields: ["name", "email", "id"] }
    );

    return inactivePartners;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error(`Erreur lors de la récupération des partenaires inactifs: ${error}`);
  }
}
```

**Fichier**: `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts:46-77`

</details>

## 🔧 Guides Pratiques

<details><summary>Comment modifier la période d'inactivité (dateMin/dateMax) ?</summary>

### Méthode 1: Via config orchestrator (recommandé)

**Fichier**: Lors du trigger de `orchestratorTask`

```typescript
await orchestratorTask.trigger({
  config: {
    dateMin: "2025-09-01 00:00:00",  // ← Début période
    dateMax: "2025-10-01 00:00:00",  // ← Fin période
    // ... autres configs
  }
});
```

### Méthode 2: Via utils de date

**Fichier**: `backend/src/utils/date.utils.ts`

```typescript
import { getDateDaysAgo, getTodayAsDateString } from "../utils/date.utils";

const dateMin = getDateDaysAgo(30);  // Il y a 30 jours (format: "YYYY-MM-DD HH:MM:SS")
const dateMax = getTodayAsDateString();  // Aujourd'hui à 00:00:00

const clients = await getInactiveClients(dateMin, dateMax);
```

### Méthode 3: Directement dans orchestrator

**Fichier**: `backend/src/trigger/orchestrator.task.ts:64-67`

```typescript
const config: OrchestratorConfig = {
  dateMin: payload.config?.dateMin ?? getDateDaysAgo(30),  // ← Modifier ici le fallback
  dateMax: payload.config?.dateMax ?? getTodayAsDateString(),
  // ...
};
```

**Point de vigilance**: Le format de date doit être **exactement** `"YYYY-MM-DD HH:MM:SS"` (avec secondes).

</details>

<details><summary>Comment filtrer les clients avec tag "Auto-proposal" (excludeTagId: 82) ?</summary>

### Contexte: Force Reanalysis

Par défaut, le système **exclut** les clients ayant déjà reçu une proposition auto-proposal (tag 82) pour éviter le spam. Mais si vous voulez les **réanalyser** malgré tout:

### Activation du force reanalysis

**Option 1: Via config orchestrator**

```typescript
await orchestratorTask.trigger({
  config: {
    forceReanalysis: true,  // ← Active la réanalyse des clients avec tag 82
    // ...
  }
});
```

**Option 2: Via config globale**

**Fichier**: `backend/src/config/auto-proposal.ts:112`

```typescript
workflow: {
  forceReanalysis: true,  // ← Passer à true (par défaut false)
}
```

### Comment ça marche sous le capot ?

**Fichier**: `backend/src/trigger/orchestrator.task.ts:100-104`

```typescript
const allInactiveClients = await getInactiveClients(
  config.dateMin,
  config.dateMax,
  config.forceReanalysis ? autoProposalConfig.quoteGeneration.autoProposalTagId : undefined
  // ↑ Si forceReanalysis = true, passe 82 à excludeTagId
  // ↑ Si forceReanalysis = false, passe undefined (comportement normal)
);
```

**Comportement dans `buildRecentOrdersDomain`:**

```typescript
// Si excludeTagId = 82:
domain.push(["tag_ids", "not in", [82]]);
// → Les commandes AVEC tag 82 sont IGNORÉES lors du calcul d'activité
// → Les clients ayant SEULEMENT des commandes tag 82 seront considérés comme inactifs
```

**Cas d'usage:**
- `forceReanalysis: false` (défaut): Ne réanalyse PAS les clients ayant déjà reçu une auto-proposal
- `forceReanalysis: true`: Réanalyse TOUS les clients inactifs, même ceux avec tag 82

</details>

<details><summary>Comment ajouter des critères de filtrage supplémentaires ?</summary>

### Exemple: Filtrer par secteur géographique

**Fichier**: `backend/src/infrastructure/odoo/clients/odoo-domains.ts:47-58`

Modifier `buildInactivePartnersDomain`:

```typescript
export function buildInactivePartnersDomain(
  activePartnerIds: number[],
  countryIds?: number[]  // ← Nouveau paramètre optionnel
): any[] {
  const domain: any[] = [
    ["is_company", "=", true],
    ["customer_rank", ">", 0],
    ["active", "=", true],
    "|",
    ["sale_order_ids", "=", false],
    "&",
    ["sale_order_ids", "!=", false],
    ["id", "not in", activePartnerIds],
  ];

  // Filtrer par pays si fourni
  if (countryIds && countryIds.length > 0) {
    domain.push(["country_id", "in", countryIds]);
  }

  return domain;
}
```

**Puis mettre à jour** `xmlrpc-client.ts:62`:

```typescript
const inactivePartners = await odoo.searchRead<OdooPartner>("res.partner",
  buildInactivePartnersDomain(activePartnerIds, [75]),  // 75 = France
  { fields: ["name", "email", "id"] }
);
```

### Exemple: Filtrer par montant minimum historique

Ajouter un RPC supplémentaire pour exclure les petits clients:

```typescript
// Après avoir récupéré inactivePartners
const partnersWithRevenue = await odoo.searchRead<{ id: number, total: number }>(
  "res.partner",
  [
    ["id", "in", inactivePartners.map(p => p.id)],
    ["sale_order_count", ">", 5],  // Au moins 5 commandes historiques
  ],
  { fields: ["id"] }
);

const qualifiedPartnerIds = new Set(partnersWithRevenue.map(p => p.id));
const filteredPartners = inactivePartners.filter(p => qualifiedPartnerIds.has(p.id));
```

</details>

<details><summary>Points de vigilance / Dépendances</summary>

### Format de date

**CRITIQUE**: Le format date doit être **exactement** `"YYYY-MM-DD HH:MM:SS"` (avec heures, minutes, secondes).

```typescript
// ✅ CORRECT
"2025-10-26 00:00:00"
"2025-09-26 23:59:59"

// ❌ INCORRECT (manque les heures)
"2025-10-26"
```

**Helpers disponibles:**
- `getTodayAsDateString()`: Retourne aujourd'hui à 00:00:00
- `getDateDaysAgo(n)`: Retourne il y a N jours à 00:00:00
- `calculateDateBefore(referenceDate, days)`: Retourne referenceDate - days

### Tag Auto-Proposal (ID: 82)

**Fichier**: `backend/src/config/auto-proposal.ts:32`

```typescript
quoteGeneration: {
  autoProposalTagId: 82,  // Tag "Auto-proposal" dans Odoo (crm.tag)
}
```

**Pré-requis Odoo:**
- Le tag avec ID 82 **doit exister** dans Odoo (table `crm.tag`)
- Si vous changez d'environnement Odoo, vérifier que ce tag existe
- Commande SQL Odoo pour vérifier: `SELECT id, name FROM crm_tag WHERE id = 82;`

### Exclusion des clients archivés

**Ligne clé**: `odoo-domains.ts:51`

```typescript
["active", "=", true],  // Exclure les clients archivés
```

Les clients marqués comme "archivés" dans Odoo (`active = false`) sont **automatiquement exclus** de la détection d'inactivité.

### Performance (2 RPC calls)

**RPC 1** (Commandes récentes):
- Requête: `sale.order` avec filtre `date_order >= dateMin AND date_order <= dateMax`
- Champs récupérés: `["partner_id"]` uniquement
- Coût: ~100-500ms pour 10 000 commandes

**RPC 2** (Partenaires inactifs):
- Requête: `res.partner` avec domaine complexe (opérateurs `|` et `&`)
- Champs récupérés: `["name", "email", "id"]`
- Coût: ~200-800ms pour 1000 partenaires

**Total**: ~300-1300ms pour détecter les clients inactifs (dépend de la taille de la base Odoo)

### Dépendances externes

- **Odoo XML-RPC API**: Nécessite Odoo v13+ (supporte `searchRead`)
- **Variables d'environnement**:
  ```bash
  ODOO_URL=https://your-odoo.com
  ODOO_DB=your-database
  ODOO_USERNAME=your-username
  ODOO_PASSWORD=your-password
  ```

### Relation avec autres modules

**Dépend de:**
- `/infrastructure/odoo/clients/xmlrpc-client.ts` (API Odoo)
- `/infrastructure/odoo/clients/odoo-domains.ts` (Construction des domaines)
- `/utils/date.utils.ts` (Manipulation dates)
- `/config/auto-proposal.ts` (Tag ID 82)

**Utilisé par:**
- `/trigger/orchestrator.task.ts` (Phase 0 du workflow)
- `/routes/client-task.ts` (Tests manuels)

</details>

## 🔗 Références

- Odoo XML-RPC API: [Documentation Odoo External API](https://www.odoo.com/documentation/17.0/developer/reference/external_api.html)
- Odoo Domains: [Search Domains Documentation](https://www.odoo.com/documentation/17.0/developer/reference/backend/orm.html#search-domains)
- Configuration: [`/backend/src/config/auto-proposal.ts`](../../config/auto-proposal.ts)
- Types: [`/backend/src/features/client-inactivity/inactivity.types.ts`](./inactivity.types.ts)
- Orchestrator: [`/backend/src/trigger/README.md`](../../trigger/README.md)
