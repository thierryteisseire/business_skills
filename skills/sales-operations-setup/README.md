# Sales Operations Setup Skill

[![npm version](https://badge.fury.io/js/@thierryteisseire%2Fsales-operations-setup.svg)](https://www.npmjs.com/package/@thierryteisseire/sales-operations-setup)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive AI-powered skill for setting up, optimizing, and scaling sales operations.

## Quick Start

### Installation

Install via npm (recommended):

```bash
npm install -g @thierryteisseire/sales-operations-setup
```

The skill will automatically install to your Claude Code skills directory.

### Usage

```bash
# In Claude Code
/sales-operations-setup
```

## Overview

This skill provides end-to-end guidance for building world-class sales operations infrastructure. Whether you're starting from scratch or optimizing existing processes, this skill helps you implement proven frameworks, metrics, and best practices.

## What's Included

### Core Skill
- **SKILL.md** - Main skill prompt with comprehensive sales operations guidance

### Reference Materials
- **lead-scoring-frameworks.md** - BANT, MEDDIC, CHAMP, and behavioral scoring models
- **pipeline-stages.md** - Pipeline stage definitions for different sales models
- **sales-metrics-kpis.md** - 30+ critical sales metrics with formulas and benchmarks

### Templates
- **forecasting-model.md** - Multi-method forecasting templates and models

## Key Capabilities

### 1. Foundation Setup
- Sales operations strategy and charter
- Organizational structure and roles
- Governance and processes
- Technology stack planning

### 2. Lead Management
- Lead scoring models (BANT, MEDDIC, CHAMP)
- Pipeline stage definitions
- Lead routing and assignment
- Qualification frameworks

### 3. Revenue Forecasting
- Weighted pipeline forecasting
- Historical trend analysis
- Sales capacity planning
- Forecast accuracy tracking

### 4. Sales Enablement
- Sales playbooks and battlecards
- Training and onboarding programs
- Content library management
- Competitive intelligence

### 5. Metrics & Analytics
- KPI dashboard design
- Performance tracking
- Pipeline health monitoring
- Win/loss analysis

### 6. Process Optimization
- Sales process mapping
- Bottleneck identification
- Workflow automation
- Territory planning

### 7. Technology Implementation
- CRM configuration
- Sales engagement platforms
- Analytics and reporting tools
- Integration architecture

### 8. Team Building
- Team structure design
- Hiring and onboarding
- Coaching frameworks
- Performance management

## Usage Examples

### Setting Up Lead Management
```
"I need to set up a lead management system for our B2B SaaS company with a 90-day sales cycle"
```

Claude will create:
- Lead scoring criteria
- Pipeline stage definitions
- Lead routing rules
- SLAs and processes
- Metrics and dashboards

### Building a Forecasting Model
```
"Help me create an accurate revenue forecasting model for our enterprise sales team"
```

Claude will deliver:
- Forecasting methodology recommendations
- Stage-based probability weightings
- Forecast accuracy tracking
- Pipeline coverage requirements
- Deal inspection processes

### CRM Configuration
```
"Guide me through configuring Salesforce for our sales team"
```

Claude will provide:
- Custom objects and fields design
- Pipeline stages and opportunity types
- Automated workflows
- Reports and dashboards
- Data governance policies

### Sales Playbook Creation
```
"Create a comprehensive sales playbook for our new product launch"
```

Claude will generate:
- Product positioning and messaging
- Customer personas
- Discovery question frameworks
- Demo flows and objection handling
- Competitive battlecards
- ROI calculators

## When to Use This Skill

Use this skill when you need to:

- ✅ Set up sales operations from scratch
- ✅ Scale from startup to enterprise
- ✅ Fix underperforming sales processes
- ✅ Implement new sales tools (CRM, forecasting, etc.)
- ✅ Build sales playbooks and enablement materials
- ✅ Design metrics and dashboards
- ✅ Create forecasting models
- ✅ Optimize pipeline management
- ✅ Automate sales workflows
- ✅ Train and onboard sales teams

## Frameworks Included

### Lead Qualification
- BANT (Budget, Authority, Need, Timeline)
- MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion)
- CHAMP (Challenges, Authority, Money, Prioritization)
- GPCT (Goals, Plans, Challenges, Timeline)

### Sales Methodologies
- Challenger Sale
- SPIN Selling
- Sandler
- Solution Selling
- Account-Based Selling

### Forecasting Methods
- Weighted pipeline
- Historical trend analysis
- Run rate projections
- Sales capacity modeling
- Multi-method blending

### Key Metrics
- Pipeline coverage and velocity
- Conversion rates by stage
- Win/loss rates
- CAC, LTV, and Magic Number
- Forecast accuracy
- Quota attainment

## Sample Deliverables

The skill can generate:

- 📊 Sales operations strategy documents
- 📈 Forecasting models and templates
- 📋 Pipeline stage definitions
- 🎯 Lead scoring rubrics
- 📚 Sales playbooks and battlecards
- 📊 KPI dashboards and reports
- 🔄 Process flow diagrams
- 📖 Training materials and onboarding guides
- 💼 CRM configuration guides
- 📝 Performance review templates
- 💰 Compensation plan structures

## Implementation Approach

The skill follows a phased approach:

### Phase 1: Foundation (Weeks 1-4)
- Define vision and objectives
- Assess current state
- Establish core metrics
- Identify quick wins

### Phase 2: Core Systems (Weeks 5-12)
- Implement CRM and technology
- Design pipeline management
- Create forecasting framework
- Build reporting infrastructure

### Phase 3: Enablement (Weeks 13-20)
- Develop sales playbooks
- Create training programs
- Build content library
- Launch coaching framework

### Phase 4: Optimization (Weeks 21+)
- Implement automation
- Refine processes
- Scale successful initiatives
- Continuous improvement

## Best Practices

- 🎯 **Process Before Technology** - Design processes first, then select tools
- 📊 **Data-Driven Decisions** - Use metrics to guide strategy
- 🔄 **Continuous Improvement** - Regular review and optimization
- 🤝 **Sales-Marketing Alignment** - Define clear handoffs and SLAs
- 📈 **Scalable Frameworks** - Build systems that grow with your business
- 📝 **Documentation** - Maintain clear, accessible processes
- 🎓 **Training & Enablement** - Invest in team development
- 💡 **Customer-Centric** - Design around customer journey

## Alternative Installation Methods

### Manual Installation

If you prefer to install manually:

```bash
# Clone the repository
git clone https://github.com/thierryteisseire/business_skills.git

# Copy the skill
cp -r business_skills/skills/sales-operations-setup ~/.agents/skills/

# Create symlink
cd ~/.claude/skills
ln -s ../../.agents/skills/sales-operations-setup sales-operations-setup
```

### Verify Installation

```bash
# Check if skill is installed
ls -la ~/.claude/skills/sales-operations-setup

# You should see the skill directory and contents
```

## Prerequisites

None required. This skill works with:

- Any CRM system (Salesforce, HubSpot, etc.)
- Any sales model (B2B, B2C, SaaS, Enterprise)
- Any company stage (startup to enterprise)
- Any industry vertical

## Getting Started

1. Invoke the skill: `/sales-operations-setup` or use the Skill tool
2. Describe your current state and objectives
3. Follow Claude's guidance to implement your sales operations framework
4. Reference the included templates and frameworks as needed

## Tips for Best Results

- **Be Specific**: Describe your business model, sales process, and challenges in detail
- **Provide Context**: Share relevant information about your team, tools, and customers
- **Ask Follow-ups**: Request deeper dives on specific topics
- **Iterate**: Review outputs and refine based on feedback
- **Request Examples**: Ask for specific templates or examples for your use case

## Support

This skill is based on proven sales operations frameworks from leading SaaS companies, industry research, and best practices. The guidance provided is designed to be actionable, practical, and tailored to your specific needs.

### Links

- 📦 **npm Package**: [@thierryteisseire/sales-operations-setup](https://www.npmjs.com/package/@thierryteisseire/sales-operations-setup)
- 🐙 **GitHub Repository**: [business_skills](https://github.com/thierryteisseire/business_skills)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/thierryteisseire/business_skills/issues)

---

**Version:** 1.0.0
**Author:** Thierry Teisseire
**License:** MIT
