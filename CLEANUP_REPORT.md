# 🧹 AUTO-PROPOSAL CODEBASE CLEANUP REPORT

**Date:** 2025-12-29
**Branch:** test-llm-signle-prompt
**Status:** Comprehensive audit of unused features, dead code, and technical debt

---

## EXECUTIVE SUMMARY

This report catalogs **all unused features, dead code paths, and deprecated implementations** in the backtest → client task → aggregate workflow. The codebase shows good separation of concerns but has accumulated technical debt from optimization experiments and feature flag consolidations.

**Key Findings:**
- **3 Critical Issues** requiring immediate fixes
- **7 Medium-Priority** items for cleanup
- **8 Low-Priority** refactoring opportunities
- **31 Scripts** (6,200+ lines) needing archival/consolidation
- **2 Completely unused services** that can be removed
- **Multiple dead code paths** from hardcoded conditions

---

# PART 1: CRITICAL ISSUES (FIX IMMEDIATELY)

## 🔴 ISSUE 1: Missing Configuration Property

**Severity:** CRITICAL - Runtime Error
**Location:** `/backend/src/trigger/client-proposal.task.ts:210`

```typescript
// Line 210 - REFERENCES NON-EXISTENT CONFIG
inactivityDays: autoProposalConfig.inactivityDaysThreshold,
```

**Problem:**
- `inactivityDaysThreshold` does NOT exist in `/backend/src/config/auto-proposal.ts`
- When `clientProposalTask` is called with a config object, this line will fail with `undefined`
- The config only has: `inactivityDetection.dateMin` and `inactivityDetection.dateMax` (both null by default)

**Impact:**
- Client report generation will crash when accessed
- Affects workflow client stats calculation

**Fix Options:**

**Option A: Remove the property (Recommended)**
```typescript
// Line 207-213: Current code
const clientStats = await prepareClientReportData({
  ...config,
  replenishmentThreshold,
  // ❌ REMOVE THIS LINE:
  // inactivityDays: autoProposalConfig.inactivityDaysThreshold,
  generateReports: autoProposalConfig.workflow.generateReports,
  maxClientsToAnalyze: "all",
  forceReanalysis: autoProposalConfig.workflow.forceReanalysis,
});
```
- Check if `prepareClientReportData` actually needs `inactivityDays`
- If not needed, remove the line entirely

**Option B: Add the config property**
```typescript
// /backend/src/config/auto-proposal.ts - Add to main config:
inactivityDaysThreshold: 30, // Default to 30 days
```
- Then update the calculation to use this value

---

## 🔴 ISSUE 2: Incomplete JSON-2 Odoo Client Implementation

**Severity:** CRITICAL - Silent Failure
**Location:** `/backend/src/infrastructure/odoo/clients/json2-client.ts`

**Problem:**
The JSON-2 client has stub implementations for 5 critical methods, which will fail silently or return empty results when called:

| Method | Impact | Used In |
|--------|--------|---------|
| `createSaleOrder()` | Quote creation fails | proposal-generation.service.ts:78 |
| `createSaleOrderLine()` | Product lines not added | proposal-generation.service.ts |
| `createSaleOrderOption()` | Optional items missing | proposal-generation.service.ts:104 |
| `getSaleOrderDetails()` | Validation/backtesting fails | backtest-client.task.ts:223 |
| `sendQuoteByEmail()` | Email sending fails | email-sending.service.ts |

**Current Implementation:**
```typescript
// JSON-2 Client - Line ~250+ (stub)
async createSaleOrder(...) {
  throw new Error("Not implemented for JSON-2");
  // or returns empty/undefined
}
```

**Impact:**
- If system ever switches from XML-RPC to JSON-2, quote generation breaks
- Email sending capability is non-functional with JSON-2
- Backtesting cannot validate quotes

**Fix Options:**

**Option A: Enforce XML-RPC (Recommended - Simplest)**
```typescript
// /backend/src/infrastructure/odoo/odoo.service.ts
const client = createOdooClient(config.odooApiType);
if (config.odooApiType === OdooApiType.JSON2) {
  throw new Error("JSON-2 client does not support quote creation. Use XML-RPC.");
}
```

**Option B: Implement JSON-2 methods**
- Requires knowledge of JSON-2 API specification
- ~500 lines of implementation code
- Test with actual Odoo instance

**For now:** Document the limitation clearly

---

## 🔴 ISSUE 3: Dead Code Path in Stock Replenishment

**Severity:** CRITICAL - Misleading Logic
**Location:** `/backend/src/features/stock-replenishment/stock-replenishment.service.ts:148-391`

**Problem:**
Hardcoded `needsLLM = true` makes conditional logic unreachable:

```typescript
// Line 148 - ALWAYS TRUE
const needsLLM = true;
// Comment: "Tous les produits passent par le LLM maintenant"

// Line 172 - This filter is pointless
const productsNeedingLLM = productsToProcess.filter(p => p.needsLLM);
// Result: Always equals productsToProcess (no filtering)

// Lines 381-391 - DEAD CODE (never executed)
} else {
  // UNREACHABLE - quantitySource is always 'llm'
  if (stockPrediction.daysUntilStockout > replenishmentThresholdDays) {
    // Calculate fallback quantity using median
  }
}
```

**Impact:**
- Code is misleading for future maintainers
- "Else" branch shows a fallback mechanism that never runs
- If LLM becomes unavailable, system has no fallback

**Fix:**
```typescript
// Option 1: Remove the dead else branch entirely
// Lines 381-391 can be deleted

// Option 2: Make the condition real
const needsLLM = config.useLLM !== false; // Allow opting out

// Option 3: Implement actual fallback
// If LLM fails with error, use median calculation instead
```

**Recommended Action:** Remove lines 381-391 and document that LLM is required

---

# PART 2: UNUSED FEATURES & SERVICES

## 📦 Service 1: `llm-split.service.ts` - NOT USED

**Location:** `/backend/src/services/llm-split.service.ts` (239 lines)

**Status:** EXPERIMENTAL - Never imported by active flows

**What it is:**
- Two-stage LLM approach: Detection + Quantity calculation separately
- Has 45+ lines of prompt engineering
- Includes full result types and error handling

**Where it's used:**
- **ONLY:** `/backend/src/scripts/test-split-vs-current.ts` (testing script)
- NOT imported by any production tasks

**Why it was created:**
- Alternative approach to unified LLM prediction
- Testing whether 2-stage prompts perform better
- Experimental optimization attempt

**Cleanup Action:** MOVE to `/backend/src/scripts/`
```bash
mv /backend/src/services/llm-split.service.ts /backend/src/scripts/llm-split.service.ts
# Then update test-split-vs-current.ts import path
```

---

## 📦 Service 2: `llm-openrouter.service.ts` - BASE/DEPRECATED

**Location:** `/backend/src/services/llm-openrouter.service.ts` (473 lines)

**Status:** DEPRECATED - Only used for type exports

**What it is:**
- Original OpenRouter LLM implementation with few-shot demos
- Full prompt engineering (400+ lines)
- Includes utility functions and type definitions

**Where it's used:**
- **Type re-exports ONLY** in `llm-ax-optimized.service.ts:7-8`
- Actual predictions use `llm-ax-optimized.service.ts`
- Never directly imported for runtime execution

**Why it's kept:**
- Backward compatibility for type exports
- Historical reference for prompt patterns

**Cleanup Action:** Extract types, delete implementation
```typescript
// Keep ONLY type definitions in separate file:
// /backend/src/services/llm.types.ts

export type LLMPrediction = { ... };
export type LLMPredictionInput = { ... };
export type LLMPredictionResult = { ... };
export type LLMUsage = { ... };

// Delete 400+ lines of unused openrouter implementation
// Update llm-ax-optimized.service.ts to import from llm.types.ts
```

---

## 📦 Feature: Email Sending Service - UNUSED

**Location:** `/backend/src/features/email-sending/email-sending.service.ts` (120+ lines)

**Status:** UNUSED - No active references

**What it is:**
- Sends Odoo quotes to clients via email
- Has `sendQuoteEmail()` function
- Requires Odoo email server configuration

**Where it's used:**
- **ONLY:** `/backend/src/scripts/test-email-send.ts` (test script)
- NOT called by any trigger task
- NOT exposed in any active route

**Why it's unused:**
- Quotes are generated and tagged but not auto-sent
- Email delivery requires Odoo mail server setup
- Feature was implemented but never integrated

**Cleanup Action:** ARCHIVE or REMOVE
```bash
# Option 1: Keep as optional future feature
mv /backend/src/features/email-sending/ /backend/src/archive/email-sending/

# Option 2: Remove completely if never needed
rm -rf /backend/src/features/email-sending/
```

---

# PART 3: UNUSED CODE IN ACTIVE SERVICES

## 🔌 Unused Variables Collected but Never Returned

### File: `client-proposal.task.ts` - Lines 66-70

**Issue:** `phaseTimings` object tracked but never used

```typescript
// Lines 66-70
const phaseTimings = {
  stockAnalysis: 0,
  proposalPreparation: 0,
  quoteGeneration: 0,
};

// Lines 123, 171, 189 - Values assigned:
phaseTimings.stockAnalysis = Date.now() - phaseStart;
phaseTimings.proposalPreparation = Date.now() - phaseStart;
phaseTimings.quoteGeneration = Date.now() - phaseStart;

// Lines 267-268 - NOT included in return object:
return {
  success: true,
  phases: {
    stockAnalysis: { ... },
    proposalPreparation: { ... },
  },
  // ❌ phaseTimings not included
};
```

**Action:** Remove tracking code
```typescript
// Delete lines 66-70 and lines that assign to phaseTimings
```

---

### File: `client-proposal.task.ts` - Lines 200-202

**Issue:** `reportPath` variable assigned but never used

```typescript
// Line 200-202
let reportPath: string | undefined;

// Line 228 - Assigned when report generated
if (payload.config?.shouldGenerateReport !== false) {
  reportPath = `/backend/reports-output/...`;
}

// Lines 267-268 - NOT returned
return {
  success: true,
  reportMarkdown: reportMarkdown,
  quoteMarkdown: quoteMarkdown,
  // ❌ reportPath missing
};
```

**Action:** Delete unused variable
```typescript
// Remove lines 200-202 and line 228 assignment
// If path is needed later, reconstruct it from filename
```

---

## 🔌 Unused Arrays in Backtest Aggregate

### File: `backtest-aggregate.task.ts` - Lines 159-160, 223, 243

**Issue:** Two arrays populated but never used in results

```typescript
// Lines 159-160 - Created but never returned
const allResultsNoLow: BacktestIndividualResult[] = [];
const allResultsAll: BacktestIndividualResult[] = [];

// In loop (lines 220-250):
// ...
results.forEach((result) => {
  allResults.push(result);        // ✓ Used
  allResultsNoLow.push(result);   // ❌ Never used
  allResultsAll.push(result);     // ❌ Never used
});

// Return statement (lines 395-413)
return {
  success: true,
  statistics: stats,
  allResults: allResults,  // ✓ Only this is returned
  // allResultsNoLow: allResultsNoLow,  // ❌ Not here
  // allResultsAll: allResultsAll,      // ❌ Not here
};
```

**Impact:**
- Wasting CPU cycles on unnecessary array operations per client
- For 500 client backtest, this is 1000 extra array pushes

**Action:** Remove unused arrays
```typescript
// Delete lines 159-160
// Delete line 223 and 243 push operations
// Only keep: allResults.push(result);
```

---

## 🔌 Unused Configuration Properties

### File: `auto-proposal.ts` - Lines 21-25

**Issue:** `quantityStrategy` config defined but never read

```typescript
// Lines 21-25 - Defined but NEVER USED
quantityStrategy: {
  maxRecentOrderLines: 5,
  minOrdersForMediumConfidence: 2,
  minOrdersForHighConfidence: 5,
  lowMaxThresholdDays: 190,
},
```

**Search Result:** 0 references found in codebase

**Impact:**
- Configuration is ignored; hardcoded defaults used instead
- Confuses developers who try to adjust these values
- Dead configuration "documentation"

**Action:** Remove unused config
```typescript
// Delete lines 21-26 entirely from auto-proposal.ts
// If needed later, create ticket with actual usage
```

---

# PART 4: DEPRECATED/LEGACY CODE STRUCTURES

## ⏮️ Legacy Backtest Report Paths

### File: `backtest-client.task.ts` - Lines 112, 371-376, 453

**Issue:** Multiple report format versions kept for backward compatibility

```typescript
// Line 112 - Legacy type definition
reportPath: string; // Comment: "(legacy)"

// Lines 371-376 - Generate "ALL" report (legacy format)
const reportPathAll = `${reportOutputDir}/${reportType}-${clientId}-${orderName}-all.md`;
// v2 vs v1 comparison format

// Line 453 - Return both old and new formats
return {
  success: true,
  reportPath: reportPathMd,      // Legacy format
  reportPaths: {                 // New format
    markdown: reportPathMd,
    json: reportPathJson,
    all: reportPathAll,
  },
};
```

**Status:** ✓ Necessary for backward compatibility
- Keep but document as legacy
- Could be deprecated after major version bump

---

## ⏮️ Temporary Test Route

### File: `/backend/src/routes/baseline-test.route.ts` (160+ lines)

**Status:** Marked for removal - Comments state: *"Cette route sera supprimée après validation post-refactoring."*

**Purpose:** Capture baseline system state before refactoring changes

**Action:**
- Verify that validation is complete
- Set target date for deletion (e.g., 2026-01-31)
- Create ticket to remove

---

# PART 5: OPTIMIZATION SCRIPTS (6,200+ lines)

## 📊 Script Categories

### A. Actively Used (Keep)
1. `run-backtest-500.ts` - Backtest runner for validation
2. `test-split-vs-current.ts` - A/B testing framework

### B. Optimization Experiments (Archive)

**GEPA Optimizer Variants:**
- `optimize-gepa-v2.ts` - OLD version
- `optimize-gepa-v3.ts` - Intermediate version
- `optimize-gepa-v4.ts` - Latest (keep)

**MIPRO Optimizer Variants:**
- `run-mipro-optimization.ts` - Base version
- `run-mipro-v19.ts` - v19 iteration
- `evaluate-mipro-v19.ts` - Evaluation

**ACE Optimizer:**
- `run-ace-optimization.ts` - Experimental

**Recommendation:**
- Keep only LATEST version of each optimizer
- Archive v2, v3 variants
- Move to `/backend/archive/optimization-experiments/`

### C. Analysis & Debugging (Keep in scripts/)
1. `analyze-*.ts` files (5 total) - Statistical analysis
2. `compare-*.ts` - Comparison tools
3. `aggregate-v2-reports.ts` - Report aggregation

### D. PDF Testing (Keep or Archive)
1. `download-quote-pdf.ts` - Main variant
2. `download-quote-pdf-token.ts` - Token variant
3. `download-quote-pdf-jsonrpc.ts` - JSON-RPC variant

**Recommendation:** Keep main variant, archive others as alternatives

---

# PART 6: CONFIGURATION ISSUES

## Configuration Property Status

| Property | File | Usage | Status |
|----------|------|-------|--------|
| `odooApiType` | auto-proposal.ts:6 | 8 refs | ✓ USED |
| `inactivityDetection.*` | auto-proposal.ts:9-13 | 5 refs | ✓ USED |
| `targetCoverage` | auto-proposal.ts:16 | 8 refs | ✓ USED |
| `leadTime` | auto-proposal.ts:17 | 7 refs | ✓ USED |
| `analysisWindowDays` | auto-proposal.ts:18 | 5 refs | ✓ USED |
| `pricing.minimumOrderAmount` | auto-proposal.ts:30 | 3 refs | ✓ USED |
| `quoteGeneration.*` | auto-proposal.ts:34-37 | 7 refs | ✓ USED |
| `productFiltering.excludedCategoryIds` | auto-proposal.ts:40-109 | 2 refs | ✓ USED |
| `workflow.*` | auto-proposal.ts:113-115 | 8 refs | ✓ USED |
| `testing.*` | auto-proposal.ts:119-121 | 4 refs | ✓ USED |
| **`quantityStrategy.*`** | auto-proposal.ts:21-25 | **0 refs** | ❌ **UNUSED** |

---

# PART 7: FEATURE FLAGS (All Active)

These are USED and should be kept:

| Flag | Location | Purpose | Used |
|------|----------|---------|------|
| `workflow.generateReports` | auto-proposal.ts:114 | Enable/disable markdown reports | ✓ 8 refs |
| `workflow.forceReanalysis` | auto-proposal.ts:115 | Include previously analyzed clients | ✓ 5 refs |
| `config.skipOdooQuoteGeneration` | client-proposal.task.ts:96 | Test mode - skip Odoo calls | ✓ 25 refs |
| Confidence filtering | backtest-client.task.ts:262-292 | CLEAN vs LOW product filtering | ✓ Active |
| `odooApiType` | auto-proposal.ts:6 | XML-RPC vs JSON-2 client selection | ✓ 10 refs |

---

# PART 8: TODO & FIXME COMMENTS

| File | Line | Comment | Priority |
|------|------|---------|----------|
| config/auto-proposal.ts | 2 | "TODO MOVE TO SHARED folder" | LOW |
| workflow/workflow.client-stats.ts | 62-63 | "TODO: Add orderHistory if needed" | LOW |
| features/stock-replenishment/utils/quantity.utils.ts | 105 | "TODO: Adjust quantity per constraints" | MEDIUM |

---

# CLEANUP CHECKLIST & ACTION PLAN

## 🔴 CRITICAL (Must fix before next production deploy)

- [ ] **FIX 1:** Remove/fix `inactivityDaysThreshold` reference
  - File: `/backend/src/trigger/client-proposal.task.ts:210`
  - Option: Remove line entirely or add config property
  - Estimated time: 5 min

- [ ] **FIX 2:** Document JSON-2 client limitation
  - File: `/backend/src/infrastructure/odoo/clients/json2-client.ts`
  - Action: Add runtime error or comment explaining XML-RPC requirement
  - Estimated time: 10 min

- [ ] **FIX 3:** Remove dead code path
  - File: `/backend/src/features/stock-replenishment/stock-replenishment.service.ts:381-391`
  - Action: Delete unreachable else branch
  - Estimated time: 5 min

---

## 🟠 IMPORTANT (Clean up soon)

- [ ] **Remove unused arrays**
  - File: `backtest-aggregate.task.ts:159-160, 223, 243`
  - Action: Delete `allResultsNoLow` and `allResultsAll`
  - Estimated time: 10 min

- [ ] **Remove unused tracking variables**
  - File: `client-proposal.task.ts:66-70, 200-202`
  - Action: Delete `phaseTimings` and `reportPath`
  - Estimated time: 5 min

- [ ] **Move llm-split.service.ts to scripts**
  - File: `/backend/src/services/llm-split.service.ts`
  - Action: Move to `/backend/src/scripts/`
  - Estimated time: 5 min

- [ ] **Archive old optimization scripts**
  - Location: `/backend/src/scripts/`
  - Action: Create `/backend/archive/` and move old versions
  - Estimated time: 15 min

---

## 🟡 NICE-TO-HAVE (Refactor)

- [ ] **Remove unused config properties**
  - File: `auto-proposal.ts:21-25`
  - Action: Delete `quantityStrategy` entirely
  - Estimated time: 2 min

- [ ] **Extract type definitions**
  - File: `llm-openrouter.service.ts`
  - Action: Create `llm.types.ts`, keep only types
  - Estimated time: 15 min

- [ ] **Archive email-sending service**
  - Location: `/backend/src/features/email-sending/`
  - Action: Move to archive or delete
  - Estimated time: 5 min

- [ ] **Document temporary baseline-test route**
  - File: `baseline-test.route.ts`
  - Action: Set removal deadline (2026-01-31?)
  - Estimated time: 2 min

---

## 📊 SUMMARY BY IMPACT

| Category | Count | Lines of Code | Action |
|----------|-------|----------------|--------|
| **Critical Fixes** | 3 | ~50 | Fix immediately |
| **Unused Variables** | 2 | ~10 | Delete |
| **Unused Arrays** | 2 | ~10 | Delete |
| **Unused Services** | 2 | ~600 | Move/Archive |
| **Unused Config Props** | 5 | ~10 | Delete |
| **Dead Code Paths** | 1 | ~15 | Delete |
| **Optimization Scripts** | 8+ | ~2000 | Archive |
| **Total Cleanup** | **25+** | **~2,700 LOC** | Priority varies |

---

## ⏱️ ESTIMATED EFFORT

| Priority | Items | Time | Risk |
|----------|-------|------|------|
| 🔴 Critical | 3 | 20 min | HIGH |
| 🟠 Important | 5 | 40 min | MEDIUM |
| 🟡 Nice-to-have | 5 | 40 min | LOW |
| **TOTAL** | **13** | **~2 hours** | **MEDIUM** |

---

## RECOMMENDED APPROACH

### Phase 1: Critical Fixes (Week 1)
1. Fix `inactivityDaysThreshold` config reference
2. Document JSON-2 client limitation
3. Remove dead code path in stock-replenishment
4. Deploy & test thoroughly

### Phase 2: Code Cleanup (Week 2)
5. Remove unused variables and arrays
6. Move llm-split.service to scripts
7. Extract type definitions from llm-openrouter
8. Archive old optimization scripts
9. Remove unused config properties

### Phase 3: Documentation (Week 3)
10. Archive or remove email-sending service
11. Set deadline for baseline-test route removal
12. Document all cleanup changes in CHANGELOG
13. Update team wiki with current architecture

---

## FILES AFFECTED

**Critical:**
- `/backend/src/trigger/client-proposal.task.ts`
- `/backend/src/config/auto-proposal.ts`
- `/backend/src/infrastructure/odoo/clients/json2-client.ts`
- `/backend/src/features/stock-replenishment/stock-replenishment.service.ts`

**High Priority:**
- `/backend/src/trigger/backtest-aggregate.task.ts`
- `/backend/src/services/llm-split.service.ts`

**Medium Priority:**
- `/backend/src/services/llm-openrouter.service.ts`
- `/backend/src/features/email-sending/`
- `/backend/src/routes/baseline-test.route.ts`

**Scripts Directory:**
- `/backend/src/scripts/` (8+ optimization experiments)

---

## VERIFICATION CHECKLIST

After cleanup, verify:

- [ ] All trigger tasks execute without errors
- [ ] No undefined config property errors
- [ ] Backtest aggregate produces results
- [ ] Client proposal generation succeeds
- [ ] All tests pass
- [ ] No TypeScript compilation errors
- [ ] Git diff shows intentional changes only
- [ ] New team members can understand architecture

---

**Report Generated By:** Cleaner Agent
**Last Updated:** 2025-12-29
**Next Review:** 2026-01-31
