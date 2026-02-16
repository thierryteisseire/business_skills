# Goals & KPIs Skill

[![npm version](https://badge.fury.io/js/@thierryteisseire%2Fgoals-and-kpis.svg)](https://www.npmjs.com/package/@thierryteisseire/goals-and-kpis)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A strategic AI-powered skill for defining, cascading, measuring, and reviewing business goals and KPIs.

**NEW in v1.3:** Now features a **discovery-first, consultative approach** — asks qualifying questions to understand your context before recommending frameworks. Plus optimized for **companies of all sizes** — from 5-person startups to 5,000-person enterprises — with quick-start guides, before/after examples, case studies, and tool integrations.

## Quick Start

### Installation

**Via skills CLI (Recommended):**

```bash
npx skills add thierryteisseire/business_skills --skill goals-and-kpis -y -g
```

Or use the shorthand:

```bash
npx skills add thierryteisseire/business_skills/skills/goals-and-kpis -y
```

**Or via one-line install:**

```bash
curl -fsSL https://raw.githubusercontent.com/thierryteisseire/business_skills/main/install-skill.sh | bash -s goals-and-kpis
```

**Or via npm:**

```bash
npm install -g @thierryteisseire/goals-and-kpis
```

### Usage

```bash
# In Claude Code
/goals-and-kpis
```

## Overview

This skill focuses on the **goal-setting and measurement discipline** that every business function needs. While the companion *Sales Operations Setup* skill covers sales infrastructure end-to-end, this skill zooms in on:

- **Choosing the right goal framework** (OKR, SMART, BSC, V2MOM, 4DX, EOS Rocks, Goal Map)
- **Quick-start for small companies** (5-50 people) — 30-minute setup with simple OKRs
- **Designing KPIs** with formulas, targets, and RAG thresholds
- **Building a Goal Map** — aligning Purpose, BIG Goals, Measurable Goals, Risks, and Assumptions across every function
- **Creating a Metrics Map** — an operational KPI registry with targets, data sources, and measurement frequencies
- **Cascading goals** from company → department → team → individual
- **Building dashboards** that drive action (with tool integrations for Google Sheets, Notion, Asana, Tableau, etc.)
- **Running review cadences** that keep goals alive
- **Learning from mistakes** — 20+ anti-pattern examples with before/after fixes
- **Real-world case studies** — 3 stories showing successes and failures
- **Diagnosing** why goals aren't being met

## What's Included

### Core Skill
- **SKILL.md** — Main skill prompt with comprehensive goal-setting and KPI guidance

### Reference Materials
- **discovery-questions.md** ⭐ **NEW in v1.3** — 50+ discovery questions, decision trees, and red flags for consultative goal-setting. Use this FIRST before prescribing solutions.
- **small-company-quick-start.md** ⭐ **NEW in v1.1** — Complete guide for 5-50 person companies: Simple OKRs, 30-min setup, 15-min check-ins, Google Sheets templates, real examples
- **okr-anti-patterns.md** ⭐ **NEW** — 20+ before/after examples showing common mistakes (vague objectives, activity KRs, too many goals) and how to fix them
- **case-studies.md** ⭐ **NEW** — 3 real-world stories: 18-person startup OKR success, 75-person cascade alignment, 35-person agency failure→turnaround
- **tool-integrations.md** ⭐ **NEW** — How to implement in Google Sheets, Notion, Asana, Lattice, Tableau, Metabase with templates and code examples
- **kpi-library.md** — 90+ KPIs across Sales, Marketing, Product, Technology, CS, Finance, and HR with formulas, targets, benchmarks, and owner suggestions
- **framework-comparison.md** — Side-by-side comparison of 7 goal-setting frameworks (incl. Goal Map) with decision matrix and hybrid approaches
- **leading-vs-lagging.md** — Deep reference on leading vs. lagging indicators — the most critical concept in KPI design

### Templates
- **okr-template.md** — Ready-to-use OKR templates at company, department, and individual levels with scoring guides
- **review-agendas.md** — Meeting agendas for weekly check-ins, monthly reviews, QBRs, annual offsites, 1:1s, L10 meetings, and retrospectives
- **goal-map.md** — Full Goal Map template (Functional View + Metrics Map) with per-function Purpose, BIG Goals, Measurable Goals, Key Questions, Critical Success Factors, Assumptions, Risks, and Mitigations

## Key Capabilities

### 1. Framework Selection
Choose the right approach for your organisation:

| Framework | Best For |
|-----------|----------|
| **OKR** | High-growth tech companies |
| **SMART** | Traditional orgs, individual development |
| **Balanced Scorecard** | Enterprise strategic alignment |
| **V2MOM** | Culture-driven, Salesforce ecosystem |
| **4DX** | Operational teams, single critical goal |
| **EOS Rocks** | SMBs running the EOS operating system |
| **Goal Map** | Cross-functional strategic alignment with Metrics Map |

### 2. KPI Libraries
Pre-built KPI sets for every function:
- 📈 **Sales** — ACV bookings, pipeline health, funnel conversion, forecast variance, CAC, LTV
- 📣 **Marketing** — MGLs, CPL, full-funnel conversion (MGL → SAL → Pipeline → C/W), media impressions, social reach
- 🛠️ **Product** — Feature throughput, delivered capacity, RONP, roadmap execution, usage/adoption
- ⚙️ **Technology** — Uptime (SLA + internal), system performance (ms), incidents by severity, defect SLA, First Time Right
- 🤝 **Customer Success** — Revenue retention, customer count retention, LCV, NPS, customer profitability, RYG trending
- 💰 **Finance** — MRR, revenue/expenses (plan/actual/forecast), DSO, cash generation, COGS, marginal cost
- 👥 **People / HR** — Engagement, attrition, time to hire, diversity

### 3. Goal Cascading
Align every level of the organisation:
```
Company Vision & Purpose
  └─ BIG Goals (aspirational, 2-3 year)
       └─ Annual Priorities
            └─ Measurable Goals per Function
                 └─ Quarterly OKRs (Department)
                      └─ Team OKRs
                           └─ Individual OKRs
```

### 4. Dashboard Blueprints
Design dashboards at every level:
- Executive / Board dashboards
- Department dashboards
- Individual / 1:1 dashboards
- With RAG thresholds and alert rules

### 5. Review Cadences
Build the operating rhythm:
- Weekly OKR check-ins (30 min)
- Monthly business reviews (60 min)
- Quarterly business reviews (90 min)
- Annual strategy offsites (half-day)
- 1:1 goal reviews (15 min module)
- L10 meetings (EOS format, 60 min)
- Retrospectives (45 min)

### 6. Scoring & Confidence
Quantify progress honestly:
- OKR scoring (0.0 – 1.0 scale)
- RAG confidence ratings (🟢🟡🔴)
- End-of-quarter grading guides

## Usage Examples

```
"Set Q2 OKRs for my 30-person B2B SaaS startup"
"Design a KPI dashboard for our marketing team"
"Help me cascade our $10M ARR goal into team objectives"
"Create a weekly goal check-in agenda for managers"
"Build a balanced scorecard for our company"
"What KPIs should our customer success team track?"
"Run a goal-setting workshop for our leadership offsite"
"Score our Q1 OKRs and recommend improvements"
"Define leading indicators for our revenue goal"
"Help me diagnose why our goals keep failing"
```

## How It Differs from Sales Operations Setup

| Topic | Goals & KPIs Skill | Sales Ops Skill |
|-------|-------------------|-----------------|
| **Focus** | Goal-setting & measurement discipline | Sales infrastructure & processes |
| **Scope** | All functions (Sales, Marketing, Product, Technology, CS, Finance, HR) | Sales-specific |
| **Frameworks** | OKR, SMART, BSC, V2MOM, 4DX, EOS, Goal Map | BANT, MEDDIC, CHAMP, pipeline stages |
| **KPIs** | Cross-functional KPI library (90+) | Sales metrics & KPIs (32+) |
| **Templates** | OKR templates, review agendas, Goal Map, Metrics Map | Forecasting models, pipeline stages |
| **Cadences** | Weekly → annual review rituals | Pipeline reviews, forecast cadence |

**Use together**: Sales Ops defines *how to run your sales engine*. Goals & KPIs defines *what to measure and how to track progress* across the entire company.

## Alternative Installation

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/thierryteisseire/business_skills.git

# Copy the skill
cp -r business_skills/skills/goals-and-kpis ~/.agents/skills/

# Create symlink
cd ~/.claude/skills
ln -s ../../.agents/skills/goals-and-kpis goals-and-kpis
```

### Verify Installation

```bash
ls -la ~/.claude/skills/goals-and-kpis
```

## Prerequisites

None required. This skill works with:
- Any goal-setting tool (Notion, Asana, Monday, Google Docs, etc.)
- Any BI / dashboard tool (Looker, Tableau, Power BI, etc.)
- Any CRM for sales KPI data
- Any company stage, size, or industry

## Getting Started

1. Invoke the skill: `/goals-and-kpis`
2. Describe your context (company, team, challenges)
3. Follow Claude's guidance to select a framework, draft goals, and design KPIs
4. Reference the included templates and KPI library as needed

## Who Should Use This Skill

✅ **Perfect For**:
- **Small companies (5-50 people)** wanting to start with simple OKRs → Use `small-company-quick-start.md`
- **Growing companies (50-200 people)** needing department alignment → Use full SKILL.md with 2-level cascade
- **Enterprise (200+ people)** requiring strategic alignment → Use Goal Map + OKR hybrid
- Companies implementing OKRs for the first time
- Leadership teams struggling with cross-functional alignment
- Strategy/Ops leaders building measurement systems
- Organizations with "set and forget" goal problems
- Teams learning from mistakes (see anti-patterns and case studies)

✅ **Now Also Great For**:
- ⭐ **5-20 person startups** (was previously "too much overhead" — now has simplified quick-start)
- ⭐ **First-time goal setters** (anti-patterns guide shows what NOT to do)
- ⭐ **Technical implementers** (tool-integrations.md has code examples)

❌ **Still Not Ideal For**:
- Individual contributors without goal-setting authority (too strategic)
- Teams needing tactical execution help rather than goal-setting frameworks

---

## What's New in v1.3

🎯 **Discovery-First, Consultative Approach:**

The skill now follows a consultative methodology — it asks qualifying questions to understand your context **before** recommending frameworks or prescribing OKRs. This ensures recommendations fit your organization's reality, culture, and constraints.

**Key changes:**
1. **New Discovery Framework** (`discovery-questions.md`)
   - 50+ discovery questions organized by category
   - Decision trees for framework selection
   - Red flags that predict failure
   - 15-20 minute discovery process

2. **Updated SKILL.md Behavior**
   - New section: "Consultative Approach: Discovery Before Prescription"
   - Three-phase workflow: Discovery → Recommendation → Implementation
   - Examples showing consultative vs prescriptive approach

3. **Why This Matters**
   - Reduces risk of implementing the wrong framework
   - Identifies cultural fit and readiness issues early
   - Builds trust through listening, not just prescribing
   - Differentiates from competing "template library" skills

**Example:**
- ❌ **v1.2 approach**: "Here are your OKRs..."
- ✅ **v1.3 approach**: "Let me understand your context first. Do you have goals today? What's prompting this now? How much time can you commit?"

This makes the skill more professional and strategic — positioning as a "consultative goal-setting consultant" rather than an "OKR template generator."

---

## What's New in v1.1

🎉 **Major enhancements for small companies:**

1. **Small Company Quick Start** (`small-company-quick-start.md`)
   - Complete guide for 5-50 person companies
   - 30-minute setup with simple OKRs
   - Decision tree for choosing frameworks
   - Minimum viable dashboard templates
   - Real examples from small companies

2. **OKR Anti-Patterns** (`okr-anti-patterns.md`)
   - 20+ before/after examples of bad OKRs
   - Common mistakes with detailed fixes
   - OKR writing checklist
   - Words to avoid vs. words to use
   - Practice exercises with answers

3. **Real-World Case Studies** (`case-studies.md`)
   - 18-person SaaS startup OKR success
   - 75-person company scaling challenge
   - 35-person agency failure and turnaround
   - What worked, what didn't, lessons learned

4. **Tool Integration Guide** (`tool-integrations.md`)
   - Google Sheets, Notion, Asana setup guides
   - Metabase, Tableau, Power BI dashboards
   - Slack integrations and automation
   - Code examples and templates
   - Budget-friendly options for startups

---

## Support

### Links

- 📦 **npm Package**: [@thierryteisseire/goals-and-kpis](https://www.npmjs.com/package/@thierryteisseire/goals-and-kpis)
- 🐙 **GitHub Repository**: [business_skills](https://github.com/thierryteisseire/business_skills)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/thierryteisseire/business_skills/issues)

---

**Version:** 1.3.0
**Author:** Thierry Teisseire
**License:** MIT
