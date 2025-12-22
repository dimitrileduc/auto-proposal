# Analyst Instructions - LLM Prompt Optimization Analysis

**Purpose:** Analyze the current LLM prompt effectiveness and identify improvements
**Analyst Role:** Professional Supply Chain & LLM Expert
**Date:** December 22, 2025

---

## Context: Auto-Proposal System

### What is This System?

The Auto-Proposal system automatically predicts stock replenishment needs for B2B customers using LLM analysis. It:

1. **Analyzes order history** → Identifies patterns
2. **Predicts stockout risk** → 30-day horizon
3. **Recommends quantities** → Based on median + adjustments
4. **Generates orders** → Automated B2B proposals

### Key Business Metrics

**Testing Dataset:** 48 clients across multiple regions
**Products Analyzed:** Thousands across multiple categories
**Prediction Types:**
- True Positives (TP): Correctly predicted + correct quantity
- False Positives (FP): Predicted but customer didn't order
- False Negatives (FN): Didn't predict but customer ordered

---

## Data Sources

### 1. **Consolidated Client Predictions**
File: `predictions-v2-all-clients.json`

Contains:
- 48 complete client analyses
- Each includes: product history, LLM analysis, predictions, actual vs predicted
- Metrics: precision, recall, F1-score, quantity errors (MAE, WMAPE, MAPE)

### 2. **Aggregated Metrics Report**
File: `aggregated-v2.json`

Contains:
- **Global metrics:** Total TP/FP/FN across all 48 clients
- **By confidence level:** Low (1 order), Medium (2-4), High (5+)
- **By product:** Precision, Recall, F1-Score
- **By quantity:** MAE (Mean Absolute Error), WMAPE, MAPE
- **Per-client statistics:** Mean, median, stdDev across clients

### 3. **Current Prompt**
File: `01-CURRENT-PROMPT.md`

The LLM instructions used for all predictions.

---

## Analysis Framework

### Part 1: Prompt Section Analysis

For EACH major section of the prompt (Decision 1, Decision 2, Adjustments), analyze:

**A) Clarity & Ambiguity**
- Is the instruction clear or could it be misinterpreted?
- Are thresholds (30 days, 45 days, 60 days, 2x median) well-justified?
- Are examples helpful or confusing?

**B) Correlation to Results**
- Do the metrics show this section works well?
  - E.g., Does "Decision 1" correlate with low False Positive rate?
  - Does "Small quantities adjustment" improve MAE for 1-2u products?
- Or are there gaps/contradictions?

**C) Impact Assessment**
- **Positive:** What's working well? Evidence from metrics?
- **Negative:** What's failing? Where are FP/FN concentrated?
- **Neutral:** What could be better?

**D) Recommendation**
- Should this section be clarified?
- Removed? Expanded?
- Examples?

### Part 2: Pattern Recognition

Using the aggregated metrics and client predictions, identify:

**A) Systematic Failures**
- Are certain product types consistently wrong?
  - Low vs Medium vs High confidence?
  - Specific categories?
- Are certain client types problematic?
- Seasonal patterns?

**B) Edge Cases**
- When does the prompt work best?
- When does it fail worst?
- Are there data conditions that trigger failures?

**C) Data Quality Issues**
- Are there products with too few historical orders?
- Extreme outliers affecting median calculation?
- Gaps in history causing false conclusions?

**D) Model Behavior Observations**
- Does the model understand B2B context?
- Is it conservative (underpredicting) or aggressive?
- Confidence calibration: Is "high confidence" actually high quality?

### Part 3: Improvement Recommendations

Based on findings, propose:

**Priority 1: Critical Issues**
- What MUST be fixed to improve core metrics?
- Example: If FP rate is 40%, why? How to fix?

**Priority 2: High-Impact Improvements**
- What changes would improve precision/recall/F1 significantly?
- Backed by evidence from data?

**Priority 3: Refinements**
- Small clarifications that could help?
- Better examples?
- Threshold adjustments?

---

## Key Metrics Reference

### When Analyzing Results

**Precision** = TP / (TP + FP)
- How many predicted orders were actually needed?
- High precision = fewer false alarms

**Recall** = TP / (TP + FN)
- How many actual orders did we catch?
- High recall = fewer surprises

**F1-Score** = 2 × (Precision × Recall) / (Precision + Recall)
- Balance between precision and recall
- Ideal for decision-making

**Quantity Errors:**
- **MAE** (Mean Absolute Error): Average | predicted - actual |
- **WMAPE** (Weighted Mean Absolute Percentage Error): MAE as % of demand
- **MAPE** (Mean Absolute Percentage Error): Per-order % error
- **BIAS**: Systematic over/under-prediction

### Confidence Levels in Data

- **Low:** 1 order in historical window → very uncertain
- **Medium:** 2-4 orders → moderate data
- **High:** 5+ orders → strong signal

---

## Analysis Deliverable

Please provide:

1. **Executive Summary (1 page)**
   - Current system performance (key metrics)
   - Top 3 issues identified
   - Top 3 improvements recommended

2. **Detailed Findings (per prompt section)**
   - What's working, what's not
   - Evidence from data
   - Why each adjustment helps or hurts

3. **Pattern Analysis**
   - Systematic failures: which products/clients?
   - Edge cases: when does it work best/worst?
   - Data quality observations

4. **Concrete Recommendations**
   - Rewrite specific prompt sections
   - Add/remove adjustments
   - New thresholds or logic
   - With justification from metrics

5. **Implementation Priority**
   - Quick wins vs major changes
   - Expected impact on metrics
   - Risk assessment

---

## Questions to Answer

While analyzing, please address:

1. **Decision 1 (Risk Detection):**
   - Are 30/45/60 day thresholds optimal?
   - Is the B2B exception too broad/narrow?
   - How many FN are from threshold miscalibration?

2. **Decision 2 (Quantity Prediction):**
   - Does recent weighting help or hurt?
   - Are the 5 adjustments all necessary?
   - Which adjustment causes most errors?

3. **Seasonality:**
   - How many products show real seasonality?
   - Does the "+50% volume" rule work?
   - Should N-1 be used more aggressively?

4. **Small Quantities:**
   - Does the 1-2u special case work?
   - Are we underpredicting or overpredicting?
   - Better approach?

5. **Overall:**
   - Is the prompt too complex?
   - Missing context (lead times, MOQ, pricing)?
   - Should different model be used for certain products?

---

## Constraints

- Base all recommendations on data, not intuition
- Consider implementation complexity vs benefit
- Don't suggest collecting new data types (work with what we have)
- Focus on prompt improvements, not system architecture

---

## Files Provided

```
analysis-folder/
├── 01-CURRENT-PROMPT.md              ← LLM system prompt
├── 02-ANALYST-INSTRUCTIONS.md        ← This file
├── predictions-v2-all-clients.json   ← 48 clients, detailed predictions
└── aggregated-v2.json                ← Global metrics + per-client stats
```

Start with aggregated metrics for overview, then dive into client predictions for details.

