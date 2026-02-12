# Sales Forecasting Model Template

## Overview
This template provides a comprehensive framework for building accurate sales forecasts using multiple methodologies.

---

## 1. Weighted Pipeline Forecast

### Formula
```
Forecast = Σ (Opportunity Value × Stage Probability × Rep Confidence)
```

### Forecast Categories

**Commit** (90-100% confidence)
- High probability of closing this period
- Legal review or final signatures
- Used for board/investor commitments

**Best Case** (70-89% confidence)
- Likely to close this period
- Negotiation or proposal stage
- Includes commit + likely deals

**Pipeline** (20-69% confidence)
- May close this period
- Earlier stages with momentum
- Includes best case + possible deals

**Total Pipeline** (1-100% confidence)
- All open opportunities
- Full pipeline view
- Used for coverage analysis

### Example Forecast Table

| Opportunity | Amount | Stage | Stage % | Rep Confidence | Category | Weighted |
|-------------|--------|-------|---------|----------------|----------|----------|
| Acme Corp | $100K | Negotiation | 60% | 95% | Commit | $57K |
| Beta Inc | $80K | Proposal | 40% | 80% | Best Case | $25.6K |
| Gamma LLC | $60K | Demo | 30% | 50% | Pipeline | $9K |
| Delta Co | $120K | Discovery | 20% | 30% | Pipeline | $7.2K |

**Total Commit:** $57K
**Total Best Case:** $82.6K ($57K + $25.6K)
**Total Pipeline:** $98.8K (all)

---

## 2. Historical Trend Forecast

### Formula
```
Forecast = (Previous Period Revenue × Growth Rate) + Seasonal Adjustment
```

### 12-Month Trend Analysis

| Month | Revenue | MoM Growth | 3M Avg | Seasonality |
|-------|---------|------------|---------|-------------|
| Jan | $850K | -15% | $908K | 0.94 |
| Feb | $920K | 8% | $883K | 1.02 |
| Mar | $1,100K | 20% | $957K | 1.15 |
| Apr | $950K | -14% | $990K | 0.99 |
| May | $1,050K | 11% | $1,033K | 1.10 |
| Jun | $1,200K | 14% | $1,067K | 1.25 |
| Jul | $900K | -25% | $1,050K | 0.94 |
| Aug | $950K | 6% | $1,017K | 0.99 |
| Sep | $1,100K | 16% | $983K | 1.15 |
| Oct | $1,000K | -9% | $1,017K | 1.04 |
| Nov | $1,150K | 15% | $1,083K | 1.20 |
| Dec | $1,300K | 13% | $1,150K | 1.36 |

**YoY Growth:** 18%
**Q4 Seasonality:** 1.2x average

### Forecast Calculation
```
Next Quarter Base = $1,150K (current 3M avg)
Growth Factor = 1.18 (18% YoY growth)
Seasonal Adjustment = 1.05 (Q1 typically +5%)

Q1 Forecast = $1,150K × 1.18 × 1.05 = $1,425K
```

---

## 3. Run Rate Forecast

### Formula
```
Annual Run Rate = (Current Month Revenue × 12)
Quarterly Run Rate = (Current Month Revenue × 3)
```

### Use Cases
- Early-stage companies with limited history
- High-growth environments
- Monthly recurring revenue (MRR) businesses
- Quick approximations

### Example
```
Current Month Revenue: $150K
Monthly Run Rate (ARR): $150K × 12 = $1.8M
Next Quarter Run Rate: $150K × 3 = $450K
```

### Adjustments
- Factor in known deals closing
- Adjust for seasonality
- Account for churn (if SaaS)
- Include expected growth

---

## 4. Sales Capacity Forecast

### Formula
```
Capacity = (# Reps × Average Quota Attainment × Ramp Factor)
```

### Sales Team Capacity Model

| Rep Segment | Count | Avg Quota | Attainment % | Ramp % | Capacity |
|-------------|-------|-----------|--------------|---------|----------|
| Tenured Reps | 10 | $100K/mo | 95% | 100% | $950K |
| Mid-tenure | 5 | $100K/mo | 80% | 100% | $400K |
| Ramping Reps | 3 | $100K/mo | 40% | 50% | $60K |
| New Hires | 2 | $100K/mo | 10% | 25% | $5K |
| **Total** | **20** | | | | **$1,415K** |

### Ramp Curve (New Rep)
- Month 1-2: 10% of quota (training)
- Month 3-4: 30% of quota (first deals)
- Month 5-6: 60% of quota (building pipeline)
- Month 7-9: 80% of quota (full productivity ramping)
- Month 10+: 95-100% of quota (fully ramped)

---

## 5. Opportunity Stage Forecast

### Conversion Funnel

| Stage | # Opps | Total Value | Avg Deal | Conv Rate | Time in Stage | Weighted Value |
|-------|--------|-------------|----------|-----------|---------------|----------------|
| Discovery | 50 | $5M | $100K | 15% | 2 weeks | $750K |
| Demo | 20 | $2M | $100K | 40% | 2 weeks | $800K |
| Proposal | 12 | $1.2M | $100K | 60% | 2 weeks | $720K |
| Negotiation | 6 | $600K | $100K | 80% | 3 weeks | $480K |
| **Total** | **88** | **$8.8M** | | | | **$2.75M** |

### Time-Based Forecast

Using average sales cycle of 9 weeks:
- Deals in Discovery likely close in 9 weeks
- Deals in Negotiation likely close in 3 weeks

**This Month:** $480K (negotiation stage)
**Next Month:** $720K (proposal stage advancing)
**Month 3:** $800K (demo stage advancing)

---

## 6. Combined Forecast Model

### Multi-Method Approach

| Method | Q1 Forecast | Weight | Weighted Value |
|--------|-------------|--------|----------------|
| Weighted Pipeline | $1,350K | 40% | $540K |
| Historical Trend | $1,425K | 30% | $428K |
| Sales Capacity | $1,415K | 20% | $283K |
| Run Rate | $1,380K | 10% | $138K |
| **Blended Forecast** | | | **$1,389K** |

### Forecast Range

- **Conservative (P90):** $1,250K (90% confidence)
- **Expected (P50):** $1,389K (50% confidence)
- **Optimistic (P10):** $1,550K (10% confidence)

---

## 7. Forecast Accuracy Tracking

### Key Metrics

**Forecast Accuracy %**
```
Accuracy = (Actual Revenue / Forecasted Revenue) × 100
```

**Example:**
- Forecasted: $1,389K
- Actual: $1,420K
- Accuracy: 102% (2% over)

**Target Accuracy:** 95-105%

### Accuracy by Category

| Category | Forecasted | Actual | Accuracy | Notes |
|----------|------------|--------|----------|-------|
| Commit | $500K | $475K | 95% | One deal slipped |
| Best Case | $350K | $380K | 109% | Two upside deals |
| Pipeline | $200K | $150K | 75% | Early stages |

### Tracking Over Time

| Month | Forecast | Actual | Accuracy | Variance | Trend |
|-------|----------|--------|----------|----------|-------|
| Jan | $850K | $830K | 98% | -$20K | Improving |
| Feb | $920K | $945K | 103% | +$25K | Good |
| Mar | $1,100K | $1,080K | 98% | -$20K | Consistent |
| Apr | $950K | $975K | 103% | +$25K | Good |

**YTD Accuracy:** 100.5% (within 1%)

---

## 8. Pipeline Coverage Requirements

### Coverage Ratio Formula
```
Coverage Ratio = Total Pipeline Value / Target Revenue
```

### Required Coverage by Stage

| Stage | Typical Conversion | Required Coverage |
|-------|-------------------|-------------------|
| Discovery | 10% | 10x |
| Demo | 20% | 5x |
| Proposal | 33% | 3x |
| Negotiation | 67% | 1.5x |

### Example Coverage Analysis

**Target:** $1M in Q1

| Stage | Pipeline Value | Coverage Ratio | Status |
|-------|---------------|----------------|--------|
| Discovery+ | $12M | 12x | ✅ Healthy |
| Demo+ | $5.5M | 5.5x | ✅ Healthy |
| Proposal+ | $2.8M | 2.8x | ⚠️ Below target |
| Negotiation+ | $1.2M | 1.2x | ⚠️ Below target |

**Action:** Need more deals in late stages

---

## 9. Deal Inspection Criteria

### High-Risk Deal Signals

**Automatic Flags:**
- Deal amount >20% of quota
- Discount >20%
- Close date changed >2 times
- No activity in 14+ days
- Missing required fields
- No executive contact
- Unusually short sales cycle

### Deal Review Questions

**For Commit Category Deals:**
1. Have you spoken to legal/procurement?
2. Is the contract out for signature?
3. What could prevent this from closing?
4. When was your last contact with economic buyer?
5. Are there any approval steps remaining?

**For Best Case Deals:**
1. Is budget confirmed?
2. Have you met the economic buyer?
3. What's the competition?
4. What's the decision timeline?
5. What could cause this to slip?

---

## 10. Forecast Submission Process

### Weekly Forecast Cadence

**Monday:**
- Reps update opportunities in CRM
- Categorize deals (Commit/Best Case/Pipeline)
- Update close dates and amounts

**Tuesday:**
- Managers review rep forecasts
- 1:1 deal reviews
- Commit vs. pipeline reconciliation

**Wednesday:**
- Regional leaders consolidate
- Submit to VP Sales
- Identify gaps to target

**Thursday:**
- Executive forecast review
- Board/investor reporting
- Action planning for gaps

### Forecast Call Template

**Agenda:**
1. Prior forecast vs. actual review (10 min)
2. Current period forecast (20 min)
   - Commit deals
   - Best case deals
   - Pipeline deals
3. Pipeline health (15 min)
   - Coverage analysis
   - Aged opportunities
   - New pipeline created
4. Risks and opportunities (10 min)
5. Actions and next steps (5 min)

---

## 11. Forecast Scenarios

### Sensitivity Analysis

**Best Case (+20%):** $1,667K
- All commit deals close
- 50% of best case deals close
- Early close of 2 large deals

**Expected Case:** $1,389K
- 95% of commit deals close
- 30% of best case deals close
- Standard close pattern

**Worst Case (-20%):** $1,111K
- 80% of commit deals close
- No best case deals close
- 2 deals slip to next quarter

### Risk-Adjusted Forecast

| Scenario | Probability | Revenue | Weighted |
|----------|-------------|---------|----------|
| Best Case | 20% | $1,667K | $333K |
| Expected | 60% | $1,389K | $833K |
| Worst Case | 20% | $1,111K | $222K |
| **Probability-Weighted** | | | **$1,388K** |

---

## 12. Reporting Templates

### Executive Summary

```
Q1 2024 Forecast Summary
--------------------------------------------------
Target:           $1,500K
Forecast:         $1,389K (93% to target)
Gap:              -$111K (-7%)
Coverage:         3.2x (4.8M pipeline)

Category Breakdown:
  Commit:         $540K (36%)
  Best Case:      $428K (29%)
  Pipeline:       $421K (28%)
  Upside:         $100K (7%)

Key Risks:
  - Two large deals ($200K) at legal review
  - Pipeline coverage below 3x in late stages
  - 5 deals aged >60 days

Actions:
  - Manager approval required for commit deals
  - Weekly pipeline generation focused on proposal+
  - Deal acceleration program for aged opps
```

### Rep-Level Forecast

```
Sales Rep: John Smith
Quota: $150K | Forecast: $165K (110%)
--------------------------------------------------

Commit Deals:
  - Acme Corp: $80K (Negotiation, 95%)
  - Beta Inc: $35K (Proposal, 90%)
  Total: $115K

Best Case Deals:
  - Gamma LLC: $50K (Demo, 70%)
  Total: $50K

At-Risk Deals:
  - Delta Co: $40K (No activity 21 days)

New Pipeline Needed: $0 (over quota)
```

---

## Best Practices

1. **Consistent Definitions:** Align on commit/best case/pipeline criteria
2. **Regular Cadence:** Weekly forecast updates, no exceptions
3. **Deal Inspection:** Review all large deals and commit category
4. **Track Accuracy:** Measure and improve forecast accuracy
5. **Use Multiple Methods:** Don't rely on one forecasting approach
6. **Risk Adjustment:** Account for deal risks and slippage
7. **Pipeline Generation:** Forecast future pipeline needs
8. **Transparent Communication:** Share assumptions and risks
9. **Hold Accountable:** Consequences for sandbagging or over-committing
10. **Continuous Improvement:** Review what worked/didn't work each period
