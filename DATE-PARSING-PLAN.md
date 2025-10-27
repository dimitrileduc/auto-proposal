# Plan : Parser les dates dans les Tasks Trigger.dev

## 🎯 Objectif
Accepter formats simples ("010125", "01/01/25") dans **les tasks Trigger.dev**, pas dans les routes HTTP.

**Pourquoi ?**
- Dashboard Trigger.dev → Task directement (bypass la route)
- Route HTTP → Task aussi
- **Validation unique** dans la task = une seule source de vérité

---

## 📦 1. Installer date-fns

```bash
pnpm add date-fns
```

**Pourquoi date-fns ?**
- Modulaire et tree-shakable (léger)
- Rapide (pas d'Intl comme Luxon)
- Meilleure lib selon recherche web 2025

---

## 🛠️ 2. Créer `parseUserDateInput()` dans date.utils.ts

**Fichier :** `backend/src/utils/date.utils.ts`

**Ajouter à la fin :**

```typescript
import { parse, isValid } from 'date-fns';

/**
 * Parse une date utilisateur vers format Odoo "YYYY-MM-DD HH:MM:SS"
 *
 * Formats acceptés:
 * - "010125" → 01/01/2025 00:00:00
 * - "01/01/25" → 01/01/2025 00:00:00
 * - "01/01/2025" → 01/01/2025 00:00:00
 * - "2025-01-01" → 01/01/2025 00:00:00 (ISO)
 *
 * @throws Error si format invalide avec message explicatif
 */
export function parseUserDateInput(input: string): string {
  // Si déjà au format complet Odoo, retourner tel quel
  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(input)) {
    return input;
  }

  const formats = [
    { pattern: 'ddMMyy', example: '010125' },
    { pattern: 'dd/MM/yy', example: '01/01/25' },
    { pattern: 'dd/MM/yyyy', example: '01/01/2025' },
    { pattern: 'yyyy-MM-dd', example: '2025-01-01' },
  ];

  for (const { pattern } of formats) {
    const parsed = parse(input, pattern, new Date());
    if (isValid(parsed)) {
      return parsed.toISOString().split('T')[0] + ' 00:00:00';
    }
  }

  throw new Error(
    `Format de date invalide: "${input}"\n\n` +
    `Formats acceptés:\n` +
    `  • "010125" (JJMMAA)\n` +
    `  • "01/01/25" (JJ/MM/AA)\n` +
    `  • "01/01/2025" (JJ/MM/AAAA)\n` +
    `  • "2025-01-01" (AAAA-MM-JJ ISO)`
  );
}
```

---

## 🔧 3. Modifier `orchestrator.task.ts`

**Fichier :** `backend/src/trigger/orchestrator.task.ts`

**Ligne 1 : Ajouter import**
```typescript
import { getTodayAsDateString, getDateDaysAgo, parseUserDateInput } from "../utils/date.utils";
```

**Lignes 64-72 : Remplacer le bloc config**

**AVANT :**
```typescript
const config: OrchestratorConfig = {
  dateMin:
    payload.config?.dateMin ?? getDateDaysAgo(30),
  dateMax:
    payload.config?.dateMax ?? getTodayAsDateString(),
  analysisWindowDays:
    payload.config?.analysisWindowDays ?? autoProposalConfig.analysisWindowDays,
  analysisEndDate:
    payload.config?.analysisEndDate ?? payload.config?.dateMax ?? getTodayAsDateString(),
  // ...
};
```

**APRÈS :**
```typescript
const config: OrchestratorConfig = {
  dateMin: payload.config?.dateMin
    ? parseUserDateInput(payload.config.dateMin)
    : getDateDaysAgo(30),
  dateMax: payload.config?.dateMax
    ? parseUserDateInput(payload.config.dateMax)
    : getTodayAsDateString(),
  analysisWindowDays:
    payload.config?.analysisWindowDays ?? autoProposalConfig.analysisWindowDays,
  analysisEndDate: payload.config?.analysisEndDate
    ? parseUserDateInput(payload.config.analysisEndDate)
    : payload.config?.dateMax
      ? parseUserDateInput(payload.config.dateMax)
      : getTodayAsDateString(),
  // ... reste identique
};
```

**Gestion d'erreur automatique :**
- Si `parseUserDateInput()` throw → Trigger.dev marque la run FAILED
- Message d'erreur visible dans le dashboard
- Pas besoin de try/catch

---

## 🔧 4. Modifier `client-proposal.task.ts`

**Fichier :** `backend/src/trigger/client-proposal.task.ts`

**Ligne 7 : Ajouter import**
```typescript
import { getTodayAsDateString, parseUserDateInput } from "../utils/date.utils";
```

**Lignes 80-82 : Remplacer analysisEndDate**

**AVANT :**
```typescript
analysisEndDate:
  payload.config.analysisEndDate ??
  getTodayAsDateString(),
```

**APRÈS :**
```typescript
analysisEndDate: payload.config.analysisEndDate
  ? parseUserDateInput(payload.config.analysisEndDate)
  : getTodayAsDateString(),
```

---

## ✅ 5. Les routes HTTP ne changent PAS

**Fichiers :**
- `backend/src/routes/orchestrator-task.ts`
- `backend/src/routes/client-task.ts`

**Pourquoi ?**
Les routes passent juste les valeurs brutes au payload. La validation se fait dans la task.

```typescript
// Reste identique (ligne 40-52)
const payload: OrchestratorTaskPayload = {
  config: {
    dateMin: config.dateMin,  // ✅ Brut, parsé dans la task
    dateMax: config.dateMax,  // ✅ Brut, parsé dans la task
    // ...
  },
};
```

---

## 📝 6. Mettre à jour README.md

**Section "2. Lancer l'orchestrator"**

**Ajouter après ligne 171 :**

```markdown
**Formats de dates acceptés :**
```bash
# Tous équivalents (parsés automatiquement)
curl -d '{"config": {"dateMin": "010125"}}'           # Format court JJMMAA
curl -d '{"config": {"dateMin": "01/01/25"}}'         # Format JJ/MM/AA
curl -d '{"config": {"dateMin": "01/01/2025"}}'       # Format JJ/MM/AAAA
curl -d '{"config": {"dateMin": "2025-01-01"}}'       # Format ISO
```

**Formats invalides (retournent erreur) :**
```bash
curl -d '{"config": {"dateMin": "2025/01/01"}}'   # ❌ Slash inversé
curl -d '{"config": {"dateMin": "25-01-01"}}'     # ❌ Ordre invalide
curl -d '{"config": {"dateMin": "hello"}}'        # ❌ Texte
```
```

---

## ✅ Tests à valider

### Via Dashboard Trigger.dev

**Payload à tester :**
```json
{
  "config": {
    "dateMin": "010125",
    "dateMax": "310125",
    "maxClientsToAnalyze": 5,
    "skipOdooQuoteGeneration": true
  }
}
```

**Résultat attendu :**
- ✅ Run SUCCESS
- Logs : `Inactivity period: 2025-01-01 00:00:00 to 2025-01-31 00:00:00`

### Via HTTP

```bash
curl -X POST http://localhost:3000/api/orchestrator-task \
  -H "Content-Type: application/json" \
  -d '{
    "config": {
      "dateMin": "01/01/25",
      "dateMax": "31/01/25",
      "maxClientsToAnalyze": 5,
      "skipOdooQuoteGeneration": true
    }
  }'
```

**Résultat attendu :**
- ✅ Task triggered
- Dashboard → Run SUCCESS avec dates parsées

### Test erreur

**Dashboard payload :**
```json
{
  "config": {
    "dateMin": "hello world"
  }
}
```

**Résultat attendu :**
- ❌ Run FAILED
- Message : `Format de date invalide: "hello world"`
- Liste des formats acceptés visible

---

## 📦 Résumé des modifications

| Fichier | Action | Lignes |
|---------|--------|--------|
| `package.json` | Ajouter `date-fns` | - |
| `backend/src/utils/date.utils.ts` | Nouvelle fonction `parseUserDateInput()` | +30 lignes |
| `backend/src/trigger/orchestrator.task.ts` | Import + parser dateMin/dateMax/analysisEndDate | Lignes 1, 64-72 |
| `backend/src/trigger/client-proposal.task.ts` | Import + parser analysisEndDate | Lignes 7, 80-82 |
| `README.md` | Documenter formats acceptés | Section Utilisation |

**Routes HTTP :** Aucun changement (passent valeurs brutes)

---

## 🎯 Avantages

✅ **Validation unique** : Un seul endroit (tasks)
✅ **Dashboard protégé** : Formats simples acceptés partout
✅ **Messages clairs** : Erreur explicite si format invalide
✅ **UX améliorée** : "010125" au lieu de "2025-01-01 00:00:00"
✅ **Sécurité** : Validation stricte avant usage

---

## 🔄 Flow de validation

```
Dashboard Trigger.dev
  → Payload: {"config": {"dateMin": "010125"}}
    → orchestrator.task.ts (ligne 64)
      → parseUserDateInput("010125")
        → "2025-01-01 00:00:00" ✅

Route HTTP
  → POST /api/orchestrator-task {"config": {"dateMin": "010125"}}
    → orchestrator-task.ts (route, passe brut)
      → Trigger task avec payload brut
        → orchestrator.task.ts (ligne 64)
          → parseUserDateInput("010125")
            → "2025-01-01 00:00:00" ✅
```

**Même validation pour les deux chemins !**

---

**Durée estimée : 20 minutes**
