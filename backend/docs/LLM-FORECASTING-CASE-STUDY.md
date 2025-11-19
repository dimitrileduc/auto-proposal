# Forecasting Shipments with LLMs - Case Study

**Source**: Medium - IRIS by Argon & Co
**Author**: Nguyen Thanh LAI
**Date**: Feb 5, 2025
**Model Used**: Claude 3.5 Sonnet (2024-10-22)

---

## Executive Summary

When traditional methods fall short, Large Language Models (LLMs) can offer a viable alternative for time series forecasting.

**Key Results:**
- **WAPE: 9.0%** (final model with post-processing)
- **WAPE: 9.9%** (LLM alone)
- **Bias: -1.5%** (final model)
- Outperforms LightGBM (15.2% WAPE) and seasonal naive (15.3% WAPE)

---

## Context of the Case Study

### Business Problem

Client operates an online retail business where customer orders are processed and shipped from warehouses.

**Objective**: Forecast daily shipping volumes for the upcoming weeks (next 4 weeks), with separate predictions for different packing lines (large items, one-item orders, etc.).

**Goal**: Improve resource planning in warehouses by securing exactly the number of employees needed on each line, for each day, to ship all forecasted volumes in time.

### Data Characteristics

**Original data format:**
- Most transactions follow a 24-hour cycle
- Customers expect either same-day or next-day delivery

**Seasonal patterns:**
1. **Weekly seasonality**: Mondays are usually the busiest (catching up from Sunday orders)
2. **Yearly seasonality**: Influenced by holidays and major events (back-to-school season, Black Friday, etc.)

**Additional complexity:**
- Pre-orders for highly anticipated products
- Temporary trends (current year sales can be lower/higher than last year for several weeks)

---

## Limitations of Traditional Approaches

### Approaches Tested

1. **Statistical methods**: Holt-Winters, ARIMA, seasonal naive
2. **Machine Learning models**: LightGBM, XGBoost with heavy feature engineering
3. **Foundational model**: Nixtla's TimeGPT with fine-tuning

### Why Tree-Based Models Failed

**Problem 1: Temporary Trends**
- Tree-based models work by splitting data into sub-segments
- Use average value of historical data in each segment to predict future
- **Cannot "learn" trends** - only predict based on historical averages
- Cannot predict values higher/lower than ones seen in dataset

Example: Current year sales lower than last year only in January

**Problem 2: Incomplete Holiday Impact Learning**
- Only 2022+ data available (COVID excluded 2020-2021)
- Impact of bank holiday depends on day of week
- Dataset doesn't cover all situations (holidays on all days × all periods)
- Coupled with trends, makes accurate modeling very challenging

### LightGBM Performance Issues

**Example period (Dec 2023 - Feb 2024):**
- WAPE: 15.2%
- Bias: 0.2%
- Under-forecasted Dec 18, 2023 peak by 18%
- Strange high forecast for Jan 9, 2024

**Seasonal naive (take last year's figures):**
- WAPE: 15.3%
- Bias: 4.9%
- Better for short period, but 5% worse WAPE over 1 year

**The Core Question:**
> "Why do we need to work so hard to make a ML model understand these relationships? Isn't the primary purpose of ML algorithms to reduce our workload?"

---

## LLM Approach

### Why LLMs?

**Fundamental ML workflow:**
1. Identifying patterns in the data
2. Building a model that captures these relationships

**LLM advantage:**
> LLM models inherently understand many patterns present in our dataset, such as seasonality, promotional effects, trends, and inventory disruptions.

### Data Format Provided to LLM

**Time window:** 3 weeks of data
- LLMs confuse values when presented with >3 weeks
- 3 weeks sufficient for weekly + yearly seasonality detection
- Include previous year's sales figures for yearly seasonality
- Include significant events

**Data structure (simplified example):**
```
Date | Day | Shipments | Last Year Shipments | Events | Preorders | Notes
-----|-----|-----------|---------------------|--------|-----------|-------
...  | Mon | 1000      | 950                 | -      | 50        | -
...  | Tue | 800       | 750                 | -      | 40        | -
```

### Models Tested

1. **Claude 3.5 Sonnet (2024-10-22)** ✅ Selected
2. GPT-4 (2024-11-20)
3. Gemini 1.5 Pro

**Winner**: Claude Sonnet - only LLM capable of consistently achieving good performance

### Reasoning Steps Provided to LLM

1. **Remove impact of previous year's events and significant preorders**
2. **Adjust for current year's events**
3. **Apply relevant trends to current year's forecast**

**Detailed instructions provided for:**
- Handling holidays based on day of week
- Managing large preorders

### Preorder Handling

**Method:**
1. Detect lines with significant preorders from previous year (mathematical criterion)
2. Add "last year big preorders" comment to identified lines
3. Allow LLM to self-correct historical data by analyzing weekly seasonality patterns

### Trend Adjustment - The Key Innovation

**Problem:** LLMs aggressively extrapolate trends by comparing last week vs previous year

**Solution:** Conservative approach - only apply trend when clear evidence of continuation

**Discovery:**
- Analyze orders by **order date** (not shipment date)
- Exclude orders where gap between order/shipment > 10 days (remove unusual preorders)
- Order-date-based volumes show **much more stable trend patterns**

**Implementation:**
- Compare filtered orders (order dates) between current and previous year
- Add this comparison as a column in data provided to LLM
- LLM deduces appropriate trend ratios to apply to forecast

### Post-Processing

**Adjustment:** Account for difference between current year and last year preorders

**Why:** Known preorders for following week (available through Wednesday) typically <5% of total shipments

---

## Results

### Performance Metrics (1-year cross-validation)

| Model | WAPE | Bias | Notes |
|-------|------|------|-------|
| **LLM Final (Claude 3.5 + post-process)** | **9.0%** | **-1.5%** | ✅ Best |
| LLM Claude 3.5 (no post-process) | 9.9% | -0.4% | Very good |
| LLM short prompts | 10.2% | N/A | Occasional hallucinations |
| LightGBM (heavy feature eng.) | 15.2% | 0.2% | Struggles with trends |
| Seasonal Naive | ~20% | 4.9% | Simple baseline |

### Improvements

- **Precise prompts:** +0.3% WAPE improvement (vs short prompts)
- **Post-processing:** +0.8% WAPE improvement

### Qualitative Performance

✅ Successfully captures temporary trends (Nov 2023, Jan 2024)
✅ Handles holiday periods effectively
✅ Adapts to distribution drift better than ML models

---

## Key Learnings

### 1. Development Process

**Traditional ML:**
- 50% time on feature engineering
- Complex to maintain
- Hard to adapt to drift

**LLM approach:**
- More time on data analysis (subject matter expert perspective)
- Focus on prompt engineering
- Simpler code, easier to maintain
- Anyone can understand by reading prompts
- **"Precise control" over model behavior**

### 2. Data Leakage Considerations

**This case: No leakage risk**
- Client data not on internet
- No client names, sectors, or product info shared with LLM
- Company-specific shocks (inflation, energy crisis) vary across sector

**Other cases: Evaluate carefully**
- Public companies (car manufacturers): LLM knows sales figures
- Need data anonymization for such cases

### 3. Handling Data Distribution Drift

**ML models:**
- Need full seasonality period to adapt
- Slow to adjust

**LLM models:**
- Can be quickly modified for immediate changes
- Example: Instruct LLM about peak shift (Monday → Wednesday)
- Develop permanent solution after one seasonal period
- **Relatively easier to adjust than ML models**

### 4. Redefining Overfitting

**New risk:** Over-analyzing patterns
- Instructing LLM to follow patterns that may not persist
- Just to maximize validation period performance

**Solution:** Write prompts reflecting general, sustainable patterns
- Avoid overly specific information
- Focus on patterns likely to continue

### 5. Limitations

**Pattern complexity:**
- If patterns become too numerous/complex
- Data analyst may struggle to:
  - Identify sufficient correlation patterns
  - Translate patterns into effective prompts

**Cost considerations:**
- Cross-validation (1 year): ~$1 per run with Claude 3.5 Sonnet
- Inference: ~$1/year
- **Development phase:** Can scale quickly
  - Example: 20 experiments × 5000 timeseries = **$100k in CV costs**

---

## Future Outlook

### Expected Improvements

1. **Better LLM reasoning capabilities**
2. **Lower usage costs**
3. **New possibilities:**
   - LLMs assist in correlation analysis
   - Automated pattern-to-prompt translation
   - Prompt testing automation

### Historical Context

> "What we've accomplished in this article would have been impossible with GPT 3.5 just two years ago, and is just achievable with one of the frontier LLMs currently available"

---

## Application to Our B2B Inventory Case

### Relevant Insights for Our Use Case

1. ✅ **Claude 3.5 Sonnet works best** for supply chain/inventory forecasting
2. ✅ **Order date vs shipment date** - different perspectives reveal different patterns
3. ✅ **Conservative trend application** - only when clear evidence
4. ✅ **Simple post-processing** can add 0.8% accuracy
5. ⚠️ **Cost matters** - development phase can be expensive

### Key Differences from Our Case

| Their Case | Our Case |
|------------|----------|
| Daily continuous data | Intermittent (every ~45 days) |
| 3 weeks window works | Need full history with dates |
| Temporary trends important | Pattern stability more important |
| WAPE 9% achieved | MAPE 39.9% baseline |

### Prompt Strategy for B2B

**Based on learnings:**
1. Provide 3-5 most recent orders with **dates and intervals**
2. Include previous year comparison (if available)
3. Add client-level context (avg reorder window, pattern type)
4. Give detailed holiday/event handling instructions
5. Emphasize conservative approach (B2B variations are normal)
6. Use post-processing for anomaly detection

### Cost Estimate for Our Use Case

**Scenario:** 189 clients × 10 products/client × monthly forecast

- **Development (20 experiments):** ~$400-800
- **Production (monthly):** ~$50-100/month
- **Cross-validation (1 year):** ~$20-40

**ROI depends on:**
- MAPE improvement > 3-5% to justify cost
- Value of avoiding stockouts
- Operational savings from better planning

---

## Conclusion

This case study demonstrates that **Claude 3.5 Sonnet can outperform traditional ML models** for complex time series forecasting when:

1. Patterns are complex but understandable (seasonality, trends, events)
2. Data has limited history or frequent distribution drift
3. Domain expertise can be encoded into prompts
4. Cost is acceptable relative to accuracy gains

**For our B2B intermittent demand case:** Worth testing on subset of clients (anomaly cases) before full deployment.
