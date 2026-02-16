# Changelog

All notable changes to the Goals & KPIs skill will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.1] - 2026-02-16

### Changed
- Updated installation documentation with cleaner `--skill` flag format
- Added skills.sh integration and visibility information
- Improved installation commands with `-y -g` flags for automated setup
- Enhanced README with skills.sh references and links

### Fixed
- Updated README and SKILL.md metadata with correct version strings
- Fixed installation command documentation in README.md

## [1.2.0] - 2026-02-16

### Changed
- Renamed **Success Map** framework to **Goal Map** throughout the skill
- Renamed `success-map.md` template to `goal-map.md`
- Renamed associated data files to `goal-map-data.json`, `goal-map.csv`, and `goal-map.xlsx`
- Updated all reference materials and guides to reflect the new terminology

## [1.1.0] - 2026-02-16

### Added — Small Company Optimization

#### New Reference Guides

- **`small-company-quick-start.md`** — Complete guide for 5-50 person companies
  - Simple OKR templates (company-level only, no cascade)
  - 30-minute setup guide with Google Sheets
  - 15-minute weekly check-in format
  - Framework decision tree for small companies
  - Stage-specific guidance (pre-PMF vs. post-PMF vs. scaling)
  - Minimum viable dashboard templates
  - Budget-friendly tool recommendations ($0-$500/month)
  - 3 complete OKR examples from small companies
  - Common mistakes small companies make
  - Graduation path (when to add complexity)

- **`okr-anti-patterns.md`** — Learn from common mistakes
  - 10 most common OKR mistakes with before/after examples
  - Detailed rewrites showing how to fix bad OKRs
  - Complete company OKR set (bad vs. good comparison)
  - OKR writing checklist (objectives and key results)
  - Words to avoid vs. words to use
  - 3 practice exercises with answers
  - When it's okay to break the rules
  - 20+ examples total

- **`case-studies.md`** — Real-world stories (anonymized)
  - **Case 1:** 18-person SaaS startup implements OKRs (from chaos to clarity)
    - What worked: Weekly check-ins, team alignment, scoring 0.76
    - What didn't work: Overly ambitious targets, skipping meetings, definition issues
  - **Case 2:** 75-person company struggles with goal cascade (the scaling challenge)
    - 3-level cascade design (company → department → team)
    - Cross-functional review process
    - RACI matrix for shared KRs
    - Scoring improvement: 0.78 → 0.86 over 2 quarters
  - **Case 3:** 35-person agency's OKR disaster and turnaround (when goals fail)
    - Top-down failure (scored 0.15)
    - Recovery through team co-creation
    - Single-focus approach (one objective, 6-month horizon)
    - Turnaround: 0.15 → 0.72 → 0.91

- **`tool-integrations.md`** — How to implement in your tech stack
  - **Google Sheets:** Free templates with formulas and conditional formatting
  - **Notion:** Database setup with properties, views, and weekly check-in template
  - **Asana:** Goals feature setup with automation
  - **Lattice / 15Five:** Purpose-built OKR platforms for 50-500 people
  - **Metabase:** Open-source BI tool setup with SQL examples
  - **Tableau / Power BI:** Enterprise BI dashboard blueprints
  - **Slack integrations:** Weekly check-in bot examples (Zapier + custom code)
  - **CRM integrations:** Salesforce → OKR data pipelines
  - Decision matrix by company size and budget
  - Integration patterns (OKRs in Notion + KPIs in BI tool)
  - Implementation roadmap (4-week plan)

### Enhanced — Existing Content

- **SKILL.md**
  - Added "Quick Start by Company Size" section at the top
  - New resources table linking all guides
  - Enhanced anti-patterns section with reference to detailed examples
  - Version updated to 1.1

- **skill.json**
  - Updated version to 1.1.0
  - Expanded description to mention small company optimization
  - Added 4 new reference files
  - Enhanced features list (now 13 features vs. 10)

- **README.md**
  - Highlighted small company optimization in intro
  - Added detailed "What's Included" with new resources
  - Added "Who Should Use This Skill" section
  - Added "What's New in v1.1" section
  - Updated version to 1.1.0

- **package.json**
  - Updated version to 1.1.0
  - Expanded description

### Improved — Developer Experience

- **CHANGELOG.md** — This file! Version history tracking
- More examples across all guides (30+ new examples)
- Better navigation (clear signposting by company size)
- Code examples for technical implementers
- Budget-conscious recommendations for startups

### Documentation

- Total new content: **~15,000 words** across 4 new reference files
- 20+ before/after OKR examples
- 3 detailed case studies with retrospectives
- 10+ tool integration guides with code/templates
- Decision trees and flowcharts for framework selection

---

## [1.0.0] - 2026-01-XX

### Initial Release

#### Core Framework
- 7 goal-setting frameworks (OKR, SMART, BSC, V2MOM, 4DX, EOS Rocks, Goal Map)
- Goal Map with Functional View (9 strategic rows per function)
- Metrics Map (operational KPI registry)
- Goal cascade design (company → department → team → individual)

#### Reference Materials
- **kpi-library.md** — 90+ KPIs across Sales, Marketing, Product, CS, Finance, HR, Technology
  - Tier 1/2/3 prioritization
  - Formulas, targets, benchmarks
  - Data source and owner recommendations

- **framework-comparison.md** — Side-by-side comparison of 7 frameworks
  - Quick decision matrix
  - Deep dives per framework
  - Hybrid approaches
  - Framework selection checklist

- **leading-vs-lagging.md** — Critical KPI design concept
  - Core definitions and why it matters
  - Leading & lagging pairs by function
  - How to build leading indicators (5-step process)
  - Dashboard design principles
  - Input → Activity → Output → Outcome chain

#### Templates
- **okr-template.md** — Company, department, individual levels
- **review-agendas.md** — 7 meeting types (weekly, monthly, QBR, annual, 1:1, L10, retro)
- **goal-map.md** — Functional view + Metrics Map template

#### Features
- Dashboard blueprints with RAG thresholds
- Review cadences and rituals
- OKR scoring and confidence models (0.0-1.0 scale, RAG)
- Anti-pattern identification (8 common mistakes)
- Workshop facilitation plans

#### Installation
- npm package: `@thierryteisseire/goals-and-kpis`
- Dual installers (install.js + install.sh)
- One-line curl installer
- Automatic symlink setup

#### Documentation
- Comprehensive README with installation instructions
- Usage examples (10 commands)
- Comparison to Sales Operations Setup skill
- MIT License

---

## Future Roadmap (Under Consideration)

### v1.2 — Interactive Calculators
- Google Sheets calculator templates (CAC, LTV, NRR, etc.)
- KPI formula examples with sample data
- ROI calculators for sales/marketing

### v1.3 — Visual Enhancements
- Mermaid diagrams for goal cascades
- Dashboard mockups / wireframes
- Process flowcharts

### v1.4 — Industry-Specific Guides
- B2B SaaS playbook
- E-commerce KPIs and goals
- Services company OKRs
- Manufacturing / hardware OKRs

### v1.5 — Advanced Analytics
- Cohort analysis templates
- Trend forecasting models
- Anomaly detection patterns

---

## Contributing

If you have suggestions for improvements, case studies to share, or new frameworks to add, please:
1. Open an issue: https://github.com/thierryteisseire/business_skills/issues
2. Describe your use case and the gap you see
3. We'll review and consider for future versions

---

## Support

- 📦 npm: [@thierryteisseire/goals-and-kpis](https://www.npmjs.com/package/@thierryteisseire/goals-and-kpis)
- 🐙 GitHub: [business_skills](https://github.com/thierryteisseire/business_skills)
- 🐛 Issues: [Report a bug](https://github.com/thierryteisseire/business_skills/issues)

---

**Maintained by:** Thierry Teisseire
**License:** MIT
