# Auto-Proposal Analysis Folder

**Purpose:** LLM Prompt Optimization Analysis Package
**Date:** December 22, 2025
**Clients Analyzed:** 48
**Total Data Size:** 6.3 MB

---

## Folder Structure

```
analysis-folder/
├── README.md                           ← This file
├── 01-CURRENT-PROMPT.md                ← Current LLM system prompt
├── 02-ANALYST-INSTRUCTIONS.md          ← Analysis framework + questions
├── predictions-v2-all-clients.json    ← All client predictions (6.3 MB)
└── aggregated-v2.json                 ← Global + per-client metrics
```

---

## Files Overview

### 1. **01-CURRENT-PROMPT.md** (3 KB)

The exact prompt given to the LLM for stock replenishment prediction.

**Content:**
- Model & configuration (Google Gemini 3 Flash)
- System instructions (2 decisions to make)
- Input format
- Decision logic with thresholds
- Output JSON schema
- Key metrics reference

**Use:** Understand what instructions the LLM received.

---

### 2. **02-ANALYST-INSTRUCTIONS.md** (7 KB)

Professional analyst guidelines for prompt optimization.

**Content:**
- System context & business goal
- Data source descriptions
- 3-part analysis framework:
  1. Prompt section analysis (clarity, correlation, impact)
  2. Pattern recognition (failures, edge cases, data issues)
  3. Improvement recommendations (priority levels)
- Key metrics reference (Precision, Recall, F1, MAE, WMAPE)
- Specific questions to answer (5 categories)
- Expected deliverables

**Use:** Structured approach to analyze why the prompt works/fails.

---

### 3. **predictions-v2-all-clients.json** (6.3 MB)

Complete prediction data for all 48 clients.

**Structure:**
```json
{
  "metadata": {
    "generatedAt": "2025-12-22",
    "totalClients": 48,
    "fileCount": 48
  },
  "clients": [
    {
      "clientId": 3,
      "clientName": "Client Name",
      "data": {
        "meta": {...},
        "client": {...},
        "metrics": {
          "all": {...},
          "byConfidence": {
            "low": {...},
            "medium": {...},
            "high": {...}
          }
        },
        "truePositives": [...],
        "falsePositives": [...],
        "falseNegatives": [...]
      }
    },
    ...48 clients
  ]
}
```

**For Each Product in TP/FP/FN:**
- `productId`, `productName`
- `confidence`: "low" | "medium" | "high"
- `history`:
  - `orders`: Historical orders (dates, quantities)
  - `statistics`: Mean, median, stdDev, trends
  - `features`: Seasonality, ordering patterns
- `llm`:
  - `input`: recentOrders, lastYearOrders (what LLM actually received)
  - `prediction`: LLM output (quantity, confidence, reasoning)
  - `comparison`: LLM vs median vs reality
- `quantities`: Predicted vs actual
- `errorClassification`: Under/overprediction severity

**Use:** Detailed examination of individual predictions and failure modes.

---

### 4. **aggregated-v2.json** (19 KB)

Summary metrics across all 48 clients.

**Structure:**
```json
{
  "metadata": {...},
  "client": {...},
  "metrics": {
    "all": {
      "counts": {
        "truePositives": X,
        "falsePositives": Y,
        "falseNegatives": Z,
        "total": X+Y+Z
      },
      "productMetrics": {
        "precision": X/(X+Y),
        "recall": X/(X+Z),
        "f1Score": ...
      },
      "quantityMetrics": {
        "mae": mean absolute error,
        "wmape": weighted %,
        "mape": mean %,
        "bias": over/under prediction,
        "rmse": root mean square error
      }
    },
    "byConfidence": {
      "low": {...same structure...},
      "medium": {...same structure...},
      "high": {...same structure...}
    }
  },
  "byClient": {
    "precision": {mean, median, stdDev, min, max},
    "recall": {...},
    "f1Score": {...},
    "mae": {...},
    "wmape": {...},
    "mape": {...},
    "clients": [{clientId, metrics}, ...]
  }
}
```

**Key Insights:**
- Global accuracy (precision, recall, F1)
- Performance by confidence level
- Quantity prediction errors (MAE, WMAPE)
- Per-client comparison (is performance consistent?)

**Use:** Quick overview of system health and identify which confidence levels/metrics are problematic.

---

## Analysis Workflow

### Step 1: Quick Overview
```
Read: 02-ANALYST-INSTRUCTIONS.md → Understand framework
Read: aggregated-v2.json → See overall metrics
Read: 01-CURRENT-PROMPT.md → Understand instructions
```

### Step 2: Identify Problem Areas
```
From aggregated-v2.json:
- Low confidence precision/recall?
- High quantity errors (MAE/WMAPE)?
- Bias (systematic over/under-prediction)?
- High variance across clients?
```

### Step 3: Deep Dive
```
Examine predictions-v2-all-clients.json:
- Find specific products causing FP
- Find specific products causing FN
- Analyze LLM reasoning vs actual patterns
- Look for common failure patterns
```

### Step 4: Correlate to Prompt
```
For each failure pattern:
- Which part of the prompt is relevant?
- Does the prompt instruction work?
- Are the thresholds (30d, 45d, 2x median) right?
- Is the reasoning flawed?
```

### Step 5: Recommend
```
Based on evidence:
- Rewrite problematic sections
- Add/remove/clarify instructions
- Adjust thresholds
- Add examples
```

---

## Key Metrics to Watch

### Primary (Prediction Accuracy)
- **Precision:** % of predicted orders that actually happened
- **Recall:** % of real orders we caught
- **F1-Score:** Balanced measure

### Secondary (Quantity Accuracy)
- **MAE:** Average units off
- **WMAPE:** % error considering demand volume
- **BIAS:** Systematic over (+) or under (-) prediction

### Tertiary (Reliability)
- **By Confidence:** Does "high" actually mean high quality?
- **By Client:** Is system consistent across clients?
- **By Product Type:** Which categories are hard?

---

## Quick Start for Analyst

1. **Read:** `02-ANALYST-INSTRUCTIONS.md` (framework + questions)
2. **Check:** `aggregated-v2.json` (current performance)
3. **Review:** `01-CURRENT-PROMPT.md` (what we're optimizing)
4. **Analyze:** `predictions-v2-all-clients.json` (why it works/fails)
5. **Write:** Analysis report with recommendations

Expected output: 5-10 pages with actionable prompt improvements.

---

## Contact

System Owner: Auto-Proposal Team
Dataset Generated: December 22, 2025
Last Updated: December 22, 2025

