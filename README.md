# Business Skills Catalogue

A curated collection of AI-powered business skills for Claude Code, focused on sales, marketing, operations, and business development.

## Overview

This repository contains professionally designed skills that help automate and optimize business operations. Each skill provides comprehensive frameworks, templates, and best practices for specific business functions.

## Available Skills

### 🎯 Goals & KPIs

**Location:** [`skills/goals-and-kpis`](skills/goals-and-kpis)
**npm:** [@thierryteisseire/goals-and-kpis](https://www.npmjs.com/package/@thierryteisseire/goals-and-kpis)

Strategic goal-setting and KPI design assistant covering:

- **Goal Frameworks** - OKR, SMART, Balanced Scorecard, V2MOM, 4DX, EOS Rocks, Goal Map
- **Quick Start Guides** - Optimized for companies 5-50 people with 30-min setup
- **KPI Libraries** - 90+ KPIs across Sales, Marketing, Product, CS, Finance, HR, Tech
- **Goal Cascading** - Company → department → team → individual alignment
- **Dashboard Design** - Dashboard blueprints with RAG thresholds
- **Review Cadences** - 7 meeting types with agendas and templates
- **Anti-Patterns** - 20+ before/after examples of common mistakes
- **Case Studies** - 3 real-world implementation stories
- **Tool Integrations** - Google Sheets, Notion, Asana, Tableau, etc.

**Key Features:**
- ✅ 7 proven goal-setting frameworks
- ✅ Small company quick-start (30-min setup)
- ✅ Comprehensive KPI libraries with formulas
- ✅ Goal Map & Metrics Map templates
- ✅ Real-world case studies and anti-patterns
- ✅ Works with any tool (Notion, Asana, Sheets, etc.)

**Usage:**
```
/goals-and-kpis
```

**Documentation:** [View README](skills/goals-and-kpis/README.md)

---

### 💼 Sales Operations Setup

**Location:** [`skills/sales-operations-setup`](skills/sales-operations-setup)
**npm:** [@thierryteisseire/sales-operations-setup](https://www.npmjs.com/package/@thierryteisseire/sales-operations-setup)

A comprehensive end-to-end sales operations framework covering:

- **Lead Management** - Scoring models (BANT, MEDDIC, CHAMP), pipeline stages, routing rules
- **Revenue Forecasting** - Multi-method forecasting, accuracy tracking, coverage analysis
- **Sales Enablement** - Playbooks, training programs, content management
- **Data & Analytics** - 32+ KPIs, dashboards, performance tracking
- **Process Optimization** - Workflow automation, bottleneck identification
- **Technology Stack** - CRM configuration, tool selection, integration
- **Team Building** - Hiring, onboarding, coaching, performance management

**Key Features:**
- ✅ Proven frameworks from leading SaaS companies
- ✅ Actionable templates and examples
- ✅ Works with any CRM (Salesforce, HubSpot, etc.)
- ✅ Suitable for startups to enterprises
- ✅ Comprehensive reference materials

**Usage:**
```
/sales-operations-setup
```

**Documentation:** [View README](skills/sales-operations-setup/README.md)

---

## Installation

### Via skills CLI (Recommended)

Install any skill using the [skills.sh](https://skills.sh/) CLI:

```bash
# Goals & KPIs skill
npx skills add thierryteisseire/business_skills --skill goals-and-kpis -y -g

# Sales Operations Setup skill
npx skills add thierryteisseire/business_skills --skill sales-operations-setup -y -g
```

### One-Line Install

```bash
# Using curl
curl -fsSL https://raw.githubusercontent.com/thierryteisseire/business_skills/main/install-skill.sh | bash -s goals-and-kpis

# Or using wget
wget -qO- https://raw.githubusercontent.com/thierryteisseire/business_skills/main/install-skill.sh | bash -s goals-and-kpis
```

### npm Package

```bash
# Goals & KPIs
npm install -g @thierryteisseire/goals-and-kpis

# Sales Operations Setup
npm install -g @thierryteisseire/sales-operations-setup
```

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/thierryteisseire/business_skills.git
cd business_skills

# Run the installer
cd skills/sales-operations-setup
bash install.sh
```

### Manual Copy (Advanced)

```bash
# Create skills directory if it doesn't exist
mkdir -p ~/.agents/skills

# Copy the skill
cp -r skills/sales-operations-setup ~/.agents/skills/

# Create symlink in Claude's skills directory
cd ~/.claude/skills
ln -s ../../.agents/skills/sales-operations-setup sales-operations-setup
```

## Skill Structure

Each skill follows a standard structure:

```
skill-name/
├── SKILL.md                 # Main skill prompt and instructions
├── README.md                # Skill documentation
├── references/              # Reference materials and frameworks
│   └── *.md
├── templates/               # Reusable templates
│   └── *.md
└── examples/                # Example implementations
    └── *.md
```

## How to Use

1. **Install the skill** using one of the methods above
2. **Invoke the skill** in Claude Code:
   - Use the slash command: `/skill-name`
   - Or use the Skill tool programmatically
3. **Follow the prompts** to implement the framework for your needs
4. **Reference materials** are available in the skill's subdirectories

## Contributing

Contributions are welcome! To add a new skill:

1. Fork this repository
2. Create a new skill directory under `skills/`
3. Follow the standard skill structure
4. Include comprehensive documentation
5. Submit a pull request

## Skill Categories

### 📈 Sales & Revenue Operations
- Sales Operations Setup - Complete sales ops framework

### 🎯 Marketing (Coming Soon)
- Marketing Operations
- Lead Generation
- Marketing Attribution

### 💼 Business Operations (Coming Soon)
- Revenue Operations (RevOps)
- Customer Success Operations
- Financial Planning & Analysis

### 🤝 Customer Success (Coming Soon)
- Customer Onboarding
- Retention & Expansion
- Health Score Management

## Best Practices

When using these skills:

- **Provide Context**: Share details about your business model, team size, and goals
- **Be Specific**: Describe your current state and desired outcomes
- **Iterate**: Review outputs and refine based on feedback
- **Customize**: Adapt templates to your specific needs
- **Share Feedback**: Help improve the skills by sharing what works

## License

MIT License - See individual skills for specific licensing information.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contribute improvements via pull requests

## Roadmap

Upcoming skills:
- [ ] Marketing Operations Setup
- [ ] Revenue Operations Framework
- [ ] Customer Success Playbook
- [ ] Financial Planning & Analysis
- [ ] Product Operations
- [ ] Go-to-Market Strategy

## About

This catalogue is maintained by [Thierry Teisseire](https://github.com/thierryteisseire) and built for use with [Claude Code](https://claude.ai/code).

---

**Last Updated:** February 2026
**Skills Count:** 2
**Available on:** [skills.sh](https://skills.sh/)
