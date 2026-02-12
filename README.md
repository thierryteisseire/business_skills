# Business Skills Catalogue

A curated collection of AI-powered business skills for Claude Code, focused on sales, marketing, operations, and business development.

## Overview

This repository contains professionally designed skills that help automate and optimize business operations. Each skill provides comprehensive frameworks, templates, and best practices for specific business functions.

## Available Skills

### 🎯 Sales Operations Setup

**Location:** [`skills/sales-operations-setup`](skills/sales-operations-setup)

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

### Option 1: Clone the Repository

```bash
git clone https://github.com/thierryteisseire/business_skills.git
cd business_skills
```

### Option 2: Install Individual Skills

To install a skill in Claude Code:

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
**Skills Count:** 1
**Total Framework Pages:** 6
